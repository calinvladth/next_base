import Layout from "@/components/layout";
import Seo from "@/components/seo";
import {useRouter} from "next/router";

function Home() {
    console.log('path', global?.window?.location)
    return <>
        <Seo pageTitle="Home page title"
             pageDescription="Home page description"
             pageImage={`${global?.window?.location}/images/home.jpg`}
        />
        <Layout>
        <p>Home page</p>
    </Layout>
    </>
}

export default Home