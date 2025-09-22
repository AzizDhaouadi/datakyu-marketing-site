import React from "react";
import {
  Dialog,
  Button,
  Portal,
  CloseButton,
  Text,
  ConditionalValue,
} from "@chakra-ui/react";

import styles from "../../app/page.module.css";

type DialogContent = {
  title: string;
  description: string;
};

type CustomDialogProps = {
  placement: ConditionalValue<"center" | "top" | "bottom" | undefined>;
  cta: string;
  buttonVariant?: ConditionalValue<
    "outline" | "solid" | "subtle" | "surface" | "ghost" | "plain" | undefined
  >;
  content: DialogContent;
};

export default function CustomDialog({
  placement,
  cta,
  content,
}: CustomDialogProps) {
  return (
    <Dialog.Root
      placement={placement}
      size={"md"}
      motionPreset="slide-in-bottom"
    >
      <Dialog.Trigger my={4} asChild>
        <Button p={2} className={styles.dialogButton}>
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
