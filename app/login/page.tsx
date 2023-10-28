"use client";
import { useState } from "react";
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

export default function Login() {
  const [isHidden, setIsHidden] = useState<boolean>(true);

  const [value, setValue] = useState<string>("");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setValue(event.target.value);

  const [password, setPassword] = useState<string>("");
  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) =>
    setPassword(event.target.value);

  return (
    <>
      <Flex
        width={"100%"}
        height={"100vh"}
        alignContent={"center"}
        justifyContent={"center"}>
        <Center>
          <Box
            p={10}
            bg={useColorModeValue("gray.50", "gray.900")}
            borderRadius={10}
            shadow={"sm"}>
            <Center mb={2}>
              <MessagesSquare size={30} strokeWidth={2.5} />
              &nbsp;
              <Heading as={"h1"}>forti</Heading>
            </Center>
            <Text mb={10} textAlign={"center"}>
              Masuk
            </Text>
            <FormControl variant={"floating"} isRequired>
              <FormLabel fontWeight={"bold"}>Username</FormLabel>
              <InputGroup mb={4}>
                <InputLeftElement>
                  <AtSign size={18} />
                </InputLeftElement>
                <Input value={value} onChange={handleChange} />
              </InputGroup>
            </FormControl>
            <Text mb={2} fontWeight={"bold"}>
              Password
            </Text>
            <InputGroup mb={4}>
              <Input
                value={password}
                onChange={handlePassword}
                type={isHidden ? "password" : "text"}
                placeholder="Password Anda ..."
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
            <Button mb={2} colorScheme={"forti"} w={"100%"} as={"a"} href={"/"}>
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
        </Center>
      </Flex>
    </>
  );
}
