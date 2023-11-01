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
  Input,
  FormControl,
  FormLabel,
  IconButton,
  Text,
  CircularProgress,
  CircularProgressLabel,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { MessageSquarePlus, Paperclip } from "lucide-react";
import { useState } from "react";

interface Props {
  username: string;
}

export default function ReplyModal(props: Props) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [content, setContent] = useState<string>("");
  const handleContentChange = (event: React.ChangeEvent<HTMLTextAreaElement>) =>
    setContent(event.target.value);

  return (
    <>
      <Button
        colorScheme={"forti"}
        onClick={onOpen}
        leftIcon={<MessageSquarePlus size={20} />}
        variant={"ghost"}
        px={2}>
        Balas
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} size={"xl"}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Balas @{props.username}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Textarea
              placeholder="Balasan ..."
              maxLength={300}
              rows={6}
              value={content}
              resize={"none"}
              onChange={handleContentChange}
            />
          </ModalBody>
          <ModalFooter display={"flex"} justifyContent={"space-between"}>
            <HStack>
              <FormControl>
                <FormLabel>
                  <IconButton
                    as={"p"}
                    aria-label={"Tambahkan Media"}
                    variant={"ghost"}
                    icon={<Paperclip size={20} />}
                  />
                </FormLabel>
                <Input type={"file"} display={"none"} />
              </FormControl>
              <CircularProgress
                thickness={5}
                color={useColorModeValue("forti.500", "forti.200")}
                value={(100 * content.length) / 300}>
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
