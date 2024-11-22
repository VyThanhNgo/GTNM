function showTab(tabId) {
    // Hide all tab contents
    document.querySelectorAll('.tab-content').forEach(content => {
      content.classList.remove('active');
    });
  
    // Remove active class from all buttons
    document.querySelectorAll('.tab-link').forEach(button => {
      button.classList.remove('active');
    });
  
    // Show selected tab content and activate button
    document.getElementById(tabId).classList.add('active');
    document.querySelector(`.tab-link[onclick="showTab('${tabId}')"]`).classList.add('active');
  }
  
  function toggleTable(week) {
    var table = document.getElementById(week);
    if (table.style.display === "none" || table.style.display === "") {
      table.style.display = "block";
    } else {
      table.style.display = "none";
    }
  }
  // Lấy tất cả các nút tab và bảng nội dung
const tabs = document.querySelectorAll('.tabs button');
const tabContents = document.querySelectorAll('.tab-content');

// Lắng nghe sự kiện click vào từng nút tab
tabs.forEach((tab, index) => {
  tab.addEventListener('click', () => {
    // Xóa lớp active khỏi tất cả các tab và ẩn tất cả các bảng
    tabs.forEach(tab => tab.classList.remove('active'));
    tabContents.forEach(content => content.classList.remove('active'));

    // Thêm lớp active vào tab và bảng tương ứng
    tab.classList.add('active');
    tabContents[index].classList.add('active');
  });
});
