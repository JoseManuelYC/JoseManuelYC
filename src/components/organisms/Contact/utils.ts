import {
  Github,
  Linkedin,
  Whatsapp,
  Instagram,
  EnvelopeFill
} from 'react-bootstrap-icons'

export const email = 'joseyanezcontact@gmail.com'
export const githubUrl = 'https://github.com/JoseManuelYC'
export const linkedinUrl = 'https://www.linkedin.com/in/joseyanez07/'
export const instagramUrl = 'https://www.instagram.com/_joseyanez/'
export const whatsappUrl =
  'https://api.whatsapp.com/send/?phone=%2B584247697245&text=Hola,%20Jose%20Manuel%20mucho%20gusto.&type=phone_number&app_absent=0'

export const items = [
  {
    icon: Whatsapp,
    label: 'Whatsapp',
    href: whatsappUrl
  },
  {
    icon: EnvelopeFill,
    href: `mailto:${email}`,
    label: 'Correo electrónico'
  },
  {
    icon: Linkedin,
    label: '@joseyanez07',
    href: linkedinUrl
  }
]

export const rrss = [
  {
    icon: Instagram,
    href: instagramUrl,
    label: '@_joseyanez'
  },
  {
    icon: Github,
    href: githubUrl,
    label: '@JoseManuelYC'
  }
]
