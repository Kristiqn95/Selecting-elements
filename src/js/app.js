import "../scss/app.scss";

  window.addEventListener("DOMContentLoaded", () => {
    setTimeout(function() {
      document.querySelectorAll('.card:not(.active)').forEach(function(element) {
        element.style = 'display:none;'
      });
    }, 3000);
});
