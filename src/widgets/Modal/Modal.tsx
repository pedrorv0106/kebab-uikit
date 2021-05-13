import React from "react";
import styled from "styled-components";
import Heading from "../../components/Heading/Heading";
import Button from "../../components/Button/Button";
import Flex from "../../components/Flex/Flex";
import { CloseIcon } from "../../components/Svg";
import { ModalProps } from "./types";

interface Props extends ModalProps {
  title: string;
}

const StyledModal = styled.div`
  background: ${({ theme }) => theme.modal.background};
  box-shadow: 0px 16px 24px rgba(0, 0, 0, 0.06), 0px 2px 6px rgba(0, 0, 0, 0.04), 0px 0px 1px rgba(0, 0, 0, 0.04);
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  border-radius: 19px;
  width: 100%;
  z-index: ${({ theme }) => theme.zIndices.modal};
  overflow-y: auto;
  ${({ theme }) => theme.mediaQueries.xs} {
    width: auto;
    min-width: 360px;
    max-width: 100%;
  }
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderColor};
  align-items: center;
  padding: 15px 10px 0px 31px;
`;
const StyledHeading = styled(Heading)`
  font-size: 28px;
  font-weight: 700;
`;
const CloseButton = styled(Button)`
  padding: 8px;
  width: 48px;
`;

const Modal: React.FC<Props> = ({ title, onDismiss, children }) => (
  <StyledModal>
    <ModalHeader>
      <StyledHeading>{title}</StyledHeading>
      <CloseButton variant="text" onClick={onDismiss} aria-label="Close the dialog">
        <CloseIcon color="primary" onClick={onDismiss} />
      </CloseButton>
    </ModalHeader>
    <Flex flexDirection="column" p="31px 31px 38px 31px">
      {children}
    </Flex>
  </StyledModal>
);

export default Modal;
