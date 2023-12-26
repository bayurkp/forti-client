"use client";
import { useEffect, useState } from "react";
import {
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
  InputRightElement,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { AtSign, Eye, EyeOff, MessagesSquare } from "lucide-react";
import ColorModeToggle from "../components/colorModeToggle";
import { useFormik } from "formik";

export default function Login() {
  const [isHidden, setIsHidden] = useState<boolean>(true);

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <>
      <ColorModeToggle />
      <Flex
        width={"100%"}
        height={"100vh"}
        alignContent={"center"}
        justifyContent={"center"}>
        <Center>
          <form onSubmit={formik.handleSubmit}>
            <Box
              p={10}
              bg={useColorModeValue("white", "gray.800")}
              border={"1px"}
              borderColor={useColorModeValue("gray.200", "gray.700")}
              borderRadius={10}
              w={{ base: "xs", sm: "sm", md: "md" }}>
              <Center mb={2}>
                <MessagesSquare size={30} strokeWidth={2.5} />
                &nbsp;
                <Heading as={"h1"}>forti</Heading>
              </Center>
              <Text mb={10} textAlign={"center"}>
                Masuk
              </Text>
              <FormControl isRequired>
                <FormLabel fontWeight={"bold"}>Username</FormLabel>
                <InputGroup mb={4}>
                  <InputLeftElement>
                    <AtSign size={18} />
                  </InputLeftElement>
                  <Input
                    name={"username"}
                    value={formik.values.username}
                    onChange={formik.handleChange}
                  />
                </InputGroup>
              </FormControl>
              <FormControl isRequired>
                <FormLabel fontWeight={"bold"}>Password</FormLabel>
                <InputGroup mb={4}>
                  <Input
                    name={"password"}
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    type={isHidden ? "password" : "text"}
                  />
                  <InputRightElement
                    onClick={() => {
                      setIsHidden(!isHidden);
                    }}>
                    <IconButton
                      aria-label="Show/hide password"
                      size={"sm"}
                      icon={isHidden ? <Eye /> : <EyeOff />}
                    />
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Button mb={2} colorScheme={"forti"} w={"100%"} type={"submit"}>
                Masuk
              </Button>
              <Divider mb={2} color={"whiteAlpha"} />
              <Button
                mb={2}
                colorScheme={"gray"}
                w={"100%"}
                as={"a"}
                href={"/signup"}>
                Daftar
              </Button>
            </Box>
          </form>
        </Center>
      </Flex>
    </>
  );
}
