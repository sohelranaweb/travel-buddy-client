// import InputFieldError from "@/components/shared/InputFieldError";
// import { Button } from "@/components/ui/button";
// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
// } from "@/components/ui/dialog";
// import { Field, FieldLabel } from "@/components/ui/field";
// import { Input } from "@/components/ui/input";
// import { createAdmin, updateAdmin } from "@/services/admin/adminsManagement";
// import { ITravelPlan } from "@/types/travelPlan.interface";
// import { useActionState, useEffect, useRef, useState } from "react";
// import { toast } from "sonner";

// interface ITravelPlanFormDialogProps {
//   open: boolean;
//   onClose: () => void;
//   onSuccess: () => void;
//   travelPlan?: ITravelPlan;
// }

// const TravelPlanFormDialog = ({
//   open,
//   onClose,
//   onSuccess,
//   travelPlan,
// }: ITravelPlanFormDialogProps) => {
//   const formRef = useRef<HTMLFormElement>(null);
//   const fileInputRef = useRef<HTMLInputElement>(null);
//   const isEdit = !!travelPlan?.id;
//   //   const { isEditMode, state, formAction, isPending } = useAdminForm(admin);

//   const [state, formAction, isPending] = useActionState(
//     isEdit
//       ? updateTravelPlan.bind(null, travelPlan?.id as string)
//       : createAdmin,
//     null
//   );
//   const [selectedFile, setSelectedFile] = useState<File | null>(null);

//   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0];
//     setSelectedFile(file || null);
//   };

//   // Handle success/error from server
//   useEffect(() => {
//     if (state?.success) {
//       toast.success(state.message || "Operation successful");
//       if (formRef.current) {
//         formRef.current.reset();
//       }
//       onSuccess();
//       onClose();
//     } else if (state?.message && !state.success) {
//       toast.error(state.message);

//       // Restore file to input after error
//       if (selectedFile && fileInputRef.current) {
//         const dataTransfer = new DataTransfer();
//         dataTransfer.items.add(selectedFile);
//         fileInputRef.current.files = dataTransfer.files;
//       }
//     }
//   }, [state, onSuccess, onClose, selectedFile]);

//   const handleClose = () => {
//     setSelectedFile(null);
//     formRef.current?.reset();
//     onClose();
//   };

//   return (
//     <Dialog open={open} onOpenChange={handleClose}>
//       <DialogContent className="max-h-[90vh] flex flex-col p-0">
//         <DialogHeader className="px-6 pt-6 pb-4">
//           <DialogTitle>
//             {isEdit ? "Edit Travel Plan" : "Create Travel Plan"}
//           </DialogTitle>
//         </DialogHeader>

//         <form
//           ref={formRef}
//           action={formAction}
//           className="flex flex-col flex-1 min-h-0"
//         >
//           <div className="flex-1 overflow-y-auto px-6 space-y-4 pb-4">
//             {/* Destination */}
//             <Field>
//               <FieldLabel htmlFor="destination">Destination</FieldLabel>
//               <Input
//                 id="destination"
//                 name="destination"
//                 placeholder="Thailand Islands"
//                 defaultValue={
//                   state?.formData?.destination || travelPlan?.destination || ""
//                 }
//               />
//               <InputFieldError field="destination" state={state} />
//             </Field>

//             {/* Start Date */}
//             <Field>
//               <FieldLabel htmlFor="startDate">Start Date</FieldLabel>
//               <Input
//                 id="startDate"
//                 name="startDate"
//                 type="date"
//                 defaultValue={
//                   state?.formData?.startDate ||
//                   travelPlan?.startDate?.slice(0, 10) ||
//                   ""
//                 }
//               />
//               <InputFieldError field="startDate" state={state} />
//             </Field>

//             {/* End Date */}
//             <Field>
//               <FieldLabel htmlFor="endDate">End Date</FieldLabel>
//               <Input
//                 id="endDate"
//                 name="endDate"
//                 type="date"
//                 defaultValue={
//                   state?.formData?.endDate ||
//                   travelPlan?.endDate?.slice(0, 10) ||
//                   ""
//                 }
//               />
//               <InputFieldError field="endDate" state={state} />
//             </Field>

//             {/* Budget Min */}
//             <Field>
//               <FieldLabel htmlFor="budgetMin">Min Budget</FieldLabel>
//               <Input
//                 id="budgetMin"
//                 name="budgetMin"
//                 type="number"
//                 placeholder="3500"
//                 defaultValue={
//                   state?.formData?.budgetMin || travelPlan?.budgetMin || ""
//                 }
//               />
//               <InputFieldError field="budgetMin" state={state} />
//             </Field>

//             {/* Budget Max */}
//             <Field>
//               <FieldLabel htmlFor="budgetMax">Max Budget</FieldLabel>
//               <Input
//                 id="budgetMax"
//                 name="budgetMax"
//                 type="number"
//                 placeholder="4500"
//                 defaultValue={
//                   state?.formData?.budgetMax || travelPlan?.budgetMax || ""
//                 }
//               />
//               <InputFieldError field="budgetMax" state={state} />
//             </Field>

//             {/* Travel Type */}
//             <Field>
//               <FieldLabel htmlFor="travelType">Travel Type</FieldLabel>
//               <select
//                 id="travelType"
//                 name="travelType"
//                 className="border rounded-md p-2 w-full"
//                 defaultValue={
//                   state?.formData?.travelType ||
//                   travelPlan?.travelType ||
//                   "FRIENDS"
//                 }
//               >
//                 <option value="SOLO">Solo</option>
//                 <option value="COUPLE">Couple</option>
//                 <option value="FAMILY">Family</option>
//                 <option value="FRIENDS">Friends</option>
//                 <option value="GROUP">Group</option>
//               </select>
//               <InputFieldError field="travelType" state={state} />
//             </Field>

//             {/* Description */}
//             <Field>
//               <FieldLabel htmlFor="description">Description</FieldLabel>
//               <textarea
//                 id="description"
//                 name="description"
//                 rows={4}
//                 className="border rounded-md p-2 w-full"
//                 placeholder="Write details about the trip"
//                 defaultValue={
//                   state?.formData?.description || travelPlan?.description || ""
//                 }
//               />
//               <InputFieldError field="description" state={state} />
//             </Field>
//           </div>

//           {/* Form Actions */}
//           <div className="flex justify-end gap-2 px-6 py-4 border-t bg-gray-50">
//             <Button
//               type="button"
//               variant="outline"
//               onClick={handleClose}
//               disabled={isPending}
//             >
//               Cancel
//             </Button>
//             <Button type="submit" disabled={isPending}>
//               {isPending
//                 ? "Saving..."
//                 : isEdit
//                 ? "Update Travel Plan"
//                 : "Create Travel Plan"}
//             </Button>
//           </div>
//         </form>
//       </DialogContent>
//     </Dialog>
//   );
// };

// export default TravelPlanFormDialog;

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

import {
  createTravelPlan,
  updateTravelPlan,
} from "@/services/traveler/travelPlan.service";

import { ITravelPlan } from "@/types/travelPlan.interface";
import { UserInfo } from "@/types/user.interface";

import { useActionState, useEffect, useRef } from "react";
import { toast } from "sonner";

interface ITravelPlanFormDialogProps {
  open: boolean;
  onClose: () => void;
  onSuccess: () => void;
  travelPlan?: ITravelPlan;
}

const TravelPlanFormDialog = ({
  open,
  onClose,
  onSuccess,
  travelPlan,
}: ITravelPlanFormDialogProps) => {
  const formRef = useRef<HTMLFormElement>(null);
  const isEdit = !!travelPlan?.id;

  const [state, formAction, isPending] = useActionState(
    isEdit
      ? updateTravelPlan.bind(null, travelPlan?.id as string)
      : createTravelPlan,
    null
  );

  // Success / Error handler
  useEffect(() => {
    if (!state) return;

    if (state.success) {
      toast.success(state.message || "Travel Plan saved");

      formRef.current?.reset();
      onSuccess();
      onClose();
    } else if (!state.success && state.message) {
      toast.error(state.message);
    }
  }, [state]);

  const handleClose = () => {
    formRef.current?.reset();
    onClose();
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="max-h-[90vh] flex flex-col p-0">
        <DialogHeader className="px-6 pt-6 pb-4">
          <DialogTitle>
            {isEdit ? "Edit Travel Plan" : "Create Travel Plan"}
          </DialogTitle>
        </DialogHeader>

        <form
          ref={formRef}
          action={formAction}
          className="flex flex-col flex-1 min-h-0"
        >
          <div className="flex-1 overflow-y-auto px-6 space-y-4 pb-4">
            {/* Destination */}
            <Field>
              <FieldLabel htmlFor="destination">Destination</FieldLabel>
              <Input
                id="destination"
                name="destination"
                placeholder="Thailand Islands"
                defaultValue={
                  state?.formData?.destination || travelPlan?.destination || ""
                }
              />
              <InputFieldError field="destination" state={state} />
            </Field>

            {/* Start Date */}
            <Field>
              <FieldLabel htmlFor="startDate">Start Date</FieldLabel>
              <Input
                id="startDate"
                name="startDate"
                type="date"
                defaultValue={
                  state?.formData?.startDate ||
                  travelPlan?.startDate?.slice(0, 10) ||
                  ""
                }
              />
              <InputFieldError field="startDate" state={state} />
            </Field>

            {/* End Date */}
            <Field>
              <FieldLabel htmlFor="endDate">End Date</FieldLabel>
              <Input
                id="endDate"
                name="endDate"
                type="date"
                defaultValue={
                  state?.formData?.endDate ||
                  travelPlan?.endDate?.slice(0, 10) ||
                  ""
                }
              />
              <InputFieldError field="endDate" state={state} />
            </Field>

            {/* Budget Min */}
            <Field>
              <FieldLabel htmlFor="budgetMin">Min Budget</FieldLabel>
              <Input
                id="budgetMin"
                name="budgetMin"
                type="number"
                placeholder="3500"
                defaultValue={
                  state?.formData?.budgetMin || travelPlan?.budgetMin || ""
                }
              />
              <InputFieldError field="budgetMin" state={state} />
            </Field>

            {/* Budget Max */}
            <Field>
              <FieldLabel htmlFor="budgetMax">Max Budget</FieldLabel>
              <Input
                id="budgetMax"
                name="budgetMax"
                type="number"
                placeholder="4500"
                defaultValue={
                  state?.formData?.budgetMax || travelPlan?.budgetMax || ""
                }
              />
              <InputFieldError field="budgetMax" state={state} />
            </Field>

            {/* Travel Type */}
            <Field>
              <FieldLabel htmlFor="travelType">Travel Type</FieldLabel>
              <select
                id="travelType"
                name="travelType"
                className="border rounded-md p-2 w-full"
                defaultValue={
                  state?.formData?.travelType ||
                  travelPlan?.travelType ||
                  "FRIENDS"
                }
              >
                <option value="SOLO">SOLO</option>
                <option value="COUPLE">COUPLE</option>
                <option value="FAMILY">FAMILY</option>
                <option value="FRIENDS">FRIENDS</option>
                <option value="GROUP">GROUP</option>
              </select>
              <InputFieldError field="travelType" state={state} />
            </Field>

            {/* Description */}
            <Field>
              <FieldLabel htmlFor="description">Description</FieldLabel>
              <textarea
                id="description"
                name="description"
                rows={4}
                className="border rounded-md p-2 w-full"
                placeholder="Write details about the trip"
                defaultValue={
                  state?.formData?.description || travelPlan?.description || ""
                }
              />
              <InputFieldError field="description" state={state} />
            </Field>
          </div>

          {/* Footer */}
          <div className="flex justify-end gap-2 px-6 py-4 border-t bg-gray-50">
            <Button
              type="button"
              variant="outline"
              onClick={handleClose}
              disabled={isPending}
            >
              Cancel
            </Button>

            <Button type="submit" disabled={isPending}>
              {isPending
                ? "Saving..."
                : isEdit
                ? "Update Travel Plan"
                : "Create Travel Plan"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default TravelPlanFormDialog;
