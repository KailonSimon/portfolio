import { Media } from '@/types/api/media';
import { AdminPanelRelationPropertyModification } from '@/types/api/admin-panel-relation-property-modification';

export interface Technology {
  id: number;
  attributes: {
    createdAt: Date;    updatedAt: Date;    publishedAt?: Date;    name: string;
    image?: { data: Media };
  };
}
export interface Technology_Plain {
  id: number;
  createdAt: Date;  updatedAt: Date;  publishedAt?: Date;  name: string;
  image?: Media;
}

export interface Technology_NoRelations {
  id: number;
  createdAt: Date;  updatedAt: Date;  publishedAt?: Date;  name: string;
  image?: number;
}

export interface Technology_AdminPanelLifeCycle {
  id: number;
  createdAt: Date;  updatedAt: Date;  publishedAt?: Date;  name: string;
  image?: AdminPanelRelationPropertyModification<Media>;
}
