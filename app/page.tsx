"use client";

import { Container, Spinner, VStack } from "@chakra-ui/react";
import Navbar from "./components/navbar";
import QuestionCard from "./components/postCard";
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
    },
  },
];

export default function Home() {
  return (
    <>
      <Navbar {...dummyUser} />
      <ColorModeToggle />
      <Container maxW={"container.lg"} my={4} centerContent>
        <VStack>
          {dummyData.map((e) => {
            return <QuestionCard {...e} />;
          })}
          <Spinner />
        </VStack>
      </Container>
    </>
  );
}
