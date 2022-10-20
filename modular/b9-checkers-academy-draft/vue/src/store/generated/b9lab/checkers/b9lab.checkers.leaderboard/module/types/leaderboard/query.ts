/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";
import { Params } from "../leaderboard/params";
import { PlayerInfo } from "../leaderboard/player_info";
import {
  PageRequest,
  PageResponse,
} from "../cosmos/base/query/v1beta1/pagination";
import { Board } from "../leaderboard/board";

export const protobufPackage = "b9lab.checkers.leaderboard";

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params | undefined;
}

export interface QueryGetPlayerInfoRequest {
  index: string;
}

export interface QueryGetPlayerInfoResponse {
  playerInfo: PlayerInfo | undefined;
}

export interface QueryAllPlayerInfoRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllPlayerInfoResponse {
  playerInfo: PlayerInfo[];
  pagination: PageResponse | undefined;
}

export interface QueryGetBoardRequest {}

export interface QueryGetBoardResponse {
  Board: Board | undefined;
}

const baseQueryParamsRequest: object = {};

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    return message;
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    return message;
  },
};

const baseQueryParamsResponse: object = {};

export const QueryParamsResponse = {
  encode(
    message: QueryParamsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromJSON(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },
};

const baseQueryGetPlayerInfoRequest: object = { index: "" };

export const QueryGetPlayerInfoRequest = {
  encode(
    message: QueryGetPlayerInfoRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetPlayerInfoRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetPlayerInfoRequest,
    } as QueryGetPlayerInfoRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetPlayerInfoRequest {
    const message = {
      ...baseQueryGetPlayerInfoRequest,
    } as QueryGetPlayerInfoRequest;
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index);
    } else {
      message.index = "";
    }
    return message;
  },

  toJSON(message: QueryGetPlayerInfoRequest): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetPlayerInfoRequest>
  ): QueryGetPlayerInfoRequest {
    const message = {
      ...baseQueryGetPlayerInfoRequest,
    } as QueryGetPlayerInfoRequest;
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    } else {
      message.index = "";
    }
    return message;
  },
};

const baseQueryGetPlayerInfoResponse: object = {};

export const QueryGetPlayerInfoResponse = {
  encode(
    message: QueryGetPlayerInfoResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.playerInfo !== undefined) {
      PlayerInfo.encode(message.playerInfo, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetPlayerInfoResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetPlayerInfoResponse,
    } as QueryGetPlayerInfoResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.playerInfo = PlayerInfo.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetPlayerInfoResponse {
    const message = {
      ...baseQueryGetPlayerInfoResponse,
    } as QueryGetPlayerInfoResponse;
    if (object.playerInfo !== undefined && object.playerInfo !== null) {
      message.playerInfo = PlayerInfo.fromJSON(object.playerInfo);
    } else {
      message.playerInfo = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetPlayerInfoResponse): unknown {
    const obj: any = {};
    message.playerInfo !== undefined &&
      (obj.playerInfo = message.playerInfo
        ? PlayerInfo.toJSON(message.playerInfo)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetPlayerInfoResponse>
  ): QueryGetPlayerInfoResponse {
    const message = {
      ...baseQueryGetPlayerInfoResponse,
    } as QueryGetPlayerInfoResponse;
    if (object.playerInfo !== undefined && object.playerInfo !== null) {
      message.playerInfo = PlayerInfo.fromPartial(object.playerInfo);
    } else {
      message.playerInfo = undefined;
    }
    return message;
  },
};

const baseQueryAllPlayerInfoRequest: object = {};

export const QueryAllPlayerInfoRequest = {
  encode(
    message: QueryAllPlayerInfoRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllPlayerInfoRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllPlayerInfoRequest,
    } as QueryAllPlayerInfoRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllPlayerInfoRequest {
    const message = {
      ...baseQueryAllPlayerInfoRequest,
    } as QueryAllPlayerInfoRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllPlayerInfoRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllPlayerInfoRequest>
  ): QueryAllPlayerInfoRequest {
    const message = {
      ...baseQueryAllPlayerInfoRequest,
    } as QueryAllPlayerInfoRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllPlayerInfoResponse: object = {};

export const QueryAllPlayerInfoResponse = {
  encode(
    message: QueryAllPlayerInfoResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.playerInfo) {
      PlayerInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllPlayerInfoResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllPlayerInfoResponse,
    } as QueryAllPlayerInfoResponse;
    message.playerInfo = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.playerInfo.push(PlayerInfo.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllPlayerInfoResponse {
    const message = {
      ...baseQueryAllPlayerInfoResponse,
    } as QueryAllPlayerInfoResponse;
    message.playerInfo = [];
    if (object.playerInfo !== undefined && object.playerInfo !== null) {
      for (const e of object.playerInfo) {
        message.playerInfo.push(PlayerInfo.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllPlayerInfoResponse): unknown {
    const obj: any = {};
    if (message.playerInfo) {
      obj.playerInfo = message.playerInfo.map((e) =>
        e ? PlayerInfo.toJSON(e) : undefined
      );
    } else {
      obj.playerInfo = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllPlayerInfoResponse>
  ): QueryAllPlayerInfoResponse {
    const message = {
      ...baseQueryAllPlayerInfoResponse,
    } as QueryAllPlayerInfoResponse;
    message.playerInfo = [];
    if (object.playerInfo !== undefined && object.playerInfo !== null) {
      for (const e of object.playerInfo) {
        message.playerInfo.push(PlayerInfo.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryGetBoardRequest: object = {};

export const QueryGetBoardRequest = {
  encode(_: QueryGetBoardRequest, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetBoardRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetBoardRequest } as QueryGetBoardRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): QueryGetBoardRequest {
    const message = { ...baseQueryGetBoardRequest } as QueryGetBoardRequest;
    return message;
  },

  toJSON(_: QueryGetBoardRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<QueryGetBoardRequest>): QueryGetBoardRequest {
    const message = { ...baseQueryGetBoardRequest } as QueryGetBoardRequest;
    return message;
  },
};

const baseQueryGetBoardResponse: object = {};

export const QueryGetBoardResponse = {
  encode(
    message: QueryGetBoardResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.Board !== undefined) {
      Board.encode(message.Board, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetBoardResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetBoardResponse } as QueryGetBoardResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Board = Board.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetBoardResponse {
    const message = { ...baseQueryGetBoardResponse } as QueryGetBoardResponse;
    if (object.Board !== undefined && object.Board !== null) {
      message.Board = Board.fromJSON(object.Board);
    } else {
      message.Board = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetBoardResponse): unknown {
    const obj: any = {};
    message.Board !== undefined &&
      (obj.Board = message.Board ? Board.toJSON(message.Board) : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetBoardResponse>
  ): QueryGetBoardResponse {
    const message = { ...baseQueryGetBoardResponse } as QueryGetBoardResponse;
    if (object.Board !== undefined && object.Board !== null) {
      message.Board = Board.fromPartial(object.Board);
    } else {
      message.Board = undefined;
    }
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a PlayerInfo by index. */
  PlayerInfo(
    request: QueryGetPlayerInfoRequest
  ): Promise<QueryGetPlayerInfoResponse>;
  /** Queries a list of PlayerInfo items. */
  PlayerInfoAll(
    request: QueryAllPlayerInfoRequest
  ): Promise<QueryAllPlayerInfoResponse>;
  /** Queries a Board by index. */
  Board(request: QueryGetBoardRequest): Promise<QueryGetBoardResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "b9lab.checkers.leaderboard.Query",
      "Params",
      data
    );
    return promise.then((data) => QueryParamsResponse.decode(new Reader(data)));
  }

  PlayerInfo(
    request: QueryGetPlayerInfoRequest
  ): Promise<QueryGetPlayerInfoResponse> {
    const data = QueryGetPlayerInfoRequest.encode(request).finish();
    const promise = this.rpc.request(
      "b9lab.checkers.leaderboard.Query",
      "PlayerInfo",
      data
    );
    return promise.then((data) =>
      QueryGetPlayerInfoResponse.decode(new Reader(data))
    );
  }

  PlayerInfoAll(
    request: QueryAllPlayerInfoRequest
  ): Promise<QueryAllPlayerInfoResponse> {
    const data = QueryAllPlayerInfoRequest.encode(request).finish();
    const promise = this.rpc.request(
      "b9lab.checkers.leaderboard.Query",
      "PlayerInfoAll",
      data
    );
    return promise.then((data) =>
      QueryAllPlayerInfoResponse.decode(new Reader(data))
    );
  }

  Board(request: QueryGetBoardRequest): Promise<QueryGetBoardResponse> {
    const data = QueryGetBoardRequest.encode(request).finish();
    const promise = this.rpc.request(
      "b9lab.checkers.leaderboard.Query",
      "Board",
      data
    );
    return promise.then((data) =>
      QueryGetBoardResponse.decode(new Reader(data))
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

type Builtin = Date | Function | Uint8Array | string | number | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;
