import { setup } from "@storybook/vue3";

import PrimeVue from "primevue/config";
import Button from "primevue/button";
import Toast from "primevue/toast";
import ToastService from "primevue/toastservice";

import "../src/assets/main.css";
import "primevue/resources/themes/saga-blue/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";

setup((app) => {
  app.use(PrimeVue);
  app.use(ToastService);

  app.component("Button", Button);
  app.component("Toast", Toast);
});

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
