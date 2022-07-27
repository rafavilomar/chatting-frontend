import { Heading } from "@chakra-ui/react";
import React from "react";

type props = {
  center?: boolean;
};

const Brand = ({ center }: props) => (
  <Heading
    as="h1"
    size="lg"
    textAlign={center ? "center" : "left"}
    marginBottom={5}
  >
    Chatting
  </Heading>
);
export default Brand;
