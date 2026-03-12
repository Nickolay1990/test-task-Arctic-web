export type SnippetFilters = {
  $text?: { $search: string };
  tags?: { $all: string[] };
};
