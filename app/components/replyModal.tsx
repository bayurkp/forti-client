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
  Input,
} from "@chakra-ui/react";

interface Props {
  username: string;
}

export default function ReplyModal(props: Props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button colorScheme={"forti"} onClick={onOpen}>
        Balas
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Balas @{props.username}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input></Input>
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
