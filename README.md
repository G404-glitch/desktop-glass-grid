# Desktop Companion

Design a UI for a Windows desktop organizer app called "Desktop Organizer" —

think iTop-style: a grid of draggable, resizable "boxes" sitting on the user's

desktop. This is NOT a website — it will run inside an Electron app with a

frameless, fully transparent window, so design accordingly:

CRITICAL CONSTRAINTS:

- The root container must have a transparent background — no white/colored

  page background anywhere. Individual boxes have their own background

  (frosted glass / semi-transparent panel look fits the desktop-overlay vibe).

- No routing, no pages, no navigation — this is a single persistent view.

- No backend, no auth, no API calls, no localStorage — all data must live in

  React state/props only, since it'll be wired to a native app's IPC layer

  afterward. Don't invent fake fetch calls or mock databases.

- Since there's no OS title bar (frame: false), include a thin draggable strip

  at the top of the layout for window dragging — style it distinctly from

  the rest of the UI.

- Design for a resizable window starting at 1280x800, with a practical minimum

  around 640x480 — make sure the grid reflows sensibly at small sizes.

COMPONENTS NEEDED (as separate, clearly named components):

1. `Desktop` — the root container, renders the drag strip + the box grid area

2. `BoxGrid` — draggable/resizable grid layout holding multiple boxes

3. `AppBox` — represents a pinned app: icon, label, click to launch. Accept

   props for icon (image src/dataURL), label, and an onLaunch callback —

   don't hardcode any app data.

4. `NoteBox` — a sticky-note style box with an editable text area. Accept a

   value prop and onChange callback — don't manage its own persistence.

5. `AddBoxButton` or similar — lets the user create a new AppBox (via file

   drop/picker) or NoteBox

Every box component should accept an `onRemove` and `onMove`/`onResize`

callback as props rather than handling drag persistence internally — the

actual save-to-disk logic will be wired in separately.

Visual style: [describe what you want — dark/glassy, colorful, minimal, etc.

— tell it your actual taste here, this part is genuinely yours to decide]

Keep the component tree shallow and avoid deeply nested UI-library-specific

wrapper components where a plain styled div would do — this will be extracted

into a non-Lovable codebase afterward, so simpler composition ports easier.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/ab5fa617-2164-4916-9eb5-8bb3303f8659).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
