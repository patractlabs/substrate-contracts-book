export default {
  "title": "Substrate Contracts Book",
  "tagline": "Substrate Contracts Book",
  "url": "https://docs.patract.io",
  "baseUrl": "/en/",
  "onBrokenLinks": "throw",
  "onBrokenMarkdownLinks": "warn",
  "favicon": "img/favicon.png",
  "organizationName": "patractlabs",
  "projectName": "substrate-contracts-book",
  "i18n": {
    "defaultLocale": "zh",
    "locales": [
      "zh",
      "en"
    ],
    "localeConfigs": {}
  },
  "themeConfig": {
    "navbar": {
      "logo": {
        "alt": "Substrate Contracts Book",
        "src": "img/logo.svg"
      },
      "items": [
        {
          "href": "https://www.patract.io",
          "label": "Home",
          "position": "left"
        },
        {
          "href": "https://blog.patract.io",
          "label": "Blog",
          "position": "left"
        },
        {
          "href": "https://github.com/patractlabs/substrate-contracts-book",
          "label": "GitHub",
          "position": "right"
        },
        {
          "type": "localeDropdown",
          "position": "right",
          "dropdownItemsBefore": [],
          "dropdownItemsAfter": []
        }
      ],
      "hideOnScroll": false,
      "title": "My Site"
    },
    "colorMode": {
      "defaultMode": "light",
      "disableSwitch": false,
      "respectPrefersColorScheme": false,
      "switchConfig": {
        "darkIcon": "🌜",
        "darkIconStyle": {},
        "lightIcon": "🌞",
        "lightIconStyle": {}
      }
    },
    "docs": {
      "versionPersistence": "localStorage"
    },
    "metadatas": [],
    "prism": {
      "additionalLanguages": []
    },
    "hideableSidebar": false
  },
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "routeBasePath": "/",
          "sidebarPath": "/home/zzc/work/substrate-contracts-book/sidebars.ts",
          "editUrl": "https://github.com/patractlabs/substrate-contracts-book/"
        },
        "theme": {
          "customCss": "/home/zzc/work/substrate-contracts-book/src/css/custom.css"
        }
      }
    ]
  ],
  "baseUrlIssueBanner": true,
  "onDuplicateRoutes": "warn",
  "customFields": {},
  "plugins": [],
  "themes": [],
  "titleDelimiter": "|",
  "noIndex": false
};