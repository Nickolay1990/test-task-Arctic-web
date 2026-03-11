export type SnippetFilters = {
  $text?: { $search: string };
  tags?: { $in: string[] };
};
