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

function tinhTyLe() {
  const tong = soDuyet + soTuChoi;
  if (tong > 0) {
    tyLeDuyetElem.textContent = `${Math.round((soDuyet / tong) * 100)}%`;
  }
}

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

document.getElementById("danhsachhangdoi").addEventListener("click", (e) => {
  const dong = e.target.closest(".dongbaiviet");
  if (!dong) return;

  const id = dong.dataset.id;
  const ten = dong.querySelector(".tenbai").textContent;

  if (e.target.classList.contains("nutduyet")) {
    dong.remove();
    soChoDuyetElem.textContent = --soCho;
    soXuatBanElem.textContent = ++soDuyet;
    tinhTyLe();
    capNhatHoatDong(id, "duyet");

    noiDungThongBao.textContent = `Đã phê duyệt và xuất bản: ${ten}`;
    thongBaoDuyet.classList.remove("an");

    clearTimeout(henGioThongBao);
    henGioThongBao = setTimeout(() => {
      thongBaoDuyet.classList.add("an");
    }, 3500);
  }

  if (e.target.classList.contains("nuttuchoi")) {
    baiDangChon = { dong, id };
    tieuDeLyDo.textContent = `Lý do từ chối bài "${ten}":`;
    modalTuChoi.classList.remove("an");
  }
});

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

document.getElementById("nuthuy").onclick = () => {
  baiDangChon = null;
  modalTuChoi.classList.add("an");
};