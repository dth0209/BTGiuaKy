# BÀI KIỂM TRA GIỮA KỲ - CSE122: PHÁT TRIỂN ỨNG DỤNG WEB CƠ BẢN

## 1. Thông tin sinh viên & Đề tài
- **Họ và tên:** Đặng Trung Hiếu
- **Mã sinh viên:** 2551060612
- **Tên đề tài BTL:** CultureTrail
- **Tên trang cá nhân thực hiện:** Trang Quản trị Duyệt bài viết (Admin Review Dashboard)

---

## 2. Các liên kết nộp bài (Bắt buộc)
| STT | Hạng mục | Liên kết |
|:---:|---|---|
| 1 | **Bản thiết kế Canva** | https://canva.link/xfdcwhmfzpvs0tq
| 2 | **GitHub Repository** | https://github.com/dth0209/BTGK-CSE122-67CNTT1
| 3 | **Video thuyết minh (03 phút)** | [Xem Video Youtube/Drive](https://...) |

> **Quy chuẩn tên video:** `CSE122-GK-SV20-Đặng Trung Hiếu-AdminReviewDashboard`

---

## 3. Mục đích của trang
- **Đối tượng sử dụng:** Quản trị viên (Admin) hoặc Biên tập viên kiểm duyệt nội dung.
- **Mục tiêu:** Cung cấp giao diện trực quan giúp quản trị viên theo dõi số liệu tổng quan (số bài chờ duyệt, đã xuất bản, bị từ chối), thực hiện thao tác duyệt nhanh, mở hộp thoại từ chối bài viết kèm lý do và xem thông báo xác nhận trạng thái trực tiếp trên màn hình.

---

## 4. Các chức năng chính của trang

### Giao diện & Bố cục
- **Thống kê tổng quan:** Hiển thị 4 thẻ số liệu (`.thethongke`) với các màu sắc đại diện cho trạng thái bài viết.
- **Thao tác nhanh:** Danh sách phím tắt chức năng với khối màu tương ứng.
- **Danh sách bài viết:** Hiển thị ảnh đại diện, tiêu đề, tác giả, nhãn trạng thái và cụm nút thao tác.
- **Responsive Web Design:** Hiển thị tối ưu trên màn hình Desktop (độ rộng khung 1400px) và tự động căn chỉnh khi thu nhỏ màn hình/Mobile.

### Chức năng tương tác JavaScript (Đạt yêu cầu Mục 4 của đề)
1. **Duyệt bài viết (Thay đổi trạng thái & Toast Message):**
   - Bấm nút **Duyệt**: Cập nhật nhãn trạng thái của bài viết từ `Chờ duyệt` sang `Đã xuất bản`.
   - Hiển thị thanh thông báo nổi ở đáy màn hình (`.thongbaoduyet`) trong 3 giây rồi tự biến mất.
2. **Mở / Đóng Modal Từ chối bài viết:**
   - Bấm nút **Từ chối**: Kích hoạt hộp thoại nhập lý do (`.lopmonen`).
   - Bấm **Hủy** hoặc click vùng ngoài: Đóng hộp thoại.
   - Bấm **Xác nhận**: Cập nhật nhãn trạng thái bài viết thành `Bị từ chối` và đóng modal.

---

## 5. Công nghệ sử dụng

- **HTML5:** 
  - Sử dụng đầy đủ Semantic HTML (`header`, `main`, `section`, `article`, `footer`).
  - Sử dụng đúng thẻ cho form (`form`, `label`, `input`, `textarea`, `button`).
- **CSS3:**
  - Bố cục đa chiều với **CSS Grid** (thẻ thống kê, chân trang) và **Flexbox** (dòng bài viết, thanh đầu trang, nút thao tác).
  - Biến màu, hiệu ứng chuyển động `hover`, bo góc và đổ bóng mượt mà.
  - Xử lý Responsive qua `@media (max-width: 768px)` tránh vỡ khung layout.
- **JavaScript (Vanilla JS):**
  - Khai báo chuẩn `const`, `let`.
  - DOM Manipulation: `querySelector`, `getElementById`, `classList.toggle/add/remove`, `textContent`.
  - Bắt sự kiện: `addEventListener('click', ...)` cho các nút duyệt, nút mở/đóng modal.

---

## 6. Cấu trúc thư mục dự án

```text
CSE122-GK-SV20-DangTrungHieu/
├── index.html        # Mã nguồn HTML chính của trang
├── css/
│   └── style.css     # Định dạng giao diện & Responsive CSS
├── js/
│   └── main.js       # Xử lý tương tác duyệt bài, modal, thông báo
├── assets/           # Thư mục chứa hình ảnh bài viết, icon, logo
└── README.md         # Báo cáo tổng quan trang kiểm tra giữa kỳ
