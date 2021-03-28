import React from 'react'
import Head from 'next/head'
import '../styles/global.css'
// import withReduxSaga from 'redux-saga'

import wrapper from '../store/configureStore'

function App({ Component, pageProps }) {
    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <title>MovieBox</title>
                <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" /> 
                <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
            </Head>
            <Component {...pageProps} />
        </>
    )
}

export default wrapper.withRedux(App)
