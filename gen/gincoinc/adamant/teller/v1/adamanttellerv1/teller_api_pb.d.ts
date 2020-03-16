// package: adamant.teller.v1
// file: gincoinc/adamant/teller/v1/adamanttellerv1/teller_api.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as validate_validate_pb from "../../../../../validate/validate_pb";
import * as gincoinc_global_v1_gincoincglobalv1_enum_pb from "../../../../../gincoinc/global/v1/gincoincglobalv1/enum_pb";
import * as gincoinc_adamant_global_v1_adamantglobalv1_enum_pb from "../../../../../gincoinc/adamant/global/v1/adamantglobalv1/enum_pb";
import * as gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb from "../../../../../gincoinc/adamant/global/v1/adamantglobalv1/global_api_pb";
import * as gincoinc_adamant_global_v1_adamantglobalv1_model_pb from "../../../../../gincoinc/adamant/global/v1/adamantglobalv1/model_pb";

export class CreateWalletRequest extends jspb.Message { 
    getWalletName(): string;
    setWalletName(value: string): void;

    getCoin(): gincoinc_global_v1_gincoincglobalv1_enum_pb.Coin;
    setCoin(value: gincoinc_global_v1_gincoincglobalv1_enum_pb.Coin): void;

    getWalletType(): gincoinc_adamant_global_v1_adamantglobalv1_enum_pb.WalletType;
    setWalletType(value: gincoinc_adamant_global_v1_adamantglobalv1_enum_pb.WalletType): void;

    getAddressType(): gincoinc_global_v1_gincoincglobalv1_enum_pb.AddressType;
    setAddressType(value: gincoinc_global_v1_gincoincglobalv1_enum_pb.AddressType): void;

    getDestinationWalletId(): string;
    setDestinationWalletId(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateWalletRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateWalletRequest): CreateWalletRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateWalletRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateWalletRequest;
    static deserializeBinaryFromReader(message: CreateWalletRequest, reader: jspb.BinaryReader): CreateWalletRequest;
}

export namespace CreateWalletRequest {
    export type AsObject = {
        walletName: string,
        coin: gincoinc_global_v1_gincoincglobalv1_enum_pb.Coin,
        walletType: gincoinc_adamant_global_v1_adamantglobalv1_enum_pb.WalletType,
        addressType: gincoinc_global_v1_gincoincglobalv1_enum_pb.AddressType,
        destinationWalletId: string,
    }
}

export class InitializeXRPWalletRequest extends jspb.Message { 
    getWalletId(): string;
    setWalletId(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): InitializeXRPWalletRequest.AsObject;
    static toObject(includeInstance: boolean, msg: InitializeXRPWalletRequest): InitializeXRPWalletRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: InitializeXRPWalletRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): InitializeXRPWalletRequest;
    static deserializeBinaryFromReader(message: InitializeXRPWalletRequest, reader: jspb.BinaryReader): InitializeXRPWalletRequest;
}

export namespace InitializeXRPWalletRequest {
    export type AsObject = {
        walletId: string,
    }
}

export class SignTransactionRequest extends jspb.Message { 
    getWalletId(): string;
    setWalletId(value: string): void;

    getTransactionId(): string;
    setTransactionId(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SignTransactionRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SignTransactionRequest): SignTransactionRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SignTransactionRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SignTransactionRequest;
    static deserializeBinaryFromReader(message: SignTransactionRequest, reader: jspb.BinaryReader): SignTransactionRequest;
}

export namespace SignTransactionRequest {
    export type AsObject = {
        walletId: string,
        transactionId: string,
    }
}
