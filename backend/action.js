import login from '@/backend/login'

export async function checklogin(usr, pass) {
const data = await login(usr, pass)
return data
// console.log(data ? data : 'undefined')
// try {
// const response = await axios.post('http://127.0.0.1:3979/api/login/jwt', {
// username: this?.form?.username,
// password: this?.form?.password
// });
// console.log(response?.data)
// } catch (error) {
// console.log(error)
// }
}