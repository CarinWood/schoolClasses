class Teacher {
    constructor(name) {
        this.name = name
        this.subjects = []
    }
    addSubject(subject) {
        this.subjects.push(subject)
    }
}

export default Teacher