import { contentfulClient } from '@/api/contentful';
import {
  Asset,
  ProjectItem,
  ProjectsQueryResponse,
  UseQueryReturn,
} from '@/utils/types';

import { useQuery } from 'react-query';

export const useFetchProjects = (filter: string): UseQueryReturn => {
  const { isLoading, error, data } = useQuery<ProjectsQueryResponse>({
    queryKey: ['projects', filter],
    queryFn: async () => {
      let queryParams: any = { content_type: 'projects' };

      if (filter === 'all') {
        queryParams = queryParams;
      } else if (filter) {
        queryParams['metadata.tags.sys.id[in]'] = filter;
      }

      await new Promise((resolve) => setTimeout(resolve, 200));

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

        const tags = item.metadata.tags.map((tagItem) => {
          const { id } = tagItem.sys;
          return id;
        });

        const { id } = item.sys;

        const largeImage = image?.fields?.file?.url
          ? image.fields.file.url.startsWith('http')
            ? image.fields.file.url
            : `https:${image.fields.file.url}`
          : '';

        const logoImage = logo?.fields?.file?.url || '';

        return {
          id,
          ghUrl: ghUrl || '', // Default to empty string if undefined
          largeImage,
          liveUrl: liveUrl || '', // Default to empty string if undefined
          logoImage,
          title: title || '', // Default to empty string if undefined
          tags: tags || [], // Default to empty array if undefined
          description: description || '', // Default to empty string if undefined
          tech,
        };
      });

      return { data: projectItems };
    },
    staleTime: 60000, // Cache data for 1 minute
    refetchOnWindowFocus: false, // Prevent refetching when the window regains focus
    enabled: !!filter, // Fetch only when filter is not null/undefined
  });

  return { isLoading, error, data };
};
