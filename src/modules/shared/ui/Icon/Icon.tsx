import { iconMap } from "./iconsMap";

export type IconName = keyof typeof iconMap;

type IconProps = {
  name: IconName;
};

const Icon = ({ name }: IconProps) => {
  const IconComponent = iconMap[name];

  if (!IconComponent) {
    console.warn(`Icon with name "${name}" does not exist.`);
    return null;
  }

  return <IconComponent />;
};

export { Icon };
