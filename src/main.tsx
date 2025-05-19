import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import App from "./App.tsx"
import type translations from "./i18n/translations/en.ts"
import { TranslationProvider } from "./i18n/react.tsx"
import esES from "./i18n/translations/es-ES.ts"
import enUS from "./i18n/translations/en-US.ts"
import en from "./i18n/translations/en.ts"
import "./styles.css"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <TranslationProvider
      fallbackLocale={["en"]}
      translations={{
        en,
        "es-es": esES,
        "en-us": enUS,
      }}
    >
      <App />
    </TranslationProvider>
  </StrictMode>
)

declare module "./i18n/lib/my-translations" {
  interface Register {
    translations: typeof translations
  }
}
