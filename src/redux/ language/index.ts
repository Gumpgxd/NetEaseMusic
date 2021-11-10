import i18n from "i18next"

const initState: any = {
    language:"zh_cn"
}

const language = (state = initState, action:any) => {
    switch (action.type) {
        case "change_language":
            i18n.changeLanguage(action.payload)
            return {
                language: action.payload
            }
        default:
            return state;
    }
}

export default language