/* eslint jsx-a11y/anchor-is-valid: "off" */

import React, { useState } from "react";
import styled from "styled-components";
import { MENU_ENTRY_HEIGHT } from "./config";
import { MenuEntry, LinkLabel } from "./MenuEntry";
import { PushedProps } from "./types";
import { ArrowDropDownIcon, ArrowDropUpIcon } from "../../components/Svg";

interface Props extends PushedProps {
  label: string;
  icon: React.ReactElement;
  initialOpenState?: boolean;
  isActive?: boolean;
  color?: string;
  backgroundColor?: string;
}

const AccordionContent = styled.div<{ isOpen: boolean; isPushed: boolean; maxHeight: number }>`
  max-height: ${({ isOpen, maxHeight }) => (isOpen ? `${maxHeight}px` : 0)};
  transition: max-height 0.3s ease-out;
  overflow: hidden;
  border-color: ${({ isOpen, isPushed }) => (isOpen && isPushed ? "rgba(133, 133, 133, 0.1)" : "transparent")};
  border-style: solid;
  border-width: 1px;
`;

const Accordion: React.FC<Props> = ({
  label,
  icon,
  isPushed,
  pushNav,
  initialOpenState = false,
  children,
  isActive,
  color,
  backgroundColor,
}) => {
  const [isOpen, setIsOpen] = useState(initialOpenState);

  const handleClick = () => {
    if (isPushed) {
      setIsOpen((prevState) => !prevState);
    } else {
      pushNav(true);
      setIsOpen(true);
    }
  };

  return (
    <>
      <MenuEntry
        isActive={isActive}
        isPushed={isPushed}
        color={color}
        backgroundColor={backgroundColor}
        onClick={handleClick}
      >
        <a>
          {icon}
          <LinkLabel isActive={isActive} isPushed={isPushed} color={color}>
            {label}
          </LinkLabel>
          {isOpen ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
        </a>
      </MenuEntry>
      <AccordionContent
        isOpen={isOpen}
        isPushed={isPushed}
        maxHeight={React.Children.count(children) * MENU_ENTRY_HEIGHT}
      >
        {children}
      </AccordionContent>
    </>
  );
};

export default Accordion;
