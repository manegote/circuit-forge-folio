import { Search, Menu } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface HeaderProps {
  onSearch?: (query: string) => void;
}

const Header = ({ onSearch }: HeaderProps) => {
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/blog", label: "Blog" },
    { path: "/projects", label: "Projects" },
    { path: "/gallery", label: "Gallery" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <header className="bg-header-bg border-b-4 border-accent">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between py-2">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-header-text rounded-sm flex items-center justify-center">
              <span className="text-header-bg font-bold text-sm">EE</span>
            </div>
            <span className="text-header-text font-bold text-lg">Electronics Engineering</span>
          </div>
          
          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Search className="w-4 h-4 text-header-text" />
              <Input
                type="search"
                placeholder="Search projects and posts..."
                className="w-64 bg-header-text/10 border-header-text/20 text-header-text placeholder:text-header-text/70"
                onChange={(e) => onSearch?.(e.target.value)}
              />
            </div>
          </div>

          <Button variant="ghost" size="icon" className="md:hidden text-header-text">
            <Menu className="w-6 h-6" />
          </Button>
        </div>

        <nav className="border-t border-header-text/20 py-0">
          <ul className="flex gap-0">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`block px-4 py-3 text-sm font-medium border-b-4 transition-colors ${
                    location.pathname === item.path
                      ? "text-header-text border-accent bg-header-text/10"
                      : "text-header-text/80 border-transparent hover:text-header-text hover:border-header-text/30"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;