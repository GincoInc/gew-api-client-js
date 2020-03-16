// package: adamant.global.v1
// file: gincoinc/adamant/global/v1/adamantglobalv1/global_api.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as validate_validate_pb from "../../../../../validate/validate_pb";
import * as gincoinc_global_v1_gincoincglobalv1_enum_pb from "../../../../../gincoinc/global/v1/gincoincglobalv1/enum_pb";
import * as gincoinc_adamant_global_v1_adamantglobalv1_enum_pb from "../../../../../gincoinc/adamant/global/v1/adamantglobalv1/enum_pb";
import * as gincoinc_adamant_global_v1_adamantglobalv1_model_pb from "../../../../../gincoinc/adamant/global/v1/adamantglobalv1/model_pb";

export class ApproveWalletRequest extends jspb.Message { 
    getWalletId(): string;
    setWalletId(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ApproveWalletRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ApproveWalletRequest): ApproveWalletRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ApproveWalletRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ApproveWalletRequest;
    static deserializeBinaryFromReader(message: ApproveWalletRequest, reader: jspb.BinaryReader): ApproveWalletRequest;
}

export namespace ApproveWalletRequest {
    export type AsObject = {
        walletId: string,
    }
}

export class ApproveTransactionRequest extends jspb.Message { 
    getWalletId(): string;
    setWalletId(value: string): void;

    getTransactionId(): string;
    setTransactionId(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ApproveTransactionRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ApproveTransactionRequest): ApproveTransactionRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ApproveTransactionRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ApproveTransactionRequest;
    static deserializeBinaryFromReader(message: ApproveTransactionRequest, reader: jspb.BinaryReader): ApproveTransactionRequest;
}

export namespace ApproveTransactionRequest {
    export type AsObject = {
        walletId: string,
        transactionId: string,
    }
}

export class CreateWalletRequest extends jspb.Message { 
    getWalletName(): string;
    setWalletName(value: string): void;

    getCoin(): gincoinc_global_v1_gincoincglobalv1_enum_pb.Coin;
    setCoin(value: gincoinc_global_v1_gincoincglobalv1_enum_pb.Coin): void;

    getWalletType(): gincoinc_adamant_global_v1_adamantglobalv1_enum_pb.WalletType;
    setWalletType(value: gincoinc_adamant_global_v1_adamantglobalv1_enum_pb.WalletType): void;

    getAddressType(): gincoinc_global_v1_gincoincglobalv1_enum_pb.AddressType;
    setAddressType(value: gincoinc_global_v1_gincoincglobalv1_enum_pb.AddressType): void;

    getM(): number;
    setM(value: number): void;

    getN(): number;
    setN(value: number): void;

    clearMembersList(): void;
    getMembersList(): Array<string>;
    setMembersList(value: Array<string>): void;
    addMembers(value: string, index?: number): string;

    getRequiredApprovalCount(): number;
    setRequiredApprovalCount(value: number): void;

    getPolicyId(): string;
    setPolicyId(value: string): void;

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
        m: number,
        n: number,
        membersList: Array<string>,
        requiredApprovalCount: number,
        policyId: string,
        destinationWalletId: string,
    }
}

export class CreateWalletResponse extends jspb.Message { 
    getWalletId(): string;
    setWalletId(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateWalletResponse.AsObject;
    static toObject(includeInstance: boolean, msg: CreateWalletResponse): CreateWalletResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateWalletResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateWalletResponse;
    static deserializeBinaryFromReader(message: CreateWalletResponse, reader: jspb.BinaryReader): CreateWalletResponse;
}

export namespace CreateWalletResponse {
    export type AsObject = {
        walletId: string,
    }
}

export class GetWalletRequest extends jspb.Message { 
    getWalletId(): string;
    setWalletId(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetWalletRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetWalletRequest): GetWalletRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetWalletRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetWalletRequest;
    static deserializeBinaryFromReader(message: GetWalletRequest, reader: jspb.BinaryReader): GetWalletRequest;
}

export namespace GetWalletRequest {
    export type AsObject = {
        walletId: string,
    }
}

export class CancelWalletRequest extends jspb.Message { 
    getWalletId(): string;
    setWalletId(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CancelWalletRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CancelWalletRequest): CancelWalletRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CancelWalletRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CancelWalletRequest;
    static deserializeBinaryFromReader(message: CancelWalletRequest, reader: jspb.BinaryReader): CancelWalletRequest;
}

export namespace CancelWalletRequest {
    export type AsObject = {
        walletId: string,
    }
}

export class ArchiveWalletRequest extends jspb.Message { 
    getWalletId(): string;
    setWalletId(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ArchiveWalletRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ArchiveWalletRequest): ArchiveWalletRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ArchiveWalletRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ArchiveWalletRequest;
    static deserializeBinaryFromReader(message: ArchiveWalletRequest, reader: jspb.BinaryReader): ArchiveWalletRequest;
}

export namespace ArchiveWalletRequest {
    export type AsObject = {
        walletId: string,
    }
}

export class UnArchiveWalletRequest extends jspb.Message { 
    getWalletId(): string;
    setWalletId(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UnArchiveWalletRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UnArchiveWalletRequest): UnArchiveWalletRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UnArchiveWalletRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UnArchiveWalletRequest;
    static deserializeBinaryFromReader(message: UnArchiveWalletRequest, reader: jspb.BinaryReader): UnArchiveWalletRequest;
}

export namespace UnArchiveWalletRequest {
    export type AsObject = {
        walletId: string,
    }
}

export class ListWalletsRequest extends jspb.Message { 
    getPageSize(): number;
    setPageSize(value: number): void;

    getPageToken(): string;
    setPageToken(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListWalletsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListWalletsRequest): ListWalletsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListWalletsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListWalletsRequest;
    static deserializeBinaryFromReader(message: ListWalletsRequest, reader: jspb.BinaryReader): ListWalletsRequest;
}

export namespace ListWalletsRequest {
    export type AsObject = {
        pageSize: number,
        pageToken: string,
    }
}

export class ListWalletsResponse extends jspb.Message { 
    clearWalletsList(): void;
    getWalletsList(): Array<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Wallet>;
    setWalletsList(value: Array<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Wallet>): void;
    addWallets(value?: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Wallet, index?: number): gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Wallet;

    getNextPageToken(): string;
    setNextPageToken(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListWalletsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListWalletsResponse): ListWalletsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListWalletsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListWalletsResponse;
    static deserializeBinaryFromReader(message: ListWalletsResponse, reader: jspb.BinaryReader): ListWalletsResponse;
}

export namespace ListWalletsResponse {
    export type AsObject = {
        walletsList: Array<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Wallet.AsObject>,
        nextPageToken: string,
    }
}

export class UpdateWalletValidationRequest extends jspb.Message { 
    getWalletId(): string;
    setWalletId(value: string): void;

    clearNewValidatorIdsList(): void;
    getNewValidatorIdsList(): Array<string>;
    setNewValidatorIdsList(value: Array<string>): void;
    addNewValidatorIds(value: string, index?: number): string;

    getNewRequiredApprovalCount(): number;
    setNewRequiredApprovalCount(value: number): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateWalletValidationRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateWalletValidationRequest): UpdateWalletValidationRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateWalletValidationRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateWalletValidationRequest;
    static deserializeBinaryFromReader(message: UpdateWalletValidationRequest, reader: jspb.BinaryReader): UpdateWalletValidationRequest;
}

export namespace UpdateWalletValidationRequest {
    export type AsObject = {
        walletId: string,
        newValidatorIdsList: Array<string>,
        newRequiredApprovalCount: number,
    }
}

export class UpdateWalletPolicyRequest extends jspb.Message { 
    getWalletId(): string;
    setWalletId(value: string): void;

    getPolicyId(): string;
    setPolicyId(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateWalletPolicyRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateWalletPolicyRequest): UpdateWalletPolicyRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateWalletPolicyRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateWalletPolicyRequest;
    static deserializeBinaryFromReader(message: UpdateWalletPolicyRequest, reader: jspb.BinaryReader): UpdateWalletPolicyRequest;
}

export namespace UpdateWalletPolicyRequest {
    export type AsObject = {
        walletId: string,
        policyId: string,
    }
}

export class ReviewWalletProposalRequest extends jspb.Message { 
    getWalletId(): string;
    setWalletId(value: string): void;

    getApprove(): boolean;
    setApprove(value: boolean): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ReviewWalletProposalRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ReviewWalletProposalRequest): ReviewWalletProposalRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ReviewWalletProposalRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ReviewWalletProposalRequest;
    static deserializeBinaryFromReader(message: ReviewWalletProposalRequest, reader: jspb.BinaryReader): ReviewWalletProposalRequest;
}

export namespace ReviewWalletProposalRequest {
    export type AsObject = {
        walletId: string,
        approve: boolean,
    }
}

export class RegisterKeyRequest extends jspb.Message { 
    getWalletId(): string;
    setWalletId(value: string): void;

    getPubKey(): string;
    setPubKey(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RegisterKeyRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RegisterKeyRequest): RegisterKeyRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RegisterKeyRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RegisterKeyRequest;
    static deserializeBinaryFromReader(message: RegisterKeyRequest, reader: jspb.BinaryReader): RegisterKeyRequest;
}

export namespace RegisterKeyRequest {
    export type AsObject = {
        walletId: string,
        pubKey: string,
    }
}

export class RegisterKeyResponse extends jspb.Message { 
    getKeyId(): string;
    setKeyId(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RegisterKeyResponse.AsObject;
    static toObject(includeInstance: boolean, msg: RegisterKeyResponse): RegisterKeyResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RegisterKeyResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RegisterKeyResponse;
    static deserializeBinaryFromReader(message: RegisterKeyResponse, reader: jspb.BinaryReader): RegisterKeyResponse;
}

export namespace RegisterKeyResponse {
    export type AsObject = {
        keyId: string,
    }
}

export class CreateAddressRequest extends jspb.Message { 
    getWalletId(): string;
    setWalletId(value: string): void;

    getFeeRate(): number;
    setFeeRate(value: number): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateAddressRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateAddressRequest): CreateAddressRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateAddressRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateAddressRequest;
    static deserializeBinaryFromReader(message: CreateAddressRequest, reader: jspb.BinaryReader): CreateAddressRequest;
}

export namespace CreateAddressRequest {
    export type AsObject = {
        walletId: string,
        feeRate: number,
    }
}

export class CreateAddressResponse extends jspb.Message { 
    getAddressId(): string;
    setAddressId(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateAddressResponse.AsObject;
    static toObject(includeInstance: boolean, msg: CreateAddressResponse): CreateAddressResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateAddressResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateAddressResponse;
    static deserializeBinaryFromReader(message: CreateAddressResponse, reader: jspb.BinaryReader): CreateAddressResponse;
}

export namespace CreateAddressResponse {
    export type AsObject = {
        addressId: string,
    }
}

export class GetAddressRequest extends jspb.Message { 
    getWalletId(): string;
    setWalletId(value: string): void;

    getAddressId(): string;
    setAddressId(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetAddressRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetAddressRequest): GetAddressRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetAddressRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetAddressRequest;
    static deserializeBinaryFromReader(message: GetAddressRequest, reader: jspb.BinaryReader): GetAddressRequest;
}

export namespace GetAddressRequest {
    export type AsObject = {
        walletId: string,
        addressId: string,
    }
}

export class GetAddressByAddressRequest extends jspb.Message { 
    getWalletId(): string;
    setWalletId(value: string): void;

    getAddress(): string;
    setAddress(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetAddressByAddressRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetAddressByAddressRequest): GetAddressByAddressRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetAddressByAddressRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetAddressByAddressRequest;
    static deserializeBinaryFromReader(message: GetAddressByAddressRequest, reader: jspb.BinaryReader): GetAddressByAddressRequest;
}

export namespace GetAddressByAddressRequest {
    export type AsObject = {
        walletId: string,
        address: string,
    }
}

export class GetAddressByIndexRequest extends jspb.Message { 
    getWalletId(): string;
    setWalletId(value: string): void;

    getIndex(): number;
    setIndex(value: number): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetAddressByIndexRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetAddressByIndexRequest): GetAddressByIndexRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetAddressByIndexRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetAddressByIndexRequest;
    static deserializeBinaryFromReader(message: GetAddressByIndexRequest, reader: jspb.BinaryReader): GetAddressByIndexRequest;
}

export namespace GetAddressByIndexRequest {
    export type AsObject = {
        walletId: string,
        index: number,
    }
}

export class ListAddressesRequest extends jspb.Message { 
    getWalletId(): string;
    setWalletId(value: string): void;

    getOmitChange(): boolean;
    setOmitChange(value: boolean): void;

    getPageSize(): number;
    setPageSize(value: number): void;

    getPageToken(): string;
    setPageToken(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListAddressesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListAddressesRequest): ListAddressesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListAddressesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListAddressesRequest;
    static deserializeBinaryFromReader(message: ListAddressesRequest, reader: jspb.BinaryReader): ListAddressesRequest;
}

export namespace ListAddressesRequest {
    export type AsObject = {
        walletId: string,
        omitChange: boolean,
        pageSize: number,
        pageToken: string,
    }
}

export class ListAddressesResponse extends jspb.Message { 
    clearAddressesList(): void;
    getAddressesList(): Array<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Address>;
    setAddressesList(value: Array<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Address>): void;
    addAddresses(value?: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Address, index?: number): gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Address;

    getNextPageToken(): string;
    setNextPageToken(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListAddressesResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListAddressesResponse): ListAddressesResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListAddressesResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListAddressesResponse;
    static deserializeBinaryFromReader(message: ListAddressesResponse, reader: jspb.BinaryReader): ListAddressesResponse;
}

export namespace ListAddressesResponse {
    export type AsObject = {
        addressesList: Array<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Address.AsObject>,
        nextPageToken: string,
    }
}

export class GetEthereumFeeAddressRequest extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetEthereumFeeAddressRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetEthereumFeeAddressRequest): GetEthereumFeeAddressRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetEthereumFeeAddressRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetEthereumFeeAddressRequest;
    static deserializeBinaryFromReader(message: GetEthereumFeeAddressRequest, reader: jspb.BinaryReader): GetEthereumFeeAddressRequest;
}

export namespace GetEthereumFeeAddressRequest {
    export type AsObject = {
    }
}

export class CreateTransactionRequest extends jspb.Message { 
    getWalletId(): string;
    setWalletId(value: string): void;

    getFeeRate(): number;
    setFeeRate(value: number): void;

    clearTxOutputsList(): void;
    getTxOutputsList(): Array<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.RequestTxOutput>;
    setTxOutputsList(value: Array<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.RequestTxOutput>): void;
    addTxOutputs(value?: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.RequestTxOutput, index?: number): gincoinc_adamant_global_v1_adamantglobalv1_model_pb.RequestTxOutput;

    getAddress(): string;
    setAddress(value: string): void;

    getDestinationTag(): number;
    setDestinationTag(value: number): void;

    getStringValue(): string;
    setStringValue(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateTransactionRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateTransactionRequest): CreateTransactionRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateTransactionRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateTransactionRequest;
    static deserializeBinaryFromReader(message: CreateTransactionRequest, reader: jspb.BinaryReader): CreateTransactionRequest;
}

export namespace CreateTransactionRequest {
    export type AsObject = {
        walletId: string,
        feeRate: number,
        txOutputsList: Array<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.RequestTxOutput.AsObject>,
        address: string,
        destinationTag: number,
        stringValue: string,
    }
}

export class CreateTransactionResponse extends jspb.Message { 
    getTransactionId(): string;
    setTransactionId(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateTransactionResponse.AsObject;
    static toObject(includeInstance: boolean, msg: CreateTransactionResponse): CreateTransactionResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateTransactionResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateTransactionResponse;
    static deserializeBinaryFromReader(message: CreateTransactionResponse, reader: jspb.BinaryReader): CreateTransactionResponse;
}

export namespace CreateTransactionResponse {
    export type AsObject = {
        transactionId: string,
    }
}

export class CreateXRPInitTransactionsRequest extends jspb.Message { 
    getWalletId(): string;
    setWalletId(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateXRPInitTransactionsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateXRPInitTransactionsRequest): CreateXRPInitTransactionsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateXRPInitTransactionsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateXRPInitTransactionsRequest;
    static deserializeBinaryFromReader(message: CreateXRPInitTransactionsRequest, reader: jspb.BinaryReader): CreateXRPInitTransactionsRequest;
}

export namespace CreateXRPInitTransactionsRequest {
    export type AsObject = {
        walletId: string,
    }
}

export class SignTransactionRequest extends jspb.Message { 
    getWalletId(): string;
    setWalletId(value: string): void;

    getTransactionId(): string;
    setTransactionId(value: string): void;

    getKeyId(): string;
    setKeyId(value: string): void;


    hasSignedInfo(): boolean;
    clearSignedInfo(): void;
    getSignedInfo(): gincoinc_adamant_global_v1_adamantglobalv1_model_pb.RequestSignedInfo | undefined;
    setSignedInfo(value?: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.RequestSignedInfo): void;


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
        keyId: string,
        signedInfo?: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.RequestSignedInfo.AsObject,
    }
}

export class SignXRPInitTransactionsRequest extends jspb.Message { 
    getWalletId(): string;
    setWalletId(value: string): void;

    getKeyId(): string;
    setKeyId(value: string): void;

    clearSignedInfoList(): void;
    getSignedInfoList(): Array<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.RequestSignedInfo>;
    setSignedInfoList(value: Array<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.RequestSignedInfo>): void;
    addSignedInfo(value?: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.RequestSignedInfo, index?: number): gincoinc_adamant_global_v1_adamantglobalv1_model_pb.RequestSignedInfo;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SignXRPInitTransactionsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SignXRPInitTransactionsRequest): SignXRPInitTransactionsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SignXRPInitTransactionsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SignXRPInitTransactionsRequest;
    static deserializeBinaryFromReader(message: SignXRPInitTransactionsRequest, reader: jspb.BinaryReader): SignXRPInitTransactionsRequest;
}

export namespace SignXRPInitTransactionsRequest {
    export type AsObject = {
        walletId: string,
        keyId: string,
        signedInfoList: Array<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.RequestSignedInfo.AsObject>,
    }
}

export class SendTransactionRequest extends jspb.Message { 
    getWalletId(): string;
    setWalletId(value: string): void;

    getTransactionId(): string;
    setTransactionId(value: string): void;


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

export class SendTransactionResponse extends jspb.Message { 
    getTxId(): string;
    setTxId(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SendTransactionResponse.AsObject;
    static toObject(includeInstance: boolean, msg: SendTransactionResponse): SendTransactionResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SendTransactionResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SendTransactionResponse;
    static deserializeBinaryFromReader(message: SendTransactionResponse, reader: jspb.BinaryReader): SendTransactionResponse;
}

export namespace SendTransactionResponse {
    export type AsObject = {
        txId: string,
    }
}

export class SendXRPInitTransactionsRequest extends jspb.Message { 
    getWalletId(): string;
    setWalletId(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SendXRPInitTransactionsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SendXRPInitTransactionsRequest): SendXRPInitTransactionsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SendXRPInitTransactionsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SendXRPInitTransactionsRequest;
    static deserializeBinaryFromReader(message: SendXRPInitTransactionsRequest, reader: jspb.BinaryReader): SendXRPInitTransactionsRequest;
}

export namespace SendXRPInitTransactionsRequest {
    export type AsObject = {
        walletId: string,
    }
}

export class SendXRPInitTransactionsResponse extends jspb.Message { 
    clearTxIdsList(): void;
    getTxIdsList(): Array<string>;
    setTxIdsList(value: Array<string>): void;
    addTxIds(value: string, index?: number): string;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SendXRPInitTransactionsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: SendXRPInitTransactionsResponse): SendXRPInitTransactionsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SendXRPInitTransactionsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SendXRPInitTransactionsResponse;
    static deserializeBinaryFromReader(message: SendXRPInitTransactionsResponse, reader: jspb.BinaryReader): SendXRPInitTransactionsResponse;
}

export namespace SendXRPInitTransactionsResponse {
    export type AsObject = {
        txIdsList: Array<string>,
    }
}

export class CancelTransactionRequest extends jspb.Message { 
    getWalletId(): string;
    setWalletId(value: string): void;

    getTransactionId(): string;
    setTransactionId(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CancelTransactionRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CancelTransactionRequest): CancelTransactionRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CancelTransactionRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CancelTransactionRequest;
    static deserializeBinaryFromReader(message: CancelTransactionRequest, reader: jspb.BinaryReader): CancelTransactionRequest;
}

export namespace CancelTransactionRequest {
    export type AsObject = {
        walletId: string,
        transactionId: string,
    }
}

export class GetTransactionRequest extends jspb.Message { 
    getWalletId(): string;
    setWalletId(value: string): void;

    getTransactionId(): string;
    setTransactionId(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetTransactionRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetTransactionRequest): GetTransactionRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetTransactionRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetTransactionRequest;
    static deserializeBinaryFromReader(message: GetTransactionRequest, reader: jspb.BinaryReader): GetTransactionRequest;
}

export namespace GetTransactionRequest {
    export type AsObject = {
        walletId: string,
        transactionId: string,
    }
}

export class GetTransactionByTxIDRequest extends jspb.Message { 
    getWalletId(): string;
    setWalletId(value: string): void;

    getTxId(): string;
    setTxId(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetTransactionByTxIDRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetTransactionByTxIDRequest): GetTransactionByTxIDRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetTransactionByTxIDRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetTransactionByTxIDRequest;
    static deserializeBinaryFromReader(message: GetTransactionByTxIDRequest, reader: jspb.BinaryReader): GetTransactionByTxIDRequest;
}

export namespace GetTransactionByTxIDRequest {
    export type AsObject = {
        walletId: string,
        txId: string,
    }
}

export class ListTransactionsRequest extends jspb.Message { 
    getWalletId(): string;
    setWalletId(value: string): void;

    getPageSize(): number;
    setPageSize(value: number): void;

    getPageToken(): string;
    setPageToken(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListTransactionsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListTransactionsRequest): ListTransactionsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListTransactionsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListTransactionsRequest;
    static deserializeBinaryFromReader(message: ListTransactionsRequest, reader: jspb.BinaryReader): ListTransactionsRequest;
}

export namespace ListTransactionsRequest {
    export type AsObject = {
        walletId: string,
        pageSize: number,
        pageToken: string,
    }
}

export class ListTransactionsResponse extends jspb.Message { 
    clearTransactionsList(): void;
    getTransactionsList(): Array<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Transaction>;
    setTransactionsList(value: Array<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Transaction>): void;
    addTransactions(value?: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Transaction, index?: number): gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Transaction;

    getNextPageToken(): string;
    setNextPageToken(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListTransactionsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListTransactionsResponse): ListTransactionsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListTransactionsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListTransactionsResponse;
    static deserializeBinaryFromReader(message: ListTransactionsResponse, reader: jspb.BinaryReader): ListTransactionsResponse;
}

export namespace ListTransactionsResponse {
    export type AsObject = {
        transactionsList: Array<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Transaction.AsObject>,
        nextPageToken: string,
    }
}

export class GetSignInfoRequest extends jspb.Message { 
    getWalletId(): string;
    setWalletId(value: string): void;

    getTransactionId(): string;
    setTransactionId(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetSignInfoRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetSignInfoRequest): GetSignInfoRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetSignInfoRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetSignInfoRequest;
    static deserializeBinaryFromReader(message: GetSignInfoRequest, reader: jspb.BinaryReader): GetSignInfoRequest;
}

export namespace GetSignInfoRequest {
    export type AsObject = {
        walletId: string,
        transactionId: string,
    }
}

export class ListSignInfoRequest extends jspb.Message { 
    getWalletId(): string;
    setWalletId(value: string): void;

    getTransactionId(): string;
    setTransactionId(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListSignInfoRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListSignInfoRequest): ListSignInfoRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListSignInfoRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListSignInfoRequest;
    static deserializeBinaryFromReader(message: ListSignInfoRequest, reader: jspb.BinaryReader): ListSignInfoRequest;
}

export namespace ListSignInfoRequest {
    export type AsObject = {
        walletId: string,
        transactionId: string,
    }
}

export class ListSignInfoResponse extends jspb.Message { 
    clearSignInfoListList(): void;
    getSignInfoListList(): Array<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.SignInfo>;
    setSignInfoListList(value: Array<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.SignInfo>): void;
    addSignInfoList(value?: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.SignInfo, index?: number): gincoinc_adamant_global_v1_adamantglobalv1_model_pb.SignInfo;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListSignInfoResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListSignInfoResponse): ListSignInfoResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListSignInfoResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListSignInfoResponse;
    static deserializeBinaryFromReader(message: ListSignInfoResponse, reader: jspb.BinaryReader): ListSignInfoResponse;
}

export namespace ListSignInfoResponse {
    export type AsObject = {
        signInfoListList: Array<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.SignInfo.AsObject>,
    }
}

export class ListXRPInitSignInfoRequest extends jspb.Message { 
    getWalletId(): string;
    setWalletId(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListXRPInitSignInfoRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListXRPInitSignInfoRequest): ListXRPInitSignInfoRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListXRPInitSignInfoRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListXRPInitSignInfoRequest;
    static deserializeBinaryFromReader(message: ListXRPInitSignInfoRequest, reader: jspb.BinaryReader): ListXRPInitSignInfoRequest;
}

export namespace ListXRPInitSignInfoRequest {
    export type AsObject = {
        walletId: string,
    }
}

export class ListXRPInitSignInfoResponse extends jspb.Message { 
    clearSignInfoListList(): void;
    getSignInfoListList(): Array<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.SignInfo>;
    setSignInfoListList(value: Array<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.SignInfo>): void;
    addSignInfoList(value?: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.SignInfo, index?: number): gincoinc_adamant_global_v1_adamantglobalv1_model_pb.SignInfo;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListXRPInitSignInfoResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListXRPInitSignInfoResponse): ListXRPInitSignInfoResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListXRPInitSignInfoResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListXRPInitSignInfoResponse;
    static deserializeBinaryFromReader(message: ListXRPInitSignInfoResponse, reader: jspb.BinaryReader): ListXRPInitSignInfoResponse;
}

export namespace ListXRPInitSignInfoResponse {
    export type AsObject = {
        signInfoListList: Array<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.SignInfo.AsObject>,
    }
}

export class ListTransfersRequest extends jspb.Message { 
    getWalletId(): string;
    setWalletId(value: string): void;

    getPageSize(): number;
    setPageSize(value: number): void;

    getPageToken(): string;
    setPageToken(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListTransfersRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListTransfersRequest): ListTransfersRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListTransfersRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListTransfersRequest;
    static deserializeBinaryFromReader(message: ListTransfersRequest, reader: jspb.BinaryReader): ListTransfersRequest;
}

export namespace ListTransfersRequest {
    export type AsObject = {
        walletId: string,
        pageSize: number,
        pageToken: string,
    }
}

export class ListTransfersResponse extends jspb.Message { 
    clearTransfersList(): void;
    getTransfersList(): Array<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Transfer>;
    setTransfersList(value: Array<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Transfer>): void;
    addTransfers(value?: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Transfer, index?: number): gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Transfer;

    getNextPageToken(): string;
    setNextPageToken(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListTransfersResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListTransfersResponse): ListTransfersResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListTransfersResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListTransfersResponse;
    static deserializeBinaryFromReader(message: ListTransfersResponse, reader: jspb.BinaryReader): ListTransfersResponse;
}

export namespace ListTransfersResponse {
    export type AsObject = {
        transfersList: Array<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Transfer.AsObject>,
        nextPageToken: string,
    }
}

export class GetRateSnapshotRequest extends jspb.Message { 
    getRateSnapshotId(): string;
    setRateSnapshotId(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetRateSnapshotRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetRateSnapshotRequest): GetRateSnapshotRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetRateSnapshotRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetRateSnapshotRequest;
    static deserializeBinaryFromReader(message: GetRateSnapshotRequest, reader: jspb.BinaryReader): GetRateSnapshotRequest;
}

export namespace GetRateSnapshotRequest {
    export type AsObject = {
        rateSnapshotId: string,
    }
}

export class GetLatestRateSnapshotRequest extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetLatestRateSnapshotRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetLatestRateSnapshotRequest): GetLatestRateSnapshotRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetLatestRateSnapshotRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetLatestRateSnapshotRequest;
    static deserializeBinaryFromReader(message: GetLatestRateSnapshotRequest, reader: jspb.BinaryReader): GetLatestRateSnapshotRequest;
}

export namespace GetLatestRateSnapshotRequest {
    export type AsObject = {
    }
}

export class SetRatesRequest extends jspb.Message { 
    clearRatesList(): void;
    getRatesList(): Array<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.RequestRate>;
    setRatesList(value: Array<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.RequestRate>): void;
    addRates(value?: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.RequestRate, index?: number): gincoinc_adamant_global_v1_adamantglobalv1_model_pb.RequestRate;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SetRatesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SetRatesRequest): SetRatesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SetRatesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SetRatesRequest;
    static deserializeBinaryFromReader(message: SetRatesRequest, reader: jspb.BinaryReader): SetRatesRequest;
}

export namespace SetRatesRequest {
    export type AsObject = {
        ratesList: Array<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.RequestRate.AsObject>,
    }
}

export class SetRatesResponse extends jspb.Message { 
    getRateSnapshotId(): string;
    setRateSnapshotId(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SetRatesResponse.AsObject;
    static toObject(includeInstance: boolean, msg: SetRatesResponse): SetRatesResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SetRatesResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SetRatesResponse;
    static deserializeBinaryFromReader(message: SetRatesResponse, reader: jspb.BinaryReader): SetRatesResponse;
}

export namespace SetRatesResponse {
    export type AsObject = {
        rateSnapshotId: string,
    }
}

export class GetSpendableBalanceRequest extends jspb.Message { 
    getWalletId(): string;
    setWalletId(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetSpendableBalanceRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetSpendableBalanceRequest): GetSpendableBalanceRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetSpendableBalanceRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetSpendableBalanceRequest;
    static deserializeBinaryFromReader(message: GetSpendableBalanceRequest, reader: jspb.BinaryReader): GetSpendableBalanceRequest;
}

export namespace GetSpendableBalanceRequest {
    export type AsObject = {
        walletId: string,
    }
}

export class GetSpendableBalanceResponse extends jspb.Message { 
    getTotalSpendableBalance(): number;
    setTotalSpendableBalance(value: number): void;

    getStringTotalSpendableBalance(): string;
    setStringTotalSpendableBalance(value: string): void;

    getDailySpendableBalance(): number;
    setDailySpendableBalance(value: number): void;

    getStringDailySpendableBalance(): string;
    setStringDailySpendableBalance(value: string): void;

    getHourlySpendableBalance(): number;
    setHourlySpendableBalance(value: number): void;

    getStringHourlySpendableBalance(): string;
    setStringHourlySpendableBalance(value: string): void;

    getOneTimeSpendableBalance(): number;
    setOneTimeSpendableBalance(value: number): void;

    getStringOneTimeSpendableBalance(): string;
    setStringOneTimeSpendableBalance(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetSpendableBalanceResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetSpendableBalanceResponse): GetSpendableBalanceResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetSpendableBalanceResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetSpendableBalanceResponse;
    static deserializeBinaryFromReader(message: GetSpendableBalanceResponse, reader: jspb.BinaryReader): GetSpendableBalanceResponse;
}

export namespace GetSpendableBalanceResponse {
    export type AsObject = {
        totalSpendableBalance: number,
        stringTotalSpendableBalance: string,
        dailySpendableBalance: number,
        stringDailySpendableBalance: string,
        hourlySpendableBalance: number,
        stringHourlySpendableBalance: string,
        oneTimeSpendableBalance: number,
        stringOneTimeSpendableBalance: string,
    }
}

export class GetTotalBalanceRequest extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetTotalBalanceRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetTotalBalanceRequest): GetTotalBalanceRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetTotalBalanceRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetTotalBalanceRequest;
    static deserializeBinaryFromReader(message: GetTotalBalanceRequest, reader: jspb.BinaryReader): GetTotalBalanceRequest;
}

export namespace GetTotalBalanceRequest {
    export type AsObject = {
    }
}

export class ListBalanceSnapshotsRequest extends jspb.Message { 

    hasStartTime(): boolean;
    clearStartTime(): void;
    getStartTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setStartTime(value?: google_protobuf_timestamp_pb.Timestamp): void;


    hasEndTime(): boolean;
    clearEndTime(): void;
    getEndTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setEndTime(value?: google_protobuf_timestamp_pb.Timestamp): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListBalanceSnapshotsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListBalanceSnapshotsRequest): ListBalanceSnapshotsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListBalanceSnapshotsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListBalanceSnapshotsRequest;
    static deserializeBinaryFromReader(message: ListBalanceSnapshotsRequest, reader: jspb.BinaryReader): ListBalanceSnapshotsRequest;
}

export namespace ListBalanceSnapshotsRequest {
    export type AsObject = {
        startTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        endTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}

export class ListBalanceSnapshotsResponse extends jspb.Message { 
    clearBalanceSnapshotsList(): void;
    getBalanceSnapshotsList(): Array<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.BalanceSnapshot>;
    setBalanceSnapshotsList(value: Array<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.BalanceSnapshot>): void;
    addBalanceSnapshots(value?: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.BalanceSnapshot, index?: number): gincoinc_adamant_global_v1_adamantglobalv1_model_pb.BalanceSnapshot;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListBalanceSnapshotsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListBalanceSnapshotsResponse): ListBalanceSnapshotsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListBalanceSnapshotsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListBalanceSnapshotsResponse;
    static deserializeBinaryFromReader(message: ListBalanceSnapshotsResponse, reader: jspb.BinaryReader): ListBalanceSnapshotsResponse;
}

export namespace ListBalanceSnapshotsResponse {
    export type AsObject = {
        balanceSnapshotsList: Array<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.BalanceSnapshot.AsObject>,
    }
}

export class CalculateFeeRequest extends jspb.Message { 
    getWalletId(): string;
    setWalletId(value: string): void;

    getFeeRate(): number;
    setFeeRate(value: number): void;

    clearTxOutputsList(): void;
    getTxOutputsList(): Array<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.RequestTxOutput>;
    setTxOutputsList(value: Array<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.RequestTxOutput>): void;
    addTxOutputs(value?: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.RequestTxOutput, index?: number): gincoinc_adamant_global_v1_adamantglobalv1_model_pb.RequestTxOutput;

    getAddress(): string;
    setAddress(value: string): void;

    getDestinationTag(): number;
    setDestinationTag(value: number): void;

    getStringValue(): string;
    setStringValue(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CalculateFeeRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CalculateFeeRequest): CalculateFeeRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CalculateFeeRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CalculateFeeRequest;
    static deserializeBinaryFromReader(message: CalculateFeeRequest, reader: jspb.BinaryReader): CalculateFeeRequest;
}

export namespace CalculateFeeRequest {
    export type AsObject = {
        walletId: string,
        feeRate: number,
        txOutputsList: Array<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.RequestTxOutput.AsObject>,
        address: string,
        destinationTag: number,
        stringValue: string,
    }
}

export class CalculateFeeResponse extends jspb.Message { 
    getFee(): number;
    setFee(value: number): void;

    getStringFee(): string;
    setStringFee(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CalculateFeeResponse.AsObject;
    static toObject(includeInstance: boolean, msg: CalculateFeeResponse): CalculateFeeResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CalculateFeeResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CalculateFeeResponse;
    static deserializeBinaryFromReader(message: CalculateFeeResponse, reader: jspb.BinaryReader): CalculateFeeResponse;
}

export namespace CalculateFeeResponse {
    export type AsObject = {
        fee: number,
        stringFee: string,
    }
}

export class GetMembersDeactivatabilitiesRequest extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetMembersDeactivatabilitiesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetMembersDeactivatabilitiesRequest): GetMembersDeactivatabilitiesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetMembersDeactivatabilitiesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetMembersDeactivatabilitiesRequest;
    static deserializeBinaryFromReader(message: GetMembersDeactivatabilitiesRequest, reader: jspb.BinaryReader): GetMembersDeactivatabilitiesRequest;
}

export namespace GetMembersDeactivatabilitiesRequest {
    export type AsObject = {
    }
}

export class GetMembersDeactivatabilitiesResponse extends jspb.Message { 
    clearDeactivatabilitiesList(): void;
    getDeactivatabilitiesList(): Array<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Deactivatability>;
    setDeactivatabilitiesList(value: Array<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Deactivatability>): void;
    addDeactivatabilities(value?: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Deactivatability, index?: number): gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Deactivatability;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetMembersDeactivatabilitiesResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetMembersDeactivatabilitiesResponse): GetMembersDeactivatabilitiesResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetMembersDeactivatabilitiesResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetMembersDeactivatabilitiesResponse;
    static deserializeBinaryFromReader(message: GetMembersDeactivatabilitiesResponse, reader: jspb.BinaryReader): GetMembersDeactivatabilitiesResponse;
}

export namespace GetMembersDeactivatabilitiesResponse {
    export type AsObject = {
        deactivatabilitiesList: Array<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Deactivatability.AsObject>,
    }
}

export class GetRecommendedFeeRateRequest extends jspb.Message { 
    getCoin(): gincoinc_global_v1_gincoincglobalv1_enum_pb.Coin;
    setCoin(value: gincoinc_global_v1_gincoincglobalv1_enum_pb.Coin): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetRecommendedFeeRateRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetRecommendedFeeRateRequest): GetRecommendedFeeRateRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetRecommendedFeeRateRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetRecommendedFeeRateRequest;
    static deserializeBinaryFromReader(message: GetRecommendedFeeRateRequest, reader: jspb.BinaryReader): GetRecommendedFeeRateRequest;
}

export namespace GetRecommendedFeeRateRequest {
    export type AsObject = {
        coin: gincoinc_global_v1_gincoincglobalv1_enum_pb.Coin,
    }
}

export class GetRecommendedFeeRateResponse extends jspb.Message { 
    getFastest(): number;
    setFastest(value: number): void;

    getFast(): number;
    setFast(value: number): void;

    getAverage(): number;
    setAverage(value: number): void;

    getSafeLow(): number;
    setSafeLow(value: number): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetRecommendedFeeRateResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetRecommendedFeeRateResponse): GetRecommendedFeeRateResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetRecommendedFeeRateResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetRecommendedFeeRateResponse;
    static deserializeBinaryFromReader(message: GetRecommendedFeeRateResponse, reader: jspb.BinaryReader): GetRecommendedFeeRateResponse;
}

export namespace GetRecommendedFeeRateResponse {
    export type AsObject = {
        fastest: number,
        fast: number,
        average: number,
        safeLow: number,
    }
}

export class ValidateAddressRequest extends jspb.Message { 
    getCoin(): gincoinc_global_v1_gincoincglobalv1_enum_pb.Coin;
    setCoin(value: gincoinc_global_v1_gincoincglobalv1_enum_pb.Coin): void;

    getAddress(): string;
    setAddress(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ValidateAddressRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ValidateAddressRequest): ValidateAddressRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ValidateAddressRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ValidateAddressRequest;
    static deserializeBinaryFromReader(message: ValidateAddressRequest, reader: jspb.BinaryReader): ValidateAddressRequest;
}

export namespace ValidateAddressRequest {
    export type AsObject = {
        coin: gincoinc_global_v1_gincoincglobalv1_enum_pb.Coin,
        address: string,
    }
}

export class ValidateAddressResponse extends jspb.Message { 
    getValid(): boolean;
    setValid(value: boolean): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ValidateAddressResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ValidateAddressResponse): ValidateAddressResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ValidateAddressResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ValidateAddressResponse;
    static deserializeBinaryFromReader(message: ValidateAddressResponse, reader: jspb.BinaryReader): ValidateAddressResponse;
}

export namespace ValidateAddressResponse {
    export type AsObject = {
        valid: boolean,
    }
}

export class CreateLabeledAddressRequest extends jspb.Message { 
    getName(): string;
    setName(value: string): void;

    getCoin(): gincoinc_global_v1_gincoincglobalv1_enum_pb.Coin;
    setCoin(value: gincoinc_global_v1_gincoincglobalv1_enum_pb.Coin): void;

    getAddress(): string;
    setAddress(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateLabeledAddressRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateLabeledAddressRequest): CreateLabeledAddressRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateLabeledAddressRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateLabeledAddressRequest;
    static deserializeBinaryFromReader(message: CreateLabeledAddressRequest, reader: jspb.BinaryReader): CreateLabeledAddressRequest;
}

export namespace CreateLabeledAddressRequest {
    export type AsObject = {
        name: string,
        coin: gincoinc_global_v1_gincoincglobalv1_enum_pb.Coin,
        address: string,
    }
}

export class CreateLabeledAddressResponse extends jspb.Message { 
    getLabeledAddressId(): string;
    setLabeledAddressId(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateLabeledAddressResponse.AsObject;
    static toObject(includeInstance: boolean, msg: CreateLabeledAddressResponse): CreateLabeledAddressResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateLabeledAddressResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateLabeledAddressResponse;
    static deserializeBinaryFromReader(message: CreateLabeledAddressResponse, reader: jspb.BinaryReader): CreateLabeledAddressResponse;
}

export namespace CreateLabeledAddressResponse {
    export type AsObject = {
        labeledAddressId: string,
    }
}

export class UpdateLabeledAddressRequest extends jspb.Message { 
    getLabeledAddressId(): string;
    setLabeledAddressId(value: string): void;

    getName(): string;
    setName(value: string): void;

    getCoin(): gincoinc_global_v1_gincoincglobalv1_enum_pb.Coin;
    setCoin(value: gincoinc_global_v1_gincoincglobalv1_enum_pb.Coin): void;

    getAddress(): string;
    setAddress(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateLabeledAddressRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateLabeledAddressRequest): UpdateLabeledAddressRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateLabeledAddressRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateLabeledAddressRequest;
    static deserializeBinaryFromReader(message: UpdateLabeledAddressRequest, reader: jspb.BinaryReader): UpdateLabeledAddressRequest;
}

export namespace UpdateLabeledAddressRequest {
    export type AsObject = {
        labeledAddressId: string,
        name: string,
        coin: gincoinc_global_v1_gincoincglobalv1_enum_pb.Coin,
        address: string,
    }
}

export class GetLabeledAddressRequest extends jspb.Message { 
    getLabeledAddressId(): string;
    setLabeledAddressId(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetLabeledAddressRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetLabeledAddressRequest): GetLabeledAddressRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetLabeledAddressRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetLabeledAddressRequest;
    static deserializeBinaryFromReader(message: GetLabeledAddressRequest, reader: jspb.BinaryReader): GetLabeledAddressRequest;
}

export namespace GetLabeledAddressRequest {
    export type AsObject = {
        labeledAddressId: string,
    }
}

export class ListLabeledAddressesRequest extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListLabeledAddressesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListLabeledAddressesRequest): ListLabeledAddressesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListLabeledAddressesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListLabeledAddressesRequest;
    static deserializeBinaryFromReader(message: ListLabeledAddressesRequest, reader: jspb.BinaryReader): ListLabeledAddressesRequest;
}

export namespace ListLabeledAddressesRequest {
    export type AsObject = {
    }
}

export class ListLabeledAddressesResponse extends jspb.Message { 
    clearAddressesList(): void;
    getAddressesList(): Array<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.LabeledAddress>;
    setAddressesList(value: Array<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.LabeledAddress>): void;
    addAddresses(value?: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.LabeledAddress, index?: number): gincoinc_adamant_global_v1_adamantglobalv1_model_pb.LabeledAddress;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListLabeledAddressesResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListLabeledAddressesResponse): ListLabeledAddressesResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListLabeledAddressesResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListLabeledAddressesResponse;
    static deserializeBinaryFromReader(message: ListLabeledAddressesResponse, reader: jspb.BinaryReader): ListLabeledAddressesResponse;
}

export namespace ListLabeledAddressesResponse {
    export type AsObject = {
        addressesList: Array<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.LabeledAddress.AsObject>,
    }
}

export class DeleteLabeledAddressRequest extends jspb.Message { 
    getLabeledAddressId(): string;
    setLabeledAddressId(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteLabeledAddressRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteLabeledAddressRequest): DeleteLabeledAddressRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteLabeledAddressRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteLabeledAddressRequest;
    static deserializeBinaryFromReader(message: DeleteLabeledAddressRequest, reader: jspb.BinaryReader): DeleteLabeledAddressRequest;
}

export namespace DeleteLabeledAddressRequest {
    export type AsObject = {
        labeledAddressId: string,
    }
}

export class ReviewLabeledAddressProposalRequest extends jspb.Message { 
    getLabeledAddressId(): string;
    setLabeledAddressId(value: string): void;

    getApprove(): boolean;
    setApprove(value: boolean): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ReviewLabeledAddressProposalRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ReviewLabeledAddressProposalRequest): ReviewLabeledAddressProposalRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ReviewLabeledAddressProposalRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ReviewLabeledAddressProposalRequest;
    static deserializeBinaryFromReader(message: ReviewLabeledAddressProposalRequest, reader: jspb.BinaryReader): ReviewLabeledAddressProposalRequest;
}

export namespace ReviewLabeledAddressProposalRequest {
    export type AsObject = {
        labeledAddressId: string,
        approve: boolean,
    }
}

export class CreateWhitelistRequest extends jspb.Message { 
    getName(): string;
    setName(value: string): void;

    getCoin(): gincoinc_global_v1_gincoincglobalv1_enum_pb.Coin;
    setCoin(value: gincoinc_global_v1_gincoincglobalv1_enum_pb.Coin): void;

    clearAddressIdsList(): void;
    getAddressIdsList(): Array<string>;
    setAddressIdsList(value: Array<string>): void;
    addAddressIds(value: string, index?: number): string;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateWhitelistRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateWhitelistRequest): CreateWhitelistRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateWhitelistRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateWhitelistRequest;
    static deserializeBinaryFromReader(message: CreateWhitelistRequest, reader: jspb.BinaryReader): CreateWhitelistRequest;
}

export namespace CreateWhitelistRequest {
    export type AsObject = {
        name: string,
        coin: gincoinc_global_v1_gincoincglobalv1_enum_pb.Coin,
        addressIdsList: Array<string>,
    }
}

export class CreateWhitelistResponse extends jspb.Message { 
    getWhitelistId(): string;
    setWhitelistId(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateWhitelistResponse.AsObject;
    static toObject(includeInstance: boolean, msg: CreateWhitelistResponse): CreateWhitelistResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateWhitelistResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateWhitelistResponse;
    static deserializeBinaryFromReader(message: CreateWhitelistResponse, reader: jspb.BinaryReader): CreateWhitelistResponse;
}

export namespace CreateWhitelistResponse {
    export type AsObject = {
        whitelistId: string,
    }
}

export class GetWhitelistRequest extends jspb.Message { 
    getWhitelistId(): string;
    setWhitelistId(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetWhitelistRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetWhitelistRequest): GetWhitelistRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetWhitelistRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetWhitelistRequest;
    static deserializeBinaryFromReader(message: GetWhitelistRequest, reader: jspb.BinaryReader): GetWhitelistRequest;
}

export namespace GetWhitelistRequest {
    export type AsObject = {
        whitelistId: string,
    }
}

export class ListWhitelistsRequest extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListWhitelistsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListWhitelistsRequest): ListWhitelistsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListWhitelistsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListWhitelistsRequest;
    static deserializeBinaryFromReader(message: ListWhitelistsRequest, reader: jspb.BinaryReader): ListWhitelistsRequest;
}

export namespace ListWhitelistsRequest {
    export type AsObject = {
    }
}

export class ListWhitelistsResponse extends jspb.Message { 
    clearWhitelistsList(): void;
    getWhitelistsList(): Array<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Whitelist>;
    setWhitelistsList(value: Array<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Whitelist>): void;
    addWhitelists(value?: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Whitelist, index?: number): gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Whitelist;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListWhitelistsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListWhitelistsResponse): ListWhitelistsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListWhitelistsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListWhitelistsResponse;
    static deserializeBinaryFromReader(message: ListWhitelistsResponse, reader: jspb.BinaryReader): ListWhitelistsResponse;
}

export namespace ListWhitelistsResponse {
    export type AsObject = {
        whitelistsList: Array<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Whitelist.AsObject>,
    }
}

export class UpdateWhitelistRequest extends jspb.Message { 
    getWhitelistId(): string;
    setWhitelistId(value: string): void;

    getName(): string;
    setName(value: string): void;

    getCoin(): gincoinc_global_v1_gincoincglobalv1_enum_pb.Coin;
    setCoin(value: gincoinc_global_v1_gincoincglobalv1_enum_pb.Coin): void;

    clearAddressIdsList(): void;
    getAddressIdsList(): Array<string>;
    setAddressIdsList(value: Array<string>): void;
    addAddressIds(value: string, index?: number): string;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateWhitelistRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateWhitelistRequest): UpdateWhitelistRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateWhitelistRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateWhitelistRequest;
    static deserializeBinaryFromReader(message: UpdateWhitelistRequest, reader: jspb.BinaryReader): UpdateWhitelistRequest;
}

export namespace UpdateWhitelistRequest {
    export type AsObject = {
        whitelistId: string,
        name: string,
        coin: gincoinc_global_v1_gincoincglobalv1_enum_pb.Coin,
        addressIdsList: Array<string>,
    }
}

export class UpdateWhitelistAddressesRequest extends jspb.Message { 
    getWhitelistId(): string;
    setWhitelistId(value: string): void;

    clearAddressIdsList(): void;
    getAddressIdsList(): Array<string>;
    setAddressIdsList(value: Array<string>): void;
    addAddressIds(value: string, index?: number): string;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateWhitelistAddressesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateWhitelistAddressesRequest): UpdateWhitelistAddressesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateWhitelistAddressesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateWhitelistAddressesRequest;
    static deserializeBinaryFromReader(message: UpdateWhitelistAddressesRequest, reader: jspb.BinaryReader): UpdateWhitelistAddressesRequest;
}

export namespace UpdateWhitelistAddressesRequest {
    export type AsObject = {
        whitelistId: string,
        addressIdsList: Array<string>,
    }
}

export class DeleteWhitelistRequest extends jspb.Message { 
    getWhitelistId(): string;
    setWhitelistId(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteWhitelistRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteWhitelistRequest): DeleteWhitelistRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteWhitelistRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteWhitelistRequest;
    static deserializeBinaryFromReader(message: DeleteWhitelistRequest, reader: jspb.BinaryReader): DeleteWhitelistRequest;
}

export namespace DeleteWhitelistRequest {
    export type AsObject = {
        whitelistId: string,
    }
}

export class CreateTransferLimitRequest extends jspb.Message { 
    getName(): string;
    setName(value: string): void;

    getCoin(): gincoinc_global_v1_gincoincglobalv1_enum_pb.Coin;
    setCoin(value: gincoinc_global_v1_gincoincglobalv1_enum_pb.Coin): void;

    clearTransferLimitsList(): void;
    getTransferLimitsList(): Array<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.RequestTransferLimitEntry>;
    setTransferLimitsList(value: Array<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.RequestTransferLimitEntry>): void;
    addTransferLimits(value?: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.RequestTransferLimitEntry, index?: number): gincoinc_adamant_global_v1_adamantglobalv1_model_pb.RequestTransferLimitEntry;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateTransferLimitRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateTransferLimitRequest): CreateTransferLimitRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateTransferLimitRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateTransferLimitRequest;
    static deserializeBinaryFromReader(message: CreateTransferLimitRequest, reader: jspb.BinaryReader): CreateTransferLimitRequest;
}

export namespace CreateTransferLimitRequest {
    export type AsObject = {
        name: string,
        coin: gincoinc_global_v1_gincoincglobalv1_enum_pb.Coin,
        transferLimitsList: Array<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.RequestTransferLimitEntry.AsObject>,
    }
}

export class CreateTransferLimitResponse extends jspb.Message { 
    getTransferLimitId(): string;
    setTransferLimitId(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateTransferLimitResponse.AsObject;
    static toObject(includeInstance: boolean, msg: CreateTransferLimitResponse): CreateTransferLimitResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateTransferLimitResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateTransferLimitResponse;
    static deserializeBinaryFromReader(message: CreateTransferLimitResponse, reader: jspb.BinaryReader): CreateTransferLimitResponse;
}

export namespace CreateTransferLimitResponse {
    export type AsObject = {
        transferLimitId: string,
    }
}

export class GetTransferLimitRequest extends jspb.Message { 
    getTransferLimitId(): string;
    setTransferLimitId(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetTransferLimitRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetTransferLimitRequest): GetTransferLimitRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetTransferLimitRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetTransferLimitRequest;
    static deserializeBinaryFromReader(message: GetTransferLimitRequest, reader: jspb.BinaryReader): GetTransferLimitRequest;
}

export namespace GetTransferLimitRequest {
    export type AsObject = {
        transferLimitId: string,
    }
}

export class ListTransferLimitsRequest extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListTransferLimitsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListTransferLimitsRequest): ListTransferLimitsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListTransferLimitsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListTransferLimitsRequest;
    static deserializeBinaryFromReader(message: ListTransferLimitsRequest, reader: jspb.BinaryReader): ListTransferLimitsRequest;
}

export namespace ListTransferLimitsRequest {
    export type AsObject = {
    }
}

export class ListTransferLimitsResponse extends jspb.Message { 
    clearTransferLimitsList(): void;
    getTransferLimitsList(): Array<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.TransferLimit>;
    setTransferLimitsList(value: Array<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.TransferLimit>): void;
    addTransferLimits(value?: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.TransferLimit, index?: number): gincoinc_adamant_global_v1_adamantglobalv1_model_pb.TransferLimit;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListTransferLimitsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListTransferLimitsResponse): ListTransferLimitsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListTransferLimitsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListTransferLimitsResponse;
    static deserializeBinaryFromReader(message: ListTransferLimitsResponse, reader: jspb.BinaryReader): ListTransferLimitsResponse;
}

export namespace ListTransferLimitsResponse {
    export type AsObject = {
        transferLimitsList: Array<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.TransferLimit.AsObject>,
    }
}

export class UpdateTransferLimitRequest extends jspb.Message { 
    getTransferLimitId(): string;
    setTransferLimitId(value: string): void;

    clearTransferLimitsList(): void;
    getTransferLimitsList(): Array<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.RequestTransferLimitEntry>;
    setTransferLimitsList(value: Array<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.RequestTransferLimitEntry>): void;
    addTransferLimits(value?: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.RequestTransferLimitEntry, index?: number): gincoinc_adamant_global_v1_adamantglobalv1_model_pb.RequestTransferLimitEntry;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateTransferLimitRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateTransferLimitRequest): UpdateTransferLimitRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateTransferLimitRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateTransferLimitRequest;
    static deserializeBinaryFromReader(message: UpdateTransferLimitRequest, reader: jspb.BinaryReader): UpdateTransferLimitRequest;
}

export namespace UpdateTransferLimitRequest {
    export type AsObject = {
        transferLimitId: string,
        transferLimitsList: Array<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.RequestTransferLimitEntry.AsObject>,
    }
}

export class UpdateTransferLimitNameRequest extends jspb.Message { 
    getTransferLimitId(): string;
    setTransferLimitId(value: string): void;

    getName(): string;
    setName(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateTransferLimitNameRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateTransferLimitNameRequest): UpdateTransferLimitNameRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateTransferLimitNameRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateTransferLimitNameRequest;
    static deserializeBinaryFromReader(message: UpdateTransferLimitNameRequest, reader: jspb.BinaryReader): UpdateTransferLimitNameRequest;
}

export namespace UpdateTransferLimitNameRequest {
    export type AsObject = {
        transferLimitId: string,
        name: string,
    }
}

export class DeleteTransferLimitRequest extends jspb.Message { 
    getTransferLimitId(): string;
    setTransferLimitId(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteTransferLimitRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteTransferLimitRequest): DeleteTransferLimitRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteTransferLimitRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteTransferLimitRequest;
    static deserializeBinaryFromReader(message: DeleteTransferLimitRequest, reader: jspb.BinaryReader): DeleteTransferLimitRequest;
}

export namespace DeleteTransferLimitRequest {
    export type AsObject = {
        transferLimitId: string,
    }
}

export class ReviewTransferLimitProposalRequest extends jspb.Message { 
    getTransferLimitId(): string;
    setTransferLimitId(value: string): void;

    getApprove(): boolean;
    setApprove(value: boolean): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ReviewTransferLimitProposalRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ReviewTransferLimitProposalRequest): ReviewTransferLimitProposalRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ReviewTransferLimitProposalRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ReviewTransferLimitProposalRequest;
    static deserializeBinaryFromReader(message: ReviewTransferLimitProposalRequest, reader: jspb.BinaryReader): ReviewTransferLimitProposalRequest;
}

export namespace ReviewTransferLimitProposalRequest {
    export type AsObject = {
        transferLimitId: string,
        approve: boolean,
    }
}

export class CreatePolicyRequest extends jspb.Message { 
    getName(): string;
    setName(value: string): void;

    getCoin(): gincoinc_global_v1_gincoincglobalv1_enum_pb.Coin;
    setCoin(value: gincoinc_global_v1_gincoincglobalv1_enum_pb.Coin): void;

    getType(): gincoinc_adamant_global_v1_adamantglobalv1_enum_pb.PolicyType;
    setType(value: gincoinc_adamant_global_v1_adamantglobalv1_enum_pb.PolicyType): void;

    getWhitelistId(): string;
    setWhitelistId(value: string): void;

    getTransferLimitId(): string;
    setTransferLimitId(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreatePolicyRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreatePolicyRequest): CreatePolicyRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreatePolicyRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreatePolicyRequest;
    static deserializeBinaryFromReader(message: CreatePolicyRequest, reader: jspb.BinaryReader): CreatePolicyRequest;
}

export namespace CreatePolicyRequest {
    export type AsObject = {
        name: string,
        coin: gincoinc_global_v1_gincoincglobalv1_enum_pb.Coin,
        type: gincoinc_adamant_global_v1_adamantglobalv1_enum_pb.PolicyType,
        whitelistId: string,
        transferLimitId: string,
    }
}

export class CreatePolicyResponse extends jspb.Message { 
    getPolicyId(): string;
    setPolicyId(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreatePolicyResponse.AsObject;
    static toObject(includeInstance: boolean, msg: CreatePolicyResponse): CreatePolicyResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreatePolicyResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreatePolicyResponse;
    static deserializeBinaryFromReader(message: CreatePolicyResponse, reader: jspb.BinaryReader): CreatePolicyResponse;
}

export namespace CreatePolicyResponse {
    export type AsObject = {
        policyId: string,
    }
}

export class GetPolicyRequest extends jspb.Message { 
    getPolicyId(): string;
    setPolicyId(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetPolicyRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetPolicyRequest): GetPolicyRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetPolicyRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetPolicyRequest;
    static deserializeBinaryFromReader(message: GetPolicyRequest, reader: jspb.BinaryReader): GetPolicyRequest;
}

export namespace GetPolicyRequest {
    export type AsObject = {
        policyId: string,
    }
}

export class ListPoliciesRequest extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListPoliciesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListPoliciesRequest): ListPoliciesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListPoliciesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListPoliciesRequest;
    static deserializeBinaryFromReader(message: ListPoliciesRequest, reader: jspb.BinaryReader): ListPoliciesRequest;
}

export namespace ListPoliciesRequest {
    export type AsObject = {
    }
}

export class ListPoliciesResponse extends jspb.Message { 
    clearPoliciesList(): void;
    getPoliciesList(): Array<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Policy>;
    setPoliciesList(value: Array<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Policy>): void;
    addPolicies(value?: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Policy, index?: number): gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Policy;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListPoliciesResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListPoliciesResponse): ListPoliciesResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListPoliciesResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListPoliciesResponse;
    static deserializeBinaryFromReader(message: ListPoliciesResponse, reader: jspb.BinaryReader): ListPoliciesResponse;
}

export namespace ListPoliciesResponse {
    export type AsObject = {
        policiesList: Array<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Policy.AsObject>,
    }
}

export class UpdatePolicyRequest extends jspb.Message { 
    getPolicyId(): string;
    setPolicyId(value: string): void;

    getName(): string;
    setName(value: string): void;

    getWhitelistId(): string;
    setWhitelistId(value: string): void;

    getTransferLimitId(): string;
    setTransferLimitId(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdatePolicyRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdatePolicyRequest): UpdatePolicyRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdatePolicyRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdatePolicyRequest;
    static deserializeBinaryFromReader(message: UpdatePolicyRequest, reader: jspb.BinaryReader): UpdatePolicyRequest;
}

export namespace UpdatePolicyRequest {
    export type AsObject = {
        policyId: string,
        name: string,
        whitelistId: string,
        transferLimitId: string,
    }
}

export class DeletePolicyRequest extends jspb.Message { 
    getPolicyId(): string;
    setPolicyId(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeletePolicyRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeletePolicyRequest): DeletePolicyRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeletePolicyRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeletePolicyRequest;
    static deserializeBinaryFromReader(message: DeletePolicyRequest, reader: jspb.BinaryReader): DeletePolicyRequest;
}

export namespace DeletePolicyRequest {
    export type AsObject = {
        policyId: string,
    }
}

export class ReviewPolicyProposalRequest extends jspb.Message { 
    getPolicyId(): string;
    setPolicyId(value: string): void;

    getApprove(): boolean;
    setApprove(value: boolean): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ReviewPolicyProposalRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ReviewPolicyProposalRequest): ReviewPolicyProposalRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ReviewPolicyProposalRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ReviewPolicyProposalRequest;
    static deserializeBinaryFromReader(message: ReviewPolicyProposalRequest, reader: jspb.BinaryReader): ReviewPolicyProposalRequest;
}

export namespace ReviewPolicyProposalRequest {
    export type AsObject = {
        policyId: string,
        approve: boolean,
    }
}
