import { useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { cn } from "@/lib/utils";

import companySign from "@/assets/gallery/company-sign.png";
import ceoPortrait from "@/assets/gallery/ceo-portrait.png";
import drRexOffice1 from "@/assets/gallery/dr-rex-office-1.png";
import drRexOffice2 from "@/assets/gallery/dr-rex-office-2.png";
import drRexLibrary from "@/assets/gallery/dr-rex-library.png";
import companyLogoMain from "@/assets/gallery/company-logo-main.png";
import exploreImpact from "@/assets/gallery/explore-impact.png";
import nationalScaleImpact from "@/assets/gallery/national-scale-impact.png";
import dataDrivenHealth from "@/assets/gallery/data-driven-health.png";
import seamlessDataExchange from "@/assets/gallery/seamless-data-exchange.png";
import healthSecurity from "@/assets/gallery/health-security.png";
import nationalScaleImpact2 from "@/assets/gallery/national-scale-impact-2.png";

const galleryImages = [
  {
    src: companyLogoMain,
    alt: "Strategic eHealth Solutions - Company Logo",
    caption: "Strategic eHealth Solutions",
  },
  {
    src: ceoPortrait,
    alt: "Dr. Rex Acheampong - Strategic eHealth Solutions Founder",
    caption: "Dr. Rex Acheampong, Founder & CEO",
  },
  {
    src: companySign,
    alt: "Strategic eHealth Solutions - Company Sign",
    caption: "Better Health, One Click Away",
  },
  {
    src: exploreImpact,
    alt: "Explore Impact - Digital Health Network",
    caption: "Explore Impact",
  },
  {
    src: nationalScaleImpact,
    alt: "National-Scale Impact",
    caption: "Explore Impact - National Scale",
  },
  {
    src: dataDrivenHealth,
    alt: "Data-Driven Health Impact",
    caption: "Data-Driven Health Impact",
  },
  {
    src: seamlessDataExchange,
    alt: "Seamless Data Exchange",
    caption: "Seamless Data Exchange",
  },
  {
    src: healthSecurity,
    alt: "Strengthen National Health Security",
    caption: "National Health Security Infrastructure",
  },
  {
    src: nationalScaleImpact2,
    alt: "National-Scale Impact",
    caption: "A Robust, Scalable Digital Foundation",
  },
  {
    src: drRexOffice1,
    alt: "Dr. Rex Acheampong - Health Informatician",
    caption: "Dr. Rex Acheampong, Founder & Health Informatician",
  },
  {
    src: drRexOffice2,
    alt: "Dr. Rex Acheampong in Office",
    caption: "Leadership in Digital Health Innovation",
  },
  {
    src: drRexLibrary,
    alt: "Dr. Rex Acheampong - Executive Portrait",
    caption: "Driving Ghana's Digital Health Transformation",
  },
];

interface GalleryModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const GalleryModal = ({ open, onOpenChange }: GalleryModalProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
  };

  const currentImage = galleryImages[currentIndex];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-5xl w-[95vw] p-0 bg-background/95 backdrop-blur-md border-border overflow-hidden">
        <DialogTitle className="sr-only">Image Gallery</DialogTitle>
        
        {/* Close button */}
        <button
          onClick={() => onOpenChange(false)}
          className="absolute top-4 right-4 z-50 p-2 rounded-full bg-background/80 hover:bg-background transition-colors"
        >
          <X className="w-5 h-5 text-foreground" />
        </button>

        {/* Main image area */}
        <div className="relative aspect-[4/3] md:aspect-video bg-muted">
          <img
            src={currentImage.src}
            alt={currentImage.alt}
            className="w-full h-full object-contain"
          />

          {/* Navigation arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-background/80 hover:bg-background shadow-lg transition-all hover:scale-110"
          >
            <ChevronLeft className="w-6 h-6 text-foreground" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-background/80 hover:bg-background shadow-lg transition-all hover:scale-110"
          >
            <ChevronRight className="w-6 h-6 text-foreground" />
          </button>
        </div>

        {/* Caption and thumbnails */}
        <div className="p-6">
          <p className="text-center text-foreground font-medium text-lg mb-4">
            {currentImage.caption}
          </p>

          {/* Thumbnail navigation */}
          <div className="flex justify-center gap-3">
            {galleryImages.map((image, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={cn(
                  "w-16 h-16 md:w-20 md:h-20 rounded-lg overflow-hidden border-2 transition-all hover:scale-105",
                  index === currentIndex
                    ? "border-primary ring-2 ring-primary/30"
                    : "border-transparent opacity-60 hover:opacity-100"
                )}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default GalleryModal;
