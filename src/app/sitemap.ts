import { MetadataRoute } from 'next';
import { featuredProjects } from '@/data/projects';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://mfseitz.com';
  const lastModified = new Date();

  // Project section anchors
  const projectEntries = featuredProjects.map((project) => ({
    url: `${baseUrl}/#project-${project.id}`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/#projects`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/#apify-actors`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/Muhammed-Faiz-Seitz-Full-Stack-AI-Resume.pdf`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    ...projectEntries,
  ];
}
