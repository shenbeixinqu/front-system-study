var name = "window"

var person1 = {
  name: "person1",
  foo1: function() {
    console.log(this.name)
  },
  foo2: () => console.log(this.name),
  foo3: function() {
    return function() {
      console.log(this.name)
    }
  },
  foo4: function() {
    // console.log(this) 
    /**
     * 第一个this  person1
     * 第二个this  person2
     * 第三个this  person1
     */
    return () => {
      console.log(this.name)
    }
  }
}

var person2 = { name: 'person2' }

person1.foo1()                    // this -> person1
person1.foo1.call(person2)        // this -> person2

person1.foo2()                    // this -> window        
person1.foo2.call(person2)        // this -> window

person1.foo3()()                  // this -> window
person1.foo3.call(person2)()      // this ->  window
person1.foo3().call(person2)      // this ->  person2

person1.foo4()()                  // this -> person1
person1.foo4.call(person2)()      // this -> person2
person1.foo4().call(person2)      // this -> person1
