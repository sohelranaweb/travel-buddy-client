"use client";
import { motion } from "framer-motion";
import { UserPlus, Search, Ticket, Plane, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const steps = [
  {
    id: "01",
    icon: UserPlus,
    title: "Create Your Profile",
    desc: "Tell us about your travel style. Are you a backpacker, a luxury seeker, or a foodie? We use this to match you with the perfect crew.",
    color: "bg-blue-500",
  },
  {
    id: "02",
    icon: Search,
    title: "Discover Companions",
    desc: "Browse trips created by others or post your own. Filter by destination, dates, and budget to find exactly what you're looking for.",
    color: "bg-orange-500",
  },
  {
    id: "03",
    icon: Ticket,
    title: "Plan the Details",
    desc: "Chat securely with your new friends. Agree on itineraries, split accommodations, and book your flights with confidence.",
    color: "bg-green-500",
  },
  {
    id: "04",
    icon: Plane,
    title: "Travel Together",
    desc: "Meet up at the airport or destination. Share the cost, share the safety, and most importantly, share the memories.",
    color: "bg-purple-500",
  },
];

export function HowItWorks() {
  return (
    <section className="py-32 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] left-[5%] w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-[10%] right-[5%] w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-24">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-bold tracking-wider uppercase text-sm"
          >
            Your Journey Starts Here
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-display font-bold mt-3 mb-6"
          >
            How Travel-Buddy Works
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-muted-foreground"
          >
            Go from solo dreamer to group adventurer in four simple steps.
          </motion.p>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2" />

          <div className="space-y-12 lg:space-y-0">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className={cn(
                  "flex flex-col lg:flex-row items-center gap-8 lg:gap-16 relative",
                  idx % 2 === 0 ? "lg:flex-row-reverse" : ""
                )}
              >
                {/* Content Side */}
                <div className="flex-1 text-center lg:text-left">
                  <div
                    className={cn(
                      "flex flex-col gap-4",
                      idx % 2 === 0
                        ? "lg:items-start"
                        : "lg:items-end lg:text-right"
                    )}
                  >
                    <span
                      className={cn(
                        "text-6xl font-display font-bold text-muted/20",
                        step.color.replace("bg-", "text-")
                      )}
                    >
                      {step.id}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-bold">
                      {step.title}
                    </h3>
                    <p className="text-lg text-muted-foreground max-w-md leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>

                {/* Center Marker */}
                <div className="relative shrink-0 z-10">
                  <div
                    className={cn(
                      "w-16 h-16 rounded-2xl flex items-center justify-center shadow-xl text-white rotate-3 transition-transform duration-300 hover:rotate-0 hover:scale-110",
                      step.color
                    )}
                  >
                    <step.icon className="w-8 h-8" />
                  </div>
                </div>

                {/* Empty Side for balance */}
                <div className="flex-1 hidden lg:block" />
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-24 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <button className="bg-foreground text-background px-8 py-4 rounded-full text-lg font-bold hover:bg-foreground/90 transition-colors inline-flex items-center gap-2 group">
              Start Your Adventure{" "}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
