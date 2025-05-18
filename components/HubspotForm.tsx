"use client";
import React from "react";
import { useEffect } from "react";
import track from "@/app/lib/universalTracking";

type HubspotFormProps = {
  portalId: string;
  formId: string;
  region: string;
};

export default function HubspotForm({
  portalId,
  formId,
  region,
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
            // console.log(form["elements"]["email"].value);
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
    const hbsptModal = document.querySelector("#hbspt-modal");
    if (hbsptModal) {
      hbsptModal.appendChild(script);
    }
  }, [portalId, formId, region]);

  return <div id={formId}></div>;
}
