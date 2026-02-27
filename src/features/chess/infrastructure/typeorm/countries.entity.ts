import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { PlayersEntity } from "./players.entity";

@Entity("Countries")
export class CountriesEntity extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "varchar", length: 64, unique: true })
    title: string;

    @Column({ type: "varchar", length: 128 })
    flag: string;

    @OneToMany(() => PlayersEntity, player => player.country)
    players: PlayersEntity[];
}
