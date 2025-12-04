import { SiInstagram, SiYoutube, SiGoogle } from "react-icons/si";
import logoImage from "@assets/WhatsApp_Image_2024-10-09_at_13.29.25_02525d47_1764782945945.jpg";

const quickLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
];

const services = [
  "Architectural Design",
  "Interior Design",
  "Vaasthu Consultation",
  "Construction",
];

const socialLinks = [
  {
    icon: SiInstagram,
    label: "Instagram",
    href: "https://www.instagram.com/srinivasguptapaspunoori_bbmc/profile",
  },
  {
    icon: SiYoutube,
    label: "YouTube",
    href: "https://www.youtube.com/@bbmcconsultants",
  },
  {
    icon: SiGoogle,
    label: "Google",
    href: "https://maps.app.goo.gl/VeRk9wKnZJkvT1kF6",
  },
];

export default function Footer() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[#111111] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="mb-4">
              <img 
                src={logoImage} 
                alt="BBMC Logo" 
                className="h-16 w-auto object-contain"
                data-testid="img-logo-footer"
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Architects | Engineers | Vaasthu Consultants | Interior Designers | Builders | Developers
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center text-gray-400 hover:text-primary hover:bg-white/20 transition-colors"
                  data-testid={`footer-social-${social.label.toLowerCase()}`}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-serif font-semibold text-base mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-400 text-sm hover:text-primary transition-colors"
                    data-testid={`footer-link-${link.label.toLowerCase()}`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif font-semibold text-base mb-4">Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-gray-400 text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif font-semibold text-base mb-4">Contact Info</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <a
                  href="tel:+919391036765"
                  className="hover:text-primary transition-colors"
                  data-testid="footer-link-phone"
                >
                  +91 93910 36765
                </a>
              </li>
              <li>
                <a
                  href="mailto:bbmcconsultants@gmail.com"
                  className="hover:text-primary transition-colors"
                  data-testid="footer-link-email"
                >
                  bbmcconsultants@gmail.com
                </a>
              </li>
              <li className="leading-relaxed">
                Boduppal, Hyderabad,
                <br />
                Telangana - 500092
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-gray-500 text-sm" data-testid="text-copyright">
            &copy; {new Date().getFullYear()} Balaji Benchmark Consultants (BBMC). All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
