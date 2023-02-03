
export const getGifs = async(category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=jPhiwOIFB1NN6RrLmR0TOG44nRGXCFvn&q=${category}&limit=20`;
    //const url = `www.thecocktaildb.com/api/json/v1/1/search.php?s=${category}`;
    // const url = `www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita`;
    const resp = await fetch(url);
    const  { data }  = await resp.json();
    console.log("data: ", data);
  
    const gifs = data.map(value => ({
      id:value.id,
      title:value.title,
      url:value.images.downsized_medium.url
    }));
  
    return gifs;
  
  }