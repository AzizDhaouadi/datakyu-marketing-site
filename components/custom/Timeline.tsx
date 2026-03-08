import { Timeline, Heading } from "@chakra-ui/react";

type TimelineStep = {
  name: string;
};

export default function StepsTimeline({ steps }: { steps: TimelineStep[] }) {
  return (
    <Timeline.Root
      colorPalette={"red"}
      size={"lg"}
      variant={"outline"}
      gap={10}
    >
      {steps.map((step, index) => (
        <Timeline.Item key={index}>
          <Timeline.Connector>
            <Timeline.Separator />
            <Timeline.Indicator color={"white"}>{index}</Timeline.Indicator>
          </Timeline.Connector>
          <Timeline.Content>
            <Timeline.Title>
              <Heading color={"white"} size={"lg"}>
                {step.name}
              </Heading>
            </Timeline.Title>
          </Timeline.Content>
        </Timeline.Item>
      ))}
    </Timeline.Root>
  );
}
