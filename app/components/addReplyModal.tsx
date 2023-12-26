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
  FormControl,
  FormLabel,
} from "@chakra-ui/react";
import { MessageSquarePlus } from "lucide-react";
import { useFormik } from "formik";
import { addReply } from "../lib/addReply";

interface Props {
  post: string; // post id
  username: string;
}

export default function AddReplyModal(props: Props) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const formik = useFormik({
    initialValues: {
      content: "",
      post: props.post,
    },
    onSubmit: (values) => {
      addReply(values.content, values.post);
      console.log({ values });
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

      <Modal isOpen={isOpen} onClose={onClose} size={{ base: "sm", md: "xl" }}>
        <form onSubmit={formik.handleSubmit}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Balas @{props.username}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <FormControl isRequired mb={4}>
                <FormLabel fontWeight={"bold"}>Konten</FormLabel>
                <Textarea
                  placeholder="Konten postingan Anda ..."
                  maxLength={500}
                  rows={9}
                  name={"content"}
                  resize={"none"}
                  value={formik.values.content}
                  onChange={formik.handleChange}
                />
              </FormControl>
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
        </form>
      </Modal>
    </>
  );
}
