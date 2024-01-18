import { disneySchool, math, swedish, music, donald, minnie, mickey, pluto, goofy, joakim, daisy } from './init.js';

   
    function displayAllStudents() {
        for (const student in disneySchool.students) {
                console.log("Name: " + disneySchool.students[student].name)
                console.log("Age: " + disneySchool.students[student].age)
                console.log("Gender " + disneySchool.students[student].gender)
                disneySchool.students[student].subjects.forEach(subject => {
                    console.log("Subject: " + subject.name)
            });
            console.log("**************")
        }
    }

    function displayAllTeachers() {
        for (const teacher in disneySchool.teachers) {
            console.log("Teacher: " + disneySchool.teachers[teacher].name)
            disneySchool.teachers[teacher].subjects.forEach((subject) => {
                console.log("Subject: " + subject.name)
            })    
            console.log("************")       
        }
    }

    function addSubjectToTeacher(subject, teacher) {
        teacher.addSubject(subject)
        subject.addTeacher(teacher)
    }

    function addSubjectToStudent(student, subject) {
        student.addSubject(subject)
        subject.addStudent(student)
    }

    function studentQuitsSubject(student, subject) {
        student.quitSubject(subject)
        subject.removeStudent(student)
    }

    function relegateStudent(student) {
        disneySchool.relegateStudent(student)
        student.subjects.forEach(subject => {
            subject.removeStudent(student)
        })
    }

    function fireTeacher(teacher) {
        disneySchool.fireTeacher(teacher)
        teacher.subjects.forEach(subject => {
            subject.removeTeacher(teacher)
        })
    }

     function inspectTeacher(teacher) {
        console.log("Teacher: " + teacher.name)
        teacher.subjects.forEach(subject => {
            console.log("Subject: " + subject.name)
    });
    }

    function inspectSubject(subject) {
        console.log("Subject: " + subject.name)
        let num = 1
        subject.students.forEach(student => {
            console.log("Student: " + num + ". " + student.name)
            num++
        })
        console.log("Teacher: " + subject.teacher.name)
    }

    function inspectStudent(student) {
        console.log("Name: " + student.name)
        console.log("Age: " + student.age)
        console.log("Gender: " + student.gender)
        console.log("Subjects: ")
        student.subjects.forEach(subject => {
            console.log("*" + subject.name)
        });
    }

addSubjectToTeacher(math, joakim)
addSubjectToTeacher(swedish, daisy)
addSubjectToTeacher(music, daisy)

addSubjectToStudent(donald, math)
addSubjectToStudent(minnie, swedish)
addSubjectToStudent(mickey, music)
addSubjectToStudent(mickey, swedish)
addSubjectToStudent(mickey, math)
addSubjectToStudent(pluto, music)
addSubjectToStudent(goofy, swedish)
addSubjectToStudent(goofy, music)

/* inspect a teacher */
/* inspectTeacher(daisy) */

/* inspect a student */
/* inspectStudent(mickey) */

/* Goofy quits swedish: */
/*     console.log("Goofy before quitting swedish: ")
    inspectStudent(goofy)
    studentQuitsSubject(goofy, swedish)
    console.log("********************")
    console.log("Goofy AFTER quitting swedish: ")
    inspectStudent(goofy) */


/* Relegate goofy: */

/* console.log("students before relegate Goofy:")
console.log("Total students in school: " + disneySchool.students.length)
relegateStudent(goofy)
console.log("**************************'")
console.log("students AFTER relegate Goofy:")
console.log("Total students in school: " + disneySchool.students.length)  */

/* Fire Joakim: */

/*  console.log("All teachers in school before fireing joakim: ")
displayAllTeachers()
inspectSubject(math)
fireTeacher(joakim)
console.log("All teachers in school after fireing joakim: ")
displayAllTeachers()
inspectSubject(math)  */