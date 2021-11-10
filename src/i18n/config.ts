import i18n from 'i18next'
import { initReactI18next } from "react-i18next"

import translation_en from './en.json'
import translation_zh_cn from './zh-cn.json'
import translation_zh_tw from './zh-tw.json'
const resources = {
    en:{
        translation:translation_en
    },
    zh_cn:{
        translation:translation_zh_cn
    },
    zh_tw:{
        translation:translation_zh_tw
    }
}

i18n.use(initReactI18next).init({
    resources,
    lng:"zh_cn",
    interpolation:{
        escapeValue:false
    }
})

export default i18n