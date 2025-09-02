import React,{createContext,useContext} from "react";

export const ThemeContext = createContext({
  themeMode :"Light",
  darkTheme : ()=>{},
  lightTheme : ()=>{},
})
//jab v koi context create karega wosko by default obj ke andr jo v hai woh mil jayega

export const ThemeProvider = ThemeContext.Provider

//custom hook

export default function useTheme(){
  return useContext(ThemeContext)
}



