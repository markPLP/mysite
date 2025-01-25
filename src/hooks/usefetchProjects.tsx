import {
  Asset,
  ProjectItem,
  ProjectsQueryResponse,
  UseQueryReturn,
} from '@/utils/types';
import { createClient } from 'contentful';
import { useQuery } from 'react-query';

const client = createClient({
  space: 'us6r6oy788vz',
  environment: 'master',
  accessToken: import.meta.env.VITE_API_KEY,
});

export const useFetchProjects = (filter: string): UseQueryReturn => {
  const { isLoading, error, data } = useQuery<ProjectsQueryResponse>({
    queryKey: ['projects', filter],
    queryFn: async () => {
      const response = await client.getEntries({ content_type: 'projects' });
      console.log(response);

      const projectItems: ProjectItem[] = response.items.map((item) => {
        const { ghUrl, image, liveUrl, logo, title } = item.fields as {
          ghUrl?: string;
          image?: Asset;
          liveUrl?: string;
          logo?: Asset;
          title?: string;
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
        console.log(tags, 'tagstags');

        return {
          id,
          ghUrl: ghUrl || '', // Default to empty string if undefined
          largeImage,
          liveUrl: liveUrl || '', // Default to empty string if undefined
          logoImage,
          title: title || '', // Default to empty string if undefined
          tags: tags || [], // Default to empty array if undefined
        };
      });

      return { data: projectItems };
    },
  });

  return { isLoading, error, data };
};
