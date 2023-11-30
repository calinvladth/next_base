import Layout from "@/components/layout";
import Seo from "@/components/seo";

function Contact() {
    console.log(global?.window?.location)
    return <>
        <Seo pageTitle="Contact page title"
             pageDescription="Contact page description"
             pageImage={`${global?.window?.location?.origin}/images/contact.jpg`}
        />
        <Layout>
            <p>Contact page</p>
        </Layout>
    </>
}

export default Contact