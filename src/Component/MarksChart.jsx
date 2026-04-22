import React, { use } from "react";
import { Bar, BarChart, XAxis, YAxis } from "recharts";

const MarksChart = ({ marksPromise }) => {
  const marksDataRes = use(marksPromise);
  //   ;
  const marksData = marksDataRes.data;
  //   console.log(marksData);
  const studentDataChart = marksData.map((studentData) => {
    // console.log(studentData.business_studies);
    const student = {
      id: studentData.student_id,
      name: studentData.name,
      accounting: studentData.accounting,
      Finance: studentData.finance,
      businesStudies: studentData.business_studies,
    };
    const avg =
      student.accounting + student.Finance + student.businesStudies / 3;
    student.avg = Number(avg).toFixed(2);
    return student;
  });

  console.log(studentDataChart);
  return (
    <div>
      <BarChart width={500} height={300} data={studentDataChart}>
        <XAxis dataKey="name"></XAxis>
        <YAxis></YAxis>
        <Bar dataKey="avg" fill="yellow"></Bar>
        <Bar dataKey="accounting" fill="grey"></Bar>
      </BarChart>
    </div>
  );
};

export default MarksChart;
