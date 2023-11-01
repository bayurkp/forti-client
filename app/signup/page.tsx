"use client";
import { useState } from "react";
import {
  Box,
  Button,
  Center,
  Divider,
  Flex,
  Heading,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Link,
  Spacer,
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
            p={30}
            bg={useColorModeValue("gray.50", "gray.900")}
            borderRadius={10}
            shadow={"sm"}
            borderColor={useColorModeValue("gray.200", "gray.700")}
            w={{ base: "xs", sm: "sm", md: "md", lg: "lg" }}>
            <Center mb={2}>
              <MessagesSquare size={30} strokeWidth={2.5} />
              &nbsp;
              <Heading as={"h1"}>forti</Heading>
            </Center>
            <Text mb={10} textAlign={"center"}>
              Daftar
            </Text>
            <Flex gap={2} mb={4}>
              <Box>
                <Text mb={2} fontWeight={"bold"}>
                  Nama Depan
                </Text>
                <Input
                  value={value}
                  onChange={handleChange}
                  placeholder="John"
                />
              </Box>
              <Spacer />
              <Box>
                <Text mb={2} fontWeight={"bold"}>
                  Nama Akhir
                </Text>
                <Input
                  value={value}
                  onChange={handleChange}
                  placeholder="Doe"
                />
              </Box>
            </Flex>
            <Text mb={2} fontWeight={"bold"}>
              NIM
            </Text>
            <Input
              value={value}
              onChange={handleChange}
              placeholder="2305551199"
              mb={4}
            />
            <Text mb={2} fontWeight={"bold"}>
              Username
            </Text>
            <InputGroup mb={4}>
              <InputLeftElement>
                <AtSign size={18} />
              </InputLeftElement>
              <Input
                value={value}
                onChange={handleChange}
                placeholder="johndoe"
              />
            </InputGroup>
            <Text mb={2} fontWeight={"bold"}>
              Password
            </Text>
            <InputGroup mb={4}>
              <Input
                value={password}
                onChange={handlePassword}
                type={isHidden ? "password" : "text"}
                placeholder="John123"
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
            <Text mb={2} fontWeight={"bold"}>
              Konfirmasi Password
            </Text>
            <InputGroup mb={4}>
              <Input
                value={password}
                onChange={handlePassword}
                type={isHidden ? "password" : "text"}
                placeholder="John123"
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
              Daftar
            </Button>
            <Divider mb={2} color={"whiteAlpha"} />
            <Text textAlign={"center"}>
              Sudah memiliki akun? <Link href={"/login"}>Masuk disini.</Link>
            </Text>
          </Box>
        </Center>
      </Flex>
    </>
  );
}
