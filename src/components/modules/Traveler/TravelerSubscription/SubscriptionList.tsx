// const SubscriptionList = ({ subscription }: any) => {
//   console.log({ subscription });
//   return <div>SubscriptionList</div>;
// };

// export default SubscriptionList;

// components/SubscriptionList.tsx
import { format } from "date-fns";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { CalendarDays, Clock } from "lucide-react";

const SubscriptionList = ({ subscription }: any) => {
  // console.log("subscription", subscription);
  const start = new Date(subscription.startDate);
  const end = new Date(subscription.endDate);
  const now = new Date();

  const totalMs = end.getTime() - start.getTime();
  const elapsedMs = now.getTime() - start.getTime();
  const progress = Math.min(Math.max((elapsedMs / totalMs) * 100, 0), 100);
  const daysLeft = Math.max(
    Math.ceil((end.getTime() - now.getTime()) / (1000 * 60 * 60 * 24)),
    0
  );

  const statusVariant =
    subscription.status === "ACTIVE"
      ? "default"
      : subscription.status === "EXPIRED"
      ? "destructive"
      : subscription.status === "CANCELLED"
      ? "outline"
      : "secondary";

  return (
    <Card className="w-full max-w-md">
      <div className="bg-linear-to-r from-blue-600 to-indigo-600 p-6 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-xl font-semibold">Premium Membership</h3>
            <p className="text-sm opacity-90 mt-1">
              {subscription?.plan?.name}
            </p>
          </div>
          <div className="text-right">
            <p className="text-3xl font-bold">${subscription.amount}</p>
          </div>
        </div>
      </div>

      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <Badge variant={statusVariant}>{subscription.status}</Badge>
          <span className="text-sm text-muted-foreground">
            Started: {format(start, "dd MMM yyyy")}
          </span>
        </div>
      </CardHeader>

      <CardContent className="space-y-6">
        <div className="space-y-4 rounded-lg border bg-muted/50 p-5">
          <div className="flex justify-between text-sm">
            <span className="flex items-center gap-2 text-muted-foreground">
              <CalendarDays className="h-4 w-4" />
              Valid until
            </span>
            <span className="font-medium">{format(end, "dd MMM yyyy")}</span>
          </div>

          <div className="flex justify-between text-sm">
            <span className="flex items-center gap-2 text-muted-foreground">
              <Clock className="h-4 w-4" />
              Days
            </span>
            <span className="font-bold text-green-600">{daysLeft}</span>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>Remaining days in %</span>
            <span>{progress.toFixed(0)}%</span>
          </div>
          <Progress value={progress} className="h-3" />
        </div>
      </CardContent>
    </Card>
  );
};

export default SubscriptionList;
