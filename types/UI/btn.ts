export const AllBtnTypes = {
  PRIMARY: "primary",
  OUTLINED: "outlined",
} as const;

type BtnTypes = (typeof AllBtnTypes)[keyof typeof AllBtnTypes];
export interface BtnProps {
  type?: BtnTypes;
}
