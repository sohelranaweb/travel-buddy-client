"use client";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden bg-primary text-primary-foreground">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
      <div className="absolute top-0 left-0 w-full h-full bg-linear-to-br from-primary to-blue-600 opacity-90" />

      <div className="container mx-auto px-4 relative z-10 text-center">
        <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 tracking-tight">
          Ready to Start Your Journey?
        </h2>
        <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-2xl mx-auto font-light">
          Join 500,000+ travelers who are exploring the world together. Your
          next adventure is just one click away.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-lg mx-auto">
          <Button
            size="lg"
            className="w-full sm:w-auto bg-white text-primary hover:bg-gray-100 text-lg px-8 py-6 rounded-full font-bold shadow-xl"
          >
            Create Free Account
          </Button>
          <Button
            size="lg"
            variant="ghost"
            className="w-full sm:w-auto border border-white/30 text-white hover:bg-white/10 hover:text-white text-lg px-8 py-6 rounded-full"
          >
            Browse Trips First
          </Button>
        </div>

        <p className="mt-6 text-sm text-white/60">
          No credit card required. Cancel anytime.
        </p>
      </div>
    </section>
  );
}

export default CTASection;
