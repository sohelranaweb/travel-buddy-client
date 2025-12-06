"use client";
import { motion } from "framer-motion";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Star, ArrowRight } from "lucide-react";
import collageImage from "../../../assests/images/collage_of_world_landmarks.png";
import Image from "next/image";

const destinations = [
  {
    name: "Bali, Indonesia",
    image:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1000&auto=format&fit=crop",
    trips: 124,
    rating: 4.8,
  },
  {
    name: "Kyoto, Japan",
    image:
      "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=1000&auto=format&fit=crop",
    trips: 85,
    rating: 4.9,
  },
  {
    name: "Reykjavik, Iceland",
    image:
      "https://images.unsplash.com/photo-1476610182048-b716b8518aae?q=80&w=1000&auto=format&fit=crop",
    trips: 56,
    rating: 4.9,
  },
  {
    name: "Cusco, Peru",
    image:
      "https://images.unsplash.com/photo-1526392060635-9d6019884377?q=80&w=1000&auto=format&fit=crop",
    trips: 42,
    rating: 4.7,
  },
];

export function Destinations() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-end mb-12">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Trending Now
            </h2>
            <p className="text-muted-foreground text-lg">
              The most popular spots our community is traveling to this month.
            </p>
          </div>
          <a
            href="#"
            className="hidden md:flex items-center font-bold text-primary hover:underline"
          >
            View all destinations <ArrowRight className="ml-2 w-4 h-4" />
          </a>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {destinations.map((dest, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative rounded-3xl overflow-hidden aspect-3/4 mb-4">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors z-10" />
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 z-20 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg flex items-center gap-1 text-xs font-bold shadow-sm">
                  <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                  {dest.rating}
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 z-20 bg-linear-to-t from-black/80 to-transparent text-white">
                  <h3 className="font-bold text-xl mb-1">{dest.name}</h3>
                  <p className="text-sm opacity-80">
                    {dest.trips} active trips
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Feature Banner */}
        <div className="mt-16 relative rounded-[2.5rem] overflow-hidden h-[400px] shadow-2xl">
          <Image
            src={collageImage}
            alt="World Collage"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-r from-primary/90 to-primary/40 flex items-center p-8 md:p-16">
            <div className="max-w-xl text-white">
              <Badge className="bg-white/20 hover:bg-white/30 text-white border-none mb-6">
                New Feature
              </Badge>
              <h3 className="text-3xl md:text-5xl font-display font-bold mb-6">
                Create Your Own Path
              </h3>
              <p className="text-lg text-white/90 mb-8 leading-relaxed">
                Can't find the perfect trip? Start your own! Set the dates,
                choose the destination, and let travelers come to you.
              </p>
              <button className="bg-white text-primary px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg">
                Post a Trip for Free
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
