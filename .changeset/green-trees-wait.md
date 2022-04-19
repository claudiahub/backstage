---
'@backstage/create-app': patch
---

imports `useSearch` hook from new `@backstage/plugin-search-react` package.

To upgrade existing Apps change the imports in the following two files:

`components/search/SearchModal.tsx`

```diff
import {
...
SearchType,
- useSearch,
} from '@backstage/plugin-search';
+ import { useSearch } from '@backstage/plugin-search-react';
import { TechDocsSearchResultListItem } from '@backstage/plugin-techdocs';
```

`components/search/SearchPage.tsx`

```diff
import {
...
SearchType,
- useSearch,
} from '@backstage/plugin-search';
+import { useSearch } from '@backstage/plugin-search-react';
```
