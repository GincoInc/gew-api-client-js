// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb = require('../../../../../gincoinc/adamant/global/v1/adamantglobalv1/global_api_pb.js');
var gincoinc_adamant_global_v1_adamantglobalv1_audit_logger_pb = require('../../../../../gincoinc/adamant/global/v1/adamantglobalv1/audit_logger_pb.js');
var gincoinc_adamant_global_v1_adamantglobalv1_enum_pb = require('../../../../../gincoinc/adamant/global/v1/adamantglobalv1/enum_pb.js');
var gincoinc_adamant_global_v1_adamantglobalv1_model_pb = require('../../../../../gincoinc/adamant/global/v1/adamantglobalv1/model_pb.js');
var gincoinc_global_v1_gincoincglobalv1_enum_pb = require('../../../../../gincoinc/global/v1/gincoincglobalv1/enum_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
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

function serialize_adamant_global_v1_ApproveTransactionRequest(arg) {
  if (!(arg instanceof gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ApproveTransactionRequest)) {
    throw new Error('Expected argument of type adamant.global.v1.ApproveTransactionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_adamant_global_v1_ApproveTransactionRequest(buffer_arg) {
  return gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ApproveTransactionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_adamant_global_v1_ApproveWalletRequest(arg) {
  if (!(arg instanceof gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ApproveWalletRequest)) {
    throw new Error('Expected argument of type adamant.global.v1.ApproveWalletRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_adamant_global_v1_ApproveWalletRequest(buffer_arg) {
  return gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ApproveWalletRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_adamant_global_v1_ArchiveWalletRequest(arg) {
  if (!(arg instanceof gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ArchiveWalletRequest)) {
    throw new Error('Expected argument of type adamant.global.v1.ArchiveWalletRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_adamant_global_v1_ArchiveWalletRequest(buffer_arg) {
  return gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ArchiveWalletRequest.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_adamant_global_v1_CancelWalletRequest(arg) {
  if (!(arg instanceof gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CancelWalletRequest)) {
    throw new Error('Expected argument of type adamant.global.v1.CancelWalletRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_adamant_global_v1_CancelWalletRequest(buffer_arg) {
  return gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CancelWalletRequest.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_adamant_global_v1_CreateLabeledAddressRequest(arg) {
  if (!(arg instanceof gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateLabeledAddressRequest)) {
    throw new Error('Expected argument of type adamant.global.v1.CreateLabeledAddressRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_adamant_global_v1_CreateLabeledAddressRequest(buffer_arg) {
  return gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateLabeledAddressRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_adamant_global_v1_CreateLabeledAddressResponse(arg) {
  if (!(arg instanceof gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateLabeledAddressResponse)) {
    throw new Error('Expected argument of type adamant.global.v1.CreateLabeledAddressResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_adamant_global_v1_CreateLabeledAddressResponse(buffer_arg) {
  return gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateLabeledAddressResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_adamant_global_v1_CreatePolicyRequest(arg) {
  if (!(arg instanceof gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreatePolicyRequest)) {
    throw new Error('Expected argument of type adamant.global.v1.CreatePolicyRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_adamant_global_v1_CreatePolicyRequest(buffer_arg) {
  return gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreatePolicyRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_adamant_global_v1_CreatePolicyResponse(arg) {
  if (!(arg instanceof gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreatePolicyResponse)) {
    throw new Error('Expected argument of type adamant.global.v1.CreatePolicyResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_adamant_global_v1_CreatePolicyResponse(buffer_arg) {
  return gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreatePolicyResponse.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_adamant_global_v1_CreateTransferLimitRequest(arg) {
  if (!(arg instanceof gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransferLimitRequest)) {
    throw new Error('Expected argument of type adamant.global.v1.CreateTransferLimitRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_adamant_global_v1_CreateTransferLimitRequest(buffer_arg) {
  return gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransferLimitRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_adamant_global_v1_CreateTransferLimitResponse(arg) {
  if (!(arg instanceof gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransferLimitResponse)) {
    throw new Error('Expected argument of type adamant.global.v1.CreateTransferLimitResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_adamant_global_v1_CreateTransferLimitResponse(buffer_arg) {
  return gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransferLimitResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_adamant_global_v1_CreateWalletGroupRequest(arg) {
  if (!(arg instanceof gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateWalletGroupRequest)) {
    throw new Error('Expected argument of type adamant.global.v1.CreateWalletGroupRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_adamant_global_v1_CreateWalletGroupRequest(buffer_arg) {
  return gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateWalletGroupRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_adamant_global_v1_CreateWalletGroupResponse(arg) {
  if (!(arg instanceof gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateWalletGroupResponse)) {
    throw new Error('Expected argument of type adamant.global.v1.CreateWalletGroupResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_adamant_global_v1_CreateWalletGroupResponse(buffer_arg) {
  return gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateWalletGroupResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_adamant_global_v1_CreateWalletRequest(arg) {
  if (!(arg instanceof gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateWalletRequest)) {
    throw new Error('Expected argument of type adamant.global.v1.CreateWalletRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_adamant_global_v1_CreateWalletRequest(buffer_arg) {
  return gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateWalletRequest.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_adamant_global_v1_CreateWhitelistRequest(arg) {
  if (!(arg instanceof gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateWhitelistRequest)) {
    throw new Error('Expected argument of type adamant.global.v1.CreateWhitelistRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_adamant_global_v1_CreateWhitelistRequest(buffer_arg) {
  return gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateWhitelistRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_adamant_global_v1_CreateWhitelistResponse(arg) {
  if (!(arg instanceof gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateWhitelistResponse)) {
    throw new Error('Expected argument of type adamant.global.v1.CreateWhitelistResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_adamant_global_v1_CreateWhitelistResponse(buffer_arg) {
  return gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateWhitelistResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_adamant_global_v1_CreateXRPInitTransactionsRequest(arg) {
  if (!(arg instanceof gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateXRPInitTransactionsRequest)) {
    throw new Error('Expected argument of type adamant.global.v1.CreateXRPInitTransactionsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_adamant_global_v1_CreateXRPInitTransactionsRequest(buffer_arg) {
  return gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateXRPInitTransactionsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_adamant_global_v1_DeleteLabeledAddressRequest(arg) {
  if (!(arg instanceof gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.DeleteLabeledAddressRequest)) {
    throw new Error('Expected argument of type adamant.global.v1.DeleteLabeledAddressRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_adamant_global_v1_DeleteLabeledAddressRequest(buffer_arg) {
  return gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.DeleteLabeledAddressRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_adamant_global_v1_DeletePolicyRequest(arg) {
  if (!(arg instanceof gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.DeletePolicyRequest)) {
    throw new Error('Expected argument of type adamant.global.v1.DeletePolicyRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_adamant_global_v1_DeletePolicyRequest(buffer_arg) {
  return gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.DeletePolicyRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_adamant_global_v1_DeleteTransferLimitRequest(arg) {
  if (!(arg instanceof gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.DeleteTransferLimitRequest)) {
    throw new Error('Expected argument of type adamant.global.v1.DeleteTransferLimitRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_adamant_global_v1_DeleteTransferLimitRequest(buffer_arg) {
  return gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.DeleteTransferLimitRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_adamant_global_v1_DeleteWhitelistRequest(arg) {
  if (!(arg instanceof gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.DeleteWhitelistRequest)) {
    throw new Error('Expected argument of type adamant.global.v1.DeleteWhitelistRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_adamant_global_v1_DeleteWhitelistRequest(buffer_arg) {
  return gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.DeleteWhitelistRequest.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_adamant_global_v1_GetEthereumFeeAddressRequest(arg) {
  if (!(arg instanceof gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetEthereumFeeAddressRequest)) {
    throw new Error('Expected argument of type adamant.global.v1.GetEthereumFeeAddressRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_adamant_global_v1_GetEthereumFeeAddressRequest(buffer_arg) {
  return gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetEthereumFeeAddressRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_adamant_global_v1_GetLabeledAddressRequest(arg) {
  if (!(arg instanceof gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetLabeledAddressRequest)) {
    throw new Error('Expected argument of type adamant.global.v1.GetLabeledAddressRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_adamant_global_v1_GetLabeledAddressRequest(buffer_arg) {
  return gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetLabeledAddressRequest.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_adamant_global_v1_GetMembersDeactivatabilitiesRequest(arg) {
  if (!(arg instanceof gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetMembersDeactivatabilitiesRequest)) {
    throw new Error('Expected argument of type adamant.global.v1.GetMembersDeactivatabilitiesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_adamant_global_v1_GetMembersDeactivatabilitiesRequest(buffer_arg) {
  return gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetMembersDeactivatabilitiesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_adamant_global_v1_GetMembersDeactivatabilitiesResponse(arg) {
  if (!(arg instanceof gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetMembersDeactivatabilitiesResponse)) {
    throw new Error('Expected argument of type adamant.global.v1.GetMembersDeactivatabilitiesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_adamant_global_v1_GetMembersDeactivatabilitiesResponse(buffer_arg) {
  return gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetMembersDeactivatabilitiesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_adamant_global_v1_GetPolicyRequest(arg) {
  if (!(arg instanceof gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetPolicyRequest)) {
    throw new Error('Expected argument of type adamant.global.v1.GetPolicyRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_adamant_global_v1_GetPolicyRequest(buffer_arg) {
  return gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetPolicyRequest.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_adamant_global_v1_GetSignInfoRequest(arg) {
  if (!(arg instanceof gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetSignInfoRequest)) {
    throw new Error('Expected argument of type adamant.global.v1.GetSignInfoRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_adamant_global_v1_GetSignInfoRequest(buffer_arg) {
  return gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetSignInfoRequest.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_adamant_global_v1_GetTotalBalanceRequest(arg) {
  if (!(arg instanceof gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetTotalBalanceRequest)) {
    throw new Error('Expected argument of type adamant.global.v1.GetTotalBalanceRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_adamant_global_v1_GetTotalBalanceRequest(buffer_arg) {
  return gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetTotalBalanceRequest.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_adamant_global_v1_GetTransferLimitRequest(arg) {
  if (!(arg instanceof gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetTransferLimitRequest)) {
    throw new Error('Expected argument of type adamant.global.v1.GetTransferLimitRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_adamant_global_v1_GetTransferLimitRequest(buffer_arg) {
  return gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetTransferLimitRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_adamant_global_v1_GetWalletGroupRequest(arg) {
  if (!(arg instanceof gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetWalletGroupRequest)) {
    throw new Error('Expected argument of type adamant.global.v1.GetWalletGroupRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_adamant_global_v1_GetWalletGroupRequest(buffer_arg) {
  return gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetWalletGroupRequest.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_adamant_global_v1_GetWhitelistRequest(arg) {
  if (!(arg instanceof gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetWhitelistRequest)) {
    throw new Error('Expected argument of type adamant.global.v1.GetWhitelistRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_adamant_global_v1_GetWhitelistRequest(buffer_arg) {
  return gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetWhitelistRequest.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_adamant_global_v1_IsDeletableLabeledAddressRequest(arg) {
  if (!(arg instanceof gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.IsDeletableLabeledAddressRequest)) {
    throw new Error('Expected argument of type adamant.global.v1.IsDeletableLabeledAddressRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_adamant_global_v1_IsDeletableLabeledAddressRequest(buffer_arg) {
  return gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.IsDeletableLabeledAddressRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_adamant_global_v1_IsDeletableLabeledAddressResponse(arg) {
  if (!(arg instanceof gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.IsDeletableLabeledAddressResponse)) {
    throw new Error('Expected argument of type adamant.global.v1.IsDeletableLabeledAddressResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_adamant_global_v1_IsDeletableLabeledAddressResponse(buffer_arg) {
  return gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.IsDeletableLabeledAddressResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_adamant_global_v1_IsDeletablePolicyRequest(arg) {
  if (!(arg instanceof gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.IsDeletablePolicyRequest)) {
    throw new Error('Expected argument of type adamant.global.v1.IsDeletablePolicyRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_adamant_global_v1_IsDeletablePolicyRequest(buffer_arg) {
  return gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.IsDeletablePolicyRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_adamant_global_v1_IsDeletablePolicyResponse(arg) {
  if (!(arg instanceof gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.IsDeletablePolicyResponse)) {
    throw new Error('Expected argument of type adamant.global.v1.IsDeletablePolicyResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_adamant_global_v1_IsDeletablePolicyResponse(buffer_arg) {
  return gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.IsDeletablePolicyResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_adamant_global_v1_IsDeletableTransferLimitRequest(arg) {
  if (!(arg instanceof gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.IsDeletableTransferLimitRequest)) {
    throw new Error('Expected argument of type adamant.global.v1.IsDeletableTransferLimitRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_adamant_global_v1_IsDeletableTransferLimitRequest(buffer_arg) {
  return gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.IsDeletableTransferLimitRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_adamant_global_v1_IsDeletableTransferLimitResponse(arg) {
  if (!(arg instanceof gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.IsDeletableTransferLimitResponse)) {
    throw new Error('Expected argument of type adamant.global.v1.IsDeletableTransferLimitResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_adamant_global_v1_IsDeletableTransferLimitResponse(buffer_arg) {
  return gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.IsDeletableTransferLimitResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_adamant_global_v1_IsDeletableWhitelistRequest(arg) {
  if (!(arg instanceof gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.IsDeletableWhitelistRequest)) {
    throw new Error('Expected argument of type adamant.global.v1.IsDeletableWhitelistRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_adamant_global_v1_IsDeletableWhitelistRequest(buffer_arg) {
  return gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.IsDeletableWhitelistRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_adamant_global_v1_IsDeletableWhitelistResponse(arg) {
  if (!(arg instanceof gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.IsDeletableWhitelistResponse)) {
    throw new Error('Expected argument of type adamant.global.v1.IsDeletableWhitelistResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_adamant_global_v1_IsDeletableWhitelistResponse(buffer_arg) {
  return gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.IsDeletableWhitelistResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_adamant_global_v1_LabeledAddress(arg) {
  if (!(arg instanceof gincoinc_adamant_global_v1_adamantglobalv1_model_pb.LabeledAddress)) {
    throw new Error('Expected argument of type adamant.global.v1.LabeledAddress');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_adamant_global_v1_LabeledAddress(buffer_arg) {
  return gincoinc_adamant_global_v1_adamantglobalv1_model_pb.LabeledAddress.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_adamant_global_v1_ListAddressesWithBalanceRequest(arg) {
  if (!(arg instanceof gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListAddressesWithBalanceRequest)) {
    throw new Error('Expected argument of type adamant.global.v1.ListAddressesWithBalanceRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_adamant_global_v1_ListAddressesWithBalanceRequest(buffer_arg) {
  return gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListAddressesWithBalanceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_adamant_global_v1_ListAddressesWithBalanceResponse(arg) {
  if (!(arg instanceof gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListAddressesWithBalanceResponse)) {
    throw new Error('Expected argument of type adamant.global.v1.ListAddressesWithBalanceResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_adamant_global_v1_ListAddressesWithBalanceResponse(buffer_arg) {
  return gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListAddressesWithBalanceResponse.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_adamant_global_v1_ListBalanceSnapshotsRequest(arg) {
  if (!(arg instanceof gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListBalanceSnapshotsRequest)) {
    throw new Error('Expected argument of type adamant.global.v1.ListBalanceSnapshotsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_adamant_global_v1_ListBalanceSnapshotsRequest(buffer_arg) {
  return gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListBalanceSnapshotsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_adamant_global_v1_ListBalanceSnapshotsResponse(arg) {
  if (!(arg instanceof gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListBalanceSnapshotsResponse)) {
    throw new Error('Expected argument of type adamant.global.v1.ListBalanceSnapshotsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_adamant_global_v1_ListBalanceSnapshotsResponse(buffer_arg) {
  return gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListBalanceSnapshotsResponse.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_adamant_global_v1_ListCallersRequest(arg) {
  if (!(arg instanceof gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListCallersRequest)) {
    throw new Error('Expected argument of type adamant.global.v1.ListCallersRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_adamant_global_v1_ListCallersRequest(buffer_arg) {
  return gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListCallersRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_adamant_global_v1_ListCallersResponse(arg) {
  if (!(arg instanceof gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListCallersResponse)) {
    throw new Error('Expected argument of type adamant.global.v1.ListCallersResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_adamant_global_v1_ListCallersResponse(buffer_arg) {
  return gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListCallersResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_adamant_global_v1_ListIOSTChildAccountsRequest(arg) {
  if (!(arg instanceof gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListIOSTChildAccountsRequest)) {
    throw new Error('Expected argument of type adamant.global.v1.ListIOSTChildAccountsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_adamant_global_v1_ListIOSTChildAccountsRequest(buffer_arg) {
  return gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListIOSTChildAccountsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_adamant_global_v1_ListIOSTChildAccountsResponse(arg) {
  if (!(arg instanceof gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListIOSTChildAccountsResponse)) {
    throw new Error('Expected argument of type adamant.global.v1.ListIOSTChildAccountsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_adamant_global_v1_ListIOSTChildAccountsResponse(buffer_arg) {
  return gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListIOSTChildAccountsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_adamant_global_v1_ListLabeledAddressesRequest(arg) {
  if (!(arg instanceof gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListLabeledAddressesRequest)) {
    throw new Error('Expected argument of type adamant.global.v1.ListLabeledAddressesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_adamant_global_v1_ListLabeledAddressesRequest(buffer_arg) {
  return gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListLabeledAddressesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_adamant_global_v1_ListLabeledAddressesResponse(arg) {
  if (!(arg instanceof gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListLabeledAddressesResponse)) {
    throw new Error('Expected argument of type adamant.global.v1.ListLabeledAddressesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_adamant_global_v1_ListLabeledAddressesResponse(buffer_arg) {
  return gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListLabeledAddressesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_adamant_global_v1_ListPoliciesRequest(arg) {
  if (!(arg instanceof gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListPoliciesRequest)) {
    throw new Error('Expected argument of type adamant.global.v1.ListPoliciesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_adamant_global_v1_ListPoliciesRequest(buffer_arg) {
  return gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListPoliciesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_adamant_global_v1_ListPoliciesResponse(arg) {
  if (!(arg instanceof gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListPoliciesResponse)) {
    throw new Error('Expected argument of type adamant.global.v1.ListPoliciesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_adamant_global_v1_ListPoliciesResponse(buffer_arg) {
  return gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListPoliciesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_adamant_global_v1_ListSignInfoRequest(arg) {
  if (!(arg instanceof gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListSignInfoRequest)) {
    throw new Error('Expected argument of type adamant.global.v1.ListSignInfoRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_adamant_global_v1_ListSignInfoRequest(buffer_arg) {
  return gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListSignInfoRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_adamant_global_v1_ListSignInfoResponse(arg) {
  if (!(arg instanceof gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListSignInfoResponse)) {
    throw new Error('Expected argument of type adamant.global.v1.ListSignInfoResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_adamant_global_v1_ListSignInfoResponse(buffer_arg) {
  return gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListSignInfoResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_adamant_global_v1_ListSubstrateChildAddressesRequest(arg) {
  if (!(arg instanceof gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListSubstrateChildAddressesRequest)) {
    throw new Error('Expected argument of type adamant.global.v1.ListSubstrateChildAddressesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_adamant_global_v1_ListSubstrateChildAddressesRequest(buffer_arg) {
  return gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListSubstrateChildAddressesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_adamant_global_v1_ListSubstrateChildAddressesResponse(arg) {
  if (!(arg instanceof gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListSubstrateChildAddressesResponse)) {
    throw new Error('Expected argument of type adamant.global.v1.ListSubstrateChildAddressesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_adamant_global_v1_ListSubstrateChildAddressesResponse(buffer_arg) {
  return gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListSubstrateChildAddressesResponse.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_adamant_global_v1_ListTransferLimitsRequest(arg) {
  if (!(arg instanceof gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListTransferLimitsRequest)) {
    throw new Error('Expected argument of type adamant.global.v1.ListTransferLimitsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_adamant_global_v1_ListTransferLimitsRequest(buffer_arg) {
  return gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListTransferLimitsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_adamant_global_v1_ListTransferLimitsResponse(arg) {
  if (!(arg instanceof gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListTransferLimitsResponse)) {
    throw new Error('Expected argument of type adamant.global.v1.ListTransferLimitsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_adamant_global_v1_ListTransferLimitsResponse(buffer_arg) {
  return gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListTransferLimitsResponse.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_adamant_global_v1_ListWalletGroupsRequest(arg) {
  if (!(arg instanceof gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListWalletGroupsRequest)) {
    throw new Error('Expected argument of type adamant.global.v1.ListWalletGroupsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_adamant_global_v1_ListWalletGroupsRequest(buffer_arg) {
  return gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListWalletGroupsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_adamant_global_v1_ListWalletGroupsResponse(arg) {
  if (!(arg instanceof gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListWalletGroupsResponse)) {
    throw new Error('Expected argument of type adamant.global.v1.ListWalletGroupsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_adamant_global_v1_ListWalletGroupsResponse(buffer_arg) {
  return gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListWalletGroupsResponse.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_adamant_global_v1_ListWhitelistsRequest(arg) {
  if (!(arg instanceof gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListWhitelistsRequest)) {
    throw new Error('Expected argument of type adamant.global.v1.ListWhitelistsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_adamant_global_v1_ListWhitelistsRequest(buffer_arg) {
  return gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListWhitelistsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_adamant_global_v1_ListWhitelistsResponse(arg) {
  if (!(arg instanceof gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListWhitelistsResponse)) {
    throw new Error('Expected argument of type adamant.global.v1.ListWhitelistsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_adamant_global_v1_ListWhitelistsResponse(buffer_arg) {
  return gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListWhitelistsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_adamant_global_v1_ListXRPInitSignInfoRequest(arg) {
  if (!(arg instanceof gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListXRPInitSignInfoRequest)) {
    throw new Error('Expected argument of type adamant.global.v1.ListXRPInitSignInfoRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_adamant_global_v1_ListXRPInitSignInfoRequest(buffer_arg) {
  return gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListXRPInitSignInfoRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_adamant_global_v1_ListXRPInitSignInfoResponse(arg) {
  if (!(arg instanceof gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListXRPInitSignInfoResponse)) {
    throw new Error('Expected argument of type adamant.global.v1.ListXRPInitSignInfoResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_adamant_global_v1_ListXRPInitSignInfoResponse(buffer_arg) {
  return gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListXRPInitSignInfoResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_adamant_global_v1_Policy(arg) {
  if (!(arg instanceof gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Policy)) {
    throw new Error('Expected argument of type adamant.global.v1.Policy');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_adamant_global_v1_Policy(buffer_arg) {
  return gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Policy.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_adamant_global_v1_RegisterKeyRequest(arg) {
  if (!(arg instanceof gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.RegisterKeyRequest)) {
    throw new Error('Expected argument of type adamant.global.v1.RegisterKeyRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_adamant_global_v1_RegisterKeyRequest(buffer_arg) {
  return gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.RegisterKeyRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_adamant_global_v1_RegisterKeyResponse(arg) {
  if (!(arg instanceof gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.RegisterKeyResponse)) {
    throw new Error('Expected argument of type adamant.global.v1.RegisterKeyResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_adamant_global_v1_RegisterKeyResponse(buffer_arg) {
  return gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.RegisterKeyResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_adamant_global_v1_ReviewLabeledAddressProposalRequest(arg) {
  if (!(arg instanceof gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ReviewLabeledAddressProposalRequest)) {
    throw new Error('Expected argument of type adamant.global.v1.ReviewLabeledAddressProposalRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_adamant_global_v1_ReviewLabeledAddressProposalRequest(buffer_arg) {
  return gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ReviewLabeledAddressProposalRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_adamant_global_v1_ReviewPolicyProposalRequest(arg) {
  if (!(arg instanceof gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ReviewPolicyProposalRequest)) {
    throw new Error('Expected argument of type adamant.global.v1.ReviewPolicyProposalRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_adamant_global_v1_ReviewPolicyProposalRequest(buffer_arg) {
  return gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ReviewPolicyProposalRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_adamant_global_v1_ReviewTransferLimitProposalRequest(arg) {
  if (!(arg instanceof gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ReviewTransferLimitProposalRequest)) {
    throw new Error('Expected argument of type adamant.global.v1.ReviewTransferLimitProposalRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_adamant_global_v1_ReviewTransferLimitProposalRequest(buffer_arg) {
  return gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ReviewTransferLimitProposalRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_adamant_global_v1_ReviewWalletProposalRequest(arg) {
  if (!(arg instanceof gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ReviewWalletProposalRequest)) {
    throw new Error('Expected argument of type adamant.global.v1.ReviewWalletProposalRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_adamant_global_v1_ReviewWalletProposalRequest(buffer_arg) {
  return gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ReviewWalletProposalRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_adamant_global_v1_SendTransactionRequest(arg) {
  if (!(arg instanceof gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.SendTransactionRequest)) {
    throw new Error('Expected argument of type adamant.global.v1.SendTransactionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_adamant_global_v1_SendTransactionRequest(buffer_arg) {
  return gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.SendTransactionRequest.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_adamant_global_v1_SendXRPInitTransactionsRequest(arg) {
  if (!(arg instanceof gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.SendXRPInitTransactionsRequest)) {
    throw new Error('Expected argument of type adamant.global.v1.SendXRPInitTransactionsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_adamant_global_v1_SendXRPInitTransactionsRequest(buffer_arg) {
  return gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.SendXRPInitTransactionsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_adamant_global_v1_SendXRPInitTransactionsResponse(arg) {
  if (!(arg instanceof gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.SendXRPInitTransactionsResponse)) {
    throw new Error('Expected argument of type adamant.global.v1.SendXRPInitTransactionsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_adamant_global_v1_SendXRPInitTransactionsResponse(buffer_arg) {
  return gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.SendXRPInitTransactionsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_adamant_global_v1_SetDefaultRatesRequest(arg) {
  if (!(arg instanceof gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.SetDefaultRatesRequest)) {
    throw new Error('Expected argument of type adamant.global.v1.SetDefaultRatesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_adamant_global_v1_SetDefaultRatesRequest(buffer_arg) {
  return gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.SetDefaultRatesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_adamant_global_v1_SetDefaultRatesResponse(arg) {
  if (!(arg instanceof gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.SetDefaultRatesResponse)) {
    throw new Error('Expected argument of type adamant.global.v1.SetDefaultRatesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_adamant_global_v1_SetDefaultRatesResponse(buffer_arg) {
  return gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.SetDefaultRatesResponse.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_adamant_global_v1_SignInfo(arg) {
  if (!(arg instanceof gincoinc_adamant_global_v1_adamantglobalv1_model_pb.SignInfo)) {
    throw new Error('Expected argument of type adamant.global.v1.SignInfo');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_adamant_global_v1_SignInfo(buffer_arg) {
  return gincoinc_adamant_global_v1_adamantglobalv1_model_pb.SignInfo.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_adamant_global_v1_SignTransactionRequest(arg) {
  if (!(arg instanceof gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.SignTransactionRequest)) {
    throw new Error('Expected argument of type adamant.global.v1.SignTransactionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_adamant_global_v1_SignTransactionRequest(buffer_arg) {
  return gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.SignTransactionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_adamant_global_v1_SignXRPInitTransactionsRequest(arg) {
  if (!(arg instanceof gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.SignXRPInitTransactionsRequest)) {
    throw new Error('Expected argument of type adamant.global.v1.SignXRPInitTransactionsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_adamant_global_v1_SignXRPInitTransactionsRequest(buffer_arg) {
  return gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.SignXRPInitTransactionsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_adamant_global_v1_TotalBalance(arg) {
  if (!(arg instanceof gincoinc_adamant_global_v1_adamantglobalv1_model_pb.TotalBalance)) {
    throw new Error('Expected argument of type adamant.global.v1.TotalBalance');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_adamant_global_v1_TotalBalance(buffer_arg) {
  return gincoinc_adamant_global_v1_adamantglobalv1_model_pb.TotalBalance.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_adamant_global_v1_TransferLimit(arg) {
  if (!(arg instanceof gincoinc_adamant_global_v1_adamantglobalv1_model_pb.TransferLimit)) {
    throw new Error('Expected argument of type adamant.global.v1.TransferLimit');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_adamant_global_v1_TransferLimit(buffer_arg) {
  return gincoinc_adamant_global_v1_adamantglobalv1_model_pb.TransferLimit.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_adamant_global_v1_UnArchiveWalletRequest(arg) {
  if (!(arg instanceof gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UnArchiveWalletRequest)) {
    throw new Error('Expected argument of type adamant.global.v1.UnArchiveWalletRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_adamant_global_v1_UnArchiveWalletRequest(buffer_arg) {
  return gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UnArchiveWalletRequest.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_adamant_global_v1_UpdateLabeledAddressRequest(arg) {
  if (!(arg instanceof gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpdateLabeledAddressRequest)) {
    throw new Error('Expected argument of type adamant.global.v1.UpdateLabeledAddressRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_adamant_global_v1_UpdateLabeledAddressRequest(buffer_arg) {
  return gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpdateLabeledAddressRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_adamant_global_v1_UpdatePolicyRequest(arg) {
  if (!(arg instanceof gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpdatePolicyRequest)) {
    throw new Error('Expected argument of type adamant.global.v1.UpdatePolicyRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_adamant_global_v1_UpdatePolicyRequest(buffer_arg) {
  return gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpdatePolicyRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_adamant_global_v1_UpdateTransferLimitNameRequest(arg) {
  if (!(arg instanceof gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpdateTransferLimitNameRequest)) {
    throw new Error('Expected argument of type adamant.global.v1.UpdateTransferLimitNameRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_adamant_global_v1_UpdateTransferLimitNameRequest(buffer_arg) {
  return gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpdateTransferLimitNameRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_adamant_global_v1_UpdateTransferLimitRequest(arg) {
  if (!(arg instanceof gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpdateTransferLimitRequest)) {
    throw new Error('Expected argument of type adamant.global.v1.UpdateTransferLimitRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_adamant_global_v1_UpdateTransferLimitRequest(buffer_arg) {
  return gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpdateTransferLimitRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_adamant_global_v1_UpdateWalletGroupNameRequest(arg) {
  if (!(arg instanceof gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpdateWalletGroupNameRequest)) {
    throw new Error('Expected argument of type adamant.global.v1.UpdateWalletGroupNameRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_adamant_global_v1_UpdateWalletGroupNameRequest(buffer_arg) {
  return gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpdateWalletGroupNameRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_adamant_global_v1_UpdateWalletGroupRequest(arg) {
  if (!(arg instanceof gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpdateWalletGroupRequest)) {
    throw new Error('Expected argument of type adamant.global.v1.UpdateWalletGroupRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_adamant_global_v1_UpdateWalletGroupRequest(buffer_arg) {
  return gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpdateWalletGroupRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_adamant_global_v1_UpdateWalletNameRequest(arg) {
  if (!(arg instanceof gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpdateWalletNameRequest)) {
    throw new Error('Expected argument of type adamant.global.v1.UpdateWalletNameRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_adamant_global_v1_UpdateWalletNameRequest(buffer_arg) {
  return gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpdateWalletNameRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_adamant_global_v1_UpdateWalletPolicyRequest(arg) {
  if (!(arg instanceof gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpdateWalletPolicyRequest)) {
    throw new Error('Expected argument of type adamant.global.v1.UpdateWalletPolicyRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_adamant_global_v1_UpdateWalletPolicyRequest(buffer_arg) {
  return gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpdateWalletPolicyRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_adamant_global_v1_UpdateWalletValidationRequest(arg) {
  if (!(arg instanceof gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpdateWalletValidationRequest)) {
    throw new Error('Expected argument of type adamant.global.v1.UpdateWalletValidationRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_adamant_global_v1_UpdateWalletValidationRequest(buffer_arg) {
  return gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpdateWalletValidationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_adamant_global_v1_UpdateWhitelistAddressesRequest(arg) {
  if (!(arg instanceof gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpdateWhitelistAddressesRequest)) {
    throw new Error('Expected argument of type adamant.global.v1.UpdateWhitelistAddressesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_adamant_global_v1_UpdateWhitelistAddressesRequest(buffer_arg) {
  return gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpdateWhitelistAddressesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_adamant_global_v1_UpdateWhitelistRequest(arg) {
  if (!(arg instanceof gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpdateWhitelistRequest)) {
    throw new Error('Expected argument of type adamant.global.v1.UpdateWhitelistRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_adamant_global_v1_UpdateWhitelistRequest(buffer_arg) {
  return gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpdateWhitelistRequest.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_adamant_global_v1_WalletGroup(arg) {
  if (!(arg instanceof gincoinc_adamant_global_v1_adamantglobalv1_model_pb.WalletGroup)) {
    throw new Error('Expected argument of type adamant.global.v1.WalletGroup');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_adamant_global_v1_WalletGroup(buffer_arg) {
  return gincoinc_adamant_global_v1_adamantglobalv1_model_pb.WalletGroup.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_adamant_global_v1_Whitelist(arg) {
  if (!(arg instanceof gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Whitelist)) {
    throw new Error('Expected argument of type adamant.global.v1.Whitelist');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_adamant_global_v1_Whitelist(buffer_arg) {
  return gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Whitelist.deserializeBinary(new Uint8Array(buffer_arg));
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
var GlobalAPIService = exports.GlobalAPIService = {
  // Wallet
createWallet: {
    path: '/adamant.global.v1.GlobalAPI/CreateWallet',
    requestStream: false,
    responseStream: false,
    requestType: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateWalletRequest,
    responseType: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateWalletResponse,
    requestSerialize: serialize_adamant_global_v1_CreateWalletRequest,
    requestDeserialize: deserialize_adamant_global_v1_CreateWalletRequest,
    responseSerialize: serialize_adamant_global_v1_CreateWalletResponse,
    responseDeserialize: deserialize_adamant_global_v1_CreateWalletResponse,
  },
  // Get wallet information. the wallet model includes balance, address etc.
getWallet: {
    path: '/adamant.global.v1.GlobalAPI/GetWallet',
    requestStream: false,
    responseStream: false,
    requestType: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetWalletRequest,
    responseType: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Wallet,
    requestSerialize: serialize_adamant_global_v1_GetWalletRequest,
    requestDeserialize: deserialize_adamant_global_v1_GetWalletRequest,
    responseSerialize: serialize_adamant_global_v1_Wallet,
    responseDeserialize: deserialize_adamant_global_v1_Wallet,
  },
  cancelWallet: {
    path: '/adamant.global.v1.GlobalAPI/CancelWallet',
    requestStream: false,
    responseStream: false,
    requestType: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CancelWalletRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_adamant_global_v1_CancelWalletRequest,
    requestDeserialize: deserialize_adamant_global_v1_CancelWalletRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  archiveWallet: {
    path: '/adamant.global.v1.GlobalAPI/ArchiveWallet',
    requestStream: false,
    responseStream: false,
    requestType: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ArchiveWalletRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_adamant_global_v1_ArchiveWalletRequest,
    requestDeserialize: deserialize_adamant_global_v1_ArchiveWalletRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  unArchiveWallet: {
    path: '/adamant.global.v1.GlobalAPI/UnArchiveWallet',
    requestStream: false,
    responseStream: false,
    requestType: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UnArchiveWalletRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_adamant_global_v1_UnArchiveWalletRequest,
    requestDeserialize: deserialize_adamant_global_v1_UnArchiveWalletRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  listWallets: {
    path: '/adamant.global.v1.GlobalAPI/ListWallets',
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
    path: '/adamant.global.v1.GlobalAPI/ListWalletsByFilter',
    requestStream: false,
    responseStream: false,
    requestType: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListWalletsByFilterRequest,
    responseType: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListWalletsResponse,
    requestSerialize: serialize_adamant_global_v1_ListWalletsByFilterRequest,
    requestDeserialize: deserialize_adamant_global_v1_ListWalletsByFilterRequest,
    responseSerialize: serialize_adamant_global_v1_ListWalletsResponse,
    responseDeserialize: deserialize_adamant_global_v1_ListWalletsResponse,
  },
  listBaseWallets: {
    path: '/adamant.global.v1.GlobalAPI/ListBaseWallets',
    requestStream: false,
    responseStream: false,
    requestType: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListBaseWalletsRequest,
    responseType: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListBaseWalletsResponse,
    requestSerialize: serialize_adamant_global_v1_ListBaseWalletsRequest,
    requestDeserialize: deserialize_adamant_global_v1_ListBaseWalletsRequest,
    responseSerialize: serialize_adamant_global_v1_ListBaseWalletsResponse,
    responseDeserialize: deserialize_adamant_global_v1_ListBaseWalletsResponse,
  },
  updateWalletName: {
    path: '/adamant.global.v1.GlobalAPI/UpdateWalletName',
    requestStream: false,
    responseStream: false,
    requestType: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpdateWalletNameRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_adamant_global_v1_UpdateWalletNameRequest,
    requestDeserialize: deserialize_adamant_global_v1_UpdateWalletNameRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  updateWalletValidation: {
    path: '/adamant.global.v1.GlobalAPI/UpdateWalletValidation',
    requestStream: false,
    responseStream: false,
    requestType: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpdateWalletValidationRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_adamant_global_v1_UpdateWalletValidationRequest,
    requestDeserialize: deserialize_adamant_global_v1_UpdateWalletValidationRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  updateWalletPolicy: {
    path: '/adamant.global.v1.GlobalAPI/UpdateWalletPolicy',
    requestStream: false,
    responseStream: false,
    requestType: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpdateWalletPolicyRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_adamant_global_v1_UpdateWalletPolicyRequest,
    requestDeserialize: deserialize_adamant_global_v1_UpdateWalletPolicyRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  reviewWalletProposal: {
    path: '/adamant.global.v1.GlobalAPI/ReviewWalletProposal',
    requestStream: false,
    responseStream: false,
    requestType: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ReviewWalletProposalRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_adamant_global_v1_ReviewWalletProposalRequest,
    requestDeserialize: deserialize_adamant_global_v1_ReviewWalletProposalRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  flushBalance: {
    path: '/adamant.global.v1.GlobalAPI/FlushBalance',
    requestStream: false,
    responseStream: false,
    requestType: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.FlushBalanceRequest,
    responseType: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.FlushBalanceResponse,
    requestSerialize: serialize_adamant_global_v1_FlushBalanceRequest,
    requestDeserialize: deserialize_adamant_global_v1_FlushBalanceRequest,
    responseSerialize: serialize_adamant_global_v1_FlushBalanceResponse,
    responseDeserialize: deserialize_adamant_global_v1_FlushBalanceResponse,
  },
  createWalletGroup: {
    path: '/adamant.global.v1.GlobalAPI/CreateWalletGroup',
    requestStream: false,
    responseStream: false,
    requestType: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateWalletGroupRequest,
    responseType: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateWalletGroupResponse,
    requestSerialize: serialize_adamant_global_v1_CreateWalletGroupRequest,
    requestDeserialize: deserialize_adamant_global_v1_CreateWalletGroupRequest,
    responseSerialize: serialize_adamant_global_v1_CreateWalletGroupResponse,
    responseDeserialize: deserialize_adamant_global_v1_CreateWalletGroupResponse,
  },
  updateWalletGroupName: {
    path: '/adamant.global.v1.GlobalAPI/UpdateWalletGroupName',
    requestStream: false,
    responseStream: false,
    requestType: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpdateWalletGroupNameRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_adamant_global_v1_UpdateWalletGroupNameRequest,
    requestDeserialize: deserialize_adamant_global_v1_UpdateWalletGroupNameRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  updateWalletGroup: {
    path: '/adamant.global.v1.GlobalAPI/UpdateWalletGroup',
    requestStream: false,
    responseStream: false,
    requestType: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpdateWalletGroupRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_adamant_global_v1_UpdateWalletGroupRequest,
    requestDeserialize: deserialize_adamant_global_v1_UpdateWalletGroupRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  getWalletGroup: {
    path: '/adamant.global.v1.GlobalAPI/GetWalletGroup',
    requestStream: false,
    responseStream: false,
    requestType: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetWalletGroupRequest,
    responseType: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.WalletGroup,
    requestSerialize: serialize_adamant_global_v1_GetWalletGroupRequest,
    requestDeserialize: deserialize_adamant_global_v1_GetWalletGroupRequest,
    responseSerialize: serialize_adamant_global_v1_WalletGroup,
    responseDeserialize: deserialize_adamant_global_v1_WalletGroup,
  },
  listWalletGroups: {
    path: '/adamant.global.v1.GlobalAPI/ListWalletGroups',
    requestStream: false,
    responseStream: false,
    requestType: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListWalletGroupsRequest,
    responseType: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListWalletGroupsResponse,
    requestSerialize: serialize_adamant_global_v1_ListWalletGroupsRequest,
    requestDeserialize: deserialize_adamant_global_v1_ListWalletGroupsRequest,
    responseSerialize: serialize_adamant_global_v1_ListWalletGroupsResponse,
    responseDeserialize: deserialize_adamant_global_v1_ListWalletGroupsResponse,
  },
  // Review
approveWallet: {
    path: '/adamant.global.v1.GlobalAPI/ApproveWallet',
    requestStream: false,
    responseStream: false,
    requestType: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ApproveWalletRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_adamant_global_v1_ApproveWalletRequest,
    requestDeserialize: deserialize_adamant_global_v1_ApproveWalletRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  approveTransaction: {
    path: '/adamant.global.v1.GlobalAPI/ApproveTransaction',
    requestStream: false,
    responseStream: false,
    requestType: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ApproveTransactionRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_adamant_global_v1_ApproveTransactionRequest,
    requestDeserialize: deserialize_adamant_global_v1_ApproveTransactionRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Address
// Create a new address for an existing wallet
createAddress: {
    path: '/adamant.global.v1.GlobalAPI/CreateAddress',
    requestStream: false,
    responseStream: false,
    requestType: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateAddressRequest,
    responseType: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateAddressResponse,
    requestSerialize: serialize_adamant_global_v1_CreateAddressRequest,
    requestDeserialize: deserialize_adamant_global_v1_CreateAddressRequest,
    responseSerialize: serialize_adamant_global_v1_CreateAddressResponse,
    responseDeserialize: deserialize_adamant_global_v1_CreateAddressResponse,
  },
  getAddress: {
    path: '/adamant.global.v1.GlobalAPI/GetAddress',
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
    path: '/adamant.global.v1.GlobalAPI/GetAddressByAddress',
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
    path: '/adamant.global.v1.GlobalAPI/GetAddressByAddressCoin',
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
    path: '/adamant.global.v1.GlobalAPI/GetAddressByIndex',
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
    path: '/adamant.global.v1.GlobalAPI/ListAddresses',
    requestStream: false,
    responseStream: false,
    requestType: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListAddressesRequest,
    responseType: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListAddressesResponse,
    requestSerialize: serialize_adamant_global_v1_ListAddressesRequest,
    requestDeserialize: deserialize_adamant_global_v1_ListAddressesRequest,
    responseSerialize: serialize_adamant_global_v1_ListAddressesResponse,
    responseDeserialize: deserialize_adamant_global_v1_ListAddressesResponse,
  },
  listAddressesWithBalance: {
    path: '/adamant.global.v1.GlobalAPI/ListAddressesWithBalance',
    requestStream: false,
    responseStream: false,
    requestType: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListAddressesWithBalanceRequest,
    responseType: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListAddressesWithBalanceResponse,
    requestSerialize: serialize_adamant_global_v1_ListAddressesWithBalanceRequest,
    requestDeserialize: deserialize_adamant_global_v1_ListAddressesWithBalanceRequest,
    responseSerialize: serialize_adamant_global_v1_ListAddressesWithBalanceResponse,
    responseDeserialize: deserialize_adamant_global_v1_ListAddressesWithBalanceResponse,
  },
  updateAddressBalance: {
    path: '/adamant.global.v1.GlobalAPI/UpdateAddressBalance',
    requestStream: false,
    responseStream: false,
    requestType: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpdateAddressBalanceRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_adamant_global_v1_UpdateAddressBalanceRequest,
    requestDeserialize: deserialize_adamant_global_v1_UpdateAddressBalanceRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Get an address which hold ETH for ethereum wallet/address creation etc
getEthereumFeeAddress: {
    path: '/adamant.global.v1.GlobalAPI/GetEthereumFeeAddress',
    requestStream: false,
    responseStream: false,
    requestType: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetEthereumFeeAddressRequest,
    responseType: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.EthereumFeeAddress,
    requestSerialize: serialize_adamant_global_v1_GetEthereumFeeAddressRequest,
    requestDeserialize: deserialize_adamant_global_v1_GetEthereumFeeAddressRequest,
    responseSerialize: serialize_adamant_global_v1_EthereumFeeAddress,
    responseDeserialize: deserialize_adamant_global_v1_EthereumFeeAddress,
  },
  // Get addresses associated with the Polkadot signer
listSubstrateChildAddresses: {
    path: '/adamant.global.v1.GlobalAPI/ListSubstrateChildAddresses',
    requestStream: false,
    responseStream: false,
    requestType: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListSubstrateChildAddressesRequest,
    responseType: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListSubstrateChildAddressesResponse,
    requestSerialize: serialize_adamant_global_v1_ListSubstrateChildAddressesRequest,
    requestDeserialize: deserialize_adamant_global_v1_ListSubstrateChildAddressesRequest,
    responseSerialize: serialize_adamant_global_v1_ListSubstrateChildAddressesResponse,
    responseDeserialize: deserialize_adamant_global_v1_ListSubstrateChildAddressesResponse,
  },
  listIOSTChildAccounts: {
    path: '/adamant.global.v1.GlobalAPI/ListIOSTChildAccounts',
    requestStream: false,
    responseStream: false,
    requestType: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListIOSTChildAccountsRequest,
    responseType: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListIOSTChildAccountsResponse,
    requestSerialize: serialize_adamant_global_v1_ListIOSTChildAccountsRequest,
    requestDeserialize: deserialize_adamant_global_v1_ListIOSTChildAccountsRequest,
    responseSerialize: serialize_adamant_global_v1_ListIOSTChildAccountsResponse,
    responseDeserialize: deserialize_adamant_global_v1_ListIOSTChildAccountsResponse,
  },
  importAddress: {
    path: '/adamant.global.v1.GlobalAPI/ImportAddress',
    requestStream: false,
    responseStream: false,
    requestType: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ImportAddressRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_adamant_global_v1_ImportAddressRequest,
    requestDeserialize: deserialize_adamant_global_v1_ImportAddressRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  listCallers: {
    path: '/adamant.global.v1.GlobalAPI/ListCallers',
    requestStream: false,
    responseStream: false,
    requestType: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListCallersRequest,
    responseType: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListCallersResponse,
    requestSerialize: serialize_adamant_global_v1_ListCallersRequest,
    requestDeserialize: deserialize_adamant_global_v1_ListCallersRequest,
    responseSerialize: serialize_adamant_global_v1_ListCallersResponse,
    responseDeserialize: deserialize_adamant_global_v1_ListCallersResponse,
  },
  // RegisterKey
registerKey: {
    path: '/adamant.global.v1.GlobalAPI/RegisterKey',
    requestStream: false,
    responseStream: false,
    requestType: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.RegisterKeyRequest,
    responseType: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.RegisterKeyResponse,
    requestSerialize: serialize_adamant_global_v1_RegisterKeyRequest,
    requestDeserialize: deserialize_adamant_global_v1_RegisterKeyRequest,
    responseSerialize: serialize_adamant_global_v1_RegisterKeyResponse,
    responseDeserialize: deserialize_adamant_global_v1_RegisterKeyResponse,
  },
  // Transaction
createTransaction: {
    path: '/adamant.global.v1.GlobalAPI/CreateTransaction',
    requestStream: false,
    responseStream: false,
    requestType: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransactionRequest,
    responseType: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransactionResponse,
    requestSerialize: serialize_adamant_global_v1_CreateTransactionRequest,
    requestDeserialize: deserialize_adamant_global_v1_CreateTransactionRequest,
    responseSerialize: serialize_adamant_global_v1_CreateTransactionResponse,
    responseDeserialize: deserialize_adamant_global_v1_CreateTransactionResponse,
  },
  createXRPInitTransactions: {
    path: '/adamant.global.v1.GlobalAPI/CreateXRPInitTransactions',
    requestStream: false,
    responseStream: false,
    requestType: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateXRPInitTransactionsRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_adamant_global_v1_CreateXRPInitTransactionsRequest,
    requestDeserialize: deserialize_adamant_global_v1_CreateXRPInitTransactionsRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  signTransaction: {
    path: '/adamant.global.v1.GlobalAPI/SignTransaction',
    requestStream: false,
    responseStream: false,
    requestType: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.SignTransactionRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_adamant_global_v1_SignTransactionRequest,
    requestDeserialize: deserialize_adamant_global_v1_SignTransactionRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  signXRPInitTransactions: {
    path: '/adamant.global.v1.GlobalAPI/SignXRPInitTransactions',
    requestStream: false,
    responseStream: false,
    requestType: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.SignXRPInitTransactionsRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_adamant_global_v1_SignXRPInitTransactionsRequest,
    requestDeserialize: deserialize_adamant_global_v1_SignXRPInitTransactionsRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  sendTransaction: {
    path: '/adamant.global.v1.GlobalAPI/SendTransaction',
    requestStream: false,
    responseStream: false,
    requestType: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.SendTransactionRequest,
    responseType: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.SendTransactionResponse,
    requestSerialize: serialize_adamant_global_v1_SendTransactionRequest,
    requestDeserialize: deserialize_adamant_global_v1_SendTransactionRequest,
    responseSerialize: serialize_adamant_global_v1_SendTransactionResponse,
    responseDeserialize: deserialize_adamant_global_v1_SendTransactionResponse,
  },
  sendXRPInitTransactions: {
    path: '/adamant.global.v1.GlobalAPI/SendXRPInitTransactions',
    requestStream: false,
    responseStream: false,
    requestType: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.SendXRPInitTransactionsRequest,
    responseType: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.SendXRPInitTransactionsResponse,
    requestSerialize: serialize_adamant_global_v1_SendXRPInitTransactionsRequest,
    requestDeserialize: deserialize_adamant_global_v1_SendXRPInitTransactionsRequest,
    responseSerialize: serialize_adamant_global_v1_SendXRPInitTransactionsResponse,
    responseDeserialize: deserialize_adamant_global_v1_SendXRPInitTransactionsResponse,
  },
  cancelTransaction: {
    path: '/adamant.global.v1.GlobalAPI/CancelTransaction',
    requestStream: false,
    responseStream: false,
    requestType: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CancelTransactionRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_adamant_global_v1_CancelTransactionRequest,
    requestDeserialize: deserialize_adamant_global_v1_CancelTransactionRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  getTransaction: {
    path: '/adamant.global.v1.GlobalAPI/GetTransaction',
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
    path: '/adamant.global.v1.GlobalAPI/GetTransactionByTxID',
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
    path: '/adamant.global.v1.GlobalAPI/ListTransactions',
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
    path: '/adamant.global.v1.GlobalAPI/ListTransactionsByFilter',
    requestStream: false,
    responseStream: false,
    requestType: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListTransactionsByFilterRequest,
    responseType: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListTransactionsResponse,
    requestSerialize: serialize_adamant_global_v1_ListTransactionsByFilterRequest,
    requestDeserialize: deserialize_adamant_global_v1_ListTransactionsByFilterRequest,
    responseSerialize: serialize_adamant_global_v1_ListTransactionsResponse,
    responseDeserialize: deserialize_adamant_global_v1_ListTransactionsResponse,
  },
  // SignInfo
getSignInfo: {
    path: '/adamant.global.v1.GlobalAPI/GetSignInfo',
    requestStream: false,
    responseStream: false,
    requestType: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetSignInfoRequest,
    responseType: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.SignInfo,
    requestSerialize: serialize_adamant_global_v1_GetSignInfoRequest,
    requestDeserialize: deserialize_adamant_global_v1_GetSignInfoRequest,
    responseSerialize: serialize_adamant_global_v1_SignInfo,
    responseDeserialize: deserialize_adamant_global_v1_SignInfo,
  },
  listSignInfo: {
    path: '/adamant.global.v1.GlobalAPI/ListSignInfo',
    requestStream: false,
    responseStream: false,
    requestType: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListSignInfoRequest,
    responseType: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListSignInfoResponse,
    requestSerialize: serialize_adamant_global_v1_ListSignInfoRequest,
    requestDeserialize: deserialize_adamant_global_v1_ListSignInfoRequest,
    responseSerialize: serialize_adamant_global_v1_ListSignInfoResponse,
    responseDeserialize: deserialize_adamant_global_v1_ListSignInfoResponse,
  },
  listXRPInitSignInfo: {
    path: '/adamant.global.v1.GlobalAPI/ListXRPInitSignInfo',
    requestStream: false,
    responseStream: false,
    requestType: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListXRPInitSignInfoRequest,
    responseType: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListXRPInitSignInfoResponse,
    requestSerialize: serialize_adamant_global_v1_ListXRPInitSignInfoRequest,
    requestDeserialize: deserialize_adamant_global_v1_ListXRPInitSignInfoRequest,
    responseSerialize: serialize_adamant_global_v1_ListXRPInitSignInfoResponse,
    responseDeserialize: deserialize_adamant_global_v1_ListXRPInitSignInfoResponse,
  },
  // Transfer
// List transfers for a given wallet. Ordered by update time desc
listTransfers: {
    path: '/adamant.global.v1.GlobalAPI/ListTransfers',
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
    path: '/adamant.global.v1.GlobalAPI/ListTransfersByFilter',
    requestStream: false,
    responseStream: false,
    requestType: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListTransfersByFilterRequest,
    responseType: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListTransfersResponse,
    requestSerialize: serialize_adamant_global_v1_ListTransfersByFilterRequest,
    requestDeserialize: deserialize_adamant_global_v1_ListTransfersByFilterRequest,
    responseSerialize: serialize_adamant_global_v1_ListTransfersResponse,
    responseDeserialize: deserialize_adamant_global_v1_ListTransfersResponse,
  },
  // Rate
// Get rates by snapshot id
getRateSnapshot: {
    path: '/adamant.global.v1.GlobalAPI/GetRateSnapshot',
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
    path: '/adamant.global.v1.GlobalAPI/GetLatestRateSnapshot',
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
    path: '/adamant.global.v1.GlobalAPI/SetRates',
    requestStream: false,
    responseStream: false,
    requestType: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.SetRatesRequest,
    responseType: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.SetRatesResponse,
    requestSerialize: serialize_adamant_global_v1_SetRatesRequest,
    requestDeserialize: deserialize_adamant_global_v1_SetRatesRequest,
    responseSerialize: serialize_adamant_global_v1_SetRatesResponse,
    responseDeserialize: deserialize_adamant_global_v1_SetRatesResponse,
  },
  setDefaultRates: {
    path: '/adamant.global.v1.GlobalAPI/SetDefaultRates',
    requestStream: false,
    responseStream: false,
    requestType: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.SetDefaultRatesRequest,
    responseType: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.SetDefaultRatesResponse,
    requestSerialize: serialize_adamant_global_v1_SetDefaultRatesRequest,
    requestDeserialize: deserialize_adamant_global_v1_SetDefaultRatesRequest,
    responseSerialize: serialize_adamant_global_v1_SetDefaultRatesResponse,
    responseDeserialize: deserialize_adamant_global_v1_SetDefaultRatesResponse,
  },
  // policy
createLabeledAddress: {
    path: '/adamant.global.v1.GlobalAPI/CreateLabeledAddress',
    requestStream: false,
    responseStream: false,
    requestType: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateLabeledAddressRequest,
    responseType: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateLabeledAddressResponse,
    requestSerialize: serialize_adamant_global_v1_CreateLabeledAddressRequest,
    requestDeserialize: deserialize_adamant_global_v1_CreateLabeledAddressRequest,
    responseSerialize: serialize_adamant_global_v1_CreateLabeledAddressResponse,
    responseDeserialize: deserialize_adamant_global_v1_CreateLabeledAddressResponse,
  },
  getLabeledAddress: {
    path: '/adamant.global.v1.GlobalAPI/GetLabeledAddress',
    requestStream: false,
    responseStream: false,
    requestType: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetLabeledAddressRequest,
    responseType: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.LabeledAddress,
    requestSerialize: serialize_adamant_global_v1_GetLabeledAddressRequest,
    requestDeserialize: deserialize_adamant_global_v1_GetLabeledAddressRequest,
    responseSerialize: serialize_adamant_global_v1_LabeledAddress,
    responseDeserialize: deserialize_adamant_global_v1_LabeledAddress,
  },
  listLabeledAddresses: {
    path: '/adamant.global.v1.GlobalAPI/ListLabeledAddresses',
    requestStream: false,
    responseStream: false,
    requestType: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListLabeledAddressesRequest,
    responseType: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListLabeledAddressesResponse,
    requestSerialize: serialize_adamant_global_v1_ListLabeledAddressesRequest,
    requestDeserialize: deserialize_adamant_global_v1_ListLabeledAddressesRequest,
    responseSerialize: serialize_adamant_global_v1_ListLabeledAddressesResponse,
    responseDeserialize: deserialize_adamant_global_v1_ListLabeledAddressesResponse,
  },
  isDeletableLabeledAddress: {
    path: '/adamant.global.v1.GlobalAPI/IsDeletableLabeledAddress',
    requestStream: false,
    responseStream: false,
    requestType: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.IsDeletableLabeledAddressRequest,
    responseType: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.IsDeletableLabeledAddressResponse,
    requestSerialize: serialize_adamant_global_v1_IsDeletableLabeledAddressRequest,
    requestDeserialize: deserialize_adamant_global_v1_IsDeletableLabeledAddressRequest,
    responseSerialize: serialize_adamant_global_v1_IsDeletableLabeledAddressResponse,
    responseDeserialize: deserialize_adamant_global_v1_IsDeletableLabeledAddressResponse,
  },
  updateLabeledAddress: {
    path: '/adamant.global.v1.GlobalAPI/UpdateLabeledAddress',
    requestStream: false,
    responseStream: false,
    requestType: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpdateLabeledAddressRequest,
    responseType: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.LabeledAddress,
    requestSerialize: serialize_adamant_global_v1_UpdateLabeledAddressRequest,
    requestDeserialize: deserialize_adamant_global_v1_UpdateLabeledAddressRequest,
    responseSerialize: serialize_adamant_global_v1_LabeledAddress,
    responseDeserialize: deserialize_adamant_global_v1_LabeledAddress,
  },
  // buf:lint:ignore RPC_REQUEST_STANDARD_NAME
deleteAddress: {
    path: '/adamant.global.v1.GlobalAPI/DeleteAddress',
    requestStream: false,
    responseStream: false,
    requestType: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.DeleteLabeledAddressRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_adamant_global_v1_DeleteLabeledAddressRequest,
    requestDeserialize: deserialize_adamant_global_v1_DeleteLabeledAddressRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  reviewLabeledAddressProposal: {
    path: '/adamant.global.v1.GlobalAPI/ReviewLabeledAddressProposal',
    requestStream: false,
    responseStream: false,
    requestType: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ReviewLabeledAddressProposalRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_adamant_global_v1_ReviewLabeledAddressProposalRequest,
    requestDeserialize: deserialize_adamant_global_v1_ReviewLabeledAddressProposalRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  createWhitelist: {
    path: '/adamant.global.v1.GlobalAPI/CreateWhitelist',
    requestStream: false,
    responseStream: false,
    requestType: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateWhitelistRequest,
    responseType: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateWhitelistResponse,
    requestSerialize: serialize_adamant_global_v1_CreateWhitelistRequest,
    requestDeserialize: deserialize_adamant_global_v1_CreateWhitelistRequest,
    responseSerialize: serialize_adamant_global_v1_CreateWhitelistResponse,
    responseDeserialize: deserialize_adamant_global_v1_CreateWhitelistResponse,
  },
  getWhitelist: {
    path: '/adamant.global.v1.GlobalAPI/GetWhitelist',
    requestStream: false,
    responseStream: false,
    requestType: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetWhitelistRequest,
    responseType: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Whitelist,
    requestSerialize: serialize_adamant_global_v1_GetWhitelistRequest,
    requestDeserialize: deserialize_adamant_global_v1_GetWhitelistRequest,
    responseSerialize: serialize_adamant_global_v1_Whitelist,
    responseDeserialize: deserialize_adamant_global_v1_Whitelist,
  },
  listWhitelists: {
    path: '/adamant.global.v1.GlobalAPI/ListWhitelists',
    requestStream: false,
    responseStream: false,
    requestType: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListWhitelistsRequest,
    responseType: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListWhitelistsResponse,
    requestSerialize: serialize_adamant_global_v1_ListWhitelistsRequest,
    requestDeserialize: deserialize_adamant_global_v1_ListWhitelistsRequest,
    responseSerialize: serialize_adamant_global_v1_ListWhitelistsResponse,
    responseDeserialize: deserialize_adamant_global_v1_ListWhitelistsResponse,
  },
  isDeletableWhitelist: {
    path: '/adamant.global.v1.GlobalAPI/IsDeletableWhitelist',
    requestStream: false,
    responseStream: false,
    requestType: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.IsDeletableWhitelistRequest,
    responseType: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.IsDeletableWhitelistResponse,
    requestSerialize: serialize_adamant_global_v1_IsDeletableWhitelistRequest,
    requestDeserialize: deserialize_adamant_global_v1_IsDeletableWhitelistRequest,
    responseSerialize: serialize_adamant_global_v1_IsDeletableWhitelistResponse,
    responseDeserialize: deserialize_adamant_global_v1_IsDeletableWhitelistResponse,
  },
  updateWhitelist: {
    path: '/adamant.global.v1.GlobalAPI/UpdateWhitelist',
    requestStream: false,
    responseStream: false,
    requestType: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpdateWhitelistRequest,
    responseType: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Whitelist,
    requestSerialize: serialize_adamant_global_v1_UpdateWhitelistRequest,
    requestDeserialize: deserialize_adamant_global_v1_UpdateWhitelistRequest,
    responseSerialize: serialize_adamant_global_v1_Whitelist,
    responseDeserialize: deserialize_adamant_global_v1_Whitelist,
  },
  updateWhitelistAddresses: {
    path: '/adamant.global.v1.GlobalAPI/UpdateWhitelistAddresses',
    requestStream: false,
    responseStream: false,
    requestType: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpdateWhitelistAddressesRequest,
    responseType: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Whitelist,
    requestSerialize: serialize_adamant_global_v1_UpdateWhitelistAddressesRequest,
    requestDeserialize: deserialize_adamant_global_v1_UpdateWhitelistAddressesRequest,
    responseSerialize: serialize_adamant_global_v1_Whitelist,
    responseDeserialize: deserialize_adamant_global_v1_Whitelist,
  },
  deleteWhitelist: {
    path: '/adamant.global.v1.GlobalAPI/DeleteWhitelist',
    requestStream: false,
    responseStream: false,
    requestType: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.DeleteWhitelistRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_adamant_global_v1_DeleteWhitelistRequest,
    requestDeserialize: deserialize_adamant_global_v1_DeleteWhitelistRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  createTransferLimit: {
    path: '/adamant.global.v1.GlobalAPI/CreateTransferLimit',
    requestStream: false,
    responseStream: false,
    requestType: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransferLimitRequest,
    responseType: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreateTransferLimitResponse,
    requestSerialize: serialize_adamant_global_v1_CreateTransferLimitRequest,
    requestDeserialize: deserialize_adamant_global_v1_CreateTransferLimitRequest,
    responseSerialize: serialize_adamant_global_v1_CreateTransferLimitResponse,
    responseDeserialize: deserialize_adamant_global_v1_CreateTransferLimitResponse,
  },
  getTransferLimit: {
    path: '/adamant.global.v1.GlobalAPI/GetTransferLimit',
    requestStream: false,
    responseStream: false,
    requestType: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetTransferLimitRequest,
    responseType: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.TransferLimit,
    requestSerialize: serialize_adamant_global_v1_GetTransferLimitRequest,
    requestDeserialize: deserialize_adamant_global_v1_GetTransferLimitRequest,
    responseSerialize: serialize_adamant_global_v1_TransferLimit,
    responseDeserialize: deserialize_adamant_global_v1_TransferLimit,
  },
  listTransferLimits: {
    path: '/adamant.global.v1.GlobalAPI/ListTransferLimits',
    requestStream: false,
    responseStream: false,
    requestType: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListTransferLimitsRequest,
    responseType: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListTransferLimitsResponse,
    requestSerialize: serialize_adamant_global_v1_ListTransferLimitsRequest,
    requestDeserialize: deserialize_adamant_global_v1_ListTransferLimitsRequest,
    responseSerialize: serialize_adamant_global_v1_ListTransferLimitsResponse,
    responseDeserialize: deserialize_adamant_global_v1_ListTransferLimitsResponse,
  },
  isDeletableTransferLimit: {
    path: '/adamant.global.v1.GlobalAPI/IsDeletableTransferLimit',
    requestStream: false,
    responseStream: false,
    requestType: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.IsDeletableTransferLimitRequest,
    responseType: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.IsDeletableTransferLimitResponse,
    requestSerialize: serialize_adamant_global_v1_IsDeletableTransferLimitRequest,
    requestDeserialize: deserialize_adamant_global_v1_IsDeletableTransferLimitRequest,
    responseSerialize: serialize_adamant_global_v1_IsDeletableTransferLimitResponse,
    responseDeserialize: deserialize_adamant_global_v1_IsDeletableTransferLimitResponse,
  },
  updateTransferLimit: {
    path: '/adamant.global.v1.GlobalAPI/UpdateTransferLimit',
    requestStream: false,
    responseStream: false,
    requestType: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpdateTransferLimitRequest,
    responseType: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.TransferLimit,
    requestSerialize: serialize_adamant_global_v1_UpdateTransferLimitRequest,
    requestDeserialize: deserialize_adamant_global_v1_UpdateTransferLimitRequest,
    responseSerialize: serialize_adamant_global_v1_TransferLimit,
    responseDeserialize: deserialize_adamant_global_v1_TransferLimit,
  },
  updateTransferLimitName: {
    path: '/adamant.global.v1.GlobalAPI/UpdateTransferLimitName',
    requestStream: false,
    responseStream: false,
    requestType: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpdateTransferLimitNameRequest,
    responseType: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.TransferLimit,
    requestSerialize: serialize_adamant_global_v1_UpdateTransferLimitNameRequest,
    requestDeserialize: deserialize_adamant_global_v1_UpdateTransferLimitNameRequest,
    responseSerialize: serialize_adamant_global_v1_TransferLimit,
    responseDeserialize: deserialize_adamant_global_v1_TransferLimit,
  },
  deleteTransferLimit: {
    path: '/adamant.global.v1.GlobalAPI/DeleteTransferLimit',
    requestStream: false,
    responseStream: false,
    requestType: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.DeleteTransferLimitRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_adamant_global_v1_DeleteTransferLimitRequest,
    requestDeserialize: deserialize_adamant_global_v1_DeleteTransferLimitRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  reviewTransferLimitProposal: {
    path: '/adamant.global.v1.GlobalAPI/ReviewTransferLimitProposal',
    requestStream: false,
    responseStream: false,
    requestType: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ReviewTransferLimitProposalRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_adamant_global_v1_ReviewTransferLimitProposalRequest,
    requestDeserialize: deserialize_adamant_global_v1_ReviewTransferLimitProposalRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  createPolicy: {
    path: '/adamant.global.v1.GlobalAPI/CreatePolicy',
    requestStream: false,
    responseStream: false,
    requestType: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreatePolicyRequest,
    responseType: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CreatePolicyResponse,
    requestSerialize: serialize_adamant_global_v1_CreatePolicyRequest,
    requestDeserialize: deserialize_adamant_global_v1_CreatePolicyRequest,
    responseSerialize: serialize_adamant_global_v1_CreatePolicyResponse,
    responseDeserialize: deserialize_adamant_global_v1_CreatePolicyResponse,
  },
  getPolicy: {
    path: '/adamant.global.v1.GlobalAPI/GetPolicy',
    requestStream: false,
    responseStream: false,
    requestType: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetPolicyRequest,
    responseType: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Policy,
    requestSerialize: serialize_adamant_global_v1_GetPolicyRequest,
    requestDeserialize: deserialize_adamant_global_v1_GetPolicyRequest,
    responseSerialize: serialize_adamant_global_v1_Policy,
    responseDeserialize: deserialize_adamant_global_v1_Policy,
  },
  listPolicies: {
    path: '/adamant.global.v1.GlobalAPI/ListPolicies',
    requestStream: false,
    responseStream: false,
    requestType: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListPoliciesRequest,
    responseType: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListPoliciesResponse,
    requestSerialize: serialize_adamant_global_v1_ListPoliciesRequest,
    requestDeserialize: deserialize_adamant_global_v1_ListPoliciesRequest,
    responseSerialize: serialize_adamant_global_v1_ListPoliciesResponse,
    responseDeserialize: deserialize_adamant_global_v1_ListPoliciesResponse,
  },
  isDeletablePolicy: {
    path: '/adamant.global.v1.GlobalAPI/IsDeletablePolicy',
    requestStream: false,
    responseStream: false,
    requestType: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.IsDeletablePolicyRequest,
    responseType: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.IsDeletablePolicyResponse,
    requestSerialize: serialize_adamant_global_v1_IsDeletablePolicyRequest,
    requestDeserialize: deserialize_adamant_global_v1_IsDeletablePolicyRequest,
    responseSerialize: serialize_adamant_global_v1_IsDeletablePolicyResponse,
    responseDeserialize: deserialize_adamant_global_v1_IsDeletablePolicyResponse,
  },
  updatePolicy: {
    path: '/adamant.global.v1.GlobalAPI/UpdatePolicy',
    requestStream: false,
    responseStream: false,
    requestType: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.UpdatePolicyRequest,
    responseType: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Policy,
    requestSerialize: serialize_adamant_global_v1_UpdatePolicyRequest,
    requestDeserialize: deserialize_adamant_global_v1_UpdatePolicyRequest,
    responseSerialize: serialize_adamant_global_v1_Policy,
    responseDeserialize: deserialize_adamant_global_v1_Policy,
  },
  deletePolicy: {
    path: '/adamant.global.v1.GlobalAPI/DeletePolicy',
    requestStream: false,
    responseStream: false,
    requestType: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.DeletePolicyRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_adamant_global_v1_DeletePolicyRequest,
    requestDeserialize: deserialize_adamant_global_v1_DeletePolicyRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  reviewPolicyProposal: {
    path: '/adamant.global.v1.GlobalAPI/ReviewPolicyProposal',
    requestStream: false,
    responseStream: false,
    requestType: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ReviewPolicyProposalRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_adamant_global_v1_ReviewPolicyProposalRequest,
    requestDeserialize: deserialize_adamant_global_v1_ReviewPolicyProposalRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Utility
getSpendableBalance: {
    path: '/adamant.global.v1.GlobalAPI/GetSpendableBalance',
    requestStream: false,
    responseStream: false,
    requestType: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetSpendableBalanceRequest,
    responseType: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetSpendableBalanceResponse,
    requestSerialize: serialize_adamant_global_v1_GetSpendableBalanceRequest,
    requestDeserialize: deserialize_adamant_global_v1_GetSpendableBalanceRequest,
    responseSerialize: serialize_adamant_global_v1_GetSpendableBalanceResponse,
    responseDeserialize: deserialize_adamant_global_v1_GetSpendableBalanceResponse,
  },
  getTotalBalance: {
    path: '/adamant.global.v1.GlobalAPI/GetTotalBalance',
    requestStream: false,
    responseStream: false,
    requestType: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetTotalBalanceRequest,
    responseType: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.TotalBalance,
    requestSerialize: serialize_adamant_global_v1_GetTotalBalanceRequest,
    requestDeserialize: deserialize_adamant_global_v1_GetTotalBalanceRequest,
    responseSerialize: serialize_adamant_global_v1_TotalBalance,
    responseDeserialize: deserialize_adamant_global_v1_TotalBalance,
  },
  listBalanceSnapshots: {
    path: '/adamant.global.v1.GlobalAPI/ListBalanceSnapshots',
    requestStream: false,
    responseStream: false,
    requestType: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListBalanceSnapshotsRequest,
    responseType: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListBalanceSnapshotsResponse,
    requestSerialize: serialize_adamant_global_v1_ListBalanceSnapshotsRequest,
    requestDeserialize: deserialize_adamant_global_v1_ListBalanceSnapshotsRequest,
    responseSerialize: serialize_adamant_global_v1_ListBalanceSnapshotsResponse,
    responseDeserialize: deserialize_adamant_global_v1_ListBalanceSnapshotsResponse,
  },
  calculateFee: {
    path: '/adamant.global.v1.GlobalAPI/CalculateFee',
    requestStream: false,
    responseStream: false,
    requestType: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CalculateFeeRequest,
    responseType: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.CalculateFeeResponse,
    requestSerialize: serialize_adamant_global_v1_CalculateFeeRequest,
    requestDeserialize: deserialize_adamant_global_v1_CalculateFeeRequest,
    responseSerialize: serialize_adamant_global_v1_CalculateFeeResponse,
    responseDeserialize: deserialize_adamant_global_v1_CalculateFeeResponse,
  },
  getMembersDeactivatabilities: {
    path: '/adamant.global.v1.GlobalAPI/GetMembersDeactivatabilities',
    requestStream: false,
    responseStream: false,
    requestType: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetMembersDeactivatabilitiesRequest,
    responseType: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.GetMembersDeactivatabilitiesResponse,
    requestSerialize: serialize_adamant_global_v1_GetMembersDeactivatabilitiesRequest,
    requestDeserialize: deserialize_adamant_global_v1_GetMembersDeactivatabilitiesRequest,
    responseSerialize: serialize_adamant_global_v1_GetMembersDeactivatabilitiesResponse,
    responseDeserialize: deserialize_adamant_global_v1_GetMembersDeactivatabilitiesResponse,
  },
  getRecommendedFeeRate: {
    path: '/adamant.global.v1.GlobalAPI/GetRecommendedFeeRate',
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
    path: '/adamant.global.v1.GlobalAPI/ValidateAddress',
    requestStream: false,
    responseStream: false,
    requestType: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ValidateAddressRequest,
    responseType: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ValidateAddressResponse,
    requestSerialize: serialize_adamant_global_v1_ValidateAddressRequest,
    requestDeserialize: deserialize_adamant_global_v1_ValidateAddressRequest,
    responseSerialize: serialize_adamant_global_v1_ValidateAddressResponse,
    responseDeserialize: deserialize_adamant_global_v1_ValidateAddressResponse,
  },
  listAuditLogs: {
    path: '/adamant.global.v1.GlobalAPI/ListAuditLogs',
    requestStream: false,
    responseStream: false,
    requestType: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListAuditLogsRequest,
    responseType: gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb.ListAuditLogsResponse,
    requestSerialize: serialize_adamant_global_v1_ListAuditLogsRequest,
    requestDeserialize: deserialize_adamant_global_v1_ListAuditLogsRequest,
    responseSerialize: serialize_adamant_global_v1_ListAuditLogsResponse,
    responseDeserialize: deserialize_adamant_global_v1_ListAuditLogsResponse,
  },
};

exports.GlobalAPIClient = grpc.makeGenericClientConstructor(GlobalAPIService);
