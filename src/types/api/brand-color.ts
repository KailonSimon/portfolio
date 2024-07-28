export interface BrandColor {
  id: number;
  attributes: {
    createdAt: Date;    updatedAt: Date;    publishedAt?: Date;    primarycolor: string;
  };
}
export interface BrandColor_Plain {
  id: number;
  createdAt: Date;  updatedAt: Date;  publishedAt?: Date;  primarycolor: string;
}

export interface BrandColor_NoRelations {
  id: number;
  createdAt: Date;  updatedAt: Date;  publishedAt?: Date;  primarycolor: string;
}

export interface BrandColor_AdminPanelLifeCycle {
  id: number;
  createdAt: Date;  updatedAt: Date;  publishedAt?: Date;  primarycolor: string;
}
