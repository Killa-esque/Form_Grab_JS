//Khai báo object
var taxi = new Taxi();
// Lấy loại xe
function getType() {
    var type;
    if (document.getElementById('uberX').checked) {
        return document.getElementById('uberX').value;
    }
    else if (document.getElementById('uberSUV').checked){
        return document.getElementById('uberSUV').value;
    }
    else if (document.getElementById('uberBlack').checked) {
        return document.getElementById('uberBlack').value;
    }
    else{
        alert('Vui lòng chọn loại xe')
    }
}
// Dom to get value for object
document.querySelector("#btnTinhTien").onclick = function () {
    var thanhTien = document.querySelector('#xuatTien');
    var divthanhTien = document.querySelector('#divThanhTien');
    taxi.soKM = document.querySelector("#soKM").value;
    taxi.loaiTaxi = getType();
    taxi.watingTime = document.querySelector("#thoiGianCho").value;
    divthanhTien.style.display = 'block';
    thanhTien.innerHTML = taxi.moneyTotal();
    renderInvoice();
};
function renderInvoice(){
    var contentHTML = '';
    if (taxi.soKM <= 1){
        contentHTML += `
                        <tr>
                        <td>${taxi.loaiTaxi}</td>
                        <td>${taxi.getFirstKM} km</td>
                        <td>${taxi.getPriceEachType(taxi.getFirstKM)}</td>
                        <td>${taxi.getPriceEachType(taxi.getFirstKM) * 1}</td>
                        </tr>
                        <tr>
                        <td>Thời gian chờ</td>
                        <td>${taxi.getWaitTime()}</td>
                        <td>${taxi.getPriceWaitTimeType()}</td>
                        <td>${taxi.getPriceWaitTimeType() * taxi.getWaitTime()}</td>
                        </tr>
                        <tr class="bg-success">
                        <td>Total</td>
                        <td></td>
                        <td></td>
                        <td>${taxi.getPriceWaitTimeType() * taxi.getWaitTime() + taxi.getPriceEachType(taxi.getFirstKM)}</td>
                        </tr>
                    `
    }
    else if (taxi.soKM <= 20){
        contentHTML += `
                <tr>
                    <td>${taxi.loaiTaxi}</td>
                    <td>${taxi.getFirstKM} km</td>
                    <td>${taxi.getPriceEachType(taxi.getFirstKM)}</td>
                    <td>${taxi.getPriceEachType(taxi.getFirstKM) * 1}</td>
                </tr>
                <tr>
                    <td>${taxi.loaiTaxi}</td>
                    <td>${taxi.getSecondKM}  km</td>
                    <td>${taxi.getPriceEachType(taxi.getSecondKM)}</td>
                    <td>${taxi.getPriceEachType(taxi.getSecondKM) * taxi.getSecondKM}</td>
                </tr>
                <tr>
                    <td>Thời gian chờ</td>
                    <td>${taxi.getWaitTime()}</td>
                    <td>${taxi.getPriceWaitTimeType()}</td>
                    <td>${taxi.getPriceWaitTimeType() * taxi.getWaitTime()}</td>
                </tr>
                <tr class="bg-success">
                    <td>Total</td>
                    <td></td>
                    <td></td>
                    <td>${taxi.getPriceWaitTimeType() * taxi.getWaitTime() + taxi.getPriceEachType(taxi.getFirstKM) + taxi.getPriceEachType(taxi.getSecondKM) * taxi.getSecondKM}</td>
                </tr>
            `
    }
    else{
        contentHTML +=`
                <tr>
                    <td>${taxi.loaiTaxi}</td>
                    <td>${taxi.getFirstKM} km</td>
                    <td>${taxi.getPriceEachType(taxi.getFirstKM)}</td>
                    <td>${taxi.getPriceEachType(taxi.getFirstKM) * 1}</td>
                </tr>
                <tr>
                    <td>${taxi.loaiTaxi}</td>
                    <td>${taxi.getSecondKM} km</td>
                    <td>${taxi.getPriceEachType(taxi.getSecondKM)}</td>
                    <td>${taxi.getPriceEachType(taxi.getSecondKM) * taxi.getSecondKM}</td>
                </tr>
                <tr>
                    <td>${taxi.loaiTaxi}</td>
                    <td>${taxi.getLastKM()} km</td>
                    <td>${taxi.getPriceEachType(taxi.getLastKM())}</td>
                    <td>${taxi.getPriceEachType(taxi.getLastKM()) * taxi.getLastKM()}</td>
                </tr>
                <tr>
                    <td>Thời gian chờ</td>
                    <td>${taxi.getWaitTime()}</td>
                    <td>${taxi.getPriceWaitTimeType()}</td>
                    <td>${taxi.getPriceWaitTimeType() * taxi.getWaitTime()}</td>
                </tr>
                <tr class="bg-success">
                    <td>Total</td>
                    <td></td>
                    <td></td>
                    <td>${taxi.getPriceEachType(taxi.getLastKM()) * taxi.getLastKM() + taxi.getPriceWaitTimeType() * taxi.getWaitTime() + taxi.getPriceEachType(taxi.getFirstKM) + taxi.getPriceEachType(taxi.getSecondKM) * taxi.getSecondKM}</td>
                </tr>
            `
    }
    console.log(contentHTML)
    document.querySelector('#tbodyInvoice').innerHTML = contentHTML;
}
