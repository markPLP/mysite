import { useEffect } from 'react';

const DEFAULT_TITLE = 'Mark Phillip — Frontend Developer';

// Sets the document title and description for the current route and restores
// the defaults on unmount.
export const usePageMeta = (title?: string, description?: string) => {
  useEffect(() => {
    const meta = document.querySelector<HTMLMetaElement>(
      'meta[name="description"]'
    );
    const previousDescription = meta?.content;

    document.title = title ? `${title} — Mark Phillip` : DEFAULT_TITLE;
    if (meta && description) meta.content = description;

    return () => {
      document.title = DEFAULT_TITLE;
      if (meta && previousDescription) meta.content = previousDescription;
    };
  }, [title, description]);
};
