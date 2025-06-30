
import React from "react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-br from-brand-purple to-brand-cyan rounded-2xl overflow-hidden shadow-xl">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="flex-1 p-8 md:p-12 lg:p-16 text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to buy some precious Jewellery?
              </h2>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-brand-purple hover:bg-white/90">
                  Get Started
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20">
                  Schedule a Demo
                </Button>
              </div>
            </div>
            <div className="flex-1 p-8 md:p-12 lg:p-16 flex justify-center">
              <div className="w-full max-w-md bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-inner">
                <div className="space-y-4">
                  <div className="h-8 bg-white/20 rounded-md w-2/3"></div>
                  <div className="h-4 bg-white/20 rounded-md"></div>
                  <div className="h-4 bg-white/20 rounded-md w-5/6"></div>
                  <div className="h-4 bg-white/20 rounded-md w-4/6"></div>
                  <div className="h-10 bg-white/30 rounded-md mt-6"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
