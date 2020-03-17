// package: adamant.global.v1
// file: gincoinc/adamant/global/v1/adamantglobalv1/model.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as validate_validate_pb from "../../../../../validate/validate_pb";
import * as gincoinc_global_v1_gincoincglobalv1_enum_pb from "../../../../../gincoinc/global/v1/gincoincglobalv1/enum_pb";
import * as gincoinc_adamant_global_v1_adamantglobalv1_enum_pb from "../../../../../gincoinc/adamant/global/v1/adamantglobalv1/enum_pb";

export class Wallet extends jspb.Message { 
    getWalletId(): string;
    setWalletId(value: string): void;

    getName(): string;
    setName(value: string): void;

    getCoin(): gincoinc_global_v1_gincoincglobalv1_enum_pb.Coin;
    setCoin(value: gincoinc_global_v1_gincoincglobalv1_enum_pb.Coin): void;

    getHdAccount(): number;
    setHdAccount(value: number): void;

    getWalletType(): gincoinc_adamant_global_v1_adamantglobalv1_enum_pb.WalletType;
    setWalletType(value: gincoinc_adamant_global_v1_adamantglobalv1_enum_pb.WalletType): void;

    getAddressType(): gincoinc_global_v1_gincoincglobalv1_enum_pb.AddressType;
    setAddressType(value: gincoinc_global_v1_gincoincglobalv1_enum_pb.AddressType): void;

    getM(): number;
    setM(value: number): void;

    getN(): number;
    setN(value: number): void;

    getState(): gincoinc_adamant_global_v1_adamantglobalv1_enum_pb.WalletState;
    setState(value: gincoinc_adamant_global_v1_adamantglobalv1_enum_pb.WalletState): void;

    clearKeysList(): void;
    getKeysList(): Array<Key>;
    setKeysList(value: Array<Key>): void;
    addKeys(value?: Key, index?: number): Key;

    clearMembersList(): void;
    getMembersList(): Array<WalletMember>;
    setMembersList(value: Array<WalletMember>): void;
    addMembers(value?: WalletMember, index?: number): WalletMember;

    getRequiredApprovalCount(): number;
    setRequiredApprovalCount(value: number): void;

    getBalance(): number;
    setBalance(value: number): void;

    getStringBalance(): string;
    setStringBalance(value: string): void;

    getAddress(): string;
    setAddress(value: string): void;

    getPolicyId(): string;
    setPolicyId(value: string): void;


    hasProposal(): boolean;
    clearProposal(): void;
    getProposal(): WalletProposal | undefined;
    setProposal(value?: WalletProposal): void;

    getDestinationWalletId(): string;
    setDestinationWalletId(value: string): void;

    getWatchOnly(): boolean;
    setWatchOnly(value: boolean): void;

    getAddressNumber(): number;
    setAddressNumber(value: number): void;


    hasCreateTime(): boolean;
    clearCreateTime(): void;
    getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): void;


    hasUpdateTime(): boolean;
    clearUpdateTime(): void;
    getUpdateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setUpdateTime(value?: google_protobuf_timestamp_pb.Timestamp): void;


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
        createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        updateTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}

export class WalletWithoutBalance extends jspb.Message { 
    getWalletId(): string;
    setWalletId(value: string): void;

    getName(): string;
    setName(value: string): void;

    getCoin(): gincoinc_global_v1_gincoincglobalv1_enum_pb.Coin;
    setCoin(value: gincoinc_global_v1_gincoincglobalv1_enum_pb.Coin): void;

    getHdAccount(): number;
    setHdAccount(value: number): void;

    getWalletType(): gincoinc_adamant_global_v1_adamantglobalv1_enum_pb.WalletType;
    setWalletType(value: gincoinc_adamant_global_v1_adamantglobalv1_enum_pb.WalletType): void;

    getAddressType(): gincoinc_global_v1_gincoincglobalv1_enum_pb.AddressType;
    setAddressType(value: gincoinc_global_v1_gincoincglobalv1_enum_pb.AddressType): void;

    getM(): number;
    setM(value: number): void;

    getN(): number;
    setN(value: number): void;

    getState(): gincoinc_adamant_global_v1_adamantglobalv1_enum_pb.WalletState;
    setState(value: gincoinc_adamant_global_v1_adamantglobalv1_enum_pb.WalletState): void;

    clearKeysList(): void;
    getKeysList(): Array<Key>;
    setKeysList(value: Array<Key>): void;
    addKeys(value?: Key, index?: number): Key;

    clearMembersList(): void;
    getMembersList(): Array<WalletMember>;
    setMembersList(value: Array<WalletMember>): void;
    addMembers(value?: WalletMember, index?: number): WalletMember;

    getRequiredApprovalCount(): number;
    setRequiredApprovalCount(value: number): void;

    getAddress(): string;
    setAddress(value: string): void;

    getPolicyId(): string;
    setPolicyId(value: string): void;


    hasProposal(): boolean;
    clearProposal(): void;
    getProposal(): WalletProposal | undefined;
    setProposal(value?: WalletProposal): void;

    getDestinationWalletId(): string;
    setDestinationWalletId(value: string): void;

    getWatchOnly(): boolean;
    setWatchOnly(value: boolean): void;


    hasCreateTime(): boolean;
    clearCreateTime(): void;
    getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): void;


    hasUpdateTime(): boolean;
    clearUpdateTime(): void;
    getUpdateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setUpdateTime(value?: google_protobuf_timestamp_pb.Timestamp): void;


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
        createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        updateTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}

export class WalletProposal extends jspb.Message { 
    getProposalType(): gincoinc_adamant_global_v1_adamantglobalv1_enum_pb.WalletProposalType;
    setProposalType(value: gincoinc_adamant_global_v1_adamantglobalv1_enum_pb.WalletProposalType): void;

    getRequesterAccountId(): string;
    setRequesterAccountId(value: string): void;

    getRequesterName(): string;
    setRequesterName(value: string): void;

    getApproverAccountId(): string;
    setApproverAccountId(value: string): void;

    getApproverName(): string;
    setApproverName(value: string): void;

    getProposedPolicy(): string;
    setProposedPolicy(value: string): void;

    clearProposedValidatorsList(): void;
    getProposedValidatorsList(): Array<string>;
    setProposedValidatorsList(value: Array<string>): void;
    addProposedValidators(value: string, index?: number): string;

    getProposedRequiredApprovalCount(): number;
    setProposedRequiredApprovalCount(value: number): void;

    getIsReviewed(): boolean;
    setIsReviewed(value: boolean): void;


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
    setAccountId(value: string): void;

    getAccountType(): gincoinc_adamant_global_v1_adamantglobalv1_enum_pb.AccountType;
    setAccountType(value: gincoinc_adamant_global_v1_adamantglobalv1_enum_pb.AccountType): void;

    getName(): string;
    setName(value: string): void;

    getEmail(): string;
    setEmail(value: string): void;

    getRole(): gincoinc_adamant_global_v1_adamantglobalv1_enum_pb.RoleType;
    setRole(value: gincoinc_adamant_global_v1_adamantglobalv1_enum_pb.RoleType): void;

    getIsKeyRegistered(): boolean;
    setIsKeyRegistered(value: boolean): void;

    getIsMaster(): boolean;
    setIsMaster(value: boolean): void;

    getIsValidatedToCreateWallet(): boolean;
    setIsValidatedToCreateWallet(value: boolean): void;


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
    setWalletId(value: string): void;

    getAccountId(): string;
    setAccountId(value: string): void;

    getAccountType(): gincoinc_adamant_global_v1_adamantglobalv1_enum_pb.AccountType;
    setAccountType(value: gincoinc_adamant_global_v1_adamantglobalv1_enum_pb.AccountType): void;

    getKeyId(): string;
    setKeyId(value: string): void;

    getKeyIndex(): number;
    setKeyIndex(value: number): void;


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
    setWalletId(value: string): void;

    getAddressId(): string;
    setAddressId(value: string): void;

    getCoin(): gincoinc_global_v1_gincoincglobalv1_enum_pb.Coin;
    setCoin(value: gincoinc_global_v1_gincoincglobalv1_enum_pb.Coin): void;

    getAddress(): string;
    setAddress(value: string): void;

    getIndex(): number;
    setIndex(value: number): void;

    getBalance(): number;
    setBalance(value: number): void;

    getStringBalance(): string;
    setStringBalance(value: string): void;

    getState(): gincoinc_adamant_global_v1_adamantglobalv1_enum_pb.AddressState;
    setState(value: gincoinc_adamant_global_v1_adamantglobalv1_enum_pb.AddressState): void;

    getAddressType(): gincoinc_global_v1_gincoincglobalv1_enum_pb.AddressType;
    setAddressType(value: gincoinc_global_v1_gincoincglobalv1_enum_pb.AddressType): void;


    hasCreateTime(): boolean;
    clearCreateTime(): void;
    getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): void;


    hasUpdateTime(): boolean;
    clearUpdateTime(): void;
    getUpdateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setUpdateTime(value?: google_protobuf_timestamp_pb.Timestamp): void;


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
        balance: number,
        stringBalance: string,
        state: gincoinc_adamant_global_v1_adamantglobalv1_enum_pb.AddressState,
        addressType: gincoinc_global_v1_gincoincglobalv1_enum_pb.AddressType,
        createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        updateTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}

export class EthereumFeeAddress extends jspb.Message { 
    getAddress(): string;
    setAddress(value: string): void;

    getBalance(): number;
    setBalance(value: number): void;

    getStringBalance(): string;
    setStringBalance(value: string): void;


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

export class Transaction extends jspb.Message { 
    getWalletId(): string;
    setWalletId(value: string): void;

    getTransactionId(): string;
    setTransactionId(value: string): void;

    getCoin(): gincoinc_global_v1_gincoincglobalv1_enum_pb.Coin;
    setCoin(value: gincoinc_global_v1_gincoincglobalv1_enum_pb.Coin): void;

    getTxId(): string;
    setTxId(value: string): void;

    getAddress(): string;
    setAddress(value: string): void;

    getValue(): number;
    setValue(value: number): void;

    getStringValue(): string;
    setStringValue(value: string): void;

    getJpyRate(): number;
    setJpyRate(value: number): void;

    getFee(): number;
    setFee(value: number): void;

    getStringFee(): string;
    setStringFee(value: string): void;

    getFeeRate(): number;
    setFeeRate(value: number): void;

    getState(): gincoinc_adamant_global_v1_adamantglobalv1_enum_pb.TransactionState;
    setState(value: gincoinc_adamant_global_v1_adamantglobalv1_enum_pb.TransactionState): void;

    clearSignedKeysList(): void;
    getSignedKeysList(): Array<Key>;
    setSignedKeysList(value: Array<Key>): void;
    addSignedKeys(value?: Key, index?: number): Key;

    clearMembersList(): void;
    getMembersList(): Array<TransactionMember>;
    setMembersList(value: Array<TransactionMember>): void;
    addMembers(value?: TransactionMember, index?: number): TransactionMember;


    hasBitcoinSpecific(): boolean;
    clearBitcoinSpecific(): void;
    getBitcoinSpecific(): BitcoinSpecific | undefined;
    setBitcoinSpecific(value?: BitcoinSpecific): void;


    hasEthereumSpecific(): boolean;
    clearEthereumSpecific(): void;
    getEthereumSpecific(): EthereumSpecific | undefined;
    setEthereumSpecific(value?: EthereumSpecific): void;


    hasLitecoinSpecific(): boolean;
    clearLitecoinSpecific(): void;
    getLitecoinSpecific(): LitecoinSpecific | undefined;
    setLitecoinSpecific(value?: LitecoinSpecific): void;


    hasBitcoincashSpecific(): boolean;
    clearBitcoincashSpecific(): void;
    getBitcoincashSpecific(): BitcoincashSpecific | undefined;
    setBitcoincashSpecific(value?: BitcoincashSpecific): void;


    hasXrpSpecific(): boolean;
    clearXrpSpecific(): void;
    getXrpSpecific(): XrpSpecific | undefined;
    setXrpSpecific(value?: XrpSpecific): void;


    hasCreateTime(): boolean;
    clearCreateTime(): void;
    getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): void;


    hasUpdateTime(): boolean;
    clearUpdateTime(): void;
    getUpdateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setUpdateTime(value?: google_protobuf_timestamp_pb.Timestamp): void;


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
        createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        updateTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}

export class TransactionMember extends jspb.Message { 
    getAccountId(): string;
    setAccountId(value: string): void;

    getAccountType(): gincoinc_adamant_global_v1_adamantglobalv1_enum_pb.AccountType;
    setAccountType(value: gincoinc_adamant_global_v1_adamantglobalv1_enum_pb.AccountType): void;

    getName(): string;
    setName(value: string): void;

    getEmail(): string;
    setEmail(value: string): void;

    getRole(): gincoinc_adamant_global_v1_adamantglobalv1_enum_pb.RoleType;
    setRole(value: gincoinc_adamant_global_v1_adamantglobalv1_enum_pb.RoleType): void;

    getSigned(): boolean;
    setSigned(value: boolean): void;

    getValidated(): boolean;
    setValidated(value: boolean): void;


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
    setTxId(value: string): void;

    getTxIndex(): number;
    setTxIndex(value: number): void;

    getValue(): number;
    setValue(value: number): void;

    getStringValue(): string;
    setStringValue(value: string): void;


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
    setAddress(value: string): void;

    getValue(): number;
    setValue(value: number): void;

    getStringValue(): string;
    setStringValue(value: string): void;

    getIsChange(): boolean;
    setIsChange(value: boolean): void;


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

export class BitcoinSpecific extends jspb.Message { 
    clearTxInputsList(): void;
    getTxInputsList(): Array<TxInput>;
    setTxInputsList(value: Array<TxInput>): void;
    addTxInputs(value?: TxInput, index?: number): TxInput;

    clearTxOutputsList(): void;
    getTxOutputsList(): Array<TxOutput>;
    setTxOutputsList(value: Array<TxOutput>): void;
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
    setTxInputsList(value: Array<TxInput>): void;
    addTxInputs(value?: TxInput, index?: number): TxInput;

    clearTxOutputsList(): void;
    getTxOutputsList(): Array<TxOutput>;
    setTxOutputsList(value: Array<TxOutput>): void;
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
    setTxInputsList(value: Array<TxInput>): void;
    addTxInputs(value?: TxInput, index?: number): TxInput;

    clearTxOutputsList(): void;
    getTxOutputsList(): Array<TxOutput>;
    setTxOutputsList(value: Array<TxOutput>): void;
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
    setGasLimit(value: number): void;

    getNonce(): number;
    setNonce(value: number): void;


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
    }
}

export class XrpSpecific extends jspb.Message { 
    getSequenceNumber(): number;
    setSequenceNumber(value: number): void;

    getDestinationTag(): number;
    setDestinationTag(value: number): void;

    getTxType(): gincoinc_global_v1_gincoincglobalv1_enum_pb.XRPTransactionType;
    setTxType(value: gincoinc_global_v1_gincoincglobalv1_enum_pb.XRPTransactionType): void;


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
    }
}

export class SignInfo extends jspb.Message { 
    getWalletId(): string;
    setWalletId(value: string): void;

    getTransactionId(): string;
    setTransactionId(value: string): void;

    getKeyId(): string;
    setKeyId(value: string): void;

    getHdAccount(): number;
    setHdAccount(value: number): void;

    getCoin(): gincoinc_global_v1_gincoincglobalv1_enum_pb.Coin;
    setCoin(value: gincoinc_global_v1_gincoincglobalv1_enum_pb.Coin): void;

    getTxId(): string;
    setTxId(value: string): void;

    getSignIndex(): number;
    setSignIndex(value: number): void;

    getSignMessage(): string;
    setSignMessage(value: string): void;

    getHdChange(): number;
    setHdChange(value: number): void;

    getHdIndex(): number;
    setHdIndex(value: number): void;

    clearSignTxInputsList(): void;
    getSignTxInputsList(): Array<SignTxInput>;
    setSignTxInputsList(value: Array<SignTxInput>): void;
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
    setTxInputIndex(value: number): void;

    getSignMessage(): string;
    setSignMessage(value: string): void;

    getHdChange(): number;
    setHdChange(value: number): void;

    getHdIndex(): number;
    setHdIndex(value: number): void;


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
    setWalletId(value: string): void;

    getTransferId(): string;
    setTransferId(value: string): void;

    getCoin(): gincoinc_global_v1_gincoincglobalv1_enum_pb.Coin;
    setCoin(value: gincoinc_global_v1_gincoincglobalv1_enum_pb.Coin): void;

    getTxId(): string;
    setTxId(value: string): void;

    getTransferType(): gincoinc_global_v1_gincoincglobalv1_enum_pb.TransferType;
    setTransferType(value: gincoinc_global_v1_gincoincglobalv1_enum_pb.TransferType): void;

    getValue(): number;
    setValue(value: number): void;

    getStringValue(): string;
    setStringValue(value: string): void;

    getJpyRate(): number;
    setJpyRate(value: number): void;

    getPartnerWalletId(): string;
    setPartnerWalletId(value: string): void;

    getPartnerAddress(): string;
    setPartnerAddress(value: string): void;

    getDestinationTag(): number;
    setDestinationTag(value: number): void;

    getState(): gincoinc_global_v1_gincoincglobalv1_enum_pb.TransactionState;
    setState(value: gincoinc_global_v1_gincoincglobalv1_enum_pb.TransactionState): void;

    getResult(): gincoinc_global_v1_gincoincglobalv1_enum_pb.TransactionResult;
    setResult(value: gincoinc_global_v1_gincoincglobalv1_enum_pb.TransactionResult): void;


    hasCreateTime(): boolean;
    clearCreateTime(): void;
    getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): void;


    hasUpdateTime(): boolean;
    clearUpdateTime(): void;
    getUpdateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setUpdateTime(value?: google_protobuf_timestamp_pb.Timestamp): void;


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
        state: gincoinc_global_v1_gincoincglobalv1_enum_pb.TransactionState,
        result: gincoinc_global_v1_gincoincglobalv1_enum_pb.TransactionResult,
        createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        updateTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}

export class Rate extends jspb.Message { 
    getCoin(): gincoinc_global_v1_gincoincglobalv1_enum_pb.Coin;
    setCoin(value: gincoinc_global_v1_gincoincglobalv1_enum_pb.Coin): void;

    getJpy(): number;
    setJpy(value: number): void;


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
    setRateSnapshotId(value: string): void;


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
    setAccountId(value: string): void;

    getDeactivatable(): boolean;
    setDeactivatable(value: boolean): void;


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
    setLabeledAddressId(value: string): void;

    getName(): string;
    setName(value: string): void;

    getCoin(): gincoinc_global_v1_gincoincglobalv1_enum_pb.Coin;
    setCoin(value: gincoinc_global_v1_gincoincglobalv1_enum_pb.Coin): void;

    getAddress(): string;
    setAddress(value: string): void;


    hasProposal(): boolean;
    clearProposal(): void;
    getProposal(): LabeledAddressProposal | undefined;
    setProposal(value?: LabeledAddressProposal): void;

    getIsDeletable(): boolean;
    setIsDeletable(value: boolean): void;


    hasCreateTime(): boolean;
    clearCreateTime(): void;
    getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): void;


    hasUpdateTime(): boolean;
    clearUpdateTime(): void;
    getUpdateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setUpdateTime(value?: google_protobuf_timestamp_pb.Timestamp): void;


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
        isDeletable: boolean,
        createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        updateTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}

export class LabeledAddressProposal extends jspb.Message { 
    getRequesterAccountId(): string;
    setRequesterAccountId(value: string): void;

    getRequesterName(): string;
    setRequesterName(value: string): void;

    getApproverAccountId(): string;
    setApproverAccountId(value: string): void;

    getApproverName(): string;
    setApproverName(value: string): void;

    getProposedAddress(): string;
    setProposedAddress(value: string): void;

    getAddressIsReviewed(): boolean;
    setAddressIsReviewed(value: boolean): void;


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
    setWhitelistId(value: string): void;

    getName(): string;
    setName(value: string): void;

    getCoin(): gincoinc_global_v1_gincoincglobalv1_enum_pb.Coin;
    setCoin(value: gincoinc_global_v1_gincoincglobalv1_enum_pb.Coin): void;

    clearAddressesList(): void;
    getAddressesList(): Array<LabeledAddress>;
    setAddressesList(value: Array<LabeledAddress>): void;
    addAddresses(value?: LabeledAddress, index?: number): LabeledAddress;

    getIsDeletable(): boolean;
    setIsDeletable(value: boolean): void;


    hasCreateTime(): boolean;
    clearCreateTime(): void;
    getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): void;


    hasUpdateTime(): boolean;
    clearUpdateTime(): void;
    getUpdateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setUpdateTime(value?: google_protobuf_timestamp_pb.Timestamp): void;


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
        isDeletable: boolean,
        createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        updateTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}

export class TransferLimit extends jspb.Message { 
    getTransferLimitId(): string;
    setTransferLimitId(value: string): void;

    getName(): string;
    setName(value: string): void;

    getCoin(): gincoinc_global_v1_gincoincglobalv1_enum_pb.Coin;
    setCoin(value: gincoinc_global_v1_gincoincglobalv1_enum_pb.Coin): void;

    getHourlyLimit(): number;
    setHourlyLimit(value: number): void;

    getDailyLimit(): number;
    setDailyLimit(value: number): void;

    getOneTimeLimit(): number;
    setOneTimeLimit(value: number): void;


    hasProposal(): boolean;
    clearProposal(): void;
    getProposal(): TransferLimitProposal | undefined;
    setProposal(value?: TransferLimitProposal): void;

    getIsReviewed(): boolean;
    setIsReviewed(value: boolean): void;

    getIsDeletable(): boolean;
    setIsDeletable(value: boolean): void;


    hasCreateTime(): boolean;
    clearCreateTime(): void;
    getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): void;


    hasUpdateTime(): boolean;
    clearUpdateTime(): void;
    getUpdateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setUpdateTime(value?: google_protobuf_timestamp_pb.Timestamp): void;


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
        isDeletable: boolean,
        createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        updateTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}

export class TransferLimitProposal extends jspb.Message { 
    getRequesterAccountId(): string;
    setRequesterAccountId(value: string): void;

    getRequesterName(): string;
    setRequesterName(value: string): void;

    getApproverAccountId(): string;
    setApproverAccountId(value: string): void;

    getApproverName(): string;
    setApproverName(value: string): void;

    getProposedHourlyLimit(): number;
    setProposedHourlyLimit(value: number): void;

    getProposedDailyLimit(): number;
    setProposedDailyLimit(value: number): void;

    getProposedOneTimeLimit(): number;
    setProposedOneTimeLimit(value: number): void;

    getIsReviewed(): boolean;
    setIsReviewed(value: boolean): void;


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
    setPolicyId(value: string): void;

    getPolicyType(): gincoinc_adamant_global_v1_adamantglobalv1_enum_pb.PolicyType;
    setPolicyType(value: gincoinc_adamant_global_v1_adamantglobalv1_enum_pb.PolicyType): void;

    getName(): string;
    setName(value: string): void;

    getIsBasePolicy(): boolean;
    setIsBasePolicy(value: boolean): void;

    getCoin(): gincoinc_global_v1_gincoincglobalv1_enum_pb.Coin;
    setCoin(value: gincoinc_global_v1_gincoincglobalv1_enum_pb.Coin): void;


    hasWhitelist(): boolean;
    clearWhitelist(): void;
    getWhitelist(): Whitelist | undefined;
    setWhitelist(value?: Whitelist): void;


    hasTransferLimit(): boolean;
    clearTransferLimit(): void;
    getTransferLimit(): TransferLimit | undefined;
    setTransferLimit(value?: TransferLimit): void;

    getIsDeletable(): boolean;
    setIsDeletable(value: boolean): void;


    hasProposal(): boolean;
    clearProposal(): void;
    getProposal(): PolicyProposal | undefined;
    setProposal(value?: PolicyProposal): void;


    hasCreateTime(): boolean;
    clearCreateTime(): void;
    getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): void;


    hasUpdateTime(): boolean;
    clearUpdateTime(): void;
    getUpdateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setUpdateTime(value?: google_protobuf_timestamp_pb.Timestamp): void;


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
        isDeletable: boolean,
        proposal?: PolicyProposal.AsObject,
        createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        updateTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}

export class PolicyProposal extends jspb.Message { 
    getRequesterAccountId(): string;
    setRequesterAccountId(value: string): void;

    getRequesterName(): string;
    setRequesterName(value: string): void;

    getApproverAccountId(): string;
    setApproverAccountId(value: string): void;

    getApproverName(): string;
    setApproverName(value: string): void;


    hasProposedWhitelist(): boolean;
    clearProposedWhitelist(): void;
    getProposedWhitelist(): Whitelist | undefined;
    setProposedWhitelist(value?: Whitelist): void;

    getIsReviewed(): boolean;
    setIsReviewed(value: boolean): void;


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
    setCoin(value: gincoinc_global_v1_gincoincglobalv1_enum_pb.Coin): void;

    getColdStringBalance(): string;
    setColdStringBalance(value: string): void;

    getHotStringBalance(): string;
    setHotStringBalance(value: string): void;


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
    setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): void;


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

export class Confirmation extends jspb.Message { 
    getCoin(): gincoinc_global_v1_gincoincglobalv1_enum_pb.Coin;
    setCoin(value: gincoinc_global_v1_gincoincglobalv1_enum_pb.Coin): void;

    getConfirmation(): number;
    setConfirmation(value: number): void;


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

export class RequestTxOutput extends jspb.Message { 
    getAddress(): string;
    setAddress(value: string): void;

    getStringValue(): string;
    setStringValue(value: string): void;


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
    setSignaturesList(value: Array<RequestSignature>): void;
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
    setSignIndex(value: number): void;

    getSignature(): string;
    setSignature(value: string): void;


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
    setTransferLimitType(value: gincoinc_adamant_global_v1_adamantglobalv1_enum_pb.TransferLimitType): void;

    getTransferLimitValue(): number;
    setTransferLimitValue(value: number): void;


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
    setCoin(value: gincoinc_global_v1_gincoincglobalv1_enum_pb.Coin): void;

    getJpy(): number;
    setJpy(value: number): void;


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
