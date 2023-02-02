import './App.css';
import "./Style/Style.css"
import NavBar from './Component/NavBar';
import Signin from './Component/Authentication/Signin';
import Header from './Component/Header';
import SignUp from './Component/Authentication/SignupComp/SignUp';
function App() {
  return (
    <div className="App">
 <NavBar />
 <Header/>
 {/* <Signin/> */}
 <SignUp/>
     {/* <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
        </Routes> */}
    </div>
  );
}

export default App;
