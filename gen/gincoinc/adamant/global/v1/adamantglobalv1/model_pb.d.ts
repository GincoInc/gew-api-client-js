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
    getNetwork(): gincoinc_global_v1_gincoincglobalv1_enum_pb.Network;
    setNetwork(value: gincoinc_global_v1_gincoincglobalv1_enum_pb.Network): Wallet;
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
    getIsStakingAvailable(): boolean;
    setIsStakingAvailable(value: boolean): Wallet;

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
        network: gincoinc_global_v1_gincoincglobalv1_enum_pb.Network,
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
        isStakingAvailable: boolean,
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
    getNetwork(): gincoinc_global_v1_gincoincglobalv1_enum_pb.Network;
    setNetwork(value: gincoinc_global_v1_gincoincglobalv1_enum_pb.Network): WalletWithoutBalance;
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
        network: gincoinc_global_v1_gincoincglobalv1_enum_pb.Network,
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

export class StakingWallet extends jspb.Message { 
    getOwnerId(): string;
    setOwnerId(value: string): StakingWallet;
    getWalletId(): string;
    setWalletId(value: string): StakingWallet;
    getName(): string;
    setName(value: string): StakingWallet;
    getCoin(): gincoinc_global_v1_gincoincglobalv1_enum_pb.Coin;
    setCoin(value: gincoinc_global_v1_gincoincglobalv1_enum_pb.Coin): StakingWallet;
    getWalletType(): gincoinc_adamant_global_v1_adamantglobalv1_enum_pb.WalletType;
    setWalletType(value: gincoinc_adamant_global_v1_adamantglobalv1_enum_pb.WalletType): StakingWallet;
    getAddressType(): gincoinc_global_v1_gincoincglobalv1_enum_pb.AddressType;
    setAddressType(value: gincoinc_global_v1_gincoincglobalv1_enum_pb.AddressType): StakingWallet;
    getState(): gincoinc_adamant_global_v1_adamantglobalv1_enum_pb.WalletState;
    setState(value: gincoinc_adamant_global_v1_adamantglobalv1_enum_pb.WalletState): StakingWallet;
    getBalance(): number;
    setBalance(value: number): StakingWallet;
    getStringBalance(): string;
    setStringBalance(value: string): StakingWallet;
    getSpendableBalance(): number;
    setSpendableBalance(value: number): StakingWallet;
    getStringSpendableBalance(): string;
    setStringSpendableBalance(value: string): StakingWallet;
    getStakingBalance(): number;
    setStakingBalance(value: number): StakingWallet;
    getStringStakingBalance(): string;
    setStringStakingBalance(value: string): StakingWallet;
    getClaimableRewardBalance(): number;
    setClaimableRewardBalance(value: number): StakingWallet;
    getStringClaimableRewardBalance(): string;
    setStringClaimableRewardBalance(value: string): StakingWallet;
    getWithdrawableUnstakedBalance(): number;
    setWithdrawableUnstakedBalance(value: number): StakingWallet;
    getStringWithdrawableUnstakedBalance(): string;
    setStringWithdrawableUnstakedBalance(value: string): StakingWallet;
    getFrozenUnstakedBalance(): number;
    setFrozenUnstakedBalance(value: number): StakingWallet;
    getStringFrozenUnstakedBalance(): string;
    setStringFrozenUnstakedBalance(value: string): StakingWallet;
    getAddress(): string;
    setAddress(value: string): StakingWallet;
    getActiveValidatorsCount(): number;
    setActiveValidatorsCount(value: number): StakingWallet;

    hasCreateTime(): boolean;
    clearCreateTime(): void;
    getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): StakingWallet;

    hasUpdateTime(): boolean;
    clearUpdateTime(): void;
    getUpdateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setUpdateTime(value?: google_protobuf_timestamp_pb.Timestamp): StakingWallet;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StakingWallet.AsObject;
    static toObject(includeInstance: boolean, msg: StakingWallet): StakingWallet.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StakingWallet, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StakingWallet;
    static deserializeBinaryFromReader(message: StakingWallet, reader: jspb.BinaryReader): StakingWallet;
}

export namespace StakingWallet {
    export type AsObject = {
        ownerId: string,
        walletId: string,
        name: string,
        coin: gincoinc_global_v1_gincoincglobalv1_enum_pb.Coin,
        walletType: gincoinc_adamant_global_v1_adamantglobalv1_enum_pb.WalletType,
        addressType: gincoinc_global_v1_gincoincglobalv1_enum_pb.AddressType,
        state: gincoinc_adamant_global_v1_adamantglobalv1_enum_pb.WalletState,
        balance: number,
        stringBalance: string,
        spendableBalance: number,
        stringSpendableBalance: string,
        stakingBalance: number,
        stringStakingBalance: string,
        claimableRewardBalance: number,
        stringClaimableRewardBalance: string,
        withdrawableUnstakedBalance: number,
        stringWithdrawableUnstakedBalance: string,
        frozenUnstakedBalance: number,
        stringFrozenUnstakedBalance: string,
        address: string,
        activeValidatorsCount: number,
        createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        updateTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}

export class NFTWallet extends jspb.Message { 
    getOwnerId(): string;
    setOwnerId(value: string): NFTWallet;
    getWalletId(): string;
    setWalletId(value: string): NFTWallet;
    getName(): string;
    setName(value: string): NFTWallet;
    getCoin(): gincoinc_global_v1_gincoincglobalv1_enum_pb.Coin;
    setCoin(value: gincoinc_global_v1_gincoincglobalv1_enum_pb.Coin): NFTWallet;
    getWalletType(): gincoinc_adamant_global_v1_adamantglobalv1_enum_pb.WalletType;
    setWalletType(value: gincoinc_adamant_global_v1_adamantglobalv1_enum_pb.WalletType): NFTWallet;
    getAddressType(): gincoinc_global_v1_gincoincglobalv1_enum_pb.AddressType;
    setAddressType(value: gincoinc_global_v1_gincoincglobalv1_enum_pb.AddressType): NFTWallet;
    getState(): gincoinc_adamant_global_v1_adamantglobalv1_enum_pb.WalletState;
    setState(value: gincoinc_adamant_global_v1_adamantglobalv1_enum_pb.WalletState): NFTWallet;
    getAddress(): string;
    setAddress(value: string): NFTWallet;
    clearNftOwnershipsList(): void;
    getNftOwnershipsList(): Array<NFTOwnership>;
    setNftOwnershipsList(value: Array<NFTOwnership>): NFTWallet;
    addNftOwnerships(value?: NFTOwnership, index?: number): NFTOwnership;

    hasCreateTime(): boolean;
    clearCreateTime(): void;
    getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): NFTWallet;

    hasUpdateTime(): boolean;
    clearUpdateTime(): void;
    getUpdateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setUpdateTime(value?: google_protobuf_timestamp_pb.Timestamp): NFTWallet;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NFTWallet.AsObject;
    static toObject(includeInstance: boolean, msg: NFTWallet): NFTWallet.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NFTWallet, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NFTWallet;
    static deserializeBinaryFromReader(message: NFTWallet, reader: jspb.BinaryReader): NFTWallet;
}

export namespace NFTWallet {
    export type AsObject = {
        ownerId: string,
        walletId: string,
        name: string,
        coin: gincoinc_global_v1_gincoincglobalv1_enum_pb.Coin,
        walletType: gincoinc_adamant_global_v1_adamantglobalv1_enum_pb.WalletType,
        addressType: gincoinc_global_v1_gincoincglobalv1_enum_pb.AddressType,
        state: gincoinc_adamant_global_v1_adamantglobalv1_enum_pb.WalletState,
        address: string,
        nftOwnershipsList: Array<NFTOwnership.AsObject>,
        createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        updateTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}

export class NFTOwnership extends jspb.Message { 
    getCoin(): gincoinc_global_v1_gincoincglobalv1_enum_pb.Coin;
    setCoin(value: gincoinc_global_v1_gincoincglobalv1_enum_pb.Coin): NFTOwnership;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NFTOwnership.AsObject;
    static toObject(includeInstance: boolean, msg: NFTOwnership): NFTOwnership.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NFTOwnership, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NFTOwnership;
    static deserializeBinaryFromReader(message: NFTOwnership, reader: jspb.BinaryReader): NFTOwnership;
}

export namespace NFTOwnership {
    export type AsObject = {
        coin: gincoinc_global_v1_gincoincglobalv1_enum_pb.Coin,
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
    getHdIndex(): number;
    setHdIndex(value: number): Key;

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
        hdIndex: number,
    }
}

export class Address extends jspb.Message { 
    getWalletId(): string;
    setWalletId(value: string): Address;
    getAddressId(): string;
    setAddressId(value: string): Address;
    getCoin(): gincoinc_global_v1_gincoincglobalv1_enum_pb.Coin;
    setCoin(value: gincoinc_global_v1_gincoincglobalv1_enum_pb.Coin): Address;
    getNetwork(): gincoinc_global_v1_gincoincglobalv1_enum_pb.Network;
    setNetwork(value: gincoinc_global_v1_gincoincglobalv1_enum_pb.Network): Address;
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
        network: gincoinc_global_v1_gincoincglobalv1_enum_pb.Network,
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
    getNetwork(): gincoinc_global_v1_gincoincglobalv1_enum_pb.Network;
    setNetwork(value: gincoinc_global_v1_gincoincglobalv1_enum_pb.Network): AddressWithoutBalance;
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
        network: gincoinc_global_v1_gincoincglobalv1_enum_pb.Network,
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

export class PreTransaction extends jspb.Message { 
    getPreTransactionId(): string;
    setPreTransactionId(value: string): PreTransaction;
    getOwnerId(): string;
    setOwnerId(value: string): PreTransaction;
    getExternalId(): string;
    setExternalId(value: string): PreTransaction;
    getCoin(): gincoinc_global_v1_gincoincglobalv1_enum_pb.Coin;
    setCoin(value: gincoinc_global_v1_gincoincglobalv1_enum_pb.Coin): PreTransaction;
    getNetwork(): gincoinc_global_v1_gincoincglobalv1_enum_pb.Network;
    setNetwork(value: gincoinc_global_v1_gincoincglobalv1_enum_pb.Network): PreTransaction;
    clearDetailsList(): void;
    getDetailsList(): Array<PreTransactionDetail>;
    setDetailsList(value: Array<PreTransactionDetail>): PreTransaction;
    addDetails(value?: PreTransactionDetail, index?: number): PreTransactionDetail;
    getState(): gincoinc_adamant_global_v1_adamantglobalv1_enum_pb.PreTransactionState;
    setState(value: gincoinc_adamant_global_v1_adamantglobalv1_enum_pb.PreTransactionState): PreTransaction;
    getTransactionId(): string;
    setTransactionId(value: string): PreTransaction;

    hasCreateTime(): boolean;
    clearCreateTime(): void;
    getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): PreTransaction;

    hasUpdateTime(): boolean;
    clearUpdateTime(): void;
    getUpdateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setUpdateTime(value?: google_protobuf_timestamp_pb.Timestamp): PreTransaction;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PreTransaction.AsObject;
    static toObject(includeInstance: boolean, msg: PreTransaction): PreTransaction.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PreTransaction, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PreTransaction;
    static deserializeBinaryFromReader(message: PreTransaction, reader: jspb.BinaryReader): PreTransaction;
}

export namespace PreTransaction {
    export type AsObject = {
        preTransactionId: string,
        ownerId: string,
        externalId: string,
        coin: gincoinc_global_v1_gincoincglobalv1_enum_pb.Coin,
        network: gincoinc_global_v1_gincoincglobalv1_enum_pb.Network,
        detailsList: Array<PreTransactionDetail.AsObject>,
        state: gincoinc_adamant_global_v1_adamantglobalv1_enum_pb.PreTransactionState,
        transactionId: string,
        createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        updateTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}

export class PreTransactionDetail extends jspb.Message { 
    getAddress(): string;
    setAddress(value: string): PreTransactionDetail;
    getStringValue(): string;
    setStringValue(value: string): PreTransactionDetail;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PreTransactionDetail.AsObject;
    static toObject(includeInstance: boolean, msg: PreTransactionDetail): PreTransactionDetail.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PreTransactionDetail, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PreTransactionDetail;
    static deserializeBinaryFromReader(message: PreTransactionDetail, reader: jspb.BinaryReader): PreTransactionDetail;
}

export namespace PreTransactionDetail {
    export type AsObject = {
        address: string,
        stringValue: string,
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

    hasCreateTime(): boolean;
    clearCreateTime(): void;
    getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): Transaction;

    hasUpdateTime(): boolean;
    clearUpdateTime(): void;
    getUpdateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setUpdateTime(value?: google_protobuf_timestamp_pb.Timestamp): Transaction;

    hasEthereumSpecific(): boolean;
    clearEthereumSpecific(): void;
    getEthereumSpecific(): EthereumSpecific | undefined;
    setEthereumSpecific(value?: EthereumSpecific): Transaction;

    hasXrpSpecific(): boolean;
    clearXrpSpecific(): void;
    getXrpSpecific(): XrpSpecific | undefined;
    setXrpSpecific(value?: XrpSpecific): Transaction;

    hasBitcoinSpecific(): boolean;
    clearBitcoinSpecific(): void;
    getBitcoinSpecific(): BitcoinSpecific | undefined;
    setBitcoinSpecific(value?: BitcoinSpecific): Transaction;

    hasLitecoinSpecific(): boolean;
    clearLitecoinSpecific(): void;
    getLitecoinSpecific(): LitecoinSpecific | undefined;
    setLitecoinSpecific(value?: LitecoinSpecific): Transaction;

    hasBitcoincashSpecific(): boolean;
    clearBitcoincashSpecific(): void;
    getBitcoincashSpecific(): BitcoincashSpecific | undefined;
    setBitcoincashSpecific(value?: BitcoincashSpecific): Transaction;

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

    hasSymbolSpecific(): boolean;
    clearSymbolSpecific(): void;
    getSymbolSpecific(): SymbolSpecific | undefined;
    setSymbolSpecific(value?: SymbolSpecific): Transaction;

    hasAvalancheSpecific(): boolean;
    clearAvalancheSpecific(): void;
    getAvalancheSpecific(): AvalancheSpecific | undefined;
    setAvalancheSpecific(value?: AvalancheSpecific): Transaction;

    hasOasysSpecific(): boolean;
    clearOasysSpecific(): void;
    getOasysSpecific(): OasysSpecific | undefined;
    setOasysSpecific(value?: OasysSpecific): Transaction;

    hasXdcSpecific(): boolean;
    clearXdcSpecific(): void;
    getXdcSpecific(): XdcSpecific | undefined;
    setXdcSpecific(value?: XdcSpecific): Transaction;

    hasCosmosSpecific(): boolean;
    clearCosmosSpecific(): void;
    getCosmosSpecific(): CosmosSpecific | undefined;
    setCosmosSpecific(value?: CosmosSpecific): Transaction;

    hasEthereumClassicSpecific(): boolean;
    clearEthereumClassicSpecific(): void;
    getEthereumClassicSpecific(): EthereumClassicSpecific | undefined;
    setEthereumClassicSpecific(value?: EthereumClassicSpecific): Transaction;

    hasAlgorandSpecific(): boolean;
    clearAlgorandSpecific(): void;
    getAlgorandSpecific(): AlgorandSpecific | undefined;
    setAlgorandSpecific(value?: AlgorandSpecific): Transaction;

    hasHederaSpecific(): boolean;
    clearHederaSpecific(): void;
    getHederaSpecific(): HederaSpecific | undefined;
    setHederaSpecific(value?: HederaSpecific): Transaction;

    hasJapanOpenChainSpecific(): boolean;
    clearJapanOpenChainSpecific(): void;
    getJapanOpenChainSpecific(): JapanOpenChainSpecific | undefined;
    setJapanOpenChainSpecific(value?: JapanOpenChainSpecific): Transaction;

    hasSolanaSpecific(): boolean;
    clearSolanaSpecific(): void;
    getSolanaSpecific(): SolanaSpecific | undefined;
    setSolanaSpecific(value?: SolanaSpecific): Transaction;

    hasBnbSmartChainSpecific(): boolean;
    clearBnbSmartChainSpecific(): void;
    getBnbSmartChainSpecific(): BNBSmartChainSpecific | undefined;
    setBnbSmartChainSpecific(value?: BNBSmartChainSpecific): Transaction;

    hasFlareSpecific(): boolean;
    clearFlareSpecific(): void;
    getFlareSpecific(): FlareSpecific | undefined;
    setFlareSpecific(value?: FlareSpecific): Transaction;
    getNetwork(): gincoinc_global_v1_gincoincglobalv1_enum_pb.Network;
    setNetwork(value: gincoinc_global_v1_gincoincglobalv1_enum_pb.Network): Transaction;

    hasArbitrumOneSpecific(): boolean;
    clearArbitrumOneSpecific(): void;
    getArbitrumOneSpecific(): ArbitrumOneSpecific | undefined;
    setArbitrumOneSpecific(value?: ArbitrumOneSpecific): Transaction;

    hasAptosSpecific(): boolean;
    clearAptosSpecific(): void;
    getAptosSpecific(): AptosSpecific | undefined;
    setAptosSpecific(value?: AptosSpecific): Transaction;

    hasDogecoinSpecific(): boolean;
    clearDogecoinSpecific(): void;
    getDogecoinSpecific(): DogecoinSpecific | undefined;
    setDogecoinSpecific(value?: DogecoinSpecific): Transaction;

    hasAvalanchePlatformChainSpecific(): boolean;
    clearAvalanchePlatformChainSpecific(): void;
    getAvalanchePlatformChainSpecific(): AvalanchePlatformChainSpecific | undefined;
    setAvalanchePlatformChainSpecific(value?: AvalanchePlatformChainSpecific): Transaction;

    hasQuorumSpecific(): boolean;
    clearQuorumSpecific(): void;
    getQuorumSpecific(): QuorumSpecific | undefined;
    setQuorumSpecific(value?: QuorumSpecific): Transaction;

    hasTonSpecific(): boolean;
    clearTonSpecific(): void;
    getTonSpecific(): TonSpecific | undefined;
    setTonSpecific(value?: TonSpecific): Transaction;

    hasSuiSpecific(): boolean;
    clearSuiSpecific(): void;
    getSuiSpecific(): SuiSpecific | undefined;
    setSuiSpecific(value?: SuiSpecific): Transaction;

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
        createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        updateTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        ethereumSpecific?: EthereumSpecific.AsObject,
        xrpSpecific?: XrpSpecific.AsObject,
        bitcoinSpecific?: BitcoinSpecific.AsObject,
        litecoinSpecific?: LitecoinSpecific.AsObject,
        bitcoincashSpecific?: BitcoincashSpecific.AsObject,
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
        symbolSpecific?: SymbolSpecific.AsObject,
        avalancheSpecific?: AvalancheSpecific.AsObject,
        oasysSpecific?: OasysSpecific.AsObject,
        xdcSpecific?: XdcSpecific.AsObject,
        cosmosSpecific?: CosmosSpecific.AsObject,
        ethereumClassicSpecific?: EthereumClassicSpecific.AsObject,
        algorandSpecific?: AlgorandSpecific.AsObject,
        hederaSpecific?: HederaSpecific.AsObject,
        japanOpenChainSpecific?: JapanOpenChainSpecific.AsObject,
        solanaSpecific?: SolanaSpecific.AsObject,
        bnbSmartChainSpecific?: BNBSmartChainSpecific.AsObject,
        flareSpecific?: FlareSpecific.AsObject,
        network: gincoinc_global_v1_gincoincglobalv1_enum_pb.Network,
        arbitrumOneSpecific?: ArbitrumOneSpecific.AsObject,
        aptosSpecific?: AptosSpecific.AsObject,
        dogecoinSpecific?: DogecoinSpecific.AsObject,
        avalanchePlatformChainSpecific?: AvalanchePlatformChainSpecific.AsObject,
        quorumSpecific?: QuorumSpecific.AsObject,
        tonSpecific?: TonSpecific.AsObject,
        suiSpecific?: SuiSpecific.AsObject,
    }
}

export class UnconfirmedTransaction extends jspb.Message { 
    getWalletId(): string;
    setWalletId(value: string): UnconfirmedTransaction;
    getTransactionId(): string;
    setTransactionId(value: string): UnconfirmedTransaction;
    getTxId(): string;
    setTxId(value: string): UnconfirmedTransaction;
    getValue(): number;
    setValue(value: number): UnconfirmedTransaction;
    getStringValue(): string;
    setStringValue(value: string): UnconfirmedTransaction;
    getAddress(): string;
    setAddress(value: string): UnconfirmedTransaction;
    getFee(): number;
    setFee(value: number): UnconfirmedTransaction;
    getStringFee(): string;
    setStringFee(value: string): UnconfirmedTransaction;
    getFeeRate(): number;
    setFeeRate(value: number): UnconfirmedTransaction;

    hasCreateTime(): boolean;
    clearCreateTime(): void;
    getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): UnconfirmedTransaction;

    hasBitcoinSpecific(): boolean;
    clearBitcoinSpecific(): void;
    getBitcoinSpecific(): BitcoinSpecific | undefined;
    setBitcoinSpecific(value?: BitcoinSpecific): UnconfirmedTransaction;

    hasLitecoinSpecific(): boolean;
    clearLitecoinSpecific(): void;
    getLitecoinSpecific(): LitecoinSpecific | undefined;
    setLitecoinSpecific(value?: LitecoinSpecific): UnconfirmedTransaction;

    hasBitcoincashSpecific(): boolean;
    clearBitcoincashSpecific(): void;
    getBitcoincashSpecific(): BitcoincashSpecific | undefined;
    setBitcoincashSpecific(value?: BitcoincashSpecific): UnconfirmedTransaction;

    hasC0banSpecific(): boolean;
    clearC0banSpecific(): void;
    getC0banSpecific(): C0banSpecific | undefined;
    setC0banSpecific(value?: C0banSpecific): UnconfirmedTransaction;

    hasCardanoSpecific(): boolean;
    clearCardanoSpecific(): void;
    getCardanoSpecific(): CardanoSpecific | undefined;
    setCardanoSpecific(value?: CardanoSpecific): UnconfirmedTransaction;

    hasMonacoinSpecific(): boolean;
    clearMonacoinSpecific(): void;
    getMonacoinSpecific(): MonacoinSpecific | undefined;
    setMonacoinSpecific(value?: MonacoinSpecific): UnconfirmedTransaction;

    hasAvalanchePlatformChainSpecific(): boolean;
    clearAvalanchePlatformChainSpecific(): void;
    getAvalanchePlatformChainSpecific(): AvalanchePlatformChainSpecific | undefined;
    setAvalanchePlatformChainSpecific(value?: AvalanchePlatformChainSpecific): UnconfirmedTransaction;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UnconfirmedTransaction.AsObject;
    static toObject(includeInstance: boolean, msg: UnconfirmedTransaction): UnconfirmedTransaction.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UnconfirmedTransaction, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UnconfirmedTransaction;
    static deserializeBinaryFromReader(message: UnconfirmedTransaction, reader: jspb.BinaryReader): UnconfirmedTransaction;
}

export namespace UnconfirmedTransaction {
    export type AsObject = {
        walletId: string,
        transactionId: string,
        txId: string,
        value: number,
        stringValue: string,
        address: string,
        fee: number,
        stringFee: string,
        feeRate: number,
        createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        bitcoinSpecific?: BitcoinSpecific.AsObject,
        litecoinSpecific?: LitecoinSpecific.AsObject,
        bitcoincashSpecific?: BitcoincashSpecific.AsObject,
        c0banSpecific?: C0banSpecific.AsObject,
        cardanoSpecific?: CardanoSpecific.AsObject,
        monacoinSpecific?: MonacoinSpecific.AsObject,
        avalanchePlatformChainSpecific?: AvalanchePlatformChainSpecific.AsObject,
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
    getTxInputIndex(): number;
    setTxInputIndex(value: number): TxInput;
    getAddress(): string;
    setAddress(value: string): TxInput;
    getWitnessScript(): string;
    setWitnessScript(value: string): TxInput;
    getNSequence(): number;
    setNSequence(value: number): TxInput;
    getAddressType(): gincoinc_global_v1_gincoincglobalv1_enum_pb.AddressType;
    setAddressType(value: gincoinc_global_v1_gincoincglobalv1_enum_pb.AddressType): TxInput;

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
        txInputIndex: number,
        address: string,
        witnessScript: string,
        nSequence: number,
        addressType: gincoinc_global_v1_gincoincglobalv1_enum_pb.AddressType,
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
    getTxOutputIndex(): number;
    setTxOutputIndex(value: number): TxOutput;

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
        txOutputIndex: number,
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

    hasCardanoSpecific(): boolean;
    clearCardanoSpecific(): void;
    getCardanoSpecific(): CardanoUTXOSpecific | undefined;
    setCardanoSpecific(value?: CardanoUTXOSpecific): UTXO;

    hasAvalanchePlatformChainSpecific(): boolean;
    clearAvalanchePlatformChainSpecific(): void;
    getAvalanchePlatformChainSpecific(): AvalanchePlatformChainUTXOSpecific | undefined;
    setAvalanchePlatformChainSpecific(value?: AvalanchePlatformChainUTXOSpecific): UTXO;

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
        cardanoSpecific?: CardanoUTXOSpecific.AsObject,
        avalanchePlatformChainSpecific?: AvalanchePlatformChainUTXOSpecific.AsObject,
    }
}

export class CardanoUTXOSpecific extends jspb.Message { 
    clearTokensList(): void;
    getTokensList(): Array<CardanoCustomToken>;
    setTokensList(value: Array<CardanoCustomToken>): CardanoUTXOSpecific;
    addTokens(value?: CardanoCustomToken, index?: number): CardanoCustomToken;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CardanoUTXOSpecific.AsObject;
    static toObject(includeInstance: boolean, msg: CardanoUTXOSpecific): CardanoUTXOSpecific.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CardanoUTXOSpecific, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CardanoUTXOSpecific;
    static deserializeBinaryFromReader(message: CardanoUTXOSpecific, reader: jspb.BinaryReader): CardanoUTXOSpecific;
}

export namespace CardanoUTXOSpecific {
    export type AsObject = {
        tokensList: Array<CardanoCustomToken.AsObject>,
    }
}

export class AvalanchePlatformChainUTXOSpecific extends jspb.Message { 
    getThreshold(): number;
    setThreshold(value: number): AvalanchePlatformChainUTXOSpecific;
    clearAddressesList(): void;
    getAddressesList(): Array<string>;
    setAddressesList(value: Array<string>): AvalanchePlatformChainUTXOSpecific;
    addAddresses(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AvalanchePlatformChainUTXOSpecific.AsObject;
    static toObject(includeInstance: boolean, msg: AvalanchePlatformChainUTXOSpecific): AvalanchePlatformChainUTXOSpecific.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AvalanchePlatformChainUTXOSpecific, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AvalanchePlatformChainUTXOSpecific;
    static deserializeBinaryFromReader(message: AvalanchePlatformChainUTXOSpecific, reader: jspb.BinaryReader): AvalanchePlatformChainUTXOSpecific;
}

export namespace AvalanchePlatformChainUTXOSpecific {
    export type AsObject = {
        threshold: number,
        addressesList: Array<string>,
    }
}

export class CardanoCustomToken extends jspb.Message { 
    getPolicyId(): string;
    setPolicyId(value: string): CardanoCustomToken;
    getAssetName(): string;
    setAssetName(value: string): CardanoCustomToken;
    getValue(): number;
    setValue(value: number): CardanoCustomToken;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CardanoCustomToken.AsObject;
    static toObject(includeInstance: boolean, msg: CardanoCustomToken): CardanoCustomToken.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CardanoCustomToken, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CardanoCustomToken;
    static deserializeBinaryFromReader(message: CardanoCustomToken, reader: jspb.BinaryReader): CardanoCustomToken;
}

export namespace CardanoCustomToken {
    export type AsObject = {
        policyId: string,
        assetName: string,
        value: number,
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

export class DogecoinSpecific extends jspb.Message { 
    clearTxInputsList(): void;
    getTxInputsList(): Array<TxInput>;
    setTxInputsList(value: Array<TxInput>): DogecoinSpecific;
    addTxInputs(value?: TxInput, index?: number): TxInput;
    clearTxOutputsList(): void;
    getTxOutputsList(): Array<TxOutput>;
    setTxOutputsList(value: Array<TxOutput>): DogecoinSpecific;
    addTxOutputs(value?: TxOutput, index?: number): TxOutput;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DogecoinSpecific.AsObject;
    static toObject(includeInstance: boolean, msg: DogecoinSpecific): DogecoinSpecific.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DogecoinSpecific, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DogecoinSpecific;
    static deserializeBinaryFromReader(message: DogecoinSpecific, reader: jspb.BinaryReader): DogecoinSpecific;
}

export namespace DogecoinSpecific {
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
    getData(): string;
    setData(value: string): EthereumSpecific;
    getIsStakingTransaction(): boolean;
    setIsStakingTransaction(value: boolean): EthereumSpecific;
    getFromAddress(): string;
    setFromAddress(value: string): EthereumSpecific;
    getTokenAddress(): string;
    setTokenAddress(value: string): EthereumSpecific;
    getChainId(): number;
    setChainId(value: number): EthereumSpecific;

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
        data: string,
        isStakingTransaction: boolean,
        fromAddress: string,
        tokenAddress: string,
        chainId: number,
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
    getFromAddress(): string;
    setFromAddress(value: string): XrpSpecific;

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
        fromAddress: string,
    }
}

export class TronSpecific extends jspb.Message { 
    getExpiration(): number;
    setExpiration(value: number): TronSpecific;
    getTimestamp(): number;
    setTimestamp(value: number): TronSpecific;
    getBlockId(): string;
    setBlockId(value: string): TronSpecific;
    getFromAddress(): string;
    setFromAddress(value: string): TronSpecific;

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
        timestamp: number,
        blockId: string,
        fromAddress: string,
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
    clearTokensList(): void;
    getTokensList(): Array<CardanoCustomToken>;
    setTokensList(value: Array<CardanoCustomToken>): CardanoSpecific;
    addTokens(value?: CardanoCustomToken, index?: number): CardanoCustomToken;

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
        tokensList: Array<CardanoCustomToken.AsObject>,
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
    getCallType(): gincoinc_adamant_global_v1_adamantglobalv1_enum_pb.SubstrateCallType;
    setCallType(value: gincoinc_adamant_global_v1_adamantglobalv1_enum_pb.SubstrateCallType): SubstrateSpecific;

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
        callType: gincoinc_adamant_global_v1_adamantglobalv1_enum_pb.SubstrateCallType,
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
    getTimestamp(): number;
    setTimestamp(value: number): NemSpecific;

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
        timestamp: number,
    }
}

export class IOSTSpecific extends jspb.Message { 
    getMemo(): string;
    setMemo(value: string): IOSTSpecific;
    getTimestamp(): number;
    setTimestamp(value: number): IOSTSpecific;
    getExpiration(): number;
    setExpiration(value: number): IOSTSpecific;
    getType(): gincoinc_adamant_global_v1_adamantglobalv1_enum_pb.IOSTActionType;
    setType(value: gincoinc_adamant_global_v1_adamantglobalv1_enum_pb.IOSTActionType): IOSTSpecific;

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
        type: gincoinc_adamant_global_v1_adamantglobalv1_enum_pb.IOSTActionType,
    }
}

export class PolygonSpecific extends jspb.Message { 
    getGasLimit(): number;
    setGasLimit(value: number): PolygonSpecific;
    getNonce(): number;
    setNonce(value: number): PolygonSpecific;
    getIsNextNonce(): boolean;
    setIsNextNonce(value: boolean): PolygonSpecific;
    getData(): string;
    setData(value: string): PolygonSpecific;
    getFromAddress(): string;
    setFromAddress(value: string): PolygonSpecific;
    getTokenAddress(): string;
    setTokenAddress(value: string): PolygonSpecific;
    getChainId(): number;
    setChainId(value: number): PolygonSpecific;

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
        data: string,
        fromAddress: string,
        tokenAddress: string,
        chainId: number,
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

export class SymbolSpecific extends jspb.Message { 
    getMessage(): string;
    setMessage(value: string): SymbolSpecific;
    getTxType(): gincoinc_global_v1_gincoincglobalv1_enum_pb.SymbolTransactionType;
    setTxType(value: gincoinc_global_v1_gincoincglobalv1_enum_pb.SymbolTransactionType): SymbolSpecific;
    clearSymbolMultisigTransactionsList(): void;
    getSymbolMultisigTransactionsList(): Array<SymbolMultisigTransaction>;
    setSymbolMultisigTransactionsList(value: Array<SymbolMultisigTransaction>): SymbolSpecific;
    addSymbolMultisigTransactions(value?: SymbolMultisigTransaction, index?: number): SymbolMultisigTransaction;
    getExpiration(): number;
    setExpiration(value: number): SymbolSpecific;
    getTimestamp(): number;
    setTimestamp(value: number): SymbolSpecific;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SymbolSpecific.AsObject;
    static toObject(includeInstance: boolean, msg: SymbolSpecific): SymbolSpecific.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SymbolSpecific, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SymbolSpecific;
    static deserializeBinaryFromReader(message: SymbolSpecific, reader: jspb.BinaryReader): SymbolSpecific;
}

export namespace SymbolSpecific {
    export type AsObject = {
        message: string,
        txType: gincoinc_global_v1_gincoincglobalv1_enum_pb.SymbolTransactionType,
        symbolMultisigTransactionsList: Array<SymbolMultisigTransaction.AsObject>,
        expiration: number,
        timestamp: number,
    }
}

export class AvalancheSpecific extends jspb.Message { 
    getGasLimit(): number;
    setGasLimit(value: number): AvalancheSpecific;
    getNonce(): number;
    setNonce(value: number): AvalancheSpecific;
    getIsNextNonce(): boolean;
    setIsNextNonce(value: boolean): AvalancheSpecific;

    hasAtomicTx(): boolean;
    clearAtomicTx(): void;
    getAtomicTx(): AtomicTx | undefined;
    setAtomicTx(value?: AtomicTx): AvalancheSpecific;
    getFromAddress(): string;
    setFromAddress(value: string): AvalancheSpecific;
    getTokenAddress(): string;
    setTokenAddress(value: string): AvalancheSpecific;
    getChainId(): number;
    setChainId(value: number): AvalancheSpecific;
    getMaxPriorityFeePerGas(): number;
    setMaxPriorityFeePerGas(value: number): AvalancheSpecific;
    getTxType(): gincoinc_global_v1_gincoincglobalv1_enum_pb.AvalancheTxType;
    setTxType(value: gincoinc_global_v1_gincoincglobalv1_enum_pb.AvalancheTxType): AvalancheSpecific;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AvalancheSpecific.AsObject;
    static toObject(includeInstance: boolean, msg: AvalancheSpecific): AvalancheSpecific.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AvalancheSpecific, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AvalancheSpecific;
    static deserializeBinaryFromReader(message: AvalancheSpecific, reader: jspb.BinaryReader): AvalancheSpecific;
}

export namespace AvalancheSpecific {
    export type AsObject = {
        gasLimit: number,
        nonce: number,
        isNextNonce: boolean,
        atomicTx?: AtomicTx.AsObject,
        fromAddress: string,
        tokenAddress: string,
        chainId: number,
        maxPriorityFeePerGas: number,
        txType: gincoinc_global_v1_gincoincglobalv1_enum_pb.AvalancheTxType,
    }
}

export class OasysSpecific extends jspb.Message { 
    getGasLimit(): number;
    setGasLimit(value: number): OasysSpecific;
    getNonce(): number;
    setNonce(value: number): OasysSpecific;
    getIsNextNonce(): boolean;
    setIsNextNonce(value: boolean): OasysSpecific;
    getFromAddress(): string;
    setFromAddress(value: string): OasysSpecific;
    getTokenAddress(): string;
    setTokenAddress(value: string): OasysSpecific;
    getChainId(): number;
    setChainId(value: number): OasysSpecific;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OasysSpecific.AsObject;
    static toObject(includeInstance: boolean, msg: OasysSpecific): OasysSpecific.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OasysSpecific, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OasysSpecific;
    static deserializeBinaryFromReader(message: OasysSpecific, reader: jspb.BinaryReader): OasysSpecific;
}

export namespace OasysSpecific {
    export type AsObject = {
        gasLimit: number,
        nonce: number,
        isNextNonce: boolean,
        fromAddress: string,
        tokenAddress: string,
        chainId: number,
    }
}

export class XdcSpecific extends jspb.Message { 
    getGasLimit(): number;
    setGasLimit(value: number): XdcSpecific;
    getNonce(): number;
    setNonce(value: number): XdcSpecific;
    getIsNextNonce(): boolean;
    setIsNextNonce(value: boolean): XdcSpecific;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): XdcSpecific.AsObject;
    static toObject(includeInstance: boolean, msg: XdcSpecific): XdcSpecific.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: XdcSpecific, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): XdcSpecific;
    static deserializeBinaryFromReader(message: XdcSpecific, reader: jspb.BinaryReader): XdcSpecific;
}

export namespace XdcSpecific {
    export type AsObject = {
        gasLimit: number,
        nonce: number,
        isNextNonce: boolean,
    }
}

export class CosmosSpecific extends jspb.Message { 
    getGasLimit(): number;
    setGasLimit(value: number): CosmosSpecific;
    getNonce(): number;
    setNonce(value: number): CosmosSpecific;
    getIsNextNonce(): boolean;
    setIsNextNonce(value: boolean): CosmosSpecific;
    getType(): gincoinc_global_v1_gincoincglobalv1_enum_pb.CosmosMsgType;
    setType(value: gincoinc_global_v1_gincoincglobalv1_enum_pb.CosmosMsgType): CosmosSpecific;
    getMemo(): string;
    setMemo(value: string): CosmosSpecific;
    getGasAdjustment(): number;
    setGasAdjustment(value: number): CosmosSpecific;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CosmosSpecific.AsObject;
    static toObject(includeInstance: boolean, msg: CosmosSpecific): CosmosSpecific.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CosmosSpecific, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CosmosSpecific;
    static deserializeBinaryFromReader(message: CosmosSpecific, reader: jspb.BinaryReader): CosmosSpecific;
}

export namespace CosmosSpecific {
    export type AsObject = {
        gasLimit: number,
        nonce: number,
        isNextNonce: boolean,
        type: gincoinc_global_v1_gincoincglobalv1_enum_pb.CosmosMsgType,
        memo: string,
        gasAdjustment: number,
    }
}

export class EthereumClassicSpecific extends jspb.Message { 
    getGasLimit(): number;
    setGasLimit(value: number): EthereumClassicSpecific;
    getNonce(): number;
    setNonce(value: number): EthereumClassicSpecific;
    getIsNextNonce(): boolean;
    setIsNextNonce(value: boolean): EthereumClassicSpecific;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EthereumClassicSpecific.AsObject;
    static toObject(includeInstance: boolean, msg: EthereumClassicSpecific): EthereumClassicSpecific.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EthereumClassicSpecific, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EthereumClassicSpecific;
    static deserializeBinaryFromReader(message: EthereumClassicSpecific, reader: jspb.BinaryReader): EthereumClassicSpecific;
}

export namespace EthereumClassicSpecific {
    export type AsObject = {
        gasLimit: number,
        nonce: number,
        isNextNonce: boolean,
    }
}

export class AlgorandSpecific extends jspb.Message { 
    getGasLimit(): number;
    setGasLimit(value: number): AlgorandSpecific;
    getNonce(): number;
    setNonce(value: number): AlgorandSpecific;
    getIsNextNonce(): boolean;
    setIsNextNonce(value: boolean): AlgorandSpecific;
    getMemo(): string;
    setMemo(value: string): AlgorandSpecific;
    getFirstRound(): number;
    setFirstRound(value: number): AlgorandSpecific;
    getLastRound(): number;
    setLastRound(value: number): AlgorandSpecific;
    getExpiration(): number;
    setExpiration(value: number): AlgorandSpecific;
    getTimestamp(): number;
    setTimestamp(value: number): AlgorandSpecific;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AlgorandSpecific.AsObject;
    static toObject(includeInstance: boolean, msg: AlgorandSpecific): AlgorandSpecific.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AlgorandSpecific, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AlgorandSpecific;
    static deserializeBinaryFromReader(message: AlgorandSpecific, reader: jspb.BinaryReader): AlgorandSpecific;
}

export namespace AlgorandSpecific {
    export type AsObject = {
        gasLimit: number,
        nonce: number,
        isNextNonce: boolean,
        memo: string,
        firstRound: number,
        lastRound: number,
        expiration: number,
        timestamp: number,
    }
}

export class HederaSpecific extends jspb.Message { 
    getMemo(): string;
    setMemo(value: string): HederaSpecific;
    getTimestamp(): number;
    setTimestamp(value: number): HederaSpecific;
    getExpiration(): number;
    setExpiration(value: number): HederaSpecific;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): HederaSpecific.AsObject;
    static toObject(includeInstance: boolean, msg: HederaSpecific): HederaSpecific.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: HederaSpecific, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): HederaSpecific;
    static deserializeBinaryFromReader(message: HederaSpecific, reader: jspb.BinaryReader): HederaSpecific;
}

export namespace HederaSpecific {
    export type AsObject = {
        memo: string,
        timestamp: number,
        expiration: number,
    }
}

export class JapanOpenChainSpecific extends jspb.Message { 
    getGasLimit(): number;
    setGasLimit(value: number): JapanOpenChainSpecific;
    getNonce(): number;
    setNonce(value: number): JapanOpenChainSpecific;
    getIsNextNonce(): boolean;
    setIsNextNonce(value: boolean): JapanOpenChainSpecific;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): JapanOpenChainSpecific.AsObject;
    static toObject(includeInstance: boolean, msg: JapanOpenChainSpecific): JapanOpenChainSpecific.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: JapanOpenChainSpecific, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): JapanOpenChainSpecific;
    static deserializeBinaryFromReader(message: JapanOpenChainSpecific, reader: jspb.BinaryReader): JapanOpenChainSpecific;
}

export namespace JapanOpenChainSpecific {
    export type AsObject = {
        gasLimit: number,
        nonce: number,
        isNextNonce: boolean,
    }
}

export class SolanaSpecific extends jspb.Message { 
    getExpiration(): number;
    setExpiration(value: number): SolanaSpecific;
    getEventType(): gincoinc_global_v1_gincoincglobalv1_enum_pb.SolanaEventType;
    setEventType(value: gincoinc_global_v1_gincoincglobalv1_enum_pb.SolanaEventType): SolanaSpecific;
    getFromAddress(): string;
    setFromAddress(value: string): SolanaSpecific;
    getRecentBlockhash(): string;
    setRecentBlockhash(value: string): SolanaSpecific;
    getPriorityFeeUnitLimit(): number;
    setPriorityFeeUnitLimit(value: number): SolanaSpecific;
    getCallerAddress(): string;
    setCallerAddress(value: string): SolanaSpecific;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SolanaSpecific.AsObject;
    static toObject(includeInstance: boolean, msg: SolanaSpecific): SolanaSpecific.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SolanaSpecific, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SolanaSpecific;
    static deserializeBinaryFromReader(message: SolanaSpecific, reader: jspb.BinaryReader): SolanaSpecific;
}

export namespace SolanaSpecific {
    export type AsObject = {
        expiration: number,
        eventType: gincoinc_global_v1_gincoincglobalv1_enum_pb.SolanaEventType,
        fromAddress: string,
        recentBlockhash: string,
        priorityFeeUnitLimit: number,
        callerAddress: string,
    }
}

export class AptosSpecific extends jspb.Message { 
    getGasLimit(): number;
    setGasLimit(value: number): AptosSpecific;
    getNonce(): number;
    setNonce(value: number): AptosSpecific;
    getIsNextNonce(): boolean;
    setIsNextNonce(value: boolean): AptosSpecific;
    getExpiration(): number;
    setExpiration(value: number): AptosSpecific;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AptosSpecific.AsObject;
    static toObject(includeInstance: boolean, msg: AptosSpecific): AptosSpecific.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AptosSpecific, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AptosSpecific;
    static deserializeBinaryFromReader(message: AptosSpecific, reader: jspb.BinaryReader): AptosSpecific;
}

export namespace AptosSpecific {
    export type AsObject = {
        gasLimit: number,
        nonce: number,
        isNextNonce: boolean,
        expiration: number,
    }
}

export class BNBSmartChainSpecific extends jspb.Message { 
    getGasLimit(): number;
    setGasLimit(value: number): BNBSmartChainSpecific;
    getNonce(): number;
    setNonce(value: number): BNBSmartChainSpecific;
    getIsNextNonce(): boolean;
    setIsNextNonce(value: boolean): BNBSmartChainSpecific;
    getFromAddress(): string;
    setFromAddress(value: string): BNBSmartChainSpecific;
    getTokenAddress(): string;
    setTokenAddress(value: string): BNBSmartChainSpecific;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BNBSmartChainSpecific.AsObject;
    static toObject(includeInstance: boolean, msg: BNBSmartChainSpecific): BNBSmartChainSpecific.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BNBSmartChainSpecific, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BNBSmartChainSpecific;
    static deserializeBinaryFromReader(message: BNBSmartChainSpecific, reader: jspb.BinaryReader): BNBSmartChainSpecific;
}

export namespace BNBSmartChainSpecific {
    export type AsObject = {
        gasLimit: number,
        nonce: number,
        isNextNonce: boolean,
        fromAddress: string,
        tokenAddress: string,
    }
}

export class FlareSpecific extends jspb.Message { 
    getGasLimit(): number;
    setGasLimit(value: number): FlareSpecific;
    getNonce(): number;
    setNonce(value: number): FlareSpecific;
    getIsNextNonce(): boolean;
    setIsNextNonce(value: boolean): FlareSpecific;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FlareSpecific.AsObject;
    static toObject(includeInstance: boolean, msg: FlareSpecific): FlareSpecific.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FlareSpecific, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FlareSpecific;
    static deserializeBinaryFromReader(message: FlareSpecific, reader: jspb.BinaryReader): FlareSpecific;
}

export namespace FlareSpecific {
    export type AsObject = {
        gasLimit: number,
        nonce: number,
        isNextNonce: boolean,
    }
}

export class ArbitrumOneSpecific extends jspb.Message { 
    getGasLimit(): number;
    setGasLimit(value: number): ArbitrumOneSpecific;
    getNonce(): number;
    setNonce(value: number): ArbitrumOneSpecific;
    getIsNextNonce(): boolean;
    setIsNextNonce(value: boolean): ArbitrumOneSpecific;
    getData(): string;
    setData(value: string): ArbitrumOneSpecific;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ArbitrumOneSpecific.AsObject;
    static toObject(includeInstance: boolean, msg: ArbitrumOneSpecific): ArbitrumOneSpecific.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ArbitrumOneSpecific, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ArbitrumOneSpecific;
    static deserializeBinaryFromReader(message: ArbitrumOneSpecific, reader: jspb.BinaryReader): ArbitrumOneSpecific;
}

export namespace ArbitrumOneSpecific {
    export type AsObject = {
        gasLimit: number,
        nonce: number,
        isNextNonce: boolean,
        data: string,
    }
}

export class AtomicTx extends jspb.Message { 
    getTxType(): gincoinc_global_v1_gincoincglobalv1_enum_pb.AvalancheTxType;
    setTxType(value: gincoinc_global_v1_gincoincglobalv1_enum_pb.AvalancheTxType): AtomicTx;
    clearTxInputsList(): void;
    getTxInputsList(): Array<AvalancheTxInput>;
    setTxInputsList(value: Array<AvalancheTxInput>): AtomicTx;
    addTxInputs(value?: AvalancheTxInput, index?: number): AvalancheTxInput;
    clearTxOutputsList(): void;
    getTxOutputsList(): Array<AvalancheTxOutput>;
    setTxOutputsList(value: Array<AvalancheTxOutput>): AtomicTx;
    addTxOutputs(value?: AvalancheTxOutput, index?: number): AvalancheTxOutput;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AtomicTx.AsObject;
    static toObject(includeInstance: boolean, msg: AtomicTx): AtomicTx.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AtomicTx, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AtomicTx;
    static deserializeBinaryFromReader(message: AtomicTx, reader: jspb.BinaryReader): AtomicTx;
}

export namespace AtomicTx {
    export type AsObject = {
        txType: gincoinc_global_v1_gincoincglobalv1_enum_pb.AvalancheTxType,
        txInputsList: Array<AvalancheTxInput.AsObject>,
        txOutputsList: Array<AvalancheTxOutput.AsObject>,
    }
}

export class AvalanchePlatformChainSpecific extends jspb.Message { 
    getTxType(): gincoinc_global_v1_gincoincglobalv1_enum_pb.AvalancheTxType;
    setTxType(value: gincoinc_global_v1_gincoincglobalv1_enum_pb.AvalancheTxType): AvalanchePlatformChainSpecific;
    clearTxInputsList(): void;
    getTxInputsList(): Array<AvalancheTxInput>;
    setTxInputsList(value: Array<AvalancheTxInput>): AvalanchePlatformChainSpecific;
    addTxInputs(value?: AvalancheTxInput, index?: number): AvalancheTxInput;
    clearTxOutputsList(): void;
    getTxOutputsList(): Array<AvalancheTxOutput>;
    setTxOutputsList(value: Array<AvalancheTxOutput>): AvalanchePlatformChainSpecific;
    addTxOutputs(value?: AvalancheTxOutput, index?: number): AvalancheTxOutput;
    getStartTime(): number;
    setStartTime(value: number): AvalanchePlatformChainSpecific;
    getEndTime(): number;
    setEndTime(value: number): AvalanchePlatformChainSpecific;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AvalanchePlatformChainSpecific.AsObject;
    static toObject(includeInstance: boolean, msg: AvalanchePlatformChainSpecific): AvalanchePlatformChainSpecific.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AvalanchePlatformChainSpecific, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AvalanchePlatformChainSpecific;
    static deserializeBinaryFromReader(message: AvalanchePlatformChainSpecific, reader: jspb.BinaryReader): AvalanchePlatformChainSpecific;
}

export namespace AvalanchePlatformChainSpecific {
    export type AsObject = {
        txType: gincoinc_global_v1_gincoincglobalv1_enum_pb.AvalancheTxType,
        txInputsList: Array<AvalancheTxInput.AsObject>,
        txOutputsList: Array<AvalancheTxOutput.AsObject>,
        startTime: number,
        endTime: number,
    }
}

export class TonSpecific extends jspb.Message { 
    getExpiration(): number;
    setExpiration(value: number): TonSpecific;
    getMemo(): string;
    setMemo(value: string): TonSpecific;
    getSequenceNumber(): number;
    setSequenceNumber(value: number): TonSpecific;
    getFromAddress(): string;
    setFromAddress(value: string): TonSpecific;
    getIsNextSequenceNumber(): boolean;
    setIsNextSequenceNumber(value: boolean): TonSpecific;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TonSpecific.AsObject;
    static toObject(includeInstance: boolean, msg: TonSpecific): TonSpecific.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TonSpecific, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TonSpecific;
    static deserializeBinaryFromReader(message: TonSpecific, reader: jspb.BinaryReader): TonSpecific;
}

export namespace TonSpecific {
    export type AsObject = {
        expiration: number,
        memo: string,
        sequenceNumber: number,
        fromAddress: string,
        isNextSequenceNumber: boolean,
    }
}

export class SuiSpecific extends jspb.Message { 
    getSendAll(): boolean;
    setSendAll(value: boolean): SuiSpecific;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SuiSpecific.AsObject;
    static toObject(includeInstance: boolean, msg: SuiSpecific): SuiSpecific.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SuiSpecific, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SuiSpecific;
    static deserializeBinaryFromReader(message: SuiSpecific, reader: jspb.BinaryReader): SuiSpecific;
}

export namespace SuiSpecific {
    export type AsObject = {
        sendAll: boolean,
    }
}

export class AvalancheTxInput extends jspb.Message { 
    getTxId(): string;
    setTxId(value: string): AvalancheTxInput;
    getInputIndex(): number;
    setInputIndex(value: number): AvalancheTxInput;
    getInputIndexType(): number;
    setInputIndexType(value: number): AvalancheTxInput;
    getValue(): number;
    setValue(value: number): AvalancheTxInput;
    getStringValue(): string;
    setStringValue(value: string): AvalancheTxInput;
    clearAddressIndicesList(): void;
    getAddressIndicesList(): Array<number>;
    setAddressIndicesList(value: Array<number>): AvalancheTxInput;
    addAddressIndices(value: number, index?: number): number;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AvalancheTxInput.AsObject;
    static toObject(includeInstance: boolean, msg: AvalancheTxInput): AvalancheTxInput.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AvalancheTxInput, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AvalancheTxInput;
    static deserializeBinaryFromReader(message: AvalancheTxInput, reader: jspb.BinaryReader): AvalancheTxInput;
}

export namespace AvalancheTxInput {
    export type AsObject = {
        txId: string,
        inputIndex: number,
        inputIndexType: number,
        value: number,
        stringValue: string,
        addressIndicesList: Array<number>,
    }
}

export class AvalancheTxOutput extends jspb.Message { 
    getOutputIndex(): number;
    setOutputIndex(value: number): AvalancheTxOutput;
    getOutputType(): number;
    setOutputType(value: number): AvalancheTxOutput;
    getValue(): number;
    setValue(value: number): AvalancheTxOutput;
    getStringValue(): string;
    setStringValue(value: string): AvalancheTxOutput;
    getLocktime(): number;
    setLocktime(value: number): AvalancheTxOutput;
    getThreshold(): number;
    setThreshold(value: number): AvalancheTxOutput;
    getIsChange(): boolean;
    setIsChange(value: boolean): AvalancheTxOutput;
    clearAddressesList(): void;
    getAddressesList(): Array<string>;
    setAddressesList(value: Array<string>): AvalancheTxOutput;
    addAddresses(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AvalancheTxOutput.AsObject;
    static toObject(includeInstance: boolean, msg: AvalancheTxOutput): AvalancheTxOutput.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AvalancheTxOutput, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AvalancheTxOutput;
    static deserializeBinaryFromReader(message: AvalancheTxOutput, reader: jspb.BinaryReader): AvalancheTxOutput;
}

export namespace AvalancheTxOutput {
    export type AsObject = {
        outputIndex: number,
        outputType: number,
        value: number,
        stringValue: string,
        locktime: number,
        threshold: number,
        isChange: boolean,
        addressesList: Array<string>,
    }
}

export class QuorumSpecific extends jspb.Message { 
    getGasLimit(): number;
    setGasLimit(value: number): QuorumSpecific;
    getNonce(): number;
    setNonce(value: number): QuorumSpecific;
    getIsNextNonce(): boolean;
    setIsNextNonce(value: boolean): QuorumSpecific;
    getData(): string;
    setData(value: string): QuorumSpecific;
    getChainId(): number;
    setChainId(value: number): QuorumSpecific;
    getFromAddress(): string;
    setFromAddress(value: string): QuorumSpecific;
    getTokenAddress(): string;
    setTokenAddress(value: string): QuorumSpecific;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): QuorumSpecific.AsObject;
    static toObject(includeInstance: boolean, msg: QuorumSpecific): QuorumSpecific.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: QuorumSpecific, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): QuorumSpecific;
    static deserializeBinaryFromReader(message: QuorumSpecific, reader: jspb.BinaryReader): QuorumSpecific;
}

export namespace QuorumSpecific {
    export type AsObject = {
        gasLimit: number,
        nonce: number,
        isNextNonce: boolean,
        data: string,
        chainId: number,
        fromAddress: string,
        tokenAddress: string,
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
    getTimestamp(): number;
    setTimestamp(value: number): CreateTransactionNemSpecific;

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
        timestamp: number,
    }
}

export class CreateTransactionIOSTSpecific extends jspb.Message { 
    getMemo(): string;
    setMemo(value: string): CreateTransactionIOSTSpecific;
    getTimestamp(): number;
    setTimestamp(value: number): CreateTransactionIOSTSpecific;

    hasType(): boolean;
    clearType(): void;
    getType(): gincoinc_adamant_global_v1_adamantglobalv1_enum_pb.IOSTActionType | undefined;
    setType(value: gincoinc_adamant_global_v1_adamantglobalv1_enum_pb.IOSTActionType): CreateTransactionIOSTSpecific;

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
        type?: gincoinc_adamant_global_v1_adamantglobalv1_enum_pb.IOSTActionType,
    }
}

export class CreateTransactionSymbolSpecific extends jspb.Message { 
    getTransactionId(): string;
    setTransactionId(value: string): CreateTransactionSymbolSpecific;
    getTxType(): gincoinc_global_v1_gincoincglobalv1_enum_pb.SymbolTransactionType;
    setTxType(value: gincoinc_global_v1_gincoincglobalv1_enum_pb.SymbolTransactionType): CreateTransactionSymbolSpecific;
    getMessage(): string;
    setMessage(value: string): CreateTransactionSymbolSpecific;
    getTimestamp(): number;
    setTimestamp(value: number): CreateTransactionSymbolSpecific;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateTransactionSymbolSpecific.AsObject;
    static toObject(includeInstance: boolean, msg: CreateTransactionSymbolSpecific): CreateTransactionSymbolSpecific.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateTransactionSymbolSpecific, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateTransactionSymbolSpecific;
    static deserializeBinaryFromReader(message: CreateTransactionSymbolSpecific, reader: jspb.BinaryReader): CreateTransactionSymbolSpecific;
}

export namespace CreateTransactionSymbolSpecific {
    export type AsObject = {
        transactionId: string,
        txType: gincoinc_global_v1_gincoincglobalv1_enum_pb.SymbolTransactionType,
        message: string,
        timestamp: number,
    }
}

export class CreateTransactionEthereumSpecific extends jspb.Message { 
    getData(): string;
    setData(value: string): CreateTransactionEthereumSpecific;

    hasStakingRecipientWalletId(): boolean;
    clearStakingRecipientWalletId(): void;
    getStakingRecipientWalletId(): string | undefined;
    setStakingRecipientWalletId(value: string): CreateTransactionEthereumSpecific;

    hasCallMethod(): boolean;
    clearCallMethod(): void;
    getCallMethod(): gincoinc_global_v1_gincoincglobalv1_enum_pb.EthereumCallMethod | undefined;
    setCallMethod(value: gincoinc_global_v1_gincoincglobalv1_enum_pb.EthereumCallMethod): CreateTransactionEthereumSpecific;

    hasUtilsAddress(): boolean;
    clearUtilsAddress(): void;
    getUtilsAddress(): string | undefined;
    setUtilsAddress(value: string): CreateTransactionEthereumSpecific;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateTransactionEthereumSpecific.AsObject;
    static toObject(includeInstance: boolean, msg: CreateTransactionEthereumSpecific): CreateTransactionEthereumSpecific.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateTransactionEthereumSpecific, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateTransactionEthereumSpecific;
    static deserializeBinaryFromReader(message: CreateTransactionEthereumSpecific, reader: jspb.BinaryReader): CreateTransactionEthereumSpecific;
}

export namespace CreateTransactionEthereumSpecific {
    export type AsObject = {
        data: string,
        stakingRecipientWalletId?: string,
        callMethod?: gincoinc_global_v1_gincoincglobalv1_enum_pb.EthereumCallMethod,
        utilsAddress?: string,
    }
}

export class CreateTransactionCosmosSpecific extends jspb.Message { 
    getType(): gincoinc_global_v1_gincoincglobalv1_enum_pb.CosmosMsgType;
    setType(value: gincoinc_global_v1_gincoincglobalv1_enum_pb.CosmosMsgType): CreateTransactionCosmosSpecific;
    getMemo(): string;
    setMemo(value: string): CreateTransactionCosmosSpecific;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateTransactionCosmosSpecific.AsObject;
    static toObject(includeInstance: boolean, msg: CreateTransactionCosmosSpecific): CreateTransactionCosmosSpecific.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateTransactionCosmosSpecific, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateTransactionCosmosSpecific;
    static deserializeBinaryFromReader(message: CreateTransactionCosmosSpecific, reader: jspb.BinaryReader): CreateTransactionCosmosSpecific;
}

export namespace CreateTransactionCosmosSpecific {
    export type AsObject = {
        type: gincoinc_global_v1_gincoincglobalv1_enum_pb.CosmosMsgType,
        memo: string,
    }
}

export class CreateTransactionAlgorandSpecific extends jspb.Message { 
    getTimestamp(): number;
    setTimestamp(value: number): CreateTransactionAlgorandSpecific;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateTransactionAlgorandSpecific.AsObject;
    static toObject(includeInstance: boolean, msg: CreateTransactionAlgorandSpecific): CreateTransactionAlgorandSpecific.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateTransactionAlgorandSpecific, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateTransactionAlgorandSpecific;
    static deserializeBinaryFromReader(message: CreateTransactionAlgorandSpecific, reader: jspb.BinaryReader): CreateTransactionAlgorandSpecific;
}

export namespace CreateTransactionAlgorandSpecific {
    export type AsObject = {
        timestamp: number,
    }
}

export class CreateTransactionHederaSpecific extends jspb.Message { 
    getMemo(): string;
    setMemo(value: string): CreateTransactionHederaSpecific;
    getTimestamp(): number;
    setTimestamp(value: number): CreateTransactionHederaSpecific;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateTransactionHederaSpecific.AsObject;
    static toObject(includeInstance: boolean, msg: CreateTransactionHederaSpecific): CreateTransactionHederaSpecific.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateTransactionHederaSpecific, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateTransactionHederaSpecific;
    static deserializeBinaryFromReader(message: CreateTransactionHederaSpecific, reader: jspb.BinaryReader): CreateTransactionHederaSpecific;
}

export namespace CreateTransactionHederaSpecific {
    export type AsObject = {
        memo: string,
        timestamp: number,
    }
}

export class CreateTransactionSolanaSpecific extends jspb.Message { 
    getEventType(): gincoinc_global_v1_gincoincglobalv1_enum_pb.SolanaEventType;
    setEventType(value: gincoinc_global_v1_gincoincglobalv1_enum_pb.SolanaEventType): CreateTransactionSolanaSpecific;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateTransactionSolanaSpecific.AsObject;
    static toObject(includeInstance: boolean, msg: CreateTransactionSolanaSpecific): CreateTransactionSolanaSpecific.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateTransactionSolanaSpecific, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateTransactionSolanaSpecific;
    static deserializeBinaryFromReader(message: CreateTransactionSolanaSpecific, reader: jspb.BinaryReader): CreateTransactionSolanaSpecific;
}

export namespace CreateTransactionSolanaSpecific {
    export type AsObject = {
        eventType: gincoinc_global_v1_gincoincglobalv1_enum_pb.SolanaEventType,
    }
}

export class CreateTransactionAptosSpecific extends jspb.Message { 

    hasExpiration(): boolean;
    clearExpiration(): void;
    getExpiration(): number | undefined;
    setExpiration(value: number): CreateTransactionAptosSpecific;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateTransactionAptosSpecific.AsObject;
    static toObject(includeInstance: boolean, msg: CreateTransactionAptosSpecific): CreateTransactionAptosSpecific.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateTransactionAptosSpecific, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateTransactionAptosSpecific;
    static deserializeBinaryFromReader(message: CreateTransactionAptosSpecific, reader: jspb.BinaryReader): CreateTransactionAptosSpecific;
}

export namespace CreateTransactionAptosSpecific {
    export type AsObject = {
        expiration?: number,
    }
}

export class CreateTransactionAvalancheSpecific extends jspb.Message { 

    hasTxType(): boolean;
    clearTxType(): void;
    getTxType(): gincoinc_global_v1_gincoincglobalv1_enum_pb.AvalancheTxType | undefined;
    setTxType(value: gincoinc_global_v1_gincoincglobalv1_enum_pb.AvalancheTxType): CreateTransactionAvalancheSpecific;

    hasImportTxSpecific(): boolean;
    clearImportTxSpecific(): void;
    getImportTxSpecific(): ImportTxSpecific | undefined;
    setImportTxSpecific(value?: ImportTxSpecific): CreateTransactionAvalancheSpecific;

    hasStakingSpecific(): boolean;
    clearStakingSpecific(): void;
    getStakingSpecific(): StakingSpecific | undefined;
    setStakingSpecific(value?: StakingSpecific): CreateTransactionAvalancheSpecific;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateTransactionAvalancheSpecific.AsObject;
    static toObject(includeInstance: boolean, msg: CreateTransactionAvalancheSpecific): CreateTransactionAvalancheSpecific.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateTransactionAvalancheSpecific, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateTransactionAvalancheSpecific;
    static deserializeBinaryFromReader(message: CreateTransactionAvalancheSpecific, reader: jspb.BinaryReader): CreateTransactionAvalancheSpecific;
}

export namespace CreateTransactionAvalancheSpecific {
    export type AsObject = {
        txType?: gincoinc_global_v1_gincoincglobalv1_enum_pb.AvalancheTxType,
        importTxSpecific?: ImportTxSpecific.AsObject,
        stakingSpecific?: StakingSpecific.AsObject,
    }
}

export class CreateTransactionTonSpecific extends jspb.Message { 
    getExpiration(): number;
    setExpiration(value: number): CreateTransactionTonSpecific;
    getMemo(): string;
    setMemo(value: string): CreateTransactionTonSpecific;
    getSendAll(): boolean;
    setSendAll(value: boolean): CreateTransactionTonSpecific;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateTransactionTonSpecific.AsObject;
    static toObject(includeInstance: boolean, msg: CreateTransactionTonSpecific): CreateTransactionTonSpecific.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateTransactionTonSpecific, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateTransactionTonSpecific;
    static deserializeBinaryFromReader(message: CreateTransactionTonSpecific, reader: jspb.BinaryReader): CreateTransactionTonSpecific;
}

export namespace CreateTransactionTonSpecific {
    export type AsObject = {
        expiration: number,
        memo: string,
        sendAll: boolean,
    }
}

export class CreateTransactionNFTSpecific extends jspb.Message { 

    hasNftCallMethod(): boolean;
    clearNftCallMethod(): void;
    getNftCallMethod(): gincoinc_global_v1_gincoincglobalv1_enum_pb.NFTCallMethod | undefined;
    setNftCallMethod(value: gincoinc_global_v1_gincoincglobalv1_enum_pb.NFTCallMethod): CreateTransactionNFTSpecific;
    clearTokenIdsList(): void;
    getTokenIdsList(): Array<string>;
    setTokenIdsList(value: Array<string>): CreateTransactionNFTSpecific;
    addTokenIds(value: string, index?: number): string;
    clearMetadataJsonsList(): void;
    getMetadataJsonsList(): Array<string>;
    setMetadataJsonsList(value: Array<string>): CreateTransactionNFTSpecific;
    addMetadataJsons(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateTransactionNFTSpecific.AsObject;
    static toObject(includeInstance: boolean, msg: CreateTransactionNFTSpecific): CreateTransactionNFTSpecific.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateTransactionNFTSpecific, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateTransactionNFTSpecific;
    static deserializeBinaryFromReader(message: CreateTransactionNFTSpecific, reader: jspb.BinaryReader): CreateTransactionNFTSpecific;
}

export namespace CreateTransactionNFTSpecific {
    export type AsObject = {
        nftCallMethod?: gincoinc_global_v1_gincoincglobalv1_enum_pb.NFTCallMethod,
        tokenIdsList: Array<string>,
        metadataJsonsList: Array<string>,
    }
}

export class ImportTxSpecific extends jspb.Message { 
    getTxId(): string;
    setTxId(value: string): ImportTxSpecific;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ImportTxSpecific.AsObject;
    static toObject(includeInstance: boolean, msg: ImportTxSpecific): ImportTxSpecific.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ImportTxSpecific, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ImportTxSpecific;
    static deserializeBinaryFromReader(message: ImportTxSpecific, reader: jspb.BinaryReader): ImportTxSpecific;
}

export namespace ImportTxSpecific {
    export type AsObject = {
        txId: string,
    }
}

export class StakingSpecific extends jspb.Message { 
    getStartTime(): number;
    setStartTime(value: number): StakingSpecific;
    getEndTime(): number;
    setEndTime(value: number): StakingSpecific;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StakingSpecific.AsObject;
    static toObject(includeInstance: boolean, msg: StakingSpecific): StakingSpecific.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StakingSpecific, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StakingSpecific;
    static deserializeBinaryFromReader(message: StakingSpecific, reader: jspb.BinaryReader): StakingSpecific;
}

export namespace StakingSpecific {
    export type AsObject = {
        startTime: number,
        endTime: number,
    }
}

export class SelectedUTXO extends jspb.Message { 
    getTxId(): string;
    setTxId(value: string): SelectedUTXO;
    getVout(): number;
    setVout(value: number): SelectedUTXO;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SelectedUTXO.AsObject;
    static toObject(includeInstance: boolean, msg: SelectedUTXO): SelectedUTXO.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SelectedUTXO, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SelectedUTXO;
    static deserializeBinaryFromReader(message: SelectedUTXO, reader: jspb.BinaryReader): SelectedUTXO;
}

export namespace SelectedUTXO {
    export type AsObject = {
        txId: string,
        vout: number,
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
    getSectionIndex(): number;
    setSectionIndex(value: number): SubstrateMultisigTransaction;
    getMethodIndex(): number;
    setMethodIndex(value: number): SubstrateMultisigTransaction;
    getCallSectionIndex(): number;
    setCallSectionIndex(value: number): SubstrateMultisigTransaction;
    getCallMethodIndex(): number;
    setCallMethodIndex(value: number): SubstrateMultisigTransaction;
    getMaxWeight(): number;
    setMaxWeight(value: number): SubstrateMultisigTransaction;
    getProofSize(): number;
    setProofSize(value: number): SubstrateMultisigTransaction;
    getEra(): number;
    setEra(value: number): SubstrateMultisigTransaction;
    getSpecVersion(): number;
    setSpecVersion(value: number): SubstrateMultisigTransaction;
    getTransactionVersion(): number;
    setTransactionVersion(value: number): SubstrateMultisigTransaction;
    getGenesisHash(): string;
    setGenesisHash(value: string): SubstrateMultisigTransaction;

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
        sectionIndex: number,
        methodIndex: number,
        callSectionIndex: number,
        callMethodIndex: number,
        maxWeight: number,
        proofSize: number,
        era: number,
        specVersion: number,
        transactionVersion: number,
        genesisHash: string,
    }
}

export class NemMultisigTransaction extends jspb.Message { 
    getWalletId(): string;
    setWalletId(value: string): NemMultisigTransaction;
    getTransactionId(): string;
    setTransactionId(value: string): NemMultisigTransaction;
    getNemMultisigTransactionId(): string;
    setNemMultisigTransactionId(value: string): NemMultisigTransaction;
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
    getAccountId(): string;
    setAccountId(value: string): NemMultisigTransaction;

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
        txType: gincoinc_global_v1_gincoincglobalv1_enum_pb.NemTransactionType,
        data: string,
        signature: string,
        state: gincoinc_adamant_global_v1_adamantglobalv1_enum_pb.TransactionState,
        createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        updateTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        accountId: string,
    }
}

export class SymbolMultisigTransaction extends jspb.Message { 
    getWalletId(): string;
    setWalletId(value: string): SymbolMultisigTransaction;
    getTransactionId(): string;
    setTransactionId(value: string): SymbolMultisigTransaction;
    getSymbolMultisigTransactionId(): string;
    setSymbolMultisigTransactionId(value: string): SymbolMultisigTransaction;
    getTxType(): gincoinc_global_v1_gincoincglobalv1_enum_pb.SymbolTransactionType;
    setTxType(value: gincoinc_global_v1_gincoincglobalv1_enum_pb.SymbolTransactionType): SymbolMultisigTransaction;
    getData(): string;
    setData(value: string): SymbolMultisigTransaction;
    getSignature(): string;
    setSignature(value: string): SymbolMultisigTransaction;
    getState(): gincoinc_adamant_global_v1_adamantglobalv1_enum_pb.TransactionState;
    setState(value: gincoinc_adamant_global_v1_adamantglobalv1_enum_pb.TransactionState): SymbolMultisigTransaction;

    hasCreateTime(): boolean;
    clearCreateTime(): void;
    getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): SymbolMultisigTransaction;

    hasUpdateTime(): boolean;
    clearUpdateTime(): void;
    getUpdateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setUpdateTime(value?: google_protobuf_timestamp_pb.Timestamp): SymbolMultisigTransaction;
    getAccountId(): string;
    setAccountId(value: string): SymbolMultisigTransaction;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SymbolMultisigTransaction.AsObject;
    static toObject(includeInstance: boolean, msg: SymbolMultisigTransaction): SymbolMultisigTransaction.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SymbolMultisigTransaction, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SymbolMultisigTransaction;
    static deserializeBinaryFromReader(message: SymbolMultisigTransaction, reader: jspb.BinaryReader): SymbolMultisigTransaction;
}

export namespace SymbolMultisigTransaction {
    export type AsObject = {
        walletId: string,
        transactionId: string,
        symbolMultisigTransactionId: string,
        txType: gincoinc_global_v1_gincoincglobalv1_enum_pb.SymbolTransactionType,
        data: string,
        signature: string,
        state: gincoinc_adamant_global_v1_adamantglobalv1_enum_pb.TransactionState,
        createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        updateTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        accountId: string,
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
    getSignIndex(): number;
    setSignIndex(value: number): SignInfo;
    getNetwork(): gincoinc_global_v1_gincoincglobalv1_enum_pb.Network;
    setNetwork(value: gincoinc_global_v1_gincoincglobalv1_enum_pb.Network): SignInfo;

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
        signMessage: string,
        hdChange: number,
        hdIndex: number,
        signTxInputsList: Array<SignTxInput.AsObject>,
        signIndex: number,
        network: gincoinc_global_v1_gincoincglobalv1_enum_pb.Network,
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
    getNetwork(): gincoinc_global_v1_gincoincglobalv1_enum_pb.Network;
    setNetwork(value: gincoinc_global_v1_gincoincglobalv1_enum_pb.Network): Transfer;
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

    hasCosmosSpecific(): boolean;
    clearCosmosSpecific(): void;
    getCosmosSpecific(): TransferCosmosSpecific | undefined;
    setCosmosSpecific(value?: TransferCosmosSpecific): Transfer;
    getStakingEventType(): gincoinc_global_v1_gincoincglobalv1_enum_pb.StakingEventType;
    setStakingEventType(value: gincoinc_global_v1_gincoincglobalv1_enum_pb.StakingEventType): Transfer;
    getMethod(): string;
    setMethod(value: string): Transfer;

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
        network: gincoinc_global_v1_gincoincglobalv1_enum_pb.Network,
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
        cosmosSpecific?: TransferCosmosSpecific.AsObject,
        stakingEventType: gincoinc_global_v1_gincoincglobalv1_enum_pb.StakingEventType,
        method: string,
    }
}

export class TransferCosmosSpecific extends jspb.Message { 
    getType(): gincoinc_global_v1_gincoincglobalv1_enum_pb.CosmosMsgType;
    setType(value: gincoinc_global_v1_gincoincglobalv1_enum_pb.CosmosMsgType): TransferCosmosSpecific;
    getDelegateAmount(): number;
    setDelegateAmount(value: number): TransferCosmosSpecific;
    getRewardAmount(): number;
    setRewardAmount(value: number): TransferCosmosSpecific;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TransferCosmosSpecific.AsObject;
    static toObject(includeInstance: boolean, msg: TransferCosmosSpecific): TransferCosmosSpecific.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TransferCosmosSpecific, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TransferCosmosSpecific;
    static deserializeBinaryFromReader(message: TransferCosmosSpecific, reader: jspb.BinaryReader): TransferCosmosSpecific;
}

export namespace TransferCosmosSpecific {
    export type AsObject = {
        type: gincoinc_global_v1_gincoincglobalv1_enum_pb.CosmosMsgType,
        delegateAmount: number,
        rewardAmount: number,
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
    getNetwork(): gincoinc_global_v1_gincoincglobalv1_enum_pb.Network;
    setNetwork(value: gincoinc_global_v1_gincoincglobalv1_enum_pb.Network): LabeledAddress;
    getMessage(): string;
    setMessage(value: string): LabeledAddress;

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
        network: gincoinc_global_v1_gincoincglobalv1_enum_pb.Network,
        message: string,
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
    getProposedMessage(): string;
    setProposedMessage(value: string): LabeledAddressProposal;

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
        proposedMessage: string,
    }
}

export class Whitelist extends jspb.Message { 
    getWhitelistId(): string;
    setWhitelistId(value: string): Whitelist;
    getName(): string;
    setName(value: string): Whitelist;
    getCoin(): gincoinc_global_v1_gincoincglobalv1_enum_pb.Coin;
    setCoin(value: gincoinc_global_v1_gincoincglobalv1_enum_pb.Coin): Whitelist;
    getNetwork(): gincoinc_global_v1_gincoincglobalv1_enum_pb.Network;
    setNetwork(value: gincoinc_global_v1_gincoincglobalv1_enum_pb.Network): Whitelist;
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
        network: gincoinc_global_v1_gincoincglobalv1_enum_pb.Network,
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
    getNetwork(): gincoinc_global_v1_gincoincglobalv1_enum_pb.Network;
    setNetwork(value: gincoinc_global_v1_gincoincglobalv1_enum_pb.Network): TransferLimit;
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
        network: gincoinc_global_v1_gincoincglobalv1_enum_pb.Network,
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
    getNetwork(): gincoinc_global_v1_gincoincglobalv1_enum_pb.Network;
    setNetwork(value: gincoinc_global_v1_gincoincglobalv1_enum_pb.Network): Policy;

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
        network: gincoinc_global_v1_gincoincglobalv1_enum_pb.Network,
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
    getNetwork(): gincoinc_global_v1_gincoincglobalv1_enum_pb.Network;
    setNetwork(value: gincoinc_global_v1_gincoincglobalv1_enum_pb.Network): TotalBalanceByCoin;
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
        network: gincoinc_global_v1_gincoincglobalv1_enum_pb.Network,
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
    getNetwork(): gincoinc_global_v1_gincoincglobalv1_enum_pb.Network;
    setNetwork(value: gincoinc_global_v1_gincoincglobalv1_enum_pb.Network): TransferVolume;
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
        network: gincoinc_global_v1_gincoincglobalv1_enum_pb.Network,
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
    getNetwork(): gincoinc_global_v1_gincoincglobalv1_enum_pb.Network;
    setNetwork(value: gincoinc_global_v1_gincoincglobalv1_enum_pb.Network): WalletFlushSetting;
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
    getFlushThreshold(): number;
    setFlushThreshold(value: number): WalletFlushSetting;

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
        network: gincoinc_global_v1_gincoincglobalv1_enum_pb.Network,
        destinationWalletId: string,
        createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        updateTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        flushThreshold: number,
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
    getNetwork(): gincoinc_global_v1_gincoincglobalv1_enum_pb.Network;
    setNetwork(value: gincoinc_global_v1_gincoincglobalv1_enum_pb.Network): WalletGroup;
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
        network: gincoinc_global_v1_gincoincglobalv1_enum_pb.Network,
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
    getHdIndex(): number;
    setHdIndex(value: number): RequestSignature;

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
        hdIndex: number,
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

export class SymbolChildAddress extends jspb.Message { 
    getWalletId(): string;
    setWalletId(value: string): SymbolChildAddress;
    getAccountId(): string;
    setAccountId(value: string): SymbolChildAddress;
    getAddress(): string;
    setAddress(value: string): SymbolChildAddress;
    getBalance(): number;
    setBalance(value: number): SymbolChildAddress;
    getStringBalance(): string;
    setStringBalance(value: string): SymbolChildAddress;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SymbolChildAddress.AsObject;
    static toObject(includeInstance: boolean, msg: SymbolChildAddress): SymbolChildAddress.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SymbolChildAddress, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SymbolChildAddress;
    static deserializeBinaryFromReader(message: SymbolChildAddress, reader: jspb.BinaryReader): SymbolChildAddress;
}

export namespace SymbolChildAddress {
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
    getNetwork(): gincoinc_global_v1_gincoincglobalv1_enum_pb.Network;
    setNetwork(value: gincoinc_global_v1_gincoincglobalv1_enum_pb.Network): CallerAddress;

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
        network: gincoinc_global_v1_gincoincglobalv1_enum_pb.Network,
    }
}

export class FeeDepositAddress extends jspb.Message { 
    getAddress(): string;
    setAddress(value: string): FeeDepositAddress;
    getBalance(): number;
    setBalance(value: number): FeeDepositAddress;
    getStringBalance(): string;
    setStringBalance(value: string): FeeDepositAddress;
    getCoin(): gincoinc_global_v1_gincoincglobalv1_enum_pb.Coin;
    setCoin(value: gincoinc_global_v1_gincoincglobalv1_enum_pb.Coin): FeeDepositAddress;
    getNetwork(): gincoinc_global_v1_gincoincglobalv1_enum_pb.Network;
    setNetwork(value: gincoinc_global_v1_gincoincglobalv1_enum_pb.Network): FeeDepositAddress;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FeeDepositAddress.AsObject;
    static toObject(includeInstance: boolean, msg: FeeDepositAddress): FeeDepositAddress.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FeeDepositAddress, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FeeDepositAddress;
    static deserializeBinaryFromReader(message: FeeDepositAddress, reader: jspb.BinaryReader): FeeDepositAddress;
}

export namespace FeeDepositAddress {
    export type AsObject = {
        address: string,
        balance: number,
        stringBalance: string,
        coin: gincoinc_global_v1_gincoincglobalv1_enum_pb.Coin,
        network: gincoinc_global_v1_gincoincglobalv1_enum_pb.Network,
    }
}

export class CosmosDelegation extends jspb.Message { 
    getValidatorAddress(): string;
    setValidatorAddress(value: string): CosmosDelegation;
    getDelegateAmount(): number;
    setDelegateAmount(value: number): CosmosDelegation;
    getRewardAmount(): number;
    setRewardAmount(value: number): CosmosDelegation;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CosmosDelegation.AsObject;
    static toObject(includeInstance: boolean, msg: CosmosDelegation): CosmosDelegation.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CosmosDelegation, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CosmosDelegation;
    static deserializeBinaryFromReader(message: CosmosDelegation, reader: jspb.BinaryReader): CosmosDelegation;
}

export namespace CosmosDelegation {
    export type AsObject = {
        validatorAddress: string,
        delegateAmount: number,
        rewardAmount: number,
    }
}

export class StakingHistory extends jspb.Message { 
    getStakingHistoryId(): string;
    setStakingHistoryId(value: string): StakingHistory;
    getOwnerId(): string;
    setOwnerId(value: string): StakingHistory;
    getWalletId(): string;
    setWalletId(value: string): StakingHistory;
    getCoin(): gincoinc_global_v1_gincoincglobalv1_enum_pb.Coin;
    setCoin(value: gincoinc_global_v1_gincoincglobalv1_enum_pb.Coin): StakingHistory;
    getValidatorId(): string;
    setValidatorId(value: string): StakingHistory;
    getTxId(): string;
    setTxId(value: string): StakingHistory;
    getTxIndex(): number;
    setTxIndex(value: number): StakingHistory;
    getBlockHash(): string;
    setBlockHash(value: string): StakingHistory;
    getValue(): number;
    setValue(value: number): StakingHistory;
    getStringValue(): string;
    setStringValue(value: string): StakingHistory;
    getEventType(): gincoinc_global_v1_gincoincglobalv1_enum_pb.StakingEventType;
    setEventType(value: gincoinc_global_v1_gincoincglobalv1_enum_pb.StakingEventType): StakingHistory;
    getEventId(): string;
    setEventId(value: string): StakingHistory;

    hasEthereumSpecific(): boolean;
    clearEthereumSpecific(): void;
    getEthereumSpecific(): StakingHistoryEthereumSpecific | undefined;
    setEthereumSpecific(value?: StakingHistoryEthereumSpecific): StakingHistory;

    hasAvalancheSpecific(): boolean;
    clearAvalancheSpecific(): void;
    getAvalancheSpecific(): StakingHistoryAvalancheSpecific | undefined;
    setAvalancheSpecific(value?: StakingHistoryAvalancheSpecific): StakingHistory;

    hasCreateTime(): boolean;
    clearCreateTime(): void;
    getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): StakingHistory;

    hasUpdateTime(): boolean;
    clearUpdateTime(): void;
    getUpdateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setUpdateTime(value?: google_protobuf_timestamp_pb.Timestamp): StakingHistory;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StakingHistory.AsObject;
    static toObject(includeInstance: boolean, msg: StakingHistory): StakingHistory.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StakingHistory, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StakingHistory;
    static deserializeBinaryFromReader(message: StakingHistory, reader: jspb.BinaryReader): StakingHistory;
}

export namespace StakingHistory {
    export type AsObject = {
        stakingHistoryId: string,
        ownerId: string,
        walletId: string,
        coin: gincoinc_global_v1_gincoincglobalv1_enum_pb.Coin,
        validatorId: string,
        txId: string,
        txIndex: number,
        blockHash: string,
        value: number,
        stringValue: string,
        eventType: gincoinc_global_v1_gincoincglobalv1_enum_pb.StakingEventType,
        eventId: string,
        ethereumSpecific?: StakingHistoryEthereumSpecific.AsObject,
        avalancheSpecific?: StakingHistoryAvalancheSpecific.AsObject,
        createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        updateTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}

export class StakingHistoryEthereumSpecific extends jspb.Message { 
    getEventId(): string;
    setEventId(value: string): StakingHistoryEthereumSpecific;
    getAddress(): string;
    setAddress(value: string): StakingHistoryEthereumSpecific;
    getWithdrawalIndex(): number;
    setWithdrawalIndex(value: number): StakingHistoryEthereumSpecific;
    getValidatorIndex(): number;
    setValidatorIndex(value: number): StakingHistoryEthereumSpecific;
    getBlockNumber(): number;
    setBlockNumber(value: number): StakingHistoryEthereumSpecific;

    hasBlockTime(): boolean;
    clearBlockTime(): void;
    getBlockTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setBlockTime(value?: google_protobuf_timestamp_pb.Timestamp): StakingHistoryEthereumSpecific;
    getHistoryType(): gincoinc_global_v1_gincoincglobalv1_enum_pb.EthereumStakingHistoryType;
    setHistoryType(value: gincoinc_global_v1_gincoincglobalv1_enum_pb.EthereumStakingHistoryType): StakingHistoryEthereumSpecific;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StakingHistoryEthereumSpecific.AsObject;
    static toObject(includeInstance: boolean, msg: StakingHistoryEthereumSpecific): StakingHistoryEthereumSpecific.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StakingHistoryEthereumSpecific, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StakingHistoryEthereumSpecific;
    static deserializeBinaryFromReader(message: StakingHistoryEthereumSpecific, reader: jspb.BinaryReader): StakingHistoryEthereumSpecific;
}

export namespace StakingHistoryEthereumSpecific {
    export type AsObject = {
        eventId: string,
        address: string,
        withdrawalIndex: number,
        validatorIndex: number,
        blockNumber: number,
        blockTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        historyType: gincoinc_global_v1_gincoincglobalv1_enum_pb.EthereumStakingHistoryType,
    }
}

export class StakingHistoryAvalancheSpecific extends jspb.Message { 
    getStartTime(): number;
    setStartTime(value: number): StakingHistoryAvalancheSpecific;
    getEndTime(): number;
    setEndTime(value: number): StakingHistoryAvalancheSpecific;
    getRewardsOwnerThreshold(): number;
    setRewardsOwnerThreshold(value: number): StakingHistoryAvalancheSpecific;
    clearRewardsOwnerAddressesList(): void;
    getRewardsOwnerAddressesList(): Array<string>;
    setRewardsOwnerAddressesList(value: Array<string>): StakingHistoryAvalancheSpecific;
    addRewardsOwnerAddresses(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StakingHistoryAvalancheSpecific.AsObject;
    static toObject(includeInstance: boolean, msg: StakingHistoryAvalancheSpecific): StakingHistoryAvalancheSpecific.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StakingHistoryAvalancheSpecific, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StakingHistoryAvalancheSpecific;
    static deserializeBinaryFromReader(message: StakingHistoryAvalancheSpecific, reader: jspb.BinaryReader): StakingHistoryAvalancheSpecific;
}

export namespace StakingHistoryAvalancheSpecific {
    export type AsObject = {
        startTime: number,
        endTime: number,
        rewardsOwnerThreshold: number,
        rewardsOwnerAddressesList: Array<string>,
    }
}

export class StakingValidator extends jspb.Message { 
    getStakingValidatorId(): string;
    setStakingValidatorId(value: string): StakingValidator;
    getOwnerId(): string;
    setOwnerId(value: string): StakingValidator;
    getWalletId(): string;
    setWalletId(value: string): StakingValidator;
    getCoin(): gincoinc_global_v1_gincoincglobalv1_enum_pb.Coin;
    setCoin(value: gincoinc_global_v1_gincoincglobalv1_enum_pb.Coin): StakingValidator;
    getValidatorId(): string;
    setValidatorId(value: string): StakingValidator;
    getRecipientWalletId(): string;
    setRecipientWalletId(value: string): StakingValidator;
    getStatus(): gincoinc_global_v1_gincoincglobalv1_enum_pb.StakingValidatorStatus;
    setStatus(value: gincoinc_global_v1_gincoincglobalv1_enum_pb.StakingValidatorStatus): StakingValidator;
    getValue(): number;
    setValue(value: number): StakingValidator;
    getStringValue(): string;
    setStringValue(value: string): StakingValidator;
    getExpirationTime(): number;
    setExpirationTime(value: number): StakingValidator;

    hasCreateTime(): boolean;
    clearCreateTime(): void;
    getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): StakingValidator;

    hasUpdateTime(): boolean;
    clearUpdateTime(): void;
    getUpdateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setUpdateTime(value?: google_protobuf_timestamp_pb.Timestamp): StakingValidator;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StakingValidator.AsObject;
    static toObject(includeInstance: boolean, msg: StakingValidator): StakingValidator.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StakingValidator, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StakingValidator;
    static deserializeBinaryFromReader(message: StakingValidator, reader: jspb.BinaryReader): StakingValidator;
}

export namespace StakingValidator {
    export type AsObject = {
        stakingValidatorId: string,
        ownerId: string,
        walletId: string,
        coin: gincoinc_global_v1_gincoincglobalv1_enum_pb.Coin,
        validatorId: string,
        recipientWalletId: string,
        status: gincoinc_global_v1_gincoincglobalv1_enum_pb.StakingValidatorStatus,
        value: number,
        stringValue: string,
        expirationTime: number,
        createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        updateTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}

export class NFT extends jspb.Message { 
    getAssetType(): AssetType;
    setAssetType(value: AssetType): NFT;
    getName(): string;
    setName(value: string): NFT;
    getSymbol(): string;
    setSymbol(value: string): NFT;
    getTokenId(): string;
    setTokenId(value: string): NFT;
    getTokenUri(): string;
    setTokenUri(value: string): NFT;
    getTokenData(): string;
    setTokenData(value: string): NFT;
    getTokenJsonMetadata(): string;
    setTokenJsonMetadata(value: string): NFT;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NFT.AsObject;
    static toObject(includeInstance: boolean, msg: NFT): NFT.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NFT, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NFT;
    static deserializeBinaryFromReader(message: NFT, reader: jspb.BinaryReader): NFT;
}

export namespace NFT {
    export type AsObject = {
        assetType: AssetType,
        name: string,
        symbol: string,
        tokenId: string,
        tokenUri: string,
        tokenData: string,
        tokenJsonMetadata: string,
    }
}

export class PreTransactionThreshold extends jspb.Message { 
    getPreTransactionThresholdId(): string;
    setPreTransactionThresholdId(value: string): PreTransactionThreshold;
    getCoin(): gincoinc_global_v1_gincoincglobalv1_enum_pb.Coin;
    setCoin(value: gincoinc_global_v1_gincoincglobalv1_enum_pb.Coin): PreTransactionThreshold;
    getNetwork(): gincoinc_global_v1_gincoincglobalv1_enum_pb.Network;
    setNetwork(value: gincoinc_global_v1_gincoincglobalv1_enum_pb.Network): PreTransactionThreshold;
    getValue(): number;
    setValue(value: number): PreTransactionThreshold;

    hasProposal(): boolean;
    clearProposal(): void;
    getProposal(): PreTransactionThresholdProposal | undefined;
    setProposal(value?: PreTransactionThresholdProposal): PreTransactionThreshold;

    hasCreateTime(): boolean;
    clearCreateTime(): void;
    getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): PreTransactionThreshold;

    hasUpdateTime(): boolean;
    clearUpdateTime(): void;
    getUpdateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setUpdateTime(value?: google_protobuf_timestamp_pb.Timestamp): PreTransactionThreshold;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PreTransactionThreshold.AsObject;
    static toObject(includeInstance: boolean, msg: PreTransactionThreshold): PreTransactionThreshold.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PreTransactionThreshold, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PreTransactionThreshold;
    static deserializeBinaryFromReader(message: PreTransactionThreshold, reader: jspb.BinaryReader): PreTransactionThreshold;
}

export namespace PreTransactionThreshold {
    export type AsObject = {
        preTransactionThresholdId: string,
        coin: gincoinc_global_v1_gincoincglobalv1_enum_pb.Coin,
        network: gincoinc_global_v1_gincoincglobalv1_enum_pb.Network,
        value: number,
        proposal?: PreTransactionThresholdProposal.AsObject,
        createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        updateTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}

export class PreTransactionThresholdProposal extends jspb.Message { 
    getPreTransactionThresholdId(): string;
    setPreTransactionThresholdId(value: string): PreTransactionThresholdProposal;
    getProposalId(): string;
    setProposalId(value: string): PreTransactionThresholdProposal;
    getRequesterAccountId(): string;
    setRequesterAccountId(value: string): PreTransactionThresholdProposal;
    getRequesterName(): string;
    setRequesterName(value: string): PreTransactionThresholdProposal;
    getApproverAccountId(): string;
    setApproverAccountId(value: string): PreTransactionThresholdProposal;
    getApproverName(): string;
    setApproverName(value: string): PreTransactionThresholdProposal;
    getProposedValue(): number;
    setProposedValue(value: number): PreTransactionThresholdProposal;
    getIsReviewed(): boolean;
    setIsReviewed(value: boolean): PreTransactionThresholdProposal;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PreTransactionThresholdProposal.AsObject;
    static toObject(includeInstance: boolean, msg: PreTransactionThresholdProposal): PreTransactionThresholdProposal.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PreTransactionThresholdProposal, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PreTransactionThresholdProposal;
    static deserializeBinaryFromReader(message: PreTransactionThresholdProposal, reader: jspb.BinaryReader): PreTransactionThresholdProposal;
}

export namespace PreTransactionThresholdProposal {
    export type AsObject = {
        preTransactionThresholdId: string,
        proposalId: string,
        requesterAccountId: string,
        requesterName: string,
        approverAccountId: string,
        approverName: string,
        proposedValue: number,
        isReviewed: boolean,
    }
}

export class BlacklistAddress extends jspb.Message { 
    getBlacklistAddressId(): string;
    setBlacklistAddressId(value: string): BlacklistAddress;
    getAppliedProposalId(): string;
    setAppliedProposalId(value: string): BlacklistAddress;
    getPendingProposalId(): string;
    setPendingProposalId(value: string): BlacklistAddress;
    getNetwork(): gincoinc_global_v1_gincoincglobalv1_enum_pb.Network;
    setNetwork(value: gincoinc_global_v1_gincoincglobalv1_enum_pb.Network): BlacklistAddress;
    getAddress(): string;
    setAddress(value: string): BlacklistAddress;
    getIsActivated(): boolean;
    setIsActivated(value: boolean): BlacklistAddress;
    getStatus(): gincoinc_adamant_global_v1_adamantglobalv1_enum_pb.BlacklistAddressStatus;
    setStatus(value: gincoinc_adamant_global_v1_adamantglobalv1_enum_pb.BlacklistAddressStatus): BlacklistAddress;
    getExternalId(): string;
    setExternalId(value: string): BlacklistAddress;

    hasCreateTime(): boolean;
    clearCreateTime(): void;
    getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): BlacklistAddress;

    hasUpdateTime(): boolean;
    clearUpdateTime(): void;
    getUpdateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setUpdateTime(value?: google_protobuf_timestamp_pb.Timestamp): BlacklistAddress;

    hasFileId(): boolean;
    clearFileId(): void;
    getFileId(): string | undefined;
    setFileId(value: string): BlacklistAddress;

    hasFileName(): boolean;
    clearFileName(): void;
    getFileName(): string | undefined;
    setFileName(value: string): BlacklistAddress;

    hasAppliedProposal(): boolean;
    clearAppliedProposal(): void;
    getAppliedProposal(): BlacklistAddressProposal | undefined;
    setAppliedProposal(value?: BlacklistAddressProposal): BlacklistAddress;

    hasPendingProposal(): boolean;
    clearPendingProposal(): void;
    getPendingProposal(): BlacklistAddressProposal | undefined;
    setPendingProposal(value?: BlacklistAddressProposal): BlacklistAddress;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BlacklistAddress.AsObject;
    static toObject(includeInstance: boolean, msg: BlacklistAddress): BlacklistAddress.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BlacklistAddress, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BlacklistAddress;
    static deserializeBinaryFromReader(message: BlacklistAddress, reader: jspb.BinaryReader): BlacklistAddress;
}

export namespace BlacklistAddress {
    export type AsObject = {
        blacklistAddressId: string,
        appliedProposalId: string,
        pendingProposalId: string,
        network: gincoinc_global_v1_gincoincglobalv1_enum_pb.Network,
        address: string,
        isActivated: boolean,
        status: gincoinc_adamant_global_v1_adamantglobalv1_enum_pb.BlacklistAddressStatus,
        externalId: string,
        createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        updateTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        fileId?: string,
        fileName?: string,
        appliedProposal?: BlacklistAddressProposal.AsObject,
        pendingProposal?: BlacklistAddressProposal.AsObject,
    }
}

export class BlacklistAddressProposal extends jspb.Message { 
    getBlacklistAddressProposalId(): string;
    setBlacklistAddressProposalId(value: string): BlacklistAddressProposal;
    getBlacklistAddressId(): string;
    setBlacklistAddressId(value: string): BlacklistAddressProposal;
    getRequesterAccountId(): string;
    setRequesterAccountId(value: string): BlacklistAddressProposal;
    getRequesterName(): string;
    setRequesterName(value: string): BlacklistAddressProposal;
    getApproverAccountId(): string;
    setApproverAccountId(value: string): BlacklistAddressProposal;
    getApproverName(): string;
    setApproverName(value: string): BlacklistAddressProposal;

    hasDiff(): boolean;
    clearDiff(): void;
    getDiff(): BlacklistAddressDiff | undefined;
    setDiff(value?: BlacklistAddressDiff): BlacklistAddressProposal;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BlacklistAddressProposal.AsObject;
    static toObject(includeInstance: boolean, msg: BlacklistAddressProposal): BlacklistAddressProposal.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BlacklistAddressProposal, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BlacklistAddressProposal;
    static deserializeBinaryFromReader(message: BlacklistAddressProposal, reader: jspb.BinaryReader): BlacklistAddressProposal;
}

export namespace BlacklistAddressProposal {
    export type AsObject = {
        blacklistAddressProposalId: string,
        blacklistAddressId: string,
        requesterAccountId: string,
        requesterName: string,
        approverAccountId: string,
        approverName: string,
        diff?: BlacklistAddressDiff.AsObject,
    }
}

export class BlacklistAddressDiff extends jspb.Message { 
    getIsActivated(): boolean;
    setIsActivated(value: boolean): BlacklistAddressDiff;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BlacklistAddressDiff.AsObject;
    static toObject(includeInstance: boolean, msg: BlacklistAddressDiff): BlacklistAddressDiff.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BlacklistAddressDiff, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BlacklistAddressDiff;
    static deserializeBinaryFromReader(message: BlacklistAddressDiff, reader: jspb.BinaryReader): BlacklistAddressDiff;
}

export namespace BlacklistAddressDiff {
    export type AsObject = {
        isActivated: boolean,
    }
}

export class BlacklistAddressFile extends jspb.Message { 
    getFileId(): string;
    setFileId(value: string): BlacklistAddressFile;
    getFileName(): string;
    setFileName(value: string): BlacklistAddressFile;
    getNetwork(): gincoinc_global_v1_gincoincglobalv1_enum_pb.Network;
    setNetwork(value: gincoinc_global_v1_gincoincglobalv1_enum_pb.Network): BlacklistAddressFile;
    getStatus(): gincoinc_adamant_global_v1_adamantglobalv1_enum_pb.BlacklistAddressStatus;
    setStatus(value: gincoinc_adamant_global_v1_adamantglobalv1_enum_pb.BlacklistAddressStatus): BlacklistAddressFile;
    getAddressCount(): number;
    setAddressCount(value: number): BlacklistAddressFile;
    getRequesterAccountId(): string;
    setRequesterAccountId(value: string): BlacklistAddressFile;
    getRequesterName(): string;
    setRequesterName(value: string): BlacklistAddressFile;
    getApproverAccountId(): string;
    setApproverAccountId(value: string): BlacklistAddressFile;
    getApproverName(): string;
    setApproverName(value: string): BlacklistAddressFile;

    hasCreateTime(): boolean;
    clearCreateTime(): void;
    getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): BlacklistAddressFile;

    hasUpdateTime(): boolean;
    clearUpdateTime(): void;
    getUpdateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setUpdateTime(value?: google_protobuf_timestamp_pb.Timestamp): BlacklistAddressFile;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BlacklistAddressFile.AsObject;
    static toObject(includeInstance: boolean, msg: BlacklistAddressFile): BlacklistAddressFile.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BlacklistAddressFile, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BlacklistAddressFile;
    static deserializeBinaryFromReader(message: BlacklistAddressFile, reader: jspb.BinaryReader): BlacklistAddressFile;
}

export namespace BlacklistAddressFile {
    export type AsObject = {
        fileId: string,
        fileName: string,
        network: gincoinc_global_v1_gincoincglobalv1_enum_pb.Network,
        status: gincoinc_adamant_global_v1_adamantglobalv1_enum_pb.BlacklistAddressStatus,
        addressCount: number,
        requesterAccountId: string,
        requesterName: string,
        approverAccountId: string,
        approverName: string,
        createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        updateTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}

export class CreateTransactionSuiSpecific extends jspb.Message { 
    getSendAll(): boolean;
    setSendAll(value: boolean): CreateTransactionSuiSpecific;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateTransactionSuiSpecific.AsObject;
    static toObject(includeInstance: boolean, msg: CreateTransactionSuiSpecific): CreateTransactionSuiSpecific.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateTransactionSuiSpecific, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateTransactionSuiSpecific;
    static deserializeBinaryFromReader(message: CreateTransactionSuiSpecific, reader: jspb.BinaryReader): CreateTransactionSuiSpecific;
}

export namespace CreateTransactionSuiSpecific {
    export type AsObject = {
        sendAll: boolean,
    }
}

export enum AssetType {
    ASSET_TYPE_INVALID = 0,
    ASSET_TYPE_ERC721 = 1,
}
