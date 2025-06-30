
import React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Star, ShoppingCart, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

// Product type definition
interface Product {
  id: number;
  name: string;
  price: number;
  oldPrice?: number;
  image: string;
  rating: number;
  isWishlisted: boolean;
  badge?: string;
}

const FeaturedProducts = () => {
  // Sample product data
  const products: Product[] = [
    {
      id: 1,
      name: "Diamond Eternity Ring",
      price: 1499,
      oldPrice: 1799,
      image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      rating: 4.9,
      isWishlisted: true,
      badge: "Sale"
    },
    {
      id: 2,
      name: "Pearl Necklace",
      price: 899,
      image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      rating: 4.7,
      isWishlisted: false,
      badge: "New"
    },
    {
      id: 3,
      name: "Sapphire Earrings",
      price: 1299,
      image: "https://images.unsplash.com/photo-1576022162885-c2e9a3f00cae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      rating: 4.8,
      isWishlisted: false
    },
    {
      id: 4,
      name: "Gold Bracelet",
      price: 799,
      oldPrice: 999,
      image: "https://images.unsplash.com/photo-1611652022419-a9419f74628c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=686&q=80",
      rating: 4.6,
      isWishlisted: true,
      badge: "Sale"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl font-bold">Featured Collection</h2>
            <p className="text-muted-foreground mt-2">Our most popular pieces, loved by customers worldwide</p>
          </div>
          <Button variant="outline" className="hidden sm:flex items-center">
            View All <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <Card key={product.id} className="overflow-hidden card-hover border-none shadow-md">
              <div className="relative">
                {product.badge && (
                  <Badge className="absolute top-3 left-3 z-10 bg-brand-purple">
                    {product.badge}
                  </Badge>
                )}
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="absolute top-3 right-3 z-10 bg-white/80 backdrop-blur-sm hover:bg-white"
                  aria-label={product.isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
                >
                  <Heart className={`h-5 w-5 ${product.isWishlisted ? "fill-brand-purple text-brand-purple" : ""}`} />
                </Button>
                <div className="overflow-hidden aspect-square">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
              </div>
              
              <CardContent className="pt-6">
                <div className="flex items-center mb-2">
                  <div className="flex items-center text-amber-500">
                    <Star className="h-4 w-4 fill-current" />
                    <span className="ml-1 text-sm font-medium">{product.rating}</span>
                  </div>
                </div>
                
                <h3 className="font-semibold text-lg">{product.name}</h3>
                
                <div className="flex items-center mt-2">
                  <span className="font-bold text-lg">${product.price}</span>
                  {product.oldPrice && (
                    <span className="ml-2 text-sm text-muted-foreground line-through">${product.oldPrice}</span>
                  )}
                </div>
              </CardContent>
              
              <CardFooter className="pt-0">
                <Button className="w-full bg-brand-purple hover:bg-brand-purple/90">
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Add to Cart
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="flex justify-center mt-10 sm:hidden">
          <Button variant="outline" className="flex items-center">
            View All Products <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
