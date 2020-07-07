import React from 'react';
import {Helmet} from "react-helmet";

const SEO = ({meta}) => {

    return(
      <Helmet>
        <meta charSet="utf-8" /> 

        <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta name="theme-color" content="#000000" />

        <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />

        <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
      
        <title>{meta.title}</title>

        <meta name="robots" content={meta.follow }/>

        <meta name="description" content={meta.description} />

        <meta property="og:type" content={meta.type} />

        <meta property="og:title" content={meta.title} />

        <meta property="og:description" content={meta.description} />

        <meta property="og:image" content={meta.image} />

        <meta property="og:url" content={meta.url} />

        <meta property="og:site_name" content={meta.site_name} />

        <meta name="twitter:title" content={meta.title} />

        <meta name="twitter:description" content={meta.description} />

        <meta name="twitter:image" content={meta.image} />

        <meta name="twitter:site" content={meta.site} />

        <meta name="twitter:creator" content={meta.creator} />

      </Helmet>
    )

}

export default SEO;