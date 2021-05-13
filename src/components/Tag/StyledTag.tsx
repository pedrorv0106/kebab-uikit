import styled, { DefaultTheme } from "styled-components";
import getColor from "../../util/getColor";
import { TagProps } from "./types";

interface ThemedProps extends TagProps {
  theme: DefaultTheme;
}

const getThemeTextColor = ({ outline, variant = "primary", theme }: ThemedProps) =>
  outline ? getColor(variant, theme) : "#ffffff";

export const StyledTag = styled.div<ThemedProps>`
  align-items: center;
  background-color: ${({ outline, theme, variant = "primary" }) =>
    outline ? "transparent" : getColor(variant, theme)};
  border: 2px solid ${({ variant = "primary", theme }) => getColor(variant, theme)};
  border-radius: 30px;
  color: ${getThemeTextColor};
  display: inline-flex;
  font-family: GilroySemiBold;
  font-size: 14px;
  height: 36px;
  line-height: 1.5;
  padding: 8px 12px;
  white-space: nowrap;

  svg {
    fill: ${getThemeTextColor};
  }
`;

export default null;
