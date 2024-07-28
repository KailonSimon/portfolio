import { Media } from '@/types/api/media';
import { AdminPanelRelationPropertyModification } from '@/types/api/admin-panel-relation-property-modification';

export interface Skill {
  id: number;
  attributes: {
    createdAt: Date;    updatedAt: Date;    publishedAt?: Date;    name: string;
    image?: { data: Media };
  };
}
export interface Skill_Plain {
  id: number;
  createdAt: Date;  updatedAt: Date;  publishedAt?: Date;  name: string;
  image?: Media;
}

export interface Skill_NoRelations {
  id: number;
  createdAt: Date;  updatedAt: Date;  publishedAt?: Date;  name: string;
  image?: number;
}

export interface Skill_AdminPanelLifeCycle {
  id: number;
  createdAt: Date;  updatedAt: Date;  publishedAt?: Date;  name: string;
  image?: AdminPanelRelationPropertyModification<Media>;
}
