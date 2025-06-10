import { Layout, Typography } from 'antd';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

import 'antd/dist/reset.css'; // ✅ or just: 'antd/dist/antd.css' depending on version

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header>
        <Typography.Title style={{ color: 'white', margin: 0 }} level={3}>
          Kaiburr Task Manager
        </Typography.Title>
      </Header>
      <Content style={{ padding: '2rem' }}>
        <TaskForm onTaskCreated={() => window.location.reload()} />
        <br />
        <TaskList />
      </Content>
      <Footer style={{ textAlign: 'center' }}>Kaiburr ©2025</Footer>
    </Layout>
  );
}

export default App;
