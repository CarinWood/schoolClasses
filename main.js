import { disneySchool, math, swedish, music, donald, minnie, mickey, pluto, goofy, joakim, daisy } from './init.js';

   
    function displayAllStudents() {
        for (const student in disneySchool.students) {
                console.log(disneySchool.students[student].name)
        }
    }

     function inspectTeacher(teacher) {
        console.log("Teacher: " + teacher.name)
        teacher.subjects.forEach(subject => {
            console.log("Subject: " + subject.name)
    });
    }

    joakim.subjects.push(math)
    inspectTeacher(joakim)

    math.students.push(donald)
    console.log(math.students) 

    displayAllStudents()
 