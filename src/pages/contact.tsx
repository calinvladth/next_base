import Layout from "@/components/layout";
import Seo from "@/components/seo";

function Contact() {
    return <>
        <Seo pageTitle="Contact page title"
             pageDescription="Contact page description"
             pageImage="/images/contact.jpg"
        />
        <Layout>
            <p>Contact page</p>
        </Layout>
    </>
}

export default Contact