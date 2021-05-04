import React from "react";
import Button from "../../components/Button/Button";
import Text from "../../components/Text/Text";
import Link from "../../components/Link/Link";
import Flex from "../../components/Flex/Flex";
import { OpenNewIcon, LogoutIcon } from "../../components/Svg";
import { Modal } from "../Modal";
import { localStorageKey } from "./config";

interface Props {
  account?: string;
  logout: () => void;
  onDismiss?: () => void;
}

const AccountModal: React.FC<Props> = ({ account, logout, onDismiss = () => null }) => (
  <Modal title="Your wallet" onDismiss={onDismiss}>
    <Text
      fontSize="20px"
      bold
      style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", marginBottom: "8px" }}
    >
      {account}
    </Text>
    <Link
      fontSize="16px"
      href={`https://bscscan.com/address/${account}`}
      target="blank"
      rel="noopener noreferrer"
      mb="32px"
    >
      <OpenNewIcon width="20px" color="primary" mr="4px" />
      View on BscScan
    </Link>
    <Flex justifyContent="center">
      <Button
        variant="primary"
        startIcon={<LogoutIcon />}
        onClick={() => {
          logout();
          window.localStorage.removeItem(localStorageKey);
          onDismiss();
          window.location.reload();
        }}
      >
        Logout
      </Button>
    </Flex>
  </Modal>
);

export default AccountModal;
