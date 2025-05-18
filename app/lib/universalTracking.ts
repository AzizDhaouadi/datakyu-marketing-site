type trackingPlatformsProp = {
    dataLayer?: boolean;
    segment?: boolean;
};

type eventPayloadProp = {
    event_name: string;
    event_parameters: Record<string, any>;
};

type identifyProps = {
    capture: boolean;
    identifier: string | number;
}

export default function track({
    trackingPlatform,
    eventPayload,
    identify
}: { trackingPlatform: trackingPlatformsProp, eventPayload: eventPayloadProp, identify: identifyProps }) {

    const normalizeSegmentEventName = (eventName: string): string => {
        return eventName
            .trim()
            .split('_')
            .map(part => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase())
            .join(' ');
    };

    if (trackingPlatform.dataLayer) {
        (window as any).dataLayer = (window as any).dataLayer || [];
        (window as any).dataLayer.push({
            event: eventPayload?.event_name || '',
            ...eventPayload?.event_parameters ?? {}
        });
    }
    if (trackingPlatform.segment) {
        (window as any).analytics.track(normalizeSegmentEventName(eventPayload.event_name), { ...eventPayload?.event_parameters });
        if (identify.capture) {
            (window as any).analytics.identify(identify.identifier, { email: identify.identifier })
        }
    }
}
