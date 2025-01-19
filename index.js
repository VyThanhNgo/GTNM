document.addEventListener("DOMContentLoaded", function() {
  const navLinks = document.querySelectorAll('.nav-right a'); // Tất cả liên kết trong menu điều hướng

  // Lấy đường dẫn của trang hiện tại
  const currentPath = window.location.pathname.split('/').pop(); // Lấy tên file HTML hiện tại

  // Thêm lớp 'active' vào liên kết tương ứng
  navLinks.forEach(link => {
    const linkPath = link.getAttribute('href'); // Lấy đường dẫn từ href của liên kết
    if (linkPath === currentPath) {
      link.classList.add('active'); // Thêm lớp 'active' nếu khớp
    } else {
      link.classList.remove('active'); // Loại bỏ lớp 'active' nếu không khớp
    }
  });

  // Xử lý sự kiện nhấn vào các liên kết
  navLinks.forEach(link => {
    link.addEventListener('click', function(event) {
      // Loại bỏ 'active' khỏi tất cả các liên kết
      navLinks.forEach(nav => nav.classList.remove('active'));

      // Thêm 'active' vào liên kết vừa được nhấn
      this.classList.add('active');

      // Lưu tab đang mở vào localStorage
      localStorage.setItem('activeTab', this.getAttribute('href'));
    });
  });
});


  
    // Xử lý sự kiện cho các liên kết trong offer-item nếu cần
    offerLinks.forEach(link => {
      link.addEventListener('click', function(event) {
        console.log(`Offer link clicked: ${this.getAttribute('href')}`);
      });
    });
  