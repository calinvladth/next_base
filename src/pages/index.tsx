import Layout from "@/components/layout";
import HeadWithSeo from "@/components/head-with-seo";
import {useRouter} from "next/router";

function Home() {
    return <>
        <HeadWithSeo pageTitle="Home page title"
                     pageDescription="Home page description"
                     pageImage="/images/home.jpg"
        />
        <Layout>
        <p>Home page</p>
    </Layout>
    </>
}

export default Home