type BrandIconProps = {
  className?: string;
  active?: boolean;
};

const ACTIVE_COLOR = "currentColor";

function Svg({
  children,
  className,
  viewBox = "0 0 24 24",
}: Readonly<{
  children: React.ReactNode;
  className?: string;
  viewBox?: string;
}>) {
  return (
    <svg
      viewBox={viewBox}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
    >
      {children}
    </svg>
  );
}

export function HubspotIcon({ className }: Readonly<BrandIconProps>) {
  return (
    <Svg className={className}>
      <title>HubSpot</title>
      <path
        fill={ACTIVE_COLOR}
        d="M18.164 7.93V5.084a2.198 2.198 0 001.267-1.978v-.067A2.2 2.2 0 0017.238.845h-.067a2.2 2.2 0 00-2.193 2.193v.067a2.196 2.196 0 001.252 1.973l.013.006v2.852a6.22 6.22 0 00-2.969 1.31l.012-.01-7.828-6.095A2.497 2.497 0 104.3 4.656l-.012.006 7.697 5.991a6.176 6.176 0 00-1.038 3.446c0 1.343.425 2.588 1.147 3.607l-.013-.02-2.342 2.343a1.968 1.968 0 00-.58-.095h-.002a2.033 2.033 0 102.033 2.033 1.978 1.978 0 00-.1-.595l.005.014 2.317-2.317a6.247 6.247 0 104.782-11.134l-.036-.005zm-.964 9.378a3.206 3.206 0 113.215-3.207v.002a3.206 3.206 0 01-3.207 3.207z"
      />
    </Svg>
  );
}

export function MixpanelIcon({ className }: Readonly<BrandIconProps>) {
  return (
    <Svg className={className}>
      <title>Mixpanel</title>
      <path
        fill={ACTIVE_COLOR}
        d="M6.967 9.996h3.053c-.763-.477-1.048-1.145-1.431-2.384L7.443 3.366C6.919 1.458 6.49.551 4.39.551H.004v1.145h.621c1.286 0 1.431.477 1.814 1.908L3.44 7.326c.524 1.814 1.337 2.67 3.53 2.67h-.003Zm7.06 0h3.053c2.194 0 2.956-.86 3.484-2.67l1.001-3.722c.382-1.431.57-1.908 1.814-1.908H24V.551h-4.34c-2.146 0-2.576.86-3.053 2.815l-1.145 4.246c-.384 1.286-.673 1.907-1.435 2.384Zm-4.007 4.008h4.007V9.996H10.02v4.008ZM0 23.449h4.39c2.1 0 2.529-.907 3.053-2.815l1.146-4.246c.383-1.239.668-1.907 1.431-2.384H6.967c-2.194 0-3.007.86-3.531 2.67l-1.001 3.722c-.383 1.431-.524 1.907-1.814 1.907H0v1.146Zm19.65 0h4.343v-1.146h-.622c-1.239 0-1.431-.476-1.814-1.907l-1.001-3.722c-.524-1.814-1.286-2.67-3.483-2.67h-3.046c.762.477 1.041 1.098 1.424 2.384l1.145 4.246c.477 1.955.907 2.815 3.054 2.815Z"
      />
    </Svg>
  );
}

export function StripeIcon({ className }: Readonly<BrandIconProps>) {
  return (
    <Svg className={className}>
      <title>Stripe</title>
      <path
        fill={ACTIVE_COLOR}
        d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0 9.667 0 7.589.654 6.104 1.872 4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219 2.585.92 3.445 1.574 3.445 2.583 0 .98-.84 1.545-2.354 1.545-1.875 0-4.965-.921-6.99-2.109l-.9 5.555C5.175 22.99 8.385 24 11.714 24c2.641 0 4.843-.624 6.328-1.813 1.664-1.305 2.525-3.236 2.525-5.732 0-4.128-2.524-5.851-6.594-7.305h.003z"
      />
    </Svg>
  );
}

export function ZendeskIcon({ className }: Readonly<BrandIconProps>) {
  return (
    <Svg className={className}>
      <title>Zendesk</title>
      <path
        fill={ACTIVE_COLOR}
        d="M12.914 2.904V16.29L24 2.905H12.914zM0 2.906C0 5.966 2.483 8.45 5.543 8.45s5.542-2.484 5.543-5.544H0zm11.086 4.807L0 21.096h11.086V7.713zm7.37 7.84c-3.063 0-5.542 2.48-5.542 5.543H24c0-3.06-2.48-5.543-5.543-5.543z"
      />
    </Svg>
  );
}

export function SalesforceIcon({ className }: Readonly<BrandIconProps>) {
  return (
    <Svg className={className} viewBox="0 0 32 22">
      <title>Salesforce</title>
      <path
        fill={ACTIVE_COLOR}
        d="M13.32 2.4a5.6 5.6 0 0 1 4.05-1.74c2.13 0 3.99 1.19 4.98 2.95a6.8 6.8 0 0 1 2.79-.6c3.79 0 6.86 3.1 6.86 6.94 0 3.83-3.07 6.94-6.86 6.94-.46 0-.91-.05-1.34-.13a5.04 5.04 0 0 1-4.4 2.59c-.78 0-1.51-.18-2.17-.5a5.74 5.74 0 0 1-5.34 3.6c-2.36 0-4.4-1.42-5.29-3.46a5.27 5.27 0 0 1-1.1.11A5.5 5.5 0 0 1 0 13.65c0-2.06 1.14-3.84 2.83-4.78a6.31 6.31 0 0 1-.52-2.5C2.31 2.85 5.16 0 8.69 0c2.07 0 3.92 1.01 5.08 2.57"
      />
    </Svg>
  );
}

export function AmplitudeIcon({ className }: Readonly<BrandIconProps>) {
  return (
    <Svg className={className}>
      <title>Amplitude</title>
      <path
        fill={ACTIVE_COLOR}
        d="M11.6 4.2c-.4 0-.8.6-1.3 1.7-.6 1.4-1 2.9-1.4 4.3l-.4 1.5h6L13.5 9c-.4-1.3-.8-2.4-1.2-3.3-.4-1-.6-1.5-.7-1.5zM12 0c6.6 0 12 5.4 12 12s-5.4 12-12 12S0 18.6 0 12 5.4 0 12 0zm.6 3.4c1 0 1.8.7 2.7 3 .5 1.4 1.1 3.3 1.7 5.7h2.5c.4 0 .7.3.7.7 0 .3-.3.6-.7.6h-2.2c.6 2.5 1.1 4.5 1.5 5.7.2.5.3.7.4.7l.4-.4c.3-.4.6-.9.9-1.6.6-1.3 1-2.6 1.4-4 .1-.4.4-.6.7-.5.3.1.6.4.5.7-.4 1.5-.9 2.9-1.5 4.3-.7 1.5-1.5 2.5-2.4 2.5-1 0-1.8-.7-2.7-3-.5-1.4-1.1-3.3-1.7-5.7H8.2c-.4 1.6-1 3.2-1.7 4.7-.4.8-1 1.5-1.8 1.8-.5.2-1 .2-1.4-.2-.4-.4-.4-.9-.2-1.4.3-.7 1-1.3 1.8-1.7 1.5-.7 3.1-1.1 4.8-1.4l.4-1.4c.4-1.6.9-3.1 1.5-4.5C12.1 4.2 12.4 3.4 12.6 3.4z"
      />
    </Svg>
  );
}

export function ChargebeeIcon({ className }: Readonly<BrandIconProps>) {
  return (
    <Svg className={className}>
      <title>Chargebee</title>
      <path
        fill={ACTIVE_COLOR}
        d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm0 19.2c-3.97 0-7.2-3.23-7.2-7.2S8.03 4.8 12 4.8c2.7 0 5.05 1.49 6.29 3.69l-2.86 1.65A4 4 0 0 0 12 8.4c-1.99 0-3.6 1.61-3.6 3.6s1.61 3.6 3.6 3.6c1.41 0 2.63-.81 3.22-1.99l2.94 1.7C16.92 17.78 14.62 19.2 12 19.2z"
      />
    </Svg>
  );
}

export function GongIcon({ className }: Readonly<BrandIconProps>) {
  return (
    <Svg className={className}>
      <title>Gong.io</title>
      <path
        fill={ACTIVE_COLOR}
        d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm0 3.6c4.64 0 8.4 3.76 8.4 8.4s-3.76 8.4-8.4 8.4S3.6 16.64 3.6 12 7.36 3.6 12 3.6zm0 2.4a6 6 0 0 0-6 6h2.4a3.6 3.6 0 0 1 7.2 0H18a6 6 0 0 0-6-6zm-1.2 6.6V18h2.4v-5.4h-2.4z"
      />
    </Svg>
  );
}

export function ModjoIcon({ className }: Readonly<BrandIconProps>) {
  return (
    <Svg className={className}>
      <title>Modjo</title>
      <path
        fill={ACTIVE_COLOR}
        d="M2 4h3.2L9 14.5 12.8 4H16v16h-2.4V8.4L10 18h-2L4.4 8.4V20H2V4zm17 4h2.5c1.4 0 2.5 1.1 2.5 2.5v7c0 1.4-1.1 2.5-2.5 2.5H19a2.5 2.5 0 0 1-2.5-2.5v-7c0-1.4 1.1-2.5 2.5-2.5zm.5 2.4v7.2h1.5v-7.2H19.5z"
      />
    </Svg>
  );
}

export function FormIcon({ className }: Readonly<BrandIconProps>) {
  return (
    <Svg className={className}>
      <title>Formulaire interne Revelo</title>
      <path
        fill={ACTIVE_COLOR}
        d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm-7 14H7v-2h5v2zm5-4H7v-2h10v2zm0-4H7V7h10v2z"
      />
    </Svg>
  );
}
