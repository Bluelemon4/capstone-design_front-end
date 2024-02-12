import React, { useEffect, useState } from "react";
import StudentLecture from "./StudentLecture";

function LectureContainer() {
    const [lectureData, setLectureData] = useState([]);

    useEffect(() => {
        /*const fetchLectureData = async () => {
            try {
              const response = await fetch('https://api.example.com/students');
              const data = await response.json();
              setLectureData(data);
            } catch (error) {
              console.error("강의 데이터 불러오기 오류: ", error);
            }
        };
        fetchLectureData();*/
        const dummyData = [
            { mileage: 1, subjectCode: 1234, division: 1, subject: "이산수학", courseType: "전공", credit: 3, classTime: "월 10:00-12:00 강의실 D2" },
            { mileage: 2, subjectCode: 5678, division: 2, subject: "C프로그래밍", courseType: "전공", credit: 4, classTime: "화 13:00-17:00 강의실 D3" },
            { mileage: 3, subjectCode: 9012, division: 3, subject: "JAVA프로그래밍", courseType: "전공", credit: 3, classTime: "금 09:00-13:00 강의실 D4" }
        ];
        setLectureData(dummyData);
    }, []);

    return (
        <StudentLecture lectureData={lectureData} />
    );
}

export default LectureContainer;