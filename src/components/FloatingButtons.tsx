import { MessageCircle, MessageSquareText } from "lucide-react";
import { useContactModal } from "./ContactFormModal";

export default function FloatingButtons() {
  const { setOpen } = useContactModal();

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-3">
      {/* Contact form trigger */}
      <button
        onClick={() => setOpen(true)}
        className="w-12 h-12 rounded-full bg-primary text-primary-foreground shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 flex items-center justify-center"
        aria-label="Open contact form"
      >
        <MessageSquareText className="w-5 h-5" />
      </button>
      {/* WhatsApp button */}
      <a
        href="https://wa.me/917838713212"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 flex items-center justify-center"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
    </div>
  );
}
