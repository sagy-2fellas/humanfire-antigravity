import { Helmet } from "react-helmet-async";

const SITE_NAME = "humanfire";
const DEFAULT_TITLE = "humanfire | People Strategy & Talent Management Consulting";
const DEFAULT_DESCRIPTION = "humanfire helps organisations design smarter talent strategies with AI-powered tools, people analytics, culture transformation, and organisational design. Based in South Africa.";
const BASE_URL = "https://humanfire.co";

export default function SEO({ title, description, path = "", noIndex = false }) {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : DEFAULT_TITLE;
  const metaDescription = description || DEFAULT_DESCRIPTION;
  const canonicalUrl = `${BASE_URL}${path}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDescription} />

      {noIndex && <meta name="robots" content="noindex, nofollow" />}
    </Helmet>
  );
}
