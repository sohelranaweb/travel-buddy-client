import Link from "next/link";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "../ui/sheet";
import { Menu, Plane } from "lucide-react";
// import { getCookie } from "@/services/auth/tokenHandlers";
// import LogoutButton from "./LogoutButton";

const PublicNavbar = async () => {
  const navItems = [
    { href: "#", label: "Explore Travelers" },
    { href: "#", label: "Find Travel Buddy" },
    { href: "#", label: "Subscription" },
    { href: "#", label: "Services" },
  ];
  //   const accessToken = await getCookie("accessToken");
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur  dark:bg-background/95">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* <Link href="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold text-primary">Travel Buddy</span>
        </Link> */}
        <Link href="/">
          <span className="flex items-center gap-2 group">
            <div className="bg-primary p-2 rounded-xl text-primary-foreground group-hover:rotate-12 transition-transform">
              <Plane className="w-6 h-6 fill-current" />
            </div>
            <span className="text-2xl font-display font-bold tracking-tight text-primary">
              Travel<span className="text-secondary">Buddy</span>
            </span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          {navItems.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-foreground hover:text-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center space-x-2">
          {/* {accessToken ? (
            <LogoutButton />
          ) : (
            <Link href="/login">
              <Button>Login</Button>
            </Link>
          )} */}
          <Button>Login</Button>
        </div>

        {/* Mobile Menu */}

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline">
                {" "}
                <Menu />{" "}
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] p-4">
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <nav className="flex flex-col space-y-4 mt-8">
                {navItems.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="text-lg font-medium"
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="border-t pt-4 flex flex-col space-y-4">
                  <div className="flex justify-center"></div>
                  {/* {accessToken ? (
                    <LogoutButton></LogoutButton>
                  ) : (
                    <Link href="/login" className="text-lg font-medium">
                      <Button>Login</Button>
                    </Link>
                  )} */}
                  <Button>Login</Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default PublicNavbar;
