//call Method
let a = { name: "anshu" };

function printName(c) {
  console.log("my name is " + this.name + " my class is " + c);
}
//  the second argument will be paramter of that function 
printName.call(a,"Bca")

// apply method 

// the only differnce is in aplly we have to pass the fucntion arguement inside the array

let b = { name: "anshu" };

function printName2(c) {
  console.log("my name is " + this.name + " my class is " + c);
}

printName2.apply(b,["Bca"])

//  bind method 

