import { ComponentMeta, ComponentStory } from "@storybook/react";

import UserInformation from "./UserInformation";

export default {
  title: "data-display/UserInformation",
  component: UserInformation,
} as ComponentMeta<typeof UserInformation>;

const Template: ComponentStory<typeof UserInformation> = (args) => (
  <UserInformation {...args} />
);

export const Default = Template.bind({});

Default.args = {
  name: "Arlly Cavalcanti",
  picture: "https://avatars.githubusercontent.com/u/64482343?v=4",
  rating: 5,
  description: "Web Developer",
  isRating: true,
};
