/**
 * WhatsApp & Contact Utilities for Astro Kannada
 * Astrologer: Pandit Sachin Sharma (ಪಂಡಿತ್ ಸಚಿನ್ ಶರ್ಮಾ)
 * Phone: 8151816172
 * WhatsApp: +91 8151816172
 * Instagram: https://www.instagram.com/astro.kannada?dlrf=MzNhcnh4Mmlyemc3
 * Facebook: https://www.facebook.com/share/1XMmK1FwvB/
 * Designer: https://www.instagram.com/deepproductionss?xtok=azRqODR1aXRqdW1p
 */

export const ASTROLOGER_PHONE = "8151816172";
export const ASTROLOGER_PHONE_DISPLAY = "+91 81518 16172";
export const WHATSAPP_INT_NUMBER = "918151816172";
export const WHATSAPP_BASE_URL = `https://wa.me/${WHATSAPP_INT_NUMBER}`;

export const INSTAGRAM_URL = "https://www.instagram.com/astro.kannada?dlrf=MzNhcnh4Mmlyemc3";
export const FACEBOOK_URL = "https://www.facebook.com/share/1XMmK1FwvB/";
export const DESIGNER_URL = "https://www.instagram.com/deepproductionss?xtok=azRqODR1aXRqdW1p";

export const DEFAULT_WHATSAPP_MESSAGE =
  "ನಮಸ್ಕಾರ ಪಂಡಿತ್ ಸಚಿನ್ ಶರ್ಮಾ ಅವರೇ, ನನಗೆ ಜ್ಯೋತಿಷ್ಯ ಮಾರ್ಗದರ್ಶನ ಮತ್ತು ಸಮಾಲೋಚನೆ ಬೇಕಾಗಿದೆ.";

/**
 * Generates an encoded WhatsApp deep-link URL.
 * Opens WhatsApp app on mobile or WhatsApp Web on desktop.
 */
export function getWhatsAppUrl(customMessage?: string): string {
  const message = customMessage || DEFAULT_WHATSAPP_MESSAGE;
  return `${WHATSAPP_BASE_URL}?text=${encodeURIComponent(message)}`;
}

/**
 * Returns phone dialer link
 */
export function getPhoneCallUrl(): string {
  return `tel:${ASTROLOGER_PHONE}`;
}
