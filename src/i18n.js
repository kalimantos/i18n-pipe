// @flow

let lang: string = 'en';
const language = (str?: string = lang): string => (lang = str);

const isPipedString = (str: string): boolean => (str.match(/\|/g) || []).length > 0;

function getTranslationHash(str: ?string): ?string {
  if (!str || !isPipedString(str)) return str;
  const match = new RegExp(`\\|${lang}\\|([^\\|]*)`).exec(str);
  return match ? match[1] : '';
}

export default {
  language,
  t: getTranslationHash,
};
