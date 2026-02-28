import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { PlayersEntity } from "./players.entity";
import { Muchtype } from "src/constants/enum/Matchtype.enum";
import { Winnertype } from "src/constants/enum/Winnertype.enum";

@Entity("Matches")
export class MatchesEntity extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => PlayersEntity, player => player.firstPlayerMatches)
    firstPlayer: PlayersEntity;

    @Column({ type: "int" })
    firstPlayerResult: number;

    @ManyToOne(() => PlayersEntity, player => player.secondPlayerMatches)
    secondPlayer: PlayersEntity;

    @Column({ type: "int" })
    secondPlayerResult: number;

    @Column({ type: "enum", enum: Muchtype })
    type: Muchtype;

    @Column({ type: "int" })
    moves: number;

    @Column({ type: "date" })
    date: Date;

    @Column({ type: "enum", enum: Winnertype })
    winner: Winnertype;
}
