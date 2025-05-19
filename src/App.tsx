import { LocaleChooser, useTranslation } from "./i18n/react"

export default function App() {
  const { t } = useTranslation()

  return (
    <>
      <div style={{ display: "flex", alignItems: "baseline", gap: 16 }}>
        <LocaleChooser locales={["en-US", "es-ES"]} />
        <p>{t("locale")}</p>
      </div>
      <p>{t("greetings", { name: "Kyle", lastLoginDate: new Date() })}</p>
      <p>{t("inboxMessages", { messages: 3, name: "Kyle" })}</p>
      <p>{t("hobby", { hobby: "runner" })}</p>
      <p>{t("nested.greetings", { names: ["Kyle", "Sally", "John"] })}</p>
      <p>{t("missingES")}</p>
    </>
  )
}
