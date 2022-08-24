/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "b9lab.checkers.checkers";

export interface CheckersPacketData {
  noData: NoData | undefined;
  /** this line is used by starport scaffolding # ibc/packet/proto/field */
  scorePacket: ScorePacketData | undefined;
}

export interface NoData {}

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
export interface ScorePacketAck {}

const baseCheckersPacketData: object = {};

export const CheckersPacketData = {
  encode(
    message: CheckersPacketData,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.noData !== undefined) {
      NoData.encode(message.noData, writer.uint32(10).fork()).ldelim();
    }
    if (message.scorePacket !== undefined) {
      ScorePacketData.encode(
        message.scorePacket,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): CheckersPacketData {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCheckersPacketData } as CheckersPacketData;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.noData = NoData.decode(reader, reader.uint32());
          break;
        case 2:
          message.scorePacket = ScorePacketData.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CheckersPacketData {
    const message = { ...baseCheckersPacketData } as CheckersPacketData;
    if (object.noData !== undefined && object.noData !== null) {
      message.noData = NoData.fromJSON(object.noData);
    } else {
      message.noData = undefined;
    }
    if (object.scorePacket !== undefined && object.scorePacket !== null) {
      message.scorePacket = ScorePacketData.fromJSON(object.scorePacket);
    } else {
      message.scorePacket = undefined;
    }
    return message;
  },

  toJSON(message: CheckersPacketData): unknown {
    const obj: any = {};
    message.noData !== undefined &&
      (obj.noData = message.noData ? NoData.toJSON(message.noData) : undefined);
    message.scorePacket !== undefined &&
      (obj.scorePacket = message.scorePacket
        ? ScorePacketData.toJSON(message.scorePacket)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<CheckersPacketData>): CheckersPacketData {
    const message = { ...baseCheckersPacketData } as CheckersPacketData;
    if (object.noData !== undefined && object.noData !== null) {
      message.noData = NoData.fromPartial(object.noData);
    } else {
      message.noData = undefined;
    }
    if (object.scorePacket !== undefined && object.scorePacket !== null) {
      message.scorePacket = ScorePacketData.fromPartial(object.scorePacket);
    } else {
      message.scorePacket = undefined;
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

const baseScorePacketData: object = {
  playerAddress: "",
  wonCount: 0,
  DateAdded: "",
};

export const ScorePacketData = {
  encode(message: ScorePacketData, writer: Writer = Writer.create()): Writer {
    if (message.playerAddress !== "") {
      writer.uint32(10).string(message.playerAddress);
    }
    if (message.wonCount !== 0) {
      writer.uint32(16).uint64(message.wonCount);
    }
    if (message.DateAdded !== "") {
      writer.uint32(26).string(message.DateAdded);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): ScorePacketData {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseScorePacketData } as ScorePacketData;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.playerAddress = reader.string();
          break;
        case 2:
          message.wonCount = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.DateAdded = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ScorePacketData {
    const message = { ...baseScorePacketData } as ScorePacketData;
    if (object.playerAddress !== undefined && object.playerAddress !== null) {
      message.playerAddress = String(object.playerAddress);
    } else {
      message.playerAddress = "";
    }
    if (object.wonCount !== undefined && object.wonCount !== null) {
      message.wonCount = Number(object.wonCount);
    } else {
      message.wonCount = 0;
    }
    if (object.DateAdded !== undefined && object.DateAdded !== null) {
      message.DateAdded = String(object.DateAdded);
    } else {
      message.DateAdded = "";
    }
    return message;
  },

  toJSON(message: ScorePacketData): unknown {
    const obj: any = {};
    message.playerAddress !== undefined &&
      (obj.playerAddress = message.playerAddress);
    message.wonCount !== undefined && (obj.wonCount = message.wonCount);
    message.DateAdded !== undefined && (obj.DateAdded = message.DateAdded);
    return obj;
  },

  fromPartial(object: DeepPartial<ScorePacketData>): ScorePacketData {
    const message = { ...baseScorePacketData } as ScorePacketData;
    if (object.playerAddress !== undefined && object.playerAddress !== null) {
      message.playerAddress = object.playerAddress;
    } else {
      message.playerAddress = "";
    }
    if (object.wonCount !== undefined && object.wonCount !== null) {
      message.wonCount = object.wonCount;
    } else {
      message.wonCount = 0;
    }
    if (object.DateAdded !== undefined && object.DateAdded !== null) {
      message.DateAdded = object.DateAdded;
    } else {
      message.DateAdded = "";
    }
    return message;
  },
};

const baseScorePacketAck: object = {};

export const ScorePacketAck = {
  encode(_: ScorePacketAck, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): ScorePacketAck {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseScorePacketAck } as ScorePacketAck;
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

  fromJSON(_: any): ScorePacketAck {
    const message = { ...baseScorePacketAck } as ScorePacketAck;
    return message;
  },

  toJSON(_: ScorePacketAck): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<ScorePacketAck>): ScorePacketAck {
    const message = { ...baseScorePacketAck } as ScorePacketAck;
    return message;
  },
};

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
