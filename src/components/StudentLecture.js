import React, { useState } from "react";
import "./StudentLecture.css";
//import axios from "axios";

const StudentLecture = ({ lectureData, /*onDelete, mileageData, isCompleted*/ }) => {
    const [mileage, setMileage] = useState(lectureData.map(() => ""));

    const handleMileageChange = (event, index) => {
        //if (!isCompleted) {
            const value = event.target.value;
            if (!isNaN(value)) {
                if (value > 40 || value < 0) {
                    window.alert("베팅 가능한 최대 마일리지는 40, 최소 마일리지는 0 입니다.");
                }
                else {
                    const updatedMileage = [...mileage];
                    updatedMileage[index] = value;
                    setMileage(updatedMileage);

                    //sendMileageToServer(updatedMileage);
                }
            }
        //}
    };

    /*const sendMileageToServer = async (updatedMileage) => {
        try {
            const response = await axios.post("http://example.com/api/mileage", updatedMileage);
            console.log("마일리지 데이터가 성공적으로 전송되었습니다:", response.data);
        } catch (error) {
            console.error("마일리지 데이터 전송 중 오류 발생:", error);
        }
    };

    

    const handleButtonClick = (index) => {
        const isConfirmed = window.confirm("정말로 삭제하시겠습니까?");
        if (isConfirmed) {
            onDelete(lectureData[index].id);
            window.alert("선택된 강의가 삭제되었습니다. 인덱스 : " + index);
        }
    }*/

    return (
        <div className="lecture_table_container">
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
                            <td>{/*isCompleted ? mileageData[index] : (*/
                                <input 
                                type="number"
                                value={mileage[index]}
                                onChange={(event) => handleMileageChange(event, index)}
                                placeholder="마일리지 입력"
                                min={0}
                                max={40}
                                style={{width: "100px"}}
                            />
                            /*)*/}</td>
                            <td>{lecture.subjectCode}</td>
                            <td>{lecture.division}</td>
                            <td>{lecture.subject}</td>
                            <td>{lecture.courseType}</td>
                            <td>{lecture.credit}</td>
                            <td>{lecture.classTime}</td>
                            <td>
                                <button /*onClick={() => handleButtonClick(index)}*/>삭제</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default StudentLecture;