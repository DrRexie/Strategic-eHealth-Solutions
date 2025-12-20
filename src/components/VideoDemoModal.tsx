import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface VideoDemoModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const VideoDemoModal = ({ open, onOpenChange }: VideoDemoModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl p-0 overflow-hidden bg-black border-none">
        <DialogHeader className="p-4 bg-gradient-to-r from-primary to-healthcare-navy">
          <DialogTitle className="text-white font-display">
            Strategic eHealth Solutions Demo
          </DialogTitle>
        </DialogHeader>
        <div className="aspect-video w-full">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/0eCQr-F3a30?autoplay=0"
            title="EMR Implementation Demo - Strategic eHealth Solutions"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default VideoDemoModal;
