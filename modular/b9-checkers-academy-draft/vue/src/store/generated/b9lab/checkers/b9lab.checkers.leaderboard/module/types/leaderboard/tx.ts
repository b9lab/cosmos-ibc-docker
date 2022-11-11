/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";
import { PlayerInfo } from "../leaderboard/player_info";

export const protobufPackage = "b9lab.checkers.leaderboard";

export interface MsgUpdateBoard {
  creator: string;
}

export interface MsgUpdateBoardResponse {}

export interface MsgSendCandidate {
  creator: string;
  port: string;
  channelID: string;
  timeoutTimestamp: number;
  playerInfo: PlayerInfo | undefined;
}

export interface MsgSendCandidateResponse {}

const baseMsgUpdateBoard: object = { creator: "" };

export const MsgUpdateBoard = {
  encode(message: MsgUpdateBoard, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateBoard {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateBoard } as MsgUpdateBoard;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateBoard {
    const message = { ...baseMsgUpdateBoard } as MsgUpdateBoard;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    return message;
  },

  toJSON(message: MsgUpdateBoard): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdateBoard>): MsgUpdateBoard {
    const message = { ...baseMsgUpdateBoard } as MsgUpdateBoard;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    return message;
  },
};

const baseMsgUpdateBoardResponse: object = {};

export const MsgUpdateBoardResponse = {
  encode(_: MsgUpdateBoardResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateBoardResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateBoardResponse } as MsgUpdateBoardResponse;
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

  fromJSON(_: any): MsgUpdateBoardResponse {
    const message = { ...baseMsgUpdateBoardResponse } as MsgUpdateBoardResponse;
    return message;
  },

  toJSON(_: MsgUpdateBoardResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgUpdateBoardResponse>): MsgUpdateBoardResponse {
    const message = { ...baseMsgUpdateBoardResponse } as MsgUpdateBoardResponse;
    return message;
  },
};

const baseMsgSendCandidate: object = {
  creator: "",
  port: "",
  channelID: "",
  timeoutTimestamp: 0,
};

export const MsgSendCandidate = {
  encode(message: MsgSendCandidate, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.port !== "") {
      writer.uint32(18).string(message.port);
    }
    if (message.channelID !== "") {
      writer.uint32(26).string(message.channelID);
    }
    if (message.timeoutTimestamp !== 0) {
      writer.uint32(32).uint64(message.timeoutTimestamp);
    }
    if (message.playerInfo !== undefined) {
      PlayerInfo.encode(message.playerInfo, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgSendCandidate {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgSendCandidate } as MsgSendCandidate;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.port = reader.string();
          break;
        case 3:
          message.channelID = reader.string();
          break;
        case 4:
          message.timeoutTimestamp = longToNumber(reader.uint64() as Long);
          break;
        case 5:
          message.playerInfo = PlayerInfo.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSendCandidate {
    const message = { ...baseMsgSendCandidate } as MsgSendCandidate;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.port !== undefined && object.port !== null) {
      message.port = String(object.port);
    } else {
      message.port = "";
    }
    if (object.channelID !== undefined && object.channelID !== null) {
      message.channelID = String(object.channelID);
    } else {
      message.channelID = "";
    }
    if (
      object.timeoutTimestamp !== undefined &&
      object.timeoutTimestamp !== null
    ) {
      message.timeoutTimestamp = Number(object.timeoutTimestamp);
    } else {
      message.timeoutTimestamp = 0;
    }
    if (object.playerInfo !== undefined && object.playerInfo !== null) {
      message.playerInfo = PlayerInfo.fromJSON(object.playerInfo);
    } else {
      message.playerInfo = undefined;
    }
    return message;
  },

  toJSON(message: MsgSendCandidate): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.port !== undefined && (obj.port = message.port);
    message.channelID !== undefined && (obj.channelID = message.channelID);
    message.timeoutTimestamp !== undefined &&
      (obj.timeoutTimestamp = message.timeoutTimestamp);
    message.playerInfo !== undefined &&
      (obj.playerInfo = message.playerInfo
        ? PlayerInfo.toJSON(message.playerInfo)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgSendCandidate>): MsgSendCandidate {
    const message = { ...baseMsgSendCandidate } as MsgSendCandidate;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.port !== undefined && object.port !== null) {
      message.port = object.port;
    } else {
      message.port = "";
    }
    if (object.channelID !== undefined && object.channelID !== null) {
      message.channelID = object.channelID;
    } else {
      message.channelID = "";
    }
    if (
      object.timeoutTimestamp !== undefined &&
      object.timeoutTimestamp !== null
    ) {
      message.timeoutTimestamp = object.timeoutTimestamp;
    } else {
      message.timeoutTimestamp = 0;
    }
    if (object.playerInfo !== undefined && object.playerInfo !== null) {
      message.playerInfo = PlayerInfo.fromPartial(object.playerInfo);
    } else {
      message.playerInfo = undefined;
    }
    return message;
  },
};

const baseMsgSendCandidateResponse: object = {};

export const MsgSendCandidateResponse = {
  encode(
    _: MsgSendCandidateResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgSendCandidateResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgSendCandidateResponse,
    } as MsgSendCandidateResponse;
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

  fromJSON(_: any): MsgSendCandidateResponse {
    const message = {
      ...baseMsgSendCandidateResponse,
    } as MsgSendCandidateResponse;
    return message;
  },

  toJSON(_: MsgSendCandidateResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgSendCandidateResponse>
  ): MsgSendCandidateResponse {
    const message = {
      ...baseMsgSendCandidateResponse,
    } as MsgSendCandidateResponse;
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  UpdateBoard(request: MsgUpdateBoard): Promise<MsgUpdateBoardResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
  SendCandidate(request: MsgSendCandidate): Promise<MsgSendCandidateResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  UpdateBoard(request: MsgUpdateBoard): Promise<MsgUpdateBoardResponse> {
    const data = MsgUpdateBoard.encode(request).finish();
    const promise = this.rpc.request(
      "b9lab.checkers.leaderboard.Msg",
      "UpdateBoard",
      data
    );
    return promise.then((data) =>
      MsgUpdateBoardResponse.decode(new Reader(data))
    );
  }

  SendCandidate(request: MsgSendCandidate): Promise<MsgSendCandidateResponse> {
    const data = MsgSendCandidate.encode(request).finish();
    const promise = this.rpc.request(
      "b9lab.checkers.leaderboard.Msg",
      "SendCandidate",
      data
    );
    return promise.then((data) =>
      MsgSendCandidateResponse.decode(new Reader(data))
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

declare var self: any | undefined;
declare var window: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

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

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (util.Long !== Long) {
  util.Long = Long as any;
  configure();
}
