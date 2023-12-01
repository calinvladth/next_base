import {JSX} from "react";
import Link from "next/link";
import LocaleSwitcher from "@/components/locale-switcher";
import {useTranslations} from "use-intl";

function Layout ({children}: {children: JSX.Element}) {
    const t = useTranslations('Common')

    return <section style={{padding: '50px', border: '1px solid red'}}>
        <header>
            <nav>
                <Link href="/">Home</Link>
                <br/>
                <Link href="/about">About</Link>
                <br/>
                <Link href="/contact">Contact</Link>
                <br/>
                <br/>
                <LocaleSwitcher/>
                <br/>
                <p>{t('title')}</p>
            </nav>
        </header>
        <hr/>
        {children}
    </section>
}

export default Layout