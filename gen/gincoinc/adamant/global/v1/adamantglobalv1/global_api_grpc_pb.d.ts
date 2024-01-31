// package: adamant.global.v1
// file: gincoinc/adamant/global/v1/adamantglobalv1/global_api.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb from "../../../../../gincoinc/adamant/global/v1/adamantglobalv1/global_api_pb";
import * as gincoinc_adamant_global_v1_adamantglobalv1_audit_logger_pb from "../../../../../gincoinc/adamant/global/v1/adamantglobalv1/audit_logger_pb";
import * as gincoinc_adamant_global_v1_adamantglobalv1_enum_pb from "../../../../../gincoinc/adamant/global/v1/adamantglobalv1/enum_pb";
import * as gincoinc_adamant_global_v1_adamantglobalv1_model_pb from "../../../../../gincoinc/adamant/global/v1/adamantglobalv1/model_pb";
import * as gincoinc_global_v1_gincoincglobalv1_enum_pb from "../../../../../gincoinc/global/v1/gincoincglobalv1/enum_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as validate_validate_pb from "../../../../../validate/validate_pb";

interface IGlobalAPIService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    createWallet: IGlobalAPIService_ICreateWallet;
    getWallet: IGlobalAPIService_IGetWallet;
    cancelWallet: IGlobalAPIService_ICancelWallet;
    archiveWallet: IGlobalAPIService_IArchiveWallet;
    unArchiveWallet: IGlobalAPIService_IUnArchiveWallet;
    listWallets: IGlobalAPIService_IListWallets;
    listWalletsByFilter: IGlobalAPIService_IListWalletsByFilter;
    listBaseWallets: IGlobalAPIService_IListBaseWallets;
    listStakingWalletsByFilter: IGlobalAPIService_IListStakingWalletsByFilter;
    updateWalletName: IGlobalAPIService_IUpdateWalletName;
    updateWalletValidation: IGlobalAPIService_IUpdateWalletValidation;
    updateWalletPolicy: IGlobalAPIService_IUpdateWalletPolicy;
    reviewWalletProposal: IGlobalAPIService_IReviewWalletProposal;
    flushBalance: IGlobalAPIService_IFlushBalance;
    createWalletGroup: IGlobalAPIService_ICreateWalletGroup;
    updateWalletGroupName: IGlobalAPIService_IUpdateWalletGroupName;
    updateWalletGroup: IGlobalAPIService_IUpdateWalletGroup;
    getWalletGroup: IGlobalAPIService_IGetWalletGroup;
    listWalletGroups: IGlobalAPIService_IListWalletGroups;
    updateDestinationWalletID: IGlobalAPIService_IUpdateDestinationWalletID;
    getCosmosBalance: IGlobalAPIService_IGetCosmosBalance;
    listCosmosDelegateHistories: IGlobalAPIService_IListCosmosDelegateHistories;
    enableUTXO: IGlobalAPIService_IEnableUTXO;
    disableUTXO: IGlobalAPIService_IDisableUTXO;
    updateWalletIsStakingAvailable: IGlobalAPIService_IUpdateWalletIsStakingAvailable;
    refreshStakingWalletClaimableReward: IGlobalAPIService_IRefreshStakingWalletClaimableReward;
    approveWallet: IGlobalAPIService_IApproveWallet;
    approveTransaction: IGlobalAPIService_IApproveTransaction;
    createAddress: IGlobalAPIService_ICreateAddress;
    getAddress: IGlobalAPIService_IGetAddress;
    getAddressByAddress: IGlobalAPIService_IGetAddressByAddress;
    getAddressByAddressCoin: IGlobalAPIService_IGetAddressByAddressCoin;
    getAddressByIndex: IGlobalAPIService_IGetAddressByIndex;
    listAddresses: IGlobalAPIService_IListAddresses;
    listAddressesWithBalance: IGlobalAPIService_IListAddressesWithBalance;
    updateAddressBalance: IGlobalAPIService_IUpdateAddressBalance;
    getEthereumFeeAddress: IGlobalAPIService_IGetEthereumFeeAddress;
    listSubstrateChildAddresses: IGlobalAPIService_IListSubstrateChildAddresses;
    listSymbolChildAddresses: IGlobalAPIService_IListSymbolChildAddresses;
    listIOSTChildAccounts: IGlobalAPIService_IListIOSTChildAccounts;
    importAddress: IGlobalAPIService_IImportAddress;
    listCallers: IGlobalAPIService_IListCallers;
    listFeeDeposits: IGlobalAPIService_IListFeeDeposits;
    registerKey: IGlobalAPIService_IRegisterKey;
    createTransaction: IGlobalAPIService_ICreateTransaction;
    createXRPInitTransactions: IGlobalAPIService_ICreateXRPInitTransactions;
    signTransaction: IGlobalAPIService_ISignTransaction;
    signXRPInitTransactions: IGlobalAPIService_ISignXRPInitTransactions;
    sendTransaction: IGlobalAPIService_ISendTransaction;
    sendXRPInitTransactions: IGlobalAPIService_ISendXRPInitTransactions;
    cancelTransaction: IGlobalAPIService_ICancelTransaction;
    replaceTransaction: IGlobalAPIService_IReplaceTransaction;
    getTransaction: IGlobalAPIService_IGetTransaction;
    getTransactionByTxID: IGlobalAPIService_IGetTransactionByTxID;
    listTransactions: IGlobalAPIService_IListTransactions;
    listTransactionsByFilter: IGlobalAPIService_IListTransactionsByFilter;
    getSignInfo: IGlobalAPIService_IGetSignInfo;
    listSignInfo: IGlobalAPIService_IListSignInfo;
    listXRPInitSignInfo: IGlobalAPIService_IListXRPInitSignInfo;
    listTransfers: IGlobalAPIService_IListTransfers;
    listTransfersByFilter: IGlobalAPIService_IListTransfersByFilter;
    getRateSnapshot: IGlobalAPIService_IGetRateSnapshot;
    getLatestRateSnapshot: IGlobalAPIService_IGetLatestRateSnapshot;
    setRates: IGlobalAPIService_ISetRates;
    setDefaultRates: IGlobalAPIService_ISetDefaultRates;
    createLabeledAddress: IGlobalAPIService_ICreateLabeledAddress;
    getLabeledAddress: IGlobalAPIService_IGetLabeledAddress;
    listLabeledAddresses: IGlobalAPIService_IListLabeledAddresses;
    listLabeledAddressesByFilter: IGlobalAPIService_IListLabeledAddressesByFilter;
    isDeletableLabeledAddress: IGlobalAPIService_IIsDeletableLabeledAddress;
    updateLabeledAddress: IGlobalAPIService_IUpdateLabeledAddress;
    deleteAddress: IGlobalAPIService_IDeleteAddress;
    reviewLabeledAddressProposal: IGlobalAPIService_IReviewLabeledAddressProposal;
    createWhitelist: IGlobalAPIService_ICreateWhitelist;
    getWhitelist: IGlobalAPIService_IGetWhitelist;
    listWhitelists: IGlobalAPIService_IListWhitelists;
    listWhitelistsByFilter: IGlobalAPIService_IListWhitelistsByFilter;
    isDeletableWhitelist: IGlobalAPIService_IIsDeletableWhitelist;
    updateWhitelist: IGlobalAPIService_IUpdateWhitelist;
    updateWhitelistAddresses: IGlobalAPIService_IUpdateWhitelistAddresses;
    deleteWhitelist: IGlobalAPIService_IDeleteWhitelist;
    createTransferLimit: IGlobalAPIService_ICreateTransferLimit;
    getTransferLimit: IGlobalAPIService_IGetTransferLimit;
    listTransferLimits: IGlobalAPIService_IListTransferLimits;
    isDeletableTransferLimit: IGlobalAPIService_IIsDeletableTransferLimit;
    updateTransferLimit: IGlobalAPIService_IUpdateTransferLimit;
    updateTransferLimitName: IGlobalAPIService_IUpdateTransferLimitName;
    deleteTransferLimit: IGlobalAPIService_IDeleteTransferLimit;
    reviewTransferLimitProposal: IGlobalAPIService_IReviewTransferLimitProposal;
    createPolicy: IGlobalAPIService_ICreatePolicy;
    getPolicy: IGlobalAPIService_IGetPolicy;
    listPolicies: IGlobalAPIService_IListPolicies;
    listPoliciesByFilter: IGlobalAPIService_IListPoliciesByFilter;
    isDeletablePolicy: IGlobalAPIService_IIsDeletablePolicy;
    updatePolicy: IGlobalAPIService_IUpdatePolicy;
    deletePolicy: IGlobalAPIService_IDeletePolicy;
    reviewPolicyProposal: IGlobalAPIService_IReviewPolicyProposal;
    getSpendableBalance: IGlobalAPIService_IGetSpendableBalance;
    getTotalBalance: IGlobalAPIService_IGetTotalBalance;
    listBalanceSnapshots: IGlobalAPIService_IListBalanceSnapshots;
    calculateFee: IGlobalAPIService_ICalculateFee;
    getMembersDeactivatabilities: IGlobalAPIService_IGetMembersDeactivatabilities;
    getRecommendedFeeRate: IGlobalAPIService_IGetRecommendedFeeRate;
    validateAddress: IGlobalAPIService_IValidateAddress;
    listAuditLogs: IGlobalAPIService_IListAuditLogs;
    listForwardingThresholds: IGlobalAPIService_IListForwardingThresholds;
    upsertForwardingThreshold: IGlobalAPIService_IUpsertForwardingThreshold;
    listStakingHistoriesByFilter: IGlobalAPIService_IListStakingHistoriesByFilter;
    listStakingValidatorsByFilter: IGlobalAPIService_IListStakingValidatorsByFilter;
}

interface IGlobalAPIService_ICreateWallet extends grpc.MethodDefinition<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateWalletRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateWalletResponse> {
    path: "/adamant.global.v1.GlobalAPI/CreateWallet";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateWalletRequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateWalletRequest>;
    responseSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateWalletResponse>;
    responseDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateWalletResponse>;
}
interface IGlobalAPIService_IGetWallet extends grpc.MethodDefinition<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetWalletRequest, gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Wallet> {
    path: "/adamant.global.v1.GlobalAPI/GetWallet";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetWalletRequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetWalletRequest>;
    responseSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Wallet>;
    responseDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Wallet>;
}
interface IGlobalAPIService_ICancelWallet extends grpc.MethodDefinition<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CancelWalletRequest, google_protobuf_empty_pb.Empty> {
    path: "/adamant.global.v1.GlobalAPI/CancelWallet";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CancelWalletRequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CancelWalletRequest>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface IGlobalAPIService_IArchiveWallet extends grpc.MethodDefinition<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ArchiveWalletRequest, google_protobuf_empty_pb.Empty> {
    path: "/adamant.global.v1.GlobalAPI/ArchiveWallet";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ArchiveWalletRequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ArchiveWalletRequest>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface IGlobalAPIService_IUnArchiveWallet extends grpc.MethodDefinition<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UnArchiveWalletRequest, google_protobuf_empty_pb.Empty> {
    path: "/adamant.global.v1.GlobalAPI/UnArchiveWallet";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UnArchiveWalletRequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UnArchiveWalletRequest>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface IGlobalAPIService_IListWallets extends grpc.MethodDefinition<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListWalletsRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListWalletsResponse> {
    path: "/adamant.global.v1.GlobalAPI/ListWallets";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListWalletsRequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListWalletsRequest>;
    responseSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListWalletsResponse>;
    responseDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListWalletsResponse>;
}
interface IGlobalAPIService_IListWalletsByFilter extends grpc.MethodDefinition<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListWalletsByFilterRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListWalletsResponse> {
    path: "/adamant.global.v1.GlobalAPI/ListWalletsByFilter";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListWalletsByFilterRequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListWalletsByFilterRequest>;
    responseSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListWalletsResponse>;
    responseDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListWalletsResponse>;
}
interface IGlobalAPIService_IListBaseWallets extends grpc.MethodDefinition<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListBaseWalletsRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListBaseWalletsResponse> {
    path: "/adamant.global.v1.GlobalAPI/ListBaseWallets";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListBaseWalletsRequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListBaseWalletsRequest>;
    responseSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListBaseWalletsResponse>;
    responseDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListBaseWalletsResponse>;
}
interface IGlobalAPIService_IListStakingWalletsByFilter extends grpc.MethodDefinition<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListStakingWalletsByFilterRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListStakingWalletsResponse> {
    path: "/adamant.global.v1.GlobalAPI/ListStakingWalletsByFilter";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListStakingWalletsByFilterRequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListStakingWalletsByFilterRequest>;
    responseSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListStakingWalletsResponse>;
    responseDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListStakingWalletsResponse>;
}
interface IGlobalAPIService_IUpdateWalletName extends grpc.MethodDefinition<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpdateWalletNameRequest, google_protobuf_empty_pb.Empty> {
    path: "/adamant.global.v1.GlobalAPI/UpdateWalletName";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpdateWalletNameRequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpdateWalletNameRequest>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface IGlobalAPIService_IUpdateWalletValidation extends grpc.MethodDefinition<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpdateWalletValidationRequest, google_protobuf_empty_pb.Empty> {
    path: "/adamant.global.v1.GlobalAPI/UpdateWalletValidation";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpdateWalletValidationRequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpdateWalletValidationRequest>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface IGlobalAPIService_IUpdateWalletPolicy extends grpc.MethodDefinition<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpdateWalletPolicyRequest, google_protobuf_empty_pb.Empty> {
    path: "/adamant.global.v1.GlobalAPI/UpdateWalletPolicy";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpdateWalletPolicyRequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpdateWalletPolicyRequest>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface IGlobalAPIService_IReviewWalletProposal extends grpc.MethodDefinition<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ReviewWalletProposalRequest, google_protobuf_empty_pb.Empty> {
    path: "/adamant.global.v1.GlobalAPI/ReviewWalletProposal";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ReviewWalletProposalRequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ReviewWalletProposalRequest>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface IGlobalAPIService_IFlushBalance extends grpc.MethodDefinition<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.FlushBalanceRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.FlushBalanceResponse> {
    path: "/adamant.global.v1.GlobalAPI/FlushBalance";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.FlushBalanceRequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.FlushBalanceRequest>;
    responseSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.FlushBalanceResponse>;
    responseDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.FlushBalanceResponse>;
}
interface IGlobalAPIService_ICreateWalletGroup extends grpc.MethodDefinition<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateWalletGroupRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateWalletGroupResponse> {
    path: "/adamant.global.v1.GlobalAPI/CreateWalletGroup";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateWalletGroupRequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateWalletGroupRequest>;
    responseSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateWalletGroupResponse>;
    responseDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateWalletGroupResponse>;
}
interface IGlobalAPIService_IUpdateWalletGroupName extends grpc.MethodDefinition<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpdateWalletGroupNameRequest, google_protobuf_empty_pb.Empty> {
    path: "/adamant.global.v1.GlobalAPI/UpdateWalletGroupName";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpdateWalletGroupNameRequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpdateWalletGroupNameRequest>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface IGlobalAPIService_IUpdateWalletGroup extends grpc.MethodDefinition<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpdateWalletGroupRequest, google_protobuf_empty_pb.Empty> {
    path: "/adamant.global.v1.GlobalAPI/UpdateWalletGroup";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpdateWalletGroupRequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpdateWalletGroupRequest>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface IGlobalAPIService_IGetWalletGroup extends grpc.MethodDefinition<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetWalletGroupRequest, gincoinc_adamant_global_v1_adamantglobalv1_model_pb.WalletGroup> {
    path: "/adamant.global.v1.GlobalAPI/GetWalletGroup";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetWalletGroupRequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetWalletGroupRequest>;
    responseSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.WalletGroup>;
    responseDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.WalletGroup>;
}
interface IGlobalAPIService_IListWalletGroups extends grpc.MethodDefinition<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListWalletGroupsRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListWalletGroupsResponse> {
    path: "/adamant.global.v1.GlobalAPI/ListWalletGroups";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListWalletGroupsRequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListWalletGroupsRequest>;
    responseSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListWalletGroupsResponse>;
    responseDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListWalletGroupsResponse>;
}
interface IGlobalAPIService_IUpdateDestinationWalletID extends grpc.MethodDefinition<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpdateDestinationWalletIDRequest, google_protobuf_empty_pb.Empty> {
    path: "/adamant.global.v1.GlobalAPI/UpdateDestinationWalletID";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpdateDestinationWalletIDRequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpdateDestinationWalletIDRequest>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface IGlobalAPIService_IGetCosmosBalance extends grpc.MethodDefinition<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetCosmosBalanceRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetCosmosBalanceResponse> {
    path: "/adamant.global.v1.GlobalAPI/GetCosmosBalance";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetCosmosBalanceRequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetCosmosBalanceRequest>;
    responseSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetCosmosBalanceResponse>;
    responseDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetCosmosBalanceResponse>;
}
interface IGlobalAPIService_IListCosmosDelegateHistories extends grpc.MethodDefinition<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListCosmosDelegateHistoriesRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListCosmosDelegateHistoriesResponse> {
    path: "/adamant.global.v1.GlobalAPI/ListCosmosDelegateHistories";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListCosmosDelegateHistoriesRequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListCosmosDelegateHistoriesRequest>;
    responseSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListCosmosDelegateHistoriesResponse>;
    responseDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListCosmosDelegateHistoriesResponse>;
}
interface IGlobalAPIService_IEnableUTXO extends grpc.MethodDefinition<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.EnableUTXORequest, google_protobuf_empty_pb.Empty> {
    path: "/adamant.global.v1.GlobalAPI/EnableUTXO";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.EnableUTXORequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.EnableUTXORequest>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface IGlobalAPIService_IDisableUTXO extends grpc.MethodDefinition<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.DisableUTXORequest, google_protobuf_empty_pb.Empty> {
    path: "/adamant.global.v1.GlobalAPI/DisableUTXO";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.DisableUTXORequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.DisableUTXORequest>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface IGlobalAPIService_IUpdateWalletIsStakingAvailable extends grpc.MethodDefinition<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpdateWalletIsStakingAvailableRequest, google_protobuf_empty_pb.Empty> {
    path: "/adamant.global.v1.GlobalAPI/UpdateWalletIsStakingAvailable";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpdateWalletIsStakingAvailableRequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpdateWalletIsStakingAvailableRequest>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface IGlobalAPIService_IRefreshStakingWalletClaimableReward extends grpc.MethodDefinition<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.RefreshStakingWalletClaimableRewardRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.RefreshStakingWalletClaimableRewardResponse> {
    path: "/adamant.global.v1.GlobalAPI/RefreshStakingWalletClaimableReward";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.RefreshStakingWalletClaimableRewardRequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.RefreshStakingWalletClaimableRewardRequest>;
    responseSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.RefreshStakingWalletClaimableRewardResponse>;
    responseDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.RefreshStakingWalletClaimableRewardResponse>;
}
interface IGlobalAPIService_IApproveWallet extends grpc.MethodDefinition<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ApproveWalletRequest, google_protobuf_empty_pb.Empty> {
    path: "/adamant.global.v1.GlobalAPI/ApproveWallet";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ApproveWalletRequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ApproveWalletRequest>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface IGlobalAPIService_IApproveTransaction extends grpc.MethodDefinition<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ApproveTransactionRequest, google_protobuf_empty_pb.Empty> {
    path: "/adamant.global.v1.GlobalAPI/ApproveTransaction";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ApproveTransactionRequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ApproveTransactionRequest>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface IGlobalAPIService_ICreateAddress extends grpc.MethodDefinition<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateAddressRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateAddressResponse> {
    path: "/adamant.global.v1.GlobalAPI/CreateAddress";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateAddressRequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateAddressRequest>;
    responseSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateAddressResponse>;
    responseDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateAddressResponse>;
}
interface IGlobalAPIService_IGetAddress extends grpc.MethodDefinition<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetAddressRequest, gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Address> {
    path: "/adamant.global.v1.GlobalAPI/GetAddress";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetAddressRequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetAddressRequest>;
    responseSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Address>;
    responseDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Address>;
}
interface IGlobalAPIService_IGetAddressByAddress extends grpc.MethodDefinition<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetAddressByAddressRequest, gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Address> {
    path: "/adamant.global.v1.GlobalAPI/GetAddressByAddress";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetAddressByAddressRequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetAddressByAddressRequest>;
    responseSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Address>;
    responseDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Address>;
}
interface IGlobalAPIService_IGetAddressByAddressCoin extends grpc.MethodDefinition<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetAddressByAddressCoinRequest, gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Address> {
    path: "/adamant.global.v1.GlobalAPI/GetAddressByAddressCoin";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetAddressByAddressCoinRequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetAddressByAddressCoinRequest>;
    responseSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Address>;
    responseDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Address>;
}
interface IGlobalAPIService_IGetAddressByIndex extends grpc.MethodDefinition<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetAddressByIndexRequest, gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Address> {
    path: "/adamant.global.v1.GlobalAPI/GetAddressByIndex";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetAddressByIndexRequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetAddressByIndexRequest>;
    responseSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Address>;
    responseDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Address>;
}
interface IGlobalAPIService_IListAddresses extends grpc.MethodDefinition<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListAddressesRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListAddressesResponse> {
    path: "/adamant.global.v1.GlobalAPI/ListAddresses";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListAddressesRequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListAddressesRequest>;
    responseSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListAddressesResponse>;
    responseDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListAddressesResponse>;
}
interface IGlobalAPIService_IListAddressesWithBalance extends grpc.MethodDefinition<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListAddressesWithBalanceRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListAddressesWithBalanceResponse> {
    path: "/adamant.global.v1.GlobalAPI/ListAddressesWithBalance";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListAddressesWithBalanceRequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListAddressesWithBalanceRequest>;
    responseSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListAddressesWithBalanceResponse>;
    responseDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListAddressesWithBalanceResponse>;
}
interface IGlobalAPIService_IUpdateAddressBalance extends grpc.MethodDefinition<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpdateAddressBalanceRequest, google_protobuf_empty_pb.Empty> {
    path: "/adamant.global.v1.GlobalAPI/UpdateAddressBalance";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpdateAddressBalanceRequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpdateAddressBalanceRequest>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface IGlobalAPIService_IGetEthereumFeeAddress extends grpc.MethodDefinition<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetEthereumFeeAddressRequest, gincoinc_adamant_global_v1_adamantglobalv1_model_pb.EthereumFeeAddress> {
    path: "/adamant.global.v1.GlobalAPI/GetEthereumFeeAddress";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetEthereumFeeAddressRequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetEthereumFeeAddressRequest>;
    responseSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.EthereumFeeAddress>;
    responseDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.EthereumFeeAddress>;
}
interface IGlobalAPIService_IListSubstrateChildAddresses extends grpc.MethodDefinition<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListSubstrateChildAddressesRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListSubstrateChildAddressesResponse> {
    path: "/adamant.global.v1.GlobalAPI/ListSubstrateChildAddresses";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListSubstrateChildAddressesRequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListSubstrateChildAddressesRequest>;
    responseSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListSubstrateChildAddressesResponse>;
    responseDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListSubstrateChildAddressesResponse>;
}
interface IGlobalAPIService_IListSymbolChildAddresses extends grpc.MethodDefinition<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListSymbolChildAddressesRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListSymbolChildAddressesResponse> {
    path: "/adamant.global.v1.GlobalAPI/ListSymbolChildAddresses";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListSymbolChildAddressesRequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListSymbolChildAddressesRequest>;
    responseSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListSymbolChildAddressesResponse>;
    responseDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListSymbolChildAddressesResponse>;
}
interface IGlobalAPIService_IListIOSTChildAccounts extends grpc.MethodDefinition<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListIOSTChildAccountsRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListIOSTChildAccountsResponse> {
    path: "/adamant.global.v1.GlobalAPI/ListIOSTChildAccounts";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListIOSTChildAccountsRequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListIOSTChildAccountsRequest>;
    responseSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListIOSTChildAccountsResponse>;
    responseDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListIOSTChildAccountsResponse>;
}
interface IGlobalAPIService_IImportAddress extends grpc.MethodDefinition<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ImportAddressRequest, google_protobuf_empty_pb.Empty> {
    path: "/adamant.global.v1.GlobalAPI/ImportAddress";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ImportAddressRequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ImportAddressRequest>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface IGlobalAPIService_IListCallers extends grpc.MethodDefinition<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListCallersRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListCallersResponse> {
    path: "/adamant.global.v1.GlobalAPI/ListCallers";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListCallersRequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListCallersRequest>;
    responseSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListCallersResponse>;
    responseDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListCallersResponse>;
}
interface IGlobalAPIService_IListFeeDeposits extends grpc.MethodDefinition<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListFeeDepositsRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListFeeDepositsResponse> {
    path: "/adamant.global.v1.GlobalAPI/ListFeeDeposits";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListFeeDepositsRequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListFeeDepositsRequest>;
    responseSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListFeeDepositsResponse>;
    responseDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListFeeDepositsResponse>;
}
interface IGlobalAPIService_IRegisterKey extends grpc.MethodDefinition<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.RegisterKeyRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.RegisterKeyResponse> {
    path: "/adamant.global.v1.GlobalAPI/RegisterKey";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.RegisterKeyRequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.RegisterKeyRequest>;
    responseSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.RegisterKeyResponse>;
    responseDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.RegisterKeyResponse>;
}
interface IGlobalAPIService_ICreateTransaction extends grpc.MethodDefinition<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransactionRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransactionResponse> {
    path: "/adamant.global.v1.GlobalAPI/CreateTransaction";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransactionRequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransactionRequest>;
    responseSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransactionResponse>;
    responseDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransactionResponse>;
}
interface IGlobalAPIService_ICreateXRPInitTransactions extends grpc.MethodDefinition<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateXRPInitTransactionsRequest, google_protobuf_empty_pb.Empty> {
    path: "/adamant.global.v1.GlobalAPI/CreateXRPInitTransactions";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateXRPInitTransactionsRequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateXRPInitTransactionsRequest>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface IGlobalAPIService_ISignTransaction extends grpc.MethodDefinition<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.SignTransactionRequest, google_protobuf_empty_pb.Empty> {
    path: "/adamant.global.v1.GlobalAPI/SignTransaction";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.SignTransactionRequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.SignTransactionRequest>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface IGlobalAPIService_ISignXRPInitTransactions extends grpc.MethodDefinition<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.SignXRPInitTransactionsRequest, google_protobuf_empty_pb.Empty> {
    path: "/adamant.global.v1.GlobalAPI/SignXRPInitTransactions";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.SignXRPInitTransactionsRequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.SignXRPInitTransactionsRequest>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface IGlobalAPIService_ISendTransaction extends grpc.MethodDefinition<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.SendTransactionRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.SendTransactionResponse> {
    path: "/adamant.global.v1.GlobalAPI/SendTransaction";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.SendTransactionRequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.SendTransactionRequest>;
    responseSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.SendTransactionResponse>;
    responseDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.SendTransactionResponse>;
}
interface IGlobalAPIService_ISendXRPInitTransactions extends grpc.MethodDefinition<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.SendXRPInitTransactionsRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.SendXRPInitTransactionsResponse> {
    path: "/adamant.global.v1.GlobalAPI/SendXRPInitTransactions";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.SendXRPInitTransactionsRequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.SendXRPInitTransactionsRequest>;
    responseSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.SendXRPInitTransactionsResponse>;
    responseDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.SendXRPInitTransactionsResponse>;
}
interface IGlobalAPIService_ICancelTransaction extends grpc.MethodDefinition<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CancelTransactionRequest, google_protobuf_empty_pb.Empty> {
    path: "/adamant.global.v1.GlobalAPI/CancelTransaction";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CancelTransactionRequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CancelTransactionRequest>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface IGlobalAPIService_IReplaceTransaction extends grpc.MethodDefinition<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ReplaceTransactionRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ReplaceTransactionResponse> {
    path: "/adamant.global.v1.GlobalAPI/ReplaceTransaction";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ReplaceTransactionRequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ReplaceTransactionRequest>;
    responseSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ReplaceTransactionResponse>;
    responseDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ReplaceTransactionResponse>;
}
interface IGlobalAPIService_IGetTransaction extends grpc.MethodDefinition<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetTransactionRequest, gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Transaction> {
    path: "/adamant.global.v1.GlobalAPI/GetTransaction";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetTransactionRequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetTransactionRequest>;
    responseSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Transaction>;
    responseDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Transaction>;
}
interface IGlobalAPIService_IGetTransactionByTxID extends grpc.MethodDefinition<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetTransactionByTxIDRequest, gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Transaction> {
    path: "/adamant.global.v1.GlobalAPI/GetTransactionByTxID";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetTransactionByTxIDRequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetTransactionByTxIDRequest>;
    responseSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Transaction>;
    responseDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Transaction>;
}
interface IGlobalAPIService_IListTransactions extends grpc.MethodDefinition<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListTransactionsRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListTransactionsResponse> {
    path: "/adamant.global.v1.GlobalAPI/ListTransactions";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListTransactionsRequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListTransactionsRequest>;
    responseSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListTransactionsResponse>;
    responseDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListTransactionsResponse>;
}
interface IGlobalAPIService_IListTransactionsByFilter extends grpc.MethodDefinition<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListTransactionsByFilterRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListTransactionsResponse> {
    path: "/adamant.global.v1.GlobalAPI/ListTransactionsByFilter";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListTransactionsByFilterRequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListTransactionsByFilterRequest>;
    responseSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListTransactionsResponse>;
    responseDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListTransactionsResponse>;
}
interface IGlobalAPIService_IGetSignInfo extends grpc.MethodDefinition<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetSignInfoRequest, gincoinc_adamant_global_v1_adamantglobalv1_model_pb.SignInfo> {
    path: "/adamant.global.v1.GlobalAPI/GetSignInfo";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetSignInfoRequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetSignInfoRequest>;
    responseSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.SignInfo>;
    responseDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.SignInfo>;
}
interface IGlobalAPIService_IListSignInfo extends grpc.MethodDefinition<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListSignInfoRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListSignInfoResponse> {
    path: "/adamant.global.v1.GlobalAPI/ListSignInfo";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListSignInfoRequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListSignInfoRequest>;
    responseSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListSignInfoResponse>;
    responseDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListSignInfoResponse>;
}
interface IGlobalAPIService_IListXRPInitSignInfo extends grpc.MethodDefinition<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListXRPInitSignInfoRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListXRPInitSignInfoResponse> {
    path: "/adamant.global.v1.GlobalAPI/ListXRPInitSignInfo";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListXRPInitSignInfoRequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListXRPInitSignInfoRequest>;
    responseSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListXRPInitSignInfoResponse>;
    responseDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListXRPInitSignInfoResponse>;
}
interface IGlobalAPIService_IListTransfers extends grpc.MethodDefinition<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListTransfersRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListTransfersResponse> {
    path: "/adamant.global.v1.GlobalAPI/ListTransfers";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListTransfersRequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListTransfersRequest>;
    responseSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListTransfersResponse>;
    responseDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListTransfersResponse>;
}
interface IGlobalAPIService_IListTransfersByFilter extends grpc.MethodDefinition<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListTransfersByFilterRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListTransfersResponse> {
    path: "/adamant.global.v1.GlobalAPI/ListTransfersByFilter";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListTransfersByFilterRequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListTransfersByFilterRequest>;
    responseSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListTransfersResponse>;
    responseDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListTransfersResponse>;
}
interface IGlobalAPIService_IGetRateSnapshot extends grpc.MethodDefinition<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetRateSnapshotRequest, gincoinc_adamant_global_v1_adamantglobalv1_model_pb.RateSnapshot> {
    path: "/adamant.global.v1.GlobalAPI/GetRateSnapshot";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetRateSnapshotRequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetRateSnapshotRequest>;
    responseSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.RateSnapshot>;
    responseDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.RateSnapshot>;
}
interface IGlobalAPIService_IGetLatestRateSnapshot extends grpc.MethodDefinition<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetLatestRateSnapshotRequest, gincoinc_adamant_global_v1_adamantglobalv1_model_pb.RateSnapshot> {
    path: "/adamant.global.v1.GlobalAPI/GetLatestRateSnapshot";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetLatestRateSnapshotRequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetLatestRateSnapshotRequest>;
    responseSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.RateSnapshot>;
    responseDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.RateSnapshot>;
}
interface IGlobalAPIService_ISetRates extends grpc.MethodDefinition<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.SetRatesRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.SetRatesResponse> {
    path: "/adamant.global.v1.GlobalAPI/SetRates";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.SetRatesRequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.SetRatesRequest>;
    responseSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.SetRatesResponse>;
    responseDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.SetRatesResponse>;
}
interface IGlobalAPIService_ISetDefaultRates extends grpc.MethodDefinition<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.SetDefaultRatesRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.SetDefaultRatesResponse> {
    path: "/adamant.global.v1.GlobalAPI/SetDefaultRates";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.SetDefaultRatesRequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.SetDefaultRatesRequest>;
    responseSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.SetDefaultRatesResponse>;
    responseDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.SetDefaultRatesResponse>;
}
interface IGlobalAPIService_ICreateLabeledAddress extends grpc.MethodDefinition<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateLabeledAddressRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateLabeledAddressResponse> {
    path: "/adamant.global.v1.GlobalAPI/CreateLabeledAddress";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateLabeledAddressRequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateLabeledAddressRequest>;
    responseSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateLabeledAddressResponse>;
    responseDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateLabeledAddressResponse>;
}
interface IGlobalAPIService_IGetLabeledAddress extends grpc.MethodDefinition<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetLabeledAddressRequest, gincoinc_adamant_global_v1_adamantglobalv1_model_pb.LabeledAddress> {
    path: "/adamant.global.v1.GlobalAPI/GetLabeledAddress";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetLabeledAddressRequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetLabeledAddressRequest>;
    responseSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.LabeledAddress>;
    responseDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.LabeledAddress>;
}
interface IGlobalAPIService_IListLabeledAddresses extends grpc.MethodDefinition<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListLabeledAddressesRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListLabeledAddressesResponse> {
    path: "/adamant.global.v1.GlobalAPI/ListLabeledAddresses";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListLabeledAddressesRequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListLabeledAddressesRequest>;
    responseSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListLabeledAddressesResponse>;
    responseDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListLabeledAddressesResponse>;
}
interface IGlobalAPIService_IListLabeledAddressesByFilter extends grpc.MethodDefinition<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListLabeledAddressesByFilterRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListLabeledAddressesByFilterResponse> {
    path: "/adamant.global.v1.GlobalAPI/ListLabeledAddressesByFilter";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListLabeledAddressesByFilterRequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListLabeledAddressesByFilterRequest>;
    responseSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListLabeledAddressesByFilterResponse>;
    responseDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListLabeledAddressesByFilterResponse>;
}
interface IGlobalAPIService_IIsDeletableLabeledAddress extends grpc.MethodDefinition<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.IsDeletableLabeledAddressRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.IsDeletableLabeledAddressResponse> {
    path: "/adamant.global.v1.GlobalAPI/IsDeletableLabeledAddress";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.IsDeletableLabeledAddressRequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.IsDeletableLabeledAddressRequest>;
    responseSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.IsDeletableLabeledAddressResponse>;
    responseDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.IsDeletableLabeledAddressResponse>;
}
interface IGlobalAPIService_IUpdateLabeledAddress extends grpc.MethodDefinition<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpdateLabeledAddressRequest, gincoinc_adamant_global_v1_adamantglobalv1_model_pb.LabeledAddress> {
    path: "/adamant.global.v1.GlobalAPI/UpdateLabeledAddress";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpdateLabeledAddressRequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpdateLabeledAddressRequest>;
    responseSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.LabeledAddress>;
    responseDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.LabeledAddress>;
}
interface IGlobalAPIService_IDeleteAddress extends grpc.MethodDefinition<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.DeleteLabeledAddressRequest, google_protobuf_empty_pb.Empty> {
    path: "/adamant.global.v1.GlobalAPI/DeleteAddress";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.DeleteLabeledAddressRequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.DeleteLabeledAddressRequest>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface IGlobalAPIService_IReviewLabeledAddressProposal extends grpc.MethodDefinition<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ReviewLabeledAddressProposalRequest, google_protobuf_empty_pb.Empty> {
    path: "/adamant.global.v1.GlobalAPI/ReviewLabeledAddressProposal";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ReviewLabeledAddressProposalRequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ReviewLabeledAddressProposalRequest>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface IGlobalAPIService_ICreateWhitelist extends grpc.MethodDefinition<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateWhitelistRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateWhitelistResponse> {
    path: "/adamant.global.v1.GlobalAPI/CreateWhitelist";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateWhitelistRequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateWhitelistRequest>;
    responseSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateWhitelistResponse>;
    responseDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateWhitelistResponse>;
}
interface IGlobalAPIService_IGetWhitelist extends grpc.MethodDefinition<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetWhitelistRequest, gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Whitelist> {
    path: "/adamant.global.v1.GlobalAPI/GetWhitelist";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetWhitelistRequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetWhitelistRequest>;
    responseSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Whitelist>;
    responseDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Whitelist>;
}
interface IGlobalAPIService_IListWhitelists extends grpc.MethodDefinition<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListWhitelistsRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListWhitelistsResponse> {
    path: "/adamant.global.v1.GlobalAPI/ListWhitelists";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListWhitelistsRequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListWhitelistsRequest>;
    responseSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListWhitelistsResponse>;
    responseDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListWhitelistsResponse>;
}
interface IGlobalAPIService_IListWhitelistsByFilter extends grpc.MethodDefinition<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListWhitelistsByFilterRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListWhitelistsByFilterResponse> {
    path: "/adamant.global.v1.GlobalAPI/ListWhitelistsByFilter";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListWhitelistsByFilterRequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListWhitelistsByFilterRequest>;
    responseSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListWhitelistsByFilterResponse>;
    responseDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListWhitelistsByFilterResponse>;
}
interface IGlobalAPIService_IIsDeletableWhitelist extends grpc.MethodDefinition<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.IsDeletableWhitelistRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.IsDeletableWhitelistResponse> {
    path: "/adamant.global.v1.GlobalAPI/IsDeletableWhitelist";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.IsDeletableWhitelistRequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.IsDeletableWhitelistRequest>;
    responseSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.IsDeletableWhitelistResponse>;
    responseDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.IsDeletableWhitelistResponse>;
}
interface IGlobalAPIService_IUpdateWhitelist extends grpc.MethodDefinition<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpdateWhitelistRequest, gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Whitelist> {
    path: "/adamant.global.v1.GlobalAPI/UpdateWhitelist";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpdateWhitelistRequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpdateWhitelistRequest>;
    responseSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Whitelist>;
    responseDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Whitelist>;
}
interface IGlobalAPIService_IUpdateWhitelistAddresses extends grpc.MethodDefinition<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpdateWhitelistAddressesRequest, gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Whitelist> {
    path: "/adamant.global.v1.GlobalAPI/UpdateWhitelistAddresses";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpdateWhitelistAddressesRequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpdateWhitelistAddressesRequest>;
    responseSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Whitelist>;
    responseDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Whitelist>;
}
interface IGlobalAPIService_IDeleteWhitelist extends grpc.MethodDefinition<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.DeleteWhitelistRequest, google_protobuf_empty_pb.Empty> {
    path: "/adamant.global.v1.GlobalAPI/DeleteWhitelist";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.DeleteWhitelistRequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.DeleteWhitelistRequest>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface IGlobalAPIService_ICreateTransferLimit extends grpc.MethodDefinition<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransferLimitRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransferLimitResponse> {
    path: "/adamant.global.v1.GlobalAPI/CreateTransferLimit";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransferLimitRequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransferLimitRequest>;
    responseSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransferLimitResponse>;
    responseDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransferLimitResponse>;
}
interface IGlobalAPIService_IGetTransferLimit extends grpc.MethodDefinition<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetTransferLimitRequest, gincoinc_adamant_global_v1_adamantglobalv1_model_pb.TransferLimit> {
    path: "/adamant.global.v1.GlobalAPI/GetTransferLimit";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetTransferLimitRequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetTransferLimitRequest>;
    responseSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.TransferLimit>;
    responseDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.TransferLimit>;
}
interface IGlobalAPIService_IListTransferLimits extends grpc.MethodDefinition<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListTransferLimitsRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListTransferLimitsResponse> {
    path: "/adamant.global.v1.GlobalAPI/ListTransferLimits";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListTransferLimitsRequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListTransferLimitsRequest>;
    responseSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListTransferLimitsResponse>;
    responseDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListTransferLimitsResponse>;
}
interface IGlobalAPIService_IIsDeletableTransferLimit extends grpc.MethodDefinition<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.IsDeletableTransferLimitRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.IsDeletableTransferLimitResponse> {
    path: "/adamant.global.v1.GlobalAPI/IsDeletableTransferLimit";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.IsDeletableTransferLimitRequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.IsDeletableTransferLimitRequest>;
    responseSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.IsDeletableTransferLimitResponse>;
    responseDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.IsDeletableTransferLimitResponse>;
}
interface IGlobalAPIService_IUpdateTransferLimit extends grpc.MethodDefinition<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpdateTransferLimitRequest, gincoinc_adamant_global_v1_adamantglobalv1_model_pb.TransferLimit> {
    path: "/adamant.global.v1.GlobalAPI/UpdateTransferLimit";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpdateTransferLimitRequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpdateTransferLimitRequest>;
    responseSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.TransferLimit>;
    responseDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.TransferLimit>;
}
interface IGlobalAPIService_IUpdateTransferLimitName extends grpc.MethodDefinition<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpdateTransferLimitNameRequest, gincoinc_adamant_global_v1_adamantglobalv1_model_pb.TransferLimit> {
    path: "/adamant.global.v1.GlobalAPI/UpdateTransferLimitName";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpdateTransferLimitNameRequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpdateTransferLimitNameRequest>;
    responseSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.TransferLimit>;
    responseDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.TransferLimit>;
}
interface IGlobalAPIService_IDeleteTransferLimit extends grpc.MethodDefinition<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.DeleteTransferLimitRequest, google_protobuf_empty_pb.Empty> {
    path: "/adamant.global.v1.GlobalAPI/DeleteTransferLimit";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.DeleteTransferLimitRequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.DeleteTransferLimitRequest>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface IGlobalAPIService_IReviewTransferLimitProposal extends grpc.MethodDefinition<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ReviewTransferLimitProposalRequest, google_protobuf_empty_pb.Empty> {
    path: "/adamant.global.v1.GlobalAPI/ReviewTransferLimitProposal";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ReviewTransferLimitProposalRequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ReviewTransferLimitProposalRequest>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface IGlobalAPIService_ICreatePolicy extends grpc.MethodDefinition<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreatePolicyRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreatePolicyResponse> {
    path: "/adamant.global.v1.GlobalAPI/CreatePolicy";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreatePolicyRequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreatePolicyRequest>;
    responseSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreatePolicyResponse>;
    responseDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreatePolicyResponse>;
}
interface IGlobalAPIService_IGetPolicy extends grpc.MethodDefinition<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetPolicyRequest, gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Policy> {
    path: "/adamant.global.v1.GlobalAPI/GetPolicy";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetPolicyRequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetPolicyRequest>;
    responseSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Policy>;
    responseDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Policy>;
}
interface IGlobalAPIService_IListPolicies extends grpc.MethodDefinition<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListPoliciesRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListPoliciesResponse> {
    path: "/adamant.global.v1.GlobalAPI/ListPolicies";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListPoliciesRequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListPoliciesRequest>;
    responseSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListPoliciesResponse>;
    responseDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListPoliciesResponse>;
}
interface IGlobalAPIService_IListPoliciesByFilter extends grpc.MethodDefinition<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListPoliciesByFilterRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListPoliciesByFilterResponse> {
    path: "/adamant.global.v1.GlobalAPI/ListPoliciesByFilter";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListPoliciesByFilterRequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListPoliciesByFilterRequest>;
    responseSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListPoliciesByFilterResponse>;
    responseDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListPoliciesByFilterResponse>;
}
interface IGlobalAPIService_IIsDeletablePolicy extends grpc.MethodDefinition<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.IsDeletablePolicyRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.IsDeletablePolicyResponse> {
    path: "/adamant.global.v1.GlobalAPI/IsDeletablePolicy";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.IsDeletablePolicyRequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.IsDeletablePolicyRequest>;
    responseSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.IsDeletablePolicyResponse>;
    responseDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.IsDeletablePolicyResponse>;
}
interface IGlobalAPIService_IUpdatePolicy extends grpc.MethodDefinition<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpdatePolicyRequest, gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Policy> {
    path: "/adamant.global.v1.GlobalAPI/UpdatePolicy";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpdatePolicyRequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpdatePolicyRequest>;
    responseSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Policy>;
    responseDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Policy>;
}
interface IGlobalAPIService_IDeletePolicy extends grpc.MethodDefinition<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.DeletePolicyRequest, google_protobuf_empty_pb.Empty> {
    path: "/adamant.global.v1.GlobalAPI/DeletePolicy";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.DeletePolicyRequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.DeletePolicyRequest>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface IGlobalAPIService_IReviewPolicyProposal extends grpc.MethodDefinition<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ReviewPolicyProposalRequest, google_protobuf_empty_pb.Empty> {
    path: "/adamant.global.v1.GlobalAPI/ReviewPolicyProposal";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ReviewPolicyProposalRequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ReviewPolicyProposalRequest>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface IGlobalAPIService_IGetSpendableBalance extends grpc.MethodDefinition<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetSpendableBalanceRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetSpendableBalanceResponse> {
    path: "/adamant.global.v1.GlobalAPI/GetSpendableBalance";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetSpendableBalanceRequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetSpendableBalanceRequest>;
    responseSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetSpendableBalanceResponse>;
    responseDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetSpendableBalanceResponse>;
}
interface IGlobalAPIService_IGetTotalBalance extends grpc.MethodDefinition<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetTotalBalanceRequest, gincoinc_adamant_global_v1_adamantglobalv1_model_pb.TotalBalance> {
    path: "/adamant.global.v1.GlobalAPI/GetTotalBalance";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetTotalBalanceRequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetTotalBalanceRequest>;
    responseSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.TotalBalance>;
    responseDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.TotalBalance>;
}
interface IGlobalAPIService_IListBalanceSnapshots extends grpc.MethodDefinition<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListBalanceSnapshotsRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListBalanceSnapshotsResponse> {
    path: "/adamant.global.v1.GlobalAPI/ListBalanceSnapshots";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListBalanceSnapshotsRequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListBalanceSnapshotsRequest>;
    responseSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListBalanceSnapshotsResponse>;
    responseDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListBalanceSnapshotsResponse>;
}
interface IGlobalAPIService_ICalculateFee extends grpc.MethodDefinition<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CalculateFeeRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CalculateFeeResponse> {
    path: "/adamant.global.v1.GlobalAPI/CalculateFee";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CalculateFeeRequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CalculateFeeRequest>;
    responseSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CalculateFeeResponse>;
    responseDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CalculateFeeResponse>;
}
interface IGlobalAPIService_IGetMembersDeactivatabilities extends grpc.MethodDefinition<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetMembersDeactivatabilitiesRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetMembersDeactivatabilitiesResponse> {
    path: "/adamant.global.v1.GlobalAPI/GetMembersDeactivatabilities";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetMembersDeactivatabilitiesRequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetMembersDeactivatabilitiesRequest>;
    responseSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetMembersDeactivatabilitiesResponse>;
    responseDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetMembersDeactivatabilitiesResponse>;
}
interface IGlobalAPIService_IGetRecommendedFeeRate extends grpc.MethodDefinition<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetRecommendedFeeRateRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetRecommendedFeeRateResponse> {
    path: "/adamant.global.v1.GlobalAPI/GetRecommendedFeeRate";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetRecommendedFeeRateRequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetRecommendedFeeRateRequest>;
    responseSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetRecommendedFeeRateResponse>;
    responseDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetRecommendedFeeRateResponse>;
}
interface IGlobalAPIService_IValidateAddress extends grpc.MethodDefinition<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ValidateAddressRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ValidateAddressResponse> {
    path: "/adamant.global.v1.GlobalAPI/ValidateAddress";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ValidateAddressRequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ValidateAddressRequest>;
    responseSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ValidateAddressResponse>;
    responseDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ValidateAddressResponse>;
}
interface IGlobalAPIService_IListAuditLogs extends grpc.MethodDefinition<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListAuditLogsRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListAuditLogsResponse> {
    path: "/adamant.global.v1.GlobalAPI/ListAuditLogs";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListAuditLogsRequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListAuditLogsRequest>;
    responseSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListAuditLogsResponse>;
    responseDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListAuditLogsResponse>;
}
interface IGlobalAPIService_IListForwardingThresholds extends grpc.MethodDefinition<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListForwardingThresholdsRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListForwardingThresholdsResponse> {
    path: "/adamant.global.v1.GlobalAPI/ListForwardingThresholds";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListForwardingThresholdsRequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListForwardingThresholdsRequest>;
    responseSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListForwardingThresholdsResponse>;
    responseDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListForwardingThresholdsResponse>;
}
interface IGlobalAPIService_IUpsertForwardingThreshold extends grpc.MethodDefinition<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpsertForwardingThresholdRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpsertForwardingThresholdResponse> {
    path: "/adamant.global.v1.GlobalAPI/UpsertForwardingThreshold";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpsertForwardingThresholdRequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpsertForwardingThresholdRequest>;
    responseSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpsertForwardingThresholdResponse>;
    responseDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpsertForwardingThresholdResponse>;
}
interface IGlobalAPIService_IListStakingHistoriesByFilter extends grpc.MethodDefinition<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListStakingHistoriesByFilterRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListStakingHistoriesResponse> {
    path: "/adamant.global.v1.GlobalAPI/ListStakingHistoriesByFilter";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListStakingHistoriesByFilterRequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListStakingHistoriesByFilterRequest>;
    responseSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListStakingHistoriesResponse>;
    responseDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListStakingHistoriesResponse>;
}
interface IGlobalAPIService_IListStakingValidatorsByFilter extends grpc.MethodDefinition<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListStakingValidatorsByFilterRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListStakingValidatorsResponse> {
    path: "/adamant.global.v1.GlobalAPI/ListStakingValidatorsByFilter";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListStakingValidatorsByFilterRequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListStakingValidatorsByFilterRequest>;
    responseSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListStakingValidatorsResponse>;
    responseDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListStakingValidatorsResponse>;
}

export const GlobalAPIService: IGlobalAPIService;

export interface IGlobalAPIServer {
    createWallet: grpc.handleUnaryCall<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateWalletRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateWalletResponse>;
    getWallet: grpc.handleUnaryCall<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetWalletRequest, gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Wallet>;
    cancelWallet: grpc.handleUnaryCall<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CancelWalletRequest, google_protobuf_empty_pb.Empty>;
    archiveWallet: grpc.handleUnaryCall<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ArchiveWalletRequest, google_protobuf_empty_pb.Empty>;
    unArchiveWallet: grpc.handleUnaryCall<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UnArchiveWalletRequest, google_protobuf_empty_pb.Empty>;
    listWallets: grpc.handleUnaryCall<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListWalletsRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListWalletsResponse>;
    listWalletsByFilter: grpc.handleUnaryCall<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListWalletsByFilterRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListWalletsResponse>;
    listBaseWallets: grpc.handleUnaryCall<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListBaseWalletsRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListBaseWalletsResponse>;
    listStakingWalletsByFilter: grpc.handleUnaryCall<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListStakingWalletsByFilterRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListStakingWalletsResponse>;
    updateWalletName: grpc.handleUnaryCall<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpdateWalletNameRequest, google_protobuf_empty_pb.Empty>;
    updateWalletValidation: grpc.handleUnaryCall<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpdateWalletValidationRequest, google_protobuf_empty_pb.Empty>;
    updateWalletPolicy: grpc.handleUnaryCall<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpdateWalletPolicyRequest, google_protobuf_empty_pb.Empty>;
    reviewWalletProposal: grpc.handleUnaryCall<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ReviewWalletProposalRequest, google_protobuf_empty_pb.Empty>;
    flushBalance: grpc.handleUnaryCall<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.FlushBalanceRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.FlushBalanceResponse>;
    createWalletGroup: grpc.handleUnaryCall<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateWalletGroupRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateWalletGroupResponse>;
    updateWalletGroupName: grpc.handleUnaryCall<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpdateWalletGroupNameRequest, google_protobuf_empty_pb.Empty>;
    updateWalletGroup: grpc.handleUnaryCall<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpdateWalletGroupRequest, google_protobuf_empty_pb.Empty>;
    getWalletGroup: grpc.handleUnaryCall<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetWalletGroupRequest, gincoinc_adamant_global_v1_adamantglobalv1_model_pb.WalletGroup>;
    listWalletGroups: grpc.handleUnaryCall<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListWalletGroupsRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListWalletGroupsResponse>;
    updateDestinationWalletID: grpc.handleUnaryCall<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpdateDestinationWalletIDRequest, google_protobuf_empty_pb.Empty>;
    getCosmosBalance: grpc.handleUnaryCall<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetCosmosBalanceRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetCosmosBalanceResponse>;
    listCosmosDelegateHistories: grpc.handleUnaryCall<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListCosmosDelegateHistoriesRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListCosmosDelegateHistoriesResponse>;
    enableUTXO: grpc.handleUnaryCall<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.EnableUTXORequest, google_protobuf_empty_pb.Empty>;
    disableUTXO: grpc.handleUnaryCall<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.DisableUTXORequest, google_protobuf_empty_pb.Empty>;
    updateWalletIsStakingAvailable: grpc.handleUnaryCall<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpdateWalletIsStakingAvailableRequest, google_protobuf_empty_pb.Empty>;
    refreshStakingWalletClaimableReward: grpc.handleUnaryCall<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.RefreshStakingWalletClaimableRewardRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.RefreshStakingWalletClaimableRewardResponse>;
    approveWallet: grpc.handleUnaryCall<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ApproveWalletRequest, google_protobuf_empty_pb.Empty>;
    approveTransaction: grpc.handleUnaryCall<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ApproveTransactionRequest, google_protobuf_empty_pb.Empty>;
    createAddress: grpc.handleUnaryCall<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateAddressRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateAddressResponse>;
    getAddress: grpc.handleUnaryCall<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetAddressRequest, gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Address>;
    getAddressByAddress: grpc.handleUnaryCall<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetAddressByAddressRequest, gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Address>;
    getAddressByAddressCoin: grpc.handleUnaryCall<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetAddressByAddressCoinRequest, gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Address>;
    getAddressByIndex: grpc.handleUnaryCall<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetAddressByIndexRequest, gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Address>;
    listAddresses: grpc.handleUnaryCall<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListAddressesRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListAddressesResponse>;
    listAddressesWithBalance: grpc.handleUnaryCall<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListAddressesWithBalanceRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListAddressesWithBalanceResponse>;
    updateAddressBalance: grpc.handleUnaryCall<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpdateAddressBalanceRequest, google_protobuf_empty_pb.Empty>;
    getEthereumFeeAddress: grpc.handleUnaryCall<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetEthereumFeeAddressRequest, gincoinc_adamant_global_v1_adamantglobalv1_model_pb.EthereumFeeAddress>;
    listSubstrateChildAddresses: grpc.handleUnaryCall<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListSubstrateChildAddressesRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListSubstrateChildAddressesResponse>;
    listSymbolChildAddresses: grpc.handleUnaryCall<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListSymbolChildAddressesRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListSymbolChildAddressesResponse>;
    listIOSTChildAccounts: grpc.handleUnaryCall<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListIOSTChildAccountsRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListIOSTChildAccountsResponse>;
    importAddress: grpc.handleUnaryCall<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ImportAddressRequest, google_protobuf_empty_pb.Empty>;
    listCallers: grpc.handleUnaryCall<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListCallersRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListCallersResponse>;
    listFeeDeposits: grpc.handleUnaryCall<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListFeeDepositsRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListFeeDepositsResponse>;
    registerKey: grpc.handleUnaryCall<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.RegisterKeyRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.RegisterKeyResponse>;
    createTransaction: grpc.handleUnaryCall<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransactionRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransactionResponse>;
    createXRPInitTransactions: grpc.handleUnaryCall<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateXRPInitTransactionsRequest, google_protobuf_empty_pb.Empty>;
    signTransaction: grpc.handleUnaryCall<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.SignTransactionRequest, google_protobuf_empty_pb.Empty>;
    signXRPInitTransactions: grpc.handleUnaryCall<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.SignXRPInitTransactionsRequest, google_protobuf_empty_pb.Empty>;
    sendTransaction: grpc.handleUnaryCall<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.SendTransactionRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.SendTransactionResponse>;
    sendXRPInitTransactions: grpc.handleUnaryCall<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.SendXRPInitTransactionsRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.SendXRPInitTransactionsResponse>;
    cancelTransaction: grpc.handleUnaryCall<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CancelTransactionRequest, google_protobuf_empty_pb.Empty>;
    replaceTransaction: grpc.handleUnaryCall<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ReplaceTransactionRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ReplaceTransactionResponse>;
    getTransaction: grpc.handleUnaryCall<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetTransactionRequest, gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Transaction>;
    getTransactionByTxID: grpc.handleUnaryCall<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetTransactionByTxIDRequest, gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Transaction>;
    listTransactions: grpc.handleUnaryCall<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListTransactionsRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListTransactionsResponse>;
    listTransactionsByFilter: grpc.handleUnaryCall<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListTransactionsByFilterRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListTransactionsResponse>;
    getSignInfo: grpc.handleUnaryCall<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetSignInfoRequest, gincoinc_adamant_global_v1_adamantglobalv1_model_pb.SignInfo>;
    listSignInfo: grpc.handleUnaryCall<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListSignInfoRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListSignInfoResponse>;
    listXRPInitSignInfo: grpc.handleUnaryCall<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListXRPInitSignInfoRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListXRPInitSignInfoResponse>;
    listTransfers: grpc.handleUnaryCall<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListTransfersRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListTransfersResponse>;
    listTransfersByFilter: grpc.handleUnaryCall<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListTransfersByFilterRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListTransfersResponse>;
    getRateSnapshot: grpc.handleUnaryCall<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetRateSnapshotRequest, gincoinc_adamant_global_v1_adamantglobalv1_model_pb.RateSnapshot>;
    getLatestRateSnapshot: grpc.handleUnaryCall<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetLatestRateSnapshotRequest, gincoinc_adamant_global_v1_adamantglobalv1_model_pb.RateSnapshot>;
    setRates: grpc.handleUnaryCall<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.SetRatesRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.SetRatesResponse>;
    setDefaultRates: grpc.handleUnaryCall<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.SetDefaultRatesRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.SetDefaultRatesResponse>;
    createLabeledAddress: grpc.handleUnaryCall<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateLabeledAddressRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateLabeledAddressResponse>;
    getLabeledAddress: grpc.handleUnaryCall<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetLabeledAddressRequest, gincoinc_adamant_global_v1_adamantglobalv1_model_pb.LabeledAddress>;
    listLabeledAddresses: grpc.handleUnaryCall<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListLabeledAddressesRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListLabeledAddressesResponse>;
    listLabeledAddressesByFilter: grpc.handleUnaryCall<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListLabeledAddressesByFilterRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListLabeledAddressesByFilterResponse>;
    isDeletableLabeledAddress: grpc.handleUnaryCall<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.IsDeletableLabeledAddressRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.IsDeletableLabeledAddressResponse>;
    updateLabeledAddress: grpc.handleUnaryCall<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpdateLabeledAddressRequest, gincoinc_adamant_global_v1_adamantglobalv1_model_pb.LabeledAddress>;
    deleteAddress: grpc.handleUnaryCall<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.DeleteLabeledAddressRequest, google_protobuf_empty_pb.Empty>;
    reviewLabeledAddressProposal: grpc.handleUnaryCall<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ReviewLabeledAddressProposalRequest, google_protobuf_empty_pb.Empty>;
    createWhitelist: grpc.handleUnaryCall<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateWhitelistRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateWhitelistResponse>;
    getWhitelist: grpc.handleUnaryCall<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetWhitelistRequest, gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Whitelist>;
    listWhitelists: grpc.handleUnaryCall<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListWhitelistsRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListWhitelistsResponse>;
    listWhitelistsByFilter: grpc.handleUnaryCall<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListWhitelistsByFilterRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListWhitelistsByFilterResponse>;
    isDeletableWhitelist: grpc.handleUnaryCall<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.IsDeletableWhitelistRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.IsDeletableWhitelistResponse>;
    updateWhitelist: grpc.handleUnaryCall<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpdateWhitelistRequest, gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Whitelist>;
    updateWhitelistAddresses: grpc.handleUnaryCall<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpdateWhitelistAddressesRequest, gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Whitelist>;
    deleteWhitelist: grpc.handleUnaryCall<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.DeleteWhitelistRequest, google_protobuf_empty_pb.Empty>;
    createTransferLimit: grpc.handleUnaryCall<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransferLimitRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransferLimitResponse>;
    getTransferLimit: grpc.handleUnaryCall<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetTransferLimitRequest, gincoinc_adamant_global_v1_adamantglobalv1_model_pb.TransferLimit>;
    listTransferLimits: grpc.handleUnaryCall<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListTransferLimitsRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListTransferLimitsResponse>;
    isDeletableTransferLimit: grpc.handleUnaryCall<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.IsDeletableTransferLimitRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.IsDeletableTransferLimitResponse>;
    updateTransferLimit: grpc.handleUnaryCall<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpdateTransferLimitRequest, gincoinc_adamant_global_v1_adamantglobalv1_model_pb.TransferLimit>;
    updateTransferLimitName: grpc.handleUnaryCall<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpdateTransferLimitNameRequest, gincoinc_adamant_global_v1_adamantglobalv1_model_pb.TransferLimit>;
    deleteTransferLimit: grpc.handleUnaryCall<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.DeleteTransferLimitRequest, google_protobuf_empty_pb.Empty>;
    reviewTransferLimitProposal: grpc.handleUnaryCall<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ReviewTransferLimitProposalRequest, google_protobuf_empty_pb.Empty>;
    createPolicy: grpc.handleUnaryCall<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreatePolicyRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreatePolicyResponse>;
    getPolicy: grpc.handleUnaryCall<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetPolicyRequest, gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Policy>;
    listPolicies: grpc.handleUnaryCall<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListPoliciesRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListPoliciesResponse>;
    listPoliciesByFilter: grpc.handleUnaryCall<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListPoliciesByFilterRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListPoliciesByFilterResponse>;
    isDeletablePolicy: grpc.handleUnaryCall<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.IsDeletablePolicyRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.IsDeletablePolicyResponse>;
    updatePolicy: grpc.handleUnaryCall<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpdatePolicyRequest, gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Policy>;
    deletePolicy: grpc.handleUnaryCall<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.DeletePolicyRequest, google_protobuf_empty_pb.Empty>;
    reviewPolicyProposal: grpc.handleUnaryCall<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ReviewPolicyProposalRequest, google_protobuf_empty_pb.Empty>;
    getSpendableBalance: grpc.handleUnaryCall<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetSpendableBalanceRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetSpendableBalanceResponse>;
    getTotalBalance: grpc.handleUnaryCall<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetTotalBalanceRequest, gincoinc_adamant_global_v1_adamantglobalv1_model_pb.TotalBalance>;
    listBalanceSnapshots: grpc.handleUnaryCall<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListBalanceSnapshotsRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListBalanceSnapshotsResponse>;
    calculateFee: grpc.handleUnaryCall<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CalculateFeeRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CalculateFeeResponse>;
    getMembersDeactivatabilities: grpc.handleUnaryCall<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetMembersDeactivatabilitiesRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetMembersDeactivatabilitiesResponse>;
    getRecommendedFeeRate: grpc.handleUnaryCall<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetRecommendedFeeRateRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetRecommendedFeeRateResponse>;
    validateAddress: grpc.handleUnaryCall<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ValidateAddressRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ValidateAddressResponse>;
    listAuditLogs: grpc.handleUnaryCall<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListAuditLogsRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListAuditLogsResponse>;
    listForwardingThresholds: grpc.handleUnaryCall<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListForwardingThresholdsRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListForwardingThresholdsResponse>;
    upsertForwardingThreshold: grpc.handleUnaryCall<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpsertForwardingThresholdRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpsertForwardingThresholdResponse>;
    listStakingHistoriesByFilter: grpc.handleUnaryCall<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListStakingHistoriesByFilterRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListStakingHistoriesResponse>;
    listStakingValidatorsByFilter: grpc.handleUnaryCall<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListStakingValidatorsByFilterRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListStakingValidatorsResponse>;
}

export interface IGlobalAPIClient {
    createWallet(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateWalletRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateWalletResponse) => void): grpc.ClientUnaryCall;
    createWallet(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateWalletRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateWalletResponse) => void): grpc.ClientUnaryCall;
    createWallet(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateWalletRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateWalletResponse) => void): grpc.ClientUnaryCall;
    getWallet(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetWalletRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Wallet) => void): grpc.ClientUnaryCall;
    getWallet(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetWalletRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Wallet) => void): grpc.ClientUnaryCall;
    getWallet(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetWalletRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Wallet) => void): grpc.ClientUnaryCall;
    cancelWallet(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CancelWalletRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    cancelWallet(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CancelWalletRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    cancelWallet(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CancelWalletRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    archiveWallet(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ArchiveWalletRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    archiveWallet(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ArchiveWalletRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    archiveWallet(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ArchiveWalletRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    unArchiveWallet(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UnArchiveWalletRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    unArchiveWallet(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UnArchiveWalletRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    unArchiveWallet(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UnArchiveWalletRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    listWallets(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListWalletsRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListWalletsResponse) => void): grpc.ClientUnaryCall;
    listWallets(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListWalletsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListWalletsResponse) => void): grpc.ClientUnaryCall;
    listWallets(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListWalletsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListWalletsResponse) => void): grpc.ClientUnaryCall;
    listWalletsByFilter(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListWalletsByFilterRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListWalletsResponse) => void): grpc.ClientUnaryCall;
    listWalletsByFilter(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListWalletsByFilterRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListWalletsResponse) => void): grpc.ClientUnaryCall;
    listWalletsByFilter(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListWalletsByFilterRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListWalletsResponse) => void): grpc.ClientUnaryCall;
    listBaseWallets(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListBaseWalletsRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListBaseWalletsResponse) => void): grpc.ClientUnaryCall;
    listBaseWallets(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListBaseWalletsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListBaseWalletsResponse) => void): grpc.ClientUnaryCall;
    listBaseWallets(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListBaseWalletsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListBaseWalletsResponse) => void): grpc.ClientUnaryCall;
    listStakingWalletsByFilter(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListStakingWalletsByFilterRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListStakingWalletsResponse) => void): grpc.ClientUnaryCall;
    listStakingWalletsByFilter(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListStakingWalletsByFilterRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListStakingWalletsResponse) => void): grpc.ClientUnaryCall;
    listStakingWalletsByFilter(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListStakingWalletsByFilterRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListStakingWalletsResponse) => void): grpc.ClientUnaryCall;
    updateWalletName(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpdateWalletNameRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    updateWalletName(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpdateWalletNameRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    updateWalletName(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpdateWalletNameRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    updateWalletValidation(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpdateWalletValidationRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    updateWalletValidation(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpdateWalletValidationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    updateWalletValidation(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpdateWalletValidationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    updateWalletPolicy(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpdateWalletPolicyRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    updateWalletPolicy(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpdateWalletPolicyRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    updateWalletPolicy(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpdateWalletPolicyRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    reviewWalletProposal(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ReviewWalletProposalRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    reviewWalletProposal(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ReviewWalletProposalRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    reviewWalletProposal(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ReviewWalletProposalRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    flushBalance(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.FlushBalanceRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.FlushBalanceResponse) => void): grpc.ClientUnaryCall;
    flushBalance(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.FlushBalanceRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.FlushBalanceResponse) => void): grpc.ClientUnaryCall;
    flushBalance(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.FlushBalanceRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.FlushBalanceResponse) => void): grpc.ClientUnaryCall;
    createWalletGroup(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateWalletGroupRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateWalletGroupResponse) => void): grpc.ClientUnaryCall;
    createWalletGroup(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateWalletGroupRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateWalletGroupResponse) => void): grpc.ClientUnaryCall;
    createWalletGroup(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateWalletGroupRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateWalletGroupResponse) => void): grpc.ClientUnaryCall;
    updateWalletGroupName(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpdateWalletGroupNameRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    updateWalletGroupName(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpdateWalletGroupNameRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    updateWalletGroupName(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpdateWalletGroupNameRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    updateWalletGroup(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpdateWalletGroupRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    updateWalletGroup(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpdateWalletGroupRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    updateWalletGroup(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpdateWalletGroupRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    getWalletGroup(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetWalletGroupRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.WalletGroup) => void): grpc.ClientUnaryCall;
    getWalletGroup(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetWalletGroupRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.WalletGroup) => void): grpc.ClientUnaryCall;
    getWalletGroup(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetWalletGroupRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.WalletGroup) => void): grpc.ClientUnaryCall;
    listWalletGroups(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListWalletGroupsRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListWalletGroupsResponse) => void): grpc.ClientUnaryCall;
    listWalletGroups(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListWalletGroupsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListWalletGroupsResponse) => void): grpc.ClientUnaryCall;
    listWalletGroups(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListWalletGroupsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListWalletGroupsResponse) => void): grpc.ClientUnaryCall;
    updateDestinationWalletID(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpdateDestinationWalletIDRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    updateDestinationWalletID(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpdateDestinationWalletIDRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    updateDestinationWalletID(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpdateDestinationWalletIDRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    getCosmosBalance(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetCosmosBalanceRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetCosmosBalanceResponse) => void): grpc.ClientUnaryCall;
    getCosmosBalance(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetCosmosBalanceRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetCosmosBalanceResponse) => void): grpc.ClientUnaryCall;
    getCosmosBalance(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetCosmosBalanceRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetCosmosBalanceResponse) => void): grpc.ClientUnaryCall;
    listCosmosDelegateHistories(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListCosmosDelegateHistoriesRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListCosmosDelegateHistoriesResponse) => void): grpc.ClientUnaryCall;
    listCosmosDelegateHistories(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListCosmosDelegateHistoriesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListCosmosDelegateHistoriesResponse) => void): grpc.ClientUnaryCall;
    listCosmosDelegateHistories(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListCosmosDelegateHistoriesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListCosmosDelegateHistoriesResponse) => void): grpc.ClientUnaryCall;
    enableUTXO(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.EnableUTXORequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    enableUTXO(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.EnableUTXORequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    enableUTXO(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.EnableUTXORequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    disableUTXO(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.DisableUTXORequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    disableUTXO(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.DisableUTXORequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    disableUTXO(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.DisableUTXORequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    updateWalletIsStakingAvailable(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpdateWalletIsStakingAvailableRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    updateWalletIsStakingAvailable(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpdateWalletIsStakingAvailableRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    updateWalletIsStakingAvailable(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpdateWalletIsStakingAvailableRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    refreshStakingWalletClaimableReward(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.RefreshStakingWalletClaimableRewardRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.RefreshStakingWalletClaimableRewardResponse) => void): grpc.ClientUnaryCall;
    refreshStakingWalletClaimableReward(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.RefreshStakingWalletClaimableRewardRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.RefreshStakingWalletClaimableRewardResponse) => void): grpc.ClientUnaryCall;
    refreshStakingWalletClaimableReward(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.RefreshStakingWalletClaimableRewardRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.RefreshStakingWalletClaimableRewardResponse) => void): grpc.ClientUnaryCall;
    approveWallet(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ApproveWalletRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    approveWallet(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ApproveWalletRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    approveWallet(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ApproveWalletRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    approveTransaction(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ApproveTransactionRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    approveTransaction(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ApproveTransactionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    approveTransaction(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ApproveTransactionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    createAddress(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateAddressRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateAddressResponse) => void): grpc.ClientUnaryCall;
    createAddress(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateAddressRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateAddressResponse) => void): grpc.ClientUnaryCall;
    createAddress(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateAddressRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateAddressResponse) => void): grpc.ClientUnaryCall;
    getAddress(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetAddressRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Address) => void): grpc.ClientUnaryCall;
    getAddress(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetAddressRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Address) => void): grpc.ClientUnaryCall;
    getAddress(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetAddressRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Address) => void): grpc.ClientUnaryCall;
    getAddressByAddress(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetAddressByAddressRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Address) => void): grpc.ClientUnaryCall;
    getAddressByAddress(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetAddressByAddressRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Address) => void): grpc.ClientUnaryCall;
    getAddressByAddress(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetAddressByAddressRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Address) => void): grpc.ClientUnaryCall;
    getAddressByAddressCoin(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetAddressByAddressCoinRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Address) => void): grpc.ClientUnaryCall;
    getAddressByAddressCoin(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetAddressByAddressCoinRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Address) => void): grpc.ClientUnaryCall;
    getAddressByAddressCoin(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetAddressByAddressCoinRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Address) => void): grpc.ClientUnaryCall;
    getAddressByIndex(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetAddressByIndexRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Address) => void): grpc.ClientUnaryCall;
    getAddressByIndex(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetAddressByIndexRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Address) => void): grpc.ClientUnaryCall;
    getAddressByIndex(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetAddressByIndexRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Address) => void): grpc.ClientUnaryCall;
    listAddresses(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListAddressesRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListAddressesResponse) => void): grpc.ClientUnaryCall;
    listAddresses(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListAddressesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListAddressesResponse) => void): grpc.ClientUnaryCall;
    listAddresses(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListAddressesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListAddressesResponse) => void): grpc.ClientUnaryCall;
    listAddressesWithBalance(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListAddressesWithBalanceRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListAddressesWithBalanceResponse) => void): grpc.ClientUnaryCall;
    listAddressesWithBalance(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListAddressesWithBalanceRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListAddressesWithBalanceResponse) => void): grpc.ClientUnaryCall;
    listAddressesWithBalance(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListAddressesWithBalanceRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListAddressesWithBalanceResponse) => void): grpc.ClientUnaryCall;
    updateAddressBalance(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpdateAddressBalanceRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    updateAddressBalance(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpdateAddressBalanceRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    updateAddressBalance(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpdateAddressBalanceRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    getEthereumFeeAddress(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetEthereumFeeAddressRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.EthereumFeeAddress) => void): grpc.ClientUnaryCall;
    getEthereumFeeAddress(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetEthereumFeeAddressRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.EthereumFeeAddress) => void): grpc.ClientUnaryCall;
    getEthereumFeeAddress(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetEthereumFeeAddressRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.EthereumFeeAddress) => void): grpc.ClientUnaryCall;
    listSubstrateChildAddresses(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListSubstrateChildAddressesRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListSubstrateChildAddressesResponse) => void): grpc.ClientUnaryCall;
    listSubstrateChildAddresses(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListSubstrateChildAddressesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListSubstrateChildAddressesResponse) => void): grpc.ClientUnaryCall;
    listSubstrateChildAddresses(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListSubstrateChildAddressesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListSubstrateChildAddressesResponse) => void): grpc.ClientUnaryCall;
    listSymbolChildAddresses(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListSymbolChildAddressesRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListSymbolChildAddressesResponse) => void): grpc.ClientUnaryCall;
    listSymbolChildAddresses(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListSymbolChildAddressesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListSymbolChildAddressesResponse) => void): grpc.ClientUnaryCall;
    listSymbolChildAddresses(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListSymbolChildAddressesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListSymbolChildAddressesResponse) => void): grpc.ClientUnaryCall;
    listIOSTChildAccounts(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListIOSTChildAccountsRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListIOSTChildAccountsResponse) => void): grpc.ClientUnaryCall;
    listIOSTChildAccounts(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListIOSTChildAccountsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListIOSTChildAccountsResponse) => void): grpc.ClientUnaryCall;
    listIOSTChildAccounts(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListIOSTChildAccountsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListIOSTChildAccountsResponse) => void): grpc.ClientUnaryCall;
    importAddress(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ImportAddressRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    importAddress(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ImportAddressRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    importAddress(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ImportAddressRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    listCallers(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListCallersRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListCallersResponse) => void): grpc.ClientUnaryCall;
    listCallers(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListCallersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListCallersResponse) => void): grpc.ClientUnaryCall;
    listCallers(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListCallersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListCallersResponse) => void): grpc.ClientUnaryCall;
    listFeeDeposits(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListFeeDepositsRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListFeeDepositsResponse) => void): grpc.ClientUnaryCall;
    listFeeDeposits(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListFeeDepositsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListFeeDepositsResponse) => void): grpc.ClientUnaryCall;
    listFeeDeposits(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListFeeDepositsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListFeeDepositsResponse) => void): grpc.ClientUnaryCall;
    registerKey(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.RegisterKeyRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.RegisterKeyResponse) => void): grpc.ClientUnaryCall;
    registerKey(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.RegisterKeyRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.RegisterKeyResponse) => void): grpc.ClientUnaryCall;
    registerKey(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.RegisterKeyRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.RegisterKeyResponse) => void): grpc.ClientUnaryCall;
    createTransaction(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransactionRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransactionResponse) => void): grpc.ClientUnaryCall;
    createTransaction(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransactionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransactionResponse) => void): grpc.ClientUnaryCall;
    createTransaction(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransactionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransactionResponse) => void): grpc.ClientUnaryCall;
    createXRPInitTransactions(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateXRPInitTransactionsRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    createXRPInitTransactions(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateXRPInitTransactionsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    createXRPInitTransactions(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateXRPInitTransactionsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    signTransaction(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.SignTransactionRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    signTransaction(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.SignTransactionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    signTransaction(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.SignTransactionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    signXRPInitTransactions(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.SignXRPInitTransactionsRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    signXRPInitTransactions(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.SignXRPInitTransactionsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    signXRPInitTransactions(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.SignXRPInitTransactionsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    sendTransaction(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.SendTransactionRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.SendTransactionResponse) => void): grpc.ClientUnaryCall;
    sendTransaction(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.SendTransactionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.SendTransactionResponse) => void): grpc.ClientUnaryCall;
    sendTransaction(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.SendTransactionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.SendTransactionResponse) => void): grpc.ClientUnaryCall;
    sendXRPInitTransactions(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.SendXRPInitTransactionsRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.SendXRPInitTransactionsResponse) => void): grpc.ClientUnaryCall;
    sendXRPInitTransactions(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.SendXRPInitTransactionsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.SendXRPInitTransactionsResponse) => void): grpc.ClientUnaryCall;
    sendXRPInitTransactions(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.SendXRPInitTransactionsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.SendXRPInitTransactionsResponse) => void): grpc.ClientUnaryCall;
    cancelTransaction(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CancelTransactionRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    cancelTransaction(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CancelTransactionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    cancelTransaction(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CancelTransactionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    replaceTransaction(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ReplaceTransactionRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ReplaceTransactionResponse) => void): grpc.ClientUnaryCall;
    replaceTransaction(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ReplaceTransactionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ReplaceTransactionResponse) => void): grpc.ClientUnaryCall;
    replaceTransaction(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ReplaceTransactionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ReplaceTransactionResponse) => void): grpc.ClientUnaryCall;
    getTransaction(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetTransactionRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Transaction) => void): grpc.ClientUnaryCall;
    getTransaction(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetTransactionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Transaction) => void): grpc.ClientUnaryCall;
    getTransaction(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetTransactionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Transaction) => void): grpc.ClientUnaryCall;
    getTransactionByTxID(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetTransactionByTxIDRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Transaction) => void): grpc.ClientUnaryCall;
    getTransactionByTxID(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetTransactionByTxIDRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Transaction) => void): grpc.ClientUnaryCall;
    getTransactionByTxID(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetTransactionByTxIDRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Transaction) => void): grpc.ClientUnaryCall;
    listTransactions(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListTransactionsRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListTransactionsResponse) => void): grpc.ClientUnaryCall;
    listTransactions(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListTransactionsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListTransactionsResponse) => void): grpc.ClientUnaryCall;
    listTransactions(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListTransactionsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListTransactionsResponse) => void): grpc.ClientUnaryCall;
    listTransactionsByFilter(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListTransactionsByFilterRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListTransactionsResponse) => void): grpc.ClientUnaryCall;
    listTransactionsByFilter(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListTransactionsByFilterRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListTransactionsResponse) => void): grpc.ClientUnaryCall;
    listTransactionsByFilter(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListTransactionsByFilterRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListTransactionsResponse) => void): grpc.ClientUnaryCall;
    getSignInfo(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetSignInfoRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.SignInfo) => void): grpc.ClientUnaryCall;
    getSignInfo(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetSignInfoRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.SignInfo) => void): grpc.ClientUnaryCall;
    getSignInfo(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetSignInfoRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.SignInfo) => void): grpc.ClientUnaryCall;
    listSignInfo(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListSignInfoRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListSignInfoResponse) => void): grpc.ClientUnaryCall;
    listSignInfo(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListSignInfoRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListSignInfoResponse) => void): grpc.ClientUnaryCall;
    listSignInfo(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListSignInfoRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListSignInfoResponse) => void): grpc.ClientUnaryCall;
    listXRPInitSignInfo(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListXRPInitSignInfoRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListXRPInitSignInfoResponse) => void): grpc.ClientUnaryCall;
    listXRPInitSignInfo(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListXRPInitSignInfoRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListXRPInitSignInfoResponse) => void): grpc.ClientUnaryCall;
    listXRPInitSignInfo(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListXRPInitSignInfoRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListXRPInitSignInfoResponse) => void): grpc.ClientUnaryCall;
    listTransfers(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListTransfersRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListTransfersResponse) => void): grpc.ClientUnaryCall;
    listTransfers(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListTransfersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListTransfersResponse) => void): grpc.ClientUnaryCall;
    listTransfers(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListTransfersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListTransfersResponse) => void): grpc.ClientUnaryCall;
    listTransfersByFilter(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListTransfersByFilterRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListTransfersResponse) => void): grpc.ClientUnaryCall;
    listTransfersByFilter(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListTransfersByFilterRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListTransfersResponse) => void): grpc.ClientUnaryCall;
    listTransfersByFilter(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListTransfersByFilterRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListTransfersResponse) => void): grpc.ClientUnaryCall;
    getRateSnapshot(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetRateSnapshotRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.RateSnapshot) => void): grpc.ClientUnaryCall;
    getRateSnapshot(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetRateSnapshotRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.RateSnapshot) => void): grpc.ClientUnaryCall;
    getRateSnapshot(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetRateSnapshotRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.RateSnapshot) => void): grpc.ClientUnaryCall;
    getLatestRateSnapshot(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetLatestRateSnapshotRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.RateSnapshot) => void): grpc.ClientUnaryCall;
    getLatestRateSnapshot(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetLatestRateSnapshotRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.RateSnapshot) => void): grpc.ClientUnaryCall;
    getLatestRateSnapshot(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetLatestRateSnapshotRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.RateSnapshot) => void): grpc.ClientUnaryCall;
    setRates(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.SetRatesRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.SetRatesResponse) => void): grpc.ClientUnaryCall;
    setRates(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.SetRatesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.SetRatesResponse) => void): grpc.ClientUnaryCall;
    setRates(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.SetRatesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.SetRatesResponse) => void): grpc.ClientUnaryCall;
    setDefaultRates(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.SetDefaultRatesRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.SetDefaultRatesResponse) => void): grpc.ClientUnaryCall;
    setDefaultRates(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.SetDefaultRatesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.SetDefaultRatesResponse) => void): grpc.ClientUnaryCall;
    setDefaultRates(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.SetDefaultRatesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.SetDefaultRatesResponse) => void): grpc.ClientUnaryCall;
    createLabeledAddress(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateLabeledAddressRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateLabeledAddressResponse) => void): grpc.ClientUnaryCall;
    createLabeledAddress(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateLabeledAddressRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateLabeledAddressResponse) => void): grpc.ClientUnaryCall;
    createLabeledAddress(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateLabeledAddressRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateLabeledAddressResponse) => void): grpc.ClientUnaryCall;
    getLabeledAddress(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetLabeledAddressRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.LabeledAddress) => void): grpc.ClientUnaryCall;
    getLabeledAddress(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetLabeledAddressRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.LabeledAddress) => void): grpc.ClientUnaryCall;
    getLabeledAddress(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetLabeledAddressRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.LabeledAddress) => void): grpc.ClientUnaryCall;
    listLabeledAddresses(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListLabeledAddressesRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListLabeledAddressesResponse) => void): grpc.ClientUnaryCall;
    listLabeledAddresses(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListLabeledAddressesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListLabeledAddressesResponse) => void): grpc.ClientUnaryCall;
    listLabeledAddresses(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListLabeledAddressesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListLabeledAddressesResponse) => void): grpc.ClientUnaryCall;
    listLabeledAddressesByFilter(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListLabeledAddressesByFilterRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListLabeledAddressesByFilterResponse) => void): grpc.ClientUnaryCall;
    listLabeledAddressesByFilter(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListLabeledAddressesByFilterRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListLabeledAddressesByFilterResponse) => void): grpc.ClientUnaryCall;
    listLabeledAddressesByFilter(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListLabeledAddressesByFilterRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListLabeledAddressesByFilterResponse) => void): grpc.ClientUnaryCall;
    isDeletableLabeledAddress(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.IsDeletableLabeledAddressRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.IsDeletableLabeledAddressResponse) => void): grpc.ClientUnaryCall;
    isDeletableLabeledAddress(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.IsDeletableLabeledAddressRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.IsDeletableLabeledAddressResponse) => void): grpc.ClientUnaryCall;
    isDeletableLabeledAddress(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.IsDeletableLabeledAddressRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.IsDeletableLabeledAddressResponse) => void): grpc.ClientUnaryCall;
    updateLabeledAddress(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpdateLabeledAddressRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.LabeledAddress) => void): grpc.ClientUnaryCall;
    updateLabeledAddress(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpdateLabeledAddressRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.LabeledAddress) => void): grpc.ClientUnaryCall;
    updateLabeledAddress(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpdateLabeledAddressRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.LabeledAddress) => void): grpc.ClientUnaryCall;
    deleteAddress(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.DeleteLabeledAddressRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    deleteAddress(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.DeleteLabeledAddressRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    deleteAddress(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.DeleteLabeledAddressRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    reviewLabeledAddressProposal(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ReviewLabeledAddressProposalRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    reviewLabeledAddressProposal(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ReviewLabeledAddressProposalRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    reviewLabeledAddressProposal(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ReviewLabeledAddressProposalRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    createWhitelist(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateWhitelistRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateWhitelistResponse) => void): grpc.ClientUnaryCall;
    createWhitelist(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateWhitelistRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateWhitelistResponse) => void): grpc.ClientUnaryCall;
    createWhitelist(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateWhitelistRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateWhitelistResponse) => void): grpc.ClientUnaryCall;
    getWhitelist(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetWhitelistRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Whitelist) => void): grpc.ClientUnaryCall;
    getWhitelist(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetWhitelistRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Whitelist) => void): grpc.ClientUnaryCall;
    getWhitelist(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetWhitelistRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Whitelist) => void): grpc.ClientUnaryCall;
    listWhitelists(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListWhitelistsRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListWhitelistsResponse) => void): grpc.ClientUnaryCall;
    listWhitelists(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListWhitelistsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListWhitelistsResponse) => void): grpc.ClientUnaryCall;
    listWhitelists(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListWhitelistsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListWhitelistsResponse) => void): grpc.ClientUnaryCall;
    listWhitelistsByFilter(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListWhitelistsByFilterRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListWhitelistsByFilterResponse) => void): grpc.ClientUnaryCall;
    listWhitelistsByFilter(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListWhitelistsByFilterRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListWhitelistsByFilterResponse) => void): grpc.ClientUnaryCall;
    listWhitelistsByFilter(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListWhitelistsByFilterRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListWhitelistsByFilterResponse) => void): grpc.ClientUnaryCall;
    isDeletableWhitelist(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.IsDeletableWhitelistRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.IsDeletableWhitelistResponse) => void): grpc.ClientUnaryCall;
    isDeletableWhitelist(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.IsDeletableWhitelistRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.IsDeletableWhitelistResponse) => void): grpc.ClientUnaryCall;
    isDeletableWhitelist(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.IsDeletableWhitelistRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.IsDeletableWhitelistResponse) => void): grpc.ClientUnaryCall;
    updateWhitelist(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpdateWhitelistRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Whitelist) => void): grpc.ClientUnaryCall;
    updateWhitelist(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpdateWhitelistRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Whitelist) => void): grpc.ClientUnaryCall;
    updateWhitelist(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpdateWhitelistRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Whitelist) => void): grpc.ClientUnaryCall;
    updateWhitelistAddresses(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpdateWhitelistAddressesRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Whitelist) => void): grpc.ClientUnaryCall;
    updateWhitelistAddresses(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpdateWhitelistAddressesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Whitelist) => void): grpc.ClientUnaryCall;
    updateWhitelistAddresses(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpdateWhitelistAddressesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Whitelist) => void): grpc.ClientUnaryCall;
    deleteWhitelist(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.DeleteWhitelistRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    deleteWhitelist(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.DeleteWhitelistRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    deleteWhitelist(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.DeleteWhitelistRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    createTransferLimit(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransferLimitRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransferLimitResponse) => void): grpc.ClientUnaryCall;
    createTransferLimit(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransferLimitRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransferLimitResponse) => void): grpc.ClientUnaryCall;
    createTransferLimit(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransferLimitRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransferLimitResponse) => void): grpc.ClientUnaryCall;
    getTransferLimit(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetTransferLimitRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.TransferLimit) => void): grpc.ClientUnaryCall;
    getTransferLimit(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetTransferLimitRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.TransferLimit) => void): grpc.ClientUnaryCall;
    getTransferLimit(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetTransferLimitRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.TransferLimit) => void): grpc.ClientUnaryCall;
    listTransferLimits(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListTransferLimitsRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListTransferLimitsResponse) => void): grpc.ClientUnaryCall;
    listTransferLimits(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListTransferLimitsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListTransferLimitsResponse) => void): grpc.ClientUnaryCall;
    listTransferLimits(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListTransferLimitsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListTransferLimitsResponse) => void): grpc.ClientUnaryCall;
    isDeletableTransferLimit(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.IsDeletableTransferLimitRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.IsDeletableTransferLimitResponse) => void): grpc.ClientUnaryCall;
    isDeletableTransferLimit(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.IsDeletableTransferLimitRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.IsDeletableTransferLimitResponse) => void): grpc.ClientUnaryCall;
    isDeletableTransferLimit(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.IsDeletableTransferLimitRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.IsDeletableTransferLimitResponse) => void): grpc.ClientUnaryCall;
    updateTransferLimit(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpdateTransferLimitRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.TransferLimit) => void): grpc.ClientUnaryCall;
    updateTransferLimit(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpdateTransferLimitRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.TransferLimit) => void): grpc.ClientUnaryCall;
    updateTransferLimit(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpdateTransferLimitRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.TransferLimit) => void): grpc.ClientUnaryCall;
    updateTransferLimitName(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpdateTransferLimitNameRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.TransferLimit) => void): grpc.ClientUnaryCall;
    updateTransferLimitName(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpdateTransferLimitNameRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.TransferLimit) => void): grpc.ClientUnaryCall;
    updateTransferLimitName(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpdateTransferLimitNameRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.TransferLimit) => void): grpc.ClientUnaryCall;
    deleteTransferLimit(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.DeleteTransferLimitRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    deleteTransferLimit(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.DeleteTransferLimitRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    deleteTransferLimit(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.DeleteTransferLimitRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    reviewTransferLimitProposal(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ReviewTransferLimitProposalRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    reviewTransferLimitProposal(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ReviewTransferLimitProposalRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    reviewTransferLimitProposal(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ReviewTransferLimitProposalRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    createPolicy(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreatePolicyRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreatePolicyResponse) => void): grpc.ClientUnaryCall;
    createPolicy(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreatePolicyRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreatePolicyResponse) => void): grpc.ClientUnaryCall;
    createPolicy(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreatePolicyRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreatePolicyResponse) => void): grpc.ClientUnaryCall;
    getPolicy(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetPolicyRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Policy) => void): grpc.ClientUnaryCall;
    getPolicy(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetPolicyRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Policy) => void): grpc.ClientUnaryCall;
    getPolicy(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetPolicyRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Policy) => void): grpc.ClientUnaryCall;
    listPolicies(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListPoliciesRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListPoliciesResponse) => void): grpc.ClientUnaryCall;
    listPolicies(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListPoliciesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListPoliciesResponse) => void): grpc.ClientUnaryCall;
    listPolicies(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListPoliciesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListPoliciesResponse) => void): grpc.ClientUnaryCall;
    listPoliciesByFilter(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListPoliciesByFilterRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListPoliciesByFilterResponse) => void): grpc.ClientUnaryCall;
    listPoliciesByFilter(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListPoliciesByFilterRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListPoliciesByFilterResponse) => void): grpc.ClientUnaryCall;
    listPoliciesByFilter(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListPoliciesByFilterRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListPoliciesByFilterResponse) => void): grpc.ClientUnaryCall;
    isDeletablePolicy(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.IsDeletablePolicyRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.IsDeletablePolicyResponse) => void): grpc.ClientUnaryCall;
    isDeletablePolicy(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.IsDeletablePolicyRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.IsDeletablePolicyResponse) => void): grpc.ClientUnaryCall;
    isDeletablePolicy(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.IsDeletablePolicyRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.IsDeletablePolicyResponse) => void): grpc.ClientUnaryCall;
    updatePolicy(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpdatePolicyRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Policy) => void): grpc.ClientUnaryCall;
    updatePolicy(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpdatePolicyRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Policy) => void): grpc.ClientUnaryCall;
    updatePolicy(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpdatePolicyRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Policy) => void): grpc.ClientUnaryCall;
    deletePolicy(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.DeletePolicyRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    deletePolicy(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.DeletePolicyRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    deletePolicy(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.DeletePolicyRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    reviewPolicyProposal(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ReviewPolicyProposalRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    reviewPolicyProposal(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ReviewPolicyProposalRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    reviewPolicyProposal(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ReviewPolicyProposalRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    getSpendableBalance(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetSpendableBalanceRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetSpendableBalanceResponse) => void): grpc.ClientUnaryCall;
    getSpendableBalance(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetSpendableBalanceRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetSpendableBalanceResponse) => void): grpc.ClientUnaryCall;
    getSpendableBalance(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetSpendableBalanceRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetSpendableBalanceResponse) => void): grpc.ClientUnaryCall;
    getTotalBalance(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetTotalBalanceRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.TotalBalance) => void): grpc.ClientUnaryCall;
    getTotalBalance(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetTotalBalanceRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.TotalBalance) => void): grpc.ClientUnaryCall;
    getTotalBalance(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetTotalBalanceRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.TotalBalance) => void): grpc.ClientUnaryCall;
    listBalanceSnapshots(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListBalanceSnapshotsRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListBalanceSnapshotsResponse) => void): grpc.ClientUnaryCall;
    listBalanceSnapshots(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListBalanceSnapshotsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListBalanceSnapshotsResponse) => void): grpc.ClientUnaryCall;
    listBalanceSnapshots(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListBalanceSnapshotsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListBalanceSnapshotsResponse) => void): grpc.ClientUnaryCall;
    calculateFee(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CalculateFeeRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CalculateFeeResponse) => void): grpc.ClientUnaryCall;
    calculateFee(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CalculateFeeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CalculateFeeResponse) => void): grpc.ClientUnaryCall;
    calculateFee(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CalculateFeeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CalculateFeeResponse) => void): grpc.ClientUnaryCall;
    getMembersDeactivatabilities(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetMembersDeactivatabilitiesRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetMembersDeactivatabilitiesResponse) => void): grpc.ClientUnaryCall;
    getMembersDeactivatabilities(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetMembersDeactivatabilitiesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetMembersDeactivatabilitiesResponse) => void): grpc.ClientUnaryCall;
    getMembersDeactivatabilities(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetMembersDeactivatabilitiesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetMembersDeactivatabilitiesResponse) => void): grpc.ClientUnaryCall;
    getRecommendedFeeRate(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetRecommendedFeeRateRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetRecommendedFeeRateResponse) => void): grpc.ClientUnaryCall;
    getRecommendedFeeRate(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetRecommendedFeeRateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetRecommendedFeeRateResponse) => void): grpc.ClientUnaryCall;
    getRecommendedFeeRate(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetRecommendedFeeRateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetRecommendedFeeRateResponse) => void): grpc.ClientUnaryCall;
    validateAddress(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ValidateAddressRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ValidateAddressResponse) => void): grpc.ClientUnaryCall;
    validateAddress(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ValidateAddressRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ValidateAddressResponse) => void): grpc.ClientUnaryCall;
    validateAddress(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ValidateAddressRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ValidateAddressResponse) => void): grpc.ClientUnaryCall;
    listAuditLogs(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListAuditLogsRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListAuditLogsResponse) => void): grpc.ClientUnaryCall;
    listAuditLogs(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListAuditLogsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListAuditLogsResponse) => void): grpc.ClientUnaryCall;
    listAuditLogs(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListAuditLogsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListAuditLogsResponse) => void): grpc.ClientUnaryCall;
    listForwardingThresholds(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListForwardingThresholdsRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListForwardingThresholdsResponse) => void): grpc.ClientUnaryCall;
    listForwardingThresholds(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListForwardingThresholdsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListForwardingThresholdsResponse) => void): grpc.ClientUnaryCall;
    listForwardingThresholds(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListForwardingThresholdsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListForwardingThresholdsResponse) => void): grpc.ClientUnaryCall;
    upsertForwardingThreshold(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpsertForwardingThresholdRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpsertForwardingThresholdResponse) => void): grpc.ClientUnaryCall;
    upsertForwardingThreshold(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpsertForwardingThresholdRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpsertForwardingThresholdResponse) => void): grpc.ClientUnaryCall;
    upsertForwardingThreshold(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpsertForwardingThresholdRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpsertForwardingThresholdResponse) => void): grpc.ClientUnaryCall;
    listStakingHistoriesByFilter(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListStakingHistoriesByFilterRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListStakingHistoriesResponse) => void): grpc.ClientUnaryCall;
    listStakingHistoriesByFilter(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListStakingHistoriesByFilterRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListStakingHistoriesResponse) => void): grpc.ClientUnaryCall;
    listStakingHistoriesByFilter(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListStakingHistoriesByFilterRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListStakingHistoriesResponse) => void): grpc.ClientUnaryCall;
    listStakingValidatorsByFilter(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListStakingValidatorsByFilterRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListStakingValidatorsResponse) => void): grpc.ClientUnaryCall;
    listStakingValidatorsByFilter(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListStakingValidatorsByFilterRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListStakingValidatorsResponse) => void): grpc.ClientUnaryCall;
    listStakingValidatorsByFilter(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListStakingValidatorsByFilterRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListStakingValidatorsResponse) => void): grpc.ClientUnaryCall;
}

export class GlobalAPIClient extends grpc.Client implements IGlobalAPIClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public createWallet(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateWalletRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateWalletResponse) => void): grpc.ClientUnaryCall;
    public createWallet(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateWalletRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateWalletResponse) => void): grpc.ClientUnaryCall;
    public createWallet(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateWalletRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateWalletResponse) => void): grpc.ClientUnaryCall;
    public getWallet(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetWalletRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Wallet) => void): grpc.ClientUnaryCall;
    public getWallet(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetWalletRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Wallet) => void): grpc.ClientUnaryCall;
    public getWallet(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetWalletRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Wallet) => void): grpc.ClientUnaryCall;
    public cancelWallet(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CancelWalletRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public cancelWallet(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CancelWalletRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public cancelWallet(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CancelWalletRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public archiveWallet(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ArchiveWalletRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public archiveWallet(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ArchiveWalletRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public archiveWallet(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ArchiveWalletRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public unArchiveWallet(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UnArchiveWalletRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public unArchiveWallet(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UnArchiveWalletRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public unArchiveWallet(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UnArchiveWalletRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public listWallets(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListWalletsRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListWalletsResponse) => void): grpc.ClientUnaryCall;
    public listWallets(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListWalletsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListWalletsResponse) => void): grpc.ClientUnaryCall;
    public listWallets(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListWalletsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListWalletsResponse) => void): grpc.ClientUnaryCall;
    public listWalletsByFilter(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListWalletsByFilterRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListWalletsResponse) => void): grpc.ClientUnaryCall;
    public listWalletsByFilter(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListWalletsByFilterRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListWalletsResponse) => void): grpc.ClientUnaryCall;
    public listWalletsByFilter(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListWalletsByFilterRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListWalletsResponse) => void): grpc.ClientUnaryCall;
    public listBaseWallets(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListBaseWalletsRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListBaseWalletsResponse) => void): grpc.ClientUnaryCall;
    public listBaseWallets(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListBaseWalletsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListBaseWalletsResponse) => void): grpc.ClientUnaryCall;
    public listBaseWallets(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListBaseWalletsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListBaseWalletsResponse) => void): grpc.ClientUnaryCall;
    public listStakingWalletsByFilter(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListStakingWalletsByFilterRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListStakingWalletsResponse) => void): grpc.ClientUnaryCall;
    public listStakingWalletsByFilter(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListStakingWalletsByFilterRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListStakingWalletsResponse) => void): grpc.ClientUnaryCall;
    public listStakingWalletsByFilter(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListStakingWalletsByFilterRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListStakingWalletsResponse) => void): grpc.ClientUnaryCall;
    public updateWalletName(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpdateWalletNameRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public updateWalletName(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpdateWalletNameRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public updateWalletName(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpdateWalletNameRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public updateWalletValidation(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpdateWalletValidationRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public updateWalletValidation(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpdateWalletValidationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public updateWalletValidation(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpdateWalletValidationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public updateWalletPolicy(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpdateWalletPolicyRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public updateWalletPolicy(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpdateWalletPolicyRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public updateWalletPolicy(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpdateWalletPolicyRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public reviewWalletProposal(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ReviewWalletProposalRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public reviewWalletProposal(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ReviewWalletProposalRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public reviewWalletProposal(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ReviewWalletProposalRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public flushBalance(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.FlushBalanceRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.FlushBalanceResponse) => void): grpc.ClientUnaryCall;
    public flushBalance(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.FlushBalanceRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.FlushBalanceResponse) => void): grpc.ClientUnaryCall;
    public flushBalance(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.FlushBalanceRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.FlushBalanceResponse) => void): grpc.ClientUnaryCall;
    public createWalletGroup(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateWalletGroupRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateWalletGroupResponse) => void): grpc.ClientUnaryCall;
    public createWalletGroup(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateWalletGroupRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateWalletGroupResponse) => void): grpc.ClientUnaryCall;
    public createWalletGroup(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateWalletGroupRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateWalletGroupResponse) => void): grpc.ClientUnaryCall;
    public updateWalletGroupName(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpdateWalletGroupNameRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public updateWalletGroupName(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpdateWalletGroupNameRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public updateWalletGroupName(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpdateWalletGroupNameRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public updateWalletGroup(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpdateWalletGroupRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public updateWalletGroup(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpdateWalletGroupRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public updateWalletGroup(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpdateWalletGroupRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public getWalletGroup(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetWalletGroupRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.WalletGroup) => void): grpc.ClientUnaryCall;
    public getWalletGroup(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetWalletGroupRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.WalletGroup) => void): grpc.ClientUnaryCall;
    public getWalletGroup(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetWalletGroupRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.WalletGroup) => void): grpc.ClientUnaryCall;
    public listWalletGroups(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListWalletGroupsRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListWalletGroupsResponse) => void): grpc.ClientUnaryCall;
    public listWalletGroups(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListWalletGroupsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListWalletGroupsResponse) => void): grpc.ClientUnaryCall;
    public listWalletGroups(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListWalletGroupsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListWalletGroupsResponse) => void): grpc.ClientUnaryCall;
    public updateDestinationWalletID(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpdateDestinationWalletIDRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public updateDestinationWalletID(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpdateDestinationWalletIDRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public updateDestinationWalletID(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpdateDestinationWalletIDRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public getCosmosBalance(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetCosmosBalanceRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetCosmosBalanceResponse) => void): grpc.ClientUnaryCall;
    public getCosmosBalance(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetCosmosBalanceRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetCosmosBalanceResponse) => void): grpc.ClientUnaryCall;
    public getCosmosBalance(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetCosmosBalanceRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetCosmosBalanceResponse) => void): grpc.ClientUnaryCall;
    public listCosmosDelegateHistories(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListCosmosDelegateHistoriesRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListCosmosDelegateHistoriesResponse) => void): grpc.ClientUnaryCall;
    public listCosmosDelegateHistories(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListCosmosDelegateHistoriesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListCosmosDelegateHistoriesResponse) => void): grpc.ClientUnaryCall;
    public listCosmosDelegateHistories(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListCosmosDelegateHistoriesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListCosmosDelegateHistoriesResponse) => void): grpc.ClientUnaryCall;
    public enableUTXO(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.EnableUTXORequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public enableUTXO(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.EnableUTXORequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public enableUTXO(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.EnableUTXORequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public disableUTXO(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.DisableUTXORequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public disableUTXO(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.DisableUTXORequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public disableUTXO(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.DisableUTXORequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public updateWalletIsStakingAvailable(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpdateWalletIsStakingAvailableRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public updateWalletIsStakingAvailable(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpdateWalletIsStakingAvailableRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public updateWalletIsStakingAvailable(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpdateWalletIsStakingAvailableRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public refreshStakingWalletClaimableReward(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.RefreshStakingWalletClaimableRewardRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.RefreshStakingWalletClaimableRewardResponse) => void): grpc.ClientUnaryCall;
    public refreshStakingWalletClaimableReward(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.RefreshStakingWalletClaimableRewardRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.RefreshStakingWalletClaimableRewardResponse) => void): grpc.ClientUnaryCall;
    public refreshStakingWalletClaimableReward(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.RefreshStakingWalletClaimableRewardRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.RefreshStakingWalletClaimableRewardResponse) => void): grpc.ClientUnaryCall;
    public approveWallet(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ApproveWalletRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public approveWallet(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ApproveWalletRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public approveWallet(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ApproveWalletRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public approveTransaction(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ApproveTransactionRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public approveTransaction(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ApproveTransactionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public approveTransaction(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ApproveTransactionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public createAddress(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateAddressRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateAddressResponse) => void): grpc.ClientUnaryCall;
    public createAddress(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateAddressRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateAddressResponse) => void): grpc.ClientUnaryCall;
    public createAddress(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateAddressRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateAddressResponse) => void): grpc.ClientUnaryCall;
    public getAddress(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetAddressRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Address) => void): grpc.ClientUnaryCall;
    public getAddress(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetAddressRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Address) => void): grpc.ClientUnaryCall;
    public getAddress(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetAddressRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Address) => void): grpc.ClientUnaryCall;
    public getAddressByAddress(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetAddressByAddressRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Address) => void): grpc.ClientUnaryCall;
    public getAddressByAddress(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetAddressByAddressRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Address) => void): grpc.ClientUnaryCall;
    public getAddressByAddress(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetAddressByAddressRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Address) => void): grpc.ClientUnaryCall;
    public getAddressByAddressCoin(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetAddressByAddressCoinRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Address) => void): grpc.ClientUnaryCall;
    public getAddressByAddressCoin(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetAddressByAddressCoinRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Address) => void): grpc.ClientUnaryCall;
    public getAddressByAddressCoin(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetAddressByAddressCoinRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Address) => void): grpc.ClientUnaryCall;
    public getAddressByIndex(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetAddressByIndexRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Address) => void): grpc.ClientUnaryCall;
    public getAddressByIndex(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetAddressByIndexRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Address) => void): grpc.ClientUnaryCall;
    public getAddressByIndex(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetAddressByIndexRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Address) => void): grpc.ClientUnaryCall;
    public listAddresses(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListAddressesRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListAddressesResponse) => void): grpc.ClientUnaryCall;
    public listAddresses(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListAddressesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListAddressesResponse) => void): grpc.ClientUnaryCall;
    public listAddresses(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListAddressesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListAddressesResponse) => void): grpc.ClientUnaryCall;
    public listAddressesWithBalance(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListAddressesWithBalanceRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListAddressesWithBalanceResponse) => void): grpc.ClientUnaryCall;
    public listAddressesWithBalance(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListAddressesWithBalanceRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListAddressesWithBalanceResponse) => void): grpc.ClientUnaryCall;
    public listAddressesWithBalance(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListAddressesWithBalanceRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListAddressesWithBalanceResponse) => void): grpc.ClientUnaryCall;
    public updateAddressBalance(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpdateAddressBalanceRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public updateAddressBalance(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpdateAddressBalanceRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public updateAddressBalance(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpdateAddressBalanceRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public getEthereumFeeAddress(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetEthereumFeeAddressRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.EthereumFeeAddress) => void): grpc.ClientUnaryCall;
    public getEthereumFeeAddress(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetEthereumFeeAddressRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.EthereumFeeAddress) => void): grpc.ClientUnaryCall;
    public getEthereumFeeAddress(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetEthereumFeeAddressRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.EthereumFeeAddress) => void): grpc.ClientUnaryCall;
    public listSubstrateChildAddresses(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListSubstrateChildAddressesRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListSubstrateChildAddressesResponse) => void): grpc.ClientUnaryCall;
    public listSubstrateChildAddresses(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListSubstrateChildAddressesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListSubstrateChildAddressesResponse) => void): grpc.ClientUnaryCall;
    public listSubstrateChildAddresses(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListSubstrateChildAddressesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListSubstrateChildAddressesResponse) => void): grpc.ClientUnaryCall;
    public listSymbolChildAddresses(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListSymbolChildAddressesRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListSymbolChildAddressesResponse) => void): grpc.ClientUnaryCall;
    public listSymbolChildAddresses(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListSymbolChildAddressesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListSymbolChildAddressesResponse) => void): grpc.ClientUnaryCall;
    public listSymbolChildAddresses(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListSymbolChildAddressesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListSymbolChildAddressesResponse) => void): grpc.ClientUnaryCall;
    public listIOSTChildAccounts(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListIOSTChildAccountsRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListIOSTChildAccountsResponse) => void): grpc.ClientUnaryCall;
    public listIOSTChildAccounts(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListIOSTChildAccountsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListIOSTChildAccountsResponse) => void): grpc.ClientUnaryCall;
    public listIOSTChildAccounts(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListIOSTChildAccountsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListIOSTChildAccountsResponse) => void): grpc.ClientUnaryCall;
    public importAddress(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ImportAddressRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public importAddress(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ImportAddressRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public importAddress(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ImportAddressRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public listCallers(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListCallersRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListCallersResponse) => void): grpc.ClientUnaryCall;
    public listCallers(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListCallersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListCallersResponse) => void): grpc.ClientUnaryCall;
    public listCallers(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListCallersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListCallersResponse) => void): grpc.ClientUnaryCall;
    public listFeeDeposits(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListFeeDepositsRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListFeeDepositsResponse) => void): grpc.ClientUnaryCall;
    public listFeeDeposits(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListFeeDepositsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListFeeDepositsResponse) => void): grpc.ClientUnaryCall;
    public listFeeDeposits(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListFeeDepositsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListFeeDepositsResponse) => void): grpc.ClientUnaryCall;
    public registerKey(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.RegisterKeyRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.RegisterKeyResponse) => void): grpc.ClientUnaryCall;
    public registerKey(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.RegisterKeyRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.RegisterKeyResponse) => void): grpc.ClientUnaryCall;
    public registerKey(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.RegisterKeyRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.RegisterKeyResponse) => void): grpc.ClientUnaryCall;
    public createTransaction(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransactionRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransactionResponse) => void): grpc.ClientUnaryCall;
    public createTransaction(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransactionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransactionResponse) => void): grpc.ClientUnaryCall;
    public createTransaction(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransactionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransactionResponse) => void): grpc.ClientUnaryCall;
    public createXRPInitTransactions(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateXRPInitTransactionsRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public createXRPInitTransactions(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateXRPInitTransactionsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public createXRPInitTransactions(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateXRPInitTransactionsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public signTransaction(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.SignTransactionRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public signTransaction(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.SignTransactionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public signTransaction(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.SignTransactionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public signXRPInitTransactions(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.SignXRPInitTransactionsRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public signXRPInitTransactions(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.SignXRPInitTransactionsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public signXRPInitTransactions(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.SignXRPInitTransactionsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public sendTransaction(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.SendTransactionRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.SendTransactionResponse) => void): grpc.ClientUnaryCall;
    public sendTransaction(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.SendTransactionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.SendTransactionResponse) => void): grpc.ClientUnaryCall;
    public sendTransaction(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.SendTransactionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.SendTransactionResponse) => void): grpc.ClientUnaryCall;
    public sendXRPInitTransactions(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.SendXRPInitTransactionsRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.SendXRPInitTransactionsResponse) => void): grpc.ClientUnaryCall;
    public sendXRPInitTransactions(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.SendXRPInitTransactionsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.SendXRPInitTransactionsResponse) => void): grpc.ClientUnaryCall;
    public sendXRPInitTransactions(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.SendXRPInitTransactionsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.SendXRPInitTransactionsResponse) => void): grpc.ClientUnaryCall;
    public cancelTransaction(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CancelTransactionRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public cancelTransaction(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CancelTransactionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public cancelTransaction(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CancelTransactionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public replaceTransaction(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ReplaceTransactionRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ReplaceTransactionResponse) => void): grpc.ClientUnaryCall;
    public replaceTransaction(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ReplaceTransactionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ReplaceTransactionResponse) => void): grpc.ClientUnaryCall;
    public replaceTransaction(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ReplaceTransactionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ReplaceTransactionResponse) => void): grpc.ClientUnaryCall;
    public getTransaction(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetTransactionRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Transaction) => void): grpc.ClientUnaryCall;
    public getTransaction(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetTransactionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Transaction) => void): grpc.ClientUnaryCall;
    public getTransaction(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetTransactionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Transaction) => void): grpc.ClientUnaryCall;
    public getTransactionByTxID(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetTransactionByTxIDRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Transaction) => void): grpc.ClientUnaryCall;
    public getTransactionByTxID(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetTransactionByTxIDRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Transaction) => void): grpc.ClientUnaryCall;
    public getTransactionByTxID(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetTransactionByTxIDRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Transaction) => void): grpc.ClientUnaryCall;
    public listTransactions(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListTransactionsRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListTransactionsResponse) => void): grpc.ClientUnaryCall;
    public listTransactions(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListTransactionsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListTransactionsResponse) => void): grpc.ClientUnaryCall;
    public listTransactions(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListTransactionsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListTransactionsResponse) => void): grpc.ClientUnaryCall;
    public listTransactionsByFilter(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListTransactionsByFilterRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListTransactionsResponse) => void): grpc.ClientUnaryCall;
    public listTransactionsByFilter(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListTransactionsByFilterRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListTransactionsResponse) => void): grpc.ClientUnaryCall;
    public listTransactionsByFilter(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListTransactionsByFilterRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListTransactionsResponse) => void): grpc.ClientUnaryCall;
    public getSignInfo(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetSignInfoRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.SignInfo) => void): grpc.ClientUnaryCall;
    public getSignInfo(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetSignInfoRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.SignInfo) => void): grpc.ClientUnaryCall;
    public getSignInfo(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetSignInfoRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.SignInfo) => void): grpc.ClientUnaryCall;
    public listSignInfo(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListSignInfoRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListSignInfoResponse) => void): grpc.ClientUnaryCall;
    public listSignInfo(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListSignInfoRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListSignInfoResponse) => void): grpc.ClientUnaryCall;
    public listSignInfo(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListSignInfoRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListSignInfoResponse) => void): grpc.ClientUnaryCall;
    public listXRPInitSignInfo(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListXRPInitSignInfoRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListXRPInitSignInfoResponse) => void): grpc.ClientUnaryCall;
    public listXRPInitSignInfo(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListXRPInitSignInfoRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListXRPInitSignInfoResponse) => void): grpc.ClientUnaryCall;
    public listXRPInitSignInfo(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListXRPInitSignInfoRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListXRPInitSignInfoResponse) => void): grpc.ClientUnaryCall;
    public listTransfers(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListTransfersRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListTransfersResponse) => void): grpc.ClientUnaryCall;
    public listTransfers(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListTransfersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListTransfersResponse) => void): grpc.ClientUnaryCall;
    public listTransfers(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListTransfersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListTransfersResponse) => void): grpc.ClientUnaryCall;
    public listTransfersByFilter(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListTransfersByFilterRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListTransfersResponse) => void): grpc.ClientUnaryCall;
    public listTransfersByFilter(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListTransfersByFilterRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListTransfersResponse) => void): grpc.ClientUnaryCall;
    public listTransfersByFilter(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListTransfersByFilterRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListTransfersResponse) => void): grpc.ClientUnaryCall;
    public getRateSnapshot(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetRateSnapshotRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.RateSnapshot) => void): grpc.ClientUnaryCall;
    public getRateSnapshot(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetRateSnapshotRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.RateSnapshot) => void): grpc.ClientUnaryCall;
    public getRateSnapshot(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetRateSnapshotRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.RateSnapshot) => void): grpc.ClientUnaryCall;
    public getLatestRateSnapshot(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetLatestRateSnapshotRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.RateSnapshot) => void): grpc.ClientUnaryCall;
    public getLatestRateSnapshot(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetLatestRateSnapshotRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.RateSnapshot) => void): grpc.ClientUnaryCall;
    public getLatestRateSnapshot(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetLatestRateSnapshotRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.RateSnapshot) => void): grpc.ClientUnaryCall;
    public setRates(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.SetRatesRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.SetRatesResponse) => void): grpc.ClientUnaryCall;
    public setRates(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.SetRatesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.SetRatesResponse) => void): grpc.ClientUnaryCall;
    public setRates(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.SetRatesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.SetRatesResponse) => void): grpc.ClientUnaryCall;
    public setDefaultRates(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.SetDefaultRatesRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.SetDefaultRatesResponse) => void): grpc.ClientUnaryCall;
    public setDefaultRates(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.SetDefaultRatesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.SetDefaultRatesResponse) => void): grpc.ClientUnaryCall;
    public setDefaultRates(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.SetDefaultRatesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.SetDefaultRatesResponse) => void): grpc.ClientUnaryCall;
    public createLabeledAddress(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateLabeledAddressRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateLabeledAddressResponse) => void): grpc.ClientUnaryCall;
    public createLabeledAddress(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateLabeledAddressRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateLabeledAddressResponse) => void): grpc.ClientUnaryCall;
    public createLabeledAddress(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateLabeledAddressRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateLabeledAddressResponse) => void): grpc.ClientUnaryCall;
    public getLabeledAddress(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetLabeledAddressRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.LabeledAddress) => void): grpc.ClientUnaryCall;
    public getLabeledAddress(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetLabeledAddressRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.LabeledAddress) => void): grpc.ClientUnaryCall;
    public getLabeledAddress(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetLabeledAddressRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.LabeledAddress) => void): grpc.ClientUnaryCall;
    public listLabeledAddresses(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListLabeledAddressesRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListLabeledAddressesResponse) => void): grpc.ClientUnaryCall;
    public listLabeledAddresses(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListLabeledAddressesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListLabeledAddressesResponse) => void): grpc.ClientUnaryCall;
    public listLabeledAddresses(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListLabeledAddressesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListLabeledAddressesResponse) => void): grpc.ClientUnaryCall;
    public listLabeledAddressesByFilter(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListLabeledAddressesByFilterRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListLabeledAddressesByFilterResponse) => void): grpc.ClientUnaryCall;
    public listLabeledAddressesByFilter(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListLabeledAddressesByFilterRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListLabeledAddressesByFilterResponse) => void): grpc.ClientUnaryCall;
    public listLabeledAddressesByFilter(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListLabeledAddressesByFilterRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListLabeledAddressesByFilterResponse) => void): grpc.ClientUnaryCall;
    public isDeletableLabeledAddress(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.IsDeletableLabeledAddressRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.IsDeletableLabeledAddressResponse) => void): grpc.ClientUnaryCall;
    public isDeletableLabeledAddress(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.IsDeletableLabeledAddressRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.IsDeletableLabeledAddressResponse) => void): grpc.ClientUnaryCall;
    public isDeletableLabeledAddress(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.IsDeletableLabeledAddressRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.IsDeletableLabeledAddressResponse) => void): grpc.ClientUnaryCall;
    public updateLabeledAddress(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpdateLabeledAddressRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.LabeledAddress) => void): grpc.ClientUnaryCall;
    public updateLabeledAddress(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpdateLabeledAddressRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.LabeledAddress) => void): grpc.ClientUnaryCall;
    public updateLabeledAddress(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpdateLabeledAddressRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.LabeledAddress) => void): grpc.ClientUnaryCall;
    public deleteAddress(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.DeleteLabeledAddressRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public deleteAddress(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.DeleteLabeledAddressRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public deleteAddress(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.DeleteLabeledAddressRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public reviewLabeledAddressProposal(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ReviewLabeledAddressProposalRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public reviewLabeledAddressProposal(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ReviewLabeledAddressProposalRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public reviewLabeledAddressProposal(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ReviewLabeledAddressProposalRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public createWhitelist(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateWhitelistRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateWhitelistResponse) => void): grpc.ClientUnaryCall;
    public createWhitelist(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateWhitelistRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateWhitelistResponse) => void): grpc.ClientUnaryCall;
    public createWhitelist(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateWhitelistRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateWhitelistResponse) => void): grpc.ClientUnaryCall;
    public getWhitelist(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetWhitelistRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Whitelist) => void): grpc.ClientUnaryCall;
    public getWhitelist(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetWhitelistRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Whitelist) => void): grpc.ClientUnaryCall;
    public getWhitelist(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetWhitelistRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Whitelist) => void): grpc.ClientUnaryCall;
    public listWhitelists(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListWhitelistsRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListWhitelistsResponse) => void): grpc.ClientUnaryCall;
    public listWhitelists(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListWhitelistsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListWhitelistsResponse) => void): grpc.ClientUnaryCall;
    public listWhitelists(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListWhitelistsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListWhitelistsResponse) => void): grpc.ClientUnaryCall;
    public listWhitelistsByFilter(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListWhitelistsByFilterRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListWhitelistsByFilterResponse) => void): grpc.ClientUnaryCall;
    public listWhitelistsByFilter(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListWhitelistsByFilterRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListWhitelistsByFilterResponse) => void): grpc.ClientUnaryCall;
    public listWhitelistsByFilter(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListWhitelistsByFilterRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListWhitelistsByFilterResponse) => void): grpc.ClientUnaryCall;
    public isDeletableWhitelist(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.IsDeletableWhitelistRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.IsDeletableWhitelistResponse) => void): grpc.ClientUnaryCall;
    public isDeletableWhitelist(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.IsDeletableWhitelistRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.IsDeletableWhitelistResponse) => void): grpc.ClientUnaryCall;
    public isDeletableWhitelist(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.IsDeletableWhitelistRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.IsDeletableWhitelistResponse) => void): grpc.ClientUnaryCall;
    public updateWhitelist(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpdateWhitelistRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Whitelist) => void): grpc.ClientUnaryCall;
    public updateWhitelist(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpdateWhitelistRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Whitelist) => void): grpc.ClientUnaryCall;
    public updateWhitelist(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpdateWhitelistRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Whitelist) => void): grpc.ClientUnaryCall;
    public updateWhitelistAddresses(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpdateWhitelistAddressesRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Whitelist) => void): grpc.ClientUnaryCall;
    public updateWhitelistAddresses(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpdateWhitelistAddressesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Whitelist) => void): grpc.ClientUnaryCall;
    public updateWhitelistAddresses(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpdateWhitelistAddressesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Whitelist) => void): grpc.ClientUnaryCall;
    public deleteWhitelist(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.DeleteWhitelistRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public deleteWhitelist(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.DeleteWhitelistRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public deleteWhitelist(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.DeleteWhitelistRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public createTransferLimit(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransferLimitRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransferLimitResponse) => void): grpc.ClientUnaryCall;
    public createTransferLimit(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransferLimitRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransferLimitResponse) => void): grpc.ClientUnaryCall;
    public createTransferLimit(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransferLimitRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransferLimitResponse) => void): grpc.ClientUnaryCall;
    public getTransferLimit(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetTransferLimitRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.TransferLimit) => void): grpc.ClientUnaryCall;
    public getTransferLimit(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetTransferLimitRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.TransferLimit) => void): grpc.ClientUnaryCall;
    public getTransferLimit(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetTransferLimitRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.TransferLimit) => void): grpc.ClientUnaryCall;
    public listTransferLimits(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListTransferLimitsRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListTransferLimitsResponse) => void): grpc.ClientUnaryCall;
    public listTransferLimits(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListTransferLimitsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListTransferLimitsResponse) => void): grpc.ClientUnaryCall;
    public listTransferLimits(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListTransferLimitsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListTransferLimitsResponse) => void): grpc.ClientUnaryCall;
    public isDeletableTransferLimit(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.IsDeletableTransferLimitRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.IsDeletableTransferLimitResponse) => void): grpc.ClientUnaryCall;
    public isDeletableTransferLimit(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.IsDeletableTransferLimitRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.IsDeletableTransferLimitResponse) => void): grpc.ClientUnaryCall;
    public isDeletableTransferLimit(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.IsDeletableTransferLimitRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.IsDeletableTransferLimitResponse) => void): grpc.ClientUnaryCall;
    public updateTransferLimit(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpdateTransferLimitRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.TransferLimit) => void): grpc.ClientUnaryCall;
    public updateTransferLimit(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpdateTransferLimitRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.TransferLimit) => void): grpc.ClientUnaryCall;
    public updateTransferLimit(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpdateTransferLimitRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.TransferLimit) => void): grpc.ClientUnaryCall;
    public updateTransferLimitName(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpdateTransferLimitNameRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.TransferLimit) => void): grpc.ClientUnaryCall;
    public updateTransferLimitName(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpdateTransferLimitNameRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.TransferLimit) => void): grpc.ClientUnaryCall;
    public updateTransferLimitName(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpdateTransferLimitNameRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.TransferLimit) => void): grpc.ClientUnaryCall;
    public deleteTransferLimit(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.DeleteTransferLimitRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public deleteTransferLimit(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.DeleteTransferLimitRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public deleteTransferLimit(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.DeleteTransferLimitRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public reviewTransferLimitProposal(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ReviewTransferLimitProposalRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public reviewTransferLimitProposal(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ReviewTransferLimitProposalRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public reviewTransferLimitProposal(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ReviewTransferLimitProposalRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public createPolicy(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreatePolicyRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreatePolicyResponse) => void): grpc.ClientUnaryCall;
    public createPolicy(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreatePolicyRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreatePolicyResponse) => void): grpc.ClientUnaryCall;
    public createPolicy(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreatePolicyRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreatePolicyResponse) => void): grpc.ClientUnaryCall;
    public getPolicy(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetPolicyRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Policy) => void): grpc.ClientUnaryCall;
    public getPolicy(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetPolicyRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Policy) => void): grpc.ClientUnaryCall;
    public getPolicy(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetPolicyRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Policy) => void): grpc.ClientUnaryCall;
    public listPolicies(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListPoliciesRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListPoliciesResponse) => void): grpc.ClientUnaryCall;
    public listPolicies(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListPoliciesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListPoliciesResponse) => void): grpc.ClientUnaryCall;
    public listPolicies(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListPoliciesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListPoliciesResponse) => void): grpc.ClientUnaryCall;
    public listPoliciesByFilter(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListPoliciesByFilterRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListPoliciesByFilterResponse) => void): grpc.ClientUnaryCall;
    public listPoliciesByFilter(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListPoliciesByFilterRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListPoliciesByFilterResponse) => void): grpc.ClientUnaryCall;
    public listPoliciesByFilter(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListPoliciesByFilterRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListPoliciesByFilterResponse) => void): grpc.ClientUnaryCall;
    public isDeletablePolicy(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.IsDeletablePolicyRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.IsDeletablePolicyResponse) => void): grpc.ClientUnaryCall;
    public isDeletablePolicy(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.IsDeletablePolicyRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.IsDeletablePolicyResponse) => void): grpc.ClientUnaryCall;
    public isDeletablePolicy(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.IsDeletablePolicyRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.IsDeletablePolicyResponse) => void): grpc.ClientUnaryCall;
    public updatePolicy(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpdatePolicyRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Policy) => void): grpc.ClientUnaryCall;
    public updatePolicy(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpdatePolicyRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Policy) => void): grpc.ClientUnaryCall;
    public updatePolicy(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpdatePolicyRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Policy) => void): grpc.ClientUnaryCall;
    public deletePolicy(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.DeletePolicyRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public deletePolicy(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.DeletePolicyRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public deletePolicy(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.DeletePolicyRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public reviewPolicyProposal(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ReviewPolicyProposalRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public reviewPolicyProposal(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ReviewPolicyProposalRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public reviewPolicyProposal(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ReviewPolicyProposalRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public getSpendableBalance(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetSpendableBalanceRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetSpendableBalanceResponse) => void): grpc.ClientUnaryCall;
    public getSpendableBalance(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetSpendableBalanceRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetSpendableBalanceResponse) => void): grpc.ClientUnaryCall;
    public getSpendableBalance(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetSpendableBalanceRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetSpendableBalanceResponse) => void): grpc.ClientUnaryCall;
    public getTotalBalance(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetTotalBalanceRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.TotalBalance) => void): grpc.ClientUnaryCall;
    public getTotalBalance(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetTotalBalanceRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.TotalBalance) => void): grpc.ClientUnaryCall;
    public getTotalBalance(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetTotalBalanceRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.TotalBalance) => void): grpc.ClientUnaryCall;
    public listBalanceSnapshots(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListBalanceSnapshotsRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListBalanceSnapshotsResponse) => void): grpc.ClientUnaryCall;
    public listBalanceSnapshots(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListBalanceSnapshotsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListBalanceSnapshotsResponse) => void): grpc.ClientUnaryCall;
    public listBalanceSnapshots(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListBalanceSnapshotsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListBalanceSnapshotsResponse) => void): grpc.ClientUnaryCall;
    public calculateFee(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CalculateFeeRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CalculateFeeResponse) => void): grpc.ClientUnaryCall;
    public calculateFee(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CalculateFeeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CalculateFeeResponse) => void): grpc.ClientUnaryCall;
    public calculateFee(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CalculateFeeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CalculateFeeResponse) => void): grpc.ClientUnaryCall;
    public getMembersDeactivatabilities(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetMembersDeactivatabilitiesRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetMembersDeactivatabilitiesResponse) => void): grpc.ClientUnaryCall;
    public getMembersDeactivatabilities(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetMembersDeactivatabilitiesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetMembersDeactivatabilitiesResponse) => void): grpc.ClientUnaryCall;
    public getMembersDeactivatabilities(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetMembersDeactivatabilitiesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetMembersDeactivatabilitiesResponse) => void): grpc.ClientUnaryCall;
    public getRecommendedFeeRate(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetRecommendedFeeRateRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetRecommendedFeeRateResponse) => void): grpc.ClientUnaryCall;
    public getRecommendedFeeRate(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetRecommendedFeeRateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetRecommendedFeeRateResponse) => void): grpc.ClientUnaryCall;
    public getRecommendedFeeRate(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetRecommendedFeeRateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetRecommendedFeeRateResponse) => void): grpc.ClientUnaryCall;
    public validateAddress(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ValidateAddressRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ValidateAddressResponse) => void): grpc.ClientUnaryCall;
    public validateAddress(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ValidateAddressRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ValidateAddressResponse) => void): grpc.ClientUnaryCall;
    public validateAddress(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ValidateAddressRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ValidateAddressResponse) => void): grpc.ClientUnaryCall;
    public listAuditLogs(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListAuditLogsRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListAuditLogsResponse) => void): grpc.ClientUnaryCall;
    public listAuditLogs(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListAuditLogsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListAuditLogsResponse) => void): grpc.ClientUnaryCall;
    public listAuditLogs(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListAuditLogsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListAuditLogsResponse) => void): grpc.ClientUnaryCall;
    public listForwardingThresholds(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListForwardingThresholdsRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListForwardingThresholdsResponse) => void): grpc.ClientUnaryCall;
    public listForwardingThresholds(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListForwardingThresholdsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListForwardingThresholdsResponse) => void): grpc.ClientUnaryCall;
    public listForwardingThresholds(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListForwardingThresholdsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListForwardingThresholdsResponse) => void): grpc.ClientUnaryCall;
    public upsertForwardingThreshold(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpsertForwardingThresholdRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpsertForwardingThresholdResponse) => void): grpc.ClientUnaryCall;
    public upsertForwardingThreshold(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpsertForwardingThresholdRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpsertForwardingThresholdResponse) => void): grpc.ClientUnaryCall;
    public upsertForwardingThreshold(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpsertForwardingThresholdRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpsertForwardingThresholdResponse) => void): grpc.ClientUnaryCall;
    public listStakingHistoriesByFilter(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListStakingHistoriesByFilterRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListStakingHistoriesResponse) => void): grpc.ClientUnaryCall;
    public listStakingHistoriesByFilter(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListStakingHistoriesByFilterRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListStakingHistoriesResponse) => void): grpc.ClientUnaryCall;
    public listStakingHistoriesByFilter(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListStakingHistoriesByFilterRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListStakingHistoriesResponse) => void): grpc.ClientUnaryCall;
    public listStakingValidatorsByFilter(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListStakingValidatorsByFilterRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListStakingValidatorsResponse) => void): grpc.ClientUnaryCall;
    public listStakingValidatorsByFilter(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListStakingValidatorsByFilterRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListStakingValidatorsResponse) => void): grpc.ClientUnaryCall;
    public listStakingValidatorsByFilter(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListStakingValidatorsByFilterRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListStakingValidatorsResponse) => void): grpc.ClientUnaryCall;
}
