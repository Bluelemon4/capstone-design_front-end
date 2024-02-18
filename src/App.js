import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import StudentInformation from "./components/StudentInformation";
import LectureContainer from "./components/LectureContainer";
import StudentLecture from "./components/StudentLecture";
import CompletePage from "./routes/CompletePage";

function App() {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={
                    <>
                        <Header />
                        <br></br>
                        <br></br>
                        <LectureContainer />
                    </>
                }/>
                <Route path="/completion" element={<CompletePage />}/>
            </Routes>
        </Router>
    );
}

export default App;