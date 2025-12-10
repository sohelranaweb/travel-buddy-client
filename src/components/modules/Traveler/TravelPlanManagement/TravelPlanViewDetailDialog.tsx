import InfoRow from "@/components/shared/InfoRow";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { formatDateTime, getInitials } from "@/lib/formatters";
import { IAdmin } from "@/types/admin.interface";
import { ITravelPlan } from "@/types/travelPlan.interface";
import { Calendar, Info, Mail, Phone, Shield, User } from "lucide-react";

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
  if (!travelPlan) {
    return null;
  }

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="min-w-5xl max-h-[90vh] flex flex-col p-0">
        <DialogHeader className="px-6 pt-6 pb-4">
          <DialogTitle>Travel Plan Details</DialogTitle>
        </DialogHeader>

        <div className="flex-1 overflow-y-auto px-6 pb-6 space-y-6">
          {/* Header */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 p-6 bg-linear-to-br from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950 rounded-lg">
            <div className="flex-1 text-center sm:text-left">
              <h2 className="text-3xl font-bold mb-1">
                {travelPlan?.destination || "Unknown Destination"}
              </h2>
              <p className="text-muted-foreground">
                {travelPlan?.travelType || "Unknown Type"}
              </p>
            </div>
            <div className="text-center sm:text-right">
              <p className="text-sm text-gray-500">
                {travelPlan?.isCompleted ? "Completed" : "Ongoing"}
              </p>
            </div>
          </div>

          {/* Dates & Budget */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Calendar className="h-5 w-5 text-orange-600" />
              <h3 className="font-semibold text-lg">Dates & Budget</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-muted/50 p-4 rounded-lg">
              <InfoRow
                label="Start Date"
                value={
                  travelPlan?.startDate
                    ? formatDateTime(travelPlan.startDate)
                    : "Not provided"
                }
              />
              <InfoRow
                label="End Date"
                value={
                  travelPlan?.endDate
                    ? formatDateTime(travelPlan.endDate)
                    : "Not provided"
                }
              />
              <InfoRow
                label="Min Budget"
                value={
                  travelPlan?.budgetMin ? `$${travelPlan.budgetMin}` : "N/A"
                }
              />
              <InfoRow
                label="Max Budget"
                value={
                  travelPlan?.budgetMax ? `$${travelPlan.budgetMax}` : "N/A"
                }
              />
            </div>
          </div>

          <Separator />

          {/* Description */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Info className="h-5 w-5 text-purple-600" />
              <h3 className="font-semibold text-lg">Description</h3>
            </div>
            <div className="bg-muted/50 p-4 rounded-lg">
              <p>{travelPlan?.description || "No description provided."}</p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TravelPlanViewDetailDialog;
