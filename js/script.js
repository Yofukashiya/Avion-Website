const noticeEl = document.querySelector(".notice");
const stepperEls = document.querySelectorAll(".stepper");
const burgerEl = document.querySelector(".burger");

if (burgerEl) {
	const body = document.body;
	const menuEl = document.querySelector(".header__bottom");

	burgerEl.addEventListener("click", () => {
		burgerEl.classList.toggle("burger--active");
		menuEl.classList.toggle("header__bottom--active");
		body.classList.toggle("stop-scroll");
	});
}

if (noticeEl) {
	const noticeCloseBtn = noticeEl.querySelector(".notice__close");
	noticeCloseBtn.addEventListener("click", () => {
		noticeEl.classList.toggle("notice--hidden");
	});
}

if (stepperEls) {
	stepperEls.forEach((stepperEl) => {
		const stepperInputEl = stepperEl.querySelector(".stepper__input");
		const stepperMinusBtnEl = stepperEl.querySelector(
			".stepper__btn--minus"
		);
		const stepperPlusBtnEl = stepperEl.querySelector(".stepper__btn--plus");

		const stepperMin = Number(stepperInputEl.getAttribute("min"));
		const stepperMax = Number(stepperInputEl.getAttribute("max"));

		let count = Number(stepperInputEl.value);

		stepperInputEl.addEventListener("change", () => {
			stepperMinusBtnEl.disabled = false;
			stepperPlusBtnEl.disabled = false;

			if (stepperInputEl.value <= stepperMin) {
				stepperInputEl.value = stepperMin;
				count = stepperMin;

				stepperMinusBtnEl.disabled = true;
				stepperPlusBtnEl.disabled = false;
			}

			if (stepperInputEl.value >= stepperMax) {
				stepperInputEl.value = stepperMax;
				count = stepperMax;

				stepperPlusBtnEl.disabled = true;
				stepperMinusBtnEl.disabled = false;
			}
		});

		stepperPlusBtnEl.addEventListener("click", () => {
			count = Number(stepperInputEl.value);

			if (count < stepperMax) {
				count++;
				stepperInputEl.value = count;

				if (count !== stepperMin) {
					stepperMinusBtnEl.disabled = false;
				}

				if (count === stepperMax) {
					stepperPlusBtnEl.disabled = true;
				}
			}
		});

		stepperMinusBtnEl.addEventListener("click", () => {
			count = Number(stepperInputEl.value);

			if (count > stepperMin) {
				count--;
				stepperInputEl.value = count;

				if (count !== stepperMax) {
					stepperPlusBtnEl.disabled = false;
				}

				if (count === stepperMin) {
					stepperMinusBtnEl.disabled = true;
				}
			}
		});
	});
}
