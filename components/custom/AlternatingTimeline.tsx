import React from "react";
import { Timeline, Flex, Text } from "@chakra-ui/react";

type TimelineStepProps = {
  name: string;
};

export default function AlternatingTimeline({
  steps,
}: {
  steps: TimelineStepProps[];
}) {
  return (
    <Timeline.Root size="xl" variant="outline" gap={10}>
      {steps.map((step, index) => (
        <Timeline.Item key={index}>
          {/* Left-side content (for odd indices) */}
          <Timeline.Content flex="1" alignItems="flex-end">
            {index % 2 !== 0 && (
              <Flex alignItems="center" justifyContent="flex-end" gap={3}>
                <Text fontWeight="semibold">{step.name}</Text>
              </Flex>
            )}
          </Timeline.Content>

          {/* Middle indicator and connector */}
          <Timeline.Connector>
            <Timeline.Separator />
            <Timeline.Indicator />
          </Timeline.Connector>

          {/* Right-side content (for even indices) */}
          <Timeline.Content flex="1">
            {index % 2 === 0 && (
              <Flex alignItems="center" gap={3}>
                <Text fontWeight="semibold">{step.name}</Text>
              </Flex>
            )}
          </Timeline.Content>
        </Timeline.Item>
      ))}
    </Timeline.Root>
  );
}
