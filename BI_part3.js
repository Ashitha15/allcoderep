//question 1 from part3 assignment

// var myDog = {
//     name : "Princy",
//     legs: 4,
//     tails: 1,
//     friends: ["Browny", "Hash"]
// }
// console.log(myDog)

//question: 2

// var testObj = {
//     hatValue: "ballcap",
//     shirtValue: "jersey"
// }
// var hatValueval = testObj.hatValue
// var shirtValueval = testObj.shirtValue
// console.log(hatValueval)
// console.log(shirtValueval)

//question: 3

// var testObj = {
//     'an entree': "hamburger",
//     'the drink': "water"
// }
// testObj["an entree"]
// testObj["the drink"]

//question 4 is same as 3
//question: 5

// var testObj = {
//     playerNumber: 16,
//     player: "Montana"
// }
// var myPlayer = "player"
// var play = testObj[myPlayer]
// console.log(play)

//question: 6

// var myDog = {
//     name: "coder",
//     legs: 4,
//     tails: 1,
//     friends: ["Everybody"]
// }
// myDog.name = "Happy coder"
// console.log(myDog)
// //question: 7
// myDog.bark = "Woof"
// console.log(myDog)
// //question: 8
// delete myDog["tails"]
// console.log(myDog)

//question: 9

// var lookup = {
//     alpha: "Adams",
//     bravo: "Boston",
//     charlie: "Chicago",
//     delta: "Denver",
//     echo: "Easy",
//     foxtrot: "Frank",
//     "": " "
// }
// var val = lookup["alpha"]
// console.log(val)

//question: 10

// var checkObj = {
//     gift: "pony",
//     pet: "kitten",
//     bed: "sleigh"
// }
// var check1 = checkObj.hasOwnProperty("gift")
// var check2 = checkObj.hasOwnProperty("pet")
// var check3 = checkObj.hasOwnProperty("house")
// console.log(check1)
// console.log(check2)
// console.log(check3)

//question: 11

// var myMusic = [
//     {
//     "artist": "Zyan",
//     "title": "Trampolean",
//     "release_year": 2019,
//     "formats": [
//         "Spotify",
//         "Disk",
//         "Radio"
//     ]
// }
// ]
// console.log(myMusic)

//question: 12

// var myStorage = {
//     gloveBoxContents: "maps",
//     desk: {
//         "top drawer": "Accessiories",
//         "bottom drawer": "Shoes"
//     },
//     cabinet: "Clothes"
// }
// console.log(myStorage.gloveBoxContents)
// console.log(myStorage.desk["top drawer"])

//question: 13

// var myTress = [
//     {
//         tree1: "neem",
//         size1: [
//             "tiny",
//             "small",
//             "large"
//         ]
//     },
//     {
//         tree2: "pine",
//         size2: [
//             "medium",
//             "very large",
//             "very tiny"
//         ]
//     }
// ]
// console.log(myTress[1].size2[2])

//question: 14


// function music() {
//     var records = {
//         id: 367463,
//         prop: "Tracks",
//         value: " "
//     }
//     if(prop != "Tracks" || value != " ") {
//         prop == value
//     }
// }
// music()

//question: 15

// var myArray = [];
// var i = 5;
// while(i >= 0) {
//     myArray.push(i)
//     console.log(i)
//     i--;
// }
// console.log(myArray)

//question: 16

// var ourArray = []
// for(var i = 1; i <= 5; i++) {
//     ourArray.push(i)
// }
// console.log(ourArray)

//question: 17

// var myArray = []
// for(i = 1; i <= 9; i += 2) {
//     myArray.push(i)
// }
// console.log(myArray)

//question: 18

// var myArray = []
// for(var i = 9; i >= 1; i -= 2) {
//     myArray.push(i)
// }
// console.log(myArray)

//question: 19

// var myArr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
// for(var total = 0; total < myArr.length; total++) {
//     console.log(myArr[total])
// }

//question 20 is same as 19th
//question: 21

// var multiplyAll = [
//     [1], [2], [3]
// ]
// var multiplyAll2 = [
//     [1,2], [3,4], [5,6,7]
// ]
// var multiplyAll3 = [
//     [5,1], [0.2,4,0.5], [3,9]
// ]
// var sum = 1
// for(var i = 0; i < multiplyAll2.length; i++) {
//     for(var j = 0; j < multiplyAll2[i].length; j++)
//     sum = sum * multiplyAll2[[i][j]]
// }
// console.log(sum)

//question: 22

// var add = function(arr, n) {
//     if(n <= 0) {
//         return 0
//     } else {
//         return add(arr, n - 1) + arr[n - 1]
//     }
// }
// console.log(add([1], 0))
// console.log(add([2, 3, 4], 1))
// console.log(add([2, 3, 4, 5], 3))

//question: 23

// var contacts = {
//     "Kristian": "lastName",
//     "Sherlock": "likes",
//     "Harry": "likes"}
// function lookUpProfile(name, prop) {
//     for (let x = 0; x < contacts.length; x++) {
//       if (contacts[x].firstName === name) {
//         if (contacts[x].hasOwnProperty(prop)) {
//           return contacts[x][prop];
//         } else {
//           return "No such property";
//         }
//       }
//     }
//     return "No such contact";
//   }
//   console.log(lookUpProfile("Kristian", "lastName"))
//   console.log(lookUpProfile("Sherlock", "likes"))

//question: 24

// function randomFraction(num) {
//     return Math.floor(Math.random() * num)
// }
// console.log(Math.random(1))

//question: 25

// function randomFraction(min, max) {
//     max = Math.ceil(max)
//     min = Math.floor(min)
//     return Math.floor(Math.random() * (max - min + 1)) + min
// }
// console.log(randomFraction(0, 9))

//question: 26

// function convertToInteger(str) {
//     var num = parseInt(str)
//     return str
// }
// console.log(convertToInteger("1000"))
// console.log(convertToInteger("JamesBond"))

//question: 27

// function checkEqual(a , b) {
//     return a == b ? "Equal" : "Not Equal"
// }
// console.log(checkEqual(2 , 2))

//question: 28

// function checkSign(a) {
//     return (a > 0) ? "Number is positive" 
//     : (a < 0) ? "Number is nagative" : "Number is zero"
// }
// console.log(checkSign(0))

//question: 29

function countDown(n) {
    if(n <= 5) {
        return []
    } else {
        var countArr = countDown(n + 1)
        countArr.push(n)
        return countArr
        n++
    }
}
console.log(countDown(1))





