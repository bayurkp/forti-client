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
import EditReplyModal from "./editReplyModal";
import DeleteReplyModal from "./deleteReplyModal";

interface ReplyProps {
  id: number;
  user: {
    id: number;
    first_name: string | null;
    last_name: string;
    identity_number: string;
    username: string;
  };
  content: string;
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

export default function ReplyCard(props: ReplyProps & WidthProps) {
  dayjs.extend(relativeTime);
  return (
    <Box
      key={props.id}
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
      <Box>
        <Text>{convertContentLinks(props.content)}</Text>
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
          <EditReplyModal
            username={props.user.username}
            content={props.content}
          />
          <DeleteReplyModal id={props.id} />
        </HStack>
      </Stack>
      <Text mt={2} textAlign={"right"} fontSize={"sm"} color={"gray.500"}>
        {dayjs(props.updated_at).fromNow()}
      </Text>
    </Box>
  );
}
