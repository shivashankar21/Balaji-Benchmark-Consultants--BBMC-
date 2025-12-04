import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, ChevronLeft, ChevronRight } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import heroImage from "@assets/generated_images/modern_architecture_building_hero.png";
import logoImage from "@assets/WhatsApp_Image_2024-10-09_at_13.29.25_02525d47_1764782945945.jpg";
import architectImage from "@assets/generated_images/architect_working_on_blueprints.png";
import engineerImage from "@assets/generated_images/engineer_at_construction_site.png";
import vaasthuImage from "@assets/generated_images/vaasthu_consultation_scene.png";
import interiorImage from "@assets/generated_images/modern_interior_design_room.png";
import buildersImage from "@assets/generated_images/builders_at_construction_site.png";
import developersImage from "@assets/generated_images/real_estate_development_project.png";

const slides = [
  {
    image: heroImage,
    title: "Designing Dreams. Building Excellence.",
    subtitle: "Professional Architects, Engineers, Interior Designers, Vaasthu Experts, and Builders with 30+ Years of Excellence",
  },
  {
    image: architectImage,
    title: "Expert Architects",
    subtitle: "Innovative architectural designs that blend creativity with functionality for your dream spaces",
  },
  {
    image: engineerImage,
    title: "Professional Engineers",
    subtitle: "Structural engineering excellence ensuring safety, durability, and precision in every project",
  },
  {
    image: vaasthuImage,
    title: "Vaasthu Consultants",
    subtitle: "Traditional Vaasthu-compliant designs bringing harmony, prosperity, and positive energy to your space",
  },
  {
    image: interiorImage,
    title: "Interior Designers",
    subtitle: "Transform your spaces with elegant interiors that reflect your style and personality",
  },
  {
    image: buildersImage,
    title: "Expert Builders",
    subtitle: "Quality construction from foundation to finish with attention to every detail",
  },
  {
    image: developersImage,
    title: "Property Developers",
    subtitle: "Complete real estate development solutions for residential and commercial projects",
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  const handleCall = () => {
    window.open("tel:+919391036765");
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/919391036765?text=Hi%20BBMC,%20I%20would%20like%20to%20inquire%20about%20your%20services.");
  };

  const handleConsultation = () => {
    const contactSection = document.querySelector("#contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${slide.image})` }}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
        <div className="mb-8">
          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <img 
              src={logoImage} 
              alt="BBMC Logo" 
              className="h-8 w-auto object-contain"
              data-testid="img-logo-hero"
            />
            <span className="text-white/90 font-medium text-sm">Balaji Benchmark Consultants</span>
          </div>
        </div>

        <div className="min-h-[180px] sm:min-h-[160px] flex flex-col justify-center">
          <h1 
            className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white mb-6 leading-tight transition-all duration-500" 
            data-testid="text-hero-headline"
          >
            {slides[currentSlide].title}
          </h1>

          <p 
            className="text-lg sm:text-xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed transition-all duration-500" 
            data-testid="text-hero-subheading"
          >
            {slides[currentSlide].subtitle}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            size="lg"
            className="w-full sm:w-auto min-h-12 px-8 text-base font-semibold"
            onClick={handleCall}
            data-testid="button-call-hero"
          >
            <Phone className="w-5 h-5 mr-2" />
            Call Now
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="w-full sm:w-auto min-h-12 px-8 text-base font-semibold bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 hover:text-white"
            onClick={handleConsultation}
            data-testid="button-consultation-hero"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            Get a Consultation
          </Button>

          <Button
            size="lg"
            className="w-full sm:w-auto min-h-12 px-8 text-base font-semibold bg-[#25D366] hover:bg-[#20BD5A] border-[#25D366]"
            onClick={handleWhatsApp}
            data-testid="button-whatsapp-hero"
          >
            <SiWhatsapp className="w-5 h-5 mr-2" />
            WhatsApp
          </Button>
        </div>

        <div className="flex items-center justify-center gap-2 mt-10">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? "bg-primary w-8" 
                  : "bg-white/40 hover:bg-white/60"
              }`}
              aria-label={`Go to slide ${index + 1}`}
              data-testid={`button-slide-${index}`}
            />
          ))}
        </div>
      </div>

      <button
        onClick={() => {
          prevSlide();
          setIsAutoPlaying(false);
          setTimeout(() => setIsAutoPlaying(true), 10000);
        }}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white/80 hover:bg-white/20 hover:text-white transition-all hidden sm:flex"
        aria-label="Previous slide"
        data-testid="button-prev-slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={() => {
          nextSlide();
          setIsAutoPlaying(false);
          setTimeout(() => setIsAutoPlaying(true), 10000);
        }}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white/80 hover:bg-white/20 hover:text-white transition-all hidden sm:flex"
        aria-label="Next slide"
        data-testid="button-next-slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2" />
        </div>
      </div>
    </section>
  );
}
