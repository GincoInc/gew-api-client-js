// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb = require('../../../../../gincoinc/adamant/teller/v1/adamanttellerv1/teller_api_pb.js');
var gincoinc_adamant_global_v1_adamantglobalv1_enum_pb = require('../../../../../gincoinc/adamant/global/v1/adamantglobalv1/enum_pb.js');
var gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb = require('../../../../../gincoinc/adamant/global/v1/adamantglobalv1/global_api_pb.js');
var gincoinc_adamant_global_v1_adamantglobalv1_model_pb = require('../../../../../gincoinc/adamant/global/v1/adamantglobalv1/model_pb.js');
var gincoinc_global_v1_gincoincglobalv1_enum_pb = require('../../../../../gincoinc/global/v1/gincoincglobalv1/enum_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
var validate_validate_pb = require('../../../../../validate/validate_pb.js');

function serialize_adamant_global_v1_Address(arg) {
  if (!(arg instanceof gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Address)) {
    throw new Error('Expected argument of type adamant.global.v1.Address');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_adamant_global_v1_Address(buffer_arg) {
  return gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Address.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_adamant_global_v1_CalculateFeeRequest(arg) {
  if (!(arg instanceof gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CalculateFeeRequest)) {
    throw new Error('Expected argument of type adamant.global.v1.CalculateFeeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_adamant_global_v1_CalculateFeeRequest(buffer_arg) {
  return gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CalculateFeeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_adamant_global_v1_CalculateFeeResponse(arg) {
  if (!(arg instanceof gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CalculateFeeResponse)) {
    throw new Error('Expected argument of type adamant.global.v1.CalculateFeeResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_adamant_global_v1_CalculateFeeResponse(buffer_arg) {
  return gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CalculateFeeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_adamant_global_v1_CancelTransactionRequest(arg) {
  if (!(arg instanceof gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CancelTransactionRequest)) {
    throw new Error('Expected argument of type adamant.global.v1.CancelTransactionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_adamant_global_v1_CancelTransactionRequest(buffer_arg) {
  return gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CancelTransactionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_adamant_global_v1_CreateAddressRequest(arg) {
  if (!(arg instanceof gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateAddressRequest)) {
    throw new Error('Expected argument of type adamant.global.v1.CreateAddressRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_adamant_global_v1_CreateAddressRequest(buffer_arg) {
  return gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateAddressRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_adamant_global_v1_CreateAddressResponse(arg) {
  if (!(arg instanceof gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateAddressResponse)) {
    throw new Error('Expected argument of type adamant.global.v1.CreateAddressResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_adamant_global_v1_CreateAddressResponse(buffer_arg) {
  return gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateAddressResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_adamant_global_v1_CreateContractCreationTransactionRequest(arg) {
  if (!(arg instanceof gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateContractCreationTransactionRequest)) {
    throw new Error('Expected argument of type adamant.global.v1.CreateContractCreationTransactionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_adamant_global_v1_CreateContractCreationTransactionRequest(buffer_arg) {
  return gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateContractCreationTransactionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_adamant_global_v1_CreateContractCreationTransactionResponse(arg) {
  if (!(arg instanceof gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateContractCreationTransactionResponse)) {
    throw new Error('Expected argument of type adamant.global.v1.CreateContractCreationTransactionResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_adamant_global_v1_CreateContractCreationTransactionResponse(buffer_arg) {
  return gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateContractCreationTransactionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_adamant_global_v1_CreateIOSTAccountRequest(arg) {
  if (!(arg instanceof gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateIOSTAccountRequest)) {
    throw new Error('Expected argument of type adamant.global.v1.CreateIOSTAccountRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_adamant_global_v1_CreateIOSTAccountRequest(buffer_arg) {
  return gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateIOSTAccountRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_adamant_global_v1_CreateIOSTAccountResponse(arg) {
  if (!(arg instanceof gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateIOSTAccountResponse)) {
    throw new Error('Expected argument of type adamant.global.v1.CreateIOSTAccountResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_adamant_global_v1_CreateIOSTAccountResponse(buffer_arg) {
  return gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateIOSTAccountResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_adamant_global_v1_CreateTransactionRequest(arg) {
  if (!(arg instanceof gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransactionRequest)) {
    throw new Error('Expected argument of type adamant.global.v1.CreateTransactionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_adamant_global_v1_CreateTransactionRequest(buffer_arg) {
  return gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransactionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_adamant_global_v1_CreateTransactionResponse(arg) {
  if (!(arg instanceof gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransactionResponse)) {
    throw new Error('Expected argument of type adamant.global.v1.CreateTransactionResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_adamant_global_v1_CreateTransactionResponse(buffer_arg) {
  return gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransactionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_adamant_global_v1_CreateWalletResponse(arg) {
  if (!(arg instanceof gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateWalletResponse)) {
    throw new Error('Expected argument of type adamant.global.v1.CreateWalletResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_adamant_global_v1_CreateWalletResponse(buffer_arg) {
  return gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateWalletResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_adamant_global_v1_EthereumFeeAddress(arg) {
  if (!(arg instanceof gincoinc_adamant_global_v1_adamantglobalv1_model_pb.EthereumFeeAddress)) {
    throw new Error('Expected argument of type adamant.global.v1.EthereumFeeAddress');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_adamant_global_v1_EthereumFeeAddress(buffer_arg) {
  return gincoinc_adamant_global_v1_adamantglobalv1_model_pb.EthereumFeeAddress.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_adamant_global_v1_ExitEthereumStakingValidatorsRequest(arg) {
  if (!(arg instanceof gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ExitEthereumStakingValidatorsRequest)) {
    throw new Error('Expected argument of type adamant.global.v1.ExitEthereumStakingValidatorsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_adamant_global_v1_ExitEthereumStakingValidatorsRequest(buffer_arg) {
  return gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ExitEthereumStakingValidatorsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_adamant_global_v1_ExitEthereumStakingValidatorsResponse(arg) {
  if (!(arg instanceof gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ExitEthereumStakingValidatorsResponse)) {
    throw new Error('Expected argument of type adamant.global.v1.ExitEthereumStakingValidatorsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_adamant_global_v1_ExitEthereumStakingValidatorsResponse(buffer_arg) {
  return gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ExitEthereumStakingValidatorsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_adamant_global_v1_FlushBalanceRequest(arg) {
  if (!(arg instanceof gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.FlushBalanceRequest)) {
    throw new Error('Expected argument of type adamant.global.v1.FlushBalanceRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_adamant_global_v1_FlushBalanceRequest(buffer_arg) {
  return gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.FlushBalanceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_adamant_global_v1_FlushBalanceResponse(arg) {
  if (!(arg instanceof gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.FlushBalanceResponse)) {
    throw new Error('Expected argument of type adamant.global.v1.FlushBalanceResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_adamant_global_v1_FlushBalanceResponse(buffer_arg) {
  return gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.FlushBalanceResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_adamant_global_v1_GetAddressByAddressCoinRequest(arg) {
  if (!(arg instanceof gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetAddressByAddressCoinRequest)) {
    throw new Error('Expected argument of type adamant.global.v1.GetAddressByAddressCoinRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_adamant_global_v1_GetAddressByAddressCoinRequest(buffer_arg) {
  return gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetAddressByAddressCoinRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_adamant_global_v1_GetAddressByAddressRequest(arg) {
  if (!(arg instanceof gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetAddressByAddressRequest)) {
    throw new Error('Expected argument of type adamant.global.v1.GetAddressByAddressRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_adamant_global_v1_GetAddressByAddressRequest(buffer_arg) {
  return gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetAddressByAddressRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_adamant_global_v1_GetAddressByIndexRequest(arg) {
  if (!(arg instanceof gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetAddressByIndexRequest)) {
    throw new Error('Expected argument of type adamant.global.v1.GetAddressByIndexRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_adamant_global_v1_GetAddressByIndexRequest(buffer_arg) {
  return gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetAddressByIndexRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_adamant_global_v1_GetAddressRequest(arg) {
  if (!(arg instanceof gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetAddressRequest)) {
    throw new Error('Expected argument of type adamant.global.v1.GetAddressRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_adamant_global_v1_GetAddressRequest(buffer_arg) {
  return gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetAddressRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_adamant_global_v1_GetCosmosBalanceRequest(arg) {
  if (!(arg instanceof gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetCosmosBalanceRequest)) {
    throw new Error('Expected argument of type adamant.global.v1.GetCosmosBalanceRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_adamant_global_v1_GetCosmosBalanceRequest(buffer_arg) {
  return gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetCosmosBalanceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_adamant_global_v1_GetCosmosBalanceResponse(arg) {
  if (!(arg instanceof gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetCosmosBalanceResponse)) {
    throw new Error('Expected argument of type adamant.global.v1.GetCosmosBalanceResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_adamant_global_v1_GetCosmosBalanceResponse(buffer_arg) {
  return gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetCosmosBalanceResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_adamant_global_v1_GetEthereumFeeAddressRequest(arg) {
  if (!(arg instanceof gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetEthereumFeeAddressRequest)) {
    throw new Error('Expected argument of type adamant.global.v1.GetEthereumFeeAddressRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_adamant_global_v1_GetEthereumFeeAddressRequest(buffer_arg) {
  return gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetEthereumFeeAddressRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_adamant_global_v1_GetLatestRateSnapshotRequest(arg) {
  if (!(arg instanceof gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetLatestRateSnapshotRequest)) {
    throw new Error('Expected argument of type adamant.global.v1.GetLatestRateSnapshotRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_adamant_global_v1_GetLatestRateSnapshotRequest(buffer_arg) {
  return gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetLatestRateSnapshotRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_adamant_global_v1_GetRateSnapshotRequest(arg) {
  if (!(arg instanceof gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetRateSnapshotRequest)) {
    throw new Error('Expected argument of type adamant.global.v1.GetRateSnapshotRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_adamant_global_v1_GetRateSnapshotRequest(buffer_arg) {
  return gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetRateSnapshotRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_adamant_global_v1_GetRecommendedFeeRateRequest(arg) {
  if (!(arg instanceof gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetRecommendedFeeRateRequest)) {
    throw new Error('Expected argument of type adamant.global.v1.GetRecommendedFeeRateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_adamant_global_v1_GetRecommendedFeeRateRequest(buffer_arg) {
  return gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetRecommendedFeeRateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_adamant_global_v1_GetRecommendedFeeRateResponse(arg) {
  if (!(arg instanceof gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetRecommendedFeeRateResponse)) {
    throw new Error('Expected argument of type adamant.global.v1.GetRecommendedFeeRateResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_adamant_global_v1_GetRecommendedFeeRateResponse(buffer_arg) {
  return gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetRecommendedFeeRateResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_adamant_global_v1_GetSpendableBalanceRequest(arg) {
  if (!(arg instanceof gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetSpendableBalanceRequest)) {
    throw new Error('Expected argument of type adamant.global.v1.GetSpendableBalanceRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_adamant_global_v1_GetSpendableBalanceRequest(buffer_arg) {
  return gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetSpendableBalanceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_adamant_global_v1_GetSpendableBalanceResponse(arg) {
  if (!(arg instanceof gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetSpendableBalanceResponse)) {
    throw new Error('Expected argument of type adamant.global.v1.GetSpendableBalanceResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_adamant_global_v1_GetSpendableBalanceResponse(buffer_arg) {
  return gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetSpendableBalanceResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_adamant_global_v1_GetTransactionByTxIDRequest(arg) {
  if (!(arg instanceof gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetTransactionByTxIDRequest)) {
    throw new Error('Expected argument of type adamant.global.v1.GetTransactionByTxIDRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_adamant_global_v1_GetTransactionByTxIDRequest(buffer_arg) {
  return gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetTransactionByTxIDRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_adamant_global_v1_GetTransactionRequest(arg) {
  if (!(arg instanceof gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetTransactionRequest)) {
    throw new Error('Expected argument of type adamant.global.v1.GetTransactionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_adamant_global_v1_GetTransactionRequest(buffer_arg) {
  return gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetTransactionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_adamant_global_v1_GetWalletRequest(arg) {
  if (!(arg instanceof gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetWalletRequest)) {
    throw new Error('Expected argument of type adamant.global.v1.GetWalletRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_adamant_global_v1_GetWalletRequest(buffer_arg) {
  return gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetWalletRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_adamant_global_v1_ImportAddressRequest(arg) {
  if (!(arg instanceof gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ImportAddressRequest)) {
    throw new Error('Expected argument of type adamant.global.v1.ImportAddressRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_adamant_global_v1_ImportAddressRequest(buffer_arg) {
  return gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ImportAddressRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_adamant_global_v1_IsTransactionReplaceableRequest(arg) {
  if (!(arg instanceof gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.IsTransactionReplaceableRequest)) {
    throw new Error('Expected argument of type adamant.global.v1.IsTransactionReplaceableRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_adamant_global_v1_IsTransactionReplaceableRequest(buffer_arg) {
  return gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.IsTransactionReplaceableRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_adamant_global_v1_IsTransactionReplaceableResponse(arg) {
  if (!(arg instanceof gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.IsTransactionReplaceableResponse)) {
    throw new Error('Expected argument of type adamant.global.v1.IsTransactionReplaceableResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_adamant_global_v1_IsTransactionReplaceableResponse(buffer_arg) {
  return gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.IsTransactionReplaceableResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_adamant_global_v1_ListAddressesRequest(arg) {
  if (!(arg instanceof gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListAddressesRequest)) {
    throw new Error('Expected argument of type adamant.global.v1.ListAddressesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_adamant_global_v1_ListAddressesRequest(buffer_arg) {
  return gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListAddressesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_adamant_global_v1_ListAddressesResponse(arg) {
  if (!(arg instanceof gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListAddressesResponse)) {
    throw new Error('Expected argument of type adamant.global.v1.ListAddressesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_adamant_global_v1_ListAddressesResponse(buffer_arg) {
  return gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListAddressesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_adamant_global_v1_ListAuditLogsRequest(arg) {
  if (!(arg instanceof gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListAuditLogsRequest)) {
    throw new Error('Expected argument of type adamant.global.v1.ListAuditLogsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_adamant_global_v1_ListAuditLogsRequest(buffer_arg) {
  return gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListAuditLogsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_adamant_global_v1_ListAuditLogsResponse(arg) {
  if (!(arg instanceof gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListAuditLogsResponse)) {
    throw new Error('Expected argument of type adamant.global.v1.ListAuditLogsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_adamant_global_v1_ListAuditLogsResponse(buffer_arg) {
  return gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListAuditLogsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_adamant_global_v1_ListBaseWalletsRequest(arg) {
  if (!(arg instanceof gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListBaseWalletsRequest)) {
    throw new Error('Expected argument of type adamant.global.v1.ListBaseWalletsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_adamant_global_v1_ListBaseWalletsRequest(buffer_arg) {
  return gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListBaseWalletsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_adamant_global_v1_ListBaseWalletsResponse(arg) {
  if (!(arg instanceof gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListBaseWalletsResponse)) {
    throw new Error('Expected argument of type adamant.global.v1.ListBaseWalletsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_adamant_global_v1_ListBaseWalletsResponse(buffer_arg) {
  return gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListBaseWalletsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_adamant_global_v1_ListCosmosDelegateHistoriesRequest(arg) {
  if (!(arg instanceof gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListCosmosDelegateHistoriesRequest)) {
    throw new Error('Expected argument of type adamant.global.v1.ListCosmosDelegateHistoriesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_adamant_global_v1_ListCosmosDelegateHistoriesRequest(buffer_arg) {
  return gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListCosmosDelegateHistoriesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_adamant_global_v1_ListCosmosDelegateHistoriesResponse(arg) {
  if (!(arg instanceof gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListCosmosDelegateHistoriesResponse)) {
    throw new Error('Expected argument of type adamant.global.v1.ListCosmosDelegateHistoriesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_adamant_global_v1_ListCosmosDelegateHistoriesResponse(buffer_arg) {
  return gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListCosmosDelegateHistoriesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_adamant_global_v1_ListPreTransactionThresholdsByFilterRequest(arg) {
  if (!(arg instanceof gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListPreTransactionThresholdsByFilterRequest)) {
    throw new Error('Expected argument of type adamant.global.v1.ListPreTransactionThresholdsByFilterRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_adamant_global_v1_ListPreTransactionThresholdsByFilterRequest(buffer_arg) {
  return gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListPreTransactionThresholdsByFilterRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_adamant_global_v1_ListPreTransactionThresholdsByFilterResponse(arg) {
  if (!(arg instanceof gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListPreTransactionThresholdsByFilterResponse)) {
    throw new Error('Expected argument of type adamant.global.v1.ListPreTransactionThresholdsByFilterResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_adamant_global_v1_ListPreTransactionThresholdsByFilterResponse(buffer_arg) {
  return gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListPreTransactionThresholdsByFilterResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_adamant_global_v1_ListStakingHistoriesByFilterRequest(arg) {
  if (!(arg instanceof gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListStakingHistoriesByFilterRequest)) {
    throw new Error('Expected argument of type adamant.global.v1.ListStakingHistoriesByFilterRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_adamant_global_v1_ListStakingHistoriesByFilterRequest(buffer_arg) {
  return gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListStakingHistoriesByFilterRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_adamant_global_v1_ListStakingHistoriesResponse(arg) {
  if (!(arg instanceof gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListStakingHistoriesResponse)) {
    throw new Error('Expected argument of type adamant.global.v1.ListStakingHistoriesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_adamant_global_v1_ListStakingHistoriesResponse(buffer_arg) {
  return gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListStakingHistoriesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_adamant_global_v1_ListStakingValidatorsByFilterRequest(arg) {
  if (!(arg instanceof gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListStakingValidatorsByFilterRequest)) {
    throw new Error('Expected argument of type adamant.global.v1.ListStakingValidatorsByFilterRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_adamant_global_v1_ListStakingValidatorsByFilterRequest(buffer_arg) {
  return gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListStakingValidatorsByFilterRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_adamant_global_v1_ListStakingValidatorsResponse(arg) {
  if (!(arg instanceof gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListStakingValidatorsResponse)) {
    throw new Error('Expected argument of type adamant.global.v1.ListStakingValidatorsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_adamant_global_v1_ListStakingValidatorsResponse(buffer_arg) {
  return gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListStakingValidatorsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_adamant_global_v1_ListStakingWalletsByFilterRequest(arg) {
  if (!(arg instanceof gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListStakingWalletsByFilterRequest)) {
    throw new Error('Expected argument of type adamant.global.v1.ListStakingWalletsByFilterRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_adamant_global_v1_ListStakingWalletsByFilterRequest(buffer_arg) {
  return gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListStakingWalletsByFilterRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_adamant_global_v1_ListStakingWalletsResponse(arg) {
  if (!(arg instanceof gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListStakingWalletsResponse)) {
    throw new Error('Expected argument of type adamant.global.v1.ListStakingWalletsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_adamant_global_v1_ListStakingWalletsResponse(buffer_arg) {
  return gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListStakingWalletsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_adamant_global_v1_ListSymbolChildAddressesRequest(arg) {
  if (!(arg instanceof gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListSymbolChildAddressesRequest)) {
    throw new Error('Expected argument of type adamant.global.v1.ListSymbolChildAddressesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_adamant_global_v1_ListSymbolChildAddressesRequest(buffer_arg) {
  return gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListSymbolChildAddressesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_adamant_global_v1_ListSymbolChildAddressesResponse(arg) {
  if (!(arg instanceof gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListSymbolChildAddressesResponse)) {
    throw new Error('Expected argument of type adamant.global.v1.ListSymbolChildAddressesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_adamant_global_v1_ListSymbolChildAddressesResponse(buffer_arg) {
  return gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListSymbolChildAddressesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_adamant_global_v1_ListTransactionsByFilterRequest(arg) {
  if (!(arg instanceof gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListTransactionsByFilterRequest)) {
    throw new Error('Expected argument of type adamant.global.v1.ListTransactionsByFilterRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_adamant_global_v1_ListTransactionsByFilterRequest(buffer_arg) {
  return gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListTransactionsByFilterRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_adamant_global_v1_ListTransactionsRequest(arg) {
  if (!(arg instanceof gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListTransactionsRequest)) {
    throw new Error('Expected argument of type adamant.global.v1.ListTransactionsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_adamant_global_v1_ListTransactionsRequest(buffer_arg) {
  return gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListTransactionsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_adamant_global_v1_ListTransactionsResponse(arg) {
  if (!(arg instanceof gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListTransactionsResponse)) {
    throw new Error('Expected argument of type adamant.global.v1.ListTransactionsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_adamant_global_v1_ListTransactionsResponse(buffer_arg) {
  return gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListTransactionsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_adamant_global_v1_ListTransfersByFilterRequest(arg) {
  if (!(arg instanceof gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListTransfersByFilterRequest)) {
    throw new Error('Expected argument of type adamant.global.v1.ListTransfersByFilterRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_adamant_global_v1_ListTransfersByFilterRequest(buffer_arg) {
  return gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListTransfersByFilterRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_adamant_global_v1_ListTransfersRequest(arg) {
  if (!(arg instanceof gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListTransfersRequest)) {
    throw new Error('Expected argument of type adamant.global.v1.ListTransfersRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_adamant_global_v1_ListTransfersRequest(buffer_arg) {
  return gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListTransfersRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_adamant_global_v1_ListTransfersResponse(arg) {
  if (!(arg instanceof gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListTransfersResponse)) {
    throw new Error('Expected argument of type adamant.global.v1.ListTransfersResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_adamant_global_v1_ListTransfersResponse(buffer_arg) {
  return gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListTransfersResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_adamant_global_v1_ListUTXOsRequest(arg) {
  if (!(arg instanceof gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListUTXOsRequest)) {
    throw new Error('Expected argument of type adamant.global.v1.ListUTXOsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_adamant_global_v1_ListUTXOsRequest(buffer_arg) {
  return gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListUTXOsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_adamant_global_v1_ListUTXOsResponse(arg) {
  if (!(arg instanceof gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListUTXOsResponse)) {
    throw new Error('Expected argument of type adamant.global.v1.ListUTXOsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_adamant_global_v1_ListUTXOsResponse(buffer_arg) {
  return gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListUTXOsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_adamant_global_v1_ListUnconfirmedTransactionsByFilterRequest(arg) {
  if (!(arg instanceof gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListUnconfirmedTransactionsByFilterRequest)) {
    throw new Error('Expected argument of type adamant.global.v1.ListUnconfirmedTransactionsByFilterRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_adamant_global_v1_ListUnconfirmedTransactionsByFilterRequest(buffer_arg) {
  return gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListUnconfirmedTransactionsByFilterRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_adamant_global_v1_ListUnconfirmedTransactionsResponse(arg) {
  if (!(arg instanceof gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListUnconfirmedTransactionsResponse)) {
    throw new Error('Expected argument of type adamant.global.v1.ListUnconfirmedTransactionsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_adamant_global_v1_ListUnconfirmedTransactionsResponse(buffer_arg) {
  return gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListUnconfirmedTransactionsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_adamant_global_v1_ListWalletsByFilterRequest(arg) {
  if (!(arg instanceof gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListWalletsByFilterRequest)) {
    throw new Error('Expected argument of type adamant.global.v1.ListWalletsByFilterRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_adamant_global_v1_ListWalletsByFilterRequest(buffer_arg) {
  return gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListWalletsByFilterRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_adamant_global_v1_ListWalletsRequest(arg) {
  if (!(arg instanceof gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListWalletsRequest)) {
    throw new Error('Expected argument of type adamant.global.v1.ListWalletsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_adamant_global_v1_ListWalletsRequest(buffer_arg) {
  return gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListWalletsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_adamant_global_v1_ListWalletsResponse(arg) {
  if (!(arg instanceof gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListWalletsResponse)) {
    throw new Error('Expected argument of type adamant.global.v1.ListWalletsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_adamant_global_v1_ListWalletsResponse(buffer_arg) {
  return gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListWalletsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_adamant_global_v1_RateSnapshot(arg) {
  if (!(arg instanceof gincoinc_adamant_global_v1_adamantglobalv1_model_pb.RateSnapshot)) {
    throw new Error('Expected argument of type adamant.global.v1.RateSnapshot');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_adamant_global_v1_RateSnapshot(buffer_arg) {
  return gincoinc_adamant_global_v1_adamantglobalv1_model_pb.RateSnapshot.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_adamant_global_v1_ReplaceTransactionRequest(arg) {
  if (!(arg instanceof gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ReplaceTransactionRequest)) {
    throw new Error('Expected argument of type adamant.global.v1.ReplaceTransactionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_adamant_global_v1_ReplaceTransactionRequest(buffer_arg) {
  return gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ReplaceTransactionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_adamant_global_v1_ReplaceTransactionResponse(arg) {
  if (!(arg instanceof gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ReplaceTransactionResponse)) {
    throw new Error('Expected argument of type adamant.global.v1.ReplaceTransactionResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_adamant_global_v1_ReplaceTransactionResponse(buffer_arg) {
  return gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ReplaceTransactionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_adamant_global_v1_ResendTransactionResponse(arg) {
  if (!(arg instanceof gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ResendTransactionResponse)) {
    throw new Error('Expected argument of type adamant.global.v1.ResendTransactionResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_adamant_global_v1_ResendTransactionResponse(buffer_arg) {
  return gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ResendTransactionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_adamant_global_v1_SendTransactionResponse(arg) {
  if (!(arg instanceof gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.SendTransactionResponse)) {
    throw new Error('Expected argument of type adamant.global.v1.SendTransactionResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_adamant_global_v1_SendTransactionResponse(buffer_arg) {
  return gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.SendTransactionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_adamant_global_v1_SetRatesRequest(arg) {
  if (!(arg instanceof gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.SetRatesRequest)) {
    throw new Error('Expected argument of type adamant.global.v1.SetRatesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_adamant_global_v1_SetRatesRequest(buffer_arg) {
  return gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.SetRatesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_adamant_global_v1_SetRatesResponse(arg) {
  if (!(arg instanceof gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.SetRatesResponse)) {
    throw new Error('Expected argument of type adamant.global.v1.SetRatesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_adamant_global_v1_SetRatesResponse(buffer_arg) {
  return gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.SetRatesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_adamant_global_v1_Transaction(arg) {
  if (!(arg instanceof gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Transaction)) {
    throw new Error('Expected argument of type adamant.global.v1.Transaction');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_adamant_global_v1_Transaction(buffer_arg) {
  return gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Transaction.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_adamant_global_v1_UpdateAddressBalanceRequest(arg) {
  if (!(arg instanceof gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpdateAddressBalanceRequest)) {
    throw new Error('Expected argument of type adamant.global.v1.UpdateAddressBalanceRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_adamant_global_v1_UpdateAddressBalanceRequest(buffer_arg) {
  return gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpdateAddressBalanceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_adamant_global_v1_UpdateDestinationWalletIDRequest(arg) {
  if (!(arg instanceof gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpdateDestinationWalletIDRequest)) {
    throw new Error('Expected argument of type adamant.global.v1.UpdateDestinationWalletIDRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_adamant_global_v1_UpdateDestinationWalletIDRequest(buffer_arg) {
  return gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpdateDestinationWalletIDRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_adamant_global_v1_ValidateAddressRequest(arg) {
  if (!(arg instanceof gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ValidateAddressRequest)) {
    throw new Error('Expected argument of type adamant.global.v1.ValidateAddressRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_adamant_global_v1_ValidateAddressRequest(buffer_arg) {
  return gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ValidateAddressRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_adamant_global_v1_ValidateAddressResponse(arg) {
  if (!(arg instanceof gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ValidateAddressResponse)) {
    throw new Error('Expected argument of type adamant.global.v1.ValidateAddressResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_adamant_global_v1_ValidateAddressResponse(buffer_arg) {
  return gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ValidateAddressResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_adamant_global_v1_Wallet(arg) {
  if (!(arg instanceof gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Wallet)) {
    throw new Error('Expected argument of type adamant.global.v1.Wallet');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_adamant_global_v1_Wallet(buffer_arg) {
  return gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Wallet.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_adamant_teller_v1_CreateWalletRequest(arg) {
  if (!(arg instanceof gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.CreateWalletRequest)) {
    throw new Error('Expected argument of type adamant.teller.v1.CreateWalletRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_adamant_teller_v1_CreateWalletRequest(buffer_arg) {
  return gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.CreateWalletRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_adamant_teller_v1_InitializeWalletRequest(arg) {
  if (!(arg instanceof gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.InitializeWalletRequest)) {
    throw new Error('Expected argument of type adamant.teller.v1.InitializeWalletRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_adamant_teller_v1_InitializeWalletRequest(buffer_arg) {
  return gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.InitializeWalletRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_adamant_teller_v1_InitializeXRPWalletRequest(arg) {
  if (!(arg instanceof gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.InitializeXRPWalletRequest)) {
    throw new Error('Expected argument of type adamant.teller.v1.InitializeXRPWalletRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_adamant_teller_v1_InitializeXRPWalletRequest(buffer_arg) {
  return gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.InitializeXRPWalletRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_adamant_teller_v1_ListColdFeeDepositAddressesRequest(arg) {
  if (!(arg instanceof gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.ListColdFeeDepositAddressesRequest)) {
    throw new Error('Expected argument of type adamant.teller.v1.ListColdFeeDepositAddressesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_adamant_teller_v1_ListColdFeeDepositAddressesRequest(buffer_arg) {
  return gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.ListColdFeeDepositAddressesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_adamant_teller_v1_ListColdFeeDepositAddressesResponse(arg) {
  if (!(arg instanceof gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.ListColdFeeDepositAddressesResponse)) {
    throw new Error('Expected argument of type adamant.teller.v1.ListColdFeeDepositAddressesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_adamant_teller_v1_ListColdFeeDepositAddressesResponse(buffer_arg) {
  return gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.ListColdFeeDepositAddressesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_adamant_teller_v1_ListHotFeeDepositAddressesRequest(arg) {
  if (!(arg instanceof gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.ListHotFeeDepositAddressesRequest)) {
    throw new Error('Expected argument of type adamant.teller.v1.ListHotFeeDepositAddressesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_adamant_teller_v1_ListHotFeeDepositAddressesRequest(buffer_arg) {
  return gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.ListHotFeeDepositAddressesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_adamant_teller_v1_ListHotFeeDepositAddressesResponse(arg) {
  if (!(arg instanceof gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.ListHotFeeDepositAddressesResponse)) {
    throw new Error('Expected argument of type adamant.teller.v1.ListHotFeeDepositAddressesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_adamant_teller_v1_ListHotFeeDepositAddressesResponse(buffer_arg) {
  return gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.ListHotFeeDepositAddressesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_adamant_teller_v1_ProgmatCoinBulkAddToBlacklistRequest(arg) {
  if (!(arg instanceof gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.ProgmatCoinBulkAddToBlacklistRequest)) {
    throw new Error('Expected argument of type adamant.teller.v1.ProgmatCoinBulkAddToBlacklistRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_adamant_teller_v1_ProgmatCoinBulkAddToBlacklistRequest(buffer_arg) {
  return gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.ProgmatCoinBulkAddToBlacklistRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_adamant_teller_v1_ProgmatCoinBulkAddToWhitelistRequest(arg) {
  if (!(arg instanceof gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.ProgmatCoinBulkAddToWhitelistRequest)) {
    throw new Error('Expected argument of type adamant.teller.v1.ProgmatCoinBulkAddToWhitelistRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_adamant_teller_v1_ProgmatCoinBulkAddToWhitelistRequest(buffer_arg) {
  return gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.ProgmatCoinBulkAddToWhitelistRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_adamant_teller_v1_ProgmatCoinBulkRemoveFromBlacklistRequest(arg) {
  if (!(arg instanceof gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.ProgmatCoinBulkRemoveFromBlacklistRequest)) {
    throw new Error('Expected argument of type adamant.teller.v1.ProgmatCoinBulkRemoveFromBlacklistRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_adamant_teller_v1_ProgmatCoinBulkRemoveFromBlacklistRequest(buffer_arg) {
  return gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.ProgmatCoinBulkRemoveFromBlacklistRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_adamant_teller_v1_ProgmatCoinBulkRemoveFromWhitelistRequest(arg) {
  if (!(arg instanceof gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.ProgmatCoinBulkRemoveFromWhitelistRequest)) {
    throw new Error('Expected argument of type adamant.teller.v1.ProgmatCoinBulkRemoveFromWhitelistRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_adamant_teller_v1_ProgmatCoinBulkRemoveFromWhitelistRequest(buffer_arg) {
  return gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.ProgmatCoinBulkRemoveFromWhitelistRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_adamant_teller_v1_ProgmatCoinBurnRequest(arg) {
  if (!(arg instanceof gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.ProgmatCoinBurnRequest)) {
    throw new Error('Expected argument of type adamant.teller.v1.ProgmatCoinBurnRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_adamant_teller_v1_ProgmatCoinBurnRequest(buffer_arg) {
  return gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.ProgmatCoinBurnRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_adamant_teller_v1_ProgmatCoinConfigureMinterRequest(arg) {
  if (!(arg instanceof gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.ProgmatCoinConfigureMinterRequest)) {
    throw new Error('Expected argument of type adamant.teller.v1.ProgmatCoinConfigureMinterRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_adamant_teller_v1_ProgmatCoinConfigureMinterRequest(buffer_arg) {
  return gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.ProgmatCoinConfigureMinterRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_adamant_teller_v1_ProgmatCoinConfiscateRequest(arg) {
  if (!(arg instanceof gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.ProgmatCoinConfiscateRequest)) {
    throw new Error('Expected argument of type adamant.teller.v1.ProgmatCoinConfiscateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_adamant_teller_v1_ProgmatCoinConfiscateRequest(buffer_arg) {
  return gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.ProgmatCoinConfiscateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_adamant_teller_v1_ProgmatCoinGrantWhiteAndBlackListerRequest(arg) {
  if (!(arg instanceof gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.ProgmatCoinGrantWhiteAndBlackListerRequest)) {
    throw new Error('Expected argument of type adamant.teller.v1.ProgmatCoinGrantWhiteAndBlackListerRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_adamant_teller_v1_ProgmatCoinGrantWhiteAndBlackListerRequest(buffer_arg) {
  return gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.ProgmatCoinGrantWhiteAndBlackListerRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_adamant_teller_v1_ProgmatCoinInitializeRequest(arg) {
  if (!(arg instanceof gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.ProgmatCoinInitializeRequest)) {
    throw new Error('Expected argument of type adamant.teller.v1.ProgmatCoinInitializeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_adamant_teller_v1_ProgmatCoinInitializeRequest(buffer_arg) {
  return gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.ProgmatCoinInitializeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_adamant_teller_v1_ProgmatCoinMintAndTransferRequest(arg) {
  if (!(arg instanceof gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.ProgmatCoinMintAndTransferRequest)) {
    throw new Error('Expected argument of type adamant.teller.v1.ProgmatCoinMintAndTransferRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_adamant_teller_v1_ProgmatCoinMintAndTransferRequest(buffer_arg) {
  return gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.ProgmatCoinMintAndTransferRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_adamant_teller_v1_ProgmatCoinMintRequest(arg) {
  if (!(arg instanceof gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.ProgmatCoinMintRequest)) {
    throw new Error('Expected argument of type adamant.teller.v1.ProgmatCoinMintRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_adamant_teller_v1_ProgmatCoinMintRequest(buffer_arg) {
  return gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.ProgmatCoinMintRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_adamant_teller_v1_ProgmatCoinPauseRequest(arg) {
  if (!(arg instanceof gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.ProgmatCoinPauseRequest)) {
    throw new Error('Expected argument of type adamant.teller.v1.ProgmatCoinPauseRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_adamant_teller_v1_ProgmatCoinPauseRequest(buffer_arg) {
  return gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.ProgmatCoinPauseRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_adamant_teller_v1_ProgmatCoinUnpauseRequest(arg) {
  if (!(arg instanceof gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.ProgmatCoinUnpauseRequest)) {
    throw new Error('Expected argument of type adamant.teller.v1.ProgmatCoinUnpauseRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_adamant_teller_v1_ProgmatCoinUnpauseRequest(buffer_arg) {
  return gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.ProgmatCoinUnpauseRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_adamant_teller_v1_ProgmatCoinUpgradeToAndCallRequest(arg) {
  if (!(arg instanceof gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.ProgmatCoinUpgradeToAndCallRequest)) {
    throw new Error('Expected argument of type adamant.teller.v1.ProgmatCoinUpgradeToAndCallRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_adamant_teller_v1_ProgmatCoinUpgradeToAndCallRequest(buffer_arg) {
  return gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.ProgmatCoinUpgradeToAndCallRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_adamant_teller_v1_ResendTransactionRequest(arg) {
  if (!(arg instanceof gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.ResendTransactionRequest)) {
    throw new Error('Expected argument of type adamant.teller.v1.ResendTransactionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_adamant_teller_v1_ResendTransactionRequest(buffer_arg) {
  return gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.ResendTransactionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_adamant_teller_v1_SendTransactionRequest(arg) {
  if (!(arg instanceof gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.SendTransactionRequest)) {
    throw new Error('Expected argument of type adamant.teller.v1.SendTransactionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_adamant_teller_v1_SendTransactionRequest(buffer_arg) {
  return gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.SendTransactionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_adamant_teller_v1_SignMessageRequest(arg) {
  if (!(arg instanceof gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.SignMessageRequest)) {
    throw new Error('Expected argument of type adamant.teller.v1.SignMessageRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_adamant_teller_v1_SignMessageRequest(buffer_arg) {
  return gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.SignMessageRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_adamant_teller_v1_SignMessageResponse(arg) {
  if (!(arg instanceof gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.SignMessageResponse)) {
    throw new Error('Expected argument of type adamant.teller.v1.SignMessageResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_adamant_teller_v1_SignMessageResponse(buffer_arg) {
  return gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.SignMessageResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_adamant_teller_v1_SignTransactionRequest(arg) {
  if (!(arg instanceof gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.SignTransactionRequest)) {
    throw new Error('Expected argument of type adamant.teller.v1.SignTransactionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_adamant_teller_v1_SignTransactionRequest(buffer_arg) {
  return gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.SignTransactionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_protobuf_Empty(arg) {
  if (!(arg instanceof google_protobuf_empty_pb.Empty)) {
    throw new Error('Expected argument of type google.protobuf.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_protobuf_Empty(buffer_arg) {
  return google_protobuf_empty_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}


// =============================================================================
//  Service
// =============================================================================
//
var TellerAPIService = exports.TellerAPIService = {
  createWallet: {
    path: '/adamant.teller.v1.TellerAPI/CreateWallet',
    requestStream: false,
    responseStream: false,
    requestType: gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.CreateWalletRequest,
    responseType: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateWalletResponse,
    requestSerialize: serialize_adamant_teller_v1_CreateWalletRequest,
    requestDeserialize: deserialize_adamant_teller_v1_CreateWalletRequest,
    responseSerialize: serialize_adamant_global_v1_CreateWalletResponse,
    responseDeserialize: deserialize_adamant_global_v1_CreateWalletResponse,
  },
  // Get wallet information. the wallet model includes balance, address etc.
getWallet: {
    path: '/adamant.teller.v1.TellerAPI/GetWallet',
    requestStream: false,
    responseStream: false,
    requestType: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetWalletRequest,
    responseType: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Wallet,
    requestSerialize: serialize_adamant_global_v1_GetWalletRequest,
    requestDeserialize: deserialize_adamant_global_v1_GetWalletRequest,
    responseSerialize: serialize_adamant_global_v1_Wallet,
    responseDeserialize: deserialize_adamant_global_v1_Wallet,
  },
  listWallets: {
    path: '/adamant.teller.v1.TellerAPI/ListWallets',
    requestStream: false,
    responseStream: false,
    requestType: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListWalletsRequest,
    responseType: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListWalletsResponse,
    requestSerialize: serialize_adamant_global_v1_ListWalletsRequest,
    requestDeserialize: deserialize_adamant_global_v1_ListWalletsRequest,
    responseSerialize: serialize_adamant_global_v1_ListWalletsResponse,
    responseDeserialize: deserialize_adamant_global_v1_ListWalletsResponse,
  },
  listWalletsByFilter: {
    path: '/adamant.teller.v1.TellerAPI/ListWalletsByFilter',
    requestStream: false,
    responseStream: false,
    requestType: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListWalletsByFilterRequest,
    responseType: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListWalletsResponse,
    requestSerialize: serialize_adamant_global_v1_ListWalletsByFilterRequest,
    requestDeserialize: deserialize_adamant_global_v1_ListWalletsByFilterRequest,
    responseSerialize: serialize_adamant_global_v1_ListWalletsResponse,
    responseDeserialize: deserialize_adamant_global_v1_ListWalletsResponse,
  },
  listStakingWalletsByFilter: {
    path: '/adamant.teller.v1.TellerAPI/ListStakingWalletsByFilter',
    requestStream: false,
    responseStream: false,
    requestType: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListStakingWalletsByFilterRequest,
    responseType: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListStakingWalletsResponse,
    requestSerialize: serialize_adamant_global_v1_ListStakingWalletsByFilterRequest,
    requestDeserialize: deserialize_adamant_global_v1_ListStakingWalletsByFilterRequest,
    responseSerialize: serialize_adamant_global_v1_ListStakingWalletsResponse,
    responseDeserialize: deserialize_adamant_global_v1_ListStakingWalletsResponse,
  },
  listBaseWallets: {
    path: '/adamant.teller.v1.TellerAPI/ListBaseWallets',
    requestStream: false,
    responseStream: false,
    requestType: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListBaseWalletsRequest,
    responseType: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListBaseWalletsResponse,
    requestSerialize: serialize_adamant_global_v1_ListBaseWalletsRequest,
    requestDeserialize: deserialize_adamant_global_v1_ListBaseWalletsRequest,
    responseSerialize: serialize_adamant_global_v1_ListBaseWalletsResponse,
    responseDeserialize: deserialize_adamant_global_v1_ListBaseWalletsResponse,
  },
  getSpendableBalance: {
    path: '/adamant.teller.v1.TellerAPI/GetSpendableBalance',
    requestStream: false,
    responseStream: false,
    requestType: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetSpendableBalanceRequest,
    responseType: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetSpendableBalanceResponse,
    requestSerialize: serialize_adamant_global_v1_GetSpendableBalanceRequest,
    requestDeserialize: deserialize_adamant_global_v1_GetSpendableBalanceRequest,
    responseSerialize: serialize_adamant_global_v1_GetSpendableBalanceResponse,
    responseDeserialize: deserialize_adamant_global_v1_GetSpendableBalanceResponse,
  },
  initializeXRPWallet: {
    path: '/adamant.teller.v1.TellerAPI/InitializeXRPWallet',
    requestStream: false,
    responseStream: false,
    requestType: gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.InitializeXRPWalletRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_adamant_teller_v1_InitializeXRPWalletRequest,
    requestDeserialize: deserialize_adamant_teller_v1_InitializeXRPWalletRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  initializeWallet: {
    path: '/adamant.teller.v1.TellerAPI/InitializeWallet',
    requestStream: false,
    responseStream: false,
    requestType: gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.InitializeWalletRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_adamant_teller_v1_InitializeWalletRequest,
    requestDeserialize: deserialize_adamant_teller_v1_InitializeWalletRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  updateDestinationWalletID: {
    path: '/adamant.teller.v1.TellerAPI/UpdateDestinationWalletID',
    requestStream: false,
    responseStream: false,
    requestType: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpdateDestinationWalletIDRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_adamant_global_v1_UpdateDestinationWalletIDRequest,
    requestDeserialize: deserialize_adamant_global_v1_UpdateDestinationWalletIDRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  getCosmosBalance: {
    path: '/adamant.teller.v1.TellerAPI/GetCosmosBalance',
    requestStream: false,
    responseStream: false,
    requestType: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetCosmosBalanceRequest,
    responseType: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetCosmosBalanceResponse,
    requestSerialize: serialize_adamant_global_v1_GetCosmosBalanceRequest,
    requestDeserialize: deserialize_adamant_global_v1_GetCosmosBalanceRequest,
    responseSerialize: serialize_adamant_global_v1_GetCosmosBalanceResponse,
    responseDeserialize: deserialize_adamant_global_v1_GetCosmosBalanceResponse,
  },
  listCosmosDelegateHistories: {
    path: '/adamant.teller.v1.TellerAPI/ListCosmosDelegateHistories',
    requestStream: false,
    responseStream: false,
    requestType: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListCosmosDelegateHistoriesRequest,
    responseType: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListCosmosDelegateHistoriesResponse,
    requestSerialize: serialize_adamant_global_v1_ListCosmosDelegateHistoriesRequest,
    requestDeserialize: deserialize_adamant_global_v1_ListCosmosDelegateHistoriesRequest,
    responseSerialize: serialize_adamant_global_v1_ListCosmosDelegateHistoriesResponse,
    responseDeserialize: deserialize_adamant_global_v1_ListCosmosDelegateHistoriesResponse,
  },
  listUTXOs: {
    path: '/adamant.teller.v1.TellerAPI/ListUTXOs',
    requestStream: false,
    responseStream: false,
    requestType: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListUTXOsRequest,
    responseType: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListUTXOsResponse,
    requestSerialize: serialize_adamant_global_v1_ListUTXOsRequest,
    requestDeserialize: deserialize_adamant_global_v1_ListUTXOsRequest,
    responseSerialize: serialize_adamant_global_v1_ListUTXOsResponse,
    responseDeserialize: deserialize_adamant_global_v1_ListUTXOsResponse,
  },
  // Create a new address for an existing wallet
createAddress: {
    path: '/adamant.teller.v1.TellerAPI/CreateAddress',
    requestStream: false,
    responseStream: false,
    requestType: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateAddressRequest,
    responseType: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateAddressResponse,
    requestSerialize: serialize_adamant_global_v1_CreateAddressRequest,
    requestDeserialize: deserialize_adamant_global_v1_CreateAddressRequest,
    responseSerialize: serialize_adamant_global_v1_CreateAddressResponse,
    responseDeserialize: deserialize_adamant_global_v1_CreateAddressResponse,
  },
  createIOSTAccount: {
    path: '/adamant.teller.v1.TellerAPI/CreateIOSTAccount',
    requestStream: false,
    responseStream: false,
    requestType: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateIOSTAccountRequest,
    responseType: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateIOSTAccountResponse,
    requestSerialize: serialize_adamant_global_v1_CreateIOSTAccountRequest,
    requestDeserialize: deserialize_adamant_global_v1_CreateIOSTAccountRequest,
    responseSerialize: serialize_adamant_global_v1_CreateIOSTAccountResponse,
    responseDeserialize: deserialize_adamant_global_v1_CreateIOSTAccountResponse,
  },
  listSymbolChildAddresses: {
    path: '/adamant.teller.v1.TellerAPI/ListSymbolChildAddresses',
    requestStream: false,
    responseStream: false,
    requestType: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListSymbolChildAddressesRequest,
    responseType: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListSymbolChildAddressesResponse,
    requestSerialize: serialize_adamant_global_v1_ListSymbolChildAddressesRequest,
    requestDeserialize: deserialize_adamant_global_v1_ListSymbolChildAddressesRequest,
    responseSerialize: serialize_adamant_global_v1_ListSymbolChildAddressesResponse,
    responseDeserialize: deserialize_adamant_global_v1_ListSymbolChildAddressesResponse,
  },
  getAddress: {
    path: '/adamant.teller.v1.TellerAPI/GetAddress',
    requestStream: false,
    responseStream: false,
    requestType: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetAddressRequest,
    responseType: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Address,
    requestSerialize: serialize_adamant_global_v1_GetAddressRequest,
    requestDeserialize: deserialize_adamant_global_v1_GetAddressRequest,
    responseSerialize: serialize_adamant_global_v1_Address,
    responseDeserialize: deserialize_adamant_global_v1_Address,
  },
  getAddressByAddress: {
    path: '/adamant.teller.v1.TellerAPI/GetAddressByAddress',
    requestStream: false,
    responseStream: false,
    requestType: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetAddressByAddressRequest,
    responseType: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Address,
    requestSerialize: serialize_adamant_global_v1_GetAddressByAddressRequest,
    requestDeserialize: deserialize_adamant_global_v1_GetAddressByAddressRequest,
    responseSerialize: serialize_adamant_global_v1_Address,
    responseDeserialize: deserialize_adamant_global_v1_Address,
  },
  getAddressByAddressCoin: {
    path: '/adamant.teller.v1.TellerAPI/GetAddressByAddressCoin',
    requestStream: false,
    responseStream: false,
    requestType: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetAddressByAddressCoinRequest,
    responseType: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Address,
    requestSerialize: serialize_adamant_global_v1_GetAddressByAddressCoinRequest,
    requestDeserialize: deserialize_adamant_global_v1_GetAddressByAddressCoinRequest,
    responseSerialize: serialize_adamant_global_v1_Address,
    responseDeserialize: deserialize_adamant_global_v1_Address,
  },
  getAddressByIndex: {
    path: '/adamant.teller.v1.TellerAPI/GetAddressByIndex',
    requestStream: false,
    responseStream: false,
    requestType: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetAddressByIndexRequest,
    responseType: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Address,
    requestSerialize: serialize_adamant_global_v1_GetAddressByIndexRequest,
    requestDeserialize: deserialize_adamant_global_v1_GetAddressByIndexRequest,
    responseSerialize: serialize_adamant_global_v1_Address,
    responseDeserialize: deserialize_adamant_global_v1_Address,
  },
  listAddresses: {
    path: '/adamant.teller.v1.TellerAPI/ListAddresses',
    requestStream: false,
    responseStream: false,
    requestType: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListAddressesRequest,
    responseType: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListAddressesResponse,
    requestSerialize: serialize_adamant_global_v1_ListAddressesRequest,
    requestDeserialize: deserialize_adamant_global_v1_ListAddressesRequest,
    responseSerialize: serialize_adamant_global_v1_ListAddressesResponse,
    responseDeserialize: deserialize_adamant_global_v1_ListAddressesResponse,
  },
  importAddress: {
    path: '/adamant.teller.v1.TellerAPI/ImportAddress',
    requestStream: false,
    responseStream: false,
    requestType: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ImportAddressRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_adamant_global_v1_ImportAddressRequest,
    requestDeserialize: deserialize_adamant_global_v1_ImportAddressRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Get an address which hold ETH for ethereum wallet/address creation etc
getEthereumFeeAddress: {
    path: '/adamant.teller.v1.TellerAPI/GetEthereumFeeAddress',
    requestStream: false,
    responseStream: false,
    requestType: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetEthereumFeeAddressRequest,
    responseType: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.EthereumFeeAddress,
    requestSerialize: serialize_adamant_global_v1_GetEthereumFeeAddressRequest,
    requestDeserialize: deserialize_adamant_global_v1_GetEthereumFeeAddressRequest,
    responseSerialize: serialize_adamant_global_v1_EthereumFeeAddress,
    responseDeserialize: deserialize_adamant_global_v1_EthereumFeeAddress,
  },
  updateAddressBalance: {
    path: '/adamant.teller.v1.TellerAPI/UpdateAddressBalance',
    requestStream: false,
    responseStream: false,
    requestType: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpdateAddressBalanceRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_adamant_global_v1_UpdateAddressBalanceRequest,
    requestDeserialize: deserialize_adamant_global_v1_UpdateAddressBalanceRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  listColdFeeDepositAddresses: {
    path: '/adamant.teller.v1.TellerAPI/ListColdFeeDepositAddresses',
    requestStream: false,
    responseStream: false,
    requestType: gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.ListColdFeeDepositAddressesRequest,
    responseType: gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.ListColdFeeDepositAddressesResponse,
    requestSerialize: serialize_adamant_teller_v1_ListColdFeeDepositAddressesRequest,
    requestDeserialize: deserialize_adamant_teller_v1_ListColdFeeDepositAddressesRequest,
    responseSerialize: serialize_adamant_teller_v1_ListColdFeeDepositAddressesResponse,
    responseDeserialize: deserialize_adamant_teller_v1_ListColdFeeDepositAddressesResponse,
  },
  listHotFeeDepositAddresses: {
    path: '/adamant.teller.v1.TellerAPI/ListHotFeeDepositAddresses',
    requestStream: false,
    responseStream: false,
    requestType: gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.ListHotFeeDepositAddressesRequest,
    responseType: gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.ListHotFeeDepositAddressesResponse,
    requestSerialize: serialize_adamant_teller_v1_ListHotFeeDepositAddressesRequest,
    requestDeserialize: deserialize_adamant_teller_v1_ListHotFeeDepositAddressesRequest,
    responseSerialize: serialize_adamant_teller_v1_ListHotFeeDepositAddressesResponse,
    responseDeserialize: deserialize_adamant_teller_v1_ListHotFeeDepositAddressesResponse,
  },
  createTransaction: {
    path: '/adamant.teller.v1.TellerAPI/CreateTransaction',
    requestStream: false,
    responseStream: false,
    requestType: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransactionRequest,
    responseType: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransactionResponse,
    requestSerialize: serialize_adamant_global_v1_CreateTransactionRequest,
    requestDeserialize: deserialize_adamant_global_v1_CreateTransactionRequest,
    responseSerialize: serialize_adamant_global_v1_CreateTransactionResponse,
    responseDeserialize: deserialize_adamant_global_v1_CreateTransactionResponse,
  },
  createContractCreationTransaction: {
    path: '/adamant.teller.v1.TellerAPI/CreateContractCreationTransaction',
    requestStream: false,
    responseStream: false,
    requestType: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateContractCreationTransactionRequest,
    responseType: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateContractCreationTransactionResponse,
    requestSerialize: serialize_adamant_global_v1_CreateContractCreationTransactionRequest,
    requestDeserialize: deserialize_adamant_global_v1_CreateContractCreationTransactionRequest,
    responseSerialize: serialize_adamant_global_v1_CreateContractCreationTransactionResponse,
    responseDeserialize: deserialize_adamant_global_v1_CreateContractCreationTransactionResponse,
  },
  signTransaction: {
    path: '/adamant.teller.v1.TellerAPI/SignTransaction',
    requestStream: false,
    responseStream: false,
    requestType: gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.SignTransactionRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_adamant_teller_v1_SignTransactionRequest,
    requestDeserialize: deserialize_adamant_teller_v1_SignTransactionRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  sendTransaction: {
    path: '/adamant.teller.v1.TellerAPI/SendTransaction',
    requestStream: false,
    responseStream: false,
    requestType: gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.SendTransactionRequest,
    responseType: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.SendTransactionResponse,
    requestSerialize: serialize_adamant_teller_v1_SendTransactionRequest,
    requestDeserialize: deserialize_adamant_teller_v1_SendTransactionRequest,
    responseSerialize: serialize_adamant_global_v1_SendTransactionResponse,
    responseDeserialize: deserialize_adamant_global_v1_SendTransactionResponse,
  },
  resendTransaction: {
    path: '/adamant.teller.v1.TellerAPI/ResendTransaction',
    requestStream: false,
    responseStream: false,
    requestType: gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.ResendTransactionRequest,
    responseType: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ResendTransactionResponse,
    requestSerialize: serialize_adamant_teller_v1_ResendTransactionRequest,
    requestDeserialize: deserialize_adamant_teller_v1_ResendTransactionRequest,
    responseSerialize: serialize_adamant_global_v1_ResendTransactionResponse,
    responseDeserialize: deserialize_adamant_global_v1_ResendTransactionResponse,
  },
  cancelTransaction: {
    path: '/adamant.teller.v1.TellerAPI/CancelTransaction',
    requestStream: false,
    responseStream: false,
    requestType: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CancelTransactionRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_adamant_global_v1_CancelTransactionRequest,
    requestDeserialize: deserialize_adamant_global_v1_CancelTransactionRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  replaceTransaction: {
    path: '/adamant.teller.v1.TellerAPI/ReplaceTransaction',
    requestStream: false,
    responseStream: false,
    requestType: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ReplaceTransactionRequest,
    responseType: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ReplaceTransactionResponse,
    requestSerialize: serialize_adamant_global_v1_ReplaceTransactionRequest,
    requestDeserialize: deserialize_adamant_global_v1_ReplaceTransactionRequest,
    responseSerialize: serialize_adamant_global_v1_ReplaceTransactionResponse,
    responseDeserialize: deserialize_adamant_global_v1_ReplaceTransactionResponse,
  },
  isTransactionReplaceable: {
    path: '/adamant.teller.v1.TellerAPI/IsTransactionReplaceable',
    requestStream: false,
    responseStream: false,
    requestType: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.IsTransactionReplaceableRequest,
    responseType: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.IsTransactionReplaceableResponse,
    requestSerialize: serialize_adamant_global_v1_IsTransactionReplaceableRequest,
    requestDeserialize: deserialize_adamant_global_v1_IsTransactionReplaceableRequest,
    responseSerialize: serialize_adamant_global_v1_IsTransactionReplaceableResponse,
    responseDeserialize: deserialize_adamant_global_v1_IsTransactionReplaceableResponse,
  },
  getTransaction: {
    path: '/adamant.teller.v1.TellerAPI/GetTransaction',
    requestStream: false,
    responseStream: false,
    requestType: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetTransactionRequest,
    responseType: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Transaction,
    requestSerialize: serialize_adamant_global_v1_GetTransactionRequest,
    requestDeserialize: deserialize_adamant_global_v1_GetTransactionRequest,
    responseSerialize: serialize_adamant_global_v1_Transaction,
    responseDeserialize: deserialize_adamant_global_v1_Transaction,
  },
  getTransactionByTxID: {
    path: '/adamant.teller.v1.TellerAPI/GetTransactionByTxID',
    requestStream: false,
    responseStream: false,
    requestType: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetTransactionByTxIDRequest,
    responseType: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Transaction,
    requestSerialize: serialize_adamant_global_v1_GetTransactionByTxIDRequest,
    requestDeserialize: deserialize_adamant_global_v1_GetTransactionByTxIDRequest,
    responseSerialize: serialize_adamant_global_v1_Transaction,
    responseDeserialize: deserialize_adamant_global_v1_Transaction,
  },
  listTransactions: {
    path: '/adamant.teller.v1.TellerAPI/ListTransactions',
    requestStream: false,
    responseStream: false,
    requestType: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListTransactionsRequest,
    responseType: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListTransactionsResponse,
    requestSerialize: serialize_adamant_global_v1_ListTransactionsRequest,
    requestDeserialize: deserialize_adamant_global_v1_ListTransactionsRequest,
    responseSerialize: serialize_adamant_global_v1_ListTransactionsResponse,
    responseDeserialize: deserialize_adamant_global_v1_ListTransactionsResponse,
  },
  listTransactionsByFilter: {
    path: '/adamant.teller.v1.TellerAPI/ListTransactionsByFilter',
    requestStream: false,
    responseStream: false,
    requestType: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListTransactionsByFilterRequest,
    responseType: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListTransactionsResponse,
    requestSerialize: serialize_adamant_global_v1_ListTransactionsByFilterRequest,
    requestDeserialize: deserialize_adamant_global_v1_ListTransactionsByFilterRequest,
    responseSerialize: serialize_adamant_global_v1_ListTransactionsResponse,
    responseDeserialize: deserialize_adamant_global_v1_ListTransactionsResponse,
  },
  listUnconfirmedTransactionsByFilter: {
    path: '/adamant.teller.v1.TellerAPI/ListUnconfirmedTransactionsByFilter',
    requestStream: false,
    responseStream: false,
    requestType: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListUnconfirmedTransactionsByFilterRequest,
    responseType: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListUnconfirmedTransactionsResponse,
    requestSerialize: serialize_adamant_global_v1_ListUnconfirmedTransactionsByFilterRequest,
    requestDeserialize: deserialize_adamant_global_v1_ListUnconfirmedTransactionsByFilterRequest,
    responseSerialize: serialize_adamant_global_v1_ListUnconfirmedTransactionsResponse,
    responseDeserialize: deserialize_adamant_global_v1_ListUnconfirmedTransactionsResponse,
  },
  // Exit ethereum validators
exitEthereumStakingValidators: {
    path: '/adamant.teller.v1.TellerAPI/ExitEthereumStakingValidators',
    requestStream: false,
    responseStream: false,
    requestType: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ExitEthereumStakingValidatorsRequest,
    responseType: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ExitEthereumStakingValidatorsResponse,
    requestSerialize: serialize_adamant_global_v1_ExitEthereumStakingValidatorsRequest,
    requestDeserialize: deserialize_adamant_global_v1_ExitEthereumStakingValidatorsRequest,
    responseSerialize: serialize_adamant_global_v1_ExitEthereumStakingValidatorsResponse,
    responseDeserialize: deserialize_adamant_global_v1_ExitEthereumStakingValidatorsResponse,
  },
  // List transfers for a given wallet. Ordered by update time desc
listTransfers: {
    path: '/adamant.teller.v1.TellerAPI/ListTransfers',
    requestStream: false,
    responseStream: false,
    requestType: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListTransfersRequest,
    responseType: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListTransfersResponse,
    requestSerialize: serialize_adamant_global_v1_ListTransfersRequest,
    requestDeserialize: deserialize_adamant_global_v1_ListTransfersRequest,
    responseSerialize: serialize_adamant_global_v1_ListTransfersResponse,
    responseDeserialize: deserialize_adamant_global_v1_ListTransfersResponse,
  },
  listTransfersByFilter: {
    path: '/adamant.teller.v1.TellerAPI/ListTransfersByFilter',
    requestStream: false,
    responseStream: false,
    requestType: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListTransfersByFilterRequest,
    responseType: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListTransfersResponse,
    requestSerialize: serialize_adamant_global_v1_ListTransfersByFilterRequest,
    requestDeserialize: deserialize_adamant_global_v1_ListTransfersByFilterRequest,
    responseSerialize: serialize_adamant_global_v1_ListTransfersResponse,
    responseDeserialize: deserialize_adamant_global_v1_ListTransfersResponse,
  },
  // Get rates by snapshot id
getRateSnapshot: {
    path: '/adamant.teller.v1.TellerAPI/GetRateSnapshot',
    requestStream: false,
    responseStream: false,
    requestType: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetRateSnapshotRequest,
    responseType: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.RateSnapshot,
    requestSerialize: serialize_adamant_global_v1_GetRateSnapshotRequest,
    requestDeserialize: deserialize_adamant_global_v1_GetRateSnapshotRequest,
    responseSerialize: serialize_adamant_global_v1_RateSnapshot,
    responseDeserialize: deserialize_adamant_global_v1_RateSnapshot,
  },
  // Get latest rates set to your organization
getLatestRateSnapshot: {
    path: '/adamant.teller.v1.TellerAPI/GetLatestRateSnapshot',
    requestStream: false,
    responseStream: false,
    requestType: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetLatestRateSnapshotRequest,
    responseType: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.RateSnapshot,
    requestSerialize: serialize_adamant_global_v1_GetLatestRateSnapshotRequest,
    requestDeserialize: deserialize_adamant_global_v1_GetLatestRateSnapshotRequest,
    responseSerialize: serialize_adamant_global_v1_RateSnapshot,
    responseDeserialize: deserialize_adamant_global_v1_RateSnapshot,
  },
  // Set rates to your organization
setRates: {
    path: '/adamant.teller.v1.TellerAPI/SetRates',
    requestStream: false,
    responseStream: false,
    requestType: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.SetRatesRequest,
    responseType: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.SetRatesResponse,
    requestSerialize: serialize_adamant_global_v1_SetRatesRequest,
    requestDeserialize: deserialize_adamant_global_v1_SetRatesRequest,
    responseSerialize: serialize_adamant_global_v1_SetRatesResponse,
    responseDeserialize: deserialize_adamant_global_v1_SetRatesResponse,
  },
  calculateFee: {
    path: '/adamant.teller.v1.TellerAPI/CalculateFee',
    requestStream: false,
    responseStream: false,
    requestType: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CalculateFeeRequest,
    responseType: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CalculateFeeResponse,
    requestSerialize: serialize_adamant_global_v1_CalculateFeeRequest,
    requestDeserialize: deserialize_adamant_global_v1_CalculateFeeRequest,
    responseSerialize: serialize_adamant_global_v1_CalculateFeeResponse,
    responseDeserialize: deserialize_adamant_global_v1_CalculateFeeResponse,
  },
  getRecommendedFeeRate: {
    path: '/adamant.teller.v1.TellerAPI/GetRecommendedFeeRate',
    requestStream: false,
    responseStream: false,
    requestType: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetRecommendedFeeRateRequest,
    responseType: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetRecommendedFeeRateResponse,
    requestSerialize: serialize_adamant_global_v1_GetRecommendedFeeRateRequest,
    requestDeserialize: deserialize_adamant_global_v1_GetRecommendedFeeRateRequest,
    responseSerialize: serialize_adamant_global_v1_GetRecommendedFeeRateResponse,
    responseDeserialize: deserialize_adamant_global_v1_GetRecommendedFeeRateResponse,
  },
  // Validate format of given address
validateAddress: {
    path: '/adamant.teller.v1.TellerAPI/ValidateAddress',
    requestStream: false,
    responseStream: false,
    requestType: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ValidateAddressRequest,
    responseType: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ValidateAddressResponse,
    requestSerialize: serialize_adamant_global_v1_ValidateAddressRequest,
    requestDeserialize: deserialize_adamant_global_v1_ValidateAddressRequest,
    responseSerialize: serialize_adamant_global_v1_ValidateAddressResponse,
    responseDeserialize: deserialize_adamant_global_v1_ValidateAddressResponse,
  },
  flushBalance: {
    path: '/adamant.teller.v1.TellerAPI/FlushBalance',
    requestStream: false,
    responseStream: false,
    requestType: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.FlushBalanceRequest,
    responseType: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.FlushBalanceResponse,
    requestSerialize: serialize_adamant_global_v1_FlushBalanceRequest,
    requestDeserialize: deserialize_adamant_global_v1_FlushBalanceRequest,
    responseSerialize: serialize_adamant_global_v1_FlushBalanceResponse,
    responseDeserialize: deserialize_adamant_global_v1_FlushBalanceResponse,
  },
  listAuditLogs: {
    path: '/adamant.teller.v1.TellerAPI/ListAuditLogs',
    requestStream: false,
    responseStream: false,
    requestType: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListAuditLogsRequest,
    responseType: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListAuditLogsResponse,
    requestSerialize: serialize_adamant_global_v1_ListAuditLogsRequest,
    requestDeserialize: deserialize_adamant_global_v1_ListAuditLogsRequest,
    responseSerialize: serialize_adamant_global_v1_ListAuditLogsResponse,
    responseDeserialize: deserialize_adamant_global_v1_ListAuditLogsResponse,
  },
  listStakingHistoriesByFilter: {
    path: '/adamant.teller.v1.TellerAPI/ListStakingHistoriesByFilter',
    requestStream: false,
    responseStream: false,
    requestType: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListStakingHistoriesByFilterRequest,
    responseType: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListStakingHistoriesResponse,
    requestSerialize: serialize_adamant_global_v1_ListStakingHistoriesByFilterRequest,
    requestDeserialize: deserialize_adamant_global_v1_ListStakingHistoriesByFilterRequest,
    responseSerialize: serialize_adamant_global_v1_ListStakingHistoriesResponse,
    responseDeserialize: deserialize_adamant_global_v1_ListStakingHistoriesResponse,
  },
  listStakingValidatorsByFilter: {
    path: '/adamant.teller.v1.TellerAPI/ListStakingValidatorsByFilter',
    requestStream: false,
    responseStream: false,
    requestType: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListStakingValidatorsByFilterRequest,
    responseType: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListStakingValidatorsResponse,
    requestSerialize: serialize_adamant_global_v1_ListStakingValidatorsByFilterRequest,
    requestDeserialize: deserialize_adamant_global_v1_ListStakingValidatorsByFilterRequest,
    responseSerialize: serialize_adamant_global_v1_ListStakingValidatorsResponse,
    responseDeserialize: deserialize_adamant_global_v1_ListStakingValidatorsResponse,
  },
  signMessage: {
    path: '/adamant.teller.v1.TellerAPI/SignMessage',
    requestStream: false,
    responseStream: false,
    requestType: gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.SignMessageRequest,
    responseType: gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.SignMessageResponse,
    requestSerialize: serialize_adamant_teller_v1_SignMessageRequest,
    requestDeserialize: deserialize_adamant_teller_v1_SignMessageRequest,
    responseSerialize: serialize_adamant_teller_v1_SignMessageResponse,
    responseDeserialize: deserialize_adamant_teller_v1_SignMessageResponse,
  },
  // ProgmatCoin
progmatCoinInitialize: {
    path: '/adamant.teller.v1.TellerAPI/ProgmatCoinInitialize',
    requestStream: false,
    responseStream: false,
    requestType: gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.ProgmatCoinInitializeRequest,
    responseType: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransactionResponse,
    requestSerialize: serialize_adamant_teller_v1_ProgmatCoinInitializeRequest,
    requestDeserialize: deserialize_adamant_teller_v1_ProgmatCoinInitializeRequest,
    responseSerialize: serialize_adamant_global_v1_CreateTransactionResponse,
    responseDeserialize: deserialize_adamant_global_v1_CreateTransactionResponse,
  },
  progmatCoinConfigureMinter: {
    path: '/adamant.teller.v1.TellerAPI/ProgmatCoinConfigureMinter',
    requestStream: false,
    responseStream: false,
    requestType: gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.ProgmatCoinConfigureMinterRequest,
    responseType: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransactionResponse,
    requestSerialize: serialize_adamant_teller_v1_ProgmatCoinConfigureMinterRequest,
    requestDeserialize: deserialize_adamant_teller_v1_ProgmatCoinConfigureMinterRequest,
    responseSerialize: serialize_adamant_global_v1_CreateTransactionResponse,
    responseDeserialize: deserialize_adamant_global_v1_CreateTransactionResponse,
  },
  progmatCoinMintAndTransfer: {
    path: '/adamant.teller.v1.TellerAPI/ProgmatCoinMintAndTransfer',
    requestStream: false,
    responseStream: false,
    requestType: gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.ProgmatCoinMintAndTransferRequest,
    responseType: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransactionResponse,
    requestSerialize: serialize_adamant_teller_v1_ProgmatCoinMintAndTransferRequest,
    requestDeserialize: deserialize_adamant_teller_v1_ProgmatCoinMintAndTransferRequest,
    responseSerialize: serialize_adamant_global_v1_CreateTransactionResponse,
    responseDeserialize: deserialize_adamant_global_v1_CreateTransactionResponse,
  },
  progmatCoinMint: {
    path: '/adamant.teller.v1.TellerAPI/ProgmatCoinMint',
    requestStream: false,
    responseStream: false,
    requestType: gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.ProgmatCoinMintRequest,
    responseType: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransactionResponse,
    requestSerialize: serialize_adamant_teller_v1_ProgmatCoinMintRequest,
    requestDeserialize: deserialize_adamant_teller_v1_ProgmatCoinMintRequest,
    responseSerialize: serialize_adamant_global_v1_CreateTransactionResponse,
    responseDeserialize: deserialize_adamant_global_v1_CreateTransactionResponse,
  },
  progmatCoinBurn: {
    path: '/adamant.teller.v1.TellerAPI/ProgmatCoinBurn',
    requestStream: false,
    responseStream: false,
    requestType: gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.ProgmatCoinBurnRequest,
    responseType: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransactionResponse,
    requestSerialize: serialize_adamant_teller_v1_ProgmatCoinBurnRequest,
    requestDeserialize: deserialize_adamant_teller_v1_ProgmatCoinBurnRequest,
    responseSerialize: serialize_adamant_global_v1_CreateTransactionResponse,
    responseDeserialize: deserialize_adamant_global_v1_CreateTransactionResponse,
  },
  progmatCoinBulkAddToWhitelist: {
    path: '/adamant.teller.v1.TellerAPI/ProgmatCoinBulkAddToWhitelist',
    requestStream: false,
    responseStream: false,
    requestType: gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.ProgmatCoinBulkAddToWhitelistRequest,
    responseType: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransactionResponse,
    requestSerialize: serialize_adamant_teller_v1_ProgmatCoinBulkAddToWhitelistRequest,
    requestDeserialize: deserialize_adamant_teller_v1_ProgmatCoinBulkAddToWhitelistRequest,
    responseSerialize: serialize_adamant_global_v1_CreateTransactionResponse,
    responseDeserialize: deserialize_adamant_global_v1_CreateTransactionResponse,
  },
  progmatCoinBulkRemoveFromWhitelist: {
    path: '/adamant.teller.v1.TellerAPI/ProgmatCoinBulkRemoveFromWhitelist',
    requestStream: false,
    responseStream: false,
    requestType: gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.ProgmatCoinBulkRemoveFromWhitelistRequest,
    responseType: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransactionResponse,
    requestSerialize: serialize_adamant_teller_v1_ProgmatCoinBulkRemoveFromWhitelistRequest,
    requestDeserialize: deserialize_adamant_teller_v1_ProgmatCoinBulkRemoveFromWhitelistRequest,
    responseSerialize: serialize_adamant_global_v1_CreateTransactionResponse,
    responseDeserialize: deserialize_adamant_global_v1_CreateTransactionResponse,
  },
  progmatCoinBulkAddToBlacklist: {
    path: '/adamant.teller.v1.TellerAPI/ProgmatCoinBulkAddToBlacklist',
    requestStream: false,
    responseStream: false,
    requestType: gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.ProgmatCoinBulkAddToBlacklistRequest,
    responseType: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransactionResponse,
    requestSerialize: serialize_adamant_teller_v1_ProgmatCoinBulkAddToBlacklistRequest,
    requestDeserialize: deserialize_adamant_teller_v1_ProgmatCoinBulkAddToBlacklistRequest,
    responseSerialize: serialize_adamant_global_v1_CreateTransactionResponse,
    responseDeserialize: deserialize_adamant_global_v1_CreateTransactionResponse,
  },
  progmatCoinBulkRemoveFromBlacklist: {
    path: '/adamant.teller.v1.TellerAPI/ProgmatCoinBulkRemoveFromBlacklist',
    requestStream: false,
    responseStream: false,
    requestType: gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.ProgmatCoinBulkRemoveFromBlacklistRequest,
    responseType: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransactionResponse,
    requestSerialize: serialize_adamant_teller_v1_ProgmatCoinBulkRemoveFromBlacklistRequest,
    requestDeserialize: deserialize_adamant_teller_v1_ProgmatCoinBulkRemoveFromBlacklistRequest,
    responseSerialize: serialize_adamant_global_v1_CreateTransactionResponse,
    responseDeserialize: deserialize_adamant_global_v1_CreateTransactionResponse,
  },
  progmatCoinConfiscate: {
    path: '/adamant.teller.v1.TellerAPI/ProgmatCoinConfiscate',
    requestStream: false,
    responseStream: false,
    requestType: gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.ProgmatCoinConfiscateRequest,
    responseType: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransactionResponse,
    requestSerialize: serialize_adamant_teller_v1_ProgmatCoinConfiscateRequest,
    requestDeserialize: deserialize_adamant_teller_v1_ProgmatCoinConfiscateRequest,
    responseSerialize: serialize_adamant_global_v1_CreateTransactionResponse,
    responseDeserialize: deserialize_adamant_global_v1_CreateTransactionResponse,
  },
  progmatCoinPause: {
    path: '/adamant.teller.v1.TellerAPI/ProgmatCoinPause',
    requestStream: false,
    responseStream: false,
    requestType: gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.ProgmatCoinPauseRequest,
    responseType: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransactionResponse,
    requestSerialize: serialize_adamant_teller_v1_ProgmatCoinPauseRequest,
    requestDeserialize: deserialize_adamant_teller_v1_ProgmatCoinPauseRequest,
    responseSerialize: serialize_adamant_global_v1_CreateTransactionResponse,
    responseDeserialize: deserialize_adamant_global_v1_CreateTransactionResponse,
  },
  progmatCoinUnpause: {
    path: '/adamant.teller.v1.TellerAPI/ProgmatCoinUnpause',
    requestStream: false,
    responseStream: false,
    requestType: gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.ProgmatCoinUnpauseRequest,
    responseType: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransactionResponse,
    requestSerialize: serialize_adamant_teller_v1_ProgmatCoinUnpauseRequest,
    requestDeserialize: deserialize_adamant_teller_v1_ProgmatCoinUnpauseRequest,
    responseSerialize: serialize_adamant_global_v1_CreateTransactionResponse,
    responseDeserialize: deserialize_adamant_global_v1_CreateTransactionResponse,
  },
  progmatCoinGrantWhiteAndBlackLister: {
    path: '/adamant.teller.v1.TellerAPI/ProgmatCoinGrantWhiteAndBlackLister',
    requestStream: false,
    responseStream: false,
    requestType: gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.ProgmatCoinGrantWhiteAndBlackListerRequest,
    responseType: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransactionResponse,
    requestSerialize: serialize_adamant_teller_v1_ProgmatCoinGrantWhiteAndBlackListerRequest,
    requestDeserialize: deserialize_adamant_teller_v1_ProgmatCoinGrantWhiteAndBlackListerRequest,
    responseSerialize: serialize_adamant_global_v1_CreateTransactionResponse,
    responseDeserialize: deserialize_adamant_global_v1_CreateTransactionResponse,
  },
  progmatCoinUpgradeToAndCall: {
    path: '/adamant.teller.v1.TellerAPI/ProgmatCoinUpgradeToAndCall',
    requestStream: false,
    responseStream: false,
    requestType: gincoinc_adamant_teller_v1_adamanttellerv1_teller_api_pb.ProgmatCoinUpgradeToAndCallRequest,
    responseType: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransactionResponse,
    requestSerialize: serialize_adamant_teller_v1_ProgmatCoinUpgradeToAndCallRequest,
    requestDeserialize: deserialize_adamant_teller_v1_ProgmatCoinUpgradeToAndCallRequest,
    responseSerialize: serialize_adamant_global_v1_CreateTransactionResponse,
    responseDeserialize: deserialize_adamant_global_v1_CreateTransactionResponse,
  },
  // PreTransactionThreshold
listPreTransactionThresholdsByFilter: {
    path: '/adamant.teller.v1.TellerAPI/ListPreTransactionThresholdsByFilter',
    requestStream: false,
    responseStream: false,
    requestType: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListPreTransactionThresholdsByFilterRequest,
    responseType: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListPreTransactionThresholdsByFilterResponse,
    requestSerialize: serialize_adamant_global_v1_ListPreTransactionThresholdsByFilterRequest,
    requestDeserialize: deserialize_adamant_global_v1_ListPreTransactionThresholdsByFilterRequest,
    responseSerialize: serialize_adamant_global_v1_ListPreTransactionThresholdsByFilterResponse,
    responseDeserialize: deserialize_adamant_global_v1_ListPreTransactionThresholdsByFilterResponse,
  },
};

exports.TellerAPIClient = grpc.makeGenericClientConstructor(TellerAPIService);
