let lang = 'en';

const language = (str: string = lang) => {
  lang = str;
  return lang;
};

const isPipedString = (str: string) => (str.match(/\|[a-zA-Z]{2}\|/) || []).length > 0;

function getTranslationHash(str?: string | null | undefined) {
  if (!str || !isPipedString(str)) return str;
  const match = new RegExp(`\\|${lang}\\|([^\\|]*)`).exec(str);
  return match ? match[1] : '';
}

export default {
  language,
  t: getTranslationHash,
};
