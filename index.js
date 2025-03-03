const getUsers = async () => {
    const url = 'https://api.artic.edu/api/v1/artworks';
    const response = await fetch(url);
    return await response.json();
  };
  
  const render = (data) => {
    return data.map(({ 
        artist_title, 
        title }) => `<li>${artist_title} (${
            title})</li>`).join('');
  };
  
  (async () => {
    const data = await getUsers();
    document.querySelector('#content').innerHTML = `<ul>${render(data)}</ul>`;
  })();