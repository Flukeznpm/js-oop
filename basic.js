// * Static Property = Property ที่สามารถเรยีกใช้งานได้โดยตรง ไม่ต้องผ่าน Object การสร้างเหมือนตอนสร้าง Property ทั่วไป เพียงแค่เติม static นำหน้า property , การเรียกใช้ className.property
// * Static Method = การสร้างเติม static นำหน้า method , className.method , !!มันจะทำงานกับแค่แก๊ง static เหมือนกันได้เท่านั้น

// * Accessor
// * คือคำสั่งที่ช่วยในการจัดการ Property แบบสามารถเจาะจงได้ จะมี Get กับ Set

// * สร้าง Class
class User {
	// * Property
	// * Public
	// name = "name"
	// password = "password"

	// * Private
	#name
	#password
	static type = "ผู้ใช้งานระบบ"
	static database = []

	// * Parameter construtor
	constructor(name, password) {
		this.#name = name
		this.#password = password
		// this.showDetail()
	}

	// * method
	showDetail() {
		console.log(`ชื่อผู้ใช้ ${this.#name} , รหัส ${this.#password}`);
	}

	// * setter
	setName(newName) {
		this.#name = newName
	}

	// * setter Accessor
	set Name(newName) {
		this.#name = newName
	}

	// * getter
	getName() {
		return this.#name
	}

	// * getter Accessor
	get Name() {
		return this.#name
	}

	static showType() {
		console.log("ฉันเป็นผู้ใช้งานระบบ")
	}

	static addUser(user) {
		this.database.push(user)
	}
}

// * สร้าง Object
const user1 = new User("user1", "12345");
// user1.setName("Flukee")
// user1.showDetail()
// console.log(user1.getName());

// * Test Accessor
console.log(user1.Name);
user1.Name = "Flukee"
console.log(user1.Name);

// * Test static property, static method
console.log(User.type)
User.showType()
const user3 = new User("user3", "1150");
User.addUser(user3)
User.database.forEach((user) => {
	user.showDetail()
})