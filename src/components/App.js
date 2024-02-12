import React from "react";
import Header from "./Header";
import StudentInformation from "./StudentInformation";
import StudentLecture from "./StudentLecture";

function App() {
    return (
        <div>
            <Header />
            <StudentInformation />
            <br></br>
            <br></br>
            <StudentLecture />
        </div>
    );
}

export default App;