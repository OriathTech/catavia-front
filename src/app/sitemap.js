export default function sitemap() {
    return [
      {
        url: 'https://oriathtech.com.ar',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 1,
      },
      {
        url: 'https://www.oriathtech.com.ar/about',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
      },
      {
        url: 'https://www.oriathtech.com.ar/services',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.5,
      },
      {
        url: 'https://www.oriathtech.com.ar/contact',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.5,
      },
    ]
  }