import {
  Avatar,
  Box,
  Flex,
  HStack,
  IconButton,
  Text,
  Tooltip,
  useColorModeValue,
} from "@chakra-ui/react";
import { Flag, ThumbsDown, ThumbsUp } from "lucide-react";
import ReplyModal from "./replyModal";
import QuestionText from "./questionText";

export default function QuestionCard() {
  return (
    <Box
      maxW={"4xl"}
      p={8}
      bg={useColorModeValue("white", "gray.800")}
      border={"1px"}
      borderColor={useColorModeValue("gray.200", "gray.700")}
      borderRadius={10}>
      <HStack mb={4} justify={"space-between"}>
        <HStack>
          <Avatar
            size={"sm"}
            name={"Kent Dodds"}
            src={"https://bit.ly/kent-c-dodds"}
          />
          <Text fontWeight={"bold"}>@roronoaz123</Text>
        </HStack>
        <Tooltip hasArrow label={"Laporkan"} placement={"top"}>
          <IconButton
            aria-label={"Laporkan"}
            icon={<Flag />}
            variant={"ghost"}
            colorScheme={"gray"}
          />
        </Tooltip>
      </HStack>
      <QuestionText
        link={"#"}
        text={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, ab atque aperiam perferendis cumque soluta praesentium commodi vitae quas quae, facere distinctio consectetur inventore facilis porro molestiae iste debitis, quidem veritatis deleniti ipsa quisquam quo. Natus eius modi laboriosam a reiciendis mollitia optio debitis molestias impedit aliquam ratione obcaecati facilis suscipit, quam maxime sed dolores, nam delectus. Nemo aspernatur nisi expedita ut architecto quaerat minus maiores? Nostrum repellendus, expedita architecto unde, totam autem quis ad aliquam repudiandae veritatis libero possimus nihil maxime amet, accusamus doloribus similique ipsum quaerat numquam corporis odit molestiae illum! Iusto quidem nemo rerum corrupti sint blanditiis?"
        }
      />
      <Flex justify={"space-between"} mt={4}>
        <HStack>
          <Tooltip hasArrow label={"Suka"} placement={"bottom"}>
            <IconButton
              aria-label={"Suka"}
              colorScheme={"green"}
              variant={"ghost"}
              icon={<ThumbsUp />}
            />
          </Tooltip>
          <Tooltip hasArrow label={"Tidak Suka"} placement={"bottom"}>
            <IconButton
              aria-label={"Tidak Suka"}
              colorScheme={"red"}
              variant={"ghost"}
              icon={<ThumbsDown />}
            />
          </Tooltip>
        </HStack>
        <HStack>
          <ReplyModal username={"roronoaz123"} />
        </HStack>
      </Flex>
    </Box>
  );
}
