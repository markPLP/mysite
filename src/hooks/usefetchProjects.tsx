import {
  Asset,
  ProjectItem,
  ProjectsQueryResponse,
  UseFetchProjectsReturn,
} from '@/utils/types';
import { createClient } from 'contentful';
import { useQuery } from 'react-query';

const client = createClient({
  // space: process.env.REACT_APP_CONTENTFUL_SPACE_ID,
  // accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN,
  space: 'us6r6oy788vz',
  environment: 'master',
  accessToken: 'G9sJ5VVSECR9IhYlm_gJH7kIPumaog-qoxAbXmYjAKc',
});

export const useFetchProjects = (): UseFetchProjectsReturn => {
  const { isLoading, error, data } = useQuery<ProjectsQueryResponse>({
    queryKey: ['projects'],
    queryFn: async () => {
      const response = await client.getEntries({ content_type: 'projects' });

      const projectItems: ProjectItem[] = response.items.map((item) => {
        const { ghUrl, image, liveUrl, logo, tags, title } = item.fields as {
          ghUrl?: string;
          image?: Asset;
          liveUrl?: string;
          logo?: Asset;
          tags?: string[];
          title?: string;
        };

        const { id } = item.sys;

        // Safely extract URLs, defaulting to empty strings if undefined
        const largeImage = image?.fields?.file?.url || '';
        const logoImage = logo?.fields?.file?.url || '';

        return {
          id,
          ghUrl: ghUrl || '', // Default to empty string if undefined
          largeImage,
          liveUrl: liveUrl || '', // Default to empty string if undefined
          logoImage,
          tags: tags || [], // Default to an empty array if undefined
          title: title || '', // Default to empty string if undefined
        };
      });

      return { data: projectItems };
    },
  });

  return { isLoading, error, data };
};
