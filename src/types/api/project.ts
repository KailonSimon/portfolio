
import { TechBadge } from './tech-badge';
import { Media } from './media';
import { TechBadge_Plain } from './tech-badge';
import { AdminPanelRelationPropertyModification } from './admin-panel-relation-property-modification';

export interface Project {
  id: number;
  attributes: {
    createdAt: Date;    updatedAt: Date;    publishedAt?: Date;    name: string;
    description?: string;
    demoURL?: string;
    githubURL?: string;
    tech_badges?: { data: TechBadge[] };
    thumbnail?: { data: Media };
    priority: number;
  };
}
export interface Project_Plain {
  id: number;
  createdAt: Date;  updatedAt: Date;  publishedAt?: Date;  name: string;
  description?: string;
  demoURL?: string;
  githubURL?: string;
  tech_badges?: TechBadge_Plain[];
  thumbnail?: Media;
  priority: number;
}

export interface Project_NoRelations {
  id: number;
  createdAt: Date;  updatedAt: Date;  publishedAt?: Date;  name: string;
  description?: string;
  demoURL?: string;
  githubURL?: string;
  tech_badges?: number[];
  thumbnail?: number;
  priority: number;
}

export interface Project_AdminPanelLifeCycle {
  id: number;
  createdAt: Date;  updatedAt: Date;  publishedAt?: Date;  name: string;
  description?: string;
  demoURL?: string;
  githubURL?: string;
  tech_badges?: AdminPanelRelationPropertyModification<TechBadge_Plain>;
  thumbnail?: AdminPanelRelationPropertyModification<Media>;
  priority: number;
}
