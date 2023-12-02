import Layout from "@/components/layout";
import HeadWithSeo from "@/components/head-with-seo";
import {GetStaticPropsContext} from "next";
import {useTranslations} from "use-intl";

function Home() {
    const t = useTranslations('HomePage');
    return <>
        <HeadWithSeo pageTitle={t('meta.title')}
                     pageDescription="Home page description"
                     pageImage="/images/home.jpg"
        />
        <Layout>
        <p>{t('title')} / {process.env.NEXT_PUBLIC_URL}</p>
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

export default Home