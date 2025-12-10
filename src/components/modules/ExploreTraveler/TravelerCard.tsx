"use client";
import { motion } from "framer-motion";
import {
  MapPin,
  Calendar,
  MessageCircle,
  UserPlus,
  Globe2,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

export interface Traveler {
  id: string;
  email: string;
  name: string;
  contactNumber: string;
  profilePhoto: string;
  address: string;
  gender: string;
  bio: string;
  travelInterests: string[];
  visitedCountries: string[];
  currentLocation: string;
  isSubscribed: boolean;
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
  rating?: number;
  reviewCount?: number;
}

interface TravelerCardProps {
  traveler: Traveler;
}

export function TravelerCard({ traveler }: TravelerCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Card className="overflow-hidden border-none shadow-md hover:shadow-xl transition-shadow duration-300 bg-white h-full flex flex-col">
        <div className="relative h-56 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent z-10" />
          <img
            src={traveler.profilePhoto}
            alt={traveler.name}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
          {traveler.isSubscribed && (
            <div className="absolute top-3 right-3 z-20">
              <Badge className="bg-yellow-400 text-yellow-900 hover:bg-yellow-500 border-none shadow-sm">
                Premium
              </Badge>
            </div>
          )}
          <div className="absolute bottom-4 left-4 z-20 text-white w-[calc(100%-2rem)]">
            <h3 className="text-xl font-bold font-display truncate">
              {traveler.name}
            </h3>
            <div className="flex items-center gap-1.5 text-sm text-white/90 mt-1">
              <MapPin className="w-3.5 h-3.5 text-secondary" />
              <span className="truncate">{traveler.currentLocation}</span>
            </div>
          </div>
        </div>

        <CardContent className="pt-5 flex-grow">
          <div className="flex flex-wrap justify-between items-center gap-2 mb-4">
            <div className="flex items-center gap-1.5 text-xs font-medium text-primary bg-primary/5 px-2.5 py-1 rounded-full max-w-[70%]">
              <Globe2 className="w-3.5 h-3.5 shrink-0" />
              <span className="truncate">
                {traveler.visitedCountries.join(", ")}
              </span>
            </div>

            {traveler.rating !== undefined && (
              <div className="flex items-center gap-1 text-sm font-medium">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span>{traveler.rating}</span>
                <span className="text-muted-foreground text-xs">
                  ({traveler.reviewCount || 0})
                </span>
              </div>
            )}
          </div>

          <p className="text-sm text-muted-foreground line-clamp-2 mb-5 leading-relaxed min-h-[40px]">
            {traveler.bio}
          </p>

          <div className="space-y-2">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
              Interests
            </p>
            <div className="flex flex-wrap gap-2">
              {traveler.travelInterests.map((interest, idx) => (
                <span
                  key={idx}
                  className="text-[11px] font-medium text-gray-600 bg-gray-100 px-2.5 py-1 rounded-md border border-gray-200"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </CardContent>

        <CardFooter className="flex gap-3 pt-2 pb-5 px-5 mt-auto">
          <Button
            className="flex-1 bg-primary hover:bg-primary/90 shadow-sm"
            size="sm"
            data-testid={`button-connect-${traveler.id}`}
          >
            <UserPlus className="w-4 h-4 mr-2" />
            Connect
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="text-gray-500 border-gray-200 hover:bg-gray-50 hover:text-primary"
            data-testid={`button-message-${traveler.id}`}
          >
            <MessageCircle className="w-4 h-4" />
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
