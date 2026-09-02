/**
 * CENTRALIZED IMAGE CONFIGURATION
 *
 * All images used across the template are defined here.
 * To customize for a new company: replace the URLs below.
 */

export interface ImageSlot {
  url: string;
  alt: string;
}

export interface SiteImages {
  logo: ImageSlot;
  logoDark?: ImageSlot;
  hero: {
    background: ImageSlot;
  };
  services: {
    nybyggnation?: ImageSlot;
    smahusbyggnation?: ImageSlot;
    renovering?: ImageSlot;
    ombyggnation?: ImageSlot;
    totalentreprenad?: ImageSlot;
    [key: string]: ImageSlot | undefined;
  };
  gallery: ImageSlot[];
  cta: {
    banner: ImageSlot;
    midSection: ImageSlot;
  };
  about: {
    hero: ImageSlot;
    teamMember: ImageSlot;
  };
  whyChooseUs: ImageSlot;
  ideaToResult: ImageSlot;
  portfolio: {
    image: ImageSlot;
    title: string;
    category: string;
  }[];
  servicePages: {
    markarbete: {
      hero: ImageSlot;
      section1: ImageSlot;
      section2: ImageSlot;
    };
    dranering: {
      hero: ImageSlot;
      section1: ImageSlot;
      section2: ImageSlot;
    };
    betong: {
      hero: ImageSlot;
      section1: ImageSlot;
      section2: ImageSlot;
    };
  };
}

const images: SiteImages = {
  logo: {
    url: '/logo.png',
    alt: 'Dyringe Entreprenad AB',
  },
  logoDark: {
    url: '/logo-dark.png',
    alt: 'Dyringe Entreprenad AB',
  },

  hero: {
    background: {
      url: '/hero-main.webp',
      alt: 'Dyringe Entreprenad AB grävning, byggnation och betong Örebro',
    },
  },

  services: {
    nybyggnation: {
      url: '/service-gravning.webp',
      alt: 'Grävning och markarbete i Örebro',
    },
    smahusbyggnation: {
      url: '/service-byggnation.webp',
      alt: 'Byggnation och snickeri i Örebro',
    },
    renovering: {
      url: '/service-betong.webp',
      alt: 'Betong och gjutning i Örebro',
    },
    ombyggnation: {
      url: '/service-markarbete.png',
      alt: 'Maskintjänster och entreprenad i Örebro',
    },
    totalentreprenad: {
      url: '/service-maskinforare.webp',
      alt: 'Maskinförare och entreprenad i Örebro',
    },
  },

  gallery: [
    {
      url: '/gallery/gallery-1.jpg',
      alt: 'Dyringe Entreprenad AB markarbete och tomtplanering',
    },
    {
      url: '/gallery/gallery-2.jpg',
      alt: 'Dyringe Entreprenad AB betonggjutning och platta på mark',
    },
    {
      url: '/gallery/gallery-3.jpg',
      alt: 'Dyringe Entreprenad AB grävarbete och schaktning',
    },
    {
      url: '/gallery/gallery-4.jpg',
      alt: 'Dyringe Entreprenad AB byggnation och träkonstruktion',
    },
    {
      url: '/gallery/gallery-5.jpg',
      alt: 'Dyringe Entreprenad AB maskinentreprenad och grävmaskin',
    },
    {
      url: '/gallery/gallery-6.jpg',
      alt: 'Dyringe Entreprenad AB färdigställt anläggningsprojekt',
    },
  ],

  cta: {
    banner: {
      url: '/hero-main.webp',
      alt: 'Dyringe Entreprenad AB projekt',
    },
    midSection: {
      url: '/hero-main.webp',
      alt: 'Dyringe Entreprenad AB arbetsplats Örebro',
    },
  },

  about: {
    hero: {
      url: '/about.jpg',
      alt: 'Dyringe Entreprenad AB',
    },
    teamMember: {
      url: '/logo.png',
      alt: 'Teammedlem Dyringe Entreprenad AB',
    },
  },

  whyChooseUs: {
    url: '/why-choose-us.webp',
    alt: 'Noggrant hantverk och entreprenad i detalj',
  },

  ideaToResult: {
    url: '/idea-to-result.webp',
    alt: 'Från idé och planering till färdigt resultat',
  },

  portfolio: [
    {
      image: {
        url: '/gallery/gallery-1.jpg',
        alt: 'Markarbete och tomtplanering i Örebro',
      },
      title: 'Markarbete & Tomtplanering',
      category: 'Markarbete',
    },
    {
      image: {
        url: '/gallery/gallery-2.jpg',
        alt: 'Gjutning av betongplatta i Örebro',
      },
      title: 'Betongplatta & Grundgjutning',
      category: 'Betong',
    },
    {
      image: {
        url: '/gallery/gallery-3.jpg',
        alt: 'Schaktning och grävning i Örebro',
      },
      title: 'Grävarbete & Schaktning',
      category: 'Grävning',
    },
    {
      image: {
        url: '/gallery/gallery-4.jpg',
        alt: 'Byggnation och träkonstruktion i Örebro',
      },
      title: 'Byggnation & Träkonstruktion',
      category: 'Byggnation',
    },
    {
      image: {
        url: '/gallery/gallery-5.jpg',
        alt: 'Maskintjänster och grävmaskinist i Örebro',
      },
      title: 'Maskintjänster & Entreprenad',
      category: 'Maskintjänster',
    },
    {
      image: {
        url: '/gallery/gallery-6.jpg',
        alt: 'Färdigställt entreprenadprojekt Örebro',
      },
      title: 'Färdigställd Entreprenad',
      category: 'Totalentreprenad',
    },
  ],

  servicePages: {
    markarbete: {
      hero: {
        url: '/service-markarbete.webp',
        alt: 'Grävning, schaktning och markarbete',
      },
      section1: {
        url: '/service-markarbete.webp',
        alt: 'Förberedelse för tomtplanering',
      },
      section2: {
        url: '/hero-main.webp',
        alt: 'Arbetsplats Örebro',
      },
    },
    dranering: {
      hero: {
        url: '/service-dranering.webp',
        alt: 'Dränering och ledningsarbete',
      },
      section1: {
        url: '/service-dranering.webp',
        alt: 'Fuktskydd och dräneringsarbete',
      },
      section2: {
        url: '/hero-main.webp',
        alt: 'Dräneringsarbete',
      },
    },
    betong: {
      hero: {
        url: '/service-betong.webp',
        alt: 'Gjutning av betongplatta',
      },
      section1: {
        url: '/service-betong.webp',
        alt: 'Armering och betonggjutning',
      },
      section2: {
        url: '/hero-main.webp',
        alt: 'Färdig betonggrund',
      },
    },
  },
};

export default images;


