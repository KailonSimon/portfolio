const sharedTheme = {
  fontFamily: "Poppins",
  headings: { fontFamily: "Staatliches" },
  colors: {
    blue: [
      "#C8F1FF",
      "#98E2FF",
      "#87CEFA",
      "#3CC8FF",
      "#07BFFF",
      "#00B5FF",
      "#87CEFA",
      "#009AFF",
      "#008AFF",
      "#008AFF",
    ],
    orange: [
      "#FFA366",
      "#FF893A",
      "#FF7112",
      "#FF5D00",
      "#FA5D0F",
      "#FF3E00",
      "#FF3500",
      "#F13000",
      "#D92B00",
      "#C42700",
    ],
    purple: [
      "#290099",
      "#290099",
      "#290099",
      "#290099",
      "#290099",
      "#290099",
      "#290099",
      "#290099",
      "#290099",
      "#290099",
    ],
  },
};

const darkTheme = {
  ...sharedTheme,
  colorScheme: "dark",
  primary: "purple",
};

const lightTheme = {
  ...sharedTheme,
  colorScheme: "light",
  primary: "blue",
};

export { darkTheme, lightTheme };
