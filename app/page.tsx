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
import Navbar from "./components/navbar";
import PostPreviewCard from "./components/postPreviewCard";
import ColorModeToggle from "./components/colorModeToggle";

const dummyUser = {
  id: 24,
  first_name: "indi",
  last_name: "indi",
  identity_number: "2205551079",
  username: "gungindi",
};

const dummyPosts = [
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
    category: "Lainnya",
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
    category: "Lainnya",
    likes: 18,
    dislikes: 2,
    created_at: "2023-10-28 19:18",
    updated_at: "2023-10-28 19:18",
  },
  {
    id: 4,
    user: {
      id: 4,
      first_name: "Michael",
      last_name: "Davis",
      identity_number: "2205551xxx",
      username: "michaelDavis765",
    },
    content:
      "Halo teman-teman, saya sedang mengambil mata kuliah pemrograman. Apa saran untuk pemula seperti saya?",
    category: "Lainnya",
    likes: 14,
    dislikes: 0,
    created_at: "2023-10-28 19:18",
    updated_at: "2023-10-28 19:18",
  },
  {
    id: 5,
    user: {
      id: 5,
      first_name: "Linda",
      last_name: "Johnson",
      identity_number: "2205551xxx",
      username: "lindaJohnson567",
    },
    content:
      "Halo semua, apakah ada klub atau kegiatan ekstrakurikuler yang berkaitan dengan Teknologi Informasi di kampus ini?",
    category: "Kepanitian",
    likes: 12,
    dislikes: 1,
    created_at: "2023-10-28 19:18",
    updated_at: "2023-10-28 19:18",
  },
  {
    id: 6,
    user: {
      id: 6,
      first_name: "Kevin",
      last_name: "Brown",
      identity_number: "2205551xxx",
      username: "kevinBrown321",
    },
    content:
      "Saya ingin fokus pada keamanan informasi. Apa mata kuliah yang direkomendasikan untuk mencapai itu?",
    category: "Minat dan Bakat",
    likes: 20,
    dislikes: 1,
    created_at: "2023-10-28 19:18",
    updated_at: "2023-10-28 19:18",
  },
  {
    id: 7,
    user: {
      id: 7,
      first_name: "Jessica",
      last_name: "Lee",
      identity_number: "2205551xxx",
      username: "jessicaLee654",
    },
    content:
      "Halo, apakah ada rekomendasi laboratorium komputer terbaik untuk praktikum di program studi Teknologi Informasi?",
    category: "Praktikum",
    likes: 15,
    dislikes: 0,
    created_at: "2023-10-28 19:18",
    updated_at: "2023-10-28 19:18",
  },
];

export default function Home() {
  return (
    <>
      <Navbar {...dummyUser} />
      <ColorModeToggle />
      <Container maxW={"container.xl"} centerContent>
        <Stack
          mt={{ base: "93.6px", lg: "153.6px" }}
          direction={{ base: "column", xl: "row" }}>
          <VStack mb={8}>
            {dummyPosts.map((e) => {
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
              {dummyPosts.map((e) => {
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
