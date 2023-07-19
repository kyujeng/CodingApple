
var money = 60000;
var twoYearsMoney = 0;
function twoYears() {
    if (money >= 50000) {
       var oneYearsMoney = money + (money * 0.2);
        twoYearsMoney = oneYearsMoney + (oneYearsMoney * 0.2);
        // 1년 후의 이자 붙은 금액과 2년 후의 이자 붙은 금액을 따로 나눌 필요 없이, twoYearsMoney = money * 0.2 * 0.2; 로 하면 더 쉽다...
    } else if (money < 50000) {
        var oneYearsMoney = money + (money * 0.15);
        twoYearsMoney = oneYearsMoney + (oneYearsMoney * 0.15);
    }
}
twoYears();
console.log(twoYearsMoney);
