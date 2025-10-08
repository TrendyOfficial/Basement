import { createTheme } from "../types";

const tokens = {
  black: "#000000",
  white: "#FFFFFF",

  semantic: {
    red: {
      c100: "#F46E6E",
      c200: "#E44F4F",
      c300: "#D74747",
      c400: "#B43434",
    },
    green: {
      c100: "#60D26A",
      c200: "#40B44B",
      c300: "#31A33C",
      c400: "#237A2B",
    },
    silver: {
      c100: "#DEDEDE",
      c200: "#B6CAD7",
      c300: "#8EA3B0",
      c400: "#617A8A",
    },
    yellow: {
      c100: "#FFF599",
      c200: "#FCEC61",
      c300: "#D8C947",
      c400: "#AFA349",
    },
    rose: {
      c100: "#DB3D61",
      c200: "#8A293B",
      c300: "#812435",
      c400: "#701B2B",
    },
  },

  // galaxy blues
  blue: {
    c50: "#B3E5FC",
    c100: "#81D4FA",
    c200: "#4FC3F7",  // bright accent
    c300: "#29B6F6",  // accent B
    c400: "#0288D1",
    c500: "#0277BD",  // background accent
    c600: "#01579B",
    c700: "#0D47A1",
    c800: "#0A2A4D",
    c900: "#06182E",
  },

  // galaxy purples
  purple: {
    c50: "#E1BEE7",
    c100: "#CE93D8",  // links, highlights
    c200: "#BA68C8",
    c300: "#9C27B0",  // progress filled, accents
    c400: "#8E24AA",  // cards & icons
    c500: "#6A1B9A",  // background accent
    c600: "#4A148C",
    c700: "#311B92",
    c800: "#1A093A",
    c900: "#120624",
  },

  // ash stays for neutrals
  ash: {
    c50: "#7F8D9B",
    c100: "#5B6B7B",
    c200: "#445464",
    c300: "#2B3D4E",
    c400: "#203242",
    c500: "#1C2C3C",
    c600: "#172532",
    c700: "#131E29",
    c800: "#101820",
    c900: "#0C1216",
  },

  // shades = dark backgrounds
  shade: {
    c25: "#A982F7",  // hover accent (light purple glow)
    c50: "#9FA8DA",
    c100: "#7986CB",
    c200: "#5C6BC0",
    c300: "#3F51B5",
    c400: "#303F9F",
    c500: "#283593",
    c600: "#1A237E",
    c700: "#151A4A",
    c800: "#0F1029", // main background
    c900: "#09091A", // deepest black-purple
  },
};

export default createTheme({
  name: "nebula",
  extend: {
    colors: {
      themePreview: {
        primary: tokens.purple.c300,
        secondary: tokens.blue.c200,
        ghost: tokens.white,
      },

      pill: {
        background: tokens.shade.c300,
        backgroundHover: tokens.shade.c200,
        highlight: tokens.purple.c300,
        activeBackground: tokens.shade.c300,
      },

      global: {
        accentA: tokens.purple.c300,
        accentB: tokens.blue.c200,
      },

      lightBar: {
        light: tokens.blue.c200,
      },

      buttons: {
        toggle: tokens.purple.c300,
        toggleDisabled: tokens.ash.c500,
        danger: tokens.semantic.rose.c300,
        dangerHover: tokens.semantic.rose.c200,

        secondary: tokens.ash.c700,
        secondaryText: tokens.semantic.silver.c300,
        secondaryHover: tokens.ash.c600,
        primary: tokens.white,
        primaryText: tokens.black,
        primaryHover: tokens.semantic.silver.c100,
        purple: tokens.purple.c500,
        purpleHover: tokens.purple.c400,
        cancel: tokens.ash.c500,
        cancelHover: tokens.ash.c300,
      },

      background: {
        main: tokens.shade.c800,
        secondary: tokens.shade.c600,
        secondaryHover: tokens.shade.c400,
        accentA: tokens.purple.c500,
        accentB: tokens.blue.c500,
      },

      modal: {
        background: tokens.shade.c700,
      },

      type: {
        logo: tokens.purple.c100,
        emphasis: tokens.white,
        text: tokens.shade.c50,
        dimmed: tokens.shade.c100,
        divider: tokens.ash.c500,
        secondary: tokens.ash.c100,
        danger: tokens.semantic.red.c100,
        success: tokens.semantic.green.c100,
        link: tokens.purple.c100,
        linkHover: tokens.purple.c50,
      },

      search: {
        background: tokens.shade.c500,
        hoverBackground: tokens.shade.c600,
        focused: tokens.shade.c400,
        placeholder: tokens.shade.c100,
        icon: tokens.shade.c100,
        text: tokens.white,
      },

      mediaCard: {
        hoverBackground: tokens.shade.c600,
        hoverAccent: tokens.shade.c25,
        hoverShadow: tokens.shade.c900,
        shadow: tokens.shade.c700,
        barColor: tokens.ash.c200,
        barFillColor: tokens.purple.c100,
        badge: tokens.shade.c700,
        badgeText: tokens.ash.c100,
      },

      largeCard: {
        background: tokens.shade.c600,
        icon: tokens.purple.c400,
      },

      dropdown: {
        background: tokens.shade.c600,
        altBackground: tokens.shade.c700,
        hoverBackground: tokens.shade.c500,
        highlight: tokens.semantic.yellow.c400,
        highlightHover: tokens.semantic.yellow.c200,
        text: tokens.shade.c50,
        secondary: tokens.shade.c100,
        border: tokens.shade.c400,
        contentBackground: tokens.shade.c500,
      },

      authentication: {
        border: tokens.shade.c300,
        inputBg: tokens.shade.c600,
        inputBgHover: tokens.shade.c500,
        wordBackground: tokens.shade.c500,
        copyText: tokens.shade.c100,
        copyTextHover: tokens.ash.c50,
        errorText: tokens.semantic.rose.c100,
      },

      settings: {
        sidebar: {
          activeLink: tokens.shade.c600,
          badge: tokens.shade.c900,
          type: {
            secondary: tokens.shade.c200,
            inactive: tokens.shade.c50,
            icon: tokens.shade.c50,
            iconActivated: tokens.purple.c200,
            activated: tokens.purple.c50,
          },
        },

        card: {
          border: tokens.shade.c400,
          background: tokens.shade.c400,
          altBackground: tokens.shade.c400,
        },

        saveBar: {
          background: tokens.shade.c800,
        },
      },

      utils: {
        divider: tokens.ash.c300,
      },

      onboarding: {
        bar: tokens.shade.c400,
        barFilled: tokens.purple.c300,
        divider: tokens.shade.c200,
        card: tokens.shade.c800,
        cardHover: tokens.shade.c700,
        border: tokens.shade.c600,
        good: tokens.purple.c100,
        best: tokens.semantic.yellow.c100,
        link: tokens.purple.c100,
      },

      errors: {
        card: tokens.shade.c800,
        border: tokens.ash.c500,
        type: {
          secondary: tokens.ash.c100,
        },
      },

      about: {
        circle: tokens.ash.c500,
        circleText: tokens.ash.c50,
      },

      editBadge: {
        bg: tokens.ash.c500,
        bgHover: tokens.ash.c400,
        text: tokens.ash.c50,
      },

      progress: {
        background: tokens.ash.c50,
        preloaded: tokens.ash.c50,
        filled: tokens.purple.c200,
      },

      video: {
        buttonBackground: tokens.ash.c200,
        autoPlay: {
          background: tokens.ash.c700,
          hover: tokens.ash.c500,
        },
        scraping: {
          card: tokens.shade.c700,
          error: tokens.semantic.red.c200,
          success: tokens.semantic.green.c200,
          loading: tokens.purple.c200,
          noresult: tokens.ash.c100,
        },
        audio: {
          set: tokens.purple.c200,
        },
        context: {
          background: tokens.ash.c900,
          light: tokens.shade.c50,
          border: tokens.ash.c600,
          hoverColor: tokens.ash.c600,
          buttonFocus: tokens.ash.c500,
          flagBg: tokens.ash.c500,
          inputBg: tokens.ash.c600,
          buttonOverInputHover: tokens.ash.c500,
          inputPlaceholder: tokens.ash.c200,
          cardBorder: tokens.ash.c700,
          slider: tokens.shade.c50,
          sliderFilled: tokens.purple.c200,
          error: tokens.semantic.red.c200,
          buttons: {
            list: tokens.ash.c700,
            active: tokens.ash.c900,
          },
          closeHover: tokens.ash.c800,
          type: {
            main: tokens.semantic.silver.c400,
            secondary: tokens.ash.c200,
            accent: tokens.purple.c200,
          },
        },
      },
    },
  },
});
