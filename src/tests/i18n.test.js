import i18n from '../i18n';

describe('i18n', () => {
  describe('language', () => {
    it('should return default language if no one is set', () => {
      expect(i18n.language()).toBe('en');
    });

    it('should set and return passed language', () => {
      expect(i18n.language('it')).toBe('it');
    });

    it('should return updated language', () => {
      expect(i18n.language()).toBe('it');
    });
  });

  describe('translate', () => {
    it('should return passed param if is falsy', () => {
      expect(i18n.t('')).toBe('');
      expect(i18n.t(null)).toBeNull();
      expect(i18n.t()).toBeUndefined();
    });

    it('should return string if is not a piped string', () => {
      expect(i18n.t('some string!')).toBe('some string!');
    });

    it('should return empty string if no translation is found for current language', () => {
      i18n.language('en');
      expect(i18n.t('|es|hola!|it|ciao!')).toBe('');
    });

    it('should proper translation', () => {
      i18n.language('en');
      expect(i18n.t('|es|hola!|it|ciao!|en|hello!')).toBe('hello!');
    });
  });
});
