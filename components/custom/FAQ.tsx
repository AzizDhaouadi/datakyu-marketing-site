import { Accordion, Heading, Stack } from "@chakra-ui/react";

type questionsProps = {
  question: string;
  answer: string;
};

export default function FAQ({ questions }: { questions: questionsProps[] }) {
  return (
    <Stack width="full" maxW={"50%"} mx={"auto"}>
      <Accordion.Root collapsible>
        {questions.map((question, index) => (
          <Accordion.Item key={index} value={question.answer.toString()} my={6}>
            <Accordion.ItemTrigger fontWeight={"bold"} fontSize={"larger"}>
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
