import React from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { SvgProps } from "../../components/Svg";
import * as IconModule from "./icons";
import Accordion from "./Accordion";
import { MenuEntry, LinkLabel } from "./MenuEntry";
import MenuLink from "./MenuLink";
import { PanelProps, PushedProps } from "./types";

interface Props extends PanelProps, PushedProps {
  isMobile: boolean;
}

const Icons = (IconModule as unknown) as { [key: string]: React.FC<SvgProps> };

const Container = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden;
  height: 100%;
`;

const PanelBody: React.FC<Props> = ({ isPushed, pushNav, isMobile, links }) => {
  const location = useLocation();

  // Close the menu when a user clicks a link on mobile
  const handleClick = isMobile ? () => pushNav(false) : undefined;

  return (
    <Container>
      {links.map((entry) => {
        const Icon = Icons[entry.icon];
        const iconElement = <Icon width="24px" mr="8px" />;
        if (entry.items) {
          const itemLinks = entry.items.map((item) => item.href);
          return (
            <Accordion
              key={entry.label}
              isPushed={isPushed}
              isActive={itemLinks.includes(location.pathname)}
              pushNav={pushNav}
              icon={iconElement}
              label={entry.label}
              initialOpenState={entry.initialOpenState}
              color={entry.color}
              backgroundColor={entry.backgroundColor}
            >
              {isPushed &&
                entry.items.map((item) => (
                  <MenuEntry
                    key={item.href}
                    isActive={item.href === location.pathname}
                    isPushed={isPushed}
                    color={entry.color}
                    backgroundColor={entry.backgroundColor}
                    secondary
                    onClick={handleClick}
                  >
                    <MenuLink href={item.href} style={{ fontFamily: "GilroyMedium" }}>
                      {item.label}
                    </MenuLink>
                  </MenuEntry>
                ))}
            </Accordion>
          );
        }
        return (
          <MenuEntry
            key={entry.label}
            isActive={entry.href === location.pathname}
            isPushed={isPushed}
            color={entry.color}
            backgroundColor={entry.backgroundColor}
          >
            <MenuLink href={entry.href} onClick={handleClick}>
              {iconElement}
              <LinkLabel isActive={entry.href === location.pathname} isPushed={isPushed} color={entry.color}>
                {entry.label}
              </LinkLabel>
            </MenuLink>
          </MenuEntry>
        );
      })}
    </Container>
  );
};

export default PanelBody;
