import {NextIntlClientProvider} from 'next-intl';
import {useRouter} from 'next/router';
import {AppProps} from "next/app";
import {ThemeProvider} from "styled-components";
import theme from "@/theme/theme";
import GlobalStyle from "@/theme/globalStyle";
import {Raleway} from "next/font/google";
import {useEffect} from "react";
import {initGA, logPageView} from "@/utils/google-analytics-service";
import {usePathname} from "next/navigation";

const raleway = Raleway({subsets: ['latin']})

export default function App({Component, pageProps}: AppProps) {
    const router = useRouter();
    const pathname = usePathname()

    useEffect(() => {
        initGA();
    }, [])

    useEffect(() => {
        logPageView();
    }, [pathname])

    return (
        <NextIntlClientProvider
            locale={router.locale}
            timeZone="Europe/Vienna"
            messages={pageProps.messages}
        >
            <main className={raleway.className}>
            <ThemeProvider theme={theme}>
                <GlobalStyle/>
                <Component {...pageProps} />
            </ThemeProvider>
            </main>
        </NextIntlClientProvider>
    );
}