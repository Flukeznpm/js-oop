// * Encapsulation
// * ต้องรู้ Access Modifier = ระดับในการเข้าถึง Class, Property, Method มี 3 ระดับ
// * 1. Public = เข้าถึงได้หมด
// * 2. Protected = เกี่ยวข้งกับเรื่องของ Inheritance ทำให้ Class นั้นๆ สามารถเรียกใช้งานสมาชิกของ Class ที่ถูกกำหนดเป็น Protected ได้ (เครื่องหมาย _) เช่น เราPost FB แล้วถ้าเปิด Protected ก็คือจะมีเฉพาะคนที่เป็นเพื่อนของเราเท่านั้นที่สามารถเห็น Port ได้
// * 3. Private = (เครื่องหมาย #)จะมีแค่ Class ตัวเองเท่านั้นที่สามารถเข้าใช้งานได้

class User {
	name
	#password

	constructor(name, password) {
		this.name = name
		this.#password = password
	}

	showDetail() {
		console.log(`ชื่อผู้ใช้ ${this.name} , รหัส ${this.#password}`);
	}
}


// * สร้าง Object
const user1 = new User("user1", "12345");
user1.name = "flukee";
user1.password = "55555";
user1.showDetail();
