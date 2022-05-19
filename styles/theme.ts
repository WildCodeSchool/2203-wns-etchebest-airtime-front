export const theme: ITheme = {
  colors: {
    background: {
      main: "#E5E5E5",
      white: "#FFFFFF",
      black: "#000000",
      darkGrey: "#383838",
      purple: "#655D8A",
      lightGrey: "#F0F0F0",
    },
    primary: {
      coral: "#F38BA0",
      salmon: "#FFBCBC",
      olive: "#D3E4CD",
      cyan: "#B5EAEA",
    },
    primaryOpacity: {
      coral: "rgba(243, 139, 160, 0.2)",
      salmon: "rgba(255, 188, 188, 0.2)",
      olive: "rgba(211, 228, 205, 0.2)",
      cyan: "rgba(181, 234, 234, 0.2)",
    },
    secondary: {
      main: "",
      light: "",
    },
    text: {
      main: "#030229",
      purple: "#655D8A",
      grey: {
        light: "#C4C4C4",
        dark: "#868686",
        darkVador: "#545454",
        regular: "#B3B3B3",
      },
      black: "#333333",
      white: "#FFFFFF",
      error: "FF0000",
    },
  },
  shadows: {
    card: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    cardHover: "",
  },
};

interface ITheme {
  colors: {
    background: {
      main: string;
      white: string;
      black: string;
      darkGrey: string;
      purple: string;
      lightGrey: string;
    };
    primary: {
      coral: string;
      salmon: string;
      olive: string;
      cyan: string;
    };
    primaryOpacity: {
      coral: string;
      salmon: string;
      olive: string;
      cyan: string;
    };
    secondary: {
      main: string;
      light: string;
    };
    text: {
      main: string;
      purple: string;
      error: string;
      grey: {
        light: string;
        dark: string;
        darkVador: string;
        regular: string;
      };
      black: string;
      white: string;
    };
  };
  shadows: {
    card: string;
    cardHover: string;
  };
}
