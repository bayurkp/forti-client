import { Box, IconButton, useColorMode } from "@chakra-ui/react";
import { Moon, Sun } from "lucide-react";

export default function ColorModeToggle() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <IconButton
      pos={"fixed"}
      mr={4}
      mb={4}
      right={0}
      bottom={0}
      aria-label={"Ganti Tema"}
      onClick={toggleColorMode}
      icon={colorMode === "light" ? <Moon /> : <Sun />}
      variant={"ghost"}
    />
  );
}
