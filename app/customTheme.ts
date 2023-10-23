import { extendTheme } from "@chakra-ui/react";

const customTheme = extendTheme({
  config: {
    initialColorMode: "system",
    useSystemColorMode: true,
  },
  colors: {
    forti: {
      50: "#F4D9A2",
      100: "#F0C97A",
      200: "#ECBA4E",
      300: "#C89A47",
      400: "#AB7F41",
      500: "#90673A",
      600: "#785333",
      700: "#5A422D",
      800: "#403226",
      900: "#27201B",
    },
  },
  fonts: {
    heading: `'Montserrat', sans-serif`,
    body: `'Nunito', sans-serif`,
  },
});

export default customTheme;
