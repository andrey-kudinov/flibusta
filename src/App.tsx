import './App.css';

// import { jsdom } from 'jsdom';
import React, { useEffect } from 'react';

function App() {
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
      console.log('!');
      console.log(fetchData);

      // const { JSDOM } = jsdom;
      // const dom = new JSDOM(`<!DOCTYPE html><p>Hello world</p>`);
      // console.log(dom.window.document.querySelector('p').textContent);
    };
    console.log('!!!');

    fetchFlibusta();
  }, []);
  return <div className="App"></div>;
}

export default App;
