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
    alt: 'Vision Bygg & Snickeri AB',
  },
  logoDark: {
    url: '/logo-dark.png',
    alt: 'Vision Bygg & Snickeri AB',
  },

  hero: {
    background: {
      url: '/hero-main.webp',
      alt: 'Vision Bygg & Snickeri AB hantverk och snickeri Umeå Västerbotten',
    },
  },

  services: {
    nybyggnation: {
      url: '/service-smahusbyggnation.webp',
      alt: 'Nybyggnation, garage och attefallshus i Umeå och Västerbotten',
    },
    smahusbyggnation: {
      url: '/service-smahusbyggnation.webp',
      alt: 'Småhusbyggnation och attefallshus i Umeå',
    },
    renovering: {
      url: '/service-renovering.webp',
      alt: 'Totalrenovering, kök och badrum i Umeå',
    },
    ombyggnation: {
      url: '/service-ombyggnation.webp',
      alt: 'Ombyggnation, tak och tillbyggnad i Umeå',
    },
    totalentreprenad: {
      url: '/service-totalentreprenad.webp',
      alt: 'Totalentreprenad och byggnation i Umeå',
    },
  },

  gallery: [
    {
      url: '/gallery/gallery-1.jpg',
      alt: 'Vision Bygg & Snickeri AB snickeriarbete och renovering',
    },
    {
      url: '/gallery/gallery-2.jpg',
      alt: 'Vision Bygg & Snickeri AB hantverk och interiör',
    },
    {
      url: '/gallery/gallery-3.jpg',
      alt: 'Vision Bygg & Snickeri AB kök och renovering',
    },
    {
      url: '/gallery/gallery-4.jpg',
      alt: 'Vision Bygg & Snickeri AB träaltan och utemiljö',
    },
    {
      url: '/gallery/gallery-5.jpg',
      alt: 'Vision Bygg & Snickeri AB specialsnickeri och detaljer',
    },
    {
      url: '/gallery/gallery-6.jpg',
      alt: 'Vision Bygg & Snickeri AB färdigställt byggprojekt',
    },
  ],

  cta: {
    banner: {
      url: '/hero-main.webp',
      alt: 'Vision Bygg & Snickeri AB projekt',
    },
    midSection: {
      url: '/hero-main.webp',
      alt: 'Vision Bygg arbetsplats Umeå',
    },
  },

  about: {
    hero: {
      url: '/logo-dark.png',
      alt: 'Vision Bygg & Snickeri AB',
    },
    teamMember: {
      url: '/logo.png',
      alt: 'Teammedlem Vision Bygg',
    },
  },

  whyChooseUs: {
    url: '/why-choose-us.webp',
    alt: 'Noggrant hantverk i detalj',
  },

  ideaToResult: {
    url: '/idea-to-result.webp',
    alt: 'Från idé och planering till färdigt resultat',
  },

  portfolio: [
    {
      image: {
        url: '/gallery/gallery-1.jpg',
        alt: 'Snickeri och renovering i Umeå',
      },
      title: 'Skräddarsytt Snickeri & Renovering',
      category: 'Snickeri',
    },
    {
      image: {
        url: '/gallery/gallery-2.jpg',
        alt: 'Interiör och finsnickeri i Umeå',
      },
      title: 'Interiör & Finsnickeri',
      category: 'Finsnickeri',
    },
    {
      image: {
        url: '/gallery/gallery-3.jpg',
        alt: 'Köksrenovering och interiör i Umeå',
      },
      title: 'Köksrenovering & Interiör',
      category: 'Renovering',
    },
    {
      image: {
        url: '/gallery/gallery-4.jpg',
        alt: 'Trädäck och altanbygge Umeå',
      },
      title: 'Trädäck, Altan & Uterum',
      category: 'Tillbyggnad',
    },
    {
      image: {
        url: '/gallery/gallery-5.jpg',
        alt: 'Finsnickeri och platsbyggda lösningar',
      },
      title: 'Finsnickeri & Platsbyggt',
      category: 'Snickeri',
    },
    {
      image: {
        url: '/gallery/gallery-6.jpg',
        alt: 'Totalentreprenad Umeå Västerbotten',
      },
      title: 'Totalentreprenad & Ombyggnad',
      category: 'Totalentreprenad',
    },
  ],

  servicePages: {
    markarbete: {
      hero: {
        url: '/service-markarbete.webp',
        alt: 'Markarbete och schaktning',
      },
      section1: {
        url: '/service-markarbete.webp',
        alt: 'Förberedelse för tomtplanering',
      },
      section2: {
        url: '/hero-main.webp',
        alt: 'Arbetsplats Umeå',
      },
    },
    dranering: {
      hero: {
        url: '/service-dranering.webp',
        alt: 'Dränering av husgrund',
      },
      section1: {
        url: '/service-dranering.webp',
        alt: 'Fuktskydd och dränering',
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
        alt: 'Stenläggning och armering',
      },
      section2: {
        url: '/hero-main.webp',
        alt: 'Färdig betonggrund',
      },
    },
  },
};

export default images;


