import Head from "next/head";

const PageHead = ({ headTitle }) => {
    return (
        <>
            <Head>
                <title>{headTitle ? headTitle : "C&P Roofing - Roofing Services"}</title>
            </Head>
        </>
    );
};

export default PageHead;
