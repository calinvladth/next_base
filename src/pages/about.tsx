import Layout from "@/components/layout";
import HeadWithSeo from "@/components/head-with-seo";

function About() {
    return <>
        <HeadWithSeo pageTitle="About page title"
                     pageDescription="About page description"
                     pageImage="/images/about.jpg"
        />
        <Layout>
            <p>About page</p>
        </Layout>
    </>
}

export default About