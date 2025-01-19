document.addEventListener("DOMContentLoaded", () => {
  // Xử lý tuần
  const weekButtons = document.querySelectorAll(".week-btn");
  const weekContents = document.querySelectorAll(".week-content");

  weekButtons.forEach(button => {
      button.addEventListener("click", () => {
          const weekId = button.getAttribute("data-week");

          // Xóa lớp active khỏi tất cả các nút tuần
          weekButtons.forEach(btn => btn.classList.remove("active"));

          // Thêm lớp active vào nút tuần được nhấn
          button.classList.add("active");

          // Ẩn tất cả các nội dung tuần
          weekContents.forEach(content => {
              content.classList.remove("active");
          });

          // Hiển thị nội dung của tuần được chọn
          const selectedContent = document.getElementById(weekId);
          selectedContent.classList.add("active");
      });
  });

  // Lấy nút Add New Module, Import, Export và input Import
  const addModuleBtn = document.querySelector('.add-module');
  const importBtn = document.querySelector('.import');
  const exportBtn = document.querySelector('.export');
  const importFileInput = document.getElementById('import-file');

  // Kiểm tra xem nút có tồn tại không
  if (addModuleBtn) {
    addModuleBtn.addEventListener('click', function() {
      // Tạo một hàng mới trong bảng
      const newRow = document.createElement('tr');
      newRow.innerHTML = `
        <td>New Module</td>
        <td>Module description here...</td>
        <td><button class="remove-btn">Remove</button></td>
      `;
  
      // Thêm hàng mới vào bảng
      const tableBody = document.querySelector('#module-table tbody');
      tableBody.appendChild(newRow);
  
      // Thêm sự kiện cho nút "Remove"
      const removeBtn = newRow.querySelector('.remove-btn');
      removeBtn.addEventListener('click', function() {
        newRow.remove();
      });
    });
  } else {
    console.log('Add New Module Group button not found');
  }

  // Thêm hành động cho nút Import
  if (importBtn) {
    importBtn.addEventListener('click', function() {
      importFileInput.click();  // Mở hộp thoại chọn tệp
    });
  }

  // Xử lý khi người dùng chọn tệp import
  importFileInput.addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function(e) {
        const data = e.target.result;

        // Giả sử dữ liệu là JSON, bạn có thể xử lý nó tại đây
        const parsedData = JSON.parse(data);
        console.log('Imported Data:', parsedData);

        // Bạn có thể sử dụng dữ liệu này để cập nhật bảng, ví dụ:
        const tableBody = document.querySelector('#module-table tbody');
        parsedData.forEach(item => {
          const newRow = document.createElement('tr');
          newRow.innerHTML = `
            <td>${item.name}</td>
            <td>${item.description}</td>
            <td><button class="remove-btn">Remove</button></td>
          `;
          tableBody.appendChild(newRow);
        });
      };
      reader.readAsText(file);  // Đọc tệp dưới dạng văn bản
    }
  });

  // Thêm hành động cho nút Export
  if (exportBtn) {
    exportBtn.addEventListener('click', function() {
      // Lấy tất cả dữ liệu từ bảng
      const rows = document.querySelectorAll('#module-table tbody tr');
      const data = Array.from(rows).map(row => {
        return {
          name: row.cells[0].textContent,
          description: row.cells[1].textContent
        };
      });

      // Chuyển dữ liệu thành chuỗi JSON
      const jsonData = JSON.stringify(data, null, 2);
      
      // Tạo tệp để tải xuống
      const blob = new Blob([jsonData], { type: 'application/json' });
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = 'modules.json';  // Tên tệp xuất
      link.click();  // Tải tệp xuống
    });
  }
});
