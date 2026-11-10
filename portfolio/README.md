# Ben Meyer · Portfolio (Exact app)

A personal portfolio built with [Expo's Exact](https://github.com/expo/exact). One source
runs natively on the web, macOS (AppKit) and iOS (UIKit).

| File | What it is |
|---|---|
| `app.contract` | The view: hero, experience, projects, skills and contact, in one reading column |
| `app.ts` | The content: résumé and site data that the view reads |
| `app.tamber` | The one accent colour, light and dark |
| `app.test.contract` | The contract: every section renders real content and every link is present |

## Run it

The generated `exact.mjs`, `AGENTS.md` and `CLAUDE.md` point at the Exact checkout this app
was created against. On your own machine, point them at yours once:

```sh
git clone https://github.com/expo/exact ~/exact
bun ~/exact/scripts/exact.mjs setup
cd portfolio
EXACT2=~/exact bun exact.mjs update     # rewrites the checkout path
bun exact.mjs web                       # dev loop at http://127.0.0.1:8765/
bun exact.mjs mac --run                 # macOS
bun exact.mjs ios --run                 # iOS Simulator
```

## Test it

```sh
bun exact.mjs test web        # or: macos, ios
bun exact.mjs verify          # tests + light/dark, phone/desktop, largest text size
```
