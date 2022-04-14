//Interfaces des éléments en BDD

export interface BaseEntity {
  id: string;
}

export interface User extends BaseEntity {}

export interface Ticket extends BaseEntity {}
