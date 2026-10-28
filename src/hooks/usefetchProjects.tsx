import { contentfulClient } from '@/api/contentful';
import {
  Asset,
  ProjectItem,
  ProjectsQueryResponse,
  UseQueryReturn,
} from '@/utils/types';

import { useQuery } from '@tanstack/react-query';

export const slugify = (value: string) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

export const useFetchProjects = (filter: string = 'all'): UseQueryReturn => {
  const { isLoading, error, data } = useQuery<ProjectsQueryResponse>({
    queryKey: ['projects', filter],
    queryFn: async () => {
      let queryParams: any = { content_type: 'projects' };

      if (filter !== 'all') {
        queryParams['metadata.tags.sys.id[in]'] = filter;
      }

      const response = await contentfulClient.getEntries(queryParams);

      const projectItems: ProjectItem[] = response.items.map((item) => {
        const { ghUrl, image, liveUrl, logo, title, description, tech } =
          item.fields as {
            ghUrl?: string;
            image?: Asset;
            liveUrl?: string;
            logo?: Asset;
            title?: string;
            description?: string;
            tech?: string[];
          };

        const tags = item.metadata.tags.map((tagItem) => tagItem.sys.id);

        const largeImage = image?.fields?.file?.url
          ? image.fields.file.url.startsWith('http')
            ? image.fields.file.url
            : `https:${image.fields.file.url}`
          : '';

        return {
          id: item.sys.id,
          slug: slugify(title || item.sys.id),
          ghUrl: ghUrl || '',
          largeImage,
          liveUrl: liveUrl || '',
          logoImage: logo?.fields?.file?.url || '',
          title: title || '',
          tags: tags || [],
          description: description || '',
          tech,
        };
      });

      return { data: projectItems };
    },
    staleTime: 60000,
    refetchOnWindowFocus: false,
  });

  return { isLoading, error, data };
};
