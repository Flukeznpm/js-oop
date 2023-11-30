class User {
	// * Protected
	_name
	#password

	constructor(name, password) {
		this._name = name
		this.#password = password
	}

	showDetail() {
		console.log(`ชื่อผู้ใช้ ${this._name} , รหัส ${this.#password}`);
	}

	set Name(newName) {
		this._name = newName
	}

	set Password(newPassword) {
		this.#password = newPassword
	}

	get Name() {
		return this._name
	}

	get Password() {
		return this.#password
	}
}

class Teacher extends User {
	#course
	constructor(name, password, course) {
		super(name, password)
		this.#course = course
	}

	showDetail() {
		console.log(`ชื่อคุณครู ${this._name} สอนวิชา ${this.#course}`);
	}
}

class Student extends User {
	#score
	constructor(name, password, score) {
		super(name, password)
		this.#score = score
	}

	showDetail() {
		console.log(`ชื่อนักเรียน ${this._name} สอบได้ ${this.#score} คะแนน`);
	}
}

const user1 = new Teacher("teacher1", "2234", "Programming")
user1.showDetail()
const user2 = new Teacher("teacher2", "2234", "Math")
user2.showDetail()
const user3 = new Student("fluke", "234", 90)
user3.showDetail()
const user4 = new Student("fogus", "4444", 80)
user4.showDetail()