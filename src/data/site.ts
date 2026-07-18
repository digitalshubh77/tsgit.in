export const site = {
  name: 'TSGIT',
  fullName: 'The Saptagiri Institute of Technology',
  tagline: 'Complete Solution',
  since: 2015,
  experience: '10+',
  address:
    'Shree Niwas, The Saptagiri Institute of Technology, Mhasala, Wardha, Maharashtra – 442001',
  shortAddress: 'Shree Niwas, Mhasala, Wardha, Maharashtra – 442001',
  phones: [
    { label: '77091 08067', href: 'tel:+917709108067' },
    { label: '73854 08067', href: 'tel:+917385408067' },
  ],
  whatsapp: {
    label: '73854 08067',
    number: '917385408067' as const,
    defaultMessage:
      'Namaste TSGIT!\n\nI want a free solar quotation / site visit.\nPlease guide me on system size, price and subsidy.',
    href: `https://wa.me/917385408067?text=${encodeURIComponent(
      'Namaste TSGIT!\n\nI want a free solar quotation / site visit.\nPlease guide me on system size, price and subsidy.',
    )}`,
  },
  email: 'rote.tsgit@tsgit.in',
  mapUrl: 'https://maps.app.goo.gl/GfC4qNAearzqFHC36',
  social: {
    facebook: 'https://www.facebook.com/ttsgit',
    instagram: 'https://www.instagram.com/tsgit_gyan',
  },
  serviceAreas: [
    'Wardha',
    'Nagpur',
    'Amravati',
    'Chandrapur',
    'Yavatmal',
    'Akola',
  ],
  mission:
    'To provide reliable, affordable and high-quality solar energy solutions that help homes and businesses reduce electricity cost while contributing to a green future.',
  vision:
    'To become one of the most trusted solar solution providers in Maharashtra by delivering quality service, customer satisfaction and innovative renewable energy solutions.',
  startingPrice: '₹50,000',
  timeline: '3–7 working days',
} as const

export const navLinks = [
  { label: 'Home', href: '/', enabled: true },
  { label: 'About', href: '/about', enabled: true },
  { label: 'Services', href: '/services', enabled: true },
  { label: 'Subsidy', href: '/subsidy', enabled: true },
  { label: 'Process', href: '/process', enabled: true },
  { label: 'Products', href: '/products', enabled: true },
  { label: 'FAQ', href: '/faq', enabled: true },
  { label: 'Contact', href: '/contact', enabled: true },
] as const

export const whyChoose = [
  '10+ Years Industry Experience',
  'MNRE Guidelines Based Solutions',
  'Residential & Commercial Solar',
  'On-Grid & Off-Grid Systems',
  'Solar Maintenance & Support',
  'Customer First Approach',
] as const

export const highlights = [
  { value: '10+', label: 'Years Experience', detail: 'in the solar industry' },
  { value: 'MNRE', label: 'Guidelines', detail: 'based installations' },
  { value: 'On & Off', label: 'Grid Systems', detail: 'for every need' },
  { value: '6', label: 'Districts', detail: 'across Vidarbha' },
] as const

export const services = [
  {
    slug: 'residential',
    title: 'Residential Solar Installation',
    short: 'Complete rooftop solar for homes',
    description:
      'We provide complete rooftop solar solutions for homes — including system design, supply, installation, testing, and commissioning. Our systems help reduce your electricity bill while giving reliable, clean energy. Government subsidy guidance included for eligible homes.',
  },
  {
    slug: 'commercial',
    title: 'Commercial Solar Installation',
    short: 'Solar for shops, offices & institutions',
    description:
      'Solar systems for shops, offices, hospitals, schools, and hotels. Reduce your monthly electricity cost with a system designed for your business load. On-grid and off-grid options available.',
  },
  {
    slug: 'industrial',
    title: 'Industrial Solar Installation',
    short: 'Higher-capacity plants for industry',
    description:
      'Higher-capacity solar plants for factories and industrial units. Complete design, installation, and support by our experienced team — following MNRE guidelines and safety standards.',
  },
  {
    slug: 'maintenance',
    title: 'Solar Maintenance & Repair',
    short: 'Keep your system at peak generation',
    description:
      'Already have solar? We provide panel cleaning, inverter servicing, fault repair, and performance checks — so your system always gives maximum generation.',
  },
  {
    slug: 'net-metering',
    title: 'Net Metering Support',
    short: 'Full DISCOM approval assistance',
    description:
      'With net metering, extra electricity from your solar system goes back to the grid and is adjusted in your bill. We handle the complete net metering approval and meter installation process with your DISCOM.',
  },
] as const

export const subsidyRows = [
  { size: '1 kW', amount: '₹30,000' },
  { size: '2 kW', amount: '₹60,000' },
  { size: '3 kW and above', amount: '₹78,000 (maximum)' },
] as const

export const processSteps = [
  {
    step: 1,
    title: 'Site Visit',
    description:
      'Our technical team visits your site to check roof condition, available space, electricity consumption, and system feasibility.',
  },
  {
    step: 2,
    title: 'Quotation',
    description:
      'You get a customized quotation based on your energy needs, budget, and the right solar system capacity.',
  },
  {
    step: 3,
    title: 'Documentation',
    description:
      'We assist with all required documents, subsidy application (if applicable), and the DISCOM approval process.',
  },
  {
    step: 4,
    title: 'Installation',
    description:
      'Our trained technicians install high-quality panels, inverter, mounting structure, and complete electrical connections — following all safety standards.',
  },
  {
    step: 5,
    title: 'Net Metering & Commissioning',
    description:
      'We complete net metering approval, meter installation, and system testing — and hand over a fully working solar plant to you.',
  },
] as const

export const faqs = [
  {
    q: 'How much does a solar system cost?',
    a: 'Systems start from ₹50,000 onwards for 1 kW, depending on the brand and site conditions. Contact us for a free customized quotation.',
  },
  {
    q: 'How much subsidy will I get?',
    a: '₹30,000 for 1 kW, ₹60,000 for 2 kW, and ₹78,000 for 3 kW or bigger home systems (maximum limit), under PM Surya Ghar Yojana.',
  },
  {
    q: 'How many days does installation take?',
    a: '3–7 working days after material delivery and approvals.',
  },
  {
    q: 'Do you provide on-grid and off-grid systems?',
    a: 'Yes, we design and install both on-grid and off-grid solar systems.',
  },
  {
    q: 'What warranty do I get?',
    a: 'Solar panel and inverter warranty as per company policy, and installation workmanship as per MNRE guidelines. Full details come with your quotation.',
  },
  {
    q: 'Which areas do you serve?',
    a: 'Wardha, Nagpur, Amravati, Chandrapur, Yavatmal, and Akola.',
  },
  {
    q: 'Do you help with subsidy and net metering paperwork?',
    a: 'Yes, we handle the complete documentation, subsidy application, and DISCOM approval process for you.',
  },
] as const

export const freeServices = [
  'Free Site Visit',
  'Free Quotation',
  'Free Electricity Bill Analysis',
  'Subsidy Guidance',
] as const

export const panelBrands = [
  'Tata Power Solar',
  'Adani Solar',
  'Waaree Energies',
] as const
