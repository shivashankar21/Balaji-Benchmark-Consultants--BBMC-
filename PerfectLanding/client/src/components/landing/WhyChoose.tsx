import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Paintbrush,
  CheckCircle2,
  Building,
  Users,
  Clock,
  Handshake,
} from "lucide-react";

const usps = [
  {
    icon: Paintbrush,
    title: "Tailor-Made Designs",
    description: "Custom architectural solutions crafted to match your unique vision and requirements.",
  },
  {
    icon: CheckCircle2,
    title: "100% Vaasthu Compliance",
    description: "All our designs follow traditional Vaasthu principles for harmony and prosperity.",
  },
  {
    icon: Building,
    title: "Bank Loan Support",
    description: "We provide bank-approved estimates and valuations to help secure your project financing.",
  },
  {
    icon: Users,
    title: "Client-First Approach",
    description: "Transparent communication and dedicated support throughout your project journey.",
  },
  {
    icon: Clock,
    title: "Timely Delivery",
    description: "We value your time and ensure quality delivery within committed timelines.",
  },
  {
    icon: Handshake,
    title: "Flexible Engagement",
    description: "Whether you need just Vaasthu consultation, interior design, planning, elevations, or a complete end-to-end construction project, we welcome all clients and deliver excellence at every scale.",
  },
];

export default function WhyChoose() {
  return (
    <section id="why-us" className="py-20 bg-background relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-40 h-40 border border-primary rounded-full" />
        <div className="absolute bottom-20 right-10 w-60 h-60 border border-primary rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 border border-primary rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4" data-testid="badge-why-choose">
            Why Choose Us
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-4" data-testid="text-why-choose-title">
            The BBMC Advantage
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            What sets us apart from the rest and makes us your ideal partner for all construction needs.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {usps.map((usp, index) => (
            <Card
              key={index}
              className="hover-elevate transition-all border-border"
              data-testid={`card-usp-${index}`}
            >
              <CardContent className="p-6 text-center">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <usp.icon className="w-7 h-7 text-primary" strokeWidth={1.5} />
                </div>
                <h3 className="font-serif font-semibold text-lg text-foreground mb-2">
                  {usp.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {usp.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
