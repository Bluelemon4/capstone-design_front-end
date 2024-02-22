//import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import "./CompletePage.css"
import LectureContainer from "../components/LectureContainer";
//import axios from "axios";



const CompletePage = ({ lectureData }) => {
    /*const [mileageData, setMileageData] = useState([]);
    const [isCompleted, setIsCompleted] = useState(false);

    useEffect(() => {
        fetchMileageData();
    }, []);

    const fetchMileageData = async () => {
        try {
            const response = await axios.get("http://example.com/api/mileage");
            setMileageData(response.data);
            setIsCompleted(true);
        } catch(error) {
            console.error("마일리지 데이터를 불러오는 중 오류 발생:", error);
        }
    };*/

    return (
        <div className="completepage_container">
            <h2 className="completepage_title">수강신청 완료</h2>
            <p className="completepage_text">수강신청이 정상적으로 완료되었습니다.</p>
            <Link to="/" className="completepage_link">홈으로 돌아가기</Link>
            <p className="completepage_content">수강신청 내역</p>
            {/*isCompleted && */<LectureContainer lectureData={lectureData} /*mileageData={mileageData}*/ />}
        </div>
    );
};

export default CompletePage;