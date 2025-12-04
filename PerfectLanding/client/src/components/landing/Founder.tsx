import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";
import founderImage from "@assets/WhatsApp_Image_2025-12-04_at_01.01.12_a177f220_1764791221568.jpg";

export default function Founder() {
  return (
    <section id="founder" className="py-20 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4" data-testid="badge-founder">
            Leadership
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-4" data-testid="text-founder-title">
            Meet Our Founder
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            The visionary behind 30+ years of architectural excellence
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute -inset-4 bg-primary/10 rounded-2xl transform rotate-3" />
              <div className="relative w-72 h-96 sm:w-80 sm:h-[28rem] rounded-xl overflow-hidden border-4 border-background shadow-xl">
                <img
                  src={founderImage}
                  alt="Er. Paspunoori Srinivas Gupta - Founder & MD of BBMC"
                  className="w-full h-full object-cover object-top"
                  data-testid="img-founder"
                />
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-foreground mb-2" data-testid="text-founder-name">
                Er. Paspunoori Srinivas Gupta
              </h3>
              <p className="text-primary font-medium text-lg">
                Founder & Managing Director
              </p>
              <p className="text-muted-foreground">
                Principal Consultant, BBMC Balaji Benchmark Consultants
              </p>
            </div>

            <Card className="border-primary/20 bg-primary/5">
              <CardContent className="p-6">
                <Quote className="w-8 h-8 text-primary/40 mb-3" />
                <p className="text-lg sm:text-xl text-foreground italic leading-relaxed" data-testid="text-founder-quote">
                  "At BBMC, we don't just build structures — we bring visions to life."
                </p>
              </CardContent>
            </Card>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                With over <span className="text-foreground font-semibold">30 years of expertise</span> in architecture, engineering, and construction, Er. Paspunoori Srinivas Gupta founded BBMC in <span className="text-foreground font-semibold">1995</span> with a vision to deliver exceptional quality and innovative designs.
              </p>
              <p>
                Under his leadership, BBMC has transformed ideas into iconic homes, campuses, and commercial landmarks across Telangana. His commitment to Vaasthu-compliant designs, customer satisfaction, and excellence has made BBMC a trusted name in the construction industry.
              </p>
              <p>
                Er. Gupta's hands-on approach and deep understanding of both traditional principles and modern engineering techniques ensure that every project receives the personalized attention it deserves.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <Badge variant="outline" className="text-sm py-1.5 px-3">
                30+ Years Experience
              </Badge>
              <Badge variant="outline" className="text-sm py-1.5 px-3">
                Since 1995
              </Badge>
              <Badge variant="outline" className="text-sm py-1.5 px-3">
                Vaasthu Expert
              </Badge>
              <Badge variant="outline" className="text-sm py-1.5 px-3">
                3000+ Happy Clients
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
