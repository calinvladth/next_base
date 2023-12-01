import Layout from "@/components/layout";
import HeadWithSeo from "@/components/head-with-seo";
import {useTranslations} from "use-intl";
import {GetStaticPropsContext} from "next";

function Contact() {
    const t = useTranslations('ContactPage')
    return <>
        <HeadWithSeo pageTitle={t('meta.title')}
                     pageDescription="Contact page description"
                     pageImage="/images/contact.jpg"
        />
        <Layout>
            <p>{t('title')}</p>
        </Layout>
    </>
}

export async function getStaticProps({locale}: GetStaticPropsContext) {
    return {
        props: {
            messages: (await import(`@/locales/${locale}.json`)).default
        }
    };
}

export default Contact