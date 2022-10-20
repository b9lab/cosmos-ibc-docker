/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";

export const protobufPackage = "b9lab.checkers.leaderboard";

export interface MsgUpdateBoard {
  creator: string;
}

export interface MsgUpdateBoardResponse {}

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

/** Msg defines the Msg service. */
export interface Msg {
  /** this line is used by starport scaffolding # proto/tx/rpc */
  UpdateBoard(request: MsgUpdateBoard): Promise<MsgUpdateBoardResponse>;
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
