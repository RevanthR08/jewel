
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";

interface Testimonial {
  id: number;
  name: string;
  title: string;
  image: string;
  rating: number;
  review: string;
  product: string;
}

const TestimonialsSection = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Emma Wilson",
      title: "Fashion Designer",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=761&q=80",
      rating: 5,
      review: "The pearl necklace I purchased exceeded all my expectations. The quality and craftsmanship are exceptional, and it has become my favorite piece for special occasions.",
      product: "Pearl Necklace"
    },
    {
      id: 2,
      name: "James Miller",
      title: "Executive Director",
      image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      rating: 5,
      review: "I purchased a diamond eternity ring for my wife's anniversary. The craftsmanship is outstanding, and the customer service made the experience even better.",
      product: "Diamond Eternity Ring"
    },
    {
      id: 3,
      name: "Sophia Chen",
      title: "Interior Designer",
      image: "https://images.unsplash.com/photo-1614644147798-f8c0fc9da7f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
      rating: 4,
      review: "The sapphire earrings are absolutely stunning. They catch the light beautifully and have received so many compliments. Definitely worth the investment.",
      product: "Sapphire Earrings"
    },
    {
      id: 4,
      name: "Michael Thompson",
      title: "Photographer",
      image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      rating: 5,
      review: "I bought the gold bracelet as a gift, and it was beautifully packaged. The recipient was thrilled with both the design and quality. Will definitely shop here again.",
      product: "Gold Bracelet"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4">Customer Reviews</h2>
          <p className="text-muted-foreground">
            See what our customers have to say about their experience with our jewelry
          </p>
        </div>
        
        <Carousel className="w-full max-w-5xl mx-auto">
          <CarouselContent>
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/2">
                <Card className="border-0 shadow-md h-full">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="font-semibold">{testimonial.name}</h3>
                        <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center mb-4">
                      {[...Array(5)].map((_, index) => (
                        <Star 
                          key={index} 
                          className={`h-4 w-4 ${index < testimonial.rating ? "fill-amber-500 text-amber-500" : "text-gray-300"}`} 
                        />
                      ))}
                    </div>
                    
                    <p className="text-muted-foreground flex-grow">{testimonial.review}</p>
                    
                    <div className="mt-4 pt-4 border-t">
                      <p className="text-sm font-medium">Purchased: {testimonial.product}</p>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-8">
            <CarouselPrevious className="relative static mx-2 left-0 translate-y-0" />
            <CarouselNext className="relative static mx-2 right-0 translate-y-0" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default TestimonialsSection;
