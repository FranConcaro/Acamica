function getSearchResult(search) {
    const apiKey = "KbVxSjUe7ROvkMmfnNkRZOdBnOOQXEbO";
  
    const found = fetch(
      "http://api.giphy.com/v1/gifs/search?q=" + search + "&api_key=" + apiKey
    )
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log(data.data);
        return data;
      })
      .catch(error => {
        return error;
      });
    return found;
  }