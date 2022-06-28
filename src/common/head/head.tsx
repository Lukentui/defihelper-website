import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

import opengraph from 'src/assets/images/opengraph.jpg';

export type HeadProps = {
  title?: string;
  description?: string;
  ogImage?: string;
  ogUrl?: string;
  keywords?: string[];
  status?: number;
};

const SITE_URL = 'https://defihelper.io';

export const Head: React.FC<HeadProps> = (props) => {
  const siteTitle = [props.title ?? 'Portfolio Tracker', 'DeFiHelper'].join(
    ' | '
  );

  const location = useLocation();

  const {
    ogImage = opengraph,
    ogUrl = SITE_URL,
    keywords = undefined,
    status = 200,
    description
  } = props;

  const image = [ogUrl, ogImage].join('');
  const url = [ogUrl, location.pathname].join('');

  return (
    <Helmet>
      <title>{siteTitle}</title>
      {keywords && <meta name="keywords" content={keywords.join(',')} />}
      <meta property="description" content={description} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:title" content={siteTitle} />
      <meta name="twitter:description" content={description} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta name="twitter:url" content={url} />
      <meta property="og:image" content={image} />
      <meta name="twitter:image" content={image} />
      <meta property="og:site_name" content={siteTitle} />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="prerender-status-code" content={String(status)} />
    </Helmet>
  );
};
