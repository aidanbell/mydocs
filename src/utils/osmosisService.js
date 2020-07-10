const BASE_URL = '/api/osmosis/';

function search(terms, language) {
  console.log(terms, language)
  return fetch(BASE_URL + 'search?q=' + terms)
    .then(res => {
      if (res.ok) return res.json();
      throw new Error('Search failed');
    })
}

export default {
  search
}