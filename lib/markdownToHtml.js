import {unified} from 'unified'
import remarkParse from 'remark-parse'
import remarkGfm from 'remark-gfm'
import remarkRehype from 'remark-rehype'
import rehypeStringify from 'rehype-stringify'


export async function markdownToHtml(markdown) {
  const result = await unified()
    .use(remarkParse)       // Parse markdown.
    .use(remarkGfm)         // Support GFM (tables, autolinks, tasklists, strikethrough).
    .use(remarkRehype)      // Turn it into HTML.
    .use(rehypeStringify)   // Serialize HTML.
    .process(markdown);

  return result.toString()
}