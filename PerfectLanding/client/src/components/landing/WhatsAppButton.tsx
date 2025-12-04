import { SiWhatsapp } from "react-icons/si";

export default function WhatsAppButton() {
  const handleClick = () => {
    window.open("https://wa.me/919391036765?text=Hi%20BBMC,%20I%20would%20like%20to%20inquire%20about%20your%20services.");
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] hover:bg-[#20BD5A] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all hover:scale-105"
      aria-label="Chat on WhatsApp"
      data-testid="button-whatsapp-floating"
    >
      <SiWhatsapp className="w-7 h-7 text-white" />
    </button>
  );
}
