// Khi tải trang xong, hiển thị thông báo
window.onload = function() {
    alert("Chào mừng bạn đến với trang cá nhân của Lê Hoàng Anh!");
};

// Hover vào ảnh đại diện sẽ phóng to nhẹ
document.addEventListener('DOMContentLoaded', function() {
    const avatar = document.querySelector('img');
    if (avatar) {
        avatar.addEventListener('mouseover', function() {
            avatar.style.transform = 'scale(1.1)';
            avatar.style.transition = 'transform 0.3s ease';
        });

        avatar.addEventListener('mouseout', function() {
            avatar.style.transform = 'scale(1)';
        });
    }
});
