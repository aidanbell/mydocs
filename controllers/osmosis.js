const osmosis = require('osmosis');

const urls = [{
  js: 'https://developer.mozilla.org/en-US/search?q='
}]

const searchFor = (req, res) => {
  let url = 'https://developer.mozilla.org/en-US/search?q=' + req.query.q
  let results = []

  osmosis
    .get(url)
    .set([
      osmosis
      .find('.result-container:not(:first-child)')
      .set({
        title: '.result > div > .result-title',
        href: '.result > div > .result-title@href',
        syntax: '.result > .result-excerpt'
      })
    ])
    .data(items => {
      console.log(items)
      results.push(items)
    })
    .done(() => res.json(results))
}

const tryLog = () => {
  console.log('oh hey, look at that')
}

module.exports = {
  searchFor,
  tryLog
}