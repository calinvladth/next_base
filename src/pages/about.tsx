import Layout from "@/components/layout";
import Seo from "@/components/seo";

function About() {
    return <>
        <Seo pageTitle="About page title"
             pageDescription="About page description"
             pageImage="/images/about.jpg"
        />
        <Layout>
            <p>About page</p>
        </Layout>
    </>
}

export default About