const tagReg = /<(\w+)\s*>(.*)<\/\1\s*>|<(\w+)\s* \/>|{{\s*(\w+)\s*}}/g;

'fasfs<aaa>fafsaf</aaa>fasfsafdsa<bb>fsfsaf</bb> fsafd <fasfasf /><';

function parseText(text: string) {
  tagReg.lastIndex = 0;
  const result: IParseResult = {
    elements: [],
    tagInfos: {}
  };

  let index = 0, lastIndex = 0;
  let match: RegExpExecArray | null;
  while ((match = tagReg.exec(text))) {
    index = match.index;
    if (index > lastIndex) {
      result.elements.push(text.slice(lastIndex, index));
    }

    const key = match[1] || match[3] || match[4];
    const value = match[2] || match[4] || '';
    result.elements.push(value);
    result.tagInfos[key] = result.elements.length - 1;
    lastIndex = tagReg.lastIndex;
  }

  if (lastIndex < text.length) {
    result.elements.push(text.slice(lastIndex));
  }
  return result;
}