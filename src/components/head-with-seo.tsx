import Head from "next/head";
import {StaticImageData} from "next/image";

type SeoProps = {
    pageTitle: string,
    pageDescription: string,
    pageImage: string,
    type?: string,
}


/*
    pageTitle -> for page title and social title
    pageDescription -> for page description and social description
    pageImage -> for social image
 */
function HeadWithSeo({pageTitle, pageDescription, pageImage, type='website'}: SeoProps) {
    return <Head>
        <title>{pageTitle}</title>
        <meta name='description' content={pageDescription}/>
        { /* End standard metadata tags */}
        { /* Facebook tags */}
        <meta property="og:site_name" content=""/>
        <meta property="og:type" content={type}/>
        <meta property="og:url" content=""/>
        <meta property="og:title" content={pageTitle}/>
        <meta property="og:description" content={pageDescription}/>
        <meta property="og:image" content={pageImage}/>
        { /* End Facebook tags */}
        { /* Twitter tags */}
        {/*<meta name="twitter:creator" content={name}/>*/}
        {/*<meta name="twitter:card" content={type}/>*/}
        {/*<meta name="twitter:title" content={pageTitle}/>*/}
        {/*<meta name="twitter:description" content={pageDescription}/>*/}
        <link rel="icon" type="image/x-icon" href="/images/rocket-red.svg"/>
    </Head>
}

export default HeadWithSeo