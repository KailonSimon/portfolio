import { Media } from '@/types/api/media';
import { AdminPanelRelationPropertyModification } from '@/types/api/admin-panel-relation-property-modification';

export interface Resume {
  id: number;
  attributes: {
    createdAt: Date;    updatedAt: Date;    publishedAt?: Date;    resume: { data: Media };
  };
}
export interface Resume_Plain {
  id: number;
  createdAt: Date;  updatedAt: Date;  publishedAt?: Date;  resume: Media;
}

export interface Resume_NoRelations {
  id: number;
  createdAt: Date;  updatedAt: Date;  publishedAt?: Date;  resume: number;
}

export interface Resume_AdminPanelLifeCycle {
  id: number;
  createdAt: Date;  updatedAt: Date;  publishedAt?: Date;  resume: AdminPanelRelationPropertyModification<Media>;
}
