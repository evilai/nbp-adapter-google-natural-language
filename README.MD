# Google Natural Language adapter
This is a Google Natural Language adapter for Node.js Bot Platform. You need to provide:

* `projectId` is a google project ID;
* `keyFilename` is path to the json file with google keys;
* `logger` is an instance of your logging tool.

```js
import googleNaturalLanguageAdapterFactory from 'nbp-adapter-google-natural-language';
const googleNaturalLanguageAdapter = googleNaturalLanguageAdapterFactory({
    projectId: 'google-project-id',
    keyFilename: 'path-to-json-keys',
    logger
});
```

After you can create an instance of GNL and use it's methods:
```js
const googleNaturalLanguage = googleNaturalLanguageAdapter();

googleNaturalLanguage.annotate('Here your sentence to annotate');
googleNaturalLanguage.detectEntities('Here your sentence where you can detect entities');
googleNaturalLanguage.detectSentiment('Here your sentence where you can detect sentiment');
```

Please, look at [usage example](https://github.com/evilai/nodejs-bot-platform/blob/master/src/bot/skills/clusters/core/google-language.js). 