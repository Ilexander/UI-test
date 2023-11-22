import components from "@/misc/import-file.js";

const install = (Vue) => {
  Object.entries(components).forEach((component) => {
    const [name, path] = component;

    Vue.component(name, path);
  });
};

const library = {
  components,
  install
};

window.vstComponents = library;

export default library;
