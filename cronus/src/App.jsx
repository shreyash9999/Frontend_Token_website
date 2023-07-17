import styled from "styled-components";
import Home from "./components/Home";
import Login from "./components/Login";
import Students from "./components/Students";
import DashBoard from "./components/Dashboard"
import New_user from "./components/New_user"
import About from "./components/About"
import News from "./components/News"
import { BrowserRouter, Route, Routes } from "react-router-dom"

const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  color: white;
  background: url("./img/bg.jpeg");
  &::-webkit-scrollbar{
    display: none;
  }
`;

function App() {
  return (
    <Container>
    
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Login" element={<Login/>}/>
      <Route path="/Dashboard" element={<DashBoard/>}/>
      <Route path="/New_user" element={<New_user/>}/>
      <Route path="/Students" element={<Students/>}/>
      <Route path="/News" element={<News/>}/>
      <Route path="/About" element={<About/>}/>

      </Routes>
      
    </BrowserRouter>

    </Container>
  );
}

export default App;
