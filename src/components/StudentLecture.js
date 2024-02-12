import React from "react";
import "./StudentLecture.css";

const StudentLecture = ({ lectureData }) => {
    console.log(lectureData);
    const handleButtonClick = (index) => {
        const isConfirmed = window.confirm("정말로 삭제하시겠습니까?");
        if (isConfirmed) {
            console.log("선택된 강의가 삭제되었습니다. 인덱스:", index);
        }
    }

    if (!Array.isArray(lectureData)) {
        return <p>강의 데이터가 없습니다.</p>;
    }

    return (
        <table className="student_lecture">
            <thead>
                <tr>
                    <th>마일리지</th>
                    <th>과목코드</th>
                    <th>분반</th>
                    <th>과목명</th>
                    <th>교과구분</th>
                    <th>학점</th>
                    <th>수업시간 및 강의실</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {lectureData.map((lecture, index) => (
                    <tr key={index}>
                        <td>{lecture.mileage}</td>
                        <td>{lecture.subjectCode}</td>
                        <td>{lecture.division}</td>
                        <td>{lecture.subject}</td>
                        <td>{lecture.courseType}</td>
                        <td>{lecture.credit}</td>
                        <td>{lecture.classTime}</td>
                        <td>
                            <button onClick={() => handleButtonClick(index)}>삭제</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default StudentLecture;