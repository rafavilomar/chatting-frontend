import { AddIcon, HamburgerIcon } from "@chakra-ui/icons";
import { Flex, Heading, IconButton, Input, Text } from "@chakra-ui/react";
import {FaPaperPlane} from "react-icons/fa"
import moment from "moment";
import React from "react";

const messageList = [
  {
    message:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. In temporibus eos velit natus accusamus ducimus, doloremque at sed ipsum voluptatum, obcaecati cum sapiente unde aspernatur iure! Enim nisi commodi consequatur!",
    user: "user",
    date: new Date(),
  },
  {
    message:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. In temporibus eos velit natus accusamus ducimus, doloremque at sed ipsum voluptatum, obcaecati cum sapiente unde aspernatur iure! Enim nisi commodi consequatur!",
    user: "me",
    date: new Date(),
  },
  {
    message:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. In temporibus eos velit natus accusamus ducimus, doloremque at sed ipsum voluptatum, obcaecati cum sapiente unde aspernatur iure! Enim nisi commodi consequatur!",
    user: "user",
    date: new Date(),
  },
  {
    message:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. In temporibus eos velit natus accusamus ducimus, doloremque at sed ipsum voluptatum, obcaecati cum sapiente unde aspernatur iure! Enim nisi commodi consequatur!",
    user: "user",
    date: new Date(),
  },
];

const Chat = () => {
  return (
    <Flex
      direction="column"
      pos={"fixed"}
      top={0}
      left={0}
      right={0}
      bottom={0}
      bgColor="gray.50"
    >
      {/* BAR */}
      <Flex
        justifyContent="space-between"
        bgColor="white"
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
      {/* MESSAGE LIST */}
      <Flex
        height="100%"
        overflowY="scroll"
        direction="column-reverse"
        paddingX={"3"}
      >
        <Flex direction="column-reverse" gap={5}>
          {messageList.map((message) => (
            <Flex
              justifyContent={message.user === "me" ? "flex-end" : "flex-start"}
            >
              <Flex
                maxW="80%"
                direction="column"
                bgColor={message.user === "me" ? "green.200" : "white"}
                borderRadius="md"
                padding="3"
                gap={1}
              >
                <Text color="blackAlpha.700" fontWeight="medium" fontSize="md">
                  {`${message.user} - ${moment(message.date).format("lll")}`}
                </Text>
                <Text fontSize="md">{message.message}</Text>
              </Flex>
            </Flex>
          ))}
        </Flex>
      </Flex>

      {/* MESSAGE INPUT */}
      <Flex bgColor="gray.50" padding={"3"} gap={3}>
        <Input placeholder="Message" borderRadius={"md"} variant="filled" />
        <IconButton
          variant={"solid"}
          aria-label="send message"
          icon={<FaPaperPlane />}
        />
      </Flex>
    </Flex>
  );
};
export default Chat;
