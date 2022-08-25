/* eslint-disable */
import { PlayerInfo } from '../leaderboard/player_info';
import { Writer, Reader } from 'protobufjs/minimal';
export const protobufPackage = 'cosmonaut.leaderboard.leaderboard';
const baseBoard = { gameID: '' };
export const Board = {
    encode(message, writer = Writer.create()) {
        for (const v of message.player) {
            PlayerInfo.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.gameID !== '') {
            writer.uint32(18).string(message.gameID);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseBoard };
        message.player = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.player.push(PlayerInfo.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.gameID = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseBoard };
        message.player = [];
        if (object.player !== undefined && object.player !== null) {
            for (const e of object.player) {
                message.player.push(PlayerInfo.fromJSON(e));
            }
        }
        if (object.gameID !== undefined && object.gameID !== null) {
            message.gameID = String(object.gameID);
        }
        else {
            message.gameID = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.player) {
            obj.player = message.player.map((e) => (e ? PlayerInfo.toJSON(e) : undefined));
        }
        else {
            obj.player = [];
        }
        message.gameID !== undefined && (obj.gameID = message.gameID);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseBoard };
        message.player = [];
        if (object.player !== undefined && object.player !== null) {
            for (const e of object.player) {
                message.player.push(PlayerInfo.fromPartial(e));
            }
        }
        if (object.gameID !== undefined && object.gameID !== null) {
            message.gameID = object.gameID;
        }
        else {
            message.gameID = '';
        }
        return message;
    }
};
