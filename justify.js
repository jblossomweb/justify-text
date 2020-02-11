// https://en.wikipedia.org/wiki/Typographic_alignment
function justify(text, width) {
  const regex = new RegExp(/\s+/, 'g');
  const matches = text.match(regex);
  const spaces = matches && matches.length;
  if (!spaces) {
    return text;
  }
  const diff = width - text.length;
  const pad = ' '.repeat(Math.floor(diff / spaces) + 1);
  const even = text.replace(regex, pad);
  if (even.length === width) {
    return even;
  }
  const evenDiff = width - even.length;
  const words = even.split(regex);
  let uneven = even;
  words.forEach((word, index) => {
    if (index < evenDiff) {
      uneven = uneven.replace(word, `${word} `);
    }
  });
  return uneven;
}

module.exports = justify;
