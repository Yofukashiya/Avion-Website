const noticeEl = document.querySelector(".notice");

if (noticeEl) {
	const noticeCloseBtn = noticeEl.querySelector(".notice__close");
	noticeCloseBtn.addEventListener("click", () => {
		noticeEl.classList.toggle("notice--hidden");
	});
}
