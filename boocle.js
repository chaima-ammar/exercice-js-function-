
     let array = [500 , 600, 330, 4]
let i=0
for (let item of array){
  console.log(i, item)
  i++
}


let str = ""
let obj = {a: 1, b: 2, c: 3}

for (let prop in obj) {
  str = str + obj[prop]
}