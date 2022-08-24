/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";
export const protobufPackage = "b9lab.checkers.checkers";
const baseCheckersPacketData = {};
export const CheckersPacketData = {
    encode(message, writer = Writer.create()) {
        if (message.noData !== undefined) {
            NoData.encode(message.noData, writer.uint32(10).fork()).ldelim();
        }
        if (message.scorePacket !== undefined) {
            ScorePacketData.encode(message.scorePacket, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCheckersPacketData };
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
    fromJSON(object) {
        const message = { ...baseCheckersPacketData };
        if (object.noData !== undefined && object.noData !== null) {
            message.noData = NoData.fromJSON(object.noData);
        }
        else {
            message.noData = undefined;
        }
        if (object.scorePacket !== undefined && object.scorePacket !== null) {
            message.scorePacket = ScorePacketData.fromJSON(object.scorePacket);
        }
        else {
            message.scorePacket = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.noData !== undefined &&
            (obj.noData = message.noData ? NoData.toJSON(message.noData) : undefined);
        message.scorePacket !== undefined &&
            (obj.scorePacket = message.scorePacket
                ? ScorePacketData.toJSON(message.scorePacket)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseCheckersPacketData };
        if (object.noData !== undefined && object.noData !== null) {
            message.noData = NoData.fromPartial(object.noData);
        }
        else {
            message.noData = undefined;
        }
        if (object.scorePacket !== undefined && object.scorePacket !== null) {
            message.scorePacket = ScorePacketData.fromPartial(object.scorePacket);
        }
        else {
            message.scorePacket = undefined;
        }
        return message;
    },
};
const baseNoData = {};
export const NoData = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseNoData };
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
        const message = { ...baseNoData };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseNoData };
        return message;
    },
};
const baseScorePacketData = {
    playerAddress: "",
    wonCount: 0,
    DateAdded: "",
};
export const ScorePacketData = {
    encode(message, writer = Writer.create()) {
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
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseScorePacketData };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.playerAddress = reader.string();
                    break;
                case 2:
                    message.wonCount = longToNumber(reader.uint64());
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
    fromJSON(object) {
        const message = { ...baseScorePacketData };
        if (object.playerAddress !== undefined && object.playerAddress !== null) {
            message.playerAddress = String(object.playerAddress);
        }
        else {
            message.playerAddress = "";
        }
        if (object.wonCount !== undefined && object.wonCount !== null) {
            message.wonCount = Number(object.wonCount);
        }
        else {
            message.wonCount = 0;
        }
        if (object.DateAdded !== undefined && object.DateAdded !== null) {
            message.DateAdded = String(object.DateAdded);
        }
        else {
            message.DateAdded = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.playerAddress !== undefined &&
            (obj.playerAddress = message.playerAddress);
        message.wonCount !== undefined && (obj.wonCount = message.wonCount);
        message.DateAdded !== undefined && (obj.DateAdded = message.DateAdded);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseScorePacketData };
        if (object.playerAddress !== undefined && object.playerAddress !== null) {
            message.playerAddress = object.playerAddress;
        }
        else {
            message.playerAddress = "";
        }
        if (object.wonCount !== undefined && object.wonCount !== null) {
            message.wonCount = object.wonCount;
        }
        else {
            message.wonCount = 0;
        }
        if (object.DateAdded !== undefined && object.DateAdded !== null) {
            message.DateAdded = object.DateAdded;
        }
        else {
            message.DateAdded = "";
        }
        return message;
    },
};
const baseScorePacketAck = {};
export const ScorePacketAck = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseScorePacketAck };
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
        const message = { ...baseScorePacketAck };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseScorePacketAck };
        return message;
    },
};
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
