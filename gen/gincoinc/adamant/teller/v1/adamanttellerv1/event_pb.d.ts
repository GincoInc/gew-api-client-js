// package: adamant.teller.v1
// file: gincoinc/adamant/teller/v1/adamanttellerv1/event.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as gincoinc_global_v1_gincoincglobalv1_enum_pb from "../../../../../gincoinc/global/v1/gincoincglobalv1/enum_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as validate_validate_pb from "../../../../../validate/validate_pb";

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
    getMessage(): string;
    setMessage(value: string): TransferUpdated;
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
    getFee(): number;
    setFee(value: number): TransferUpdated;
    getStringFee(): string;
    setStringFee(value: string): TransferUpdated;

    hasCosmosSpecific(): boolean;
    clearCosmosSpecific(): void;
    getCosmosSpecific(): TransferUpdateCosmosSpecific | undefined;
    setCosmosSpecific(value?: TransferUpdateCosmosSpecific): TransferUpdated;

    hasSubstrateSpecific(): boolean;
    clearSubstrateSpecific(): void;
    getSubstrateSpecific(): TransferUpdateSubstrateSpecific | undefined;
    setSubstrateSpecific(value?: TransferUpdateSubstrateSpecific): TransferUpdated;
    getMethod(): string;
    setMethod(value: string): TransferUpdated;
    getNetwork(): gincoinc_global_v1_gincoincglobalv1_enum_pb.Network;
    setNetwork(value: gincoinc_global_v1_gincoincglobalv1_enum_pb.Network): TransferUpdated;

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
        message: string,
        state: gincoinc_global_v1_gincoincglobalv1_enum_pb.TransactionState,
        result: gincoinc_global_v1_gincoincglobalv1_enum_pb.TransactionResult,
        transferType: gincoinc_global_v1_gincoincglobalv1_enum_pb.TransferType,
        from: string,
        to: string,
        time?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        eventId: string,
        fee: number,
        stringFee: string,
        cosmosSpecific?: TransferUpdateCosmosSpecific.AsObject,
        substrateSpecific?: TransferUpdateSubstrateSpecific.AsObject,
        method: string,
        network: gincoinc_global_v1_gincoincglobalv1_enum_pb.Network,
    }
}

export class TransferUpdateCosmosSpecific extends jspb.Message { 
    getType(): gincoinc_global_v1_gincoincglobalv1_enum_pb.CosmosMsgType;
    setType(value: gincoinc_global_v1_gincoincglobalv1_enum_pb.CosmosMsgType): TransferUpdateCosmosSpecific;
    getDelegateAmount(): number;
    setDelegateAmount(value: number): TransferUpdateCosmosSpecific;
    getRewardAmount(): number;
    setRewardAmount(value: number): TransferUpdateCosmosSpecific;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TransferUpdateCosmosSpecific.AsObject;
    static toObject(includeInstance: boolean, msg: TransferUpdateCosmosSpecific): TransferUpdateCosmosSpecific.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TransferUpdateCosmosSpecific, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TransferUpdateCosmosSpecific;
    static deserializeBinaryFromReader(message: TransferUpdateCosmosSpecific, reader: jspb.BinaryReader): TransferUpdateCosmosSpecific;
}

export namespace TransferUpdateCosmosSpecific {
    export type AsObject = {
        type: gincoinc_global_v1_gincoincglobalv1_enum_pb.CosmosMsgType,
        delegateAmount: number,
        rewardAmount: number,
    }
}

export class TransferUpdateSubstrateSpecific extends jspb.Message { 
    getExtrinsicId(): string;
    setExtrinsicId(value: string): TransferUpdateSubstrateSpecific;
    getExtrinsicHash(): string;
    setExtrinsicHash(value: string): TransferUpdateSubstrateSpecific;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TransferUpdateSubstrateSpecific.AsObject;
    static toObject(includeInstance: boolean, msg: TransferUpdateSubstrateSpecific): TransferUpdateSubstrateSpecific.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TransferUpdateSubstrateSpecific, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TransferUpdateSubstrateSpecific;
    static deserializeBinaryFromReader(message: TransferUpdateSubstrateSpecific, reader: jspb.BinaryReader): TransferUpdateSubstrateSpecific;
}

export namespace TransferUpdateSubstrateSpecific {
    export type AsObject = {
        extrinsicId: string,
        extrinsicHash: string,
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

    hasSubstrateSpecific(): boolean;
    clearSubstrateSpecific(): void;
    getSubstrateSpecific(): TransferUpdateSubstrateSpecific | undefined;
    setSubstrateSpecific(value?: TransferUpdateSubstrateSpecific): TransferUpdateEvent;

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
        substrateSpecific?: TransferUpdateSubstrateSpecific.AsObject,
    }
}

export class EthereumStakingReward extends jspb.Message { 
    getEventId(): string;
    setEventId(value: string): EthereumStakingReward;
    getWithdrawalIndex(): number;
    setWithdrawalIndex(value: number): EthereumStakingReward;
    getBlockNumber(): number;
    setBlockNumber(value: number): EthereumStakingReward;

    hasBlockTime(): boolean;
    clearBlockTime(): void;
    getBlockTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setBlockTime(value?: google_protobuf_timestamp_pb.Timestamp): EthereumStakingReward;
    getValidatorIndex(): number;
    setValidatorIndex(value: number): EthereumStakingReward;
    getAddress(): string;
    setAddress(value: string): EthereumStakingReward;
    getValue(): number;
    setValue(value: number): EthereumStakingReward;
    getWalletId(): string;
    setWalletId(value: string): EthereumStakingReward;
    getEthereumStakingRewardLayerType(): gincoinc_global_v1_gincoincglobalv1_enum_pb.EthereumStakingRewardLayerType;
    setEthereumStakingRewardLayerType(value: gincoinc_global_v1_gincoincglobalv1_enum_pb.EthereumStakingRewardLayerType): EthereumStakingReward;
    getStringValue(): string;
    setStringValue(value: string): EthereumStakingReward;
    getBlockHash(): string;
    setBlockHash(value: string): EthereumStakingReward;

    hasTxId(): boolean;
    clearTxId(): void;
    getTxId(): string | undefined;
    setTxId(value: string): EthereumStakingReward;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EthereumStakingReward.AsObject;
    static toObject(includeInstance: boolean, msg: EthereumStakingReward): EthereumStakingReward.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EthereumStakingReward, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EthereumStakingReward;
    static deserializeBinaryFromReader(message: EthereumStakingReward, reader: jspb.BinaryReader): EthereumStakingReward;
}

export namespace EthereumStakingReward {
    export type AsObject = {
        eventId: string,
        withdrawalIndex: number,
        blockNumber: number,
        blockTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        validatorIndex: number,
        address: string,
        value: number,
        walletId: string,
        ethereumStakingRewardLayerType: gincoinc_global_v1_gincoincglobalv1_enum_pb.EthereumStakingRewardLayerType,
        stringValue: string,
        blockHash: string,
        txId?: string,
    }
}

export class StakingRewardReceived extends jspb.Message { 
    getEventId(): string;
    setEventId(value: string): StakingRewardReceived;
    getValidatorId(): string;
    setValidatorId(value: string): StakingRewardReceived;
    getValue(): number;
    setValue(value: number): StakingRewardReceived;
    getStringValue(): string;
    setStringValue(value: string): StakingRewardReceived;
    getTxId(): string;
    setTxId(value: string): StakingRewardReceived;
    getTxIndex(): number;
    setTxIndex(value: number): StakingRewardReceived;
    getWalletId(): string;
    setWalletId(value: string): StakingRewardReceived;
    getAddress(): string;
    setAddress(value: string): StakingRewardReceived;
    getCoin(): gincoinc_global_v1_gincoincglobalv1_enum_pb.Coin;
    setCoin(value: gincoinc_global_v1_gincoincglobalv1_enum_pb.Coin): StakingRewardReceived;

    hasTime(): boolean;
    clearTime(): void;
    getTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setTime(value?: google_protobuf_timestamp_pb.Timestamp): StakingRewardReceived;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StakingRewardReceived.AsObject;
    static toObject(includeInstance: boolean, msg: StakingRewardReceived): StakingRewardReceived.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StakingRewardReceived, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StakingRewardReceived;
    static deserializeBinaryFromReader(message: StakingRewardReceived, reader: jspb.BinaryReader): StakingRewardReceived;
}

export namespace StakingRewardReceived {
    export type AsObject = {
        eventId: string,
        validatorId: string,
        value: number,
        stringValue: string,
        txId: string,
        txIndex: number,
        walletId: string,
        address: string,
        coin: gincoinc_global_v1_gincoincglobalv1_enum_pb.Coin,
        time?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}
