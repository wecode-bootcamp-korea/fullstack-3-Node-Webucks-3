const nameObj = { 0: 'Alpha', 1: 'Beta', 2: 'Chalie' };
const ageObj = { 0: 24, 1: 32, 2: 27 };
const genderObj = { 0: 'Male', 1: 'Female', 2: 'Male' };

function getName(id) {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(nameObj[id]);
		}, 4200);
	});
}

function getAge(id) {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(ageObj[id]);
		}, 2700);
	});
}

function getGender(id) {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(genderObj[id]);
		}, 5600);
	});
}

async function main() {
	const startTime = new Date();

	const id = 0; // 0 ~ 2 내에서 자유롭게 바꾸세요!
	let name, age, gender; // get함수들을 써서 해당 변수에 값을 담아주세요!

	// 첫번째 수행시간 스크린샷. await 를 차례대로 썼을 때,
	// name = await getName(id);
	// age = await getAge(id);
	// gender = await getGender(id);
	// 두번째 수행시간 스크린샷. Promise.all 을 썼을 때,
	const result = await Promise.all([getName(id), getAge(id), getGender(id)]);

	const endTime = new Date();

	console.log(`두번째 수행시간: ${(endTime - startTime) / 1000}s`);

	// return {
	// 	name,
	// 	age,
	// 	gender,
	// };

	return {
		name: result[0],
		age: result[1],
		gender: result[2],
	};
}

main();
