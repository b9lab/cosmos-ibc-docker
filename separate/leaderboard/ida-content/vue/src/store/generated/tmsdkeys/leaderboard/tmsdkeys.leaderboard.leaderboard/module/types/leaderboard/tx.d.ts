import { Reader, Writer } from "protobufjs/minimal";
export declare const protobufPackage = "tmsdkeys.leaderboard.leaderboard";
export interface MsgSendIbcTopRank {
    creator: string;
    port: string;
    channelID: string;
    timeoutTimestamp: number;
    playerId: string;
    rank: number;
    score: string;
}
export interface MsgSendIbcTopRankResponse {
}
export declare const MsgSendIbcTopRank: {
    encode(message: MsgSendIbcTopRank, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgSendIbcTopRank;
    fromJSON(object: any): MsgSendIbcTopRank;
    toJSON(message: MsgSendIbcTopRank): unknown;
    fromPartial(object: DeepPartial<MsgSendIbcTopRank>): MsgSendIbcTopRank;
};
export declare const MsgSendIbcTopRankResponse: {
    encode(_: MsgSendIbcTopRankResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgSendIbcTopRankResponse;
    fromJSON(_: any): MsgSendIbcTopRankResponse;
    toJSON(_: MsgSendIbcTopRankResponse): unknown;
    fromPartial(_: DeepPartial<MsgSendIbcTopRankResponse>): MsgSendIbcTopRankResponse;
};
/** Msg defines the Msg service. */
export interface Msg {
    /** this line is used by starport scaffolding # proto/tx/rpc */
    SendIbcTopRank(request: MsgSendIbcTopRank): Promise<MsgSendIbcTopRankResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    SendIbcTopRank(request: MsgSendIbcTopRank): Promise<MsgSendIbcTopRankResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
