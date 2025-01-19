function changePreview(designImage, codeImage, fileHref, fileName) {
  // Cập nhật hình ảnh preview
  document.getElementById('design-preview').src = `image/${designImage}`;
  document.getElementById('code-preview').src = `image/${codeImage}`;
  
  // Cập nhật liên kết tải xuống
  const downloadLink = document.getElementById('download-link');
  downloadLink.href = fileHref;
  downloadLink.download = fileName;

  // Cập nhật tiêu đề cho phần nội dung chính
  const titleMap = {
    'design1.jpg': 'Course Management',
    'design2.jpg': 'Study Notes',
    'design3.jpg': 'Track Progress',
    'design4.jpg': 'Community'
  };
  document.querySelector('.main-content .title').textContent = titleMap[designImage];
}


document.querySelectorAll('.menu-item').forEach(item => {
  item.addEventListener('click', function() {
    // Loại bỏ lớp 'active' khỏi tất cả các menu-item
    document.querySelectorAll('.menu-item').forEach(btn => btn.classList.remove('active'));
    // Thêm lớp 'active' vào menu-item vừa được nhấn
    this.classList.add('active');
  });
});
