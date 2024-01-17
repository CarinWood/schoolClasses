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
}

export default Student