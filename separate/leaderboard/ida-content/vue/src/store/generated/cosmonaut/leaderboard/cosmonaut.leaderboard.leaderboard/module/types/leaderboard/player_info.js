/* eslint-disable */
import * as Long from 'long';
import { util, configure, Writer, Reader } from 'protobufjs/minimal';
export const protobufPackage = 'cosmonaut.leaderboard.leaderboard';
const basePlayerInfo = { playerID: '', score: 0, dateAdded: '', gameId: '' };
export const PlayerInfo = {
    encode(message, writer = Writer.create()) {
        if (message.playerID !== '') {
            writer.uint32(10).string(message.playerID);
        }
        if (message.score !== 0) {
            writer.uint32(16).uint64(message.score);
        }
        if (message.dateAdded !== '') {
            writer.uint32(26).string(message.dateAdded);
        }
        if (message.gameId !== '') {
            writer.uint32(34).string(message.gameId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...basePlayerInfo };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.playerID = reader.string();
                    break;
                case 2:
                    message.score = longToNumber(reader.uint64());
                    break;
                case 3:
                    message.dateAdded = reader.string();
                    break;
                case 4:
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
        const message = { ...basePlayerInfo };
        if (object.playerID !== undefined && object.playerID !== null) {
            message.playerID = String(object.playerID);
        }
        else {
            message.playerID = '';
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
        message.playerID !== undefined && (obj.playerID = message.playerID);
        message.score !== undefined && (obj.score = message.score);
        message.dateAdded !== undefined && (obj.dateAdded = message.dateAdded);
        message.gameId !== undefined && (obj.gameId = message.gameId);
        return obj;
    },
    fromPartial(object) {
        const message = { ...basePlayerInfo };
        if (object.playerID !== undefined && object.playerID !== null) {
            message.playerID = object.playerID;
        }
        else {
            message.playerID = '';
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
