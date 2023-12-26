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
import { Trash2 } from "lucide-react";
import { axiosInstance } from "../lib/axiosInstance";

interface Props {
  post: string;
  user: string;
}

export default function DeletePostModal(props: Props) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const user = localStorage.getItem("user");
  const user_role = localStorage.getItem("user_role");

  const deletePost = () => {
    axiosInstance
      .delete("/posts/" + props.post)
      .then((res) => {
        location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Button
        colorScheme={"red"}
        onClick={onOpen}
        leftIcon={<Trash2 size={20} />}
        variant={"ghost"}
        px={2}
        display={
          user_role === "admin" || user === props.user ? "inline-block" : "none"
        }>
        Hapus
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} size={{ base: "sm", md: "xl" }}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Hapus postingan</ModalHeader>
          <ModalBody>Anda yakin ingin menghapus postingan?</ModalBody>
          <ModalCloseButton />
          <ModalFooter display={"flex"} justifyContent={"space-between"}>
            <HStack>
              <Button colorScheme={"forti"} onClick={deletePost}>
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
