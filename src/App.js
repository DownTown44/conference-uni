import './css/style.css';

import HomePage from './containers/HomePage';
import Layout from './hoc/Layout/Layout';

function App() {
  return (
    <Layout>
      <HomePage />
    </Layout>
  );
}

export default App;
