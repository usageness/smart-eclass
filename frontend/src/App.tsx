import Layouts from 'components/Layouts';
import Main from 'pages/Main';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GlobalStyles from 'styles/GlobalStyles';

function App() {
  return (
    <Layouts>
      <Router>
        <GlobalStyles />
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </Router>
    </Layouts>
  );
}

export default App;
