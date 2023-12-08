import React from "react";
import { AndroidOutlined, AppleOutlined } from "@ant-design/icons";
import { Tabs } from "antd";
import StudentTable from "./StudentTable";
import Courses from "./Courses";
import FacultyTable from "./FacultyTable";
import Department from "./components/Department/Department";

const tabs = [
  {
    tab: "Students",
    component: <StudentTable />,
  },
  {
    tab: "Courses",
    component: <Courses />,
  },
  {
    tab: "Faculties",
    component: <FacultyTable />,
  },
  {
    tab: "Department",
    component: <Department />,
  },
];

const TabBar = () => (
  <Tabs
    defaultActiveKey="2"
    items={[
      AppleOutlined,
      AndroidOutlined,
      AndroidOutlined,
      AndroidOutlined,
    ].map((Icon, i) => {
      return {
        label: (
          <span>
            <Icon />
            {tabs[i].tab}
          </span>
        ),
        key: i,
        children: tabs[i].component,
      };
    })}
  />
);
export default TabBar;
