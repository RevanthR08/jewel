
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Collection {
  id: number;
  name: string;
  description: string;
  image: string;
  itemCount: number;
}

const CollectionsSection = () => {
  const collections: Collection[] = [
    {
      id: 1,
      name: "Bridal Collection",
      description: "Elegant pieces for your special day",
      image: "https://images.unsplash.com/photo-1587056590907-906c928e3fac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      itemCount: 24
    },
    {
      id: 2,
      name: "Vintage Inspired",
      description: "Timeless designs with a modern twist",
      image: "https://images.unsplash.com/photo-1635767798638-3e25273a8236?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
      itemCount: 18
    },
    {
      id: 3,
      name: "Minimalist",
      description: "Simple, elegant pieces for everyday wear",
      image: "https://images.unsplash.com/photo-1611591437268-1b979293bbc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      itemCount: 32
    }
  ];

  return (
    <section className="py-20 bg-mesh">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4">Explore Our Collections</h2>
          <p className="text-muted-foreground">
            Discover our carefully curated collections, each designed with a unique story and aesthetic
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {collections.map((collection) => (
            <Card key={collection.id} className="overflow-hidden border-0 shadow-lg card-hover">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={collection.image} 
                  alt={collection.name} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6 text-white">
                  <h3 className="text-xl font-bold">{collection.name}</h3>
                  <p className="text-white/80 text-sm mt-1">{collection.itemCount} pieces</p>
                </div>
              </div>
              
              <CardContent className="p-6">
                <p className="text-muted-foreground mb-4">{collection.description}</p>
                <Button variant="outline" className="w-full">Explore Collection</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollectionsSection;
