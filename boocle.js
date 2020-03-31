//exercice1:
function addUp(num) {
	let sum = 0;
	for (let i = 1; i <= num; i++) {
		sum += i;
	}
	return sum;
}
console.log(addUp(5));

//exercice2:
let array = [ 1, 2, 3, 4 ];
function reverse(array) {
	return array.reverse();
}
console.log(reverse(array));

//exercice3:
let array = [ 1, 2, 3, 4, 5 ];
function last(array) {
	return array[array.length - 1];
}
console.log(last(array));

//exercice4:{

let arr1 = [ 1, 2, 3, 4 ];
let arr2 = [ 5, 6, 7, 8 ];

function concact(arr1, arr2) {
	return arr1.concat(arr2);
}
console.log(concact(arr1, arr2));

//exercice5:
let arr = [ 1, 2, 3, 4 ];

function pos(arr, item) {
	return arr.indexOf(item);
}
console.log(pos(arr, 1));

//exercice 6:
function getMultipliedArr(array) {
	return array.map((el) => el * 2);
}
console.log(getMultipliedArr([ 8, 10, 6 ]));

//exercice 7:
function wordLengths(array) {
	return array.map((el) => el.length);
}
console.log(wordLengths([ 'hello', 'simplon' ]));
//exercice 8:
function sum(input) {
	if (toString.call(input) !== '[object Array]') return false;

	var total = 0;
	for (var i = 0; i < input.length; i++) {
		if (isNaN(input[i])) {
			continue;
		}
		total += Number(input[i]);
	}
	return total;
}
console.log(sum([ 1, 2, 3 ]));

//exercice9:

var arr = [ 4, 5, 7, 8, 14, 45, 76 ];

function even(a) {
	return a.filter(function(val) {
		return val % 2 === 0;
	});
}

alert(even(arr));

//exercice10:
let array = [ 5, 10, 15, 20, 25 ];
function findLargestNum(array) {
	return Math.max(...array);
}
console.log(findLargestNum(array));

//exercice 11:

let array = [ 1, 6, 5, -213 ];
function findLargestNum(array) {
	return Math.min(...array);
}
console.log(findLargestNum(array));

//exercice 12:
var firstLast = function(arr) {
	return [ arr[0], arr[arr.length - 1] ];
};

console.log(firstAndLast([ 'chaima', 2, 'safa', 16 ]));
//exercice13:
function diff(array) {
	return Math.max(...array) - Math.min(...array);
}
console.log(diff([ 5, 10, 50, 200 ]));

//exercice 14:
function multipArr(array) {
	return;
	array.map((el) => el * array.length);
}
console.log(multipArr([ 8, 10, 6 ]));
//exercice15:
function multipArr(array) {
	return;
	array.map((el) => el * -1);
}
console.log(multipArr([ 8, 10, 6 ]));

//exercice16:
var arr = [ 'amira', 'amis', 'arme' ];

function longStr(str) {
	return str.filter(function(string) {
		return string.length == 4;
	});
}

console.log(longStr(arr));

//exercice 17:
function addEnding(array, ending) {
	return;
	array.map((el) => el + ending);
}
console.log(addEnding([ 'am', 'is', 'or' ], 'er'));

//exercice18:
function Null(a) {
	return a.filter(function(val) {
		return val != null;
	});
}

console.log(Null([ '4', null, '8' ]));

//exercice 19:
function Null(a) {
	return a.filter(function(val) {
		return val % 13 !== 0;
	});
}

console.log(Null([ '4', 26, '8' ]));
