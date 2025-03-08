import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";

// Importando a entidade Situation:
import { Situation } from "./Situation";

@Entity("users") 
export class User {
    @PrimaryGeneratedColumn()
    id!: number

    @Column()
    name!: string

    @Column({unique: true})
    email!: string

    // Relacionamento ManyToOne com a tabela situations:
    @ManyToOne(() => Situation, (situation) => situation.users)
    @JoinColumn({ name: "situation" }) // Nome da chave estrangeira
    situation!: Situation;

    @Column({type: "timestamp", default: () => "CURRENT_TIMESTAMP"})
    createdAt!: string

    @Column({type: "timestamp", default: () => "CURRENT_TIMESTAMP", onUpdate: "CURRENT_TIMESTAMP"})
    updateAt!: Date
}