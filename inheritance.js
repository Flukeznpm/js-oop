class User {
	static type = "ผู้ใช้งานระบบ"
	static database = []
	#name
	#password

	constructor(name, password) {
		this.#name = name
		this.#password = password
	}

	static showType() {
		console.log("ฉันเป็นผู้ใช้งานระบบ")
	}

	static addUser(user) {
		this.database.push(user)
	}

	showDetail() {
		console.log(`ชื่อผู้ใช้ ${this.#name} , รหัส ${this.#password}`);
	}

	getName() {
		return this.#name
	}

	setName(newName) {
		this.#name = newName
	}

	set Name(newName) {
		this.#name = newName
	}

	set Password(newPassword) {
		this.#password = newPassword
	}

	get Name() {
		return this.#name
	}

	get Password() {
		return this.#password
	}
}

class Teacher extends User {
	#course
	constructor(name, password, course) {
		super(name, password) // * อ้างอิงไปที่ constructor แม่
		console.log("ฉันเป็นคุณครู");
		this.#course = course
	}
}

class Student extends User {
	#score
	constructor(name, password, score) {
		super(name, password) // * อ้างอิงไปที่ constructor แม่
		console.log("ฉันเป็นนักเรียน");
		this.#score = score
	}
}

// const user1 = new Teacher()
// user1.Name = "teacher1"
// user1.Password = "123" 
// user1.showDetail()

// const user1 = new Teacher("teacher2", "12345")
// user1.showDetail()
// const user2 = new Student("flukee", "12345")
// user2.showDetail()

// * Test ใช้งาน constructor ของ sub class
const user3 = new Teacher("teacher2", "2234", "Programming")
user3.showDetail()
const user4 = new Student("fogus", "234", 90)
user4.showDetail()