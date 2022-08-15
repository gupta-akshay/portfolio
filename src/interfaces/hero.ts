export interface HeroTypes {
  icons: Icons;
  mainImg: NodeOrMainImg;
  mainPdf: MainPdf;
  id: string;
}
export interface Icons {
  edges?: EdgesEntity[] | null;
}
export interface EdgesEntity {
  node: NodeOrMainImg;
}
export interface NodeOrMainImg {
  childImageSharp: ChildImageSharp;
}
export interface ChildImageSharp {
  fluid: Fluid;
}
export interface Fluid {
  src: string;
}
export interface MainPdf {
  edges?: EdgesEntity1[] | null;
}
export interface EdgesEntity1 {
  node: Node;
}
export interface Node {
  publicURL: string;
}
