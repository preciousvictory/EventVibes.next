export type ButtonProps = {
  children: React.ReactNode;
  to?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outlinePrimary' | 'outlineSecondary' | 'gray';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  className?: string;
  isExternal?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  disabled?: boolean;
};

export type GradientProps = {
  children: React.ReactNode;
  className?: string;
};

export type MainProps = {
  children: React.ReactNode;
  className?: string;
};

export type InputLayoutProps = {
  children: React.ReactNode;
  className?: string;
};