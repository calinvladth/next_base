import Layout from "@/components/layout";
import HeadWithSeo from "@/components/head-with-seo";

function Contact() {
    return <>
        <HeadWithSeo pageTitle="Contact page title"
                     pageDescription="Contact page description"
                     pageImage="/images/contact.jpg"
        />
        <Layout>
            <p>Contact page</p>
        </Layout>
    </>
}

export default Contact