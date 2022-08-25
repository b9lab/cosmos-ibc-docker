/* eslint-disable */
import { Reader, Writer } from 'protobufjs/minimal';
import { Board } from '../leaderboard/board';
import { PageRequest, PageResponse } from '../cosmos/base/query/v1beta1/pagination';
import { PlayerInfo } from '../leaderboard/player_info';
export const protobufPackage = 'cosmonaut.leaderboard.leaderboard';
const baseQueryGetBoardRequest = { index: '' };
export const QueryGetBoardRequest = {
    encode(message, writer = Writer.create()) {
        if (message.index !== '') {
            writer.uint32(10).string(message.index);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetBoardRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.index = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryGetBoardRequest };
        if (object.index !== undefined && object.index !== null) {
            message.index = String(object.index);
        }
        else {
            message.index = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.index !== undefined && (obj.index = message.index);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryGetBoardRequest };
        if (object.index !== undefined && object.index !== null) {
            message.index = object.index;
        }
        else {
            message.index = '';
        }
        return message;
    }
};
const baseQueryGetBoardResponse = {};
export const QueryGetBoardResponse = {
    encode(message, writer = Writer.create()) {
        if (message.Board !== undefined) {
            Board.encode(message.Board, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetBoardResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.Board = Board.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryGetBoardResponse };
        if (object.Board !== undefined && object.Board !== null) {
            message.Board = Board.fromJSON(object.Board);
        }
        else {
            message.Board = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.Board !== undefined && (obj.Board = message.Board ? Board.toJSON(message.Board) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryGetBoardResponse };
        if (object.Board !== undefined && object.Board !== null) {
            message.Board = Board.fromPartial(object.Board);
        }
        else {
            message.Board = undefined;
        }
        return message;
    }
};
const baseQueryAllBoardRequest = {};
export const QueryAllBoardRequest = {
    encode(message, writer = Writer.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAllBoardRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryAllBoardRequest };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryAllBoardRequest };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    }
};
const baseQueryAllBoardResponse = {};
export const QueryAllBoardResponse = {
    encode(message, writer = Writer.create()) {
        for (const v of message.Board) {
            Board.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAllBoardResponse };
        message.Board = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.Board.push(Board.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryAllBoardResponse };
        message.Board = [];
        if (object.Board !== undefined && object.Board !== null) {
            for (const e of object.Board) {
                message.Board.push(Board.fromJSON(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.Board) {
            obj.Board = message.Board.map((e) => (e ? Board.toJSON(e) : undefined));
        }
        else {
            obj.Board = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryAllBoardResponse };
        message.Board = [];
        if (object.Board !== undefined && object.Board !== null) {
            for (const e of object.Board) {
                message.Board.push(Board.fromPartial(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    }
};
const baseQueryGetPlayerInfoRequest = { index: '' };
export const QueryGetPlayerInfoRequest = {
    encode(message, writer = Writer.create()) {
        if (message.index !== '') {
            writer.uint32(10).string(message.index);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetPlayerInfoRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.index = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryGetPlayerInfoRequest };
        if (object.index !== undefined && object.index !== null) {
            message.index = String(object.index);
        }
        else {
            message.index = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.index !== undefined && (obj.index = message.index);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryGetPlayerInfoRequest };
        if (object.index !== undefined && object.index !== null) {
            message.index = object.index;
        }
        else {
            message.index = '';
        }
        return message;
    }
};
const baseQueryGetPlayerInfoResponse = {};
export const QueryGetPlayerInfoResponse = {
    encode(message, writer = Writer.create()) {
        if (message.PlayerInfo !== undefined) {
            PlayerInfo.encode(message.PlayerInfo, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetPlayerInfoResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.PlayerInfo = PlayerInfo.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryGetPlayerInfoResponse };
        if (object.PlayerInfo !== undefined && object.PlayerInfo !== null) {
            message.PlayerInfo = PlayerInfo.fromJSON(object.PlayerInfo);
        }
        else {
            message.PlayerInfo = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.PlayerInfo !== undefined && (obj.PlayerInfo = message.PlayerInfo ? PlayerInfo.toJSON(message.PlayerInfo) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryGetPlayerInfoResponse };
        if (object.PlayerInfo !== undefined && object.PlayerInfo !== null) {
            message.PlayerInfo = PlayerInfo.fromPartial(object.PlayerInfo);
        }
        else {
            message.PlayerInfo = undefined;
        }
        return message;
    }
};
const baseQueryAllPlayerInfoRequest = {};
export const QueryAllPlayerInfoRequest = {
    encode(message, writer = Writer.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAllPlayerInfoRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryAllPlayerInfoRequest };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryAllPlayerInfoRequest };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    }
};
const baseQueryAllPlayerInfoResponse = {};
export const QueryAllPlayerInfoResponse = {
    encode(message, writer = Writer.create()) {
        for (const v of message.PlayerInfo) {
            PlayerInfo.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAllPlayerInfoResponse };
        message.PlayerInfo = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.PlayerInfo.push(PlayerInfo.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryAllPlayerInfoResponse };
        message.PlayerInfo = [];
        if (object.PlayerInfo !== undefined && object.PlayerInfo !== null) {
            for (const e of object.PlayerInfo) {
                message.PlayerInfo.push(PlayerInfo.fromJSON(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.PlayerInfo) {
            obj.PlayerInfo = message.PlayerInfo.map((e) => (e ? PlayerInfo.toJSON(e) : undefined));
        }
        else {
            obj.PlayerInfo = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryAllPlayerInfoResponse };
        message.PlayerInfo = [];
        if (object.PlayerInfo !== undefined && object.PlayerInfo !== null) {
            for (const e of object.PlayerInfo) {
                message.PlayerInfo.push(PlayerInfo.fromPartial(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    }
};
export class QueryClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
    }
    Board(request) {
        const data = QueryGetBoardRequest.encode(request).finish();
        const promise = this.rpc.request('cosmonaut.leaderboard.leaderboard.Query', 'Board', data);
        return promise.then((data) => QueryGetBoardResponse.decode(new Reader(data)));
    }
    BoardAll(request) {
        const data = QueryAllBoardRequest.encode(request).finish();
        const promise = this.rpc.request('cosmonaut.leaderboard.leaderboard.Query', 'BoardAll', data);
        return promise.then((data) => QueryAllBoardResponse.decode(new Reader(data)));
    }
    PlayerInfo(request) {
        const data = QueryGetPlayerInfoRequest.encode(request).finish();
        const promise = this.rpc.request('cosmonaut.leaderboard.leaderboard.Query', 'PlayerInfo', data);
        return promise.then((data) => QueryGetPlayerInfoResponse.decode(new Reader(data)));
    }
    PlayerInfoAll(request) {
        const data = QueryAllPlayerInfoRequest.encode(request).finish();
        const promise = this.rpc.request('cosmonaut.leaderboard.leaderboard.Query', 'PlayerInfoAll', data);
        return promise.then((data) => QueryAllPlayerInfoResponse.decode(new Reader(data)));
    }
}
