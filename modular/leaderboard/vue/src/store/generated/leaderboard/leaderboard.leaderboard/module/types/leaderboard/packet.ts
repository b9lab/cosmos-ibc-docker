/* eslint-disable */
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "leaderboard.leaderboard";

export interface LeaderboardPacketData {
  /** this line is used by starport scaffolding # ibc/packet/proto/field */
  noData: NoData | undefined;
}

export interface NoData {}

const baseLeaderboardPacketData: object = {};

export const LeaderboardPacketData = {
  encode(
    message: LeaderboardPacketData,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.noData !== undefined) {
      NoData.encode(message.noData, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): LeaderboardPacketData {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseLeaderboardPacketData } as LeaderboardPacketData;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.noData = NoData.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LeaderboardPacketData {
    const message = { ...baseLeaderboardPacketData } as LeaderboardPacketData;
    if (object.noData !== undefined && object.noData !== null) {
      message.noData = NoData.fromJSON(object.noData);
    } else {
      message.noData = undefined;
    }
    return message;
  },

  toJSON(message: LeaderboardPacketData): unknown {
    const obj: any = {};
    message.noData !== undefined &&
      (obj.noData = message.noData ? NoData.toJSON(message.noData) : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<LeaderboardPacketData>
  ): LeaderboardPacketData {
    const message = { ...baseLeaderboardPacketData } as LeaderboardPacketData;
    if (object.noData !== undefined && object.noData !== null) {
      message.noData = NoData.fromPartial(object.noData);
    } else {
      message.noData = undefined;
    }
    return message;
  },
};

const baseNoData: object = {};

export const NoData = {
  encode(_: NoData, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): NoData {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseNoData } as NoData;
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

  fromJSON(_: any): NoData {
    const message = { ...baseNoData } as NoData;
    return message;
  },

  toJSON(_: NoData): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<NoData>): NoData {
    const message = { ...baseNoData } as NoData;
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
