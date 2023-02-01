/* eslint-disable */
import { PlayerInfo } from "../leaderboard/player_info";
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "leaderboard.leaderboard";

export interface LeaderboardPacketData {
  noData: NoData | undefined;
  /** this line is used by starport scaffolding # ibc/packet/proto/field */
  candidatePacket: CandidatePacketData | undefined;
}

export interface NoData {}

/** CandidatePacketData defines a struct for the packet payload */
export interface CandidatePacketData {
  playerInfo: PlayerInfo | undefined;
}

/** CandidatePacketAck defines a struct for the packet acknowledgment */
export interface CandidatePacketAck {}

const baseLeaderboardPacketData: object = {};

export const LeaderboardPacketData = {
  encode(
    message: LeaderboardPacketData,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.noData !== undefined) {
      NoData.encode(message.noData, writer.uint32(10).fork()).ldelim();
    }
    if (message.candidatePacket !== undefined) {
      CandidatePacketData.encode(
        message.candidatePacket,
        writer.uint32(18).fork()
      ).ldelim();
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
        case 2:
          message.candidatePacket = CandidatePacketData.decode(
            reader,
            reader.uint32()
          );
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
    if (
      object.candidatePacket !== undefined &&
      object.candidatePacket !== null
    ) {
      message.candidatePacket = CandidatePacketData.fromJSON(
        object.candidatePacket
      );
    } else {
      message.candidatePacket = undefined;
    }
    return message;
  },

  toJSON(message: LeaderboardPacketData): unknown {
    const obj: any = {};
    message.noData !== undefined &&
      (obj.noData = message.noData ? NoData.toJSON(message.noData) : undefined);
    message.candidatePacket !== undefined &&
      (obj.candidatePacket = message.candidatePacket
        ? CandidatePacketData.toJSON(message.candidatePacket)
        : undefined);
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
    if (
      object.candidatePacket !== undefined &&
      object.candidatePacket !== null
    ) {
      message.candidatePacket = CandidatePacketData.fromPartial(
        object.candidatePacket
      );
    } else {
      message.candidatePacket = undefined;
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

const baseCandidatePacketData: object = {};

export const CandidatePacketData = {
  encode(
    message: CandidatePacketData,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.playerInfo !== undefined) {
      PlayerInfo.encode(message.playerInfo, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): CandidatePacketData {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCandidatePacketData } as CandidatePacketData;
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

  fromJSON(object: any): CandidatePacketData {
    const message = { ...baseCandidatePacketData } as CandidatePacketData;
    if (object.playerInfo !== undefined && object.playerInfo !== null) {
      message.playerInfo = PlayerInfo.fromJSON(object.playerInfo);
    } else {
      message.playerInfo = undefined;
    }
    return message;
  },

  toJSON(message: CandidatePacketData): unknown {
    const obj: any = {};
    message.playerInfo !== undefined &&
      (obj.playerInfo = message.playerInfo
        ? PlayerInfo.toJSON(message.playerInfo)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<CandidatePacketData>): CandidatePacketData {
    const message = { ...baseCandidatePacketData } as CandidatePacketData;
    if (object.playerInfo !== undefined && object.playerInfo !== null) {
      message.playerInfo = PlayerInfo.fromPartial(object.playerInfo);
    } else {
      message.playerInfo = undefined;
    }
    return message;
  },
};

const baseCandidatePacketAck: object = {};

export const CandidatePacketAck = {
  encode(_: CandidatePacketAck, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): CandidatePacketAck {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCandidatePacketAck } as CandidatePacketAck;
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

  fromJSON(_: any): CandidatePacketAck {
    const message = { ...baseCandidatePacketAck } as CandidatePacketAck;
    return message;
  },

  toJSON(_: CandidatePacketAck): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<CandidatePacketAck>): CandidatePacketAck {
    const message = { ...baseCandidatePacketAck } as CandidatePacketAck;
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
