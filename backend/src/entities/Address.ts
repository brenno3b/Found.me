import { Column, Entity, PrimaryColumn } from 'typeorm';

import { IAddress } from '../@types/entities';

import uuid from '../libs/uuid';

@Entity('address')
export class Address implements IAddress {
  @PrimaryColumn()
  readonly id: string;

  @Column({ length: 8 })
  postalCode: string;

  @Column()
  street: string;

  @Column()
  number: number;

  @Column()
  complement: string;

  @Column()
  neighborhood: string;

  @Column()
  city: string;

  @Column({ length: 2 })
  uf: string;

  constructor() {
    if (!this.id) this.id = uuid();
  }
}