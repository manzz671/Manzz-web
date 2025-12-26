// Efek animasi sederhana di tombol chat
document.addEventListener("DOMContentLoaded", () => {
  const chatLink = document.querySelector(".chat-link");
  chatLink.addEventListener("mouseover", () => {
    chatLink.innerText = "🚀 Ayo ngobrol sekarang!";
  });
  chatLink.addEventListener("mouseout", () => {
    chatLink.innerText = "💬 Chat dengan kami sekarang";
  });
});
