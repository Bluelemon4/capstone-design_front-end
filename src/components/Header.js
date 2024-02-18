import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import StudentInformation from "./StudentInformation";
//import axios from "axios";

function Header() {
    //const [studentData, setStudentData] = useState(null);
    const [isLoggedIn, setLoggedIn] = useState(false);

    /*useEffect(() => {
        const fetchStudentData = async () => {
          try {
            const response = await axios.get("https://api.example.com/students");
            setStudentData(response.data);
          } catch (error) {
            console.error("학생 데이터 불러오기 오류: ", error);
          }
        };
        
        if (isLoggedIn) {
          fetchStudentData();
        }
    }, [isLoggedIn]);*/

    const handleLogin = () => {
        setLoggedIn(!isLoggedIn);
    };

    const handleCourseSearch = () => {
      window.open("강좌조회 URL");
    }

  return (
    <div className="Header">
      <header className="header">
        <img src="/DCU_mark.jpeg" alt="사진" className="header_image" />
        <div className="header_text">
          <h1>2024년도 1학기 수강신청</h1>
        </div>
        <div className="header_buttons">
          <button onClick={handleCourseSearch} className="class_button">강좌조회</button>
          <button onClick={handleLogin} className="log_button">{isLoggedIn ? "로그아웃" : "로그인"}</button>
          <Link to="/completion" className="complete_button">완료</Link>
        </div>
      </header>
      {isLoggedIn ? (
        /*studentData ? (*/
          <StudentInformation/*StudentInformation studentData={studentData}*/ />
        ) : /*(
            <p>학생 정보를 불러오는 중입니다...</p>
          )
      ) : */(
        <p>로그인 후 학생 데이터를 불러옵니다.</p>
      )}
    </div>
  );
}

export default Header;