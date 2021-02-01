// Your code here

class Polygon {
  constructor(arr){
    this.arr = arr
  }
  get countSides(){
    return parseInt(`${this.arr.length}`)
  }
  get perimeter(){
    let perimeter = this.arr.reduce((acc,av)=> acc +av);
    return perimeter;
  }
}

class Triangle extends Polygon{
  
const  first= this.arr[0]
  let second = this.arr[1]
  let third = this[2]

  let first_second = first + second
  let first_third = first + third
  let second_third = second + third
  if (first_second > thirf || first_third >second || second_third >first  ) {
    return "valid"
  }

}
