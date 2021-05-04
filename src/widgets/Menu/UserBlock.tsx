import React from "react";
import styled from "styled-components";
import Button from "../../components/Button/Button";
import { useWalletModal } from "../WalletModal";
import { Login } from "../WalletModal/types";

interface Props {
  account?: string;
  login: Login;
  logout: () => void;
}

const StyledButton = styled(Button)`
  border-radius: 6px;
`;

const UserBlock: React.FC<Props> = ({ account, login, logout }) => {
  const { onPresentConnectModal, onPresentAccountModal } = useWalletModal(login, logout, account);
  const accountEllipsis = account ? `${account.substring(0, 4)}...${account.substring(account.length - 4)}` : null;
  return (
    <div>
      {account ? (
        <StyledButton
          size="sm"
          onClick={() => {
            onPresentAccountModal();
          }}
        >
          {accountEllipsis}
        </StyledButton>
      ) : (
        <StyledButton
          size="sm"
          onClick={() => {
            onPresentConnectModal();
          }}
        >
          Connect
        </StyledButton>
      )}
    </div>
  );
};

export default UserBlock;
