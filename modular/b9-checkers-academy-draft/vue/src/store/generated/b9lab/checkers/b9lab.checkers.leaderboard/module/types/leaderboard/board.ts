/* eslint-disable */
import { PlayerInfo } from "../leaderboard/player_info";
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "b9lab.checkers.leaderboard";

export interface Board {
  playerInfo: PlayerInfo | undefined;
}

const baseBoard: object = {};

export const Board = {
  encode(message: Board, writer: Writer = Writer.create()): Writer {
    if (message.playerInfo !== undefined) {
      PlayerInfo.encode(message.playerInfo, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Board {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseBoard } as Board;
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

  fromJSON(object: any): Board {
    const message = { ...baseBoard } as Board;
    if (object.playerInfo !== undefined && object.playerInfo !== null) {
      message.playerInfo = PlayerInfo.fromJSON(object.playerInfo);
    } else {
      message.playerInfo = undefined;
    }
    return message;
  },

  toJSON(message: Board): unknown {
    const obj: any = {};
    message.playerInfo !== undefined &&
      (obj.playerInfo = message.playerInfo
        ? PlayerInfo.toJSON(message.playerInfo)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<Board>): Board {
    const message = { ...baseBoard } as Board;
    if (object.playerInfo !== undefined && object.playerInfo !== null) {
      message.playerInfo = PlayerInfo.fromPartial(object.playerInfo);
    } else {
      message.playerInfo = undefined;
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
