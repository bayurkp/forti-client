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
import PostCard from "./components/postCard";
import ColorModeToggle from "./components/colorModeToggle";

const dummyUser = {
  user: {
    username: "bayskie000",
    name: {
      firstName: "Bayu Rizky Kurnia",
      lastName: "Pratama",
    },
    nim: "2205551070",
    picture: "",
  },
};

const dummyMostLikedData = [
  {
    id: 8,
    user: {
      username: "dianKurnia123",
      name: {
        firstName: "Dian",
        lastName: "Kurnia",
      },
      nim: "2205551xxx",
      picture: "",
    },
    post: {
      id: 8,
      content:
        "Halo teman-teman, saya sedang belajar tentang pengembangan aplikasi mobile. Apa materi atau buku yang direkomendasikan untuk pemula seperti saya?",
      replies: [""],
      category: "Lainnya",
      likes: 160,
      dislikes: 5,
      createdAt: "2023-10-28 19:18",
      updatedAt: "2023-10-28 19:18",
    },
  },
  {
    id: 9,
    user: {
      username: "arieWijaya456",
      name: {
        firstName: "Arie",
        lastName: "Wijaya",
      },
      nim: "2205551xxx",
      picture: "",
    },
    post: {
      id: 9,
      content:
        "Halo teman-teman, saya ingin memperdalam pengetahuan saya tentang kecerdasan buatan. Apa buku atau kursus online terbaik untuk itu?",
      replies: [""],
      category: "Lainnya",
      likes: 110,
      dislikes: 3,
      createdAt: "2023-10-28 19:18",
      updatedAt: "2023-10-28 19:18",
    },
  },
  {
    id: 10,
    user: {
      username: "putriMaulida789",
      name: {
        firstName: "Putri",
        lastName: "Maulida",
      },
      nim: "2205551xxx",
      picture: "",
    },
    post: {
      id: 10,
      content:
        "Halo teman-teman, saya ingin mencari tahu tentang perusahaan IT yang menerima magang. Apa perusahaan terkemuka yang menerima mahasiswa magang?",
      replies: [""],
      category: "Minat dan Bakat",
      likes: 103,
      dislikes: 1,
      createdAt: "2023-10-28 19:18",
      updatedAt: "2023-10-28 19:18",
    },
  },
];

const dummyData = [
  {
    id: 1,
    user: {
      username: "anakAgungIndi652",
      name: {
        firstName: "Anak Agung Indi Kusuma",
        lastName: "Putra",
      },
      nim: "2205551079",
      picture: "",
    },
    post: {
      id: 1,
      content:
        "Halo kak, Apa saja materi dan mata kuliah yang akan dipelajari di jurusan pendidikan teknologi informasi?",
      replies: [""],
      category: "Lainnya",
      likes: 30,
      dislikes: 1,
      createdAt: "2023-10-28 19:18",
      updatedAt: "2023-10-28 19:18",
    },
  },
  {
    id: 2,
    user: {
      username: "jokoSantoso987",
      name: {
        firstName: "Joko",
        lastName: "Santoso",
      },
      nim: "2205551xxx",
      picture: "",
    },
    post: {
      id: 2,
      content:
        "Halo semuanya, saya mahasiswa di program studi Teknologi Informasi. Bisa berikan informasi mengenai mata kuliah apa saja yang akan saya pelajari dan apa yang menjadi fokus utama dalam program studi ini? Terima kasih!",
      replies: [""],
      category: "Praktikum",
      likes: 25,
      dislikes: 0,
      createdAt: "2023-10-28 19:18",
      updatedAt: "2023-10-28 19:18",
    },
  },
  {
    id: 3,
    user: {
      username: "sarahSmith432",
      name: {
        firstName: "Sarah",
        lastName: "Smith",
      },
      nim: "2205551xxx",
      picture: "",
    },
    post: {
      id: 3,
      content:
        "Halo semua, saya baru saja diterima di program studi Teknologi Informasi. Apa saja buku yang disarankan untuk mata kuliah pertama saya?",
      replies: [""],
      category: "Lainnya",
      likes: 18,
      dislikes: 2,
      createdAt: "2023-10-28 19:18",
      updatedAt: "2023-10-28 19:18",
    },
  },
  {
    id: 4,
    user: {
      username: "michaelDavis765",
      name: {
        firstName: "Michael",
        lastName: "Davis",
      },
      nim: "2205551xxx",
      picture: "",
    },
    post: {
      id: 4,
      content:
        "Halo teman-teman, saya sedang mengambil mata kuliah pemrograman. Apa saran untuk pemula seperti saya?",
      replies: [""],
      category: "Lainnya",
      likes: 14,
      dislikes: 0,
      createdAt: "2023-10-28 19:18",
      updatedAt: "2023-10-28 19:18",
    },
  },
  {
    id: 5,
    user: {
      username: "lindaJohnson567",
      name: {
        firstName: "Linda",
        lastName: "Johnson",
      },
      nim: "2205551xxx",
      picture: "",
    },
    post: {
      id: 5,
      content:
        "Halo semua, apakah ada klub atau kegiatan ekstrakurikuler yang berkaitan dengan Teknologi Informasi di kampus ini?",
      replies: [""],
      category: "Kepanitian",
      likes: 12,
      dislikes: 1,
      createdAt: "2023-10-28 19:18",
      updatedAt: "2023-10-28 19:18",
    },
  },
  {
    id: 6,
    user: {
      username: "kevinBrown321",
      name: {
        firstName: "Kevin",
        lastName: "Brown",
      },
      nim: "2205551xxx",
      picture: "",
    },
    post: {
      id: 6,
      content:
        "Saya ingin fokus pada keamanan informasi. Apa mata kuliah yang direkomendasikan untuk mencapai itu?",
      replies: [""],
      category: "Minat dan Bakat",
      likes: 20,
      dislikes: 1,
      createdAt: "2023-10-28 19:18",
      updatedAt: "2023-10-28 19:18",
    },
  },
  {
    id: 7,
    user: {
      username: "jessicaLee654",
      name: {
        firstName: "Jessica",
        lastName: "Lee",
      },
      nim: "2205551xxx",
      picture: "",
    },
    post: {
      id: 7,
      content:
        "Halo, apakah ada rekomendasi laboratorium komputer terbaik untuk praktikum di program studi Teknologi Informasi?",
      replies: [""],
      category: "Praktikum",
      likes: 15,
      dislikes: 0,
      createdAt: "2023-10-28 19:18",
      updatedAt: "2023-10-28 19:18",
    },
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
            {dummyData.map((e) => {
              return (
                <PostCard {...e} w={{ base: "sm", md: "xl", xl: "3xl" }} />
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
              {dummyMostLikedData.map((e) => {
                return (
                  <PostCard {...e} w={{ base: "sm", md: "xl", xl: "md" }} />
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
