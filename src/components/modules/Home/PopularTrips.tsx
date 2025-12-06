"use client";
import { motion } from "framer-motion";
import roadtripImage from "../../../assests/images/road_trip.png";
import cityImage from "../../../assests/images/street_scene.png";
import mountainImage from "../../../assests/images/mountain_trail.png";
import { Button } from "@/components/ui/button";
import { TripCard, type TripProps } from "@/components/modules/Home/trip-card";

const trips: TripProps[] = [
  {
    title: "California Coast Roadtrip",
    location: "California, USA",
    date: "Oct 12 - Oct 20",
    image: roadtripImage,
    spots: "2 spots left",
    organizer: "Mike T.",
    tags: ["Roadtrip", "Nature", "Photography"],
  },
  {
    title: "Tokyo Food Adventure",
    location: "Tokyo, Japan",
    date: "Nov 05 - Nov 15",
    image: cityImage,
    spots: "4 spots left",
    organizer: "Yuki S.",
    tags: ["Foodie", "City", "Culture"],
  },
  {
    title: "Alps Hiking Expedition",
    location: "Chamonix, France",
    date: "Sep 10 - Sep 18",
    image: mountainImage,
    spots: "Fully Booked",
    organizer: "Sarah J.",
    tags: ["Hiking", "Adventure", "Mountains"],
  },
];

export function PopularTrips() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl font-display font-bold mb-4">
              Upcoming Adventures
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl">
              Browse trips created by our community. Find a group that matches
              your dates and vibe.
            </p>
          </div>
          <Button variant="outline" className="hidden md:flex">
            View All Trips
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {trips.map((trip, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <TripCard {...trip} />
            </motion.div>
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <Button variant="outline" className="w-full">
            View All Trips
          </Button>
        </div>
      </div>
    </section>
  );
}

export default PopularTrips;
