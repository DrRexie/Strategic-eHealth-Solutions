import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface VideoDemoModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const VideoDemoModal = ({ open, onOpenChange }: VideoDemoModalProps) => {
  const [activeTab, setActiveTab] = useState("healthbridge");

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl p-0 overflow-hidden bg-background border-border">
        <DialogHeader className="p-4 bg-gradient-to-r from-primary to-healthcare-navy">
          <DialogTitle className="text-white font-display">
            EMR Implementation Demos
          </DialogTitle>
        </DialogHeader>
        
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="w-full justify-start rounded-none border-b bg-muted/50 p-0">
            <TabsTrigger 
              value="healthbridge" 
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-6 py-3"
            >
              Healthbridge EMR
            </TabsTrigger>
            <TabsTrigger 
              value="epic" 
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-6 py-3"
            >
              EPIC EMR
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="healthbridge" className="mt-0">
            <div className="aspect-video w-full bg-black">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/7xz1ue6StEg?autoplay=0"
                title="Healthbridge Clinical EMR Demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </TabsContent>
          
          <TabsContent value="epic" className="mt-0">
            <div className="aspect-video w-full bg-black">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/zQXhvPBWv18?autoplay=0"
                title="EPIC Electronic Medical Record (EMR) Demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};

export default VideoDemoModal;
