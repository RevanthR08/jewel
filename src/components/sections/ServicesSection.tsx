
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Smartphone, VideoIcon, RocketIcon, BrainCircuit, LayoutGrid } from "lucide-react";

const services = [
  {
    icon: <Code className="w-10 h-10 text-brand-purple" />,
    title: "No-Code App Development",
    description: "Create powerful applications without writing a single line of code. Our AI-assisted builders handle the complexity for you."
  },
  {
    icon: <VideoIcon className="w-10 h-10 text-brand-cyan" />,
    title: "AI Content Generation",
    description: "Generate high-quality, engaging content for social media, marketing, and more with our advanced AI tools."
  },
  {
    icon: <Smartphone className="w-10 h-10 text-brand-magenta" />,
    title: "Mobile App Creation",
    description: "Transform your ideas into beautiful, functional mobile apps using our no-code platform and AI-driven design tools."
  },
  {
    icon: <BrainCircuit className="w-10 h-10 text-brand-purple" />,
    title: "Smart Workflow Automation",
    description: "Automate 80% of your development and content creation tasks with intelligent AI-powered workflows."
  },
  {
    icon: <LayoutGrid className="w-10 h-10 text-brand-cyan" />,
    title: "Social Media Management",
    description: "Streamline your social media presence with AI-generated content and automated posting schedules."
  },
  {
    icon: <RocketIcon className="w-10 h-10 text-brand-magenta" />,
    title: "Performance Optimization",
    description: "Enhance your digital product performance with AI-driven analysis and optimization recommendations."
  }
];

const ServicesSection = () => {
  return (
    <section className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Innovative Solutions</span> for Modern Businesses
          </h2>
          
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="card-hover border border-border/40">
              <CardHeader>
                <div className="mb-4">{service.icon}</div>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
