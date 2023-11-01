import { Box, Text } from "@chakra-ui/react";

interface Props {
  content: string;
  link: string;
}

export default function PostContent(props: Props) {
  return (
    <>
      <Box as={"a"} href={props.link}>
        <Text>{props.content}</Text>
      </Box>
    </>
  );
}
