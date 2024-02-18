import React from "react";
import "./StudentInformation.css";

const StudentInformation = (/*{ studentData }*/) => {

  const studentData = {
    openingYear: 2024,
    openingSemester: "1학기",
    studentNumber: "19191919",
    name: "홍길동",
    grade: 4,
    academicYear: 7,
    major: "컴퓨터공학과",
    doubleMajor1: "경영학과",
    doubleMajor2: "영어영문학과",
    acquiredCredits: 19,
    academicWarning: "해당없음",
    specialStatus: 3,
    availableCredits: 22,
    appliedCredits: 15,
    remainingCredits: 7,
    remainingMileage: 100,
    appliedMileage: 70
  };

  return (
    <table className="student_table">
      <thead>
        <tr>
          <th>개설년도</th>
          <th>{studentData.openingYear}</th>
          <th>개설학기</th>
          <th>{studentData.openingSemester}</th>
          <th>학번</th>
          <th>{studentData.studentNumber}</th>
          <th>성명</th>
          <th>{studentData.name}</th>
          <th>학년</th>
          <th>{studentData.grade}</th>
          <th>학차</th>
          <th>{studentData.academicYear}</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>학과(전공)</th>
          <th>{studentData.major}</th>
          <th>복수전공학과1</th>
          <th>{studentData.doubleMajor1}</th>
          <th>복수전공학과2</th>
          <th>{studentData.doubleMajor2}</th>
          <th>취득기준학점</th>
          <th>{studentData.acquiredCredits}</th>
          <th>학사경고</th>
          <th>{studentData.academicWarning}</th>
          <th>성적우수/복전/이월</th>
          <th>{studentData.specialStatus}</th>
        </tr>
        <tr>
          <th>수강가능학점</th>
          <th>{studentData.availableCredits}</th>
          <th>신청학점</th>
          <th>{studentData.appliedCredits}</th>
          <th>남은 학점</th>
          <th>{studentData.remainingCredits}</th>
          <th>잔여 마일리지</th>
          <th>{studentData.remainingMileage}</th>
          <th>신청 마일리지</th>
          <th>{studentData.appliedMileage}</th>
          <th></th>
          <th></th>
        </tr>
      </tbody>
    </table>
  );
};

export default StudentInformation;