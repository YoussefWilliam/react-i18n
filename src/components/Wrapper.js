import React, { useState } from "react";
import { IntlProvider } from "react-intl";
import Arabic from "../lang/ar.json";
import { LANG_ENUM } from "../lang/constants";
import English from "../lang/en.json";

export const Context = React.createContext();

// Fetch browser's language
const local = navigator.language;
let lang = local === LANG_ENUM.ENGLISH ? English : Arabic;
console.log("🚀 ~ file: Wrapper.js ~ line 11 ~ lang", local);

const Wrapper = (props) => {
  const [locale, setLocale] = useState(local);
  const [message, setMessage] = useState(lang);

  const selectLanguage = (e) => {
    const newLocale = e.target.value;
    setLocale(newLocale);
    setMessage(newLocale === LANG_ENUM.ENGLISH ? English : Arabic);
  };
  return (
    <Context.Provider value={{ locale, selectLanguage }}>
      <IntlProvider messages={message} locale={locale}>
        {props.children}
      </IntlProvider>
    </Context.Provider>
  );
};

export default Wrapper;
