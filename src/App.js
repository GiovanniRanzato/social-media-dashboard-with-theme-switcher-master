import React, {useState} from 'react';

import Layout from './Layout/Layout';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <Layout darkMode={darkMode} setDarkMode={setDarkMode} />
  );
}

export default App;
