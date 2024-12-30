import WhatsAppIcon from '@/public/whatsapp.svg';
import Image from 'next/image';

export function WhatsAppSvg() {
  return (
    <Image
      src={WhatsAppIcon}
      alt="WhatsApp Icon"
      className="h-6 w-6 mr-2"
    />
  );
}