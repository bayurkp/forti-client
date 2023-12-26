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
import { Send } from "lucide-react";
import { useState } from "react";

export default function AddPostModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const formik = useFormik({
    initialValues: {
      content: "",
    },
    onSubmit: (values) => {
      console.log("Konten berhasil dimasukkan: " + values);
    },
  });

  return (
    <>
      <Button variant={"ghost"} onClick={onOpen} leftIcon={<Send size={20} />}>
        Posting
      </Button>

      <form onSubmit={formik.handleSubmit}>
        <Modal
          isOpen={isOpen}
          onClose={onClose}
          size={{ base: "sm", md: "xl" }}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Buat Postingan</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Textarea
                placeholder="Konten postingan Anda ..."
                maxLength={500}
                rows={9}
                name={"content"}
                resize={"none"}
                value={formik.values.content}
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
                <Button colorScheme={"forti"} type={"submit"}>
                  Posting
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
