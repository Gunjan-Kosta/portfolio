document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".btn, .btn-small");

  buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
      const ripple = document.createElement("span");
      ripple.className = "ripple";
      ripple.style.left = e.offsetX + "px";
      ripple.style.top = e.offsetY + "px";
      button.appendChild(ripple);
      setTimeout(() => ripple.remove(), 600);
    });
  });

  const resumeBtn = document.getElementById("resumeBtn");
  if (resumeBtn) {
    resumeBtn.addEventListener("click", (e) => {
      if (resumeBtn.getAttribute("href") === "#") {
        e.preventDefault();
        alert("Resume download link is not available yet!");
      }
    });
  }
});
