export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?q=${category}&limit=10&limit=20&api_key=6FoefU1qyJuHZQSqQSlp1LvXeCr5OyOo`;
  const resp = await fetch(url);
  const {data} = await resp.json();

  const gifs = data.map(({id, title, images }) =>({
    id,
    title,
    url: images?.downsized_medium.url
  }));
  return gifs;
}