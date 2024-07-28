import { Media } from './media';
import { AdminPanelRelationPropertyModification } from './admin-panel-relation-property-modification';

export interface Language {
  id: number;
  attributes: {
    createdAt: Date;    updatedAt: Date;    publishedAt?: Date;    name: string;
    image?: { data: Media };
  };
}
export interface Language_Plain {
  id: number;
  createdAt: Date;  updatedAt: Date;  publishedAt?: Date;  name: string;
  image?: Media;
}

export interface Language_NoRelations {
  id: number;
  createdAt: Date;  updatedAt: Date;  publishedAt?: Date;  name: string;
  image?: number;
}

export interface Language_AdminPanelLifeCycle {
  id: number;
  createdAt: Date;  updatedAt: Date;  publishedAt?: Date;  name: string;
  image?: AdminPanelRelationPropertyModification<Media>;
}
