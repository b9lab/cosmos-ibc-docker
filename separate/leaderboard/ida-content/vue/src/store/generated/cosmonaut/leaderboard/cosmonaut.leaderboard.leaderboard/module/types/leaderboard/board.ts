/* eslint-disable */
import { PlayerInfo } from '../leaderboard/player_info'
import { Writer, Reader } from 'protobufjs/minimal'

export const protobufPackage = 'cosmonaut.leaderboard.leaderboard'

export interface Board {
  player: PlayerInfo[]
  gameID: string
}

const baseBoard: object = { gameID: '' }

export const Board = {
  encode(message: Board, writer: Writer = Writer.create()): Writer {
    for (const v of message.player) {
      PlayerInfo.encode(v!, writer.uint32(10).fork()).ldelim()
    }
    if (message.gameID !== '') {
      writer.uint32(18).string(message.gameID)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): Board {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseBoard } as Board
    message.player = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.player.push(PlayerInfo.decode(reader, reader.uint32()))
          break
        case 2:
          message.gameID = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): Board {
    const message = { ...baseBoard } as Board
    message.player = []
    if (object.player !== undefined && object.player !== null) {
      for (const e of object.player) {
        message.player.push(PlayerInfo.fromJSON(e))
      }
    }
    if (object.gameID !== undefined && object.gameID !== null) {
      message.gameID = String(object.gameID)
    } else {
      message.gameID = ''
    }
    return message
  },

  toJSON(message: Board): unknown {
    const obj: any = {}
    if (message.player) {
      obj.player = message.player.map((e) => (e ? PlayerInfo.toJSON(e) : undefined))
    } else {
      obj.player = []
    }
    message.gameID !== undefined && (obj.gameID = message.gameID)
    return obj
  },

  fromPartial(object: DeepPartial<Board>): Board {
    const message = { ...baseBoard } as Board
    message.player = []
    if (object.player !== undefined && object.player !== null) {
      for (const e of object.player) {
        message.player.push(PlayerInfo.fromPartial(e))
      }
    }
    if (object.gameID !== undefined && object.gameID !== null) {
      message.gameID = object.gameID
    } else {
      message.gameID = ''
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
