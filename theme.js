import { ChevronUp } from "tabler-icons-react";

const theme = {
  colorScheme: "dark",
  fontFamily: "VT323, sans-serif",
  headings: { fontFamily: "VT323, sans-serif" },
  colors: {
    brand: [
      "#33ff33",
      "#33ff33",
      "#33ff33",
      "#33ff33",
      "#33ff33",
      "#33ff33",
      "#33ff33",
      "#33ff33",
      "#33ff33",
      "#33ff33",
    ],
  },
  primaryColor: "brand",
  components: {
    Button: {
      styles: (theme, params) => ({
        root: {
          background: params.variant === "filled" ? theme.brand : "transparent",
          color: params.variant === "filled" ? "#121212" : theme.brand,
          border: "2px solid #000",
          borderRadius: 4,
          boxShadow: "black 4px 4px 0 0",
          padding: "0 16px",
          minWidth: "4rem",
          "&:hover": {
            transform: "translate(1px, 1px)",
          },
        },
      }),
    },
    TextInput: {
      styles: (theme, params) => ({
        input: {
          border: "2px solid #000",
          boxShadow: "black 4px 4px 0 0",
          caretColor: theme.colors.brand,
          "&:focus": {
            borderColor: theme.colors.brand,
          },
        },
      }),
    },
    Textarea: {
      styles: (theme, params) => ({
        input: {
          border: "2px solid #000",
          boxShadow: "black 4px 4px 0 0",
          caretColor: theme.colors.brand,
          "&:focus": {
            borderColor: theme.colors.brand,
          },
        },
      }),
    },
  },
};

export { theme };
