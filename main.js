// Bài 1
var tinhluong = document.getElementById("tinhluong");
tinhluong.onclick = function () {
    // Đầu vào
    var luong = document.getElementById("luong").value;
    var songaylam = document.getElementById("songaylam").value;
    // Xử lí
    var tong = luong * songaylam;
    var tl = "Tiền lương là:" + tong + " đồng";
    // Đầu ra
    // DOm tới thẻ div#daura
    var daura = document.getElementById("daura");
    // Nạp nội dung cho thẻ div#daura
    daura.innerHTML = tl;
    daura.className = "alert alert-success";
}

//Bài 2
var trungbinh = document.getElementById("trungbinh");
trungbinh.onclick = function () {
    //Đầu vào
    var so1 = document.getElementById("so1").value;
    var so2 = document.getElementById("so2").value;
    var so3 = document.getElementById("so3").value;
    var so4 = document.getElementById("so4").value;
    var so5 = document.getElementById("so5").value;
    //Xử lí
    // convert từ string => number
    so1 = parseInt(so1);
    so2 = parseInt(so2);
    so3 = parseInt(so3);
    so4 = parseInt(so4);
    so5 = parseInt(so5);
    var TB5so = (so1 + so2 + so3 + so4 + so5) / 5;
    var xuatTB = "Trung bình 5 số là:" + TB5so;
    // Đầu ra
    //DOM tới thẻ div#TB
    var TB = document.getElementById("TB");
    //Nạp nội dung cho thẻ div#TB
    TB.innerHTML = xuatTB;
    TB.className = "alert alert-success";
}
//bài 3
var quydoi = document.getElementById("quydoi");
quydoi.onclick = function () {
    //Đầu vào
    var soUSD = document.getElementById("soUSD").value;
    var gtmacdinh = 23500;
    //Xử lí
    //convert từ string=>number
    soUSD = parseInt(soUSD);
    gtmacdinh = parseInt(gtmacdinh);
    var qd = soUSD * gtmacdinh;
    var doitien = qd + ("Đồng")
    //Đầu ra
    //DOM tới thẻ div#xuattien
    var xuattien = document.getElementById("xuattien");
    //Nạp nội dung cho thẻ div#xuattien
    xuattien.innerHTML = doitien;
    xuattien.className = "alert alert-success";
}

// Bài 4
var dtcv = document.getElementById("dtcv");
dtcv.onclick = function () {
    // Đầu vào
    var dai = document.getElementById("dai").value;
    var rong = document.getElementById("rong").value;
    //Xử lí
    // convert từ string => number
    dai = parseInt(dai);
    rong = parseInt(rong);
    var dientich = dai * rong;
    var chuvi = (dai + rong) * 2;
    var cvdt = ("Diện tích:" + dientich) + ("Chu vi:" + chuvi);
    // Đầu ra
    // DOM tới thẻ div#xuatdtcv
    var xuatdtcv = document.getElementById("xuatdtcv");
    //Nạp nội dung cho thẻ div#xuatdtcv
    xuatdtcv.innerHTML = cvdt;
    xuatdtcv.className = "alert alert-success";
}

//Bài 5
var tong2kiso = document.getElementById("tong2kiso");
tong2kiso.onclick = function () {
    //Đầu vào

    var nhapso = document.getElementById("nhapso").value;
    //Xử lí 
    // Convert từ string=> number
    sohangchuc = parseInt(sohangchuc)
    sohangdonvi = parseInt(sohangdonvi)
    var sohangchuc = Math.floor(nhapso % 100 / 10);;
    var sohangdonvi = nhapso % 10;
    var cong2so = sohangchuc + sohangdonvi;
    // Đầu ra
    //DOM tới thẻ div#xuattong2kiso
    var xuattong2kiso = document.getElementById("xuattong2kiso")
    // Nạp nội dung cho thẻ div#xuattong2kiso
    xuattong2kiso.innerHTML = cong2so;
    xuattong2kiso.className = "alert alert-success";
}