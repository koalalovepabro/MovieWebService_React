import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                {/*<Route path = '/hi' element={<h1>Hi there !</h1>}/>*/}
                <Route path = {`${process.env.PUBLIC_URL}/`} element={<Home />}/>
                <Route path = {`${process.env.PUBLIC_URL}/movie/:tomato`} element={<Detail />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App;
