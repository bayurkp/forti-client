import { Box, Text } from "@chakra-ui/react";

interface Props {
  content: string;
  link: string;
}

export default function PostContent(props: Props) {
  return (
    <>
      <Box as={"a"} href={props.link}>
        <Text>
          {props.content.length > 200
            ? props.content.slice(0, 200) + "..."
            : props.content}
        </Text>
      </Box>
    </>
  );
}
