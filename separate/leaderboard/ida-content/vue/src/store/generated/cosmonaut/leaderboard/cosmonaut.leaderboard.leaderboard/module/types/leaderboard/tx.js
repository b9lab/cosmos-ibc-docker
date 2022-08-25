/* eslint-disable */
import { Reader, util, configure, Writer } from 'protobufjs/minimal';
import * as Long from 'long';
export const protobufPackage = 'cosmonaut.leaderboard.leaderboard';
const baseMsgSendIbcTopRank = { sender: '', port: '', channelID: '', timeoutTimestamp: 0, playerId: '', score: 0, dateAdded: '', gameId: '' };
export const MsgSendIbcTopRank = {
    encode(message, writer = Writer.create()) {
        if (message.sender !== '') {
            writer.uint32(10).string(message.sender);
        }
        if (message.port !== '') {
            writer.uint32(18).string(message.port);
        }
        if (message.channelID !== '') {
            writer.uint32(26).string(message.channelID);
        }
        if (message.timeoutTimestamp !== 0) {
            writer.uint32(32).uint64(message.timeoutTimestamp);
        }
        if (message.playerId !== '') {
            writer.uint32(42).string(message.playerId);
        }
        if (message.score !== 0) {
            writer.uint32(48).uint64(message.score);
        }
        if (message.dateAdded !== '') {
            writer.uint32(58).string(message.dateAdded);
        }
        if (message.gameId !== '') {
            writer.uint32(66).string(message.gameId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgSendIbcTopRank };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.port = reader.string();
                    break;
                case 3:
                    message.channelID = reader.string();
                    break;
                case 4:
                    message.timeoutTimestamp = longToNumber(reader.uint64());
                    break;
                case 5:
                    message.playerId = reader.string();
                    break;
                case 6:
                    message.score = longToNumber(reader.uint64());
                    break;
                case 7:
                    message.dateAdded = reader.string();
                    break;
                case 8:
                    message.gameId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgSendIbcTopRank };
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = String(object.sender);
        }
        else {
            message.sender = '';
        }
        if (object.port !== undefined && object.port !== null) {
            message.port = String(object.port);
        }
        else {
            message.port = '';
        }
        if (object.channelID !== undefined && object.channelID !== null) {
            message.channelID = String(object.channelID);
        }
        else {
            message.channelID = '';
        }
        if (object.timeoutTimestamp !== undefined && object.timeoutTimestamp !== null) {
            message.timeoutTimestamp = Number(object.timeoutTimestamp);
        }
        else {
            message.timeoutTimestamp = 0;
        }
        if (object.playerId !== undefined && object.playerId !== null) {
            message.playerId = String(object.playerId);
        }
        else {
            message.playerId = '';
        }
        if (object.score !== undefined && object.score !== null) {
            message.score = Number(object.score);
        }
        else {
            message.score = 0;
        }
        if (object.dateAdded !== undefined && object.dateAdded !== null) {
            message.dateAdded = String(object.dateAdded);
        }
        else {
            message.dateAdded = '';
        }
        if (object.gameId !== undefined && object.gameId !== null) {
            message.gameId = String(object.gameId);
        }
        else {
            message.gameId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        message.port !== undefined && (obj.port = message.port);
        message.channelID !== undefined && (obj.channelID = message.channelID);
        message.timeoutTimestamp !== undefined && (obj.timeoutTimestamp = message.timeoutTimestamp);
        message.playerId !== undefined && (obj.playerId = message.playerId);
        message.score !== undefined && (obj.score = message.score);
        message.dateAdded !== undefined && (obj.dateAdded = message.dateAdded);
        message.gameId !== undefined && (obj.gameId = message.gameId);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgSendIbcTopRank };
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        else {
            message.sender = '';
        }
        if (object.port !== undefined && object.port !== null) {
            message.port = object.port;
        }
        else {
            message.port = '';
        }
        if (object.channelID !== undefined && object.channelID !== null) {
            message.channelID = object.channelID;
        }
        else {
            message.channelID = '';
        }
        if (object.timeoutTimestamp !== undefined && object.timeoutTimestamp !== null) {
            message.timeoutTimestamp = object.timeoutTimestamp;
        }
        else {
            message.timeoutTimestamp = 0;
        }
        if (object.playerId !== undefined && object.playerId !== null) {
            message.playerId = object.playerId;
        }
        else {
            message.playerId = '';
        }
        if (object.score !== undefined && object.score !== null) {
            message.score = object.score;
        }
        else {
            message.score = 0;
        }
        if (object.dateAdded !== undefined && object.dateAdded !== null) {
            message.dateAdded = object.dateAdded;
        }
        else {
            message.dateAdded = '';
        }
        if (object.gameId !== undefined && object.gameId !== null) {
            message.gameId = object.gameId;
        }
        else {
            message.gameId = '';
        }
        return message;
    }
};
const baseMsgSendIbcTopRankResponse = {};
export const MsgSendIbcTopRankResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgSendIbcTopRankResponse };
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
    fromJSON(_) {
        const message = { ...baseMsgSendIbcTopRankResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgSendIbcTopRankResponse };
        return message;
    }
};
export class MsgClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
    }
    SendIbcTopRank(request) {
        const data = MsgSendIbcTopRank.encode(request).finish();
        const promise = this.rpc.request('cosmonaut.leaderboard.leaderboard.Msg', 'SendIbcTopRank', data);
        return promise.then((data) => MsgSendIbcTopRankResponse.decode(new Reader(data)));
    }
}
var globalThis = (() => {
    if (typeof globalThis !== 'undefined')
        return globalThis;
    if (typeof self !== 'undefined')
        return self;
    if (typeof window !== 'undefined')
        return window;
    if (typeof global !== 'undefined')
        return global;
    throw 'Unable to locate global object';
})();
function longToNumber(long) {
    if (long.gt(Number.MAX_SAFE_INTEGER)) {
        throw new globalThis.Error('Value is larger than Number.MAX_SAFE_INTEGER');
    }
    return long.toNumber();
}
if (util.Long !== Long) {
    util.Long = Long;
    configure();
}
