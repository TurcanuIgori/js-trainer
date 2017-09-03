function Person(id, name) {
    this.id = id;
    this.name = name;
}

Person.prototype.sayAboutMe = function () {
    console.log('Hello my id is \'' + this.id + '\' and my name is \'' + this.name + '\'!');
}

var person = new Person(1, 'be-happy');
person.sayAboutMe();

class Student extends Person{
    
    constructor(id, name) {
        super(id, name);
        this.id = id;
        this.name = name;
    }

    toString() {
        console.log('Hello my id is \'' + this.id + '\' and my name is \'' + this.name + '\'!');
    }
}

var student = new Student(2, 'be-happy-student');
student.sayAboutMe();