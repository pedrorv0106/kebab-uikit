import { Colors } from "./types";

export const baseColors = {
  failure: "#ED4B9E",
  primary: "#E24E1B",
  primaryBright: "#EA7148",
  primaryDark: "#C94418",
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
  tertiary: "#EFF4F5",
  text: "#1F1F1F",
  textDisabled: "#BDC2C4",
  textSubtle: "#543212",
  borderColor: "#E9EAEB",
  card: "#FFFFFF",
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#D88C46",
  background: "#191326",
  backgroundDisabled: "#362C45",
  contrast: "#FFFFFF",
  invertedContrast: "#191326",
  input: "#483f5a",
  primaryDark: "#0098A1",
  tertiary: "#353547",
  text: "#EAE2FC",
  textDisabled: "#666171",
  textSubtle: "#F5E1CF",
  borderColor: "#524B63",
  card: "#27262c",
};
