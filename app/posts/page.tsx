"use client";

import {
  Box,
  Button,
  Container,
  Heading,
  Stack,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import { getPosts } from "../lib/getPosts";
import ColorModeToggle from "../components/colorModeToggle";
import Navbar from "../components/navbar";
import PostPreviewCard from "../components/postPreviewCard";
import { useSearchParams } from "next/navigation";

export default function Home() {
  if (!localStorage.getItem("token")) {
    location.replace("/login");
  }

  interface Post {
    id: number;
    user: {
      id: number;
      first_name: string;
      last_name: string;
      identity_number: string;
      username: string;
    };
    likes: number;
    dislikes: number;
    content: string;
    category: string;
    created_at: string;
    updated_at: string;
  }

  const posts: Post[] = getPosts({
    sort: "updated_at",
    order: "desc",
    content: useSearchParams().get("content"),
  });
  const mostLikedPosts: Post[] = getPosts({
    sort: "likes",
    order: "desc",
    limit: 3,
  });

  return (
    <>
      <Navbar />
      <ColorModeToggle />
      <Container maxW={"container.xl"} centerContent>
        <Stack
          mt={{ base: "93.6px", lg: "153.6px" }}
          direction={{ base: "column", xl: "row" }}>
          <VStack mb={8}>
            {posts.map((e) => {
              return (
                <PostPreviewCard
                  key={e.id}
                  {...e}
                  w={{ base: "sm", md: "xl", xl: "3xl" }}
                />
              );
            })}
            <Button variant={"solid"}>Lainnya ...</Button>
          </VStack>
          <VStack
            mb={8}
            p={{ base: 0, xl: 4 }}
            h={"fit-content"}
            border={{ base: 0, xl: "1px" }}
            borderRadius={{ base: 0, xl: 10 }}
            bg={{
              base: "transparent",
              xl: useColorModeValue("gray.100", "gray.900"),
            }}
            borderColor={{
              base: "transparent",
              xl: useColorModeValue("gray.200", "gray.700"),
            }}>
            <Button variant={"ghost"} size={"lg"}>
              <Heading as={"h2"} size={"md"}>
                Postingan Paling Disukai
              </Heading>
            </Button>
            <VStack mb={8}>
              {mostLikedPosts.map((e) => {
                return (
                  <PostPreviewCard
                    key={e.id}
                    {...e}
                    w={{ base: "sm", md: "xl", xl: "md" }}
                  />
                );
              })}
            </VStack>
            <Button variant={"ghost"} size={"lg"}>
              <Heading as={"h2"} size={"md"}>
                Media Sosial HMTI
              </Heading>
            </Button>
            <Box
              as={"iframe"}
              p={4}
              bg={useColorModeValue("white", "gray.800")}
              border={"1px"}
              borderColor={useColorModeValue("gray.200", "gray.700")}
              borderRadius={10}
              w={{ base: "sm", md: "xl", xl: "md" }}
              h={{ base: "sm", md: "xl", xl: "md" }}
              src={"https://www.instagram.com/hmtiudayana/embed"}
            />
          </VStack>
        </Stack>
      </Container>
    </>
  );
}
