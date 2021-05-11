import { Colors } from "./types";

export const baseColors = {
  failure: "#ED4B9E",
  primary: "#E46149",
  primaryBright: "#FAE0DC",
  primaryDark: "#EC9383",
  secondary: "#D88C46",
  success: "#31D0AA",
  warning: "#FFB237",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#FAF9FA",
  backgroundDisabled: "#E9EAEB",
  contrast: "#191326",
  invertedContrast: "#FFFFFF",
  input: "#eeeaf4",
  tertiary: "#FFFFFF",
  text: "#23001E",
  textDisabled: "#F7D0C9",
  textSubtle: "#404040",
  borderColor: "#E9EAEB",
  card: "#FFFFFF",
  cardBackground1: "#E46149",
  cardBackground2: "#EDF1F3",
  cardBackground3: "#FFFFFF",
  secondaryButton: "#FFFFFF",
  footer: "#E46149",
  menuHover: "#EEEEEE",
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#191326",
  backgroundDisabled: "#362C45",
  contrast: "#FFFFFF",
  invertedContrast: "#191326",
  input: "#483f5a",
  primaryDark: "#0098A1",
  tertiary: "#353547",
  text: "#FFFFFF",
  textDisabled: "#F7D0C9",
  textSubtle: "#FFFFFF",
  borderColor: "#524B63",
  card: "#27262c",
  cardBackground1: "#252836",
  cardBackground2: "#252836",
  cardBackground3: "#252836",
  secondaryButton: "#1F1D2B",
  footer: "#FFFFFF",
  menuHover: "#353547",
};
