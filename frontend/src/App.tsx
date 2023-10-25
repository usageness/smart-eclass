import Layouts from 'components/Layouts';
import Login from 'pages/Login';
import Main from 'pages/Main';
import NewStudy from 'pages/NewStudy';
import Signup from 'pages/Signup';
import Study from 'pages/Study';
import StudyController from 'pages/StudyController';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import GlobalStyles from 'styles/GlobalStyles';

function App() {
  return (
    <Router>
      <RecoilRoot>
        <Layouts>
          <GlobalStyles />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Signup" element={<Signup />} />
            <Route path="/Study">
              <Route index element={<Study />} />
              <Route path=":id" element={<StudyController />} />
            </Route>
            <Route path="/NewStudy" element={<NewStudy />} />
            <Route path="*" element={<Main />} />
          </Routes>
        </Layouts>
      </RecoilRoot>
    </Router>
  );
}

export default App;
