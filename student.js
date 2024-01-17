class Student {
    constructor(name, age, gender) {
        this.name = name
        this.age = age
        this.gender = gender
        this.subjects = []
    }
    addSubject(subject) {
        this.subjects.push(subject)
    }
    quitSubject(subject) {
        let index = this.subjects.indexOf(subject)
        this.subjects.splice(index, 1)
    }
}

export default Student