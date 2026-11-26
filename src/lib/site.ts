// Personal details and contact links. Fill the empty values to switch the
// placeholders on: an empty value falls back to email or the contact section.
const profile = {
  name: 'Dharmendra Kumar Singh',
  title: 'Senior Software Engineer (AI)',
  email: 'dksinghmern@gmail.com',
  linkedin: 'https://www.linkedin.com/in/dksingh413',
  // Digits only, with country code, e.g. '919876543210'.
  whatsappNumber: '',
  // e.g. 'https://github.com/your-username'
  github: '',
  // e.g. 'https://www.naukri.com/mnjuser/profile?id=...'
  naukri: '',
  // Put the PDF in /public (e.g. /Dharmendra-Kumar-Singh-CV.pdf) and set its path here.
  cv: '',
}

const mailto = `mailto:${profile.email}`

export const SITE = {
  ...profile,
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://dharmendra-portfolio.vercel.app',
  description:
    'Senior Software Engineer (AI) with 9 years shipping production web platforms: React, Next.js, Node.js, AWS, LLM apps and chatbots. Ex-team lead of 12+.',
}

export const LINKS = {
  whatsapp: profile.whatsappNumber ? `https://wa.me/${profile.whatsappNumber}` : mailto,
  email: mailto,
  enquiry: `${mailto}?subject=${encodeURIComponent('Role / project enquiry')}`,
  linkedin: profile.linkedin,
  github: profile.github || '/#contact',
  naukri: profile.naukri || '/#contact',
  cv: profile.cv || '/#contact',
}
