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
import { MessageSquarePlus } from "lucide-react";
import { useFormik } from "formik";

interface Props {
  username: string;
}

export default function AddReplyModal(props: Props) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const formik = useFormik({
    initialValues: {
      content: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

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

      <form onSubmit={formik.handleSubmit}>
        <Modal
          isOpen={isOpen}
          onClose={onClose}
          size={{ base: "sm", md: "xl" }}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Balas @{props.username}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Textarea
                placeholder="Balasan Anda..."
                maxLength={500}
                rows={9}
                name={"content"}
                value={formik.values.content}
                resize={"none"}
                onChange={formik.handleChange}
              />
            </ModalBody>
            <ModalFooter display={"flex"} justifyContent={"space-between"}>
              <HStack>
                <CircularProgress
                  thickness={10}
                  color={useColorModeValue("forti.500", "forti.200")}
                  value={(100 * formik.values.content.length) / 500}
                  size={"45px"}>
                  <CircularProgressLabel fontWeight={"bold"}>
                    {formik.values.content.length}
                  </CircularProgressLabel>
                </CircularProgress>
              </HStack>
              <HStack>
                <Button colorScheme={"forti"} onClick={onClose} type={"submit"}>
                  Balas
                </Button>
                <Button onClick={onClose}>Batal</Button>
              </HStack>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </form>
    </>
  );
}
