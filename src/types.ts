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