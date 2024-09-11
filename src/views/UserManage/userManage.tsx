import { Component } from 'react';
import Http from "axios";
import {List} from "antd";
import './userManage.css'

// 定义用户数据的接口
interface User {
    id: number;
    name: string;
    email: string;
}

// 定义组件的状态类型
interface UserListState {
    users: User[];      // 用户数组
    loading: boolean;   // 是否处于加载状态
    error: string | null; // 错误信息，可能为 null
}

interface UserListProps {}


class UserList extends Component<UserListProps, UserListState> {
    constructor(props: UserListProps) {
        super(props);
        this.state = {
            users: [],      // 初始用户数组为空
            loading: true,  // 初始状态为加载中
            error: null     // 初始错误信息为 null
        };
    }

    // 生命周期方法，在组件挂载后调用，获取数据
     async componentDidMount ()  {
        const res: any = await Http.get('http://101.37.70.236:3001/cs/test/users')
        this.setState({
            loading: false,
            users: res.data.body
        })
    }

    // 渲染组件
    render() {
        const { users, loading, error } = this.state;
        if (loading) {
            return <div>Loading...</div>;
        }
        if (error) {
            return <div>Error: {error}</div>;
        }
        return (
            <div className='Users'>
                <h2>User List</h2>
                <List
                    style={{ width:200 }}
                    size="large"
                    header={<div>Header</div>}
                    footer={<div>Footer</div>}
                    bordered
                    dataSource={users}
                    renderItem={(item) => <List.Item>{item.name}{item.email}</List.Item> }

                />
            </div>
        );
    }
}

export default UserList;
