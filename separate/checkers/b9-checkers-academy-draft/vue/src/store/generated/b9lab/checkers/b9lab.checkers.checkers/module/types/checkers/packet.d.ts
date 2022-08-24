import { Writer, Reader } from "protobufjs/minimal";
export declare const protobufPackage = "b9lab.checkers.checkers";
export interface CheckersPacketData {
    noData: NoData | undefined;
    /** this line is used by starport scaffolding # ibc/packet/proto/field */
    scorePacket: ScorePacketData | undefined;
}
export interface NoData {
}
/**
 * this line is used by starport scaffolding # ibc/packet/proto/message
 * ScorePacketData defines a struct for the packet payload
 */
export interface ScorePacketData {
    playerAddress: string;
    wonCount: number;
    DateAdded: string;
}
/** ScorePacketAck defines a struct for the packet acknowledgment */
export interface ScorePacketAck {
}
export declare const CheckersPacketData: {
    encode(message: CheckersPacketData, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): CheckersPacketData;
    fromJSON(object: any): CheckersPacketData;
    toJSON(message: CheckersPacketData): unknown;
    fromPartial(object: DeepPartial<CheckersPacketData>): CheckersPacketData;
};
export declare const NoData: {
    encode(_: NoData, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): NoData;
    fromJSON(_: any): NoData;
    toJSON(_: NoData): unknown;
    fromPartial(_: DeepPartial<NoData>): NoData;
};
export declare const ScorePacketData: {
    encode(message: ScorePacketData, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): ScorePacketData;
    fromJSON(object: any): ScorePacketData;
    toJSON(message: ScorePacketData): unknown;
    fromPartial(object: DeepPartial<ScorePacketData>): ScorePacketData;
};
export declare const ScorePacketAck: {
    encode(_: ScorePacketAck, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): ScorePacketAck;
    fromJSON(_: any): ScorePacketAck;
    toJSON(_: ScorePacketAck): unknown;
    fromPartial(_: DeepPartial<ScorePacketAck>): ScorePacketAck;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
