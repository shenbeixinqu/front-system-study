var name = "window"

var person = {
  name: "person",
  sayName: function() {
    console.log(this.name)
  }
}

function sayName() {
  var sss = person.sayName;

  sss();  // 默认绑定  this -> window

  person.sayName();  // 隐式绑定 this -> person

  (person.sayName)();  // 隐式绑定  this -> person

  (b = person.sayName)();  //  间接函数引用 this -> window
}

sayName()