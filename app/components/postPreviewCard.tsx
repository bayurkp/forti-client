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
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { convertContentLinks } from "../lib/convertContentLinks";
import AddReplyModal from "./addReplyModal";
import { useState } from "react";

interface PostProps {
  id: number;
  user: {
    id: number;
    first_name: string | null;
    last_name: string;
    identity_number: string;
    username: string;
  };
  content: string;
  category: string;
  likes: number;
  dislikes: number;
  created_at: string;
  updated_at: string;
}

interface WidthProps {
  w: {
    base: string;
    sm?: string;
    md?: string;
    lg?: string;
    xl?: string;
  };
}

export default function PostPreviewCard(props: PostProps & WidthProps) {
  dayjs.extend(relativeTime);

  const [isLiked, setIsLiked] = useState(false);
  const [isDisliked, setIsDisliked] = useState(false);
  const [likes, setLikes] = useState(props.likes);
  const [dislikes, setDislikes] = useState(props.dislikes);

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
          <Tag
            w={"fit-content"}
            as={"a"}
            href={"/posts?search=" + props.category.toLocaleLowerCase()}>
            {props.category}
          </Tag>
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
      <Box as={"a"} href={"/posts/" + props.id}>
        <Text>
          {props.content.substring(0, 150)}
          {props.content.length >= 150 && "..."}
        </Text>
      </Box>
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
              variant={"ghost"}
              onClick={() => {
                if (!isDisliked) {
                  setLikes(likes + (isLiked ? -1 : 1));
                  setIsLiked(!isLiked);
                }
              }}>
              {likes}
            </Button>
          </Tooltip>
          <Tooltip hasArrow label={"Tidak Suka"} placement={"bottom"}>
            <Button
              leftIcon={<ThumbsDown size={20} />}
              colorScheme={"red"}
              px={2}
              variant={"ghost"}
              onClick={() => {
                if (!isLiked) {
                  setDislikes(dislikes + (isDisliked ? -1 : 1));
                  setIsDisliked(!isDisliked);
                }
              }}>
              {dislikes}
            </Button>
          </Tooltip>
        </HStack>
        <HStack>
          <AddReplyModal
            post={props.id.toString()}
            username={props.user.username}
          />
        </HStack>
      </Stack>
      <Text mt={2} textAlign={"right"} fontSize={"sm"} color={"gray.500"}>
        {dayjs(props.updated_at).fromNow()}
      </Text>
    </Box>
  );
}
