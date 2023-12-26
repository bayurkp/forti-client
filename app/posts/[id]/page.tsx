"use client";

import ColorModeToggle from "@/app/components/colorModeToggle";
import Navbar from "@/app/components/navbar";
import PostCard from "@/app/components/postCard";
import PostPreviewCard from "@/app/components/postPreviewCard";
import ReplyCard from "@/app/components/replyCard";
import { getPostById } from "@/app/lib/getPostById";
import { getPosts } from "@/app/lib/getPosts";
import {
  Button,
  Container,
  Heading,
  Stack,
  Text,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import { useParams } from "next/navigation";

export default function Post() {
  interface Reply {
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
    created_at: string;
    updated_at: string;
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
    replies: Reply[];
    likes: number;
    dislikes: number;
    content: string;
    category: string;
    created_at: string;
    updated_at: string;
  }

  const { id } = useParams();
  const post: Post = getPostById(id.toString());
  const relatedPosts = getPosts({ category: post.category, limit: 3 });

  return (
    <>
      <Navbar />
      <ColorModeToggle />
      <Container maxW={"container.xl"} centerContent>
        <Stack
          mt={{ base: "93.6px", lg: "153.6px" }}
          direction={{ base: "column", xl: "row" }}>
          <VStack mb={8} align={"start"}>
            <PostCard {...post} w={{ base: "sm", md: "xl", xl: "3xl" }} />
            <Text mt={8} mb={4} fontWeight={"bold"}>
              {post.replies.length
                ? post.replies.length + " Balasan"
                : "Belum ada balasan"}
            </Text>
            {post.replies.map((e) => {
              return (
                <ReplyCard {...e} w={{ base: "sm", md: "xl", xl: "3xl" }} />
              );
            })}
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
                Postingan Yang Berhubungan
              </Heading>
            </Button>
            <VStack mb={8}>
              {relatedPosts.map((e) => {
                return (
                  <PostPreviewCard
                    key={e.id}
                    {...e}
                    w={{ base: "sm", md: "xl", xl: "md" }}
                  />
                );
              })}
            </VStack>
          </VStack>
        </Stack>
      </Container>
    </>
  );
}
