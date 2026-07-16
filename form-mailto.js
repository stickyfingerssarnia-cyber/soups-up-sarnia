(() => {
  const recipients = {
    "wf-form-Contact-Us": "sfsumanagement@gmail.com",
    "wf-form-Catering": "sfsumanagement@gmail.com",
  };

  for (const [formId, recipient] of Object.entries(recipients)) {
    const form = document.getElementById(formId);
    if (!form) continue;

    form.addEventListener(
      "submit",
      (event) => {
        event.preventDefault();
        event.stopImmediatePropagation();

        const data = new FormData(form);
        const lines = [];
        for (const [name, value] of data.entries()) {
          if (typeof value === "string" && value.trim()) {
            lines.push(`${name}: ${value.trim()}`);
          }
        }

        const subject = formId.includes("Catering")
          ? "Soup's Up catering inquiry"
          : "Soup's Up website inquiry";
        window.location.href = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join("\n"))}`;
      },
      true,
    );
  }
})();
