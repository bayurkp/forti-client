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
import { useFormik } from "formik";
import { Pencil } from "lucide-react";
import { editPost } from "../lib/editPost";

interface Props {
  post: string; // post id
  username: string;
  user: string;
  content: string;
  category: string;
}

export default function EditPostModal(props: Props) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const user = localStorage.getItem("user");
  const user_role = localStorage.getItem("user_role");

  const formik = useFormik({
    initialValues: {
      content: props.content,
      category: props.category,
    },
    onSubmit: (values) => {
      editPost(props.post, values.content, values.category);
    },
  });

  return (
    <>
      <Button
        colorScheme={"forti"}
        onClick={onOpen}
        leftIcon={<Pencil size={20} />}
        variant={"ghost"}
        px={2}
        display={
          user_role === "admin" || user === props.user ? "inline-block" : "none"
        }>
        Edit
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} size={{ base: "sm", md: "xl" }}>
        <ModalOverlay />
        <form onSubmit={formik.handleSubmit}>
          <ModalContent>
            <ModalHeader>Edit postingan</ModalHeader>
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
        </form>
      </Modal>
    </>
  );
}
