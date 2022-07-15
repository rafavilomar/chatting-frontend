import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/modal";
import { Divider, Flex } from "@chakra-ui/react";
import React, { useContext } from "react";
import GeneralContext from "../utils/context/context";
import UserElement from "./UserElement";

const userList = [
  { username: "user1" },
  { username: "user2" },
  { username: "user3" },
  { username: "user4" },
];

const ActiveUserList = () => {
  const { openActiveUserList, handleActiveUserList } = useContext(
    GeneralContext
  );
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
                {userList.map((user, index) => (
                  <>
                    {index === 0 && <Divider />}
                    <UserElement username={user.username} />
                    {index < userList.length - 1 && <Divider />}
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
