let soCho = 2;
let soDuyet = 14;
let soTuChoi = 1;
let baiDangChon = null;
let henGioThongBao = null;

const soChoDuyetElem = document.getElementById("sochoduyet");
const soXuatBanElem = document.getElementById("soxuatban");
const soBiTuChoiElem = document.getElementById("sobituchoi");
const tyLeDuyetElem = document.getElementById("tyleduyet");

const modalTuChoi = document.getElementById("modaltuchoi");
const tieuDeLyDo = document.getElementById("tieudelydo");

const thongBaoDuyet = document.getElementById("thongbaoduyet");
const noiDungThongBao = document.getElementById("noidungthongbao");

// Cập nhật tỷ lệ duyệt %
function tinhTyLe() {
  const tong = soDuyet + soTuChoi;
  if (tong > 0) {
    tyLeDuyetElem.textContent = `${Math.round((soDuyet / tong) * 100)}%`;
  }
}

// Cập nhật trạng thái ở mục Hoạt động gần đây
function capNhatHoatDong(id, trangThai) {
  const dong = document.querySelector(`#danhsachhoatdong .dongbaiviet[data-id="${id}"]`);
  if (dong) {
    const nhan = dong.querySelector(".thetrangthai");
    if (trangThai === "duyet") {
      nhan.className = "thetrangthai daxuatban";
      nhan.textContent = "Đã xuất bản";
    } else {
      nhan.className = "thetrangthai bituchoi";
      nhan.textContent = "Bị từ chối";
    }
  }
}

// Bắt sự kiện trên danh sách bài viết cần duyệt
document.getElementById("danhsachhangdoi").addEventListener("click", (e) => {
  const dong = e.target.closest(".dongbaiviet");
  if (!dong) return;

  const id = dong.dataset.id;
  const ten = dong.querySelector(".tenbai").textContent;

  // 1. KHI BẤM DUYỆT (Chuẩn Ảnh 5)
  if (e.target.classList.contains("nutduyet")) {
    dong.remove();
    soChoDuyetElem.textContent = --soCho;
    soXuatBanElem.textContent = ++soDuyet;
    tinhTyLe();
    capNhatHoatDong(id, "duyet");

    // Hiển thị thanh thông báo nổi ở đáy màn hình
    noiDungThongBao.textContent = `Đã phê duyệt và xuất bản: ${ten}`;
    thongBaoDuyet.classList.remove("an");

    clearTimeout(henGioThongBao);
    henGioThongBao = setTimeout(() => {
      thongBaoDuyet.classList.add("an");
    }, 3500);
  }

  // 2. KHI BẤM TỪ CHỐI (Mở modal chuẩn Ảnh 6)
  if (e.target.classList.contains("nuttuchoi")) {
    baiDangChon = { dong, id };
    tieuDeLyDo.textContent = `Lý do từ chối bài "${ten}":`;
    modalTuChoi.classList.remove("an");
  }
});

// Bấm OK trong modal từ chối: Xóa bài khỏi hàng đợi
document.getElementById("nutok").onclick = () => {
  if (baiDangChon) {
    baiDangChon.dong.remove();
    soChoDuyetElem.textContent = --soCho;
    soBiTuChoiElem.textContent = ++soTuChoi;
    tinhTyLe();
    capNhatHoatDong(baiDangChon.id, "tuchoi");
    baiDangChon = null;
  }
  modalTuChoi.classList.add("an");
};

// Bấm HUỶ trong modal từ chối: Giữ nguyên bài, chỉ đóng modal
document.getElementById("nuthuy").onclick = () => {
  baiDangChon = null;
  modalTuChoi.classList.add("an");
};