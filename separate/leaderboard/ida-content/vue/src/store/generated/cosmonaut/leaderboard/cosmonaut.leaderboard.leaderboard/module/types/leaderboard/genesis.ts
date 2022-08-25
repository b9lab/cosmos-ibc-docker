/* eslint-disable */
import { Board } from '../leaderboard/board'
import { PlayerInfo } from '../leaderboard/player_info'
import { Writer, Reader } from 'protobufjs/minimal'

export const protobufPackage = 'cosmonaut.leaderboard.leaderboard'

/** GenesisState defines the leaderboard module's genesis state. */
export interface GenesisState {
  /** this line is used by starport scaffolding # genesis/proto/state */
  boardList: Board[]
  /** this line is used by starport scaffolding # genesis/proto/stateField */
  playerInfoList: PlayerInfo[]
  /** this line is used by starport scaffolding # genesis/proto/stateField */
  portId: string
}

const baseGenesisState: object = { portId: '' }

export const GenesisState = {
  encode(message: GenesisState, writer: Writer = Writer.create()): Writer {
    for (const v of message.boardList) {
      Board.encode(v!, writer.uint32(26).fork()).ldelim()
    }
    for (const v of message.playerInfoList) {
      PlayerInfo.encode(v!, writer.uint32(18).fork()).ldelim()
    }
    if (message.portId !== '') {
      writer.uint32(10).string(message.portId)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseGenesisState } as GenesisState
    message.boardList = []
    message.playerInfoList = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 3:
          message.boardList.push(Board.decode(reader, reader.uint32()))
          break
        case 2:
          message.playerInfoList.push(PlayerInfo.decode(reader, reader.uint32()))
          break
        case 1:
          message.portId = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): GenesisState {
    const message = { ...baseGenesisState } as GenesisState
    message.boardList = []
    message.playerInfoList = []
    if (object.boardList !== undefined && object.boardList !== null) {
      for (const e of object.boardList) {
        message.boardList.push(Board.fromJSON(e))
      }
    }
    if (object.playerInfoList !== undefined && object.playerInfoList !== null) {
      for (const e of object.playerInfoList) {
        message.playerInfoList.push(PlayerInfo.fromJSON(e))
      }
    }
    if (object.portId !== undefined && object.portId !== null) {
      message.portId = String(object.portId)
    } else {
      message.portId = ''
    }
    return message
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {}
    if (message.boardList) {
      obj.boardList = message.boardList.map((e) => (e ? Board.toJSON(e) : undefined))
    } else {
      obj.boardList = []
    }
    if (message.playerInfoList) {
      obj.playerInfoList = message.playerInfoList.map((e) => (e ? PlayerInfo.toJSON(e) : undefined))
    } else {
      obj.playerInfoList = []
    }
    message.portId !== undefined && (obj.portId = message.portId)
    return obj
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = { ...baseGenesisState } as GenesisState
    message.boardList = []
    message.playerInfoList = []
    if (object.boardList !== undefined && object.boardList !== null) {
      for (const e of object.boardList) {
        message.boardList.push(Board.fromPartial(e))
      }
    }
    if (object.playerInfoList !== undefined && object.playerInfoList !== null) {
      for (const e of object.playerInfoList) {
        message.playerInfoList.push(PlayerInfo.fromPartial(e))
      }
    }
    if (object.portId !== undefined && object.portId !== null) {
      message.portId = object.portId
    } else {
      message.portId = ''
    }
    return message
  }
}

type Builtin = Date | Function | Uint8Array | string | number | undefined
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>
