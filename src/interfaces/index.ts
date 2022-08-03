export interface BaffleTextPropTypes {
  text: string,
  callMethodTime: number,
  revealDuration: number,
  revealDelay: number,
  parentMethod: () => void,
}