import React from 'react';

import { Button } from './Button';
// myStories.stories.jsx
import { withDesign } from "storybook-addon-designs";

export default {
  title: "myStories",
  decorators: [withDesign],
};

export const myStory = () => <MyComponent />;

myStory.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/VAiTSvPRVvMyWl2GNLGtbW/Untitled?node-id=16%3A247&t=EXdQev8d6TFkWBeI-1",
  },
};