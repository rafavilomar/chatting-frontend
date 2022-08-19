import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay
} from "@chakra-ui/modal";
import { Divider, Flex } from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import User from "../models/User";
import GeneralContext from "../utils/context/context";
import UserElement from "./UserElement";

const ActiveUserList = () => {
  const { socket, openActiveUserList, handleActiveUserList } = useContext(
    GeneralContext
  );

  const [userListActive, setUserListActive] = useState<User[]>([]);

  useEffect(() => {
    socket.on("user-list-active", (users) => {
      setUserListActive([...users]);
    });
  }, []);

  return (
    <>
      {openActiveUserList && (
        <Modal
          isOpen={openActiveUserList}
          onClose={() => handleActiveUserList!(false)}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Active Users</ModalHeader>
            <ModalCloseButton />
            <ModalBody
              paddingLeft={0}
              paddingTop={0}
              paddingRight={0}
              paddingBottom="2"
            >
              <Flex gap={2} direction="column">
                {userListActive.map((user, index) => (
                  <>
                    {index === 0 && <Divider />}
                    <UserElement username={user.username} />
                    {index < userListActive.length - 1 && <Divider />}
                  </>
                ))}
              </Flex>
            </ModalBody>
          </ModalContent>
        </Modal>
      )}
    </>
  );
};
export default ActiveUserList;
