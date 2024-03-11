export default function sitemap() {
    return [
      {
        url: 'https://catavia.vercel.app',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 1,
      },
      {
        url: 'https://catavia.vercel.app/products',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
      },
      {
        url: 'https://catavia.vercel.app/contact',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.5,
      }
    ]
  }