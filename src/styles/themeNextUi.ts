import { createTheme } from "@nextui-org/react";

const lightTheme = createTheme({
  type: "light",
  theme: {
    colors: {
      background: "#fff",
      text: "#000",
    },
  }, // optional
});

const darkTheme = createTheme({
  type: "dark",
  theme: {
    colors: {}, // optional
  },
});

export { darkTheme, lightTheme };
