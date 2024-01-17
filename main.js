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
        subject.quitStudent(student)
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

inspectSubject(swedish)
studentQuitsSubject(goofy, swedish)
inspectSubject(swedish)