document.addEventListener("DOMContentLoaded", () => {
  const menu = document.querySelector(".menu-btn"),
    nav = document.querySelector(".nav-links");
  if (menu) menu.addEventListener("click", () => nav.classList.toggle("show"));
  document
    .querySelectorAll(".nav-links a")
    .forEach((a) =>
      a.addEventListener("click", () => nav?.classList.remove("show")),
    );
  document.querySelectorAll(".faq-q").forEach((btn) =>
    btn.addEventListener("click", () => {
      const item = btn.closest(".faq-item");
      document.querySelectorAll(".faq-item").forEach((i) => {
        if (i !== item) i.classList.remove("open");
      });
      item.classList.toggle("open");
    }),
  );
  const observer = new IntersectionObserver(
    (entries) =>
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("visible");
          observer.unobserve(e.target);
        }
      }),
    { threshold: 0.12 },
  );
  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
  document.querySelectorAll("form[data-contact]").forEach((form) =>
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = form.querySelector("[name=name]")?.value || "",
        email = form.querySelector("[name=email]")?.value || "",
        phone = form.querySelector("[name=phone]")?.value || "",
        services = form.querySelector("[name=services]")?.value || "",
        message = form.querySelector("[name=message]")?.value || "";

      const subject = "Website enquiry from " + name;
      const body =
        "Name: " +
        name +
        "\n" +
        "Email: " +
        email +
        "\n" +
        "Phone / WhatsApp: " +
        phone +
        "\n" +
        "Services: " +
        services +
        "\n\n" +
        "Project details:\n" +
        message;

      window.open(
        `https://mail.google.com/mail/?view=cm&fs=1&to=hikmatkhn9@gmail.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`,
        "_blank",
      );
    }),
  );
  const toast = document.querySelector(".toast");
  document.querySelectorAll("[data-copy]").forEach((btn) =>
    btn.addEventListener("click", async () => {
      await navigator.clipboard?.writeText(btn.dataset.copy);
      if (toast) {
        toast.textContent = "Contact number copied";
        toast.classList.add("show");
        setTimeout(() => toast.classList.remove("show"), 1800);
      }
    }),
  );
});
