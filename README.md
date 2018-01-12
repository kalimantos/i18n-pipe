# i18n pipe
This is a translation library for pipe separated translation strings such as "|en|Hi, my name is Matteo|it|Ciao, il mio nome è Matteo"

## How to install
```
npm i --save i18n-pipe
```

## How to import
```
import i18n from 'i18n-pipe';
```

## How to use
### get current language
```
i18n.language(); // returns 'en'
```

### set current language
```
i18n.language('it'); // returns 'it'
```

### translate a string
```
i18n.t("|en|Hi, my name is Matteo|it|Ciao, il mio nome è Matteo");
// returns "Ciao, il mio nome è Matteo"
```
