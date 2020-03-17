// package: adamant.global.v1
// file: gincoinc/adamant/global/v1/adamantglobalv1/global_api.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb from "../../../../../gincoinc/adamant/global/v1/adamantglobalv1/global_api_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as validate_validate_pb from "../../../../../validate/validate_pb";
import * as gincoinc_global_v1_gincoincglobalv1_enum_pb from "../../../../../gincoinc/global/v1/gincoincglobalv1/enum_pb";
import * as gincoinc_adamant_global_v1_adamantglobalv1_enum_pb from "../../../../../gincoinc/adamant/global/v1/adamantglobalv1/enum_pb";
import * as gincoinc_adamant_global_v1_adamantglobalv1_model_pb from "../../../../../gincoinc/adamant/global/v1/adamantglobalv1/model_pb";

interface IGlobalAPIService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    createWallet: IGlobalAPIService_ICreateWallet;
    getWallet: IGlobalAPIService_IGetWallet;
    cancelWallet: IGlobalAPIService_ICancelWallet;
    archiveWallet: IGlobalAPIService_IArchiveWallet;
    unArchiveWallet: IGlobalAPIService_IUnArchiveWallet;
    listWallets: IGlobalAPIService_IListWallets;
    updateWalletValidation: IGlobalAPIService_IUpdateWalletValidation;
    updateWalletPolicy: IGlobalAPIService_IUpdateWalletPolicy;
    reviewWalletProposal: IGlobalAPIService_IReviewWalletProposal;
    approveWallet: IGlobalAPIService_IApproveWallet;
    approveTransaction: IGlobalAPIService_IApproveTransaction;
    createAddress: IGlobalAPIService_ICreateAddress;
    getAddress: IGlobalAPIService_IGetAddress;
    getAddressByAddress: IGlobalAPIService_IGetAddressByAddress;
    getAddressByIndex: IGlobalAPIService_IGetAddressByIndex;
    listAddresses: IGlobalAPIService_IListAddresses;
    getEthereumFeeAddress: IGlobalAPIService_IGetEthereumFeeAddress;
    registerKey: IGlobalAPIService_IRegisterKey;
    createTransaction: IGlobalAPIService_ICreateTransaction;
    createXRPInitTransactions: IGlobalAPIService_ICreateXRPInitTransactions;
    signTransaction: IGlobalAPIService_ISignTransaction;
    signXRPInitTransactions: IGlobalAPIService_ISignXRPInitTransactions;
    sendTransaction: IGlobalAPIService_ISendTransaction;
    sendXRPInitTransactions: IGlobalAPIService_ISendXRPInitTransactions;
    cancelTransaction: IGlobalAPIService_ICancelTransaction;
    getTransaction: IGlobalAPIService_IGetTransaction;
    getTransactionByTxID: IGlobalAPIService_IGetTransactionByTxID;
    listTransactions: IGlobalAPIService_IListTransactions;
    getSignInfo: IGlobalAPIService_IGetSignInfo;
    listSignInfo: IGlobalAPIService_IListSignInfo;
    listXRPInitSignInfo: IGlobalAPIService_IListXRPInitSignInfo;
    listTransfers: IGlobalAPIService_IListTransfers;
    getRateSnapshot: IGlobalAPIService_IGetRateSnapshot;
    getLatestRateSnapshot: IGlobalAPIService_IGetLatestRateSnapshot;
    setRates: IGlobalAPIService_ISetRates;
    createLabeledAddress: IGlobalAPIService_ICreateLabeledAddress;
    getLabeledAddress: IGlobalAPIService_IGetLabeledAddress;
    listLabeledAddresses: IGlobalAPIService_IListLabeledAddresses;
    updateLabeledAddress: IGlobalAPIService_IUpdateLabeledAddress;
    deleteAddress: IGlobalAPIService_IDeleteAddress;
    reviewLabeledAddressProposal: IGlobalAPIService_IReviewLabeledAddressProposal;
    createWhitelist: IGlobalAPIService_ICreateWhitelist;
    getWhitelist: IGlobalAPIService_IGetWhitelist;
    listWhitelists: IGlobalAPIService_IListWhitelists;
    updateWhitelist: IGlobalAPIService_IUpdateWhitelist;
    updateWhitelistAddresses: IGlobalAPIService_IUpdateWhitelistAddresses;
    deleteWhitelist: IGlobalAPIService_IDeleteWhitelist;
    createTransferLimit: IGlobalAPIService_ICreateTransferLimit;
    getTransferLimit: IGlobalAPIService_IGetTransferLimit;
    listTransferLimits: IGlobalAPIService_IListTransferLimits;
    updateTransferLimit: IGlobalAPIService_IUpdateTransferLimit;
    updateTransferLimitName: IGlobalAPIService_IUpdateTransferLimitName;
    deleteTransferLimit: IGlobalAPIService_IDeleteTransferLimit;
    reviewTransferLimitProposal: IGlobalAPIService_IReviewTransferLimitProposal;
    createPolicy: IGlobalAPIService_ICreatePolicy;
    getPolicy: IGlobalAPIService_IGetPolicy;
    listPolicies: IGlobalAPIService_IListPolicies;
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
}

interface IGlobalAPIService_ICreateWallet extends grpc.MethodDefinition<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateWalletRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateWalletResponse> {
    path: string; // "/adamant.global.v1.GlobalAPI/CreateWallet"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateWalletRequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateWalletRequest>;
    responseSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateWalletResponse>;
    responseDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateWalletResponse>;
}
interface IGlobalAPIService_IGetWallet extends grpc.MethodDefinition<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetWalletRequest, gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Wallet> {
    path: string; // "/adamant.global.v1.GlobalAPI/GetWallet"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetWalletRequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetWalletRequest>;
    responseSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Wallet>;
    responseDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Wallet>;
}
interface IGlobalAPIService_ICancelWallet extends grpc.MethodDefinition<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CancelWalletRequest, google_protobuf_empty_pb.Empty> {
    path: string; // "/adamant.global.v1.GlobalAPI/CancelWallet"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CancelWalletRequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CancelWalletRequest>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface IGlobalAPIService_IArchiveWallet extends grpc.MethodDefinition<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ArchiveWalletRequest, google_protobuf_empty_pb.Empty> {
    path: string; // "/adamant.global.v1.GlobalAPI/ArchiveWallet"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ArchiveWalletRequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ArchiveWalletRequest>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface IGlobalAPIService_IUnArchiveWallet extends grpc.MethodDefinition<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UnArchiveWalletRequest, google_protobuf_empty_pb.Empty> {
    path: string; // "/adamant.global.v1.GlobalAPI/UnArchiveWallet"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UnArchiveWalletRequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UnArchiveWalletRequest>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface IGlobalAPIService_IListWallets extends grpc.MethodDefinition<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListWalletsRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListWalletsResponse> {
    path: string; // "/adamant.global.v1.GlobalAPI/ListWallets"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListWalletsRequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListWalletsRequest>;
    responseSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListWalletsResponse>;
    responseDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListWalletsResponse>;
}
interface IGlobalAPIService_IUpdateWalletValidation extends grpc.MethodDefinition<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpdateWalletValidationRequest, google_protobuf_empty_pb.Empty> {
    path: string; // "/adamant.global.v1.GlobalAPI/UpdateWalletValidation"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpdateWalletValidationRequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpdateWalletValidationRequest>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface IGlobalAPIService_IUpdateWalletPolicy extends grpc.MethodDefinition<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpdateWalletPolicyRequest, google_protobuf_empty_pb.Empty> {
    path: string; // "/adamant.global.v1.GlobalAPI/UpdateWalletPolicy"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpdateWalletPolicyRequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpdateWalletPolicyRequest>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface IGlobalAPIService_IReviewWalletProposal extends grpc.MethodDefinition<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ReviewWalletProposalRequest, google_protobuf_empty_pb.Empty> {
    path: string; // "/adamant.global.v1.GlobalAPI/ReviewWalletProposal"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ReviewWalletProposalRequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ReviewWalletProposalRequest>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface IGlobalAPIService_IApproveWallet extends grpc.MethodDefinition<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ApproveWalletRequest, google_protobuf_empty_pb.Empty> {
    path: string; // "/adamant.global.v1.GlobalAPI/ApproveWallet"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ApproveWalletRequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ApproveWalletRequest>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface IGlobalAPIService_IApproveTransaction extends grpc.MethodDefinition<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ApproveTransactionRequest, google_protobuf_empty_pb.Empty> {
    path: string; // "/adamant.global.v1.GlobalAPI/ApproveTransaction"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ApproveTransactionRequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ApproveTransactionRequest>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface IGlobalAPIService_ICreateAddress extends grpc.MethodDefinition<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateAddressRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateAddressResponse> {
    path: string; // "/adamant.global.v1.GlobalAPI/CreateAddress"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateAddressRequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateAddressRequest>;
    responseSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateAddressResponse>;
    responseDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateAddressResponse>;
}
interface IGlobalAPIService_IGetAddress extends grpc.MethodDefinition<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetAddressRequest, gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Address> {
    path: string; // "/adamant.global.v1.GlobalAPI/GetAddress"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetAddressRequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetAddressRequest>;
    responseSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Address>;
    responseDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Address>;
}
interface IGlobalAPIService_IGetAddressByAddress extends grpc.MethodDefinition<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetAddressByAddressRequest, gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Address> {
    path: string; // "/adamant.global.v1.GlobalAPI/GetAddressByAddress"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetAddressByAddressRequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetAddressByAddressRequest>;
    responseSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Address>;
    responseDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Address>;
}
interface IGlobalAPIService_IGetAddressByIndex extends grpc.MethodDefinition<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetAddressByIndexRequest, gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Address> {
    path: string; // "/adamant.global.v1.GlobalAPI/GetAddressByIndex"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetAddressByIndexRequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetAddressByIndexRequest>;
    responseSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Address>;
    responseDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Address>;
}
interface IGlobalAPIService_IListAddresses extends grpc.MethodDefinition<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListAddressesRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListAddressesResponse> {
    path: string; // "/adamant.global.v1.GlobalAPI/ListAddresses"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListAddressesRequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListAddressesRequest>;
    responseSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListAddressesResponse>;
    responseDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListAddressesResponse>;
}
interface IGlobalAPIService_IGetEthereumFeeAddress extends grpc.MethodDefinition<google_protobuf_empty_pb.Empty, gincoinc_adamant_global_v1_adamantglobalv1_model_pb.EthereumFeeAddress> {
    path: string; // "/adamant.global.v1.GlobalAPI/GetEthereumFeeAddress"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    requestDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
    responseSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.EthereumFeeAddress>;
    responseDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.EthereumFeeAddress>;
}
interface IGlobalAPIService_IRegisterKey extends grpc.MethodDefinition<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.RegisterKeyRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.RegisterKeyResponse> {
    path: string; // "/adamant.global.v1.GlobalAPI/RegisterKey"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.RegisterKeyRequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.RegisterKeyRequest>;
    responseSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.RegisterKeyResponse>;
    responseDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.RegisterKeyResponse>;
}
interface IGlobalAPIService_ICreateTransaction extends grpc.MethodDefinition<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransactionRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransactionResponse> {
    path: string; // "/adamant.global.v1.GlobalAPI/CreateTransaction"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransactionRequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransactionRequest>;
    responseSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransactionResponse>;
    responseDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransactionResponse>;
}
interface IGlobalAPIService_ICreateXRPInitTransactions extends grpc.MethodDefinition<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateXRPInitTransactionsRequest, google_protobuf_empty_pb.Empty> {
    path: string; // "/adamant.global.v1.GlobalAPI/CreateXRPInitTransactions"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateXRPInitTransactionsRequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateXRPInitTransactionsRequest>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface IGlobalAPIService_ISignTransaction extends grpc.MethodDefinition<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.SignTransactionRequest, google_protobuf_empty_pb.Empty> {
    path: string; // "/adamant.global.v1.GlobalAPI/SignTransaction"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.SignTransactionRequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.SignTransactionRequest>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface IGlobalAPIService_ISignXRPInitTransactions extends grpc.MethodDefinition<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.SignXRPInitTransactionsRequest, google_protobuf_empty_pb.Empty> {
    path: string; // "/adamant.global.v1.GlobalAPI/SignXRPInitTransactions"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.SignXRPInitTransactionsRequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.SignXRPInitTransactionsRequest>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface IGlobalAPIService_ISendTransaction extends grpc.MethodDefinition<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.SendTransactionRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.SendTransactionResponse> {
    path: string; // "/adamant.global.v1.GlobalAPI/SendTransaction"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.SendTransactionRequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.SendTransactionRequest>;
    responseSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.SendTransactionResponse>;
    responseDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.SendTransactionResponse>;
}
interface IGlobalAPIService_ISendXRPInitTransactions extends grpc.MethodDefinition<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.SendXRPInitTransactionsRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.SendXRPInitTransactionsResponse> {
    path: string; // "/adamant.global.v1.GlobalAPI/SendXRPInitTransactions"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.SendXRPInitTransactionsRequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.SendXRPInitTransactionsRequest>;
    responseSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.SendXRPInitTransactionsResponse>;
    responseDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.SendXRPInitTransactionsResponse>;
}
interface IGlobalAPIService_ICancelTransaction extends grpc.MethodDefinition<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CancelTransactionRequest, google_protobuf_empty_pb.Empty> {
    path: string; // "/adamant.global.v1.GlobalAPI/CancelTransaction"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CancelTransactionRequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CancelTransactionRequest>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface IGlobalAPIService_IGetTransaction extends grpc.MethodDefinition<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetTransactionRequest, gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Transaction> {
    path: string; // "/adamant.global.v1.GlobalAPI/GetTransaction"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetTransactionRequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetTransactionRequest>;
    responseSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Transaction>;
    responseDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Transaction>;
}
interface IGlobalAPIService_IGetTransactionByTxID extends grpc.MethodDefinition<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetTransactionByTxIDRequest, gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Transaction> {
    path: string; // "/adamant.global.v1.GlobalAPI/GetTransactionByTxID"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetTransactionByTxIDRequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetTransactionByTxIDRequest>;
    responseSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Transaction>;
    responseDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Transaction>;
}
interface IGlobalAPIService_IListTransactions extends grpc.MethodDefinition<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListTransactionsRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListTransactionsResponse> {
    path: string; // "/adamant.global.v1.GlobalAPI/ListTransactions"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListTransactionsRequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListTransactionsRequest>;
    responseSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListTransactionsResponse>;
    responseDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListTransactionsResponse>;
}
interface IGlobalAPIService_IGetSignInfo extends grpc.MethodDefinition<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetSignInfoRequest, gincoinc_adamant_global_v1_adamantglobalv1_model_pb.SignInfo> {
    path: string; // "/adamant.global.v1.GlobalAPI/GetSignInfo"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetSignInfoRequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetSignInfoRequest>;
    responseSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.SignInfo>;
    responseDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.SignInfo>;
}
interface IGlobalAPIService_IListSignInfo extends grpc.MethodDefinition<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListSignInfoRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListSignInfoResponse> {
    path: string; // "/adamant.global.v1.GlobalAPI/ListSignInfo"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListSignInfoRequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListSignInfoRequest>;
    responseSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListSignInfoResponse>;
    responseDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListSignInfoResponse>;
}
interface IGlobalAPIService_IListXRPInitSignInfo extends grpc.MethodDefinition<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListXRPInitSignInfoRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListXRPInitSignInfoResponse> {
    path: string; // "/adamant.global.v1.GlobalAPI/ListXRPInitSignInfo"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListXRPInitSignInfoRequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListXRPInitSignInfoRequest>;
    responseSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListXRPInitSignInfoResponse>;
    responseDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListXRPInitSignInfoResponse>;
}
interface IGlobalAPIService_IListTransfers extends grpc.MethodDefinition<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListTransfersRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListTransfersResponse> {
    path: string; // "/adamant.global.v1.GlobalAPI/ListTransfers"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListTransfersRequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListTransfersRequest>;
    responseSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListTransfersResponse>;
    responseDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListTransfersResponse>;
}
interface IGlobalAPIService_IGetRateSnapshot extends grpc.MethodDefinition<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetRateSnapshotRequest, gincoinc_adamant_global_v1_adamantglobalv1_model_pb.RateSnapshot> {
    path: string; // "/adamant.global.v1.GlobalAPI/GetRateSnapshot"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetRateSnapshotRequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetRateSnapshotRequest>;
    responseSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.RateSnapshot>;
    responseDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.RateSnapshot>;
}
interface IGlobalAPIService_IGetLatestRateSnapshot extends grpc.MethodDefinition<google_protobuf_empty_pb.Empty, gincoinc_adamant_global_v1_adamantglobalv1_model_pb.RateSnapshot> {
    path: string; // "/adamant.global.v1.GlobalAPI/GetLatestRateSnapshot"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    requestDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
    responseSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.RateSnapshot>;
    responseDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.RateSnapshot>;
}
interface IGlobalAPIService_ISetRates extends grpc.MethodDefinition<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.SetRatesRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.SetRatesResponse> {
    path: string; // "/adamant.global.v1.GlobalAPI/SetRates"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.SetRatesRequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.SetRatesRequest>;
    responseSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.SetRatesResponse>;
    responseDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.SetRatesResponse>;
}
interface IGlobalAPIService_ICreateLabeledAddress extends grpc.MethodDefinition<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateLabeledAddressRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateLabeledAddressResponse> {
    path: string; // "/adamant.global.v1.GlobalAPI/CreateLabeledAddress"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateLabeledAddressRequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateLabeledAddressRequest>;
    responseSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateLabeledAddressResponse>;
    responseDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateLabeledAddressResponse>;
}
interface IGlobalAPIService_IGetLabeledAddress extends grpc.MethodDefinition<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetLabeledAddressRequest, gincoinc_adamant_global_v1_adamantglobalv1_model_pb.LabeledAddress> {
    path: string; // "/adamant.global.v1.GlobalAPI/GetLabeledAddress"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetLabeledAddressRequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetLabeledAddressRequest>;
    responseSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.LabeledAddress>;
    responseDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.LabeledAddress>;
}
interface IGlobalAPIService_IListLabeledAddresses extends grpc.MethodDefinition<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListLabeledAddressesRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListLabeledAddressesResponse> {
    path: string; // "/adamant.global.v1.GlobalAPI/ListLabeledAddresses"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListLabeledAddressesRequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListLabeledAddressesRequest>;
    responseSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListLabeledAddressesResponse>;
    responseDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListLabeledAddressesResponse>;
}
interface IGlobalAPIService_IUpdateLabeledAddress extends grpc.MethodDefinition<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpdateLabeledAddressRequest, gincoinc_adamant_global_v1_adamantglobalv1_model_pb.LabeledAddress> {
    path: string; // "/adamant.global.v1.GlobalAPI/UpdateLabeledAddress"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpdateLabeledAddressRequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpdateLabeledAddressRequest>;
    responseSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.LabeledAddress>;
    responseDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.LabeledAddress>;
}
interface IGlobalAPIService_IDeleteAddress extends grpc.MethodDefinition<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.DeleteLabeledAddressRequest, google_protobuf_empty_pb.Empty> {
    path: string; // "/adamant.global.v1.GlobalAPI/DeleteAddress"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.DeleteLabeledAddressRequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.DeleteLabeledAddressRequest>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface IGlobalAPIService_IReviewLabeledAddressProposal extends grpc.MethodDefinition<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ReviewLabeledAddressProposalRequest, google_protobuf_empty_pb.Empty> {
    path: string; // "/adamant.global.v1.GlobalAPI/ReviewLabeledAddressProposal"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ReviewLabeledAddressProposalRequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ReviewLabeledAddressProposalRequest>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface IGlobalAPIService_ICreateWhitelist extends grpc.MethodDefinition<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateWhitelistRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateWhitelistResponse> {
    path: string; // "/adamant.global.v1.GlobalAPI/CreateWhitelist"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateWhitelistRequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateWhitelistRequest>;
    responseSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateWhitelistResponse>;
    responseDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateWhitelistResponse>;
}
interface IGlobalAPIService_IGetWhitelist extends grpc.MethodDefinition<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetWhitelistRequest, gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Whitelist> {
    path: string; // "/adamant.global.v1.GlobalAPI/GetWhitelist"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetWhitelistRequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetWhitelistRequest>;
    responseSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Whitelist>;
    responseDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Whitelist>;
}
interface IGlobalAPIService_IListWhitelists extends grpc.MethodDefinition<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListWhitelistsRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListWhitelistsResponse> {
    path: string; // "/adamant.global.v1.GlobalAPI/ListWhitelists"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListWhitelistsRequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListWhitelistsRequest>;
    responseSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListWhitelistsResponse>;
    responseDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListWhitelistsResponse>;
}
interface IGlobalAPIService_IUpdateWhitelist extends grpc.MethodDefinition<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpdateWhitelistRequest, gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Whitelist> {
    path: string; // "/adamant.global.v1.GlobalAPI/UpdateWhitelist"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpdateWhitelistRequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpdateWhitelistRequest>;
    responseSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Whitelist>;
    responseDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Whitelist>;
}
interface IGlobalAPIService_IUpdateWhitelistAddresses extends grpc.MethodDefinition<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpdateWhitelistAddressesRequest, gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Whitelist> {
    path: string; // "/adamant.global.v1.GlobalAPI/UpdateWhitelistAddresses"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpdateWhitelistAddressesRequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpdateWhitelistAddressesRequest>;
    responseSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Whitelist>;
    responseDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Whitelist>;
}
interface IGlobalAPIService_IDeleteWhitelist extends grpc.MethodDefinition<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.DeleteWhitelistRequest, google_protobuf_empty_pb.Empty> {
    path: string; // "/adamant.global.v1.GlobalAPI/DeleteWhitelist"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.DeleteWhitelistRequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.DeleteWhitelistRequest>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface IGlobalAPIService_ICreateTransferLimit extends grpc.MethodDefinition<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransferLimitRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransferLimitResponse> {
    path: string; // "/adamant.global.v1.GlobalAPI/CreateTransferLimit"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransferLimitRequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransferLimitRequest>;
    responseSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransferLimitResponse>;
    responseDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransferLimitResponse>;
}
interface IGlobalAPIService_IGetTransferLimit extends grpc.MethodDefinition<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetTransferLimitRequest, gincoinc_adamant_global_v1_adamantglobalv1_model_pb.TransferLimit> {
    path: string; // "/adamant.global.v1.GlobalAPI/GetTransferLimit"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetTransferLimitRequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetTransferLimitRequest>;
    responseSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.TransferLimit>;
    responseDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.TransferLimit>;
}
interface IGlobalAPIService_IListTransferLimits extends grpc.MethodDefinition<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListTransferLimitsRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListTransferLimitsResponse> {
    path: string; // "/adamant.global.v1.GlobalAPI/ListTransferLimits"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListTransferLimitsRequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListTransferLimitsRequest>;
    responseSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListTransferLimitsResponse>;
    responseDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListTransferLimitsResponse>;
}
interface IGlobalAPIService_IUpdateTransferLimit extends grpc.MethodDefinition<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpdateTransferLimitRequest, gincoinc_adamant_global_v1_adamantglobalv1_model_pb.TransferLimit> {
    path: string; // "/adamant.global.v1.GlobalAPI/UpdateTransferLimit"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpdateTransferLimitRequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpdateTransferLimitRequest>;
    responseSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.TransferLimit>;
    responseDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.TransferLimit>;
}
interface IGlobalAPIService_IUpdateTransferLimitName extends grpc.MethodDefinition<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpdateTransferLimitNameRequest, gincoinc_adamant_global_v1_adamantglobalv1_model_pb.TransferLimit> {
    path: string; // "/adamant.global.v1.GlobalAPI/UpdateTransferLimitName"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpdateTransferLimitNameRequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpdateTransferLimitNameRequest>;
    responseSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.TransferLimit>;
    responseDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.TransferLimit>;
}
interface IGlobalAPIService_IDeleteTransferLimit extends grpc.MethodDefinition<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.DeleteTransferLimitRequest, google_protobuf_empty_pb.Empty> {
    path: string; // "/adamant.global.v1.GlobalAPI/DeleteTransferLimit"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.DeleteTransferLimitRequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.DeleteTransferLimitRequest>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface IGlobalAPIService_IReviewTransferLimitProposal extends grpc.MethodDefinition<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ReviewTransferLimitProposalRequest, google_protobuf_empty_pb.Empty> {
    path: string; // "/adamant.global.v1.GlobalAPI/ReviewTransferLimitProposal"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ReviewTransferLimitProposalRequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ReviewTransferLimitProposalRequest>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface IGlobalAPIService_ICreatePolicy extends grpc.MethodDefinition<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreatePolicyRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreatePolicyResponse> {
    path: string; // "/adamant.global.v1.GlobalAPI/CreatePolicy"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreatePolicyRequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreatePolicyRequest>;
    responseSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreatePolicyResponse>;
    responseDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreatePolicyResponse>;
}
interface IGlobalAPIService_IGetPolicy extends grpc.MethodDefinition<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetPolicyRequest, gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Policy> {
    path: string; // "/adamant.global.v1.GlobalAPI/GetPolicy"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetPolicyRequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetPolicyRequest>;
    responseSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Policy>;
    responseDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Policy>;
}
interface IGlobalAPIService_IListPolicies extends grpc.MethodDefinition<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListPoliciesRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListPoliciesResponse> {
    path: string; // "/adamant.global.v1.GlobalAPI/ListPolicies"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListPoliciesRequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListPoliciesRequest>;
    responseSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListPoliciesResponse>;
    responseDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListPoliciesResponse>;
}
interface IGlobalAPIService_IUpdatePolicy extends grpc.MethodDefinition<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpdatePolicyRequest, gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Policy> {
    path: string; // "/adamant.global.v1.GlobalAPI/UpdatePolicy"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpdatePolicyRequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpdatePolicyRequest>;
    responseSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Policy>;
    responseDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Policy>;
}
interface IGlobalAPIService_IDeletePolicy extends grpc.MethodDefinition<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.DeletePolicyRequest, google_protobuf_empty_pb.Empty> {
    path: string; // "/adamant.global.v1.GlobalAPI/DeletePolicy"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.DeletePolicyRequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.DeletePolicyRequest>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface IGlobalAPIService_IReviewPolicyProposal extends grpc.MethodDefinition<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ReviewPolicyProposalRequest, google_protobuf_empty_pb.Empty> {
    path: string; // "/adamant.global.v1.GlobalAPI/ReviewPolicyProposal"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ReviewPolicyProposalRequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ReviewPolicyProposalRequest>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface IGlobalAPIService_IGetSpendableBalance extends grpc.MethodDefinition<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetSpendableBalanceRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetSpendableBalanceResponse> {
    path: string; // "/adamant.global.v1.GlobalAPI/GetSpendableBalance"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetSpendableBalanceRequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetSpendableBalanceRequest>;
    responseSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetSpendableBalanceResponse>;
    responseDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetSpendableBalanceResponse>;
}
interface IGlobalAPIService_IGetTotalBalance extends grpc.MethodDefinition<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetTotalBalanceRequest, gincoinc_adamant_global_v1_adamantglobalv1_model_pb.TotalBalance> {
    path: string; // "/adamant.global.v1.GlobalAPI/GetTotalBalance"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetTotalBalanceRequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetTotalBalanceRequest>;
    responseSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.TotalBalance>;
    responseDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.TotalBalance>;
}
interface IGlobalAPIService_IListBalanceSnapshots extends grpc.MethodDefinition<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListBalanceSnapshotsRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListBalanceSnapshotsResponse> {
    path: string; // "/adamant.global.v1.GlobalAPI/ListBalanceSnapshots"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListBalanceSnapshotsRequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListBalanceSnapshotsRequest>;
    responseSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListBalanceSnapshotsResponse>;
    responseDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListBalanceSnapshotsResponse>;
}
interface IGlobalAPIService_ICalculateFee extends grpc.MethodDefinition<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CalculateFeeRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CalculateFeeResponse> {
    path: string; // "/adamant.global.v1.GlobalAPI/CalculateFee"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CalculateFeeRequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CalculateFeeRequest>;
    responseSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CalculateFeeResponse>;
    responseDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CalculateFeeResponse>;
}
interface IGlobalAPIService_IGetMembersDeactivatabilities extends grpc.MethodDefinition<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetMembersDeactivatabilitiesRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetMembersDeactivatabilitiesResponse> {
    path: string; // "/adamant.global.v1.GlobalAPI/GetMembersDeactivatabilities"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetMembersDeactivatabilitiesRequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetMembersDeactivatabilitiesRequest>;
    responseSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetMembersDeactivatabilitiesResponse>;
    responseDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetMembersDeactivatabilitiesResponse>;
}
interface IGlobalAPIService_IGetRecommendedFeeRate extends grpc.MethodDefinition<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetRecommendedFeeRateRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetRecommendedFeeRateResponse> {
    path: string; // "/adamant.global.v1.GlobalAPI/GetRecommendedFeeRate"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetRecommendedFeeRateRequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetRecommendedFeeRateRequest>;
    responseSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetRecommendedFeeRateResponse>;
    responseDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetRecommendedFeeRateResponse>;
}
interface IGlobalAPIService_IValidateAddress extends grpc.MethodDefinition<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ValidateAddressRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ValidateAddressResponse> {
    path: string; // "/adamant.global.v1.GlobalAPI/ValidateAddress"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ValidateAddressRequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ValidateAddressRequest>;
    responseSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ValidateAddressResponse>;
    responseDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ValidateAddressResponse>;
}

export const GlobalAPIService: IGlobalAPIService;

export interface IGlobalAPIServer {
    createWallet: grpc.handleUnaryCall<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateWalletRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateWalletResponse>;
    getWallet: grpc.handleUnaryCall<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetWalletRequest, gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Wallet>;
    cancelWallet: grpc.handleUnaryCall<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CancelWalletRequest, google_protobuf_empty_pb.Empty>;
    archiveWallet: grpc.handleUnaryCall<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ArchiveWalletRequest, google_protobuf_empty_pb.Empty>;
    unArchiveWallet: grpc.handleUnaryCall<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UnArchiveWalletRequest, google_protobuf_empty_pb.Empty>;
    listWallets: grpc.handleUnaryCall<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListWalletsRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListWalletsResponse>;
    updateWalletValidation: grpc.handleUnaryCall<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpdateWalletValidationRequest, google_protobuf_empty_pb.Empty>;
    updateWalletPolicy: grpc.handleUnaryCall<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpdateWalletPolicyRequest, google_protobuf_empty_pb.Empty>;
    reviewWalletProposal: grpc.handleUnaryCall<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ReviewWalletProposalRequest, google_protobuf_empty_pb.Empty>;
    approveWallet: grpc.handleUnaryCall<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ApproveWalletRequest, google_protobuf_empty_pb.Empty>;
    approveTransaction: grpc.handleUnaryCall<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ApproveTransactionRequest, google_protobuf_empty_pb.Empty>;
    createAddress: grpc.handleUnaryCall<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateAddressRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateAddressResponse>;
    getAddress: grpc.handleUnaryCall<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetAddressRequest, gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Address>;
    getAddressByAddress: grpc.handleUnaryCall<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetAddressByAddressRequest, gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Address>;
    getAddressByIndex: grpc.handleUnaryCall<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetAddressByIndexRequest, gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Address>;
    listAddresses: grpc.handleUnaryCall<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListAddressesRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListAddressesResponse>;
    getEthereumFeeAddress: grpc.handleUnaryCall<google_protobuf_empty_pb.Empty, gincoinc_adamant_global_v1_adamantglobalv1_model_pb.EthereumFeeAddress>;
    registerKey: grpc.handleUnaryCall<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.RegisterKeyRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.RegisterKeyResponse>;
    createTransaction: grpc.handleUnaryCall<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransactionRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransactionResponse>;
    createXRPInitTransactions: grpc.handleUnaryCall<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateXRPInitTransactionsRequest, google_protobuf_empty_pb.Empty>;
    signTransaction: grpc.handleUnaryCall<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.SignTransactionRequest, google_protobuf_empty_pb.Empty>;
    signXRPInitTransactions: grpc.handleUnaryCall<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.SignXRPInitTransactionsRequest, google_protobuf_empty_pb.Empty>;
    sendTransaction: grpc.handleUnaryCall<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.SendTransactionRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.SendTransactionResponse>;
    sendXRPInitTransactions: grpc.handleUnaryCall<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.SendXRPInitTransactionsRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.SendXRPInitTransactionsResponse>;
    cancelTransaction: grpc.handleUnaryCall<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CancelTransactionRequest, google_protobuf_empty_pb.Empty>;
    getTransaction: grpc.handleUnaryCall<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetTransactionRequest, gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Transaction>;
    getTransactionByTxID: grpc.handleUnaryCall<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetTransactionByTxIDRequest, gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Transaction>;
    listTransactions: grpc.handleUnaryCall<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListTransactionsRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListTransactionsResponse>;
    getSignInfo: grpc.handleUnaryCall<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetSignInfoRequest, gincoinc_adamant_global_v1_adamantglobalv1_model_pb.SignInfo>;
    listSignInfo: grpc.handleUnaryCall<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListSignInfoRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListSignInfoResponse>;
    listXRPInitSignInfo: grpc.handleUnaryCall<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListXRPInitSignInfoRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListXRPInitSignInfoResponse>;
    listTransfers: grpc.handleUnaryCall<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListTransfersRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListTransfersResponse>;
    getRateSnapshot: grpc.handleUnaryCall<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetRateSnapshotRequest, gincoinc_adamant_global_v1_adamantglobalv1_model_pb.RateSnapshot>;
    getLatestRateSnapshot: grpc.handleUnaryCall<google_protobuf_empty_pb.Empty, gincoinc_adamant_global_v1_adamantglobalv1_model_pb.RateSnapshot>;
    setRates: grpc.handleUnaryCall<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.SetRatesRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.SetRatesResponse>;
    createLabeledAddress: grpc.handleUnaryCall<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateLabeledAddressRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateLabeledAddressResponse>;
    getLabeledAddress: grpc.handleUnaryCall<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetLabeledAddressRequest, gincoinc_adamant_global_v1_adamantglobalv1_model_pb.LabeledAddress>;
    listLabeledAddresses: grpc.handleUnaryCall<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListLabeledAddressesRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListLabeledAddressesResponse>;
    updateLabeledAddress: grpc.handleUnaryCall<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpdateLabeledAddressRequest, gincoinc_adamant_global_v1_adamantglobalv1_model_pb.LabeledAddress>;
    deleteAddress: grpc.handleUnaryCall<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.DeleteLabeledAddressRequest, google_protobuf_empty_pb.Empty>;
    reviewLabeledAddressProposal: grpc.handleUnaryCall<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ReviewLabeledAddressProposalRequest, google_protobuf_empty_pb.Empty>;
    createWhitelist: grpc.handleUnaryCall<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateWhitelistRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateWhitelistResponse>;
    getWhitelist: grpc.handleUnaryCall<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetWhitelistRequest, gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Whitelist>;
    listWhitelists: grpc.handleUnaryCall<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListWhitelistsRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListWhitelistsResponse>;
    updateWhitelist: grpc.handleUnaryCall<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpdateWhitelistRequest, gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Whitelist>;
    updateWhitelistAddresses: grpc.handleUnaryCall<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpdateWhitelistAddressesRequest, gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Whitelist>;
    deleteWhitelist: grpc.handleUnaryCall<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.DeleteWhitelistRequest, google_protobuf_empty_pb.Empty>;
    createTransferLimit: grpc.handleUnaryCall<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransferLimitRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransferLimitResponse>;
    getTransferLimit: grpc.handleUnaryCall<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetTransferLimitRequest, gincoinc_adamant_global_v1_adamantglobalv1_model_pb.TransferLimit>;
    listTransferLimits: grpc.handleUnaryCall<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListTransferLimitsRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListTransferLimitsResponse>;
    updateTransferLimit: grpc.handleUnaryCall<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpdateTransferLimitRequest, gincoinc_adamant_global_v1_adamantglobalv1_model_pb.TransferLimit>;
    updateTransferLimitName: grpc.handleUnaryCall<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpdateTransferLimitNameRequest, gincoinc_adamant_global_v1_adamantglobalv1_model_pb.TransferLimit>;
    deleteTransferLimit: grpc.handleUnaryCall<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.DeleteTransferLimitRequest, google_protobuf_empty_pb.Empty>;
    reviewTransferLimitProposal: grpc.handleUnaryCall<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ReviewTransferLimitProposalRequest, google_protobuf_empty_pb.Empty>;
    createPolicy: grpc.handleUnaryCall<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreatePolicyRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreatePolicyResponse>;
    getPolicy: grpc.handleUnaryCall<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetPolicyRequest, gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Policy>;
    listPolicies: grpc.handleUnaryCall<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListPoliciesRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListPoliciesResponse>;
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
    updateWalletValidation(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpdateWalletValidationRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    updateWalletValidation(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpdateWalletValidationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    updateWalletValidation(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpdateWalletValidationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    updateWalletPolicy(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpdateWalletPolicyRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    updateWalletPolicy(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpdateWalletPolicyRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    updateWalletPolicy(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpdateWalletPolicyRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    reviewWalletProposal(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ReviewWalletProposalRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    reviewWalletProposal(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ReviewWalletProposalRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    reviewWalletProposal(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ReviewWalletProposalRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
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
    getAddressByIndex(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetAddressByIndexRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Address) => void): grpc.ClientUnaryCall;
    getAddressByIndex(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetAddressByIndexRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Address) => void): grpc.ClientUnaryCall;
    getAddressByIndex(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetAddressByIndexRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Address) => void): grpc.ClientUnaryCall;
    listAddresses(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListAddressesRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListAddressesResponse) => void): grpc.ClientUnaryCall;
    listAddresses(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListAddressesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListAddressesResponse) => void): grpc.ClientUnaryCall;
    listAddresses(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListAddressesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListAddressesResponse) => void): grpc.ClientUnaryCall;
    getEthereumFeeAddress(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.EthereumFeeAddress) => void): grpc.ClientUnaryCall;
    getEthereumFeeAddress(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.EthereumFeeAddress) => void): grpc.ClientUnaryCall;
    getEthereumFeeAddress(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.EthereumFeeAddress) => void): grpc.ClientUnaryCall;
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
    getTransaction(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetTransactionRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Transaction) => void): grpc.ClientUnaryCall;
    getTransaction(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetTransactionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Transaction) => void): grpc.ClientUnaryCall;
    getTransaction(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetTransactionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Transaction) => void): grpc.ClientUnaryCall;
    getTransactionByTxID(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetTransactionByTxIDRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Transaction) => void): grpc.ClientUnaryCall;
    getTransactionByTxID(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetTransactionByTxIDRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Transaction) => void): grpc.ClientUnaryCall;
    getTransactionByTxID(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetTransactionByTxIDRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Transaction) => void): grpc.ClientUnaryCall;
    listTransactions(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListTransactionsRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListTransactionsResponse) => void): grpc.ClientUnaryCall;
    listTransactions(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListTransactionsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListTransactionsResponse) => void): grpc.ClientUnaryCall;
    listTransactions(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListTransactionsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListTransactionsResponse) => void): grpc.ClientUnaryCall;
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
    getRateSnapshot(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetRateSnapshotRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.RateSnapshot) => void): grpc.ClientUnaryCall;
    getRateSnapshot(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetRateSnapshotRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.RateSnapshot) => void): grpc.ClientUnaryCall;
    getRateSnapshot(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetRateSnapshotRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.RateSnapshot) => void): grpc.ClientUnaryCall;
    getLatestRateSnapshot(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.RateSnapshot) => void): grpc.ClientUnaryCall;
    getLatestRateSnapshot(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.RateSnapshot) => void): grpc.ClientUnaryCall;
    getLatestRateSnapshot(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.RateSnapshot) => void): grpc.ClientUnaryCall;
    setRates(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.SetRatesRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.SetRatesResponse) => void): grpc.ClientUnaryCall;
    setRates(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.SetRatesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.SetRatesResponse) => void): grpc.ClientUnaryCall;
    setRates(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.SetRatesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.SetRatesResponse) => void): grpc.ClientUnaryCall;
    createLabeledAddress(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateLabeledAddressRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateLabeledAddressResponse) => void): grpc.ClientUnaryCall;
    createLabeledAddress(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateLabeledAddressRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateLabeledAddressResponse) => void): grpc.ClientUnaryCall;
    createLabeledAddress(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateLabeledAddressRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateLabeledAddressResponse) => void): grpc.ClientUnaryCall;
    getLabeledAddress(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetLabeledAddressRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.LabeledAddress) => void): grpc.ClientUnaryCall;
    getLabeledAddress(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetLabeledAddressRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.LabeledAddress) => void): grpc.ClientUnaryCall;
    getLabeledAddress(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetLabeledAddressRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.LabeledAddress) => void): grpc.ClientUnaryCall;
    listLabeledAddresses(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListLabeledAddressesRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListLabeledAddressesResponse) => void): grpc.ClientUnaryCall;
    listLabeledAddresses(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListLabeledAddressesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListLabeledAddressesResponse) => void): grpc.ClientUnaryCall;
    listLabeledAddresses(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListLabeledAddressesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListLabeledAddressesResponse) => void): grpc.ClientUnaryCall;
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
    public updateWalletValidation(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpdateWalletValidationRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public updateWalletValidation(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpdateWalletValidationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public updateWalletValidation(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpdateWalletValidationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public updateWalletPolicy(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpdateWalletPolicyRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public updateWalletPolicy(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpdateWalletPolicyRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public updateWalletPolicy(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpdateWalletPolicyRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public reviewWalletProposal(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ReviewWalletProposalRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public reviewWalletProposal(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ReviewWalletProposalRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public reviewWalletProposal(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ReviewWalletProposalRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
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
    public getAddressByIndex(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetAddressByIndexRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Address) => void): grpc.ClientUnaryCall;
    public getAddressByIndex(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetAddressByIndexRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Address) => void): grpc.ClientUnaryCall;
    public getAddressByIndex(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetAddressByIndexRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Address) => void): grpc.ClientUnaryCall;
    public listAddresses(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListAddressesRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListAddressesResponse) => void): grpc.ClientUnaryCall;
    public listAddresses(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListAddressesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListAddressesResponse) => void): grpc.ClientUnaryCall;
    public listAddresses(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListAddressesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListAddressesResponse) => void): grpc.ClientUnaryCall;
    public getEthereumFeeAddress(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.EthereumFeeAddress) => void): grpc.ClientUnaryCall;
    public getEthereumFeeAddress(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.EthereumFeeAddress) => void): grpc.ClientUnaryCall;
    public getEthereumFeeAddress(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.EthereumFeeAddress) => void): grpc.ClientUnaryCall;
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
    public getTransaction(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetTransactionRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Transaction) => void): grpc.ClientUnaryCall;
    public getTransaction(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetTransactionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Transaction) => void): grpc.ClientUnaryCall;
    public getTransaction(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetTransactionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Transaction) => void): grpc.ClientUnaryCall;
    public getTransactionByTxID(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetTransactionByTxIDRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Transaction) => void): grpc.ClientUnaryCall;
    public getTransactionByTxID(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetTransactionByTxIDRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Transaction) => void): grpc.ClientUnaryCall;
    public getTransactionByTxID(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetTransactionByTxIDRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Transaction) => void): grpc.ClientUnaryCall;
    public listTransactions(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListTransactionsRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListTransactionsResponse) => void): grpc.ClientUnaryCall;
    public listTransactions(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListTransactionsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListTransactionsResponse) => void): grpc.ClientUnaryCall;
    public listTransactions(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListTransactionsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListTransactionsResponse) => void): grpc.ClientUnaryCall;
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
    public getRateSnapshot(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetRateSnapshotRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.RateSnapshot) => void): grpc.ClientUnaryCall;
    public getRateSnapshot(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetRateSnapshotRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.RateSnapshot) => void): grpc.ClientUnaryCall;
    public getRateSnapshot(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetRateSnapshotRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.RateSnapshot) => void): grpc.ClientUnaryCall;
    public getLatestRateSnapshot(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.RateSnapshot) => void): grpc.ClientUnaryCall;
    public getLatestRateSnapshot(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.RateSnapshot) => void): grpc.ClientUnaryCall;
    public getLatestRateSnapshot(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.RateSnapshot) => void): grpc.ClientUnaryCall;
    public setRates(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.SetRatesRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.SetRatesResponse) => void): grpc.ClientUnaryCall;
    public setRates(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.SetRatesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.SetRatesResponse) => void): grpc.ClientUnaryCall;
    public setRates(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.SetRatesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.SetRatesResponse) => void): grpc.ClientUnaryCall;
    public createLabeledAddress(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateLabeledAddressRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateLabeledAddressResponse) => void): grpc.ClientUnaryCall;
    public createLabeledAddress(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateLabeledAddressRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateLabeledAddressResponse) => void): grpc.ClientUnaryCall;
    public createLabeledAddress(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateLabeledAddressRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateLabeledAddressResponse) => void): grpc.ClientUnaryCall;
    public getLabeledAddress(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetLabeledAddressRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.LabeledAddress) => void): grpc.ClientUnaryCall;
    public getLabeledAddress(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetLabeledAddressRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.LabeledAddress) => void): grpc.ClientUnaryCall;
    public getLabeledAddress(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetLabeledAddressRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.LabeledAddress) => void): grpc.ClientUnaryCall;
    public listLabeledAddresses(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListLabeledAddressesRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListLabeledAddressesResponse) => void): grpc.ClientUnaryCall;
    public listLabeledAddresses(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListLabeledAddressesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListLabeledAddressesResponse) => void): grpc.ClientUnaryCall;
    public listLabeledAddresses(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListLabeledAddressesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListLabeledAddressesResponse) => void): grpc.ClientUnaryCall;
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
}
