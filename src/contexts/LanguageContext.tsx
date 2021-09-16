import {createContext} from "react" ;

const LanguageContext = createContext({
    language: "pt-br",
    setLanguage: () => {}
  });

  export default LanguageContext;