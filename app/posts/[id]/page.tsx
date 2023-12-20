"use client";

import ColorModeToggle from "@/app/components/colorModeToggle";
import Navbar from "@/app/components/navbar";
import PostCard from "@/app/components/postCard";
import PostPreviewCard from "@/app/components/postPreviewCard";
import ReplyCard from "@/app/components/replyCard";
import {
  Button,
  Container,
  Heading,
  Stack,
  StackDivider,
  Text,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";

const dummyUser = {
  id: 24,
  first_name: "indi",
  last_name: "indi",
  identity_number: "2205551079",
  username: "gungindi",
};

const dummyPost = {
  id: 1,
  user: {
    id: 1,
    first_name: "Anak Agung Indi Kusuma",
    last_name: "Putra",
    identity_number: "2205551079",
    username: "anakAgungIndi652",
  },
  content:
    "@sayatest www.github.com Selamat pagi! Saya baru saja diterima di program studi Teknologi Informasi. Apa rekomendasi buku atau sumber belajar terbaik untuk mempersiapkan diri sebelum memulai perkuliahan? Terima kasih! Bisa hubungi @admin #haloo",
  category: "Praktikum",
  likes: 30,
  dislikes: 1,
  replies: [
    {
      id: 2,
      user: {
        id: 1,
        first_name: "Anak Agung Indi Kusuma",
        last_name: "Putra",
        identity_number: "2205551079",
        username: "anakAgungIndi652",
      },
      content:
        "@sayatest Selamat pagi! Saya baru saja diterima di program studi Teknologi Informasi. Apa rekomendasi buku atau sumber belajar terbaik untuk mempersiapkan diri sebelum memulai perkuliahan? Terima kasih!",
      likes: 30,
      dislikes: 1,
      created_at: "2023-10-28 19:18",
      updated_at: "2023-10-28 19:18",
    },
  ],
  created_at: "2023-10-28 19:18",
  updated_at: "2023-10-28 19:18",
};

const dummyRelatedPosts = [
  {
    id: 1,
    user: {
      id: 1,
      first_name: "Anak Agung Indi Kusuma",
      last_name: "Putra",
      identity_number: "2205551079",
      username: "anakAgungIndi652",
    },
    content:
      "Halo kak, Apa saja materi dan mata kuliah yang akan dipelajari di jurusan pendidikan teknologi informasi?",
    category: "Praktikum",
    likes: 30,
    dislikes: 1,
    created_at: "2023-10-28 19:18",
    updated_at: "2023-10-28 19:18",
  },
  {
    id: 2,
    user: {
      id: 2,
      first_name: "Joko",
      last_name: "Santoso",
      identity_number: "2205551xxx",
      username: "jokoSantoso987",
    },
    content:
      "Halo semuanya, saya mahasiswa di program studi Teknologi Informasi. Bisa berikan informasi mengenai mata kuliah apa saja yang akan saya pelajari dan apa yang menjadi fokus utama dalam program studi ini? Terima kasih!",
    category: "Praktikum",
    likes: 25,
    dislikes: 0,
    created_at: "2023-10-28 19:18",
    updated_at: "2023-10-28 19:18",
  },
  {
    id: 3,
    user: {
      id: 3,
      first_name: "Sarah",
      last_name: "Smith",
      identity_number: "2205551xxx",
      username: "sarahSmith432",
    },
    content:
      "Halo semua, saya baru saja diterima di program studi Teknologi Informasi. Apa saja buku yang disarankan untuk mata kuliah pertama saya?",
    category: "Praktikum",
    likes: 18,
    dislikes: 2,
    created_at: "2023-10-28 19:18",
    updated_at: "2023-10-28 19:18",
  },
];

export default function Post() {
  return (
    <>
      <Navbar {...dummyUser} />
      <ColorModeToggle />
      <Container maxW={"container.xl"} centerContent>
        <Stack
          mt={{ base: "93.6px", lg: "153.6px" }}
          direction={{ base: "column", xl: "row" }}>
          <VStack mb={8} align={"start"}>
            <PostCard {...dummyPost} w={{ base: "sm", md: "xl", xl: "3xl" }} />
            <Text mt={8} mb={4} fontWeight={"bold"}>
              {dummyPost.replies.length
                ? "*" + dummyPost.replies.length + " Balasan"
                : "*Belum ada balasan"}
            </Text>
            {dummyPost.replies.map((e) => {
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
              {dummyRelatedPosts.map((e) => {
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
