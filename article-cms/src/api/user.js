import request from '../utils/request'

export function comeLogin(data){
    return request.post('/login',data)
}

// 删除
export function deleteById(id) {
    return request.delete(`/user/${id}`)
}

export function getAll(){
    return request.get('/users')
}

// 查询所有列表
export function GetList(params) {
    return request.get('/user', params)
}

// 查询指定Id
export function GetById(id) {
    return request.get(`/user/${id}`)
}

// 修改个人信息
export function changeInfo(id, params) {
    return request.put(`/user/${id}`, params)
}

// 新增用户
export function newUser(data) {
    return request.post("/user/register", data)
}

export function changePassword(params) {
    return request.put('/user/changePwd',params)
}

export function getImg(){
    return request.get('')
}
// 注销
// export function logout(token){
//     return request
// }