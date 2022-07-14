import { HamburgerIcon } from "@chakra-ui/icons";
import { Flex, Heading, IconButton, Input } from "@chakra-ui/react";
import { FaPaperPlane } from "react-icons/fa";
import React from "react";
import MessageBox from "../component/MessageBox";
import Brand from "../component/Brand";

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
        maxHeight={"16"}
      >
        <Brand />
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
            <MessageBox
              message={message.message}
              date={message.date}
              username={message.user}
            />
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