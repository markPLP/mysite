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
  slug: string;
  ghUrl: string;
  // largeImage: string; // Simplified to just the URL
  largeImage: string;
  liveUrl: string;
  logoImage: string; // Simplified to just the URL
  title: string;
  tags: string[];
  tech?: string[];
  description: string;
};

export type ProjectsQueryResponse = {
  data: ProjectItem[];
};

export type UseQueryReturn = {
  isLoading: boolean;
  error: unknown;
  data?: ProjectsQueryResponse;
};

export type AllTags = {
  // metadata?: {
  //   tags: string[];
  // };
  sys: string;
};

export type HandleBlurEvent = {
  target: {
    value: string;
  };
};

export type EmailFormElements = {
  user_name: HTMLInputElement;
  user_email: HTMLInputElement;
  message: HTMLTextAreaElement;
};

export type EmailForm = HTMLFormElement & {
  elements: EmailFormElements;
};

export type ResumeRole = {
  id: string;
  title: string;
  company: string;
  date: string;
  responsibilities: string[];
};

export type ResumeEducation = {
  id: string;
  qualification: string;
  institution: string;
  date: string;
};

export type ResumeData = {
  name: string;
  role: string;
  summary: string;
  location: string;
  email: string;
  pdfUrl: string;
  skills: string[];
  experience: ResumeRole[];
  education: ResumeEducation[];
};
