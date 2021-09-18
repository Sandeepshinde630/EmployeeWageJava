//UC-1
{
const IS_ABSENT = 0
let empCheck = Math.floor(Math.random() * 10) % 2;
if (empCheck == IS_ABSENT) {
    console.log("UC-1 Employee is ABSENT");
}else {
    console.log("Employee is Absent");
}
}
//UC 2-3
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;

function getWorkHours(empCheck){
switch (empCheck)
{
    case IS_PART_TIME:
        return PART_TIME_HOURS;
    case IS_FULL_TIME:
        return FULL_TIME_HOURS;
        default:
            return 0;
}
}
let empHrs = 0;
let empCheck = Math.floor(Math.random() * 10) % 3;
empHrs = getWorkHours(empCheck);
let empWage = empHrs * WAGE_PER_HOUR;
console.log(" Emp Wage" + empWage);


//  UC  6  Arrays
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;

function getWorkHours(empCheck){
switch (empCheck)
{
    case IS_PART_TIME:
        return PART_TIME_HOURS;
    case IS_FULL_TIME:
        return FULL_TIME_HOURS;
        default:
            return 0;
}
}
function calcDailyWage(empHrs)	 {
	return   empHrs	 *  WAGE_PER_HOUR  ;
} 

const MAX_HRS_IN_MONTH  =	 160  ;
const NUM_OF_WORKING_DAY = 20  ;
const totalEmpHrs  = 0  ;
const totalWorkingDays = 0 ;
const empDailyWageArr = new Array();

while ( totalEmpHrs <=  MAX_HRS_IN_MONTH  && totalworkingDays < NUM_OF_WORKING_DAYS)	 {
	totalWorkingDays++  ;
	let empCheck =Math.floor( Math.random()	 *10)% 3;
	let empHrs  =getworkingHors( empCheck  )  ;
	totalEmpHrs += empHrs;
	empDailyWageArr.push(calcDailyWage(empHrs));
} 

let empWage = calcDailyWage(totalEmpHrs);
console.log("UC6  -  Total  Days  :	 "+ totalworkingDays  + "Total Hrs  :"	 +  totalEmpHrs	 + "Emp Wage : " + empWage);

//UC 9 Arrow Functions

const findTotal = (totalVal, dailyVal) => {
    return totalVal + dailyVal;
}
let count = 0;
let totalHours = Array.from(empdailyHrsMap.values()).reduce(findTotal, 0);
let totalSalary = empDailyWageArr.filter(dailyWage => dailyWage > 0)
                .reduce(findTotal, 0);
                console.log("UC 9 - Emp Wage with arrow.:" + "tTotal Hours:" + totalHours + "Total Wages" + totalSalary);

let nonWorkingDays = new Array();
let partWorkingDays = new Array();
let fullWorkingDays = new Array();
empdailyHrsMap.forEach( (value, key , map ) => {
    if (value==8) fullWorkingDays.push(key);
    else if (value==4) partWorkingDays.push(key);
    else nonWorkingDays.push(key);
});
console.log("fullWorkingDays :" +fullWorkingDays);
console.log("partWorkingDays :" + partWorkingDays);
console.log("nonWorkingDays :" + nonWorkingDays);

//UC10 object Creation
{
let totalEmpHrs =0;
let totalWorkingDays=0;
let empDailyHrsAndWageArr = new Array();
while ( totalEmpHrs <=  MAX_HRS_IN_MONTH  && totalworkingDays < NUM_OF_WORKING_DAYS)	 {
	totalWorkingDays++  ;
	let empCheck =Math.floor( Math.random()	 *10)% 3;
	let empHrs  =getworkingHors( empCheck  )  ;
	totalEmpHrs += empHrs;
    empDailyHrsAndWageArr,push(
        {
            dayNum:totalWorkingDays,
            dailyHours:empHrs,
            dailyWage: calcDailyWage(empHrs),
            toString(){
                return '\nDat' + this.dayNum +' => Working Hours is ' + this.dailyHours
                        'And Wage Earned = ' + this.dailyWage
            },
        }
    );
}
console.log("UC10 :" + empDailyHrsAndWageArr);
}

//UC10A to UC11D using object functions along with Arrow functions
let totalWages = empDailyHrsAndWageArr
                 .filter(dailyHrsAndWage => dailyHrsAndWage.dailyWage > 0)
                 .reduce((totalWage, dailyHrsAndWage) => totalWage += dailyHrsAndWage.dailyWage, 0);
let totalHours = empDailyHrsAndWageArr
                 .filter(dailyHrsAndWage => dailyHrsAndWage.dailyWage > 0)
                 .reduce((totalHours, dailyHrsAndWage) => totalHours += dailyHrsAndWage.dailyHours, 0);
console.log("UC 11A Total Hours: " + totalHours + "Total Wages:" + totalWages);
