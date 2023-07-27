function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    // 在這裡處理登入邏輯，可以向伺服器端發送請求進行驗證
  
    // 示範：簡單檢查使用者名稱和密碼是否為空
    if (username.trim() === '' || password === '') {
      alert('請輸入使用者名稱和密碼！');
      return;
    }
  
    alert('登入成功！');
    // 在這裡可以進行跳轉或其他相應處理
  }
  