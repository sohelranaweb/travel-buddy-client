// import Link from "next/link";

// function PublicFooter() {
//   return (
//     <footer className="border-t bg-background">
//       <div className="container mx-auto px-4 py-8">
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
//           <div>
//             <h3 className="font-bold mb-2">Travel Buddy</h3>
//             <p className="text-sm text-muted-foreground">
//               Your travel mate find is our priority. We are here to provide the
//               best travel buddy services.
//             </p>
//           </div>
//           <div>
//             <h3 className="font-semibold mb-2">Quick Links</h3>
//             <ul className="space-y-2 text-sm">
//               <li>
//                 <Link
//                   href="#"
//                   className="text-muted-foreground hover:text-foreground"
//                 >
//                   Home
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   href="#"
//                   className="text-muted-foreground hover:text-foreground"
//                 >
//                   About Us
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   href="#"
//                   className="text-muted-foreground hover:text-foreground"
//                 >
//                   Services
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   href="#"
//                   className="text-muted-foreground hover:text-foreground"
//                 >
//                   Contact
//                 </Link>
//               </li>
//             </ul>
//           </div>
//           <div>
//             <h3 className="font-semibold mb-2">Support</h3>
//             <ul className="space-y-2 text-sm">
//               <li>
//                 <Link
//                   href="#"
//                   className="text-muted-foreground hover:text-foreground"
//                 >
//                   FAQ
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   href="#"
//                   className="text-muted-foreground hover:text-foreground"
//                 >
//                   Help Center
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   href="#"
//                   className="text-muted-foreground hover:text-foreground"
//                 >
//                   Terms of Service
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   href="#"
//                   className="text-muted-foreground hover:text-foreground"
//                 >
//                   Privacy Policy
//                 </Link>
//               </li>
//             </ul>
//           </div>
//           <div>
//             <h3 className="font-semibold mb-2">Contact Us</h3>
//             <p className="text-sm text-muted-foreground">
//               123 Support Lane
//               <br />
//               travel City, HC 12345
//               <br />
//               contact@tb.com
//             </p>
//           </div>
//         </div>
//         <div className="mt-8 border-t pt-4 text-center text-sm text-muted-foreground">
//           &copy; {new Date().getFullYear()} Travel Buddy. All Rights Reserved.
//         </div>
//       </div>
//     </footer>
//   );
// }
// export default PublicFooter;

import { Plane } from "lucide-react";

function PublicFooter() {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="bg-primary p-2 rounded-lg text-primary-foreground">
                <Plane className="w-5 h-5 fill-current" />
              </div>
              <span className="text-xl font-display font-bold tracking-tight text-white">
                Travel<span className="text-secondary">Buddy</span>
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Connecting travelers worldwide. Find your companion, plan your
              journey, and explore the world together.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Explore</h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Destinations
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Community
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Travel Guides
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Safety
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Company</h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Press
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 text-white">
              Join Newsletter
            </h4>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Email address"
                className="bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white w-full focus:outline-none focus:border-primary"
              />
              <button className="bg-primary text-white px-4 py-2 rounded-lg font-bold hover:bg-primary/90">
                Go
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} TravelBuddy Inc. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default PublicFooter;
