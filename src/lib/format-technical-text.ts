/** Isolate technical expressions in Persian prose without changing fenced/inline code. */
export function formatTechnicalText(text: string): string {
  return text.split(/(```[\s\S]*?```|`[^`\n]+`)/g).map(part => part.startsWith('`') ? part :
    part.replace(/List<[^>\n]+>|\?\s+(?:extends|super)|new T\(\)|count\+\+|==|@[A-Z]\w*/g, token => `\`${token}\``)
  ).join('');
}
