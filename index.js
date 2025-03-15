import { createRoot } from 'react-dom/client';

function NavigationBar() {
  // TODO: Actually implement a navigation bar
  return <h1>Hello from React!</h1>;
}

const domNode = document.getElementById('navigation');
const root = createRoot(domNode);
root.render(<NavigationBar />);

const getUsers = async () => {
    const url = 'https://api.artic.edu/api/v1/artworks';
    const response = await fetch(url);
    const data = await response.json();
    console.log(data)
    return data.data;
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