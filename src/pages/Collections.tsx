
import React, { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useToast } from "@/hooks/use-toast";
import ProductCard from "@/components/product/ProductCard";

const Collections = () => {
  const { toast } = useToast();
  const [likedItems, setLikedItems] = useState<number[]>([]);
  const [wishlistedItems, setWishlistedItems] = useState<number[]>([]);

  // Sample liked products data
  const likedProducts = [
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

  const handleWishlist = (productId: number) => {
    if (wishlistedItems.includes(productId)) {
      setWishlistedItems(wishlistedItems.filter(id => id !== productId));
      toast({
        title: "Removed from wishlist",
        variant: "default",
      });
    } else {
      setWishlistedItems([...wishlistedItems, productId]);
      toast({
        title: "Added to wishlist",
        variant: "default",
      });
    }
  };

  const handleLike = (productId: number) => {
    if (likedItems.includes(productId)) {
      setLikedItems(likedItems.filter(id => id !== productId));
      toast({
        title: "Removed from liked items",
        variant: "default",
      });
    } else {
      setLikedItems([...likedItems, productId]);
      toast({
        title: "Added to liked collection",
        variant: "default",
      });
    }
  };

  const handleAddToCart = (productId: number) => {
    console.log(`Added product ${productId} to cart`);
    toast({
      title: "Added to cart",
      variant: "default",
    });
  };

  const handleCompare = (productId: number) => {
    console.log(`Added product ${productId} to compare`);
    toast({
      title: "Added to compare",
      variant: "default",
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="bg-mesh py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold">Your Collections</h1>
            <p className="text-muted-foreground mt-2">Items you've liked and added to your collection</p>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-12">
          <h2 className="text-2xl font-bold mb-8">Liked Items</h2>
          
          {likedProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {likedProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  {...product}
                  isWishlisted={wishlistedItems.includes(product.id)}
                  isLiked={true}
                  onWishlist={() => handleWishlist(product.id)}
                  onLike={() => handleLike(product.id)}
                  onAddToCart={() => handleAddToCart(product.id)}
                  onCompare={() => handleCompare(product.id)}
                />
              ))}
            </div>
          ) : (
            <div className="py-12 text-center">
              <p className="text-xl text-muted-foreground">You haven't liked any items yet.</p>
              <p className="mt-2 text-muted-foreground">Browse our collections and add items to your liked collection.</p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Collections;
