document.addEventListener("DOMContentLoaded", function () {
  // Kiểm tra và hiển thị thông báo thành công
  if (successMessage && successMessage !== "") {
    toastr.success(successMessage);
  }
  // Kiểm tra và hiển thị thông báo lỗi
  if (errorMessage && errorMessage !== "") {
    toastr.error(errorMessage);
  }
});

// Cấu hình tùy chọn cho Toastr
toastr.options = {
  closeButton: true,
  debug: false,
  newestOnTop: true,
  progressBar: true,
  positionClass: "toast-top-right",
  preventDuplicates: true,
  showDuration: "300",
  hideDuration: "1000",
  timeOut: "5000",
  extendedTimeOut: "1000",
  showEasing: "swing",
  hideEasing: "linear",
  showMethod: "fadeIn",
  hideMethod: "fadeOut",
};
