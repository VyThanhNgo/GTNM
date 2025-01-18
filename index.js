document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll('.nav-right a'); // Tất cả các liên kết trong menu
    const offerLinks = document.querySelectorAll('.offer-link'); // Các liên kết trong các mục offer-item
  
    // Lấy giá trị tab đang được chọn từ localStorage
    const savedActiveTab = localStorage.getItem('activeTab');
    if (savedActiveTab) {
      const activeLink = document.querySelector(`.nav-right a[href="${savedActiveTab}"]`);
      if (activeLink) {
        activeLink.classList.add('active');
      }
    } else {
      // Nếu không có tab đã lưu, mặc định chọn Home
      document.querySelector('.nav-right a[href="index.html"]').classList.add('active');
    }
  
    // Lắng nghe sự kiện click để cập nhật tab đang hoạt động
    navLinks.forEach(link => {
      link.addEventListener('click', function(event) {
        // Loại bỏ class 'active' khỏi tất cả các liên kết
        navLinks.forEach(nav => nav.classList.remove('active'));
  
        // Thêm class 'active' vào liên kết được nhấn
        this.classList.add('active');
  
        // Lưu tab đang được chọn vào localStorage
        const href = this.getAttribute('href');
        localStorage.setItem('activeTab', href);
      });
    });
  
    // Xử lý sự kiện cho các liên kết trong offer-item nếu cần
    offerLinks.forEach(link => {
      link.addEventListener('click', function(event) {
        console.log(`Offer link clicked: ${this.getAttribute('href')}`);
      });
    });
  });
  