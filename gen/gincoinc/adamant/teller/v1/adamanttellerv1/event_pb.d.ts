// package: adamant.teller.v1
// file: gincoinc/adamant/teller/v1/adamanttellerv1/event.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as gincoinc_global_v1_gincoincglobalv1_enum_pb from "../../../../../gincoinc/global/v1/gincoincglobalv1/enum_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class TransferUpdated extends jspb.Message { 
    getWalletId(): string;
    setWalletId(value: string): TransferUpdated;
    getTransferId(): string;
    setTransferId(value: string): TransferUpdated;
    getCoin(): gincoinc_global_v1_gincoincglobalv1_enum_pb.Coin;
    setCoin(value: gincoinc_global_v1_gincoincglobalv1_enum_pb.Coin): TransferUpdated;
    getTxId(): string;
    setTxId(value: string): TransferUpdated;
    getTxIndex(): number;
    setTxIndex(value: number): TransferUpdated;
    getValue(): number;
    setValue(value: number): TransferUpdated;
    getStringValue(): string;
    setStringValue(value: string): TransferUpdated;
    getJpyRate(): number;
    setJpyRate(value: number): TransferUpdated;
    getAddress(): string;
    setAddress(value: string): TransferUpdated;
    getDestinationTag(): number;
    setDestinationTag(value: number): TransferUpdated;
    getMemoId(): number;
    setMemoId(value: number): TransferUpdated;
    getState(): gincoinc_global_v1_gincoincglobalv1_enum_pb.TransactionState;
    setState(value: gincoinc_global_v1_gincoincglobalv1_enum_pb.TransactionState): TransferUpdated;
    getResult(): gincoinc_global_v1_gincoincglobalv1_enum_pb.TransactionResult;
    setResult(value: gincoinc_global_v1_gincoincglobalv1_enum_pb.TransactionResult): TransferUpdated;
    getTransferType(): gincoinc_global_v1_gincoincglobalv1_enum_pb.TransferType;
    setTransferType(value: gincoinc_global_v1_gincoincglobalv1_enum_pb.TransferType): TransferUpdated;
    getFrom(): string;
    setFrom(value: string): TransferUpdated;
    getTo(): string;
    setTo(value: string): TransferUpdated;

    hasTime(): boolean;
    clearTime(): void;
    getTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setTime(value?: google_protobuf_timestamp_pb.Timestamp): TransferUpdated;
    getEventId(): string;
    setEventId(value: string): TransferUpdated;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TransferUpdated.AsObject;
    static toObject(includeInstance: boolean, msg: TransferUpdated): TransferUpdated.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TransferUpdated, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TransferUpdated;
    static deserializeBinaryFromReader(message: TransferUpdated, reader: jspb.BinaryReader): TransferUpdated;
}

export namespace TransferUpdated {
    export type AsObject = {
        walletId: string,
        transferId: string,
        coin: gincoinc_global_v1_gincoincglobalv1_enum_pb.Coin,
        txId: string,
        txIndex: number,
        value: number,
        stringValue: string,
        jpyRate: number,
        address: string,
        destinationTag: number,
        memoId: number,
        state: gincoinc_global_v1_gincoincglobalv1_enum_pb.TransactionState,
        result: gincoinc_global_v1_gincoincglobalv1_enum_pb.TransactionResult,
        transferType: gincoinc_global_v1_gincoincglobalv1_enum_pb.TransferType,
        from: string,
        to: string,
        time?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        eventId: string,
    }
}

export class TransferUpdateEvent extends jspb.Message { 
    getEventId(): string;
    setEventId(value: string): TransferUpdateEvent;
    getWalletId(): string;
    setWalletId(value: string): TransferUpdateEvent;
    getCoin(): gincoinc_global_v1_gincoincglobalv1_enum_pb.Coin;
    setCoin(value: gincoinc_global_v1_gincoincglobalv1_enum_pb.Coin): TransferUpdateEvent;
    getTxId(): string;
    setTxId(value: string): TransferUpdateEvent;
    getTxIndex(): number;
    setTxIndex(value: number): TransferUpdateEvent;
    getValue(): number;
    setValue(value: number): TransferUpdateEvent;
    getStringValue(): string;
    setStringValue(value: string): TransferUpdateEvent;
    getJpyRate(): number;
    setJpyRate(value: number): TransferUpdateEvent;
    getAddress(): string;
    setAddress(value: string): TransferUpdateEvent;
    getDestinationTag(): number;
    setDestinationTag(value: number): TransferUpdateEvent;
    getMemoId(): number;
    setMemoId(value: number): TransferUpdateEvent;
    getState(): gincoinc_global_v1_gincoincglobalv1_enum_pb.TransactionState;
    setState(value: gincoinc_global_v1_gincoincglobalv1_enum_pb.TransactionState): TransferUpdateEvent;
    getResult(): gincoinc_global_v1_gincoincglobalv1_enum_pb.TransactionResult;
    setResult(value: gincoinc_global_v1_gincoincglobalv1_enum_pb.TransactionResult): TransferUpdateEvent;
    getTransferType(): gincoinc_global_v1_gincoincglobalv1_enum_pb.TransferType;
    setTransferType(value: gincoinc_global_v1_gincoincglobalv1_enum_pb.TransferType): TransferUpdateEvent;

    hasTime(): boolean;
    clearTime(): void;
    getTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setTime(value?: google_protobuf_timestamp_pb.Timestamp): TransferUpdateEvent;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TransferUpdateEvent.AsObject;
    static toObject(includeInstance: boolean, msg: TransferUpdateEvent): TransferUpdateEvent.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TransferUpdateEvent, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TransferUpdateEvent;
    static deserializeBinaryFromReader(message: TransferUpdateEvent, reader: jspb.BinaryReader): TransferUpdateEvent;
}

export namespace TransferUpdateEvent {
    export type AsObject = {
        eventId: string,
        walletId: string,
        coin: gincoinc_global_v1_gincoincglobalv1_enum_pb.Coin,
        txId: string,
        txIndex: number,
        value: number,
        stringValue: string,
        jpyRate: number,
        address: string,
        destinationTag: number,
        memoId: number,
        state: gincoinc_global_v1_gincoincglobalv1_enum_pb.TransactionState,
        result: gincoinc_global_v1_gincoincglobalv1_enum_pb.TransactionResult,
        transferType: gincoinc_global_v1_gincoincglobalv1_enum_pb.TransferType,
        time?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}
