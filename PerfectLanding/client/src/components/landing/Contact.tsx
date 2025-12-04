import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock, ExternalLink } from "lucide-react";
import { SiWhatsapp, SiInstagram, SiYoutube, SiGoogle, SiFacebook } from "react-icons/si";

const googleMapsUrl = "https://maps.app.goo.gl/VeRk9wKnZJkvT1kF6";
const googleMapsEmbedUrl = "https://www.google.com/maps?q=17.4175222,78.5851395&z=17&output=embed";

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "+91 93910 36765",
    secondValue: "+91 96429 81899",
    href: "tel:+919391036765",
    secondHref: "tel:+919642981899",
  },
  {
    icon: Mail,
    label: "Email",
    value: "bbmcconsultants@gmail.com",
    href: "mailto:bbmcconsultants@gmail.com",
  },
  {
    icon: Clock,
    label: "Working Hours",
    value: "Mon - Sun: 9:00 AM - 10:00 PM",
    href: null,
  },
];

const socialLinks = [
  {
    icon: SiFacebook,
    label: "Facebook",
    href: "https://www.facebook.com/share/1BThqWfbeZ/",
    color: "hover:text-blue-600",
  },
  {
    icon: SiInstagram,
    label: "Instagram",
    href: "https://www.instagram.com/srinivasguptapaspunoori_bbmc/profile",
    color: "hover:text-pink-500",
  },
  {
    icon: SiYoutube,
    label: "YouTube",
    href: "https://www.youtube.com/@bbmcconsultants",
    color: "hover:text-red-500",
  },
  {
    icon: SiGoogle,
    label: "Google Maps",
    href: googleMapsUrl,
    color: "hover:text-blue-500",
  },
];

export default function Contact() {
  const handleWhatsApp = () => {
    window.open("https://wa.me/919391036765?text=Hi%20BBMC,%20I%20would%20like%20to%20inquire%20about%20your%20services.");
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4" data-testid="badge-contact">
            Contact Us
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-4" data-testid="text-contact-title">
            Get In Touch
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Ready to start your project? Reach out to us for a free consultation and let's build your dream together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <Card className="border-border">
              <CardContent className="p-6 space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">{item.label}</div>
                      {item.href ? (
                        <div className="flex flex-col gap-1">
                          <a
                            href={item.href}
                            className="text-foreground font-medium hover:text-primary transition-colors"
                            data-testid={`link-contact-${item.label.toLowerCase()}`}
                          >
                            {item.value}
                          </a>
                          {"secondValue" in item && item.secondValue && (
                            <a
                              href={item.secondHref}
                              className="text-foreground font-medium hover:text-primary transition-colors"
                              data-testid={`link-contact-${item.label.toLowerCase()}-2`}
                            >
                              {item.secondValue}
                            </a>
                          )}
                        </div>
                      ) : (
                        <div className="text-foreground font-medium">{item.value}</div>
                      )}
                    </div>
                  </div>
                ))}

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Address</div>
                    <div className="text-foreground font-medium leading-relaxed">
                      Plot No.12, Street No.1, Srinagar Colony,
                      <br />
                      Adjacent lane to Universe Bakery,
                      <br />
                      Near Ambedkar Statue, Boduppal,
                      <br />
                      Hyderabad, Telangana - 500092
                    </div>
                    <a
                      href={googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-primary text-sm mt-2 hover:underline"
                      data-testid="link-directions"
                    >
                      Get Directions <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex flex-wrap items-center gap-4">
              <Button
                size="lg"
                className="flex-1 sm:flex-none bg-[#25D366] hover:bg-[#20BD5A] min-h-12"
                onClick={handleWhatsApp}
                data-testid="button-whatsapp-contact"
              >
                <SiWhatsapp className="w-5 h-5 mr-2" />
                Chat on WhatsApp
              </Button>

              <div className="flex items-center gap-2">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 bg-muted rounded-lg flex items-center justify-center text-muted-foreground transition-colors ${social.color}`}
                    data-testid={`link-social-${social.label.toLowerCase()}`}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <div className="h-[400px] lg:h-auto rounded-lg overflow-hidden border border-border">
              <iframe
                src={googleMapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "400px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="BBMC Location"
                data-testid="map-embed"
              />
            </div>
            <div className="text-right">
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-primary text-sm hover:underline"
                data-testid="link-view-larger-map"
              >
                View larger map <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
