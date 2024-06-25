// create a university management system for department wise student along with name class and course 
// in typescript 

// step no 1 create class
class University {
    departments: {name: string; students:Students[] } [] = [];

    addDepartments(name: string) {
        this.departments.push({name, students:[]})
    }
    showDepartments(){
        console.log("Name Of Deperments In University:")
        this.departments.forEach((dept) => console.log(` * ${dept.name}`))
    }

showStudents() {
    console.log("Students:")
    this.departments.forEach((dept) => {
        console.log(` - ${dept.name} Department:`)
        dept.students.forEach((student) => console.log(` - ${student.name} - Balance: ${student.balance}`))
    })
}
}

interface Students {
    name: string;
    courses: string[];
    balance: number;
}
// add department details
const university = new University()
university.addDepartments("web department")
university.addDepartments("engineering")

// add student details


// web department details
university.departments[0].students.push({name: "Arsalan", courses: [], balance: 1000})

// engineering department details
university.departments[1].students.push({name: "Kamran", courses: [], balance: 5000})

// invoking
university.showDepartments()
university.showStudents()










