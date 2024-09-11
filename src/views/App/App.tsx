import { useState } from 'react'
import './App.css'
import {Button, Input} from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Typography } from 'antd';
const { Title } = Typography;

function App() {
    const [useInfo, setUseInfo] = useState<any>({
        username: '',
        password: ''
    })

    // 更新用户名的函数
    const handleUsernameChange = (e: any) => {
        setUseInfo({
            ...useInfo,
            username: e.target.value
        });
    };

    // 更新密码的函数
    const handlePasswordChange = (e: any) => {
        setUseInfo({
            ...useInfo,
            password: e.target.value
        });
    };

    // 注册账号的函数
    const Registry = () => {
        console.log(useInfo);
    }

  return (
      <div className='Main'>
          <Title>欢迎注册</Title>
          <div className='divide'/>
          <Input value={useInfo.username} style={{width: 200}} placeholder="请输入账号" prefix={<UserOutlined/>}
                 onChange={handleUsernameChange}/>
          <div className='divide'/>
          <Input.Password value={useInfo.password} style={{width: 200}} placeholder="请输入密码"
                          prefix={<UserOutlined/>} onChange={handlePasswordChange}/>
          <div className='divide'/>
          <Button type="primary" autoInsertSpace={false} onClick={Registry}>注册</Button>
      </div>
  )
}

export default App
