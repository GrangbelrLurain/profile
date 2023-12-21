export type TPortfolio = {
  [name: string]: {
    href: string;
    thumbnail: string;
  };
};

export const portfolio: TPortfolio = {
  lastProfile: {
    href: "https://jolly-bose-812bd6.netlify.app/",
    thumbnail: "/image/last_profile.png",
  },
  cat_supporters: {
    href: "https://catsuporters.netlify.app/",
    thumbnail: "/image/cat_supporters.png",
  },
  choco_rocher: {
    href: "https://chocorocher.netlify.app/",
    thumbnail: "/image/choco_rocher.png",
  },
  hotel: {
    href: "https://hotelgrandiris.netlify.app/",
    thumbnail: "/image/hotel.png",
  },
  company: {
    href: "https://superlative-kataifi-1086de.netlify.app/#company",
    thumbnail: "/image/company.png",
  },
  media_moment: {
    href: "https://grangbelrlurain.github.io/mediaMoment/",
    thumbnail: "/image/media_moment.png",
  },
};
