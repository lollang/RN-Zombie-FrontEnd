import Types from "./actionTypes";

export function onThemeChange(theme){
    return {type: Types.THEME_CHANGE, theme: theme}
}
