// package: adamant.teller.v1
// file: gincoinc/adamant/teller/v1/adamanttellerv1/teller_api.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb from "../../../../../gincoinc/adamant/teller/v1/adamanttellerv1/teller_api_pb";
import * as gincoinc_adamant_global_v1_adamantglobalv1_enum_pb from "../../../../../gincoinc/adamant/global/v1/adamantglobalv1/enum_pb";
import * as gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb from "../../../../../gincoinc/adamant/global/v1/adamantglobalv1/global_api_pb";
import * as gincoinc_adamant_global_v1_adamantglobalv1_model_pb from "../../../../../gincoinc/adamant/global/v1/adamantglobalv1/model_pb";
import * as gincoinc_global_v1_gincoincglobalv1_enum_pb from "../../../../../gincoinc/global/v1/gincoincglobalv1/enum_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as validate_validate_pb from "../../../../../validate/validate_pb";

interface ITellerAPIService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    createWallet: ITellerAPIService_ICreateWallet;
    getWallet: ITellerAPIService_IGetWallet;
    listWallets: ITellerAPIService_IListWallets;
    listWalletsByFilter: ITellerAPIService_IListWalletsByFilter;
    listBaseWallets: ITellerAPIService_IListBaseWallets;
    getSpendableBalance: ITellerAPIService_IGetSpendableBalance;
    initializeXRPWallet: ITellerAPIService_IInitializeXRPWallet;
    initializeWallet: ITellerAPIService_IInitializeWallet;
    createAddress: ITellerAPIService_ICreateAddress;
    getAddress: ITellerAPIService_IGetAddress;
    getAddressByAddress: ITellerAPIService_IGetAddressByAddress;
    getAddressByIndex: ITellerAPIService_IGetAddressByIndex;
    listAddresses: ITellerAPIService_IListAddresses;
    importAddress: ITellerAPIService_IImportAddress;
    getEthereumFeeAddress: ITellerAPIService_IGetEthereumFeeAddress;
    updateAddressBalance: ITellerAPIService_IUpdateAddressBalance;
    createTransaction: ITellerAPIService_ICreateTransaction;
    signTransaction: ITellerAPIService_ISignTransaction;
    sendTransaction: ITellerAPIService_ISendTransaction;
    cancelTransaction: ITellerAPIService_ICancelTransaction;
    getTransaction: ITellerAPIService_IGetTransaction;
    getTransactionByTxID: ITellerAPIService_IGetTransactionByTxID;
    listTransactions: ITellerAPIService_IListTransactions;
    listTransactionsByFilter: ITellerAPIService_IListTransactionsByFilter;
    listTransfers: ITellerAPIService_IListTransfers;
    listTransfersByFilter: ITellerAPIService_IListTransfersByFilter;
    getRateSnapshot: ITellerAPIService_IGetRateSnapshot;
    getLatestRateSnapshot: ITellerAPIService_IGetLatestRateSnapshot;
    setRates: ITellerAPIService_ISetRates;
    calculateFee: ITellerAPIService_ICalculateFee;
    getRecommendedFeeRate: ITellerAPIService_IGetRecommendedFeeRate;
    validateAddress: ITellerAPIService_IValidateAddress;
    flushBalance: ITellerAPIService_IFlushBalance;
    listAuditLogs: ITellerAPIService_IListAuditLogs;
}

interface ITellerAPIService_ICreateWallet extends grpc.MethodDefinition<gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.CreateWalletRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateWalletResponse> {
    path: "/adamant.teller.v1.TellerAPI/CreateWallet";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.CreateWalletRequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.CreateWalletRequest>;
    responseSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateWalletResponse>;
    responseDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateWalletResponse>;
}
interface ITellerAPIService_IGetWallet extends grpc.MethodDefinition<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetWalletRequest, gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Wallet> {
    path: "/adamant.teller.v1.TellerAPI/GetWallet";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetWalletRequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetWalletRequest>;
    responseSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Wallet>;
    responseDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Wallet>;
}
interface ITellerAPIService_IListWallets extends grpc.MethodDefinition<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListWalletsRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListWalletsResponse> {
    path: "/adamant.teller.v1.TellerAPI/ListWallets";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListWalletsRequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListWalletsRequest>;
    responseSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListWalletsResponse>;
    responseDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListWalletsResponse>;
}
interface ITellerAPIService_IListWalletsByFilter extends grpc.MethodDefinition<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListWalletsByFilterRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListWalletsResponse> {
    path: "/adamant.teller.v1.TellerAPI/ListWalletsByFilter";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListWalletsByFilterRequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListWalletsByFilterRequest>;
    responseSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListWalletsResponse>;
    responseDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListWalletsResponse>;
}
interface ITellerAPIService_IListBaseWallets extends grpc.MethodDefinition<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListBaseWalletsRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListBaseWalletsResponse> {
    path: "/adamant.teller.v1.TellerAPI/ListBaseWallets";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListBaseWalletsRequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListBaseWalletsRequest>;
    responseSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListBaseWalletsResponse>;
    responseDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListBaseWalletsResponse>;
}
interface ITellerAPIService_IGetSpendableBalance extends grpc.MethodDefinition<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetSpendableBalanceRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetSpendableBalanceResponse> {
    path: "/adamant.teller.v1.TellerAPI/GetSpendableBalance";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetSpendableBalanceRequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetSpendableBalanceRequest>;
    responseSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetSpendableBalanceResponse>;
    responseDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetSpendableBalanceResponse>;
}
interface ITellerAPIService_IInitializeXRPWallet extends grpc.MethodDefinition<gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.InitializeXRPWalletRequest, google_protobuf_empty_pb.Empty> {
    path: "/adamant.teller.v1.TellerAPI/InitializeXRPWallet";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.InitializeXRPWalletRequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.InitializeXRPWalletRequest>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface ITellerAPIService_IInitializeWallet extends grpc.MethodDefinition<gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.InitializeWalletRequest, google_protobuf_empty_pb.Empty> {
    path: "/adamant.teller.v1.TellerAPI/InitializeWallet";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.InitializeWalletRequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.InitializeWalletRequest>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface ITellerAPIService_ICreateAddress extends grpc.MethodDefinition<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateAddressRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateAddressResponse> {
    path: "/adamant.teller.v1.TellerAPI/CreateAddress";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateAddressRequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateAddressRequest>;
    responseSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateAddressResponse>;
    responseDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateAddressResponse>;
}
interface ITellerAPIService_IGetAddress extends grpc.MethodDefinition<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetAddressRequest, gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Address> {
    path: "/adamant.teller.v1.TellerAPI/GetAddress";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetAddressRequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetAddressRequest>;
    responseSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Address>;
    responseDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Address>;
}
interface ITellerAPIService_IGetAddressByAddress extends grpc.MethodDefinition<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetAddressByAddressRequest, gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Address> {
    path: "/adamant.teller.v1.TellerAPI/GetAddressByAddress";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetAddressByAddressRequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetAddressByAddressRequest>;
    responseSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Address>;
    responseDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Address>;
}
interface ITellerAPIService_IGetAddressByIndex extends grpc.MethodDefinition<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetAddressByIndexRequest, gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Address> {
    path: "/adamant.teller.v1.TellerAPI/GetAddressByIndex";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetAddressByIndexRequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetAddressByIndexRequest>;
    responseSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Address>;
    responseDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Address>;
}
interface ITellerAPIService_IListAddresses extends grpc.MethodDefinition<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListAddressesRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListAddressesResponse> {
    path: "/adamant.teller.v1.TellerAPI/ListAddresses";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListAddressesRequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListAddressesRequest>;
    responseSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListAddressesResponse>;
    responseDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListAddressesResponse>;
}
interface ITellerAPIService_IImportAddress extends grpc.MethodDefinition<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ImportAddressRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ImportAddressResponse> {
    path: "/adamant.teller.v1.TellerAPI/ImportAddress";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ImportAddressRequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ImportAddressRequest>;
    responseSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ImportAddressResponse>;
    responseDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ImportAddressResponse>;
}
interface ITellerAPIService_IGetEthereumFeeAddress extends grpc.MethodDefinition<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetEthereumFeeAddressRequest, gincoinc_adamant_global_v1_adamantglobalv1_model_pb.EthereumFeeAddress> {
    path: "/adamant.teller.v1.TellerAPI/GetEthereumFeeAddress";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetEthereumFeeAddressRequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetEthereumFeeAddressRequest>;
    responseSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.EthereumFeeAddress>;
    responseDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.EthereumFeeAddress>;
}
interface ITellerAPIService_IUpdateAddressBalance extends grpc.MethodDefinition<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpdateAddressBalanceRequest, google_protobuf_empty_pb.Empty> {
    path: "/adamant.teller.v1.TellerAPI/UpdateAddressBalance";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpdateAddressBalanceRequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpdateAddressBalanceRequest>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface ITellerAPIService_ICreateTransaction extends grpc.MethodDefinition<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransactionRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransactionResponse> {
    path: "/adamant.teller.v1.TellerAPI/CreateTransaction";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransactionRequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransactionRequest>;
    responseSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransactionResponse>;
    responseDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransactionResponse>;
}
interface ITellerAPIService_ISignTransaction extends grpc.MethodDefinition<gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.SignTransactionRequest, google_protobuf_empty_pb.Empty> {
    path: "/adamant.teller.v1.TellerAPI/SignTransaction";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.SignTransactionRequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.SignTransactionRequest>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface ITellerAPIService_ISendTransaction extends grpc.MethodDefinition<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.SendTransactionRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.SendTransactionResponse> {
    path: "/adamant.teller.v1.TellerAPI/SendTransaction";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.SendTransactionRequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.SendTransactionRequest>;
    responseSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.SendTransactionResponse>;
    responseDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.SendTransactionResponse>;
}
interface ITellerAPIService_ICancelTransaction extends grpc.MethodDefinition<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CancelTransactionRequest, google_protobuf_empty_pb.Empty> {
    path: "/adamant.teller.v1.TellerAPI/CancelTransaction";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CancelTransactionRequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CancelTransactionRequest>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface ITellerAPIService_IGetTransaction extends grpc.MethodDefinition<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetTransactionRequest, gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Transaction> {
    path: "/adamant.teller.v1.TellerAPI/GetTransaction";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetTransactionRequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetTransactionRequest>;
    responseSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Transaction>;
    responseDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Transaction>;
}
interface ITellerAPIService_IGetTransactionByTxID extends grpc.MethodDefinition<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetTransactionByTxIDRequest, gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Transaction> {
    path: "/adamant.teller.v1.TellerAPI/GetTransactionByTxID";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetTransactionByTxIDRequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetTransactionByTxIDRequest>;
    responseSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Transaction>;
    responseDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Transaction>;
}
interface ITellerAPIService_IListTransactions extends grpc.MethodDefinition<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListTransactionsRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListTransactionsResponse> {
    path: "/adamant.teller.v1.TellerAPI/ListTransactions";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListTransactionsRequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListTransactionsRequest>;
    responseSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListTransactionsResponse>;
    responseDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListTransactionsResponse>;
}
interface ITellerAPIService_IListTransactionsByFilter extends grpc.MethodDefinition<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListTransactionsByFilterRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListTransactionsResponse> {
    path: "/adamant.teller.v1.TellerAPI/ListTransactionsByFilter";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListTransactionsByFilterRequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListTransactionsByFilterRequest>;
    responseSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListTransactionsResponse>;
    responseDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListTransactionsResponse>;
}
interface ITellerAPIService_IListTransfers extends grpc.MethodDefinition<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListTransfersRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListTransfersResponse> {
    path: "/adamant.teller.v1.TellerAPI/ListTransfers";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListTransfersRequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListTransfersRequest>;
    responseSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListTransfersResponse>;
    responseDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListTransfersResponse>;
}
interface ITellerAPIService_IListTransfersByFilter extends grpc.MethodDefinition<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListTransfersByFilterRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListTransfersResponse> {
    path: "/adamant.teller.v1.TellerAPI/ListTransfersByFilter";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListTransfersByFilterRequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListTransfersByFilterRequest>;
    responseSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListTransfersResponse>;
    responseDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListTransfersResponse>;
}
interface ITellerAPIService_IGetRateSnapshot extends grpc.MethodDefinition<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetRateSnapshotRequest, gincoinc_adamant_global_v1_adamantglobalv1_model_pb.RateSnapshot> {
    path: "/adamant.teller.v1.TellerAPI/GetRateSnapshot";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetRateSnapshotRequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetRateSnapshotRequest>;
    responseSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.RateSnapshot>;
    responseDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.RateSnapshot>;
}
interface ITellerAPIService_IGetLatestRateSnapshot extends grpc.MethodDefinition<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetLatestRateSnapshotRequest, gincoinc_adamant_global_v1_adamantglobalv1_model_pb.RateSnapshot> {
    path: "/adamant.teller.v1.TellerAPI/GetLatestRateSnapshot";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetLatestRateSnapshotRequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetLatestRateSnapshotRequest>;
    responseSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.RateSnapshot>;
    responseDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.RateSnapshot>;
}
interface ITellerAPIService_ISetRates extends grpc.MethodDefinition<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.SetRatesRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.SetRatesResponse> {
    path: "/adamant.teller.v1.TellerAPI/SetRates";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.SetRatesRequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.SetRatesRequest>;
    responseSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.SetRatesResponse>;
    responseDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.SetRatesResponse>;
}
interface ITellerAPIService_ICalculateFee extends grpc.MethodDefinition<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CalculateFeeRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CalculateFeeResponse> {
    path: "/adamant.teller.v1.TellerAPI/CalculateFee";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CalculateFeeRequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CalculateFeeRequest>;
    responseSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CalculateFeeResponse>;
    responseDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CalculateFeeResponse>;
}
interface ITellerAPIService_IGetRecommendedFeeRate extends grpc.MethodDefinition<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetRecommendedFeeRateRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetRecommendedFeeRateResponse> {
    path: "/adamant.teller.v1.TellerAPI/GetRecommendedFeeRate";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetRecommendedFeeRateRequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetRecommendedFeeRateRequest>;
    responseSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetRecommendedFeeRateResponse>;
    responseDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetRecommendedFeeRateResponse>;
}
interface ITellerAPIService_IValidateAddress extends grpc.MethodDefinition<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ValidateAddressRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ValidateAddressResponse> {
    path: "/adamant.teller.v1.TellerAPI/ValidateAddress";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ValidateAddressRequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ValidateAddressRequest>;
    responseSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ValidateAddressResponse>;
    responseDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ValidateAddressResponse>;
}
interface ITellerAPIService_IFlushBalance extends grpc.MethodDefinition<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.FlushBalanceRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.FlushBalanceResponse> {
    path: "/adamant.teller.v1.TellerAPI/FlushBalance";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.FlushBalanceRequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.FlushBalanceRequest>;
    responseSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.FlushBalanceResponse>;
    responseDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.FlushBalanceResponse>;
}
interface ITellerAPIService_IListAuditLogs extends grpc.MethodDefinition<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListAuditLogsRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListAuditLogsResponse> {
    path: "/adamant.teller.v1.TellerAPI/ListAuditLogs";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListAuditLogsRequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListAuditLogsRequest>;
    responseSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListAuditLogsResponse>;
    responseDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListAuditLogsResponse>;
}

export const TellerAPIService: ITellerAPIService;

export interface ITellerAPIServer {
    createWallet: grpc.handleUnaryCall<gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.CreateWalletRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateWalletResponse>;
    getWallet: grpc.handleUnaryCall<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetWalletRequest, gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Wallet>;
    listWallets: grpc.handleUnaryCall<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListWalletsRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListWalletsResponse>;
    listWalletsByFilter: grpc.handleUnaryCall<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListWalletsByFilterRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListWalletsResponse>;
    listBaseWallets: grpc.handleUnaryCall<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListBaseWalletsRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListBaseWalletsResponse>;
    getSpendableBalance: grpc.handleUnaryCall<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetSpendableBalanceRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetSpendableBalanceResponse>;
    initializeXRPWallet: grpc.handleUnaryCall<gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.InitializeXRPWalletRequest, google_protobuf_empty_pb.Empty>;
    initializeWallet: grpc.handleUnaryCall<gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.InitializeWalletRequest, google_protobuf_empty_pb.Empty>;
    createAddress: grpc.handleUnaryCall<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateAddressRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateAddressResponse>;
    getAddress: grpc.handleUnaryCall<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetAddressRequest, gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Address>;
    getAddressByAddress: grpc.handleUnaryCall<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetAddressByAddressRequest, gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Address>;
    getAddressByIndex: grpc.handleUnaryCall<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetAddressByIndexRequest, gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Address>;
    listAddresses: grpc.handleUnaryCall<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListAddressesRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListAddressesResponse>;
    importAddress: grpc.handleUnaryCall<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ImportAddressRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ImportAddressResponse>;
    getEthereumFeeAddress: grpc.handleUnaryCall<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetEthereumFeeAddressRequest, gincoinc_adamant_global_v1_adamantglobalv1_model_pb.EthereumFeeAddress>;
    updateAddressBalance: grpc.handleUnaryCall<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpdateAddressBalanceRequest, google_protobuf_empty_pb.Empty>;
    createTransaction: grpc.handleUnaryCall<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransactionRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransactionResponse>;
    signTransaction: grpc.handleUnaryCall<gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.SignTransactionRequest, google_protobuf_empty_pb.Empty>;
    sendTransaction: grpc.handleUnaryCall<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.SendTransactionRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.SendTransactionResponse>;
    cancelTransaction: grpc.handleUnaryCall<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CancelTransactionRequest, google_protobuf_empty_pb.Empty>;
    getTransaction: grpc.handleUnaryCall<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetTransactionRequest, gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Transaction>;
    getTransactionByTxID: grpc.handleUnaryCall<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetTransactionByTxIDRequest, gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Transaction>;
    listTransactions: grpc.handleUnaryCall<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListTransactionsRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListTransactionsResponse>;
    listTransactionsByFilter: grpc.handleUnaryCall<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListTransactionsByFilterRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListTransactionsResponse>;
    listTransfers: grpc.handleUnaryCall<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListTransfersRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListTransfersResponse>;
    listTransfersByFilter: grpc.handleUnaryCall<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListTransfersByFilterRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListTransfersResponse>;
    getRateSnapshot: grpc.handleUnaryCall<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetRateSnapshotRequest, gincoinc_adamant_global_v1_adamantglobalv1_model_pb.RateSnapshot>;
    getLatestRateSnapshot: grpc.handleUnaryCall<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetLatestRateSnapshotRequest, gincoinc_adamant_global_v1_adamantglobalv1_model_pb.RateSnapshot>;
    setRates: grpc.handleUnaryCall<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.SetRatesRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.SetRatesResponse>;
    calculateFee: grpc.handleUnaryCall<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CalculateFeeRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CalculateFeeResponse>;
    getRecommendedFeeRate: grpc.handleUnaryCall<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetRecommendedFeeRateRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetRecommendedFeeRateResponse>;
    validateAddress: grpc.handleUnaryCall<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ValidateAddressRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ValidateAddressResponse>;
    flushBalance: grpc.handleUnaryCall<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.FlushBalanceRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.FlushBalanceResponse>;
    listAuditLogs: grpc.handleUnaryCall<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListAuditLogsRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListAuditLogsResponse>;
}

export interface ITellerAPIClient {
    createWallet(request: gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.CreateWalletRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateWalletResponse) => void): grpc.ClientUnaryCall;
    createWallet(request: gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.CreateWalletRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateWalletResponse) => void): grpc.ClientUnaryCall;
    createWallet(request: gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.CreateWalletRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateWalletResponse) => void): grpc.ClientUnaryCall;
    getWallet(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetWalletRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Wallet) => void): grpc.ClientUnaryCall;
    getWallet(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetWalletRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Wallet) => void): grpc.ClientUnaryCall;
    getWallet(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetWalletRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Wallet) => void): grpc.ClientUnaryCall;
    listWallets(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListWalletsRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListWalletsResponse) => void): grpc.ClientUnaryCall;
    listWallets(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListWalletsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListWalletsResponse) => void): grpc.ClientUnaryCall;
    listWallets(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListWalletsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListWalletsResponse) => void): grpc.ClientUnaryCall;
    listWalletsByFilter(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListWalletsByFilterRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListWalletsResponse) => void): grpc.ClientUnaryCall;
    listWalletsByFilter(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListWalletsByFilterRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListWalletsResponse) => void): grpc.ClientUnaryCall;
    listWalletsByFilter(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListWalletsByFilterRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListWalletsResponse) => void): grpc.ClientUnaryCall;
    listBaseWallets(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListBaseWalletsRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListBaseWalletsResponse) => void): grpc.ClientUnaryCall;
    listBaseWallets(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListBaseWalletsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListBaseWalletsResponse) => void): grpc.ClientUnaryCall;
    listBaseWallets(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListBaseWalletsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListBaseWalletsResponse) => void): grpc.ClientUnaryCall;
    getSpendableBalance(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetSpendableBalanceRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetSpendableBalanceResponse) => void): grpc.ClientUnaryCall;
    getSpendableBalance(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetSpendableBalanceRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetSpendableBalanceResponse) => void): grpc.ClientUnaryCall;
    getSpendableBalance(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetSpendableBalanceRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetSpendableBalanceResponse) => void): grpc.ClientUnaryCall;
    initializeXRPWallet(request: gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.InitializeXRPWalletRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    initializeXRPWallet(request: gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.InitializeXRPWalletRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    initializeXRPWallet(request: gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.InitializeXRPWalletRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    initializeWallet(request: gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.InitializeWalletRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    initializeWallet(request: gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.InitializeWalletRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    initializeWallet(request: gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.InitializeWalletRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
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
    importAddress(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ImportAddressRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ImportAddressResponse) => void): grpc.ClientUnaryCall;
    importAddress(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ImportAddressRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ImportAddressResponse) => void): grpc.ClientUnaryCall;
    importAddress(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ImportAddressRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ImportAddressResponse) => void): grpc.ClientUnaryCall;
    getEthereumFeeAddress(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetEthereumFeeAddressRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.EthereumFeeAddress) => void): grpc.ClientUnaryCall;
    getEthereumFeeAddress(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetEthereumFeeAddressRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.EthereumFeeAddress) => void): grpc.ClientUnaryCall;
    getEthereumFeeAddress(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetEthereumFeeAddressRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.EthereumFeeAddress) => void): grpc.ClientUnaryCall;
    updateAddressBalance(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpdateAddressBalanceRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    updateAddressBalance(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpdateAddressBalanceRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    updateAddressBalance(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpdateAddressBalanceRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    createTransaction(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransactionRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransactionResponse) => void): grpc.ClientUnaryCall;
    createTransaction(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransactionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransactionResponse) => void): grpc.ClientUnaryCall;
    createTransaction(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransactionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransactionResponse) => void): grpc.ClientUnaryCall;
    signTransaction(request: gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.SignTransactionRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    signTransaction(request: gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.SignTransactionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    signTransaction(request: gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.SignTransactionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    sendTransaction(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.SendTransactionRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.SendTransactionResponse) => void): grpc.ClientUnaryCall;
    sendTransaction(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.SendTransactionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.SendTransactionResponse) => void): grpc.ClientUnaryCall;
    sendTransaction(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.SendTransactionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.SendTransactionResponse) => void): grpc.ClientUnaryCall;
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
    listTransactionsByFilter(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListTransactionsByFilterRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListTransactionsResponse) => void): grpc.ClientUnaryCall;
    listTransactionsByFilter(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListTransactionsByFilterRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListTransactionsResponse) => void): grpc.ClientUnaryCall;
    listTransactionsByFilter(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListTransactionsByFilterRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListTransactionsResponse) => void): grpc.ClientUnaryCall;
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
    calculateFee(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CalculateFeeRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CalculateFeeResponse) => void): grpc.ClientUnaryCall;
    calculateFee(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CalculateFeeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CalculateFeeResponse) => void): grpc.ClientUnaryCall;
    calculateFee(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CalculateFeeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CalculateFeeResponse) => void): grpc.ClientUnaryCall;
    getRecommendedFeeRate(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetRecommendedFeeRateRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetRecommendedFeeRateResponse) => void): grpc.ClientUnaryCall;
    getRecommendedFeeRate(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetRecommendedFeeRateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetRecommendedFeeRateResponse) => void): grpc.ClientUnaryCall;
    getRecommendedFeeRate(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetRecommendedFeeRateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetRecommendedFeeRateResponse) => void): grpc.ClientUnaryCall;
    validateAddress(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ValidateAddressRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ValidateAddressResponse) => void): grpc.ClientUnaryCall;
    validateAddress(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ValidateAddressRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ValidateAddressResponse) => void): grpc.ClientUnaryCall;
    validateAddress(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ValidateAddressRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ValidateAddressResponse) => void): grpc.ClientUnaryCall;
    flushBalance(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.FlushBalanceRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.FlushBalanceResponse) => void): grpc.ClientUnaryCall;
    flushBalance(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.FlushBalanceRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.FlushBalanceResponse) => void): grpc.ClientUnaryCall;
    flushBalance(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.FlushBalanceRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.FlushBalanceResponse) => void): grpc.ClientUnaryCall;
    listAuditLogs(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListAuditLogsRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListAuditLogsResponse) => void): grpc.ClientUnaryCall;
    listAuditLogs(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListAuditLogsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListAuditLogsResponse) => void): grpc.ClientUnaryCall;
    listAuditLogs(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListAuditLogsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListAuditLogsResponse) => void): grpc.ClientUnaryCall;
}

export class TellerAPIClient extends grpc.Client implements ITellerAPIClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public createWallet(request: gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.CreateWalletRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateWalletResponse) => void): grpc.ClientUnaryCall;
    public createWallet(request: gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.CreateWalletRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateWalletResponse) => void): grpc.ClientUnaryCall;
    public createWallet(request: gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.CreateWalletRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateWalletResponse) => void): grpc.ClientUnaryCall;
    public getWallet(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetWalletRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Wallet) => void): grpc.ClientUnaryCall;
    public getWallet(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetWalletRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Wallet) => void): grpc.ClientUnaryCall;
    public getWallet(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetWalletRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Wallet) => void): grpc.ClientUnaryCall;
    public listWallets(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListWalletsRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListWalletsResponse) => void): grpc.ClientUnaryCall;
    public listWallets(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListWalletsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListWalletsResponse) => void): grpc.ClientUnaryCall;
    public listWallets(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListWalletsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListWalletsResponse) => void): grpc.ClientUnaryCall;
    public listWalletsByFilter(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListWalletsByFilterRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListWalletsResponse) => void): grpc.ClientUnaryCall;
    public listWalletsByFilter(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListWalletsByFilterRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListWalletsResponse) => void): grpc.ClientUnaryCall;
    public listWalletsByFilter(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListWalletsByFilterRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListWalletsResponse) => void): grpc.ClientUnaryCall;
    public listBaseWallets(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListBaseWalletsRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListBaseWalletsResponse) => void): grpc.ClientUnaryCall;
    public listBaseWallets(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListBaseWalletsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListBaseWalletsResponse) => void): grpc.ClientUnaryCall;
    public listBaseWallets(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListBaseWalletsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListBaseWalletsResponse) => void): grpc.ClientUnaryCall;
    public getSpendableBalance(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetSpendableBalanceRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetSpendableBalanceResponse) => void): grpc.ClientUnaryCall;
    public getSpendableBalance(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetSpendableBalanceRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetSpendableBalanceResponse) => void): grpc.ClientUnaryCall;
    public getSpendableBalance(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetSpendableBalanceRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetSpendableBalanceResponse) => void): grpc.ClientUnaryCall;
    public initializeXRPWallet(request: gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.InitializeXRPWalletRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public initializeXRPWallet(request: gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.InitializeXRPWalletRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public initializeXRPWallet(request: gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.InitializeXRPWalletRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public initializeWallet(request: gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.InitializeWalletRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public initializeWallet(request: gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.InitializeWalletRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public initializeWallet(request: gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.InitializeWalletRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
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
    public importAddress(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ImportAddressRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ImportAddressResponse) => void): grpc.ClientUnaryCall;
    public importAddress(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ImportAddressRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ImportAddressResponse) => void): grpc.ClientUnaryCall;
    public importAddress(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ImportAddressRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ImportAddressResponse) => void): grpc.ClientUnaryCall;
    public getEthereumFeeAddress(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetEthereumFeeAddressRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.EthereumFeeAddress) => void): grpc.ClientUnaryCall;
    public getEthereumFeeAddress(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetEthereumFeeAddressRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.EthereumFeeAddress) => void): grpc.ClientUnaryCall;
    public getEthereumFeeAddress(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetEthereumFeeAddressRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.EthereumFeeAddress) => void): grpc.ClientUnaryCall;
    public updateAddressBalance(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpdateAddressBalanceRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public updateAddressBalance(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpdateAddressBalanceRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public updateAddressBalance(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpdateAddressBalanceRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public createTransaction(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransactionRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransactionResponse) => void): grpc.ClientUnaryCall;
    public createTransaction(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransactionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransactionResponse) => void): grpc.ClientUnaryCall;
    public createTransaction(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransactionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransactionResponse) => void): grpc.ClientUnaryCall;
    public signTransaction(request: gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.SignTransactionRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public signTransaction(request: gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.SignTransactionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public signTransaction(request: gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.SignTransactionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public sendTransaction(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.SendTransactionRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.SendTransactionResponse) => void): grpc.ClientUnaryCall;
    public sendTransaction(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.SendTransactionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.SendTransactionResponse) => void): grpc.ClientUnaryCall;
    public sendTransaction(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.SendTransactionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.SendTransactionResponse) => void): grpc.ClientUnaryCall;
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
    public listTransactionsByFilter(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListTransactionsByFilterRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListTransactionsResponse) => void): grpc.ClientUnaryCall;
    public listTransactionsByFilter(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListTransactionsByFilterRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListTransactionsResponse) => void): grpc.ClientUnaryCall;
    public listTransactionsByFilter(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListTransactionsByFilterRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListTransactionsResponse) => void): grpc.ClientUnaryCall;
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
    public calculateFee(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CalculateFeeRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CalculateFeeResponse) => void): grpc.ClientUnaryCall;
    public calculateFee(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CalculateFeeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CalculateFeeResponse) => void): grpc.ClientUnaryCall;
    public calculateFee(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CalculateFeeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CalculateFeeResponse) => void): grpc.ClientUnaryCall;
    public getRecommendedFeeRate(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetRecommendedFeeRateRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetRecommendedFeeRateResponse) => void): grpc.ClientUnaryCall;
    public getRecommendedFeeRate(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetRecommendedFeeRateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetRecommendedFeeRateResponse) => void): grpc.ClientUnaryCall;
    public getRecommendedFeeRate(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetRecommendedFeeRateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetRecommendedFeeRateResponse) => void): grpc.ClientUnaryCall;
    public validateAddress(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ValidateAddressRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ValidateAddressResponse) => void): grpc.ClientUnaryCall;
    public validateAddress(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ValidateAddressRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ValidateAddressResponse) => void): grpc.ClientUnaryCall;
    public validateAddress(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ValidateAddressRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ValidateAddressResponse) => void): grpc.ClientUnaryCall;
    public flushBalance(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.FlushBalanceRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.FlushBalanceResponse) => void): grpc.ClientUnaryCall;
    public flushBalance(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.FlushBalanceRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.FlushBalanceResponse) => void): grpc.ClientUnaryCall;
    public flushBalance(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.FlushBalanceRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.FlushBalanceResponse) => void): grpc.ClientUnaryCall;
    public listAuditLogs(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListAuditLogsRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListAuditLogsResponse) => void): grpc.ClientUnaryCall;
    public listAuditLogs(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListAuditLogsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListAuditLogsResponse) => void): grpc.ClientUnaryCall;
    public listAuditLogs(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListAuditLogsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListAuditLogsResponse) => void): grpc.ClientUnaryCall;
}
