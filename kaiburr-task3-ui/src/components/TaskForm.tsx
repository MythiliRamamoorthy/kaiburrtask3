import React from 'react';
import { Button, Form, Input } from 'antd';
import { createTask } from '../api/TaskService';

const TaskForm = ({ onTaskCreated }: { onTaskCreated: () => void }) => {
  const [form] = Form.useForm();

  const onFinish = async (values: any) => {
    await createTask({ ...values, taskExecutions: [] });
    form.resetFields();
    onTaskCreated();
  };

  return (
    <Form form={form} layout="inline" onFinish={onFinish}>
      <Form.Item name="id" rules={[{ required: true }]}>
        <Input placeholder="ID" />
      </Form.Item>
      <Form.Item name="name" rules={[{ required: true }]}>
        <Input placeholder="Name" />
      </Form.Item>
      <Form.Item name="owner" rules={[{ required: true }]}>
        <Input placeholder="Owner" />
      </Form.Item>
      <Form.Item name="command" rules={[{ required: true }]}>
        <Input placeholder="Command" />
      </Form.Item>
      <Form.Item>
        <Button htmlType="submit" type="primary">Create Task</Button>
      </Form.Item>
    </Form>
  );
};

export default TaskForm;
