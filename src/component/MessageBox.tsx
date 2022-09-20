import { Flex, Text } from "@chakra-ui/react";
import { isEqual } from "lodash";
import moment from "moment";
import { useContext } from "react";
import User from "../models/User";

import GeneralContext from "../utils/context/context";

type props = {
  message: string;
  user: User;
  date: Date;
};

const MessageBox = ({ date, message, user }: props) => {
  const { userLogged } = useContext(GeneralContext);

  return (
    <Flex
      justifyContent={isEqual(user, userLogged) ? "flex-end" : "flex-start"}
    >
      <Flex
        maxW="80%"
        direction="column"
        bgColor={isEqual(user, userLogged) ? "green.200" : "white"}
        borderRadius="md"
        padding="3"
        gap={1}
      >
        <Text color="blackAlpha.700" fontWeight="medium" fontSize="md">
          {`${user.username} - ${moment().format('LT')}`}
        </Text>
        <Text fontSize="md">{message}</Text>
      </Flex>
    </Flex>
  );
};
export default MessageBox;
