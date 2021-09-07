const API_KEY = 'tt3896198&apikey=4ab221b7' // http://www.omdbapi.com/?apikey=[yourkey]&
const API_BASE = 'http://www.omdbapi.com/3' // http://img.omdbapi.com/?apikey=[yourkey]&

/*
Exemplos:
- originais da netflix
- recomendados (treding)
- em alta (top rated)
- ação
- comédia
- terror
- romance
- documentários

Here is your key: 4ab221b7

Please append it to all of your API requests,

OMDb API: http://www.omdbapi.com/?i=tt3896198&apikey=4ab221b7

Click the following URL to activate your key: http://www.omdbapi.com/apikey.aspx?VERIFYKEY=2e33a8e1-542d-4166-849b-64bc5079cebd
If you did not make this request, please disregard this email.


Chang Log:

1º. Movies:
- http://www.omdbapi.com/?s=Batman&page=2
- 
- 
- 
-
-
2º. Series:
- http://www.omdbapi.com/?i=tt0944947&Season=1
- http://www.omdbapi.com/?t=Game%20of%20Thrones&Season=1
-
- 
-
- 
3º. Episode:
- http://www.omdbapi.com/?t=Game%20of%20Thrones&Season=1&Episode=1
-
-
-
-
-
*/

const basicFetch = async endpoint => {
  const req = await fetch(`${API_BASE}$end{endpoint}`);
  const json = await req.json();
  return json;
}

export default {
  getHomelist: async () => {
    return [
      {
        slug: 'Movie title to search for.',
        title: 'Originais do Netflix',
        items: await basicFetch(`/discover/tv/?with_network=213&language=pt-BR&api_key=${API_KEY}`)
      },

      {
        slug: 'Type of result to return.',
        title: 'Recomendados para você',
        items: await basicFetch(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`)
      },

      {
        slug: 'Year of release.',
        title: 'Em alta',
        items: await basicFetch(`/movie/top_rated?language=pt-BR&api_key=${API_KEY}`)
      },

      {
        slug: 'The data type to return.',
        title: 'Ação',
        items: await basicFetch(`/discover/movie?with_genres=28&language=pt-BR&api_key=%{API_KEY}`)
      },

      {
        slug: 'Page number to return.',
        title: 'Comédia',
        items: await basicFetch(`/discover/movie?with_genres=35&language=pt-BR&api_key=%{API_KEY}`)
      },

      {
        slug: 'JSONP callback name.',
        title: 'Terror',
        items: await basicFetch(`/discover/movie?with_genres=27&language=pt-BR&api_key=%{API_KEY}`)
      },

      {
        slug: 'API version (reserved for future use).',
        title: 'Romance',
        items: await basicFetch(`/discover/movie?with_genres=10749&language=pt-BR&api_key=%{API_KEY}`)
      },
    ]
  }
}
