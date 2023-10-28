import { Box, Text } from "@chakra-ui/react";

interface Props {
  text: string;
  link: string;
}

export default function QuestionText(props: Props) {
  return (
    <>
      <Box as={"a"} href={props.link} display={{ base: "inline", md: "none" }}>
        <Text>
          {props.text.length > 100
            ? props.text.slice(0, 100) + " ..."
            : props.text}
        </Text>
      </Box>
      <Box as={"a"} href={props.link} display={{ base: "none", md: "inline" }}>
        <Text>{props.text}</Text>
      </Box>
    </>
  );
}
