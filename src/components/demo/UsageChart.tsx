type UsageChartProps = {
  data: number[];
  delta: string;
  height?: number;
};

export function UsageChart({ data, delta, height = 132 }: Readonly<UsageChartProps>) {
  const width = 320;
  const padding = 12;
  const innerWidth = width - padding * 2;
  const innerHeight = height - padding * 2;
  const stepX = data.length > 1 ? innerWidth / (data.length - 1) : 0;
  const maxValue = Math.max(...data, 100);
  const minValue = Math.min(...data, 0);
  const range = Math.max(maxValue - minValue, 1);

  const points = data.map((value, idx) => {
    const x = padding + stepX * idx;
    const y = padding + innerHeight - ((value - minValue) / range) * innerHeight;
    return { x, y, value };
  });

  const path = points
    .map((point, idx) => `${idx === 0 ? "M" : "L"} ${point.x.toFixed(1)} ${point.y.toFixed(1)}`)
    .join(" ");
  const areaPath = `${path} L ${points[points.length - 1].x.toFixed(1)} ${(padding + innerHeight).toFixed(1)} L ${points[0].x.toFixed(1)} ${(padding + innerHeight).toFixed(1)} Z`;

  const trendDown = data[data.length - 1] < data[0];
  const trendColor = trendDown ? "#FF6B35" : "#0F4C5C";

  return (
    <figure className="relative w-full rounded-xl border border-cream-deep bg-cream-soft p-4">
      <div className="flex items-center justify-between text-xs text-midnight/55">
        <span className="font-semibold uppercase tracking-widest text-[10px]">
          Usage 30 jours, sessions hebdo
        </span>
        <span className={trendDown ? "font-semibold text-orange-deep" : "font-semibold text-teal"}>
          {delta}
        </span>
      </div>
      <svg
        viewBox={`0 0 ${width} ${height}`}
        className="mt-2 w-full"
        role="img"
        aria-label={`Évolution de l'usage : ${delta}`}
      >
        <defs>
          <linearGradient id="usageGradient" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor={trendColor} stopOpacity="0.35" />
            <stop offset="100%" stopColor={trendColor} stopOpacity="0" />
          </linearGradient>
        </defs>
        {[0.25, 0.5, 0.75].map((ratio) => (
          <line
            key={ratio}
            x1={padding}
            y1={padding + innerHeight * ratio}
            x2={width - padding}
            y2={padding + innerHeight * ratio}
            stroke="#D9D2B7"
            strokeDasharray="3 4"
            strokeWidth={1}
          />
        ))}
        <path d={areaPath} fill="url(#usageGradient)" />
        <path d={path} fill="none" stroke={trendColor} strokeWidth={2} strokeLinecap="round" />
        {points.map((point) => (
          <circle
            key={`${point.x}-${point.y}`}
            cx={point.x}
            cy={point.y}
            r={3}
            fill="#F8F4E3"
            stroke={trendColor}
            strokeWidth={1.5}
          />
        ))}
      </svg>
      <figcaption className="mt-2 flex items-center justify-between text-[10px] text-midnight/50">
        <span>S-8</span>
        <span>S-4</span>
        <span>Aujourd&apos;hui</span>
      </figcaption>
    </figure>
  );
}
