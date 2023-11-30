// import React from "react";
// import { Card, Col, Row } from "antd";

// const subjects = [
//   { title: "Power electronics", semester: "6th" },
//   { title: "Power system 1", semester: "5th" },
//   { title: "Power system 2", semester: "6th" },
//   { title: "Control system", semester: "6th" },
//   { title: "Electrical machines 1", semester: "6th" },
//   { title: "Electrical machines 2", semester: "6th" },
//   { title: "Signals and systems", semester: "3rd" },
//   { title: "EMFT", semester: "4th" },
//   { title: "EMMI", semester: "4th" },
// ];

// const Courses = () => {
//   const cardsPerRow = 3;

//   return (
//     <>
//       {subjects
//         .reduce((rows, subject, index) => {
//           if (index % cardsPerRow === 0) {
//             rows.push([]);
//           }
//           rows[rows.length - 1].push(subject);
//           return rows;
//         }, [])
//         .map((row, rowIndex) => (
//           <Row gutter={16} key={rowIndex}>
//             {row.map((subject, colIndex) => (
//               <Col span={24 / cardsPerRow} key={colIndex}>
//                 <Card
//                   title={`Subject name`}
//                   bordered={false}
//                   style={{ marginBottom: 16 }}
//                 >
//                   {`${subject.title} - ${subject.semester} semester`}
//                 </Card>
//               </Col>
//             ))}
//           </Row>
//         ))}
//     </>
//   );
// };

// export default Courses;

import React, { useState } from "react";
import { Card, Col, Row, Select } from "antd";

const { Option } = Select;

const subjects = [
  { title: "Power electronics", semester: "6th" },
  { title: "Power system 1", semester: "5th" },
  { title: "Power system 2", semester: "6th" },
  { title: "Control system", semester: "6th" },
  { title: "Electrical machines 1", semester: "6th" },
  { title: "Electrical machines 2", semester: "6th" },
  { title: "Signals and systems", semester: "3rd" },
  { title: "EMFT", semester: "4th" },
  { title: "EMMI", semester: "4th" },
];

const Courses = () => {
  const cardsPerRow = 3;
  const [selectedSemester, setSelectedSemester] = useState("all");

  const filteredSubjects =
    selectedSemester === "all"
      ? subjects
      : subjects.filter((subject) => subject.semester === selectedSemester);

  return (
    <>
      <Select
        defaultValue="all"
        style={{ marginBottom: 16, width: 120 }}
        onChange={(value) => setSelectedSemester(value)}
      >
        <Option value="all">All Semesters</Option>
        <Option value="3rd">3rd Semester</Option>
        <Option value="4th">4th Semester</Option>
        <Option value="5th">5th Semester</Option>
        <Option value="6th">6th Semester</Option>
      </Select>

      {filteredSubjects
        .reduce((rows, subject, index) => {
          if (index % cardsPerRow === 0) {
            rows.push([]);
          }
          rows[rows.length - 1].push(subject);
          return rows;
        }, [])
        .map((row, rowIndex) => (
          <Row gutter={16} key={rowIndex}>
            {row.map((subject, colIndex) => (
              <Col span={24 / cardsPerRow} key={colIndex}>
                <Card
                  title={`Subject name`}
                  bordered={false}
                  style={{ marginBottom: 16 }}
                >
                  {`${subject.title} - ${subject.semester} semester`}
                </Card>
              </Col>
            ))}
          </Row>
        ))}
    </>
  );
};

export default Courses;
