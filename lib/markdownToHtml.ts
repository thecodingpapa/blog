import {marked} from 'marked';
import hljs from 'highlight.js';


const renderer = new marked.Renderer();


//use highlight.js to highlight code and use rounded corners for code block
renderer.code = (code, language) => {
  const validLanguage = hljs.getLanguage(language) ? language : 'plaintext';
  const highlighted = hljs.highlight(code, { language: validLanguage }).value;
  return `<pre style="background-color: #f1f1f1; white-space: pre-wrap; border-radius: 6px; padding: 12px"><code class="hljs language-${validLanguage}">${highlighted}</code></pre>`;
};

// table
renderer.table = (header, body) => {
  return `<table style="border: 2px solid #f1f1f1; border-collapse:collapse;" class="table table-striped table-bordered table-hover table-condensed">${header}${body}</table>`;
};

renderer.tablerow = (content) => {
  return `<tr style="border: 2px solid #f1f1f1; border-collapse:collapse;">${content}</tr>`;
};

renderer.tablecell = (content, flags) => {
  const type = flags.header ? 'th' : 'td';
  const tag = flags.align
    ? `<${type} style="border: 2px solid #f1f1f1; border-collapse:collapse; text-align:${flags.align}; padding: 12px">`
    : `<${type} style="border: 2px solid #f1f1f1; border-collapse:collapse; padding: 12px">`;
  return `${tag}${content}</${type}>`;
};

//blockquote
renderer.blockquote = (quote) => {
  return `<blockquote style="border-left: 5px solid #333; padding-left: 10px;">${quote}</blockquote>`;
};

//remove empty paragraph
renderer.paragraph = (text) => {
  if (text.trim().startsWith('<img')) {
    return `<p style="text-align: center; margin-top: 1.5rem; margin-bottom: 1px">${text}</p>`;
  }
  if (text.trim().startsWith('<Image')) {
    return `<p style="text-align: center; margin-top: 1.5rem; margin-bottom: 1px">${text}</p>`;
  }
  return `<p>${text}</p>`;
};

//give top margin to heading
renderer.heading = (text, level) => {
    return `<h${level} style="margin-top: 10rem;">${text}</h${level}>`;
};

//show youtube video and text for a link
renderer.link = (href, title, text) => {
  if (href.match(/youtube\.com\/watch\?v=([a-zA-Z0-9\-_]+)/)) {
    const id = href.match(/youtube\.com\/watch\?v=([a-zA-Z0-9\-_]+)/)[1];
    return `<p>${text}</p><div class="video-container"><iframe width="560" height="315" src="https://www.youtube.com/embed/${id}" frameborder="0" allowfullscreen></iframe></div>`;
  }
  return `<a href="${href}" title="${title}">${text}</a>`;
};

//remove all line breaks between li tags And add middle dot as list style
renderer.listitem = (text) => {
  return `<li style="list-style: disc; margin-left: 20px;">${text}</li>`;
};

//remove all empty line in ul tags and add margin
renderer.list = (body, ordered, start) => {
  const type = ordered ? 'ol' : 'ul';
  return `<${type} style="margin-bottom: 2rem">${body}</${type}>`;
};

// Set marked options
marked.setOptions({
  renderer: renderer,
  pedantic: false,
  gfm: true,
  breaks: false,
});

export default async function markdownToHtml(markdown: string) {
  const html = marked(markdown);
  return html;
}
