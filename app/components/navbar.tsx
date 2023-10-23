"use client";

import {
  Box,
  Button,
  Flex,
  HStack,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  useColorModeValue,
} from "@chakra-ui/react";
import { MessagesSquare, Search } from "lucide-react";

export default function Navbar() {
  return (
    <Flex
      w={"100%"}
      p={4}
      alignItems={"center"}
      justifyContent={"space-between"}
      bg={useColorModeValue("gray.50", "gray.900")}
      pos={"fixed"}>
      {/* Logo */}
      <HStack as="a" href="/">
        <MessagesSquare size={30} strokeWidth={2.5} />
        &nbsp;
        <Heading as={"h1"}>forti</Heading>
      </HStack>

      {/* Search */}
      <HStack display={{ lg: "inline", base: "none" }}>
        <InputGroup w={"xl"}>
          <InputLeftElement pointerEvents="none">
            <Search color="#CBD5E0" />
          </InputLeftElement>
          <Input px={10} type="text" placeholder="Cari pertanyaan ..." />
        </InputGroup>
      </HStack>

      {/* Login and Signup */}
      <HStack>
        <Button colorScheme={"forti"}>Masuk</Button>
        <Button colorScheme={"forti"} variant={"outline"}>
          Daftar
        </Button>
      </HStack>
    </Flex>
  );
}
