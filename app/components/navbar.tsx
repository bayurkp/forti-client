"use client";

import {
  Avatar,
  Button,
  Divider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  HStack,
  Heading,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
  VStack,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { Menu, MessagesSquare, Search, Send } from "lucide-react";
import AddPostModal from "./addPostModal";

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const username: string = localStorage.getItem("username")!;

  return (
    <>
      <Flex
        p={4}
        w={"100%"}
        bg={useColorModeValue("white", "gray.800")}
        as={"nav"}
        pos={"fixed"}
        zIndex={999}
        alignItems={"center"}
        border={"1px"}
        borderColor={useColorModeValue("gray.200", "gray.700")}
        justifyContent={"space-between"}
        display={{ base: "none", lg: "flex" }}>
        {/* Logo */}
        <HStack as="a" href="/">
          <MessagesSquare size={30} strokeWidth={2.5} />
          &nbsp;
          <Heading as={"h1"}>forti</Heading>
        </HStack>

        {/* Search */}
        <form method={"get"} action={"/posts"}>
          <HStack display={{ xl: "inline-block", base: "none" }}>
            <InputGroup w={"xl"}>
              <InputLeftElement pointerEvents="none">
                <Search color="#CBD5E0" />
              </InputLeftElement>
              <Input
                px={10}
                type="text"
                name={"content"}
                placeholder="Cari pertanyaan ..."
              />
            </InputGroup>
            <Input type={"submit"} display={"none"} />
          </HStack>
        </form>

        {/* Post and User */}
        <HStack>
          <AddPostModal />
          <Avatar size={"sm"} name={username} src={""} />
        </HStack>
      </Flex>

      {/* Addon */}
      <Flex
        mt={"76.8px"}
        px={4}
        py={2}
        w={"100%"}
        bg={useColorModeValue("white", "gray.800")}
        as={"nav"}
        pos={"fixed"}
        zIndex={999}
        alignItems={"center"}
        borderBottom={"1px"}
        borderColor={useColorModeValue("gray.200", "gray.700")}
        justifyContent={"space-evenly"}
        display={{ base: "none", lg: "flex" }}>
        <Button variant={"ghost"}>Minat dan Bakat</Button>
        <Button variant={"ghost"}>Kepanitian</Button>
        <Button variant={"ghost"}>HMTI</Button>
        <Button variant={"ghost"}>Kelompok Studi</Button>
        <Button variant={"ghost"}>Pengabdian Masyrakat</Button>
        <Button variant={"ghost"}>Praktikum</Button>
        <Button variant={"ghost"}>Lainnya</Button>
      </Flex>

      {/* For smaller */}
      <Flex
        p={4}
        w={"100%"}
        bg={useColorModeValue("white", "gray.800")}
        as={"nav"}
        pos={"fixed"}
        zIndex={999}
        alignItems={"center"}
        border={"1px"}
        borderColor={useColorModeValue("gray.200", "gray.700")}
        justifyContent={"space-between"}
        display={{ base: "flex", lg: "none" }}>
        <HStack as="a" href="/">
          <MessagesSquare size={30} strokeWidth={2.5} />
          &nbsp;
          <Heading as={"h1"}>forti</Heading>
        </HStack>
        <IconButton
          aria-label={"Menu"}
          icon={<Menu />}
          variant={"ghost"}
          onClick={onOpen}
        />
      </Flex>

      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>

          <DrawerBody>
            <Text fontWeight={"bold"} mt={4} mb={2}>
              Aksi
            </Text>
            <AddPostModal />
            <Text fontWeight={"bold"} mt={4} mb={2}>
              Kategori
            </Text>
            <Divider my={2} />
            <VStack align={"flex-start"}>
              <Button variant={"ghost"} w={"full"} justifyContent={"left"}>
                Minat dan Bakat
              </Button>
              <Button variant={"ghost"} w={"full"} justifyContent={"left"}>
                Kepanitian
              </Button>
              <Button variant={"ghost"} w={"full"} justifyContent={"left"}>
                HMTI
              </Button>
              <Button variant={"ghost"} w={"full"} justifyContent={"left"}>
                Kelompok Studi
              </Button>
              <Button variant={"ghost"} w={"full"} justifyContent={"left"}>
                Pengabdian Masyrakat
              </Button>
              <Button variant={"ghost"} w={"full"} justifyContent={"left"}>
                Praktikum
              </Button>
              <Button variant={"ghost"} w={"full"} justifyContent={"left"}>
                Lainnya
              </Button>
            </VStack>
          </DrawerBody>
          <Divider />
          <DrawerFooter justifyContent={"left"} gap={4}>
            <Avatar size={"sm"} name={username} />
            <Text>@{username}</Text>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
