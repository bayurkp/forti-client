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
import { Flag, ThumbsDown, ThumbsUp, Trash2 } from "lucide-react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { convertContentLinks } from "../lib/convertContentLinks";
import AddReplyModal from "./addReplyModal";
import EditPostModal from "./editPostModal";
import DeletePostModal from "./deletePostModal";

interface Reply {
  id: number;
  user: {
    id: number;
    first_name: string;
    last_name: string;
    identity_number: string;
    username: string;
  };
  likes: number;
  dislikes: number;
  content: string;
  created_at: string;
  updated_at: string;
}

interface Post {
  id: number;
  user: {
    id: number;
    first_name: string;
    last_name: string;
    identity_number: string;
    username: string;
  };
  replies: Reply[];
  likes: number;
  dislikes: number;
  content: string;
  category: string;
  created_at: string;
  updated_at: string;
}

interface Width {
  w: {
    base: string;
    sm?: string;
    md?: string;
    lg?: string;
    xl?: string;
  };
}

export default function PostCard(props: Post & Width) {
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
            name={props.user.first_name + props.user.last_name}
          />
          <Text fontWeight={"bold"}>
            {convertContentLinks(`@${props.user.username}`)}
          </Text>
        </HStack>
        <HStack>
          <Tag w={"fit-content"}>{props.category}</Tag>
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
      <Box>{convertContentLinks(props.content)}</Box>
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
              {props.likes}
            </Button>
          </Tooltip>
          <Tooltip hasArrow label={"Tidak Suka"} placement={"bottom"}>
            <Button
              leftIcon={<ThumbsDown size={20} />}
              colorScheme={"red"}
              px={2}
              variant={"ghost"}>
              {props.dislikes}
            </Button>
          </Tooltip>
        </HStack>
        <HStack>
          <AddReplyModal
            post={props.id.toString()}
            username={props.user.username}
          />
          <EditPostModal
            user={props.user.id.toString()}
            username={props.user.username}
            post={props.id.toString()}
            content={props.content}
            category={props.category}
          />
          <DeletePostModal
            post={props.id.toString()}
            user={props.user.id.toString()}
          />
        </HStack>
      </Stack>
      <Text mt={2} textAlign={"right"} fontSize={"sm"} color={"gray.500"}>
        {dayjs(props.updated_at).fromNow()}
      </Text>
    </Box>
  );
}
