import {
  Avatar,
  Box,
  Button,
  HStack,
  IconButton,
  Stack,
  Tag,
  Text,
  Tooltip,
  useColorModeValue,
} from "@chakra-ui/react";
import { Flag, ThumbsDown, ThumbsUp } from "lucide-react";
import ReplyModal from "./replyModal";
import QuestionText from "./postContent";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

interface Props {
  id: number;
  user: {
    username: string;
    name: {
      firstName: string;
      lastName: string;
    };
    nim: string;
    picture: string;
  };
  post: {
    id: number;
    content: string;
    replies: string[] | null;
    category: string;
    likes: number;
    dislikes: number;
    createdAt: string;
    updatedAt: string;
  };
  w: {
    base: string;
    sm?: string;
    md?: string;
    lg?: string;
    xl?: string;
  };
}

export default function PostCard(props: Props) {
  dayjs.extend(relativeTime);
  return (
    <Box
      w={props.w}
      p={8}
      bg={useColorModeValue("white", "gray.800")}
      border={"1px"}
      borderColor={useColorModeValue("gray.200", "gray.700")}
      borderRadius={10}>
      <Stack
        mb={4}
        justify={{ md: "space-between" }}
        gap={4}
        direction={{ base: "column", md: "row" }}>
        <HStack>
          <Avatar
            size={"sm"}
            name={props.user.name.firstName + props.user.name.firstName}
            src={props.user.picture}
          />
          <Text fontWeight={"bold"}>@{props.user.username}</Text>
        </HStack>
        <HStack>
          <Tag w={"fit-content"}>{props.post.category}</Tag>
          <Tooltip hasArrow label={"Laporkan"} placement={"bottom"}>
            <IconButton
              aria-label={"Laporkan"}
              icon={<Flag size={20} />}
              variant={"ghost"}
              colorScheme={"gray"}
            />
          </Tooltip>
        </HStack>
      </Stack>
      <QuestionText link={"#"} content={props.post.content} />
      <Stack
        justify={"space-between"}
        mt={4}
        direction={{ base: "column", md: "row" }}>
        <HStack>
          <Tooltip hasArrow label={"Suka"} placement={"bottom"}>
            <Button
              leftIcon={<ThumbsUp size={20} />}
              colorScheme={"green"}
              px={2}
              variant={"ghost"}>
              {props.post.likes}
            </Button>
          </Tooltip>
          <Tooltip hasArrow label={"Tidak Suka"} placement={"bottom"}>
            <Button
              leftIcon={<ThumbsDown size={20} />}
              colorScheme={"red"}
              px={2}
              variant={"ghost"}>
              {props.post.dislikes}
            </Button>
          </Tooltip>
        </HStack>
        <HStack>
          <ReplyModal username={props.user.username} />
        </HStack>
      </Stack>
      <Text mt={2} textAlign={"right"} fontSize={"sm"} color={"gray.500"}>
        {dayjs(props.post.updatedAt).fromNow()}
      </Text>
    </Box>
  );
}
