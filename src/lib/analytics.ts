type OutboundClick = {
  channel: string;
  placement: string;
  item?: string;
};

type EventParameters = Record<string, string | number | boolean>;

const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID?.trim();
const isLocal = ["localhost", "127.0.0.1"].includes(window.location.hostname);

function sendEvent(name: string, parameters: EventParameters) {
  window.gtag?.("event", name, parameters);
}

export function initializeAnalytics() {
  if (!measurementId || isLocal || window.gtag) {
    return;
  }

  window.dataLayer = window.dataLayer ?? [];
  window.gtag = (...args: unknown[]) => {
    window.dataLayer.push(args);
  };

  window.gtag("js", new Date());
  window.gtag("config", measurementId, { send_page_view: false });

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(measurementId)}`;
  document.head.appendChild(script);
}

export function trackOutboundClick({ channel, placement, item }: OutboundClick) {
  sendEvent("outbound_click", {
    channel,
    placement,
    item: item ?? "general",
  });
}
export function trackCollectionOpen(collection: "monsters" | "mascots", placement: string) {
  sendEvent("collection_open", { collection, placement });
}

export function trackPageView(path: string, title: string) {
  sendEvent("page_view", {
    page_location: window.location.href,
    page_path: path,
    page_title: title,
  });
}

