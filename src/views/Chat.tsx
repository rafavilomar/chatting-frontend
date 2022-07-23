import { HamburgerIcon } from "@chakra-ui/icons";
import { Flex, IconButton, Input } from "@chakra-ui/react";
import { FaPaperPlane } from "react-icons/fa";
import React, { useContext, useState } from "react";

import GeneralContext from "../utils/context/context";
import MessageBox from "../component/MessageBox";
import Brand from "../component/Brand";
import ActiveUserList from "../component/ActiveUserList";
import Message from "../models/Message";

const Chat = () => {
  const { socket, handleActiveUserList } = useContext(GeneralContext);
  const [message, setMessage] = useState<string>("");
  const [currentMessages, setCurrentMessage] = useState<any[]>([]);

  const handleMessage = (e: any) => {
    setMessage(e.target.value);
  };

  const sendMessage = () => {
    socket
      .emit("send-message", message)
      .on("new-message", (message: Message) => {
        currentMessages.unshift(message);
        setCurrentMessage([...currentMessages]);
      });
    setMessage("");
  };

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
      <ActiveUserList />
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
          onClick={() => handleActiveUserList!(true)}
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
          {currentMessages.map((message) => (
            <MessageBox
              message={message.message}
              date={message.date}
              user={message.user}
            />
          ))}
        </Flex>
      </Flex>

      {/* MESSAGE INPUT */}
      <Flex bgColor="gray.50" padding={"3"} gap={3}>
        <Input
          placeholder="Message"
          borderRadius={"md"}
          variant="filled"
          value={message}
          onChange={(e: any) => handleMessage(e)}
        />
        <IconButton
          variant={"solid"}
          aria-label="send message"
          icon={<FaPaperPlane />}
          onClick={sendMessage}
        />
      </Flex>
    </Flex>
  );
};
export default Chat;
