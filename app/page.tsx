"use client";

import { Container } from "@chakra-ui/react";
import Navbar from "./components/navbar";
import QuestionCard from "./components/questionCard";
import ColorModeToggle from "./components/colorModeToggle";

export default function Home() {
  return (
    <>
      <Navbar />
      <ColorModeToggle />
      <Container maxW={"container.lg"} mt={4} centerContent>
        <QuestionCard />
      </Container>
    </>
  );
}
