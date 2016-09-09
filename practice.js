//We're in a job interview. Answer the following questions (try to not look at your notes unless you have to).
  // 1) What is the purpose of the 'this keyword'?

    //this acts as a placeholder that represents the name of the obj. It's purpose is to make it so other functions can bind to it.

  // 2) What are the four rules that govern what the 'this keyword' is bound to and describe each?

      //implicit binding:
      //explicit binding:

  // 3) What is the difference between call and apply?

      //call invokes a function and passes in arguments. Apply invokes a function and passes in an array.

  // 4) What does .bind do?

      //.bind will return a function but does not invoke it. it is stored in a new variable.


//Next Problem

//Create an object called user which has the following properties.
  //username --> which is a string
  //email --> which is a string
  //getUsername --> which is a function that returns the current object's username property. *Don't use 'user' instead use the 'this' keyword*

    //Code Here
var user = {
  username: 'aaron',
  email: 'aaronanderson01@gmail.com',
  getUsername: function() {
    return this.username;
  }
};
//Now, invoke the getUsername method and verify you got the username of the object and not anything else.
user.getUsername();

//Next Problem


// Write the function definitions which will make the following function invocations function properly.
//Code Here
var Car = function(make, model, year, move) {
this.make = make;
this.model = model;
this.year = year;
this.currentspeed = 0;
this.move =  move;
this.moveCar = function() {
  this.move = this.move + 10;
return this.move;
};
};
//Function Invocations Here

var prius = new Car('Toyota', 'Prius', 2011, 0);
var mustang = new Car('Ford', 'Mustang', 2013, 50);

console.log(prius.moveCar()); //increments prius' move property by 10. Returns the new move property.
console.log(mustang.moveCar()); //increments mustang' move property by 10. Returns the new move property.

//Hint, you'll need to add a move property and write a moveCar function which is added to every object
//that is being returned from the Car function. You'll also need to use the 'this' keyword properly
//in order to make sure you're invoking moveCar on the right object (prius vs mustang).



//Continuation of previous problem

var getYear = function(){
  return this.year;

};

var theYearPrius = getYear.call(prius);
var theYearMustang = getYear.call(mustang);

//Above you're given the getYear function. Using your prius and mustang objects from above,
//use the proper syntax that will allow for you to call the getYear
//function with the prius then the mustang objects being the focal objects.
//*Don't add getYear as a property on both objects*.

//Note(no tests)


//New Problem

var myUser = {
 username: 'iliketurtles',
 age: 13,
 email: 'iliketurtles@gmail.com'
};

var getMyUsername = function() {
 return this.username;
};

var userName = getMyUsername.bind(myUser)(); //Fix this

//Above you're given an object, a function, and a setTimeout invocation. After 5 seconds, what will the getUsername
//function return?
//Note(no tests)

//undefined
//In the example above, what is the 'this keyword' bound to when getUsername runs?

  // It's bound to the window object.

//Fix the getMyUsername invocation so that userName will be equal to 'iliketurtles'.
