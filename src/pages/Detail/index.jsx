import React, { Component } from 'react'
import qs from 'qs'

export default class Detail extends Component {
    // 假设这是服务器传过来的数据
    state = {
        detailArr :[
            {id:'001',content:'你好vue！',star:10,date:'2020-07-02'},
            {id:'002',content:'你好react！',star:15,date:'2020-08-03'},
            {id:'003',content:'你好javaScript！',star:10,date:'2020-05-13'},

        ]
    }
    render() {
        // 方式一：获取params参数
        const {id,title} = this.props.match.params
        
        // 方式二：获取search参数
        // let {search} =this.props.location
        // console.log(this.props.location.search)
        // 借助qs库 解析search参数
        // search = search.split('?')[1]
        // const {id,title} = (qs.parse(search))

        // 方式三：获取location.state参数
        // const {id,title} = this.props.location.state

        // 检索数据
        const result = this.state.detailArr.find((detailObj)=>{
          return  detailObj.id === id
        })

        return (
        <div>
            {/* <h1>你好</h1> */}
            <div>ID:{id}</div> 
            <div>标题：{title}</div> 
            <div>内容：{result.content}</div> 
            <div>点赞数：{result.star}</div> 
            <div>日期：{result.date}</div> 
        </div>
        )
    }
}
