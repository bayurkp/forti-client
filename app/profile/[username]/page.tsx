"use client";
import { useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Center,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  useColorModeValue,
} from "@chakra-ui/react";
import { AtSign, MessagesSquare } from "lucide-react";
import ColorModeToggle from "../../components/colorModeToggle";
import { getUser } from "../../lib/getUser";
import { useParams } from "next/navigation";

export default function Profile() {
  if (!localStorage.getItem("token")) {
    location.replace("/login");
  }

  interface User {
    id: number;
    first_name: string;
    last_name: string;
    identity_number: string;
    username: string;
    email: string;
    password: string;
    user_role: string;
    created_at: string;
    updated_at: string;
  }

  const { username } = useParams();
  const user: User = getUser(username.toString());

  const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("username");
    localStorage.removeItem("token");
    localStorage.removeItem("user_role");
    location.replace("/login");
  };

  return (
    <>
      <ColorModeToggle />
      <Flex
        width={"100%"}
        height={"100vh"}
        alignContent={"center"}
        justifyContent={"center"}>
        <Center>
          <Box
            p={10}
            bg={useColorModeValue("white", "gray.800")}
            border={"1px"}
            borderColor={useColorModeValue("gray.200", "gray.700")}
            borderRadius={10}
            w={{ base: "xs", sm: "sm", md: "md" }}>
            <Center mb={8}>
              <MessagesSquare size={30} strokeWidth={2.5} />
              &nbsp;
              <Heading as={"h1"}>forti</Heading>
            </Center>
            <Center mb={8}>
              <Avatar
                name={user.first_name + " " + user.last_name}
                size={"2xl"}
              />
            </Center>
            <FormControl>
              <FormLabel fontWeight={"bold"}>Username</FormLabel>
              <InputGroup mb={4}>
                <InputLeftElement>
                  <AtSign size={18} />
                </InputLeftElement>
                <Input value={user.username} />
              </InputGroup>
            </FormControl>
            <FormControl>
              <FormLabel fontWeight={"bold"}>Nama Lengkap</FormLabel>
              <InputGroup mb={4}>
                <Input value={user.first_name + " " + user.last_name} />
              </InputGroup>
            </FormControl>
            <FormControl>
              <FormLabel fontWeight={"bold"}>NIM / NIDN</FormLabel>
              <InputGroup mb={4}>
                <Input value={user.identity_number} />
              </InputGroup>
            </FormControl>
            <Button
              display={
                localStorage.getItem("username") === user.username
                  ? "inline-block"
                  : "none"
              }
              mb={2}
              colorScheme={"red"}
              w={"100%"}
              onClick={logout}>
              Logout
            </Button>
          </Box>
        </Center>
      </Flex>
    </>
  );
}
