import HubspotForm from "../HubspotForm";
import {
  Button,
  CloseButton,
  Dialog,
  Flex,
  HStack,
  Portal,
} from "@chakra-ui/react";
import styles from "../../app/page.module.css";

export default function OpenHubspotDialog({
  text,
  toCenter,
}: {
  text: string;
  toCenter?: boolean;
}) {
  return (
    <HStack wrap="wrap" gap="4">
      <Dialog.Root placement={"top"} motionPreset="slide-in-bottom">
        <Dialog.Trigger asChild>
          <Flex
            justifyContent={toCenter ? "center" : undefined}
            w={toCenter ? "100%" : undefined}
          >
            <Button className={styles.ctaButton}>{text}</Button>
          </Flex>
        </Dialog.Trigger>
        <Portal>
          <Dialog.Backdrop />
          <Dialog.Positioner>
            <Dialog.Content my={6}>
              <Dialog.Header>
                <Dialog.Title p={"1rem"}>How can we help?</Dialog.Title>
              </Dialog.Header>
              <Dialog.Body p={"2rem"} id="hbspt-modal">
                <div id="target-form-container"></div>
                <HubspotForm
                  region="na1"
                  portalId="44171646"
                  formId="414c3f35-bd01-4403-a26f-10adf7d98873"
                  targetID="target-form-container"
                />
              </Dialog.Body>
              <Dialog.Footer>
                <Dialog.ActionTrigger asChild>
                  <Button
                    style={{
                      backgroundColor: "#f15a25",
                      color: "white",
                      padding: "10px 20px",
                      borderRadius: "5px",
                      border: "none",
                      cursor: "pointer",
                      fontSize: "16px",
                      margin: "10px",
                    }}
                    variant="outline"
                  >
                    Cancel
                  </Button>
                </Dialog.ActionTrigger>
              </Dialog.Footer>
              <Dialog.CloseTrigger asChild>
                <CloseButton
                  style={{
                    backgroundColor: "#f15a25",
                    color: "white",
                    padding: "10px 20px",
                    borderRadius: "5px",
                    border: "none",
                    cursor: "pointer",
                    fontSize: "16px",
                  }}
                  size="sm"
                />
              </Dialog.CloseTrigger>
            </Dialog.Content>
          </Dialog.Positioner>
        </Portal>
      </Dialog.Root>
    </HStack>
  );
}
