# remark-giphy

[![Downloads][downloads-badge]][downloads] [![Chat][chat-badge]][chat]

Add `giphy:` as a
[CommonMark URI scheme](https://spec.commonmark.org/0.29/#scheme).

Examples:

- Replace `![](giphy:search_term)` with first matching gif from giphy.
- Replace `![](<giphy:unescaped query>)` with first matching gif from giphy.
- Replace `[link](<giphy:search term>)` with first matching gif from giphy.

## Installation

[yarn][]:

```bash
yarn add @agentofuser/remark-giphy
```

## Usage

Say we have the following file, `demo.md`:

<!-- prettier-ignore -->
```markdown
Hello there! 👋

![](giphy:whats_up 'How is it going?')
```

And our script, `example.js`, looks as follows:

```javascript
var fs = require('fs')
var remark = require('remark')
var giphy = require('@agentofuser/remark-giphy')

remark()
  .use(giphy, { giphyApiKey: 'your-key' })
  .process(fs.readFileSync('demo.md'), function(err, file) {
    if (err) throw err
    console.log(String(file))
  })
```

Now, running `node example` yields:

```markdown
Hello there! 👋

![](https://media.giphy.com/media/eoVusT7Pi9ODe/giphy.gif 'How is it going?')
```

## API

### `remark().use(giphy, options)`

Take `![](giphy:search_term)` and replace with first matching gif from giphy.

- The object `options` MUST contain a valid Giphy API key as the `giphyApiKey`
  property.
- The object `options` MAY contain a valid Giphy API ID as the
  `notFoundGiphyId` property. It will be used when there are no search results
  for the term used. The default is this one:

  ![404 not found](https://media.giphy.com/media/14uQ3cOFteDaU/giphy.gif 'not found gif')

## Contribute

See [`contributing.md` in `remarkjs/remark`][contribute] for ways to get
started.

This organisation has a [Code of Conduct][coc]. By interacting with this
repository, organisation, or community you agree to abide by its terms.

## License

[MIT][license] © [Agent of User][author]

<!-- Definitions -->

[build-badge]: https://img.shields.io/travis/agentofuser/remark-giphy.svg
[build]: https://travis-ci.org/agentofuser/remark-giphy
[downloads-badge]: https://img.shields.io/npm/dm/remark-giphy.svg
[downloads]: https://www.npmjs.com/package/@agentofuser/remark-giphy
[chat-badge]:
  https://img.shields.io/badge/join%20the%20community-on%20spectrum-7b16ff.svg
[chat]: https://spectrum.chat/unified/remark
[yarn]: https://yarnpkg.com/en/docs/install
[license]: LICENSE.md
[author]: https://agentofuser.com
[remark]: https://github.com/remarkjs/remark
[contribute]: https://github.com/remarkjs/remark/blob/master/contributing.md
[coc]: https://github.com/remarkjs/remark/blob/master/code-of-conduct.md
