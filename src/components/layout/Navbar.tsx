
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";
import { Heart, ShoppingCart, Search, Menu } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b">
      <div className="container mx-auto flex items-center justify-between py-4">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-brand-purple to-brand-cyan flex items-center justify-center">
            <span className="text-white font-bold text-lg">JE</span>
          </div>
          <span className="font-bold text-xl">Jewels</span>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <NavLink to="/" className="font-medium hover:text-brand-purple transition">
            Home
          </NavLink>
          <NavLink to="/shop" className="font-medium hover:text-brand-purple transition">
            Shop
          </NavLink>
          <NavLink to="/collections" className="font-medium hover:text-brand-purple transition">
            Collections
          </NavLink>
          <NavLink to="/about" className="font-medium hover:text-brand-purple transition">
            About
          </NavLink>
        </div>
        
        {/* Desktop Actions */}
        <div className="hidden md:flex items-center space-x-4">
          <Button variant="ghost" size="icon" aria-label="Search">
            <Search className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" aria-label="Wishlist">
            <Heart className="h-5 w-5" />
            <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 bg-brand-purple text-xs">2</Badge>
          </Button>
          <Button variant="ghost" size="icon" aria-label="Cart">
            <ShoppingCart className="h-5 w-5" />
            <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 bg-brand-purple text-xs">3</Badge>
          </Button>
          <Button className="bg-brand-purple hover:bg-brand-purple/90">
            Login
          </Button>
        </div>
        
        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-3">
          <Button variant="ghost" size="icon" aria-label="Cart">
            <ShoppingCart className="h-5 w-5" />
            <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 bg-brand-purple text-xs">3</Badge>
          </Button>
          <Button variant="ghost" size="icon" aria-label="Menu" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-b pb-4">
          <div className="container mx-auto px-4 space-y-3">
            <NavLink to="/" className="block py-2 font-medium hover:text-brand-purple transition">
              Home
            </NavLink>
            <NavLink to="/shop" className="block py-2 font-medium hover:text-brand-purple transition">
              Shop
            </NavLink>
            <NavLink to="/collections" className="block py-2 font-medium hover:text-brand-purple transition">
              Collections
            </NavLink>
            <NavLink to="/about" className="block py-2 font-medium hover:text-brand-purple transition">
              About
            </NavLink>
            <div className="flex items-center space-x-4 pt-2">
              <Button variant="ghost" size="icon" aria-label="Search">
                <Search className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" aria-label="Wishlist">
                <Heart className="h-5 w-5" />
                <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 bg-brand-purple text-xs">2</Badge>
              </Button>
              <Button className="ml-auto bg-brand-purple hover:bg-brand-purple/90">
                Login
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
