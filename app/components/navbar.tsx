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
import { Bell, Menu, MessagesSquare, Search, Send } from "lucide-react";

interface Props {
  id: number;
  first_name: string;
  last_name: string;
  identity_number: string;
  username: string;
}

export default function Navbar(props: Props) {
  const { isOpen, onOpen, onClose } = useDisclosure();

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
        <HStack display={{ xl: "inline-block", base: "none" }}>
          <InputGroup w={"xl"}>
            <InputLeftElement pointerEvents="none">
              <Search color="#CBD5E0" />
            </InputLeftElement>
            <Input px={10} type="text" placeholder="Cari pertanyaan ..." />
          </InputGroup>
        </HStack>

        {/* Post */}
        <HStack>
          <Button variant={"ghost"} leftIcon={<Send size={20} />}>
            Posting
          </Button>
          <Avatar
            size={"sm"}
            name={props.first_name + props.last_name}
            src={""}
          />
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
            <Divider my={2} />
            <VStack align={"flex-start"}>
              <Button variant={"ghost"} w={"full"} justifyContent={"left"}>
                Pengumuman
              </Button>
              <Button variant={"ghost"} w={"full"} justifyContent={"left"}>
                Posting
              </Button>
            </VStack>
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
            <Avatar
              size={"sm"}
              name={props.first_name + " " + props.last_name}
            />
            <Text>{props.first_name + " " + props.last_name}</Text>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
