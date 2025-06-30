
import React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, Star, ShoppingCart, BookmarkIcon } from "lucide-react";

interface ProductProps {
  id: number;
  name: string;
  price: number;
  oldPrice?: number;
  image: string;
  rating: number;
  isWishlisted: boolean;
  isLiked?: boolean;
  badge?: string;
  onWishlist?: () => void;
  onAddToCart?: () => void;
  onCompare?: () => void;
  onLike?: () => void;
}

const ProductCard = ({
  id,
  name,
  price,
  oldPrice,
  image,
  rating,
  isWishlisted,
  isLiked,
  badge,
  onWishlist,
  onAddToCart,
  onCompare,
  onLike
}: ProductProps) => {
  return (
    <Card className="overflow-hidden card-hover border-none shadow-md">
      <div className="relative">
        {badge && (
          <Badge className="absolute top-3 left-3 z-10 bg-brand-purple">
            {badge}
          </Badge>
        )}
        <div className="absolute top-3 right-3 z-10 flex space-x-2">
          <Button 
            variant="ghost" 
            size="icon" 
            className="bg-white/80 backdrop-blur-sm hover:bg-white"
            onClick={onWishlist}
            aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
          >
            <BookmarkIcon className={`h-5 w-5 ${isWishlisted ? "fill-brand-purple text-brand-purple" : ""}`} />
          </Button>
          <Button 
            variant="ghost" 
            size="icon" 
            className="bg-white/80 backdrop-blur-sm hover:bg-white"
            onClick={onLike}
            aria-label={isLiked ? "Unlike" : "Like"}
          >
            <Heart className={`h-5 w-5 ${isLiked ? "fill-red-500 text-red-500" : ""}`} />
          </Button>
        </div>
        <div className="overflow-hidden aspect-square">
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
          />
        </div>
      </div>
      
      <CardContent className="pt-6">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center text-amber-500">
            <Star className="h-4 w-4 fill-current" />
            <span className="ml-1 text-sm font-medium">{rating}</span>
          </div>
          <Button 
            variant="ghost" 
            size="sm" 
            className="text-xs px-2 h-7"
            onClick={onCompare}
          >
            Compare
          </Button>
        </div>
        
        <h3 className="font-semibold text-lg">{name}</h3>
        
        <div className="flex items-center mt-2">
          <span className="font-bold text-lg">${price}</span>
          {oldPrice && (
            <span className="ml-2 text-sm text-muted-foreground line-through">${oldPrice}</span>
          )}
        </div>
      </CardContent>
      
      <CardFooter className="pt-0">
        <Button 
          className="w-full bg-brand-purple hover:bg-brand-purple/90"
          onClick={onAddToCart}
        >
          <ShoppingCart className="mr-2 h-4 w-4" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
