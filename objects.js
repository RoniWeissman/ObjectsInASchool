var id = 1;


function Student(firstName, lastName, grade) {
    this.id = id++;
    this.firstName = firstName;
    this.lastName = lastName;
    this.grade = grade;
    this.sections = [];
    this.addSection = function(Section) {
        this.sections.push(Section);
    }
}

    function Teacher(firstName, lastName, subject) {
    this.id = id++;
    this.firstName = firstName;
    this.lastName = lastName;
    this.subject = subject;
}

function Section(name, count) {
    this.id = id++;
    this.name = name;
    this.count = count;
    this.teacher = "";
    this.studentList = [];
    this.addStudent = function(Student) {
        this.studentList.push(Student);
    }
}