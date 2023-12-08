import { Button, Form, Input, Modal, Space, Table } from "antd";
import { useState } from "react";

const Department = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [data, setData] = useState([
    {
      key: "1",
      name: "Electrical",
    },
    {
      key: "2",
      name: "Electronics",
    },
    {
      key: "3",
      name: "Civil",
    },
    {
      key: "4",
      name: "Mechanical",
    },
    {
      key: "5",
      name: "CSE",
    },
    {
      key: "6",
      name: "IT",
    },
  ]);
  const [editingDepartment, setEditingDepartment] = useState(null);

  const handleDelete = (key) => {
    const newData = data.filter((item) => item.key !== key);
    setData(newData);
  };

  const handleAddDepartment = (values) => {
    if (editingDepartment) {
      // Editing existing department
      const newData = data.map((item) =>
        item.key === editingDepartment.key ? { ...item, ...values } : item
      );
      setData(newData);
      setEditingDepartment(null);
    } else {
      // Adding new department
      const newData = [...data, { key: data.length + 1, ...values }];
      setData(newData);
    }

    setIsModalVisible(false);
  };

  const showModal = (department) => {
    setEditingDepartment(department);
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setEditingDepartment(null);
    setIsModalVisible(false);
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <p>{text}</p>,
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Button
            type="primary"
            onClick={() => showModal(record)}
            style={{ marginRight: 8 }}
          >
            Edit
          </Button>
          <Button
            type="error"
            onClick={() => handleDelete(record.key)}
            style={{
              background: "#ff4d4f",
              borderColor: "#ff4d4f",
              color: "white",
            }}
          >
            Delete
          </Button>
        </Space>
      ),
    },
  ];

  const AddDepartmentForm = () => {
    const [form] = Form.useForm();

    return (
      <Form
        form={form}
        onFinish={handleAddDepartment}
        initialValues={editingDepartment}
      >
        <Form.Item name="name" label="Name" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            {editingDepartment ? "Edit Department" : "Add Department"}
          </Button>
          <Button type="danger" onClick={handleCancel}>
            Cancel
          </Button>
        </Form.Item>
      </Form>
    );
  };

  return (
    <div>
      <Table columns={columns} dataSource={data} />
      <Button
        type="primary"
        onClick={() => showModal(null)}
        style={{ marginLeft: "auto" }}
      >
        Add Department
      </Button>
      <Modal
        title={editingDepartment ? "Edit Department" : "Add Department"}
        open={isModalVisible}
        onCancel={handleCancel}
        footer={null}
      >
        <AddDepartmentForm />
      </Modal>
    </div>
  );
};

export default Department;
