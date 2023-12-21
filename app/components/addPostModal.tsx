import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  HStack,
  Textarea,
  CircularProgress,
  CircularProgressLabel,
  useColorModeValue,
} from "@chakra-ui/react";
import { Send } from "lucide-react";
import { useState } from "react";

export default function AddPostModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [content, setContent] = useState<string>("");
  const handleContentChange = (event: React.ChangeEvent<HTMLTextAreaElement>) =>
    setContent(event.target.value);

  return (
    <>
      <Button variant={"ghost"} onClick={onOpen} leftIcon={<Send size={20} />}>
        Posting
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} size={{ base: "sm", md: "xl" }}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Buat Postingan</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Textarea
              placeholder="Konten postingan Anda ..."
              maxLength={500}
              rows={9}
              value={content}
              resize={"none"}
              onChange={handleContentChange}
            />
          </ModalBody>
          <ModalFooter display={"flex"} justifyContent={"space-between"}>
            <HStack>
              <CircularProgress
                thickness={10}
                color={useColorModeValue("forti.500", "forti.200")}
                value={(100 * content.length) / 500}
                size={"45px"}>
                <CircularProgressLabel fontWeight={"bold"}>
                  {content.length}
                </CircularProgressLabel>
              </CircularProgress>
            </HStack>
            <HStack>
              <Button colorScheme={"forti"} onClick={onClose}>
                Balas
              </Button>
              <Button onClick={onClose}>Batal</Button>
            </HStack>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
