/* eslint-disable */
import { PlayerInfo } from "../leaderboard/player_info";
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "leaderboard.leaderboard";

export interface Board {
  playerInfo: PlayerInfo[];
}

const baseBoard: object = {};

export const Board = {
  encode(message: Board, writer: Writer = Writer.create()): Writer {
    for (const v of message.playerInfo) {
      PlayerInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Board {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseBoard } as Board;
    message.playerInfo = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.playerInfo.push(PlayerInfo.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Board {
    const message = { ...baseBoard } as Board;
    message.playerInfo = [];
    if (object.playerInfo !== undefined && object.playerInfo !== null) {
      for (const e of object.playerInfo) {
        message.playerInfo.push(PlayerInfo.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: Board): unknown {
    const obj: any = {};
    if (message.playerInfo) {
      obj.playerInfo = message.playerInfo.map((e) =>
        e ? PlayerInfo.toJSON(e) : undefined
      );
    } else {
      obj.playerInfo = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<Board>): Board {
    const message = { ...baseBoard } as Board;
    message.playerInfo = [];
    if (object.playerInfo !== undefined && object.playerInfo !== null) {
      for (const e of object.playerInfo) {
        message.playerInfo.push(PlayerInfo.fromPartial(e));
      }
    }
    return message;
  },
};

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
