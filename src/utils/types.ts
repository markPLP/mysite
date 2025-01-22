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
