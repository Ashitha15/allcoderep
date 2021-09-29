// function reusableFunction() {
//     console.log("Hi World");
//   }
//   reusableFunction();

//   function functionWithArgs(sum1, sum2) {
//     var sum = sum1+sum2;
//     console.log(sum);
//   }
//   functionWithArgs(1,2);

//   var myGlobal = 10
//   function fun1() {
//       oopsGlobal = 5
//       console.log(oopsGlobal)
//   }
//   fun1()

//   function myLocalScope() {
//     var myVar =  "yes";
//     console.log('inside myLocalScope', myVar);
//   }
//   myLocalScope();
//   console.log('outside myLocalScope', myVar);

// var outerWear = "T-shirt"
// function myFun() {
//     var outerWear = "Sweater"
//     return outerWear
// }
// myFun()

// function timesFive(num) {
//     return num*5;
//   }
//   timesFive(5);

//   var sum = 0
//   function addThree() {
//       sum = sum + 3
//   }
//   function addFive() {
//       sum = sum + 5
//   }
//   addThree()
//   addFive()

//   var processed = 0
//   function processArg(num) {
//       return(num + 3) / 5
//   }
//   processed = processArg(7)
//   console.log(processed)

// function welcomeToBooleans() {
//     return true
// }
// welcomeToBooleans()

// for(a=1; a<4; a++) {
//     if(a==2){
//     console.log(a)
//     continue
// }
// console.log(a)
// }

// var a=10
// var b=20
// return (a==b)
// function trueOrFalse(wasThatTrue) {
//     if(wasThatTrue) {
//       return "Yes, that was true"
//     } 
//     return "No, that was false"
//     trueOrFalse(true)
//     trueOrFalse(false)
// }

// function testEqual(val) {
//     if (val == 12) { 
//       return "Equal";
//     }
//     return "Not Equal";
//   }
//   console.log(testEqual(10));

// function testStrict(val) {
//     if (val === '7') {
//       return "Equal";
//     }
//     return "Not Equal";
//   }
//   console.log(testStrict(7));

// function compareEquality(a, b) {
//     if (a === b) { 
//       return "Equal";
//     }
//     return "Not Equal";
//   }
//   console.log(compareEquality(10, "10"));

// function testNotEqual(val) {
//     if (val != 99) { 
//       return "Not Equal";
//     }
//     return "Equal";
//   }
//   console.log(testNotEqual(10));

// function testStrictNotEqual(val) {
//     if (val !== 17) { 
//       return "Not Equal";
//     }
//     return "Equal";
//   }
//   console.log(testStrictNotEqual(10));

// function testGreaterThan(val) {
//     if (val>100) {  // Change this line
//       return "Over 100";
//     }
//     if (val>10) {  // Change this line
//       return "Over 10";
//     }
//     return "10 or Under";
//   }
//   console.log(testGreaterThan(50));

// function testGreaterOrEqual(val) {
//     if (val >= 20) {  
//       return "20 or Over";
//     }
//     if (val >= 10) {  
//       return "10 or Over";
//     }
//     return "Less than 10";
//   }
//   console.log(testGreaterOrEqual(10));

// function testLessThan(val) {
//     if (val < 25) {  
//       return "Under 25";
//     }
//     if (val < 55) {  
//       return "Under 55";
//     }
//     return "55 or Over";
//   }
//   console.log(testLessThan(10));

// function testLessOrEqual(val) {
//     if (val <= 12) {  
//       return "Smaller Than or Equal to 12";
//     }
//     if (val <= 24) {  
//       return "Smaller Than or Equal to 24";
//     }
//       return "More Than 24";
//   }
//   console.log(testLessOrEqual(10));

// function testLogicalAnd(val) {
//     if (val >= 25 && val <= 50) {
//         return "Yes";
//     }
//     return "No";
//   }
//   console.log(testLogicalAnd(10));

// function testLogicalOr(val) {
//   if (val < 10 || val > 20) {
//       return "Outside";
//     }
//     return "Inside";
//   }
//   console.log(testLogicalOr(15));

// function testElse(val) {
//     var result = "";
//     if (val > 5) {
//       result = "Bigger than 5";
//     } else {
//       result = "5 or smaller"
//     }
//     return result;
//   }
//   console.log(testElse(4));

// function testElseIf(val) {
//     if (val > 10) {
//       return "Greater than 10";
//     } else if (val < 5) {
//       return "Smaller than 5";
//     }else {return "Between 5 and 10";
//     }
//   }
//   console.log(testElseIf(7));

// function orderMyLogic(val) {
//     if (val < 5) {
//       return "Less than 5";
//     } else if (val < 10) {
//       return "Less than 10";
//     } else {
//       return "Greater than or equal to 10";
//     }
//   }
//   console.log(orderMyLogic(7));

// function testSize(num) {
//     if(num < 5) {
//       return "Tiny";
//     } else if(num < 10) {
//       return "Small";
//     } else if(num < 15) {
//       return "Medium";
//     } else if(num < 20) {
//       return "Large";
//     } else if(num >= 20) {
//       return "Huge"
//     } else {
//       return "Change Me";
//     }
//   }
//   console.log(testSize(7));

// var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];
// function golfScore(par, strokes) {
//   if(strokes == 1) {
//     return "Hole-in-one!";
//   } else if(strokes <= par-2) {
//     return "Eagle";
//   } else if(strokes == par-1) {
//     return "Birdie";
//   } else if(strokes==par) {
//     return "Par";
//   } else if(strokes == par + 1) {
//     return "Bogey";
//   }else if(strokes == par + 2) {
//     return "Double Bogey";
//   }else if(strokes >= par + 3) {
//     return "Go Home!";
//   }else {
//     return "Change Me";
//   }
// }
// console.log(golfScore(4, 6));

// function caseInSwitch(val) {
//     var answer = "";
//     switch(val) {
//       case 1:
//         return "alpha";
//         break;
//       case 2:
//         return "beta";
//         break;
//       case 3:
//         return "gamma";
//         break;
//       case 4:
//         return "delta";
//         break;
//     }
//     return answer;
//   }
//   console.log(caseInSwitch(1));

// function switchOfStuff(val) {
//     var answer = "";
//     switch(val) {
//       case 'a':
//         return "apple";
//         break;
//       case 'b':
//         return "bird";
//         break;
//       case 'c':
//         return "cat";
//         break;
//       default:
//         return "stuff";
//         break;
//     }
//     return answer;
//   }
//   console.log(switchOfStuff('a'));

// function sequentialSizes(val) {
//     var answer = "";
//     switch(val) {
//       case 1:
//       case 2:
//       case 3:
//         answer = "Low";
//         break;
//       case 4:
//       case 5:
//       case 6:
//         answer = "Mid";
//         break;
//       case 7:
//       case 8:
//       case 9:
//         answer = "High";
//         break;
//     }
//     return answer;
//   }
//   console.log(sequentialSizes(1));

// function chainToSwitch(val) {
//     var answer = "";
//     switch(val){
//       case 'bob':
//         answer = "Marley";
//         break;
//       case 42:
//         answer = "The Answer";
//         break;
//       case 1:
//         answer = "There is no #1";
//         break;
//       case 99:
//         answer = "Missed me by this much!";
//         break;
//       case 7:
//         answer = "Ate Nine";
//         break;
//     }
//     return answer;
//   }
//   console.log(chainToSwitch(7));

// function isLess(a, b) {
//    return a < b
//    }
//   console.log(isLess(10, 15));

var count = 0;

function cc(card) {
  switch(card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    case 10:
    case 'J':
    case 'Q':
    case 'K':
    case 'A':
      count--;
      break;
  }
  if(count > 0) {
    return count + " Bet";
  } else {
    return count + " Hold";
  }
}
console.log(cc(2); cc(3); cc(7); cc('K'); cc('A'));