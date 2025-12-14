"use client";
import { motion } from "framer-motion";
import { Check, Shield, Star, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ISubscriptionPlan } from "@/types/subscriptionPlans.interface";
import { useState } from "react";
import { toast } from "sonner";
import { serverFetch } from "@/lib/server-fetch";
import { createSubscription } from "@/services/traveler/subscription.service";

// import { Navbar } from "@/components/navbar";
// import { Footer } from "@/components/footer";

// Mock data provided by user
// const plans = [
//   {
//     id: "120a2840-068f-46a7-89fb-35a2c2488666",
//     name: "Monthly Plan",
//     price: 150,
//     durationInDays: 30,
//     features: [
//       "Access to all public trips",
//       "Basic profile verification",
//       "In-app messaging",
//       "24/7 Support",
//     ],
//     recommended: true,
//     color: "bg-background",
//   },
//   {
//     id: "b095646f-b6e4-4780-a4fd-ce98d819d5be",
//     name: "Half Yearly Plan",
//     price: 220,
//     durationInDays: 180,
//     features: [
//       "Everything in Monthly",
//       "Priority trip matching",
//       "Verified Traveler Badge",
//       "Ad-free experience",
//       "Save 75% vs Monthly",
//     ],
//     recommended: true,
//     color: "bg-primary/5 border-primary",
//   },
//   {
//     id: "c577b4e4-bfa3-4ba7-b11b-df38de206301",
//     name: "Yearly Plan",
//     price: 320,
//     durationInDays: 365,
//     features: [
//       "All Premium features",
//       "Exclusive meetup invites",
//       "Travel insurance discounts",
//       "Global SIM card included",
//       "Save 82% vs Monthly",
//     ],
//     recommended: true,
//     color: "bg-background",
//   },
// ];

type PlanName = "Monthly Plan" | "Half Yearly Plan" | "Yearly Plan";
interface SubscriptionPlanTableProps {
  subscriptionData: ISubscriptionPlan[];
}
export default function SubscriptionPage({
  subscriptionData,
}: SubscriptionPlanTableProps) {
  // Fix the display order

  const order: Record<PlanName, number> = {
    "Monthly Plan": 1,
    "Half Yearly Plan": 2,
    "Yearly Plan": 3,
  };

  const plans = [...subscriptionData].sort(
    (a, b) =>
      (order[a.name as PlanName] ?? 99) - (order[b.name as PlanName] ?? 99)
  );

  const [loadingPlanId, setLoadingPlanId] = useState<string | null>(null);

  const handleSubscribe = async (planId: string) => {
    try {
      setLoadingPlanId(planId);

      const response = await createSubscription(planId);

      const data = await response.json();

      if (data.success && data.data?.paymentUrl) {
        // Redirect user to Stripe checkout page
        window.location.href = data.data.paymentUrl;
      } else {
        toast.error(data.message || "Failed to create subscription.");
        setLoadingPlanId(null);
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong. Please try again.");
      setLoadingPlanId(null);
    }
  };

  return (
    <div className="min-h-screen bg-background font-body">
      <main className="pt-24 pb-24">
        {/* Header Section */}
        <section className="container mx-auto px-4 mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 text-foreground">
              Invest in Your <span className="text-primary">Adventures</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Unlock premium features, get verified, and find your perfect
              travel companions faster.
            </p>

            <div className="flex items-center justify-center gap-8 text-sm font-medium text-muted-foreground">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-primary" />
                <span>Verified Profiles</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-secondary" />
                <span>Premium Matching</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-yellow-500" />
                <span>Priority Access</span>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Pricing Cards */}

        <section className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-end">
            {plans.map((plan, idx) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative"
              >
                {plan.recommended && (
                  <div className="absolute -top-4 left-0 right-0 flex justify-center z-10">
                    <Badge className="bg-secondary text-white hover:bg-secondary px-4 py-1 text-sm font-bold shadow-lg">
                      Most Popular
                    </Badge>
                  </div>
                )}

                <Card
                  className={`relative overflow-hidden h-full flex flex-col transition-all duration-300 hover:shadow-xl ${
                    plan.color
                  } ${
                    plan.recommended
                      ? "border-2 shadow-lg scale-105 z-10"
                      : "border border-border"
                  }`}
                >
                  {plan.recommended && (
                    <div className="absolute top-0 right-0 w-24 h-24 bg-linear-to-bl from-primary/10 to-transparent rounded-bl-full pointer-events-none" />
                  )}

                  <CardHeader className="text-center pb-2 pt-8">
                    <h3 className="text-xl font-bold font-display text-muted-foreground">
                      {plan.name}
                    </h3>
                    <div className="flex items-baseline justify-center gap-1 mt-4 mb-2">
                      <span className="text-sm font-medium text-muted-foreground align-top mt-2">
                        $
                      </span>
                      <span className="text-5xl font-bold text-foreground">
                        {plan.price}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground font-medium">
                      per{" "}
                      {plan.durationInDays === 30
                        ? "month"
                        : plan.durationInDays === 180
                        ? "6 months"
                        : "year"}
                    </p>
                  </CardHeader>

                  <CardContent className="grow pt-8">
                    <ul className="space-y-4">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm">
                          <div
                            className={`mt-0.5 w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${
                              plan.recommended
                                ? "bg-primary/20 text-primary"
                                : "bg-muted text-muted-foreground"
                            }`}
                          >
                            <Check className="w-3 h-3" />
                          </div>
                          <span className="text-foreground/80">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>

                  <CardFooter className="pb-8 pt-4">
                    {/* <Button
                      className={`w-full py-6 text-lg font-bold rounded-xl shadow-md transition-transform hover:scale-[1.02] ${
                        plan.recommended
                          ? "bg-primary hover:bg-primary/90"
                          : "bg-white border border-border text-foreground hover:bg-gray-50"
                      }`}
                    >
                      Choose {plan.name.split(" ")[0]}
                    </Button> */}
                    <Button
                      className={`w-full py-6 text-lg font-bold rounded-xl shadow-md transition-transform hover:scale-[1.02] ${
                        plan.recommended
                          ? "bg-primary hover:bg-primary/90"
                          : "bg-white border border-border text-foreground hover:bg-gray-50"
                      }`}
                      onClick={() => handleSubscribe(plan.id)}
                      disabled={loadingPlanId === plan.id} // optional loading state
                    >
                      {loadingPlanId === plan.id
                        ? "Processing..."
                        : `Choose ${plan.name.split(" ")[0]}`}
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-muted-foreground mb-4">
              All plans include our{" "}
              <span className="font-bold text-foreground">
                30-day money-back guarantee
              </span>
              .
            </p>
            <div className="flex items-center justify-center gap-4 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
              {/* Payment Methods placeholders */}
              <div className="h-8 w-12 bg-foreground/20 rounded" />
              <div className="h-8 w-12 bg-foreground/20 rounded" />
              <div className="h-8 w-12 bg-foreground/20 rounded" />
              <div className="h-8 w-12 bg-foreground/20 rounded" />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
