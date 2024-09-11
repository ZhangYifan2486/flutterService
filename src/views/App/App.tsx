import { useState } from 'react'
import './App.css'
import {Button, Input} from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Typography } from 'antd';
import Http from "axios";
const { Title } = Typography;

function App() {
    const [useInfo, setUseInfo] = useState<any>({
        account: '',
        password: ''
    })

    // 更新用户名的函数
    const handleUsernameChange = (e: any) => {
        setUseInfo({
            ...useInfo,
            account: e.target.value
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
    const Registry = async () => {
        const res = await Http.post('http://101.37.70.236:3001/cs/test/registry', useInfo)
        console.log(res)
    }

  return (
      <div className='Main'>
          <Title>欢迎注册</Title>
          <div className='divide'/>
          <Input value={useInfo.account} style={{width: 200}} placeholder="请输入账号" prefix={<UserOutlined/>}
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
