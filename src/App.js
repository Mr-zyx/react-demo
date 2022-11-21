import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from "@/pages/Login";
import Layout from "@/pages/Layout";
import {Button} from "antd";

function App() {
    return (
        // router configuration
        <BrowserRouter>
            <div className="App">
                <Button type="primary">Primary Button</Button>
                <Routes>
                    {/*create the relationship between path and the component*/}
                    <Route path='/login' element={<Login/>}></Route>
                    <Route path='/' element={<Layout/>}></Route>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
