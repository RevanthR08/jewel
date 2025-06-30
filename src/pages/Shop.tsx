
import React, { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ProductCard from "@/components/product/ProductCard";
import { Button } from "@/components/ui/button";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

// Sample product data
const products = [
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
  },
  {
    id: 5,
    name: "Emerald Ring",
    price: 1199,
    image: "https://images.unsplash.com/photo-1608042314453-ae338d80c427?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    rating: 4.5,
    isWishlisted: false
  },
  {
    id: 6,
    name: "Diamond Pendant",
    price: 999,
    image: "https://images.unsplash.com/photo-1617870952348-7524edfb61b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    rating: 4.7,
    isWishlisted: false,
    badge: "New"
  }
];

const Shop = () => {
  const [wishlistedItems, setWishlistedItems] = useState<number[]>([1, 4]);
  const [likedItems, setLikedItems] = useState<number[]>([]);

  const handleWishlist = (productId: number) => {
    if (wishlistedItems.includes(productId)) {
      setWishlistedItems(wishlistedItems.filter(id => id !== productId));
      toast.success("Removed from wishlist");
    } else {
      setWishlistedItems([...wishlistedItems, productId]);
      toast.success("Added to wishlist");
    }
  };

  const handleLike = (productId: number) => {
    if (likedItems.includes(productId)) {
      setLikedItems(likedItems.filter(id => id !== productId));
      toast.success("Removed from liked items");
    } else {
      setLikedItems([...likedItems, productId]);
      toast.success("Added to liked collection");
    }
  };

  const handleAddToCart = (productId: number) => {
    console.log(`Added product ${productId} to cart`);
    toast.success("Added to cart");
  };

  const handleCompare = (productId: number) => {
    console.log(`Added product ${productId} to compare`);
    toast.success("Added to compare");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="bg-mesh py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold">Shop Our Collection</h1>
            <p className="text-muted-foreground mt-2">Discover our exquisite jewelry pieces</p>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters - Left Sidebar */}
            <div className="lg:w-1/4 space-y-8">
              <div>
                <h3 className="font-semibold mb-4">Categories</h3>
                <div className="space-y-2">
                  {['Rings', 'Necklaces', 'Earrings', 'Bracelets', 'Watches'].map((category) => (
                    <div key={category} className="flex items-center space-x-2">
                      <Checkbox id={category} />
                      <Label htmlFor={category} className="text-sm text-gray-700">
                        {category}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>
              
              <Separator />
              
              <div>
                <h3 className="font-semibold mb-4">Price Range</h3>
                <Slider
                  defaultValue={[0, 2000]}
                  max={5000}
                  step={100}
                  className="mb-6"
                />
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-700">$0</span>
                  <span className="text-sm text-gray-700">$5000+</span>
                </div>
              </div>
              
              <Separator />
              
              <div>
                <h3 className="font-semibold mb-4">Material</h3>
                <div className="space-y-2">
                  {['Gold', 'Silver', 'Platinum', 'Rose Gold', 'White Gold'].map((material) => (
                    <div key={material} className="flex items-center space-x-2">
                      <Checkbox id={material} />
                      <Label htmlFor={material} className="text-sm text-gray-700">
                        {material}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>
              
              <Separator />
              
              <div>
                <h3 className="font-semibold mb-4">Gemstone</h3>
                <div className="space-y-2">
                  {['Diamond', 'Emerald', 'Ruby', 'Sapphire', 'Pearl'].map((gemstone) => (
                    <div key={gemstone} className="flex items-center space-x-2">
                      <Checkbox id={gemstone} />
                      <Label htmlFor={gemstone} className="text-sm text-gray-700">
                        {gemstone}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>
              
              <Button className="w-full mt-4 bg-brand-purple hover:bg-brand-purple/90">
                Apply Filters
              </Button>
            </div>
            
            {/* Product Grid - Right Side */}
            <div className="lg:w-3/4">
              <div className="flex justify-between items-center mb-6">
                <p className="text-sm text-muted-foreground">Showing {products.length} products</p>
                <div className="flex items-center gap-4">
                  <Select defaultValue="featured">
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="featured">Featured</SelectItem>
                      <SelectItem value="price-low">Price: Low to High</SelectItem>
                      <SelectItem value="price-high">Price: High to Low</SelectItem>
                      <SelectItem value="newest">Newest</SelectItem>
                      <SelectItem value="rating">Top Rated</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {products.map((product) => (
                  <ProductCard
                    key={product.id}
                    {...product}
                    isWishlisted={wishlistedItems.includes(product.id)}
                    isLiked={likedItems.includes(product.id)}
                    onWishlist={() => handleWishlist(product.id)}
                    onLike={() => handleLike(product.id)}
                    onAddToCart={() => handleAddToCart(product.id)}
                    onCompare={() => handleCompare(product.id)}
                  />
                ))}
              </div>
              
              <div className="flex justify-center mt-12">
                <Button variant="outline" className="mx-1">1</Button>
                <Button variant="outline" className="mx-1">2</Button>
                <Button variant="outline" className="mx-1">3</Button>
                <Button variant="outline" className="mx-1">Next</Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Shop;
