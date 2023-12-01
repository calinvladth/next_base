import {NextIntlClientProvider} from 'next-intl';
import {useRouter} from 'next/router';
import {AppProps} from "next/app";

export default function App({Component, pageProps}: AppProps) {
    const router = useRouter();

    return (
        <NextIntlClientProvider
            locale={router.locale}
            timeZone="Europe/Vienna"
            messages={pageProps.messages}
        >
            <Component {...pageProps} />
        </NextIntlClientProvider>
    );
}