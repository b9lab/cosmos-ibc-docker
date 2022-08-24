/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";
export const protobufPackage = "tmsdkeys.leaderboard.leaderboard";
const baseMsgSendIbcTopRank = {
    creator: "",
    port: "",
    channelID: "",
    timeoutTimestamp: 0,
    playerId: "",
    rank: 0,
    score: "",
};
export const MsgSendIbcTopRank = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.port !== "") {
            writer.uint32(18).string(message.port);
        }
        if (message.channelID !== "") {
            writer.uint32(26).string(message.channelID);
        }
        if (message.timeoutTimestamp !== 0) {
            writer.uint32(32).uint64(message.timeoutTimestamp);
        }
        if (message.playerId !== "") {
            writer.uint32(42).string(message.playerId);
        }
        if (message.rank !== 0) {
            writer.uint32(48).uint64(message.rank);
        }
        if (message.score !== "") {
            writer.uint32(58).string(message.score);
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
                    message.creator = reader.string();
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
                    message.rank = longToNumber(reader.uint64());
                    break;
                case 7:
                    message.score = reader.string();
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
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
        if (object.port !== undefined && object.port !== null) {
            message.port = String(object.port);
        }
        else {
            message.port = "";
        }
        if (object.channelID !== undefined && object.channelID !== null) {
            message.channelID = String(object.channelID);
        }
        else {
            message.channelID = "";
        }
        if (object.timeoutTimestamp !== undefined &&
            object.timeoutTimestamp !== null) {
            message.timeoutTimestamp = Number(object.timeoutTimestamp);
        }
        else {
            message.timeoutTimestamp = 0;
        }
        if (object.playerId !== undefined && object.playerId !== null) {
            message.playerId = String(object.playerId);
        }
        else {
            message.playerId = "";
        }
        if (object.rank !== undefined && object.rank !== null) {
            message.rank = Number(object.rank);
        }
        else {
            message.rank = 0;
        }
        if (object.score !== undefined && object.score !== null) {
            message.score = String(object.score);
        }
        else {
            message.score = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.port !== undefined && (obj.port = message.port);
        message.channelID !== undefined && (obj.channelID = message.channelID);
        message.timeoutTimestamp !== undefined &&
            (obj.timeoutTimestamp = message.timeoutTimestamp);
        message.playerId !== undefined && (obj.playerId = message.playerId);
        message.rank !== undefined && (obj.rank = message.rank);
        message.score !== undefined && (obj.score = message.score);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgSendIbcTopRank };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        if (object.port !== undefined && object.port !== null) {
            message.port = object.port;
        }
        else {
            message.port = "";
        }
        if (object.channelID !== undefined && object.channelID !== null) {
            message.channelID = object.channelID;
        }
        else {
            message.channelID = "";
        }
        if (object.timeoutTimestamp !== undefined &&
            object.timeoutTimestamp !== null) {
            message.timeoutTimestamp = object.timeoutTimestamp;
        }
        else {
            message.timeoutTimestamp = 0;
        }
        if (object.playerId !== undefined && object.playerId !== null) {
            message.playerId = object.playerId;
        }
        else {
            message.playerId = "";
        }
        if (object.rank !== undefined && object.rank !== null) {
            message.rank = object.rank;
        }
        else {
            message.rank = 0;
        }
        if (object.score !== undefined && object.score !== null) {
            message.score = object.score;
        }
        else {
            message.score = "";
        }
        return message;
    },
};
const baseMsgSendIbcTopRankResponse = {};
export const MsgSendIbcTopRankResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgSendIbcTopRankResponse,
        };
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
        const message = {
            ...baseMsgSendIbcTopRankResponse,
        };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = {
            ...baseMsgSendIbcTopRankResponse,
        };
        return message;
    },
};
export class MsgClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
    }
    SendIbcTopRank(request) {
        const data = MsgSendIbcTopRank.encode(request).finish();
        const promise = this.rpc.request("tmsdkeys.leaderboard.leaderboard.Msg", "SendIbcTopRank", data);
        return promise.then((data) => MsgSendIbcTopRankResponse.decode(new Reader(data)));
    }
}
var globalThis = (() => {
    if (typeof globalThis !== "undefined")
        return globalThis;
    if (typeof self !== "undefined")
        return self;
    if (typeof window !== "undefined")
        return window;
    if (typeof global !== "undefined")
        return global;
    throw "Unable to locate global object";
})();
function longToNumber(long) {
    if (long.gt(Number.MAX_SAFE_INTEGER)) {
        throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
    }
    return long.toNumber();
}
if (util.Long !== Long) {
    util.Long = Long;
    configure();
}
