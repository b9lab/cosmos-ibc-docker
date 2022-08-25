import { Reader, Writer } from 'protobufjs/minimal';
import { Board } from '../leaderboard/board';
import { PageRequest, PageResponse } from '../cosmos/base/query/v1beta1/pagination';
import { PlayerInfo } from '../leaderboard/player_info';
export declare const protobufPackage = "cosmonaut.leaderboard.leaderboard";
/** this line is used by starport scaffolding # 3 */
export interface QueryGetBoardRequest {
    index: string;
}
export interface QueryGetBoardResponse {
    Board: Board | undefined;
}
export interface QueryAllBoardRequest {
    pagination: PageRequest | undefined;
}
export interface QueryAllBoardResponse {
    Board: Board[];
    pagination: PageResponse | undefined;
}
export interface QueryGetPlayerInfoRequest {
    index: string;
}
export interface QueryGetPlayerInfoResponse {
    PlayerInfo: PlayerInfo | undefined;
}
export interface QueryAllPlayerInfoRequest {
    pagination: PageRequest | undefined;
}
export interface QueryAllPlayerInfoResponse {
    PlayerInfo: PlayerInfo[];
    pagination: PageResponse | undefined;
}
export declare const QueryGetBoardRequest: {
    encode(message: QueryGetBoardRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetBoardRequest;
    fromJSON(object: any): QueryGetBoardRequest;
    toJSON(message: QueryGetBoardRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetBoardRequest>): QueryGetBoardRequest;
};
export declare const QueryGetBoardResponse: {
    encode(message: QueryGetBoardResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetBoardResponse;
    fromJSON(object: any): QueryGetBoardResponse;
    toJSON(message: QueryGetBoardResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetBoardResponse>): QueryGetBoardResponse;
};
export declare const QueryAllBoardRequest: {
    encode(message: QueryAllBoardRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllBoardRequest;
    fromJSON(object: any): QueryAllBoardRequest;
    toJSON(message: QueryAllBoardRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllBoardRequest>): QueryAllBoardRequest;
};
export declare const QueryAllBoardResponse: {
    encode(message: QueryAllBoardResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllBoardResponse;
    fromJSON(object: any): QueryAllBoardResponse;
    toJSON(message: QueryAllBoardResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllBoardResponse>): QueryAllBoardResponse;
};
export declare const QueryGetPlayerInfoRequest: {
    encode(message: QueryGetPlayerInfoRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetPlayerInfoRequest;
    fromJSON(object: any): QueryGetPlayerInfoRequest;
    toJSON(message: QueryGetPlayerInfoRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetPlayerInfoRequest>): QueryGetPlayerInfoRequest;
};
export declare const QueryGetPlayerInfoResponse: {
    encode(message: QueryGetPlayerInfoResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetPlayerInfoResponse;
    fromJSON(object: any): QueryGetPlayerInfoResponse;
    toJSON(message: QueryGetPlayerInfoResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetPlayerInfoResponse>): QueryGetPlayerInfoResponse;
};
export declare const QueryAllPlayerInfoRequest: {
    encode(message: QueryAllPlayerInfoRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllPlayerInfoRequest;
    fromJSON(object: any): QueryAllPlayerInfoRequest;
    toJSON(message: QueryAllPlayerInfoRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllPlayerInfoRequest>): QueryAllPlayerInfoRequest;
};
export declare const QueryAllPlayerInfoResponse: {
    encode(message: QueryAllPlayerInfoResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllPlayerInfoResponse;
    fromJSON(object: any): QueryAllPlayerInfoResponse;
    toJSON(message: QueryAllPlayerInfoResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllPlayerInfoResponse>): QueryAllPlayerInfoResponse;
};
/** Query defines the gRPC querier service. */
export interface Query {
    /** Queries a board by index. */
    Board(request: QueryGetBoardRequest): Promise<QueryGetBoardResponse>;
    /** Queries a list of board items. */
    BoardAll(request: QueryAllBoardRequest): Promise<QueryAllBoardResponse>;
    /** Queries a playerInfo by index. */
    PlayerInfo(request: QueryGetPlayerInfoRequest): Promise<QueryGetPlayerInfoResponse>;
    /** Queries a list of playerInfo items. */
    PlayerInfoAll(request: QueryAllPlayerInfoRequest): Promise<QueryAllPlayerInfoResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    Board(request: QueryGetBoardRequest): Promise<QueryGetBoardResponse>;
    BoardAll(request: QueryAllBoardRequest): Promise<QueryAllBoardResponse>;
    PlayerInfo(request: QueryGetPlayerInfoRequest): Promise<QueryGetPlayerInfoResponse>;
    PlayerInfoAll(request: QueryAllPlayerInfoRequest): Promise<QueryAllPlayerInfoResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
