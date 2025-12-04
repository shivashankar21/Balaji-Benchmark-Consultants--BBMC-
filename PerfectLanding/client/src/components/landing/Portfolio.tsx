import { useState, useEffect, useRef } from "react";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight } from "lucide-react";
import projectImage1 from "@assets/7fed6f05-b190-4486-acba-e757fe5491af_1764800275151.png";
import projectImage2 from "@assets/89ddb22a-bffb-4c3e-b7a5-701f9f128cdf_1764800278833.png";
import projectImage3 from "@assets/4256ee6d-5a19-4de6-af15-ac9bf91f479a_1764800283268.png";
import projectImage4 from "@assets/820319d6-06ef-43c5-a79e-0eea99cbff9c_1764800287073.png";
import projectImage5 from "@assets/8463714e-7148-4b72-8673-d725b3ba877f_1764800290473.png";
import projectImage6 from "@assets/b3b8c03f-9aab-412e-853a-7ee3bed645e5_1764800293357.png";
import projectImage7 from "@assets/IMG-20251204-WA0040_1764800296178.jpg";
import projectImage8 from "@assets/IMG-20251204-WA0041_1764800299854.jpg";
import projectImage9 from "@assets/IMG-20251204-WA0061_1764800303296.jpg";
import projectImage10 from "@assets/IMG-20251204-WA0063_1764800306650.jpg";
import projectImage11 from "@assets/IMG-20251204-WA0065_1764800309875.jpg";
import projectImage12 from "@assets/IMG-20251204-WA0070_1764800314247.jpg";

import interiorImage1 from "@assets/IMG-20251204-WA0082_1764801531023.jpg";
import interiorImage2 from "@assets/IMG-20251204-WA0083_1764801531023.jpg";
import interiorImage3 from "@assets/IMG-20251204-WA0093_1764801531025.jpg";
import interiorImage4 from "@assets/IMG-20251204-WA0095_1764801531025.jpg";
import interiorImage5 from "@assets/IMG-20251204-WA0100_1764801452430.jpg";
import interiorImage6 from "@assets/IMG-20251204-WA0101_1764801452431.jpg";
import interiorImage7 from "@assets/IMG-20251204-WA0102_1764801452431.jpg";
import interiorImage8 from "@assets/IMG-20251204-WA0107_1764801452434.jpg";
import interiorImage9 from "@assets/IMG-20251204-WA0108_1764801452434.jpg";
import interiorImage10 from "@assets/IMG-20251204-WA0110_1764801580432.jpg";
import interiorImage11 from "@assets/IMG-20251204-WA0111_1764801580433.jpg";
import interiorImage12 from "@assets/IMG-20251204-WA0117_1764801580436.jpg";
import interiorImage13 from "@assets/IMG-20251204-WA0118_1764801580436.jpg";
import interiorImage14 from "@assets/IMG-20251204-WA0160_1764801580439.jpg";
import interiorImage15 from "@assets/IMG-20251204-WA0161_1764801580440.jpg";

const projectImages = [
  { id: 1, src: projectImage1, title: "Commercial Complex with Retail" },
  { id: 2, src: projectImage2, title: "Minimalist Residential Building" },
  { id: 3, src: projectImage3, title: "Contemporary Luxury Villa" },
  { id: 4, src: projectImage4, title: "Modern Apartment Complex" },
  { id: 5, src: projectImage5, title: "Mixed-Use Commercial Building" },
  { id: 6, src: projectImage6, title: "NVS Heights Tower" },
  { id: 7, src: projectImage7, title: "Retail & Residential Complex" },
  { id: 8, src: projectImage8, title: "Convention Hall" },
  { id: 9, src: projectImage9, title: "Corporate Office Building" },
  { id: 10, src: projectImage10, title: "Designer Apartment Complex" },
  { id: 11, src: projectImage11, title: "Pareeksha Residential Tower" },
  { id: 12, src: projectImage12, title: "Premium Duplex Villa" },
];

const interiorImages = [
  { id: 1, src: interiorImage1, title: "Elegant Dining Room" },
  { id: 2, src: interiorImage2, title: "Modern Living Room" },
  { id: 3, src: interiorImage3, title: "Urban Coffee Cafe" },
  { id: 4, src: interiorImage4, title: "Industrial Restaurant Design" },
  { id: 5, src: interiorImage5, title: "Luxury Open Living Space" },
  { id: 6, src: interiorImage6, title: "Premium Living with Fireplace" },
  { id: 7, src: interiorImage7, title: "Dark Luxury Kitchen" },
  { id: 8, src: interiorImage8, title: "Modern Modular Kitchen" },
  { id: 9, src: interiorImage9, title: "Rooftop Terrace Lounge" },
  { id: 10, src: interiorImage10, title: "Contemporary Bathroom" },
  { id: 11, src: interiorImage11, title: "Luxury Canopy Bedroom" },
  { id: 12, src: interiorImage12, title: "Designer Staircase" },
  { id: 13, src: interiorImage13, title: "Minimalist Master Bedroom" },
  { id: 14, src: interiorImage14, title: "Upscale Dining Experience" },
  { id: 15, src: interiorImage15, title: "Grand Foyer Design" },
];

const ITEMS_PER_PAGE = 6;
const AUTO_TOGGLE_INTERVAL = 6000;
const PAUSE_DURATION = 15000;

type TabType = "projects" | "interiors";

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState<TabType>("projects");
  const [projectPage, setProjectPage] = useState(0);
  const [interiorPage, setInteriorPage] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const pauseTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveTab((prev) => (prev === "projects" ? "interiors" : "projects"));
    }, AUTO_TOGGLE_INTERVAL);

    return () => clearInterval(interval);
  }, [isPaused]);

  const handleManualInteraction = () => {
    setIsPaused(true);
    
    if (pauseTimeoutRef.current) {
      clearTimeout(pauseTimeoutRef.current);
    }
    
    pauseTimeoutRef.current = setTimeout(() => {
      setIsPaused(false);
    }, PAUSE_DURATION);
  };

  useEffect(() => {
    return () => {
      if (pauseTimeoutRef.current) {
        clearTimeout(pauseTimeoutRef.current);
      }
    };
  }, []);
  
  const currentImages = activeTab === "projects" ? projectImages : interiorImages;
  const currentPage = activeTab === "projects" ? projectPage : interiorPage;
  const setCurrentPage = activeTab === "projects" ? setProjectPage : setInteriorPage;
  
  const totalPages = Math.ceil(currentImages.length / ITEMS_PER_PAGE);
  const startIndex = currentPage * ITEMS_PER_PAGE;
  const visibleItems = currentImages.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const nextPage = () => {
    handleManualInteraction();
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    handleManualInteraction();
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleTabChange = (tab: TabType) => {
    handleManualInteraction();
    setActiveTab(tab);
  };

  const handlePageChange = (index: number) => {
    handleManualInteraction();
    setCurrentPage(index);
  };

  return (
    <section id="portfolio" className="py-20 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4" data-testid="badge-portfolio">
            Portfolio
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-4 transition-all duration-300" data-testid="text-portfolio-title">
            {activeTab === "projects" ? "Our Projects" : "Interior Designing"}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8 transition-all duration-300">
            {activeTab === "projects" 
              ? "Explore our diverse range of architectural projects that showcase our expertise and commitment to excellence."
              : "Discover our stunning interior designs that blend aesthetics with functionality for modern living spaces."
            }
          </p>

          <div className="flex justify-center gap-4 mb-8">
            <button
              onClick={() => handleTabChange("projects")}
              className={`px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 ${
                activeTab === "projects"
                  ? "bg-primary text-primary-foreground shadow-lg scale-105"
                  : "bg-background border border-border text-foreground hover:bg-muted"
              }`}
              data-testid="tab-projects"
            >
              Our Projects
            </button>
            <button
              onClick={() => handleTabChange("interiors")}
              className={`px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 ${
                activeTab === "interiors"
                  ? "bg-primary text-primary-foreground shadow-lg scale-105"
                  : "bg-background border border-border text-foreground hover:bg-muted"
              }`}
              data-testid="tab-interiors"
            >
              Interior Designing
            </button>
          </div>

          <div className="flex justify-center gap-3 mb-4">
            <div 
              className={`h-1 rounded-full transition-all duration-500 ${
                activeTab === "projects" ? "w-16 bg-primary" : "w-8 bg-muted-foreground/30"
              }`}
            />
            <div 
              className={`h-1 rounded-full transition-all duration-500 ${
                activeTab === "interiors" ? "w-16 bg-primary" : "w-8 bg-muted-foreground/30"
              }`}
            />
          </div>
        </div>

        <div className="relative">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {visibleItems.map((item) => (
              <div
                key={`${activeTab}-${item.id}`}
                className="group relative bg-background rounded-lg border border-border overflow-hidden hover-elevate transition-all animate-in fade-in duration-500"
                data-testid={`card-${activeTab}-${item.id}`}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="font-serif font-semibold text-white text-lg">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prevPage}
              disabled={currentPage === 0}
              className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${
                currentPage === 0
                  ? "bg-muted text-muted-foreground cursor-not-allowed"
                  : "bg-primary text-primary-foreground hover:bg-primary/90"
              }`}
              aria-label="Previous items"
              data-testid="button-prev"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <div className="flex items-center gap-2">
              {Array.from({ length: totalPages }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => handlePageChange(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    index === currentPage
                      ? "bg-primary w-8"
                      : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                  aria-label={`Go to page ${index + 1}`}
                  data-testid={`button-page-${index}`}
                />
              ))}
            </div>

            <button
              onClick={nextPage}
              disabled={currentPage === totalPages - 1}
              className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${
                currentPage === totalPages - 1
                  ? "bg-muted text-muted-foreground cursor-not-allowed"
                  : "bg-primary text-primary-foreground hover:bg-primary/90"
              }`}
              aria-label="Next items"
              data-testid="button-next"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          <div className="text-center mt-4 text-sm text-muted-foreground">
            Showing {startIndex + 1}-{Math.min(startIndex + ITEMS_PER_PAGE, currentImages.length)} of {currentImages.length} {activeTab === "projects" ? "projects" : "designs"}
          </div>
        </div>
      </div>
    </section>
  );
}
