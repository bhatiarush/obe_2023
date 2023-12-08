import React, { useState } from "react";
import { Button, Form, Input, Modal, Select, Space, Table, Tag } from "antd";

const StudentTable = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [data, setData] = useState([
    {
      key: "1",
      name: "John Brown",
      age: 32,
      address: "New York No. 1 Lake Park",
      tags: ["nice", "developer"],
    },
    {
      key: "2",
      name: "Jim Green",
      age: 42,
      address: "London No. 1 Lake Park",
      tags: ["loser"],
    },
    {
      key: "3",
      name: "Joe Black",
      age: 32,
      address: "Sydney No. 1 Lake Park",
      tags: ["cool", "teacher"],
    },
  ]);

  const handleDelete = (key) => {
    const newData = data.filter((item) => item.key !== key);
    setData(newData);
  };

  const handleAddStudent = (values) => {
    const newData = [...data, { key: data.length + 1, ...values }];
    setData(newData);
    setIsModalVisible(false);
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const AddStudentForm = () => {
    const [form] = Form.useForm();

    const staticTags = ["nice", "developer", "loser", "cool", "teacher"];

    return (
      <Form form={form} onFinish={handleAddStudent}>
        <Form.Item name="name" label="Name" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name="age" label="Age" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name="address" label="Address" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name="tags" label="Tags">
          <Select mode="multiple" placeholder="Select tags">
            {staticTags.map((tag) => (
              <Select.Option key={tag} value={tag}>
                {tag}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Add Student
          </Button>
          <Button type="danger" onClick={() => setIsModalVisible(false)}>
            Cancel
          </Button>
        </Form.Item>
      </Form>
    );
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Tags",
      key: "tags",
      dataIndex: "tags",
      render: (_, { tags }) => (
        <>
          {Array.isArray(tags) &&
            tags.map((tag) => {
              let color = tag.length > 5 ? "geekblue" : "green";
              if (tag === "loser") {
                color = "volcano";
              }
              return (
                <Tag color={color} key={tag}>
                  {tag.toUpperCase()}
                </Tag>
              );
            })}
        </>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <a>Invite {record.name}</a>
          <Button
            sx={{ color: "volcano" }}
            onClick={() => handleDelete(record.key)}
          >
            Delete
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <>
      <Table columns={columns} dataSource={data} />
      <Button type="primary" onClick={showModal} style={{ marginLeft: "auto" }}>
        Add Student
      </Button>
      <Modal
        title="Add Student"
        open={isModalVisible}
        onCancel={handleCancel}
        footer={null}
      >
        <AddStudentForm />
      </Modal>
    </>
  );
};
export default StudentTable;
