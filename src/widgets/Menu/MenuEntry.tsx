/* eslint no-nested-ternary: "off" */

import styled, { DefaultTheme } from "styled-components";
import { MENU_ENTRY_HEIGHT } from "./config";

export interface Props {
  secondary?: boolean;
  isActive?: boolean;
  theme: DefaultTheme;
  color?: string;
  backgroundColor?: string;
  isPushed?: boolean;
}

const MenuEntry = styled.div<Props>`
  cursor: pointer;
  display: flex;
  align-items: center;
  height: ${MENU_ENTRY_HEIGHT}px;
  padding: ${({ secondary, isPushed }) => (secondary ? "0 32px" : isPushed ? "0 16px" : "0 8px")};
  font-size: ${({ secondary }) => (secondary ? "14px" : "16px")};
  background-color: ${({ secondary, theme }) => (secondary ? theme.colors.background : "transparent")};
  color: ${({ theme, isActive, color }) => (isActive ? color : theme.colors.textSubtle)};
  a {
    display: flex;
    align-items: center;
    width: 100%;
    height: 40px;
    background-color: ${({ isActive, backgroundColor, secondary, theme }) =>
      isActive
        ? secondary
          ? theme.colors.background
          : backgroundColor
        : secondary
        ? theme.colors.background
        : theme.colors.card};
    border-radius: 15px;
  }
  & {
    svg:first-of-type {
      border-radius: 15px;
      background-color: ${({ isActive, isPushed, color, backgroundColor, theme }) =>
        isActive ? (isPushed ? color : backgroundColor) : theme.colors.card};
      padding: 8px;
      width: 40px;
      height: 40px;
      margin-right: 15px;
      margin-left: -1px;
      fill: ${({ isActive, theme, color, isPushed }) =>
        isActive ? (isPushed ? "#FFFFFF" : color) : theme.colors.textSubtle};
    }
    svg:nth-of-type(2) {
      fill: ${({ isActive, theme, color, isPushed }) =>
        isActive ? (isPushed ? color : "#FFFFFF") : theme.colors.textSubtle};
    }
  }
  &:hover {
    background-color: ${({ theme }) => theme.colors.menuHover};
    a {
      background-color: ${({ theme, isActive, backgroundColor, secondary }) =>
        isActive ? (secondary ? theme.colors.menuHover : backgroundColor) : theme.colors.menuHover};
    }
    svg:first-of-type {
      background-color: ${({ theme, isActive, color, isPushed, backgroundColor }) =>
        isActive ? (isPushed ? color : backgroundColor) : theme.colors.menuHover};
    }
  }
  // Safari fix
  flex-shrink: 0;
`;
MenuEntry.defaultProps = {
  secondary: false,
  isActive: false,
  role: "button",
};

const LinkLabel = styled.div<{ isActive?: boolean; isPushed: boolean; color?: string }>`
  font-family: "GilroySemiBold";
  color: ${({ isPushed, theme, color, isActive }) =>
    isPushed ? (isActive ? color : theme.colors.textSubtle) : "transparent"};
  transition: color 0.4s;
  flex-grow: 1;
`;

export { MenuEntry, LinkLabel };
