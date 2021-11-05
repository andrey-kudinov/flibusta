import './App.css';

import React, { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState<null | string>(null);
  // const [el, setEl] = useState(null);
  const name = 'перемены';
  const urlFlibusta = `http://flibusta.is/booksearch`;
  const proxy = 'https://cors-anywhere.herokuapp.com/';

  const url = new URL(urlFlibusta);
  url.searchParams.set('ask', name);
  url.searchParams.set('chb', 'on');

  useEffect(() => {
    const fetchFlibusta = async () => {
      const response = await fetch(proxy + url);
      const fetchData = await response.text();
      console.log('fetchData -', JSON.stringify(fetchData).indexOf('<h3'));
      console.log(
        'fetchData -',
        JSON.stringify(fetchData).indexOf('</a></li>\n</ul><br>'),
      );
      console.log(
        'fetchData -',
        JSON.stringify(fetchData).slice(116, 20402) + '</ul><br>',
      );
      console.log('!');
      setData(JSON.stringify(fetchData).slice(116, 20402) + '</ul><br>');
    };
    console.log('!!!');

    fetchFlibusta();
  }, []);

  useEffect(() => {
    if (data) {
      const el = document.createElement('html');
      // el.innerHTML = data;
      console.log(el.querySelectorAll('ul'));
    }
  }, [data]);

  return <div className="App"></div>;
}

export default App;
