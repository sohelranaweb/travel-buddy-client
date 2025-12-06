"use client";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import {
  UserPlus,
  Map,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Globe,
  Wallet,
} from "lucide-react";
import connectImage from "@assets/generated_images/two_travelers_planning_a_trip_on_a_phone.png";

// Changed title to differentiate from "How it Works"
const features = [
  {
    icon: UserPlus,
    title: "Smart Matching",
    description:
      "Our algorithm matches you based on travel style, budget, and interests—not just destination.",
    className:
      "md:col-span-2 bg-blue-50 dark:bg-blue-950/20 border-blue-100 dark:border-blue-900/50",
  },
  {
    icon: ShieldCheck,
    title: "Verified Profiles",
    description:
      "Social verification and ID checks mean you always know who you're talking to.",
    className:
      "bg-green-50 dark:bg-green-950/20 border-green-100 dark:border-green-900/50",
  },
  {
    icon: Wallet,
    title: "Cost Splitting",
    description:
      "Built-in tools to track and split expenses fairly. No awkward money conversations.",
    className:
      "bg-orange-50 dark:bg-orange-950/20 border-orange-100 dark:border-orange-900/50",
  },
  {
    icon: MessageCircle,
    title: "Group Chat",
    description:
      "Plan details in real-time with dedicated trip channels and itinerary voting.",
    className:
      "md:col-span-2 bg-purple-50 dark:bg-purple-950/20 border-purple-100 dark:border-purple-900/50",
  },
];

export function Features() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <div className="lg:w-1/3 sticky top-24">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary font-bold text-xs uppercase tracking-wide mb-6">
                <Sparkles className="w-4 h-4" /> Why Choose Us
              </div>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6 leading-tight">
                More Than Just a <br />
                <span className="text-primary">Travel Forum</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                We've built a dedicated platform for finding travel companions
                that solves the real problems of coordinating group trips with
                strangers.
              </p>

              <div className="p-6 bg-card rounded-2xl border border-border shadow-sm">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center text-secondary font-bold text-xl">
                    4.9
                  </div>
                  <div>
                    <div className="font-bold">TrustScore</div>
                    <div className="text-sm text-muted-foreground">
                      Based on 12k+ reviews
                    </div>
                  </div>
                </div>
                <p className="text-sm italic text-muted-foreground">
                  "The verification system makes me feel so much safer than just
                  using Facebook groups."
                </p>
              </div>
            </motion.div>
          </div>

          <div className="lg:w-2/3">
            <div className="grid md:grid-cols-3 gap-6">
              {features.map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className={feature.className ? feature.className : ""}
                >
                  <Card
                    className={`h-full border transition-all hover:shadow-md hover:-translate-y-1 duration-300 ${feature.className}`}
                  >
                    <CardContent className="p-8 flex flex-col h-full justify-between">
                      <div className="w-12 h-12 rounded-xl bg-white dark:bg-background shadow-sm flex items-center justify-center mb-6 text-foreground">
                        <feature.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="font-bold text-xl mb-3 text-foreground">
                          {feature.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Features;
