export interface HomePageTypes {
  path: string;
  location: Location;
  pageResources: PageResources;
  uri: string;
  data: Data;
  pageContext: DefaultOrPageContextOrComponentOrParams;
  serverData?: null;
  params: DefaultOrPageContextOrComponentOrParams;
}
export interface Location {
  pathname: string;
  search: string;
  hash: string;
  href: string;
  origin: string;
  protocol: string;
  host: string;
  hostname: string;
  port: string;
  state?: null;
  key: string;
}
export interface PageResources {
  component: DefaultOrPageContextOrComponentOrParams;
  head: Head;
  json: Json;
  page: Page;
  staticQueryResults: StaticQueryResults;
}
export interface DefaultOrPageContextOrComponentOrParams {
}
export interface Head {
  default: DefaultOrPageContextOrComponentOrParams;
}
export interface Json {
  data: Data;
  pageContext: DefaultOrPageContextOrComponentOrParams;
  serverData?: null;
}
export interface Data {
  site: Site;
}
export interface Site {
  meta: Meta;
}
export interface Meta {
  title: string;
  description: string;
}
export interface Page {
  componentChunkName: string;
  path: string;
  webpackCompilationHash: string;
  staticQueryHashes?: (string)[] | null;
}
export interface StaticQueryResults {
  3907883290: StaticQueryResultsValue;
}
export interface StaticQueryResultsValue {
  data: Data1;
}
export interface Data1 {
  icons: Icons;
  Img: NodeOrImg;
  Pdf: Pdf;
}
export interface Icons {
  edges?: (EdgesEntity)[] | null;
}
export interface EdgesEntity {
  node: NodeOrImg;
}
export interface NodeOrImg {
  childImageSharp: ChildImageSharp;
}
export interface ChildImageSharp {
  fluid: Fluid;
}
export interface Fluid {
  src: string;
}
export interface Pdf {
  edges?: (EdgesEntity1)[] | null;
}
export interface EdgesEntity1 {
  node: Node;
}
export interface Node {
  publicURL: string;
}
