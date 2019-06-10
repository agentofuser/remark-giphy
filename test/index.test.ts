import remark from 'remark'
import escapeStringRegExp from 'escape-string-regexp'
import giphy from '../src'

const markdown = "![Hi](<giphy:whats up> 'How is it going?')"
const expectedPattern = RegExp(
  escapeStringRegExp('![Hi](https://media.giphy.com/media/') +
    '.+?' +
    escapeStringRegExp('/giphy.gif "How is it going?")')
)

test('giphy', async () => {
  await new Promise(resolve => {
    remark()
      .use(giphy, { giphyApiKey: process.env.GIPHY_API_KEY })
      .process(markdown, function(err, file) {
        if (err) throw err
        resolve(expect(String(file)).toMatch(expectedPattern))
      })
  })
})
