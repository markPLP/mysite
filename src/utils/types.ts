// export type AboutData = {
//   id: string;
//   label: string;
//   title: string;
//   description: string | (string | { type: string; items: string[] })[];
// };

export type DescriptionItem = {
  type: 'text' | 'list' | 'skills';
  content: string | string[] | SkillsCategory[];
};

export type SkillsCategory = {
  id: string;
  title: string;
  skills: Array<{ name: string; icon: string }>;
};

export type AboutItem = {
  id: string;
  label: string;
  title: string;
  description: DescriptionItem[];
};

export type AssetFields = {
  file: {
    url: string;
  };
};

export type Asset = {
  fields: AssetFields;
};

export type ProjectItem = {
  id: string;
  ghUrl: string;
  // largeImage: string; // Simplified to just the URL
  largeImage: string;
  liveUrl: string;
  logoImage: string; // Simplified to just the URL
  tags: string[];
  title: string;
};

export type ProjectsQueryResponse = {
  data: ProjectItem[];
};

export type UseFetchProjectsReturn = {
  isLoading: boolean;
  error: unknown;
  data?: ProjectsQueryResponse;
};

// export type LargeImage = {
//   id: string;
//   imageUrl: string
// }
