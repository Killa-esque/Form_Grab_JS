const   GRAB_CAR_1KM = 8000,
        GRAB_CAR_1TO20_KM = 12000,
        GRAB_CAR_FROM21_KM = 10000,
        GRAB_SUV_1KM = 9000,
        GRAB_SUV_1TO20_KM = 14000,
        GRAB_SUV_FROM21_KM = 12000,
        GRAB_BLACK_1KM = 10000,
        GRAB_BLACK_1TO20_KM = 16000,
        GRAB_BLACK_FROM21_KM = 14000,
        GRAB_CAR_WAIT = 2000,
        GRAB_SUV_WAIT = 3000,
        GRAB_BLACK_WAIT = 4000;

function Taxi() {
  this.soKM = 0;
  this.loaiTaxi = '';
  this.watingTime = 0;
  this.getFirstKM = 1;
  this.getSecondKM = 19;
  this.getLastKM = function () {
    return this.soKM > 20 ? this.soKM - 20 : 0;
  }
  this.getWaitTime = function () {
    return this.watingTime > 5 ? this.watingTime - 5 : 0;
  }
  this.checkKM = function (km) {
    return km <= 1 ? 1 :
            km <= 20 ? 2 :
              km > 20 ? 3 : 3
  }
  this.getPriceWaitTimeType = function () {
    if (this.loaiTaxi === 'Uber X'){
      return GRAB_CAR_WAIT;
    }
    else if (this.loaiTaxi === 'Uber SUV'){
      return GRAB_SUV_WAIT;
    }
    else {
      return GRAB_BLACK_WAIT;
    }
  }
  this.getPriceEachType = function (km) {
    if (this.loaiTaxi === 'Uber X'){
      return this.checkKM(km) === 1 ? GRAB_CAR_1KM :
                this.checkKM(km) === 2 ? GRAB_CAR_1TO20_KM :
                  this.checkKM(km) === 3 ? GRAB_CAR_FROM21_KM : GRAB_CAR_FROM21_KM
    }
    else if (this.loaiTaxi === 'Uber SUV'){
      return this.checkKM() === 1 ? GRAB_SUV_1KM :
                this.checkKM() === 2 ? GRAB_SUV_1TO20_KM :
                  this.checkKM() === 3 ? GRAB_SUV_FROM21_KM : GRAB_SUV_FROM21_KM
    }
    else {
      return this.checkKM() === 1 ? GRAB_BLACK_1KM :
                this.checkKM() === 2 ? GRAB_BLACK_1TO20_KM :
                  this.checkKM() === 3 ? GRAB_BLACK_FROM21_KM : GRAB_BLACK_FROM21_KM
    }

  }
  this.money1KM = function () {
    var tien = 0;
    if (this.loaiTaxi === "Uber X") {
      tien = GRAB_CAR_1KM;
    } else if (this.loaiTaxi === "Uber Black") {
      this.loaiTaxi = GRAB_BLACK_1KM;
    } else {
      this.loaiTaxi = GRAB_SUV_1KM;
    }
    return tien;
  }
  this.money1To20KM = function () {
    var tien = 0;
    if (this.loaiTaxi === "Uber X") {
      tien = GRAB_CAR_1KM + (this.soKM - 1) * GRAB_CAR_1TO20_KM;
    } else if (this.loaiTaxi === "Uber Black") {
      tien = GRAB_BLACK_1KM + (this.soKM - 1) * GRAB_BLACK_1TO20_KM;
    } else {
      tien = GRAB_SUV_1KM + (this.soKM - 1) * GRAB_SUV_1TO20_KM;
    }
    return tien;
  }
  this.moneyFrom21KM = function() {
    var tien = 0;
    if (this.loaiTaxi === "Uber X") {
        tien = GRAB_CAR_1KM + 19 * GRAB_CAR_1TO20_KM + (this.soKM - 20) * GRAB_CAR_FROM21_KM;
    } else if (this.loaiTaxi === "Uber Black") {
        tien = GRAB_BLACK_1KM + 19 * GRAB_BLACK_1TO20_KM + (this.soKM - 20) * GRAB_BLACK_FROM21_KM;
    } else {
        tien = GRAB_SUV_1KM + 19 * GRAB_SUV_1TO20_KM + (this.soKM - 20) * GRAB_SUV_FROM21_KM;
    }
    return tien;
  }
  this.moneyWait = function() {
    var tien = 0;
    if (this.watingTime > 5) {
        if (this.loaiTaxi === "Uber X") {
            tien = this.watingTime * GRAB_CAR_WAIT;
        } else if (this.loaiTaxi === "Uber Black") {
            tien = this.watingTime * GRAB_BLACK_WAIT;
        } else {
            tien = this.watingTime * GRAB_SUV_WAIT;
        }
    }
    return tien;
  }
  this.moneyTotal = function() {
    var payment = 0;
    if (this.soKM <= 1) {
        payment = this.money1KM() + this.moneyWait();
    } else if (this.soKM <= 20) {
        payment = this.money1To20KM() + this.moneyWait();
    } else {
        payment = this.moneyFrom21KM() + this.moneyWait();
    }
    return payment;
  }
}








