import { equal } from 'node:assert/strict';
import { describe, it } from 'node:test';
import i18n from '../i18n';

await describe('i18n', async () => {
  await describe('language', async () => {
    await it('should return default language if no one is set', () => {
      equal(i18n.language(), 'en');
    });

    await it('should set and return passed language', () => {
      equal(i18n.language('it'), 'it');
    });

    await it('should return updated language', () => {
      equal(i18n.language(), 'it');
    });
  });

  await describe('translate', async () => {
    await it('should return passed param if is falsy', () => {
      equal(i18n.t(''), '');
      equal(i18n.t(null), null);
      equal(i18n.t(), undefined);
    });

    await it('should return string if is not a piped string', () => {
      equal(i18n.t('some string!'), 'some string!');
    });

    await it('should return string if is not a piped string but contains some pipes', () => {
      equal(i18n.t('some | string | !'), 'some | string | !');
    });

    await it('should return empty string if no translation is found for current language', () => {
      i18n.language('en');
      equal(i18n.t('|es|hola!|it|ciao!'), '');
    });

    await it('should proper translation', () => {
      i18n.language('en');
      equal(i18n.t('|es|hola!|it|ciao!|en|hello!'), 'hello!');
    });
  });
});
