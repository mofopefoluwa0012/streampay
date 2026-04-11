const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {

	if(navLinks.style.display === "flex"){
		navLinks.style.display = "none";
	}else{
		navLinks.style.display = "flex";
	}
 	menuToggle.classList.toggle('active');
});

// faq
const items = document.querySelectorAll(".faq-item");

items.forEach(item => {
	const question = item.querySelector(".faq-question");
    const icon = item.querySelector(".icon");

    question.addEventListener("click", () => {
      item.classList.toggle("open");
      question.classList.toggle("active");

      if (item.classList.contains("open")) {
        icon.textContent = "➖";
      } else {
        icon.textContent = "➕";
      }
    });
});
