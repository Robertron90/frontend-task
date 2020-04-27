import React, { useEffect, useState } from 'react';
import { fetchData } from './_DATA';
import Table from './Table';

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    (async () => {
      const results = await fetchData();
      setData(results);
    })();
  }, []);
  return (
    <div>
      <Table data={data} />
    </div>
  );
}

export default App;
