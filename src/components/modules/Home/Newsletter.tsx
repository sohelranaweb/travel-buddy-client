"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";

export function Newsletter() {
  return (
    <section className="py-24 bg-secondary/5 border-y border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                Get Travel Inspiration in Your Inbox
              </h2>
              <p className="text-lg text-muted-foreground">
                Join 50,000+ travelers receiving weekly tips, destination
                guides, and exclusive meetup invitations. No spam, just
                adventure.
              </p>
            </motion.div>
          </div>

          <div className="w-full md:w-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-background p-2 rounded-full shadow-sm border border-border flex w-full md:w-[400px]"
            >
              <Input
                type="email"
                placeholder="Enter your email address"
                className="border-none shadow-none focus-visible:ring-0 bg-transparent h-12 text-base px-4"
              />
              <Button
                size="lg"
                className="rounded-full px-8 font-bold bg-primary hover:bg-primary/90"
              >
                Subscribe <Send className="w-4 h-4 ml-2" />
              </Button>
            </motion.div>
            <p className="text-xs text-muted-foreground mt-3 ml-4">
              By subscribing, you agree to our Terms & Privacy Policy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Newsletter;
