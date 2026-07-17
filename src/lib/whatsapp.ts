import { site } from '@/data/site'

/** WhatsApp chat URL — always includes a predefined message */
export function getWhatsAppUrl(message?: string) {
  const text = (message ?? site.whatsapp.defaultMessage).trim()
  return `https://wa.me/${site.whatsapp.number}?text=${encodeURIComponent(text)}`
}
