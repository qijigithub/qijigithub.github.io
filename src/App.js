import { Layout } from './components/layout/Layout';
import ReactGa from 'react-ga';
import React, {useEffect} from 'react';

function App() {
useEffect(() => {
  ReactGa.initialize('G-SN55C3MXN3')
  ReactGa.pageview('/')
}, [])

  return (
    <div>
      <Layout/>
    </div>
  );
}

export default App;
