import { Box, Text } from "@chakra-ui/react";

interface Props {
  text: string;
  link: string;
}

export default function QuestionText(props: Props) {
  return (
    <>
      <Box as={"a"} href={props.link}>
        <Text>
          {props.text.length > 200
            ? props.text.slice(0, 200) + "..."
            : props.text}
        </Text>
      </Box>
    </>
  );
}
