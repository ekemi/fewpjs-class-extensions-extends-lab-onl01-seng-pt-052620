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

class Triangle extends Polygon {

}
