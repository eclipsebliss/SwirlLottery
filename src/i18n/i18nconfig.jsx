import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'

import ts_en from './locales/en.json'
import ts_zh_CN from './locales/zh-CN.json'
import ts_zh_TW from './locales/zh-TW.json'

const resources = {
    en: {
        translation: ts_en,
    },
    zh_CN: {
        translation: ts_zh_CN,
    },
    zh_TW: {
        translation: ts_zh_TW,
    },

};

i18next.use(initReactI18next)
    .init({
        resources, // 一个对象，用于指定翻译资源
        lng: 'zh_CN',  // 一个字符串，用于指定当前语言。默认值为`'en'`
        interpolation: {  // 一个对象，用于指定插值的方式
            escapeValue: false  // 是否转义特殊字符
        }, 
        debug:true,  // 一个布尔值，用于指定是否启用调试模式。如果设置为true，则i18next会在控制台输出一些调试信息。
    });

export default i18next