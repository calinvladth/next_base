import {JSX} from "react";
import Link from "next/link";

function Layout ({children}: {children: JSX.Element}) {
    return <section style={{padding: '50px', border: '1px solid red'}}>
        <header>
            <nav>
                <Link href="/">Home</Link>
                <br/>
                <Link href="/about">About</Link>
                <br/>
                <Link href="/contact">Contact</Link>
            </nav>
        </header>
        <hr/>
        {children}
    </section>
}

export default Layout