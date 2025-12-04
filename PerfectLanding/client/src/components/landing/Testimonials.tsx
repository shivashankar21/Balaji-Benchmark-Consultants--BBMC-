import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

// todo: remove mock functionality - replace with real testimonials from Google Reviews
const testimonials = [
  {
    id: 1,
    name: "Rajesh K.",
    initials: "RK",
    review: "Excellent architectural design and Vaasthu consultation. The team was very professional and understood our requirements perfectly. Highly recommended for anyone looking for quality construction services.",
    rating: 5,
  },
  {
    id: 2,
    name: "Priya M.",
    initials: "PM",
    review: "BBMC delivered our dream home exactly as we envisioned. Their attention to detail and commitment to Vaasthu principles is commendable. Great experience working with them.",
    rating: 5,
  },
  {
    id: 3,
    name: "Suresh R.",
    initials: "SR",
    review: "Professional team with over 30 years of experience. They helped us with structural planning and bank loan estimates. Very satisfied with their transparent approach.",
    rating: 5,
  },
  {
    id: 4,
    name: "Anitha D.",
    initials: "AD",
    review: "We got our commercial building designed by BBMC. The interior design suggestions were creative and practical. They completed the project on time with great quality.",
    rating: 5,
  },
  {
    id: 5,
    name: "Venkat P.",
    initials: "VP",
    review: "Best consultants in Hyderabad for Vaasthu-compliant designs. The team is knowledgeable and very client-friendly. Will definitely recommend to others.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4" data-testid="badge-testimonials">
            Testimonials
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-4" data-testid="text-testimonials-title">
            What Our Clients Say
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Read reviews from our satisfied clients who trusted us with their dream projects.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.slice(0, 3).map((testimonial) => (
            <Card
              key={testimonial.id}
              className="hover-elevate transition-all border-border"
              data-testid={`card-testimonial-${testimonial.id}`}
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6 line-clamp-4">
                  "{testimonial.review}"
                </p>
                <div className="flex items-center gap-3">
                  <Avatar className="w-10 h-10 border border-border">
                    <AvatarFallback className="bg-primary/10 text-primary font-medium text-sm">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium text-foreground text-sm">{testimonial.name}</div>
                    <div className="text-xs text-muted-foreground">Google Review</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8 grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {testimonials.slice(3, 5).map((testimonial) => (
            <Card
              key={testimonial.id}
              className="hover-elevate transition-all border-border"
              data-testid={`card-testimonial-${testimonial.id}`}
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6 line-clamp-4">
                  "{testimonial.review}"
                </p>
                <div className="flex items-center gap-3">
                  <Avatar className="w-10 h-10 border border-border">
                    <AvatarFallback className="bg-primary/10 text-primary font-medium text-sm">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium text-foreground text-sm">{testimonial.name}</div>
                    <div className="text-xs text-muted-foreground">Google Review</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
