import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, OneToMany } from "typeorm";
// Importando a entidade User:
import { User } from "./User";

@Entity()
export class Situation {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    nameSituation!: string

    @Column({type: "timestamp", default: () => "CURRENT_TIMESTAMP"})
    createdAt!: Date;

    @Column({type: "timestamp", default: () => "CURRENT_TIMESTAMP", onUpdate: "CURRENT_TIMESTAMP"})
    updateAt!: Date;

    @OneToMany(() => User, (user) => user.situation)
    users!: User[];
}