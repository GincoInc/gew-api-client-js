/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
goog.object.extend(proto, google_protobuf_empty_pb);
var validate_validate_pb = require('../../../../../validate/validate_pb.js');
goog.object.extend(proto, validate_validate_pb);
var gincoinc_global_v1_gincoincglobalv1_enum_pb = require('../../../../../gincoinc/global/v1/gincoincglobalv1/enum_pb.js');
goog.object.extend(proto, gincoinc_global_v1_gincoincglobalv1_enum_pb);
var gincoinc_adamant_global_v1_adamantglobalv1_enum_pb = require('../../../../../gincoinc/adamant/global/v1/adamantglobalv1/enum_pb.js');
goog.object.extend(proto, gincoinc_adamant_global_v1_adamantglobalv1_enum_pb);
var gincoinc_adamant_global_v1_adamantglobalv1_model_pb = require('../../../../../gincoinc/adamant/global/v1/adamantglobalv1/model_pb.js');
goog.object.extend(proto, gincoinc_adamant_global_v1_adamantglobalv1_model_pb);
goog.exportSymbol('proto.adamant.global.v1.ApproveTransactionRequest', null, global);
goog.exportSymbol('proto.adamant.global.v1.ApproveWalletRequest', null, global);
goog.exportSymbol('proto.adamant.global.v1.ArchiveWalletRequest', null, global);
goog.exportSymbol('proto.adamant.global.v1.BatchGetWalletsWithoutBalanceRequest', null, global);
goog.exportSymbol('proto.adamant.global.v1.BatchGetWalletsWithoutBalanceResponse', null, global);
goog.exportSymbol('proto.adamant.global.v1.CalculateFeeRequest', null, global);
goog.exportSymbol('proto.adamant.global.v1.CalculateFeeResponse', null, global);
goog.exportSymbol('proto.adamant.global.v1.CancelTransactionRequest', null, global);
goog.exportSymbol('proto.adamant.global.v1.CancelWalletRequest', null, global);
goog.exportSymbol('proto.adamant.global.v1.CreateAddressRequest', null, global);
goog.exportSymbol('proto.adamant.global.v1.CreateAddressResponse', null, global);
goog.exportSymbol('proto.adamant.global.v1.CreateInitTransactionRequest', null, global);
goog.exportSymbol('proto.adamant.global.v1.CreateLabeledAddressRequest', null, global);
goog.exportSymbol('proto.adamant.global.v1.CreateLabeledAddressResponse', null, global);
goog.exportSymbol('proto.adamant.global.v1.CreatePolicyRequest', null, global);
goog.exportSymbol('proto.adamant.global.v1.CreatePolicyResponse', null, global);
goog.exportSymbol('proto.adamant.global.v1.CreateTransactionRequest', null, global);
goog.exportSymbol('proto.adamant.global.v1.CreateTransactionResponse', null, global);
goog.exportSymbol('proto.adamant.global.v1.CreateTransferLimitRequest', null, global);
goog.exportSymbol('proto.adamant.global.v1.CreateTransferLimitResponse', null, global);
goog.exportSymbol('proto.adamant.global.v1.CreateWalletRequest', null, global);
goog.exportSymbol('proto.adamant.global.v1.CreateWalletResponse', null, global);
goog.exportSymbol('proto.adamant.global.v1.CreateWhitelistRequest', null, global);
goog.exportSymbol('proto.adamant.global.v1.CreateWhitelistResponse', null, global);
goog.exportSymbol('proto.adamant.global.v1.CreateXRPInitTransactionsRequest', null, global);
goog.exportSymbol('proto.adamant.global.v1.DeleteAllWatchOnlyAddressesByWalletIDRequest', null, global);
goog.exportSymbol('proto.adamant.global.v1.DeleteLabeledAddressRequest', null, global);
goog.exportSymbol('proto.adamant.global.v1.DeletePolicyRequest', null, global);
goog.exportSymbol('proto.adamant.global.v1.DeleteTransferLimitRequest', null, global);
goog.exportSymbol('proto.adamant.global.v1.DeleteWhitelistRequest', null, global);
goog.exportSymbol('proto.adamant.global.v1.ExistsWalletByNameRequest', null, global);
goog.exportSymbol('proto.adamant.global.v1.ExistsWalletByNameResponse', null, global);
goog.exportSymbol('proto.adamant.global.v1.FlushBalanceRequest', null, global);
goog.exportSymbol('proto.adamant.global.v1.FlushBalanceResponse', null, global);
goog.exportSymbol('proto.adamant.global.v1.GetAddressByAddressRequest', null, global);
goog.exportSymbol('proto.adamant.global.v1.GetAddressByIndexRequest', null, global);
goog.exportSymbol('proto.adamant.global.v1.GetAddressRequest', null, global);
goog.exportSymbol('proto.adamant.global.v1.GetAddressWithoutBalanceByIndexRequest', null, global);
goog.exportSymbol('proto.adamant.global.v1.GetEthereumFeeAddressRequest', null, global);
goog.exportSymbol('proto.adamant.global.v1.GetLabeledAddressRequest', null, global);
goog.exportSymbol('proto.adamant.global.v1.GetLatestRateSnapshotRequest', null, global);
goog.exportSymbol('proto.adamant.global.v1.GetMembersDeactivatabilitiesRequest', null, global);
goog.exportSymbol('proto.adamant.global.v1.GetMembersDeactivatabilitiesResponse', null, global);
goog.exportSymbol('proto.adamant.global.v1.GetPolicyRequest', null, global);
goog.exportSymbol('proto.adamant.global.v1.GetRateSnapshotRequest', null, global);
goog.exportSymbol('proto.adamant.global.v1.GetRecommendedFeeRateRequest', null, global);
goog.exportSymbol('proto.adamant.global.v1.GetRecommendedFeeRateResponse', null, global);
goog.exportSymbol('proto.adamant.global.v1.GetSignInfoRequest', null, global);
goog.exportSymbol('proto.adamant.global.v1.GetSpendableBalanceRequest', null, global);
goog.exportSymbol('proto.adamant.global.v1.GetSpendableBalanceResponse', null, global);
goog.exportSymbol('proto.adamant.global.v1.GetTotalBalanceRequest', null, global);
goog.exportSymbol('proto.adamant.global.v1.GetTransactionByTxIDRequest', null, global);
goog.exportSymbol('proto.adamant.global.v1.GetTransactionRequest', null, global);
goog.exportSymbol('proto.adamant.global.v1.GetTransferLimitRequest', null, global);
goog.exportSymbol('proto.adamant.global.v1.GetWalletRequest', null, global);
goog.exportSymbol('proto.adamant.global.v1.GetWhitelistRequest', null, global);
goog.exportSymbol('proto.adamant.global.v1.IsDeletableLabeledAddressRequest', null, global);
goog.exportSymbol('proto.adamant.global.v1.IsDeletableLabeledAddressResponse', null, global);
goog.exportSymbol('proto.adamant.global.v1.IsDeletablePolicyRequest', null, global);
goog.exportSymbol('proto.adamant.global.v1.IsDeletablePolicyResponse', null, global);
goog.exportSymbol('proto.adamant.global.v1.IsDeletableTransferLimitRequest', null, global);
goog.exportSymbol('proto.adamant.global.v1.IsDeletableTransferLimitResponse', null, global);
goog.exportSymbol('proto.adamant.global.v1.IsDeletableWhitelistRequest', null, global);
goog.exportSymbol('proto.adamant.global.v1.IsDeletableWhitelistResponse', null, global);
goog.exportSymbol('proto.adamant.global.v1.ListAddressesRequest', null, global);
goog.exportSymbol('proto.adamant.global.v1.ListAddressesResponse', null, global);
goog.exportSymbol('proto.adamant.global.v1.ListAddressesWithBalanceRequest', null, global);
goog.exportSymbol('proto.adamant.global.v1.ListAddressesWithBalanceResponse', null, global);
goog.exportSymbol('proto.adamant.global.v1.ListAddressesWithoutBalanceRequest', null, global);
goog.exportSymbol('proto.adamant.global.v1.ListAddressesWithoutBalanceResponse', null, global);
goog.exportSymbol('proto.adamant.global.v1.ListBalanceSnapshotsRequest', null, global);
goog.exportSymbol('proto.adamant.global.v1.ListBalanceSnapshotsResponse', null, global);
goog.exportSymbol('proto.adamant.global.v1.ListBaseWalletsRequest', null, global);
goog.exportSymbol('proto.adamant.global.v1.ListBaseWalletsResponse', null, global);
goog.exportSymbol('proto.adamant.global.v1.ListCompensationFeeHistoriesRequest', null, global);
goog.exportSymbol('proto.adamant.global.v1.ListCompensationFeeHistoriesResponse', null, global);
goog.exportSymbol('proto.adamant.global.v1.ListConfirmationsRequest', null, global);
goog.exportSymbol('proto.adamant.global.v1.ListConfirmationsResponse', null, global);
goog.exportSymbol('proto.adamant.global.v1.ListInitSignInfoRequest', null, global);
goog.exportSymbol('proto.adamant.global.v1.ListLabeledAddressesRequest', null, global);
goog.exportSymbol('proto.adamant.global.v1.ListLabeledAddressesResponse', null, global);
goog.exportSymbol('proto.adamant.global.v1.ListPoliciesRequest', null, global);
goog.exportSymbol('proto.adamant.global.v1.ListPoliciesResponse', null, global);
goog.exportSymbol('proto.adamant.global.v1.ListSignInfoRequest', null, global);
goog.exportSymbol('proto.adamant.global.v1.ListSignInfoResponse', null, global);
goog.exportSymbol('proto.adamant.global.v1.ListTransactionsByFilterRequest', null, global);
goog.exportSymbol('proto.adamant.global.v1.ListTransactionsRequest', null, global);
goog.exportSymbol('proto.adamant.global.v1.ListTransactionsResponse', null, global);
goog.exportSymbol('proto.adamant.global.v1.ListTransferLimitsRequest', null, global);
goog.exportSymbol('proto.adamant.global.v1.ListTransferLimitsResponse', null, global);
goog.exportSymbol('proto.adamant.global.v1.ListTransferVolumeSnapshotsRequest', null, global);
goog.exportSymbol('proto.adamant.global.v1.ListTransferVolumeSnapshotsResponse', null, global);
goog.exportSymbol('proto.adamant.global.v1.ListTransfersByFilterRequest', null, global);
goog.exportSymbol('proto.adamant.global.v1.ListTransfersRequest', null, global);
goog.exportSymbol('proto.adamant.global.v1.ListTransfersResponse', null, global);
goog.exportSymbol('proto.adamant.global.v1.ListWalletBalanceSnapshotsRequest', null, global);
goog.exportSymbol('proto.adamant.global.v1.ListWalletBalanceSnapshotsResponse', null, global);
goog.exportSymbol('proto.adamant.global.v1.ListWalletFlushSettingsResponse', null, global);
goog.exportSymbol('proto.adamant.global.v1.ListWalletTransferVolumeSnapshotsRequest', null, global);
goog.exportSymbol('proto.adamant.global.v1.ListWalletTransferVolumeSnapshotsResponse', null, global);
goog.exportSymbol('proto.adamant.global.v1.ListWalletsByFilterRequest', null, global);
goog.exportSymbol('proto.adamant.global.v1.ListWalletsRequest', null, global);
goog.exportSymbol('proto.adamant.global.v1.ListWalletsResponse', null, global);
goog.exportSymbol('proto.adamant.global.v1.ListWhitelistsRequest', null, global);
goog.exportSymbol('proto.adamant.global.v1.ListWhitelistsResponse', null, global);
goog.exportSymbol('proto.adamant.global.v1.ListXRPInitSignInfoRequest', null, global);
goog.exportSymbol('proto.adamant.global.v1.ListXRPInitSignInfoResponse', null, global);
goog.exportSymbol('proto.adamant.global.v1.RegisterKeyRequest', null, global);
goog.exportSymbol('proto.adamant.global.v1.RegisterKeyResponse', null, global);
goog.exportSymbol('proto.adamant.global.v1.ReviewLabeledAddressProposalRequest', null, global);
goog.exportSymbol('proto.adamant.global.v1.ReviewPolicyProposalRequest', null, global);
goog.exportSymbol('proto.adamant.global.v1.ReviewTransferLimitProposalRequest', null, global);
goog.exportSymbol('proto.adamant.global.v1.ReviewWalletProposalRequest', null, global);
goog.exportSymbol('proto.adamant.global.v1.SendInitTransactionRequest', null, global);
goog.exportSymbol('proto.adamant.global.v1.SendInitTransactionResponse', null, global);
goog.exportSymbol('proto.adamant.global.v1.SendTransactionRequest', null, global);
goog.exportSymbol('proto.adamant.global.v1.SendTransactionResponse', null, global);
goog.exportSymbol('proto.adamant.global.v1.SendXRPInitTransactionsRequest', null, global);
goog.exportSymbol('proto.adamant.global.v1.SendXRPInitTransactionsResponse', null, global);
goog.exportSymbol('proto.adamant.global.v1.SetRatesRequest', null, global);
goog.exportSymbol('proto.adamant.global.v1.SetRatesResponse', null, global);
goog.exportSymbol('proto.adamant.global.v1.SignInitTransactionRequest', null, global);
goog.exportSymbol('proto.adamant.global.v1.SignTransactionRequest', null, global);
goog.exportSymbol('proto.adamant.global.v1.SignXRPInitTransactionsRequest', null, global);
goog.exportSymbol('proto.adamant.global.v1.UnArchiveWalletRequest', null, global);
goog.exportSymbol('proto.adamant.global.v1.UpdateAddressBalanceRequest', null, global);
goog.exportSymbol('proto.adamant.global.v1.UpdateLabeledAddressRequest', null, global);
goog.exportSymbol('proto.adamant.global.v1.UpdatePolicyRequest', null, global);
goog.exportSymbol('proto.adamant.global.v1.UpdateTransferLimitNameRequest', null, global);
goog.exportSymbol('proto.adamant.global.v1.UpdateTransferLimitRequest', null, global);
goog.exportSymbol('proto.adamant.global.v1.UpdateWalletFlushSettingRequest', null, global);
goog.exportSymbol('proto.adamant.global.v1.UpdateWalletNameRequest', null, global);
goog.exportSymbol('proto.adamant.global.v1.UpdateWalletPolicyRequest', null, global);
goog.exportSymbol('proto.adamant.global.v1.UpdateWalletValidationRequest', null, global);
goog.exportSymbol('proto.adamant.global.v1.UpdateWhitelistAddressesRequest', null, global);
goog.exportSymbol('proto.adamant.global.v1.UpdateWhitelistRequest', null, global);
goog.exportSymbol('proto.adamant.global.v1.ValidateAddressRequest', null, global);
goog.exportSymbol('proto.adamant.global.v1.ValidateAddressResponse', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.adamant.global.v1.ApproveWalletRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.adamant.global.v1.ApproveWalletRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.adamant.global.v1.ApproveWalletRequest.displayName = 'proto.adamant.global.v1.ApproveWalletRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.adamant.global.v1.ApproveTransactionRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.adamant.global.v1.ApproveTransactionRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.adamant.global.v1.ApproveTransactionRequest.displayName = 'proto.adamant.global.v1.ApproveTransactionRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.adamant.global.v1.CreateWalletRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.adamant.global.v1.CreateWalletRequest.repeatedFields_, null);
};
goog.inherits(proto.adamant.global.v1.CreateWalletRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.adamant.global.v1.CreateWalletRequest.displayName = 'proto.adamant.global.v1.CreateWalletRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.adamant.global.v1.CreateWalletResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.adamant.global.v1.CreateWalletResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.adamant.global.v1.CreateWalletResponse.displayName = 'proto.adamant.global.v1.CreateWalletResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.adamant.global.v1.GetWalletRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.adamant.global.v1.GetWalletRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.adamant.global.v1.GetWalletRequest.displayName = 'proto.adamant.global.v1.GetWalletRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.adamant.global.v1.BatchGetWalletsWithoutBalanceRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.adamant.global.v1.BatchGetWalletsWithoutBalanceRequest.repeatedFields_, null);
};
goog.inherits(proto.adamant.global.v1.BatchGetWalletsWithoutBalanceRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.adamant.global.v1.BatchGetWalletsWithoutBalanceRequest.displayName = 'proto.adamant.global.v1.BatchGetWalletsWithoutBalanceRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.adamant.global.v1.BatchGetWalletsWithoutBalanceResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.adamant.global.v1.BatchGetWalletsWithoutBalanceResponse.repeatedFields_, null);
};
goog.inherits(proto.adamant.global.v1.BatchGetWalletsWithoutBalanceResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.adamant.global.v1.BatchGetWalletsWithoutBalanceResponse.displayName = 'proto.adamant.global.v1.BatchGetWalletsWithoutBalanceResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.adamant.global.v1.CancelWalletRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.adamant.global.v1.CancelWalletRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.adamant.global.v1.CancelWalletRequest.displayName = 'proto.adamant.global.v1.CancelWalletRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.adamant.global.v1.ArchiveWalletRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.adamant.global.v1.ArchiveWalletRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.adamant.global.v1.ArchiveWalletRequest.displayName = 'proto.adamant.global.v1.ArchiveWalletRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.adamant.global.v1.UnArchiveWalletRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.adamant.global.v1.UnArchiveWalletRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.adamant.global.v1.UnArchiveWalletRequest.displayName = 'proto.adamant.global.v1.UnArchiveWalletRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.adamant.global.v1.ListWalletsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.adamant.global.v1.ListWalletsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.adamant.global.v1.ListWalletsRequest.displayName = 'proto.adamant.global.v1.ListWalletsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.adamant.global.v1.ListWalletsByFilterRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.adamant.global.v1.ListWalletsByFilterRequest.repeatedFields_, null);
};
goog.inherits(proto.adamant.global.v1.ListWalletsByFilterRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.adamant.global.v1.ListWalletsByFilterRequest.displayName = 'proto.adamant.global.v1.ListWalletsByFilterRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.adamant.global.v1.ListWalletsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.adamant.global.v1.ListWalletsResponse.repeatedFields_, null);
};
goog.inherits(proto.adamant.global.v1.ListWalletsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.adamant.global.v1.ListWalletsResponse.displayName = 'proto.adamant.global.v1.ListWalletsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.adamant.global.v1.ListBaseWalletsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.adamant.global.v1.ListBaseWalletsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.adamant.global.v1.ListBaseWalletsRequest.displayName = 'proto.adamant.global.v1.ListBaseWalletsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.adamant.global.v1.ListBaseWalletsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.adamant.global.v1.ListBaseWalletsResponse.repeatedFields_, null);
};
goog.inherits(proto.adamant.global.v1.ListBaseWalletsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.adamant.global.v1.ListBaseWalletsResponse.displayName = 'proto.adamant.global.v1.ListBaseWalletsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.adamant.global.v1.UpdateWalletNameRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.adamant.global.v1.UpdateWalletNameRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.adamant.global.v1.UpdateWalletNameRequest.displayName = 'proto.adamant.global.v1.UpdateWalletNameRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.adamant.global.v1.UpdateWalletValidationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.adamant.global.v1.UpdateWalletValidationRequest.repeatedFields_, null);
};
goog.inherits(proto.adamant.global.v1.UpdateWalletValidationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.adamant.global.v1.UpdateWalletValidationRequest.displayName = 'proto.adamant.global.v1.UpdateWalletValidationRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.adamant.global.v1.UpdateWalletPolicyRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.adamant.global.v1.UpdateWalletPolicyRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.adamant.global.v1.UpdateWalletPolicyRequest.displayName = 'proto.adamant.global.v1.UpdateWalletPolicyRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.adamant.global.v1.ReviewWalletProposalRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.adamant.global.v1.ReviewWalletProposalRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.adamant.global.v1.ReviewWalletProposalRequest.displayName = 'proto.adamant.global.v1.ReviewWalletProposalRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.adamant.global.v1.ExistsWalletByNameRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.adamant.global.v1.ExistsWalletByNameRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.adamant.global.v1.ExistsWalletByNameRequest.displayName = 'proto.adamant.global.v1.ExistsWalletByNameRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.adamant.global.v1.ExistsWalletByNameResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.adamant.global.v1.ExistsWalletByNameResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.adamant.global.v1.ExistsWalletByNameResponse.displayName = 'proto.adamant.global.v1.ExistsWalletByNameResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.adamant.global.v1.FlushBalanceRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.adamant.global.v1.FlushBalanceRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.adamant.global.v1.FlushBalanceRequest.displayName = 'proto.adamant.global.v1.FlushBalanceRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.adamant.global.v1.FlushBalanceResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.adamant.global.v1.FlushBalanceResponse.repeatedFields_, null);
};
goog.inherits(proto.adamant.global.v1.FlushBalanceResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.adamant.global.v1.FlushBalanceResponse.displayName = 'proto.adamant.global.v1.FlushBalanceResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.adamant.global.v1.ListWalletFlushSettingsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.adamant.global.v1.ListWalletFlushSettingsResponse.repeatedFields_, null);
};
goog.inherits(proto.adamant.global.v1.ListWalletFlushSettingsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.adamant.global.v1.ListWalletFlushSettingsResponse.displayName = 'proto.adamant.global.v1.ListWalletFlushSettingsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.adamant.global.v1.UpdateWalletFlushSettingRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.adamant.global.v1.UpdateWalletFlushSettingRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.adamant.global.v1.UpdateWalletFlushSettingRequest.displayName = 'proto.adamant.global.v1.UpdateWalletFlushSettingRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.adamant.global.v1.ListCompensationFeeHistoriesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.adamant.global.v1.ListCompensationFeeHistoriesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.adamant.global.v1.ListCompensationFeeHistoriesRequest.displayName = 'proto.adamant.global.v1.ListCompensationFeeHistoriesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.adamant.global.v1.ListCompensationFeeHistoriesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.adamant.global.v1.ListCompensationFeeHistoriesResponse.repeatedFields_, null);
};
goog.inherits(proto.adamant.global.v1.ListCompensationFeeHistoriesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.adamant.global.v1.ListCompensationFeeHistoriesResponse.displayName = 'proto.adamant.global.v1.ListCompensationFeeHistoriesResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.adamant.global.v1.RegisterKeyRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.adamant.global.v1.RegisterKeyRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.adamant.global.v1.RegisterKeyRequest.displayName = 'proto.adamant.global.v1.RegisterKeyRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.adamant.global.v1.RegisterKeyResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.adamant.global.v1.RegisterKeyResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.adamant.global.v1.RegisterKeyResponse.displayName = 'proto.adamant.global.v1.RegisterKeyResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.adamant.global.v1.CreateAddressRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.adamant.global.v1.CreateAddressRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.adamant.global.v1.CreateAddressRequest.displayName = 'proto.adamant.global.v1.CreateAddressRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.adamant.global.v1.CreateAddressResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.adamant.global.v1.CreateAddressResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.adamant.global.v1.CreateAddressResponse.displayName = 'proto.adamant.global.v1.CreateAddressResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.adamant.global.v1.GetAddressRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.adamant.global.v1.GetAddressRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.adamant.global.v1.GetAddressRequest.displayName = 'proto.adamant.global.v1.GetAddressRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.adamant.global.v1.GetAddressByAddressRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.adamant.global.v1.GetAddressByAddressRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.adamant.global.v1.GetAddressByAddressRequest.displayName = 'proto.adamant.global.v1.GetAddressByAddressRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.adamant.global.v1.GetAddressByIndexRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.adamant.global.v1.GetAddressByIndexRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.adamant.global.v1.GetAddressByIndexRequest.displayName = 'proto.adamant.global.v1.GetAddressByIndexRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.adamant.global.v1.GetAddressWithoutBalanceByIndexRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.adamant.global.v1.GetAddressWithoutBalanceByIndexRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.adamant.global.v1.GetAddressWithoutBalanceByIndexRequest.displayName = 'proto.adamant.global.v1.GetAddressWithoutBalanceByIndexRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.adamant.global.v1.ListAddressesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.adamant.global.v1.ListAddressesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.adamant.global.v1.ListAddressesRequest.displayName = 'proto.adamant.global.v1.ListAddressesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.adamant.global.v1.ListAddressesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.adamant.global.v1.ListAddressesResponse.repeatedFields_, null);
};
goog.inherits(proto.adamant.global.v1.ListAddressesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.adamant.global.v1.ListAddressesResponse.displayName = 'proto.adamant.global.v1.ListAddressesResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.adamant.global.v1.ListAddressesWithBalanceRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.adamant.global.v1.ListAddressesWithBalanceRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.adamant.global.v1.ListAddressesWithBalanceRequest.displayName = 'proto.adamant.global.v1.ListAddressesWithBalanceRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.adamant.global.v1.ListAddressesWithBalanceResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.adamant.global.v1.ListAddressesWithBalanceResponse.repeatedFields_, null);
};
goog.inherits(proto.adamant.global.v1.ListAddressesWithBalanceResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.adamant.global.v1.ListAddressesWithBalanceResponse.displayName = 'proto.adamant.global.v1.ListAddressesWithBalanceResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.adamant.global.v1.UpdateAddressBalanceRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.adamant.global.v1.UpdateAddressBalanceRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.adamant.global.v1.UpdateAddressBalanceRequest.displayName = 'proto.adamant.global.v1.UpdateAddressBalanceRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.adamant.global.v1.ListAddressesWithoutBalanceRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.adamant.global.v1.ListAddressesWithoutBalanceRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.adamant.global.v1.ListAddressesWithoutBalanceRequest.displayName = 'proto.adamant.global.v1.ListAddressesWithoutBalanceRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.adamant.global.v1.ListAddressesWithoutBalanceResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.adamant.global.v1.ListAddressesWithoutBalanceResponse.repeatedFields_, null);
};
goog.inherits(proto.adamant.global.v1.ListAddressesWithoutBalanceResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.adamant.global.v1.ListAddressesWithoutBalanceResponse.displayName = 'proto.adamant.global.v1.ListAddressesWithoutBalanceResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.adamant.global.v1.GetEthereumFeeAddressRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.adamant.global.v1.GetEthereumFeeAddressRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.adamant.global.v1.GetEthereumFeeAddressRequest.displayName = 'proto.adamant.global.v1.GetEthereumFeeAddressRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.adamant.global.v1.DeleteAllWatchOnlyAddressesByWalletIDRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.adamant.global.v1.DeleteAllWatchOnlyAddressesByWalletIDRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.adamant.global.v1.DeleteAllWatchOnlyAddressesByWalletIDRequest.displayName = 'proto.adamant.global.v1.DeleteAllWatchOnlyAddressesByWalletIDRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.adamant.global.v1.CreateTransactionRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.adamant.global.v1.CreateTransactionRequest.repeatedFields_, null);
};
goog.inherits(proto.adamant.global.v1.CreateTransactionRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.adamant.global.v1.CreateTransactionRequest.displayName = 'proto.adamant.global.v1.CreateTransactionRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.adamant.global.v1.CreateTransactionResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.adamant.global.v1.CreateTransactionResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.adamant.global.v1.CreateTransactionResponse.displayName = 'proto.adamant.global.v1.CreateTransactionResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.adamant.global.v1.CreateXRPInitTransactionsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.adamant.global.v1.CreateXRPInitTransactionsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.adamant.global.v1.CreateXRPInitTransactionsRequest.displayName = 'proto.adamant.global.v1.CreateXRPInitTransactionsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.adamant.global.v1.CreateInitTransactionRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.adamant.global.v1.CreateInitTransactionRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.adamant.global.v1.CreateInitTransactionRequest.displayName = 'proto.adamant.global.v1.CreateInitTransactionRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.adamant.global.v1.SignTransactionRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.adamant.global.v1.SignTransactionRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.adamant.global.v1.SignTransactionRequest.displayName = 'proto.adamant.global.v1.SignTransactionRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.adamant.global.v1.SignXRPInitTransactionsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.adamant.global.v1.SignXRPInitTransactionsRequest.repeatedFields_, null);
};
goog.inherits(proto.adamant.global.v1.SignXRPInitTransactionsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.adamant.global.v1.SignXRPInitTransactionsRequest.displayName = 'proto.adamant.global.v1.SignXRPInitTransactionsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.adamant.global.v1.SignInitTransactionRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.adamant.global.v1.SignInitTransactionRequest.repeatedFields_, null);
};
goog.inherits(proto.adamant.global.v1.SignInitTransactionRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.adamant.global.v1.SignInitTransactionRequest.displayName = 'proto.adamant.global.v1.SignInitTransactionRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.adamant.global.v1.SendTransactionRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.adamant.global.v1.SendTransactionRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.adamant.global.v1.SendTransactionRequest.displayName = 'proto.adamant.global.v1.SendTransactionRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.adamant.global.v1.SendTransactionResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.adamant.global.v1.SendTransactionResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.adamant.global.v1.SendTransactionResponse.displayName = 'proto.adamant.global.v1.SendTransactionResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.adamant.global.v1.SendXRPInitTransactionsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.adamant.global.v1.SendXRPInitTransactionsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.adamant.global.v1.SendXRPInitTransactionsRequest.displayName = 'proto.adamant.global.v1.SendXRPInitTransactionsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.adamant.global.v1.SendXRPInitTransactionsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.adamant.global.v1.SendXRPInitTransactionsResponse.repeatedFields_, null);
};
goog.inherits(proto.adamant.global.v1.SendXRPInitTransactionsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.adamant.global.v1.SendXRPInitTransactionsResponse.displayName = 'proto.adamant.global.v1.SendXRPInitTransactionsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.adamant.global.v1.SendInitTransactionRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.adamant.global.v1.SendInitTransactionRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.adamant.global.v1.SendInitTransactionRequest.displayName = 'proto.adamant.global.v1.SendInitTransactionRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.adamant.global.v1.SendInitTransactionResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.adamant.global.v1.SendInitTransactionResponse.repeatedFields_, null);
};
goog.inherits(proto.adamant.global.v1.SendInitTransactionResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.adamant.global.v1.SendInitTransactionResponse.displayName = 'proto.adamant.global.v1.SendInitTransactionResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.adamant.global.v1.CancelTransactionRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.adamant.global.v1.CancelTransactionRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.adamant.global.v1.CancelTransactionRequest.displayName = 'proto.adamant.global.v1.CancelTransactionRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.adamant.global.v1.GetTransactionRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.adamant.global.v1.GetTransactionRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.adamant.global.v1.GetTransactionRequest.displayName = 'proto.adamant.global.v1.GetTransactionRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.adamant.global.v1.GetTransactionByTxIDRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.adamant.global.v1.GetTransactionByTxIDRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.adamant.global.v1.GetTransactionByTxIDRequest.displayName = 'proto.adamant.global.v1.GetTransactionByTxIDRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.adamant.global.v1.ListTransactionsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.adamant.global.v1.ListTransactionsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.adamant.global.v1.ListTransactionsRequest.displayName = 'proto.adamant.global.v1.ListTransactionsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.adamant.global.v1.ListTransactionsByFilterRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.adamant.global.v1.ListTransactionsByFilterRequest.repeatedFields_, null);
};
goog.inherits(proto.adamant.global.v1.ListTransactionsByFilterRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.adamant.global.v1.ListTransactionsByFilterRequest.displayName = 'proto.adamant.global.v1.ListTransactionsByFilterRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.adamant.global.v1.ListTransactionsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.adamant.global.v1.ListTransactionsResponse.repeatedFields_, null);
};
goog.inherits(proto.adamant.global.v1.ListTransactionsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.adamant.global.v1.ListTransactionsResponse.displayName = 'proto.adamant.global.v1.ListTransactionsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.adamant.global.v1.GetSignInfoRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.adamant.global.v1.GetSignInfoRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.adamant.global.v1.GetSignInfoRequest.displayName = 'proto.adamant.global.v1.GetSignInfoRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.adamant.global.v1.ListSignInfoRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.adamant.global.v1.ListSignInfoRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.adamant.global.v1.ListSignInfoRequest.displayName = 'proto.adamant.global.v1.ListSignInfoRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.adamant.global.v1.ListSignInfoResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.adamant.global.v1.ListSignInfoResponse.repeatedFields_, null);
};
goog.inherits(proto.adamant.global.v1.ListSignInfoResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.adamant.global.v1.ListSignInfoResponse.displayName = 'proto.adamant.global.v1.ListSignInfoResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.adamant.global.v1.ListXRPInitSignInfoRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.adamant.global.v1.ListXRPInitSignInfoRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.adamant.global.v1.ListXRPInitSignInfoRequest.displayName = 'proto.adamant.global.v1.ListXRPInitSignInfoRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.adamant.global.v1.ListXRPInitSignInfoResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.adamant.global.v1.ListXRPInitSignInfoResponse.repeatedFields_, null);
};
goog.inherits(proto.adamant.global.v1.ListXRPInitSignInfoResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.adamant.global.v1.ListXRPInitSignInfoResponse.displayName = 'proto.adamant.global.v1.ListXRPInitSignInfoResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.adamant.global.v1.ListInitSignInfoRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.adamant.global.v1.ListInitSignInfoRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.adamant.global.v1.ListInitSignInfoRequest.displayName = 'proto.adamant.global.v1.ListInitSignInfoRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.adamant.global.v1.ListTransfersRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.adamant.global.v1.ListTransfersRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.adamant.global.v1.ListTransfersRequest.displayName = 'proto.adamant.global.v1.ListTransfersRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.adamant.global.v1.ListTransfersByFilterRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.adamant.global.v1.ListTransfersByFilterRequest.repeatedFields_, null);
};
goog.inherits(proto.adamant.global.v1.ListTransfersByFilterRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.adamant.global.v1.ListTransfersByFilterRequest.displayName = 'proto.adamant.global.v1.ListTransfersByFilterRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.adamant.global.v1.ListTransfersResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.adamant.global.v1.ListTransfersResponse.repeatedFields_, null);
};
goog.inherits(proto.adamant.global.v1.ListTransfersResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.adamant.global.v1.ListTransfersResponse.displayName = 'proto.adamant.global.v1.ListTransfersResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.adamant.global.v1.GetRateSnapshotRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.adamant.global.v1.GetRateSnapshotRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.adamant.global.v1.GetRateSnapshotRequest.displayName = 'proto.adamant.global.v1.GetRateSnapshotRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.adamant.global.v1.GetLatestRateSnapshotRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.adamant.global.v1.GetLatestRateSnapshotRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.adamant.global.v1.GetLatestRateSnapshotRequest.displayName = 'proto.adamant.global.v1.GetLatestRateSnapshotRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.adamant.global.v1.SetRatesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.adamant.global.v1.SetRatesRequest.repeatedFields_, null);
};
goog.inherits(proto.adamant.global.v1.SetRatesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.adamant.global.v1.SetRatesRequest.displayName = 'proto.adamant.global.v1.SetRatesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.adamant.global.v1.SetRatesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.adamant.global.v1.SetRatesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.adamant.global.v1.SetRatesResponse.displayName = 'proto.adamant.global.v1.SetRatesResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.adamant.global.v1.GetSpendableBalanceRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.adamant.global.v1.GetSpendableBalanceRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.adamant.global.v1.GetSpendableBalanceRequest.displayName = 'proto.adamant.global.v1.GetSpendableBalanceRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.adamant.global.v1.GetSpendableBalanceResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.adamant.global.v1.GetSpendableBalanceResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.adamant.global.v1.GetSpendableBalanceResponse.displayName = 'proto.adamant.global.v1.GetSpendableBalanceResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.adamant.global.v1.GetTotalBalanceRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.adamant.global.v1.GetTotalBalanceRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.adamant.global.v1.GetTotalBalanceRequest.displayName = 'proto.adamant.global.v1.GetTotalBalanceRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.adamant.global.v1.ListBalanceSnapshotsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.adamant.global.v1.ListBalanceSnapshotsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.adamant.global.v1.ListBalanceSnapshotsRequest.displayName = 'proto.adamant.global.v1.ListBalanceSnapshotsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.adamant.global.v1.ListBalanceSnapshotsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.adamant.global.v1.ListBalanceSnapshotsResponse.repeatedFields_, null);
};
goog.inherits(proto.adamant.global.v1.ListBalanceSnapshotsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.adamant.global.v1.ListBalanceSnapshotsResponse.displayName = 'proto.adamant.global.v1.ListBalanceSnapshotsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.adamant.global.v1.ListWalletBalanceSnapshotsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.adamant.global.v1.ListWalletBalanceSnapshotsRequest.repeatedFields_, null);
};
goog.inherits(proto.adamant.global.v1.ListWalletBalanceSnapshotsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.adamant.global.v1.ListWalletBalanceSnapshotsRequest.displayName = 'proto.adamant.global.v1.ListWalletBalanceSnapshotsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.adamant.global.v1.ListWalletBalanceSnapshotsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.adamant.global.v1.ListWalletBalanceSnapshotsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.adamant.global.v1.ListWalletBalanceSnapshotsResponse.displayName = 'proto.adamant.global.v1.ListWalletBalanceSnapshotsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.adamant.global.v1.ListTransferVolumeSnapshotsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.adamant.global.v1.ListTransferVolumeSnapshotsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.adamant.global.v1.ListTransferVolumeSnapshotsRequest.displayName = 'proto.adamant.global.v1.ListTransferVolumeSnapshotsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.adamant.global.v1.ListTransferVolumeSnapshotsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.adamant.global.v1.ListTransferVolumeSnapshotsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.adamant.global.v1.ListTransferVolumeSnapshotsResponse.displayName = 'proto.adamant.global.v1.ListTransferVolumeSnapshotsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.adamant.global.v1.ListWalletTransferVolumeSnapshotsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.adamant.global.v1.ListWalletTransferVolumeSnapshotsRequest.repeatedFields_, null);
};
goog.inherits(proto.adamant.global.v1.ListWalletTransferVolumeSnapshotsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.adamant.global.v1.ListWalletTransferVolumeSnapshotsRequest.displayName = 'proto.adamant.global.v1.ListWalletTransferVolumeSnapshotsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.adamant.global.v1.ListWalletTransferVolumeSnapshotsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.adamant.global.v1.ListWalletTransferVolumeSnapshotsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.adamant.global.v1.ListWalletTransferVolumeSnapshotsResponse.displayName = 'proto.adamant.global.v1.ListWalletTransferVolumeSnapshotsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.adamant.global.v1.CalculateFeeRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.adamant.global.v1.CalculateFeeRequest.repeatedFields_, null);
};
goog.inherits(proto.adamant.global.v1.CalculateFeeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.adamant.global.v1.CalculateFeeRequest.displayName = 'proto.adamant.global.v1.CalculateFeeRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.adamant.global.v1.CalculateFeeResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.adamant.global.v1.CalculateFeeResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.adamant.global.v1.CalculateFeeResponse.displayName = 'proto.adamant.global.v1.CalculateFeeResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.adamant.global.v1.GetMembersDeactivatabilitiesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.adamant.global.v1.GetMembersDeactivatabilitiesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.adamant.global.v1.GetMembersDeactivatabilitiesRequest.displayName = 'proto.adamant.global.v1.GetMembersDeactivatabilitiesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.adamant.global.v1.GetMembersDeactivatabilitiesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.adamant.global.v1.GetMembersDeactivatabilitiesResponse.repeatedFields_, null);
};
goog.inherits(proto.adamant.global.v1.GetMembersDeactivatabilitiesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.adamant.global.v1.GetMembersDeactivatabilitiesResponse.displayName = 'proto.adamant.global.v1.GetMembersDeactivatabilitiesResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.adamant.global.v1.GetRecommendedFeeRateRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.adamant.global.v1.GetRecommendedFeeRateRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.adamant.global.v1.GetRecommendedFeeRateRequest.displayName = 'proto.adamant.global.v1.GetRecommendedFeeRateRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.adamant.global.v1.GetRecommendedFeeRateResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.adamant.global.v1.GetRecommendedFeeRateResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.adamant.global.v1.GetRecommendedFeeRateResponse.displayName = 'proto.adamant.global.v1.GetRecommendedFeeRateResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.adamant.global.v1.ValidateAddressRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.adamant.global.v1.ValidateAddressRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.adamant.global.v1.ValidateAddressRequest.displayName = 'proto.adamant.global.v1.ValidateAddressRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.adamant.global.v1.ValidateAddressResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.adamant.global.v1.ValidateAddressResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.adamant.global.v1.ValidateAddressResponse.displayName = 'proto.adamant.global.v1.ValidateAddressResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.adamant.global.v1.ListConfirmationsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.adamant.global.v1.ListConfirmationsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.adamant.global.v1.ListConfirmationsRequest.displayName = 'proto.adamant.global.v1.ListConfirmationsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.adamant.global.v1.ListConfirmationsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.adamant.global.v1.ListConfirmationsResponse.repeatedFields_, null);
};
goog.inherits(proto.adamant.global.v1.ListConfirmationsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.adamant.global.v1.ListConfirmationsResponse.displayName = 'proto.adamant.global.v1.ListConfirmationsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.adamant.global.v1.CreateLabeledAddressRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.adamant.global.v1.CreateLabeledAddressRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.adamant.global.v1.CreateLabeledAddressRequest.displayName = 'proto.adamant.global.v1.CreateLabeledAddressRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.adamant.global.v1.CreateLabeledAddressResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.adamant.global.v1.CreateLabeledAddressResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.adamant.global.v1.CreateLabeledAddressResponse.displayName = 'proto.adamant.global.v1.CreateLabeledAddressResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.adamant.global.v1.UpdateLabeledAddressRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.adamant.global.v1.UpdateLabeledAddressRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.adamant.global.v1.UpdateLabeledAddressRequest.displayName = 'proto.adamant.global.v1.UpdateLabeledAddressRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.adamant.global.v1.GetLabeledAddressRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.adamant.global.v1.GetLabeledAddressRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.adamant.global.v1.GetLabeledAddressRequest.displayName = 'proto.adamant.global.v1.GetLabeledAddressRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.adamant.global.v1.ListLabeledAddressesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.adamant.global.v1.ListLabeledAddressesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.adamant.global.v1.ListLabeledAddressesRequest.displayName = 'proto.adamant.global.v1.ListLabeledAddressesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.adamant.global.v1.ListLabeledAddressesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.adamant.global.v1.ListLabeledAddressesResponse.repeatedFields_, null);
};
goog.inherits(proto.adamant.global.v1.ListLabeledAddressesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.adamant.global.v1.ListLabeledAddressesResponse.displayName = 'proto.adamant.global.v1.ListLabeledAddressesResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.adamant.global.v1.DeleteLabeledAddressRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.adamant.global.v1.DeleteLabeledAddressRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.adamant.global.v1.DeleteLabeledAddressRequest.displayName = 'proto.adamant.global.v1.DeleteLabeledAddressRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.adamant.global.v1.ReviewLabeledAddressProposalRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.adamant.global.v1.ReviewLabeledAddressProposalRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.adamant.global.v1.ReviewLabeledAddressProposalRequest.displayName = 'proto.adamant.global.v1.ReviewLabeledAddressProposalRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.adamant.global.v1.CreateWhitelistRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.adamant.global.v1.CreateWhitelistRequest.repeatedFields_, null);
};
goog.inherits(proto.adamant.global.v1.CreateWhitelistRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.adamant.global.v1.CreateWhitelistRequest.displayName = 'proto.adamant.global.v1.CreateWhitelistRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.adamant.global.v1.CreateWhitelistResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.adamant.global.v1.CreateWhitelistResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.adamant.global.v1.CreateWhitelistResponse.displayName = 'proto.adamant.global.v1.CreateWhitelistResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.adamant.global.v1.GetWhitelistRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.adamant.global.v1.GetWhitelistRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.adamant.global.v1.GetWhitelistRequest.displayName = 'proto.adamant.global.v1.GetWhitelistRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.adamant.global.v1.ListWhitelistsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.adamant.global.v1.ListWhitelistsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.adamant.global.v1.ListWhitelistsRequest.displayName = 'proto.adamant.global.v1.ListWhitelistsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.adamant.global.v1.ListWhitelistsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.adamant.global.v1.ListWhitelistsResponse.repeatedFields_, null);
};
goog.inherits(proto.adamant.global.v1.ListWhitelistsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.adamant.global.v1.ListWhitelistsResponse.displayName = 'proto.adamant.global.v1.ListWhitelistsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.adamant.global.v1.UpdateWhitelistRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.adamant.global.v1.UpdateWhitelistRequest.repeatedFields_, null);
};
goog.inherits(proto.adamant.global.v1.UpdateWhitelistRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.adamant.global.v1.UpdateWhitelistRequest.displayName = 'proto.adamant.global.v1.UpdateWhitelistRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.adamant.global.v1.UpdateWhitelistAddressesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.adamant.global.v1.UpdateWhitelistAddressesRequest.repeatedFields_, null);
};
goog.inherits(proto.adamant.global.v1.UpdateWhitelistAddressesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.adamant.global.v1.UpdateWhitelistAddressesRequest.displayName = 'proto.adamant.global.v1.UpdateWhitelistAddressesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.adamant.global.v1.DeleteWhitelistRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.adamant.global.v1.DeleteWhitelistRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.adamant.global.v1.DeleteWhitelistRequest.displayName = 'proto.adamant.global.v1.DeleteWhitelistRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.adamant.global.v1.CreateTransferLimitRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.adamant.global.v1.CreateTransferLimitRequest.repeatedFields_, null);
};
goog.inherits(proto.adamant.global.v1.CreateTransferLimitRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.adamant.global.v1.CreateTransferLimitRequest.displayName = 'proto.adamant.global.v1.CreateTransferLimitRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.adamant.global.v1.CreateTransferLimitResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.adamant.global.v1.CreateTransferLimitResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.adamant.global.v1.CreateTransferLimitResponse.displayName = 'proto.adamant.global.v1.CreateTransferLimitResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.adamant.global.v1.GetTransferLimitRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.adamant.global.v1.GetTransferLimitRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.adamant.global.v1.GetTransferLimitRequest.displayName = 'proto.adamant.global.v1.GetTransferLimitRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.adamant.global.v1.ListTransferLimitsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.adamant.global.v1.ListTransferLimitsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.adamant.global.v1.ListTransferLimitsRequest.displayName = 'proto.adamant.global.v1.ListTransferLimitsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.adamant.global.v1.ListTransferLimitsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.adamant.global.v1.ListTransferLimitsResponse.repeatedFields_, null);
};
goog.inherits(proto.adamant.global.v1.ListTransferLimitsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.adamant.global.v1.ListTransferLimitsResponse.displayName = 'proto.adamant.global.v1.ListTransferLimitsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.adamant.global.v1.UpdateTransferLimitRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.adamant.global.v1.UpdateTransferLimitRequest.repeatedFields_, null);
};
goog.inherits(proto.adamant.global.v1.UpdateTransferLimitRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.adamant.global.v1.UpdateTransferLimitRequest.displayName = 'proto.adamant.global.v1.UpdateTransferLimitRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.adamant.global.v1.UpdateTransferLimitNameRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.adamant.global.v1.UpdateTransferLimitNameRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.adamant.global.v1.UpdateTransferLimitNameRequest.displayName = 'proto.adamant.global.v1.UpdateTransferLimitNameRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.adamant.global.v1.DeleteTransferLimitRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.adamant.global.v1.DeleteTransferLimitRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.adamant.global.v1.DeleteTransferLimitRequest.displayName = 'proto.adamant.global.v1.DeleteTransferLimitRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.adamant.global.v1.ReviewTransferLimitProposalRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.adamant.global.v1.ReviewTransferLimitProposalRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.adamant.global.v1.ReviewTransferLimitProposalRequest.displayName = 'proto.adamant.global.v1.ReviewTransferLimitProposalRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.adamant.global.v1.CreatePolicyRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.adamant.global.v1.CreatePolicyRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.adamant.global.v1.CreatePolicyRequest.displayName = 'proto.adamant.global.v1.CreatePolicyRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.adamant.global.v1.CreatePolicyResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.adamant.global.v1.CreatePolicyResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.adamant.global.v1.CreatePolicyResponse.displayName = 'proto.adamant.global.v1.CreatePolicyResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.adamant.global.v1.GetPolicyRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.adamant.global.v1.GetPolicyRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.adamant.global.v1.GetPolicyRequest.displayName = 'proto.adamant.global.v1.GetPolicyRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.adamant.global.v1.ListPoliciesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.adamant.global.v1.ListPoliciesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.adamant.global.v1.ListPoliciesRequest.displayName = 'proto.adamant.global.v1.ListPoliciesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.adamant.global.v1.IsDeletablePolicyRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.adamant.global.v1.IsDeletablePolicyRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.adamant.global.v1.IsDeletablePolicyRequest.displayName = 'proto.adamant.global.v1.IsDeletablePolicyRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.adamant.global.v1.IsDeletablePolicyResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.adamant.global.v1.IsDeletablePolicyResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.adamant.global.v1.IsDeletablePolicyResponse.displayName = 'proto.adamant.global.v1.IsDeletablePolicyResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.adamant.global.v1.IsDeletableLabeledAddressRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.adamant.global.v1.IsDeletableLabeledAddressRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.adamant.global.v1.IsDeletableLabeledAddressRequest.displayName = 'proto.adamant.global.v1.IsDeletableLabeledAddressRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.adamant.global.v1.IsDeletableLabeledAddressResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.adamant.global.v1.IsDeletableLabeledAddressResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.adamant.global.v1.IsDeletableLabeledAddressResponse.displayName = 'proto.adamant.global.v1.IsDeletableLabeledAddressResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.adamant.global.v1.IsDeletableWhitelistRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.adamant.global.v1.IsDeletableWhitelistRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.adamant.global.v1.IsDeletableWhitelistRequest.displayName = 'proto.adamant.global.v1.IsDeletableWhitelistRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.adamant.global.v1.IsDeletableWhitelistResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.adamant.global.v1.IsDeletableWhitelistResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.adamant.global.v1.IsDeletableWhitelistResponse.displayName = 'proto.adamant.global.v1.IsDeletableWhitelistResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.adamant.global.v1.IsDeletableTransferLimitRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.adamant.global.v1.IsDeletableTransferLimitRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.adamant.global.v1.IsDeletableTransferLimitRequest.displayName = 'proto.adamant.global.v1.IsDeletableTransferLimitRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.adamant.global.v1.IsDeletableTransferLimitResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.adamant.global.v1.IsDeletableTransferLimitResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.adamant.global.v1.IsDeletableTransferLimitResponse.displayName = 'proto.adamant.global.v1.IsDeletableTransferLimitResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.adamant.global.v1.ListPoliciesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.adamant.global.v1.ListPoliciesResponse.repeatedFields_, null);
};
goog.inherits(proto.adamant.global.v1.ListPoliciesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.adamant.global.v1.ListPoliciesResponse.displayName = 'proto.adamant.global.v1.ListPoliciesResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.adamant.global.v1.UpdatePolicyRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.adamant.global.v1.UpdatePolicyRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.adamant.global.v1.UpdatePolicyRequest.displayName = 'proto.adamant.global.v1.UpdatePolicyRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.adamant.global.v1.DeletePolicyRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.adamant.global.v1.DeletePolicyRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.adamant.global.v1.DeletePolicyRequest.displayName = 'proto.adamant.global.v1.DeletePolicyRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.adamant.global.v1.ReviewPolicyProposalRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.adamant.global.v1.ReviewPolicyProposalRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.adamant.global.v1.ReviewPolicyProposalRequest.displayName = 'proto.adamant.global.v1.ReviewPolicyProposalRequest';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.adamant.global.v1.ApproveWalletRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.adamant.global.v1.ApproveWalletRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.adamant.global.v1.ApproveWalletRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.ApproveWalletRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    walletId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.adamant.global.v1.ApproveWalletRequest}
 */
proto.adamant.global.v1.ApproveWalletRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.adamant.global.v1.ApproveWalletRequest;
  return proto.adamant.global.v1.ApproveWalletRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.adamant.global.v1.ApproveWalletRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.adamant.global.v1.ApproveWalletRequest}
 */
proto.adamant.global.v1.ApproveWalletRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setWalletId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.adamant.global.v1.ApproveWalletRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.adamant.global.v1.ApproveWalletRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.adamant.global.v1.ApproveWalletRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.ApproveWalletRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getWalletId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string wallet_id = 1;
 * @return {string}
 */
proto.adamant.global.v1.ApproveWalletRequest.prototype.getWalletId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.adamant.global.v1.ApproveWalletRequest.prototype.setWalletId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.adamant.global.v1.ApproveTransactionRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.adamant.global.v1.ApproveTransactionRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.adamant.global.v1.ApproveTransactionRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.ApproveTransactionRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    walletId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    transactionId: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.adamant.global.v1.ApproveTransactionRequest}
 */
proto.adamant.global.v1.ApproveTransactionRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.adamant.global.v1.ApproveTransactionRequest;
  return proto.adamant.global.v1.ApproveTransactionRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.adamant.global.v1.ApproveTransactionRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.adamant.global.v1.ApproveTransactionRequest}
 */
proto.adamant.global.v1.ApproveTransactionRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setWalletId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTransactionId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.adamant.global.v1.ApproveTransactionRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.adamant.global.v1.ApproveTransactionRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.adamant.global.v1.ApproveTransactionRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.ApproveTransactionRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getWalletId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTransactionId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string wallet_id = 1;
 * @return {string}
 */
proto.adamant.global.v1.ApproveTransactionRequest.prototype.getWalletId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.adamant.global.v1.ApproveTransactionRequest.prototype.setWalletId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string transaction_id = 2;
 * @return {string}
 */
proto.adamant.global.v1.ApproveTransactionRequest.prototype.getTransactionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.adamant.global.v1.ApproveTransactionRequest.prototype.setTransactionId = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.adamant.global.v1.CreateWalletRequest.repeatedFields_ = [7];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.adamant.global.v1.CreateWalletRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.adamant.global.v1.CreateWalletRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.adamant.global.v1.CreateWalletRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.CreateWalletRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    walletName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    coin: jspb.Message.getFieldWithDefault(msg, 2, 0),
    walletType: jspb.Message.getFieldWithDefault(msg, 3, 0),
    addressType: jspb.Message.getFieldWithDefault(msg, 4, 0),
    m: jspb.Message.getFieldWithDefault(msg, 5, 0),
    n: jspb.Message.getFieldWithDefault(msg, 6, 0),
    membersList: (f = jspb.Message.getRepeatedField(msg, 7)) == null ? undefined : f,
    requiredApprovalCount: jspb.Message.getFieldWithDefault(msg, 10, 0),
    policyId: jspb.Message.getFieldWithDefault(msg, 8, ""),
    destinationWalletId: jspb.Message.getFieldWithDefault(msg, 9, ""),
    watchOnly: jspb.Message.getBooleanFieldWithDefault(msg, 11, false),
    inheritWalletId: jspb.Message.getFieldWithDefault(msg, 12, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.adamant.global.v1.CreateWalletRequest}
 */
proto.adamant.global.v1.CreateWalletRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.adamant.global.v1.CreateWalletRequest;
  return proto.adamant.global.v1.CreateWalletRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.adamant.global.v1.CreateWalletRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.adamant.global.v1.CreateWalletRequest}
 */
proto.adamant.global.v1.CreateWalletRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setWalletName(value);
      break;
    case 2:
      var value = /** @type {!proto.gincoinc.global.v1.Coin} */ (reader.readEnum());
      msg.setCoin(value);
      break;
    case 3:
      var value = /** @type {!proto.adamant.global.v1.WalletType} */ (reader.readEnum());
      msg.setWalletType(value);
      break;
    case 4:
      var value = /** @type {!proto.gincoinc.global.v1.AddressType} */ (reader.readEnum());
      msg.setAddressType(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setM(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setN(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.addMembers(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setRequiredApprovalCount(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setPolicyId(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setDestinationWalletId(value);
      break;
    case 11:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setWatchOnly(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setInheritWalletId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.adamant.global.v1.CreateWalletRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.adamant.global.v1.CreateWalletRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.adamant.global.v1.CreateWalletRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.CreateWalletRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getWalletName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCoin();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getWalletType();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getAddressType();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
  f = message.getM();
  if (f !== 0) {
    writer.writeUint32(
      5,
      f
    );
  }
  f = message.getN();
  if (f !== 0) {
    writer.writeUint32(
      6,
      f
    );
  }
  f = message.getMembersList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      7,
      f
    );
  }
  f = message.getRequiredApprovalCount();
  if (f !== 0) {
    writer.writeUint32(
      10,
      f
    );
  }
  f = message.getPolicyId();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getDestinationWalletId();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getWatchOnly();
  if (f) {
    writer.writeBool(
      11,
      f
    );
  }
  f = message.getInheritWalletId();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
};


/**
 * optional string wallet_name = 1;
 * @return {string}
 */
proto.adamant.global.v1.CreateWalletRequest.prototype.getWalletName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.adamant.global.v1.CreateWalletRequest.prototype.setWalletName = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional gincoinc.global.v1.Coin coin = 2;
 * @return {!proto.gincoinc.global.v1.Coin}
 */
proto.adamant.global.v1.CreateWalletRequest.prototype.getCoin = function() {
  return /** @type {!proto.gincoinc.global.v1.Coin} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {!proto.gincoinc.global.v1.Coin} value */
proto.adamant.global.v1.CreateWalletRequest.prototype.setCoin = function(value) {
  jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional WalletType wallet_type = 3;
 * @return {!proto.adamant.global.v1.WalletType}
 */
proto.adamant.global.v1.CreateWalletRequest.prototype.getWalletType = function() {
  return /** @type {!proto.adamant.global.v1.WalletType} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {!proto.adamant.global.v1.WalletType} value */
proto.adamant.global.v1.CreateWalletRequest.prototype.setWalletType = function(value) {
  jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional gincoinc.global.v1.AddressType address_type = 4;
 * @return {!proto.gincoinc.global.v1.AddressType}
 */
proto.adamant.global.v1.CreateWalletRequest.prototype.getAddressType = function() {
  return /** @type {!proto.gincoinc.global.v1.AddressType} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {!proto.gincoinc.global.v1.AddressType} value */
proto.adamant.global.v1.CreateWalletRequest.prototype.setAddressType = function(value) {
  jspb.Message.setProto3EnumField(this, 4, value);
};


/**
 * optional uint32 m = 5;
 * @return {number}
 */
proto.adamant.global.v1.CreateWalletRequest.prototype.getM = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/** @param {number} value */
proto.adamant.global.v1.CreateWalletRequest.prototype.setM = function(value) {
  jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional uint32 n = 6;
 * @return {number}
 */
proto.adamant.global.v1.CreateWalletRequest.prototype.getN = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/** @param {number} value */
proto.adamant.global.v1.CreateWalletRequest.prototype.setN = function(value) {
  jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * repeated string members = 7;
 * @return {!Array<string>}
 */
proto.adamant.global.v1.CreateWalletRequest.prototype.getMembersList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 7));
};


/** @param {!Array<string>} value */
proto.adamant.global.v1.CreateWalletRequest.prototype.setMembersList = function(value) {
  jspb.Message.setField(this, 7, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 */
proto.adamant.global.v1.CreateWalletRequest.prototype.addMembers = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 7, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.adamant.global.v1.CreateWalletRequest.prototype.clearMembersList = function() {
  this.setMembersList([]);
};


/**
 * optional uint32 required_approval_count = 10;
 * @return {number}
 */
proto.adamant.global.v1.CreateWalletRequest.prototype.getRequiredApprovalCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/** @param {number} value */
proto.adamant.global.v1.CreateWalletRequest.prototype.setRequiredApprovalCount = function(value) {
  jspb.Message.setProto3IntField(this, 10, value);
};


/**
 * optional string policy_id = 8;
 * @return {string}
 */
proto.adamant.global.v1.CreateWalletRequest.prototype.getPolicyId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/** @param {string} value */
proto.adamant.global.v1.CreateWalletRequest.prototype.setPolicyId = function(value) {
  jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string destination_wallet_id = 9;
 * @return {string}
 */
proto.adamant.global.v1.CreateWalletRequest.prototype.getDestinationWalletId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/** @param {string} value */
proto.adamant.global.v1.CreateWalletRequest.prototype.setDestinationWalletId = function(value) {
  jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional bool watch_only = 11;
 * @return {boolean}
 */
proto.adamant.global.v1.CreateWalletRequest.prototype.getWatchOnly = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 11, false));
};


/** @param {boolean} value */
proto.adamant.global.v1.CreateWalletRequest.prototype.setWatchOnly = function(value) {
  jspb.Message.setProto3BooleanField(this, 11, value);
};


/**
 * optional string inherit_wallet_id = 12;
 * @return {string}
 */
proto.adamant.global.v1.CreateWalletRequest.prototype.getInheritWalletId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/** @param {string} value */
proto.adamant.global.v1.CreateWalletRequest.prototype.setInheritWalletId = function(value) {
  jspb.Message.setProto3StringField(this, 12, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.adamant.global.v1.CreateWalletResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.adamant.global.v1.CreateWalletResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.adamant.global.v1.CreateWalletResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.CreateWalletResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    walletId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.adamant.global.v1.CreateWalletResponse}
 */
proto.adamant.global.v1.CreateWalletResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.adamant.global.v1.CreateWalletResponse;
  return proto.adamant.global.v1.CreateWalletResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.adamant.global.v1.CreateWalletResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.adamant.global.v1.CreateWalletResponse}
 */
proto.adamant.global.v1.CreateWalletResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setWalletId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.adamant.global.v1.CreateWalletResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.adamant.global.v1.CreateWalletResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.adamant.global.v1.CreateWalletResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.CreateWalletResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getWalletId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string wallet_id = 1;
 * @return {string}
 */
proto.adamant.global.v1.CreateWalletResponse.prototype.getWalletId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.adamant.global.v1.CreateWalletResponse.prototype.setWalletId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.adamant.global.v1.GetWalletRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.adamant.global.v1.GetWalletRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.adamant.global.v1.GetWalletRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.GetWalletRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    walletId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.adamant.global.v1.GetWalletRequest}
 */
proto.adamant.global.v1.GetWalletRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.adamant.global.v1.GetWalletRequest;
  return proto.adamant.global.v1.GetWalletRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.adamant.global.v1.GetWalletRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.adamant.global.v1.GetWalletRequest}
 */
proto.adamant.global.v1.GetWalletRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setWalletId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.adamant.global.v1.GetWalletRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.adamant.global.v1.GetWalletRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.adamant.global.v1.GetWalletRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.GetWalletRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getWalletId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string wallet_id = 1;
 * @return {string}
 */
proto.adamant.global.v1.GetWalletRequest.prototype.getWalletId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.adamant.global.v1.GetWalletRequest.prototype.setWalletId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.adamant.global.v1.BatchGetWalletsWithoutBalanceRequest.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.adamant.global.v1.BatchGetWalletsWithoutBalanceRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.adamant.global.v1.BatchGetWalletsWithoutBalanceRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.adamant.global.v1.BatchGetWalletsWithoutBalanceRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.BatchGetWalletsWithoutBalanceRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    walletIdsList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.adamant.global.v1.BatchGetWalletsWithoutBalanceRequest}
 */
proto.adamant.global.v1.BatchGetWalletsWithoutBalanceRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.adamant.global.v1.BatchGetWalletsWithoutBalanceRequest;
  return proto.adamant.global.v1.BatchGetWalletsWithoutBalanceRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.adamant.global.v1.BatchGetWalletsWithoutBalanceRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.adamant.global.v1.BatchGetWalletsWithoutBalanceRequest}
 */
proto.adamant.global.v1.BatchGetWalletsWithoutBalanceRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addWalletIds(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.adamant.global.v1.BatchGetWalletsWithoutBalanceRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.adamant.global.v1.BatchGetWalletsWithoutBalanceRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.adamant.global.v1.BatchGetWalletsWithoutBalanceRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.BatchGetWalletsWithoutBalanceRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getWalletIdsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
};


/**
 * repeated string wallet_ids = 1;
 * @return {!Array<string>}
 */
proto.adamant.global.v1.BatchGetWalletsWithoutBalanceRequest.prototype.getWalletIdsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/** @param {!Array<string>} value */
proto.adamant.global.v1.BatchGetWalletsWithoutBalanceRequest.prototype.setWalletIdsList = function(value) {
  jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 */
proto.adamant.global.v1.BatchGetWalletsWithoutBalanceRequest.prototype.addWalletIds = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.adamant.global.v1.BatchGetWalletsWithoutBalanceRequest.prototype.clearWalletIdsList = function() {
  this.setWalletIdsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.adamant.global.v1.BatchGetWalletsWithoutBalanceResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.adamant.global.v1.BatchGetWalletsWithoutBalanceResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.adamant.global.v1.BatchGetWalletsWithoutBalanceResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.adamant.global.v1.BatchGetWalletsWithoutBalanceResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.BatchGetWalletsWithoutBalanceResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    walletsList: jspb.Message.toObjectList(msg.getWalletsList(),
    gincoinc_adamant_global_v1_adamantglobalv1_model_pb.WalletWithoutBalance.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.adamant.global.v1.BatchGetWalletsWithoutBalanceResponse}
 */
proto.adamant.global.v1.BatchGetWalletsWithoutBalanceResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.adamant.global.v1.BatchGetWalletsWithoutBalanceResponse;
  return proto.adamant.global.v1.BatchGetWalletsWithoutBalanceResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.adamant.global.v1.BatchGetWalletsWithoutBalanceResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.adamant.global.v1.BatchGetWalletsWithoutBalanceResponse}
 */
proto.adamant.global.v1.BatchGetWalletsWithoutBalanceResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new gincoinc_adamant_global_v1_adamantglobalv1_model_pb.WalletWithoutBalance;
      reader.readMessage(value,gincoinc_adamant_global_v1_adamantglobalv1_model_pb.WalletWithoutBalance.deserializeBinaryFromReader);
      msg.addWallets(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.adamant.global.v1.BatchGetWalletsWithoutBalanceResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.adamant.global.v1.BatchGetWalletsWithoutBalanceResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.adamant.global.v1.BatchGetWalletsWithoutBalanceResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.BatchGetWalletsWithoutBalanceResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getWalletsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      gincoinc_adamant_global_v1_adamantglobalv1_model_pb.WalletWithoutBalance.serializeBinaryToWriter
    );
  }
};


/**
 * repeated WalletWithoutBalance wallets = 1;
 * @return {!Array<!proto.adamant.global.v1.WalletWithoutBalance>}
 */
proto.adamant.global.v1.BatchGetWalletsWithoutBalanceResponse.prototype.getWalletsList = function() {
  return /** @type{!Array<!proto.adamant.global.v1.WalletWithoutBalance>} */ (
    jspb.Message.getRepeatedWrapperField(this, gincoinc_adamant_global_v1_adamantglobalv1_model_pb.WalletWithoutBalance, 1));
};


/** @param {!Array<!proto.adamant.global.v1.WalletWithoutBalance>} value */
proto.adamant.global.v1.BatchGetWalletsWithoutBalanceResponse.prototype.setWalletsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.adamant.global.v1.WalletWithoutBalance=} opt_value
 * @param {number=} opt_index
 * @return {!proto.adamant.global.v1.WalletWithoutBalance}
 */
proto.adamant.global.v1.BatchGetWalletsWithoutBalanceResponse.prototype.addWallets = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.adamant.global.v1.WalletWithoutBalance, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.adamant.global.v1.BatchGetWalletsWithoutBalanceResponse.prototype.clearWalletsList = function() {
  this.setWalletsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.adamant.global.v1.CancelWalletRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.adamant.global.v1.CancelWalletRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.adamant.global.v1.CancelWalletRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.CancelWalletRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    walletId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.adamant.global.v1.CancelWalletRequest}
 */
proto.adamant.global.v1.CancelWalletRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.adamant.global.v1.CancelWalletRequest;
  return proto.adamant.global.v1.CancelWalletRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.adamant.global.v1.CancelWalletRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.adamant.global.v1.CancelWalletRequest}
 */
proto.adamant.global.v1.CancelWalletRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setWalletId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.adamant.global.v1.CancelWalletRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.adamant.global.v1.CancelWalletRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.adamant.global.v1.CancelWalletRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.CancelWalletRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getWalletId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string wallet_id = 1;
 * @return {string}
 */
proto.adamant.global.v1.CancelWalletRequest.prototype.getWalletId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.adamant.global.v1.CancelWalletRequest.prototype.setWalletId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.adamant.global.v1.ArchiveWalletRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.adamant.global.v1.ArchiveWalletRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.adamant.global.v1.ArchiveWalletRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.ArchiveWalletRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    walletId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.adamant.global.v1.ArchiveWalletRequest}
 */
proto.adamant.global.v1.ArchiveWalletRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.adamant.global.v1.ArchiveWalletRequest;
  return proto.adamant.global.v1.ArchiveWalletRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.adamant.global.v1.ArchiveWalletRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.adamant.global.v1.ArchiveWalletRequest}
 */
proto.adamant.global.v1.ArchiveWalletRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setWalletId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.adamant.global.v1.ArchiveWalletRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.adamant.global.v1.ArchiveWalletRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.adamant.global.v1.ArchiveWalletRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.ArchiveWalletRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getWalletId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string wallet_id = 1;
 * @return {string}
 */
proto.adamant.global.v1.ArchiveWalletRequest.prototype.getWalletId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.adamant.global.v1.ArchiveWalletRequest.prototype.setWalletId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.adamant.global.v1.UnArchiveWalletRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.adamant.global.v1.UnArchiveWalletRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.adamant.global.v1.UnArchiveWalletRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.UnArchiveWalletRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    walletId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.adamant.global.v1.UnArchiveWalletRequest}
 */
proto.adamant.global.v1.UnArchiveWalletRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.adamant.global.v1.UnArchiveWalletRequest;
  return proto.adamant.global.v1.UnArchiveWalletRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.adamant.global.v1.UnArchiveWalletRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.adamant.global.v1.UnArchiveWalletRequest}
 */
proto.adamant.global.v1.UnArchiveWalletRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setWalletId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.adamant.global.v1.UnArchiveWalletRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.adamant.global.v1.UnArchiveWalletRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.adamant.global.v1.UnArchiveWalletRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.UnArchiveWalletRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getWalletId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string wallet_id = 1;
 * @return {string}
 */
proto.adamant.global.v1.UnArchiveWalletRequest.prototype.getWalletId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.adamant.global.v1.UnArchiveWalletRequest.prototype.setWalletId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.adamant.global.v1.ListWalletsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.adamant.global.v1.ListWalletsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.adamant.global.v1.ListWalletsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.ListWalletsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    pageSize: jspb.Message.getFieldWithDefault(msg, 1, 0),
    pageToken: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.adamant.global.v1.ListWalletsRequest}
 */
proto.adamant.global.v1.ListWalletsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.adamant.global.v1.ListWalletsRequest;
  return proto.adamant.global.v1.ListWalletsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.adamant.global.v1.ListWalletsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.adamant.global.v1.ListWalletsRequest}
 */
proto.adamant.global.v1.ListWalletsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPageSize(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPageToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.adamant.global.v1.ListWalletsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.adamant.global.v1.ListWalletsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.adamant.global.v1.ListWalletsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.ListWalletsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPageSize();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getPageToken();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional uint32 page_size = 1;
 * @return {number}
 */
proto.adamant.global.v1.ListWalletsRequest.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.adamant.global.v1.ListWalletsRequest.prototype.setPageSize = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string page_token = 2;
 * @return {string}
 */
proto.adamant.global.v1.ListWalletsRequest.prototype.getPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.adamant.global.v1.ListWalletsRequest.prototype.setPageToken = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.adamant.global.v1.ListWalletsByFilterRequest.repeatedFields_ = [6,7];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.adamant.global.v1.ListWalletsByFilterRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.adamant.global.v1.ListWalletsByFilterRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.adamant.global.v1.ListWalletsByFilterRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.ListWalletsByFilterRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    filterType: jspb.Message.getFieldWithDefault(msg, 1, 0),
    walletId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    walletName: jspb.Message.getFieldWithDefault(msg, 3, ""),
    address: jspb.Message.getFieldWithDefault(msg, 4, ""),
    watchOnly: jspb.Message.getBooleanFieldWithDefault(msg, 10, false),
    coin: jspb.Message.getFieldWithDefault(msg, 5, 0),
    walletTypeList: (f = jspb.Message.getRepeatedField(msg, 6)) == null ? undefined : f,
    walletStateList: (f = jspb.Message.getRepeatedField(msg, 7)) == null ? undefined : f,
    pageSize: jspb.Message.getFieldWithDefault(msg, 8, 0),
    pageToken: jspb.Message.getFieldWithDefault(msg, 9, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.adamant.global.v1.ListWalletsByFilterRequest}
 */
proto.adamant.global.v1.ListWalletsByFilterRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.adamant.global.v1.ListWalletsByFilterRequest;
  return proto.adamant.global.v1.ListWalletsByFilterRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.adamant.global.v1.ListWalletsByFilterRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.adamant.global.v1.ListWalletsByFilterRequest}
 */
proto.adamant.global.v1.ListWalletsByFilterRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.adamant.global.v1.ListFilterType} */ (reader.readEnum());
      msg.setFilterType(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setWalletId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setWalletName(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress(value);
      break;
    case 10:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setWatchOnly(value);
      break;
    case 5:
      var value = /** @type {!proto.gincoinc.global.v1.Coin} */ (reader.readEnum());
      msg.setCoin(value);
      break;
    case 6:
      var value = /** @type {!Array<!proto.adamant.global.v1.WalletType>} */ (reader.readPackedEnum());
      msg.setWalletTypeList(value);
      break;
    case 7:
      var value = /** @type {!Array<!proto.adamant.global.v1.WalletState>} */ (reader.readPackedEnum());
      msg.setWalletStateList(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPageSize(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setPageToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.adamant.global.v1.ListWalletsByFilterRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.adamant.global.v1.ListWalletsByFilterRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.adamant.global.v1.ListWalletsByFilterRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.ListWalletsByFilterRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFilterType();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getWalletId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getWalletName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getAddress();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getWatchOnly();
  if (f) {
    writer.writeBool(
      10,
      f
    );
  }
  f = message.getCoin();
  if (f !== 0.0) {
    writer.writeEnum(
      5,
      f
    );
  }
  f = message.getWalletTypeList();
  if (f.length > 0) {
    writer.writePackedEnum(
      6,
      f
    );
  }
  f = message.getWalletStateList();
  if (f.length > 0) {
    writer.writePackedEnum(
      7,
      f
    );
  }
  f = message.getPageSize();
  if (f !== 0) {
    writer.writeUint32(
      8,
      f
    );
  }
  f = message.getPageToken();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
};


/**
 * optional ListFilterType filter_type = 1;
 * @return {!proto.adamant.global.v1.ListFilterType}
 */
proto.adamant.global.v1.ListWalletsByFilterRequest.prototype.getFilterType = function() {
  return /** @type {!proto.adamant.global.v1.ListFilterType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {!proto.adamant.global.v1.ListFilterType} value */
proto.adamant.global.v1.ListWalletsByFilterRequest.prototype.setFilterType = function(value) {
  jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional string wallet_id = 2;
 * @return {string}
 */
proto.adamant.global.v1.ListWalletsByFilterRequest.prototype.getWalletId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.adamant.global.v1.ListWalletsByFilterRequest.prototype.setWalletId = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string wallet_name = 3;
 * @return {string}
 */
proto.adamant.global.v1.ListWalletsByFilterRequest.prototype.getWalletName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.adamant.global.v1.ListWalletsByFilterRequest.prototype.setWalletName = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string address = 4;
 * @return {string}
 */
proto.adamant.global.v1.ListWalletsByFilterRequest.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.adamant.global.v1.ListWalletsByFilterRequest.prototype.setAddress = function(value) {
  jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional bool watch_only = 10;
 * @return {boolean}
 */
proto.adamant.global.v1.ListWalletsByFilterRequest.prototype.getWatchOnly = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 10, false));
};


/** @param {boolean} value */
proto.adamant.global.v1.ListWalletsByFilterRequest.prototype.setWatchOnly = function(value) {
  jspb.Message.setProto3BooleanField(this, 10, value);
};


/**
 * optional gincoinc.global.v1.Coin coin = 5;
 * @return {!proto.gincoinc.global.v1.Coin}
 */
proto.adamant.global.v1.ListWalletsByFilterRequest.prototype.getCoin = function() {
  return /** @type {!proto.gincoinc.global.v1.Coin} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/** @param {!proto.gincoinc.global.v1.Coin} value */
proto.adamant.global.v1.ListWalletsByFilterRequest.prototype.setCoin = function(value) {
  jspb.Message.setProto3EnumField(this, 5, value);
};


/**
 * repeated WalletType wallet_type = 6;
 * @return {!Array<!proto.adamant.global.v1.WalletType>}
 */
proto.adamant.global.v1.ListWalletsByFilterRequest.prototype.getWalletTypeList = function() {
  return /** @type {!Array<!proto.adamant.global.v1.WalletType>} */ (jspb.Message.getRepeatedField(this, 6));
};


/** @param {!Array<!proto.adamant.global.v1.WalletType>} value */
proto.adamant.global.v1.ListWalletsByFilterRequest.prototype.setWalletTypeList = function(value) {
  jspb.Message.setField(this, 6, value || []);
};


/**
 * @param {!proto.adamant.global.v1.WalletType} value
 * @param {number=} opt_index
 */
proto.adamant.global.v1.ListWalletsByFilterRequest.prototype.addWalletType = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 6, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.adamant.global.v1.ListWalletsByFilterRequest.prototype.clearWalletTypeList = function() {
  this.setWalletTypeList([]);
};


/**
 * repeated WalletState wallet_state = 7;
 * @return {!Array<!proto.adamant.global.v1.WalletState>}
 */
proto.adamant.global.v1.ListWalletsByFilterRequest.prototype.getWalletStateList = function() {
  return /** @type {!Array<!proto.adamant.global.v1.WalletState>} */ (jspb.Message.getRepeatedField(this, 7));
};


/** @param {!Array<!proto.adamant.global.v1.WalletState>} value */
proto.adamant.global.v1.ListWalletsByFilterRequest.prototype.setWalletStateList = function(value) {
  jspb.Message.setField(this, 7, value || []);
};


/**
 * @param {!proto.adamant.global.v1.WalletState} value
 * @param {number=} opt_index
 */
proto.adamant.global.v1.ListWalletsByFilterRequest.prototype.addWalletState = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 7, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.adamant.global.v1.ListWalletsByFilterRequest.prototype.clearWalletStateList = function() {
  this.setWalletStateList([]);
};


/**
 * optional uint32 page_size = 8;
 * @return {number}
 */
proto.adamant.global.v1.ListWalletsByFilterRequest.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/** @param {number} value */
proto.adamant.global.v1.ListWalletsByFilterRequest.prototype.setPageSize = function(value) {
  jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * optional string page_token = 9;
 * @return {string}
 */
proto.adamant.global.v1.ListWalletsByFilterRequest.prototype.getPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/** @param {string} value */
proto.adamant.global.v1.ListWalletsByFilterRequest.prototype.setPageToken = function(value) {
  jspb.Message.setProto3StringField(this, 9, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.adamant.global.v1.ListWalletsResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.adamant.global.v1.ListWalletsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.adamant.global.v1.ListWalletsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.adamant.global.v1.ListWalletsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.ListWalletsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    walletsList: jspb.Message.toObjectList(msg.getWalletsList(),
    gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Wallet.toObject, includeInstance),
    nextPageToken: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.adamant.global.v1.ListWalletsResponse}
 */
proto.adamant.global.v1.ListWalletsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.adamant.global.v1.ListWalletsResponse;
  return proto.adamant.global.v1.ListWalletsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.adamant.global.v1.ListWalletsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.adamant.global.v1.ListWalletsResponse}
 */
proto.adamant.global.v1.ListWalletsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Wallet;
      reader.readMessage(value,gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Wallet.deserializeBinaryFromReader);
      msg.addWallets(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setNextPageToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.adamant.global.v1.ListWalletsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.adamant.global.v1.ListWalletsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.adamant.global.v1.ListWalletsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.ListWalletsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getWalletsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Wallet.serializeBinaryToWriter
    );
  }
  f = message.getNextPageToken();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * repeated Wallet wallets = 1;
 * @return {!Array<!proto.adamant.global.v1.Wallet>}
 */
proto.adamant.global.v1.ListWalletsResponse.prototype.getWalletsList = function() {
  return /** @type{!Array<!proto.adamant.global.v1.Wallet>} */ (
    jspb.Message.getRepeatedWrapperField(this, gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Wallet, 1));
};


/** @param {!Array<!proto.adamant.global.v1.Wallet>} value */
proto.adamant.global.v1.ListWalletsResponse.prototype.setWalletsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.adamant.global.v1.Wallet=} opt_value
 * @param {number=} opt_index
 * @return {!proto.adamant.global.v1.Wallet}
 */
proto.adamant.global.v1.ListWalletsResponse.prototype.addWallets = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.adamant.global.v1.Wallet, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.adamant.global.v1.ListWalletsResponse.prototype.clearWalletsList = function() {
  this.setWalletsList([]);
};


/**
 * optional string next_page_token = 2;
 * @return {string}
 */
proto.adamant.global.v1.ListWalletsResponse.prototype.getNextPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.adamant.global.v1.ListWalletsResponse.prototype.setNextPageToken = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.adamant.global.v1.ListBaseWalletsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.adamant.global.v1.ListBaseWalletsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.adamant.global.v1.ListBaseWalletsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.ListBaseWalletsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.adamant.global.v1.ListBaseWalletsRequest}
 */
proto.adamant.global.v1.ListBaseWalletsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.adamant.global.v1.ListBaseWalletsRequest;
  return proto.adamant.global.v1.ListBaseWalletsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.adamant.global.v1.ListBaseWalletsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.adamant.global.v1.ListBaseWalletsRequest}
 */
proto.adamant.global.v1.ListBaseWalletsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.adamant.global.v1.ListBaseWalletsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.adamant.global.v1.ListBaseWalletsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.adamant.global.v1.ListBaseWalletsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.ListBaseWalletsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.adamant.global.v1.ListBaseWalletsResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.adamant.global.v1.ListBaseWalletsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.adamant.global.v1.ListBaseWalletsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.adamant.global.v1.ListBaseWalletsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.ListBaseWalletsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    walletsList: jspb.Message.toObjectList(msg.getWalletsList(),
    gincoinc_adamant_global_v1_adamantglobalv1_model_pb.WalletWithoutBalance.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.adamant.global.v1.ListBaseWalletsResponse}
 */
proto.adamant.global.v1.ListBaseWalletsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.adamant.global.v1.ListBaseWalletsResponse;
  return proto.adamant.global.v1.ListBaseWalletsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.adamant.global.v1.ListBaseWalletsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.adamant.global.v1.ListBaseWalletsResponse}
 */
proto.adamant.global.v1.ListBaseWalletsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new gincoinc_adamant_global_v1_adamantglobalv1_model_pb.WalletWithoutBalance;
      reader.readMessage(value,gincoinc_adamant_global_v1_adamantglobalv1_model_pb.WalletWithoutBalance.deserializeBinaryFromReader);
      msg.addWallets(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.adamant.global.v1.ListBaseWalletsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.adamant.global.v1.ListBaseWalletsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.adamant.global.v1.ListBaseWalletsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.ListBaseWalletsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getWalletsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      gincoinc_adamant_global_v1_adamantglobalv1_model_pb.WalletWithoutBalance.serializeBinaryToWriter
    );
  }
};


/**
 * repeated WalletWithoutBalance wallets = 1;
 * @return {!Array<!proto.adamant.global.v1.WalletWithoutBalance>}
 */
proto.adamant.global.v1.ListBaseWalletsResponse.prototype.getWalletsList = function() {
  return /** @type{!Array<!proto.adamant.global.v1.WalletWithoutBalance>} */ (
    jspb.Message.getRepeatedWrapperField(this, gincoinc_adamant_global_v1_adamantglobalv1_model_pb.WalletWithoutBalance, 1));
};


/** @param {!Array<!proto.adamant.global.v1.WalletWithoutBalance>} value */
proto.adamant.global.v1.ListBaseWalletsResponse.prototype.setWalletsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.adamant.global.v1.WalletWithoutBalance=} opt_value
 * @param {number=} opt_index
 * @return {!proto.adamant.global.v1.WalletWithoutBalance}
 */
proto.adamant.global.v1.ListBaseWalletsResponse.prototype.addWallets = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.adamant.global.v1.WalletWithoutBalance, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.adamant.global.v1.ListBaseWalletsResponse.prototype.clearWalletsList = function() {
  this.setWalletsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.adamant.global.v1.UpdateWalletNameRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.adamant.global.v1.UpdateWalletNameRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.adamant.global.v1.UpdateWalletNameRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.UpdateWalletNameRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    walletId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    name: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.adamant.global.v1.UpdateWalletNameRequest}
 */
proto.adamant.global.v1.UpdateWalletNameRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.adamant.global.v1.UpdateWalletNameRequest;
  return proto.adamant.global.v1.UpdateWalletNameRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.adamant.global.v1.UpdateWalletNameRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.adamant.global.v1.UpdateWalletNameRequest}
 */
proto.adamant.global.v1.UpdateWalletNameRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setWalletId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.adamant.global.v1.UpdateWalletNameRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.adamant.global.v1.UpdateWalletNameRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.adamant.global.v1.UpdateWalletNameRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.UpdateWalletNameRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getWalletId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string wallet_id = 1;
 * @return {string}
 */
proto.adamant.global.v1.UpdateWalletNameRequest.prototype.getWalletId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.adamant.global.v1.UpdateWalletNameRequest.prototype.setWalletId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.adamant.global.v1.UpdateWalletNameRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.adamant.global.v1.UpdateWalletNameRequest.prototype.setName = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.adamant.global.v1.UpdateWalletValidationRequest.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.adamant.global.v1.UpdateWalletValidationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.adamant.global.v1.UpdateWalletValidationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.adamant.global.v1.UpdateWalletValidationRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.UpdateWalletValidationRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    walletId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    newValidatorIdsList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f,
    newRequiredApprovalCount: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.adamant.global.v1.UpdateWalletValidationRequest}
 */
proto.adamant.global.v1.UpdateWalletValidationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.adamant.global.v1.UpdateWalletValidationRequest;
  return proto.adamant.global.v1.UpdateWalletValidationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.adamant.global.v1.UpdateWalletValidationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.adamant.global.v1.UpdateWalletValidationRequest}
 */
proto.adamant.global.v1.UpdateWalletValidationRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setWalletId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addNewValidatorIds(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setNewRequiredApprovalCount(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.adamant.global.v1.UpdateWalletValidationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.adamant.global.v1.UpdateWalletValidationRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.adamant.global.v1.UpdateWalletValidationRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.UpdateWalletValidationRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getWalletId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getNewValidatorIdsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
  f = message.getNewRequiredApprovalCount();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
};


/**
 * optional string wallet_id = 1;
 * @return {string}
 */
proto.adamant.global.v1.UpdateWalletValidationRequest.prototype.getWalletId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.adamant.global.v1.UpdateWalletValidationRequest.prototype.setWalletId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated string new_validator_ids = 2;
 * @return {!Array<string>}
 */
proto.adamant.global.v1.UpdateWalletValidationRequest.prototype.getNewValidatorIdsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/** @param {!Array<string>} value */
proto.adamant.global.v1.UpdateWalletValidationRequest.prototype.setNewValidatorIdsList = function(value) {
  jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 */
proto.adamant.global.v1.UpdateWalletValidationRequest.prototype.addNewValidatorIds = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.adamant.global.v1.UpdateWalletValidationRequest.prototype.clearNewValidatorIdsList = function() {
  this.setNewValidatorIdsList([]);
};


/**
 * optional uint32 new_required_approval_count = 3;
 * @return {number}
 */
proto.adamant.global.v1.UpdateWalletValidationRequest.prototype.getNewRequiredApprovalCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.adamant.global.v1.UpdateWalletValidationRequest.prototype.setNewRequiredApprovalCount = function(value) {
  jspb.Message.setProto3IntField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.adamant.global.v1.UpdateWalletPolicyRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.adamant.global.v1.UpdateWalletPolicyRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.adamant.global.v1.UpdateWalletPolicyRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.UpdateWalletPolicyRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    walletId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    policyId: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.adamant.global.v1.UpdateWalletPolicyRequest}
 */
proto.adamant.global.v1.UpdateWalletPolicyRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.adamant.global.v1.UpdateWalletPolicyRequest;
  return proto.adamant.global.v1.UpdateWalletPolicyRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.adamant.global.v1.UpdateWalletPolicyRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.adamant.global.v1.UpdateWalletPolicyRequest}
 */
proto.adamant.global.v1.UpdateWalletPolicyRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setWalletId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPolicyId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.adamant.global.v1.UpdateWalletPolicyRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.adamant.global.v1.UpdateWalletPolicyRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.adamant.global.v1.UpdateWalletPolicyRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.UpdateWalletPolicyRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getWalletId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPolicyId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string wallet_id = 1;
 * @return {string}
 */
proto.adamant.global.v1.UpdateWalletPolicyRequest.prototype.getWalletId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.adamant.global.v1.UpdateWalletPolicyRequest.prototype.setWalletId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string policy_id = 2;
 * @return {string}
 */
proto.adamant.global.v1.UpdateWalletPolicyRequest.prototype.getPolicyId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.adamant.global.v1.UpdateWalletPolicyRequest.prototype.setPolicyId = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.adamant.global.v1.ReviewWalletProposalRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.adamant.global.v1.ReviewWalletProposalRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.adamant.global.v1.ReviewWalletProposalRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.ReviewWalletProposalRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    walletId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    approve: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.adamant.global.v1.ReviewWalletProposalRequest}
 */
proto.adamant.global.v1.ReviewWalletProposalRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.adamant.global.v1.ReviewWalletProposalRequest;
  return proto.adamant.global.v1.ReviewWalletProposalRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.adamant.global.v1.ReviewWalletProposalRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.adamant.global.v1.ReviewWalletProposalRequest}
 */
proto.adamant.global.v1.ReviewWalletProposalRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setWalletId(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setApprove(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.adamant.global.v1.ReviewWalletProposalRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.adamant.global.v1.ReviewWalletProposalRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.adamant.global.v1.ReviewWalletProposalRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.ReviewWalletProposalRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getWalletId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getApprove();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * optional string wallet_id = 1;
 * @return {string}
 */
proto.adamant.global.v1.ReviewWalletProposalRequest.prototype.getWalletId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.adamant.global.v1.ReviewWalletProposalRequest.prototype.setWalletId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bool approve = 2;
 * @return {boolean}
 */
proto.adamant.global.v1.ReviewWalletProposalRequest.prototype.getApprove = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/** @param {boolean} value */
proto.adamant.global.v1.ReviewWalletProposalRequest.prototype.setApprove = function(value) {
  jspb.Message.setProto3BooleanField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.adamant.global.v1.ExistsWalletByNameRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.adamant.global.v1.ExistsWalletByNameRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.adamant.global.v1.ExistsWalletByNameRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.ExistsWalletByNameRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.adamant.global.v1.ExistsWalletByNameRequest}
 */
proto.adamant.global.v1.ExistsWalletByNameRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.adamant.global.v1.ExistsWalletByNameRequest;
  return proto.adamant.global.v1.ExistsWalletByNameRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.adamant.global.v1.ExistsWalletByNameRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.adamant.global.v1.ExistsWalletByNameRequest}
 */
proto.adamant.global.v1.ExistsWalletByNameRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.adamant.global.v1.ExistsWalletByNameRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.adamant.global.v1.ExistsWalletByNameRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.adamant.global.v1.ExistsWalletByNameRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.ExistsWalletByNameRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.adamant.global.v1.ExistsWalletByNameRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.adamant.global.v1.ExistsWalletByNameRequest.prototype.setName = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.adamant.global.v1.ExistsWalletByNameResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.adamant.global.v1.ExistsWalletByNameResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.adamant.global.v1.ExistsWalletByNameResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.ExistsWalletByNameResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    exists: jspb.Message.getBooleanFieldWithDefault(msg, 1, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.adamant.global.v1.ExistsWalletByNameResponse}
 */
proto.adamant.global.v1.ExistsWalletByNameResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.adamant.global.v1.ExistsWalletByNameResponse;
  return proto.adamant.global.v1.ExistsWalletByNameResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.adamant.global.v1.ExistsWalletByNameResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.adamant.global.v1.ExistsWalletByNameResponse}
 */
proto.adamant.global.v1.ExistsWalletByNameResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setExists(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.adamant.global.v1.ExistsWalletByNameResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.adamant.global.v1.ExistsWalletByNameResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.adamant.global.v1.ExistsWalletByNameResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.ExistsWalletByNameResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getExists();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool exists = 1;
 * @return {boolean}
 */
proto.adamant.global.v1.ExistsWalletByNameResponse.prototype.getExists = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/** @param {boolean} value */
proto.adamant.global.v1.ExistsWalletByNameResponse.prototype.setExists = function(value) {
  jspb.Message.setProto3BooleanField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.adamant.global.v1.FlushBalanceRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.adamant.global.v1.FlushBalanceRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.adamant.global.v1.FlushBalanceRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.FlushBalanceRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    walletId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.adamant.global.v1.FlushBalanceRequest}
 */
proto.adamant.global.v1.FlushBalanceRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.adamant.global.v1.FlushBalanceRequest;
  return proto.adamant.global.v1.FlushBalanceRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.adamant.global.v1.FlushBalanceRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.adamant.global.v1.FlushBalanceRequest}
 */
proto.adamant.global.v1.FlushBalanceRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setWalletId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.adamant.global.v1.FlushBalanceRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.adamant.global.v1.FlushBalanceRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.adamant.global.v1.FlushBalanceRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.FlushBalanceRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getWalletId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string wallet_id = 1;
 * @return {string}
 */
proto.adamant.global.v1.FlushBalanceRequest.prototype.getWalletId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.adamant.global.v1.FlushBalanceRequest.prototype.setWalletId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.adamant.global.v1.FlushBalanceResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.adamant.global.v1.FlushBalanceResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.adamant.global.v1.FlushBalanceResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.adamant.global.v1.FlushBalanceResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.FlushBalanceResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    flushedAddressesList: jspb.Message.toObjectList(msg.getFlushedAddressesList(),
    gincoinc_adamant_global_v1_adamantglobalv1_model_pb.FlushedAddress.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.adamant.global.v1.FlushBalanceResponse}
 */
proto.adamant.global.v1.FlushBalanceResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.adamant.global.v1.FlushBalanceResponse;
  return proto.adamant.global.v1.FlushBalanceResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.adamant.global.v1.FlushBalanceResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.adamant.global.v1.FlushBalanceResponse}
 */
proto.adamant.global.v1.FlushBalanceResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new gincoinc_adamant_global_v1_adamantglobalv1_model_pb.FlushedAddress;
      reader.readMessage(value,gincoinc_adamant_global_v1_adamantglobalv1_model_pb.FlushedAddress.deserializeBinaryFromReader);
      msg.addFlushedAddresses(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.adamant.global.v1.FlushBalanceResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.adamant.global.v1.FlushBalanceResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.adamant.global.v1.FlushBalanceResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.FlushBalanceResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFlushedAddressesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      gincoinc_adamant_global_v1_adamantglobalv1_model_pb.FlushedAddress.serializeBinaryToWriter
    );
  }
};


/**
 * repeated FlushedAddress flushed_addresses = 1;
 * @return {!Array<!proto.adamant.global.v1.FlushedAddress>}
 */
proto.adamant.global.v1.FlushBalanceResponse.prototype.getFlushedAddressesList = function() {
  return /** @type{!Array<!proto.adamant.global.v1.FlushedAddress>} */ (
    jspb.Message.getRepeatedWrapperField(this, gincoinc_adamant_global_v1_adamantglobalv1_model_pb.FlushedAddress, 1));
};


/** @param {!Array<!proto.adamant.global.v1.FlushedAddress>} value */
proto.adamant.global.v1.FlushBalanceResponse.prototype.setFlushedAddressesList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.adamant.global.v1.FlushedAddress=} opt_value
 * @param {number=} opt_index
 * @return {!proto.adamant.global.v1.FlushedAddress}
 */
proto.adamant.global.v1.FlushBalanceResponse.prototype.addFlushedAddresses = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.adamant.global.v1.FlushedAddress, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.adamant.global.v1.FlushBalanceResponse.prototype.clearFlushedAddressesList = function() {
  this.setFlushedAddressesList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.adamant.global.v1.ListWalletFlushSettingsResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.adamant.global.v1.ListWalletFlushSettingsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.adamant.global.v1.ListWalletFlushSettingsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.adamant.global.v1.ListWalletFlushSettingsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.ListWalletFlushSettingsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    walletFlushSettingsList: jspb.Message.toObjectList(msg.getWalletFlushSettingsList(),
    gincoinc_adamant_global_v1_adamantglobalv1_model_pb.WalletFlushSetting.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.adamant.global.v1.ListWalletFlushSettingsResponse}
 */
proto.adamant.global.v1.ListWalletFlushSettingsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.adamant.global.v1.ListWalletFlushSettingsResponse;
  return proto.adamant.global.v1.ListWalletFlushSettingsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.adamant.global.v1.ListWalletFlushSettingsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.adamant.global.v1.ListWalletFlushSettingsResponse}
 */
proto.adamant.global.v1.ListWalletFlushSettingsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new gincoinc_adamant_global_v1_adamantglobalv1_model_pb.WalletFlushSetting;
      reader.readMessage(value,gincoinc_adamant_global_v1_adamantglobalv1_model_pb.WalletFlushSetting.deserializeBinaryFromReader);
      msg.addWalletFlushSettings(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.adamant.global.v1.ListWalletFlushSettingsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.adamant.global.v1.ListWalletFlushSettingsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.adamant.global.v1.ListWalletFlushSettingsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.ListWalletFlushSettingsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getWalletFlushSettingsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      gincoinc_adamant_global_v1_adamantglobalv1_model_pb.WalletFlushSetting.serializeBinaryToWriter
    );
  }
};


/**
 * repeated WalletFlushSetting wallet_flush_settings = 1;
 * @return {!Array<!proto.adamant.global.v1.WalletFlushSetting>}
 */
proto.adamant.global.v1.ListWalletFlushSettingsResponse.prototype.getWalletFlushSettingsList = function() {
  return /** @type{!Array<!proto.adamant.global.v1.WalletFlushSetting>} */ (
    jspb.Message.getRepeatedWrapperField(this, gincoinc_adamant_global_v1_adamantglobalv1_model_pb.WalletFlushSetting, 1));
};


/** @param {!Array<!proto.adamant.global.v1.WalletFlushSetting>} value */
proto.adamant.global.v1.ListWalletFlushSettingsResponse.prototype.setWalletFlushSettingsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.adamant.global.v1.WalletFlushSetting=} opt_value
 * @param {number=} opt_index
 * @return {!proto.adamant.global.v1.WalletFlushSetting}
 */
proto.adamant.global.v1.ListWalletFlushSettingsResponse.prototype.addWalletFlushSettings = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.adamant.global.v1.WalletFlushSetting, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.adamant.global.v1.ListWalletFlushSettingsResponse.prototype.clearWalletFlushSettingsList = function() {
  this.setWalletFlushSettingsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.adamant.global.v1.UpdateWalletFlushSettingRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.adamant.global.v1.UpdateWalletFlushSettingRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.adamant.global.v1.UpdateWalletFlushSettingRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.UpdateWalletFlushSettingRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    coin: jspb.Message.getFieldWithDefault(msg, 1, 0),
    destinationWalletId: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.adamant.global.v1.UpdateWalletFlushSettingRequest}
 */
proto.adamant.global.v1.UpdateWalletFlushSettingRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.adamant.global.v1.UpdateWalletFlushSettingRequest;
  return proto.adamant.global.v1.UpdateWalletFlushSettingRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.adamant.global.v1.UpdateWalletFlushSettingRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.adamant.global.v1.UpdateWalletFlushSettingRequest}
 */
proto.adamant.global.v1.UpdateWalletFlushSettingRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.gincoinc.global.v1.Coin} */ (reader.readEnum());
      msg.setCoin(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDestinationWalletId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.adamant.global.v1.UpdateWalletFlushSettingRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.adamant.global.v1.UpdateWalletFlushSettingRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.adamant.global.v1.UpdateWalletFlushSettingRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.UpdateWalletFlushSettingRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCoin();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getDestinationWalletId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional gincoinc.global.v1.Coin coin = 1;
 * @return {!proto.gincoinc.global.v1.Coin}
 */
proto.adamant.global.v1.UpdateWalletFlushSettingRequest.prototype.getCoin = function() {
  return /** @type {!proto.gincoinc.global.v1.Coin} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {!proto.gincoinc.global.v1.Coin} value */
proto.adamant.global.v1.UpdateWalletFlushSettingRequest.prototype.setCoin = function(value) {
  jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional string destination_wallet_id = 2;
 * @return {string}
 */
proto.adamant.global.v1.UpdateWalletFlushSettingRequest.prototype.getDestinationWalletId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.adamant.global.v1.UpdateWalletFlushSettingRequest.prototype.setDestinationWalletId = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.adamant.global.v1.ListCompensationFeeHistoriesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.adamant.global.v1.ListCompensationFeeHistoriesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.adamant.global.v1.ListCompensationFeeHistoriesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.ListCompensationFeeHistoriesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    walletId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    address: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.adamant.global.v1.ListCompensationFeeHistoriesRequest}
 */
proto.adamant.global.v1.ListCompensationFeeHistoriesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.adamant.global.v1.ListCompensationFeeHistoriesRequest;
  return proto.adamant.global.v1.ListCompensationFeeHistoriesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.adamant.global.v1.ListCompensationFeeHistoriesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.adamant.global.v1.ListCompensationFeeHistoriesRequest}
 */
proto.adamant.global.v1.ListCompensationFeeHistoriesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setWalletId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.adamant.global.v1.ListCompensationFeeHistoriesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.adamant.global.v1.ListCompensationFeeHistoriesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.adamant.global.v1.ListCompensationFeeHistoriesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.ListCompensationFeeHistoriesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getWalletId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAddress();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string wallet_id = 1;
 * @return {string}
 */
proto.adamant.global.v1.ListCompensationFeeHistoriesRequest.prototype.getWalletId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.adamant.global.v1.ListCompensationFeeHistoriesRequest.prototype.setWalletId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string address = 2;
 * @return {string}
 */
proto.adamant.global.v1.ListCompensationFeeHistoriesRequest.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.adamant.global.v1.ListCompensationFeeHistoriesRequest.prototype.setAddress = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.adamant.global.v1.ListCompensationFeeHistoriesResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.adamant.global.v1.ListCompensationFeeHistoriesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.adamant.global.v1.ListCompensationFeeHistoriesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.adamant.global.v1.ListCompensationFeeHistoriesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.ListCompensationFeeHistoriesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    compensationFeesList: jspb.Message.toObjectList(msg.getCompensationFeesList(),
    gincoinc_adamant_global_v1_adamantglobalv1_model_pb.CompensationFee.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.adamant.global.v1.ListCompensationFeeHistoriesResponse}
 */
proto.adamant.global.v1.ListCompensationFeeHistoriesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.adamant.global.v1.ListCompensationFeeHistoriesResponse;
  return proto.adamant.global.v1.ListCompensationFeeHistoriesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.adamant.global.v1.ListCompensationFeeHistoriesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.adamant.global.v1.ListCompensationFeeHistoriesResponse}
 */
proto.adamant.global.v1.ListCompensationFeeHistoriesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new gincoinc_adamant_global_v1_adamantglobalv1_model_pb.CompensationFee;
      reader.readMessage(value,gincoinc_adamant_global_v1_adamantglobalv1_model_pb.CompensationFee.deserializeBinaryFromReader);
      msg.addCompensationFees(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.adamant.global.v1.ListCompensationFeeHistoriesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.adamant.global.v1.ListCompensationFeeHistoriesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.adamant.global.v1.ListCompensationFeeHistoriesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.ListCompensationFeeHistoriesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCompensationFeesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      gincoinc_adamant_global_v1_adamantglobalv1_model_pb.CompensationFee.serializeBinaryToWriter
    );
  }
};


/**
 * repeated CompensationFee compensation_fees = 1;
 * @return {!Array<!proto.adamant.global.v1.CompensationFee>}
 */
proto.adamant.global.v1.ListCompensationFeeHistoriesResponse.prototype.getCompensationFeesList = function() {
  return /** @type{!Array<!proto.adamant.global.v1.CompensationFee>} */ (
    jspb.Message.getRepeatedWrapperField(this, gincoinc_adamant_global_v1_adamantglobalv1_model_pb.CompensationFee, 1));
};


/** @param {!Array<!proto.adamant.global.v1.CompensationFee>} value */
proto.adamant.global.v1.ListCompensationFeeHistoriesResponse.prototype.setCompensationFeesList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.adamant.global.v1.CompensationFee=} opt_value
 * @param {number=} opt_index
 * @return {!proto.adamant.global.v1.CompensationFee}
 */
proto.adamant.global.v1.ListCompensationFeeHistoriesResponse.prototype.addCompensationFees = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.adamant.global.v1.CompensationFee, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.adamant.global.v1.ListCompensationFeeHistoriesResponse.prototype.clearCompensationFeesList = function() {
  this.setCompensationFeesList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.adamant.global.v1.RegisterKeyRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.adamant.global.v1.RegisterKeyRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.adamant.global.v1.RegisterKeyRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.RegisterKeyRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    walletId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    pubKey: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.adamant.global.v1.RegisterKeyRequest}
 */
proto.adamant.global.v1.RegisterKeyRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.adamant.global.v1.RegisterKeyRequest;
  return proto.adamant.global.v1.RegisterKeyRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.adamant.global.v1.RegisterKeyRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.adamant.global.v1.RegisterKeyRequest}
 */
proto.adamant.global.v1.RegisterKeyRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setWalletId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPubKey(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.adamant.global.v1.RegisterKeyRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.adamant.global.v1.RegisterKeyRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.adamant.global.v1.RegisterKeyRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.RegisterKeyRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getWalletId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPubKey();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string wallet_id = 1;
 * @return {string}
 */
proto.adamant.global.v1.RegisterKeyRequest.prototype.getWalletId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.adamant.global.v1.RegisterKeyRequest.prototype.setWalletId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string pub_key = 2;
 * @return {string}
 */
proto.adamant.global.v1.RegisterKeyRequest.prototype.getPubKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.adamant.global.v1.RegisterKeyRequest.prototype.setPubKey = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.adamant.global.v1.RegisterKeyResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.adamant.global.v1.RegisterKeyResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.adamant.global.v1.RegisterKeyResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.RegisterKeyResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    keyId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.adamant.global.v1.RegisterKeyResponse}
 */
proto.adamant.global.v1.RegisterKeyResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.adamant.global.v1.RegisterKeyResponse;
  return proto.adamant.global.v1.RegisterKeyResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.adamant.global.v1.RegisterKeyResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.adamant.global.v1.RegisterKeyResponse}
 */
proto.adamant.global.v1.RegisterKeyResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setKeyId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.adamant.global.v1.RegisterKeyResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.adamant.global.v1.RegisterKeyResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.adamant.global.v1.RegisterKeyResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.RegisterKeyResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getKeyId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string key_id = 1;
 * @return {string}
 */
proto.adamant.global.v1.RegisterKeyResponse.prototype.getKeyId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.adamant.global.v1.RegisterKeyResponse.prototype.setKeyId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.adamant.global.v1.CreateAddressRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.adamant.global.v1.CreateAddressRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.adamant.global.v1.CreateAddressRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.CreateAddressRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    walletId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    feeRate: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.adamant.global.v1.CreateAddressRequest}
 */
proto.adamant.global.v1.CreateAddressRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.adamant.global.v1.CreateAddressRequest;
  return proto.adamant.global.v1.CreateAddressRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.adamant.global.v1.CreateAddressRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.adamant.global.v1.CreateAddressRequest}
 */
proto.adamant.global.v1.CreateAddressRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setWalletId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setFeeRate(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.adamant.global.v1.CreateAddressRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.adamant.global.v1.CreateAddressRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.adamant.global.v1.CreateAddressRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.CreateAddressRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getWalletId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getFeeRate();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
};


/**
 * optional string wallet_id = 1;
 * @return {string}
 */
proto.adamant.global.v1.CreateAddressRequest.prototype.getWalletId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.adamant.global.v1.CreateAddressRequest.prototype.setWalletId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional uint64 fee_rate = 2;
 * @return {number}
 */
proto.adamant.global.v1.CreateAddressRequest.prototype.getFeeRate = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.adamant.global.v1.CreateAddressRequest.prototype.setFeeRate = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.adamant.global.v1.CreateAddressResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.adamant.global.v1.CreateAddressResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.adamant.global.v1.CreateAddressResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.CreateAddressResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    addressId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.adamant.global.v1.CreateAddressResponse}
 */
proto.adamant.global.v1.CreateAddressResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.adamant.global.v1.CreateAddressResponse;
  return proto.adamant.global.v1.CreateAddressResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.adamant.global.v1.CreateAddressResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.adamant.global.v1.CreateAddressResponse}
 */
proto.adamant.global.v1.CreateAddressResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddressId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.adamant.global.v1.CreateAddressResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.adamant.global.v1.CreateAddressResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.adamant.global.v1.CreateAddressResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.CreateAddressResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddressId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string address_id = 1;
 * @return {string}
 */
proto.adamant.global.v1.CreateAddressResponse.prototype.getAddressId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.adamant.global.v1.CreateAddressResponse.prototype.setAddressId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.adamant.global.v1.GetAddressRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.adamant.global.v1.GetAddressRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.adamant.global.v1.GetAddressRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.GetAddressRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    walletId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    addressId: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.adamant.global.v1.GetAddressRequest}
 */
proto.adamant.global.v1.GetAddressRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.adamant.global.v1.GetAddressRequest;
  return proto.adamant.global.v1.GetAddressRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.adamant.global.v1.GetAddressRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.adamant.global.v1.GetAddressRequest}
 */
proto.adamant.global.v1.GetAddressRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setWalletId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddressId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.adamant.global.v1.GetAddressRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.adamant.global.v1.GetAddressRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.adamant.global.v1.GetAddressRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.GetAddressRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getWalletId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAddressId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string wallet_id = 1;
 * @return {string}
 */
proto.adamant.global.v1.GetAddressRequest.prototype.getWalletId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.adamant.global.v1.GetAddressRequest.prototype.setWalletId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string address_id = 2;
 * @return {string}
 */
proto.adamant.global.v1.GetAddressRequest.prototype.getAddressId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.adamant.global.v1.GetAddressRequest.prototype.setAddressId = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.adamant.global.v1.GetAddressByAddressRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.adamant.global.v1.GetAddressByAddressRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.adamant.global.v1.GetAddressByAddressRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.GetAddressByAddressRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    walletId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    address: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.adamant.global.v1.GetAddressByAddressRequest}
 */
proto.adamant.global.v1.GetAddressByAddressRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.adamant.global.v1.GetAddressByAddressRequest;
  return proto.adamant.global.v1.GetAddressByAddressRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.adamant.global.v1.GetAddressByAddressRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.adamant.global.v1.GetAddressByAddressRequest}
 */
proto.adamant.global.v1.GetAddressByAddressRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setWalletId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.adamant.global.v1.GetAddressByAddressRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.adamant.global.v1.GetAddressByAddressRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.adamant.global.v1.GetAddressByAddressRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.GetAddressByAddressRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getWalletId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAddress();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string wallet_id = 1;
 * @return {string}
 */
proto.adamant.global.v1.GetAddressByAddressRequest.prototype.getWalletId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.adamant.global.v1.GetAddressByAddressRequest.prototype.setWalletId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string address = 2;
 * @return {string}
 */
proto.adamant.global.v1.GetAddressByAddressRequest.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.adamant.global.v1.GetAddressByAddressRequest.prototype.setAddress = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.adamant.global.v1.GetAddressByIndexRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.adamant.global.v1.GetAddressByIndexRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.adamant.global.v1.GetAddressByIndexRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.GetAddressByIndexRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    walletId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    index: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.adamant.global.v1.GetAddressByIndexRequest}
 */
proto.adamant.global.v1.GetAddressByIndexRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.adamant.global.v1.GetAddressByIndexRequest;
  return proto.adamant.global.v1.GetAddressByIndexRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.adamant.global.v1.GetAddressByIndexRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.adamant.global.v1.GetAddressByIndexRequest}
 */
proto.adamant.global.v1.GetAddressByIndexRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setWalletId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setIndex(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.adamant.global.v1.GetAddressByIndexRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.adamant.global.v1.GetAddressByIndexRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.adamant.global.v1.GetAddressByIndexRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.GetAddressByIndexRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getWalletId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getIndex();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
};


/**
 * optional string wallet_id = 1;
 * @return {string}
 */
proto.adamant.global.v1.GetAddressByIndexRequest.prototype.getWalletId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.adamant.global.v1.GetAddressByIndexRequest.prototype.setWalletId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional uint32 index = 2;
 * @return {number}
 */
proto.adamant.global.v1.GetAddressByIndexRequest.prototype.getIndex = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.adamant.global.v1.GetAddressByIndexRequest.prototype.setIndex = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.adamant.global.v1.GetAddressWithoutBalanceByIndexRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.adamant.global.v1.GetAddressWithoutBalanceByIndexRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.adamant.global.v1.GetAddressWithoutBalanceByIndexRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.GetAddressWithoutBalanceByIndexRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    walletId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    index: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.adamant.global.v1.GetAddressWithoutBalanceByIndexRequest}
 */
proto.adamant.global.v1.GetAddressWithoutBalanceByIndexRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.adamant.global.v1.GetAddressWithoutBalanceByIndexRequest;
  return proto.adamant.global.v1.GetAddressWithoutBalanceByIndexRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.adamant.global.v1.GetAddressWithoutBalanceByIndexRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.adamant.global.v1.GetAddressWithoutBalanceByIndexRequest}
 */
proto.adamant.global.v1.GetAddressWithoutBalanceByIndexRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setWalletId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setIndex(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.adamant.global.v1.GetAddressWithoutBalanceByIndexRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.adamant.global.v1.GetAddressWithoutBalanceByIndexRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.adamant.global.v1.GetAddressWithoutBalanceByIndexRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.GetAddressWithoutBalanceByIndexRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getWalletId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getIndex();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
};


/**
 * optional string wallet_id = 1;
 * @return {string}
 */
proto.adamant.global.v1.GetAddressWithoutBalanceByIndexRequest.prototype.getWalletId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.adamant.global.v1.GetAddressWithoutBalanceByIndexRequest.prototype.setWalletId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional uint32 index = 2;
 * @return {number}
 */
proto.adamant.global.v1.GetAddressWithoutBalanceByIndexRequest.prototype.getIndex = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.adamant.global.v1.GetAddressWithoutBalanceByIndexRequest.prototype.setIndex = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.adamant.global.v1.ListAddressesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.adamant.global.v1.ListAddressesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.adamant.global.v1.ListAddressesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.ListAddressesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    walletId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    omitChange: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    pageSize: jspb.Message.getFieldWithDefault(msg, 3, 0),
    pageToken: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.adamant.global.v1.ListAddressesRequest}
 */
proto.adamant.global.v1.ListAddressesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.adamant.global.v1.ListAddressesRequest;
  return proto.adamant.global.v1.ListAddressesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.adamant.global.v1.ListAddressesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.adamant.global.v1.ListAddressesRequest}
 */
proto.adamant.global.v1.ListAddressesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setWalletId(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setOmitChange(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPageSize(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setPageToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.adamant.global.v1.ListAddressesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.adamant.global.v1.ListAddressesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.adamant.global.v1.ListAddressesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.ListAddressesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getWalletId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getOmitChange();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getPageSize();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getPageToken();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string wallet_id = 1;
 * @return {string}
 */
proto.adamant.global.v1.ListAddressesRequest.prototype.getWalletId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.adamant.global.v1.ListAddressesRequest.prototype.setWalletId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bool omit_change = 2;
 * @return {boolean}
 */
proto.adamant.global.v1.ListAddressesRequest.prototype.getOmitChange = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/** @param {boolean} value */
proto.adamant.global.v1.ListAddressesRequest.prototype.setOmitChange = function(value) {
  jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional uint32 page_size = 3;
 * @return {number}
 */
proto.adamant.global.v1.ListAddressesRequest.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.adamant.global.v1.ListAddressesRequest.prototype.setPageSize = function(value) {
  jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string page_token = 4;
 * @return {string}
 */
proto.adamant.global.v1.ListAddressesRequest.prototype.getPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.adamant.global.v1.ListAddressesRequest.prototype.setPageToken = function(value) {
  jspb.Message.setProto3StringField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.adamant.global.v1.ListAddressesResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.adamant.global.v1.ListAddressesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.adamant.global.v1.ListAddressesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.adamant.global.v1.ListAddressesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.ListAddressesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    addressesList: jspb.Message.toObjectList(msg.getAddressesList(),
    gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Address.toObject, includeInstance),
    nextPageToken: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.adamant.global.v1.ListAddressesResponse}
 */
proto.adamant.global.v1.ListAddressesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.adamant.global.v1.ListAddressesResponse;
  return proto.adamant.global.v1.ListAddressesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.adamant.global.v1.ListAddressesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.adamant.global.v1.ListAddressesResponse}
 */
proto.adamant.global.v1.ListAddressesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Address;
      reader.readMessage(value,gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Address.deserializeBinaryFromReader);
      msg.addAddresses(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setNextPageToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.adamant.global.v1.ListAddressesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.adamant.global.v1.ListAddressesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.adamant.global.v1.ListAddressesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.ListAddressesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddressesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Address.serializeBinaryToWriter
    );
  }
  f = message.getNextPageToken();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * repeated Address addresses = 1;
 * @return {!Array<!proto.adamant.global.v1.Address>}
 */
proto.adamant.global.v1.ListAddressesResponse.prototype.getAddressesList = function() {
  return /** @type{!Array<!proto.adamant.global.v1.Address>} */ (
    jspb.Message.getRepeatedWrapperField(this, gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Address, 1));
};


/** @param {!Array<!proto.adamant.global.v1.Address>} value */
proto.adamant.global.v1.ListAddressesResponse.prototype.setAddressesList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.adamant.global.v1.Address=} opt_value
 * @param {number=} opt_index
 * @return {!proto.adamant.global.v1.Address}
 */
proto.adamant.global.v1.ListAddressesResponse.prototype.addAddresses = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.adamant.global.v1.Address, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.adamant.global.v1.ListAddressesResponse.prototype.clearAddressesList = function() {
  this.setAddressesList([]);
};


/**
 * optional string next_page_token = 2;
 * @return {string}
 */
proto.adamant.global.v1.ListAddressesResponse.prototype.getNextPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.adamant.global.v1.ListAddressesResponse.prototype.setNextPageToken = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.adamant.global.v1.ListAddressesWithBalanceRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.adamant.global.v1.ListAddressesWithBalanceRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.adamant.global.v1.ListAddressesWithBalanceRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.ListAddressesWithBalanceRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    walletId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.adamant.global.v1.ListAddressesWithBalanceRequest}
 */
proto.adamant.global.v1.ListAddressesWithBalanceRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.adamant.global.v1.ListAddressesWithBalanceRequest;
  return proto.adamant.global.v1.ListAddressesWithBalanceRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.adamant.global.v1.ListAddressesWithBalanceRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.adamant.global.v1.ListAddressesWithBalanceRequest}
 */
proto.adamant.global.v1.ListAddressesWithBalanceRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setWalletId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.adamant.global.v1.ListAddressesWithBalanceRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.adamant.global.v1.ListAddressesWithBalanceRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.adamant.global.v1.ListAddressesWithBalanceRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.ListAddressesWithBalanceRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getWalletId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string wallet_id = 1;
 * @return {string}
 */
proto.adamant.global.v1.ListAddressesWithBalanceRequest.prototype.getWalletId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.adamant.global.v1.ListAddressesWithBalanceRequest.prototype.setWalletId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.adamant.global.v1.ListAddressesWithBalanceResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.adamant.global.v1.ListAddressesWithBalanceResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.adamant.global.v1.ListAddressesWithBalanceResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.adamant.global.v1.ListAddressesWithBalanceResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.ListAddressesWithBalanceResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    addressesList: jspb.Message.toObjectList(msg.getAddressesList(),
    gincoinc_adamant_global_v1_adamantglobalv1_model_pb.AddressWithBalance.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.adamant.global.v1.ListAddressesWithBalanceResponse}
 */
proto.adamant.global.v1.ListAddressesWithBalanceResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.adamant.global.v1.ListAddressesWithBalanceResponse;
  return proto.adamant.global.v1.ListAddressesWithBalanceResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.adamant.global.v1.ListAddressesWithBalanceResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.adamant.global.v1.ListAddressesWithBalanceResponse}
 */
proto.adamant.global.v1.ListAddressesWithBalanceResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new gincoinc_adamant_global_v1_adamantglobalv1_model_pb.AddressWithBalance;
      reader.readMessage(value,gincoinc_adamant_global_v1_adamantglobalv1_model_pb.AddressWithBalance.deserializeBinaryFromReader);
      msg.addAddresses(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.adamant.global.v1.ListAddressesWithBalanceResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.adamant.global.v1.ListAddressesWithBalanceResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.adamant.global.v1.ListAddressesWithBalanceResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.ListAddressesWithBalanceResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddressesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      gincoinc_adamant_global_v1_adamantglobalv1_model_pb.AddressWithBalance.serializeBinaryToWriter
    );
  }
};


/**
 * repeated AddressWithBalance addresses = 1;
 * @return {!Array<!proto.adamant.global.v1.AddressWithBalance>}
 */
proto.adamant.global.v1.ListAddressesWithBalanceResponse.prototype.getAddressesList = function() {
  return /** @type{!Array<!proto.adamant.global.v1.AddressWithBalance>} */ (
    jspb.Message.getRepeatedWrapperField(this, gincoinc_adamant_global_v1_adamantglobalv1_model_pb.AddressWithBalance, 1));
};


/** @param {!Array<!proto.adamant.global.v1.AddressWithBalance>} value */
proto.adamant.global.v1.ListAddressesWithBalanceResponse.prototype.setAddressesList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.adamant.global.v1.AddressWithBalance=} opt_value
 * @param {number=} opt_index
 * @return {!proto.adamant.global.v1.AddressWithBalance}
 */
proto.adamant.global.v1.ListAddressesWithBalanceResponse.prototype.addAddresses = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.adamant.global.v1.AddressWithBalance, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.adamant.global.v1.ListAddressesWithBalanceResponse.prototype.clearAddressesList = function() {
  this.setAddressesList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.adamant.global.v1.UpdateAddressBalanceRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.adamant.global.v1.UpdateAddressBalanceRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.adamant.global.v1.UpdateAddressBalanceRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.UpdateAddressBalanceRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    walletId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    address: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.adamant.global.v1.UpdateAddressBalanceRequest}
 */
proto.adamant.global.v1.UpdateAddressBalanceRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.adamant.global.v1.UpdateAddressBalanceRequest;
  return proto.adamant.global.v1.UpdateAddressBalanceRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.adamant.global.v1.UpdateAddressBalanceRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.adamant.global.v1.UpdateAddressBalanceRequest}
 */
proto.adamant.global.v1.UpdateAddressBalanceRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setWalletId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.adamant.global.v1.UpdateAddressBalanceRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.adamant.global.v1.UpdateAddressBalanceRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.adamant.global.v1.UpdateAddressBalanceRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.UpdateAddressBalanceRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getWalletId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAddress();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string wallet_id = 1;
 * @return {string}
 */
proto.adamant.global.v1.UpdateAddressBalanceRequest.prototype.getWalletId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.adamant.global.v1.UpdateAddressBalanceRequest.prototype.setWalletId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string address = 2;
 * @return {string}
 */
proto.adamant.global.v1.UpdateAddressBalanceRequest.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.adamant.global.v1.UpdateAddressBalanceRequest.prototype.setAddress = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.adamant.global.v1.ListAddressesWithoutBalanceRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.adamant.global.v1.ListAddressesWithoutBalanceRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.adamant.global.v1.ListAddressesWithoutBalanceRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.ListAddressesWithoutBalanceRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    walletId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    omitChange: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    pageSize: jspb.Message.getFieldWithDefault(msg, 3, 0),
    pageToken: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.adamant.global.v1.ListAddressesWithoutBalanceRequest}
 */
proto.adamant.global.v1.ListAddressesWithoutBalanceRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.adamant.global.v1.ListAddressesWithoutBalanceRequest;
  return proto.adamant.global.v1.ListAddressesWithoutBalanceRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.adamant.global.v1.ListAddressesWithoutBalanceRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.adamant.global.v1.ListAddressesWithoutBalanceRequest}
 */
proto.adamant.global.v1.ListAddressesWithoutBalanceRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setWalletId(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setOmitChange(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPageSize(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setPageToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.adamant.global.v1.ListAddressesWithoutBalanceRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.adamant.global.v1.ListAddressesWithoutBalanceRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.adamant.global.v1.ListAddressesWithoutBalanceRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.ListAddressesWithoutBalanceRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getWalletId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getOmitChange();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getPageSize();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getPageToken();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string wallet_id = 1;
 * @return {string}
 */
proto.adamant.global.v1.ListAddressesWithoutBalanceRequest.prototype.getWalletId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.adamant.global.v1.ListAddressesWithoutBalanceRequest.prototype.setWalletId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bool omit_change = 2;
 * @return {boolean}
 */
proto.adamant.global.v1.ListAddressesWithoutBalanceRequest.prototype.getOmitChange = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/** @param {boolean} value */
proto.adamant.global.v1.ListAddressesWithoutBalanceRequest.prototype.setOmitChange = function(value) {
  jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional uint32 page_size = 3;
 * @return {number}
 */
proto.adamant.global.v1.ListAddressesWithoutBalanceRequest.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.adamant.global.v1.ListAddressesWithoutBalanceRequest.prototype.setPageSize = function(value) {
  jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string page_token = 4;
 * @return {string}
 */
proto.adamant.global.v1.ListAddressesWithoutBalanceRequest.prototype.getPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.adamant.global.v1.ListAddressesWithoutBalanceRequest.prototype.setPageToken = function(value) {
  jspb.Message.setProto3StringField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.adamant.global.v1.ListAddressesWithoutBalanceResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.adamant.global.v1.ListAddressesWithoutBalanceResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.adamant.global.v1.ListAddressesWithoutBalanceResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.adamant.global.v1.ListAddressesWithoutBalanceResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.ListAddressesWithoutBalanceResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    addressesList: jspb.Message.toObjectList(msg.getAddressesList(),
    gincoinc_adamant_global_v1_adamantglobalv1_model_pb.AddressWithoutBalance.toObject, includeInstance),
    nextPageToken: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.adamant.global.v1.ListAddressesWithoutBalanceResponse}
 */
proto.adamant.global.v1.ListAddressesWithoutBalanceResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.adamant.global.v1.ListAddressesWithoutBalanceResponse;
  return proto.adamant.global.v1.ListAddressesWithoutBalanceResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.adamant.global.v1.ListAddressesWithoutBalanceResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.adamant.global.v1.ListAddressesWithoutBalanceResponse}
 */
proto.adamant.global.v1.ListAddressesWithoutBalanceResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new gincoinc_adamant_global_v1_adamantglobalv1_model_pb.AddressWithoutBalance;
      reader.readMessage(value,gincoinc_adamant_global_v1_adamantglobalv1_model_pb.AddressWithoutBalance.deserializeBinaryFromReader);
      msg.addAddresses(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setNextPageToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.adamant.global.v1.ListAddressesWithoutBalanceResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.adamant.global.v1.ListAddressesWithoutBalanceResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.adamant.global.v1.ListAddressesWithoutBalanceResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.ListAddressesWithoutBalanceResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddressesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      gincoinc_adamant_global_v1_adamantglobalv1_model_pb.AddressWithoutBalance.serializeBinaryToWriter
    );
  }
  f = message.getNextPageToken();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * repeated AddressWithoutBalance addresses = 1;
 * @return {!Array<!proto.adamant.global.v1.AddressWithoutBalance>}
 */
proto.adamant.global.v1.ListAddressesWithoutBalanceResponse.prototype.getAddressesList = function() {
  return /** @type{!Array<!proto.adamant.global.v1.AddressWithoutBalance>} */ (
    jspb.Message.getRepeatedWrapperField(this, gincoinc_adamant_global_v1_adamantglobalv1_model_pb.AddressWithoutBalance, 1));
};


/** @param {!Array<!proto.adamant.global.v1.AddressWithoutBalance>} value */
proto.adamant.global.v1.ListAddressesWithoutBalanceResponse.prototype.setAddressesList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.adamant.global.v1.AddressWithoutBalance=} opt_value
 * @param {number=} opt_index
 * @return {!proto.adamant.global.v1.AddressWithoutBalance}
 */
proto.adamant.global.v1.ListAddressesWithoutBalanceResponse.prototype.addAddresses = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.adamant.global.v1.AddressWithoutBalance, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.adamant.global.v1.ListAddressesWithoutBalanceResponse.prototype.clearAddressesList = function() {
  this.setAddressesList([]);
};


/**
 * optional string next_page_token = 2;
 * @return {string}
 */
proto.adamant.global.v1.ListAddressesWithoutBalanceResponse.prototype.getNextPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.adamant.global.v1.ListAddressesWithoutBalanceResponse.prototype.setNextPageToken = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.adamant.global.v1.GetEthereumFeeAddressRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.adamant.global.v1.GetEthereumFeeAddressRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.adamant.global.v1.GetEthereumFeeAddressRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.GetEthereumFeeAddressRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.adamant.global.v1.GetEthereumFeeAddressRequest}
 */
proto.adamant.global.v1.GetEthereumFeeAddressRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.adamant.global.v1.GetEthereumFeeAddressRequest;
  return proto.adamant.global.v1.GetEthereumFeeAddressRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.adamant.global.v1.GetEthereumFeeAddressRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.adamant.global.v1.GetEthereumFeeAddressRequest}
 */
proto.adamant.global.v1.GetEthereumFeeAddressRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.adamant.global.v1.GetEthereumFeeAddressRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.adamant.global.v1.GetEthereumFeeAddressRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.adamant.global.v1.GetEthereumFeeAddressRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.GetEthereumFeeAddressRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.adamant.global.v1.DeleteAllWatchOnlyAddressesByWalletIDRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.adamant.global.v1.DeleteAllWatchOnlyAddressesByWalletIDRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.adamant.global.v1.DeleteAllWatchOnlyAddressesByWalletIDRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.DeleteAllWatchOnlyAddressesByWalletIDRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    walletId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.adamant.global.v1.DeleteAllWatchOnlyAddressesByWalletIDRequest}
 */
proto.adamant.global.v1.DeleteAllWatchOnlyAddressesByWalletIDRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.adamant.global.v1.DeleteAllWatchOnlyAddressesByWalletIDRequest;
  return proto.adamant.global.v1.DeleteAllWatchOnlyAddressesByWalletIDRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.adamant.global.v1.DeleteAllWatchOnlyAddressesByWalletIDRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.adamant.global.v1.DeleteAllWatchOnlyAddressesByWalletIDRequest}
 */
proto.adamant.global.v1.DeleteAllWatchOnlyAddressesByWalletIDRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setWalletId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.adamant.global.v1.DeleteAllWatchOnlyAddressesByWalletIDRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.adamant.global.v1.DeleteAllWatchOnlyAddressesByWalletIDRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.adamant.global.v1.DeleteAllWatchOnlyAddressesByWalletIDRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.DeleteAllWatchOnlyAddressesByWalletIDRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getWalletId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string wallet_id = 1;
 * @return {string}
 */
proto.adamant.global.v1.DeleteAllWatchOnlyAddressesByWalletIDRequest.prototype.getWalletId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.adamant.global.v1.DeleteAllWatchOnlyAddressesByWalletIDRequest.prototype.setWalletId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.adamant.global.v1.CreateTransactionRequest.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.adamant.global.v1.CreateTransactionRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.adamant.global.v1.CreateTransactionRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.adamant.global.v1.CreateTransactionRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.CreateTransactionRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    walletId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    feeRate: jspb.Message.getFieldWithDefault(msg, 2, 0),
    txOutputsList: jspb.Message.toObjectList(msg.getTxOutputsList(),
    gincoinc_adamant_global_v1_adamantglobalv1_model_pb.RequestTxOutput.toObject, includeInstance),
    address: jspb.Message.getFieldWithDefault(msg, 4, ""),
    destinationTag: jspb.Message.getFieldWithDefault(msg, 5, 0),
    stringValue: jspb.Message.getFieldWithDefault(msg, 7, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.adamant.global.v1.CreateTransactionRequest}
 */
proto.adamant.global.v1.CreateTransactionRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.adamant.global.v1.CreateTransactionRequest;
  return proto.adamant.global.v1.CreateTransactionRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.adamant.global.v1.CreateTransactionRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.adamant.global.v1.CreateTransactionRequest}
 */
proto.adamant.global.v1.CreateTransactionRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setWalletId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setFeeRate(value);
      break;
    case 3:
      var value = new gincoinc_adamant_global_v1_adamantglobalv1_model_pb.RequestTxOutput;
      reader.readMessage(value,gincoinc_adamant_global_v1_adamantglobalv1_model_pb.RequestTxOutput.deserializeBinaryFromReader);
      msg.addTxOutputs(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setDestinationTag(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setStringValue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.adamant.global.v1.CreateTransactionRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.adamant.global.v1.CreateTransactionRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.adamant.global.v1.CreateTransactionRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.CreateTransactionRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getWalletId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getFeeRate();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getTxOutputsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      gincoinc_adamant_global_v1_adamantglobalv1_model_pb.RequestTxOutput.serializeBinaryToWriter
    );
  }
  f = message.getAddress();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getDestinationTag();
  if (f !== 0) {
    writer.writeUint32(
      5,
      f
    );
  }
  f = message.getStringValue();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
};


/**
 * optional string wallet_id = 1;
 * @return {string}
 */
proto.adamant.global.v1.CreateTransactionRequest.prototype.getWalletId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.adamant.global.v1.CreateTransactionRequest.prototype.setWalletId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional uint64 fee_rate = 2;
 * @return {number}
 */
proto.adamant.global.v1.CreateTransactionRequest.prototype.getFeeRate = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.adamant.global.v1.CreateTransactionRequest.prototype.setFeeRate = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * repeated RequestTxOutput tx_outputs = 3;
 * @return {!Array<!proto.adamant.global.v1.RequestTxOutput>}
 */
proto.adamant.global.v1.CreateTransactionRequest.prototype.getTxOutputsList = function() {
  return /** @type{!Array<!proto.adamant.global.v1.RequestTxOutput>} */ (
    jspb.Message.getRepeatedWrapperField(this, gincoinc_adamant_global_v1_adamantglobalv1_model_pb.RequestTxOutput, 3));
};


/** @param {!Array<!proto.adamant.global.v1.RequestTxOutput>} value */
proto.adamant.global.v1.CreateTransactionRequest.prototype.setTxOutputsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.adamant.global.v1.RequestTxOutput=} opt_value
 * @param {number=} opt_index
 * @return {!proto.adamant.global.v1.RequestTxOutput}
 */
proto.adamant.global.v1.CreateTransactionRequest.prototype.addTxOutputs = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.adamant.global.v1.RequestTxOutput, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.adamant.global.v1.CreateTransactionRequest.prototype.clearTxOutputsList = function() {
  this.setTxOutputsList([]);
};


/**
 * optional string address = 4;
 * @return {string}
 */
proto.adamant.global.v1.CreateTransactionRequest.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.adamant.global.v1.CreateTransactionRequest.prototype.setAddress = function(value) {
  jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional uint32 destination_tag = 5;
 * @return {number}
 */
proto.adamant.global.v1.CreateTransactionRequest.prototype.getDestinationTag = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/** @param {number} value */
proto.adamant.global.v1.CreateTransactionRequest.prototype.setDestinationTag = function(value) {
  jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional string string_value = 7;
 * @return {string}
 */
proto.adamant.global.v1.CreateTransactionRequest.prototype.getStringValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/** @param {string} value */
proto.adamant.global.v1.CreateTransactionRequest.prototype.setStringValue = function(value) {
  jspb.Message.setProto3StringField(this, 7, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.adamant.global.v1.CreateTransactionResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.adamant.global.v1.CreateTransactionResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.adamant.global.v1.CreateTransactionResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.CreateTransactionResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    transactionId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.adamant.global.v1.CreateTransactionResponse}
 */
proto.adamant.global.v1.CreateTransactionResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.adamant.global.v1.CreateTransactionResponse;
  return proto.adamant.global.v1.CreateTransactionResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.adamant.global.v1.CreateTransactionResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.adamant.global.v1.CreateTransactionResponse}
 */
proto.adamant.global.v1.CreateTransactionResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTransactionId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.adamant.global.v1.CreateTransactionResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.adamant.global.v1.CreateTransactionResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.adamant.global.v1.CreateTransactionResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.CreateTransactionResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTransactionId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string transaction_id = 1;
 * @return {string}
 */
proto.adamant.global.v1.CreateTransactionResponse.prototype.getTransactionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.adamant.global.v1.CreateTransactionResponse.prototype.setTransactionId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.adamant.global.v1.CreateXRPInitTransactionsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.adamant.global.v1.CreateXRPInitTransactionsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.adamant.global.v1.CreateXRPInitTransactionsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.CreateXRPInitTransactionsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    walletId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.adamant.global.v1.CreateXRPInitTransactionsRequest}
 */
proto.adamant.global.v1.CreateXRPInitTransactionsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.adamant.global.v1.CreateXRPInitTransactionsRequest;
  return proto.adamant.global.v1.CreateXRPInitTransactionsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.adamant.global.v1.CreateXRPInitTransactionsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.adamant.global.v1.CreateXRPInitTransactionsRequest}
 */
proto.adamant.global.v1.CreateXRPInitTransactionsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setWalletId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.adamant.global.v1.CreateXRPInitTransactionsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.adamant.global.v1.CreateXRPInitTransactionsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.adamant.global.v1.CreateXRPInitTransactionsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.CreateXRPInitTransactionsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getWalletId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string wallet_id = 1;
 * @return {string}
 */
proto.adamant.global.v1.CreateXRPInitTransactionsRequest.prototype.getWalletId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.adamant.global.v1.CreateXRPInitTransactionsRequest.prototype.setWalletId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.adamant.global.v1.CreateInitTransactionRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.adamant.global.v1.CreateInitTransactionRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.adamant.global.v1.CreateInitTransactionRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.CreateInitTransactionRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    walletId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.adamant.global.v1.CreateInitTransactionRequest}
 */
proto.adamant.global.v1.CreateInitTransactionRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.adamant.global.v1.CreateInitTransactionRequest;
  return proto.adamant.global.v1.CreateInitTransactionRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.adamant.global.v1.CreateInitTransactionRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.adamant.global.v1.CreateInitTransactionRequest}
 */
proto.adamant.global.v1.CreateInitTransactionRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setWalletId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.adamant.global.v1.CreateInitTransactionRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.adamant.global.v1.CreateInitTransactionRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.adamant.global.v1.CreateInitTransactionRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.CreateInitTransactionRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getWalletId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string wallet_id = 1;
 * @return {string}
 */
proto.adamant.global.v1.CreateInitTransactionRequest.prototype.getWalletId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.adamant.global.v1.CreateInitTransactionRequest.prototype.setWalletId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.adamant.global.v1.SignTransactionRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.adamant.global.v1.SignTransactionRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.adamant.global.v1.SignTransactionRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.SignTransactionRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    walletId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    transactionId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    keyId: jspb.Message.getFieldWithDefault(msg, 3, ""),
    signedInfo: (f = msg.getSignedInfo()) && gincoinc_adamant_global_v1_adamantglobalv1_model_pb.RequestSignedInfo.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.adamant.global.v1.SignTransactionRequest}
 */
proto.adamant.global.v1.SignTransactionRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.adamant.global.v1.SignTransactionRequest;
  return proto.adamant.global.v1.SignTransactionRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.adamant.global.v1.SignTransactionRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.adamant.global.v1.SignTransactionRequest}
 */
proto.adamant.global.v1.SignTransactionRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setWalletId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTransactionId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setKeyId(value);
      break;
    case 4:
      var value = new gincoinc_adamant_global_v1_adamantglobalv1_model_pb.RequestSignedInfo;
      reader.readMessage(value,gincoinc_adamant_global_v1_adamantglobalv1_model_pb.RequestSignedInfo.deserializeBinaryFromReader);
      msg.setSignedInfo(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.adamant.global.v1.SignTransactionRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.adamant.global.v1.SignTransactionRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.adamant.global.v1.SignTransactionRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.SignTransactionRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getWalletId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTransactionId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getKeyId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getSignedInfo();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      gincoinc_adamant_global_v1_adamantglobalv1_model_pb.RequestSignedInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional string wallet_id = 1;
 * @return {string}
 */
proto.adamant.global.v1.SignTransactionRequest.prototype.getWalletId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.adamant.global.v1.SignTransactionRequest.prototype.setWalletId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string transaction_id = 2;
 * @return {string}
 */
proto.adamant.global.v1.SignTransactionRequest.prototype.getTransactionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.adamant.global.v1.SignTransactionRequest.prototype.setTransactionId = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string key_id = 3;
 * @return {string}
 */
proto.adamant.global.v1.SignTransactionRequest.prototype.getKeyId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.adamant.global.v1.SignTransactionRequest.prototype.setKeyId = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional RequestSignedInfo signed_info = 4;
 * @return {?proto.adamant.global.v1.RequestSignedInfo}
 */
proto.adamant.global.v1.SignTransactionRequest.prototype.getSignedInfo = function() {
  return /** @type{?proto.adamant.global.v1.RequestSignedInfo} */ (
    jspb.Message.getWrapperField(this, gincoinc_adamant_global_v1_adamantglobalv1_model_pb.RequestSignedInfo, 4));
};


/** @param {?proto.adamant.global.v1.RequestSignedInfo|undefined} value */
proto.adamant.global.v1.SignTransactionRequest.prototype.setSignedInfo = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.adamant.global.v1.SignTransactionRequest.prototype.clearSignedInfo = function() {
  this.setSignedInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.adamant.global.v1.SignTransactionRequest.prototype.hasSignedInfo = function() {
  return jspb.Message.getField(this, 4) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.adamant.global.v1.SignXRPInitTransactionsRequest.repeatedFields_ = [4];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.adamant.global.v1.SignXRPInitTransactionsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.adamant.global.v1.SignXRPInitTransactionsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.adamant.global.v1.SignXRPInitTransactionsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.SignXRPInitTransactionsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    walletId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    keyId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    signedInfoList: jspb.Message.toObjectList(msg.getSignedInfoList(),
    gincoinc_adamant_global_v1_adamantglobalv1_model_pb.RequestSignedInfo.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.adamant.global.v1.SignXRPInitTransactionsRequest}
 */
proto.adamant.global.v1.SignXRPInitTransactionsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.adamant.global.v1.SignXRPInitTransactionsRequest;
  return proto.adamant.global.v1.SignXRPInitTransactionsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.adamant.global.v1.SignXRPInitTransactionsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.adamant.global.v1.SignXRPInitTransactionsRequest}
 */
proto.adamant.global.v1.SignXRPInitTransactionsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setWalletId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setKeyId(value);
      break;
    case 4:
      var value = new gincoinc_adamant_global_v1_adamantglobalv1_model_pb.RequestSignedInfo;
      reader.readMessage(value,gincoinc_adamant_global_v1_adamantglobalv1_model_pb.RequestSignedInfo.deserializeBinaryFromReader);
      msg.addSignedInfo(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.adamant.global.v1.SignXRPInitTransactionsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.adamant.global.v1.SignXRPInitTransactionsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.adamant.global.v1.SignXRPInitTransactionsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.SignXRPInitTransactionsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getWalletId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getKeyId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getSignedInfoList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      gincoinc_adamant_global_v1_adamantglobalv1_model_pb.RequestSignedInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional string wallet_id = 1;
 * @return {string}
 */
proto.adamant.global.v1.SignXRPInitTransactionsRequest.prototype.getWalletId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.adamant.global.v1.SignXRPInitTransactionsRequest.prototype.setWalletId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string key_id = 2;
 * @return {string}
 */
proto.adamant.global.v1.SignXRPInitTransactionsRequest.prototype.getKeyId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.adamant.global.v1.SignXRPInitTransactionsRequest.prototype.setKeyId = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated RequestSignedInfo signed_info = 4;
 * @return {!Array<!proto.adamant.global.v1.RequestSignedInfo>}
 */
proto.adamant.global.v1.SignXRPInitTransactionsRequest.prototype.getSignedInfoList = function() {
  return /** @type{!Array<!proto.adamant.global.v1.RequestSignedInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, gincoinc_adamant_global_v1_adamantglobalv1_model_pb.RequestSignedInfo, 4));
};


/** @param {!Array<!proto.adamant.global.v1.RequestSignedInfo>} value */
proto.adamant.global.v1.SignXRPInitTransactionsRequest.prototype.setSignedInfoList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.adamant.global.v1.RequestSignedInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.adamant.global.v1.RequestSignedInfo}
 */
proto.adamant.global.v1.SignXRPInitTransactionsRequest.prototype.addSignedInfo = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.adamant.global.v1.RequestSignedInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.adamant.global.v1.SignXRPInitTransactionsRequest.prototype.clearSignedInfoList = function() {
  this.setSignedInfoList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.adamant.global.v1.SignInitTransactionRequest.repeatedFields_ = [4];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.adamant.global.v1.SignInitTransactionRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.adamant.global.v1.SignInitTransactionRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.adamant.global.v1.SignInitTransactionRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.SignInitTransactionRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    walletId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    keyId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    signedInfoList: jspb.Message.toObjectList(msg.getSignedInfoList(),
    gincoinc_adamant_global_v1_adamantglobalv1_model_pb.RequestSignedInfo.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.adamant.global.v1.SignInitTransactionRequest}
 */
proto.adamant.global.v1.SignInitTransactionRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.adamant.global.v1.SignInitTransactionRequest;
  return proto.adamant.global.v1.SignInitTransactionRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.adamant.global.v1.SignInitTransactionRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.adamant.global.v1.SignInitTransactionRequest}
 */
proto.adamant.global.v1.SignInitTransactionRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setWalletId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setKeyId(value);
      break;
    case 4:
      var value = new gincoinc_adamant_global_v1_adamantglobalv1_model_pb.RequestSignedInfo;
      reader.readMessage(value,gincoinc_adamant_global_v1_adamantglobalv1_model_pb.RequestSignedInfo.deserializeBinaryFromReader);
      msg.addSignedInfo(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.adamant.global.v1.SignInitTransactionRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.adamant.global.v1.SignInitTransactionRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.adamant.global.v1.SignInitTransactionRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.SignInitTransactionRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getWalletId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getKeyId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getSignedInfoList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      gincoinc_adamant_global_v1_adamantglobalv1_model_pb.RequestSignedInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional string wallet_id = 1;
 * @return {string}
 */
proto.adamant.global.v1.SignInitTransactionRequest.prototype.getWalletId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.adamant.global.v1.SignInitTransactionRequest.prototype.setWalletId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string key_id = 2;
 * @return {string}
 */
proto.adamant.global.v1.SignInitTransactionRequest.prototype.getKeyId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.adamant.global.v1.SignInitTransactionRequest.prototype.setKeyId = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated RequestSignedInfo signed_info = 4;
 * @return {!Array<!proto.adamant.global.v1.RequestSignedInfo>}
 */
proto.adamant.global.v1.SignInitTransactionRequest.prototype.getSignedInfoList = function() {
  return /** @type{!Array<!proto.adamant.global.v1.RequestSignedInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, gincoinc_adamant_global_v1_adamantglobalv1_model_pb.RequestSignedInfo, 4));
};


/** @param {!Array<!proto.adamant.global.v1.RequestSignedInfo>} value */
proto.adamant.global.v1.SignInitTransactionRequest.prototype.setSignedInfoList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.adamant.global.v1.RequestSignedInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.adamant.global.v1.RequestSignedInfo}
 */
proto.adamant.global.v1.SignInitTransactionRequest.prototype.addSignedInfo = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.adamant.global.v1.RequestSignedInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.adamant.global.v1.SignInitTransactionRequest.prototype.clearSignedInfoList = function() {
  this.setSignedInfoList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.adamant.global.v1.SendTransactionRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.adamant.global.v1.SendTransactionRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.adamant.global.v1.SendTransactionRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.SendTransactionRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    walletId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    transactionId: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.adamant.global.v1.SendTransactionRequest}
 */
proto.adamant.global.v1.SendTransactionRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.adamant.global.v1.SendTransactionRequest;
  return proto.adamant.global.v1.SendTransactionRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.adamant.global.v1.SendTransactionRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.adamant.global.v1.SendTransactionRequest}
 */
proto.adamant.global.v1.SendTransactionRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setWalletId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTransactionId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.adamant.global.v1.SendTransactionRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.adamant.global.v1.SendTransactionRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.adamant.global.v1.SendTransactionRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.SendTransactionRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getWalletId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTransactionId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string wallet_id = 1;
 * @return {string}
 */
proto.adamant.global.v1.SendTransactionRequest.prototype.getWalletId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.adamant.global.v1.SendTransactionRequest.prototype.setWalletId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string transaction_id = 2;
 * @return {string}
 */
proto.adamant.global.v1.SendTransactionRequest.prototype.getTransactionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.adamant.global.v1.SendTransactionRequest.prototype.setTransactionId = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.adamant.global.v1.SendTransactionResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.adamant.global.v1.SendTransactionResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.adamant.global.v1.SendTransactionResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.SendTransactionResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    txId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.adamant.global.v1.SendTransactionResponse}
 */
proto.adamant.global.v1.SendTransactionResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.adamant.global.v1.SendTransactionResponse;
  return proto.adamant.global.v1.SendTransactionResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.adamant.global.v1.SendTransactionResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.adamant.global.v1.SendTransactionResponse}
 */
proto.adamant.global.v1.SendTransactionResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTxId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.adamant.global.v1.SendTransactionResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.adamant.global.v1.SendTransactionResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.adamant.global.v1.SendTransactionResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.SendTransactionResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTxId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string tx_id = 1;
 * @return {string}
 */
proto.adamant.global.v1.SendTransactionResponse.prototype.getTxId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.adamant.global.v1.SendTransactionResponse.prototype.setTxId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.adamant.global.v1.SendXRPInitTransactionsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.adamant.global.v1.SendXRPInitTransactionsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.adamant.global.v1.SendXRPInitTransactionsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.SendXRPInitTransactionsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    walletId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.adamant.global.v1.SendXRPInitTransactionsRequest}
 */
proto.adamant.global.v1.SendXRPInitTransactionsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.adamant.global.v1.SendXRPInitTransactionsRequest;
  return proto.adamant.global.v1.SendXRPInitTransactionsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.adamant.global.v1.SendXRPInitTransactionsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.adamant.global.v1.SendXRPInitTransactionsRequest}
 */
proto.adamant.global.v1.SendXRPInitTransactionsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setWalletId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.adamant.global.v1.SendXRPInitTransactionsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.adamant.global.v1.SendXRPInitTransactionsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.adamant.global.v1.SendXRPInitTransactionsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.SendXRPInitTransactionsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getWalletId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string wallet_id = 1;
 * @return {string}
 */
proto.adamant.global.v1.SendXRPInitTransactionsRequest.prototype.getWalletId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.adamant.global.v1.SendXRPInitTransactionsRequest.prototype.setWalletId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.adamant.global.v1.SendXRPInitTransactionsResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.adamant.global.v1.SendXRPInitTransactionsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.adamant.global.v1.SendXRPInitTransactionsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.adamant.global.v1.SendXRPInitTransactionsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.SendXRPInitTransactionsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    txIdsList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.adamant.global.v1.SendXRPInitTransactionsResponse}
 */
proto.adamant.global.v1.SendXRPInitTransactionsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.adamant.global.v1.SendXRPInitTransactionsResponse;
  return proto.adamant.global.v1.SendXRPInitTransactionsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.adamant.global.v1.SendXRPInitTransactionsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.adamant.global.v1.SendXRPInitTransactionsResponse}
 */
proto.adamant.global.v1.SendXRPInitTransactionsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addTxIds(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.adamant.global.v1.SendXRPInitTransactionsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.adamant.global.v1.SendXRPInitTransactionsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.adamant.global.v1.SendXRPInitTransactionsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.SendXRPInitTransactionsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTxIdsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
};


/**
 * repeated string tx_ids = 1;
 * @return {!Array<string>}
 */
proto.adamant.global.v1.SendXRPInitTransactionsResponse.prototype.getTxIdsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/** @param {!Array<string>} value */
proto.adamant.global.v1.SendXRPInitTransactionsResponse.prototype.setTxIdsList = function(value) {
  jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 */
proto.adamant.global.v1.SendXRPInitTransactionsResponse.prototype.addTxIds = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.adamant.global.v1.SendXRPInitTransactionsResponse.prototype.clearTxIdsList = function() {
  this.setTxIdsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.adamant.global.v1.SendInitTransactionRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.adamant.global.v1.SendInitTransactionRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.adamant.global.v1.SendInitTransactionRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.SendInitTransactionRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    walletId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.adamant.global.v1.SendInitTransactionRequest}
 */
proto.adamant.global.v1.SendInitTransactionRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.adamant.global.v1.SendInitTransactionRequest;
  return proto.adamant.global.v1.SendInitTransactionRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.adamant.global.v1.SendInitTransactionRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.adamant.global.v1.SendInitTransactionRequest}
 */
proto.adamant.global.v1.SendInitTransactionRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setWalletId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.adamant.global.v1.SendInitTransactionRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.adamant.global.v1.SendInitTransactionRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.adamant.global.v1.SendInitTransactionRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.SendInitTransactionRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getWalletId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string wallet_id = 1;
 * @return {string}
 */
proto.adamant.global.v1.SendInitTransactionRequest.prototype.getWalletId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.adamant.global.v1.SendInitTransactionRequest.prototype.setWalletId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.adamant.global.v1.SendInitTransactionResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.adamant.global.v1.SendInitTransactionResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.adamant.global.v1.SendInitTransactionResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.adamant.global.v1.SendInitTransactionResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.SendInitTransactionResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    txIdsList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.adamant.global.v1.SendInitTransactionResponse}
 */
proto.adamant.global.v1.SendInitTransactionResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.adamant.global.v1.SendInitTransactionResponse;
  return proto.adamant.global.v1.SendInitTransactionResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.adamant.global.v1.SendInitTransactionResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.adamant.global.v1.SendInitTransactionResponse}
 */
proto.adamant.global.v1.SendInitTransactionResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addTxIds(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.adamant.global.v1.SendInitTransactionResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.adamant.global.v1.SendInitTransactionResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.adamant.global.v1.SendInitTransactionResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.SendInitTransactionResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTxIdsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
};


/**
 * repeated string tx_ids = 1;
 * @return {!Array<string>}
 */
proto.adamant.global.v1.SendInitTransactionResponse.prototype.getTxIdsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/** @param {!Array<string>} value */
proto.adamant.global.v1.SendInitTransactionResponse.prototype.setTxIdsList = function(value) {
  jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 */
proto.adamant.global.v1.SendInitTransactionResponse.prototype.addTxIds = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.adamant.global.v1.SendInitTransactionResponse.prototype.clearTxIdsList = function() {
  this.setTxIdsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.adamant.global.v1.CancelTransactionRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.adamant.global.v1.CancelTransactionRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.adamant.global.v1.CancelTransactionRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.CancelTransactionRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    walletId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    transactionId: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.adamant.global.v1.CancelTransactionRequest}
 */
proto.adamant.global.v1.CancelTransactionRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.adamant.global.v1.CancelTransactionRequest;
  return proto.adamant.global.v1.CancelTransactionRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.adamant.global.v1.CancelTransactionRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.adamant.global.v1.CancelTransactionRequest}
 */
proto.adamant.global.v1.CancelTransactionRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setWalletId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTransactionId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.adamant.global.v1.CancelTransactionRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.adamant.global.v1.CancelTransactionRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.adamant.global.v1.CancelTransactionRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.CancelTransactionRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getWalletId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTransactionId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string wallet_id = 1;
 * @return {string}
 */
proto.adamant.global.v1.CancelTransactionRequest.prototype.getWalletId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.adamant.global.v1.CancelTransactionRequest.prototype.setWalletId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string transaction_id = 2;
 * @return {string}
 */
proto.adamant.global.v1.CancelTransactionRequest.prototype.getTransactionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.adamant.global.v1.CancelTransactionRequest.prototype.setTransactionId = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.adamant.global.v1.GetTransactionRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.adamant.global.v1.GetTransactionRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.adamant.global.v1.GetTransactionRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.GetTransactionRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    walletId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    transactionId: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.adamant.global.v1.GetTransactionRequest}
 */
proto.adamant.global.v1.GetTransactionRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.adamant.global.v1.GetTransactionRequest;
  return proto.adamant.global.v1.GetTransactionRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.adamant.global.v1.GetTransactionRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.adamant.global.v1.GetTransactionRequest}
 */
proto.adamant.global.v1.GetTransactionRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setWalletId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTransactionId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.adamant.global.v1.GetTransactionRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.adamant.global.v1.GetTransactionRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.adamant.global.v1.GetTransactionRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.GetTransactionRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getWalletId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTransactionId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string wallet_id = 1;
 * @return {string}
 */
proto.adamant.global.v1.GetTransactionRequest.prototype.getWalletId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.adamant.global.v1.GetTransactionRequest.prototype.setWalletId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string transaction_id = 2;
 * @return {string}
 */
proto.adamant.global.v1.GetTransactionRequest.prototype.getTransactionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.adamant.global.v1.GetTransactionRequest.prototype.setTransactionId = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.adamant.global.v1.GetTransactionByTxIDRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.adamant.global.v1.GetTransactionByTxIDRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.adamant.global.v1.GetTransactionByTxIDRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.GetTransactionByTxIDRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    walletId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    txId: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.adamant.global.v1.GetTransactionByTxIDRequest}
 */
proto.adamant.global.v1.GetTransactionByTxIDRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.adamant.global.v1.GetTransactionByTxIDRequest;
  return proto.adamant.global.v1.GetTransactionByTxIDRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.adamant.global.v1.GetTransactionByTxIDRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.adamant.global.v1.GetTransactionByTxIDRequest}
 */
proto.adamant.global.v1.GetTransactionByTxIDRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setWalletId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTxId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.adamant.global.v1.GetTransactionByTxIDRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.adamant.global.v1.GetTransactionByTxIDRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.adamant.global.v1.GetTransactionByTxIDRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.GetTransactionByTxIDRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getWalletId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTxId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string wallet_id = 1;
 * @return {string}
 */
proto.adamant.global.v1.GetTransactionByTxIDRequest.prototype.getWalletId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.adamant.global.v1.GetTransactionByTxIDRequest.prototype.setWalletId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string tx_id = 2;
 * @return {string}
 */
proto.adamant.global.v1.GetTransactionByTxIDRequest.prototype.getTxId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.adamant.global.v1.GetTransactionByTxIDRequest.prototype.setTxId = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.adamant.global.v1.ListTransactionsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.adamant.global.v1.ListTransactionsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.adamant.global.v1.ListTransactionsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.ListTransactionsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    walletId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    pageSize: jspb.Message.getFieldWithDefault(msg, 2, 0),
    pageToken: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.adamant.global.v1.ListTransactionsRequest}
 */
proto.adamant.global.v1.ListTransactionsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.adamant.global.v1.ListTransactionsRequest;
  return proto.adamant.global.v1.ListTransactionsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.adamant.global.v1.ListTransactionsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.adamant.global.v1.ListTransactionsRequest}
 */
proto.adamant.global.v1.ListTransactionsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setWalletId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPageSize(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setPageToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.adamant.global.v1.ListTransactionsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.adamant.global.v1.ListTransactionsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.adamant.global.v1.ListTransactionsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.ListTransactionsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getWalletId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPageSize();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getPageToken();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string wallet_id = 1;
 * @return {string}
 */
proto.adamant.global.v1.ListTransactionsRequest.prototype.getWalletId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.adamant.global.v1.ListTransactionsRequest.prototype.setWalletId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional uint32 page_size = 2;
 * @return {number}
 */
proto.adamant.global.v1.ListTransactionsRequest.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.adamant.global.v1.ListTransactionsRequest.prototype.setPageSize = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string page_token = 3;
 * @return {string}
 */
proto.adamant.global.v1.ListTransactionsRequest.prototype.getPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.adamant.global.v1.ListTransactionsRequest.prototype.setPageToken = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.adamant.global.v1.ListTransactionsByFilterRequest.repeatedFields_ = [8,9];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.adamant.global.v1.ListTransactionsByFilterRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.adamant.global.v1.ListTransactionsByFilterRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.adamant.global.v1.ListTransactionsByFilterRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.ListTransactionsByFilterRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    filterType: jspb.Message.getFieldWithDefault(msg, 1, 0),
    transactionId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    walletId: jspb.Message.getFieldWithDefault(msg, 12, ""),
    walletName: jspb.Message.getFieldWithDefault(msg, 3, ""),
    addressName: jspb.Message.getFieldWithDefault(msg, 4, ""),
    address: jspb.Message.getFieldWithDefault(msg, 5, ""),
    txid: jspb.Message.getFieldWithDefault(msg, 6, ""),
    coin: jspb.Message.getFieldWithDefault(msg, 7, 0),
    walletTypeList: (f = jspb.Message.getRepeatedField(msg, 8)) == null ? undefined : f,
    transactionStateList: (f = jspb.Message.getRepeatedField(msg, 9)) == null ? undefined : f,
    pageSize: jspb.Message.getFieldWithDefault(msg, 10, 0),
    pageToken: jspb.Message.getFieldWithDefault(msg, 11, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.adamant.global.v1.ListTransactionsByFilterRequest}
 */
proto.adamant.global.v1.ListTransactionsByFilterRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.adamant.global.v1.ListTransactionsByFilterRequest;
  return proto.adamant.global.v1.ListTransactionsByFilterRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.adamant.global.v1.ListTransactionsByFilterRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.adamant.global.v1.ListTransactionsByFilterRequest}
 */
proto.adamant.global.v1.ListTransactionsByFilterRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.adamant.global.v1.ListFilterType} */ (reader.readEnum());
      msg.setFilterType(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTransactionId(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setWalletId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setWalletName(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddressName(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setTxid(value);
      break;
    case 7:
      var value = /** @type {!proto.gincoinc.global.v1.Coin} */ (reader.readEnum());
      msg.setCoin(value);
      break;
    case 8:
      var value = /** @type {!Array<!proto.adamant.global.v1.WalletType>} */ (reader.readPackedEnum());
      msg.setWalletTypeList(value);
      break;
    case 9:
      var value = /** @type {!Array<!proto.adamant.global.v1.TransactionState>} */ (reader.readPackedEnum());
      msg.setTransactionStateList(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPageSize(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setPageToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.adamant.global.v1.ListTransactionsByFilterRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.adamant.global.v1.ListTransactionsByFilterRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.adamant.global.v1.ListTransactionsByFilterRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.ListTransactionsByFilterRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFilterType();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getTransactionId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getWalletId();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
  f = message.getWalletName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getAddressName();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getAddress();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getTxid();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getCoin();
  if (f !== 0.0) {
    writer.writeEnum(
      7,
      f
    );
  }
  f = message.getWalletTypeList();
  if (f.length > 0) {
    writer.writePackedEnum(
      8,
      f
    );
  }
  f = message.getTransactionStateList();
  if (f.length > 0) {
    writer.writePackedEnum(
      9,
      f
    );
  }
  f = message.getPageSize();
  if (f !== 0) {
    writer.writeUint32(
      10,
      f
    );
  }
  f = message.getPageToken();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
};


/**
 * optional ListFilterType filter_type = 1;
 * @return {!proto.adamant.global.v1.ListFilterType}
 */
proto.adamant.global.v1.ListTransactionsByFilterRequest.prototype.getFilterType = function() {
  return /** @type {!proto.adamant.global.v1.ListFilterType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {!proto.adamant.global.v1.ListFilterType} value */
proto.adamant.global.v1.ListTransactionsByFilterRequest.prototype.setFilterType = function(value) {
  jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional string transaction_id = 2;
 * @return {string}
 */
proto.adamant.global.v1.ListTransactionsByFilterRequest.prototype.getTransactionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.adamant.global.v1.ListTransactionsByFilterRequest.prototype.setTransactionId = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string wallet_id = 12;
 * @return {string}
 */
proto.adamant.global.v1.ListTransactionsByFilterRequest.prototype.getWalletId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/** @param {string} value */
proto.adamant.global.v1.ListTransactionsByFilterRequest.prototype.setWalletId = function(value) {
  jspb.Message.setProto3StringField(this, 12, value);
};


/**
 * optional string wallet_name = 3;
 * @return {string}
 */
proto.adamant.global.v1.ListTransactionsByFilterRequest.prototype.getWalletName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.adamant.global.v1.ListTransactionsByFilterRequest.prototype.setWalletName = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string address_name = 4;
 * @return {string}
 */
proto.adamant.global.v1.ListTransactionsByFilterRequest.prototype.getAddressName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.adamant.global.v1.ListTransactionsByFilterRequest.prototype.setAddressName = function(value) {
  jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string address = 5;
 * @return {string}
 */
proto.adamant.global.v1.ListTransactionsByFilterRequest.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/** @param {string} value */
proto.adamant.global.v1.ListTransactionsByFilterRequest.prototype.setAddress = function(value) {
  jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string txid = 6;
 * @return {string}
 */
proto.adamant.global.v1.ListTransactionsByFilterRequest.prototype.getTxid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/** @param {string} value */
proto.adamant.global.v1.ListTransactionsByFilterRequest.prototype.setTxid = function(value) {
  jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional gincoinc.global.v1.Coin coin = 7;
 * @return {!proto.gincoinc.global.v1.Coin}
 */
proto.adamant.global.v1.ListTransactionsByFilterRequest.prototype.getCoin = function() {
  return /** @type {!proto.gincoinc.global.v1.Coin} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/** @param {!proto.gincoinc.global.v1.Coin} value */
proto.adamant.global.v1.ListTransactionsByFilterRequest.prototype.setCoin = function(value) {
  jspb.Message.setProto3EnumField(this, 7, value);
};


/**
 * repeated WalletType wallet_type = 8;
 * @return {!Array<!proto.adamant.global.v1.WalletType>}
 */
proto.adamant.global.v1.ListTransactionsByFilterRequest.prototype.getWalletTypeList = function() {
  return /** @type {!Array<!proto.adamant.global.v1.WalletType>} */ (jspb.Message.getRepeatedField(this, 8));
};


/** @param {!Array<!proto.adamant.global.v1.WalletType>} value */
proto.adamant.global.v1.ListTransactionsByFilterRequest.prototype.setWalletTypeList = function(value) {
  jspb.Message.setField(this, 8, value || []);
};


/**
 * @param {!proto.adamant.global.v1.WalletType} value
 * @param {number=} opt_index
 */
proto.adamant.global.v1.ListTransactionsByFilterRequest.prototype.addWalletType = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 8, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.adamant.global.v1.ListTransactionsByFilterRequest.prototype.clearWalletTypeList = function() {
  this.setWalletTypeList([]);
};


/**
 * repeated TransactionState transaction_state = 9;
 * @return {!Array<!proto.adamant.global.v1.TransactionState>}
 */
proto.adamant.global.v1.ListTransactionsByFilterRequest.prototype.getTransactionStateList = function() {
  return /** @type {!Array<!proto.adamant.global.v1.TransactionState>} */ (jspb.Message.getRepeatedField(this, 9));
};


/** @param {!Array<!proto.adamant.global.v1.TransactionState>} value */
proto.adamant.global.v1.ListTransactionsByFilterRequest.prototype.setTransactionStateList = function(value) {
  jspb.Message.setField(this, 9, value || []);
};


/**
 * @param {!proto.adamant.global.v1.TransactionState} value
 * @param {number=} opt_index
 */
proto.adamant.global.v1.ListTransactionsByFilterRequest.prototype.addTransactionState = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 9, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.adamant.global.v1.ListTransactionsByFilterRequest.prototype.clearTransactionStateList = function() {
  this.setTransactionStateList([]);
};


/**
 * optional uint32 page_size = 10;
 * @return {number}
 */
proto.adamant.global.v1.ListTransactionsByFilterRequest.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/** @param {number} value */
proto.adamant.global.v1.ListTransactionsByFilterRequest.prototype.setPageSize = function(value) {
  jspb.Message.setProto3IntField(this, 10, value);
};


/**
 * optional string page_token = 11;
 * @return {string}
 */
proto.adamant.global.v1.ListTransactionsByFilterRequest.prototype.getPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/** @param {string} value */
proto.adamant.global.v1.ListTransactionsByFilterRequest.prototype.setPageToken = function(value) {
  jspb.Message.setProto3StringField(this, 11, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.adamant.global.v1.ListTransactionsResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.adamant.global.v1.ListTransactionsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.adamant.global.v1.ListTransactionsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.adamant.global.v1.ListTransactionsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.ListTransactionsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    transactionsList: jspb.Message.toObjectList(msg.getTransactionsList(),
    gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Transaction.toObject, includeInstance),
    nextPageToken: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.adamant.global.v1.ListTransactionsResponse}
 */
proto.adamant.global.v1.ListTransactionsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.adamant.global.v1.ListTransactionsResponse;
  return proto.adamant.global.v1.ListTransactionsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.adamant.global.v1.ListTransactionsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.adamant.global.v1.ListTransactionsResponse}
 */
proto.adamant.global.v1.ListTransactionsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Transaction;
      reader.readMessage(value,gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Transaction.deserializeBinaryFromReader);
      msg.addTransactions(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setNextPageToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.adamant.global.v1.ListTransactionsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.adamant.global.v1.ListTransactionsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.adamant.global.v1.ListTransactionsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.ListTransactionsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTransactionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Transaction.serializeBinaryToWriter
    );
  }
  f = message.getNextPageToken();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * repeated Transaction transactions = 1;
 * @return {!Array<!proto.adamant.global.v1.Transaction>}
 */
proto.adamant.global.v1.ListTransactionsResponse.prototype.getTransactionsList = function() {
  return /** @type{!Array<!proto.adamant.global.v1.Transaction>} */ (
    jspb.Message.getRepeatedWrapperField(this, gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Transaction, 1));
};


/** @param {!Array<!proto.adamant.global.v1.Transaction>} value */
proto.adamant.global.v1.ListTransactionsResponse.prototype.setTransactionsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.adamant.global.v1.Transaction=} opt_value
 * @param {number=} opt_index
 * @return {!proto.adamant.global.v1.Transaction}
 */
proto.adamant.global.v1.ListTransactionsResponse.prototype.addTransactions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.adamant.global.v1.Transaction, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.adamant.global.v1.ListTransactionsResponse.prototype.clearTransactionsList = function() {
  this.setTransactionsList([]);
};


/**
 * optional string next_page_token = 2;
 * @return {string}
 */
proto.adamant.global.v1.ListTransactionsResponse.prototype.getNextPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.adamant.global.v1.ListTransactionsResponse.prototype.setNextPageToken = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.adamant.global.v1.GetSignInfoRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.adamant.global.v1.GetSignInfoRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.adamant.global.v1.GetSignInfoRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.GetSignInfoRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    walletId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    transactionId: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.adamant.global.v1.GetSignInfoRequest}
 */
proto.adamant.global.v1.GetSignInfoRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.adamant.global.v1.GetSignInfoRequest;
  return proto.adamant.global.v1.GetSignInfoRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.adamant.global.v1.GetSignInfoRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.adamant.global.v1.GetSignInfoRequest}
 */
proto.adamant.global.v1.GetSignInfoRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setWalletId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTransactionId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.adamant.global.v1.GetSignInfoRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.adamant.global.v1.GetSignInfoRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.adamant.global.v1.GetSignInfoRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.GetSignInfoRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getWalletId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTransactionId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string wallet_id = 1;
 * @return {string}
 */
proto.adamant.global.v1.GetSignInfoRequest.prototype.getWalletId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.adamant.global.v1.GetSignInfoRequest.prototype.setWalletId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string transaction_id = 2;
 * @return {string}
 */
proto.adamant.global.v1.GetSignInfoRequest.prototype.getTransactionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.adamant.global.v1.GetSignInfoRequest.prototype.setTransactionId = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.adamant.global.v1.ListSignInfoRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.adamant.global.v1.ListSignInfoRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.adamant.global.v1.ListSignInfoRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.ListSignInfoRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    walletId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    transactionId: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.adamant.global.v1.ListSignInfoRequest}
 */
proto.adamant.global.v1.ListSignInfoRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.adamant.global.v1.ListSignInfoRequest;
  return proto.adamant.global.v1.ListSignInfoRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.adamant.global.v1.ListSignInfoRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.adamant.global.v1.ListSignInfoRequest}
 */
proto.adamant.global.v1.ListSignInfoRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setWalletId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTransactionId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.adamant.global.v1.ListSignInfoRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.adamant.global.v1.ListSignInfoRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.adamant.global.v1.ListSignInfoRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.ListSignInfoRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getWalletId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTransactionId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string wallet_id = 1;
 * @return {string}
 */
proto.adamant.global.v1.ListSignInfoRequest.prototype.getWalletId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.adamant.global.v1.ListSignInfoRequest.prototype.setWalletId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string transaction_id = 2;
 * @return {string}
 */
proto.adamant.global.v1.ListSignInfoRequest.prototype.getTransactionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.adamant.global.v1.ListSignInfoRequest.prototype.setTransactionId = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.adamant.global.v1.ListSignInfoResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.adamant.global.v1.ListSignInfoResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.adamant.global.v1.ListSignInfoResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.adamant.global.v1.ListSignInfoResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.ListSignInfoResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    signInfoListList: jspb.Message.toObjectList(msg.getSignInfoListList(),
    gincoinc_adamant_global_v1_adamantglobalv1_model_pb.SignInfo.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.adamant.global.v1.ListSignInfoResponse}
 */
proto.adamant.global.v1.ListSignInfoResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.adamant.global.v1.ListSignInfoResponse;
  return proto.adamant.global.v1.ListSignInfoResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.adamant.global.v1.ListSignInfoResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.adamant.global.v1.ListSignInfoResponse}
 */
proto.adamant.global.v1.ListSignInfoResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new gincoinc_adamant_global_v1_adamantglobalv1_model_pb.SignInfo;
      reader.readMessage(value,gincoinc_adamant_global_v1_adamantglobalv1_model_pb.SignInfo.deserializeBinaryFromReader);
      msg.addSignInfoList(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.adamant.global.v1.ListSignInfoResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.adamant.global.v1.ListSignInfoResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.adamant.global.v1.ListSignInfoResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.ListSignInfoResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSignInfoListList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      gincoinc_adamant_global_v1_adamantglobalv1_model_pb.SignInfo.serializeBinaryToWriter
    );
  }
};


/**
 * repeated SignInfo sign_info_list = 1;
 * @return {!Array<!proto.adamant.global.v1.SignInfo>}
 */
proto.adamant.global.v1.ListSignInfoResponse.prototype.getSignInfoListList = function() {
  return /** @type{!Array<!proto.adamant.global.v1.SignInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, gincoinc_adamant_global_v1_adamantglobalv1_model_pb.SignInfo, 1));
};


/** @param {!Array<!proto.adamant.global.v1.SignInfo>} value */
proto.adamant.global.v1.ListSignInfoResponse.prototype.setSignInfoListList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.adamant.global.v1.SignInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.adamant.global.v1.SignInfo}
 */
proto.adamant.global.v1.ListSignInfoResponse.prototype.addSignInfoList = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.adamant.global.v1.SignInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.adamant.global.v1.ListSignInfoResponse.prototype.clearSignInfoListList = function() {
  this.setSignInfoListList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.adamant.global.v1.ListXRPInitSignInfoRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.adamant.global.v1.ListXRPInitSignInfoRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.adamant.global.v1.ListXRPInitSignInfoRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.ListXRPInitSignInfoRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    walletId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.adamant.global.v1.ListXRPInitSignInfoRequest}
 */
proto.adamant.global.v1.ListXRPInitSignInfoRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.adamant.global.v1.ListXRPInitSignInfoRequest;
  return proto.adamant.global.v1.ListXRPInitSignInfoRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.adamant.global.v1.ListXRPInitSignInfoRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.adamant.global.v1.ListXRPInitSignInfoRequest}
 */
proto.adamant.global.v1.ListXRPInitSignInfoRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setWalletId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.adamant.global.v1.ListXRPInitSignInfoRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.adamant.global.v1.ListXRPInitSignInfoRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.adamant.global.v1.ListXRPInitSignInfoRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.ListXRPInitSignInfoRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getWalletId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string wallet_id = 1;
 * @return {string}
 */
proto.adamant.global.v1.ListXRPInitSignInfoRequest.prototype.getWalletId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.adamant.global.v1.ListXRPInitSignInfoRequest.prototype.setWalletId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.adamant.global.v1.ListXRPInitSignInfoResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.adamant.global.v1.ListXRPInitSignInfoResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.adamant.global.v1.ListXRPInitSignInfoResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.adamant.global.v1.ListXRPInitSignInfoResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.ListXRPInitSignInfoResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    signInfoListList: jspb.Message.toObjectList(msg.getSignInfoListList(),
    gincoinc_adamant_global_v1_adamantglobalv1_model_pb.SignInfo.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.adamant.global.v1.ListXRPInitSignInfoResponse}
 */
proto.adamant.global.v1.ListXRPInitSignInfoResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.adamant.global.v1.ListXRPInitSignInfoResponse;
  return proto.adamant.global.v1.ListXRPInitSignInfoResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.adamant.global.v1.ListXRPInitSignInfoResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.adamant.global.v1.ListXRPInitSignInfoResponse}
 */
proto.adamant.global.v1.ListXRPInitSignInfoResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new gincoinc_adamant_global_v1_adamantglobalv1_model_pb.SignInfo;
      reader.readMessage(value,gincoinc_adamant_global_v1_adamantglobalv1_model_pb.SignInfo.deserializeBinaryFromReader);
      msg.addSignInfoList(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.adamant.global.v1.ListXRPInitSignInfoResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.adamant.global.v1.ListXRPInitSignInfoResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.adamant.global.v1.ListXRPInitSignInfoResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.ListXRPInitSignInfoResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSignInfoListList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      gincoinc_adamant_global_v1_adamantglobalv1_model_pb.SignInfo.serializeBinaryToWriter
    );
  }
};


/**
 * repeated SignInfo sign_info_list = 1;
 * @return {!Array<!proto.adamant.global.v1.SignInfo>}
 */
proto.adamant.global.v1.ListXRPInitSignInfoResponse.prototype.getSignInfoListList = function() {
  return /** @type{!Array<!proto.adamant.global.v1.SignInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, gincoinc_adamant_global_v1_adamantglobalv1_model_pb.SignInfo, 1));
};


/** @param {!Array<!proto.adamant.global.v1.SignInfo>} value */
proto.adamant.global.v1.ListXRPInitSignInfoResponse.prototype.setSignInfoListList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.adamant.global.v1.SignInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.adamant.global.v1.SignInfo}
 */
proto.adamant.global.v1.ListXRPInitSignInfoResponse.prototype.addSignInfoList = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.adamant.global.v1.SignInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.adamant.global.v1.ListXRPInitSignInfoResponse.prototype.clearSignInfoListList = function() {
  this.setSignInfoListList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.adamant.global.v1.ListInitSignInfoRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.adamant.global.v1.ListInitSignInfoRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.adamant.global.v1.ListInitSignInfoRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.ListInitSignInfoRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    walletId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.adamant.global.v1.ListInitSignInfoRequest}
 */
proto.adamant.global.v1.ListInitSignInfoRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.adamant.global.v1.ListInitSignInfoRequest;
  return proto.adamant.global.v1.ListInitSignInfoRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.adamant.global.v1.ListInitSignInfoRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.adamant.global.v1.ListInitSignInfoRequest}
 */
proto.adamant.global.v1.ListInitSignInfoRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setWalletId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.adamant.global.v1.ListInitSignInfoRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.adamant.global.v1.ListInitSignInfoRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.adamant.global.v1.ListInitSignInfoRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.ListInitSignInfoRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getWalletId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string wallet_id = 1;
 * @return {string}
 */
proto.adamant.global.v1.ListInitSignInfoRequest.prototype.getWalletId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.adamant.global.v1.ListInitSignInfoRequest.prototype.setWalletId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.adamant.global.v1.ListTransfersRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.adamant.global.v1.ListTransfersRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.adamant.global.v1.ListTransfersRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.ListTransfersRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    walletId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    pageSize: jspb.Message.getFieldWithDefault(msg, 2, 0),
    pageToken: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.adamant.global.v1.ListTransfersRequest}
 */
proto.adamant.global.v1.ListTransfersRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.adamant.global.v1.ListTransfersRequest;
  return proto.adamant.global.v1.ListTransfersRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.adamant.global.v1.ListTransfersRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.adamant.global.v1.ListTransfersRequest}
 */
proto.adamant.global.v1.ListTransfersRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setWalletId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPageSize(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setPageToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.adamant.global.v1.ListTransfersRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.adamant.global.v1.ListTransfersRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.adamant.global.v1.ListTransfersRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.ListTransfersRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getWalletId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPageSize();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getPageToken();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string wallet_id = 1;
 * @return {string}
 */
proto.adamant.global.v1.ListTransfersRequest.prototype.getWalletId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.adamant.global.v1.ListTransfersRequest.prototype.setWalletId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional uint32 page_size = 2;
 * @return {number}
 */
proto.adamant.global.v1.ListTransfersRequest.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.adamant.global.v1.ListTransfersRequest.prototype.setPageSize = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string page_token = 3;
 * @return {string}
 */
proto.adamant.global.v1.ListTransfersRequest.prototype.getPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.adamant.global.v1.ListTransfersRequest.prototype.setPageToken = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.adamant.global.v1.ListTransfersByFilterRequest.repeatedFields_ = [8];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.adamant.global.v1.ListTransfersByFilterRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.adamant.global.v1.ListTransfersByFilterRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.adamant.global.v1.ListTransfersByFilterRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.ListTransfersByFilterRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    filterType: jspb.Message.getFieldWithDefault(msg, 1, 0),
    transferId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    walletId: jspb.Message.getFieldWithDefault(msg, 13, ""),
    walletName: jspb.Message.getFieldWithDefault(msg, 3, ""),
    addressName: jspb.Message.getFieldWithDefault(msg, 4, ""),
    address: jspb.Message.getFieldWithDefault(msg, 5, ""),
    txid: jspb.Message.getFieldWithDefault(msg, 6, ""),
    watchOnly: jspb.Message.getBooleanFieldWithDefault(msg, 12, false),
    coin: jspb.Message.getFieldWithDefault(msg, 7, 0),
    walletTypeList: (f = jspb.Message.getRepeatedField(msg, 8)) == null ? undefined : f,
    transferType: jspb.Message.getFieldWithDefault(msg, 9, 0),
    pageSize: jspb.Message.getFieldWithDefault(msg, 10, 0),
    pageToken: jspb.Message.getFieldWithDefault(msg, 11, ""),
    startTime: (f = msg.getStartTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    endTime: (f = msg.getEndTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.adamant.global.v1.ListTransfersByFilterRequest}
 */
proto.adamant.global.v1.ListTransfersByFilterRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.adamant.global.v1.ListTransfersByFilterRequest;
  return proto.adamant.global.v1.ListTransfersByFilterRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.adamant.global.v1.ListTransfersByFilterRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.adamant.global.v1.ListTransfersByFilterRequest}
 */
proto.adamant.global.v1.ListTransfersByFilterRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.adamant.global.v1.ListFilterType} */ (reader.readEnum());
      msg.setFilterType(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTransferId(value);
      break;
    case 13:
      var value = /** @type {string} */ (reader.readString());
      msg.setWalletId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setWalletName(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddressName(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setTxid(value);
      break;
    case 12:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setWatchOnly(value);
      break;
    case 7:
      var value = /** @type {!proto.gincoinc.global.v1.Coin} */ (reader.readEnum());
      msg.setCoin(value);
      break;
    case 8:
      var value = /** @type {!Array<!proto.adamant.global.v1.WalletType>} */ (reader.readPackedEnum());
      msg.setWalletTypeList(value);
      break;
    case 9:
      var value = /** @type {!proto.gincoinc.global.v1.TransferType} */ (reader.readEnum());
      msg.setTransferType(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPageSize(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setPageToken(value);
      break;
    case 14:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setStartTime(value);
      break;
    case 15:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setEndTime(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.adamant.global.v1.ListTransfersByFilterRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.adamant.global.v1.ListTransfersByFilterRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.adamant.global.v1.ListTransfersByFilterRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.ListTransfersByFilterRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFilterType();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getTransferId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getWalletId();
  if (f.length > 0) {
    writer.writeString(
      13,
      f
    );
  }
  f = message.getWalletName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getAddressName();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getAddress();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getTxid();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getWatchOnly();
  if (f) {
    writer.writeBool(
      12,
      f
    );
  }
  f = message.getCoin();
  if (f !== 0.0) {
    writer.writeEnum(
      7,
      f
    );
  }
  f = message.getWalletTypeList();
  if (f.length > 0) {
    writer.writePackedEnum(
      8,
      f
    );
  }
  f = message.getTransferType();
  if (f !== 0.0) {
    writer.writeEnum(
      9,
      f
    );
  }
  f = message.getPageSize();
  if (f !== 0) {
    writer.writeUint32(
      10,
      f
    );
  }
  f = message.getPageToken();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getStartTime();
  if (f != null) {
    writer.writeMessage(
      14,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getEndTime();
  if (f != null) {
    writer.writeMessage(
      15,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional ListFilterType filter_type = 1;
 * @return {!proto.adamant.global.v1.ListFilterType}
 */
proto.adamant.global.v1.ListTransfersByFilterRequest.prototype.getFilterType = function() {
  return /** @type {!proto.adamant.global.v1.ListFilterType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {!proto.adamant.global.v1.ListFilterType} value */
proto.adamant.global.v1.ListTransfersByFilterRequest.prototype.setFilterType = function(value) {
  jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional string transfer_id = 2;
 * @return {string}
 */
proto.adamant.global.v1.ListTransfersByFilterRequest.prototype.getTransferId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.adamant.global.v1.ListTransfersByFilterRequest.prototype.setTransferId = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string wallet_id = 13;
 * @return {string}
 */
proto.adamant.global.v1.ListTransfersByFilterRequest.prototype.getWalletId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 13, ""));
};


/** @param {string} value */
proto.adamant.global.v1.ListTransfersByFilterRequest.prototype.setWalletId = function(value) {
  jspb.Message.setProto3StringField(this, 13, value);
};


/**
 * optional string wallet_name = 3;
 * @return {string}
 */
proto.adamant.global.v1.ListTransfersByFilterRequest.prototype.getWalletName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.adamant.global.v1.ListTransfersByFilterRequest.prototype.setWalletName = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string address_name = 4;
 * @return {string}
 */
proto.adamant.global.v1.ListTransfersByFilterRequest.prototype.getAddressName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.adamant.global.v1.ListTransfersByFilterRequest.prototype.setAddressName = function(value) {
  jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string address = 5;
 * @return {string}
 */
proto.adamant.global.v1.ListTransfersByFilterRequest.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/** @param {string} value */
proto.adamant.global.v1.ListTransfersByFilterRequest.prototype.setAddress = function(value) {
  jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string txid = 6;
 * @return {string}
 */
proto.adamant.global.v1.ListTransfersByFilterRequest.prototype.getTxid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/** @param {string} value */
proto.adamant.global.v1.ListTransfersByFilterRequest.prototype.setTxid = function(value) {
  jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional bool watch_only = 12;
 * @return {boolean}
 */
proto.adamant.global.v1.ListTransfersByFilterRequest.prototype.getWatchOnly = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 12, false));
};


/** @param {boolean} value */
proto.adamant.global.v1.ListTransfersByFilterRequest.prototype.setWatchOnly = function(value) {
  jspb.Message.setProto3BooleanField(this, 12, value);
};


/**
 * optional gincoinc.global.v1.Coin coin = 7;
 * @return {!proto.gincoinc.global.v1.Coin}
 */
proto.adamant.global.v1.ListTransfersByFilterRequest.prototype.getCoin = function() {
  return /** @type {!proto.gincoinc.global.v1.Coin} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/** @param {!proto.gincoinc.global.v1.Coin} value */
proto.adamant.global.v1.ListTransfersByFilterRequest.prototype.setCoin = function(value) {
  jspb.Message.setProto3EnumField(this, 7, value);
};


/**
 * repeated WalletType wallet_type = 8;
 * @return {!Array<!proto.adamant.global.v1.WalletType>}
 */
proto.adamant.global.v1.ListTransfersByFilterRequest.prototype.getWalletTypeList = function() {
  return /** @type {!Array<!proto.adamant.global.v1.WalletType>} */ (jspb.Message.getRepeatedField(this, 8));
};


/** @param {!Array<!proto.adamant.global.v1.WalletType>} value */
proto.adamant.global.v1.ListTransfersByFilterRequest.prototype.setWalletTypeList = function(value) {
  jspb.Message.setField(this, 8, value || []);
};


/**
 * @param {!proto.adamant.global.v1.WalletType} value
 * @param {number=} opt_index
 */
proto.adamant.global.v1.ListTransfersByFilterRequest.prototype.addWalletType = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 8, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.adamant.global.v1.ListTransfersByFilterRequest.prototype.clearWalletTypeList = function() {
  this.setWalletTypeList([]);
};


/**
 * optional gincoinc.global.v1.TransferType transfer_type = 9;
 * @return {!proto.gincoinc.global.v1.TransferType}
 */
proto.adamant.global.v1.ListTransfersByFilterRequest.prototype.getTransferType = function() {
  return /** @type {!proto.gincoinc.global.v1.TransferType} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/** @param {!proto.gincoinc.global.v1.TransferType} value */
proto.adamant.global.v1.ListTransfersByFilterRequest.prototype.setTransferType = function(value) {
  jspb.Message.setProto3EnumField(this, 9, value);
};


/**
 * optional uint32 page_size = 10;
 * @return {number}
 */
proto.adamant.global.v1.ListTransfersByFilterRequest.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/** @param {number} value */
proto.adamant.global.v1.ListTransfersByFilterRequest.prototype.setPageSize = function(value) {
  jspb.Message.setProto3IntField(this, 10, value);
};


/**
 * optional string page_token = 11;
 * @return {string}
 */
proto.adamant.global.v1.ListTransfersByFilterRequest.prototype.getPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/** @param {string} value */
proto.adamant.global.v1.ListTransfersByFilterRequest.prototype.setPageToken = function(value) {
  jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional google.protobuf.Timestamp start_time = 14;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.adamant.global.v1.ListTransfersByFilterRequest.prototype.getStartTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 14));
};


/** @param {?proto.google.protobuf.Timestamp|undefined} value */
proto.adamant.global.v1.ListTransfersByFilterRequest.prototype.setStartTime = function(value) {
  jspb.Message.setWrapperField(this, 14, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.adamant.global.v1.ListTransfersByFilterRequest.prototype.clearStartTime = function() {
  this.setStartTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.adamant.global.v1.ListTransfersByFilterRequest.prototype.hasStartTime = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional google.protobuf.Timestamp end_time = 15;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.adamant.global.v1.ListTransfersByFilterRequest.prototype.getEndTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 15));
};


/** @param {?proto.google.protobuf.Timestamp|undefined} value */
proto.adamant.global.v1.ListTransfersByFilterRequest.prototype.setEndTime = function(value) {
  jspb.Message.setWrapperField(this, 15, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.adamant.global.v1.ListTransfersByFilterRequest.prototype.clearEndTime = function() {
  this.setEndTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.adamant.global.v1.ListTransfersByFilterRequest.prototype.hasEndTime = function() {
  return jspb.Message.getField(this, 15) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.adamant.global.v1.ListTransfersResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.adamant.global.v1.ListTransfersResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.adamant.global.v1.ListTransfersResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.adamant.global.v1.ListTransfersResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.ListTransfersResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    transfersList: jspb.Message.toObjectList(msg.getTransfersList(),
    gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Transfer.toObject, includeInstance),
    nextPageToken: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.adamant.global.v1.ListTransfersResponse}
 */
proto.adamant.global.v1.ListTransfersResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.adamant.global.v1.ListTransfersResponse;
  return proto.adamant.global.v1.ListTransfersResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.adamant.global.v1.ListTransfersResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.adamant.global.v1.ListTransfersResponse}
 */
proto.adamant.global.v1.ListTransfersResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Transfer;
      reader.readMessage(value,gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Transfer.deserializeBinaryFromReader);
      msg.addTransfers(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setNextPageToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.adamant.global.v1.ListTransfersResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.adamant.global.v1.ListTransfersResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.adamant.global.v1.ListTransfersResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.ListTransfersResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTransfersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Transfer.serializeBinaryToWriter
    );
  }
  f = message.getNextPageToken();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * repeated Transfer transfers = 1;
 * @return {!Array<!proto.adamant.global.v1.Transfer>}
 */
proto.adamant.global.v1.ListTransfersResponse.prototype.getTransfersList = function() {
  return /** @type{!Array<!proto.adamant.global.v1.Transfer>} */ (
    jspb.Message.getRepeatedWrapperField(this, gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Transfer, 1));
};


/** @param {!Array<!proto.adamant.global.v1.Transfer>} value */
proto.adamant.global.v1.ListTransfersResponse.prototype.setTransfersList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.adamant.global.v1.Transfer=} opt_value
 * @param {number=} opt_index
 * @return {!proto.adamant.global.v1.Transfer}
 */
proto.adamant.global.v1.ListTransfersResponse.prototype.addTransfers = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.adamant.global.v1.Transfer, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.adamant.global.v1.ListTransfersResponse.prototype.clearTransfersList = function() {
  this.setTransfersList([]);
};


/**
 * optional string next_page_token = 2;
 * @return {string}
 */
proto.adamant.global.v1.ListTransfersResponse.prototype.getNextPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.adamant.global.v1.ListTransfersResponse.prototype.setNextPageToken = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.adamant.global.v1.GetRateSnapshotRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.adamant.global.v1.GetRateSnapshotRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.adamant.global.v1.GetRateSnapshotRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.GetRateSnapshotRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    rateSnapshotId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.adamant.global.v1.GetRateSnapshotRequest}
 */
proto.adamant.global.v1.GetRateSnapshotRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.adamant.global.v1.GetRateSnapshotRequest;
  return proto.adamant.global.v1.GetRateSnapshotRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.adamant.global.v1.GetRateSnapshotRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.adamant.global.v1.GetRateSnapshotRequest}
 */
proto.adamant.global.v1.GetRateSnapshotRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setRateSnapshotId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.adamant.global.v1.GetRateSnapshotRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.adamant.global.v1.GetRateSnapshotRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.adamant.global.v1.GetRateSnapshotRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.GetRateSnapshotRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRateSnapshotId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string rate_snapshot_id = 1;
 * @return {string}
 */
proto.adamant.global.v1.GetRateSnapshotRequest.prototype.getRateSnapshotId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.adamant.global.v1.GetRateSnapshotRequest.prototype.setRateSnapshotId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.adamant.global.v1.GetLatestRateSnapshotRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.adamant.global.v1.GetLatestRateSnapshotRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.adamant.global.v1.GetLatestRateSnapshotRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.GetLatestRateSnapshotRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.adamant.global.v1.GetLatestRateSnapshotRequest}
 */
proto.adamant.global.v1.GetLatestRateSnapshotRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.adamant.global.v1.GetLatestRateSnapshotRequest;
  return proto.adamant.global.v1.GetLatestRateSnapshotRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.adamant.global.v1.GetLatestRateSnapshotRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.adamant.global.v1.GetLatestRateSnapshotRequest}
 */
proto.adamant.global.v1.GetLatestRateSnapshotRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.adamant.global.v1.GetLatestRateSnapshotRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.adamant.global.v1.GetLatestRateSnapshotRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.adamant.global.v1.GetLatestRateSnapshotRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.GetLatestRateSnapshotRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.adamant.global.v1.SetRatesRequest.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.adamant.global.v1.SetRatesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.adamant.global.v1.SetRatesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.adamant.global.v1.SetRatesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.SetRatesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    ratesList: jspb.Message.toObjectList(msg.getRatesList(),
    gincoinc_adamant_global_v1_adamantglobalv1_model_pb.RequestRate.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.adamant.global.v1.SetRatesRequest}
 */
proto.adamant.global.v1.SetRatesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.adamant.global.v1.SetRatesRequest;
  return proto.adamant.global.v1.SetRatesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.adamant.global.v1.SetRatesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.adamant.global.v1.SetRatesRequest}
 */
proto.adamant.global.v1.SetRatesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new gincoinc_adamant_global_v1_adamantglobalv1_model_pb.RequestRate;
      reader.readMessage(value,gincoinc_adamant_global_v1_adamantglobalv1_model_pb.RequestRate.deserializeBinaryFromReader);
      msg.addRates(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.adamant.global.v1.SetRatesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.adamant.global.v1.SetRatesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.adamant.global.v1.SetRatesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.SetRatesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRatesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      gincoinc_adamant_global_v1_adamantglobalv1_model_pb.RequestRate.serializeBinaryToWriter
    );
  }
};


/**
 * repeated RequestRate rates = 1;
 * @return {!Array<!proto.adamant.global.v1.RequestRate>}
 */
proto.adamant.global.v1.SetRatesRequest.prototype.getRatesList = function() {
  return /** @type{!Array<!proto.adamant.global.v1.RequestRate>} */ (
    jspb.Message.getRepeatedWrapperField(this, gincoinc_adamant_global_v1_adamantglobalv1_model_pb.RequestRate, 1));
};


/** @param {!Array<!proto.adamant.global.v1.RequestRate>} value */
proto.adamant.global.v1.SetRatesRequest.prototype.setRatesList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.adamant.global.v1.RequestRate=} opt_value
 * @param {number=} opt_index
 * @return {!proto.adamant.global.v1.RequestRate}
 */
proto.adamant.global.v1.SetRatesRequest.prototype.addRates = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.adamant.global.v1.RequestRate, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.adamant.global.v1.SetRatesRequest.prototype.clearRatesList = function() {
  this.setRatesList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.adamant.global.v1.SetRatesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.adamant.global.v1.SetRatesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.adamant.global.v1.SetRatesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.SetRatesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    rateSnapshotId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.adamant.global.v1.SetRatesResponse}
 */
proto.adamant.global.v1.SetRatesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.adamant.global.v1.SetRatesResponse;
  return proto.adamant.global.v1.SetRatesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.adamant.global.v1.SetRatesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.adamant.global.v1.SetRatesResponse}
 */
proto.adamant.global.v1.SetRatesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setRateSnapshotId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.adamant.global.v1.SetRatesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.adamant.global.v1.SetRatesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.adamant.global.v1.SetRatesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.SetRatesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRateSnapshotId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string rate_snapshot_id = 1;
 * @return {string}
 */
proto.adamant.global.v1.SetRatesResponse.prototype.getRateSnapshotId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.adamant.global.v1.SetRatesResponse.prototype.setRateSnapshotId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.adamant.global.v1.GetSpendableBalanceRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.adamant.global.v1.GetSpendableBalanceRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.adamant.global.v1.GetSpendableBalanceRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.GetSpendableBalanceRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    walletId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.adamant.global.v1.GetSpendableBalanceRequest}
 */
proto.adamant.global.v1.GetSpendableBalanceRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.adamant.global.v1.GetSpendableBalanceRequest;
  return proto.adamant.global.v1.GetSpendableBalanceRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.adamant.global.v1.GetSpendableBalanceRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.adamant.global.v1.GetSpendableBalanceRequest}
 */
proto.adamant.global.v1.GetSpendableBalanceRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setWalletId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.adamant.global.v1.GetSpendableBalanceRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.adamant.global.v1.GetSpendableBalanceRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.adamant.global.v1.GetSpendableBalanceRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.GetSpendableBalanceRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getWalletId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string wallet_id = 1;
 * @return {string}
 */
proto.adamant.global.v1.GetSpendableBalanceRequest.prototype.getWalletId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.adamant.global.v1.GetSpendableBalanceRequest.prototype.setWalletId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.adamant.global.v1.GetSpendableBalanceResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.adamant.global.v1.GetSpendableBalanceResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.adamant.global.v1.GetSpendableBalanceResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.GetSpendableBalanceResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    totalSpendableBalance: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
    stringTotalSpendableBalance: jspb.Message.getFieldWithDefault(msg, 2, ""),
    dailySpendableBalance: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0),
    stringDailySpendableBalance: jspb.Message.getFieldWithDefault(msg, 4, ""),
    hourlySpendableBalance: jspb.Message.getFloatingPointFieldWithDefault(msg, 5, 0.0),
    stringHourlySpendableBalance: jspb.Message.getFieldWithDefault(msg, 6, ""),
    oneTimeSpendableBalance: jspb.Message.getFloatingPointFieldWithDefault(msg, 7, 0.0),
    stringOneTimeSpendableBalance: jspb.Message.getFieldWithDefault(msg, 8, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.adamant.global.v1.GetSpendableBalanceResponse}
 */
proto.adamant.global.v1.GetSpendableBalanceResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.adamant.global.v1.GetSpendableBalanceResponse;
  return proto.adamant.global.v1.GetSpendableBalanceResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.adamant.global.v1.GetSpendableBalanceResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.adamant.global.v1.GetSpendableBalanceResponse}
 */
proto.adamant.global.v1.GetSpendableBalanceResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setTotalSpendableBalance(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setStringTotalSpendableBalance(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setDailySpendableBalance(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setStringDailySpendableBalance(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setHourlySpendableBalance(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setStringHourlySpendableBalance(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setOneTimeSpendableBalance(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setStringOneTimeSpendableBalance(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.adamant.global.v1.GetSpendableBalanceResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.adamant.global.v1.GetSpendableBalanceResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.adamant.global.v1.GetSpendableBalanceResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.GetSpendableBalanceResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTotalSpendableBalance();
  if (f !== 0.0) {
    writer.writeDouble(
      1,
      f
    );
  }
  f = message.getStringTotalSpendableBalance();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getDailySpendableBalance();
  if (f !== 0.0) {
    writer.writeDouble(
      3,
      f
    );
  }
  f = message.getStringDailySpendableBalance();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getHourlySpendableBalance();
  if (f !== 0.0) {
    writer.writeDouble(
      5,
      f
    );
  }
  f = message.getStringHourlySpendableBalance();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getOneTimeSpendableBalance();
  if (f !== 0.0) {
    writer.writeDouble(
      7,
      f
    );
  }
  f = message.getStringOneTimeSpendableBalance();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
};


/**
 * optional double total_spendable_balance = 1;
 * @return {number}
 */
proto.adamant.global.v1.GetSpendableBalanceResponse.prototype.getTotalSpendableBalance = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/** @param {number} value */
proto.adamant.global.v1.GetSpendableBalanceResponse.prototype.setTotalSpendableBalance = function(value) {
  jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional string string_total_spendable_balance = 2;
 * @return {string}
 */
proto.adamant.global.v1.GetSpendableBalanceResponse.prototype.getStringTotalSpendableBalance = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.adamant.global.v1.GetSpendableBalanceResponse.prototype.setStringTotalSpendableBalance = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional double daily_spendable_balance = 3;
 * @return {number}
 */
proto.adamant.global.v1.GetSpendableBalanceResponse.prototype.getDailySpendableBalance = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/** @param {number} value */
proto.adamant.global.v1.GetSpendableBalanceResponse.prototype.setDailySpendableBalance = function(value) {
  jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * optional string string_daily_spendable_balance = 4;
 * @return {string}
 */
proto.adamant.global.v1.GetSpendableBalanceResponse.prototype.getStringDailySpendableBalance = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.adamant.global.v1.GetSpendableBalanceResponse.prototype.setStringDailySpendableBalance = function(value) {
  jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional double hourly_spendable_balance = 5;
 * @return {number}
 */
proto.adamant.global.v1.GetSpendableBalanceResponse.prototype.getHourlySpendableBalance = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 5, 0.0));
};


/** @param {number} value */
proto.adamant.global.v1.GetSpendableBalanceResponse.prototype.setHourlySpendableBalance = function(value) {
  jspb.Message.setProto3FloatField(this, 5, value);
};


/**
 * optional string string_hourly_spendable_balance = 6;
 * @return {string}
 */
proto.adamant.global.v1.GetSpendableBalanceResponse.prototype.getStringHourlySpendableBalance = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/** @param {string} value */
proto.adamant.global.v1.GetSpendableBalanceResponse.prototype.setStringHourlySpendableBalance = function(value) {
  jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional double one_time_spendable_balance = 7;
 * @return {number}
 */
proto.adamant.global.v1.GetSpendableBalanceResponse.prototype.getOneTimeSpendableBalance = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 7, 0.0));
};


/** @param {number} value */
proto.adamant.global.v1.GetSpendableBalanceResponse.prototype.setOneTimeSpendableBalance = function(value) {
  jspb.Message.setProto3FloatField(this, 7, value);
};


/**
 * optional string string_one_time_spendable_balance = 8;
 * @return {string}
 */
proto.adamant.global.v1.GetSpendableBalanceResponse.prototype.getStringOneTimeSpendableBalance = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/** @param {string} value */
proto.adamant.global.v1.GetSpendableBalanceResponse.prototype.setStringOneTimeSpendableBalance = function(value) {
  jspb.Message.setProto3StringField(this, 8, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.adamant.global.v1.GetTotalBalanceRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.adamant.global.v1.GetTotalBalanceRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.adamant.global.v1.GetTotalBalanceRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.GetTotalBalanceRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    watchOnly: jspb.Message.getBooleanFieldWithDefault(msg, 1, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.adamant.global.v1.GetTotalBalanceRequest}
 */
proto.adamant.global.v1.GetTotalBalanceRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.adamant.global.v1.GetTotalBalanceRequest;
  return proto.adamant.global.v1.GetTotalBalanceRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.adamant.global.v1.GetTotalBalanceRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.adamant.global.v1.GetTotalBalanceRequest}
 */
proto.adamant.global.v1.GetTotalBalanceRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setWatchOnly(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.adamant.global.v1.GetTotalBalanceRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.adamant.global.v1.GetTotalBalanceRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.adamant.global.v1.GetTotalBalanceRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.GetTotalBalanceRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getWatchOnly();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool watch_only = 1;
 * @return {boolean}
 */
proto.adamant.global.v1.GetTotalBalanceRequest.prototype.getWatchOnly = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/** @param {boolean} value */
proto.adamant.global.v1.GetTotalBalanceRequest.prototype.setWatchOnly = function(value) {
  jspb.Message.setProto3BooleanField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.adamant.global.v1.ListBalanceSnapshotsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.adamant.global.v1.ListBalanceSnapshotsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.adamant.global.v1.ListBalanceSnapshotsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.ListBalanceSnapshotsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    watchOnly: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
    startTime: (f = msg.getStartTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    endTime: (f = msg.getEndTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.adamant.global.v1.ListBalanceSnapshotsRequest}
 */
proto.adamant.global.v1.ListBalanceSnapshotsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.adamant.global.v1.ListBalanceSnapshotsRequest;
  return proto.adamant.global.v1.ListBalanceSnapshotsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.adamant.global.v1.ListBalanceSnapshotsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.adamant.global.v1.ListBalanceSnapshotsRequest}
 */
proto.adamant.global.v1.ListBalanceSnapshotsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setWatchOnly(value);
      break;
    case 1:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setStartTime(value);
      break;
    case 2:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setEndTime(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.adamant.global.v1.ListBalanceSnapshotsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.adamant.global.v1.ListBalanceSnapshotsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.adamant.global.v1.ListBalanceSnapshotsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.ListBalanceSnapshotsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getWatchOnly();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getStartTime();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getEndTime();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional bool watch_only = 3;
 * @return {boolean}
 */
proto.adamant.global.v1.ListBalanceSnapshotsRequest.prototype.getWatchOnly = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/** @param {boolean} value */
proto.adamant.global.v1.ListBalanceSnapshotsRequest.prototype.setWatchOnly = function(value) {
  jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional google.protobuf.Timestamp start_time = 1;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.adamant.global.v1.ListBalanceSnapshotsRequest.prototype.getStartTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 1));
};


/** @param {?proto.google.protobuf.Timestamp|undefined} value */
proto.adamant.global.v1.ListBalanceSnapshotsRequest.prototype.setStartTime = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.adamant.global.v1.ListBalanceSnapshotsRequest.prototype.clearStartTime = function() {
  this.setStartTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.adamant.global.v1.ListBalanceSnapshotsRequest.prototype.hasStartTime = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.Timestamp end_time = 2;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.adamant.global.v1.ListBalanceSnapshotsRequest.prototype.getEndTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 2));
};


/** @param {?proto.google.protobuf.Timestamp|undefined} value */
proto.adamant.global.v1.ListBalanceSnapshotsRequest.prototype.setEndTime = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.adamant.global.v1.ListBalanceSnapshotsRequest.prototype.clearEndTime = function() {
  this.setEndTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.adamant.global.v1.ListBalanceSnapshotsRequest.prototype.hasEndTime = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.adamant.global.v1.ListBalanceSnapshotsResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.adamant.global.v1.ListBalanceSnapshotsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.adamant.global.v1.ListBalanceSnapshotsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.adamant.global.v1.ListBalanceSnapshotsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.ListBalanceSnapshotsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    balanceSnapshotsList: jspb.Message.toObjectList(msg.getBalanceSnapshotsList(),
    gincoinc_adamant_global_v1_adamantglobalv1_model_pb.BalanceSnapshot.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.adamant.global.v1.ListBalanceSnapshotsResponse}
 */
proto.adamant.global.v1.ListBalanceSnapshotsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.adamant.global.v1.ListBalanceSnapshotsResponse;
  return proto.adamant.global.v1.ListBalanceSnapshotsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.adamant.global.v1.ListBalanceSnapshotsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.adamant.global.v1.ListBalanceSnapshotsResponse}
 */
proto.adamant.global.v1.ListBalanceSnapshotsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new gincoinc_adamant_global_v1_adamantglobalv1_model_pb.BalanceSnapshot;
      reader.readMessage(value,gincoinc_adamant_global_v1_adamantglobalv1_model_pb.BalanceSnapshot.deserializeBinaryFromReader);
      msg.addBalanceSnapshots(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.adamant.global.v1.ListBalanceSnapshotsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.adamant.global.v1.ListBalanceSnapshotsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.adamant.global.v1.ListBalanceSnapshotsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.ListBalanceSnapshotsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBalanceSnapshotsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      gincoinc_adamant_global_v1_adamantglobalv1_model_pb.BalanceSnapshot.serializeBinaryToWriter
    );
  }
};


/**
 * repeated BalanceSnapshot balance_snapshots = 1;
 * @return {!Array<!proto.adamant.global.v1.BalanceSnapshot>}
 */
proto.adamant.global.v1.ListBalanceSnapshotsResponse.prototype.getBalanceSnapshotsList = function() {
  return /** @type{!Array<!proto.adamant.global.v1.BalanceSnapshot>} */ (
    jspb.Message.getRepeatedWrapperField(this, gincoinc_adamant_global_v1_adamantglobalv1_model_pb.BalanceSnapshot, 1));
};


/** @param {!Array<!proto.adamant.global.v1.BalanceSnapshot>} value */
proto.adamant.global.v1.ListBalanceSnapshotsResponse.prototype.setBalanceSnapshotsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.adamant.global.v1.BalanceSnapshot=} opt_value
 * @param {number=} opt_index
 * @return {!proto.adamant.global.v1.BalanceSnapshot}
 */
proto.adamant.global.v1.ListBalanceSnapshotsResponse.prototype.addBalanceSnapshots = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.adamant.global.v1.BalanceSnapshot, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.adamant.global.v1.ListBalanceSnapshotsResponse.prototype.clearBalanceSnapshotsList = function() {
  this.setBalanceSnapshotsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.adamant.global.v1.ListWalletBalanceSnapshotsRequest.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.adamant.global.v1.ListWalletBalanceSnapshotsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.adamant.global.v1.ListWalletBalanceSnapshotsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.adamant.global.v1.ListWalletBalanceSnapshotsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.ListWalletBalanceSnapshotsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    walletIdsList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
    startTime: (f = msg.getStartTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    endTime: (f = msg.getEndTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.adamant.global.v1.ListWalletBalanceSnapshotsRequest}
 */
proto.adamant.global.v1.ListWalletBalanceSnapshotsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.adamant.global.v1.ListWalletBalanceSnapshotsRequest;
  return proto.adamant.global.v1.ListWalletBalanceSnapshotsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.adamant.global.v1.ListWalletBalanceSnapshotsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.adamant.global.v1.ListWalletBalanceSnapshotsRequest}
 */
proto.adamant.global.v1.ListWalletBalanceSnapshotsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addWalletIds(value);
      break;
    case 2:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setStartTime(value);
      break;
    case 3:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setEndTime(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.adamant.global.v1.ListWalletBalanceSnapshotsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.adamant.global.v1.ListWalletBalanceSnapshotsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.adamant.global.v1.ListWalletBalanceSnapshotsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.ListWalletBalanceSnapshotsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getWalletIdsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
  f = message.getStartTime();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getEndTime();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * repeated string wallet_ids = 1;
 * @return {!Array<string>}
 */
proto.adamant.global.v1.ListWalletBalanceSnapshotsRequest.prototype.getWalletIdsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/** @param {!Array<string>} value */
proto.adamant.global.v1.ListWalletBalanceSnapshotsRequest.prototype.setWalletIdsList = function(value) {
  jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 */
proto.adamant.global.v1.ListWalletBalanceSnapshotsRequest.prototype.addWalletIds = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.adamant.global.v1.ListWalletBalanceSnapshotsRequest.prototype.clearWalletIdsList = function() {
  this.setWalletIdsList([]);
};


/**
 * optional google.protobuf.Timestamp start_time = 2;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.adamant.global.v1.ListWalletBalanceSnapshotsRequest.prototype.getStartTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 2));
};


/** @param {?proto.google.protobuf.Timestamp|undefined} value */
proto.adamant.global.v1.ListWalletBalanceSnapshotsRequest.prototype.setStartTime = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.adamant.global.v1.ListWalletBalanceSnapshotsRequest.prototype.clearStartTime = function() {
  this.setStartTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.adamant.global.v1.ListWalletBalanceSnapshotsRequest.prototype.hasStartTime = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.Timestamp end_time = 3;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.adamant.global.v1.ListWalletBalanceSnapshotsRequest.prototype.getEndTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 3));
};


/** @param {?proto.google.protobuf.Timestamp|undefined} value */
proto.adamant.global.v1.ListWalletBalanceSnapshotsRequest.prototype.setEndTime = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.adamant.global.v1.ListWalletBalanceSnapshotsRequest.prototype.clearEndTime = function() {
  this.setEndTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.adamant.global.v1.ListWalletBalanceSnapshotsRequest.prototype.hasEndTime = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.adamant.global.v1.ListWalletBalanceSnapshotsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.adamant.global.v1.ListWalletBalanceSnapshotsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.adamant.global.v1.ListWalletBalanceSnapshotsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.ListWalletBalanceSnapshotsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    walletBalanceSnapshotMap: (f = msg.getWalletBalanceSnapshotMap()) && gincoinc_adamant_global_v1_adamantglobalv1_model_pb.WalletBalanceSnapshotMap.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.adamant.global.v1.ListWalletBalanceSnapshotsResponse}
 */
proto.adamant.global.v1.ListWalletBalanceSnapshotsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.adamant.global.v1.ListWalletBalanceSnapshotsResponse;
  return proto.adamant.global.v1.ListWalletBalanceSnapshotsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.adamant.global.v1.ListWalletBalanceSnapshotsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.adamant.global.v1.ListWalletBalanceSnapshotsResponse}
 */
proto.adamant.global.v1.ListWalletBalanceSnapshotsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new gincoinc_adamant_global_v1_adamantglobalv1_model_pb.WalletBalanceSnapshotMap;
      reader.readMessage(value,gincoinc_adamant_global_v1_adamantglobalv1_model_pb.WalletBalanceSnapshotMap.deserializeBinaryFromReader);
      msg.setWalletBalanceSnapshotMap(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.adamant.global.v1.ListWalletBalanceSnapshotsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.adamant.global.v1.ListWalletBalanceSnapshotsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.adamant.global.v1.ListWalletBalanceSnapshotsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.ListWalletBalanceSnapshotsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getWalletBalanceSnapshotMap();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      gincoinc_adamant_global_v1_adamantglobalv1_model_pb.WalletBalanceSnapshotMap.serializeBinaryToWriter
    );
  }
};


/**
 * optional WalletBalanceSnapshotMap wallet_balance_snapshot_map = 1;
 * @return {?proto.adamant.global.v1.WalletBalanceSnapshotMap}
 */
proto.adamant.global.v1.ListWalletBalanceSnapshotsResponse.prototype.getWalletBalanceSnapshotMap = function() {
  return /** @type{?proto.adamant.global.v1.WalletBalanceSnapshotMap} */ (
    jspb.Message.getWrapperField(this, gincoinc_adamant_global_v1_adamantglobalv1_model_pb.WalletBalanceSnapshotMap, 1));
};


/** @param {?proto.adamant.global.v1.WalletBalanceSnapshotMap|undefined} value */
proto.adamant.global.v1.ListWalletBalanceSnapshotsResponse.prototype.setWalletBalanceSnapshotMap = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.adamant.global.v1.ListWalletBalanceSnapshotsResponse.prototype.clearWalletBalanceSnapshotMap = function() {
  this.setWalletBalanceSnapshotMap(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.adamant.global.v1.ListWalletBalanceSnapshotsResponse.prototype.hasWalletBalanceSnapshotMap = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.adamant.global.v1.ListTransferVolumeSnapshotsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.adamant.global.v1.ListTransferVolumeSnapshotsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.adamant.global.v1.ListTransferVolumeSnapshotsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.ListTransferVolumeSnapshotsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    watchOnly: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    startTime: (f = msg.getStartTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    endTime: (f = msg.getEndTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.adamant.global.v1.ListTransferVolumeSnapshotsRequest}
 */
proto.adamant.global.v1.ListTransferVolumeSnapshotsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.adamant.global.v1.ListTransferVolumeSnapshotsRequest;
  return proto.adamant.global.v1.ListTransferVolumeSnapshotsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.adamant.global.v1.ListTransferVolumeSnapshotsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.adamant.global.v1.ListTransferVolumeSnapshotsRequest}
 */
proto.adamant.global.v1.ListTransferVolumeSnapshotsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setWatchOnly(value);
      break;
    case 2:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setStartTime(value);
      break;
    case 3:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setEndTime(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.adamant.global.v1.ListTransferVolumeSnapshotsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.adamant.global.v1.ListTransferVolumeSnapshotsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.adamant.global.v1.ListTransferVolumeSnapshotsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.ListTransferVolumeSnapshotsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getWatchOnly();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getStartTime();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getEndTime();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional bool watch_only = 1;
 * @return {boolean}
 */
proto.adamant.global.v1.ListTransferVolumeSnapshotsRequest.prototype.getWatchOnly = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/** @param {boolean} value */
proto.adamant.global.v1.ListTransferVolumeSnapshotsRequest.prototype.setWatchOnly = function(value) {
  jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional google.protobuf.Timestamp start_time = 2;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.adamant.global.v1.ListTransferVolumeSnapshotsRequest.prototype.getStartTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 2));
};


/** @param {?proto.google.protobuf.Timestamp|undefined} value */
proto.adamant.global.v1.ListTransferVolumeSnapshotsRequest.prototype.setStartTime = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.adamant.global.v1.ListTransferVolumeSnapshotsRequest.prototype.clearStartTime = function() {
  this.setStartTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.adamant.global.v1.ListTransferVolumeSnapshotsRequest.prototype.hasStartTime = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.Timestamp end_time = 3;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.adamant.global.v1.ListTransferVolumeSnapshotsRequest.prototype.getEndTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 3));
};


/** @param {?proto.google.protobuf.Timestamp|undefined} value */
proto.adamant.global.v1.ListTransferVolumeSnapshotsRequest.prototype.setEndTime = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.adamant.global.v1.ListTransferVolumeSnapshotsRequest.prototype.clearEndTime = function() {
  this.setEndTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.adamant.global.v1.ListTransferVolumeSnapshotsRequest.prototype.hasEndTime = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.adamant.global.v1.ListTransferVolumeSnapshotsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.adamant.global.v1.ListTransferVolumeSnapshotsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.adamant.global.v1.ListTransferVolumeSnapshotsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.ListTransferVolumeSnapshotsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    transferVolumeSnapshots: (f = msg.getTransferVolumeSnapshots()) && gincoinc_adamant_global_v1_adamantglobalv1_model_pb.TransferVolumeSnapshots.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.adamant.global.v1.ListTransferVolumeSnapshotsResponse}
 */
proto.adamant.global.v1.ListTransferVolumeSnapshotsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.adamant.global.v1.ListTransferVolumeSnapshotsResponse;
  return proto.adamant.global.v1.ListTransferVolumeSnapshotsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.adamant.global.v1.ListTransferVolumeSnapshotsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.adamant.global.v1.ListTransferVolumeSnapshotsResponse}
 */
proto.adamant.global.v1.ListTransferVolumeSnapshotsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new gincoinc_adamant_global_v1_adamantglobalv1_model_pb.TransferVolumeSnapshots;
      reader.readMessage(value,gincoinc_adamant_global_v1_adamantglobalv1_model_pb.TransferVolumeSnapshots.deserializeBinaryFromReader);
      msg.setTransferVolumeSnapshots(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.adamant.global.v1.ListTransferVolumeSnapshotsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.adamant.global.v1.ListTransferVolumeSnapshotsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.adamant.global.v1.ListTransferVolumeSnapshotsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.ListTransferVolumeSnapshotsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTransferVolumeSnapshots();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      gincoinc_adamant_global_v1_adamantglobalv1_model_pb.TransferVolumeSnapshots.serializeBinaryToWriter
    );
  }
};


/**
 * optional TransferVolumeSnapshots transfer_volume_snapshots = 1;
 * @return {?proto.adamant.global.v1.TransferVolumeSnapshots}
 */
proto.adamant.global.v1.ListTransferVolumeSnapshotsResponse.prototype.getTransferVolumeSnapshots = function() {
  return /** @type{?proto.adamant.global.v1.TransferVolumeSnapshots} */ (
    jspb.Message.getWrapperField(this, gincoinc_adamant_global_v1_adamantglobalv1_model_pb.TransferVolumeSnapshots, 1));
};


/** @param {?proto.adamant.global.v1.TransferVolumeSnapshots|undefined} value */
proto.adamant.global.v1.ListTransferVolumeSnapshotsResponse.prototype.setTransferVolumeSnapshots = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.adamant.global.v1.ListTransferVolumeSnapshotsResponse.prototype.clearTransferVolumeSnapshots = function() {
  this.setTransferVolumeSnapshots(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.adamant.global.v1.ListTransferVolumeSnapshotsResponse.prototype.hasTransferVolumeSnapshots = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.adamant.global.v1.ListWalletTransferVolumeSnapshotsRequest.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.adamant.global.v1.ListWalletTransferVolumeSnapshotsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.adamant.global.v1.ListWalletTransferVolumeSnapshotsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.adamant.global.v1.ListWalletTransferVolumeSnapshotsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.ListWalletTransferVolumeSnapshotsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    walletIdsList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
    startTime: (f = msg.getStartTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    endTime: (f = msg.getEndTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.adamant.global.v1.ListWalletTransferVolumeSnapshotsRequest}
 */
proto.adamant.global.v1.ListWalletTransferVolumeSnapshotsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.adamant.global.v1.ListWalletTransferVolumeSnapshotsRequest;
  return proto.adamant.global.v1.ListWalletTransferVolumeSnapshotsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.adamant.global.v1.ListWalletTransferVolumeSnapshotsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.adamant.global.v1.ListWalletTransferVolumeSnapshotsRequest}
 */
proto.adamant.global.v1.ListWalletTransferVolumeSnapshotsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addWalletIds(value);
      break;
    case 2:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setStartTime(value);
      break;
    case 3:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setEndTime(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.adamant.global.v1.ListWalletTransferVolumeSnapshotsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.adamant.global.v1.ListWalletTransferVolumeSnapshotsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.adamant.global.v1.ListWalletTransferVolumeSnapshotsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.ListWalletTransferVolumeSnapshotsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getWalletIdsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
  f = message.getStartTime();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getEndTime();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * repeated string wallet_ids = 1;
 * @return {!Array<string>}
 */
proto.adamant.global.v1.ListWalletTransferVolumeSnapshotsRequest.prototype.getWalletIdsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/** @param {!Array<string>} value */
proto.adamant.global.v1.ListWalletTransferVolumeSnapshotsRequest.prototype.setWalletIdsList = function(value) {
  jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 */
proto.adamant.global.v1.ListWalletTransferVolumeSnapshotsRequest.prototype.addWalletIds = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.adamant.global.v1.ListWalletTransferVolumeSnapshotsRequest.prototype.clearWalletIdsList = function() {
  this.setWalletIdsList([]);
};


/**
 * optional google.protobuf.Timestamp start_time = 2;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.adamant.global.v1.ListWalletTransferVolumeSnapshotsRequest.prototype.getStartTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 2));
};


/** @param {?proto.google.protobuf.Timestamp|undefined} value */
proto.adamant.global.v1.ListWalletTransferVolumeSnapshotsRequest.prototype.setStartTime = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.adamant.global.v1.ListWalletTransferVolumeSnapshotsRequest.prototype.clearStartTime = function() {
  this.setStartTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.adamant.global.v1.ListWalletTransferVolumeSnapshotsRequest.prototype.hasStartTime = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.Timestamp end_time = 3;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.adamant.global.v1.ListWalletTransferVolumeSnapshotsRequest.prototype.getEndTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 3));
};


/** @param {?proto.google.protobuf.Timestamp|undefined} value */
proto.adamant.global.v1.ListWalletTransferVolumeSnapshotsRequest.prototype.setEndTime = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.adamant.global.v1.ListWalletTransferVolumeSnapshotsRequest.prototype.clearEndTime = function() {
  this.setEndTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.adamant.global.v1.ListWalletTransferVolumeSnapshotsRequest.prototype.hasEndTime = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.adamant.global.v1.ListWalletTransferVolumeSnapshotsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.adamant.global.v1.ListWalletTransferVolumeSnapshotsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.adamant.global.v1.ListWalletTransferVolumeSnapshotsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.ListWalletTransferVolumeSnapshotsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    walletTransferVolumeSnapshots: (f = msg.getWalletTransferVolumeSnapshots()) && gincoinc_adamant_global_v1_adamantglobalv1_model_pb.WalletTransferVolumeSnapshots.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.adamant.global.v1.ListWalletTransferVolumeSnapshotsResponse}
 */
proto.adamant.global.v1.ListWalletTransferVolumeSnapshotsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.adamant.global.v1.ListWalletTransferVolumeSnapshotsResponse;
  return proto.adamant.global.v1.ListWalletTransferVolumeSnapshotsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.adamant.global.v1.ListWalletTransferVolumeSnapshotsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.adamant.global.v1.ListWalletTransferVolumeSnapshotsResponse}
 */
proto.adamant.global.v1.ListWalletTransferVolumeSnapshotsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new gincoinc_adamant_global_v1_adamantglobalv1_model_pb.WalletTransferVolumeSnapshots;
      reader.readMessage(value,gincoinc_adamant_global_v1_adamantglobalv1_model_pb.WalletTransferVolumeSnapshots.deserializeBinaryFromReader);
      msg.setWalletTransferVolumeSnapshots(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.adamant.global.v1.ListWalletTransferVolumeSnapshotsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.adamant.global.v1.ListWalletTransferVolumeSnapshotsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.adamant.global.v1.ListWalletTransferVolumeSnapshotsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.ListWalletTransferVolumeSnapshotsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getWalletTransferVolumeSnapshots();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      gincoinc_adamant_global_v1_adamantglobalv1_model_pb.WalletTransferVolumeSnapshots.serializeBinaryToWriter
    );
  }
};


/**
 * optional WalletTransferVolumeSnapshots wallet_transfer_volume_snapshots = 1;
 * @return {?proto.adamant.global.v1.WalletTransferVolumeSnapshots}
 */
proto.adamant.global.v1.ListWalletTransferVolumeSnapshotsResponse.prototype.getWalletTransferVolumeSnapshots = function() {
  return /** @type{?proto.adamant.global.v1.WalletTransferVolumeSnapshots} */ (
    jspb.Message.getWrapperField(this, gincoinc_adamant_global_v1_adamantglobalv1_model_pb.WalletTransferVolumeSnapshots, 1));
};


/** @param {?proto.adamant.global.v1.WalletTransferVolumeSnapshots|undefined} value */
proto.adamant.global.v1.ListWalletTransferVolumeSnapshotsResponse.prototype.setWalletTransferVolumeSnapshots = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.adamant.global.v1.ListWalletTransferVolumeSnapshotsResponse.prototype.clearWalletTransferVolumeSnapshots = function() {
  this.setWalletTransferVolumeSnapshots(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.adamant.global.v1.ListWalletTransferVolumeSnapshotsResponse.prototype.hasWalletTransferVolumeSnapshots = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.adamant.global.v1.CalculateFeeRequest.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.adamant.global.v1.CalculateFeeRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.adamant.global.v1.CalculateFeeRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.adamant.global.v1.CalculateFeeRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.CalculateFeeRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    walletId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    feeRate: jspb.Message.getFieldWithDefault(msg, 2, 0),
    txOutputsList: jspb.Message.toObjectList(msg.getTxOutputsList(),
    gincoinc_adamant_global_v1_adamantglobalv1_model_pb.RequestTxOutput.toObject, includeInstance),
    address: jspb.Message.getFieldWithDefault(msg, 4, ""),
    destinationTag: jspb.Message.getFieldWithDefault(msg, 5, 0),
    stringValue: jspb.Message.getFieldWithDefault(msg, 6, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.adamant.global.v1.CalculateFeeRequest}
 */
proto.adamant.global.v1.CalculateFeeRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.adamant.global.v1.CalculateFeeRequest;
  return proto.adamant.global.v1.CalculateFeeRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.adamant.global.v1.CalculateFeeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.adamant.global.v1.CalculateFeeRequest}
 */
proto.adamant.global.v1.CalculateFeeRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setWalletId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setFeeRate(value);
      break;
    case 3:
      var value = new gincoinc_adamant_global_v1_adamantglobalv1_model_pb.RequestTxOutput;
      reader.readMessage(value,gincoinc_adamant_global_v1_adamantglobalv1_model_pb.RequestTxOutput.deserializeBinaryFromReader);
      msg.addTxOutputs(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setDestinationTag(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setStringValue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.adamant.global.v1.CalculateFeeRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.adamant.global.v1.CalculateFeeRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.adamant.global.v1.CalculateFeeRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.CalculateFeeRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getWalletId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getFeeRate();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getTxOutputsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      gincoinc_adamant_global_v1_adamantglobalv1_model_pb.RequestTxOutput.serializeBinaryToWriter
    );
  }
  f = message.getAddress();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getDestinationTag();
  if (f !== 0) {
    writer.writeUint32(
      5,
      f
    );
  }
  f = message.getStringValue();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
};


/**
 * optional string wallet_id = 1;
 * @return {string}
 */
proto.adamant.global.v1.CalculateFeeRequest.prototype.getWalletId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.adamant.global.v1.CalculateFeeRequest.prototype.setWalletId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional uint64 fee_rate = 2;
 * @return {number}
 */
proto.adamant.global.v1.CalculateFeeRequest.prototype.getFeeRate = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.adamant.global.v1.CalculateFeeRequest.prototype.setFeeRate = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * repeated RequestTxOutput tx_outputs = 3;
 * @return {!Array<!proto.adamant.global.v1.RequestTxOutput>}
 */
proto.adamant.global.v1.CalculateFeeRequest.prototype.getTxOutputsList = function() {
  return /** @type{!Array<!proto.adamant.global.v1.RequestTxOutput>} */ (
    jspb.Message.getRepeatedWrapperField(this, gincoinc_adamant_global_v1_adamantglobalv1_model_pb.RequestTxOutput, 3));
};


/** @param {!Array<!proto.adamant.global.v1.RequestTxOutput>} value */
proto.adamant.global.v1.CalculateFeeRequest.prototype.setTxOutputsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.adamant.global.v1.RequestTxOutput=} opt_value
 * @param {number=} opt_index
 * @return {!proto.adamant.global.v1.RequestTxOutput}
 */
proto.adamant.global.v1.CalculateFeeRequest.prototype.addTxOutputs = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.adamant.global.v1.RequestTxOutput, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.adamant.global.v1.CalculateFeeRequest.prototype.clearTxOutputsList = function() {
  this.setTxOutputsList([]);
};


/**
 * optional string address = 4;
 * @return {string}
 */
proto.adamant.global.v1.CalculateFeeRequest.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.adamant.global.v1.CalculateFeeRequest.prototype.setAddress = function(value) {
  jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional uint32 destination_tag = 5;
 * @return {number}
 */
proto.adamant.global.v1.CalculateFeeRequest.prototype.getDestinationTag = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/** @param {number} value */
proto.adamant.global.v1.CalculateFeeRequest.prototype.setDestinationTag = function(value) {
  jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional string string_value = 6;
 * @return {string}
 */
proto.adamant.global.v1.CalculateFeeRequest.prototype.getStringValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/** @param {string} value */
proto.adamant.global.v1.CalculateFeeRequest.prototype.setStringValue = function(value) {
  jspb.Message.setProto3StringField(this, 6, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.adamant.global.v1.CalculateFeeResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.adamant.global.v1.CalculateFeeResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.adamant.global.v1.CalculateFeeResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.CalculateFeeResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    fee: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
    stringFee: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.adamant.global.v1.CalculateFeeResponse}
 */
proto.adamant.global.v1.CalculateFeeResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.adamant.global.v1.CalculateFeeResponse;
  return proto.adamant.global.v1.CalculateFeeResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.adamant.global.v1.CalculateFeeResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.adamant.global.v1.CalculateFeeResponse}
 */
proto.adamant.global.v1.CalculateFeeResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setFee(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setStringFee(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.adamant.global.v1.CalculateFeeResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.adamant.global.v1.CalculateFeeResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.adamant.global.v1.CalculateFeeResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.CalculateFeeResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFee();
  if (f !== 0.0) {
    writer.writeDouble(
      1,
      f
    );
  }
  f = message.getStringFee();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional double fee = 1;
 * @return {number}
 */
proto.adamant.global.v1.CalculateFeeResponse.prototype.getFee = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/** @param {number} value */
proto.adamant.global.v1.CalculateFeeResponse.prototype.setFee = function(value) {
  jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional string string_fee = 2;
 * @return {string}
 */
proto.adamant.global.v1.CalculateFeeResponse.prototype.getStringFee = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.adamant.global.v1.CalculateFeeResponse.prototype.setStringFee = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.adamant.global.v1.GetMembersDeactivatabilitiesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.adamant.global.v1.GetMembersDeactivatabilitiesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.adamant.global.v1.GetMembersDeactivatabilitiesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.GetMembersDeactivatabilitiesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.adamant.global.v1.GetMembersDeactivatabilitiesRequest}
 */
proto.adamant.global.v1.GetMembersDeactivatabilitiesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.adamant.global.v1.GetMembersDeactivatabilitiesRequest;
  return proto.adamant.global.v1.GetMembersDeactivatabilitiesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.adamant.global.v1.GetMembersDeactivatabilitiesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.adamant.global.v1.GetMembersDeactivatabilitiesRequest}
 */
proto.adamant.global.v1.GetMembersDeactivatabilitiesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.adamant.global.v1.GetMembersDeactivatabilitiesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.adamant.global.v1.GetMembersDeactivatabilitiesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.adamant.global.v1.GetMembersDeactivatabilitiesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.GetMembersDeactivatabilitiesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.adamant.global.v1.GetMembersDeactivatabilitiesResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.adamant.global.v1.GetMembersDeactivatabilitiesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.adamant.global.v1.GetMembersDeactivatabilitiesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.adamant.global.v1.GetMembersDeactivatabilitiesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.GetMembersDeactivatabilitiesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    deactivatabilitiesList: jspb.Message.toObjectList(msg.getDeactivatabilitiesList(),
    gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Deactivatability.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.adamant.global.v1.GetMembersDeactivatabilitiesResponse}
 */
proto.adamant.global.v1.GetMembersDeactivatabilitiesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.adamant.global.v1.GetMembersDeactivatabilitiesResponse;
  return proto.adamant.global.v1.GetMembersDeactivatabilitiesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.adamant.global.v1.GetMembersDeactivatabilitiesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.adamant.global.v1.GetMembersDeactivatabilitiesResponse}
 */
proto.adamant.global.v1.GetMembersDeactivatabilitiesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Deactivatability;
      reader.readMessage(value,gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Deactivatability.deserializeBinaryFromReader);
      msg.addDeactivatabilities(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.adamant.global.v1.GetMembersDeactivatabilitiesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.adamant.global.v1.GetMembersDeactivatabilitiesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.adamant.global.v1.GetMembersDeactivatabilitiesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.GetMembersDeactivatabilitiesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDeactivatabilitiesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Deactivatability.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Deactivatability deactivatabilities = 1;
 * @return {!Array<!proto.adamant.global.v1.Deactivatability>}
 */
proto.adamant.global.v1.GetMembersDeactivatabilitiesResponse.prototype.getDeactivatabilitiesList = function() {
  return /** @type{!Array<!proto.adamant.global.v1.Deactivatability>} */ (
    jspb.Message.getRepeatedWrapperField(this, gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Deactivatability, 1));
};


/** @param {!Array<!proto.adamant.global.v1.Deactivatability>} value */
proto.adamant.global.v1.GetMembersDeactivatabilitiesResponse.prototype.setDeactivatabilitiesList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.adamant.global.v1.Deactivatability=} opt_value
 * @param {number=} opt_index
 * @return {!proto.adamant.global.v1.Deactivatability}
 */
proto.adamant.global.v1.GetMembersDeactivatabilitiesResponse.prototype.addDeactivatabilities = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.adamant.global.v1.Deactivatability, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.adamant.global.v1.GetMembersDeactivatabilitiesResponse.prototype.clearDeactivatabilitiesList = function() {
  this.setDeactivatabilitiesList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.adamant.global.v1.GetRecommendedFeeRateRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.adamant.global.v1.GetRecommendedFeeRateRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.adamant.global.v1.GetRecommendedFeeRateRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.GetRecommendedFeeRateRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    coin: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.adamant.global.v1.GetRecommendedFeeRateRequest}
 */
proto.adamant.global.v1.GetRecommendedFeeRateRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.adamant.global.v1.GetRecommendedFeeRateRequest;
  return proto.adamant.global.v1.GetRecommendedFeeRateRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.adamant.global.v1.GetRecommendedFeeRateRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.adamant.global.v1.GetRecommendedFeeRateRequest}
 */
proto.adamant.global.v1.GetRecommendedFeeRateRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.gincoinc.global.v1.Coin} */ (reader.readEnum());
      msg.setCoin(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.adamant.global.v1.GetRecommendedFeeRateRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.adamant.global.v1.GetRecommendedFeeRateRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.adamant.global.v1.GetRecommendedFeeRateRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.GetRecommendedFeeRateRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCoin();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
};


/**
 * optional gincoinc.global.v1.Coin coin = 1;
 * @return {!proto.gincoinc.global.v1.Coin}
 */
proto.adamant.global.v1.GetRecommendedFeeRateRequest.prototype.getCoin = function() {
  return /** @type {!proto.gincoinc.global.v1.Coin} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {!proto.gincoinc.global.v1.Coin} value */
proto.adamant.global.v1.GetRecommendedFeeRateRequest.prototype.setCoin = function(value) {
  jspb.Message.setProto3EnumField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.adamant.global.v1.GetRecommendedFeeRateResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.adamant.global.v1.GetRecommendedFeeRateResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.adamant.global.v1.GetRecommendedFeeRateResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.GetRecommendedFeeRateResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    fastest: jspb.Message.getFieldWithDefault(msg, 1, 0),
    fast: jspb.Message.getFieldWithDefault(msg, 2, 0),
    average: jspb.Message.getFieldWithDefault(msg, 3, 0),
    safeLow: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.adamant.global.v1.GetRecommendedFeeRateResponse}
 */
proto.adamant.global.v1.GetRecommendedFeeRateResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.adamant.global.v1.GetRecommendedFeeRateResponse;
  return proto.adamant.global.v1.GetRecommendedFeeRateResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.adamant.global.v1.GetRecommendedFeeRateResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.adamant.global.v1.GetRecommendedFeeRateResponse}
 */
proto.adamant.global.v1.GetRecommendedFeeRateResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setFastest(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setFast(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setAverage(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setSafeLow(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.adamant.global.v1.GetRecommendedFeeRateResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.adamant.global.v1.GetRecommendedFeeRateResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.adamant.global.v1.GetRecommendedFeeRateResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.GetRecommendedFeeRateResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFastest();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getFast();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getAverage();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
  f = message.getSafeLow();
  if (f !== 0) {
    writer.writeUint64(
      4,
      f
    );
  }
};


/**
 * optional uint64 fastest = 1;
 * @return {number}
 */
proto.adamant.global.v1.GetRecommendedFeeRateResponse.prototype.getFastest = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.adamant.global.v1.GetRecommendedFeeRateResponse.prototype.setFastest = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint64 fast = 2;
 * @return {number}
 */
proto.adamant.global.v1.GetRecommendedFeeRateResponse.prototype.getFast = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.adamant.global.v1.GetRecommendedFeeRateResponse.prototype.setFast = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint64 average = 3;
 * @return {number}
 */
proto.adamant.global.v1.GetRecommendedFeeRateResponse.prototype.getAverage = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.adamant.global.v1.GetRecommendedFeeRateResponse.prototype.setAverage = function(value) {
  jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional uint64 safe_low = 4;
 * @return {number}
 */
proto.adamant.global.v1.GetRecommendedFeeRateResponse.prototype.getSafeLow = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.adamant.global.v1.GetRecommendedFeeRateResponse.prototype.setSafeLow = function(value) {
  jspb.Message.setProto3IntField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.adamant.global.v1.ValidateAddressRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.adamant.global.v1.ValidateAddressRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.adamant.global.v1.ValidateAddressRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.ValidateAddressRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    coin: jspb.Message.getFieldWithDefault(msg, 1, 0),
    address: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.adamant.global.v1.ValidateAddressRequest}
 */
proto.adamant.global.v1.ValidateAddressRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.adamant.global.v1.ValidateAddressRequest;
  return proto.adamant.global.v1.ValidateAddressRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.adamant.global.v1.ValidateAddressRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.adamant.global.v1.ValidateAddressRequest}
 */
proto.adamant.global.v1.ValidateAddressRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.gincoinc.global.v1.Coin} */ (reader.readEnum());
      msg.setCoin(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.adamant.global.v1.ValidateAddressRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.adamant.global.v1.ValidateAddressRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.adamant.global.v1.ValidateAddressRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.ValidateAddressRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCoin();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getAddress();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional gincoinc.global.v1.Coin coin = 1;
 * @return {!proto.gincoinc.global.v1.Coin}
 */
proto.adamant.global.v1.ValidateAddressRequest.prototype.getCoin = function() {
  return /** @type {!proto.gincoinc.global.v1.Coin} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {!proto.gincoinc.global.v1.Coin} value */
proto.adamant.global.v1.ValidateAddressRequest.prototype.setCoin = function(value) {
  jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional string address = 2;
 * @return {string}
 */
proto.adamant.global.v1.ValidateAddressRequest.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.adamant.global.v1.ValidateAddressRequest.prototype.setAddress = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.adamant.global.v1.ValidateAddressResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.adamant.global.v1.ValidateAddressResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.adamant.global.v1.ValidateAddressResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.ValidateAddressResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    valid: jspb.Message.getBooleanFieldWithDefault(msg, 1, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.adamant.global.v1.ValidateAddressResponse}
 */
proto.adamant.global.v1.ValidateAddressResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.adamant.global.v1.ValidateAddressResponse;
  return proto.adamant.global.v1.ValidateAddressResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.adamant.global.v1.ValidateAddressResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.adamant.global.v1.ValidateAddressResponse}
 */
proto.adamant.global.v1.ValidateAddressResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setValid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.adamant.global.v1.ValidateAddressResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.adamant.global.v1.ValidateAddressResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.adamant.global.v1.ValidateAddressResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.ValidateAddressResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValid();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool valid = 1;
 * @return {boolean}
 */
proto.adamant.global.v1.ValidateAddressResponse.prototype.getValid = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/** @param {boolean} value */
proto.adamant.global.v1.ValidateAddressResponse.prototype.setValid = function(value) {
  jspb.Message.setProto3BooleanField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.adamant.global.v1.ListConfirmationsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.adamant.global.v1.ListConfirmationsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.adamant.global.v1.ListConfirmationsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.ListConfirmationsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.adamant.global.v1.ListConfirmationsRequest}
 */
proto.adamant.global.v1.ListConfirmationsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.adamant.global.v1.ListConfirmationsRequest;
  return proto.adamant.global.v1.ListConfirmationsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.adamant.global.v1.ListConfirmationsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.adamant.global.v1.ListConfirmationsRequest}
 */
proto.adamant.global.v1.ListConfirmationsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.adamant.global.v1.ListConfirmationsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.adamant.global.v1.ListConfirmationsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.adamant.global.v1.ListConfirmationsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.ListConfirmationsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.adamant.global.v1.ListConfirmationsResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.adamant.global.v1.ListConfirmationsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.adamant.global.v1.ListConfirmationsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.adamant.global.v1.ListConfirmationsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.ListConfirmationsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    confirmationsList: jspb.Message.toObjectList(msg.getConfirmationsList(),
    gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Confirmation.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.adamant.global.v1.ListConfirmationsResponse}
 */
proto.adamant.global.v1.ListConfirmationsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.adamant.global.v1.ListConfirmationsResponse;
  return proto.adamant.global.v1.ListConfirmationsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.adamant.global.v1.ListConfirmationsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.adamant.global.v1.ListConfirmationsResponse}
 */
proto.adamant.global.v1.ListConfirmationsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Confirmation;
      reader.readMessage(value,gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Confirmation.deserializeBinaryFromReader);
      msg.addConfirmations(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.adamant.global.v1.ListConfirmationsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.adamant.global.v1.ListConfirmationsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.adamant.global.v1.ListConfirmationsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.ListConfirmationsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConfirmationsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Confirmation.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Confirmation confirmations = 1;
 * @return {!Array<!proto.adamant.global.v1.Confirmation>}
 */
proto.adamant.global.v1.ListConfirmationsResponse.prototype.getConfirmationsList = function() {
  return /** @type{!Array<!proto.adamant.global.v1.Confirmation>} */ (
    jspb.Message.getRepeatedWrapperField(this, gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Confirmation, 1));
};


/** @param {!Array<!proto.adamant.global.v1.Confirmation>} value */
proto.adamant.global.v1.ListConfirmationsResponse.prototype.setConfirmationsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.adamant.global.v1.Confirmation=} opt_value
 * @param {number=} opt_index
 * @return {!proto.adamant.global.v1.Confirmation}
 */
proto.adamant.global.v1.ListConfirmationsResponse.prototype.addConfirmations = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.adamant.global.v1.Confirmation, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.adamant.global.v1.ListConfirmationsResponse.prototype.clearConfirmationsList = function() {
  this.setConfirmationsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.adamant.global.v1.CreateLabeledAddressRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.adamant.global.v1.CreateLabeledAddressRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.adamant.global.v1.CreateLabeledAddressRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.CreateLabeledAddressRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    coin: jspb.Message.getFieldWithDefault(msg, 2, 0),
    address: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.adamant.global.v1.CreateLabeledAddressRequest}
 */
proto.adamant.global.v1.CreateLabeledAddressRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.adamant.global.v1.CreateLabeledAddressRequest;
  return proto.adamant.global.v1.CreateLabeledAddressRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.adamant.global.v1.CreateLabeledAddressRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.adamant.global.v1.CreateLabeledAddressRequest}
 */
proto.adamant.global.v1.CreateLabeledAddressRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {!proto.gincoinc.global.v1.Coin} */ (reader.readEnum());
      msg.setCoin(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.adamant.global.v1.CreateLabeledAddressRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.adamant.global.v1.CreateLabeledAddressRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.adamant.global.v1.CreateLabeledAddressRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.CreateLabeledAddressRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCoin();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getAddress();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.adamant.global.v1.CreateLabeledAddressRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.adamant.global.v1.CreateLabeledAddressRequest.prototype.setName = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional gincoinc.global.v1.Coin coin = 2;
 * @return {!proto.gincoinc.global.v1.Coin}
 */
proto.adamant.global.v1.CreateLabeledAddressRequest.prototype.getCoin = function() {
  return /** @type {!proto.gincoinc.global.v1.Coin} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {!proto.gincoinc.global.v1.Coin} value */
proto.adamant.global.v1.CreateLabeledAddressRequest.prototype.setCoin = function(value) {
  jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional string address = 3;
 * @return {string}
 */
proto.adamant.global.v1.CreateLabeledAddressRequest.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.adamant.global.v1.CreateLabeledAddressRequest.prototype.setAddress = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.adamant.global.v1.CreateLabeledAddressResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.adamant.global.v1.CreateLabeledAddressResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.adamant.global.v1.CreateLabeledAddressResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.CreateLabeledAddressResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    labeledAddressId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.adamant.global.v1.CreateLabeledAddressResponse}
 */
proto.adamant.global.v1.CreateLabeledAddressResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.adamant.global.v1.CreateLabeledAddressResponse;
  return proto.adamant.global.v1.CreateLabeledAddressResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.adamant.global.v1.CreateLabeledAddressResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.adamant.global.v1.CreateLabeledAddressResponse}
 */
proto.adamant.global.v1.CreateLabeledAddressResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setLabeledAddressId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.adamant.global.v1.CreateLabeledAddressResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.adamant.global.v1.CreateLabeledAddressResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.adamant.global.v1.CreateLabeledAddressResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.CreateLabeledAddressResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLabeledAddressId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string labeled_address_id = 1;
 * @return {string}
 */
proto.adamant.global.v1.CreateLabeledAddressResponse.prototype.getLabeledAddressId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.adamant.global.v1.CreateLabeledAddressResponse.prototype.setLabeledAddressId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.adamant.global.v1.UpdateLabeledAddressRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.adamant.global.v1.UpdateLabeledAddressRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.adamant.global.v1.UpdateLabeledAddressRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.UpdateLabeledAddressRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    labeledAddressId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    coin: jspb.Message.getFieldWithDefault(msg, 3, 0),
    address: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.adamant.global.v1.UpdateLabeledAddressRequest}
 */
proto.adamant.global.v1.UpdateLabeledAddressRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.adamant.global.v1.UpdateLabeledAddressRequest;
  return proto.adamant.global.v1.UpdateLabeledAddressRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.adamant.global.v1.UpdateLabeledAddressRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.adamant.global.v1.UpdateLabeledAddressRequest}
 */
proto.adamant.global.v1.UpdateLabeledAddressRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setLabeledAddressId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {!proto.gincoinc.global.v1.Coin} */ (reader.readEnum());
      msg.setCoin(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.adamant.global.v1.UpdateLabeledAddressRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.adamant.global.v1.UpdateLabeledAddressRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.adamant.global.v1.UpdateLabeledAddressRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.UpdateLabeledAddressRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLabeledAddressId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getCoin();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getAddress();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string labeled_address_id = 1;
 * @return {string}
 */
proto.adamant.global.v1.UpdateLabeledAddressRequest.prototype.getLabeledAddressId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.adamant.global.v1.UpdateLabeledAddressRequest.prototype.setLabeledAddressId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.adamant.global.v1.UpdateLabeledAddressRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.adamant.global.v1.UpdateLabeledAddressRequest.prototype.setName = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional gincoinc.global.v1.Coin coin = 3;
 * @return {!proto.gincoinc.global.v1.Coin}
 */
proto.adamant.global.v1.UpdateLabeledAddressRequest.prototype.getCoin = function() {
  return /** @type {!proto.gincoinc.global.v1.Coin} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {!proto.gincoinc.global.v1.Coin} value */
proto.adamant.global.v1.UpdateLabeledAddressRequest.prototype.setCoin = function(value) {
  jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional string address = 4;
 * @return {string}
 */
proto.adamant.global.v1.UpdateLabeledAddressRequest.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.adamant.global.v1.UpdateLabeledAddressRequest.prototype.setAddress = function(value) {
  jspb.Message.setProto3StringField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.adamant.global.v1.GetLabeledAddressRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.adamant.global.v1.GetLabeledAddressRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.adamant.global.v1.GetLabeledAddressRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.GetLabeledAddressRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    labeledAddressId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.adamant.global.v1.GetLabeledAddressRequest}
 */
proto.adamant.global.v1.GetLabeledAddressRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.adamant.global.v1.GetLabeledAddressRequest;
  return proto.adamant.global.v1.GetLabeledAddressRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.adamant.global.v1.GetLabeledAddressRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.adamant.global.v1.GetLabeledAddressRequest}
 */
proto.adamant.global.v1.GetLabeledAddressRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setLabeledAddressId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.adamant.global.v1.GetLabeledAddressRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.adamant.global.v1.GetLabeledAddressRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.adamant.global.v1.GetLabeledAddressRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.GetLabeledAddressRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLabeledAddressId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string labeled_address_id = 1;
 * @return {string}
 */
proto.adamant.global.v1.GetLabeledAddressRequest.prototype.getLabeledAddressId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.adamant.global.v1.GetLabeledAddressRequest.prototype.setLabeledAddressId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.adamant.global.v1.ListLabeledAddressesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.adamant.global.v1.ListLabeledAddressesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.adamant.global.v1.ListLabeledAddressesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.ListLabeledAddressesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.adamant.global.v1.ListLabeledAddressesRequest}
 */
proto.adamant.global.v1.ListLabeledAddressesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.adamant.global.v1.ListLabeledAddressesRequest;
  return proto.adamant.global.v1.ListLabeledAddressesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.adamant.global.v1.ListLabeledAddressesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.adamant.global.v1.ListLabeledAddressesRequest}
 */
proto.adamant.global.v1.ListLabeledAddressesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.adamant.global.v1.ListLabeledAddressesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.adamant.global.v1.ListLabeledAddressesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.adamant.global.v1.ListLabeledAddressesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.ListLabeledAddressesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.adamant.global.v1.ListLabeledAddressesResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.adamant.global.v1.ListLabeledAddressesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.adamant.global.v1.ListLabeledAddressesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.adamant.global.v1.ListLabeledAddressesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.ListLabeledAddressesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    addressesList: jspb.Message.toObjectList(msg.getAddressesList(),
    gincoinc_adamant_global_v1_adamantglobalv1_model_pb.LabeledAddress.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.adamant.global.v1.ListLabeledAddressesResponse}
 */
proto.adamant.global.v1.ListLabeledAddressesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.adamant.global.v1.ListLabeledAddressesResponse;
  return proto.adamant.global.v1.ListLabeledAddressesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.adamant.global.v1.ListLabeledAddressesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.adamant.global.v1.ListLabeledAddressesResponse}
 */
proto.adamant.global.v1.ListLabeledAddressesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new gincoinc_adamant_global_v1_adamantglobalv1_model_pb.LabeledAddress;
      reader.readMessage(value,gincoinc_adamant_global_v1_adamantglobalv1_model_pb.LabeledAddress.deserializeBinaryFromReader);
      msg.addAddresses(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.adamant.global.v1.ListLabeledAddressesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.adamant.global.v1.ListLabeledAddressesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.adamant.global.v1.ListLabeledAddressesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.ListLabeledAddressesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddressesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      gincoinc_adamant_global_v1_adamantglobalv1_model_pb.LabeledAddress.serializeBinaryToWriter
    );
  }
};


/**
 * repeated LabeledAddress addresses = 1;
 * @return {!Array<!proto.adamant.global.v1.LabeledAddress>}
 */
proto.adamant.global.v1.ListLabeledAddressesResponse.prototype.getAddressesList = function() {
  return /** @type{!Array<!proto.adamant.global.v1.LabeledAddress>} */ (
    jspb.Message.getRepeatedWrapperField(this, gincoinc_adamant_global_v1_adamantglobalv1_model_pb.LabeledAddress, 1));
};


/** @param {!Array<!proto.adamant.global.v1.LabeledAddress>} value */
proto.adamant.global.v1.ListLabeledAddressesResponse.prototype.setAddressesList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.adamant.global.v1.LabeledAddress=} opt_value
 * @param {number=} opt_index
 * @return {!proto.adamant.global.v1.LabeledAddress}
 */
proto.adamant.global.v1.ListLabeledAddressesResponse.prototype.addAddresses = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.adamant.global.v1.LabeledAddress, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.adamant.global.v1.ListLabeledAddressesResponse.prototype.clearAddressesList = function() {
  this.setAddressesList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.adamant.global.v1.DeleteLabeledAddressRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.adamant.global.v1.DeleteLabeledAddressRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.adamant.global.v1.DeleteLabeledAddressRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.DeleteLabeledAddressRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    labeledAddressId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.adamant.global.v1.DeleteLabeledAddressRequest}
 */
proto.adamant.global.v1.DeleteLabeledAddressRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.adamant.global.v1.DeleteLabeledAddressRequest;
  return proto.adamant.global.v1.DeleteLabeledAddressRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.adamant.global.v1.DeleteLabeledAddressRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.adamant.global.v1.DeleteLabeledAddressRequest}
 */
proto.adamant.global.v1.DeleteLabeledAddressRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setLabeledAddressId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.adamant.global.v1.DeleteLabeledAddressRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.adamant.global.v1.DeleteLabeledAddressRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.adamant.global.v1.DeleteLabeledAddressRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.DeleteLabeledAddressRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLabeledAddressId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string labeled_address_id = 1;
 * @return {string}
 */
proto.adamant.global.v1.DeleteLabeledAddressRequest.prototype.getLabeledAddressId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.adamant.global.v1.DeleteLabeledAddressRequest.prototype.setLabeledAddressId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.adamant.global.v1.ReviewLabeledAddressProposalRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.adamant.global.v1.ReviewLabeledAddressProposalRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.adamant.global.v1.ReviewLabeledAddressProposalRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.ReviewLabeledAddressProposalRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    labeledAddressId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    approve: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.adamant.global.v1.ReviewLabeledAddressProposalRequest}
 */
proto.adamant.global.v1.ReviewLabeledAddressProposalRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.adamant.global.v1.ReviewLabeledAddressProposalRequest;
  return proto.adamant.global.v1.ReviewLabeledAddressProposalRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.adamant.global.v1.ReviewLabeledAddressProposalRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.adamant.global.v1.ReviewLabeledAddressProposalRequest}
 */
proto.adamant.global.v1.ReviewLabeledAddressProposalRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setLabeledAddressId(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setApprove(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.adamant.global.v1.ReviewLabeledAddressProposalRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.adamant.global.v1.ReviewLabeledAddressProposalRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.adamant.global.v1.ReviewLabeledAddressProposalRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.ReviewLabeledAddressProposalRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLabeledAddressId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getApprove();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * optional string labeled_address_id = 1;
 * @return {string}
 */
proto.adamant.global.v1.ReviewLabeledAddressProposalRequest.prototype.getLabeledAddressId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.adamant.global.v1.ReviewLabeledAddressProposalRequest.prototype.setLabeledAddressId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bool approve = 2;
 * @return {boolean}
 */
proto.adamant.global.v1.ReviewLabeledAddressProposalRequest.prototype.getApprove = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/** @param {boolean} value */
proto.adamant.global.v1.ReviewLabeledAddressProposalRequest.prototype.setApprove = function(value) {
  jspb.Message.setProto3BooleanField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.adamant.global.v1.CreateWhitelistRequest.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.adamant.global.v1.CreateWhitelistRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.adamant.global.v1.CreateWhitelistRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.adamant.global.v1.CreateWhitelistRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.CreateWhitelistRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    coin: jspb.Message.getFieldWithDefault(msg, 2, 0),
    addressIdsList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.adamant.global.v1.CreateWhitelistRequest}
 */
proto.adamant.global.v1.CreateWhitelistRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.adamant.global.v1.CreateWhitelistRequest;
  return proto.adamant.global.v1.CreateWhitelistRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.adamant.global.v1.CreateWhitelistRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.adamant.global.v1.CreateWhitelistRequest}
 */
proto.adamant.global.v1.CreateWhitelistRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {!proto.gincoinc.global.v1.Coin} */ (reader.readEnum());
      msg.setCoin(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.addAddressIds(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.adamant.global.v1.CreateWhitelistRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.adamant.global.v1.CreateWhitelistRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.adamant.global.v1.CreateWhitelistRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.CreateWhitelistRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCoin();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getAddressIdsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.adamant.global.v1.CreateWhitelistRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.adamant.global.v1.CreateWhitelistRequest.prototype.setName = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional gincoinc.global.v1.Coin coin = 2;
 * @return {!proto.gincoinc.global.v1.Coin}
 */
proto.adamant.global.v1.CreateWhitelistRequest.prototype.getCoin = function() {
  return /** @type {!proto.gincoinc.global.v1.Coin} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {!proto.gincoinc.global.v1.Coin} value */
proto.adamant.global.v1.CreateWhitelistRequest.prototype.setCoin = function(value) {
  jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * repeated string address_ids = 3;
 * @return {!Array<string>}
 */
proto.adamant.global.v1.CreateWhitelistRequest.prototype.getAddressIdsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/** @param {!Array<string>} value */
proto.adamant.global.v1.CreateWhitelistRequest.prototype.setAddressIdsList = function(value) {
  jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 */
proto.adamant.global.v1.CreateWhitelistRequest.prototype.addAddressIds = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.adamant.global.v1.CreateWhitelistRequest.prototype.clearAddressIdsList = function() {
  this.setAddressIdsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.adamant.global.v1.CreateWhitelistResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.adamant.global.v1.CreateWhitelistResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.adamant.global.v1.CreateWhitelistResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.CreateWhitelistResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    whitelistId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.adamant.global.v1.CreateWhitelistResponse}
 */
proto.adamant.global.v1.CreateWhitelistResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.adamant.global.v1.CreateWhitelistResponse;
  return proto.adamant.global.v1.CreateWhitelistResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.adamant.global.v1.CreateWhitelistResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.adamant.global.v1.CreateWhitelistResponse}
 */
proto.adamant.global.v1.CreateWhitelistResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setWhitelistId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.adamant.global.v1.CreateWhitelistResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.adamant.global.v1.CreateWhitelistResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.adamant.global.v1.CreateWhitelistResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.CreateWhitelistResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getWhitelistId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string whitelist_id = 1;
 * @return {string}
 */
proto.adamant.global.v1.CreateWhitelistResponse.prototype.getWhitelistId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.adamant.global.v1.CreateWhitelistResponse.prototype.setWhitelistId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.adamant.global.v1.GetWhitelistRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.adamant.global.v1.GetWhitelistRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.adamant.global.v1.GetWhitelistRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.GetWhitelistRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    whitelistId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.adamant.global.v1.GetWhitelistRequest}
 */
proto.adamant.global.v1.GetWhitelistRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.adamant.global.v1.GetWhitelistRequest;
  return proto.adamant.global.v1.GetWhitelistRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.adamant.global.v1.GetWhitelistRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.adamant.global.v1.GetWhitelistRequest}
 */
proto.adamant.global.v1.GetWhitelistRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setWhitelistId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.adamant.global.v1.GetWhitelistRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.adamant.global.v1.GetWhitelistRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.adamant.global.v1.GetWhitelistRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.GetWhitelistRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getWhitelistId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string whitelist_id = 1;
 * @return {string}
 */
proto.adamant.global.v1.GetWhitelistRequest.prototype.getWhitelistId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.adamant.global.v1.GetWhitelistRequest.prototype.setWhitelistId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.adamant.global.v1.ListWhitelistsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.adamant.global.v1.ListWhitelistsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.adamant.global.v1.ListWhitelistsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.ListWhitelistsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.adamant.global.v1.ListWhitelistsRequest}
 */
proto.adamant.global.v1.ListWhitelistsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.adamant.global.v1.ListWhitelistsRequest;
  return proto.adamant.global.v1.ListWhitelistsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.adamant.global.v1.ListWhitelistsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.adamant.global.v1.ListWhitelistsRequest}
 */
proto.adamant.global.v1.ListWhitelistsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.adamant.global.v1.ListWhitelistsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.adamant.global.v1.ListWhitelistsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.adamant.global.v1.ListWhitelistsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.ListWhitelistsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.adamant.global.v1.ListWhitelistsResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.adamant.global.v1.ListWhitelistsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.adamant.global.v1.ListWhitelistsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.adamant.global.v1.ListWhitelistsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.ListWhitelistsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    whitelistsList: jspb.Message.toObjectList(msg.getWhitelistsList(),
    gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Whitelist.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.adamant.global.v1.ListWhitelistsResponse}
 */
proto.adamant.global.v1.ListWhitelistsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.adamant.global.v1.ListWhitelistsResponse;
  return proto.adamant.global.v1.ListWhitelistsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.adamant.global.v1.ListWhitelistsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.adamant.global.v1.ListWhitelistsResponse}
 */
proto.adamant.global.v1.ListWhitelistsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Whitelist;
      reader.readMessage(value,gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Whitelist.deserializeBinaryFromReader);
      msg.addWhitelists(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.adamant.global.v1.ListWhitelistsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.adamant.global.v1.ListWhitelistsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.adamant.global.v1.ListWhitelistsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.ListWhitelistsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getWhitelistsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Whitelist.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Whitelist whitelists = 1;
 * @return {!Array<!proto.adamant.global.v1.Whitelist>}
 */
proto.adamant.global.v1.ListWhitelistsResponse.prototype.getWhitelistsList = function() {
  return /** @type{!Array<!proto.adamant.global.v1.Whitelist>} */ (
    jspb.Message.getRepeatedWrapperField(this, gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Whitelist, 1));
};


/** @param {!Array<!proto.adamant.global.v1.Whitelist>} value */
proto.adamant.global.v1.ListWhitelistsResponse.prototype.setWhitelistsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.adamant.global.v1.Whitelist=} opt_value
 * @param {number=} opt_index
 * @return {!proto.adamant.global.v1.Whitelist}
 */
proto.adamant.global.v1.ListWhitelistsResponse.prototype.addWhitelists = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.adamant.global.v1.Whitelist, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.adamant.global.v1.ListWhitelistsResponse.prototype.clearWhitelistsList = function() {
  this.setWhitelistsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.adamant.global.v1.UpdateWhitelistRequest.repeatedFields_ = [4];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.adamant.global.v1.UpdateWhitelistRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.adamant.global.v1.UpdateWhitelistRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.adamant.global.v1.UpdateWhitelistRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.UpdateWhitelistRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    whitelistId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    coin: jspb.Message.getFieldWithDefault(msg, 3, 0),
    addressIdsList: (f = jspb.Message.getRepeatedField(msg, 4)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.adamant.global.v1.UpdateWhitelistRequest}
 */
proto.adamant.global.v1.UpdateWhitelistRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.adamant.global.v1.UpdateWhitelistRequest;
  return proto.adamant.global.v1.UpdateWhitelistRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.adamant.global.v1.UpdateWhitelistRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.adamant.global.v1.UpdateWhitelistRequest}
 */
proto.adamant.global.v1.UpdateWhitelistRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setWhitelistId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {!proto.gincoinc.global.v1.Coin} */ (reader.readEnum());
      msg.setCoin(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.addAddressIds(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.adamant.global.v1.UpdateWhitelistRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.adamant.global.v1.UpdateWhitelistRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.adamant.global.v1.UpdateWhitelistRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.UpdateWhitelistRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getWhitelistId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getCoin();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getAddressIdsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      4,
      f
    );
  }
};


/**
 * optional string whitelist_id = 1;
 * @return {string}
 */
proto.adamant.global.v1.UpdateWhitelistRequest.prototype.getWhitelistId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.adamant.global.v1.UpdateWhitelistRequest.prototype.setWhitelistId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.adamant.global.v1.UpdateWhitelistRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.adamant.global.v1.UpdateWhitelistRequest.prototype.setName = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional gincoinc.global.v1.Coin coin = 3;
 * @return {!proto.gincoinc.global.v1.Coin}
 */
proto.adamant.global.v1.UpdateWhitelistRequest.prototype.getCoin = function() {
  return /** @type {!proto.gincoinc.global.v1.Coin} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {!proto.gincoinc.global.v1.Coin} value */
proto.adamant.global.v1.UpdateWhitelistRequest.prototype.setCoin = function(value) {
  jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * repeated string address_ids = 4;
 * @return {!Array<string>}
 */
proto.adamant.global.v1.UpdateWhitelistRequest.prototype.getAddressIdsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 4));
};


/** @param {!Array<string>} value */
proto.adamant.global.v1.UpdateWhitelistRequest.prototype.setAddressIdsList = function(value) {
  jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 */
proto.adamant.global.v1.UpdateWhitelistRequest.prototype.addAddressIds = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.adamant.global.v1.UpdateWhitelistRequest.prototype.clearAddressIdsList = function() {
  this.setAddressIdsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.adamant.global.v1.UpdateWhitelistAddressesRequest.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.adamant.global.v1.UpdateWhitelistAddressesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.adamant.global.v1.UpdateWhitelistAddressesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.adamant.global.v1.UpdateWhitelistAddressesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.UpdateWhitelistAddressesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    whitelistId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    addressIdsList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.adamant.global.v1.UpdateWhitelistAddressesRequest}
 */
proto.adamant.global.v1.UpdateWhitelistAddressesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.adamant.global.v1.UpdateWhitelistAddressesRequest;
  return proto.adamant.global.v1.UpdateWhitelistAddressesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.adamant.global.v1.UpdateWhitelistAddressesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.adamant.global.v1.UpdateWhitelistAddressesRequest}
 */
proto.adamant.global.v1.UpdateWhitelistAddressesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setWhitelistId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addAddressIds(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.adamant.global.v1.UpdateWhitelistAddressesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.adamant.global.v1.UpdateWhitelistAddressesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.adamant.global.v1.UpdateWhitelistAddressesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.UpdateWhitelistAddressesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getWhitelistId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAddressIdsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
};


/**
 * optional string whitelist_id = 1;
 * @return {string}
 */
proto.adamant.global.v1.UpdateWhitelistAddressesRequest.prototype.getWhitelistId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.adamant.global.v1.UpdateWhitelistAddressesRequest.prototype.setWhitelistId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated string address_ids = 2;
 * @return {!Array<string>}
 */
proto.adamant.global.v1.UpdateWhitelistAddressesRequest.prototype.getAddressIdsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/** @param {!Array<string>} value */
proto.adamant.global.v1.UpdateWhitelistAddressesRequest.prototype.setAddressIdsList = function(value) {
  jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 */
proto.adamant.global.v1.UpdateWhitelistAddressesRequest.prototype.addAddressIds = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.adamant.global.v1.UpdateWhitelistAddressesRequest.prototype.clearAddressIdsList = function() {
  this.setAddressIdsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.adamant.global.v1.DeleteWhitelistRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.adamant.global.v1.DeleteWhitelistRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.adamant.global.v1.DeleteWhitelistRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.DeleteWhitelistRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    whitelistId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.adamant.global.v1.DeleteWhitelistRequest}
 */
proto.adamant.global.v1.DeleteWhitelistRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.adamant.global.v1.DeleteWhitelistRequest;
  return proto.adamant.global.v1.DeleteWhitelistRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.adamant.global.v1.DeleteWhitelistRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.adamant.global.v1.DeleteWhitelistRequest}
 */
proto.adamant.global.v1.DeleteWhitelistRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setWhitelistId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.adamant.global.v1.DeleteWhitelistRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.adamant.global.v1.DeleteWhitelistRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.adamant.global.v1.DeleteWhitelistRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.DeleteWhitelistRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getWhitelistId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string whitelist_id = 1;
 * @return {string}
 */
proto.adamant.global.v1.DeleteWhitelistRequest.prototype.getWhitelistId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.adamant.global.v1.DeleteWhitelistRequest.prototype.setWhitelistId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.adamant.global.v1.CreateTransferLimitRequest.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.adamant.global.v1.CreateTransferLimitRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.adamant.global.v1.CreateTransferLimitRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.adamant.global.v1.CreateTransferLimitRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.CreateTransferLimitRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    coin: jspb.Message.getFieldWithDefault(msg, 2, 0),
    transferLimitsList: jspb.Message.toObjectList(msg.getTransferLimitsList(),
    gincoinc_adamant_global_v1_adamantglobalv1_model_pb.RequestTransferLimitEntry.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.adamant.global.v1.CreateTransferLimitRequest}
 */
proto.adamant.global.v1.CreateTransferLimitRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.adamant.global.v1.CreateTransferLimitRequest;
  return proto.adamant.global.v1.CreateTransferLimitRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.adamant.global.v1.CreateTransferLimitRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.adamant.global.v1.CreateTransferLimitRequest}
 */
proto.adamant.global.v1.CreateTransferLimitRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {!proto.gincoinc.global.v1.Coin} */ (reader.readEnum());
      msg.setCoin(value);
      break;
    case 3:
      var value = new gincoinc_adamant_global_v1_adamantglobalv1_model_pb.RequestTransferLimitEntry;
      reader.readMessage(value,gincoinc_adamant_global_v1_adamantglobalv1_model_pb.RequestTransferLimitEntry.deserializeBinaryFromReader);
      msg.addTransferLimits(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.adamant.global.v1.CreateTransferLimitRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.adamant.global.v1.CreateTransferLimitRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.adamant.global.v1.CreateTransferLimitRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.CreateTransferLimitRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCoin();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getTransferLimitsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      gincoinc_adamant_global_v1_adamantglobalv1_model_pb.RequestTransferLimitEntry.serializeBinaryToWriter
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.adamant.global.v1.CreateTransferLimitRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.adamant.global.v1.CreateTransferLimitRequest.prototype.setName = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional gincoinc.global.v1.Coin coin = 2;
 * @return {!proto.gincoinc.global.v1.Coin}
 */
proto.adamant.global.v1.CreateTransferLimitRequest.prototype.getCoin = function() {
  return /** @type {!proto.gincoinc.global.v1.Coin} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {!proto.gincoinc.global.v1.Coin} value */
proto.adamant.global.v1.CreateTransferLimitRequest.prototype.setCoin = function(value) {
  jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * repeated RequestTransferLimitEntry transfer_limits = 3;
 * @return {!Array<!proto.adamant.global.v1.RequestTransferLimitEntry>}
 */
proto.adamant.global.v1.CreateTransferLimitRequest.prototype.getTransferLimitsList = function() {
  return /** @type{!Array<!proto.adamant.global.v1.RequestTransferLimitEntry>} */ (
    jspb.Message.getRepeatedWrapperField(this, gincoinc_adamant_global_v1_adamantglobalv1_model_pb.RequestTransferLimitEntry, 3));
};


/** @param {!Array<!proto.adamant.global.v1.RequestTransferLimitEntry>} value */
proto.adamant.global.v1.CreateTransferLimitRequest.prototype.setTransferLimitsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.adamant.global.v1.RequestTransferLimitEntry=} opt_value
 * @param {number=} opt_index
 * @return {!proto.adamant.global.v1.RequestTransferLimitEntry}
 */
proto.adamant.global.v1.CreateTransferLimitRequest.prototype.addTransferLimits = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.adamant.global.v1.RequestTransferLimitEntry, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.adamant.global.v1.CreateTransferLimitRequest.prototype.clearTransferLimitsList = function() {
  this.setTransferLimitsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.adamant.global.v1.CreateTransferLimitResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.adamant.global.v1.CreateTransferLimitResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.adamant.global.v1.CreateTransferLimitResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.CreateTransferLimitResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    transferLimitId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.adamant.global.v1.CreateTransferLimitResponse}
 */
proto.adamant.global.v1.CreateTransferLimitResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.adamant.global.v1.CreateTransferLimitResponse;
  return proto.adamant.global.v1.CreateTransferLimitResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.adamant.global.v1.CreateTransferLimitResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.adamant.global.v1.CreateTransferLimitResponse}
 */
proto.adamant.global.v1.CreateTransferLimitResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTransferLimitId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.adamant.global.v1.CreateTransferLimitResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.adamant.global.v1.CreateTransferLimitResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.adamant.global.v1.CreateTransferLimitResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.CreateTransferLimitResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTransferLimitId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string transfer_limit_id = 1;
 * @return {string}
 */
proto.adamant.global.v1.CreateTransferLimitResponse.prototype.getTransferLimitId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.adamant.global.v1.CreateTransferLimitResponse.prototype.setTransferLimitId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.adamant.global.v1.GetTransferLimitRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.adamant.global.v1.GetTransferLimitRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.adamant.global.v1.GetTransferLimitRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.GetTransferLimitRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    transferLimitId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.adamant.global.v1.GetTransferLimitRequest}
 */
proto.adamant.global.v1.GetTransferLimitRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.adamant.global.v1.GetTransferLimitRequest;
  return proto.adamant.global.v1.GetTransferLimitRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.adamant.global.v1.GetTransferLimitRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.adamant.global.v1.GetTransferLimitRequest}
 */
proto.adamant.global.v1.GetTransferLimitRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTransferLimitId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.adamant.global.v1.GetTransferLimitRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.adamant.global.v1.GetTransferLimitRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.adamant.global.v1.GetTransferLimitRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.GetTransferLimitRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTransferLimitId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string transfer_limit_id = 1;
 * @return {string}
 */
proto.adamant.global.v1.GetTransferLimitRequest.prototype.getTransferLimitId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.adamant.global.v1.GetTransferLimitRequest.prototype.setTransferLimitId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.adamant.global.v1.ListTransferLimitsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.adamant.global.v1.ListTransferLimitsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.adamant.global.v1.ListTransferLimitsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.ListTransferLimitsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.adamant.global.v1.ListTransferLimitsRequest}
 */
proto.adamant.global.v1.ListTransferLimitsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.adamant.global.v1.ListTransferLimitsRequest;
  return proto.adamant.global.v1.ListTransferLimitsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.adamant.global.v1.ListTransferLimitsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.adamant.global.v1.ListTransferLimitsRequest}
 */
proto.adamant.global.v1.ListTransferLimitsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.adamant.global.v1.ListTransferLimitsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.adamant.global.v1.ListTransferLimitsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.adamant.global.v1.ListTransferLimitsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.ListTransferLimitsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.adamant.global.v1.ListTransferLimitsResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.adamant.global.v1.ListTransferLimitsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.adamant.global.v1.ListTransferLimitsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.adamant.global.v1.ListTransferLimitsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.ListTransferLimitsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    transferLimitsList: jspb.Message.toObjectList(msg.getTransferLimitsList(),
    gincoinc_adamant_global_v1_adamantglobalv1_model_pb.TransferLimit.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.adamant.global.v1.ListTransferLimitsResponse}
 */
proto.adamant.global.v1.ListTransferLimitsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.adamant.global.v1.ListTransferLimitsResponse;
  return proto.adamant.global.v1.ListTransferLimitsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.adamant.global.v1.ListTransferLimitsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.adamant.global.v1.ListTransferLimitsResponse}
 */
proto.adamant.global.v1.ListTransferLimitsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new gincoinc_adamant_global_v1_adamantglobalv1_model_pb.TransferLimit;
      reader.readMessage(value,gincoinc_adamant_global_v1_adamantglobalv1_model_pb.TransferLimit.deserializeBinaryFromReader);
      msg.addTransferLimits(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.adamant.global.v1.ListTransferLimitsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.adamant.global.v1.ListTransferLimitsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.adamant.global.v1.ListTransferLimitsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.ListTransferLimitsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTransferLimitsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      gincoinc_adamant_global_v1_adamantglobalv1_model_pb.TransferLimit.serializeBinaryToWriter
    );
  }
};


/**
 * repeated TransferLimit transfer_limits = 1;
 * @return {!Array<!proto.adamant.global.v1.TransferLimit>}
 */
proto.adamant.global.v1.ListTransferLimitsResponse.prototype.getTransferLimitsList = function() {
  return /** @type{!Array<!proto.adamant.global.v1.TransferLimit>} */ (
    jspb.Message.getRepeatedWrapperField(this, gincoinc_adamant_global_v1_adamantglobalv1_model_pb.TransferLimit, 1));
};


/** @param {!Array<!proto.adamant.global.v1.TransferLimit>} value */
proto.adamant.global.v1.ListTransferLimitsResponse.prototype.setTransferLimitsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.adamant.global.v1.TransferLimit=} opt_value
 * @param {number=} opt_index
 * @return {!proto.adamant.global.v1.TransferLimit}
 */
proto.adamant.global.v1.ListTransferLimitsResponse.prototype.addTransferLimits = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.adamant.global.v1.TransferLimit, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.adamant.global.v1.ListTransferLimitsResponse.prototype.clearTransferLimitsList = function() {
  this.setTransferLimitsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.adamant.global.v1.UpdateTransferLimitRequest.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.adamant.global.v1.UpdateTransferLimitRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.adamant.global.v1.UpdateTransferLimitRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.adamant.global.v1.UpdateTransferLimitRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.UpdateTransferLimitRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    transferLimitId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    transferLimitsList: jspb.Message.toObjectList(msg.getTransferLimitsList(),
    gincoinc_adamant_global_v1_adamantglobalv1_model_pb.RequestTransferLimitEntry.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.adamant.global.v1.UpdateTransferLimitRequest}
 */
proto.adamant.global.v1.UpdateTransferLimitRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.adamant.global.v1.UpdateTransferLimitRequest;
  return proto.adamant.global.v1.UpdateTransferLimitRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.adamant.global.v1.UpdateTransferLimitRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.adamant.global.v1.UpdateTransferLimitRequest}
 */
proto.adamant.global.v1.UpdateTransferLimitRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTransferLimitId(value);
      break;
    case 2:
      var value = new gincoinc_adamant_global_v1_adamantglobalv1_model_pb.RequestTransferLimitEntry;
      reader.readMessage(value,gincoinc_adamant_global_v1_adamantglobalv1_model_pb.RequestTransferLimitEntry.deserializeBinaryFromReader);
      msg.addTransferLimits(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.adamant.global.v1.UpdateTransferLimitRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.adamant.global.v1.UpdateTransferLimitRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.adamant.global.v1.UpdateTransferLimitRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.UpdateTransferLimitRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTransferLimitId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTransferLimitsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      gincoinc_adamant_global_v1_adamantglobalv1_model_pb.RequestTransferLimitEntry.serializeBinaryToWriter
    );
  }
};


/**
 * optional string transfer_limit_id = 1;
 * @return {string}
 */
proto.adamant.global.v1.UpdateTransferLimitRequest.prototype.getTransferLimitId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.adamant.global.v1.UpdateTransferLimitRequest.prototype.setTransferLimitId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated RequestTransferLimitEntry transfer_limits = 2;
 * @return {!Array<!proto.adamant.global.v1.RequestTransferLimitEntry>}
 */
proto.adamant.global.v1.UpdateTransferLimitRequest.prototype.getTransferLimitsList = function() {
  return /** @type{!Array<!proto.adamant.global.v1.RequestTransferLimitEntry>} */ (
    jspb.Message.getRepeatedWrapperField(this, gincoinc_adamant_global_v1_adamantglobalv1_model_pb.RequestTransferLimitEntry, 2));
};


/** @param {!Array<!proto.adamant.global.v1.RequestTransferLimitEntry>} value */
proto.adamant.global.v1.UpdateTransferLimitRequest.prototype.setTransferLimitsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.adamant.global.v1.RequestTransferLimitEntry=} opt_value
 * @param {number=} opt_index
 * @return {!proto.adamant.global.v1.RequestTransferLimitEntry}
 */
proto.adamant.global.v1.UpdateTransferLimitRequest.prototype.addTransferLimits = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.adamant.global.v1.RequestTransferLimitEntry, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.adamant.global.v1.UpdateTransferLimitRequest.prototype.clearTransferLimitsList = function() {
  this.setTransferLimitsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.adamant.global.v1.UpdateTransferLimitNameRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.adamant.global.v1.UpdateTransferLimitNameRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.adamant.global.v1.UpdateTransferLimitNameRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.UpdateTransferLimitNameRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    transferLimitId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    name: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.adamant.global.v1.UpdateTransferLimitNameRequest}
 */
proto.adamant.global.v1.UpdateTransferLimitNameRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.adamant.global.v1.UpdateTransferLimitNameRequest;
  return proto.adamant.global.v1.UpdateTransferLimitNameRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.adamant.global.v1.UpdateTransferLimitNameRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.adamant.global.v1.UpdateTransferLimitNameRequest}
 */
proto.adamant.global.v1.UpdateTransferLimitNameRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTransferLimitId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.adamant.global.v1.UpdateTransferLimitNameRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.adamant.global.v1.UpdateTransferLimitNameRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.adamant.global.v1.UpdateTransferLimitNameRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.UpdateTransferLimitNameRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTransferLimitId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string transfer_limit_id = 1;
 * @return {string}
 */
proto.adamant.global.v1.UpdateTransferLimitNameRequest.prototype.getTransferLimitId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.adamant.global.v1.UpdateTransferLimitNameRequest.prototype.setTransferLimitId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.adamant.global.v1.UpdateTransferLimitNameRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.adamant.global.v1.UpdateTransferLimitNameRequest.prototype.setName = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.adamant.global.v1.DeleteTransferLimitRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.adamant.global.v1.DeleteTransferLimitRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.adamant.global.v1.DeleteTransferLimitRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.DeleteTransferLimitRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    transferLimitId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.adamant.global.v1.DeleteTransferLimitRequest}
 */
proto.adamant.global.v1.DeleteTransferLimitRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.adamant.global.v1.DeleteTransferLimitRequest;
  return proto.adamant.global.v1.DeleteTransferLimitRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.adamant.global.v1.DeleteTransferLimitRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.adamant.global.v1.DeleteTransferLimitRequest}
 */
proto.adamant.global.v1.DeleteTransferLimitRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTransferLimitId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.adamant.global.v1.DeleteTransferLimitRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.adamant.global.v1.DeleteTransferLimitRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.adamant.global.v1.DeleteTransferLimitRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.DeleteTransferLimitRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTransferLimitId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string transfer_limit_id = 1;
 * @return {string}
 */
proto.adamant.global.v1.DeleteTransferLimitRequest.prototype.getTransferLimitId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.adamant.global.v1.DeleteTransferLimitRequest.prototype.setTransferLimitId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.adamant.global.v1.ReviewTransferLimitProposalRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.adamant.global.v1.ReviewTransferLimitProposalRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.adamant.global.v1.ReviewTransferLimitProposalRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.ReviewTransferLimitProposalRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    transferLimitId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    approve: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.adamant.global.v1.ReviewTransferLimitProposalRequest}
 */
proto.adamant.global.v1.ReviewTransferLimitProposalRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.adamant.global.v1.ReviewTransferLimitProposalRequest;
  return proto.adamant.global.v1.ReviewTransferLimitProposalRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.adamant.global.v1.ReviewTransferLimitProposalRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.adamant.global.v1.ReviewTransferLimitProposalRequest}
 */
proto.adamant.global.v1.ReviewTransferLimitProposalRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTransferLimitId(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setApprove(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.adamant.global.v1.ReviewTransferLimitProposalRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.adamant.global.v1.ReviewTransferLimitProposalRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.adamant.global.v1.ReviewTransferLimitProposalRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.ReviewTransferLimitProposalRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTransferLimitId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getApprove();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * optional string transfer_limit_id = 1;
 * @return {string}
 */
proto.adamant.global.v1.ReviewTransferLimitProposalRequest.prototype.getTransferLimitId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.adamant.global.v1.ReviewTransferLimitProposalRequest.prototype.setTransferLimitId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bool approve = 2;
 * @return {boolean}
 */
proto.adamant.global.v1.ReviewTransferLimitProposalRequest.prototype.getApprove = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/** @param {boolean} value */
proto.adamant.global.v1.ReviewTransferLimitProposalRequest.prototype.setApprove = function(value) {
  jspb.Message.setProto3BooleanField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.adamant.global.v1.CreatePolicyRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.adamant.global.v1.CreatePolicyRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.adamant.global.v1.CreatePolicyRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.CreatePolicyRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    coin: jspb.Message.getFieldWithDefault(msg, 3, 0),
    type: jspb.Message.getFieldWithDefault(msg, 4, 0),
    whitelistId: jspb.Message.getFieldWithDefault(msg, 5, ""),
    transferLimitId: jspb.Message.getFieldWithDefault(msg, 6, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.adamant.global.v1.CreatePolicyRequest}
 */
proto.adamant.global.v1.CreatePolicyRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.adamant.global.v1.CreatePolicyRequest;
  return proto.adamant.global.v1.CreatePolicyRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.adamant.global.v1.CreatePolicyRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.adamant.global.v1.CreatePolicyRequest}
 */
proto.adamant.global.v1.CreatePolicyRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {!proto.gincoinc.global.v1.Coin} */ (reader.readEnum());
      msg.setCoin(value);
      break;
    case 4:
      var value = /** @type {!proto.adamant.global.v1.PolicyType} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setWhitelistId(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setTransferLimitId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.adamant.global.v1.CreatePolicyRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.adamant.global.v1.CreatePolicyRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.adamant.global.v1.CreatePolicyRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.CreatePolicyRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCoin();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
  f = message.getWhitelistId();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getTransferLimitId();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.adamant.global.v1.CreatePolicyRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.adamant.global.v1.CreatePolicyRequest.prototype.setName = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional gincoinc.global.v1.Coin coin = 3;
 * @return {!proto.gincoinc.global.v1.Coin}
 */
proto.adamant.global.v1.CreatePolicyRequest.prototype.getCoin = function() {
  return /** @type {!proto.gincoinc.global.v1.Coin} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {!proto.gincoinc.global.v1.Coin} value */
proto.adamant.global.v1.CreatePolicyRequest.prototype.setCoin = function(value) {
  jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional PolicyType type = 4;
 * @return {!proto.adamant.global.v1.PolicyType}
 */
proto.adamant.global.v1.CreatePolicyRequest.prototype.getType = function() {
  return /** @type {!proto.adamant.global.v1.PolicyType} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {!proto.adamant.global.v1.PolicyType} value */
proto.adamant.global.v1.CreatePolicyRequest.prototype.setType = function(value) {
  jspb.Message.setProto3EnumField(this, 4, value);
};


/**
 * optional string whitelist_id = 5;
 * @return {string}
 */
proto.adamant.global.v1.CreatePolicyRequest.prototype.getWhitelistId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/** @param {string} value */
proto.adamant.global.v1.CreatePolicyRequest.prototype.setWhitelistId = function(value) {
  jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string transfer_limit_id = 6;
 * @return {string}
 */
proto.adamant.global.v1.CreatePolicyRequest.prototype.getTransferLimitId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/** @param {string} value */
proto.adamant.global.v1.CreatePolicyRequest.prototype.setTransferLimitId = function(value) {
  jspb.Message.setProto3StringField(this, 6, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.adamant.global.v1.CreatePolicyResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.adamant.global.v1.CreatePolicyResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.adamant.global.v1.CreatePolicyResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.CreatePolicyResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    policyId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.adamant.global.v1.CreatePolicyResponse}
 */
proto.adamant.global.v1.CreatePolicyResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.adamant.global.v1.CreatePolicyResponse;
  return proto.adamant.global.v1.CreatePolicyResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.adamant.global.v1.CreatePolicyResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.adamant.global.v1.CreatePolicyResponse}
 */
proto.adamant.global.v1.CreatePolicyResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPolicyId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.adamant.global.v1.CreatePolicyResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.adamant.global.v1.CreatePolicyResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.adamant.global.v1.CreatePolicyResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.CreatePolicyResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPolicyId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string policy_id = 1;
 * @return {string}
 */
proto.adamant.global.v1.CreatePolicyResponse.prototype.getPolicyId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.adamant.global.v1.CreatePolicyResponse.prototype.setPolicyId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.adamant.global.v1.GetPolicyRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.adamant.global.v1.GetPolicyRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.adamant.global.v1.GetPolicyRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.GetPolicyRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    policyId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.adamant.global.v1.GetPolicyRequest}
 */
proto.adamant.global.v1.GetPolicyRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.adamant.global.v1.GetPolicyRequest;
  return proto.adamant.global.v1.GetPolicyRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.adamant.global.v1.GetPolicyRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.adamant.global.v1.GetPolicyRequest}
 */
proto.adamant.global.v1.GetPolicyRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPolicyId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.adamant.global.v1.GetPolicyRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.adamant.global.v1.GetPolicyRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.adamant.global.v1.GetPolicyRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.GetPolicyRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPolicyId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string policy_id = 1;
 * @return {string}
 */
proto.adamant.global.v1.GetPolicyRequest.prototype.getPolicyId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.adamant.global.v1.GetPolicyRequest.prototype.setPolicyId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.adamant.global.v1.ListPoliciesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.adamant.global.v1.ListPoliciesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.adamant.global.v1.ListPoliciesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.ListPoliciesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.adamant.global.v1.ListPoliciesRequest}
 */
proto.adamant.global.v1.ListPoliciesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.adamant.global.v1.ListPoliciesRequest;
  return proto.adamant.global.v1.ListPoliciesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.adamant.global.v1.ListPoliciesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.adamant.global.v1.ListPoliciesRequest}
 */
proto.adamant.global.v1.ListPoliciesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.adamant.global.v1.ListPoliciesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.adamant.global.v1.ListPoliciesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.adamant.global.v1.ListPoliciesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.ListPoliciesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.adamant.global.v1.IsDeletablePolicyRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.adamant.global.v1.IsDeletablePolicyRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.adamant.global.v1.IsDeletablePolicyRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.IsDeletablePolicyRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    policyId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.adamant.global.v1.IsDeletablePolicyRequest}
 */
proto.adamant.global.v1.IsDeletablePolicyRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.adamant.global.v1.IsDeletablePolicyRequest;
  return proto.adamant.global.v1.IsDeletablePolicyRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.adamant.global.v1.IsDeletablePolicyRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.adamant.global.v1.IsDeletablePolicyRequest}
 */
proto.adamant.global.v1.IsDeletablePolicyRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPolicyId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.adamant.global.v1.IsDeletablePolicyRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.adamant.global.v1.IsDeletablePolicyRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.adamant.global.v1.IsDeletablePolicyRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.IsDeletablePolicyRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPolicyId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string policy_id = 1;
 * @return {string}
 */
proto.adamant.global.v1.IsDeletablePolicyRequest.prototype.getPolicyId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.adamant.global.v1.IsDeletablePolicyRequest.prototype.setPolicyId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.adamant.global.v1.IsDeletablePolicyResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.adamant.global.v1.IsDeletablePolicyResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.adamant.global.v1.IsDeletablePolicyResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.IsDeletablePolicyResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    isDeletable: jspb.Message.getBooleanFieldWithDefault(msg, 1, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.adamant.global.v1.IsDeletablePolicyResponse}
 */
proto.adamant.global.v1.IsDeletablePolicyResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.adamant.global.v1.IsDeletablePolicyResponse;
  return proto.adamant.global.v1.IsDeletablePolicyResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.adamant.global.v1.IsDeletablePolicyResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.adamant.global.v1.IsDeletablePolicyResponse}
 */
proto.adamant.global.v1.IsDeletablePolicyResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsDeletable(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.adamant.global.v1.IsDeletablePolicyResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.adamant.global.v1.IsDeletablePolicyResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.adamant.global.v1.IsDeletablePolicyResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.IsDeletablePolicyResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIsDeletable();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool is_deletable = 1;
 * @return {boolean}
 */
proto.adamant.global.v1.IsDeletablePolicyResponse.prototype.getIsDeletable = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/** @param {boolean} value */
proto.adamant.global.v1.IsDeletablePolicyResponse.prototype.setIsDeletable = function(value) {
  jspb.Message.setProto3BooleanField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.adamant.global.v1.IsDeletableLabeledAddressRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.adamant.global.v1.IsDeletableLabeledAddressRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.adamant.global.v1.IsDeletableLabeledAddressRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.IsDeletableLabeledAddressRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    labeledAddressId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.adamant.global.v1.IsDeletableLabeledAddressRequest}
 */
proto.adamant.global.v1.IsDeletableLabeledAddressRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.adamant.global.v1.IsDeletableLabeledAddressRequest;
  return proto.adamant.global.v1.IsDeletableLabeledAddressRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.adamant.global.v1.IsDeletableLabeledAddressRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.adamant.global.v1.IsDeletableLabeledAddressRequest}
 */
proto.adamant.global.v1.IsDeletableLabeledAddressRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setLabeledAddressId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.adamant.global.v1.IsDeletableLabeledAddressRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.adamant.global.v1.IsDeletableLabeledAddressRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.adamant.global.v1.IsDeletableLabeledAddressRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.IsDeletableLabeledAddressRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLabeledAddressId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string labeled_address_id = 1;
 * @return {string}
 */
proto.adamant.global.v1.IsDeletableLabeledAddressRequest.prototype.getLabeledAddressId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.adamant.global.v1.IsDeletableLabeledAddressRequest.prototype.setLabeledAddressId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.adamant.global.v1.IsDeletableLabeledAddressResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.adamant.global.v1.IsDeletableLabeledAddressResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.adamant.global.v1.IsDeletableLabeledAddressResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.IsDeletableLabeledAddressResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    isDeletable: jspb.Message.getBooleanFieldWithDefault(msg, 1, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.adamant.global.v1.IsDeletableLabeledAddressResponse}
 */
proto.adamant.global.v1.IsDeletableLabeledAddressResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.adamant.global.v1.IsDeletableLabeledAddressResponse;
  return proto.adamant.global.v1.IsDeletableLabeledAddressResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.adamant.global.v1.IsDeletableLabeledAddressResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.adamant.global.v1.IsDeletableLabeledAddressResponse}
 */
proto.adamant.global.v1.IsDeletableLabeledAddressResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsDeletable(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.adamant.global.v1.IsDeletableLabeledAddressResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.adamant.global.v1.IsDeletableLabeledAddressResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.adamant.global.v1.IsDeletableLabeledAddressResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.IsDeletableLabeledAddressResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIsDeletable();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool is_deletable = 1;
 * @return {boolean}
 */
proto.adamant.global.v1.IsDeletableLabeledAddressResponse.prototype.getIsDeletable = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/** @param {boolean} value */
proto.adamant.global.v1.IsDeletableLabeledAddressResponse.prototype.setIsDeletable = function(value) {
  jspb.Message.setProto3BooleanField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.adamant.global.v1.IsDeletableWhitelistRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.adamant.global.v1.IsDeletableWhitelistRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.adamant.global.v1.IsDeletableWhitelistRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.IsDeletableWhitelistRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    whitelistId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.adamant.global.v1.IsDeletableWhitelistRequest}
 */
proto.adamant.global.v1.IsDeletableWhitelistRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.adamant.global.v1.IsDeletableWhitelistRequest;
  return proto.adamant.global.v1.IsDeletableWhitelistRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.adamant.global.v1.IsDeletableWhitelistRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.adamant.global.v1.IsDeletableWhitelistRequest}
 */
proto.adamant.global.v1.IsDeletableWhitelistRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setWhitelistId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.adamant.global.v1.IsDeletableWhitelistRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.adamant.global.v1.IsDeletableWhitelistRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.adamant.global.v1.IsDeletableWhitelistRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.IsDeletableWhitelistRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getWhitelistId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string whitelist_id = 1;
 * @return {string}
 */
proto.adamant.global.v1.IsDeletableWhitelistRequest.prototype.getWhitelistId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.adamant.global.v1.IsDeletableWhitelistRequest.prototype.setWhitelistId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.adamant.global.v1.IsDeletableWhitelistResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.adamant.global.v1.IsDeletableWhitelistResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.adamant.global.v1.IsDeletableWhitelistResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.IsDeletableWhitelistResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    isDeletable: jspb.Message.getBooleanFieldWithDefault(msg, 1, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.adamant.global.v1.IsDeletableWhitelistResponse}
 */
proto.adamant.global.v1.IsDeletableWhitelistResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.adamant.global.v1.IsDeletableWhitelistResponse;
  return proto.adamant.global.v1.IsDeletableWhitelistResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.adamant.global.v1.IsDeletableWhitelistResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.adamant.global.v1.IsDeletableWhitelistResponse}
 */
proto.adamant.global.v1.IsDeletableWhitelistResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsDeletable(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.adamant.global.v1.IsDeletableWhitelistResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.adamant.global.v1.IsDeletableWhitelistResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.adamant.global.v1.IsDeletableWhitelistResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.IsDeletableWhitelistResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIsDeletable();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool is_deletable = 1;
 * @return {boolean}
 */
proto.adamant.global.v1.IsDeletableWhitelistResponse.prototype.getIsDeletable = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/** @param {boolean} value */
proto.adamant.global.v1.IsDeletableWhitelistResponse.prototype.setIsDeletable = function(value) {
  jspb.Message.setProto3BooleanField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.adamant.global.v1.IsDeletableTransferLimitRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.adamant.global.v1.IsDeletableTransferLimitRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.adamant.global.v1.IsDeletableTransferLimitRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.IsDeletableTransferLimitRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    transferLimitId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.adamant.global.v1.IsDeletableTransferLimitRequest}
 */
proto.adamant.global.v1.IsDeletableTransferLimitRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.adamant.global.v1.IsDeletableTransferLimitRequest;
  return proto.adamant.global.v1.IsDeletableTransferLimitRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.adamant.global.v1.IsDeletableTransferLimitRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.adamant.global.v1.IsDeletableTransferLimitRequest}
 */
proto.adamant.global.v1.IsDeletableTransferLimitRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTransferLimitId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.adamant.global.v1.IsDeletableTransferLimitRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.adamant.global.v1.IsDeletableTransferLimitRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.adamant.global.v1.IsDeletableTransferLimitRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.IsDeletableTransferLimitRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTransferLimitId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string transfer_limit_id = 1;
 * @return {string}
 */
proto.adamant.global.v1.IsDeletableTransferLimitRequest.prototype.getTransferLimitId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.adamant.global.v1.IsDeletableTransferLimitRequest.prototype.setTransferLimitId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.adamant.global.v1.IsDeletableTransferLimitResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.adamant.global.v1.IsDeletableTransferLimitResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.adamant.global.v1.IsDeletableTransferLimitResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.IsDeletableTransferLimitResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    isDeletable: jspb.Message.getBooleanFieldWithDefault(msg, 1, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.adamant.global.v1.IsDeletableTransferLimitResponse}
 */
proto.adamant.global.v1.IsDeletableTransferLimitResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.adamant.global.v1.IsDeletableTransferLimitResponse;
  return proto.adamant.global.v1.IsDeletableTransferLimitResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.adamant.global.v1.IsDeletableTransferLimitResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.adamant.global.v1.IsDeletableTransferLimitResponse}
 */
proto.adamant.global.v1.IsDeletableTransferLimitResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsDeletable(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.adamant.global.v1.IsDeletableTransferLimitResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.adamant.global.v1.IsDeletableTransferLimitResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.adamant.global.v1.IsDeletableTransferLimitResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.IsDeletableTransferLimitResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIsDeletable();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool is_deletable = 1;
 * @return {boolean}
 */
proto.adamant.global.v1.IsDeletableTransferLimitResponse.prototype.getIsDeletable = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/** @param {boolean} value */
proto.adamant.global.v1.IsDeletableTransferLimitResponse.prototype.setIsDeletable = function(value) {
  jspb.Message.setProto3BooleanField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.adamant.global.v1.ListPoliciesResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.adamant.global.v1.ListPoliciesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.adamant.global.v1.ListPoliciesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.adamant.global.v1.ListPoliciesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.ListPoliciesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    policiesList: jspb.Message.toObjectList(msg.getPoliciesList(),
    gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Policy.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.adamant.global.v1.ListPoliciesResponse}
 */
proto.adamant.global.v1.ListPoliciesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.adamant.global.v1.ListPoliciesResponse;
  return proto.adamant.global.v1.ListPoliciesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.adamant.global.v1.ListPoliciesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.adamant.global.v1.ListPoliciesResponse}
 */
proto.adamant.global.v1.ListPoliciesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Policy;
      reader.readMessage(value,gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Policy.deserializeBinaryFromReader);
      msg.addPolicies(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.adamant.global.v1.ListPoliciesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.adamant.global.v1.ListPoliciesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.adamant.global.v1.ListPoliciesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.ListPoliciesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPoliciesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Policy.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Policy policies = 1;
 * @return {!Array<!proto.adamant.global.v1.Policy>}
 */
proto.adamant.global.v1.ListPoliciesResponse.prototype.getPoliciesList = function() {
  return /** @type{!Array<!proto.adamant.global.v1.Policy>} */ (
    jspb.Message.getRepeatedWrapperField(this, gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Policy, 1));
};


/** @param {!Array<!proto.adamant.global.v1.Policy>} value */
proto.adamant.global.v1.ListPoliciesResponse.prototype.setPoliciesList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.adamant.global.v1.Policy=} opt_value
 * @param {number=} opt_index
 * @return {!proto.adamant.global.v1.Policy}
 */
proto.adamant.global.v1.ListPoliciesResponse.prototype.addPolicies = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.adamant.global.v1.Policy, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.adamant.global.v1.ListPoliciesResponse.prototype.clearPoliciesList = function() {
  this.setPoliciesList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.adamant.global.v1.UpdatePolicyRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.adamant.global.v1.UpdatePolicyRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.adamant.global.v1.UpdatePolicyRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.UpdatePolicyRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    policyId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    whitelistId: jspb.Message.getFieldWithDefault(msg, 3, ""),
    transferLimitId: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.adamant.global.v1.UpdatePolicyRequest}
 */
proto.adamant.global.v1.UpdatePolicyRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.adamant.global.v1.UpdatePolicyRequest;
  return proto.adamant.global.v1.UpdatePolicyRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.adamant.global.v1.UpdatePolicyRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.adamant.global.v1.UpdatePolicyRequest}
 */
proto.adamant.global.v1.UpdatePolicyRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPolicyId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setWhitelistId(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setTransferLimitId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.adamant.global.v1.UpdatePolicyRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.adamant.global.v1.UpdatePolicyRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.adamant.global.v1.UpdatePolicyRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.UpdatePolicyRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPolicyId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getWhitelistId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getTransferLimitId();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string policy_id = 1;
 * @return {string}
 */
proto.adamant.global.v1.UpdatePolicyRequest.prototype.getPolicyId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.adamant.global.v1.UpdatePolicyRequest.prototype.setPolicyId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.adamant.global.v1.UpdatePolicyRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.adamant.global.v1.UpdatePolicyRequest.prototype.setName = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string whitelist_id = 3;
 * @return {string}
 */
proto.adamant.global.v1.UpdatePolicyRequest.prototype.getWhitelistId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.adamant.global.v1.UpdatePolicyRequest.prototype.setWhitelistId = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string transfer_limit_id = 4;
 * @return {string}
 */
proto.adamant.global.v1.UpdatePolicyRequest.prototype.getTransferLimitId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.adamant.global.v1.UpdatePolicyRequest.prototype.setTransferLimitId = function(value) {
  jspb.Message.setProto3StringField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.adamant.global.v1.DeletePolicyRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.adamant.global.v1.DeletePolicyRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.adamant.global.v1.DeletePolicyRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.DeletePolicyRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    policyId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.adamant.global.v1.DeletePolicyRequest}
 */
proto.adamant.global.v1.DeletePolicyRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.adamant.global.v1.DeletePolicyRequest;
  return proto.adamant.global.v1.DeletePolicyRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.adamant.global.v1.DeletePolicyRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.adamant.global.v1.DeletePolicyRequest}
 */
proto.adamant.global.v1.DeletePolicyRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPolicyId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.adamant.global.v1.DeletePolicyRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.adamant.global.v1.DeletePolicyRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.adamant.global.v1.DeletePolicyRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.DeletePolicyRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPolicyId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string policy_id = 1;
 * @return {string}
 */
proto.adamant.global.v1.DeletePolicyRequest.prototype.getPolicyId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.adamant.global.v1.DeletePolicyRequest.prototype.setPolicyId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.adamant.global.v1.ReviewPolicyProposalRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.adamant.global.v1.ReviewPolicyProposalRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.adamant.global.v1.ReviewPolicyProposalRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.ReviewPolicyProposalRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    policyId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    approve: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.adamant.global.v1.ReviewPolicyProposalRequest}
 */
proto.adamant.global.v1.ReviewPolicyProposalRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.adamant.global.v1.ReviewPolicyProposalRequest;
  return proto.adamant.global.v1.ReviewPolicyProposalRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.adamant.global.v1.ReviewPolicyProposalRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.adamant.global.v1.ReviewPolicyProposalRequest}
 */
proto.adamant.global.v1.ReviewPolicyProposalRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPolicyId(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setApprove(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.adamant.global.v1.ReviewPolicyProposalRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.adamant.global.v1.ReviewPolicyProposalRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.adamant.global.v1.ReviewPolicyProposalRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.ReviewPolicyProposalRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPolicyId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getApprove();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * optional string policy_id = 1;
 * @return {string}
 */
proto.adamant.global.v1.ReviewPolicyProposalRequest.prototype.getPolicyId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.adamant.global.v1.ReviewPolicyProposalRequest.prototype.setPolicyId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bool approve = 2;
 * @return {boolean}
 */
proto.adamant.global.v1.ReviewPolicyProposalRequest.prototype.getApprove = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/** @param {boolean} value */
proto.adamant.global.v1.ReviewPolicyProposalRequest.prototype.setApprove = function(value) {
  jspb.Message.setProto3BooleanField(this, 2, value);
};


goog.object.extend(exports, proto.adamant.global.v1);
