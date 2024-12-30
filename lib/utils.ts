import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const sendMessageOnWhatsApp = (msg?: string | undefined) => {
  const defaultMsg = 'Olá, gostaria de saber mais informações sobre os seus serviços.';
  if (msg) {
    window.open(`https://wa.me/558399009271?text=${encodeURIComponent(msg)}`, '_blank')
  } else {
    window.open(`https://wa.me/558399009271?text=${encodeURIComponent(defaultMsg)}`, '_blank')
  }
}

export const callPhoneNumber = () => {
  window.open('tel:+5583988120103', '_blank')
}