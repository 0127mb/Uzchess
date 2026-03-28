import { BaseEntity, Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { CountriesEntity } from "./countries.entity";
import { MatchesEntity } from "./matches.entity";

@Entity("Players")
export class PlayersEntity extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => CountriesEntity, country => country.players)
    country: CountriesEntity;

    @Column({ type: "varchar", length: 64 })
    fullName: string;

    @Column({ type: "varchar", length: 128, nullable: true })
    image?: string;

    @Column({ type: "int", nullable: true })
    classic?: number;

    @Column({ type: "int", nullable: true })
    rapid?: number;

    @Column({ type: "int", nullable: true })
    blitz?: number;

    @OneToMany(() => MatchesEntity, match => match.firstPlayer)
    firstPlayerMatches: MatchesEntity[];

    @OneToMany(() => MatchesEntity, match => match.secondPlayer)
    secondPlayerMatches: MatchesEntity[];
}
