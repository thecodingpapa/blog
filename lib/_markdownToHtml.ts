// import { remark } from 'remark'
// import html from 'remark-html'
// import {unified} from 'unified'
// import remarkParse from 'remark-parse'
// import remarkGfm from 'remark-gfm'
// import remarkRehype from 'remark-rehype'
// import rehypeStringify from 'rehype-stringify'

// export default async function markdownToHtml(markdown: string) {
//   const result = await remark().use(html).process(markdown)
//   return result.toString()
// }

// export async function markdownToHtml2(markdown: string) {
//   const result = await unified()
//     .use(remarkParse)       // Parse markdown.
//     .use(remarkGfm)         // Support GFM (tables, autolinks, tasklists, strikethrough).
//     .use(remarkRehype)      // Turn it into HTML.
//     .use(rehypeStringify)   // Serialize HTML.
//     .process(markdown);

//   return result.toString()
// }