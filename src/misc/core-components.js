import components from "./import-file.js";

(function () {
  window.vsComponents = components;

  return components;
})();

console.log(window);
