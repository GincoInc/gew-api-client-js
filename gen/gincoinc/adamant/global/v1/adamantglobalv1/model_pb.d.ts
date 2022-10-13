// package: adamant.global.v1
// file: gincoinc/adamant/global/v1/adamantglobalv1/model.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as gincoinc_adamant_global_v1_adamantglobalv1_enum_pb from "../../../../../gincoinc/adamant/global/v1/adamantglobalv1/enum_pb";
import * as gincoinc_global_v1_gincoincglobalv1_enum_pb from "../../../../../gincoinc/global/v1/gincoincglobalv1/enum_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as validate_validate_pb from "../../../../../validate/validate_pb";

export class Wallet extends jspb.Message { 
    getOwnerId(): string;
    setOwnerId(value: string): Wallet;
    getWalletId(): string;
    setWalletId(value: string): Wallet;
    getName(): string;
    setName(value: string): Wallet;
    getCoin(): gincoinc_global_v1_gincoincglobalv1_enum_pb.Coin;
    setCoin(value: gincoinc_global_v1_gincoincglobalv1_enum_pb.Coin): Wallet;
    getHdAccount(): number;
    setHdAccount(value: number): Wallet;
    getWalletType(): gincoinc_adamant_global_v1_adamantglobalv1_enum_pb.WalletType;
    setWalletType(value: gincoinc_adamant_global_v1_adamantglobalv1_enum_pb.WalletType): Wallet;
    getAddressType(): gincoinc_global_v1_gincoincglobalv1_enum_pb.AddressType;
    setAddressType(value: gincoinc_global_v1_gincoincglobalv1_enum_pb.AddressType): Wallet;
    getM(): number;
    setM(value: number): Wallet;
    getN(): number;
    setN(value: number): Wallet;
    getState(): gincoinc_adamant_global_v1_adamantglobalv1_enum_pb.WalletState;
    setState(value: gincoinc_adamant_global_v1_adamantglobalv1_enum_pb.WalletState): Wallet;
    clearKeysList(): void;
    getKeysList(): Array<Key>;
    setKeysList(value: Array<Key>): Wallet;
    addKeys(value?: Key, index?: number): Key;
    clearMembersList(): void;
    getMembersList(): Array<WalletMember>;
    setMembersList(value: Array<WalletMember>): Wallet;
    addMembers(value?: WalletMember, index?: number): WalletMember;
    getRequiredApprovalCount(): number;
    setRequiredApprovalCount(value: number): Wallet;
    getBalance(): number;
    setBalance(value: number): Wallet;
    getStringBalance(): string;
    setStringBalance(value: string): Wallet;
    getAddress(): string;
    setAddress(value: string): Wallet;
    getPolicyId(): string;
    setPolicyId(value: string): Wallet;

    hasProposal(): boolean;
    clearProposal(): void;
    getProposal(): WalletProposal | undefined;
    setProposal(value?: WalletProposal): Wallet;
    getDestinationWalletId(): string;
    setDestinationWalletId(value: string): Wallet;
    getWatchOnly(): boolean;
    setWatchOnly(value: boolean): Wallet;
    getAddressNumber(): number;
    setAddressNumber(value: number): Wallet;
    getShouldCheckRemittance(): boolean;
    setShouldCheckRemittance(value: boolean): Wallet;
    getInheritWalletId(): string;
    setInheritWalletId(value: string): Wallet;

    hasCreateTime(): boolean;
    clearCreateTime(): void;
    getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): Wallet;

    hasUpdateTime(): boolean;
    clearUpdateTime(): void;
    getUpdateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setUpdateTime(value?: google_protobuf_timestamp_pb.Timestamp): Wallet;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Wallet.AsObject;
    static toObject(includeInstance: boolean, msg: Wallet): Wallet.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Wallet, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Wallet;
    static deserializeBinaryFromReader(message: Wallet, reader: jspb.BinaryReader): Wallet;
}

export namespace Wallet {
    export type AsObject = {
        ownerId: string,
        walletId: string,
        name: string,
        coin: gincoinc_global_v1_gincoincglobalv1_enum_pb.Coin,
        hdAccount: number,
        walletType: gincoinc_adamant_global_v1_adamantglobalv1_enum_pb.WalletType,
        addressType: gincoinc_global_v1_gincoincglobalv1_enum_pb.AddressType,
        m: number,
        n: number,
        state: gincoinc_adamant_global_v1_adamantglobalv1_enum_pb.WalletState,
        keysList: Array<Key.AsObject>,
        membersList: Array<WalletMember.AsObject>,
        requiredApprovalCount: number,
        balance: number,
        stringBalance: string,
        address: string,
        policyId: string,
        proposal?: WalletProposal.AsObject,
        destinationWalletId: string,
        watchOnly: boolean,
        addressNumber: number,
        shouldCheckRemittance: boolean,
        inheritWalletId: string,
        createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        updateTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}

export class WalletWithoutBalance extends jspb.Message { 
    getOwnerId(): string;
    setOwnerId(value: string): WalletWithoutBalance;
    getWalletId(): string;
    setWalletId(value: string): WalletWithoutBalance;
    getName(): string;
    setName(value: string): WalletWithoutBalance;
    getCoin(): gincoinc_global_v1_gincoincglobalv1_enum_pb.Coin;
    setCoin(value: gincoinc_global_v1_gincoincglobalv1_enum_pb.Coin): WalletWithoutBalance;
    getHdAccount(): number;
    setHdAccount(value: number): WalletWithoutBalance;
    getWalletType(): gincoinc_adamant_global_v1_adamantglobalv1_enum_pb.WalletType;
    setWalletType(value: gincoinc_adamant_global_v1_adamantglobalv1_enum_pb.WalletType): WalletWithoutBalance;
    getAddressType(): gincoinc_global_v1_gincoincglobalv1_enum_pb.AddressType;
    setAddressType(value: gincoinc_global_v1_gincoincglobalv1_enum_pb.AddressType): WalletWithoutBalance;
    getM(): number;
    setM(value: number): WalletWithoutBalance;
    getN(): number;
    setN(value: number): WalletWithoutBalance;
    getState(): gincoinc_adamant_global_v1_adamantglobalv1_enum_pb.WalletState;
    setState(value: gincoinc_adamant_global_v1_adamantglobalv1_enum_pb.WalletState): WalletWithoutBalance;
    clearKeysList(): void;
    getKeysList(): Array<Key>;
    setKeysList(value: Array<Key>): WalletWithoutBalance;
    addKeys(value?: Key, index?: number): Key;
    clearMembersList(): void;
    getMembersList(): Array<WalletMember>;
    setMembersList(value: Array<WalletMember>): WalletWithoutBalance;
    addMembers(value?: WalletMember, index?: number): WalletMember;
    getRequiredApprovalCount(): number;
    setRequiredApprovalCount(value: number): WalletWithoutBalance;
    getAddress(): string;
    setAddress(value: string): WalletWithoutBalance;
    getPolicyId(): string;
    setPolicyId(value: string): WalletWithoutBalance;

    hasProposal(): boolean;
    clearProposal(): void;
    getProposal(): WalletProposal | undefined;
    setProposal(value?: WalletProposal): WalletWithoutBalance;
    getDestinationWalletId(): string;
    setDestinationWalletId(value: string): WalletWithoutBalance;
    getWatchOnly(): boolean;
    setWatchOnly(value: boolean): WalletWithoutBalance;
    getShouldCheckRemittance(): boolean;
    setShouldCheckRemittance(value: boolean): WalletWithoutBalance;
    getInheritWalletId(): string;
    setInheritWalletId(value: string): WalletWithoutBalance;

    hasCreateTime(): boolean;
    clearCreateTime(): void;
    getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): WalletWithoutBalance;

    hasUpdateTime(): boolean;
    clearUpdateTime(): void;
    getUpdateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setUpdateTime(value?: google_protobuf_timestamp_pb.Timestamp): WalletWithoutBalance;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WalletWithoutBalance.AsObject;
    static toObject(includeInstance: boolean, msg: WalletWithoutBalance): WalletWithoutBalance.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WalletWithoutBalance, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WalletWithoutBalance;
    static deserializeBinaryFromReader(message: WalletWithoutBalance, reader: jspb.BinaryReader): WalletWithoutBalance;
}

export namespace WalletWithoutBalance {
    export type AsObject = {
        ownerId: string,
        walletId: string,
        name: string,
        coin: gincoinc_global_v1_gincoincglobalv1_enum_pb.Coin,
        hdAccount: number,
        walletType: gincoinc_adamant_global_v1_adamantglobalv1_enum_pb.WalletType,
        addressType: gincoinc_global_v1_gincoincglobalv1_enum_pb.AddressType,
        m: number,
        n: number,
        state: gincoinc_adamant_global_v1_adamantglobalv1_enum_pb.WalletState,
        keysList: Array<Key.AsObject>,
        membersList: Array<WalletMember.AsObject>,
        requiredApprovalCount: number,
        address: string,
        policyId: string,
        proposal?: WalletProposal.AsObject,
        destinationWalletId: string,
        watchOnly: boolean,
        shouldCheckRemittance: boolean,
        inheritWalletId: string,
        createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        updateTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}

export class WalletProposal extends jspb.Message { 
    getProposalType(): gincoinc_adamant_global_v1_adamantglobalv1_enum_pb.WalletProposalType;
    setProposalType(value: gincoinc_adamant_global_v1_adamantglobalv1_enum_pb.WalletProposalType): WalletProposal;
    getRequesterAccountId(): string;
    setRequesterAccountId(value: string): WalletProposal;
    getRequesterName(): string;
    setRequesterName(value: string): WalletProposal;
    getApproverAccountId(): string;
    setApproverAccountId(value: string): WalletProposal;
    getApproverName(): string;
    setApproverName(value: string): WalletProposal;
    getProposedPolicy(): string;
    setProposedPolicy(value: string): WalletProposal;
    clearProposedValidatorsList(): void;
    getProposedValidatorsList(): Array<string>;
    setProposedValidatorsList(value: Array<string>): WalletProposal;
    addProposedValidators(value: string, index?: number): string;
    getProposedRequiredApprovalCount(): number;
    setProposedRequiredApprovalCount(value: number): WalletProposal;
    getIsReviewed(): boolean;
    setIsReviewed(value: boolean): WalletProposal;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WalletProposal.AsObject;
    static toObject(includeInstance: boolean, msg: WalletProposal): WalletProposal.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WalletProposal, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WalletProposal;
    static deserializeBinaryFromReader(message: WalletProposal, reader: jspb.BinaryReader): WalletProposal;
}

export namespace WalletProposal {
    export type AsObject = {
        proposalType: gincoinc_adamant_global_v1_adamantglobalv1_enum_pb.WalletProposalType,
        requesterAccountId: string,
        requesterName: string,
        approverAccountId: string,
        approverName: string,
        proposedPolicy: string,
        proposedValidatorsList: Array<string>,
        proposedRequiredApprovalCount: number,
        isReviewed: boolean,
    }
}

export class WalletMember extends jspb.Message { 
    getAccountId(): string;
    setAccountId(value: string): WalletMember;
    getAccountType(): gincoinc_adamant_global_v1_adamantglobalv1_enum_pb.AccountType;
    setAccountType(value: gincoinc_adamant_global_v1_adamantglobalv1_enum_pb.AccountType): WalletMember;
    getName(): string;
    setName(value: string): WalletMember;
    getEmail(): string;
    setEmail(value: string): WalletMember;
    getRole(): gincoinc_adamant_global_v1_adamantglobalv1_enum_pb.RoleType;
    setRole(value: gincoinc_adamant_global_v1_adamantglobalv1_enum_pb.RoleType): WalletMember;
    getIsKeyRegistered(): boolean;
    setIsKeyRegistered(value: boolean): WalletMember;
    getIsMaster(): boolean;
    setIsMaster(value: boolean): WalletMember;
    getIsValidatedToCreateWallet(): boolean;
    setIsValidatedToCreateWallet(value: boolean): WalletMember;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WalletMember.AsObject;
    static toObject(includeInstance: boolean, msg: WalletMember): WalletMember.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WalletMember, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WalletMember;
    static deserializeBinaryFromReader(message: WalletMember, reader: jspb.BinaryReader): WalletMember;
}

export namespace WalletMember {
    export type AsObject = {
        accountId: string,
        accountType: gincoinc_adamant_global_v1_adamantglobalv1_enum_pb.AccountType,
        name: string,
        email: string,
        role: gincoinc_adamant_global_v1_adamantglobalv1_enum_pb.RoleType,
        isKeyRegistered: boolean,
        isMaster: boolean,
        isValidatedToCreateWallet: boolean,
    }
}

export class Key extends jspb.Message { 
    getWalletId(): string;
    setWalletId(value: string): Key;
    getAccountId(): string;
    setAccountId(value: string): Key;
    getAccountType(): gincoinc_adamant_global_v1_adamantglobalv1_enum_pb.AccountType;
    setAccountType(value: gincoinc_adamant_global_v1_adamantglobalv1_enum_pb.AccountType): Key;
    getKeyId(): string;
    setKeyId(value: string): Key;
    getKeyIndex(): number;
    setKeyIndex(value: number): Key;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Key.AsObject;
    static toObject(includeInstance: boolean, msg: Key): Key.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Key, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Key;
    static deserializeBinaryFromReader(message: Key, reader: jspb.BinaryReader): Key;
}

export namespace Key {
    export type AsObject = {
        walletId: string,
        accountId: string,
        accountType: gincoinc_adamant_global_v1_adamantglobalv1_enum_pb.AccountType,
        keyId: string,
        keyIndex: number,
    }
}

export class Address extends jspb.Message { 
    getWalletId(): string;
    setWalletId(value: string): Address;
    getAddressId(): string;
    setAddressId(value: string): Address;
    getCoin(): gincoinc_global_v1_gincoincglobalv1_enum_pb.Coin;
    setCoin(value: gincoinc_global_v1_gincoincglobalv1_enum_pb.Coin): Address;
    getAddress(): string;
    setAddress(value: string): Address;
    getIndex(): number;
    setIndex(value: number): Address;
    getHdChange(): number;
    setHdChange(value: number): Address;
    getBalance(): number;
    setBalance(value: number): Address;
    getStringBalance(): string;
    setStringBalance(value: string): Address;
    getState(): gincoinc_adamant_global_v1_adamantglobalv1_enum_pb.AddressState;
    setState(value: gincoinc_adamant_global_v1_adamantglobalv1_enum_pb.AddressState): Address;
    getAddressType(): gincoinc_global_v1_gincoincglobalv1_enum_pb.AddressType;
    setAddressType(value: gincoinc_global_v1_gincoincglobalv1_enum_pb.AddressType): Address;

    hasCreateTime(): boolean;
    clearCreateTime(): void;
    getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): Address;

    hasUpdateTime(): boolean;
    clearUpdateTime(): void;
    getUpdateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setUpdateTime(value?: google_protobuf_timestamp_pb.Timestamp): Address;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Address.AsObject;
    static toObject(includeInstance: boolean, msg: Address): Address.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Address, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Address;
    static deserializeBinaryFromReader(message: Address, reader: jspb.BinaryReader): Address;
}

export namespace Address {
    export type AsObject = {
        walletId: string,
        addressId: string,
        coin: gincoinc_global_v1_gincoincglobalv1_enum_pb.Coin,
        address: string,
        index: number,
        hdChange: number,
        balance: number,
        stringBalance: string,
        state: gincoinc_adamant_global_v1_adamantglobalv1_enum_pb.AddressState,
        addressType: gincoinc_global_v1_gincoincglobalv1_enum_pb.AddressType,
        createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        updateTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}

export class AddressWithoutBalance extends jspb.Message { 
    getWalletId(): string;
    setWalletId(value: string): AddressWithoutBalance;
    getAddressId(): string;
    setAddressId(value: string): AddressWithoutBalance;
    getCoin(): gincoinc_global_v1_gincoincglobalv1_enum_pb.Coin;
    setCoin(value: gincoinc_global_v1_gincoincglobalv1_enum_pb.Coin): AddressWithoutBalance;
    getAddress(): string;
    setAddress(value: string): AddressWithoutBalance;
    getIndex(): number;
    setIndex(value: number): AddressWithoutBalance;
    getHdChange(): number;
    setHdChange(value: number): AddressWithoutBalance;
    getState(): gincoinc_adamant_global_v1_adamantglobalv1_enum_pb.AddressState;
    setState(value: gincoinc_adamant_global_v1_adamantglobalv1_enum_pb.AddressState): AddressWithoutBalance;
    getAddressType(): gincoinc_global_v1_gincoincglobalv1_enum_pb.AddressType;
    setAddressType(value: gincoinc_global_v1_gincoincglobalv1_enum_pb.AddressType): AddressWithoutBalance;

    hasCreateTime(): boolean;
    clearCreateTime(): void;
    getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): AddressWithoutBalance;

    hasUpdateTime(): boolean;
    clearUpdateTime(): void;
    getUpdateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setUpdateTime(value?: google_protobuf_timestamp_pb.Timestamp): AddressWithoutBalance;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AddressWithoutBalance.AsObject;
    static toObject(includeInstance: boolean, msg: AddressWithoutBalance): AddressWithoutBalance.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AddressWithoutBalance, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AddressWithoutBalance;
    static deserializeBinaryFromReader(message: AddressWithoutBalance, reader: jspb.BinaryReader): AddressWithoutBalance;
}

export namespace AddressWithoutBalance {
    export type AsObject = {
        walletId: string,
        addressId: string,
        coin: gincoinc_global_v1_gincoincglobalv1_enum_pb.Coin,
        address: string,
        index: number,
        hdChange: number,
        state: gincoinc_adamant_global_v1_adamantglobalv1_enum_pb.AddressState,
        addressType: gincoinc_global_v1_gincoincglobalv1_enum_pb.AddressType,
        createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        updateTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}

export class FlushedAddress extends jspb.Message { 
    getWalletId(): string;
    setWalletId(value: string): FlushedAddress;
    getAddressId(): string;
    setAddressId(value: string): FlushedAddress;
    getCoin(): gincoinc_global_v1_gincoincglobalv1_enum_pb.Coin;
    setCoin(value: gincoinc_global_v1_gincoincglobalv1_enum_pb.Coin): FlushedAddress;
    getAddress(): string;
    setAddress(value: string): FlushedAddress;
    getIndex(): number;
    setIndex(value: number): FlushedAddress;
    getValue(): number;
    setValue(value: number): FlushedAddress;
    getStringValue(): string;
    setStringValue(value: string): FlushedAddress;
    getState(): gincoinc_adamant_global_v1_adamantglobalv1_enum_pb.AddressState;
    setState(value: gincoinc_adamant_global_v1_adamantglobalv1_enum_pb.AddressState): FlushedAddress;
    getAddressType(): gincoinc_global_v1_gincoincglobalv1_enum_pb.AddressType;
    setAddressType(value: gincoinc_global_v1_gincoincglobalv1_enum_pb.AddressType): FlushedAddress;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FlushedAddress.AsObject;
    static toObject(includeInstance: boolean, msg: FlushedAddress): FlushedAddress.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FlushedAddress, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FlushedAddress;
    static deserializeBinaryFromReader(message: FlushedAddress, reader: jspb.BinaryReader): FlushedAddress;
}

export namespace FlushedAddress {
    export type AsObject = {
        walletId: string,
        addressId: string,
        coin: gincoinc_global_v1_gincoincglobalv1_enum_pb.Coin,
        address: string,
        index: number,
        value: number,
        stringValue: string,
        state: gincoinc_adamant_global_v1_adamantglobalv1_enum_pb.AddressState,
        addressType: gincoinc_global_v1_gincoincglobalv1_enum_pb.AddressType,
    }
}

export class EthereumFeeAddress extends jspb.Message { 
    getAddress(): string;
    setAddress(value: string): EthereumFeeAddress;
    getBalance(): number;
    setBalance(value: number): EthereumFeeAddress;
    getStringBalance(): string;
    setStringBalance(value: string): EthereumFeeAddress;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EthereumFeeAddress.AsObject;
    static toObject(includeInstance: boolean, msg: EthereumFeeAddress): EthereumFeeAddress.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EthereumFeeAddress, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EthereumFeeAddress;
    static deserializeBinaryFromReader(message: EthereumFeeAddress, reader: jspb.BinaryReader): EthereumFeeAddress;
}

export namespace EthereumFeeAddress {
    export type AsObject = {
        address: string,
        balance: number,
        stringBalance: string,
    }
}

export class AddressWithBalance extends jspb.Message { 
    getAddress(): string;
    setAddress(value: string): AddressWithBalance;
    getBalance(): number;
    setBalance(value: number): AddressWithBalance;
    getStringBalance(): string;
    setStringBalance(value: string): AddressWithBalance;
    getFeeBalance(): number;
    setFeeBalance(value: number): AddressWithBalance;
    getStringFeeBalance(): string;
    setStringFeeBalance(value: string): AddressWithBalance;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AddressWithBalance.AsObject;
    static toObject(includeInstance: boolean, msg: AddressWithBalance): AddressWithBalance.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AddressWithBalance, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AddressWithBalance;
    static deserializeBinaryFromReader(message: AddressWithBalance, reader: jspb.BinaryReader): AddressWithBalance;
}

export namespace AddressWithBalance {
    export type AsObject = {
        address: string,
        balance: number,
        stringBalance: string,
        feeBalance: number,
        stringFeeBalance: string,
    }
}

export class Transaction extends jspb.Message { 
    getWalletId(): string;
    setWalletId(value: string): Transaction;
    getTransactionId(): string;
    setTransactionId(value: string): Transaction;
    getCoin(): gincoinc_global_v1_gincoincglobalv1_enum_pb.Coin;
    setCoin(value: gincoinc_global_v1_gincoincglobalv1_enum_pb.Coin): Transaction;
    getTxId(): string;
    setTxId(value: string): Transaction;
    getAddress(): string;
    setAddress(value: string): Transaction;
    getValue(): number;
    setValue(value: number): Transaction;
    getStringValue(): string;
    setStringValue(value: string): Transaction;
    getJpyRate(): number;
    setJpyRate(value: number): Transaction;
    getFee(): number;
    setFee(value: number): Transaction;
    getStringFee(): string;
    setStringFee(value: string): Transaction;
    getFeeRate(): number;
    setFeeRate(value: number): Transaction;
    getState(): gincoinc_adamant_global_v1_adamantglobalv1_enum_pb.TransactionState;
    setState(value: gincoinc_adamant_global_v1_adamantglobalv1_enum_pb.TransactionState): Transaction;
    clearSignedKeysList(): void;
    getSignedKeysList(): Array<Key>;
    setSignedKeysList(value: Array<Key>): Transaction;
    addSignedKeys(value?: Key, index?: number): Key;
    clearMembersList(): void;
    getMembersList(): Array<TransactionMember>;
    setMembersList(value: Array<TransactionMember>): Transaction;
    addMembers(value?: TransactionMember, index?: number): TransactionMember;

    hasBitcoinSpecific(): boolean;
    clearBitcoinSpecific(): void;
    getBitcoinSpecific(): BitcoinSpecific | undefined;
    setBitcoinSpecific(value?: BitcoinSpecific): Transaction;

    hasEthereumSpecific(): boolean;
    clearEthereumSpecific(): void;
    getEthereumSpecific(): EthereumSpecific | undefined;
    setEthereumSpecific(value?: EthereumSpecific): Transaction;

    hasLitecoinSpecific(): boolean;
    clearLitecoinSpecific(): void;
    getLitecoinSpecific(): LitecoinSpecific | undefined;
    setLitecoinSpecific(value?: LitecoinSpecific): Transaction;

    hasBitcoincashSpecific(): boolean;
    clearBitcoincashSpecific(): void;
    getBitcoincashSpecific(): BitcoincashSpecific | undefined;
    setBitcoincashSpecific(value?: BitcoincashSpecific): Transaction;

    hasXrpSpecific(): boolean;
    clearXrpSpecific(): void;
    getXrpSpecific(): XrpSpecific | undefined;
    setXrpSpecific(value?: XrpSpecific): Transaction;

    hasTronSpecific(): boolean;
    clearTronSpecific(): void;
    getTronSpecific(): TronSpecific | undefined;
    setTronSpecific(value?: TronSpecific): Transaction;

    hasC0banSpecific(): boolean;
    clearC0banSpecific(): void;
    getC0banSpecific(): C0banSpecific | undefined;
    setC0banSpecific(value?: C0banSpecific): Transaction;

    hasStellarSpecific(): boolean;
    clearStellarSpecific(): void;
    getStellarSpecific(): StellarSpecific | undefined;
    setStellarSpecific(value?: StellarSpecific): Transaction;

    hasCardanoSpecific(): boolean;
    clearCardanoSpecific(): void;
    getCardanoSpecific(): CardanoSpecific | undefined;
    setCardanoSpecific(value?: CardanoSpecific): Transaction;

    hasSubstrateSpecific(): boolean;
    clearSubstrateSpecific(): void;
    getSubstrateSpecific(): SubstrateSpecific | undefined;
    setSubstrateSpecific(value?: SubstrateSpecific): Transaction;

    hasMonacoinSpecific(): boolean;
    clearMonacoinSpecific(): void;
    getMonacoinSpecific(): MonacoinSpecific | undefined;
    setMonacoinSpecific(value?: MonacoinSpecific): Transaction;

    hasNemSpecific(): boolean;
    clearNemSpecific(): void;
    getNemSpecific(): NemSpecific | undefined;
    setNemSpecific(value?: NemSpecific): Transaction;

    hasIostSpecific(): boolean;
    clearIostSpecific(): void;
    getIostSpecific(): IOSTSpecific | undefined;
    setIostSpecific(value?: IOSTSpecific): Transaction;

    hasPolygonSpecific(): boolean;
    clearPolygonSpecific(): void;
    getPolygonSpecific(): PolygonSpecific | undefined;
    setPolygonSpecific(value?: PolygonSpecific): Transaction;

    hasKlaytnSpecific(): boolean;
    clearKlaytnSpecific(): void;
    getKlaytnSpecific(): KlaytnSpecific | undefined;
    setKlaytnSpecific(value?: KlaytnSpecific): Transaction;

    hasCreateTime(): boolean;
    clearCreateTime(): void;
    getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): Transaction;

    hasUpdateTime(): boolean;
    clearUpdateTime(): void;
    getUpdateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setUpdateTime(value?: google_protobuf_timestamp_pb.Timestamp): Transaction;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Transaction.AsObject;
    static toObject(includeInstance: boolean, msg: Transaction): Transaction.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Transaction, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Transaction;
    static deserializeBinaryFromReader(message: Transaction, reader: jspb.BinaryReader): Transaction;
}

export namespace Transaction {
    export type AsObject = {
        walletId: string,
        transactionId: string,
        coin: gincoinc_global_v1_gincoincglobalv1_enum_pb.Coin,
        txId: string,
        address: string,
        value: number,
        stringValue: string,
        jpyRate: number,
        fee: number,
        stringFee: string,
        feeRate: number,
        state: gincoinc_adamant_global_v1_adamantglobalv1_enum_pb.TransactionState,
        signedKeysList: Array<Key.AsObject>,
        membersList: Array<TransactionMember.AsObject>,
        bitcoinSpecific?: BitcoinSpecific.AsObject,
        ethereumSpecific?: EthereumSpecific.AsObject,
        litecoinSpecific?: LitecoinSpecific.AsObject,
        bitcoincashSpecific?: BitcoincashSpecific.AsObject,
        xrpSpecific?: XrpSpecific.AsObject,
        tronSpecific?: TronSpecific.AsObject,
        c0banSpecific?: C0banSpecific.AsObject,
        stellarSpecific?: StellarSpecific.AsObject,
        cardanoSpecific?: CardanoSpecific.AsObject,
        substrateSpecific?: SubstrateSpecific.AsObject,
        monacoinSpecific?: MonacoinSpecific.AsObject,
        nemSpecific?: NemSpecific.AsObject,
        iostSpecific?: IOSTSpecific.AsObject,
        polygonSpecific?: PolygonSpecific.AsObject,
        klaytnSpecific?: KlaytnSpecific.AsObject,
        createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        updateTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}

export class TransactionMember extends jspb.Message { 
    getAccountId(): string;
    setAccountId(value: string): TransactionMember;
    getAccountType(): gincoinc_adamant_global_v1_adamantglobalv1_enum_pb.AccountType;
    setAccountType(value: gincoinc_adamant_global_v1_adamantglobalv1_enum_pb.AccountType): TransactionMember;
    getName(): string;
    setName(value: string): TransactionMember;
    getEmail(): string;
    setEmail(value: string): TransactionMember;
    getRole(): gincoinc_adamant_global_v1_adamantglobalv1_enum_pb.RoleType;
    setRole(value: gincoinc_adamant_global_v1_adamantglobalv1_enum_pb.RoleType): TransactionMember;
    getSigned(): boolean;
    setSigned(value: boolean): TransactionMember;
    getValidated(): boolean;
    setValidated(value: boolean): TransactionMember;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TransactionMember.AsObject;
    static toObject(includeInstance: boolean, msg: TransactionMember): TransactionMember.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TransactionMember, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TransactionMember;
    static deserializeBinaryFromReader(message: TransactionMember, reader: jspb.BinaryReader): TransactionMember;
}

export namespace TransactionMember {
    export type AsObject = {
        accountId: string,
        accountType: gincoinc_adamant_global_v1_adamantglobalv1_enum_pb.AccountType,
        name: string,
        email: string,
        role: gincoinc_adamant_global_v1_adamantglobalv1_enum_pb.RoleType,
        signed: boolean,
        validated: boolean,
    }
}

export class TxInput extends jspb.Message { 
    getTxId(): string;
    setTxId(value: string): TxInput;
    getTxIndex(): number;
    setTxIndex(value: number): TxInput;
    getValue(): number;
    setValue(value: number): TxInput;
    getStringValue(): string;
    setStringValue(value: string): TxInput;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TxInput.AsObject;
    static toObject(includeInstance: boolean, msg: TxInput): TxInput.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TxInput, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TxInput;
    static deserializeBinaryFromReader(message: TxInput, reader: jspb.BinaryReader): TxInput;
}

export namespace TxInput {
    export type AsObject = {
        txId: string,
        txIndex: number,
        value: number,
        stringValue: string,
    }
}

export class TxOutput extends jspb.Message { 
    getAddress(): string;
    setAddress(value: string): TxOutput;
    getValue(): number;
    setValue(value: number): TxOutput;
    getStringValue(): string;
    setStringValue(value: string): TxOutput;
    getIsChange(): boolean;
    setIsChange(value: boolean): TxOutput;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TxOutput.AsObject;
    static toObject(includeInstance: boolean, msg: TxOutput): TxOutput.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TxOutput, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TxOutput;
    static deserializeBinaryFromReader(message: TxOutput, reader: jspb.BinaryReader): TxOutput;
}

export namespace TxOutput {
    export type AsObject = {
        address: string,
        value: number,
        stringValue: string,
        isChange: boolean,
    }
}

export class UTXO extends jspb.Message { 
    getTxId(): string;
    setTxId(value: string): UTXO;
    getVout(): number;
    setVout(value: number): UTXO;
    getValue(): number;
    setValue(value: number): UTXO;
    getStringValue(): string;
    setStringValue(value: string): UTXO;
    getAddress(): string;
    setAddress(value: string): UTXO;
    getTransactionId(): string;
    setTransactionId(value: string): UTXO;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UTXO.AsObject;
    static toObject(includeInstance: boolean, msg: UTXO): UTXO.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UTXO, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UTXO;
    static deserializeBinaryFromReader(message: UTXO, reader: jspb.BinaryReader): UTXO;
}

export namespace UTXO {
    export type AsObject = {
        txId: string,
        vout: number,
        value: number,
        stringValue: string,
        address: string,
        transactionId: string,
    }
}

export class BitcoinSpecific extends jspb.Message { 
    clearTxInputsList(): void;
    getTxInputsList(): Array<TxInput>;
    setTxInputsList(value: Array<TxInput>): BitcoinSpecific;
    addTxInputs(value?: TxInput, index?: number): TxInput;
    clearTxOutputsList(): void;
    getTxOutputsList(): Array<TxOutput>;
    setTxOutputsList(value: Array<TxOutput>): BitcoinSpecific;
    addTxOutputs(value?: TxOutput, index?: number): TxOutput;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BitcoinSpecific.AsObject;
    static toObject(includeInstance: boolean, msg: BitcoinSpecific): BitcoinSpecific.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BitcoinSpecific, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BitcoinSpecific;
    static deserializeBinaryFromReader(message: BitcoinSpecific, reader: jspb.BinaryReader): BitcoinSpecific;
}

export namespace BitcoinSpecific {
    export type AsObject = {
        txInputsList: Array<TxInput.AsObject>,
        txOutputsList: Array<TxOutput.AsObject>,
    }
}

export class LitecoinSpecific extends jspb.Message { 
    clearTxInputsList(): void;
    getTxInputsList(): Array<TxInput>;
    setTxInputsList(value: Array<TxInput>): LitecoinSpecific;
    addTxInputs(value?: TxInput, index?: number): TxInput;
    clearTxOutputsList(): void;
    getTxOutputsList(): Array<TxOutput>;
    setTxOutputsList(value: Array<TxOutput>): LitecoinSpecific;
    addTxOutputs(value?: TxOutput, index?: number): TxOutput;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LitecoinSpecific.AsObject;
    static toObject(includeInstance: boolean, msg: LitecoinSpecific): LitecoinSpecific.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LitecoinSpecific, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LitecoinSpecific;
    static deserializeBinaryFromReader(message: LitecoinSpecific, reader: jspb.BinaryReader): LitecoinSpecific;
}

export namespace LitecoinSpecific {
    export type AsObject = {
        txInputsList: Array<TxInput.AsObject>,
        txOutputsList: Array<TxOutput.AsObject>,
    }
}

export class BitcoincashSpecific extends jspb.Message { 
    clearTxInputsList(): void;
    getTxInputsList(): Array<TxInput>;
    setTxInputsList(value: Array<TxInput>): BitcoincashSpecific;
    addTxInputs(value?: TxInput, index?: number): TxInput;
    clearTxOutputsList(): void;
    getTxOutputsList(): Array<TxOutput>;
    setTxOutputsList(value: Array<TxOutput>): BitcoincashSpecific;
    addTxOutputs(value?: TxOutput, index?: number): TxOutput;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BitcoincashSpecific.AsObject;
    static toObject(includeInstance: boolean, msg: BitcoincashSpecific): BitcoincashSpecific.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BitcoincashSpecific, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BitcoincashSpecific;
    static deserializeBinaryFromReader(message: BitcoincashSpecific, reader: jspb.BinaryReader): BitcoincashSpecific;
}

export namespace BitcoincashSpecific {
    export type AsObject = {
        txInputsList: Array<TxInput.AsObject>,
        txOutputsList: Array<TxOutput.AsObject>,
    }
}

export class EthereumSpecific extends jspb.Message { 
    getGasLimit(): number;
    setGasLimit(value: number): EthereumSpecific;
    getNonce(): number;
    setNonce(value: number): EthereumSpecific;
    getIsNextNonce(): boolean;
    setIsNextNonce(value: boolean): EthereumSpecific;
    getMethodIdType(): gincoinc_adamant_global_v1_adamantglobalv1_enum_pb.EthereumContractMethodIDType;
    setMethodIdType(value: gincoinc_adamant_global_v1_adamantglobalv1_enum_pb.EthereumContractMethodIDType): EthereumSpecific;
    getExpiration(): number;
    setExpiration(value: number): EthereumSpecific;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EthereumSpecific.AsObject;
    static toObject(includeInstance: boolean, msg: EthereumSpecific): EthereumSpecific.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EthereumSpecific, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EthereumSpecific;
    static deserializeBinaryFromReader(message: EthereumSpecific, reader: jspb.BinaryReader): EthereumSpecific;
}

export namespace EthereumSpecific {
    export type AsObject = {
        gasLimit: number,
        nonce: number,
        isNextNonce: boolean,
        methodIdType: gincoinc_adamant_global_v1_adamantglobalv1_enum_pb.EthereumContractMethodIDType,
        expiration: number,
    }
}

export class XrpSpecific extends jspb.Message { 
    getSequenceNumber(): number;
    setSequenceNumber(value: number): XrpSpecific;
    getDestinationTag(): number;
    setDestinationTag(value: number): XrpSpecific;
    getTxType(): gincoinc_global_v1_gincoincglobalv1_enum_pb.XRPTransactionType;
    setTxType(value: gincoinc_global_v1_gincoincglobalv1_enum_pb.XRPTransactionType): XrpSpecific;
    getIsNextSequenceNumber(): boolean;
    setIsNextSequenceNumber(value: boolean): XrpSpecific;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): XrpSpecific.AsObject;
    static toObject(includeInstance: boolean, msg: XrpSpecific): XrpSpecific.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: XrpSpecific, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): XrpSpecific;
    static deserializeBinaryFromReader(message: XrpSpecific, reader: jspb.BinaryReader): XrpSpecific;
}

export namespace XrpSpecific {
    export type AsObject = {
        sequenceNumber: number,
        destinationTag: number,
        txType: gincoinc_global_v1_gincoincglobalv1_enum_pb.XRPTransactionType,
        isNextSequenceNumber: boolean,
    }
}

export class TronSpecific extends jspb.Message { 
    getExpiration(): number;
    setExpiration(value: number): TronSpecific;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TronSpecific.AsObject;
    static toObject(includeInstance: boolean, msg: TronSpecific): TronSpecific.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TronSpecific, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TronSpecific;
    static deserializeBinaryFromReader(message: TronSpecific, reader: jspb.BinaryReader): TronSpecific;
}

export namespace TronSpecific {
    export type AsObject = {
        expiration: number,
    }
}

export class C0banSpecific extends jspb.Message { 
    clearTxInputsList(): void;
    getTxInputsList(): Array<TxInput>;
    setTxInputsList(value: Array<TxInput>): C0banSpecific;
    addTxInputs(value?: TxInput, index?: number): TxInput;
    clearTxOutputsList(): void;
    getTxOutputsList(): Array<TxOutput>;
    setTxOutputsList(value: Array<TxOutput>): C0banSpecific;
    addTxOutputs(value?: TxOutput, index?: number): TxOutput;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): C0banSpecific.AsObject;
    static toObject(includeInstance: boolean, msg: C0banSpecific): C0banSpecific.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: C0banSpecific, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): C0banSpecific;
    static deserializeBinaryFromReader(message: C0banSpecific, reader: jspb.BinaryReader): C0banSpecific;
}

export namespace C0banSpecific {
    export type AsObject = {
        txInputsList: Array<TxInput.AsObject>,
        txOutputsList: Array<TxOutput.AsObject>,
    }
}

export class StellarSpecific extends jspb.Message { 
    getSequenceNumber(): number;
    setSequenceNumber(value: number): StellarSpecific;
    getMemoId(): string;
    setMemoId(value: string): StellarSpecific;
    getIsNextSequenceNumber(): boolean;
    setIsNextSequenceNumber(value: boolean): StellarSpecific;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StellarSpecific.AsObject;
    static toObject(includeInstance: boolean, msg: StellarSpecific): StellarSpecific.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StellarSpecific, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StellarSpecific;
    static deserializeBinaryFromReader(message: StellarSpecific, reader: jspb.BinaryReader): StellarSpecific;
}

export namespace StellarSpecific {
    export type AsObject = {
        sequenceNumber: number,
        memoId: string,
        isNextSequenceNumber: boolean,
    }
}

export class CardanoSpecific extends jspb.Message { 
    clearTxInputsList(): void;
    getTxInputsList(): Array<TxInput>;
    setTxInputsList(value: Array<TxInput>): CardanoSpecific;
    addTxInputs(value?: TxInput, index?: number): TxInput;
    clearTxOutputsList(): void;
    getTxOutputsList(): Array<TxOutput>;
    setTxOutputsList(value: Array<TxOutput>): CardanoSpecific;
    addTxOutputs(value?: TxOutput, index?: number): TxOutput;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CardanoSpecific.AsObject;
    static toObject(includeInstance: boolean, msg: CardanoSpecific): CardanoSpecific.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CardanoSpecific, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CardanoSpecific;
    static deserializeBinaryFromReader(message: CardanoSpecific, reader: jspb.BinaryReader): CardanoSpecific;
}

export namespace CardanoSpecific {
    export type AsObject = {
        txInputsList: Array<TxInput.AsObject>,
        txOutputsList: Array<TxOutput.AsObject>,
    }
}

export class SubstrateSpecific extends jspb.Message { 
    getNonce(): number;
    setNonce(value: number): SubstrateSpecific;
    getIsNextNonce(): boolean;
    setIsNextNonce(value: boolean): SubstrateSpecific;
    clearSubstrateMultisigTransactionsList(): void;
    getSubstrateMultisigTransactionsList(): Array<SubstrateMultisigTransaction>;
    setSubstrateMultisigTransactionsList(value: Array<SubstrateMultisigTransaction>): SubstrateSpecific;
    addSubstrateMultisigTransactions(value?: SubstrateMultisigTransaction, index?: number): SubstrateMultisigTransaction;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SubstrateSpecific.AsObject;
    static toObject(includeInstance: boolean, msg: SubstrateSpecific): SubstrateSpecific.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SubstrateSpecific, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SubstrateSpecific;
    static deserializeBinaryFromReader(message: SubstrateSpecific, reader: jspb.BinaryReader): SubstrateSpecific;
}

export namespace SubstrateSpecific {
    export type AsObject = {
        nonce: number,
        isNextNonce: boolean,
        substrateMultisigTransactionsList: Array<SubstrateMultisigTransaction.AsObject>,
    }
}

export class MonacoinSpecific extends jspb.Message { 
    clearTxInputsList(): void;
    getTxInputsList(): Array<TxInput>;
    setTxInputsList(value: Array<TxInput>): MonacoinSpecific;
    addTxInputs(value?: TxInput, index?: number): TxInput;
    clearTxOutputsList(): void;
    getTxOutputsList(): Array<TxOutput>;
    setTxOutputsList(value: Array<TxOutput>): MonacoinSpecific;
    addTxOutputs(value?: TxOutput, index?: number): TxOutput;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MonacoinSpecific.AsObject;
    static toObject(includeInstance: boolean, msg: MonacoinSpecific): MonacoinSpecific.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MonacoinSpecific, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MonacoinSpecific;
    static deserializeBinaryFromReader(message: MonacoinSpecific, reader: jspb.BinaryReader): MonacoinSpecific;
}

export namespace MonacoinSpecific {
    export type AsObject = {
        txInputsList: Array<TxInput.AsObject>,
        txOutputsList: Array<TxOutput.AsObject>,
    }
}

export class NemSpecific extends jspb.Message { 
    getMessage(): string;
    setMessage(value: string): NemSpecific;
    getTxType(): gincoinc_global_v1_gincoincglobalv1_enum_pb.NemTransactionType;
    setTxType(value: gincoinc_global_v1_gincoincglobalv1_enum_pb.NemTransactionType): NemSpecific;
    clearNemMultisigTransactionsList(): void;
    getNemMultisigTransactionsList(): Array<NemMultisigTransaction>;
    setNemMultisigTransactionsList(value: Array<NemMultisigTransaction>): NemSpecific;
    addNemMultisigTransactions(value?: NemMultisigTransaction, index?: number): NemMultisigTransaction;
    getExpiration(): number;
    setExpiration(value: number): NemSpecific;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NemSpecific.AsObject;
    static toObject(includeInstance: boolean, msg: NemSpecific): NemSpecific.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NemSpecific, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NemSpecific;
    static deserializeBinaryFromReader(message: NemSpecific, reader: jspb.BinaryReader): NemSpecific;
}

export namespace NemSpecific {
    export type AsObject = {
        message: string,
        txType: gincoinc_global_v1_gincoincglobalv1_enum_pb.NemTransactionType,
        nemMultisigTransactionsList: Array<NemMultisigTransaction.AsObject>,
        expiration: number,
    }
}

export class IOSTSpecific extends jspb.Message { 
    getMemo(): string;
    setMemo(value: string): IOSTSpecific;
    getTimestamp(): number;
    setTimestamp(value: number): IOSTSpecific;
    getExpiration(): number;
    setExpiration(value: number): IOSTSpecific;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): IOSTSpecific.AsObject;
    static toObject(includeInstance: boolean, msg: IOSTSpecific): IOSTSpecific.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: IOSTSpecific, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): IOSTSpecific;
    static deserializeBinaryFromReader(message: IOSTSpecific, reader: jspb.BinaryReader): IOSTSpecific;
}

export namespace IOSTSpecific {
    export type AsObject = {
        memo: string,
        timestamp: number,
        expiration: number,
    }
}

export class PolygonSpecific extends jspb.Message { 
    getGasLimit(): number;
    setGasLimit(value: number): PolygonSpecific;
    getNonce(): number;
    setNonce(value: number): PolygonSpecific;
    getIsNextNonce(): boolean;
    setIsNextNonce(value: boolean): PolygonSpecific;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PolygonSpecific.AsObject;
    static toObject(includeInstance: boolean, msg: PolygonSpecific): PolygonSpecific.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PolygonSpecific, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PolygonSpecific;
    static deserializeBinaryFromReader(message: PolygonSpecific, reader: jspb.BinaryReader): PolygonSpecific;
}

export namespace PolygonSpecific {
    export type AsObject = {
        gasLimit: number,
        nonce: number,
        isNextNonce: boolean,
    }
}

export class KlaytnSpecific extends jspb.Message { 
    getGasLimit(): number;
    setGasLimit(value: number): KlaytnSpecific;
    getNonce(): number;
    setNonce(value: number): KlaytnSpecific;
    getIsNextNonce(): boolean;
    setIsNextNonce(value: boolean): KlaytnSpecific;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): KlaytnSpecific.AsObject;
    static toObject(includeInstance: boolean, msg: KlaytnSpecific): KlaytnSpecific.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: KlaytnSpecific, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): KlaytnSpecific;
    static deserializeBinaryFromReader(message: KlaytnSpecific, reader: jspb.BinaryReader): KlaytnSpecific;
}

export namespace KlaytnSpecific {
    export type AsObject = {
        gasLimit: number,
        nonce: number,
        isNextNonce: boolean,
    }
}

export class CreateTransactionSubstrateSpecific extends jspb.Message { 
    getTransactionId(): string;
    setTransactionId(value: string): CreateTransactionSubstrateSpecific;
    getCallType(): gincoinc_adamant_global_v1_adamantglobalv1_enum_pb.SubstrateCallType;
    setCallType(value: gincoinc_adamant_global_v1_adamantglobalv1_enum_pb.SubstrateCallType): CreateTransactionSubstrateSpecific;
    getMultisigCallType(): gincoinc_adamant_global_v1_adamantglobalv1_enum_pb.SubstrateCallType;
    setMultisigCallType(value: gincoinc_adamant_global_v1_adamantglobalv1_enum_pb.SubstrateCallType): CreateTransactionSubstrateSpecific;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateTransactionSubstrateSpecific.AsObject;
    static toObject(includeInstance: boolean, msg: CreateTransactionSubstrateSpecific): CreateTransactionSubstrateSpecific.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateTransactionSubstrateSpecific, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateTransactionSubstrateSpecific;
    static deserializeBinaryFromReader(message: CreateTransactionSubstrateSpecific, reader: jspb.BinaryReader): CreateTransactionSubstrateSpecific;
}

export namespace CreateTransactionSubstrateSpecific {
    export type AsObject = {
        transactionId: string,
        callType: gincoinc_adamant_global_v1_adamantglobalv1_enum_pb.SubstrateCallType,
        multisigCallType: gincoinc_adamant_global_v1_adamantglobalv1_enum_pb.SubstrateCallType,
    }
}

export class CreateTransactionWalletConnectSpecific extends jspb.Message { 
    getCallRequestType(): gincoinc_adamant_global_v1_adamantglobalv1_enum_pb.WalletConnectCallRequestType;
    setCallRequestType(value: gincoinc_adamant_global_v1_adamantglobalv1_enum_pb.WalletConnectCallRequestType): CreateTransactionWalletConnectSpecific;
    getCallRequestParams(): string;
    setCallRequestParams(value: string): CreateTransactionWalletConnectSpecific;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateTransactionWalletConnectSpecific.AsObject;
    static toObject(includeInstance: boolean, msg: CreateTransactionWalletConnectSpecific): CreateTransactionWalletConnectSpecific.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateTransactionWalletConnectSpecific, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateTransactionWalletConnectSpecific;
    static deserializeBinaryFromReader(message: CreateTransactionWalletConnectSpecific, reader: jspb.BinaryReader): CreateTransactionWalletConnectSpecific;
}

export namespace CreateTransactionWalletConnectSpecific {
    export type AsObject = {
        callRequestType: gincoinc_adamant_global_v1_adamantglobalv1_enum_pb.WalletConnectCallRequestType,
        callRequestParams: string,
    }
}

export class CreateTransactionNemSpecific extends jspb.Message { 
    getTransactionId(): string;
    setTransactionId(value: string): CreateTransactionNemSpecific;
    getTxType(): gincoinc_global_v1_gincoincglobalv1_enum_pb.NemTransactionType;
    setTxType(value: gincoinc_global_v1_gincoincglobalv1_enum_pb.NemTransactionType): CreateTransactionNemSpecific;
    getMessage(): string;
    setMessage(value: string): CreateTransactionNemSpecific;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateTransactionNemSpecific.AsObject;
    static toObject(includeInstance: boolean, msg: CreateTransactionNemSpecific): CreateTransactionNemSpecific.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateTransactionNemSpecific, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateTransactionNemSpecific;
    static deserializeBinaryFromReader(message: CreateTransactionNemSpecific, reader: jspb.BinaryReader): CreateTransactionNemSpecific;
}

export namespace CreateTransactionNemSpecific {
    export type AsObject = {
        transactionId: string,
        txType: gincoinc_global_v1_gincoincglobalv1_enum_pb.NemTransactionType,
        message: string,
    }
}

export class CreateTransactionIOSTSpecific extends jspb.Message { 
    getMemo(): string;
    setMemo(value: string): CreateTransactionIOSTSpecific;
    getTimestamp(): number;
    setTimestamp(value: number): CreateTransactionIOSTSpecific;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateTransactionIOSTSpecific.AsObject;
    static toObject(includeInstance: boolean, msg: CreateTransactionIOSTSpecific): CreateTransactionIOSTSpecific.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateTransactionIOSTSpecific, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateTransactionIOSTSpecific;
    static deserializeBinaryFromReader(message: CreateTransactionIOSTSpecific, reader: jspb.BinaryReader): CreateTransactionIOSTSpecific;
}

export namespace CreateTransactionIOSTSpecific {
    export type AsObject = {
        memo: string,
        timestamp: number,
    }
}

export class SubstrateMultisigTransaction extends jspb.Message { 
    getWalletId(): string;
    setWalletId(value: string): SubstrateMultisigTransaction;
    getTransactionId(): string;
    setTransactionId(value: string): SubstrateMultisigTransaction;
    getSubstrateMultisigTransactionId(): string;
    setSubstrateMultisigTransactionId(value: string): SubstrateMultisigTransaction;
    getAccountId(): string;
    setAccountId(value: string): SubstrateMultisigTransaction;
    getTxId(): string;
    setTxId(value: string): SubstrateMultisigTransaction;
    getExtrinsicId(): string;
    setExtrinsicId(value: string): SubstrateMultisigTransaction;
    getJpyRate(): number;
    setJpyRate(value: number): SubstrateMultisigTransaction;
    getFee(): number;
    setFee(value: number): SubstrateMultisigTransaction;
    getStringFee(): string;
    setStringFee(value: string): SubstrateMultisigTransaction;
    getNonce(): number;
    setNonce(value: number): SubstrateMultisigTransaction;
    getMultisigCallType(): gincoinc_adamant_global_v1_adamantglobalv1_enum_pb.SubstrateCallType;
    setMultisigCallType(value: gincoinc_adamant_global_v1_adamantglobalv1_enum_pb.SubstrateCallType): SubstrateMultisigTransaction;
    getState(): gincoinc_adamant_global_v1_adamantglobalv1_enum_pb.TransactionState;
    setState(value: gincoinc_adamant_global_v1_adamantglobalv1_enum_pb.TransactionState): SubstrateMultisigTransaction;

    hasCreateTime(): boolean;
    clearCreateTime(): void;
    getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): SubstrateMultisigTransaction;

    hasUpdateTime(): boolean;
    clearUpdateTime(): void;
    getUpdateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setUpdateTime(value?: google_protobuf_timestamp_pb.Timestamp): SubstrateMultisigTransaction;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SubstrateMultisigTransaction.AsObject;
    static toObject(includeInstance: boolean, msg: SubstrateMultisigTransaction): SubstrateMultisigTransaction.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SubstrateMultisigTransaction, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SubstrateMultisigTransaction;
    static deserializeBinaryFromReader(message: SubstrateMultisigTransaction, reader: jspb.BinaryReader): SubstrateMultisigTransaction;
}

export namespace SubstrateMultisigTransaction {
    export type AsObject = {
        walletId: string,
        transactionId: string,
        substrateMultisigTransactionId: string,
        accountId: string,
        txId: string,
        extrinsicId: string,
        jpyRate: number,
        fee: number,
        stringFee: string,
        nonce: number,
        multisigCallType: gincoinc_adamant_global_v1_adamantglobalv1_enum_pb.SubstrateCallType,
        state: gincoinc_adamant_global_v1_adamantglobalv1_enum_pb.TransactionState,
        createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        updateTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}

export class NemMultisigTransaction extends jspb.Message { 
    getWalletId(): string;
    setWalletId(value: string): NemMultisigTransaction;
    getTransactionId(): string;
    setTransactionId(value: string): NemMultisigTransaction;
    getNemMultisigTransactionId(): string;
    setNemMultisigTransactionId(value: string): NemMultisigTransaction;
    getAccountId(): string;
    setAccountId(value: string): NemMultisigTransaction;
    getTxType(): gincoinc_global_v1_gincoincglobalv1_enum_pb.NemTransactionType;
    setTxType(value: gincoinc_global_v1_gincoincglobalv1_enum_pb.NemTransactionType): NemMultisigTransaction;
    getData(): string;
    setData(value: string): NemMultisigTransaction;
    getSignature(): string;
    setSignature(value: string): NemMultisigTransaction;
    getState(): gincoinc_adamant_global_v1_adamantglobalv1_enum_pb.TransactionState;
    setState(value: gincoinc_adamant_global_v1_adamantglobalv1_enum_pb.TransactionState): NemMultisigTransaction;

    hasCreateTime(): boolean;
    clearCreateTime(): void;
    getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): NemMultisigTransaction;

    hasUpdateTime(): boolean;
    clearUpdateTime(): void;
    getUpdateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setUpdateTime(value?: google_protobuf_timestamp_pb.Timestamp): NemMultisigTransaction;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NemMultisigTransaction.AsObject;
    static toObject(includeInstance: boolean, msg: NemMultisigTransaction): NemMultisigTransaction.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NemMultisigTransaction, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NemMultisigTransaction;
    static deserializeBinaryFromReader(message: NemMultisigTransaction, reader: jspb.BinaryReader): NemMultisigTransaction;
}

export namespace NemMultisigTransaction {
    export type AsObject = {
        walletId: string,
        transactionId: string,
        nemMultisigTransactionId: string,
        accountId: string,
        txType: gincoinc_global_v1_gincoincglobalv1_enum_pb.NemTransactionType,
        data: string,
        signature: string,
        state: gincoinc_adamant_global_v1_adamantglobalv1_enum_pb.TransactionState,
        createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        updateTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}

export class SignInfo extends jspb.Message { 
    getWalletId(): string;
    setWalletId(value: string): SignInfo;
    getTransactionId(): string;
    setTransactionId(value: string): SignInfo;
    getKeyId(): string;
    setKeyId(value: string): SignInfo;
    getHdAccount(): number;
    setHdAccount(value: number): SignInfo;
    getCoin(): gincoinc_global_v1_gincoincglobalv1_enum_pb.Coin;
    setCoin(value: gincoinc_global_v1_gincoincglobalv1_enum_pb.Coin): SignInfo;
    getTxId(): string;
    setTxId(value: string): SignInfo;
    getSignIndex(): number;
    setSignIndex(value: number): SignInfo;
    getSignMessage(): string;
    setSignMessage(value: string): SignInfo;
    getHdChange(): number;
    setHdChange(value: number): SignInfo;
    getHdIndex(): number;
    setHdIndex(value: number): SignInfo;
    clearSignTxInputsList(): void;
    getSignTxInputsList(): Array<SignTxInput>;
    setSignTxInputsList(value: Array<SignTxInput>): SignInfo;
    addSignTxInputs(value?: SignTxInput, index?: number): SignTxInput;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SignInfo.AsObject;
    static toObject(includeInstance: boolean, msg: SignInfo): SignInfo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SignInfo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SignInfo;
    static deserializeBinaryFromReader(message: SignInfo, reader: jspb.BinaryReader): SignInfo;
}

export namespace SignInfo {
    export type AsObject = {
        walletId: string,
        transactionId: string,
        keyId: string,
        hdAccount: number,
        coin: gincoinc_global_v1_gincoincglobalv1_enum_pb.Coin,
        txId: string,
        signIndex: number,
        signMessage: string,
        hdChange: number,
        hdIndex: number,
        signTxInputsList: Array<SignTxInput.AsObject>,
    }
}

export class SignTxInput extends jspb.Message { 
    getTxInputIndex(): number;
    setTxInputIndex(value: number): SignTxInput;
    getSignMessage(): string;
    setSignMessage(value: string): SignTxInput;
    getHdChange(): number;
    setHdChange(value: number): SignTxInput;
    getHdIndex(): number;
    setHdIndex(value: number): SignTxInput;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SignTxInput.AsObject;
    static toObject(includeInstance: boolean, msg: SignTxInput): SignTxInput.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SignTxInput, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SignTxInput;
    static deserializeBinaryFromReader(message: SignTxInput, reader: jspb.BinaryReader): SignTxInput;
}

export namespace SignTxInput {
    export type AsObject = {
        txInputIndex: number,
        signMessage: string,
        hdChange: number,
        hdIndex: number,
    }
}

export class Transfer extends jspb.Message { 
    getWalletId(): string;
    setWalletId(value: string): Transfer;
    getTransferId(): string;
    setTransferId(value: string): Transfer;
    getCoin(): gincoinc_global_v1_gincoincglobalv1_enum_pb.Coin;
    setCoin(value: gincoinc_global_v1_gincoincglobalv1_enum_pb.Coin): Transfer;
    getTxId(): string;
    setTxId(value: string): Transfer;
    getTransferType(): gincoinc_global_v1_gincoincglobalv1_enum_pb.TransferType;
    setTransferType(value: gincoinc_global_v1_gincoincglobalv1_enum_pb.TransferType): Transfer;
    getValue(): number;
    setValue(value: number): Transfer;
    getStringValue(): string;
    setStringValue(value: string): Transfer;
    getJpyRate(): number;
    setJpyRate(value: number): Transfer;
    getPartnerWalletId(): string;
    setPartnerWalletId(value: string): Transfer;
    getPartnerAddress(): string;
    setPartnerAddress(value: string): Transfer;
    getDestinationTag(): number;
    setDestinationTag(value: number): Transfer;
    getMemoId(): string;
    setMemoId(value: string): Transfer;
    getMessage(): string;
    setMessage(value: string): Transfer;
    getFee(): number;
    setFee(value: number): Transfer;
    getStringFee(): string;
    setStringFee(value: string): Transfer;
    getFrom(): string;
    setFrom(value: string): Transfer;
    getTo(): string;
    setTo(value: string): Transfer;
    getState(): gincoinc_global_v1_gincoincglobalv1_enum_pb.TransactionState;
    setState(value: gincoinc_global_v1_gincoincglobalv1_enum_pb.TransactionState): Transfer;
    getResult(): gincoinc_global_v1_gincoincglobalv1_enum_pb.TransactionResult;
    setResult(value: gincoinc_global_v1_gincoincglobalv1_enum_pb.TransactionResult): Transfer;

    hasCreateTime(): boolean;
    clearCreateTime(): void;
    getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): Transfer;

    hasUpdateTime(): boolean;
    clearUpdateTime(): void;
    getUpdateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setUpdateTime(value?: google_protobuf_timestamp_pb.Timestamp): Transfer;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Transfer.AsObject;
    static toObject(includeInstance: boolean, msg: Transfer): Transfer.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Transfer, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Transfer;
    static deserializeBinaryFromReader(message: Transfer, reader: jspb.BinaryReader): Transfer;
}

export namespace Transfer {
    export type AsObject = {
        walletId: string,
        transferId: string,
        coin: gincoinc_global_v1_gincoincglobalv1_enum_pb.Coin,
        txId: string,
        transferType: gincoinc_global_v1_gincoincglobalv1_enum_pb.TransferType,
        value: number,
        stringValue: string,
        jpyRate: number,
        partnerWalletId: string,
        partnerAddress: string,
        destinationTag: number,
        memoId: string,
        message: string,
        fee: number,
        stringFee: string,
        from: string,
        to: string,
        state: gincoinc_global_v1_gincoincglobalv1_enum_pb.TransactionState,
        result: gincoinc_global_v1_gincoincglobalv1_enum_pb.TransactionResult,
        createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        updateTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}

export class UncheckedTransfer extends jspb.Message { 
    getWalletId(): string;
    setWalletId(value: string): UncheckedTransfer;
    getTransferId(): string;
    setTransferId(value: string): UncheckedTransfer;
    getCoin(): gincoinc_global_v1_gincoincglobalv1_enum_pb.Coin;
    setCoin(value: gincoinc_global_v1_gincoincglobalv1_enum_pb.Coin): UncheckedTransfer;
    getTxId(): string;
    setTxId(value: string): UncheckedTransfer;
    getTransferType(): gincoinc_global_v1_gincoincglobalv1_enum_pb.TransferType;
    setTransferType(value: gincoinc_global_v1_gincoincglobalv1_enum_pb.TransferType): UncheckedTransfer;
    getState(): gincoinc_global_v1_gincoincglobalv1_enum_pb.TransactionState;
    setState(value: gincoinc_global_v1_gincoincglobalv1_enum_pb.TransactionState): UncheckedTransfer;
    getResult(): gincoinc_global_v1_gincoincglobalv1_enum_pb.TransactionResult;
    setResult(value: gincoinc_global_v1_gincoincglobalv1_enum_pb.TransactionResult): UncheckedTransfer;
    getValue(): number;
    setValue(value: number): UncheckedTransfer;
    getStringValue(): string;
    setStringValue(value: string): UncheckedTransfer;
    getJpyRate(): number;
    setJpyRate(value: number): UncheckedTransfer;
    getPartnerWalletId(): string;
    setPartnerWalletId(value: string): UncheckedTransfer;
    getPartnerAddress(): string;
    setPartnerAddress(value: string): UncheckedTransfer;
    getDestinationTag(): number;
    setDestinationTag(value: number): UncheckedTransfer;
    getMemoId(): string;
    setMemoId(value: string): UncheckedTransfer;
    getMessage(): string;
    setMessage(value: string): UncheckedTransfer;
    getFee(): number;
    setFee(value: number): UncheckedTransfer;
    getStringFee(): string;
    setStringFee(value: string): UncheckedTransfer;
    getFrom(): string;
    setFrom(value: string): UncheckedTransfer;
    getTo(): string;
    setTo(value: string): UncheckedTransfer;
    getHasChecked(): boolean;
    setHasChecked(value: boolean): UncheckedTransfer;

    hasCreateTime(): boolean;
    clearCreateTime(): void;
    getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): UncheckedTransfer;

    hasUpdateTime(): boolean;
    clearUpdateTime(): void;
    getUpdateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setUpdateTime(value?: google_protobuf_timestamp_pb.Timestamp): UncheckedTransfer;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UncheckedTransfer.AsObject;
    static toObject(includeInstance: boolean, msg: UncheckedTransfer): UncheckedTransfer.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UncheckedTransfer, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UncheckedTransfer;
    static deserializeBinaryFromReader(message: UncheckedTransfer, reader: jspb.BinaryReader): UncheckedTransfer;
}

export namespace UncheckedTransfer {
    export type AsObject = {
        walletId: string,
        transferId: string,
        coin: gincoinc_global_v1_gincoincglobalv1_enum_pb.Coin,
        txId: string,
        transferType: gincoinc_global_v1_gincoincglobalv1_enum_pb.TransferType,
        state: gincoinc_global_v1_gincoincglobalv1_enum_pb.TransactionState,
        result: gincoinc_global_v1_gincoincglobalv1_enum_pb.TransactionResult,
        value: number,
        stringValue: string,
        jpyRate: number,
        partnerWalletId: string,
        partnerAddress: string,
        destinationTag: number,
        memoId: string,
        message: string,
        fee: number,
        stringFee: string,
        from: string,
        to: string,
        hasChecked: boolean,
        createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        updateTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}

export class EventTriggeredMessage extends jspb.Message { 
    getEventTriggeredMessageId(): string;
    setEventTriggeredMessageId(value: string): EventTriggeredMessage;
    getEventTriggeredMessageType(): gincoinc_adamant_global_v1_adamantglobalv1_enum_pb.EventTriggeredMessageType;
    setEventTriggeredMessageType(value: gincoinc_adamant_global_v1_adamantglobalv1_enum_pb.EventTriggeredMessageType): EventTriggeredMessage;
    getOwnerId(): string;
    setOwnerId(value: string): EventTriggeredMessage;
    getDestination(): string;
    setDestination(value: string): EventTriggeredMessage;

    hasCreateTime(): boolean;
    clearCreateTime(): void;
    getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): EventTriggeredMessage;

    hasUpdateTime(): boolean;
    clearUpdateTime(): void;
    getUpdateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setUpdateTime(value?: google_protobuf_timestamp_pb.Timestamp): EventTriggeredMessage;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EventTriggeredMessage.AsObject;
    static toObject(includeInstance: boolean, msg: EventTriggeredMessage): EventTriggeredMessage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EventTriggeredMessage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EventTriggeredMessage;
    static deserializeBinaryFromReader(message: EventTriggeredMessage, reader: jspb.BinaryReader): EventTriggeredMessage;
}

export namespace EventTriggeredMessage {
    export type AsObject = {
        eventTriggeredMessageId: string,
        eventTriggeredMessageType: gincoinc_adamant_global_v1_adamantglobalv1_enum_pb.EventTriggeredMessageType,
        ownerId: string,
        destination: string,
        createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        updateTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}

export class Rate extends jspb.Message { 
    getCoin(): gincoinc_global_v1_gincoincglobalv1_enum_pb.Coin;
    setCoin(value: gincoinc_global_v1_gincoincglobalv1_enum_pb.Coin): Rate;
    getJpy(): number;
    setJpy(value: number): Rate;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Rate.AsObject;
    static toObject(includeInstance: boolean, msg: Rate): Rate.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Rate, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Rate;
    static deserializeBinaryFromReader(message: Rate, reader: jspb.BinaryReader): Rate;
}

export namespace Rate {
    export type AsObject = {
        coin: gincoinc_global_v1_gincoincglobalv1_enum_pb.Coin,
        jpy: number,
    }
}

export class RateSnapshot extends jspb.Message { 
    getRateSnapshotId(): string;
    setRateSnapshotId(value: string): RateSnapshot;

    getRatesMap(): jspb.Map<number, Rate>;
    clearRatesMap(): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RateSnapshot.AsObject;
    static toObject(includeInstance: boolean, msg: RateSnapshot): RateSnapshot.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RateSnapshot, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RateSnapshot;
    static deserializeBinaryFromReader(message: RateSnapshot, reader: jspb.BinaryReader): RateSnapshot;
}

export namespace RateSnapshot {
    export type AsObject = {
        rateSnapshotId: string,

        ratesMap: Array<[number, Rate.AsObject]>,
    }
}

export class Deactivatability extends jspb.Message { 
    getAccountId(): string;
    setAccountId(value: string): Deactivatability;
    getDeactivatable(): boolean;
    setDeactivatable(value: boolean): Deactivatability;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Deactivatability.AsObject;
    static toObject(includeInstance: boolean, msg: Deactivatability): Deactivatability.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Deactivatability, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Deactivatability;
    static deserializeBinaryFromReader(message: Deactivatability, reader: jspb.BinaryReader): Deactivatability;
}

export namespace Deactivatability {
    export type AsObject = {
        accountId: string,
        deactivatable: boolean,
    }
}

export class LabeledAddress extends jspb.Message { 
    getLabeledAddressId(): string;
    setLabeledAddressId(value: string): LabeledAddress;
    getName(): string;
    setName(value: string): LabeledAddress;
    getCoin(): gincoinc_global_v1_gincoincglobalv1_enum_pb.Coin;
    setCoin(value: gincoinc_global_v1_gincoincglobalv1_enum_pb.Coin): LabeledAddress;
    getAddress(): string;
    setAddress(value: string): LabeledAddress;

    hasProposal(): boolean;
    clearProposal(): void;
    getProposal(): LabeledAddressProposal | undefined;
    setProposal(value?: LabeledAddressProposal): LabeledAddress;

    hasCreateTime(): boolean;
    clearCreateTime(): void;
    getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): LabeledAddress;

    hasUpdateTime(): boolean;
    clearUpdateTime(): void;
    getUpdateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setUpdateTime(value?: google_protobuf_timestamp_pb.Timestamp): LabeledAddress;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LabeledAddress.AsObject;
    static toObject(includeInstance: boolean, msg: LabeledAddress): LabeledAddress.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LabeledAddress, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LabeledAddress;
    static deserializeBinaryFromReader(message: LabeledAddress, reader: jspb.BinaryReader): LabeledAddress;
}

export namespace LabeledAddress {
    export type AsObject = {
        labeledAddressId: string,
        name: string,
        coin: gincoinc_global_v1_gincoincglobalv1_enum_pb.Coin,
        address: string,
        proposal?: LabeledAddressProposal.AsObject,
        createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        updateTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}

export class LabeledAddressProposal extends jspb.Message { 
    getRequesterAccountId(): string;
    setRequesterAccountId(value: string): LabeledAddressProposal;
    getRequesterName(): string;
    setRequesterName(value: string): LabeledAddressProposal;
    getApproverAccountId(): string;
    setApproverAccountId(value: string): LabeledAddressProposal;
    getApproverName(): string;
    setApproverName(value: string): LabeledAddressProposal;
    getProposedAddress(): string;
    setProposedAddress(value: string): LabeledAddressProposal;
    getAddressIsReviewed(): boolean;
    setAddressIsReviewed(value: boolean): LabeledAddressProposal;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LabeledAddressProposal.AsObject;
    static toObject(includeInstance: boolean, msg: LabeledAddressProposal): LabeledAddressProposal.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LabeledAddressProposal, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LabeledAddressProposal;
    static deserializeBinaryFromReader(message: LabeledAddressProposal, reader: jspb.BinaryReader): LabeledAddressProposal;
}

export namespace LabeledAddressProposal {
    export type AsObject = {
        requesterAccountId: string,
        requesterName: string,
        approverAccountId: string,
        approverName: string,
        proposedAddress: string,
        addressIsReviewed: boolean,
    }
}

export class Whitelist extends jspb.Message { 
    getWhitelistId(): string;
    setWhitelistId(value: string): Whitelist;
    getName(): string;
    setName(value: string): Whitelist;
    getCoin(): gincoinc_global_v1_gincoincglobalv1_enum_pb.Coin;
    setCoin(value: gincoinc_global_v1_gincoincglobalv1_enum_pb.Coin): Whitelist;
    clearAddressesList(): void;
    getAddressesList(): Array<LabeledAddress>;
    setAddressesList(value: Array<LabeledAddress>): Whitelist;
    addAddresses(value?: LabeledAddress, index?: number): LabeledAddress;

    hasCreateTime(): boolean;
    clearCreateTime(): void;
    getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): Whitelist;

    hasUpdateTime(): boolean;
    clearUpdateTime(): void;
    getUpdateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setUpdateTime(value?: google_protobuf_timestamp_pb.Timestamp): Whitelist;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Whitelist.AsObject;
    static toObject(includeInstance: boolean, msg: Whitelist): Whitelist.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Whitelist, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Whitelist;
    static deserializeBinaryFromReader(message: Whitelist, reader: jspb.BinaryReader): Whitelist;
}

export namespace Whitelist {
    export type AsObject = {
        whitelistId: string,
        name: string,
        coin: gincoinc_global_v1_gincoincglobalv1_enum_pb.Coin,
        addressesList: Array<LabeledAddress.AsObject>,
        createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        updateTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}

export class TransferLimit extends jspb.Message { 
    getTransferLimitId(): string;
    setTransferLimitId(value: string): TransferLimit;
    getName(): string;
    setName(value: string): TransferLimit;
    getCoin(): gincoinc_global_v1_gincoincglobalv1_enum_pb.Coin;
    setCoin(value: gincoinc_global_v1_gincoincglobalv1_enum_pb.Coin): TransferLimit;
    getHourlyLimit(): number;
    setHourlyLimit(value: number): TransferLimit;
    getDailyLimit(): number;
    setDailyLimit(value: number): TransferLimit;
    getOneTimeLimit(): number;
    setOneTimeLimit(value: number): TransferLimit;

    hasProposal(): boolean;
    clearProposal(): void;
    getProposal(): TransferLimitProposal | undefined;
    setProposal(value?: TransferLimitProposal): TransferLimit;
    getIsReviewed(): boolean;
    setIsReviewed(value: boolean): TransferLimit;

    hasCreateTime(): boolean;
    clearCreateTime(): void;
    getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): TransferLimit;

    hasUpdateTime(): boolean;
    clearUpdateTime(): void;
    getUpdateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setUpdateTime(value?: google_protobuf_timestamp_pb.Timestamp): TransferLimit;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TransferLimit.AsObject;
    static toObject(includeInstance: boolean, msg: TransferLimit): TransferLimit.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TransferLimit, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TransferLimit;
    static deserializeBinaryFromReader(message: TransferLimit, reader: jspb.BinaryReader): TransferLimit;
}

export namespace TransferLimit {
    export type AsObject = {
        transferLimitId: string,
        name: string,
        coin: gincoinc_global_v1_gincoincglobalv1_enum_pb.Coin,
        hourlyLimit: number,
        dailyLimit: number,
        oneTimeLimit: number,
        proposal?: TransferLimitProposal.AsObject,
        isReviewed: boolean,
        createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        updateTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}

export class TransferLimitProposal extends jspb.Message { 
    getRequesterAccountId(): string;
    setRequesterAccountId(value: string): TransferLimitProposal;
    getRequesterName(): string;
    setRequesterName(value: string): TransferLimitProposal;
    getApproverAccountId(): string;
    setApproverAccountId(value: string): TransferLimitProposal;
    getApproverName(): string;
    setApproverName(value: string): TransferLimitProposal;
    getProposedHourlyLimit(): number;
    setProposedHourlyLimit(value: number): TransferLimitProposal;
    getProposedDailyLimit(): number;
    setProposedDailyLimit(value: number): TransferLimitProposal;
    getProposedOneTimeLimit(): number;
    setProposedOneTimeLimit(value: number): TransferLimitProposal;
    getIsReviewed(): boolean;
    setIsReviewed(value: boolean): TransferLimitProposal;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TransferLimitProposal.AsObject;
    static toObject(includeInstance: boolean, msg: TransferLimitProposal): TransferLimitProposal.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TransferLimitProposal, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TransferLimitProposal;
    static deserializeBinaryFromReader(message: TransferLimitProposal, reader: jspb.BinaryReader): TransferLimitProposal;
}

export namespace TransferLimitProposal {
    export type AsObject = {
        requesterAccountId: string,
        requesterName: string,
        approverAccountId: string,
        approverName: string,
        proposedHourlyLimit: number,
        proposedDailyLimit: number,
        proposedOneTimeLimit: number,
        isReviewed: boolean,
    }
}

export class Policy extends jspb.Message { 
    getPolicyId(): string;
    setPolicyId(value: string): Policy;
    getPolicyType(): gincoinc_adamant_global_v1_adamantglobalv1_enum_pb.PolicyType;
    setPolicyType(value: gincoinc_adamant_global_v1_adamantglobalv1_enum_pb.PolicyType): Policy;
    getName(): string;
    setName(value: string): Policy;
    getIsBasePolicy(): boolean;
    setIsBasePolicy(value: boolean): Policy;
    getCoin(): gincoinc_global_v1_gincoincglobalv1_enum_pb.Coin;
    setCoin(value: gincoinc_global_v1_gincoincglobalv1_enum_pb.Coin): Policy;

    hasWhitelist(): boolean;
    clearWhitelist(): void;
    getWhitelist(): Whitelist | undefined;
    setWhitelist(value?: Whitelist): Policy;

    hasTransferLimit(): boolean;
    clearTransferLimit(): void;
    getTransferLimit(): TransferLimit | undefined;
    setTransferLimit(value?: TransferLimit): Policy;

    hasProposal(): boolean;
    clearProposal(): void;
    getProposal(): PolicyProposal | undefined;
    setProposal(value?: PolicyProposal): Policy;

    hasCreateTime(): boolean;
    clearCreateTime(): void;
    getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): Policy;

    hasUpdateTime(): boolean;
    clearUpdateTime(): void;
    getUpdateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setUpdateTime(value?: google_protobuf_timestamp_pb.Timestamp): Policy;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Policy.AsObject;
    static toObject(includeInstance: boolean, msg: Policy): Policy.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Policy, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Policy;
    static deserializeBinaryFromReader(message: Policy, reader: jspb.BinaryReader): Policy;
}

export namespace Policy {
    export type AsObject = {
        policyId: string,
        policyType: gincoinc_adamant_global_v1_adamantglobalv1_enum_pb.PolicyType,
        name: string,
        isBasePolicy: boolean,
        coin: gincoinc_global_v1_gincoincglobalv1_enum_pb.Coin,
        whitelist?: Whitelist.AsObject,
        transferLimit?: TransferLimit.AsObject,
        proposal?: PolicyProposal.AsObject,
        createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        updateTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}

export class PolicyProposal extends jspb.Message { 
    getRequesterAccountId(): string;
    setRequesterAccountId(value: string): PolicyProposal;
    getRequesterName(): string;
    setRequesterName(value: string): PolicyProposal;
    getApproverAccountId(): string;
    setApproverAccountId(value: string): PolicyProposal;
    getApproverName(): string;
    setApproverName(value: string): PolicyProposal;

    hasProposedWhitelist(): boolean;
    clearProposedWhitelist(): void;
    getProposedWhitelist(): Whitelist | undefined;
    setProposedWhitelist(value?: Whitelist): PolicyProposal;
    getIsReviewed(): boolean;
    setIsReviewed(value: boolean): PolicyProposal;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PolicyProposal.AsObject;
    static toObject(includeInstance: boolean, msg: PolicyProposal): PolicyProposal.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PolicyProposal, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PolicyProposal;
    static deserializeBinaryFromReader(message: PolicyProposal, reader: jspb.BinaryReader): PolicyProposal;
}

export namespace PolicyProposal {
    export type AsObject = {
        requesterAccountId: string,
        requesterName: string,
        approverAccountId: string,
        approverName: string,
        proposedWhitelist?: Whitelist.AsObject,
        isReviewed: boolean,
    }
}

export class TotalBalanceByCoin extends jspb.Message { 
    getCoin(): gincoinc_global_v1_gincoincglobalv1_enum_pb.Coin;
    setCoin(value: gincoinc_global_v1_gincoincglobalv1_enum_pb.Coin): TotalBalanceByCoin;
    getColdStringBalance(): string;
    setColdStringBalance(value: string): TotalBalanceByCoin;
    getHotStringBalance(): string;
    setHotStringBalance(value: string): TotalBalanceByCoin;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TotalBalanceByCoin.AsObject;
    static toObject(includeInstance: boolean, msg: TotalBalanceByCoin): TotalBalanceByCoin.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TotalBalanceByCoin, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TotalBalanceByCoin;
    static deserializeBinaryFromReader(message: TotalBalanceByCoin, reader: jspb.BinaryReader): TotalBalanceByCoin;
}

export namespace TotalBalanceByCoin {
    export type AsObject = {
        coin: gincoinc_global_v1_gincoincglobalv1_enum_pb.Coin,
        coldStringBalance: string,
        hotStringBalance: string,
    }
}

export class TotalBalance extends jspb.Message { 

    getTotalBalancesMap(): jspb.Map<number, TotalBalanceByCoin>;
    clearTotalBalancesMap(): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TotalBalance.AsObject;
    static toObject(includeInstance: boolean, msg: TotalBalance): TotalBalance.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TotalBalance, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TotalBalance;
    static deserializeBinaryFromReader(message: TotalBalance, reader: jspb.BinaryReader): TotalBalance;
}

export namespace TotalBalance {
    export type AsObject = {

        totalBalancesMap: Array<[number, TotalBalanceByCoin.AsObject]>,
    }
}

export class BalanceSnapshot extends jspb.Message { 

    hasCreateTime(): boolean;
    clearCreateTime(): void;
    getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): BalanceSnapshot;

    getTotalBalancesMap(): jspb.Map<number, TotalBalanceByCoin>;
    clearTotalBalancesMap(): void;

    getRatesMap(): jspb.Map<number, Rate>;
    clearRatesMap(): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BalanceSnapshot.AsObject;
    static toObject(includeInstance: boolean, msg: BalanceSnapshot): BalanceSnapshot.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BalanceSnapshot, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BalanceSnapshot;
    static deserializeBinaryFromReader(message: BalanceSnapshot, reader: jspb.BinaryReader): BalanceSnapshot;
}

export namespace BalanceSnapshot {
    export type AsObject = {
        createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,

        totalBalancesMap: Array<[number, TotalBalanceByCoin.AsObject]>,

        ratesMap: Array<[number, Rate.AsObject]>,
    }
}

export class WalletBalanceSnapshotMap extends jspb.Message { 

    getWalletBalanceSnapshotMapMap(): jspb.Map<string, ListWalletBalanceSnapshots>;
    clearWalletBalanceSnapshotMapMap(): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WalletBalanceSnapshotMap.AsObject;
    static toObject(includeInstance: boolean, msg: WalletBalanceSnapshotMap): WalletBalanceSnapshotMap.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WalletBalanceSnapshotMap, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WalletBalanceSnapshotMap;
    static deserializeBinaryFromReader(message: WalletBalanceSnapshotMap, reader: jspb.BinaryReader): WalletBalanceSnapshotMap;
}

export namespace WalletBalanceSnapshotMap {
    export type AsObject = {

        walletBalanceSnapshotMapMap: Array<[string, ListWalletBalanceSnapshots.AsObject]>,
    }
}

export class ListWalletBalanceSnapshots extends jspb.Message { 
    clearWalletBalanceSnapshotsList(): void;
    getWalletBalanceSnapshotsList(): Array<WalletBalanceSnapshot>;
    setWalletBalanceSnapshotsList(value: Array<WalletBalanceSnapshot>): ListWalletBalanceSnapshots;
    addWalletBalanceSnapshots(value?: WalletBalanceSnapshot, index?: number): WalletBalanceSnapshot;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListWalletBalanceSnapshots.AsObject;
    static toObject(includeInstance: boolean, msg: ListWalletBalanceSnapshots): ListWalletBalanceSnapshots.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListWalletBalanceSnapshots, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListWalletBalanceSnapshots;
    static deserializeBinaryFromReader(message: ListWalletBalanceSnapshots, reader: jspb.BinaryReader): ListWalletBalanceSnapshots;
}

export namespace ListWalletBalanceSnapshots {
    export type AsObject = {
        walletBalanceSnapshotsList: Array<WalletBalanceSnapshot.AsObject>,
    }
}

export class WalletBalanceSnapshot extends jspb.Message { 

    hasCreateTime(): boolean;
    clearCreateTime(): void;
    getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): WalletBalanceSnapshot;
    getStringBalance(): string;
    setStringBalance(value: string): WalletBalanceSnapshot;
    getJpy(): number;
    setJpy(value: number): WalletBalanceSnapshot;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WalletBalanceSnapshot.AsObject;
    static toObject(includeInstance: boolean, msg: WalletBalanceSnapshot): WalletBalanceSnapshot.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WalletBalanceSnapshot, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WalletBalanceSnapshot;
    static deserializeBinaryFromReader(message: WalletBalanceSnapshot, reader: jspb.BinaryReader): WalletBalanceSnapshot;
}

export namespace WalletBalanceSnapshot {
    export type AsObject = {
        createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        stringBalance: string,
        jpy: number,
    }
}

export class TransferVolumeSnapshots extends jspb.Message { 

    getTransferVolumeSnapshotByTransferTypeMap(): jspb.Map<number, ListTransferVolumeSnapshots>;
    clearTransferVolumeSnapshotByTransferTypeMap(): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TransferVolumeSnapshots.AsObject;
    static toObject(includeInstance: boolean, msg: TransferVolumeSnapshots): TransferVolumeSnapshots.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TransferVolumeSnapshots, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TransferVolumeSnapshots;
    static deserializeBinaryFromReader(message: TransferVolumeSnapshots, reader: jspb.BinaryReader): TransferVolumeSnapshots;
}

export namespace TransferVolumeSnapshots {
    export type AsObject = {

        transferVolumeSnapshotByTransferTypeMap: Array<[number, ListTransferVolumeSnapshots.AsObject]>,
    }
}

export class ListTransferVolumeSnapshots extends jspb.Message { 
    clearTransferVolumeSnapshotsList(): void;
    getTransferVolumeSnapshotsList(): Array<TransferVolumeSnapshot>;
    setTransferVolumeSnapshotsList(value: Array<TransferVolumeSnapshot>): ListTransferVolumeSnapshots;
    addTransferVolumeSnapshots(value?: TransferVolumeSnapshot, index?: number): TransferVolumeSnapshot;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListTransferVolumeSnapshots.AsObject;
    static toObject(includeInstance: boolean, msg: ListTransferVolumeSnapshots): ListTransferVolumeSnapshots.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListTransferVolumeSnapshots, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListTransferVolumeSnapshots;
    static deserializeBinaryFromReader(message: ListTransferVolumeSnapshots, reader: jspb.BinaryReader): ListTransferVolumeSnapshots;
}

export namespace ListTransferVolumeSnapshots {
    export type AsObject = {
        transferVolumeSnapshotsList: Array<TransferVolumeSnapshot.AsObject>,
    }
}

export class TransferVolumeSnapshot extends jspb.Message { 

    hasTargetTime(): boolean;
    clearTargetTime(): void;
    getTargetTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setTargetTime(value?: google_protobuf_timestamp_pb.Timestamp): TransferVolumeSnapshot;

    getTransferVolumeByCoinMap(): jspb.Map<number, TransferVolume>;
    clearTransferVolumeByCoinMap(): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TransferVolumeSnapshot.AsObject;
    static toObject(includeInstance: boolean, msg: TransferVolumeSnapshot): TransferVolumeSnapshot.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TransferVolumeSnapshot, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TransferVolumeSnapshot;
    static deserializeBinaryFromReader(message: TransferVolumeSnapshot, reader: jspb.BinaryReader): TransferVolumeSnapshot;
}

export namespace TransferVolumeSnapshot {
    export type AsObject = {
        targetTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,

        transferVolumeByCoinMap: Array<[number, TransferVolume.AsObject]>,
    }
}

export class TransferVolume extends jspb.Message { 
    getCoin(): gincoinc_global_v1_gincoincglobalv1_enum_pb.Coin;
    setCoin(value: gincoinc_global_v1_gincoincglobalv1_enum_pb.Coin): TransferVolume;
    getHotStringVolume(): string;
    setHotStringVolume(value: string): TransferVolume;
    getColdStringVolume(): string;
    setColdStringVolume(value: string): TransferVolume;
    getHotStringJpyVolume(): string;
    setHotStringJpyVolume(value: string): TransferVolume;
    getColdStringJpyVolume(): string;
    setColdStringJpyVolume(value: string): TransferVolume;
    getHotNumber(): number;
    setHotNumber(value: number): TransferVolume;
    getColdNumber(): number;
    setColdNumber(value: number): TransferVolume;
    getTransferType(): gincoinc_global_v1_gincoincglobalv1_enum_pb.TransferType;
    setTransferType(value: gincoinc_global_v1_gincoincglobalv1_enum_pb.TransferType): TransferVolume;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TransferVolume.AsObject;
    static toObject(includeInstance: boolean, msg: TransferVolume): TransferVolume.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TransferVolume, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TransferVolume;
    static deserializeBinaryFromReader(message: TransferVolume, reader: jspb.BinaryReader): TransferVolume;
}

export namespace TransferVolume {
    export type AsObject = {
        coin: gincoinc_global_v1_gincoincglobalv1_enum_pb.Coin,
        hotStringVolume: string,
        coldStringVolume: string,
        hotStringJpyVolume: string,
        coldStringJpyVolume: string,
        hotNumber: number,
        coldNumber: number,
        transferType: gincoinc_global_v1_gincoincglobalv1_enum_pb.TransferType,
    }
}

export class WalletTransferVolumeSnapshots extends jspb.Message { 

    getWalletTransferVolumeSnapshotByWalletIdMap(): jspb.Map<string, ListWalletTransferVolumeSnapshots>;
    clearWalletTransferVolumeSnapshotByWalletIdMap(): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WalletTransferVolumeSnapshots.AsObject;
    static toObject(includeInstance: boolean, msg: WalletTransferVolumeSnapshots): WalletTransferVolumeSnapshots.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WalletTransferVolumeSnapshots, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WalletTransferVolumeSnapshots;
    static deserializeBinaryFromReader(message: WalletTransferVolumeSnapshots, reader: jspb.BinaryReader): WalletTransferVolumeSnapshots;
}

export namespace WalletTransferVolumeSnapshots {
    export type AsObject = {

        walletTransferVolumeSnapshotByWalletIdMap: Array<[string, ListWalletTransferVolumeSnapshots.AsObject]>,
    }
}

export class ListWalletTransferVolumeSnapshots extends jspb.Message { 
    clearWalletTransferVolumeSnapshotsList(): void;
    getWalletTransferVolumeSnapshotsList(): Array<WalletTransferVolumeSnapshot>;
    setWalletTransferVolumeSnapshotsList(value: Array<WalletTransferVolumeSnapshot>): ListWalletTransferVolumeSnapshots;
    addWalletTransferVolumeSnapshots(value?: WalletTransferVolumeSnapshot, index?: number): WalletTransferVolumeSnapshot;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListWalletTransferVolumeSnapshots.AsObject;
    static toObject(includeInstance: boolean, msg: ListWalletTransferVolumeSnapshots): ListWalletTransferVolumeSnapshots.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListWalletTransferVolumeSnapshots, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListWalletTransferVolumeSnapshots;
    static deserializeBinaryFromReader(message: ListWalletTransferVolumeSnapshots, reader: jspb.BinaryReader): ListWalletTransferVolumeSnapshots;
}

export namespace ListWalletTransferVolumeSnapshots {
    export type AsObject = {
        walletTransferVolumeSnapshotsList: Array<WalletTransferVolumeSnapshot.AsObject>,
    }
}

export class WalletTransferVolumeSnapshot extends jspb.Message { 

    hasTargetTime(): boolean;
    clearTargetTime(): void;
    getTargetTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setTargetTime(value?: google_protobuf_timestamp_pb.Timestamp): WalletTransferVolumeSnapshot;

    getWalletTransferVolumeByTransferTypeMap(): jspb.Map<number, WalletTransferVolume>;
    clearWalletTransferVolumeByTransferTypeMap(): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WalletTransferVolumeSnapshot.AsObject;
    static toObject(includeInstance: boolean, msg: WalletTransferVolumeSnapshot): WalletTransferVolumeSnapshot.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WalletTransferVolumeSnapshot, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WalletTransferVolumeSnapshot;
    static deserializeBinaryFromReader(message: WalletTransferVolumeSnapshot, reader: jspb.BinaryReader): WalletTransferVolumeSnapshot;
}

export namespace WalletTransferVolumeSnapshot {
    export type AsObject = {
        targetTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,

        walletTransferVolumeByTransferTypeMap: Array<[number, WalletTransferVolume.AsObject]>,
    }
}

export class WalletTransferVolume extends jspb.Message { 
    getStringVolume(): string;
    setStringVolume(value: string): WalletTransferVolume;
    getStringJpyVolume(): string;
    setStringJpyVolume(value: string): WalletTransferVolume;
    getNumber(): number;
    setNumber(value: number): WalletTransferVolume;
    getTransferType(): gincoinc_global_v1_gincoincglobalv1_enum_pb.TransferType;
    setTransferType(value: gincoinc_global_v1_gincoincglobalv1_enum_pb.TransferType): WalletTransferVolume;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WalletTransferVolume.AsObject;
    static toObject(includeInstance: boolean, msg: WalletTransferVolume): WalletTransferVolume.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WalletTransferVolume, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WalletTransferVolume;
    static deserializeBinaryFromReader(message: WalletTransferVolume, reader: jspb.BinaryReader): WalletTransferVolume;
}

export namespace WalletTransferVolume {
    export type AsObject = {
        stringVolume: string,
        stringJpyVolume: string,
        number: number,
        transferType: gincoinc_global_v1_gincoincglobalv1_enum_pb.TransferType,
    }
}

export class Confirmation extends jspb.Message { 
    getCoin(): gincoinc_global_v1_gincoincglobalv1_enum_pb.Coin;
    setCoin(value: gincoinc_global_v1_gincoincglobalv1_enum_pb.Coin): Confirmation;
    getConfirmation(): number;
    setConfirmation(value: number): Confirmation;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Confirmation.AsObject;
    static toObject(includeInstance: boolean, msg: Confirmation): Confirmation.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Confirmation, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Confirmation;
    static deserializeBinaryFromReader(message: Confirmation, reader: jspb.BinaryReader): Confirmation;
}

export namespace Confirmation {
    export type AsObject = {
        coin: gincoinc_global_v1_gincoincglobalv1_enum_pb.Coin,
        confirmation: number,
    }
}

export class WalletFlushSetting extends jspb.Message { 
    getOwnerId(): string;
    setOwnerId(value: string): WalletFlushSetting;
    getCoin(): gincoinc_global_v1_gincoincglobalv1_enum_pb.Coin;
    setCoin(value: gincoinc_global_v1_gincoincglobalv1_enum_pb.Coin): WalletFlushSetting;
    getDestinationWalletId(): string;
    setDestinationWalletId(value: string): WalletFlushSetting;

    hasCreateTime(): boolean;
    clearCreateTime(): void;
    getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): WalletFlushSetting;

    hasUpdateTime(): boolean;
    clearUpdateTime(): void;
    getUpdateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setUpdateTime(value?: google_protobuf_timestamp_pb.Timestamp): WalletFlushSetting;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WalletFlushSetting.AsObject;
    static toObject(includeInstance: boolean, msg: WalletFlushSetting): WalletFlushSetting.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WalletFlushSetting, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WalletFlushSetting;
    static deserializeBinaryFromReader(message: WalletFlushSetting, reader: jspb.BinaryReader): WalletFlushSetting;
}

export namespace WalletFlushSetting {
    export type AsObject = {
        ownerId: string,
        coin: gincoinc_global_v1_gincoincglobalv1_enum_pb.Coin,
        destinationWalletId: string,
        createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        updateTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}

export class CompensationFee extends jspb.Message { 
    getStringValue(): string;
    setStringValue(value: string): CompensationFee;
    getIsSpent(): boolean;
    setIsSpent(value: boolean): CompensationFee;

    hasCreateTime(): boolean;
    clearCreateTime(): void;
    getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): CompensationFee;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CompensationFee.AsObject;
    static toObject(includeInstance: boolean, msg: CompensationFee): CompensationFee.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CompensationFee, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CompensationFee;
    static deserializeBinaryFromReader(message: CompensationFee, reader: jspb.BinaryReader): CompensationFee;
}

export namespace CompensationFee {
    export type AsObject = {
        stringValue: string,
        isSpent: boolean,
        createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}

export class WalletGroup extends jspb.Message { 
    getWalletGroupId(): string;
    setWalletGroupId(value: string): WalletGroup;
    getName(): string;
    setName(value: string): WalletGroup;
    getCoin(): gincoinc_global_v1_gincoincglobalv1_enum_pb.Coin;
    setCoin(value: gincoinc_global_v1_gincoincglobalv1_enum_pb.Coin): WalletGroup;
    clearWalletsList(): void;
    getWalletsList(): Array<Wallet>;
    setWalletsList(value: Array<Wallet>): WalletGroup;
    addWallets(value?: Wallet, index?: number): Wallet;
    getWatchOnly(): boolean;
    setWatchOnly(value: boolean): WalletGroup;

    hasCreateTime(): boolean;
    clearCreateTime(): void;
    getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): WalletGroup;

    hasUpdateTime(): boolean;
    clearUpdateTime(): void;
    getUpdateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setUpdateTime(value?: google_protobuf_timestamp_pb.Timestamp): WalletGroup;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WalletGroup.AsObject;
    static toObject(includeInstance: boolean, msg: WalletGroup): WalletGroup.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WalletGroup, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WalletGroup;
    static deserializeBinaryFromReader(message: WalletGroup, reader: jspb.BinaryReader): WalletGroup;
}

export namespace WalletGroup {
    export type AsObject = {
        walletGroupId: string,
        name: string,
        coin: gincoinc_global_v1_gincoincglobalv1_enum_pb.Coin,
        walletsList: Array<Wallet.AsObject>,
        watchOnly: boolean,
        createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        updateTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}

export class RequestTxOutput extends jspb.Message { 
    getAddress(): string;
    setAddress(value: string): RequestTxOutput;
    getStringValue(): string;
    setStringValue(value: string): RequestTxOutput;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RequestTxOutput.AsObject;
    static toObject(includeInstance: boolean, msg: RequestTxOutput): RequestTxOutput.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RequestTxOutput, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RequestTxOutput;
    static deserializeBinaryFromReader(message: RequestTxOutput, reader: jspb.BinaryReader): RequestTxOutput;
}

export namespace RequestTxOutput {
    export type AsObject = {
        address: string,
        stringValue: string,
    }
}

export class RequestSignedInfo extends jspb.Message { 
    clearSignaturesList(): void;
    getSignaturesList(): Array<RequestSignature>;
    setSignaturesList(value: Array<RequestSignature>): RequestSignedInfo;
    addSignatures(value?: RequestSignature, index?: number): RequestSignature;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RequestSignedInfo.AsObject;
    static toObject(includeInstance: boolean, msg: RequestSignedInfo): RequestSignedInfo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RequestSignedInfo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RequestSignedInfo;
    static deserializeBinaryFromReader(message: RequestSignedInfo, reader: jspb.BinaryReader): RequestSignedInfo;
}

export namespace RequestSignedInfo {
    export type AsObject = {
        signaturesList: Array<RequestSignature.AsObject>,
    }
}

export class RequestSignature extends jspb.Message { 
    getSignIndex(): number;
    setSignIndex(value: number): RequestSignature;
    getSignature(): string;
    setSignature(value: string): RequestSignature;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RequestSignature.AsObject;
    static toObject(includeInstance: boolean, msg: RequestSignature): RequestSignature.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RequestSignature, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RequestSignature;
    static deserializeBinaryFromReader(message: RequestSignature, reader: jspb.BinaryReader): RequestSignature;
}

export namespace RequestSignature {
    export type AsObject = {
        signIndex: number,
        signature: string,
    }
}

export class RequestTransferLimitEntry extends jspb.Message { 
    getTransferLimitType(): gincoinc_adamant_global_v1_adamantglobalv1_enum_pb.TransferLimitType;
    setTransferLimitType(value: gincoinc_adamant_global_v1_adamantglobalv1_enum_pb.TransferLimitType): RequestTransferLimitEntry;
    getTransferLimitValue(): number;
    setTransferLimitValue(value: number): RequestTransferLimitEntry;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RequestTransferLimitEntry.AsObject;
    static toObject(includeInstance: boolean, msg: RequestTransferLimitEntry): RequestTransferLimitEntry.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RequestTransferLimitEntry, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RequestTransferLimitEntry;
    static deserializeBinaryFromReader(message: RequestTransferLimitEntry, reader: jspb.BinaryReader): RequestTransferLimitEntry;
}

export namespace RequestTransferLimitEntry {
    export type AsObject = {
        transferLimitType: gincoinc_adamant_global_v1_adamantglobalv1_enum_pb.TransferLimitType,
        transferLimitValue: number,
    }
}

export class RequestRate extends jspb.Message { 
    getCoin(): gincoinc_global_v1_gincoincglobalv1_enum_pb.Coin;
    setCoin(value: gincoinc_global_v1_gincoincglobalv1_enum_pb.Coin): RequestRate;
    getJpy(): number;
    setJpy(value: number): RequestRate;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RequestRate.AsObject;
    static toObject(includeInstance: boolean, msg: RequestRate): RequestRate.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RequestRate, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RequestRate;
    static deserializeBinaryFromReader(message: RequestRate, reader: jspb.BinaryReader): RequestRate;
}

export namespace RequestRate {
    export type AsObject = {
        coin: gincoinc_global_v1_gincoincglobalv1_enum_pb.Coin,
        jpy: number,
    }
}

export class SubstrateChildAddress extends jspb.Message { 
    getWalletId(): string;
    setWalletId(value: string): SubstrateChildAddress;
    getAccountId(): string;
    setAccountId(value: string): SubstrateChildAddress;
    getAddress(): string;
    setAddress(value: string): SubstrateChildAddress;
    getBalance(): number;
    setBalance(value: number): SubstrateChildAddress;
    getStringBalance(): string;
    setStringBalance(value: string): SubstrateChildAddress;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SubstrateChildAddress.AsObject;
    static toObject(includeInstance: boolean, msg: SubstrateChildAddress): SubstrateChildAddress.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SubstrateChildAddress, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SubstrateChildAddress;
    static deserializeBinaryFromReader(message: SubstrateChildAddress, reader: jspb.BinaryReader): SubstrateChildAddress;
}

export namespace SubstrateChildAddress {
    export type AsObject = {
        walletId: string,
        accountId: string,
        address: string,
        balance: number,
        stringBalance: string,
    }
}

export class IOSTChildAccount extends jspb.Message { 
    getWalletId(): string;
    setWalletId(value: string): IOSTChildAccount;
    getAccountId(): string;
    setAccountId(value: string): IOSTChildAccount;
    getAccountName(): string;
    setAccountName(value: string): IOSTChildAccount;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): IOSTChildAccount.AsObject;
    static toObject(includeInstance: boolean, msg: IOSTChildAccount): IOSTChildAccount.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: IOSTChildAccount, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): IOSTChildAccount;
    static deserializeBinaryFromReader(message: IOSTChildAccount, reader: jspb.BinaryReader): IOSTChildAccount;
}

export namespace IOSTChildAccount {
    export type AsObject = {
        walletId: string,
        accountId: string,
        accountName: string,
    }
}

export class IOSTCallerAccount extends jspb.Message { 
    getAccountName(): string;
    setAccountName(value: string): IOSTCallerAccount;
    getBalance(): number;
    setBalance(value: number): IOSTCallerAccount;
    getStringBalance(): string;
    setStringBalance(value: string): IOSTCallerAccount;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): IOSTCallerAccount.AsObject;
    static toObject(includeInstance: boolean, msg: IOSTCallerAccount): IOSTCallerAccount.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: IOSTCallerAccount, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): IOSTCallerAccount;
    static deserializeBinaryFromReader(message: IOSTCallerAccount, reader: jspb.BinaryReader): IOSTCallerAccount;
}

export namespace IOSTCallerAccount {
    export type AsObject = {
        accountName: string,
        balance: number,
        stringBalance: string,
    }
}

export class CallerAddress extends jspb.Message { 
    getAddress(): string;
    setAddress(value: string): CallerAddress;
    getBalance(): number;
    setBalance(value: number): CallerAddress;
    getStringBalance(): string;
    setStringBalance(value: string): CallerAddress;
    getCoin(): gincoinc_global_v1_gincoincglobalv1_enum_pb.Coin;
    setCoin(value: gincoinc_global_v1_gincoincglobalv1_enum_pb.Coin): CallerAddress;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CallerAddress.AsObject;
    static toObject(includeInstance: boolean, msg: CallerAddress): CallerAddress.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CallerAddress, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CallerAddress;
    static deserializeBinaryFromReader(message: CallerAddress, reader: jspb.BinaryReader): CallerAddress;
}

export namespace CallerAddress {
    export type AsObject = {
        address: string,
        balance: number,
        stringBalance: string,
        coin: gincoinc_global_v1_gincoincglobalv1_enum_pb.Coin,
    }
}
