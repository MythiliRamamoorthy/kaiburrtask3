import React, { useState, useEffect } from 'react';
import { Input, Table } from 'antd';
import { getTaskByName } from '../api/TaskService';   // ✅ path relative to components
import { Task } from '../types/task';

const { Search } = Input;

const TaskList = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const res = await getTaskByName(search);
        const data: Task[] = res.data;  // ✅ declare type here to be sure
        setTasks(data);
      } catch (err) {
        console.error('Search failed', err);
        setTasks([]);
      }
    };

    fetchTasks();
  }, [search]);

  return (
    <>
      <Search
        placeholder="Search by name"
        onSearch={(value) => setSearch(value)}
        style={{ marginBottom: 16, width: 300 }}
      />
      <Table
        dataSource={tasks}
        rowKey="id"
        columns={[
          { title: 'ID', dataIndex: 'id', key: 'id' },
          { title: 'Name', dataIndex: 'name', key: 'name' },
          { title: 'Owner', dataIndex: 'owner', key: 'owner' },
          { title: 'Command', dataIndex: 'command', key: 'command' },
        ]}
      />
    </>
  );
};

export default TaskList;
