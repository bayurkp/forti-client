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
} from "@chakra-ui/react";
import { MessageSquarePlus } from "lucide-react";

interface Props {
  username: string;
}

export default function ReplyModal(props: Props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
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
            <Textarea placeholder="Here is a sample placeholder" size="sm" />
          </ModalBody>
          <ModalFooter>
            <HStack>
              <Button colorScheme={"forti"} onClick={onClose}>
                Balas
              </Button>
              <Button variant={"ghost"} onClick={onClose}>
                Batal
              </Button>
            </HStack>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
