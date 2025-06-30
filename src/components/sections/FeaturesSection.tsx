
import React from "react";
import { Clock, Zap, BarChart3, Lock, Repeat, Settings } from "lucide-react";

const features = [
  {
    icon: <Clock className="h-6 w-6" />,
    title: "Time Efficiency",
    description: "Reduce development and content creation time by up to 80% with AI automation."
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: "Rapid Iteration",
    description: "Quickly test and refine ideas with AI-assisted development cycles."
  },
  {
    icon: <BarChart3 className="h-6 w-6" />,
    title: "Data-Driven Results",
    description: "Make decisions based on AI analysis of performance metrics and user behavior."
  },
  {
    icon: <Lock className="h-6 w-6" />,
    title: "Secure Development",
    description: "Enterprise-grade security built into every application we develop."
  },
  {
    icon: <Repeat className="h-6 w-6" />,
    title: "Continuous Improvement",
    description: "AI continuously learns from user interactions to improve performance."
  },
  {
    icon: <Settings className="h-6 w-6" />,
    title: "Customizable Workflow",
    description: "Tailor the AI automation to fit your specific business needs and processes."
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-mesh">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose Our <span className="gradient-text">AI-Powered</span> Approach
          </h2>
          <p className="text-muted-foreground text-lg">
            Our innovative technology delivers real benefits that transform how you build apps and create content
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white bg-opacity-50 backdrop-blur-lg p-6 rounded-lg border border-border/50 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 rounded-lg bg-brand-purple/10 flex items-center justify-center mb-4 text-brand-purple">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
