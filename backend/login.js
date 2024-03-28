// api/example.js
import axios from 'axios' // Import thư viện Axios

// Hàm xử lý GET request

// Xây dựng API endpoint
export default async (user, pass) => {
  const response = await axios.post('http://127.0.0.1:3979/api/login/jwt',{
    
        username: user,
        password: pass
    
  })
  
  const responseData = response?.data ?? 'undefined' // Dữ liệu lấy được từ endpoint khác
  // Xử lý dữ liệu nếu cần thiết

  return responseData
}
