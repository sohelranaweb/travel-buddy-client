// import InfoRow from "@/components/shared/InfoRow";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import { Badge } from "@/components/ui/badge";
// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
// } from "@/components/ui/dialog";
// import { Separator } from "@/components/ui/separator";
// import { formatDateTime, getInitials } from "@/lib/formatters";
// import { IAdmin } from "@/types/admin.interface";
// import { ITravelPlan } from "@/types/travelPlan.interface";
// import { Calendar, Info, Mail, Phone, Shield, User } from "lucide-react";

// interface ITravelPlanViewDialogProps {
//   open: boolean;
//   onClose: () => void;
//   travelPlan: ITravelPlan | null;
// }

// const TravelPlanViewDetailDialog = ({
//   open,
//   onClose,
//   travelPlan,
// }: ITravelPlanViewDialogProps) => {
//   if (!travelPlan) {
//     return null;
//   }

//   return (
//     <Dialog open={open} onOpenChange={onClose}>
//       <DialogContent className="min-w-5xl max-h-[90vh] flex flex-col p-0">
//         <DialogHeader className="px-6 pt-6 pb-4">
//           <DialogTitle>Travel Plan Details</DialogTitle>
//         </DialogHeader>

//         <div className="flex-1 overflow-y-auto px-6 pb-6 space-y-6">
//           {/* Header */}
//           <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 p-6 bg-linear-to-br from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950 rounded-lg">
//             <div className="flex-1 text-center sm:text-left">
//               <h2 className="text-3xl font-bold mb-1">
//                 {travelPlan?.destination || "Unknown Destination"}
//               </h2>
//               <p className="text-muted-foreground">
//                 {travelPlan?.travelType || "Unknown Type"}
//               </p>
//             </div>
//             <div className="text-center sm:text-right">
//               <p className="text-sm text-gray-500">
//                 {travelPlan?.isCompleted ? "Completed" : "Ongoing"}
//               </p>
//             </div>
//           </div>

//           {/* Dates & Budget */}
//           <div>
//             <div className="flex items-center gap-2 mb-4">
//               <Calendar className="h-5 w-5 text-orange-600" />
//               <h3 className="font-semibold text-lg">Dates & Budget</h3>
//             </div>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-muted/50 p-4 rounded-lg">
//               <InfoRow
//                 label="Start Date"
//                 value={
//                   travelPlan?.startDate
//                     ? formatDateTime(travelPlan.startDate)
//                     : "Not provided"
//                 }
//               />
//               <InfoRow
//                 label="End Date"
//                 value={
//                   travelPlan?.endDate
//                     ? formatDateTime(travelPlan.endDate)
//                     : "Not provided"
//                 }
//               />
//               <InfoRow
//                 label="Min Budget"
//                 value={
//                   travelPlan?.budgetMin ? `$${travelPlan.budgetMin}` : "N/A"
//                 }
//               />
//               <InfoRow
//                 label="Max Budget"
//                 value={
//                   travelPlan?.budgetMax ? `$${travelPlan.budgetMax}` : "N/A"
//                 }
//               />
//             </div>
//           </div>

//           <Separator />

//           {/* Description */}
//           <div>
//             <div className="flex items-center gap-2 mb-4">
//               <Info className="h-5 w-5 text-purple-600" />
//               <h3 className="font-semibold text-lg">Description</h3>
//             </div>
//             <div className="bg-muted/50 p-4 rounded-lg">
//               <p>{travelPlan?.description || "No description provided."}</p>
//             </div>
//           </div>
//         </div>
//       </DialogContent>
//     </Dialog>
//   );
// };

// export default TravelPlanViewDetailDialog;

"use client";

import { useState } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import InfoRow from "@/components/shared/InfoRow";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { formatDateTime, getInitials } from "@/lib/formatters";

import {
  Calendar,
  MapPin,
  DollarSign,
  Users,
  FileText,
  CheckCircle,
  Loader2,
} from "lucide-react";
import { ITravelPlan } from "@/types/travelPlan.interface";
import { completedTrip } from "@/services/traveler/travelPlan.service";

interface ITravelPlanViewDialogProps {
  open: boolean;
  onClose: () => void;
  travelPlan: ITravelPlan | null;
}

const TravelPlanViewDetailDialog = ({
  open,
  onClose,
  travelPlan,
}: ITravelPlanViewDialogProps) => {
  const [isCompleting, setIsCompleting] = useState(false);
  const router = useRouter();

  if (!travelPlan) {
    return null;
  }

  const handleCompleteTrip = async () => {
    setIsCompleting(true);
    try {
      const result = await completedTrip(travelPlan.id);

      if (result.success) {
        toast.success("Trip marked as completed successfully!");
        router.refresh();
        onClose();
        // Redirect to as host pending review page
        router.push("/dashboard/host-pending-reviews");
      } else {
        toast.error(result.message || "Failed to complete trip");
      }
    } catch (error: any) {
      toast.error(error.message || "Failed to complete trip");
    } finally {
      setIsCompleting(false);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="min-w-5xl max-h-[90vh] flex flex-col p-0">
        <DialogHeader className="px-6 pt-6 pb-4">
          <DialogTitle>Travel Plan Details</DialogTitle>
        </DialogHeader>

        <div className="flex-1 overflow-y-auto px-6 pb-6">
          {/* Travel Plan Header */}
          <div className="flex flex-col gap-6 p-6 bg-linear-to-br from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950 rounded-lg mb-6">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h2 className="text-3xl font-bold mb-2">
                  {travelPlan.destination}
                </h2>
                <p className="text-muted-foreground mb-3 flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  {travelPlan.destination}
                </p>
              </div>
              <Badge
                variant={travelPlan.isCompleted ? "default" : "secondary"}
                className="text-sm"
              >
                {travelPlan.isCompleted ? "Completed" : "Ongoing"}
              </Badge>
            </div>

            {/* Traveler Info */}
            {/* {travelPlan.traveler && (
              <div className="flex items-center gap-4 pt-4 border-t border-white/20">
                <Avatar className="h-12 w-12 border-2 border-white shadow">
                  <AvatarImage
                    src={travelPlan.traveler.profilePhoto || ""}
                    alt={travelPlan.traveler.name}
                  />
                  <AvatarFallback>
                    {getInitials(travelPlan.traveler.name || "")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold">{travelPlan.traveler.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {travelPlan.traveler.email}
                  </p>
                </div>
              </div>
            )} */}
          </div>

          {/* Information Grid */}
          <div className="space-y-6">
            {/* Trip Description */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <FileText className="h-5 w-5 text-purple-600" />
                <h3 className="font-semibold text-lg">Description</h3>
              </div>
              <div className="bg-muted/50 p-4 rounded-lg">
                <p className="text-sm leading-relaxed">
                  {travelPlan.description || "No description provided"}
                </p>
              </div>
            </div>

            <Separator />

            {/* Trip Details */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Calendar className="h-5 w-5 text-blue-600" />
                <h3 className="font-semibold text-lg">Trip Information</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-muted/50 p-4 rounded-lg">
                <div className="flex items-start gap-3">
                  <Calendar className="h-4 w-4 mt-1 text-muted-foreground" />
                  <InfoRow
                    label="Start Date"
                    value={formatDate(travelPlan.startDate)}
                  />
                </div>
                <div className="flex items-start gap-3">
                  <Calendar className="h-4 w-4 mt-1 text-muted-foreground" />
                  <InfoRow
                    label="End Date"
                    value={formatDate(travelPlan.endDate)}
                  />
                </div>
                <div className="flex items-start gap-3">
                  <DollarSign className="h-4 w-4 mt-1 text-muted-foreground" />
                  <InfoRow
                    label="Budget Range"
                    value={`$${travelPlan.budgetMin.toLocaleString()} - $${travelPlan.budgetMax.toLocaleString()}`}
                  />
                </div>
                <div className="flex items-start gap-3">
                  <Users className="h-4 w-4 mt-1 text-muted-foreground" />
                  <InfoRow label="Travel Type" value={travelPlan.travelType} />
                </div>
              </div>
            </div>

            <Separator />

            {/* Account Information */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <FileText className="h-5 w-5 text-orange-600" />
                <h3 className="font-semibold text-lg">Plan Information</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-muted/50 p-4 rounded-lg">
                <div className="flex items-start gap-3">
                  <Calendar className="h-4 w-4 mt-1 text-muted-foreground" />
                  <InfoRow
                    label="Created On"
                    value={formatDateTime(travelPlan.createdAt || "")}
                  />
                </div>
                <div className="flex items-start gap-3">
                  <Calendar className="h-4 w-4 mt-1 text-muted-foreground" />
                  <InfoRow
                    label="Last Updated"
                    value={formatDateTime(travelPlan.updatedAt || "")}
                  />
                </div>
              </div>
            </div>

            {/* Complete Trip Button */}
            {!travelPlan.isCompleted && (
              <>
                <Separator />
                <div className="flex justify-end">
                  <Button
                    onClick={handleCompleteTrip}
                    disabled={isCompleting}
                    className="gap-2"
                  >
                    {isCompleting ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Completing...
                      </>
                    ) : (
                      <>
                        <CheckCircle className="h-4 w-4" />
                        Mark as Completed
                      </>
                    )}
                  </Button>
                </div>
              </>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TravelPlanViewDetailDialog;
