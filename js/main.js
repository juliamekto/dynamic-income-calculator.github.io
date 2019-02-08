document.addEventListener("DOMContentLoaded", function(event) {
//   PROFIT CALCULATOR
    let rng = document.getElementById('populationNumRng'), 
    peopleNumber = document.getElementById('populationNumOutput'),
    familyNumber = document.getElementById('familyNum'),
    chequeNumber = document.getElementById('ChequeNum'),
    monthProfitNumber = document.getElementById('monthProfit'),
    grossProfitNumber = document.getElementById('grossProfit');


    function countProfit(range) {
    let rangeVal,
            peopleNum,
            familyNum,
            chequeNum,
            monthProfitNum,
            grossProfitNum,
    calculation = {};

    peopleNum = +(range.value);
    familyNum = (peopleNum / 3).toFixed(0);
    chequeNum = (peopleNum / 3 * 0.021).toFixed(0);
    monthProfitNum = ((peopleNum / 3) * 0.021 * 301 / 12).toFixed(1);
    grossProfitNum = (peopleNum / 3 * 0.021 * 301 * 0.43 / 12).toFixed(1);
    
    calculation.peopleNum = peopleNum;
    calculation.familyNum = familyNum;
    calculation.chequeNum = chequeNum;
    calculation.monthProfitNum = monthProfitNum;
    calculation.grossProfitNum = grossProfitNum;
    
    return calculation; 
    }

    function writeInProfit(caclResult) {
    peopleNumber.innerHTML = caclResult.peopleNum;
    familyNumber.innerHTML = caclResult.familyNum;
    chequeNumber.innerHTML = caclResult.chequeNum;
    monthProfitNumber.innerHTML = caclResult.monthProfitNum;
    grossProfitNumber.innerHTML = caclResult.grossProfitNum;
    }	

    function calcProfit() {
    writeInProfit(countProfit(rng));
    }

    rng.addEventListener('input', calcProfit);

});