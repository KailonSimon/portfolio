import { Media } from '@/types/api/media';
import { Project, Project_Plain } from '@/types/api/project';
import { AdminPanelRelationPropertyModification } from '@/types/api/admin-panel-relation-property-modification';

export interface TechBadge {
  id: number;
  attributes: {
    createdAt: Date;    updatedAt: Date;    publishedAt?: Date;    name: string;
    image?: { data: Media };
    projects?: { data: Project[] };
    priority: number;
  };
}
export interface TechBadge_Plain {
  id: number;
  createdAt: Date;  updatedAt: Date;  publishedAt?: Date;  name: string;
  image?: Media;
  projects?: Project_Plain[];
  priority: number;
}

export interface TechBadge_NoRelations {
  id: number;
  createdAt: Date;  updatedAt: Date;  publishedAt?: Date;  name: string;
  image?: number;
  projects?: number[];
  priority: number;
}

export interface TechBadge_AdminPanelLifeCycle {
  id: number;
  createdAt: Date;  updatedAt: Date;  publishedAt?: Date;  name: string;
  image?: AdminPanelRelationPropertyModification<Media>;
  projects?: AdminPanelRelationPropertyModification<Project_Plain>;
  priority: number;
}
