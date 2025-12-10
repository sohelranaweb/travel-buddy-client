import { motion } from "framer-motion";
import { Search, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { getTravelers } from "@/services/admin/travelersManagement";
import { TravelerCard } from "@/components/modules/ExploreTraveler/TravelerCard";

export default async function ExploreTravelers() {
  const { data: travelers } = await getTravelers();

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Banner Section */}
      <div className="bg-primary py-16 md:py-24 relative overflow-hidden">
        {/* Abstract shapes/pattern overlay */}
        <div className="absolute top-0 right-0 p-12 opacity-10 transform translate-x-1/3 -translate-y-1/3">
          <svg
            width="400"
            height="400"
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#FFFFFF"
              d="M44.7,-76.4C58.9,-69.2,71.8,-59.1,79.6,-46.9C87.4,-34.7,90.1,-20.4,89.1,-6.5C88.1,7.4,83.4,20.9,74.9,32.3C66.4,43.7,54.1,53,41.2,60.1C28.3,67.2,14.8,72.1,0.9,70.5C-13,68.9,-27.9,60.8,-40.8,51.8C-53.7,42.8,-64.6,32.9,-71.4,20.7C-78.2,8.5,-80.9,-6,-76.6,-18.8C-72.3,-31.6,-61,-42.7,-49,-50.7C-37,-58.7,-24.3,-63.6,-11.2,-65.4C1.9,-67.2,15,-66,30.5,-73.2L44.7,-76.4Z"
              transform="translate(100 100)"
            />
          </svg>
        </div>
        <div className="absolute bottom-0 left-0 p-8 opacity-10 transform -translate-x-1/3 translate-y-1/3">
          <svg
            width="300"
            height="300"
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#FFFFFF"
              d="M39.9,-65.7C50.8,-57.4,58.3,-45.3,65.8,-32.8C73.3,-20.3,80.8,-7.4,80.1,5.2C79.4,17.8,70.5,30.1,60.4,39.9C50.3,49.7,39,57,27.1,61.9C15.2,66.8,2.7,69.3,-9.4,68.6C-21.5,67.9,-33.2,64,-43.3,57.1C-53.4,50.2,-61.9,40.3,-67.4,29.1C-72.9,17.9,-75.4,5.4,-72.6,-6.1C-69.8,-17.6,-61.7,-28.1,-52.3,-37.1C-42.9,-46.1,-32.2,-53.6,-20.9,-61.5C-9.6,-69.4,2.3,-77.7,13.8,-76.6C25.3,-75.5,36.4,-65,39.9,-65.7Z"
              transform="translate(100 100)"
            />
          </svg>
        </div>

        <div className="container mx-auto px-4 max-w-7xl relative z-10 text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-6"
          >
            Explore Travelers
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-blue-50 max-w-2xl mx-auto mb-8 font-light"
          >
            Discover people who share your passion for adventure. Connect, plan,
            and explore the world together.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl mx-auto"
          >
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                placeholder="Search travelers by name, location, or interests..."
                className="pl-12 h-14 rounded-full bg-white text-gray-900 border-none shadow-xl text-base focus-visible:ring-2 focus-visible:ring-secondary"
                // value={searchTerm}
                // onChange={(e) => setSearchTerm(e.target.value)}
                data-testid="input-search-banner"
              />
              <Button className="absolute right-2 top-2 h-10 rounded-full bg-primary text-white hover:bg-primary/90 px-6">
                Search
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-grow container mx-auto px-4 py-16 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-end md:items-center mb-8 gap-4 border-b border-gray-200 pb-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-800 font-display">
              All Travelers
            </h2>
            <p className="text-muted-foreground mt-1">
              {/* Found {filteredTravelers.length} active travelers */}
            </p>
          </div>

          <Button variant="outline" className="gap-2 border-gray-300">
            <Filter className="w-4 h-4" /> Filter Results
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
          {travelers.map((traveler: any, index: any) => (
            <motion.div
              key={traveler.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <TravelerCard traveler={traveler} />
            </motion.div>
          ))}
        </div>

        {travelers.length === 0 && (
          <div className="text-center py-20 bg-white rounded-xl border border-dashed border-gray-300">
            <div className="bg-gray-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-xl font-medium text-gray-900">
              No travelers found
            </h3>
            <p className="text-muted-foreground mt-2 max-w-md mx-auto">
              We couldn't find any travelers matching your search. Try different
              keywords or browse all travelers.
            </p>
            <Button
              variant="link"
              className="mt-4 text-primary"
              // onClick={() => setSearchTerm("")}
            >
              Clear Search
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
