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
    listStakingWalletsByFilter: ITellerAPIService_IListStakingWalletsByFilter;
    listNFTWalletsByFilter: ITellerAPIService_IListNFTWalletsByFilter;
    listBaseWallets: ITellerAPIService_IListBaseWallets;
    getSpendableBalance: ITellerAPIService_IGetSpendableBalance;
    initializeXRPWallet: ITellerAPIService_IInitializeXRPWallet;
    initializeWallet: ITellerAPIService_IInitializeWallet;
    updateDestinationWalletID: ITellerAPIService_IUpdateDestinationWalletID;
    getCosmosBalance: ITellerAPIService_IGetCosmosBalance;
    listCosmosDelegateHistories: ITellerAPIService_IListCosmosDelegateHistories;
    listUTXOs: ITellerAPIService_IListUTXOs;
    createAddress: ITellerAPIService_ICreateAddress;
    createIOSTAccount: ITellerAPIService_ICreateIOSTAccount;
    listSymbolChildAddresses: ITellerAPIService_IListSymbolChildAddresses;
    getAddress: ITellerAPIService_IGetAddress;
    getAddressByAddress: ITellerAPIService_IGetAddressByAddress;
    getAddressByAddressCoin: ITellerAPIService_IGetAddressByAddressCoin;
    getAddressByIndex: ITellerAPIService_IGetAddressByIndex;
    listAddresses: ITellerAPIService_IListAddresses;
    importAddress: ITellerAPIService_IImportAddress;
    getEthereumFeeAddress: ITellerAPIService_IGetEthereumFeeAddress;
    updateAddressBalance: ITellerAPIService_IUpdateAddressBalance;
    listColdFeeDepositAddresses: ITellerAPIService_IListColdFeeDepositAddresses;
    listHotFeeDepositAddresses: ITellerAPIService_IListHotFeeDepositAddresses;
    createPreTransaction: ITellerAPIService_ICreatePreTransaction;
    listPreTransactionsByFilter: ITellerAPIService_IListPreTransactionsByFilter;
    cancelPreTransaction: ITellerAPIService_ICancelPreTransaction;
    createTransaction: ITellerAPIService_ICreateTransaction;
    createContractCreationTransaction: ITellerAPIService_ICreateContractCreationTransaction;
    signTransaction: ITellerAPIService_ISignTransaction;
    sendTransaction: ITellerAPIService_ISendTransaction;
    resendTransaction: ITellerAPIService_IResendTransaction;
    cancelTransaction: ITellerAPIService_ICancelTransaction;
    replaceTransaction: ITellerAPIService_IReplaceTransaction;
    isTransactionReplaceable: ITellerAPIService_IIsTransactionReplaceable;
    getTransaction: ITellerAPIService_IGetTransaction;
    getTransactionByTxID: ITellerAPIService_IGetTransactionByTxID;
    listTransactions: ITellerAPIService_IListTransactions;
    listTransactionsByFilter: ITellerAPIService_IListTransactionsByFilter;
    listUnconfirmedTransactionsByFilter: ITellerAPIService_IListUnconfirmedTransactionsByFilter;
    exitEthereumStakingValidators: ITellerAPIService_IExitEthereumStakingValidators;
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
    listStakingHistoriesByFilter: ITellerAPIService_IListStakingHistoriesByFilter;
    listStakingValidatorsByFilter: ITellerAPIService_IListStakingValidatorsByFilter;
    listNFTsByFilter: ITellerAPIService_IListNFTsByFilter;
    signMessage: ITellerAPIService_ISignMessage;
    progmatCoinInitialize: ITellerAPIService_IProgmatCoinInitialize;
    progmatCoinConfigureMinter: ITellerAPIService_IProgmatCoinConfigureMinter;
    progmatCoinMintAndTransfer: ITellerAPIService_IProgmatCoinMintAndTransfer;
    progmatCoinMint: ITellerAPIService_IProgmatCoinMint;
    progmatCoinBurn: ITellerAPIService_IProgmatCoinBurn;
    progmatCoinBulkAddToWhitelist: ITellerAPIService_IProgmatCoinBulkAddToWhitelist;
    progmatCoinBulkRemoveFromWhitelist: ITellerAPIService_IProgmatCoinBulkRemoveFromWhitelist;
    progmatCoinBulkAddToBlacklist: ITellerAPIService_IProgmatCoinBulkAddToBlacklist;
    progmatCoinBulkRemoveFromBlacklist: ITellerAPIService_IProgmatCoinBulkRemoveFromBlacklist;
    progmatCoinConfiscate: ITellerAPIService_IProgmatCoinConfiscate;
    progmatCoinPause: ITellerAPIService_IProgmatCoinPause;
    progmatCoinUnpause: ITellerAPIService_IProgmatCoinUnpause;
    progmatCoinGrantWhiteAndBlackLister: ITellerAPIService_IProgmatCoinGrantWhiteAndBlackLister;
    progmatCoinUpgradeToAndCall: ITellerAPIService_IProgmatCoinUpgradeToAndCall;
    listPreTransactionThresholdsByFilter: ITellerAPIService_IListPreTransactionThresholdsByFilter;
    listBlacklistAddressesByFilter: ITellerAPIService_IListBlacklistAddressesByFilter;
    listBlacklistAddressFiles: ITellerAPIService_IListBlacklistAddressFiles;
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
interface ITellerAPIService_IListStakingWalletsByFilter extends grpc.MethodDefinition<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListStakingWalletsByFilterRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListStakingWalletsResponse> {
    path: "/adamant.teller.v1.TellerAPI/ListStakingWalletsByFilter";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListStakingWalletsByFilterRequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListStakingWalletsByFilterRequest>;
    responseSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListStakingWalletsResponse>;
    responseDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListStakingWalletsResponse>;
}
interface ITellerAPIService_IListNFTWalletsByFilter extends grpc.MethodDefinition<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListNFTWalletsByFilterRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListNFTWalletsResponse> {
    path: "/adamant.teller.v1.TellerAPI/ListNFTWalletsByFilter";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListNFTWalletsByFilterRequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListNFTWalletsByFilterRequest>;
    responseSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListNFTWalletsResponse>;
    responseDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListNFTWalletsResponse>;
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
interface ITellerAPIService_IUpdateDestinationWalletID extends grpc.MethodDefinition<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpdateDestinationWalletIDRequest, google_protobuf_empty_pb.Empty> {
    path: "/adamant.teller.v1.TellerAPI/UpdateDestinationWalletID";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpdateDestinationWalletIDRequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpdateDestinationWalletIDRequest>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface ITellerAPIService_IGetCosmosBalance extends grpc.MethodDefinition<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetCosmosBalanceRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetCosmosBalanceResponse> {
    path: "/adamant.teller.v1.TellerAPI/GetCosmosBalance";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetCosmosBalanceRequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetCosmosBalanceRequest>;
    responseSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetCosmosBalanceResponse>;
    responseDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetCosmosBalanceResponse>;
}
interface ITellerAPIService_IListCosmosDelegateHistories extends grpc.MethodDefinition<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListCosmosDelegateHistoriesRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListCosmosDelegateHistoriesResponse> {
    path: "/adamant.teller.v1.TellerAPI/ListCosmosDelegateHistories";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListCosmosDelegateHistoriesRequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListCosmosDelegateHistoriesRequest>;
    responseSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListCosmosDelegateHistoriesResponse>;
    responseDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListCosmosDelegateHistoriesResponse>;
}
interface ITellerAPIService_IListUTXOs extends grpc.MethodDefinition<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListUTXOsRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListUTXOsResponse> {
    path: "/adamant.teller.v1.TellerAPI/ListUTXOs";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListUTXOsRequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListUTXOsRequest>;
    responseSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListUTXOsResponse>;
    responseDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListUTXOsResponse>;
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
interface ITellerAPIService_ICreateIOSTAccount extends grpc.MethodDefinition<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateIOSTAccountRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateIOSTAccountResponse> {
    path: "/adamant.teller.v1.TellerAPI/CreateIOSTAccount";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateIOSTAccountRequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateIOSTAccountRequest>;
    responseSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateIOSTAccountResponse>;
    responseDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateIOSTAccountResponse>;
}
interface ITellerAPIService_IListSymbolChildAddresses extends grpc.MethodDefinition<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListSymbolChildAddressesRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListSymbolChildAddressesResponse> {
    path: "/adamant.teller.v1.TellerAPI/ListSymbolChildAddresses";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListSymbolChildAddressesRequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListSymbolChildAddressesRequest>;
    responseSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListSymbolChildAddressesResponse>;
    responseDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListSymbolChildAddressesResponse>;
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
interface ITellerAPIService_IGetAddressByAddressCoin extends grpc.MethodDefinition<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetAddressByAddressCoinRequest, gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Address> {
    path: "/adamant.teller.v1.TellerAPI/GetAddressByAddressCoin";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetAddressByAddressCoinRequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetAddressByAddressCoinRequest>;
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
interface ITellerAPIService_IImportAddress extends grpc.MethodDefinition<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ImportAddressRequest, google_protobuf_empty_pb.Empty> {
    path: "/adamant.teller.v1.TellerAPI/ImportAddress";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ImportAddressRequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ImportAddressRequest>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
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
interface ITellerAPIService_IListColdFeeDepositAddresses extends grpc.MethodDefinition<gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.ListColdFeeDepositAddressesRequest, gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.ListColdFeeDepositAddressesResponse> {
    path: "/adamant.teller.v1.TellerAPI/ListColdFeeDepositAddresses";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.ListColdFeeDepositAddressesRequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.ListColdFeeDepositAddressesRequest>;
    responseSerialize: grpc.serialize<gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.ListColdFeeDepositAddressesResponse>;
    responseDeserialize: grpc.deserialize<gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.ListColdFeeDepositAddressesResponse>;
}
interface ITellerAPIService_IListHotFeeDepositAddresses extends grpc.MethodDefinition<gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.ListHotFeeDepositAddressesRequest, gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.ListHotFeeDepositAddressesResponse> {
    path: "/adamant.teller.v1.TellerAPI/ListHotFeeDepositAddresses";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.ListHotFeeDepositAddressesRequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.ListHotFeeDepositAddressesRequest>;
    responseSerialize: grpc.serialize<gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.ListHotFeeDepositAddressesResponse>;
    responseDeserialize: grpc.deserialize<gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.ListHotFeeDepositAddressesResponse>;
}
interface ITellerAPIService_ICreatePreTransaction extends grpc.MethodDefinition<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreatePreTransactionRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreatePreTransactionResponse> {
    path: "/adamant.teller.v1.TellerAPI/CreatePreTransaction";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreatePreTransactionRequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreatePreTransactionRequest>;
    responseSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreatePreTransactionResponse>;
    responseDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreatePreTransactionResponse>;
}
interface ITellerAPIService_IListPreTransactionsByFilter extends grpc.MethodDefinition<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListPreTransactionsByFilterRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListPreTransactionsByFilterResponse> {
    path: "/adamant.teller.v1.TellerAPI/ListPreTransactionsByFilter";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListPreTransactionsByFilterRequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListPreTransactionsByFilterRequest>;
    responseSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListPreTransactionsByFilterResponse>;
    responseDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListPreTransactionsByFilterResponse>;
}
interface ITellerAPIService_ICancelPreTransaction extends grpc.MethodDefinition<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CancelPreTransactionRequest, google_protobuf_empty_pb.Empty> {
    path: "/adamant.teller.v1.TellerAPI/CancelPreTransaction";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CancelPreTransactionRequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CancelPreTransactionRequest>;
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
interface ITellerAPIService_ICreateContractCreationTransaction extends grpc.MethodDefinition<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateContractCreationTransactionRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateContractCreationTransactionResponse> {
    path: "/adamant.teller.v1.TellerAPI/CreateContractCreationTransaction";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateContractCreationTransactionRequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateContractCreationTransactionRequest>;
    responseSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateContractCreationTransactionResponse>;
    responseDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateContractCreationTransactionResponse>;
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
interface ITellerAPIService_ISendTransaction extends grpc.MethodDefinition<gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.SendTransactionRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.SendTransactionResponse> {
    path: "/adamant.teller.v1.TellerAPI/SendTransaction";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.SendTransactionRequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.SendTransactionRequest>;
    responseSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.SendTransactionResponse>;
    responseDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.SendTransactionResponse>;
}
interface ITellerAPIService_IResendTransaction extends grpc.MethodDefinition<gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.ResendTransactionRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ResendTransactionResponse> {
    path: "/adamant.teller.v1.TellerAPI/ResendTransaction";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.ResendTransactionRequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.ResendTransactionRequest>;
    responseSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ResendTransactionResponse>;
    responseDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ResendTransactionResponse>;
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
interface ITellerAPIService_IReplaceTransaction extends grpc.MethodDefinition<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ReplaceTransactionRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ReplaceTransactionResponse> {
    path: "/adamant.teller.v1.TellerAPI/ReplaceTransaction";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ReplaceTransactionRequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ReplaceTransactionRequest>;
    responseSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ReplaceTransactionResponse>;
    responseDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ReplaceTransactionResponse>;
}
interface ITellerAPIService_IIsTransactionReplaceable extends grpc.MethodDefinition<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.IsTransactionReplaceableRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.IsTransactionReplaceableResponse> {
    path: "/adamant.teller.v1.TellerAPI/IsTransactionReplaceable";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.IsTransactionReplaceableRequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.IsTransactionReplaceableRequest>;
    responseSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.IsTransactionReplaceableResponse>;
    responseDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.IsTransactionReplaceableResponse>;
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
interface ITellerAPIService_IListUnconfirmedTransactionsByFilter extends grpc.MethodDefinition<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListUnconfirmedTransactionsByFilterRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListUnconfirmedTransactionsResponse> {
    path: "/adamant.teller.v1.TellerAPI/ListUnconfirmedTransactionsByFilter";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListUnconfirmedTransactionsByFilterRequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListUnconfirmedTransactionsByFilterRequest>;
    responseSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListUnconfirmedTransactionsResponse>;
    responseDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListUnconfirmedTransactionsResponse>;
}
interface ITellerAPIService_IExitEthereumStakingValidators extends grpc.MethodDefinition<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ExitEthereumStakingValidatorsRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ExitEthereumStakingValidatorsResponse> {
    path: "/adamant.teller.v1.TellerAPI/ExitEthereumStakingValidators";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ExitEthereumStakingValidatorsRequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ExitEthereumStakingValidatorsRequest>;
    responseSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ExitEthereumStakingValidatorsResponse>;
    responseDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ExitEthereumStakingValidatorsResponse>;
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
interface ITellerAPIService_IListStakingHistoriesByFilter extends grpc.MethodDefinition<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListStakingHistoriesByFilterRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListStakingHistoriesResponse> {
    path: "/adamant.teller.v1.TellerAPI/ListStakingHistoriesByFilter";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListStakingHistoriesByFilterRequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListStakingHistoriesByFilterRequest>;
    responseSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListStakingHistoriesResponse>;
    responseDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListStakingHistoriesResponse>;
}
interface ITellerAPIService_IListStakingValidatorsByFilter extends grpc.MethodDefinition<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListStakingValidatorsByFilterRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListStakingValidatorsResponse> {
    path: "/adamant.teller.v1.TellerAPI/ListStakingValidatorsByFilter";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListStakingValidatorsByFilterRequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListStakingValidatorsByFilterRequest>;
    responseSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListStakingValidatorsResponse>;
    responseDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListStakingValidatorsResponse>;
}
interface ITellerAPIService_IListNFTsByFilter extends grpc.MethodDefinition<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListNFTsByFilterRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListNFTsResponse> {
    path: "/adamant.teller.v1.TellerAPI/ListNFTsByFilter";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListNFTsByFilterRequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListNFTsByFilterRequest>;
    responseSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListNFTsResponse>;
    responseDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListNFTsResponse>;
}
interface ITellerAPIService_ISignMessage extends grpc.MethodDefinition<gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.SignMessageRequest, gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.SignMessageResponse> {
    path: "/adamant.teller.v1.TellerAPI/SignMessage";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.SignMessageRequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.SignMessageRequest>;
    responseSerialize: grpc.serialize<gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.SignMessageResponse>;
    responseDeserialize: grpc.deserialize<gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.SignMessageResponse>;
}
interface ITellerAPIService_IProgmatCoinInitialize extends grpc.MethodDefinition<gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.ProgmatCoinInitializeRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransactionResponse> {
    path: "/adamant.teller.v1.TellerAPI/ProgmatCoinInitialize";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.ProgmatCoinInitializeRequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.ProgmatCoinInitializeRequest>;
    responseSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransactionResponse>;
    responseDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransactionResponse>;
}
interface ITellerAPIService_IProgmatCoinConfigureMinter extends grpc.MethodDefinition<gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.ProgmatCoinConfigureMinterRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransactionResponse> {
    path: "/adamant.teller.v1.TellerAPI/ProgmatCoinConfigureMinter";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.ProgmatCoinConfigureMinterRequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.ProgmatCoinConfigureMinterRequest>;
    responseSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransactionResponse>;
    responseDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransactionResponse>;
}
interface ITellerAPIService_IProgmatCoinMintAndTransfer extends grpc.MethodDefinition<gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.ProgmatCoinMintAndTransferRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransactionResponse> {
    path: "/adamant.teller.v1.TellerAPI/ProgmatCoinMintAndTransfer";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.ProgmatCoinMintAndTransferRequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.ProgmatCoinMintAndTransferRequest>;
    responseSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransactionResponse>;
    responseDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransactionResponse>;
}
interface ITellerAPIService_IProgmatCoinMint extends grpc.MethodDefinition<gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.ProgmatCoinMintRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransactionResponse> {
    path: "/adamant.teller.v1.TellerAPI/ProgmatCoinMint";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.ProgmatCoinMintRequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.ProgmatCoinMintRequest>;
    responseSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransactionResponse>;
    responseDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransactionResponse>;
}
interface ITellerAPIService_IProgmatCoinBurn extends grpc.MethodDefinition<gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.ProgmatCoinBurnRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransactionResponse> {
    path: "/adamant.teller.v1.TellerAPI/ProgmatCoinBurn";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.ProgmatCoinBurnRequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.ProgmatCoinBurnRequest>;
    responseSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransactionResponse>;
    responseDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransactionResponse>;
}
interface ITellerAPIService_IProgmatCoinBulkAddToWhitelist extends grpc.MethodDefinition<gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.ProgmatCoinBulkAddToWhitelistRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransactionResponse> {
    path: "/adamant.teller.v1.TellerAPI/ProgmatCoinBulkAddToWhitelist";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.ProgmatCoinBulkAddToWhitelistRequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.ProgmatCoinBulkAddToWhitelistRequest>;
    responseSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransactionResponse>;
    responseDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransactionResponse>;
}
interface ITellerAPIService_IProgmatCoinBulkRemoveFromWhitelist extends grpc.MethodDefinition<gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.ProgmatCoinBulkRemoveFromWhitelistRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransactionResponse> {
    path: "/adamant.teller.v1.TellerAPI/ProgmatCoinBulkRemoveFromWhitelist";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.ProgmatCoinBulkRemoveFromWhitelistRequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.ProgmatCoinBulkRemoveFromWhitelistRequest>;
    responseSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransactionResponse>;
    responseDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransactionResponse>;
}
interface ITellerAPIService_IProgmatCoinBulkAddToBlacklist extends grpc.MethodDefinition<gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.ProgmatCoinBulkAddToBlacklistRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransactionResponse> {
    path: "/adamant.teller.v1.TellerAPI/ProgmatCoinBulkAddToBlacklist";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.ProgmatCoinBulkAddToBlacklistRequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.ProgmatCoinBulkAddToBlacklistRequest>;
    responseSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransactionResponse>;
    responseDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransactionResponse>;
}
interface ITellerAPIService_IProgmatCoinBulkRemoveFromBlacklist extends grpc.MethodDefinition<gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.ProgmatCoinBulkRemoveFromBlacklistRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransactionResponse> {
    path: "/adamant.teller.v1.TellerAPI/ProgmatCoinBulkRemoveFromBlacklist";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.ProgmatCoinBulkRemoveFromBlacklistRequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.ProgmatCoinBulkRemoveFromBlacklistRequest>;
    responseSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransactionResponse>;
    responseDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransactionResponse>;
}
interface ITellerAPIService_IProgmatCoinConfiscate extends grpc.MethodDefinition<gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.ProgmatCoinConfiscateRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransactionResponse> {
    path: "/adamant.teller.v1.TellerAPI/ProgmatCoinConfiscate";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.ProgmatCoinConfiscateRequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.ProgmatCoinConfiscateRequest>;
    responseSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransactionResponse>;
    responseDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransactionResponse>;
}
interface ITellerAPIService_IProgmatCoinPause extends grpc.MethodDefinition<gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.ProgmatCoinPauseRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransactionResponse> {
    path: "/adamant.teller.v1.TellerAPI/ProgmatCoinPause";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.ProgmatCoinPauseRequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.ProgmatCoinPauseRequest>;
    responseSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransactionResponse>;
    responseDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransactionResponse>;
}
interface ITellerAPIService_IProgmatCoinUnpause extends grpc.MethodDefinition<gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.ProgmatCoinUnpauseRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransactionResponse> {
    path: "/adamant.teller.v1.TellerAPI/ProgmatCoinUnpause";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.ProgmatCoinUnpauseRequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.ProgmatCoinUnpauseRequest>;
    responseSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransactionResponse>;
    responseDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransactionResponse>;
}
interface ITellerAPIService_IProgmatCoinGrantWhiteAndBlackLister extends grpc.MethodDefinition<gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.ProgmatCoinGrantWhiteAndBlackListerRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransactionResponse> {
    path: "/adamant.teller.v1.TellerAPI/ProgmatCoinGrantWhiteAndBlackLister";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.ProgmatCoinGrantWhiteAndBlackListerRequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.ProgmatCoinGrantWhiteAndBlackListerRequest>;
    responseSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransactionResponse>;
    responseDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransactionResponse>;
}
interface ITellerAPIService_IProgmatCoinUpgradeToAndCall extends grpc.MethodDefinition<gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.ProgmatCoinUpgradeToAndCallRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransactionResponse> {
    path: "/adamant.teller.v1.TellerAPI/ProgmatCoinUpgradeToAndCall";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.ProgmatCoinUpgradeToAndCallRequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.ProgmatCoinUpgradeToAndCallRequest>;
    responseSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransactionResponse>;
    responseDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransactionResponse>;
}
interface ITellerAPIService_IListPreTransactionThresholdsByFilter extends grpc.MethodDefinition<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListPreTransactionThresholdsByFilterRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListPreTransactionThresholdsByFilterResponse> {
    path: "/adamant.teller.v1.TellerAPI/ListPreTransactionThresholdsByFilter";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListPreTransactionThresholdsByFilterRequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListPreTransactionThresholdsByFilterRequest>;
    responseSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListPreTransactionThresholdsByFilterResponse>;
    responseDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListPreTransactionThresholdsByFilterResponse>;
}
interface ITellerAPIService_IListBlacklistAddressesByFilter extends grpc.MethodDefinition<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListBlacklistAddressesByFilterRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListBlacklistAddressesByFilterResponse> {
    path: "/adamant.teller.v1.TellerAPI/ListBlacklistAddressesByFilter";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListBlacklistAddressesByFilterRequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListBlacklistAddressesByFilterRequest>;
    responseSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListBlacklistAddressesByFilterResponse>;
    responseDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListBlacklistAddressesByFilterResponse>;
}
interface ITellerAPIService_IListBlacklistAddressFiles extends grpc.MethodDefinition<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListBlacklistAddressFilesRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListBlacklistAddressFilesResponse> {
    path: "/adamant.teller.v1.TellerAPI/ListBlacklistAddressFiles";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListBlacklistAddressFilesRequest>;
    requestDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListBlacklistAddressFilesRequest>;
    responseSerialize: grpc.serialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListBlacklistAddressFilesResponse>;
    responseDeserialize: grpc.deserialize<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListBlacklistAddressFilesResponse>;
}

export const TellerAPIService: ITellerAPIService;

export interface ITellerAPIServer {
    createWallet: grpc.handleUnaryCall<gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.CreateWalletRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateWalletResponse>;
    getWallet: grpc.handleUnaryCall<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetWalletRequest, gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Wallet>;
    listWallets: grpc.handleUnaryCall<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListWalletsRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListWalletsResponse>;
    listWalletsByFilter: grpc.handleUnaryCall<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListWalletsByFilterRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListWalletsResponse>;
    listStakingWalletsByFilter: grpc.handleUnaryCall<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListStakingWalletsByFilterRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListStakingWalletsResponse>;
    listNFTWalletsByFilter: grpc.handleUnaryCall<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListNFTWalletsByFilterRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListNFTWalletsResponse>;
    listBaseWallets: grpc.handleUnaryCall<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListBaseWalletsRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListBaseWalletsResponse>;
    getSpendableBalance: grpc.handleUnaryCall<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetSpendableBalanceRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetSpendableBalanceResponse>;
    initializeXRPWallet: grpc.handleUnaryCall<gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.InitializeXRPWalletRequest, google_protobuf_empty_pb.Empty>;
    initializeWallet: grpc.handleUnaryCall<gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.InitializeWalletRequest, google_protobuf_empty_pb.Empty>;
    updateDestinationWalletID: grpc.handleUnaryCall<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpdateDestinationWalletIDRequest, google_protobuf_empty_pb.Empty>;
    getCosmosBalance: grpc.handleUnaryCall<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetCosmosBalanceRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetCosmosBalanceResponse>;
    listCosmosDelegateHistories: grpc.handleUnaryCall<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListCosmosDelegateHistoriesRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListCosmosDelegateHistoriesResponse>;
    listUTXOs: grpc.handleUnaryCall<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListUTXOsRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListUTXOsResponse>;
    createAddress: grpc.handleUnaryCall<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateAddressRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateAddressResponse>;
    createIOSTAccount: grpc.handleUnaryCall<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateIOSTAccountRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateIOSTAccountResponse>;
    listSymbolChildAddresses: grpc.handleUnaryCall<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListSymbolChildAddressesRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListSymbolChildAddressesResponse>;
    getAddress: grpc.handleUnaryCall<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetAddressRequest, gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Address>;
    getAddressByAddress: grpc.handleUnaryCall<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetAddressByAddressRequest, gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Address>;
    getAddressByAddressCoin: grpc.handleUnaryCall<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetAddressByAddressCoinRequest, gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Address>;
    getAddressByIndex: grpc.handleUnaryCall<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetAddressByIndexRequest, gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Address>;
    listAddresses: grpc.handleUnaryCall<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListAddressesRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListAddressesResponse>;
    importAddress: grpc.handleUnaryCall<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ImportAddressRequest, google_protobuf_empty_pb.Empty>;
    getEthereumFeeAddress: grpc.handleUnaryCall<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetEthereumFeeAddressRequest, gincoinc_adamant_global_v1_adamantglobalv1_model_pb.EthereumFeeAddress>;
    updateAddressBalance: grpc.handleUnaryCall<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpdateAddressBalanceRequest, google_protobuf_empty_pb.Empty>;
    listColdFeeDepositAddresses: grpc.handleUnaryCall<gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.ListColdFeeDepositAddressesRequest, gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.ListColdFeeDepositAddressesResponse>;
    listHotFeeDepositAddresses: grpc.handleUnaryCall<gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.ListHotFeeDepositAddressesRequest, gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.ListHotFeeDepositAddressesResponse>;
    createPreTransaction: grpc.handleUnaryCall<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreatePreTransactionRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreatePreTransactionResponse>;
    listPreTransactionsByFilter: grpc.handleUnaryCall<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListPreTransactionsByFilterRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListPreTransactionsByFilterResponse>;
    cancelPreTransaction: grpc.handleUnaryCall<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CancelPreTransactionRequest, google_protobuf_empty_pb.Empty>;
    createTransaction: grpc.handleUnaryCall<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransactionRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransactionResponse>;
    createContractCreationTransaction: grpc.handleUnaryCall<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateContractCreationTransactionRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateContractCreationTransactionResponse>;
    signTransaction: grpc.handleUnaryCall<gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.SignTransactionRequest, google_protobuf_empty_pb.Empty>;
    sendTransaction: grpc.handleUnaryCall<gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.SendTransactionRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.SendTransactionResponse>;
    resendTransaction: grpc.handleUnaryCall<gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.ResendTransactionRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ResendTransactionResponse>;
    cancelTransaction: grpc.handleUnaryCall<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CancelTransactionRequest, google_protobuf_empty_pb.Empty>;
    replaceTransaction: grpc.handleUnaryCall<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ReplaceTransactionRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ReplaceTransactionResponse>;
    isTransactionReplaceable: grpc.handleUnaryCall<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.IsTransactionReplaceableRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.IsTransactionReplaceableResponse>;
    getTransaction: grpc.handleUnaryCall<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetTransactionRequest, gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Transaction>;
    getTransactionByTxID: grpc.handleUnaryCall<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetTransactionByTxIDRequest, gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Transaction>;
    listTransactions: grpc.handleUnaryCall<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListTransactionsRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListTransactionsResponse>;
    listTransactionsByFilter: grpc.handleUnaryCall<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListTransactionsByFilterRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListTransactionsResponse>;
    listUnconfirmedTransactionsByFilter: grpc.handleUnaryCall<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListUnconfirmedTransactionsByFilterRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListUnconfirmedTransactionsResponse>;
    exitEthereumStakingValidators: grpc.handleUnaryCall<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ExitEthereumStakingValidatorsRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ExitEthereumStakingValidatorsResponse>;
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
    listStakingHistoriesByFilter: grpc.handleUnaryCall<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListStakingHistoriesByFilterRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListStakingHistoriesResponse>;
    listStakingValidatorsByFilter: grpc.handleUnaryCall<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListStakingValidatorsByFilterRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListStakingValidatorsResponse>;
    listNFTsByFilter: grpc.handleUnaryCall<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListNFTsByFilterRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListNFTsResponse>;
    signMessage: grpc.handleUnaryCall<gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.SignMessageRequest, gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.SignMessageResponse>;
    progmatCoinInitialize: grpc.handleUnaryCall<gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.ProgmatCoinInitializeRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransactionResponse>;
    progmatCoinConfigureMinter: grpc.handleUnaryCall<gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.ProgmatCoinConfigureMinterRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransactionResponse>;
    progmatCoinMintAndTransfer: grpc.handleUnaryCall<gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.ProgmatCoinMintAndTransferRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransactionResponse>;
    progmatCoinMint: grpc.handleUnaryCall<gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.ProgmatCoinMintRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransactionResponse>;
    progmatCoinBurn: grpc.handleUnaryCall<gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.ProgmatCoinBurnRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransactionResponse>;
    progmatCoinBulkAddToWhitelist: grpc.handleUnaryCall<gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.ProgmatCoinBulkAddToWhitelistRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransactionResponse>;
    progmatCoinBulkRemoveFromWhitelist: grpc.handleUnaryCall<gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.ProgmatCoinBulkRemoveFromWhitelistRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransactionResponse>;
    progmatCoinBulkAddToBlacklist: grpc.handleUnaryCall<gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.ProgmatCoinBulkAddToBlacklistRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransactionResponse>;
    progmatCoinBulkRemoveFromBlacklist: grpc.handleUnaryCall<gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.ProgmatCoinBulkRemoveFromBlacklistRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransactionResponse>;
    progmatCoinConfiscate: grpc.handleUnaryCall<gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.ProgmatCoinConfiscateRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransactionResponse>;
    progmatCoinPause: grpc.handleUnaryCall<gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.ProgmatCoinPauseRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransactionResponse>;
    progmatCoinUnpause: grpc.handleUnaryCall<gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.ProgmatCoinUnpauseRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransactionResponse>;
    progmatCoinGrantWhiteAndBlackLister: grpc.handleUnaryCall<gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.ProgmatCoinGrantWhiteAndBlackListerRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransactionResponse>;
    progmatCoinUpgradeToAndCall: grpc.handleUnaryCall<gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.ProgmatCoinUpgradeToAndCallRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransactionResponse>;
    listPreTransactionThresholdsByFilter: grpc.handleUnaryCall<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListPreTransactionThresholdsByFilterRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListPreTransactionThresholdsByFilterResponse>;
    listBlacklistAddressesByFilter: grpc.handleUnaryCall<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListBlacklistAddressesByFilterRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListBlacklistAddressesByFilterResponse>;
    listBlacklistAddressFiles: grpc.handleUnaryCall<gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListBlacklistAddressFilesRequest, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListBlacklistAddressFilesResponse>;
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
    listStakingWalletsByFilter(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListStakingWalletsByFilterRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListStakingWalletsResponse) => void): grpc.ClientUnaryCall;
    listStakingWalletsByFilter(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListStakingWalletsByFilterRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListStakingWalletsResponse) => void): grpc.ClientUnaryCall;
    listStakingWalletsByFilter(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListStakingWalletsByFilterRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListStakingWalletsResponse) => void): grpc.ClientUnaryCall;
    listNFTWalletsByFilter(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListNFTWalletsByFilterRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListNFTWalletsResponse) => void): grpc.ClientUnaryCall;
    listNFTWalletsByFilter(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListNFTWalletsByFilterRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListNFTWalletsResponse) => void): grpc.ClientUnaryCall;
    listNFTWalletsByFilter(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListNFTWalletsByFilterRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListNFTWalletsResponse) => void): grpc.ClientUnaryCall;
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
    updateDestinationWalletID(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpdateDestinationWalletIDRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    updateDestinationWalletID(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpdateDestinationWalletIDRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    updateDestinationWalletID(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpdateDestinationWalletIDRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    getCosmosBalance(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetCosmosBalanceRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetCosmosBalanceResponse) => void): grpc.ClientUnaryCall;
    getCosmosBalance(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetCosmosBalanceRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetCosmosBalanceResponse) => void): grpc.ClientUnaryCall;
    getCosmosBalance(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetCosmosBalanceRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetCosmosBalanceResponse) => void): grpc.ClientUnaryCall;
    listCosmosDelegateHistories(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListCosmosDelegateHistoriesRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListCosmosDelegateHistoriesResponse) => void): grpc.ClientUnaryCall;
    listCosmosDelegateHistories(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListCosmosDelegateHistoriesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListCosmosDelegateHistoriesResponse) => void): grpc.ClientUnaryCall;
    listCosmosDelegateHistories(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListCosmosDelegateHistoriesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListCosmosDelegateHistoriesResponse) => void): grpc.ClientUnaryCall;
    listUTXOs(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListUTXOsRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListUTXOsResponse) => void): grpc.ClientUnaryCall;
    listUTXOs(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListUTXOsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListUTXOsResponse) => void): grpc.ClientUnaryCall;
    listUTXOs(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListUTXOsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListUTXOsResponse) => void): grpc.ClientUnaryCall;
    createAddress(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateAddressRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateAddressResponse) => void): grpc.ClientUnaryCall;
    createAddress(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateAddressRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateAddressResponse) => void): grpc.ClientUnaryCall;
    createAddress(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateAddressRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateAddressResponse) => void): grpc.ClientUnaryCall;
    createIOSTAccount(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateIOSTAccountRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateIOSTAccountResponse) => void): grpc.ClientUnaryCall;
    createIOSTAccount(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateIOSTAccountRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateIOSTAccountResponse) => void): grpc.ClientUnaryCall;
    createIOSTAccount(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateIOSTAccountRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateIOSTAccountResponse) => void): grpc.ClientUnaryCall;
    listSymbolChildAddresses(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListSymbolChildAddressesRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListSymbolChildAddressesResponse) => void): grpc.ClientUnaryCall;
    listSymbolChildAddresses(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListSymbolChildAddressesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListSymbolChildAddressesResponse) => void): grpc.ClientUnaryCall;
    listSymbolChildAddresses(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListSymbolChildAddressesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListSymbolChildAddressesResponse) => void): grpc.ClientUnaryCall;
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
    importAddress(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ImportAddressRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    importAddress(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ImportAddressRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    importAddress(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ImportAddressRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    getEthereumFeeAddress(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetEthereumFeeAddressRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.EthereumFeeAddress) => void): grpc.ClientUnaryCall;
    getEthereumFeeAddress(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetEthereumFeeAddressRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.EthereumFeeAddress) => void): grpc.ClientUnaryCall;
    getEthereumFeeAddress(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetEthereumFeeAddressRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.EthereumFeeAddress) => void): grpc.ClientUnaryCall;
    updateAddressBalance(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpdateAddressBalanceRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    updateAddressBalance(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpdateAddressBalanceRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    updateAddressBalance(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpdateAddressBalanceRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    listColdFeeDepositAddresses(request: gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.ListColdFeeDepositAddressesRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.ListColdFeeDepositAddressesResponse) => void): grpc.ClientUnaryCall;
    listColdFeeDepositAddresses(request: gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.ListColdFeeDepositAddressesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.ListColdFeeDepositAddressesResponse) => void): grpc.ClientUnaryCall;
    listColdFeeDepositAddresses(request: gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.ListColdFeeDepositAddressesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.ListColdFeeDepositAddressesResponse) => void): grpc.ClientUnaryCall;
    listHotFeeDepositAddresses(request: gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.ListHotFeeDepositAddressesRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.ListHotFeeDepositAddressesResponse) => void): grpc.ClientUnaryCall;
    listHotFeeDepositAddresses(request: gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.ListHotFeeDepositAddressesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.ListHotFeeDepositAddressesResponse) => void): grpc.ClientUnaryCall;
    listHotFeeDepositAddresses(request: gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.ListHotFeeDepositAddressesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.ListHotFeeDepositAddressesResponse) => void): grpc.ClientUnaryCall;
    createPreTransaction(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreatePreTransactionRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreatePreTransactionResponse) => void): grpc.ClientUnaryCall;
    createPreTransaction(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreatePreTransactionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreatePreTransactionResponse) => void): grpc.ClientUnaryCall;
    createPreTransaction(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreatePreTransactionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreatePreTransactionResponse) => void): grpc.ClientUnaryCall;
    listPreTransactionsByFilter(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListPreTransactionsByFilterRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListPreTransactionsByFilterResponse) => void): grpc.ClientUnaryCall;
    listPreTransactionsByFilter(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListPreTransactionsByFilterRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListPreTransactionsByFilterResponse) => void): grpc.ClientUnaryCall;
    listPreTransactionsByFilter(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListPreTransactionsByFilterRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListPreTransactionsByFilterResponse) => void): grpc.ClientUnaryCall;
    cancelPreTransaction(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CancelPreTransactionRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    cancelPreTransaction(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CancelPreTransactionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    cancelPreTransaction(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CancelPreTransactionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    createTransaction(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransactionRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransactionResponse) => void): grpc.ClientUnaryCall;
    createTransaction(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransactionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransactionResponse) => void): grpc.ClientUnaryCall;
    createTransaction(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransactionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransactionResponse) => void): grpc.ClientUnaryCall;
    createContractCreationTransaction(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateContractCreationTransactionRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateContractCreationTransactionResponse) => void): grpc.ClientUnaryCall;
    createContractCreationTransaction(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateContractCreationTransactionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateContractCreationTransactionResponse) => void): grpc.ClientUnaryCall;
    createContractCreationTransaction(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateContractCreationTransactionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateContractCreationTransactionResponse) => void): grpc.ClientUnaryCall;
    signTransaction(request: gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.SignTransactionRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    signTransaction(request: gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.SignTransactionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    signTransaction(request: gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.SignTransactionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    sendTransaction(request: gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.SendTransactionRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.SendTransactionResponse) => void): grpc.ClientUnaryCall;
    sendTransaction(request: gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.SendTransactionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.SendTransactionResponse) => void): grpc.ClientUnaryCall;
    sendTransaction(request: gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.SendTransactionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.SendTransactionResponse) => void): grpc.ClientUnaryCall;
    resendTransaction(request: gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.ResendTransactionRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ResendTransactionResponse) => void): grpc.ClientUnaryCall;
    resendTransaction(request: gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.ResendTransactionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ResendTransactionResponse) => void): grpc.ClientUnaryCall;
    resendTransaction(request: gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.ResendTransactionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ResendTransactionResponse) => void): grpc.ClientUnaryCall;
    cancelTransaction(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CancelTransactionRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    cancelTransaction(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CancelTransactionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    cancelTransaction(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CancelTransactionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    replaceTransaction(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ReplaceTransactionRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ReplaceTransactionResponse) => void): grpc.ClientUnaryCall;
    replaceTransaction(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ReplaceTransactionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ReplaceTransactionResponse) => void): grpc.ClientUnaryCall;
    replaceTransaction(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ReplaceTransactionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ReplaceTransactionResponse) => void): grpc.ClientUnaryCall;
    isTransactionReplaceable(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.IsTransactionReplaceableRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.IsTransactionReplaceableResponse) => void): grpc.ClientUnaryCall;
    isTransactionReplaceable(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.IsTransactionReplaceableRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.IsTransactionReplaceableResponse) => void): grpc.ClientUnaryCall;
    isTransactionReplaceable(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.IsTransactionReplaceableRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.IsTransactionReplaceableResponse) => void): grpc.ClientUnaryCall;
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
    listUnconfirmedTransactionsByFilter(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListUnconfirmedTransactionsByFilterRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListUnconfirmedTransactionsResponse) => void): grpc.ClientUnaryCall;
    listUnconfirmedTransactionsByFilter(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListUnconfirmedTransactionsByFilterRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListUnconfirmedTransactionsResponse) => void): grpc.ClientUnaryCall;
    listUnconfirmedTransactionsByFilter(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListUnconfirmedTransactionsByFilterRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListUnconfirmedTransactionsResponse) => void): grpc.ClientUnaryCall;
    exitEthereumStakingValidators(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ExitEthereumStakingValidatorsRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ExitEthereumStakingValidatorsResponse) => void): grpc.ClientUnaryCall;
    exitEthereumStakingValidators(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ExitEthereumStakingValidatorsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ExitEthereumStakingValidatorsResponse) => void): grpc.ClientUnaryCall;
    exitEthereumStakingValidators(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ExitEthereumStakingValidatorsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ExitEthereumStakingValidatorsResponse) => void): grpc.ClientUnaryCall;
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
    listStakingHistoriesByFilter(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListStakingHistoriesByFilterRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListStakingHistoriesResponse) => void): grpc.ClientUnaryCall;
    listStakingHistoriesByFilter(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListStakingHistoriesByFilterRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListStakingHistoriesResponse) => void): grpc.ClientUnaryCall;
    listStakingHistoriesByFilter(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListStakingHistoriesByFilterRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListStakingHistoriesResponse) => void): grpc.ClientUnaryCall;
    listStakingValidatorsByFilter(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListStakingValidatorsByFilterRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListStakingValidatorsResponse) => void): grpc.ClientUnaryCall;
    listStakingValidatorsByFilter(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListStakingValidatorsByFilterRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListStakingValidatorsResponse) => void): grpc.ClientUnaryCall;
    listStakingValidatorsByFilter(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListStakingValidatorsByFilterRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListStakingValidatorsResponse) => void): grpc.ClientUnaryCall;
    listNFTsByFilter(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListNFTsByFilterRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListNFTsResponse) => void): grpc.ClientUnaryCall;
    listNFTsByFilter(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListNFTsByFilterRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListNFTsResponse) => void): grpc.ClientUnaryCall;
    listNFTsByFilter(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListNFTsByFilterRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListNFTsResponse) => void): grpc.ClientUnaryCall;
    signMessage(request: gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.SignMessageRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.SignMessageResponse) => void): grpc.ClientUnaryCall;
    signMessage(request: gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.SignMessageRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.SignMessageResponse) => void): grpc.ClientUnaryCall;
    signMessage(request: gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.SignMessageRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.SignMessageResponse) => void): grpc.ClientUnaryCall;
    progmatCoinInitialize(request: gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.ProgmatCoinInitializeRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransactionResponse) => void): grpc.ClientUnaryCall;
    progmatCoinInitialize(request: gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.ProgmatCoinInitializeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransactionResponse) => void): grpc.ClientUnaryCall;
    progmatCoinInitialize(request: gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.ProgmatCoinInitializeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransactionResponse) => void): grpc.ClientUnaryCall;
    progmatCoinConfigureMinter(request: gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.ProgmatCoinConfigureMinterRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransactionResponse) => void): grpc.ClientUnaryCall;
    progmatCoinConfigureMinter(request: gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.ProgmatCoinConfigureMinterRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransactionResponse) => void): grpc.ClientUnaryCall;
    progmatCoinConfigureMinter(request: gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.ProgmatCoinConfigureMinterRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransactionResponse) => void): grpc.ClientUnaryCall;
    progmatCoinMintAndTransfer(request: gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.ProgmatCoinMintAndTransferRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransactionResponse) => void): grpc.ClientUnaryCall;
    progmatCoinMintAndTransfer(request: gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.ProgmatCoinMintAndTransferRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransactionResponse) => void): grpc.ClientUnaryCall;
    progmatCoinMintAndTransfer(request: gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.ProgmatCoinMintAndTransferRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransactionResponse) => void): grpc.ClientUnaryCall;
    progmatCoinMint(request: gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.ProgmatCoinMintRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransactionResponse) => void): grpc.ClientUnaryCall;
    progmatCoinMint(request: gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.ProgmatCoinMintRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransactionResponse) => void): grpc.ClientUnaryCall;
    progmatCoinMint(request: gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.ProgmatCoinMintRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransactionResponse) => void): grpc.ClientUnaryCall;
    progmatCoinBurn(request: gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.ProgmatCoinBurnRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransactionResponse) => void): grpc.ClientUnaryCall;
    progmatCoinBurn(request: gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.ProgmatCoinBurnRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransactionResponse) => void): grpc.ClientUnaryCall;
    progmatCoinBurn(request: gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.ProgmatCoinBurnRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransactionResponse) => void): grpc.ClientUnaryCall;
    progmatCoinBulkAddToWhitelist(request: gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.ProgmatCoinBulkAddToWhitelistRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransactionResponse) => void): grpc.ClientUnaryCall;
    progmatCoinBulkAddToWhitelist(request: gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.ProgmatCoinBulkAddToWhitelistRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransactionResponse) => void): grpc.ClientUnaryCall;
    progmatCoinBulkAddToWhitelist(request: gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.ProgmatCoinBulkAddToWhitelistRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransactionResponse) => void): grpc.ClientUnaryCall;
    progmatCoinBulkRemoveFromWhitelist(request: gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.ProgmatCoinBulkRemoveFromWhitelistRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransactionResponse) => void): grpc.ClientUnaryCall;
    progmatCoinBulkRemoveFromWhitelist(request: gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.ProgmatCoinBulkRemoveFromWhitelistRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransactionResponse) => void): grpc.ClientUnaryCall;
    progmatCoinBulkRemoveFromWhitelist(request: gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.ProgmatCoinBulkRemoveFromWhitelistRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransactionResponse) => void): grpc.ClientUnaryCall;
    progmatCoinBulkAddToBlacklist(request: gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.ProgmatCoinBulkAddToBlacklistRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransactionResponse) => void): grpc.ClientUnaryCall;
    progmatCoinBulkAddToBlacklist(request: gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.ProgmatCoinBulkAddToBlacklistRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransactionResponse) => void): grpc.ClientUnaryCall;
    progmatCoinBulkAddToBlacklist(request: gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.ProgmatCoinBulkAddToBlacklistRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransactionResponse) => void): grpc.ClientUnaryCall;
    progmatCoinBulkRemoveFromBlacklist(request: gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.ProgmatCoinBulkRemoveFromBlacklistRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransactionResponse) => void): grpc.ClientUnaryCall;
    progmatCoinBulkRemoveFromBlacklist(request: gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.ProgmatCoinBulkRemoveFromBlacklistRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransactionResponse) => void): grpc.ClientUnaryCall;
    progmatCoinBulkRemoveFromBlacklist(request: gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.ProgmatCoinBulkRemoveFromBlacklistRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransactionResponse) => void): grpc.ClientUnaryCall;
    progmatCoinConfiscate(request: gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.ProgmatCoinConfiscateRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransactionResponse) => void): grpc.ClientUnaryCall;
    progmatCoinConfiscate(request: gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.ProgmatCoinConfiscateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransactionResponse) => void): grpc.ClientUnaryCall;
    progmatCoinConfiscate(request: gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.ProgmatCoinConfiscateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransactionResponse) => void): grpc.ClientUnaryCall;
    progmatCoinPause(request: gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.ProgmatCoinPauseRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransactionResponse) => void): grpc.ClientUnaryCall;
    progmatCoinPause(request: gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.ProgmatCoinPauseRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransactionResponse) => void): grpc.ClientUnaryCall;
    progmatCoinPause(request: gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.ProgmatCoinPauseRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransactionResponse) => void): grpc.ClientUnaryCall;
    progmatCoinUnpause(request: gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.ProgmatCoinUnpauseRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransactionResponse) => void): grpc.ClientUnaryCall;
    progmatCoinUnpause(request: gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.ProgmatCoinUnpauseRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransactionResponse) => void): grpc.ClientUnaryCall;
    progmatCoinUnpause(request: gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.ProgmatCoinUnpauseRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransactionResponse) => void): grpc.ClientUnaryCall;
    progmatCoinGrantWhiteAndBlackLister(request: gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.ProgmatCoinGrantWhiteAndBlackListerRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransactionResponse) => void): grpc.ClientUnaryCall;
    progmatCoinGrantWhiteAndBlackLister(request: gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.ProgmatCoinGrantWhiteAndBlackListerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransactionResponse) => void): grpc.ClientUnaryCall;
    progmatCoinGrantWhiteAndBlackLister(request: gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.ProgmatCoinGrantWhiteAndBlackListerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransactionResponse) => void): grpc.ClientUnaryCall;
    progmatCoinUpgradeToAndCall(request: gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.ProgmatCoinUpgradeToAndCallRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransactionResponse) => void): grpc.ClientUnaryCall;
    progmatCoinUpgradeToAndCall(request: gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.ProgmatCoinUpgradeToAndCallRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransactionResponse) => void): grpc.ClientUnaryCall;
    progmatCoinUpgradeToAndCall(request: gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.ProgmatCoinUpgradeToAndCallRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransactionResponse) => void): grpc.ClientUnaryCall;
    listPreTransactionThresholdsByFilter(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListPreTransactionThresholdsByFilterRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListPreTransactionThresholdsByFilterResponse) => void): grpc.ClientUnaryCall;
    listPreTransactionThresholdsByFilter(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListPreTransactionThresholdsByFilterRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListPreTransactionThresholdsByFilterResponse) => void): grpc.ClientUnaryCall;
    listPreTransactionThresholdsByFilter(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListPreTransactionThresholdsByFilterRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListPreTransactionThresholdsByFilterResponse) => void): grpc.ClientUnaryCall;
    listBlacklistAddressesByFilter(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListBlacklistAddressesByFilterRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListBlacklistAddressesByFilterResponse) => void): grpc.ClientUnaryCall;
    listBlacklistAddressesByFilter(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListBlacklistAddressesByFilterRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListBlacklistAddressesByFilterResponse) => void): grpc.ClientUnaryCall;
    listBlacklistAddressesByFilter(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListBlacklistAddressesByFilterRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListBlacklistAddressesByFilterResponse) => void): grpc.ClientUnaryCall;
    listBlacklistAddressFiles(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListBlacklistAddressFilesRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListBlacklistAddressFilesResponse) => void): grpc.ClientUnaryCall;
    listBlacklistAddressFiles(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListBlacklistAddressFilesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListBlacklistAddressFilesResponse) => void): grpc.ClientUnaryCall;
    listBlacklistAddressFiles(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListBlacklistAddressFilesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListBlacklistAddressFilesResponse) => void): grpc.ClientUnaryCall;
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
    public listStakingWalletsByFilter(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListStakingWalletsByFilterRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListStakingWalletsResponse) => void): grpc.ClientUnaryCall;
    public listStakingWalletsByFilter(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListStakingWalletsByFilterRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListStakingWalletsResponse) => void): grpc.ClientUnaryCall;
    public listStakingWalletsByFilter(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListStakingWalletsByFilterRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListStakingWalletsResponse) => void): grpc.ClientUnaryCall;
    public listNFTWalletsByFilter(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListNFTWalletsByFilterRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListNFTWalletsResponse) => void): grpc.ClientUnaryCall;
    public listNFTWalletsByFilter(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListNFTWalletsByFilterRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListNFTWalletsResponse) => void): grpc.ClientUnaryCall;
    public listNFTWalletsByFilter(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListNFTWalletsByFilterRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListNFTWalletsResponse) => void): grpc.ClientUnaryCall;
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
    public updateDestinationWalletID(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpdateDestinationWalletIDRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public updateDestinationWalletID(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpdateDestinationWalletIDRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public updateDestinationWalletID(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpdateDestinationWalletIDRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public getCosmosBalance(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetCosmosBalanceRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetCosmosBalanceResponse) => void): grpc.ClientUnaryCall;
    public getCosmosBalance(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetCosmosBalanceRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetCosmosBalanceResponse) => void): grpc.ClientUnaryCall;
    public getCosmosBalance(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetCosmosBalanceRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetCosmosBalanceResponse) => void): grpc.ClientUnaryCall;
    public listCosmosDelegateHistories(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListCosmosDelegateHistoriesRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListCosmosDelegateHistoriesResponse) => void): grpc.ClientUnaryCall;
    public listCosmosDelegateHistories(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListCosmosDelegateHistoriesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListCosmosDelegateHistoriesResponse) => void): grpc.ClientUnaryCall;
    public listCosmosDelegateHistories(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListCosmosDelegateHistoriesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListCosmosDelegateHistoriesResponse) => void): grpc.ClientUnaryCall;
    public listUTXOs(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListUTXOsRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListUTXOsResponse) => void): grpc.ClientUnaryCall;
    public listUTXOs(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListUTXOsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListUTXOsResponse) => void): grpc.ClientUnaryCall;
    public listUTXOs(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListUTXOsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListUTXOsResponse) => void): grpc.ClientUnaryCall;
    public createAddress(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateAddressRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateAddressResponse) => void): grpc.ClientUnaryCall;
    public createAddress(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateAddressRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateAddressResponse) => void): grpc.ClientUnaryCall;
    public createAddress(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateAddressRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateAddressResponse) => void): grpc.ClientUnaryCall;
    public createIOSTAccount(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateIOSTAccountRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateIOSTAccountResponse) => void): grpc.ClientUnaryCall;
    public createIOSTAccount(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateIOSTAccountRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateIOSTAccountResponse) => void): grpc.ClientUnaryCall;
    public createIOSTAccount(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateIOSTAccountRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateIOSTAccountResponse) => void): grpc.ClientUnaryCall;
    public listSymbolChildAddresses(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListSymbolChildAddressesRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListSymbolChildAddressesResponse) => void): grpc.ClientUnaryCall;
    public listSymbolChildAddresses(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListSymbolChildAddressesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListSymbolChildAddressesResponse) => void): grpc.ClientUnaryCall;
    public listSymbolChildAddresses(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListSymbolChildAddressesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListSymbolChildAddressesResponse) => void): grpc.ClientUnaryCall;
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
    public importAddress(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ImportAddressRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public importAddress(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ImportAddressRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public importAddress(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ImportAddressRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public getEthereumFeeAddress(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetEthereumFeeAddressRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.EthereumFeeAddress) => void): grpc.ClientUnaryCall;
    public getEthereumFeeAddress(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetEthereumFeeAddressRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.EthereumFeeAddress) => void): grpc.ClientUnaryCall;
    public getEthereumFeeAddress(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetEthereumFeeAddressRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.EthereumFeeAddress) => void): grpc.ClientUnaryCall;
    public updateAddressBalance(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpdateAddressBalanceRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public updateAddressBalance(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpdateAddressBalanceRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public updateAddressBalance(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpdateAddressBalanceRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public listColdFeeDepositAddresses(request: gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.ListColdFeeDepositAddressesRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.ListColdFeeDepositAddressesResponse) => void): grpc.ClientUnaryCall;
    public listColdFeeDepositAddresses(request: gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.ListColdFeeDepositAddressesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.ListColdFeeDepositAddressesResponse) => void): grpc.ClientUnaryCall;
    public listColdFeeDepositAddresses(request: gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.ListColdFeeDepositAddressesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.ListColdFeeDepositAddressesResponse) => void): grpc.ClientUnaryCall;
    public listHotFeeDepositAddresses(request: gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.ListHotFeeDepositAddressesRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.ListHotFeeDepositAddressesResponse) => void): grpc.ClientUnaryCall;
    public listHotFeeDepositAddresses(request: gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.ListHotFeeDepositAddressesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.ListHotFeeDepositAddressesResponse) => void): grpc.ClientUnaryCall;
    public listHotFeeDepositAddresses(request: gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.ListHotFeeDepositAddressesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.ListHotFeeDepositAddressesResponse) => void): grpc.ClientUnaryCall;
    public createPreTransaction(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreatePreTransactionRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreatePreTransactionResponse) => void): grpc.ClientUnaryCall;
    public createPreTransaction(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreatePreTransactionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreatePreTransactionResponse) => void): grpc.ClientUnaryCall;
    public createPreTransaction(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreatePreTransactionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreatePreTransactionResponse) => void): grpc.ClientUnaryCall;
    public listPreTransactionsByFilter(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListPreTransactionsByFilterRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListPreTransactionsByFilterResponse) => void): grpc.ClientUnaryCall;
    public listPreTransactionsByFilter(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListPreTransactionsByFilterRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListPreTransactionsByFilterResponse) => void): grpc.ClientUnaryCall;
    public listPreTransactionsByFilter(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListPreTransactionsByFilterRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListPreTransactionsByFilterResponse) => void): grpc.ClientUnaryCall;
    public cancelPreTransaction(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CancelPreTransactionRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public cancelPreTransaction(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CancelPreTransactionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public cancelPreTransaction(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CancelPreTransactionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public createTransaction(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransactionRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransactionResponse) => void): grpc.ClientUnaryCall;
    public createTransaction(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransactionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransactionResponse) => void): grpc.ClientUnaryCall;
    public createTransaction(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransactionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransactionResponse) => void): grpc.ClientUnaryCall;
    public createContractCreationTransaction(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateContractCreationTransactionRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateContractCreationTransactionResponse) => void): grpc.ClientUnaryCall;
    public createContractCreationTransaction(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateContractCreationTransactionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateContractCreationTransactionResponse) => void): grpc.ClientUnaryCall;
    public createContractCreationTransaction(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateContractCreationTransactionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateContractCreationTransactionResponse) => void): grpc.ClientUnaryCall;
    public signTransaction(request: gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.SignTransactionRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public signTransaction(request: gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.SignTransactionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public signTransaction(request: gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.SignTransactionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public sendTransaction(request: gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.SendTransactionRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.SendTransactionResponse) => void): grpc.ClientUnaryCall;
    public sendTransaction(request: gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.SendTransactionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.SendTransactionResponse) => void): grpc.ClientUnaryCall;
    public sendTransaction(request: gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.SendTransactionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.SendTransactionResponse) => void): grpc.ClientUnaryCall;
    public resendTransaction(request: gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.ResendTransactionRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ResendTransactionResponse) => void): grpc.ClientUnaryCall;
    public resendTransaction(request: gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.ResendTransactionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ResendTransactionResponse) => void): grpc.ClientUnaryCall;
    public resendTransaction(request: gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.ResendTransactionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ResendTransactionResponse) => void): grpc.ClientUnaryCall;
    public cancelTransaction(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CancelTransactionRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public cancelTransaction(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CancelTransactionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public cancelTransaction(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CancelTransactionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public replaceTransaction(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ReplaceTransactionRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ReplaceTransactionResponse) => void): grpc.ClientUnaryCall;
    public replaceTransaction(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ReplaceTransactionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ReplaceTransactionResponse) => void): grpc.ClientUnaryCall;
    public replaceTransaction(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ReplaceTransactionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ReplaceTransactionResponse) => void): grpc.ClientUnaryCall;
    public isTransactionReplaceable(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.IsTransactionReplaceableRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.IsTransactionReplaceableResponse) => void): grpc.ClientUnaryCall;
    public isTransactionReplaceable(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.IsTransactionReplaceableRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.IsTransactionReplaceableResponse) => void): grpc.ClientUnaryCall;
    public isTransactionReplaceable(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.IsTransactionReplaceableRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.IsTransactionReplaceableResponse) => void): grpc.ClientUnaryCall;
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
    public listUnconfirmedTransactionsByFilter(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListUnconfirmedTransactionsByFilterRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListUnconfirmedTransactionsResponse) => void): grpc.ClientUnaryCall;
    public listUnconfirmedTransactionsByFilter(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListUnconfirmedTransactionsByFilterRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListUnconfirmedTransactionsResponse) => void): grpc.ClientUnaryCall;
    public listUnconfirmedTransactionsByFilter(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListUnconfirmedTransactionsByFilterRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListUnconfirmedTransactionsResponse) => void): grpc.ClientUnaryCall;
    public exitEthereumStakingValidators(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ExitEthereumStakingValidatorsRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ExitEthereumStakingValidatorsResponse) => void): grpc.ClientUnaryCall;
    public exitEthereumStakingValidators(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ExitEthereumStakingValidatorsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ExitEthereumStakingValidatorsResponse) => void): grpc.ClientUnaryCall;
    public exitEthereumStakingValidators(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ExitEthereumStakingValidatorsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ExitEthereumStakingValidatorsResponse) => void): grpc.ClientUnaryCall;
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
    public listStakingHistoriesByFilter(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListStakingHistoriesByFilterRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListStakingHistoriesResponse) => void): grpc.ClientUnaryCall;
    public listStakingHistoriesByFilter(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListStakingHistoriesByFilterRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListStakingHistoriesResponse) => void): grpc.ClientUnaryCall;
    public listStakingHistoriesByFilter(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListStakingHistoriesByFilterRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListStakingHistoriesResponse) => void): grpc.ClientUnaryCall;
    public listStakingValidatorsByFilter(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListStakingValidatorsByFilterRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListStakingValidatorsResponse) => void): grpc.ClientUnaryCall;
    public listStakingValidatorsByFilter(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListStakingValidatorsByFilterRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListStakingValidatorsResponse) => void): grpc.ClientUnaryCall;
    public listStakingValidatorsByFilter(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListStakingValidatorsByFilterRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListStakingValidatorsResponse) => void): grpc.ClientUnaryCall;
    public listNFTsByFilter(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListNFTsByFilterRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListNFTsResponse) => void): grpc.ClientUnaryCall;
    public listNFTsByFilter(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListNFTsByFilterRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListNFTsResponse) => void): grpc.ClientUnaryCall;
    public listNFTsByFilter(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListNFTsByFilterRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListNFTsResponse) => void): grpc.ClientUnaryCall;
    public signMessage(request: gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.SignMessageRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.SignMessageResponse) => void): grpc.ClientUnaryCall;
    public signMessage(request: gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.SignMessageRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.SignMessageResponse) => void): grpc.ClientUnaryCall;
    public signMessage(request: gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.SignMessageRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.SignMessageResponse) => void): grpc.ClientUnaryCall;
    public progmatCoinInitialize(request: gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.ProgmatCoinInitializeRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransactionResponse) => void): grpc.ClientUnaryCall;
    public progmatCoinInitialize(request: gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.ProgmatCoinInitializeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransactionResponse) => void): grpc.ClientUnaryCall;
    public progmatCoinInitialize(request: gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.ProgmatCoinInitializeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransactionResponse) => void): grpc.ClientUnaryCall;
    public progmatCoinConfigureMinter(request: gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.ProgmatCoinConfigureMinterRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransactionResponse) => void): grpc.ClientUnaryCall;
    public progmatCoinConfigureMinter(request: gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.ProgmatCoinConfigureMinterRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransactionResponse) => void): grpc.ClientUnaryCall;
    public progmatCoinConfigureMinter(request: gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.ProgmatCoinConfigureMinterRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransactionResponse) => void): grpc.ClientUnaryCall;
    public progmatCoinMintAndTransfer(request: gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.ProgmatCoinMintAndTransferRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransactionResponse) => void): grpc.ClientUnaryCall;
    public progmatCoinMintAndTransfer(request: gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.ProgmatCoinMintAndTransferRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransactionResponse) => void): grpc.ClientUnaryCall;
    public progmatCoinMintAndTransfer(request: gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.ProgmatCoinMintAndTransferRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransactionResponse) => void): grpc.ClientUnaryCall;
    public progmatCoinMint(request: gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.ProgmatCoinMintRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransactionResponse) => void): grpc.ClientUnaryCall;
    public progmatCoinMint(request: gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.ProgmatCoinMintRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransactionResponse) => void): grpc.ClientUnaryCall;
    public progmatCoinMint(request: gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.ProgmatCoinMintRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransactionResponse) => void): grpc.ClientUnaryCall;
    public progmatCoinBurn(request: gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.ProgmatCoinBurnRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransactionResponse) => void): grpc.ClientUnaryCall;
    public progmatCoinBurn(request: gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.ProgmatCoinBurnRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransactionResponse) => void): grpc.ClientUnaryCall;
    public progmatCoinBurn(request: gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.ProgmatCoinBurnRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransactionResponse) => void): grpc.ClientUnaryCall;
    public progmatCoinBulkAddToWhitelist(request: gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.ProgmatCoinBulkAddToWhitelistRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransactionResponse) => void): grpc.ClientUnaryCall;
    public progmatCoinBulkAddToWhitelist(request: gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.ProgmatCoinBulkAddToWhitelistRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransactionResponse) => void): grpc.ClientUnaryCall;
    public progmatCoinBulkAddToWhitelist(request: gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.ProgmatCoinBulkAddToWhitelistRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransactionResponse) => void): grpc.ClientUnaryCall;
    public progmatCoinBulkRemoveFromWhitelist(request: gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.ProgmatCoinBulkRemoveFromWhitelistRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransactionResponse) => void): grpc.ClientUnaryCall;
    public progmatCoinBulkRemoveFromWhitelist(request: gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.ProgmatCoinBulkRemoveFromWhitelistRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransactionResponse) => void): grpc.ClientUnaryCall;
    public progmatCoinBulkRemoveFromWhitelist(request: gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.ProgmatCoinBulkRemoveFromWhitelistRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransactionResponse) => void): grpc.ClientUnaryCall;
    public progmatCoinBulkAddToBlacklist(request: gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.ProgmatCoinBulkAddToBlacklistRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransactionResponse) => void): grpc.ClientUnaryCall;
    public progmatCoinBulkAddToBlacklist(request: gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.ProgmatCoinBulkAddToBlacklistRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransactionResponse) => void): grpc.ClientUnaryCall;
    public progmatCoinBulkAddToBlacklist(request: gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.ProgmatCoinBulkAddToBlacklistRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransactionResponse) => void): grpc.ClientUnaryCall;
    public progmatCoinBulkRemoveFromBlacklist(request: gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.ProgmatCoinBulkRemoveFromBlacklistRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransactionResponse) => void): grpc.ClientUnaryCall;
    public progmatCoinBulkRemoveFromBlacklist(request: gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.ProgmatCoinBulkRemoveFromBlacklistRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransactionResponse) => void): grpc.ClientUnaryCall;
    public progmatCoinBulkRemoveFromBlacklist(request: gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.ProgmatCoinBulkRemoveFromBlacklistRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransactionResponse) => void): grpc.ClientUnaryCall;
    public progmatCoinConfiscate(request: gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.ProgmatCoinConfiscateRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransactionResponse) => void): grpc.ClientUnaryCall;
    public progmatCoinConfiscate(request: gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.ProgmatCoinConfiscateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransactionResponse) => void): grpc.ClientUnaryCall;
    public progmatCoinConfiscate(request: gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.ProgmatCoinConfiscateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransactionResponse) => void): grpc.ClientUnaryCall;
    public progmatCoinPause(request: gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.ProgmatCoinPauseRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransactionResponse) => void): grpc.ClientUnaryCall;
    public progmatCoinPause(request: gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.ProgmatCoinPauseRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransactionResponse) => void): grpc.ClientUnaryCall;
    public progmatCoinPause(request: gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.ProgmatCoinPauseRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransactionResponse) => void): grpc.ClientUnaryCall;
    public progmatCoinUnpause(request: gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.ProgmatCoinUnpauseRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransactionResponse) => void): grpc.ClientUnaryCall;
    public progmatCoinUnpause(request: gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.ProgmatCoinUnpauseRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransactionResponse) => void): grpc.ClientUnaryCall;
    public progmatCoinUnpause(request: gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.ProgmatCoinUnpauseRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransactionResponse) => void): grpc.ClientUnaryCall;
    public progmatCoinGrantWhiteAndBlackLister(request: gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.ProgmatCoinGrantWhiteAndBlackListerRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransactionResponse) => void): grpc.ClientUnaryCall;
    public progmatCoinGrantWhiteAndBlackLister(request: gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.ProgmatCoinGrantWhiteAndBlackListerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransactionResponse) => void): grpc.ClientUnaryCall;
    public progmatCoinGrantWhiteAndBlackLister(request: gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.ProgmatCoinGrantWhiteAndBlackListerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransactionResponse) => void): grpc.ClientUnaryCall;
    public progmatCoinUpgradeToAndCall(request: gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.ProgmatCoinUpgradeToAndCallRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransactionResponse) => void): grpc.ClientUnaryCall;
    public progmatCoinUpgradeToAndCall(request: gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.ProgmatCoinUpgradeToAndCallRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransactionResponse) => void): grpc.ClientUnaryCall;
    public progmatCoinUpgradeToAndCall(request: gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.ProgmatCoinUpgradeToAndCallRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransactionResponse) => void): grpc.ClientUnaryCall;
    public listPreTransactionThresholdsByFilter(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListPreTransactionThresholdsByFilterRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListPreTransactionThresholdsByFilterResponse) => void): grpc.ClientUnaryCall;
    public listPreTransactionThresholdsByFilter(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListPreTransactionThresholdsByFilterRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListPreTransactionThresholdsByFilterResponse) => void): grpc.ClientUnaryCall;
    public listPreTransactionThresholdsByFilter(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListPreTransactionThresholdsByFilterRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListPreTransactionThresholdsByFilterResponse) => void): grpc.ClientUnaryCall;
    public listBlacklistAddressesByFilter(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListBlacklistAddressesByFilterRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListBlacklistAddressesByFilterResponse) => void): grpc.ClientUnaryCall;
    public listBlacklistAddressesByFilter(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListBlacklistAddressesByFilterRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListBlacklistAddressesByFilterResponse) => void): grpc.ClientUnaryCall;
    public listBlacklistAddressesByFilter(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListBlacklistAddressesByFilterRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListBlacklistAddressesByFilterResponse) => void): grpc.ClientUnaryCall;
    public listBlacklistAddressFiles(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListBlacklistAddressFilesRequest, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListBlacklistAddressFilesResponse) => void): grpc.ClientUnaryCall;
    public listBlacklistAddressFiles(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListBlacklistAddressFilesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListBlacklistAddressFilesResponse) => void): grpc.ClientUnaryCall;
    public listBlacklistAddressFiles(request: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListBlacklistAddressFilesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListBlacklistAddressFilesResponse) => void): grpc.ClientUnaryCall;
}
