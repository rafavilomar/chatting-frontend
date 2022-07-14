import { Flex, Text } from "@chakra-ui/react";
import moment from "moment";
import React from "react";

type props = {
  message: string;
  username: string;
  date: Date;
};

const MessageBox = ({ date, message, username }: props) => {
  return (
    <Flex justifyContent={username === "me" ? "flex-end" : "flex-start"}>
      <Flex
        maxW="80%"
        direction="column"
        bgColor={username === "me" ? "green.200" : "white"}
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
