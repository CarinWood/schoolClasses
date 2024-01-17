class School {
    constructor(name, address, zipcode, city) {
        this.name = name
        this.students = []
        this.teachers = []
        this.address = address
        this.zipcode = zipcode
        this.city = city
    }
    relegateStudent(student) {
        let index = this.students.indexOf(student)
        this.students.splice(index, 1)
    }
}


export default School