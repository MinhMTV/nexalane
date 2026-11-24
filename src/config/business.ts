/** Central source for brand and business details. Fill in verified values before launch. */
export const business = {
  brandName: 'Nexalane',
  descriptor: 'Technology Consulting',
  legalName: '',
  address: {
    street: '',
    postalCode: '',
    city: 'Wien',
    country: 'Österreich',
  },
  email: 'info@minh-vuong.de',
  phone: '+49 1577 7240356',
  bookingUrl: '',
  profiles: [] as string[],
  registration: {
    companyRegister: '',
    vatId: '',
    chamber: '',
    authority: '',
  },
  references: [] as { name: string; url?: string }[],
};

export const site = {
  defaultLanguage: 'at' as const,
  languages: ['de', 'at', 'en'] as const,
  localePaths: {
    de: { home: 'de', services: 'de/leistungen', solutions: 'de/loesungen', process: 'de/vorgehen', about: 'de/ueber-uns', contact: 'de/kontakt', legal: 'de/impressum' },
    at: { home: 'at', services: 'at/leistungen', solutions: 'at/loesungen', process: 'at/vorgehen', about: 'at/ueber-uns', contact: 'at/kontakt', legal: 'at/impressum' },
    en: { home: 'en', services: 'en/services', solutions: 'en/solutions', process: 'en/approach', about: 'en/about', contact: 'en/contact', legal: 'en/legal' },
  },
};
