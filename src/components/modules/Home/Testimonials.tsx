"use client";
import { Star } from "lucide-react";
import campfireImage from "../../../assests/images/friends_around_a_campfire_on_a_beach.png";
import Image from "next/image";

export function Testimonials() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 space-y-8">
            <div>
              <h2 className="text-4xl font-display font-bold mb-6">
                Real Stories, Real Connections
              </h2>
              <p className="text-muted-foreground text-lg">
                Join a community of over 500,000 travelers who have found their
                perfect travel buddies.
              </p>
            </div>

            <div className="grid gap-6">
              {[1, 2].map((i) => (
                <div
                  key={i}
                  className="bg-card p-8 rounded-3xl border border-border/50 shadow-sm relative"
                >
                  <div className="flex gap-1 text-secondary mb-4">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                  <p className="text-foreground/80 italic mb-6 text-lg">
                    "
                    {i === 1
                      ? "I was nervous about traveling solo to Thailand. Finding a buddy on this app changed everything. We're planning our next trip to Vietnam!"
                      : "Saved so much money by splitting accommodation and car rentals. Plus, having someone to take photos of you is a huge bonus!"}
                    "
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden">
                      <img
                        src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${
                          i === 1 ? "Felix" : "Aneka"
                        }`}
                        alt="Avatar"
                      />
                    </div>
                    <div>
                      <p className="font-bold text-foreground">
                        {i === 1 ? "Alex M." : "Sarah K."}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {i === 1
                          ? "Traveled to Thailand"
                          : "Traveled to Iceland"}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2">
            <div className="relative rounded-full overflow-hidden aspect-square border-8 border-white shadow-2xl max-w-md mx-auto rotate-3 hover:rotate-0 transition-transform duration-500">
              <Image
                src={campfireImage}
                alt="Community Campfire"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-primary/10 mix-blend-overlay" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
