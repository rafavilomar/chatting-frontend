import { Flex, Text } from "@chakra-ui/react";
import { isEqual } from "lodash";
import moment from "moment";
import React, { useContext } from "react";
import User from "../models/User";

import GeneralContext from "../utils/context/context";

type props = {
  message: string;
  username: User;
  date: Date;
};

const MessageBox = ({ date, message, username }: props) => {
  const { userLogged } = useContext(GeneralContext);

  return (
    <Flex
      justifyContent={isEqual(username, userLogged!.username) ? "flex-end" : "flex-start"}
    >
      <Flex
        maxW="80%"
        direction="column"
        bgColor={isEqual(username, userLogged!.username) ? "green.200" : "white"}
        borderRadius="md"
        padding="3"
        gap={1}
      >
        <Text color="blackAlpha.700" fontWeight="medium" fontSize="md">
          {`${username} - ${moment(date).format("lll")}`}
        </Text>
        <Text fontSize="md">{message}</Text>
      </Flex>
    </Flex>
  );
};
export default MessageBox;
