import Layout from "@/components/layout";
import HeadWithSeo from "@/components/head-with-seo";
import {GetStaticPropsContext} from "next";
import {useTranslations} from "use-intl";

function About() {
    const t = useTranslations('AboutPage');
    return <>
        <HeadWithSeo pageTitle={t('meta.title')}
                     pageDescription="About page description"
                     pageImage="/images/about.jpg"
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

export default About