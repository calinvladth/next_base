import Layout from "@/components/layout";
import Seo from "@/components/seo";

function Home() {
    return <>
        <Seo pageTitle="Home page title"
             pageDescription="Home page description"
             pageImage="/images/home.jpg"
        />
        <Layout>
        <p>Home page</p>
    </Layout>
    </>
}

export default Home