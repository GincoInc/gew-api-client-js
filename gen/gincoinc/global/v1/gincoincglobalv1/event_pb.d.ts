// package: gincoinc.global.v1
// file: gincoinc/global/v1/gincoincglobalv1/event.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class Event extends jspb.Message { 
    getAggregateId(): string;
    setAggregateId(value: string): Event;
    getEventId(): string;
    setEventId(value: string): Event;
    getEventType(): string;
    setEventType(value: string): Event;
    getPayload(): Uint8Array | string;
    getPayload_asU8(): Uint8Array;
    getPayload_asB64(): string;
    setPayload(value: Uint8Array | string): Event;
    getVersion(): number;
    setVersion(value: number): Event;
    getCreateTime(): number;
    setCreateTime(value: number): Event;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Event.AsObject;
    static toObject(includeInstance: boolean, msg: Event): Event.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Event, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Event;
    static deserializeBinaryFromReader(message: Event, reader: jspb.BinaryReader): Event;
}

export namespace Event {
    export type AsObject = {
        aggregateId: string,
        eventId: string,
        eventType: string,
        payload: Uint8Array | string,
        version: number,
        createTime: number,
    }
}
