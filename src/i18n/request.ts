import {getRequestConfig} from 'next-intl/server';
import {hasLocale} from 'next-intl';
import {routing} from './routing';
import {fetchTranslations} from "@/data/db";

function addTranslation(messages: any, keys: string[], message: string) {
    const key = keys[0];

    if (keys.length > 1) {
        if (messages[key]) {
            messages[key] = addTranslation(messages[key], keys.slice(1), message);
        } else {
            messages[key] = addTranslation({}, keys.slice(1), message);
        }
    } else {
        messages[key] = message;
    }

    return messages;
}

export default getRequestConfig(async ({requestLocale}) => {
    // Typically corresponds to the `[locale]` segment
    const requested = await requestLocale;
    const locale = hasLocale(routing.locales, requested) ? requested : routing.defaultLocale;

    let messages = (await import(`../../messages/${locale}.json`)).default

    fetchTranslations(locale).then(map => {
        map.entries().forEach(entry => messages = addTranslation(messages, entry[0].split("."), entry[1]))
    });

    return {
        locale, messages: messages
    };
});