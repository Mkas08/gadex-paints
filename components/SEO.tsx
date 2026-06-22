import React, { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  ogType?: string;
  ogImage?: string;
  canonicalPath?: string;
  schema?: Record<string, any>;
}

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords,
  ogType = 'website',
  ogImage = '/assets/logo.jpeg',
  canonicalPath,
  schema,
}) => {
  useEffect(() => {
    // 1. Title
    document.title = `${title} | GADEX Paints`;

    // Helper function to set or create meta tag
    const setMetaTag = (attributeName: string, attributeValue: string, contentValue: string) => {
      let element = document.querySelector(`meta[${attributeName}="${attributeValue}"]`);
      if (element) {
        element.setAttribute('content', contentValue);
      } else {
        element = document.createElement('meta');
        element.setAttribute(attributeName, attributeValue);
        element.setAttribute('content', contentValue);
        document.head.appendChild(element);
      }
    };

    // Helper function to set or create link tag
    const setLinkTag = (relValue: string, hrefValue: string) => {
      let element = document.querySelector(`link[rel="${relValue}"]`);
      if (element) {
        element.setAttribute('href', hrefValue);
      } else {
        element = document.createElement('link');
        element.setAttribute('rel', relValue);
        element.setAttribute('href', hrefValue);
        document.head.appendChild(element);
      }
    };

    // 2. Base Metas
    setMetaTag('name', 'description', description);
    if (keywords) {
      setMetaTag('name', 'keywords', keywords);
    } else {
      const keywordsEl = document.querySelector('meta[name="keywords"]');
      if (keywordsEl) keywordsEl.remove();
    }

    // Ensure index, follow directive is set
    setMetaTag('name', 'robots', 'index, follow');

    // 3. Open Graph
    const siteUrl = window.location.origin;
    const currentUrl = siteUrl + (canonicalPath || window.location.pathname);
    const absoluteOgImage = ogImage.startsWith('http') ? ogImage : `${siteUrl}${ogImage}`;

    setMetaTag('property', 'og:title', `${title} | GADEX Paints`);
    setMetaTag('property', 'og:description', description);
    setMetaTag('property', 'og:type', ogType);
    setMetaTag('property', 'og:url', currentUrl);
    setMetaTag('property', 'og:image', absoluteOgImage);
    setMetaTag('property', 'og:site_name', 'GADEX Paints');

    // 4. Twitter Cards
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:title', `${title} | GADEX Paints`);
    setMetaTag('name', 'twitter:description', description);
    setMetaTag('name', 'twitter:image', absoluteOgImage);

    // 5. Canonical
    setLinkTag('canonical', currentUrl);

    // 6. Schema.org JSON-LD structured data
    let scriptEl = document.getElementById('seo-jsonld') as HTMLScriptElement;
    if (schema) {
      if (!scriptEl) {
        scriptEl = document.createElement('script');
        scriptEl.id = 'seo-jsonld';
        scriptEl.type = 'application/ld+json';
        document.head.appendChild(scriptEl);
      }
      scriptEl.text = JSON.stringify(schema);
    } else {
      if (scriptEl) {
        scriptEl.remove();
      }
    }

    return () => {
      // Clean up JSON-LD on unmount to prevent page drift issues
      const el = document.getElementById('seo-jsonld');
      if (el) el.remove();
    };
  }, [title, description, keywords, ogType, ogImage, canonicalPath, schema]);

  return null;
};

export default SEO;
