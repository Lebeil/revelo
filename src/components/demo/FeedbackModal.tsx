"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { FeedbackForm } from "./FeedbackForm";

type FeedbackModalProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export function FeedbackModal({ open, onOpenChange }: Readonly<FeedbackModalProps>) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[90vh] overflow-y-auto bg-card sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle className="display-serif text-2xl text-midnight">
            Donnez votre feedback sur le prototype
          </DialogTitle>
          <DialogDescription className="text-sm leading-relaxed text-midnight/70">
            5 questions, 2 minutes. Vos réponses servent à calibrer Revelo avant la sortie de beta.
            Si vous souhaitez aussi devenir pilote, indiquez-le en question 4.
          </DialogDescription>
        </DialogHeader>
        <FeedbackForm source="demo-modal" onSubmitted={() => onOpenChange(false)} />
      </DialogContent>
    </Dialog>
  );
}
