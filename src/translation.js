import { i18n } from '@/i18n.js';

const Trans = {
    get currentLocale() {
        return i18n.global.locale.value;
    },
    i18nRoute(to) {
        return {
            ...to,
            params: {
                locale: Trans.currentLocale,
                ...to.params
            }
        };
    },
    guessDefaultLocale() {
        const persistedLocale = localStorage.getItem('user-locale');
        if (persistedLocale && Trans.isLocaleSupported(persistedLocale)) {
            return persistedLocale;
        }

        const userPreferredLocale = Trans.getUserLocale();
        if (Trans.isLocaleSupported(userPreferredLocale.locale)) {
            return userPreferredLocale.locale;
        }
        if (Trans.isLocaleSupported(userPreferredLocale.localeNoRegion)) {
            return userPreferredLocale.localeNoRegion;
        }

        return import.meta.env.VITE_DEFAULT_LOCALE;
    },
    get supportedLocales() {
        const locales = import.meta.env.VITE_SUPPORTED_LOCALES;
        if (!locales) {
            throw new Error('VITE_SUPPORTED_LOCALES is not defined');
        }
        return locales.split(",");
    },
    set currentLocale(newLocale) {
        i18n.global.locale.value = newLocale;
        document.querySelector("html").setAttribute("lang", newLocale);
        localStorage.setItem("user-locale", newLocale);
    },

    async switchLanguage(newLocale) {
        Trans.currentLocale = newLocale;
        document.querySelector("html").setAttribute("lang", newLocale);
        localStorage.setItem("user-locale", newLocale);
    },
    async routeMiddleware(to, _from, next) {
        const paramLocale = to.params.locale;
        if (!Trans.isLocaleSupported(paramLocale)) {
            return next(Trans.guessDefaultLocale());
        }
        await Trans.switchLanguage(paramLocale);
        return next();
    },

    getPersistedLocale() {
        return localStorage.getItem('user-locale');
    },

    isLocaleSupported(locale) {
        const supportedLocales = Trans.supportedLocales;
        return supportedLocales.includes(locale);
    },

};

export default Trans;
