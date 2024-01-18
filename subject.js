class Subject {
    constructor(name) {
        this.name = name
        this.teacher = {}
        this.students = []
    }
    addTeacher(teacher) {
        this.teacher = teacher
    }
    addStudent(student) {
        this.students.push(student)
    }
    removeStudent(student) {
        let index = this.students.indexOf(student)
        this.students.splice(index, 1)
    }
    removeTeacher(teacher) {
        if(this.teacher === teacher) {
            this.teacher = {}
        }
    }
}

export default Subject