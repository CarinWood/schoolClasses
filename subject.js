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
}

export default Subject