import { Badge } from "./badge";
export default {
  title: "Компоненты/Badge",
  component: Badge,
  parameters: {
    layout: "centered",
    status: {
      type: "stable", // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
  tags: ["autodocs"],
};

export const SizeBase = {
  args: {
    text: "Badge text",
    size: "base",
    appearance: "blue",
  },
};

export const BadgeSizeBase = {
  args: {
    text: "Badge text",
    size: "base",
    appearance: "blue",
  },
};

export const Outlined = {
  args: {
    text: "Badge text",
    size: "base",
    appearance: "blue",
    outlined: true,
  },
};
