import React from 'react';
export interface SiteMetaData {
  site: Site;
}
export interface Site {
  meta: Meta;
}
export interface Meta {
  title: string;
  description: string;
}

export interface ReactChildren {
  children: React.ReactNode;
}

export interface HeroProps {
  icons: Icons;
  mainImg: NodeOrMainImg;
  mainPdf: MainPdf;
  id: string;
}
export interface Icons {
  edges: (EdgesEntity)[];
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
  edges?: (EdgesEntity1)[] | null;
}
export interface EdgesEntity1 {
  node: Node;
}
export interface Node {
  publicURL: string;
}

export interface AboutProps {
  id: string;
}