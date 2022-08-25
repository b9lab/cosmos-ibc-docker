/* eslint-disable */
import { Reader, Writer } from 'protobufjs/minimal'
import { Board } from '../leaderboard/board'
import { PageRequest, PageResponse } from '../cosmos/base/query/v1beta1/pagination'
import { PlayerInfo } from '../leaderboard/player_info'

export const protobufPackage = 'cosmonaut.leaderboard.leaderboard'

/** this line is used by starport scaffolding # 3 */
export interface QueryGetBoardRequest {
  index: string
}

export interface QueryGetBoardResponse {
  Board: Board | undefined
}

export interface QueryAllBoardRequest {
  pagination: PageRequest | undefined
}

export interface QueryAllBoardResponse {
  Board: Board[]
  pagination: PageResponse | undefined
}

export interface QueryGetPlayerInfoRequest {
  index: string
}

export interface QueryGetPlayerInfoResponse {
  PlayerInfo: PlayerInfo | undefined
}

export interface QueryAllPlayerInfoRequest {
  pagination: PageRequest | undefined
}

export interface QueryAllPlayerInfoResponse {
  PlayerInfo: PlayerInfo[]
  pagination: PageResponse | undefined
}

const baseQueryGetBoardRequest: object = { index: '' }

export const QueryGetBoardRequest = {
  encode(message: QueryGetBoardRequest, writer: Writer = Writer.create()): Writer {
    if (message.index !== '') {
      writer.uint32(10).string(message.index)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetBoardRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetBoardRequest } as QueryGetBoardRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryGetBoardRequest {
    const message = { ...baseQueryGetBoardRequest } as QueryGetBoardRequest
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index)
    } else {
      message.index = ''
    }
    return message
  },

  toJSON(message: QueryGetBoardRequest): unknown {
    const obj: any = {}
    message.index !== undefined && (obj.index = message.index)
    return obj
  },

  fromPartial(object: DeepPartial<QueryGetBoardRequest>): QueryGetBoardRequest {
    const message = { ...baseQueryGetBoardRequest } as QueryGetBoardRequest
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index
    } else {
      message.index = ''
    }
    return message
  }
}

const baseQueryGetBoardResponse: object = {}

export const QueryGetBoardResponse = {
  encode(message: QueryGetBoardResponse, writer: Writer = Writer.create()): Writer {
    if (message.Board !== undefined) {
      Board.encode(message.Board, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetBoardResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetBoardResponse } as QueryGetBoardResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.Board = Board.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryGetBoardResponse {
    const message = { ...baseQueryGetBoardResponse } as QueryGetBoardResponse
    if (object.Board !== undefined && object.Board !== null) {
      message.Board = Board.fromJSON(object.Board)
    } else {
      message.Board = undefined
    }
    return message
  },

  toJSON(message: QueryGetBoardResponse): unknown {
    const obj: any = {}
    message.Board !== undefined && (obj.Board = message.Board ? Board.toJSON(message.Board) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryGetBoardResponse>): QueryGetBoardResponse {
    const message = { ...baseQueryGetBoardResponse } as QueryGetBoardResponse
    if (object.Board !== undefined && object.Board !== null) {
      message.Board = Board.fromPartial(object.Board)
    } else {
      message.Board = undefined
    }
    return message
  }
}

const baseQueryAllBoardRequest: object = {}

export const QueryAllBoardRequest = {
  encode(message: QueryAllBoardRequest, writer: Writer = Writer.create()): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllBoardRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryAllBoardRequest } as QueryAllBoardRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryAllBoardRequest {
    const message = { ...baseQueryAllBoardRequest } as QueryAllBoardRequest
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryAllBoardRequest): unknown {
    const obj: any = {}
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryAllBoardRequest>): QueryAllBoardRequest {
    const message = { ...baseQueryAllBoardRequest } as QueryAllBoardRequest
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  }
}

const baseQueryAllBoardResponse: object = {}

export const QueryAllBoardResponse = {
  encode(message: QueryAllBoardResponse, writer: Writer = Writer.create()): Writer {
    for (const v of message.Board) {
      Board.encode(v!, writer.uint32(10).fork()).ldelim()
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllBoardResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryAllBoardResponse } as QueryAllBoardResponse
    message.Board = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.Board.push(Board.decode(reader, reader.uint32()))
          break
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryAllBoardResponse {
    const message = { ...baseQueryAllBoardResponse } as QueryAllBoardResponse
    message.Board = []
    if (object.Board !== undefined && object.Board !== null) {
      for (const e of object.Board) {
        message.Board.push(Board.fromJSON(e))
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryAllBoardResponse): unknown {
    const obj: any = {}
    if (message.Board) {
      obj.Board = message.Board.map((e) => (e ? Board.toJSON(e) : undefined))
    } else {
      obj.Board = []
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryAllBoardResponse>): QueryAllBoardResponse {
    const message = { ...baseQueryAllBoardResponse } as QueryAllBoardResponse
    message.Board = []
    if (object.Board !== undefined && object.Board !== null) {
      for (const e of object.Board) {
        message.Board.push(Board.fromPartial(e))
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  }
}

const baseQueryGetPlayerInfoRequest: object = { index: '' }

export const QueryGetPlayerInfoRequest = {
  encode(message: QueryGetPlayerInfoRequest, writer: Writer = Writer.create()): Writer {
    if (message.index !== '') {
      writer.uint32(10).string(message.index)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetPlayerInfoRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetPlayerInfoRequest } as QueryGetPlayerInfoRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryGetPlayerInfoRequest {
    const message = { ...baseQueryGetPlayerInfoRequest } as QueryGetPlayerInfoRequest
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index)
    } else {
      message.index = ''
    }
    return message
  },

  toJSON(message: QueryGetPlayerInfoRequest): unknown {
    const obj: any = {}
    message.index !== undefined && (obj.index = message.index)
    return obj
  },

  fromPartial(object: DeepPartial<QueryGetPlayerInfoRequest>): QueryGetPlayerInfoRequest {
    const message = { ...baseQueryGetPlayerInfoRequest } as QueryGetPlayerInfoRequest
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index
    } else {
      message.index = ''
    }
    return message
  }
}

const baseQueryGetPlayerInfoResponse: object = {}

export const QueryGetPlayerInfoResponse = {
  encode(message: QueryGetPlayerInfoResponse, writer: Writer = Writer.create()): Writer {
    if (message.PlayerInfo !== undefined) {
      PlayerInfo.encode(message.PlayerInfo, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetPlayerInfoResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetPlayerInfoResponse } as QueryGetPlayerInfoResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.PlayerInfo = PlayerInfo.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryGetPlayerInfoResponse {
    const message = { ...baseQueryGetPlayerInfoResponse } as QueryGetPlayerInfoResponse
    if (object.PlayerInfo !== undefined && object.PlayerInfo !== null) {
      message.PlayerInfo = PlayerInfo.fromJSON(object.PlayerInfo)
    } else {
      message.PlayerInfo = undefined
    }
    return message
  },

  toJSON(message: QueryGetPlayerInfoResponse): unknown {
    const obj: any = {}
    message.PlayerInfo !== undefined && (obj.PlayerInfo = message.PlayerInfo ? PlayerInfo.toJSON(message.PlayerInfo) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryGetPlayerInfoResponse>): QueryGetPlayerInfoResponse {
    const message = { ...baseQueryGetPlayerInfoResponse } as QueryGetPlayerInfoResponse
    if (object.PlayerInfo !== undefined && object.PlayerInfo !== null) {
      message.PlayerInfo = PlayerInfo.fromPartial(object.PlayerInfo)
    } else {
      message.PlayerInfo = undefined
    }
    return message
  }
}

const baseQueryAllPlayerInfoRequest: object = {}

export const QueryAllPlayerInfoRequest = {
  encode(message: QueryAllPlayerInfoRequest, writer: Writer = Writer.create()): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllPlayerInfoRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryAllPlayerInfoRequest } as QueryAllPlayerInfoRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryAllPlayerInfoRequest {
    const message = { ...baseQueryAllPlayerInfoRequest } as QueryAllPlayerInfoRequest
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryAllPlayerInfoRequest): unknown {
    const obj: any = {}
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryAllPlayerInfoRequest>): QueryAllPlayerInfoRequest {
    const message = { ...baseQueryAllPlayerInfoRequest } as QueryAllPlayerInfoRequest
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  }
}

const baseQueryAllPlayerInfoResponse: object = {}

export const QueryAllPlayerInfoResponse = {
  encode(message: QueryAllPlayerInfoResponse, writer: Writer = Writer.create()): Writer {
    for (const v of message.PlayerInfo) {
      PlayerInfo.encode(v!, writer.uint32(10).fork()).ldelim()
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllPlayerInfoResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryAllPlayerInfoResponse } as QueryAllPlayerInfoResponse
    message.PlayerInfo = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.PlayerInfo.push(PlayerInfo.decode(reader, reader.uint32()))
          break
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryAllPlayerInfoResponse {
    const message = { ...baseQueryAllPlayerInfoResponse } as QueryAllPlayerInfoResponse
    message.PlayerInfo = []
    if (object.PlayerInfo !== undefined && object.PlayerInfo !== null) {
      for (const e of object.PlayerInfo) {
        message.PlayerInfo.push(PlayerInfo.fromJSON(e))
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryAllPlayerInfoResponse): unknown {
    const obj: any = {}
    if (message.PlayerInfo) {
      obj.PlayerInfo = message.PlayerInfo.map((e) => (e ? PlayerInfo.toJSON(e) : undefined))
    } else {
      obj.PlayerInfo = []
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryAllPlayerInfoResponse>): QueryAllPlayerInfoResponse {
    const message = { ...baseQueryAllPlayerInfoResponse } as QueryAllPlayerInfoResponse
    message.PlayerInfo = []
    if (object.PlayerInfo !== undefined && object.PlayerInfo !== null) {
      for (const e of object.PlayerInfo) {
        message.PlayerInfo.push(PlayerInfo.fromPartial(e))
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  }
}

/** Query defines the gRPC querier service. */
export interface Query {
  /** Queries a board by index. */
  Board(request: QueryGetBoardRequest): Promise<QueryGetBoardResponse>
  /** Queries a list of board items. */
  BoardAll(request: QueryAllBoardRequest): Promise<QueryAllBoardResponse>
  /** Queries a playerInfo by index. */
  PlayerInfo(request: QueryGetPlayerInfoRequest): Promise<QueryGetPlayerInfoResponse>
  /** Queries a list of playerInfo items. */
  PlayerInfoAll(request: QueryAllPlayerInfoRequest): Promise<QueryAllPlayerInfoResponse>
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc
  constructor(rpc: Rpc) {
    this.rpc = rpc
  }
  Board(request: QueryGetBoardRequest): Promise<QueryGetBoardResponse> {
    const data = QueryGetBoardRequest.encode(request).finish()
    const promise = this.rpc.request('cosmonaut.leaderboard.leaderboard.Query', 'Board', data)
    return promise.then((data) => QueryGetBoardResponse.decode(new Reader(data)))
  }

  BoardAll(request: QueryAllBoardRequest): Promise<QueryAllBoardResponse> {
    const data = QueryAllBoardRequest.encode(request).finish()
    const promise = this.rpc.request('cosmonaut.leaderboard.leaderboard.Query', 'BoardAll', data)
    return promise.then((data) => QueryAllBoardResponse.decode(new Reader(data)))
  }

  PlayerInfo(request: QueryGetPlayerInfoRequest): Promise<QueryGetPlayerInfoResponse> {
    const data = QueryGetPlayerInfoRequest.encode(request).finish()
    const promise = this.rpc.request('cosmonaut.leaderboard.leaderboard.Query', 'PlayerInfo', data)
    return promise.then((data) => QueryGetPlayerInfoResponse.decode(new Reader(data)))
  }

  PlayerInfoAll(request: QueryAllPlayerInfoRequest): Promise<QueryAllPlayerInfoResponse> {
    const data = QueryAllPlayerInfoRequest.encode(request).finish()
    const promise = this.rpc.request('cosmonaut.leaderboard.leaderboard.Query', 'PlayerInfoAll', data)
    return promise.then((data) => QueryAllPlayerInfoResponse.decode(new Reader(data)))
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>
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
