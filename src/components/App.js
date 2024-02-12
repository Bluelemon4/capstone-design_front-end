import React from "react";
import Header from "./Header";
import StudentInformation from "./StudentInformation";
import LectureContainer from "./LectureContainer";
import StudentLecture from "./StudentLecture";

function App() {
    return (
        <div>
            <Header />
            <StudentInformation />
            <br></br>
            <br></br>
            <LectureContainer />
        </div>
    );
}

export default App;