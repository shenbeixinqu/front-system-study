var name = "window"

function Person(name) {
  this.name = name
  this.foo1 = function() {
    console.log(this.name)
  }
  this.foo2 = () => console.log(this.name)
  this.foo3 = function() {
    return function() {
      console.log(this.name)
    }
  }
  this.foo4 = function() {
    return () => {
      console.log(this.name)
    }
  }
}

var person1 = new Person('person1')
var person2 = new Person('person2')

person1.foo1()                  //  隐式 person1
person1.foo1.call(person2)      //  显式 person2

person1.foo2()                  //  上一层  person1
person1.foo2.call(person2)      //  上一层  person1

person1.foo3()()                // 默认  window
person1.foo3.call(person2)()    // 默认  window
person1.foo3().call(person2)    // 显示  person2

person1.foo4()()                // 上一层  person1
person1.foo4.call(person2)()    // 上一层  person2
person1.foo4().call(person2)    // 上一层  person1