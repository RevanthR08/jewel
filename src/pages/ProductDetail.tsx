
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import { Heart, Star, ShoppingCart, Share2, ArrowRight, ArrowLeft } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import ProductCard from "@/components/product/ProductCard";
import { toast } from "sonner";

// Sample product data
const product = {
  id: 1,
  name: "Diamond Eternity Ring",
  price: 1499,
  oldPrice: 1799,
  description: "This exquisite diamond eternity ring features brilliant cut diamonds set in 18k white gold. The perfect symbol of never-ending love, this ring sparkles from every angle and is ideal for special occasions or as a stunning addition to your everyday style.",
  details: {
    material: "18k White Gold",
    gemstone: "Diamonds",
    carats: "1.5 total carat weight",
    cut: "Brilliant",
    clarity: "VS",
    color: "F-G"
  },
  images: [
    "https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1607703703674-df96af81dffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
  ],
  rating: 4.9,
  reviews: [
    {
      id: 1,
      user: "Emily Johnson",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      rating: 5,
      date: "March 15, 2023",
      comment: "This ring is absolutely stunning! The diamonds catch the light beautifully, and the craftsmanship is exceptional. I wear it every day and have received countless compliments."
    },
    {
      id: 2,
      user: "Michael Smith",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      rating: 4,
      date: "February 28, 2023",
      comment: "Purchased this as an anniversary gift for my wife. The quality is excellent and the packaging was premium. The only minor issue was that it arrived a day late. Otherwise, perfect."
    },
    {
      id: 3,
      user: "Sophia Williams",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
      rating: 5,
      date: "January 10, 2023",
      comment: "The most beautiful ring I've ever owned. The diamonds are incredibly sparkly and the white gold setting is elegant and timeless. Worth every penny!"
    }
  ],
  relatedProducts: [2, 3, 4]
};

// Sample data for related products
const relatedProducts = [
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

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [wishlistedItems, setWishlistedItems] = useState<number[]>([4]);
  const [likedItems, setLikedItems] = useState<number[]>([]);

  const handleWishlist = () => {
    setIsWishlisted(!isWishlisted);
    toast.success(isWishlisted ? "Removed from wishlist" : "Added to wishlist");
  };

  const handleLike = () => {
    setIsLiked(!isLiked);
    toast.success(isLiked ? "Removed from liked items" : "Added to liked collection");
  };

  const handleRelatedWishlist = (productId: number) => {
    if (wishlistedItems.includes(productId)) {
      setWishlistedItems(wishlistedItems.filter(id => id !== productId));
      toast.success("Removed from wishlist");
    } else {
      setWishlistedItems([...wishlistedItems, productId]);
      toast.success("Added to wishlist");
    }
  };

  const handleRelatedLike = (productId: number) => {
    if (likedItems.includes(productId)) {
      setLikedItems(likedItems.filter(id => id !== productId));
      toast.success("Removed from liked items");
    } else {
      setLikedItems([...likedItems, productId]);
      toast.success("Added to liked collection");
    }
  };

  const handleQuantityChange = (change: number) => {
    const newQuantity = quantity + change;
    if (newQuantity > 0) {
      setQuantity(newQuantity);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-12">
          {/* Product Detail Section */}
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Product Images */}
            <div className="lg:w-1/2">
              <div className="mb-4 rounded-lg overflow-hidden">
                <img 
                  src={product.images[selectedImage]} 
                  alt={product.name} 
                  className="w-full h-auto object-cover aspect-square"
                />
              </div>
              <div className="grid grid-cols-4 gap-4">
                {product.images.map((image, index) => (
                  <div 
                    key={index} 
                    className={`rounded-md overflow-hidden cursor-pointer border-2 ${selectedImage === index ? 'border-brand-purple' : 'border-transparent'}`}
                    onClick={() => setSelectedImage(index)}
                  >
                    <img 
                      src={image} 
                      alt={`${product.name} view ${index + 1}`} 
                      className="w-full h-auto object-cover aspect-square"
                    />
                  </div>
                ))}
              </div>
            </div>
            
            {/* Product Info */}
            <div className="lg:w-1/2">
              <div className="mb-6">
                <Badge className="bg-brand-purple mb-4">Sale</Badge>
                <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
                <div className="flex items-center mb-4">
                  <div className="flex items-center text-amber-500 mr-4">
                    {[...Array(5)].map((_, index) => (
                      <Star 
                        key={index} 
                        className={`h-4 w-4 ${index < Math.floor(product.rating) ? "fill-amber-500 text-amber-500" : "text-gray-300"}`} 
                      />
                    ))}
                    <span className="ml-2 text-sm font-medium">{product.rating}</span>
                  </div>
                  <a href="#reviews" className="text-sm text-brand-purple">
                    {product.reviews.length} Reviews
                  </a>
                </div>
                <div className="flex items-center mb-6">
                  <span className="text-3xl font-bold">${product.price}</span>
                  {product.oldPrice && (
                    <span className="ml-3 text-lg text-muted-foreground line-through">${product.oldPrice}</span>
                  )}
                  {product.oldPrice && (
                    <Badge className="ml-3 bg-green-600">
                      Save ${product.oldPrice - product.price}
                    </Badge>
                  )}
                </div>
                <p className="text-muted-foreground mb-6">
                  {product.description}
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="flex items-center border rounded-md">
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="h-10 w-10 rounded-none"
                      onClick={() => handleQuantityChange(-1)}
                      disabled={quantity <= 1}
                    >
                      -
                    </Button>
                    <div className="w-12 h-10 flex items-center justify-center">
                      {quantity}
                    </div>
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="h-10 w-10 rounded-none"
                      onClick={() => handleQuantityChange(1)}
                    >
                      +
                    </Button>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    className="flex-1 bg-brand-purple hover:bg-brand-purple/90"
                  >
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    Add to Cart
                  </Button>
                  <Button 
                    variant="outline" 
                    className={`flex-1 ${isWishlisted ? "text-brand-purple border-brand-purple" : ""}`}
                    onClick={handleWishlist}
                  >
                    <Heart className={`mr-2 h-4 w-4 ${isWishlisted ? "fill-brand-purple text-brand-purple" : ""}`} />
                    {isWishlisted ? "Wishlisted" : "Add to Wishlist"}
                  </Button>
                </div>
                
                <div className="flex sm:flex-row gap-4">
                  <Button 
                    variant="outline" 
                    className={`flex-1 ${isLiked ? "text-red-500 border-red-500" : ""}`}
                    onClick={handleLike}
                  >
                    <Heart className={`mr-2 h-4 w-4 ${isLiked ? "fill-red-500 text-red-500" : ""}`} />
                    {isLiked ? "Liked" : "Like"}
                  </Button>
                  <Button variant="outline" className="flex-1">
                    <Share2 className="mr-2 h-4 w-4" />
                    Share
                  </Button>
                </div>
              </div>
              
              <div className="mt-8 border-t border-gray-200 pt-6">
                <h3 className="font-semibold mb-3">Product Details</h3>
                <dl className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                  {Object.entries(product.details).map(([key, value]) => (
                    <div key={key} className="flex flex-col">
                      <dt className="text-muted-foreground capitalize">{key}</dt>
                      <dd>{value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
          
          {/* Product Tabs Section */}
          <div className="mt-16">
            <Tabs defaultValue="description">
              <TabsList className="w-full max-w-md mx-auto grid grid-cols-3 mb-8">
                <TabsTrigger value="description">Description</TabsTrigger>
                <TabsTrigger value="details">Details</TabsTrigger>
                <TabsTrigger value="reviews" id="reviews">Reviews ({product.reviews.length})</TabsTrigger>
              </TabsList>
              
              <TabsContent value="description" className="p-6 bg-gray-50 rounded-lg">
                <div className="prose max-w-none">
                  <p>{product.description}</p>
                  <p className="mt-4">
                    Our diamond eternity rings are crafted with the highest quality materials and attention to detail. Each diamond is carefully selected for its brilliance and clarity, then precisely set to maximize sparkle and durability.
                  </p>
                  <p className="mt-4">
                    Whether worn as a wedding band, anniversary gift, or luxurious addition to your jewelry collection, this piece represents timeless elegance and lasting beauty.
                  </p>
                </div>
              </TabsContent>
              
              <TabsContent value="details" className="p-6 bg-gray-50 rounded-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-lg mb-4">Specifications</h3>
                    <dl className="space-y-3">
                      {Object.entries(product.details).map(([key, value]) => (
                        <div key={key} className="flex justify-between border-b pb-2">
                          <dt className="text-muted-foreground capitalize">{key}</dt>
                          <dd className="font-medium">{value}</dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-4">Care Instructions</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>Store in the provided jewelry box when not in use</li>
                      <li>Remove before swimming, showering, or exercising</li>
                      <li>Clean with a soft, lint-free cloth</li>
                      <li>Avoid contact with perfumes, lotions, and chemicals</li>
                      <li>Professional cleaning recommended every 6 months</li>
                    </ul>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="reviews" className="p-6 bg-gray-50 rounded-lg">
                <div className="space-y-8">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold text-lg">Customer Reviews</h3>
                      <div className="flex items-center mt-1">
                        <div className="flex items-center text-amber-500 mr-2">
                          {[...Array(5)].map((_, index) => (
                            <Star 
                              key={index} 
                              className={`h-4 w-4 ${index < Math.floor(product.rating) ? "fill-amber-500 text-amber-500" : "text-gray-300"}`} 
                            />
                          ))}
                        </div>
                        <span className="text-sm">Based on {product.reviews.length} reviews</span>
                      </div>
                    </div>
                    <Button className="bg-brand-purple hover:bg-brand-purple/90">Write a Review</Button>
                  </div>
                  
                  <div className="space-y-6">
                    {product.reviews.map((review) => (
                      <div key={review.id} className="border-b pb-6">
                        <div className="flex items-start">
                          <div className="w-10 h-10 rounded-full overflow-hidden mr-4">
                            <img 
                              src={review.avatar} 
                              alt={review.user} 
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <h4 className="font-semibold">{review.user}</h4>
                              <span className="text-sm text-muted-foreground">{review.date}</span>
                            </div>
                            <div className="flex items-center my-1">
                              {[...Array(5)].map((_, index) => (
                                <Star 
                                  key={index} 
                                  className={`h-3 w-3 ${index < review.rating ? "fill-amber-500 text-amber-500" : "text-gray-300"}`} 
                                />
                              ))}
                            </div>
                            <p className="text-muted-foreground mt-2">{review.comment}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
          
          {/* Related Products Section */}
          <div className="mt-20">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold">You May Also Like</h2>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="icon" id="prev-related" aria-label="Previous related products">
                  <ArrowLeft className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" id="next-related" aria-label="Next related products">
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  {...product}
                  isWishlisted={wishlistedItems.includes(product.id)}
                  isLiked={likedItems.includes(product.id)}
                  onWishlist={() => handleRelatedWishlist(product.id)}
                  onLike={() => handleRelatedLike(product.id)}
                  onAddToCart={() => console.log(`Added product ${product.id} to cart`)}
                  onCompare={() => console.log(`Added product ${product.id} to compare`)}
                />
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetail;
