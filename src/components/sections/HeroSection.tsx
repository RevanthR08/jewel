
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="py-20 bg-mesh overflow-hidden relative">
      {/* Abstract shapes */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-purple/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-brand-cyan/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-8">
            <div>
              <span className="inline-block px-3 py-1 text-sm font-medium bg-brand-purple/10 text-brand-purple rounded-full mb-4">
                Luxury Collection 2025
              </span>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                <span>Timeless Elegance </span>
                <span className="gradient-text">Crafted for You</span>
              </h1>
              <p className="mt-6 text-xl text-muted-foreground max-w-lg">
                Discover our exquisite collection of handcrafted jewelry pieces that celebrate your unique style and personality.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-brand-purple hover:bg-brand-purple/90">
                Shop Collection
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">
                Learn Our Story
              </Button>
            </div>
            
            <div className="pt-4">
              <p className="text-sm text-muted-foreground">
                Trusted by celebrities and fashion enthusiasts worldwide
              </p>
              <div className="flex flex-wrap gap-8 items-center mt-4">
                {['Vogue', 'Elle', 'Glamour', 'Vanity Fair'].map((brand) => (
                  <div key={brand} className="text-muted-foreground font-semibold opacity-50">
                    {brand}
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="flex-1 relative">
            <div className="relative z-10 bg-white p-2 rounded-xl shadow-2xl animate-float">
              <img 
                src="https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80" 
                alt="Luxury Jewellery Collection" 
                className="rounded-lg w-full h-auto object-cover aspect-[4/3]"
              />
            </div>
            
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-brand-magenta/30 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
