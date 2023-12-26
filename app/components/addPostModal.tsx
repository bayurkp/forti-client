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
  Input,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import { Send } from "lucide-react";
import { addPost } from "../lib/addPost";

export default function AddPostModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const formik = useFormik({
    initialValues: {
      content: "",
      category: "",
    },
    onSubmit: (values) => {
      addPost(values.content, values.category);
    },
  });

  return (
    <>
      <Button variant={"ghost"} onClick={onOpen} leftIcon={<Send size={20} />}>
        Posting
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} size={{ base: "sm", md: "xl" }}>
        <form onSubmit={formik.handleSubmit}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Buat Postingan</ModalHeader>
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
              <FormControl isRequired>
                <FormLabel fontWeight={"bold"}>Kategori</FormLabel>
                <Input
                  name={"category"}
                  placeholder={"Kategori postingan ..."}
                  value={formik.values.category}
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
                <Button colorScheme={"forti"} type={"submit"}>
                  Posting
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
