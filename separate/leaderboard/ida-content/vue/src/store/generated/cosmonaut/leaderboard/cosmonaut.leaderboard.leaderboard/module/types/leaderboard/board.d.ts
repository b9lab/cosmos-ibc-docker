import { PlayerInfo } from '../leaderboard/player_info';
import { Writer, Reader } from 'protobufjs/minimal';
export declare const protobufPackage = "cosmonaut.leaderboard.leaderboard";
export interface Board {
    player: PlayerInfo[];
    gameID: string;
}
export declare const Board: {
    encode(message: Board, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): Board;
    fromJSON(object: any): Board;
    toJSON(message: Board): unknown;
    fromPartial(object: DeepPartial<Board>): Board;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
