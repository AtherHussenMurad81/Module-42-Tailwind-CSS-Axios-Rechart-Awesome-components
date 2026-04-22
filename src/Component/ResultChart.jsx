import React from "react";
import { Line, LineChart, XAxis, YAxis } from "recharts";

// The data structure remains the same
const resultData = [
  {
    student_id: "S001",
    name: "Alex Johnson",
    accounting: 85,
    finance: 78,
    business_studies: 92,
  },
  {
    student_id: "S002",
    name: "Maria Rodriguez",
    accounting: 91,
    finance: 88,
    business_studies: 85,
  },
  {
    student_id: "S003",
    name: "Chen Wei",
    accounting: 74,
    finance: 65,
    business_studies: 79,
  },
  {
    student_id: "S004",
    name: "Fatima Al-Marzouqi",
    accounting: 88,
    finance: 95,
    business_studies: 90,
  },
  {
    student_id: "S005",
    name: "David Smith",
    accounting: 68,
    finance: 72,
    business_studies: 60,
  },
  {
    student_id: "S006",
    name: "Priya Sharma",
    accounting: 95,
    finance: 91,
    business_studies: 98,
  },
  {
    student_id: "S007",
    name: "Omar Hassan",
    accounting: 79,
    finance: 83,
    business_studies: 75,
  },
  {
    student_id: "S008",
    name: "Sarah Lee",
    accounting: 82,
    finance: 77,
    business_studies: 88,
  },
  {
    student_id: "S009",
    name: "Kenji Tanaka",
    accounting: 60,
    finance: 55,
    business_studies: 64,
  },
  {
    student_id: "S010",
    name: "Sofia Bellini",
    accounting: 89,
    finance: 86,
    business_studies: 93,
  },
];

const ResultChart = () => {
  return (
    <LineChart width={800} height={500} data={resultData}>
      <XAxis dataKey="name"></XAxis>
      <YAxis></YAxis>
      <Line dataKey="accounting" stroke="white"></Line>
      <Line dataKey="finance" stroke="green"></Line>
      <Line dataKey="business_studies" stroke="red"></Line>
    </LineChart>
  );
};

export default ResultChart;
