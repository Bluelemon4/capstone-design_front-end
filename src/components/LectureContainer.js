import React, { useEffect, useState } from "react";
import StudentLecture from "./StudentLecture";
//import axios from "axios";

function LectureContainer() {
    const [lectureData, setLectureData] = useState([]);

    useEffect(() => {
        //fetchLectureData();

        const testDummyData = () => {
            const dummyData = [
                { subjectCode: 1234, division: 1, subject: "이산수학", courseType: "전공", credit: 3, classTime: "월 10:00-12:00 강의실 D2" },
                { subjectCode: 5678, division: 2, subject: "C프로그래밍", courseType: "전공", credit: 4, classTime: "화 13:00-17:00 강의실 D3" },
                { subjectCode: 9012, division: 3, subject: "JAVA프로그래밍", courseType: "전공", credit: 3, classTime: "금 09:00-13:00 강의실 D4" },
                { subjectCode: 3456, division: 4, subject: "C#프로그래밍", courseType: "전공", credit: 3, classTime: "수 09:00-12:00 강의실 D5" },
                { subjectCode: 7890, division: 5, subject: "C++프로그래밍", courseType: "전공", credit: 2, classTime: "목 09:00-13:00 강의실 D6" },
                { subjectCode: 1357, division: 6, subject: "인공지능", courseType: "전공", credit: 3, classTime: "월 13:00-17:00 강의실 D7" },
                { subjectCode: 2468, division: 7, subject: "데이터베이스", courseType: "전공", credit: 4, classTime: "금 13:00-17:00 강의실 D8" }
            ];
            setLectureData(dummyData);
        };
        testDummyData();
    }, []);

    /*const fetchLectureData = async () => {
        try {
          const response = await axios.get("https://api.example.com/lecture");
          setLectureData(response.data);
        } catch (error) {
          console.error("강의 데이터 불러오기 오류: ", error);
        }
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete("https://api.example.com/lecture/${id}");
            setLectureData(prevData => prevData.filter(lecture => lecture.id !== id));
        } catch (error) {
            console.error("강의 삭제 오류: ", error);
        }
    };*/
    
    return (
        <StudentLecture lectureData={lectureData} /*onDelete={handleDelete}*/ />
    );
}

export default LectureContainer;