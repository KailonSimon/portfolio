export interface HeroSubtitle {
  id: number;
  attributes: {
    createdAt: Date;    updatedAt: Date;    publishedAt?: Date;    subtitle: string;
  };
}
export interface HeroSubtitle_Plain {
  id: number;
  createdAt: Date;  updatedAt: Date;  publishedAt?: Date;  subtitle: string;
}

export interface HeroSubtitle_NoRelations {
  id: number;
  createdAt: Date;  updatedAt: Date;  publishedAt?: Date;  subtitle: string;
}

export interface HeroSubtitle_AdminPanelLifeCycle {
  id: number;
  createdAt: Date;  updatedAt: Date;  publishedAt?: Date;  subtitle: string;
}
