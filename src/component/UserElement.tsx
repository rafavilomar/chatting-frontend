import React from "react";
import { Avatar, Flex, Text } from "@chakra-ui/react";

type props = {
  username: string;
};

const UserElement = ({ username }: props) => {
  return (
    <Flex gap={2} alignItems="center" paddingX="5">
      <Avatar size="md" name={username} />
      <Text>{username}</Text>
    </Flex>
  );
};
export default UserElement;
