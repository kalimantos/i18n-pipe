# i18n pipe
This is a translation library for pipe separated translation strings such as "|en|Hi, my name is Matteo|it|Ciao, il mio nome è Matteo"

## How to install
```bash
npm i i18n-pipe
```

## How to import
```javascript
import i18n from 'i18n-pipe';
```

## How to use
### get current language
```javascript
i18n.language(); // returns 'en'
```

### set current language
```javascript
i18n.language('it'); // returns 'it'
```

### translate a string
```javascript
i18n.t("|en|Hi, my name is Matteo|it|Ciao, il mio nome è Matteo");
// returns "Ciao, il mio nome è Matteo"
```
