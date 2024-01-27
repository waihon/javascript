class Developer {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName
  }
  
  getName() {
    return this.firstName + ' ' + this.lastName;
  }
}

class ReactDeveloper extends Developer {
  getJob() {
    return 'React Developer';
  }
}

var me = new ReactDeveloper('Waihon', 'Yew');
console.log(me.getName());
console.log(me.getJob());
