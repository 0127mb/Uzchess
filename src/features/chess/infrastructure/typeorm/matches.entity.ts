import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { PlayersEntity } from "./players.entity";
import { MatchType } from "src/constants/enum/matchType.enum";
import { WinnerType } from "src/constants/enum/winnerType.enum";

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

    @Column({ type: "enum", enum: MatchType })
    type: MatchType;

    @Column({ type: "int" })
    moves: number;

    @Column({ type: "date" })
    date: Date;

    @Column({ type: "enum", enum: WinnerType })
    winner: WinnerType;
}
