import remark from 'remark'
import escapeStringRegExp from 'escape-string-regexp'
import giphy from '../src'

function assertPattern(sourceMarkdown, expectedPattern) {
  return new Promise(resolve => {
    remark()
      .use(giphy, { giphyApiKey: process.env.GIPHY_API_KEY })
      .process(sourceMarkdown, function(err, file) {
        if (err) throw err
        resolve(expect(String(file)).toMatch(expectedPattern))
      })
  })
}

test('image with autolink', async () => {
  const markdown = "![Hi](<giphy:whats up> 'How is it going?')"
  const expectedPattern = RegExp(
    escapeStringRegExp('![Hi](https://media.giphy.com/media/') +
      '.+?' +
      escapeStringRegExp('/giphy.gif "How is it going?")')
  )

  await assertPattern(markdown, expectedPattern)
})

test('link', async () => {
  const markdown = "[this gif](giphy:whats_up 'title')"
  const expectedPattern = RegExp(
    escapeStringRegExp('[this gif](https://media.giphy.com/media/') +
      '.+?' +
      escapeStringRegExp('/giphy.gif "title")')
  )

  await assertPattern(markdown, expectedPattern)
})

test('no search result', async () => {
  const markdown = "[this gif](<giphy:aaabbbbcccnoresulthereihope> 'title')"
  const expectedPattern = RegExp(
    escapeStringRegExp('[this gif](https://media.giphy.com/media/') +
      '.+?' +
      escapeStringRegExp('/giphy.gif "title")')
  )

  await assertPattern(markdown, expectedPattern)
})
