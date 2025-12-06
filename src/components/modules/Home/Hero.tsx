"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { Search, MapPin, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRef } from "react";
import Image from "next/image";
import heroImage from "../../../assests/images/heroImage.png";
export function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative h-[110vh] flex items-center justify-center overflow-hidden -mt-20"
    >
      {/* Parallax Background */}
      <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <Image
          src={heroImage}
          alt="Travelers hiking"
          className="w-full h-full object-cover object-center scale-105"
        />
      </motion.div>

      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h1 className="text-6xl md:text-8xl font-display font-black text-white mb-8 leading-tight tracking-tight drop-shadow-2xl">
              Find Your <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-secondary via-orange-300 to-yellow-200">
                Travel Squad
              </span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="text-xl md:text-2xl text-white/90 mb-12 max-w-2xl mx-auto font-light leading-relaxed drop-shadow-md"
          >
            Don't let a lack of company stop you from seeing the world. Connect
            with travelers who share your dates and destinations.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white/10 backdrop-blur-xl p-3 rounded-3xl max-w-4xl mx-auto border border-white/20 shadow-2xl flex flex-col md:flex-row gap-3"
          >
            <div className="flex-1 bg-white rounded-2xl px-6 py-4 flex items-center gap-3 transition-colors hover:bg-gray-50">
              <MapPin className="w-5 h-5 text-primary shrink-0" />
              <div className="text-left w-full">
                <label className="block text-xs font-bold text-muted-foreground uppercase tracking-wider">
                  Destination
                </label>
                <input
                  type="text"
                  placeholder="Anywhere"
                  className="bg-transparent border-none outline-none w-full text-foreground font-medium placeholder:text-gray-400"
                />
              </div>
            </div>

            <div className="flex-1 bg-white rounded-2xl px-6 py-4 flex items-center gap-3 transition-colors hover:bg-gray-50">
              <Calendar className="w-5 h-5 text-primary shrink-0" />
              <div className="text-left w-full">
                <label className="block text-xs font-bold text-muted-foreground uppercase tracking-wider">
                  Dates
                </label>
                <input
                  type="text"
                  placeholder="Anytime"
                  className="bg-transparent border-none outline-none w-full text-foreground font-medium placeholder:text-gray-400"
                />
              </div>
            </div>

            <Button className="rounded-2xl px-10 py-4 h-auto text-lg bg-secondary hover:bg-secondary/90 text-white font-bold shadow-lg hover:shadow-secondary/25 transition-all shrink-0">
              Search
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white flex flex-col items-center gap-2"
      >
        <span className="text-xs font-bold uppercase tracking-widest opacity-70">
          Scroll to Explore
        </span>
        <div className="w-0.5 h-12 bg-linear-to-b from-white to-transparent opacity-50" />
      </motion.div>
    </section>
  );
}
