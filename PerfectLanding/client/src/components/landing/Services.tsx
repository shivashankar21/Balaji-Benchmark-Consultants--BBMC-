import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Building2,
  Ruler,
  Palette,
  Compass,
  Hammer,
  Calculator,
  Map,
  HardHat,
  Layers,
} from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "Architectural & Engineering Design",
    description: "Comprehensive architectural planning and engineering solutions for all project types.",
  },
  {
    icon: Ruler,
    title: "Structural Engineering",
    description: "Expert structural analysis and design ensuring safety and durability.",
  },
  {
    icon: Palette,
    title: "Interior Design & Space Planning",
    description: "Transform spaces with creative interior designs that blend aesthetics with functionality.",
  },
  {
    icon: Compass,
    title: "Vaasthu Consultation",
    description: "Traditional Vaasthu-compliant designs for harmony and prosperity in your space.",
  },
  {
    icon: Hammer,
    title: "Construction & Renovation",
    description: "Quality construction and renovation services with attention to every detail.",
  },
  {
    icon: HardHat,
    title: "Builders & Developers",
    description: "Complete building solutions from foundation to finish with experienced construction teams.",
  },
  {
    icon: Calculator,
    title: "Estimates & Valuations",
    description: "Bank-approved estimates and professional property valuations.",
  },
  {
    icon: Map,
    title: "Land Surveying & Plot Development",
    description: "Accurate land surveying and expert plot development planning.",
  },
  {
    icon: Layers,
    title: "Elevations for Building",
    description: "Stunning building elevation designs that enhance aesthetics and create lasting impressions.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4" data-testid="badge-services">
            Our Services
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-4" data-testid="text-services-title">
            Comprehensive Solutions for Your Project
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From concept to completion, we offer a full range of professional services to bring your vision to life.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover-elevate transition-all border-border"
              data-testid={`card-service-${index}`}
            >
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-serif font-semibold text-lg text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
