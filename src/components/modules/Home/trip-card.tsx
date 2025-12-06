import { Calendar, MapPin, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { StaticImageData } from "next/image";

export interface TripProps {
  title: string;
  location: string;
  date: string;
  image: string | StaticImageData;
  spots: string;
  organizer: string;
  tags: string[];
}

export function TripCard({
  title,
  location,
  date,
  image,
  spots,
  organizer,
  tags,
}: TripProps) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 group h-full flex flex-col border-border/50">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-4 right-4">
          <Badge
            variant={spots === "Fully Booked" ? "destructive" : "secondary"}
            className="font-semibold"
          >
            {spots}
          </Badge>
        </div>
      </div>

      <CardHeader className="pb-2">
        <div className="flex gap-2 mb-3">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-medium px-2 py-1 rounded-md bg-muted text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
        <h3 className="font-bold text-xl font-display">{title}</h3>
        <div className="flex items-center text-muted-foreground text-sm mt-1">
          <MapPin className="w-4 h-4 mr-1" /> {location}
        </div>
      </CardHeader>

      <CardContent className="py-2 grow">
        <div className="flex items-center justify-between text-sm border-t border-border pt-4 mt-2">
          <div className="flex items-center gap-2 text-foreground/80">
            <Calendar className="w-4 h-4 text-primary" />
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-2 text-foreground/80">
            <Users className="w-4 h-4 text-primary" />
            <span>Hosted by {organizer}</span>
          </div>
        </div>
      </CardContent>

      <CardFooter className="pt-2 pb-6">
        <Button className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
          View Details <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </CardFooter>
    </Card>
  );
}

export default TripCard;
