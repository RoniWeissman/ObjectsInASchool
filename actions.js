function studentAdding() {
    var firstDiv = document.getElementById("studentAdding");
    var table = "<table border='.25'>";
    table += "<tr id=\"inputStudent\">\n" +
        "        <th id=\"firstNameS\"><input type=\"text\" id=\"studentFirstName\" placeholder=\"student first name\" size=\"25\"></th>\n" +
        "        <th id=\"lastNameS\"><input type=\"text\" id=\"studentLastName\" placeholder=\"student last name\" size=\"25\"></th>\n" +
        "        <th>\n" +
        "            <select id=\"gradeS\">\n" +
        "                <option value=\"not selected\">--Grade Level--</option>\n" +
        "                <option value=\"9\">9</option>\n" +
        "                <option value=\"10\">10</option>\n" +
        "                <option value=\"11\">11</option>\n" +
        "                <option value=\"12\">12</option>\n" +
        "            </select>\n" +
        "        </th>\n" +
        "        <th id=\"studentAdd\"><button id=\"addStudent\" onclick=\"addStudent()\">Add Student</button></th>\n" +
        "    </tr>";

    firstDiv.innerHTML = table;

    var studentAdd = document.getElementById("studentAdding");
    var teacherAdd = document.getElementById("teacherAdding");
    var sectionAdd = document.getElementById("sectionAdding");
    studentAdd.style.display = "inline";
    teacherAdd.style.display = "none";
    sectionAdd.style.display = "none";

    var sDiv = document.getElementById("sList");
    var tDiv = document.getElementById("tList");
    var sectionDiv = document.getElementById("sectionList");
    sDiv.style.display = "none";
    tDiv.style.display = "none";
    sectionDiv.style.display = "none";
    var addingStoSection = document.getElementById("addingStoSection");
    addingStoSection.style.display = "none";
    document.getElementById("searchReturn").style.display = "none";
}

function teacherAdding() {
    var firstDiv = document.getElementById("teacherAdding");
    var table = "<table border='.25'>";
    table += "<tr>\n";
        table += "<th id=\"firstNameT\"><input type=\"text\" id=\"teacherFirstName\" placeholder=\"teacher first name\" size=\"25\"></th>\n";
        table += "<th id=\"lastNameT\"><input type=\"text\" id=\"teacherLastName\" placeholder=\"teacher last name\" size=\"25\"></th>\n";
        table += "<th id='subjectT'><select id='teacherSubject'>";
        //this doesn't work
        for(var i = 0; i < allSections.length; i++) {
            table += "<option value='" + allSections[i].id + "'>" + allSections[i].name + "</option>";
        }
        table += "</select></th>";
        table += "<th id=\"teacherAdd\"><button id=\"addTeacher\" onclick=\"addTeacher()\">Add Teacher</button></th>\n";
        table += "</tr>";
    firstDiv.innerHTML = table;

    var studentAdd = document.getElementById("studentAdding");
    var teacherAdd = document.getElementById("teacherAdding");
    var sectionAdd = document.getElementById("sectionAdding");
    var studentAddToSection = document.getElementById("studentToSection");
    studentAddToSection.style.display = "none";
    studentAdd.style.display = "none";
    teacherAdd.style.display = "inline";
    sectionAdd.style.display = "none";
    var sDiv = document.getElementById("sList");
    var tDiv = document.getElementById("tList");
    var sectionDiv = document.getElementById("sectionList");
    sDiv.style.display = "none";
    tDiv.style.display = "none";
    sectionDiv.style.display = "none";
    var addingStoSection = document.getElementById("addingStoSection");
    addingStoSection.style.display = "none";
    document.getElementById("searchReturn").style.display = "none";
}

function SectionAdding() {
    var firstDiv = document.getElementById("sectionAdding");
    var table = "<table border='.25'>";
    table += "<tr>\n";
        table += "<th id=\"NameOfSection\"><input type=\"text\" id=\"SectionName\" placeholder=\"section name\" size=\"25\"></th>\n";
        table += "<th id=\"Students\"><input type=\"text\" id=\"NumOfStudents\" placeholder=\"number of students in section\" size=\"25\"></th>\n";
        table += "<th id=\"sectionAdd\"><button id=\"addSection\" onclick=\"addSection()\">Add Section</button></th>\n";
        table += "</tr>";
    firstDiv.innerHTML = table;

    var studentAdd = document.getElementById("studentAdding");
    var teacherAdd = document.getElementById("teacherAdding");
    var sectionAdd = document.getElementById("sectionAdding");
    var studentAddToSection = document.getElementById("studentToSection");
    studentAddToSection.style.display = "none";
    studentAdd.style.display = "none";
    teacherAdd.style.display = "none";
    sectionAdd.style.display = "inline";
    var sDiv = document.getElementById("sList");
    var tDiv = document.getElementById("tList");
    var sectionDiv = document.getElementById("sectionList");
    sDiv.style.display = "none";
    tDiv.style.display = "none";
    sectionDiv.style.display = "none";
    var addingStoSection = document.getElementById("addingStoSection");
    addingStoSection.style.display = "none";
    document.getElementById("searchReturn").style.display = "none";
}

function addStudent() {
    var firstName = document.getElementById("studentFirstName").value;
    var lastName = document.getElementById("studentLastName").value;
    var grade = document.getElementById("gradeS").value;
    allStudents.push(new Student(firstName, lastName, grade));
    console.log(allStudents);

}

function getSectionById(sectionID) {
    for(var i = 0; i < allSections.length; i++) {
        if(allSections[i].id === sectionID) {
            return allSections[i];
        }
    }
}

function getStudentById(studentID) {
    for(var i = 0; i < allStudents.length; i++) {
        if(allStudents[i].id === parseInt(studentID)) {
            return allStudents[i];
        }
    }
}

function getTeacherById(teacherID) {
    for(var i = 0; i <allTeachers.length; i++) {
        if(allTeachers[i].id === parseInt(teacherID)) {
            return allTeachers[i];
        }
    }
}

function scheduleAppear() {
    var buttonDiv = document.getElementById("scheduleS");
    buttonDiv.innerHTML = "<button id=\"scheduleStudent\" onclick=\"addStudentToSection()\">Schedule Student</button>";

    var selectBoxC = "<select id='selectionClassList'>";
    var selectionDivS = document.getElementById("selectionSList");
    var selectBox = "<select id='sSelectionList'>";
    for(var i = 0; i < allStudents.length; i++) {
        selectBox += "<option value='" + allStudents[i].id + "'>" + allStudents[i].firstName + " " + allStudents[i].lastName + "</option>";
    }
    for(var j = 0; j < allSections.length; j++) {
        selectBoxC += "<option value='" + allSections[j].id + "'>" + allSections[j].name + "</option>";
    }
    selectBox += "</select>";
    selectBoxC += "</select>";
    var selectionDivC = document.getElementById("ClassList");
    selectionDivC.innerHTML = selectBoxC;
    selectionDivS.innerHTML = selectBox;
    console.log(selectionDivS);
    console.log(selectionDivC);

    //makes the tables that aren't being used disappear.
    var sDiv = document.getElementById("sList");
    var tDiv = document.getElementById("tList");
    var sectionDiv = document.getElementById("sectionList");

    sDiv.style.display = "none";  // or could be 'block'
    tDiv.style.display = "none";
    sectionDiv.style.display = "none";

    //makes all of the adding teacher/student/section disappear.
    var studentAdd = document.getElementById("studentAdding");
    var teacherAdd = document.getElementById("teacherAdding");
    var sectionAdd = document.getElementById("sectionAdding");
    var studentAddToSection = document.getElementById("studentToSection");
    studentAddToSection.style.display = "none";
    studentAdd.style.display = "none";
    teacherAdd.style.display = "none";
    sectionAdd.style.display = "none";
    var addingStoSection = document.getElementById("addingStoSection");
    addingStoSection.style.display = "inline";
    document.getElementById("searchReturn").style.display = "none";
}



function addStudentToSection() {
    var student = getStudentById(document.getElementById("sSelectionList").value);
    console.log(student);
    var section = getSectionById(parseInt(document.getElementById("selectionClassList").value));
    console.log(section);
    section.addStudent(student);
    student.addSection(section);
    console.log(student.sections);
    console.log(section.studentList);

    //this changes the number of students enrolled in the class.
    section.count = (parseInt(section.count) + 1).toString();
    console.log(section.count);
}

function listStudentsEnrolled(sectionId) {
//makes a table with all the students in a section
    var section = getSectionById(sectionId);
    var table = "<table border='.25'>";
    table += "<tr><td>" + 'Students Enrolled in ' + section.name + "</td>";
    table += "<td>" + 'grade' + "</td>";
    table += "<td>" + 'ID' + "</td></tr>";
    for(var i = 0; i < section.studentList.length; i++) {
        table += "<tr><td>" + section.studentList[i].firstName + " " + section.studentList[i].lastName + "</td>";
        table += "<td>" + section.studentList[i].grade + "</td>";
        table += "<td>" + section.studentList[i].id + "</td>";
        //this might not work
        table += "<td><button id='removeStudentFromSection' onclick='removeStudentFromSection(" + section.studentList[i].id + ", " + section.id + ")'>Remove Student</button></td>";
    }
    if(section.studentList.length === 0) {
        table += "<tr><td>No students in this section</td></tr>"
    }
    table += "</tr></table>";
    var Div = document.getElementById("studentToSection");
    Div.innerHTML = table;

    //makes the tables that aren't being used disappear.
    var sDiv = document.getElementById("sList");
    var tDiv = document.getElementById("tList");
    var sectionDiv = document.getElementById("sectionList");

    sDiv.innerHTML = table;
    sDiv.style.display = "none";  // or could be 'block'
    tDiv.style.display = "none";
    sectionDiv.style.display = "none";

    //makes this table appear on click
    var studentAddToSection = document.getElementById("studentToSection");
    studentAddToSection.style.display = "inline";

    //makes all of the adding teacher/student/section disappear.
    var studentAdd = document.getElementById("studentAdding");
    var teacherAdd = document.getElementById("teacherAdding");
    var sectionAdd = document.getElementById("sectionAdding");
    studentAdd.style.display = "none";
    teacherAdd.style.display = "none";
    sectionAdd.style.display = "none";
    var addingStoSection = document.getElementById("addingStoSection");
    addingStoSection.style.display = "none";
    document.getElementById("searchReturn").style.display = "none";
}

function removeStudentFromSection(studentID, sectionID) {
    console.log(studentID);
    var section = getSectionById(sectionID);
    for(i = 0; i < section.studentList.length; i++) {
        if(studentID === section.studentList[i].id) {
            console.log(section.studentList[i]);
            section.studentList.splice(i, 1);
            section.count = section.count - 1;
            console.log(section.studentList);
        }
    }
}

function addTeacher() {
    var firstName = document.getElementById("teacherFirstName").value;
    console.log(firstName);
    var lastName = document.getElementById("teacherLastName").value;
    var subject = document.getElementById("teacherSubject").value;
    allTeachers.push(new Teacher(firstName, lastName, subject));
    console.log(allTeachers);

    //this adds the teacher to the class they are teaching (adds them to that object)
    var subjectObject = getSectionById(parseInt(subject));
        for(var i = 0; i <allTeachers.length; i++) {
            if(allTeachers[i].firstName === firstName && allTeachers[i].lastName === lastName) {
                subjectObject.teacher = getTeacherById(allTeachers[i].id);
                console.log(subjectObject);
            }
    }
}


function addSection() {
    var sectionName = document.getElementById("SectionName").value;
    console.log(sectionName);
    var enrollment = document.getElementById("NumOfStudents").value;
    allSections.push(new Section(sectionName, enrollment));
    console.log(allSections);
}


function listStudents() {
    var table = "<table border='.25'>";
    table += "<tr><td>" + "First Name" + "</td>";
    table+= "<td>" + "Last Name" + "</td>";
    table+= "<td>" + "Grade Level" + "</td>";
    table += "<td>" + "Student ID" + "</td></tr>";
    for(var i = 0; i <allStudents.length; i++) {
        table += "<tr><td>" + allStudents[i].firstName + "</td>";
        table += "<td>" + allStudents[i].lastName + "</td>";
        table += "<td>" + allStudents[i].grade + "</td>";
        table += "<td>" + allStudents[i].id + "</td></tr>";
    }
    table += "</table>";

    //makes the tables that aren't being used disappear.
    var sDiv = document.getElementById("sList");
    var tDiv = document.getElementById("tList");
    var sectionDiv = document.getElementById("sectionList");

    sDiv.innerHTML = table;
    sDiv.style.display = "inline";  // or could be 'block'
    tDiv.style.display = "none";
    sectionDiv.style.display = "none";

    //makes all of the adding teacher/student/section disappear.
    var studentAdd = document.getElementById("studentAdding");
    var teacherAdd = document.getElementById("teacherAdding");
    var sectionAdd = document.getElementById("sectionAdding");
    var studentAddToSection = document.getElementById("studentToSection");
    studentAddToSection.style.display = "none";
    studentAdd.style.display = "none";
    teacherAdd.style.display = "none";
    sectionAdd.style.display = "none";
    var addingStoSection = document.getElementById("addingStoSection");
    addingStoSection.style.display = "none";
    document.getElementById("searchReturn").style.display = "none";
}

function listTeachers() {
    var table = "<table border='.25'>";
    table += "<tr><td>" + "First Name" + "</td>";
    table+= "<td>" + "Last Name" + "</td>";
    table += "<td>" + "Assignment" + "</td></tr>";
    for(var i = 0; i <allTeachers.length; i++) {
        table += "<tr><td>" + allTeachers[i].firstName + "</td>";
        table += "<td>" + allTeachers[i].lastName + "</td>";
        table += "<td>" + allTeachers[i].subject + "</td>";
    }
    table += "</table>";

    //makes the tables that aren't being used disappear.
    var sDiv = document.getElementById("sList");
    var tDiv = document.getElementById("tList");
    var sectionDiv = document.getElementById("sectionList");

    tDiv.innerHTML = table;

    tDiv.style.display = "inline";  // or could be 'block'
    sDiv.style.display = "none";
    sectionDiv.style.display = "none";

    //makes all of the adding teacher/student/section disappear.
    var studentAdd = document.getElementById("studentAdding");
    var teacherAdd = document.getElementById("teacherAdding");
    var sectionAdd = document.getElementById("sectionAdding");
    var studentAddToSection = document.getElementById("studentToSection");
    studentAddToSection.style.display = "none";
    studentAdd.style.display = "none";
    teacherAdd.style.display = "none";
    sectionAdd.style.display = "none";
    var addingStoSection = document.getElementById("addingStoSection");
    addingStoSection.style.display = "none";
    document.getElementById("searchReturn").style.display = "none";
}

function listSections() {
    var table = "<table border='.25'>";
    table += "<tr><td>" + "Class Name" + "</td>";
    table += "<td>" + "Enrolled" + "</td>";
    table += "<td>" + "Class ID" + "</td>";
    table += "<td>" + "Teacher" + "</td></tr>";
    for(var i = 0; i <allSections.length; i++) {
        table += "<tr><td>" + allSections[i].name + "</td>";
        table += "<td><a href='#' id='listEnrolled' onclick='listStudentsEnrolled(" + allSections[i].id + ")'>" + allSections[i].count + "</a></td>";
        table += "<td>" + allSections[i].id + "</td>";
        if(allSections[i].teacher === undefined) {
            table += "<td>" + "No Teacher Assigned" + "</td></tr>";
        } else {
            table += "<td>" + allSections[i].teacher.firstName + "</td></tr>";
            console.log(allSections[i].teacher);
        }

    }
    table += "</table>";

    //makes the tables that aren't being used disappear.
    var sDiv = document.getElementById("sList");
    var tDiv = document.getElementById("tList");
    var sectionDiv = document.getElementById("sectionList");

    sectionDiv.innerHTML = table;

    sectionDiv.style.display = "inline";
    sDiv.style.display = "none";
    tDiv.style.display = "none";

    //makes all of the adding teacher/student/section disappear.
    var studentAdd = document.getElementById("studentAdding");
    var teacherAdd = document.getElementById("teacherAdding");
    var sectionAdd = document.getElementById("sectionAdding");
    var studentAddToSection = document.getElementById("studentToSection");
    studentAddToSection.style.display = "none";
    studentAdd.style.display = "none";
    teacherAdd.style.display = "none";
    sectionAdd.style.display = "none";
    var addingStoSection = document.getElementById("addingStoSection");
    addingStoSection.style.display = "none";
    document.getElementById("searchReturn").style.display = "none";
}

function searchForStudent() {
    var input = document.getElementById("searchStudents").value;
    console.log(input);
    var table = "<table border='.25'>";
    for(var i = 0; i < allStudents.length; i++) {
        console.log(allStudents[i].firstName);
        if(allStudents[i].firstName === input || allStudents[i].id === input || allStudents[i].lastName === input) {
                table += "<tr><td>" + "Student Name: " + allStudents[i].firstName + " " + allStudents[i].lastName + "</td>";
                table += "<td>" + "Student ID: " + allStudents[i].id + "</td>";
                table += "<td>" + "Student Name: " + allStudents[i].grade + "</td></tr>";
                for(var j = 0; j < allStudents[i].sections.length; j++) {
                    console.log(allStudents[i].sections[j].name);
                    table += "<td>" + allStudents[i].sections[j].name + "</td></tr>";
                }
            }
        }
    table += "</table>";
    var div = document.getElementById("searchReturn");
    div.innerHTML = table;

    //makes the tables that aren't being used disappear.
    var sDiv = document.getElementById("sList");
    var tDiv = document.getElementById("tList");
    var sectionDiv = document.getElementById("sectionList");

    sectionDiv.innerHTML = table;

    sectionDiv.style.display = "none";
    sDiv.style.display = "none";
    tDiv.style.display = "none";

    //makes all of the adding teacher/student/section disappear.
    var studentAdd = document.getElementById("studentAdding");
    var teacherAdd = document.getElementById("teacherAdding");
    var sectionAdd = document.getElementById("sectionAdding");
    var studentAddToSection = document.getElementById("studentToSection");
    studentAddToSection.style.display = "none";
    studentAdd.style.display = "none";
    teacherAdd.style.display = "none";
    sectionAdd.style.display = "none";
    var addingStoSection = document.getElementById("addingStoSection");
    addingStoSection.style.display = "none";
    document.getElementById("searchReturn").style.display = "inline";
}



function keyCapture() {
    var keyPressed = event.which || event.keyCode;
    if(keyPressed === 13) {
        searchForStudent();
    }
}