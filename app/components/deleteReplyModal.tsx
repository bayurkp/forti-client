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
} from "@chakra-ui/react";
import axios from "axios";
import { Trash2 } from "lucide-react";

interface Props {
  id: number;
}

export default function DeleteReplyModal(props: Props) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const deletePost = async () => {
    //  await axios.delete(process.env.NEXT_PUBLIC_BASE_URL + "replies/" + props.id);
    window.location.replace(window.location.href);
  };

  return (
    <>
      <Button
        colorScheme={"red"}
        onClick={onOpen}
        leftIcon={<Trash2 size={20} />}
        variant={"ghost"}
        px={2}>
        Hapus
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} size={{ base: "sm", md: "xl" }}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Hapus balasan</ModalHeader>
          <ModalBody>Anda yakin ingin menghapus balasan?</ModalBody>
          <ModalCloseButton />
          <ModalFooter display={"flex"} justifyContent={"space-between"}>
            <HStack>
              <Button colorScheme={"forti"} onClick={() => deletePost()}>
                Hapus
              </Button>
              <Button onClick={onClose}>Batal</Button>
            </HStack>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
