const noticeEl = document.querySelector(".notice");
const stepperEls = document.querySelectorAll(".stepper");

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
			stepperMinusBtnEl.classList.remove("stepper__btn--disabled");
			stepperPlusBtnEl.classList.remove("stepper__btn--disabled");

			if (stepperInputEl.value <= stepperMin) {
				stepperInputEl.value = stepperMin;
				count = stepperMin;
				stepperMinusBtnEl.classList.add("stepper__btn--disabled");
				stepperPlusBtnEl.classList.remove("stepper__btn--disabled");
			}

			if (stepperInputEl.value >= stepperMax) {
				stepperInputEl.value = stepperMax;
				count = stepperMax;
				stepperPlusBtnEl.classList.add("stepper__btn--disabled");
				stepperMinusBtnEl.classList.remove("stepper__btn--disabled");
			}
		});

		stepperPlusBtnEl.addEventListener("click", () => {
			count = Number(stepperInputEl.value);

			if (count < stepperMax) {
				count++;
				stepperInputEl.value = count;

				if (count !== stepperMin) {
					stepperMinusBtnEl.classList.remove(
						"stepper__btn--disabled"
					);
				}

				if (count === stepperMax) {
					stepperPlusBtnEl.classList.add("stepper__btn--disabled");
				}
			}
		});

		stepperMinusBtnEl.addEventListener("click", () => {
			count = Number(stepperInputEl.value);

			if (count > stepperMin) {
				count--;
				stepperInputEl.value = count;

				if (count !== stepperMax) {
					stepperPlusBtnEl.classList.remove("stepper__btn--disabled");
				}

				if (count === stepperMin) {
					stepperMinusBtnEl.classList.add("stepper__btn--disabled");
				}
			}
		});
	});
}
