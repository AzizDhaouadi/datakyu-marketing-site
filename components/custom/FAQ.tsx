import { Accordion, Heading, Stack } from "@chakra-ui/react";

type questionsProps = {
  question: string;
  answer: string | React.ReactNode;
};

export default function FAQ({ questions }: { questions: questionsProps[] }) {
  return (
    <Stack
      width="full"
      maxW={{ base: "100%", md: "100%", lg: "50%" }}
      mx={"auto"}
    >
      <Accordion.Root collapsible>
        {questions.map((question, index) => (
          <Accordion.Item key={index} value={index.toString()} my={10}>
            <Accordion.ItemTrigger fontSize={"larger"}>
              {question.question}
            </Accordion.ItemTrigger>
            <Accordion.ItemContent>
              <Accordion.ItemBody my={4} fontSize={"small"}>
                {question.answer}
              </Accordion.ItemBody>
            </Accordion.ItemContent>
          </Accordion.Item>
        ))}
      </Accordion.Root>
    </Stack>
  );
}
