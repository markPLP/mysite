export type AboutData = {
  id: string;
  label: string;
  title: string;
  description: string | (string | { type: string; items: string[] })[];
};
