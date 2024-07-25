// package: adamant.teller.v1
// file: gincoinc/adamant/teller/v1/adamanttellerv1/teller_api.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as gincoinc_adamant_global_v1_adamantglobalv1_enum_pb from "../../../../../gincoinc/adamant/global/v1/adamantglobalv1/enum_pb";
import * as gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb from "../../../../../gincoinc/adamant/global/v1/adamantglobalv1/global_api_pb";
import * as gincoinc_adamant_global_v1_adamantglobalv1_model_pb from "../../../../../gincoinc/adamant/global/v1/adamantglobalv1/model_pb";
import * as gincoinc_global_v1_gincoincglobalv1_enum_pb from "../../../../../gincoinc/global/v1/gincoincglobalv1/enum_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as validate_validate_pb from "../../../../../validate/validate_pb";

export class CreateWalletRequest extends jspb.Message { 
    getWalletName(): string;
    setWalletName(value: string): CreateWalletRequest;
    getCoin(): gincoinc_global_v1_gincoincglobalv1_enum_pb.Coin;
    setCoin(value: gincoinc_global_v1_gincoincglobalv1_enum_pb.Coin): CreateWalletRequest;

    hasNetwork(): boolean;
    clearNetwork(): void;
    getNetwork(): gincoinc_global_v1_gincoincglobalv1_enum_pb.Network | undefined;
    setNetwork(value: gincoinc_global_v1_gincoincglobalv1_enum_pb.Network): CreateWalletRequest;
    getWalletType(): gincoinc_adamant_global_v1_adamantglobalv1_enum_pb.WalletType;
    setWalletType(value: gincoinc_adamant_global_v1_adamantglobalv1_enum_pb.WalletType): CreateWalletRequest;
    getAddressType(): gincoinc_global_v1_gincoincglobalv1_enum_pb.AddressType;
    setAddressType(value: gincoinc_global_v1_gincoincglobalv1_enum_pb.AddressType): CreateWalletRequest;
    getDestinationWalletId(): string;
    setDestinationWalletId(value: string): CreateWalletRequest;
    getInheritWalletId(): string;
    setInheritWalletId(value: string): CreateWalletRequest;

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
        network?: gincoinc_global_v1_gincoincglobalv1_enum_pb.Network,
        walletType: gincoinc_adamant_global_v1_adamantglobalv1_enum_pb.WalletType,
        addressType: gincoinc_global_v1_gincoincglobalv1_enum_pb.AddressType,
        destinationWalletId: string,
        inheritWalletId: string,
    }
}

export class InitializeXRPWalletRequest extends jspb.Message { 
    getWalletId(): string;
    setWalletId(value: string): InitializeXRPWalletRequest;

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

export class InitializeWalletRequest extends jspb.Message { 
    getWalletId(): string;
    setWalletId(value: string): InitializeWalletRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): InitializeWalletRequest.AsObject;
    static toObject(includeInstance: boolean, msg: InitializeWalletRequest): InitializeWalletRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: InitializeWalletRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): InitializeWalletRequest;
    static deserializeBinaryFromReader(message: InitializeWalletRequest, reader: jspb.BinaryReader): InitializeWalletRequest;
}

export namespace InitializeWalletRequest {
    export type AsObject = {
        walletId: string,
    }
}

export class SignTransactionRequest extends jspb.Message { 
    getWalletId(): string;
    setWalletId(value: string): SignTransactionRequest;
    getTransactionId(): string;
    setTransactionId(value: string): SignTransactionRequest;

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

export class SignMessageRequest extends jspb.Message { 
    getWalletId(): string;
    setWalletId(value: string): SignMessageRequest;

    hasAddressId(): boolean;
    clearAddressId(): void;
    getAddressId(): string | undefined;
    setAddressId(value: string): SignMessageRequest;

    hasAddress(): boolean;
    clearAddress(): void;
    getAddress(): string | undefined;
    setAddress(value: string): SignMessageRequest;
    getMessage(): string;
    setMessage(value: string): SignMessageRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SignMessageRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SignMessageRequest): SignMessageRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SignMessageRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SignMessageRequest;
    static deserializeBinaryFromReader(message: SignMessageRequest, reader: jspb.BinaryReader): SignMessageRequest;
}

export namespace SignMessageRequest {
    export type AsObject = {
        walletId: string,
        addressId?: string,
        address?: string,
        message: string,
    }
}

export class SignMessageResponse extends jspb.Message { 
    getSignature(): string;
    setSignature(value: string): SignMessageResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SignMessageResponse.AsObject;
    static toObject(includeInstance: boolean, msg: SignMessageResponse): SignMessageResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SignMessageResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SignMessageResponse;
    static deserializeBinaryFromReader(message: SignMessageResponse, reader: jspb.BinaryReader): SignMessageResponse;
}

export namespace SignMessageResponse {
    export type AsObject = {
        signature: string,
    }
}

export class SendTransactionRequest extends jspb.Message { 
    getWalletId(): string;
    setWalletId(value: string): SendTransactionRequest;
    getTransactionId(): string;
    setTransactionId(value: string): SendTransactionRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SendTransactionRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SendTransactionRequest): SendTransactionRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SendTransactionRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SendTransactionRequest;
    static deserializeBinaryFromReader(message: SendTransactionRequest, reader: jspb.BinaryReader): SendTransactionRequest;
}

export namespace SendTransactionRequest {
    export type AsObject = {
        walletId: string,
        transactionId: string,
    }
}

export class ResendTransactionRequest extends jspb.Message { 
    getWalletId(): string;
    setWalletId(value: string): ResendTransactionRequest;
    getTransactionId(): string;
    setTransactionId(value: string): ResendTransactionRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ResendTransactionRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ResendTransactionRequest): ResendTransactionRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ResendTransactionRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ResendTransactionRequest;
    static deserializeBinaryFromReader(message: ResendTransactionRequest, reader: jspb.BinaryReader): ResendTransactionRequest;
}

export namespace ResendTransactionRequest {
    export type AsObject = {
        walletId: string,
        transactionId: string,
    }
}

export class ProgmatCoinInitializeRequest extends jspb.Message { 
    getWalletId(): string;
    setWalletId(value: string): ProgmatCoinInitializeRequest;
    getFeeRate(): number;
    setFeeRate(value: number): ProgmatCoinInitializeRequest;
    getContractAddress(): string;
    setContractAddress(value: string): ProgmatCoinInitializeRequest;
    getTokenName(): string;
    setTokenName(value: string): ProgmatCoinInitializeRequest;
    getTokenSymbol(): string;
    setTokenSymbol(value: string): ProgmatCoinInitializeRequest;
    getTokenCurrency(): string;
    setTokenCurrency(value: string): ProgmatCoinInitializeRequest;
    getTokenDecimals(): number;
    setTokenDecimals(value: number): ProgmatCoinInitializeRequest;
    getNewMasterMinter(): string;
    setNewMasterMinter(value: string): ProgmatCoinInitializeRequest;
    getNewPauser(): string;
    setNewPauser(value: string): ProgmatCoinInitializeRequest;
    getNewWhiteAndBlackLister(): string;
    setNewWhiteAndBlackLister(value: string): ProgmatCoinInitializeRequest;
    getNewConfiscator(): string;
    setNewConfiscator(value: string): ProgmatCoinInitializeRequest;
    getNewOwner(): string;
    setNewOwner(value: string): ProgmatCoinInitializeRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ProgmatCoinInitializeRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ProgmatCoinInitializeRequest): ProgmatCoinInitializeRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ProgmatCoinInitializeRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ProgmatCoinInitializeRequest;
    static deserializeBinaryFromReader(message: ProgmatCoinInitializeRequest, reader: jspb.BinaryReader): ProgmatCoinInitializeRequest;
}

export namespace ProgmatCoinInitializeRequest {
    export type AsObject = {
        walletId: string,
        feeRate: number,
        contractAddress: string,
        tokenName: string,
        tokenSymbol: string,
        tokenCurrency: string,
        tokenDecimals: number,
        newMasterMinter: string,
        newPauser: string,
        newWhiteAndBlackLister: string,
        newConfiscator: string,
        newOwner: string,
    }
}

export class ProgmatCoinConfigureMinterRequest extends jspb.Message { 
    getWalletId(): string;
    setWalletId(value: string): ProgmatCoinConfigureMinterRequest;
    getFeeRate(): number;
    setFeeRate(value: number): ProgmatCoinConfigureMinterRequest;
    getContractAddress(): string;
    setContractAddress(value: string): ProgmatCoinConfigureMinterRequest;
    getAddress(): string;
    setAddress(value: string): ProgmatCoinConfigureMinterRequest;
    getMinterAllowedAmount(): string;
    setMinterAllowedAmount(value: string): ProgmatCoinConfigureMinterRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ProgmatCoinConfigureMinterRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ProgmatCoinConfigureMinterRequest): ProgmatCoinConfigureMinterRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ProgmatCoinConfigureMinterRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ProgmatCoinConfigureMinterRequest;
    static deserializeBinaryFromReader(message: ProgmatCoinConfigureMinterRequest, reader: jspb.BinaryReader): ProgmatCoinConfigureMinterRequest;
}

export namespace ProgmatCoinConfigureMinterRequest {
    export type AsObject = {
        walletId: string,
        feeRate: number,
        contractAddress: string,
        address: string,
        minterAllowedAmount: string,
    }
}

export class ProgmatCoinMintAndTransferRequest extends jspb.Message { 
    getWalletId(): string;
    setWalletId(value: string): ProgmatCoinMintAndTransferRequest;
    getFeeRate(): number;
    setFeeRate(value: number): ProgmatCoinMintAndTransferRequest;
    getContractAddress(): string;
    setContractAddress(value: string): ProgmatCoinMintAndTransferRequest;
    getMintAddress(): string;
    setMintAddress(value: string): ProgmatCoinMintAndTransferRequest;
    getTransferAddress(): string;
    setTransferAddress(value: string): ProgmatCoinMintAndTransferRequest;
    getAmount(): string;
    setAmount(value: string): ProgmatCoinMintAndTransferRequest;

    hasThroughAddress(): boolean;
    clearThroughAddress(): void;
    getThroughAddress(): string | undefined;
    setThroughAddress(value: string): ProgmatCoinMintAndTransferRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ProgmatCoinMintAndTransferRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ProgmatCoinMintAndTransferRequest): ProgmatCoinMintAndTransferRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ProgmatCoinMintAndTransferRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ProgmatCoinMintAndTransferRequest;
    static deserializeBinaryFromReader(message: ProgmatCoinMintAndTransferRequest, reader: jspb.BinaryReader): ProgmatCoinMintAndTransferRequest;
}

export namespace ProgmatCoinMintAndTransferRequest {
    export type AsObject = {
        walletId: string,
        feeRate: number,
        contractAddress: string,
        mintAddress: string,
        transferAddress: string,
        amount: string,
        throughAddress?: string,
    }
}

export class ProgmatCoinMintRequest extends jspb.Message { 
    getWalletId(): string;
    setWalletId(value: string): ProgmatCoinMintRequest;
    getFeeRate(): number;
    setFeeRate(value: number): ProgmatCoinMintRequest;
    getContractAddress(): string;
    setContractAddress(value: string): ProgmatCoinMintRequest;
    getAddress(): string;
    setAddress(value: string): ProgmatCoinMintRequest;
    getAmount(): string;
    setAmount(value: string): ProgmatCoinMintRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ProgmatCoinMintRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ProgmatCoinMintRequest): ProgmatCoinMintRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ProgmatCoinMintRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ProgmatCoinMintRequest;
    static deserializeBinaryFromReader(message: ProgmatCoinMintRequest, reader: jspb.BinaryReader): ProgmatCoinMintRequest;
}

export namespace ProgmatCoinMintRequest {
    export type AsObject = {
        walletId: string,
        feeRate: number,
        contractAddress: string,
        address: string,
        amount: string,
    }
}

export class ProgmatCoinBurnRequest extends jspb.Message { 
    getWalletId(): string;
    setWalletId(value: string): ProgmatCoinBurnRequest;
    getFeeRate(): number;
    setFeeRate(value: number): ProgmatCoinBurnRequest;
    getContractAddress(): string;
    setContractAddress(value: string): ProgmatCoinBurnRequest;
    getAmount(): string;
    setAmount(value: string): ProgmatCoinBurnRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ProgmatCoinBurnRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ProgmatCoinBurnRequest): ProgmatCoinBurnRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ProgmatCoinBurnRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ProgmatCoinBurnRequest;
    static deserializeBinaryFromReader(message: ProgmatCoinBurnRequest, reader: jspb.BinaryReader): ProgmatCoinBurnRequest;
}

export namespace ProgmatCoinBurnRequest {
    export type AsObject = {
        walletId: string,
        feeRate: number,
        contractAddress: string,
        amount: string,
    }
}

export class ProgmatCoinBulkAddToWhitelistRequest extends jspb.Message { 
    getWalletId(): string;
    setWalletId(value: string): ProgmatCoinBulkAddToWhitelistRequest;
    getFeeRate(): number;
    setFeeRate(value: number): ProgmatCoinBulkAddToWhitelistRequest;
    getContractAddress(): string;
    setContractAddress(value: string): ProgmatCoinBulkAddToWhitelistRequest;
    getUtilsAddress(): string;
    setUtilsAddress(value: string): ProgmatCoinBulkAddToWhitelistRequest;
    clearAddressesList(): void;
    getAddressesList(): Array<string>;
    setAddressesList(value: Array<string>): ProgmatCoinBulkAddToWhitelistRequest;
    addAddresses(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ProgmatCoinBulkAddToWhitelistRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ProgmatCoinBulkAddToWhitelistRequest): ProgmatCoinBulkAddToWhitelistRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ProgmatCoinBulkAddToWhitelistRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ProgmatCoinBulkAddToWhitelistRequest;
    static deserializeBinaryFromReader(message: ProgmatCoinBulkAddToWhitelistRequest, reader: jspb.BinaryReader): ProgmatCoinBulkAddToWhitelistRequest;
}

export namespace ProgmatCoinBulkAddToWhitelistRequest {
    export type AsObject = {
        walletId: string,
        feeRate: number,
        contractAddress: string,
        utilsAddress: string,
        addressesList: Array<string>,
    }
}

export class ProgmatCoinBulkRemoveFromWhitelistRequest extends jspb.Message { 
    getWalletId(): string;
    setWalletId(value: string): ProgmatCoinBulkRemoveFromWhitelistRequest;
    getFeeRate(): number;
    setFeeRate(value: number): ProgmatCoinBulkRemoveFromWhitelistRequest;
    getContractAddress(): string;
    setContractAddress(value: string): ProgmatCoinBulkRemoveFromWhitelistRequest;
    getUtilsAddress(): string;
    setUtilsAddress(value: string): ProgmatCoinBulkRemoveFromWhitelistRequest;
    clearAddressesList(): void;
    getAddressesList(): Array<string>;
    setAddressesList(value: Array<string>): ProgmatCoinBulkRemoveFromWhitelistRequest;
    addAddresses(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ProgmatCoinBulkRemoveFromWhitelistRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ProgmatCoinBulkRemoveFromWhitelistRequest): ProgmatCoinBulkRemoveFromWhitelistRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ProgmatCoinBulkRemoveFromWhitelistRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ProgmatCoinBulkRemoveFromWhitelistRequest;
    static deserializeBinaryFromReader(message: ProgmatCoinBulkRemoveFromWhitelistRequest, reader: jspb.BinaryReader): ProgmatCoinBulkRemoveFromWhitelistRequest;
}

export namespace ProgmatCoinBulkRemoveFromWhitelistRequest {
    export type AsObject = {
        walletId: string,
        feeRate: number,
        contractAddress: string,
        utilsAddress: string,
        addressesList: Array<string>,
    }
}

export class ProgmatCoinBulkAddToBlacklistRequest extends jspb.Message { 
    getWalletId(): string;
    setWalletId(value: string): ProgmatCoinBulkAddToBlacklistRequest;
    getFeeRate(): number;
    setFeeRate(value: number): ProgmatCoinBulkAddToBlacklistRequest;
    getContractAddress(): string;
    setContractAddress(value: string): ProgmatCoinBulkAddToBlacklistRequest;
    getUtilsAddress(): string;
    setUtilsAddress(value: string): ProgmatCoinBulkAddToBlacklistRequest;
    clearAddressesList(): void;
    getAddressesList(): Array<string>;
    setAddressesList(value: Array<string>): ProgmatCoinBulkAddToBlacklistRequest;
    addAddresses(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ProgmatCoinBulkAddToBlacklistRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ProgmatCoinBulkAddToBlacklistRequest): ProgmatCoinBulkAddToBlacklistRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ProgmatCoinBulkAddToBlacklistRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ProgmatCoinBulkAddToBlacklistRequest;
    static deserializeBinaryFromReader(message: ProgmatCoinBulkAddToBlacklistRequest, reader: jspb.BinaryReader): ProgmatCoinBulkAddToBlacklistRequest;
}

export namespace ProgmatCoinBulkAddToBlacklistRequest {
    export type AsObject = {
        walletId: string,
        feeRate: number,
        contractAddress: string,
        utilsAddress: string,
        addressesList: Array<string>,
    }
}

export class ProgmatCoinBulkRemoveFromBlacklistRequest extends jspb.Message { 
    getWalletId(): string;
    setWalletId(value: string): ProgmatCoinBulkRemoveFromBlacklistRequest;
    getFeeRate(): number;
    setFeeRate(value: number): ProgmatCoinBulkRemoveFromBlacklistRequest;
    getContractAddress(): string;
    setContractAddress(value: string): ProgmatCoinBulkRemoveFromBlacklistRequest;
    getUtilsAddress(): string;
    setUtilsAddress(value: string): ProgmatCoinBulkRemoveFromBlacklistRequest;
    clearAddressesList(): void;
    getAddressesList(): Array<string>;
    setAddressesList(value: Array<string>): ProgmatCoinBulkRemoveFromBlacklistRequest;
    addAddresses(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ProgmatCoinBulkRemoveFromBlacklistRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ProgmatCoinBulkRemoveFromBlacklistRequest): ProgmatCoinBulkRemoveFromBlacklistRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ProgmatCoinBulkRemoveFromBlacklistRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ProgmatCoinBulkRemoveFromBlacklistRequest;
    static deserializeBinaryFromReader(message: ProgmatCoinBulkRemoveFromBlacklistRequest, reader: jspb.BinaryReader): ProgmatCoinBulkRemoveFromBlacklistRequest;
}

export namespace ProgmatCoinBulkRemoveFromBlacklistRequest {
    export type AsObject = {
        walletId: string,
        feeRate: number,
        contractAddress: string,
        utilsAddress: string,
        addressesList: Array<string>,
    }
}

export class ProgmatCoinConfiscateRequest extends jspb.Message { 
    getWalletId(): string;
    setWalletId(value: string): ProgmatCoinConfiscateRequest;
    getFeeRate(): number;
    setFeeRate(value: number): ProgmatCoinConfiscateRequest;
    getContractAddress(): string;
    setContractAddress(value: string): ProgmatCoinConfiscateRequest;
    getBlackListedAccount(): string;
    setBlackListedAccount(value: string): ProgmatCoinConfiscateRequest;
    getToAccount(): string;
    setToAccount(value: string): ProgmatCoinConfiscateRequest;
    getAmount(): string;
    setAmount(value: string): ProgmatCoinConfiscateRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ProgmatCoinConfiscateRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ProgmatCoinConfiscateRequest): ProgmatCoinConfiscateRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ProgmatCoinConfiscateRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ProgmatCoinConfiscateRequest;
    static deserializeBinaryFromReader(message: ProgmatCoinConfiscateRequest, reader: jspb.BinaryReader): ProgmatCoinConfiscateRequest;
}

export namespace ProgmatCoinConfiscateRequest {
    export type AsObject = {
        walletId: string,
        feeRate: number,
        contractAddress: string,
        blackListedAccount: string,
        toAccount: string,
        amount: string,
    }
}

export class ProgmatCoinPauseRequest extends jspb.Message { 
    getWalletId(): string;
    setWalletId(value: string): ProgmatCoinPauseRequest;
    getFeeRate(): number;
    setFeeRate(value: number): ProgmatCoinPauseRequest;
    getContractAddress(): string;
    setContractAddress(value: string): ProgmatCoinPauseRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ProgmatCoinPauseRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ProgmatCoinPauseRequest): ProgmatCoinPauseRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ProgmatCoinPauseRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ProgmatCoinPauseRequest;
    static deserializeBinaryFromReader(message: ProgmatCoinPauseRequest, reader: jspb.BinaryReader): ProgmatCoinPauseRequest;
}

export namespace ProgmatCoinPauseRequest {
    export type AsObject = {
        walletId: string,
        feeRate: number,
        contractAddress: string,
    }
}

export class ProgmatCoinUnpauseRequest extends jspb.Message { 
    getWalletId(): string;
    setWalletId(value: string): ProgmatCoinUnpauseRequest;
    getFeeRate(): number;
    setFeeRate(value: number): ProgmatCoinUnpauseRequest;
    getContractAddress(): string;
    setContractAddress(value: string): ProgmatCoinUnpauseRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ProgmatCoinUnpauseRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ProgmatCoinUnpauseRequest): ProgmatCoinUnpauseRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ProgmatCoinUnpauseRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ProgmatCoinUnpauseRequest;
    static deserializeBinaryFromReader(message: ProgmatCoinUnpauseRequest, reader: jspb.BinaryReader): ProgmatCoinUnpauseRequest;
}

export namespace ProgmatCoinUnpauseRequest {
    export type AsObject = {
        walletId: string,
        feeRate: number,
        contractAddress: string,
    }
}

export class ListColdFeeDepositAddressesRequest extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListColdFeeDepositAddressesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListColdFeeDepositAddressesRequest): ListColdFeeDepositAddressesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListColdFeeDepositAddressesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListColdFeeDepositAddressesRequest;
    static deserializeBinaryFromReader(message: ListColdFeeDepositAddressesRequest, reader: jspb.BinaryReader): ListColdFeeDepositAddressesRequest;
}

export namespace ListColdFeeDepositAddressesRequest {
    export type AsObject = {
    }
}

export class ListColdFeeDepositAddressesResponse extends jspb.Message { 
    clearCallerAddressesList(): void;
    getCallerAddressesList(): Array<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.CallerAddress>;
    setCallerAddressesList(value: Array<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.CallerAddress>): ListColdFeeDepositAddressesResponse;
    addCallerAddresses(value?: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.CallerAddress, index?: number): gincoinc_adamant_global_v1_adamantglobalv1_model_pb.CallerAddress;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListColdFeeDepositAddressesResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListColdFeeDepositAddressesResponse): ListColdFeeDepositAddressesResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListColdFeeDepositAddressesResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListColdFeeDepositAddressesResponse;
    static deserializeBinaryFromReader(message: ListColdFeeDepositAddressesResponse, reader: jspb.BinaryReader): ListColdFeeDepositAddressesResponse;
}

export namespace ListColdFeeDepositAddressesResponse {
    export type AsObject = {
        callerAddressesList: Array<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.CallerAddress.AsObject>,
    }
}

export class ListHotFeeDepositAddressesRequest extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListHotFeeDepositAddressesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListHotFeeDepositAddressesRequest): ListHotFeeDepositAddressesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListHotFeeDepositAddressesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListHotFeeDepositAddressesRequest;
    static deserializeBinaryFromReader(message: ListHotFeeDepositAddressesRequest, reader: jspb.BinaryReader): ListHotFeeDepositAddressesRequest;
}

export namespace ListHotFeeDepositAddressesRequest {
    export type AsObject = {
    }
}

export class ListHotFeeDepositAddressesResponse extends jspb.Message { 
    clearFeeDepositAddressesList(): void;
    getFeeDepositAddressesList(): Array<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.FeeDepositAddress>;
    setFeeDepositAddressesList(value: Array<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.FeeDepositAddress>): ListHotFeeDepositAddressesResponse;
    addFeeDepositAddresses(value?: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.FeeDepositAddress, index?: number): gincoinc_adamant_global_v1_adamantglobalv1_model_pb.FeeDepositAddress;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListHotFeeDepositAddressesResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListHotFeeDepositAddressesResponse): ListHotFeeDepositAddressesResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListHotFeeDepositAddressesResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListHotFeeDepositAddressesResponse;
    static deserializeBinaryFromReader(message: ListHotFeeDepositAddressesResponse, reader: jspb.BinaryReader): ListHotFeeDepositAddressesResponse;
}

export namespace ListHotFeeDepositAddressesResponse {
    export type AsObject = {
        feeDepositAddressesList: Array<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.FeeDepositAddress.AsObject>,
    }
}
