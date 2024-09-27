const diag_box = document.querySelector("#congratulation_diag");
async function formSubmitted(event) {
	event.preventDefault();
	const name = event.target.name.value;
	const age = event.target.age.value;
	const phone = event.target.phone.value;
	const email = event.target.email.value;
	const district = event.target.district.value;
	const village = event.target.village.value;
	fetch("https://72cf-103-49-115-214.ngrok-free.app/save-data", {
		method: "POST",
		headers: {
			"content-type": "application/json",
		},
		body: JSON.stringify({ name, age, district, village, phone, email }),
	})
		.then((res) => res.json())
		.then((data) => {
			if (data.message) {
				diag_box.show();
			}
		});
}

const inputFields = document
	.querySelectorAll("input")
	.forEach((ele) => ele.setAttribute("required", true));

document.querySelector("#modal-close").addEventListener("click", function (e) {
	diag_box.close();
});
