"use client";
import React from "react";
import { useEffect } from "react";

type HubspotFormProps = {
    portalId: string;
    formId: string;
    region: string;
}

export default function HubspotForm({ portalId, formId, region }: HubspotFormProps) {
    useEffect(() => {
            const script = document.createElement('script');
            script.src = 'https://js.hsforms.net/forms/v2.js';
            script.async = true;
            script.onload = () => {
                if ((window as any).hbspt) {
                    (window as any).hbspt.forms.create({
                            portalId: portalId,
                            formId: formId,
                        region: region,
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