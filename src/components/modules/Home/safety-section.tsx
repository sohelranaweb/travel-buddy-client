"use client";
import { motion } from "framer-motion";
import safetyImage from "../../../assests/images/safe_exploring_a_city.png";
import { ShieldCheck, UserCheck, Lock, HeartHandshake } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const safetyFeatures = [
  {
    icon: UserCheck,
    title: "Identity Verification",
    description:
      "Every member must pass our multi-step identity verification process before booking.",
  },
  {
    icon: Lock,
    title: "Secure Payments",
    description:
      "Funds are held in escrow and only released when the trip successfully begins.",
  },
  {
    icon: HeartHandshake,
    title: "Community Guidelines",
    description:
      "We enforce strict conduct rules to ensure a respectful and inclusive environment.",
  },
  {
    icon: ShieldCheck,
    title: "24/7 Support",
    description:
      "Our dedicated safety team is available around the clock to assist you.",
  },
];

export function SafetySection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="bg-primary/5 rounded-[3rem] p-8 md:p-16 overflow-hidden relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 text-green-700 font-bold text-xs uppercase tracking-wide mb-6">
                <ShieldCheck className="w-4 h-4" /> Safety First
              </div>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-foreground">
                Travel with <span className="text-primary">Confidence</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-10">
                We know that traveling with strangers requires trust. That's why
                we've built the most robust safety system in the industry.
              </p>

              <div className="grid sm:grid-cols-2 gap-8">
                {safetyFeatures.map((feature, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="shrink-0 w-10 h-10 rounded-full bg-background flex items-center justify-center shadow-sm text-primary">
                      <feature.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground mb-1">
                        {feature.title}
                      </h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10">
                <Button size="lg" className="rounded-full font-bold">
                  Learn About Safety
                </Button>
              </div>
            </div>

            <div className="order-1 lg:order-2 relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-4 border-white"
              >
                <Image
                  src={safetyImage}
                  alt="Safe travel experience"
                  className="w-full h-auto object-cover"
                />
              </motion.div>

              {/* Decorative elements */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-secondary/20 rounded-full blur-3xl" />
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SafetySection;
