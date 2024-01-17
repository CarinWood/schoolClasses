import School from './school.js'
import Student from './student.js'
import Teacher from './teacher.js'
import Subject from './subject.js'

let disneySchool = new School(
    "Disney School", 
    "Schoolstreet 1", 
    "123 45",
    "School City"
    )

let math = new Subject("Math")
let swedish = new Subject("Swedish")
let music = new Subject("Music")


let donald = new Student("Donald Duck", 17, "male")
let minnie = new Student("Minnie Mouse", 16, "female")
let mickey = new Student("Mickey Mouse", 16, "male")
let pluto = new Student("Pluto", 17, "male")
let goofy = new Student("Goofy", 18, "male")

let joakim = new Teacher("Joakim von Anka")
let daisy = new Teacher("Daisy Duck")

disneySchool.students.push(donald)
disneySchool.students.push(minnie)
disneySchool.students.push(mickey)
disneySchool.students.push(pluto)
disneySchool.students.push(goofy)

export { disneySchool, math, swedish, music, donald, minnie, mickey, pluto, goofy, joakim, daisy }