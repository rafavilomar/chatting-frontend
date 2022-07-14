import { AddIcon, HamburgerIcon } from "@chakra-ui/icons";
import { Box, Flex, Heading, IconButton, Input } from "@chakra-ui/react";
import React from "react";

const Chat = () => {
  return (
    <Box pos={"fixed"} top={0} left={0} right={0} bottom={0} bgColor="gray.50">
      {/* BAR */}
      <Flex
        justifyContent="space-between"
        bgColor="white"
        position="absolute"
        top={0}
        left={0}
        right={0}
        padding="3"
        shadow="sm"
      >
        <Heading>Chatting</Heading>
        <IconButton
          aria-label="user list"
          variant="ghost"
          icon={<HamburgerIcon />}
        />
      </Flex>

      {/* MESSAGE INPUT */}
      <Flex
        bgColor="gray.50"
        position="absolute"
        bottom={0}
        left={0}
        right={0}
        padding={"4"}
        gap={3}
      >
        <Input placeholder="Message" borderRadius={"md"} variant="filled" />
        <IconButton
          variant={"solid"}
          aria-label="send message"
          icon={<AddIcon />}
        />
      </Flex>
    </Box>
  );
};
export default Chat;
