export default {
  install(Vue) {
    Vue.prototype.$injectSchema = function(schema) {
      const existingScript = document.querySelector('script[type="application/ld+json"]');

      if (existingScript) {
        existingScript.textContent = JSON.stringify(schema, null, 2);
      } else {
        const script = document.createElement("script");
        script.type = "application/ld+json";
        script.textContent = JSON.stringify(schema, null, 2);
        document.head.appendChild(script);
      }
    };

    Vue.prototype.$clearSchemas = function() {
      const defaultSchema = {
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "Organization",
            "@id": "organization",
            name: "Nathalie de Loeper - Shiatsu Thérapeutique",
            alternateName: "Cabinet de Shiatsu Saint-Cyr-l'École",
            description:
              "Praticienne de shiatsu thérapeutique diplômée EST-UFPST. Séances pour soulager stress, fatigue, douleurs et améliorer le bien-être.",
            url: "https://www.shiatsutherapie78.info/",
            logo: {
              "@type": "ImageObject",
              contentUrl: "https://www.shiatsutherapie78.info/img/logos/nenuphar.svg",
            },
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+33612387928",
              email: "natloeper@gmail.com",
              contactType: "customer service",
              availableLanguage: "French",
            },
            address: {
              "@type": "PostalAddress",
              streetAddress: "5 rue Jean Zay",
              addressLocality: "Saint-Cyr-l'École",
              postalCode: "78210",
              addressRegion: "Île-de-France",
              addressCountry: "FR",
            },
            foundingDate: "2015-01-08",
            knowsAbout: [
              "Shiatsu thérapeutique",
              "Médecine traditionnelle chinoise",
              "Méridiens d'acupuncture",
              "Gestion du stress",
              "Bien-être",
              "Énergie vitale",
            ],
          },
          {
            "@type": "LocalBusiness",
            "@id": "localBusiness",
            name: "Nathalie de Loeper - Shiatsu Thérapeutique",
            alternateName: "Cabinet de Shiatsu Saint-Cyr-l'École",
            description:
              "Praticienne de shiatsu thérapeutique diplômée EST-UFPST. Séances pour soulager stress, fatigue, douleurs et améliorer le bien-être. Cabinet à Saint-Cyr-l'École (78) et Bouloire (72).",
            url: "https://www.shiatsutherapie78.info/",
            telephone: "+33612387928",
            email: "natloeper@gmail.com",
            address: {
              "@type": "PostalAddress",
              streetAddress: "5 rue Jean Zay",
              addressLocality: "Saint-Cyr-l'École",
              postalCode: "78210",
              addressRegion: "Île-de-France",
              addressCountry: "FR",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: 48.809106,
              longitude: 2.05806,
            },
            openingHours: ["Mo-Fr 09:00-19:00", "Sa 09:00-13:00"],
            priceRange: "€€",
            paymentAccepted: "Cash, Check",
            currenciesAccepted: "EUR",
            areaServed: [
              "Saint-Cyr-l'École, Île-de-France, France",
              "Bouloire, Pays de la Loire, France",
              "Paris, Île-de-France, France",
            ],
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Services de Shiatsu",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Séance de Shiatsu Thérapeutique - Saint-Cyr-l'École",
                    description:
                      "Séance de 75 minutes pour soulager stress, fatigue, douleurs et rétablir l'équilibre énergétique",
                    provider: {
                      "@type": "Person",
                      name: "Nathalie de Loeper",
                    },
                  },
                  price: "70",
                  priceCurrency: "EUR",
                  availability: "https://schema.org/InStock",
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Séance de Shiatsu Thérapeutique - Bouloire",
                    description:
                      "Séance de 75 minutes pour soulager stress, fatigue, douleurs et rétablir l'équilibre énergétique",
                    provider: {
                      "@type": "Person",
                      name: "Nathalie de Loeper",
                    },
                  },
                  price: "60",
                  priceCurrency: "EUR",
                  availability: "https://schema.org/InStock",
                },
              ],
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: 5,
              ratingCount: 3,
              bestRating: 5,
              worstRating: 1,
            },
            review: [
              {
                "@type": "Review",
                reviewRating: {
                  "@type": "Rating",
                  ratingValue: 5,
                  bestRating: 5,
                },
                author: {
                  "@type": "Person",
                  name: "Marie L.",
                },
                reviewBody:
                  "Nathalie est une excellente praticienne. Ses séances m'ont beaucoup aidée pour mon stress et mes douleurs de dos. Je recommande vivement !",
              },
              {
                "@type": "Review",
                reviewRating: {
                  "@type": "Rating",
                  ratingValue: 5,
                  bestRating: 5,
                },
                author: {
                  "@type": "Person",
                  name: "Pierre D.",
                },
                reviewBody:
                  "Très professionnelle et à l'écoute. Le shiatsu m'a permis de retrouver de l'énergie et de mieux gérer mon stress quotidien.",
              },
              {
                "@type": "Review",
                reviewRating: {
                  "@type": "Rating",
                  ratingValue: 5,
                  bestRating: 5,
                },
                author: {
                  "@type": "Person",
                  name: "Sophie M.",
                },
                reviewBody:
                  "Une expérience exceptionnelle. Nathalie a un vrai don pour détecter les blocages énergétiques. Je me sens revitalisée après chaque séance.",
              },
            ],
            image: [
              "https://www.shiatsutherapie78.info/img/pictures/nathalie_de_loeper_praticienne_shiatsu.jpg",
              "https://www.shiatsutherapie78.info/img/pictures/nathalie_de_loeper_praticienne_shiatsu.webp",
              "https://www.shiatsutherapie78.info/img/pictures/nathalie_de_loeper_praticienne_shiatsu-mobile.webp",
            ],
            sameAs: [
              "https://www.facebook.com/nathaliedeloeper/",
              "https://www.linkedin.com/in/nathalie-de-loeper-shiatsu-97910988/",
            ],
            founder: {
              "@type": "Person",
              name: "Nathalie de Loeper",
              jobTitle: "Praticienne de Shiatsu Thérapeutique",
              telephone: "+33612387928",
              email: "natloeper@gmail.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "5 rue Jean Zay",
                addressLocality: "Saint-Cyr-l'École",
                postalCode: "78210",
                addressRegion: "Île-de-France",
                addressCountry: "FR",
              },
              image:
                "https://www.shiatsutherapie78.info/img/pictures/nathalie_de_loeper_praticienne_shiatsu.jpg",
              url: "https://www.shiatsutherapie78.info/about",
            },
            foundingDate: "2015-01-08",
            knowsAbout: [
              "Shiatsu thérapeutique",
              "Médecine traditionnelle chinoise",
              "Méridiens d'acupuncture",
              "Gestion du stress",
              "Bien-être",
              "Énergie vitale",
            ],
            contactPoint: [
              {
                "@type": "ContactPoint",
                telephone: "+33612387928",
                contactType: "customer service",
                areaServed: "FR",
                availableLanguage: "French",
              },
            ],
            isAccessibleForFree: false,
            hasMap: {
              "@type": "Map",
            },
          },
          {
            "@type": "WebPage",
            "@id": "homePage",
            name: "Accueil - Nathalie de Loeper Shiatsu Thérapeutique",
            description:
              "Praticienne de shiatsu thérapeutique diplômée EST-UFPST à Saint-Cyr-l'École (78) et Bouloire (72). Séances pour soulager stress, fatigue, douleurs et améliorer le bien-être.",
            url: "https://www.shiatsutherapie78.info/",
            mainEntity: {
              "@type": "LocalBusiness",
              "@id": "localBusiness",
            },
            publisher: {
              "@type": "Organization",
              "@id": "organization",
            },
            breadcrumb: {
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Accueil",
                  item: "https://www.shiatsutherapie78.info/",
                },
              ],
            },
          },
        ],
      };

      const existingScript = document.querySelector('script[type="application/ld+json"]');
      if (existingScript) {
        existingScript.textContent = JSON.stringify(defaultSchema, null, 2);
      }
    };

    Vue.mixin({
      mounted() {
        if (this.$options.schema) {
          this.$injectSchema(this.$options.schema);
        }
      },
      beforeDestroy() {
        if (this.$options.schema) {
          this.$clearSchemas();
        }
      },
    });
  },
};
