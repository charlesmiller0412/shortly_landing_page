import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
    static async getInitialProps(ctx: any) {
        const initialProps = await Document.getInitialProps(ctx);
        return {
            ...initialProps,
            styles: React.Children.toArray([initialProps.styles]),
        };
    }

    render() {
        return (
            <Html lang="en-us">
                <Head>
                    {/* FAVICON */}
                    <link
                        rel="apple-touch-icon"
                        sizes="180x180"
                        href="%PUBLIC_URL%/assets/favicon/apple-touch-icon.png"
                    />
                    {/* Google Fonts */}
                    <link
                        href="https://fonts.googleapis.com/css2?family=Poppins:wght@500;700&display=swap"
                        rel="stylesheet"
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
