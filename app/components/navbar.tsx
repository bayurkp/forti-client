"use client";

import {
  Avatar,
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
  let isLogin: boolean = true;
  return (
    <Flex
      p={4}
      w={"100%"}
      bg={useColorModeValue("white", "gray.800")}
      as={"nav"}
      pos={"sticky"}
      alignItems={"center"}
      border={"1px"}
      borderColor={useColorModeValue("gray.200", "gray.700")}
      justifyContent={"space-between"}>
      {/* Logo */}
      <HStack as="a" href="/">
        <MessagesSquare size={30} strokeWidth={2.5} />
        &nbsp;
        <Heading as={"h1"}>forti</Heading>
      </HStack>

      {/* Search */}
      <HStack display={{ lg: "inline-block", base: "none" }}>
        <InputGroup w={"xl"}>
          <InputLeftElement pointerEvents="none">
            <Search color="#CBD5E0" />
          </InputLeftElement>
          <Input px={10} type="text" placeholder="Cari pertanyaan ..." />
        </InputGroup>
      </HStack>

      {/* Login and Signup */}
      <HStack>
        <Button variant={"ghost"}>Pengumuman</Button>
        <Button variant={"ghost"}>Tanya</Button>
        {isLogin ? (
          <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
        ) : (
          <Button colorScheme={"forti"} as={"a"} href={"/login"}>
            Masuk
          </Button>
        )}
      </HStack>
    </Flex>
  );
}
