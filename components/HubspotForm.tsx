"use client";
import React from "react";
import { useEffect } from "react";
import track from "@/app/lib/universalTracking";

type HubspotFormProps = {
  portalId: string;
  formId: string;
  region: string;
  targetID?: string;
};

export default function HubspotForm({
  portalId,
  formId,
  region,
  targetID,
}: HubspotFormProps) {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://js.hsforms.net/forms/v2.js";
    script.async = true;
    script.onload = () => {
      if ((window as any).hbspt) {
        (window as any).hbspt.forms.create({
          portalId: portalId,
          formId: formId,
          region: region,
          target: `#${targetID}`,
          onFormReady: function () {
            console.log("Loaded!");
            return track({
              trackingPlatform: { segment: true, dataLayer: true },
              eventPayload: {
                event_name: "initiated_contact_form",
                event_parameters: { form_id: formId },
              },
              identify: { capture: false, identifier: "" },
            });
          },
          onFormSubmit: function (form: any) {
            track({
              trackingPlatform: { segment: true, dataLayer: true },
              eventPayload: {
                event_name: "captured_lead",
                event_parameters: { form_id: formId },
              },
              identify: {
                capture: true,
                identifier: form["elements"]["email"].value,
              },
            });
          },
        });
      }
    };
    const hbsptModal =
      document.querySelector("#hbspt-modal") ||
      document.querySelector("#contact-form-section");
    if (hbsptModal) {
      console.log("Appending Hubspot script");
      hbsptModal.appendChild(script);
    } else {
      console.error("Hubspot modal not found");
    }
  }, [portalId, formId, region]);

  return <div id={formId}></div>;
}
