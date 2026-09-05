import { createFileRoute } from "@tanstack/react-router";
import { Desktop } from "@/components/desktop/Desktop";
import type { DesktopBox } from "@/components/desktop/BoxGrid";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Desktop Organizer — Boxes for a Tidy Windows Desktop" },
      {
        name: "description",
        content:
          "A frameless desktop overlay of draggable, resizable glass boxes for pinned apps and sticky notes.",
      },
      { property: "og:title", content: "Desktop Organizer" },
      {
        property: "og:description",
        content:
          "Draggable, resizable glass boxes for pinned apps and sticky notes on your Windows desktop.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

// Demo boxes only — the Electron host replaces these via props/IPC.
const demoBoxes: DesktopBox[] = [
  {
    id: "work",
    kind: "app",
    title: "Work",
    rect: { x: 48, y: 40, w: 320, h: 220 },
    apps: [
      { id: "a1", label: "Editor" },
      { id: "a2", label: "Terminal" },
      { id: "a3", label: "Browser" },
      { id: "a4", label: "Mail" },
    ],
  },
  {
    id: "note",
    kind: "note",
    title: "Note",
    rect: { x: 408, y: 40, w: 280, h: 220 },
    text: "Ship the overlay build.\nWire IPC for launch + save.",
  },
  {
    id: "media",
    kind: "app",
    title: "Media",
    rect: { x: 48, y: 296, w: 300, h: 200 },
    apps: [
      { id: "b1", label: "Player" },
      { id: "b2", label: "Photos" },
    ],
  },
];

function Index() {
  return <Desktop initialBoxes={demoBoxes} onLaunchApp={(app) => console.log("launch", app)} />;
}
