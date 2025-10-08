const tokens = {
  black: "#0A0A12",
  white: "#FFFFFF",

  starlight: {
    c100: "#E4D9FF",
    c200: "#C7B8FF",
    c300: "#A996FF",
    c400: "#8A73FF",
  },

  nebula: {
    c100: "#C082FF",
    c200: "#A359EC",
    c300: "#8D44D6",
    c400: "#7831BF",
    c500: "#572887",
  },

  cosmos: {
    c100: "#5D5DAE",
    c200: "#3B3B8C",
    c300: "#2A2A71",
    c400: "#1F1F50",
  },

  void: {
    c100: "#32324F",
    c200: "#272741",
    c300: "#1E1E32",
    c400: "#171728",
    c500: "#131322",
    c600: "#0F0F1B",
    c700: "#0C1216",
  },
};

export const defaultTheme = {
  extend: {
    colors: {
      themePreview: {
        primary: tokens.void.c300,
        secondary: tokens.void.c400,
        ghost: tokens.white,
      },

      pill: {
        background: tokens.void.c400,
        backgroundHover: tokens.void.c300,
        highlight: tokens.nebula.c200,
        activeBackground: tokens.void.c700,
      },

      global: {
        accentA: tokens.nebula.c200,
        accentB: tokens.cosmos.c200,
      },

      lightBar: {
        light: tokens.cosmos.c300,
      },

      buttons: {
        toggle: tokens.nebula.c300,
        toggleDisabled: tokens.void.c200,
        danger: tokens.starlight.c400,
        dangerHover: tokens.starlight.c300,

        secondary: tokens.void.c400,
        secondaryText: tokens.starlight.c100,
        secondaryHover: tokens.void.c300,
        primary: tokens.white,
        primaryText: tokens.black,
        primaryHover: tokens.starlight.c200,
        purple: tokens.nebula.c500,
        purpleHover: tokens.nebula.c400,
        cancel: tokens.void.c300,
        cancelHover: tokens.void.c200,
      },

      background: {
        main: tokens.void.c600,
        secondary: tokens.void.c500,
        secondaryHover: tokens.void.c400,
        accentA: tokens.nebula.c500,
        accentB: tokens.cosmos.c400,
      },

      modal: {
        background: tokens.void.c500,
      },

      type: {
        logo: tokens.nebula.c100,
        emphasis: tokens.white,
        text: tokens.starlight.c200,
        dimmed: tokens.starlight.c100,
        divider: tokens.void.c200,
        secondary: tokens.starlight.c100,
        danger: tokens.starlight.c400,
        success: tokens.starlight.c300,
        link: tokens.nebula.c100,
        linkHover: tokens.starlight.c200,
      },

      search: {
        background: tokens.void.c300,
        hoverBackground: tokens.void.c200,
        focused: tokens.void.c100,
        placeholder: tokens.starlight.c100,
        icon: tokens.starlight.c100,
        text: tokens.white,
      },

      mediaCard: {
        hoverBackground: tokens.void.c400,
        hoverAccent: tokens.void.c500,
        hoverShadow: tokens.void.c700,
        shadow: tokens.void.c500,
        barColor: tokens.cosmos.c100,
        barFillColor: tokens.nebula.c100,
        badge: tokens.void.c500,
        badgeText: tokens.starlight.c100,
      },

      largeCard: {
        background: tokens.void.c300,
        icon: tokens.nebula.c200,
      },

      dropdown: {
        background: tokens.void.c300,
        altBackground: tokens.void.c400,
        hoverBackground: tokens.void.c200,
        highlight: tokens.starlight.c200,
        highlightHover: tokens.starlight.c100,
        text: tokens.starlight.c200,
        secondary: tokens.starlight.c100,
        border: tokens.void.c200,
        contentBackground: tokens.void.c200,
      },

      authentication: {
        border: tokens.void.c100,
        inputBg: tokens.void.c300,
        inputBgHover: tokens.void.c200,
        wordBackground: tokens.void.c500,
        copyText: tokens.starlight.c100,
        copyTextHover: tokens.starlight.c50,
        errorText: tokens.starlight.c400,
      },

      settings: {
        sidebar: {
          activeLink: tokens.void.c400,
          badge: tokens.void.c700,
          type: {
            secondary: tokens.void.c200,
            inactive: tokens.starlight.c100,
            icon: tokens.void.c300,
            iconActivated: tokens.nebula.c200,
            activated: tokens.nebula.c100,
          },
        },

        card: {
          border: tokens.void.c700,
          background: tokens.void.c300,
          altBackground: tokens.void.c300,
        },

        saveBar: {
          background: tokens.void.c500,
        },
      },

      utils: {
        divider: tokens.void.c200,
      },

      onboarding: {
        bar: tokens.void.c400,
        barFilled: tokens.nebula.c300,
        divider: tokens.void.c200,
        card: tokens.void.c500,
        cardHover: tokens.void.c400,
        border: tokens.void.c300,
        good: tokens.nebula.c100,
        best: tokens.starlight.c100,
        link: tokens.nebula.c100,
      },

      errors: {
        card: tokens.void.c400,
        border: tokens.void.c300,
        type: {
          secondary: tokens.starlight.c100,
        },
      },

      about: {
        circle: tokens.void.c300,
        circleText: tokens.starlight.c100,
      },

      editBadge: {
        bg: tokens.void.c300,
        bgHover: tokens.void.c200,
        text: tokens.starlight.c100,
      },

      progress: {
        background: tokens.starlight.c100,
        preloaded: tokens.starlight.c100,
        filled: tokens.nebula.c200,
      },

      video: {
        buttonBackground: tokens.cosmos.c100,

        autoPlay: {
          background: tokens.void.c400,
          hover: tokens.void.c300,
        },

        scraping: {
          card: tokens.void.c400,
          error: tokens.starlight.c400,
          success: tokens.starlight.c300,
          loading: tokens.nebula.c200,
          noresult: tokens.starlight.c100,
        },

        audio: {
          set: tokens.nebula.c200,
        },

        context: {
          background: tokens.void.c500,
          light: tokens.starlight.c100,
          border: tokens.void.c200,
          hoverColor: tokens.void.c200,
          buttonFocus: tokens.void.c100,
          flagBg: tokens.void.c200,
          inputBg: tokens.void.c300,
          buttonOverInputHover: tokens.void.c200,
          inputPlaceholder: tokens.cosmos.c100,
          cardBorder: tokens.void.c400,
          slider: tokens.starlight.c200,
          sliderFilled: tokens.nebula.c200,
          error: tokens.starlight.c400,

          buttons: {
            list: tokens.void.c400,
            active: tokens.void.c600,
          },

          closeHover: tokens.void.c500,

          type: {
            main: tokens.cosmos.c200,
            secondary: tokens.cosmos.c100,
            accent: tokens.nebula.c200,
          },
        },
      },
    },
  },
};
