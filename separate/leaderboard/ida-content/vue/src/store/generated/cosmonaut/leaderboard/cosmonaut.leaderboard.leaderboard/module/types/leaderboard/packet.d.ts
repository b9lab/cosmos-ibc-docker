import { Writer, Reader } from 'protobufjs/minimal';
export declare const protobufPackage = "cosmonaut.leaderboard.leaderboard";
export interface LeaderboardPacketData {
    noData: NoData | undefined;
    /** this line is used by starport scaffolding # ibc/packet/proto/field */
    ibcTopRankPacket: IbcTopRankPacketData | undefined;
}
export interface NoData {
}
/**
 * this line is used by starport scaffolding # ibc/packet/proto/message
 * IbcTopRankPacketData defines a struct for the packet payload
 */
export interface IbcTopRankPacketData {
    playerId: string;
    score: number;
    dateAdded: string;
    gameId: string;
}
/** IbcTopRankPacketAck defines a struct for the packet acknowledgment */
export interface IbcTopRankPacketAck {
    playerId: string;
}
export declare const LeaderboardPacketData: {
    encode(message: LeaderboardPacketData, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): LeaderboardPacketData;
    fromJSON(object: any): LeaderboardPacketData;
    toJSON(message: LeaderboardPacketData): unknown;
    fromPartial(object: DeepPartial<LeaderboardPacketData>): LeaderboardPacketData;
};
export declare const NoData: {
    encode(_: NoData, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): NoData;
    fromJSON(_: any): NoData;
    toJSON(_: NoData): unknown;
    fromPartial(_: DeepPartial<NoData>): NoData;
};
export declare const IbcTopRankPacketData: {
    encode(message: IbcTopRankPacketData, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): IbcTopRankPacketData;
    fromJSON(object: any): IbcTopRankPacketData;
    toJSON(message: IbcTopRankPacketData): unknown;
    fromPartial(object: DeepPartial<IbcTopRankPacketData>): IbcTopRankPacketData;
};
export declare const IbcTopRankPacketAck: {
    encode(message: IbcTopRankPacketAck, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): IbcTopRankPacketAck;
    fromJSON(object: any): IbcTopRankPacketAck;
    toJSON(message: IbcTopRankPacketAck): unknown;
    fromPartial(object: DeepPartial<IbcTopRankPacketAck>): IbcTopRankPacketAck;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
