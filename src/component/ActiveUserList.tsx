import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/modal";
import React, { useContext } from "react";
import GeneralContext from "../utils/context/context";

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
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. In
              temporibus eos velit natus accusamus ducimus, doloremque at sed
              ipsum voluptatum, obcaecati cum sapiente unde aspernatur iure!
              Enim nisi commodi consequatur!",
            </ModalBody>
          </ModalContent>
        </Modal>
      )}
    </>
  );
};
export default ActiveUserList;
