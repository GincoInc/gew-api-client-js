// package: adamant.teller.v1
// file: gincoinc/adamant/teller/v1/adamanttellerv1/event.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as gincoinc_global_v1_gincoincglobalv1_enum_pb from "../../../../../gincoinc/global/v1/gincoincglobalv1/enum_pb";

export class TransferUpdated extends jspb.Message { 
    getWalletId(): string;
    setWalletId(value: string): void;

    getTransferId(): string;
    setTransferId(value: string): void;

    getCoin(): gincoinc_global_v1_gincoincglobalv1_enum_pb.Coin;
    setCoin(value: gincoinc_global_v1_gincoincglobalv1_enum_pb.Coin): void;

    getTxId(): string;
    setTxId(value: string): void;

    getTxIndex(): number;
    setTxIndex(value: number): void;

    getValue(): number;
    setValue(value: number): void;

    getStringValue(): string;
    setStringValue(value: string): void;

    getJpyRate(): number;
    setJpyRate(value: number): void;

    getAddress(): string;
    setAddress(value: string): void;

    getDestinationTag(): number;
    setDestinationTag(value: number): void;

    getState(): gincoinc_global_v1_gincoincglobalv1_enum_pb.TransactionState;
    setState(value: gincoinc_global_v1_gincoincglobalv1_enum_pb.TransactionState): void;

    getResult(): gincoinc_global_v1_gincoincglobalv1_enum_pb.TransactionResult;
    setResult(value: gincoinc_global_v1_gincoincglobalv1_enum_pb.TransactionResult): void;

    getTransferType(): gincoinc_global_v1_gincoincglobalv1_enum_pb.TransferType;
    setTransferType(value: gincoinc_global_v1_gincoincglobalv1_enum_pb.TransferType): void;


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
        state: gincoinc_global_v1_gincoincglobalv1_enum_pb.TransactionState,
        result: gincoinc_global_v1_gincoincglobalv1_enum_pb.TransactionResult,
        transferType: gincoinc_global_v1_gincoincglobalv1_enum_pb.TransferType,
    }
}

export class TransferUpdateEvent extends jspb.Message { 
    getEventId(): string;
    setEventId(value: string): void;

    getWalletId(): string;
    setWalletId(value: string): void;

    getCoin(): gincoinc_global_v1_gincoincglobalv1_enum_pb.Coin;
    setCoin(value: gincoinc_global_v1_gincoincglobalv1_enum_pb.Coin): void;

    getTxId(): string;
    setTxId(value: string): void;

    getTxIndex(): number;
    setTxIndex(value: number): void;

    getValue(): number;
    setValue(value: number): void;

    getStringValue(): string;
    setStringValue(value: string): void;

    getJpyRate(): number;
    setJpyRate(value: number): void;

    getAddress(): string;
    setAddress(value: string): void;

    getDestinationTag(): number;
    setDestinationTag(value: number): void;

    getState(): gincoinc_global_v1_gincoincglobalv1_enum_pb.TransactionState;
    setState(value: gincoinc_global_v1_gincoincglobalv1_enum_pb.TransactionState): void;

    getResult(): gincoinc_global_v1_gincoincglobalv1_enum_pb.TransactionResult;
    setResult(value: gincoinc_global_v1_gincoincglobalv1_enum_pb.TransactionResult): void;

    getTransferType(): gincoinc_global_v1_gincoincglobalv1_enum_pb.TransferType;
    setTransferType(value: gincoinc_global_v1_gincoincglobalv1_enum_pb.TransferType): void;


    hasTime(): boolean;
    clearTime(): void;
    getTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setTime(value?: google_protobuf_timestamp_pb.Timestamp): void;


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
        state: gincoinc_global_v1_gincoincglobalv1_enum_pb.TransactionState,
        result: gincoinc_global_v1_gincoincglobalv1_enum_pb.TransactionResult,
        transferType: gincoinc_global_v1_gincoincglobalv1_enum_pb.TransferType,
        time?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}
