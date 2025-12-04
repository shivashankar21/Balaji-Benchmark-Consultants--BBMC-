import { Badge } from "@/components/ui/badge";
import { Award, CheckCircle, Users, Building2 } from "lucide-react";

const highlights = [
  { icon: Award, label: "30+ Years", description: "of Excellence" },
  { icon: CheckCircle, label: "Vaasthu Compliant", description: "Designs" },
  { icon: Users, label: "3000+", description: "Happy Clients" },
  { icon: Building2, label: "500+", description: "Projects Delivered" },
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Badge variant="secondary" className="mb-4" data-testid="badge-about">
              About BBMC
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-6" data-testid="text-about-title">
              Building Trust Through Quality & Innovation
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6" data-testid="text-about-description">
              Balaji Benchmark Consultants (BBMC) is a premier Hyderabad-based firm offering comprehensive end-to-end services in architecture, engineering, interior design, Vaasthu consulting, construction, and building planning. With over three decades of industry expertise, we have established ourselves as trusted partners for both residential and commercial projects.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Our commitment to quality construction, creative planning, and strong focus on Vaasthu-compliant designs has earned us the trust of countless clients across Telangana and beyond. We take pride in transforming visions into reality while maintaining the highest standards of excellence.
            </p>

            <div className="flex flex-wrap gap-3">
              <Badge variant="outline" className="text-sm py-1.5 px-3">
                Architectural Design
              </Badge>
              <Badge variant="outline" className="text-sm py-1.5 px-3">
                Structural Engineering
              </Badge>
              <Badge variant="outline" className="text-sm py-1.5 px-3">
                Interior Design
              </Badge>
              <Badge variant="outline" className="text-sm py-1.5 px-3">
                Vaasthu Consulting
              </Badge>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="bg-background rounded-lg p-6 border border-border hover-elevate transition-all"
                data-testid={`card-highlight-${index}`}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="text-2xl sm:text-3xl font-serif font-bold text-foreground mb-1">
                  {item.label}
                </div>
                <div className="text-sm text-muted-foreground">
                  {item.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
