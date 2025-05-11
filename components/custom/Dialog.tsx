import React from "react";
import { Dialog, Button, Portal, CloseButton, Text } from "@chakra-ui/react";

type DialogContent = {
  title: string;
  description: string;
};

type CustomDialogProps = {
  placement: any;
  cta: string;
  buttonVariant?: any;
  content: DialogContent;
};

export default function CustomDialog({
  placement,
  cta,
  buttonVariant = "outline",
  content,
}: CustomDialogProps) {
  return (
    <Dialog.Root placement={placement} motionPreset="slide-in-bottom">
      <Dialog.Trigger my={4} asChild>
        <Button p={2} variant={buttonVariant}>
          {cta}
        </Button>
      </Dialog.Trigger>
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content p={4}>
            <Dialog.Header my={2}>
              <Dialog.Title>{content.title}</Dialog.Title>
            </Dialog.Header>
            <Dialog.Body>
              <Text lineHeight={2}>{content.description}</Text>
            </Dialog.Body>
            <Dialog.CloseTrigger asChild>
              <CloseButton size="sm" />
            </Dialog.CloseTrigger>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
}
