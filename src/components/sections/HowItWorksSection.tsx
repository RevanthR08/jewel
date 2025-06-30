
import React from "react";
import { CheckCircle } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Define Your Project",
    description: "Tell us what you want to build or create, whether it's an app, a website, or content for social media.",
    image: "step1.svg"
  },
  {
    number: "02",
    title: "AI Analysis & Planning",
    description: "Our AI analyzes your requirements and creates a detailed plan, identifying tasks that can be automated.",
    image: "step2.svg"
  },
  {
    number: "03",
    title: "Automated Development",
    description: "80% of the work is handled automatically by our AI tools, from code generation to content creation.",
    image: "step3.svg"
  },
  {
    number: "04",
    title: "Human Refinement",
    description: "Our experts review and refine the AI output, ensuring quality and adding the human touch where needed.",
    image: "step4.svg"
  }
];

const HowItWorksSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How Our <span className="gradient-text">Jewellery</span> Works
          </h2>
          <p className="text-muted-foreground text-lg">
            Our streamlined process eliminates 80% of manual work through innovative AI technologies
          </p>
        </div>
        
        <div className="space-y-12 mt-12">
          {steps.map((step, index) => (
            <div key={index} className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-8 lg:gap-12`}>
              <div className="flex-1">
                <div className="bg-secondary/50 p-6 rounded-xl relative">
                  <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-brand-purple flex items-center justify-center text-white font-bold">
                    {step.number}
                  </div>
                  <div className="h-64 flex items-center justify-center">
                    {/* Placeholder for actual images */}
                    <div className="w-48 h-48 rounded-full bg-gradient-to-br from-brand-purple/20 to-brand-cyan/20 flex items-center justify-center">
                      <span className="text-6xl opacity-50">🚀</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1 space-y-4">
                <h3 className="text-2xl font-bold">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
                <div className="pt-4">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                    <p>Reduces development time by up to 80%</p>
                  </div>
                  <div className="flex items-start gap-2 mt-2">
                    <CheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                    <p>Ensures consistent quality across all outputs</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
