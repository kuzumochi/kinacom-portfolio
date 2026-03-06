// アイコン関連
export type IconName = "arrow-right" | "arrow-left" | "window" | "grid";
export type IconPos = "before" | "after";

// リンク
export type LinkVariant = "text" | "button";

// icon ありパターン
type WithIcon = {
  variant?: LinkVariant;
  href: string;
  icon: IconName;
  iconPos?: IconPos;
  className?: string[];
  target?: string;
  fullWidth?: boolean;
};

// icon なしパターン
type WithoutIcon = {
  variant?: LinkVariant;
  href: string;
  icon?: never;
  iconPos?: never;
  className?: string[];
  target?: string;
  fullWidth?: boolean;
};

export type LinkProps = WithIcon | WithoutIcon;