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
import { useFormik } from "formik";

export default function Login() {
  const [isHidden, setIsHidden] = useState<boolean>(true);

  const formik = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      identity_number: "",
      email: "",
      username: "",
      password: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values));
    },
  });

  return (
    <>
      <Flex
        width={"100%"}
        height={"100vh"}
        alignContent={"center"}
        justifyContent={"center"}>
        <Center>
          <form onSubmit={formik.handleSubmit}>
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
                    name={"first_name"}
                    value={formik.values.first_name}
                    onChange={formik.handleChange}
                    placeholder="John"
                  />
                </Box>
                <Spacer />
                <Box>
                  <Text mb={2} fontWeight={"bold"}>
                    Nama Akhir
                  </Text>
                  <Input
                    name={"last_name"}
                    value={formik.values.last_name}
                    onChange={formik.handleChange}
                    placeholder="Doe"
                  />
                </Box>
              </Flex>
              <Text mb={2} fontWeight={"bold"}>
                NIM
              </Text>
              <Input
                name={"identity_number"}
                onChange={formik.handleChange}
                value={formik.values.identity_number}
                placeholder="2305551199"
                mb={4}
              />
              <Text mb={2} fontWeight={"bold"}>
                Email
              </Text>
              <Input
                name={"email"}
                onChange={formik.handleChange}
                value={formik.values.email}
                placeholder="2305551199"
                type={"email"}
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
                  name={"username"}
                  value={formik.values.username}
                  onChange={formik.handleChange}
                  placeholder="johndoe"
                />
              </InputGroup>
              <Text mb={2} fontWeight={"bold"}>
                Password
              </Text>
              <InputGroup mb={4}>
                <Input
                  name={"password"}
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  type={isHidden ? "password" : "text"}
                  placeholder="John123"
                />
                <InputRightElement>
                  <IconButton
                    aria-label="Show/hide password"
                    size={"sm"}
                    onClick={() => {
                      setIsHidden(!isHidden);
                    }}
                    icon={isHidden ? <Eye /> : <EyeOff />}
                  />
                </InputRightElement>
              </InputGroup>
              <Button mb={2} colorScheme={"forti"} w={"100%"} type={"submit"}>
                Daftar
              </Button>
              <Divider mb={2} color={"whiteAlpha"} />
              <Text textAlign={"center"}>
                Sudah memiliki akun? <Link href={"/login"}>Masuk disini.</Link>
              </Text>
            </Box>
          </form>
        </Center>
      </Flex>
    </>
  );
}
