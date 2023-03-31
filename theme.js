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
          borderRadius: 32,
          filter: "drop-shadow(0.2rem 0.2rem 0.25rem #000)",
          minWidth: "4rem",
          letterSpacing: 1.25,
          fontSize: 20,
          "&:hover": {
            transform: "translate(1px, 1px)",
          },
          "&:active": {
            transform: "translate(2px, 2px)",
          },
        },
      }),
    },
    TextInput: {
      styles: (theme, params) => ({
        input: {
          border: "2px solid #000",
          filter: "drop-shadow(0.5rem 0.2rem 0.25rem #000)",
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
          filter: "drop-shadow(0.5rem 0.2rem 0.25rem #000)",
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
