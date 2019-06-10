import remark from 'remark'
import giphy from '../src'

const markdown = `
Hey this is a nice youtube video about making modern react apps with gatsby:

https://www.youtube.com/watch?v=GN0xHSk2P8Q

Check it out 👆
`
const markdownWithEmbed = `Hey this is a nice youtube video about making modern react apps with gatsby:

<iframe width="480" height="270" src="https://www.youtube.com/embed/GN0xHSk2P8Q?feature=giphy" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Check it out 👆
`

test('giphy', async () => {
  await new Promise(resolve => {
    remark()
      .use(giphy)
      .process(markdown, function(err, file) {
        if (err) throw err
        resolve(expect(String(file)).toEqual(markdownWithEmbed))
      })
  })
})
