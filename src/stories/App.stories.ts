import type { Meta, StoryObj } from "@storybook/vue3";
import App from "../App.vue";

const meta: Meta<typeof App> = {
  title: "Example/App",
  component: App,
  render: () => ({
    components: { App },
    template: "<App />",
  }),
};

export default meta;
type Story = StoryObj<typeof App>;

export const Default: Story = {};
