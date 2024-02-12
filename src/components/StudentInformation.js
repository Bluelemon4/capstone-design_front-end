import React from "react";
import "./StudentInformation.css";

const StudentTable = ({ studentData }) => {
  return (
    <table className="student_table">
      <thead>
        <tr>
          <th>개설년도</th>
          <th>2024</th>
          <th>개설학기</th>
          <th>1학기</th>
          <th>학번</th>
          <th>19191919</th>
          <th>성명</th>
          <th>홍길동</th>
          <th>학년</th>
          <th>4</th>
          <th>학차</th>
          <th>7</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>학과(전공)</th>
          <th>컴퓨터공학과</th>
          <th>복수전공학과1</th>
          <th>경영학과</th>
          <th>복수전공학과2</th>
          <th>영어영문학과</th>
          <th>취득기준학점</th>
          <th>19</th>
          <th>학사경고</th>
          <th>해당없음</th>
          <th>성적우수/복전/이월</th>
          <th>3</th>
        </tr>
        <tr>
          <th>수강가능학점</th>
          <th>22</th>
          <th>신청학점</th>
          <th>15</th>
          <th>남은 학점</th>
          <th>7</th>
          <th>잔여 마일리지</th>
          <th>100</th>
          <th>신청 마일리지</th>
          <th>70</th>
          <th></th>
          <th></th>
        </tr>
      </tbody>
    </table>
  );
};

export default StudentTable;