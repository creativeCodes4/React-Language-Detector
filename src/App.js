import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './theme';
import { GlobalStyles } from './global';
import Form from './Components/Form';
import json from './languageCodes.json';
import { FaSun, FaMoon } from 'react-icons/fa';

function App() {
  const [data, setData] = useState('');
  const [metadata, setMetaData] = useState('');
  const onSubmit = (text) => {
    const options = {
      method: 'POST',
      url: 'https://microsoft-translator-text.p.rapidapi.com/Detect',
      params: { 'api-version': '3.0' },
      headers: {
        'content-type': 'application/json',
        'x-rapidapi-key': '734326dd5amsh486f8a5598acb87p1eb0cajsnc21071a9fd39',
        'x-rapidapi-host': 'microsoft-translator-text.p.rapidapi.com',
      },
      data: [
        {
          Text: `${text}`,
        },
      ],
    };

    axios
      .request(options)
      .then(function (response) {
        setData(response.data[0].language);
        setMetaData(response.data[0].score);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  const [language, setLanguage] = useState('');
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  useEffect(() => {
    onSubmit(language);
  }, [language]);

  console.log();
  let newData = [[], []];
  if (data.length > 0) {
    newData = Object.entries(json.translation[data]);
  }

  return (
    <div className="App">
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <div className="holder">
          <GlobalStyles />
          <div className="holder-header">
            <h2>Detect Language</h2>
            <button onClick={toggleTheme}>
              {theme === 'dark' ? <FaSun /> : <FaMoon />}
            </button>
          </div>
          <Form
            language={language}
            onSubmit={onSubmit}
            setLanguage={setLanguage}
          />
          {language === '' ? (
            <h1>Waiting...</h1>
          ) : (
            <h1>{metadata > 0 ? newData[0][1] : '...'}</h1>
          )}
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
