function ngayHientai() {
    var toDay = new Date();
    return ("ngày "+ toDay.getDate() +" tháng " + toDay.getMonth()+1 + " năm " + toDay.getFullYear());
}
function reSet() {
    document.getElementById("bam1").value = "";
    document.getElementById("manhinh1").value = "";
}
function hienthi(value) {
    var bien1 = document.getElementById("bam1").value += value;
    sessionStorage.bien1 = bien1;

}
function tinhs() {
    var x = document.getElementById("bam1").value;
    var y = eval(x);
    if (y == Infinity) {
        document.getElementById("manhinh1").value = "Không thể chia cho 0";
    }
    else if (y == null) {
        document.getElementById("manhinh1").value = "Nhập số để tính toán";
    }
    else {
        document.getElementById("manhinh1").value = y;
    }
}
function dienDulieu() {
    document.getElementById("bam1").value = sessionStorage.bien1;
}
function trolai() {
    dienDulieu();
}