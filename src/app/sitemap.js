export default function sitemap() {
  const baseUrl = 'https://punjab-electric-bus.vercel.app'; // Replace with your actual Vercel domain if different

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    // Add other routes if you have separate pages like /about, /download
    // {
    //   url: `${baseUrl}/about`,
    //   lastModified: new Date(),
    //   changeFrequency: 'monthly',
    //   priority: 0.8,
    // },
  ];
}
