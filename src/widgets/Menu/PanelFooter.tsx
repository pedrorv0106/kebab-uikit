import React from "react";
import styled from "styled-components";
import { PancakeRoundIcon, PancakeRoundGreenIcon, CogIcon, SvgProps } from "../../components/Svg";
import Text from "../../components/Text/Text";
import Flex from "../../components/Flex/Flex";
import Dropdown from "../../components/Dropdown/Dropdown";
import Link from "../../components/Link/Link";
import Skeleton from "../../components/Skeleton/Skeleton";
import Button from "../../components/Button/Button";
import IconButton from "../../components/Button/IconButton";
import MenuButton from "./MenuButton";
import * as IconModule from "./icons";
import { socials, MENU_ENTRY_HEIGHT } from "./config";
import { PanelProps, PushedProps } from "./types";

interface Props extends PanelProps, PushedProps {}

const Icons = (IconModule as unknown) as { [key: string]: React.FC<SvgProps> };
const { MoonIcon, SunIcon, LanguageIcon } = Icons;

const Container = styled.div`
  flex: none;
  padding: 8px 4px;
  background-color: ${({ theme }) => theme.nav.background};
  border-top: solid 1px ${({ theme }) => theme.colors.divider};
`;

const PriceLink = styled.a`
  display: flex;
  align-items: center;
  svg {
    transition: transform 0.3s;
  }
  :hover {
    svg {
      transform: scale(1.2);
    }
  }
`;

const SettingsEntry = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: ${MENU_ENTRY_HEIGHT}px;
  padding: 0 16px;
`;

const SocialEntry = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: ${MENU_ENTRY_HEIGHT}px;
  padding: 0 16px;
`;

const StyledButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.switchButtonBackground};
  padding: 9px 12px;

  &:hover:not(:disabled):not(:active) {
    background-color: ${({ theme }) => theme.colors.switchButtonBackground};
  }
  &:active {
    background-color: ${({ theme }) => theme.colors.switchButtonBackground};
  }
`;

const ModeButton = styled(Button)`
  padding: 0;
`;

const PanelFooter: React.FC<Props> = ({
  isPushed,
  pushNav,
  toggleTheme,
  isDark,
  cakePriceUsd,
  priceUp,
  currentLang,
  langs,
  setLang,
}) => {
  if (!isPushed) {
    return (
      <Container>
        <IconButton variant="text" onClick={() => pushNav(true)}>
          <CogIcon />
        </IconButton>
      </Container>
    );
  }

  return (
    <Container>
      <SocialEntry>
        {cakePriceUsd ? (
          <PriceLink
            href="https://info.kebabfinance.com/#/token/0x7979f6c54eba05e18ded44c4f986f49a5de551c2"
            target="_blank"
          >
            {priceUp ? <PancakeRoundGreenIcon width="32px" mr="12px" /> : <PancakeRoundIcon width="32px" mr="12px" />}
            <Text color="footer" fontSize="20px" bold>{`$${cakePriceUsd.toFixed(3)}`}</Text>
          </PriceLink>
        ) : (
          <Skeleton width={80} height={24} />
        )}
        <Dropdown
          position="top-right"
          target={
            <StyledButton size="sm" startIcon={<LanguageIcon color="footer" width="18px" />}>
              <Text color="footer" bold>
                {currentLang?.toUpperCase()}
              </Text>
            </StyledButton>
          }
        >
          {langs.map((lang) => (
            <MenuButton
              key={lang.code}
              fullWidth
              onClick={() => setLang(lang)}
              // Safari fix
              style={{ minHeight: "32px", height: "auto" }}
            >
              {lang.language}
            </MenuButton>
          ))}
        </Dropdown>
      </SocialEntry>
      <SettingsEntry>
        <Flex>
          {socials.map((social, index) => {
            const Icon = Icons[social.icon];
            const iconProps = { width: "24px", color: "footer", style: { cursor: "pointer" } };
            const mr = index < socials.length - 1 ? "24px" : 0;
            if (social.items) {
              return (
                <Dropdown key={social.label} position="top-right" target={<Icon {...iconProps} mr={mr} />}>
                  {social.items.map((item) => (
                    <Link external key={item.label} href={item.href} aria-label={item.label} color="footer">
                      {item.label}
                    </Link>
                  ))}
                </Dropdown>
              );
            }
            return (
              <Link external key={social.label} href={social.href} aria-label={social.label} mr={mr}>
                <Icon {...iconProps} />
              </Link>
            );
          })}
        </Flex>
        <ModeButton variant="text" onClick={() => toggleTheme(!isDark)}>
          {/* alignItems center is a Safari fix */}
          <Flex alignItems="center">
            <SunIcon color="text" width="24px" />
            <Text color="footer" mx="4px">
              /
            </Text>
            <MoonIcon color="primary" width="24px" />
          </Flex>
        </ModeButton>
      </SettingsEntry>
    </Container>
  );
};

export default PanelFooter;
