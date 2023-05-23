import Layouts from 'components/Layouts';
import Login from 'pages/Login';
import Main from 'pages/Main';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import GlobalStyles from 'styles/GlobalStyles';

function App() {
  return (
    <Router>
      <Layouts>
        <GlobalStyles />
        <RecoilRoot>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/Login" element={<Login />} />
          </Routes>
        </RecoilRoot>
      </Layouts>
    </Router>
  );
}

export default App;
