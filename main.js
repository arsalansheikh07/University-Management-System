// create a university management system for department wise student along with name class and course 
// in typescript 
// step no 1 create class
var University = /** @class */ (function () {
    function University() {
        this.departments = [];
    }
    University.prototype.addDepartments = function (name) {
        this.departments.push({ name: name, students: [] });
    };
    University.prototype.showDepartments = function () {
        console.log("Name Of Deperments In University:");
        this.departments.forEach(function (dept) { return console.log(" * ".concat(dept.name)); });
    };
    University.prototype.showStudents = function () {
        console.log("Students:");
        this.departments.forEach(function (dept) {
            console.log(" - ".concat(dept.name, " Department:"));
            dept.students.forEach(function (student) { return console.log(" - ".concat(student.name, " - Balance: ").concat(student.balance)); });
        });
    };
    return University;
}());
// add department details
var university = new University();
university.addDepartments("web department");
university.addDepartments("engineering");
// add student details
// web department details
university.departments[0].students.push({ name: "Arsalan", courses: [], balance: 1000 });
// engineering department details
university.departments[1].students.push({ name: "Kamran", courses: [], balance: 5000 });
// invoking
university.showDepartments();
university.showStudents();
