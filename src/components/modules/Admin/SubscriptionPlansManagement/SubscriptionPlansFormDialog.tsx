"use client";
import InputFieldError from "@/components/shared/InputFieldError";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { createSubscriptionPlan } from "@/services/admin/subscriptionPlansManagement";
import { useActionState, useEffect, useRef } from "react";
import { toast } from "sonner";

interface ISubscriptionPlansFormDialogProps {
  open: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

const SubscriptionPlansFormDialog = ({
  open,
  onClose,
  onSuccess,
}: ISubscriptionPlansFormDialogProps) => {
  const [state, formAction, pending] = useActionState(
    createSubscriptionPlan,
    null
  );
  console.log({ state });
  useEffect(() => {
    if (state && state?.success) {
      toast.success(state.message);
      onSuccess();
      onClose();
    } else if (state && !state.success) {
      toast.error(state.message);
    }
  }, [state, onSuccess, onClose]);

  //   const [state, formAction, pending] = useActionState(
  //     createSubscriptionPlan,
  //     null
  //   );
  //   const toastShown = useRef(false);

  //   useEffect(() => {
  //     if (!state) return;

  //     // Prevent duplicate toast after form re-renders
  //     if (toastShown.current) return;

  //     if (state.success) {
  //       toast.success(state.message);
  //       toastShown.current = true;

  //       onSuccess();
  //       onClose();
  //     } else {
  //       toast.error(state.message);
  //       toastShown.current = true;
  //     }
  //   }, [state, onSuccess, onClose]);

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add New Subscription Plan</DialogTitle>
        </DialogHeader>

        <form action={formAction} className="space-y-4">
          <Field>
            <FieldLabel htmlFor="name">Name</FieldLabel>
            <Input id="name" name="name" placeholder="Monthly" required />
            <InputFieldError field="name" state={state} />
          </Field>
          <Field>
            <FieldLabel htmlFor="price">Price</FieldLabel>
            <Input
              id="price"
              name="price"
              placeholder="120, 220, 320"
              required
            />
            <InputFieldError field="price" state={state} />
          </Field>
          <Field>
            <FieldLabel htmlFor="duration">Duration In Days</FieldLabel>
            <Input
              id="duration"
              name="duration"
              placeholder="30 days, 365"
              required
            />
            <InputFieldError field="duration" state={state} />
          </Field>

          <div className="flex justify-end gap-2">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              disabled={pending}
            >
              Cancel
            </Button>
            <Button type="submit" disabled={pending}>
              {pending ? "Saving..." : "Save Subscription Plan"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default SubscriptionPlansFormDialog;
