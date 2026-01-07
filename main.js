const style = document.createElement("style");
style.textContent = `
#model-LePhep,
.modal-backdrop,
.modal-content.form-horizontal {
  display: none !important;
}
`;
document.head.appendChild(style);
