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
var validate_validate_pb = require('../../../../../validate/validate_pb.js');
goog.object.extend(proto, validate_validate_pb);
var gincoinc_global_v1_gincoincglobalv1_enum_pb = require('../../../../../gincoinc/global/v1/gincoincglobalv1/enum_pb.js');
goog.object.extend(proto, gincoinc_global_v1_gincoincglobalv1_enum_pb);
var gincoinc_adamant_global_v1_adamantglobalv1_enum_pb = require('../../../../../gincoinc/adamant/global/v1/adamantglobalv1/enum_pb.js');
goog.object.extend(proto, gincoinc_adamant_global_v1_adamantglobalv1_enum_pb);
goog.exportSymbol('proto.adamant.global.v1.Address', null, global);
goog.exportSymbol('proto.adamant.global.v1.AddressWithBalance', null, global);
goog.exportSymbol('proto.adamant.global.v1.AddressWithoutBalance', null, global);
goog.exportSymbol('proto.adamant.global.v1.BalanceSnapshot', null, global);
goog.exportSymbol('proto.adamant.global.v1.BitcoinSpecific', null, global);
goog.exportSymbol('proto.adamant.global.v1.BitcoincashSpecific', null, global);
goog.exportSymbol('proto.adamant.global.v1.C0banSpecific', null, global);
goog.exportSymbol('proto.adamant.global.v1.CompensationFee', null, global);
goog.exportSymbol('proto.adamant.global.v1.Confirmation', null, global);
goog.exportSymbol('proto.adamant.global.v1.Deactivatability', null, global);
goog.exportSymbol('proto.adamant.global.v1.EthereumFeeAddress', null, global);
goog.exportSymbol('proto.adamant.global.v1.EthereumSpecific', null, global);
goog.exportSymbol('proto.adamant.global.v1.FlushedAddress', null, global);
goog.exportSymbol('proto.adamant.global.v1.Key', null, global);
goog.exportSymbol('proto.adamant.global.v1.LabeledAddress', null, global);
goog.exportSymbol('proto.adamant.global.v1.LabeledAddressProposal', null, global);
goog.exportSymbol('proto.adamant.global.v1.ListTransferVolumeSnapshots', null, global);
goog.exportSymbol('proto.adamant.global.v1.ListWalletBalanceSnapshots', null, global);
goog.exportSymbol('proto.adamant.global.v1.ListWalletTransferVolumeSnapshots', null, global);
goog.exportSymbol('proto.adamant.global.v1.LitecoinSpecific', null, global);
goog.exportSymbol('proto.adamant.global.v1.Policy', null, global);
goog.exportSymbol('proto.adamant.global.v1.PolicyProposal', null, global);
goog.exportSymbol('proto.adamant.global.v1.Rate', null, global);
goog.exportSymbol('proto.adamant.global.v1.RateSnapshot', null, global);
goog.exportSymbol('proto.adamant.global.v1.RequestRate', null, global);
goog.exportSymbol('proto.adamant.global.v1.RequestSignature', null, global);
goog.exportSymbol('proto.adamant.global.v1.RequestSignedInfo', null, global);
goog.exportSymbol('proto.adamant.global.v1.RequestTransferLimitEntry', null, global);
goog.exportSymbol('proto.adamant.global.v1.RequestTxOutput', null, global);
goog.exportSymbol('proto.adamant.global.v1.SignInfo', null, global);
goog.exportSymbol('proto.adamant.global.v1.SignTxInput', null, global);
goog.exportSymbol('proto.adamant.global.v1.TotalBalance', null, global);
goog.exportSymbol('proto.adamant.global.v1.TotalBalanceByCoin', null, global);
goog.exportSymbol('proto.adamant.global.v1.Transaction', null, global);
goog.exportSymbol('proto.adamant.global.v1.TransactionMember', null, global);
goog.exportSymbol('proto.adamant.global.v1.Transfer', null, global);
goog.exportSymbol('proto.adamant.global.v1.TransferLimit', null, global);
goog.exportSymbol('proto.adamant.global.v1.TransferLimitProposal', null, global);
goog.exportSymbol('proto.adamant.global.v1.TransferVolume', null, global);
goog.exportSymbol('proto.adamant.global.v1.TransferVolumeSnapshot', null, global);
goog.exportSymbol('proto.adamant.global.v1.TransferVolumeSnapshots', null, global);
goog.exportSymbol('proto.adamant.global.v1.TronSpecific', null, global);
goog.exportSymbol('proto.adamant.global.v1.TxInput', null, global);
goog.exportSymbol('proto.adamant.global.v1.TxOutput', null, global);
goog.exportSymbol('proto.adamant.global.v1.Wallet', null, global);
goog.exportSymbol('proto.adamant.global.v1.WalletBalanceSnapshot', null, global);
goog.exportSymbol('proto.adamant.global.v1.WalletBalanceSnapshotMap', null, global);
goog.exportSymbol('proto.adamant.global.v1.WalletFlushSetting', null, global);
goog.exportSymbol('proto.adamant.global.v1.WalletMember', null, global);
goog.exportSymbol('proto.adamant.global.v1.WalletProposal', null, global);
goog.exportSymbol('proto.adamant.global.v1.WalletTransferVolume', null, global);
goog.exportSymbol('proto.adamant.global.v1.WalletTransferVolumeSnapshot', null, global);
goog.exportSymbol('proto.adamant.global.v1.WalletTransferVolumeSnapshots', null, global);
goog.exportSymbol('proto.adamant.global.v1.WalletWithoutBalance', null, global);
goog.exportSymbol('proto.adamant.global.v1.Whitelist', null, global);
goog.exportSymbol('proto.adamant.global.v1.XrpSpecific', null, global);
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
proto.adamant.global.v1.Wallet = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.adamant.global.v1.Wallet.repeatedFields_, null);
};
goog.inherits(proto.adamant.global.v1.Wallet, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.adamant.global.v1.Wallet.displayName = 'proto.adamant.global.v1.Wallet';
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
proto.adamant.global.v1.WalletWithoutBalance = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.adamant.global.v1.WalletWithoutBalance.repeatedFields_, null);
};
goog.inherits(proto.adamant.global.v1.WalletWithoutBalance, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.adamant.global.v1.WalletWithoutBalance.displayName = 'proto.adamant.global.v1.WalletWithoutBalance';
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
proto.adamant.global.v1.WalletProposal = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.adamant.global.v1.WalletProposal.repeatedFields_, null);
};
goog.inherits(proto.adamant.global.v1.WalletProposal, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.adamant.global.v1.WalletProposal.displayName = 'proto.adamant.global.v1.WalletProposal';
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
proto.adamant.global.v1.WalletMember = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.adamant.global.v1.WalletMember, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.adamant.global.v1.WalletMember.displayName = 'proto.adamant.global.v1.WalletMember';
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
proto.adamant.global.v1.Key = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.adamant.global.v1.Key, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.adamant.global.v1.Key.displayName = 'proto.adamant.global.v1.Key';
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
proto.adamant.global.v1.Address = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.adamant.global.v1.Address, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.adamant.global.v1.Address.displayName = 'proto.adamant.global.v1.Address';
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
proto.adamant.global.v1.AddressWithoutBalance = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.adamant.global.v1.AddressWithoutBalance, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.adamant.global.v1.AddressWithoutBalance.displayName = 'proto.adamant.global.v1.AddressWithoutBalance';
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
proto.adamant.global.v1.FlushedAddress = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.adamant.global.v1.FlushedAddress, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.adamant.global.v1.FlushedAddress.displayName = 'proto.adamant.global.v1.FlushedAddress';
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
proto.adamant.global.v1.EthereumFeeAddress = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.adamant.global.v1.EthereumFeeAddress, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.adamant.global.v1.EthereumFeeAddress.displayName = 'proto.adamant.global.v1.EthereumFeeAddress';
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
proto.adamant.global.v1.AddressWithBalance = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.adamant.global.v1.AddressWithBalance, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.adamant.global.v1.AddressWithBalance.displayName = 'proto.adamant.global.v1.AddressWithBalance';
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
proto.adamant.global.v1.Transaction = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.adamant.global.v1.Transaction.repeatedFields_, null);
};
goog.inherits(proto.adamant.global.v1.Transaction, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.adamant.global.v1.Transaction.displayName = 'proto.adamant.global.v1.Transaction';
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
proto.adamant.global.v1.TransactionMember = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.adamant.global.v1.TransactionMember, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.adamant.global.v1.TransactionMember.displayName = 'proto.adamant.global.v1.TransactionMember';
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
proto.adamant.global.v1.TxInput = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.adamant.global.v1.TxInput, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.adamant.global.v1.TxInput.displayName = 'proto.adamant.global.v1.TxInput';
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
proto.adamant.global.v1.TxOutput = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.adamant.global.v1.TxOutput, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.adamant.global.v1.TxOutput.displayName = 'proto.adamant.global.v1.TxOutput';
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
proto.adamant.global.v1.BitcoinSpecific = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.adamant.global.v1.BitcoinSpecific.repeatedFields_, null);
};
goog.inherits(proto.adamant.global.v1.BitcoinSpecific, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.adamant.global.v1.BitcoinSpecific.displayName = 'proto.adamant.global.v1.BitcoinSpecific';
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
proto.adamant.global.v1.LitecoinSpecific = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.adamant.global.v1.LitecoinSpecific.repeatedFields_, null);
};
goog.inherits(proto.adamant.global.v1.LitecoinSpecific, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.adamant.global.v1.LitecoinSpecific.displayName = 'proto.adamant.global.v1.LitecoinSpecific';
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
proto.adamant.global.v1.BitcoincashSpecific = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.adamant.global.v1.BitcoincashSpecific.repeatedFields_, null);
};
goog.inherits(proto.adamant.global.v1.BitcoincashSpecific, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.adamant.global.v1.BitcoincashSpecific.displayName = 'proto.adamant.global.v1.BitcoincashSpecific';
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
proto.adamant.global.v1.EthereumSpecific = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.adamant.global.v1.EthereumSpecific, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.adamant.global.v1.EthereumSpecific.displayName = 'proto.adamant.global.v1.EthereumSpecific';
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
proto.adamant.global.v1.XrpSpecific = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.adamant.global.v1.XrpSpecific, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.adamant.global.v1.XrpSpecific.displayName = 'proto.adamant.global.v1.XrpSpecific';
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
proto.adamant.global.v1.TronSpecific = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.adamant.global.v1.TronSpecific, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.adamant.global.v1.TronSpecific.displayName = 'proto.adamant.global.v1.TronSpecific';
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
proto.adamant.global.v1.C0banSpecific = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.adamant.global.v1.C0banSpecific.repeatedFields_, null);
};
goog.inherits(proto.adamant.global.v1.C0banSpecific, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.adamant.global.v1.C0banSpecific.displayName = 'proto.adamant.global.v1.C0banSpecific';
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
proto.adamant.global.v1.SignInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.adamant.global.v1.SignInfo.repeatedFields_, null);
};
goog.inherits(proto.adamant.global.v1.SignInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.adamant.global.v1.SignInfo.displayName = 'proto.adamant.global.v1.SignInfo';
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
proto.adamant.global.v1.SignTxInput = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.adamant.global.v1.SignTxInput, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.adamant.global.v1.SignTxInput.displayName = 'proto.adamant.global.v1.SignTxInput';
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
proto.adamant.global.v1.Transfer = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.adamant.global.v1.Transfer, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.adamant.global.v1.Transfer.displayName = 'proto.adamant.global.v1.Transfer';
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
proto.adamant.global.v1.Rate = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.adamant.global.v1.Rate, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.adamant.global.v1.Rate.displayName = 'proto.adamant.global.v1.Rate';
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
proto.adamant.global.v1.RateSnapshot = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.adamant.global.v1.RateSnapshot, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.adamant.global.v1.RateSnapshot.displayName = 'proto.adamant.global.v1.RateSnapshot';
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
proto.adamant.global.v1.Deactivatability = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.adamant.global.v1.Deactivatability, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.adamant.global.v1.Deactivatability.displayName = 'proto.adamant.global.v1.Deactivatability';
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
proto.adamant.global.v1.LabeledAddress = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.adamant.global.v1.LabeledAddress, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.adamant.global.v1.LabeledAddress.displayName = 'proto.adamant.global.v1.LabeledAddress';
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
proto.adamant.global.v1.LabeledAddressProposal = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.adamant.global.v1.LabeledAddressProposal, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.adamant.global.v1.LabeledAddressProposal.displayName = 'proto.adamant.global.v1.LabeledAddressProposal';
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
proto.adamant.global.v1.Whitelist = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.adamant.global.v1.Whitelist.repeatedFields_, null);
};
goog.inherits(proto.adamant.global.v1.Whitelist, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.adamant.global.v1.Whitelist.displayName = 'proto.adamant.global.v1.Whitelist';
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
proto.adamant.global.v1.TransferLimit = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.adamant.global.v1.TransferLimit, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.adamant.global.v1.TransferLimit.displayName = 'proto.adamant.global.v1.TransferLimit';
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
proto.adamant.global.v1.TransferLimitProposal = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.adamant.global.v1.TransferLimitProposal, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.adamant.global.v1.TransferLimitProposal.displayName = 'proto.adamant.global.v1.TransferLimitProposal';
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
proto.adamant.global.v1.Policy = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.adamant.global.v1.Policy, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.adamant.global.v1.Policy.displayName = 'proto.adamant.global.v1.Policy';
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
proto.adamant.global.v1.PolicyProposal = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.adamant.global.v1.PolicyProposal, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.adamant.global.v1.PolicyProposal.displayName = 'proto.adamant.global.v1.PolicyProposal';
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
proto.adamant.global.v1.TotalBalanceByCoin = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.adamant.global.v1.TotalBalanceByCoin, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.adamant.global.v1.TotalBalanceByCoin.displayName = 'proto.adamant.global.v1.TotalBalanceByCoin';
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
proto.adamant.global.v1.TotalBalance = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.adamant.global.v1.TotalBalance, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.adamant.global.v1.TotalBalance.displayName = 'proto.adamant.global.v1.TotalBalance';
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
proto.adamant.global.v1.BalanceSnapshot = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.adamant.global.v1.BalanceSnapshot, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.adamant.global.v1.BalanceSnapshot.displayName = 'proto.adamant.global.v1.BalanceSnapshot';
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
proto.adamant.global.v1.WalletBalanceSnapshotMap = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.adamant.global.v1.WalletBalanceSnapshotMap, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.adamant.global.v1.WalletBalanceSnapshotMap.displayName = 'proto.adamant.global.v1.WalletBalanceSnapshotMap';
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
proto.adamant.global.v1.ListWalletBalanceSnapshots = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.adamant.global.v1.ListWalletBalanceSnapshots.repeatedFields_, null);
};
goog.inherits(proto.adamant.global.v1.ListWalletBalanceSnapshots, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.adamant.global.v1.ListWalletBalanceSnapshots.displayName = 'proto.adamant.global.v1.ListWalletBalanceSnapshots';
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
proto.adamant.global.v1.WalletBalanceSnapshot = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.adamant.global.v1.WalletBalanceSnapshot, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.adamant.global.v1.WalletBalanceSnapshot.displayName = 'proto.adamant.global.v1.WalletBalanceSnapshot';
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
proto.adamant.global.v1.TransferVolumeSnapshots = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.adamant.global.v1.TransferVolumeSnapshots, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.adamant.global.v1.TransferVolumeSnapshots.displayName = 'proto.adamant.global.v1.TransferVolumeSnapshots';
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
proto.adamant.global.v1.ListTransferVolumeSnapshots = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.adamant.global.v1.ListTransferVolumeSnapshots.repeatedFields_, null);
};
goog.inherits(proto.adamant.global.v1.ListTransferVolumeSnapshots, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.adamant.global.v1.ListTransferVolumeSnapshots.displayName = 'proto.adamant.global.v1.ListTransferVolumeSnapshots';
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
proto.adamant.global.v1.TransferVolumeSnapshot = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.adamant.global.v1.TransferVolumeSnapshot, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.adamant.global.v1.TransferVolumeSnapshot.displayName = 'proto.adamant.global.v1.TransferVolumeSnapshot';
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
proto.adamant.global.v1.TransferVolume = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.adamant.global.v1.TransferVolume, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.adamant.global.v1.TransferVolume.displayName = 'proto.adamant.global.v1.TransferVolume';
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
proto.adamant.global.v1.WalletTransferVolumeSnapshots = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.adamant.global.v1.WalletTransferVolumeSnapshots, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.adamant.global.v1.WalletTransferVolumeSnapshots.displayName = 'proto.adamant.global.v1.WalletTransferVolumeSnapshots';
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
proto.adamant.global.v1.ListWalletTransferVolumeSnapshots = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.adamant.global.v1.ListWalletTransferVolumeSnapshots.repeatedFields_, null);
};
goog.inherits(proto.adamant.global.v1.ListWalletTransferVolumeSnapshots, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.adamant.global.v1.ListWalletTransferVolumeSnapshots.displayName = 'proto.adamant.global.v1.ListWalletTransferVolumeSnapshots';
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
proto.adamant.global.v1.WalletTransferVolumeSnapshot = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.adamant.global.v1.WalletTransferVolumeSnapshot, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.adamant.global.v1.WalletTransferVolumeSnapshot.displayName = 'proto.adamant.global.v1.WalletTransferVolumeSnapshot';
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
proto.adamant.global.v1.WalletTransferVolume = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.adamant.global.v1.WalletTransferVolume, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.adamant.global.v1.WalletTransferVolume.displayName = 'proto.adamant.global.v1.WalletTransferVolume';
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
proto.adamant.global.v1.Confirmation = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.adamant.global.v1.Confirmation, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.adamant.global.v1.Confirmation.displayName = 'proto.adamant.global.v1.Confirmation';
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
proto.adamant.global.v1.WalletFlushSetting = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.adamant.global.v1.WalletFlushSetting, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.adamant.global.v1.WalletFlushSetting.displayName = 'proto.adamant.global.v1.WalletFlushSetting';
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
proto.adamant.global.v1.CompensationFee = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.adamant.global.v1.CompensationFee, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.adamant.global.v1.CompensationFee.displayName = 'proto.adamant.global.v1.CompensationFee';
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
proto.adamant.global.v1.RequestTxOutput = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.adamant.global.v1.RequestTxOutput, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.adamant.global.v1.RequestTxOutput.displayName = 'proto.adamant.global.v1.RequestTxOutput';
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
proto.adamant.global.v1.RequestSignedInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.adamant.global.v1.RequestSignedInfo.repeatedFields_, null);
};
goog.inherits(proto.adamant.global.v1.RequestSignedInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.adamant.global.v1.RequestSignedInfo.displayName = 'proto.adamant.global.v1.RequestSignedInfo';
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
proto.adamant.global.v1.RequestSignature = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.adamant.global.v1.RequestSignature, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.adamant.global.v1.RequestSignature.displayName = 'proto.adamant.global.v1.RequestSignature';
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
proto.adamant.global.v1.RequestTransferLimitEntry = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.adamant.global.v1.RequestTransferLimitEntry, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.adamant.global.v1.RequestTransferLimitEntry.displayName = 'proto.adamant.global.v1.RequestTransferLimitEntry';
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
proto.adamant.global.v1.RequestRate = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.adamant.global.v1.RequestRate, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.adamant.global.v1.RequestRate.displayName = 'proto.adamant.global.v1.RequestRate';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.adamant.global.v1.Wallet.repeatedFields_ = [9,10];



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
proto.adamant.global.v1.Wallet.prototype.toObject = function(opt_includeInstance) {
  return proto.adamant.global.v1.Wallet.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.adamant.global.v1.Wallet} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.Wallet.toObject = function(includeInstance, msg) {
  var f, obj = {
    ownerId: jspb.Message.getFieldWithDefault(msg, 23, ""),
    walletId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    coin: jspb.Message.getFieldWithDefault(msg, 3, 0),
    hdAccount: jspb.Message.getFieldWithDefault(msg, 17, 0),
    walletType: jspb.Message.getFieldWithDefault(msg, 4, 0),
    addressType: jspb.Message.getFieldWithDefault(msg, 5, 0),
    m: jspb.Message.getFieldWithDefault(msg, 6, 0),
    n: jspb.Message.getFieldWithDefault(msg, 7, 0),
    state: jspb.Message.getFieldWithDefault(msg, 8, 0),
    keysList: jspb.Message.toObjectList(msg.getKeysList(),
    proto.adamant.global.v1.Key.toObject, includeInstance),
    membersList: jspb.Message.toObjectList(msg.getMembersList(),
    proto.adamant.global.v1.WalletMember.toObject, includeInstance),
    requiredApprovalCount: jspb.Message.getFieldWithDefault(msg, 20, 0),
    balance: jspb.Message.getFloatingPointFieldWithDefault(msg, 11, 0.0),
    stringBalance: jspb.Message.getFieldWithDefault(msg, 12, ""),
    address: jspb.Message.getFieldWithDefault(msg, 13, ""),
    policyId: jspb.Message.getFieldWithDefault(msg, 14, ""),
    proposal: (f = msg.getProposal()) && proto.adamant.global.v1.WalletProposal.toObject(includeInstance, f),
    destinationWalletId: jspb.Message.getFieldWithDefault(msg, 19, ""),
    watchOnly: jspb.Message.getBooleanFieldWithDefault(msg, 21, false),
    addressNumber: jspb.Message.getFieldWithDefault(msg, 22, 0),
    createTime: (f = msg.getCreateTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    updateTime: (f = msg.getUpdateTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
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
 * @return {!proto.adamant.global.v1.Wallet}
 */
proto.adamant.global.v1.Wallet.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.adamant.global.v1.Wallet;
  return proto.adamant.global.v1.Wallet.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.adamant.global.v1.Wallet} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.adamant.global.v1.Wallet}
 */
proto.adamant.global.v1.Wallet.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 23:
      var value = /** @type {string} */ (reader.readString());
      msg.setOwnerId(value);
      break;
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setWalletId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {!proto.gincoinc.global.v1.Coin} */ (reader.readEnum());
      msg.setCoin(value);
      break;
    case 17:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setHdAccount(value);
      break;
    case 4:
      var value = /** @type {!proto.adamant.global.v1.WalletType} */ (reader.readEnum());
      msg.setWalletType(value);
      break;
    case 5:
      var value = /** @type {!proto.gincoinc.global.v1.AddressType} */ (reader.readEnum());
      msg.setAddressType(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setM(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setN(value);
      break;
    case 8:
      var value = /** @type {!proto.adamant.global.v1.WalletState} */ (reader.readEnum());
      msg.setState(value);
      break;
    case 9:
      var value = new proto.adamant.global.v1.Key;
      reader.readMessage(value,proto.adamant.global.v1.Key.deserializeBinaryFromReader);
      msg.addKeys(value);
      break;
    case 10:
      var value = new proto.adamant.global.v1.WalletMember;
      reader.readMessage(value,proto.adamant.global.v1.WalletMember.deserializeBinaryFromReader);
      msg.addMembers(value);
      break;
    case 20:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setRequiredApprovalCount(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setBalance(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setStringBalance(value);
      break;
    case 13:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress(value);
      break;
    case 14:
      var value = /** @type {string} */ (reader.readString());
      msg.setPolicyId(value);
      break;
    case 18:
      var value = new proto.adamant.global.v1.WalletProposal;
      reader.readMessage(value,proto.adamant.global.v1.WalletProposal.deserializeBinaryFromReader);
      msg.setProposal(value);
      break;
    case 19:
      var value = /** @type {string} */ (reader.readString());
      msg.setDestinationWalletId(value);
      break;
    case 21:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setWatchOnly(value);
      break;
    case 22:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setAddressNumber(value);
      break;
    case 15:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreateTime(value);
      break;
    case 16:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setUpdateTime(value);
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
proto.adamant.global.v1.Wallet.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.adamant.global.v1.Wallet.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.adamant.global.v1.Wallet} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.Wallet.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOwnerId();
  if (f.length > 0) {
    writer.writeString(
      23,
      f
    );
  }
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
  f = message.getCoin();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getHdAccount();
  if (f !== 0) {
    writer.writeUint32(
      17,
      f
    );
  }
  f = message.getWalletType();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
  f = message.getAddressType();
  if (f !== 0.0) {
    writer.writeEnum(
      5,
      f
    );
  }
  f = message.getM();
  if (f !== 0) {
    writer.writeUint32(
      6,
      f
    );
  }
  f = message.getN();
  if (f !== 0) {
    writer.writeUint32(
      7,
      f
    );
  }
  f = message.getState();
  if (f !== 0.0) {
    writer.writeEnum(
      8,
      f
    );
  }
  f = message.getKeysList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      9,
      f,
      proto.adamant.global.v1.Key.serializeBinaryToWriter
    );
  }
  f = message.getMembersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      10,
      f,
      proto.adamant.global.v1.WalletMember.serializeBinaryToWriter
    );
  }
  f = message.getRequiredApprovalCount();
  if (f !== 0) {
    writer.writeUint32(
      20,
      f
    );
  }
  f = message.getBalance();
  if (f !== 0.0) {
    writer.writeDouble(
      11,
      f
    );
  }
  f = message.getStringBalance();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
  f = message.getAddress();
  if (f.length > 0) {
    writer.writeString(
      13,
      f
    );
  }
  f = message.getPolicyId();
  if (f.length > 0) {
    writer.writeString(
      14,
      f
    );
  }
  f = message.getProposal();
  if (f != null) {
    writer.writeMessage(
      18,
      f,
      proto.adamant.global.v1.WalletProposal.serializeBinaryToWriter
    );
  }
  f = message.getDestinationWalletId();
  if (f.length > 0) {
    writer.writeString(
      19,
      f
    );
  }
  f = message.getWatchOnly();
  if (f) {
    writer.writeBool(
      21,
      f
    );
  }
  f = message.getAddressNumber();
  if (f !== 0) {
    writer.writeUint32(
      22,
      f
    );
  }
  f = message.getCreateTime();
  if (f != null) {
    writer.writeMessage(
      15,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getUpdateTime();
  if (f != null) {
    writer.writeMessage(
      16,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional string owner_id = 23;
 * @return {string}
 */
proto.adamant.global.v1.Wallet.prototype.getOwnerId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 23, ""));
};


/** @param {string} value */
proto.adamant.global.v1.Wallet.prototype.setOwnerId = function(value) {
  jspb.Message.setProto3StringField(this, 23, value);
};


/**
 * optional string wallet_id = 1;
 * @return {string}
 */
proto.adamant.global.v1.Wallet.prototype.getWalletId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.adamant.global.v1.Wallet.prototype.setWalletId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.adamant.global.v1.Wallet.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.adamant.global.v1.Wallet.prototype.setName = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional gincoinc.global.v1.Coin coin = 3;
 * @return {!proto.gincoinc.global.v1.Coin}
 */
proto.adamant.global.v1.Wallet.prototype.getCoin = function() {
  return /** @type {!proto.gincoinc.global.v1.Coin} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {!proto.gincoinc.global.v1.Coin} value */
proto.adamant.global.v1.Wallet.prototype.setCoin = function(value) {
  jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional uint32 hd_account = 17;
 * @return {number}
 */
proto.adamant.global.v1.Wallet.prototype.getHdAccount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 17, 0));
};


/** @param {number} value */
proto.adamant.global.v1.Wallet.prototype.setHdAccount = function(value) {
  jspb.Message.setProto3IntField(this, 17, value);
};


/**
 * optional WalletType wallet_type = 4;
 * @return {!proto.adamant.global.v1.WalletType}
 */
proto.adamant.global.v1.Wallet.prototype.getWalletType = function() {
  return /** @type {!proto.adamant.global.v1.WalletType} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {!proto.adamant.global.v1.WalletType} value */
proto.adamant.global.v1.Wallet.prototype.setWalletType = function(value) {
  jspb.Message.setProto3EnumField(this, 4, value);
};


/**
 * optional gincoinc.global.v1.AddressType address_type = 5;
 * @return {!proto.gincoinc.global.v1.AddressType}
 */
proto.adamant.global.v1.Wallet.prototype.getAddressType = function() {
  return /** @type {!proto.gincoinc.global.v1.AddressType} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/** @param {!proto.gincoinc.global.v1.AddressType} value */
proto.adamant.global.v1.Wallet.prototype.setAddressType = function(value) {
  jspb.Message.setProto3EnumField(this, 5, value);
};


/**
 * optional uint32 m = 6;
 * @return {number}
 */
proto.adamant.global.v1.Wallet.prototype.getM = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/** @param {number} value */
proto.adamant.global.v1.Wallet.prototype.setM = function(value) {
  jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional uint32 n = 7;
 * @return {number}
 */
proto.adamant.global.v1.Wallet.prototype.getN = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/** @param {number} value */
proto.adamant.global.v1.Wallet.prototype.setN = function(value) {
  jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional WalletState state = 8;
 * @return {!proto.adamant.global.v1.WalletState}
 */
proto.adamant.global.v1.Wallet.prototype.getState = function() {
  return /** @type {!proto.adamant.global.v1.WalletState} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/** @param {!proto.adamant.global.v1.WalletState} value */
proto.adamant.global.v1.Wallet.prototype.setState = function(value) {
  jspb.Message.setProto3EnumField(this, 8, value);
};


/**
 * repeated Key keys = 9;
 * @return {!Array<!proto.adamant.global.v1.Key>}
 */
proto.adamant.global.v1.Wallet.prototype.getKeysList = function() {
  return /** @type{!Array<!proto.adamant.global.v1.Key>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.adamant.global.v1.Key, 9));
};


/** @param {!Array<!proto.adamant.global.v1.Key>} value */
proto.adamant.global.v1.Wallet.prototype.setKeysList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 9, value);
};


/**
 * @param {!proto.adamant.global.v1.Key=} opt_value
 * @param {number=} opt_index
 * @return {!proto.adamant.global.v1.Key}
 */
proto.adamant.global.v1.Wallet.prototype.addKeys = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 9, opt_value, proto.adamant.global.v1.Key, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.adamant.global.v1.Wallet.prototype.clearKeysList = function() {
  this.setKeysList([]);
};


/**
 * repeated WalletMember members = 10;
 * @return {!Array<!proto.adamant.global.v1.WalletMember>}
 */
proto.adamant.global.v1.Wallet.prototype.getMembersList = function() {
  return /** @type{!Array<!proto.adamant.global.v1.WalletMember>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.adamant.global.v1.WalletMember, 10));
};


/** @param {!Array<!proto.adamant.global.v1.WalletMember>} value */
proto.adamant.global.v1.Wallet.prototype.setMembersList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 10, value);
};


/**
 * @param {!proto.adamant.global.v1.WalletMember=} opt_value
 * @param {number=} opt_index
 * @return {!proto.adamant.global.v1.WalletMember}
 */
proto.adamant.global.v1.Wallet.prototype.addMembers = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 10, opt_value, proto.adamant.global.v1.WalletMember, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.adamant.global.v1.Wallet.prototype.clearMembersList = function() {
  this.setMembersList([]);
};


/**
 * optional uint32 required_approval_count = 20;
 * @return {number}
 */
proto.adamant.global.v1.Wallet.prototype.getRequiredApprovalCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 20, 0));
};


/** @param {number} value */
proto.adamant.global.v1.Wallet.prototype.setRequiredApprovalCount = function(value) {
  jspb.Message.setProto3IntField(this, 20, value);
};


/**
 * optional double balance = 11;
 * @return {number}
 */
proto.adamant.global.v1.Wallet.prototype.getBalance = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 11, 0.0));
};


/** @param {number} value */
proto.adamant.global.v1.Wallet.prototype.setBalance = function(value) {
  jspb.Message.setProto3FloatField(this, 11, value);
};


/**
 * optional string string_balance = 12;
 * @return {string}
 */
proto.adamant.global.v1.Wallet.prototype.getStringBalance = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/** @param {string} value */
proto.adamant.global.v1.Wallet.prototype.setStringBalance = function(value) {
  jspb.Message.setProto3StringField(this, 12, value);
};


/**
 * optional string address = 13;
 * @return {string}
 */
proto.adamant.global.v1.Wallet.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 13, ""));
};


/** @param {string} value */
proto.adamant.global.v1.Wallet.prototype.setAddress = function(value) {
  jspb.Message.setProto3StringField(this, 13, value);
};


/**
 * optional string policy_id = 14;
 * @return {string}
 */
proto.adamant.global.v1.Wallet.prototype.getPolicyId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 14, ""));
};


/** @param {string} value */
proto.adamant.global.v1.Wallet.prototype.setPolicyId = function(value) {
  jspb.Message.setProto3StringField(this, 14, value);
};


/**
 * optional WalletProposal proposal = 18;
 * @return {?proto.adamant.global.v1.WalletProposal}
 */
proto.adamant.global.v1.Wallet.prototype.getProposal = function() {
  return /** @type{?proto.adamant.global.v1.WalletProposal} */ (
    jspb.Message.getWrapperField(this, proto.adamant.global.v1.WalletProposal, 18));
};


/** @param {?proto.adamant.global.v1.WalletProposal|undefined} value */
proto.adamant.global.v1.Wallet.prototype.setProposal = function(value) {
  jspb.Message.setWrapperField(this, 18, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.adamant.global.v1.Wallet.prototype.clearProposal = function() {
  this.setProposal(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.adamant.global.v1.Wallet.prototype.hasProposal = function() {
  return jspb.Message.getField(this, 18) != null;
};


/**
 * optional string destination_wallet_id = 19;
 * @return {string}
 */
proto.adamant.global.v1.Wallet.prototype.getDestinationWalletId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 19, ""));
};


/** @param {string} value */
proto.adamant.global.v1.Wallet.prototype.setDestinationWalletId = function(value) {
  jspb.Message.setProto3StringField(this, 19, value);
};


/**
 * optional bool watch_only = 21;
 * @return {boolean}
 */
proto.adamant.global.v1.Wallet.prototype.getWatchOnly = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 21, false));
};


/** @param {boolean} value */
proto.adamant.global.v1.Wallet.prototype.setWatchOnly = function(value) {
  jspb.Message.setProto3BooleanField(this, 21, value);
};


/**
 * optional uint32 address_number = 22;
 * @return {number}
 */
proto.adamant.global.v1.Wallet.prototype.getAddressNumber = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 22, 0));
};


/** @param {number} value */
proto.adamant.global.v1.Wallet.prototype.setAddressNumber = function(value) {
  jspb.Message.setProto3IntField(this, 22, value);
};


/**
 * optional google.protobuf.Timestamp create_time = 15;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.adamant.global.v1.Wallet.prototype.getCreateTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 15));
};


/** @param {?proto.google.protobuf.Timestamp|undefined} value */
proto.adamant.global.v1.Wallet.prototype.setCreateTime = function(value) {
  jspb.Message.setWrapperField(this, 15, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.adamant.global.v1.Wallet.prototype.clearCreateTime = function() {
  this.setCreateTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.adamant.global.v1.Wallet.prototype.hasCreateTime = function() {
  return jspb.Message.getField(this, 15) != null;
};


/**
 * optional google.protobuf.Timestamp update_time = 16;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.adamant.global.v1.Wallet.prototype.getUpdateTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 16));
};


/** @param {?proto.google.protobuf.Timestamp|undefined} value */
proto.adamant.global.v1.Wallet.prototype.setUpdateTime = function(value) {
  jspb.Message.setWrapperField(this, 16, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.adamant.global.v1.Wallet.prototype.clearUpdateTime = function() {
  this.setUpdateTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.adamant.global.v1.Wallet.prototype.hasUpdateTime = function() {
  return jspb.Message.getField(this, 16) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.adamant.global.v1.WalletWithoutBalance.repeatedFields_ = [10,11];



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
proto.adamant.global.v1.WalletWithoutBalance.prototype.toObject = function(opt_includeInstance) {
  return proto.adamant.global.v1.WalletWithoutBalance.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.adamant.global.v1.WalletWithoutBalance} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.WalletWithoutBalance.toObject = function(includeInstance, msg) {
  var f, obj = {
    ownerId: jspb.Message.getFieldWithDefault(msg, 20, ""),
    walletId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    coin: jspb.Message.getFieldWithDefault(msg, 3, 0),
    hdAccount: jspb.Message.getFieldWithDefault(msg, 4, 0),
    walletType: jspb.Message.getFieldWithDefault(msg, 5, 0),
    addressType: jspb.Message.getFieldWithDefault(msg, 6, 0),
    m: jspb.Message.getFieldWithDefault(msg, 7, 0),
    n: jspb.Message.getFieldWithDefault(msg, 8, 0),
    state: jspb.Message.getFieldWithDefault(msg, 9, 0),
    keysList: jspb.Message.toObjectList(msg.getKeysList(),
    proto.adamant.global.v1.Key.toObject, includeInstance),
    membersList: jspb.Message.toObjectList(msg.getMembersList(),
    proto.adamant.global.v1.WalletMember.toObject, includeInstance),
    requiredApprovalCount: jspb.Message.getFieldWithDefault(msg, 12, 0),
    address: jspb.Message.getFieldWithDefault(msg, 13, ""),
    policyId: jspb.Message.getFieldWithDefault(msg, 14, ""),
    proposal: (f = msg.getProposal()) && proto.adamant.global.v1.WalletProposal.toObject(includeInstance, f),
    destinationWalletId: jspb.Message.getFieldWithDefault(msg, 16, ""),
    watchOnly: jspb.Message.getBooleanFieldWithDefault(msg, 19, false),
    createTime: (f = msg.getCreateTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    updateTime: (f = msg.getUpdateTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
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
 * @return {!proto.adamant.global.v1.WalletWithoutBalance}
 */
proto.adamant.global.v1.WalletWithoutBalance.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.adamant.global.v1.WalletWithoutBalance;
  return proto.adamant.global.v1.WalletWithoutBalance.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.adamant.global.v1.WalletWithoutBalance} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.adamant.global.v1.WalletWithoutBalance}
 */
proto.adamant.global.v1.WalletWithoutBalance.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 20:
      var value = /** @type {string} */ (reader.readString());
      msg.setOwnerId(value);
      break;
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setWalletId(value);
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
      var value = /** @type {number} */ (reader.readUint32());
      msg.setHdAccount(value);
      break;
    case 5:
      var value = /** @type {!proto.adamant.global.v1.WalletType} */ (reader.readEnum());
      msg.setWalletType(value);
      break;
    case 6:
      var value = /** @type {!proto.gincoinc.global.v1.AddressType} */ (reader.readEnum());
      msg.setAddressType(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setM(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setN(value);
      break;
    case 9:
      var value = /** @type {!proto.adamant.global.v1.WalletState} */ (reader.readEnum());
      msg.setState(value);
      break;
    case 10:
      var value = new proto.adamant.global.v1.Key;
      reader.readMessage(value,proto.adamant.global.v1.Key.deserializeBinaryFromReader);
      msg.addKeys(value);
      break;
    case 11:
      var value = new proto.adamant.global.v1.WalletMember;
      reader.readMessage(value,proto.adamant.global.v1.WalletMember.deserializeBinaryFromReader);
      msg.addMembers(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setRequiredApprovalCount(value);
      break;
    case 13:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress(value);
      break;
    case 14:
      var value = /** @type {string} */ (reader.readString());
      msg.setPolicyId(value);
      break;
    case 15:
      var value = new proto.adamant.global.v1.WalletProposal;
      reader.readMessage(value,proto.adamant.global.v1.WalletProposal.deserializeBinaryFromReader);
      msg.setProposal(value);
      break;
    case 16:
      var value = /** @type {string} */ (reader.readString());
      msg.setDestinationWalletId(value);
      break;
    case 19:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setWatchOnly(value);
      break;
    case 17:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreateTime(value);
      break;
    case 18:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setUpdateTime(value);
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
proto.adamant.global.v1.WalletWithoutBalance.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.adamant.global.v1.WalletWithoutBalance.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.adamant.global.v1.WalletWithoutBalance} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.WalletWithoutBalance.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOwnerId();
  if (f.length > 0) {
    writer.writeString(
      20,
      f
    );
  }
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
  f = message.getCoin();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getHdAccount();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
  f = message.getWalletType();
  if (f !== 0.0) {
    writer.writeEnum(
      5,
      f
    );
  }
  f = message.getAddressType();
  if (f !== 0.0) {
    writer.writeEnum(
      6,
      f
    );
  }
  f = message.getM();
  if (f !== 0) {
    writer.writeUint32(
      7,
      f
    );
  }
  f = message.getN();
  if (f !== 0) {
    writer.writeUint32(
      8,
      f
    );
  }
  f = message.getState();
  if (f !== 0.0) {
    writer.writeEnum(
      9,
      f
    );
  }
  f = message.getKeysList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      10,
      f,
      proto.adamant.global.v1.Key.serializeBinaryToWriter
    );
  }
  f = message.getMembersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      11,
      f,
      proto.adamant.global.v1.WalletMember.serializeBinaryToWriter
    );
  }
  f = message.getRequiredApprovalCount();
  if (f !== 0) {
    writer.writeUint32(
      12,
      f
    );
  }
  f = message.getAddress();
  if (f.length > 0) {
    writer.writeString(
      13,
      f
    );
  }
  f = message.getPolicyId();
  if (f.length > 0) {
    writer.writeString(
      14,
      f
    );
  }
  f = message.getProposal();
  if (f != null) {
    writer.writeMessage(
      15,
      f,
      proto.adamant.global.v1.WalletProposal.serializeBinaryToWriter
    );
  }
  f = message.getDestinationWalletId();
  if (f.length > 0) {
    writer.writeString(
      16,
      f
    );
  }
  f = message.getWatchOnly();
  if (f) {
    writer.writeBool(
      19,
      f
    );
  }
  f = message.getCreateTime();
  if (f != null) {
    writer.writeMessage(
      17,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getUpdateTime();
  if (f != null) {
    writer.writeMessage(
      18,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional string owner_id = 20;
 * @return {string}
 */
proto.adamant.global.v1.WalletWithoutBalance.prototype.getOwnerId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 20, ""));
};


/** @param {string} value */
proto.adamant.global.v1.WalletWithoutBalance.prototype.setOwnerId = function(value) {
  jspb.Message.setProto3StringField(this, 20, value);
};


/**
 * optional string wallet_id = 1;
 * @return {string}
 */
proto.adamant.global.v1.WalletWithoutBalance.prototype.getWalletId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.adamant.global.v1.WalletWithoutBalance.prototype.setWalletId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.adamant.global.v1.WalletWithoutBalance.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.adamant.global.v1.WalletWithoutBalance.prototype.setName = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional gincoinc.global.v1.Coin coin = 3;
 * @return {!proto.gincoinc.global.v1.Coin}
 */
proto.adamant.global.v1.WalletWithoutBalance.prototype.getCoin = function() {
  return /** @type {!proto.gincoinc.global.v1.Coin} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {!proto.gincoinc.global.v1.Coin} value */
proto.adamant.global.v1.WalletWithoutBalance.prototype.setCoin = function(value) {
  jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional uint32 hd_account = 4;
 * @return {number}
 */
proto.adamant.global.v1.WalletWithoutBalance.prototype.getHdAccount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.adamant.global.v1.WalletWithoutBalance.prototype.setHdAccount = function(value) {
  jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional WalletType wallet_type = 5;
 * @return {!proto.adamant.global.v1.WalletType}
 */
proto.adamant.global.v1.WalletWithoutBalance.prototype.getWalletType = function() {
  return /** @type {!proto.adamant.global.v1.WalletType} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/** @param {!proto.adamant.global.v1.WalletType} value */
proto.adamant.global.v1.WalletWithoutBalance.prototype.setWalletType = function(value) {
  jspb.Message.setProto3EnumField(this, 5, value);
};


/**
 * optional gincoinc.global.v1.AddressType address_type = 6;
 * @return {!proto.gincoinc.global.v1.AddressType}
 */
proto.adamant.global.v1.WalletWithoutBalance.prototype.getAddressType = function() {
  return /** @type {!proto.gincoinc.global.v1.AddressType} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/** @param {!proto.gincoinc.global.v1.AddressType} value */
proto.adamant.global.v1.WalletWithoutBalance.prototype.setAddressType = function(value) {
  jspb.Message.setProto3EnumField(this, 6, value);
};


/**
 * optional uint32 m = 7;
 * @return {number}
 */
proto.adamant.global.v1.WalletWithoutBalance.prototype.getM = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/** @param {number} value */
proto.adamant.global.v1.WalletWithoutBalance.prototype.setM = function(value) {
  jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional uint32 n = 8;
 * @return {number}
 */
proto.adamant.global.v1.WalletWithoutBalance.prototype.getN = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/** @param {number} value */
proto.adamant.global.v1.WalletWithoutBalance.prototype.setN = function(value) {
  jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * optional WalletState state = 9;
 * @return {!proto.adamant.global.v1.WalletState}
 */
proto.adamant.global.v1.WalletWithoutBalance.prototype.getState = function() {
  return /** @type {!proto.adamant.global.v1.WalletState} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/** @param {!proto.adamant.global.v1.WalletState} value */
proto.adamant.global.v1.WalletWithoutBalance.prototype.setState = function(value) {
  jspb.Message.setProto3EnumField(this, 9, value);
};


/**
 * repeated Key keys = 10;
 * @return {!Array<!proto.adamant.global.v1.Key>}
 */
proto.adamant.global.v1.WalletWithoutBalance.prototype.getKeysList = function() {
  return /** @type{!Array<!proto.adamant.global.v1.Key>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.adamant.global.v1.Key, 10));
};


/** @param {!Array<!proto.adamant.global.v1.Key>} value */
proto.adamant.global.v1.WalletWithoutBalance.prototype.setKeysList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 10, value);
};


/**
 * @param {!proto.adamant.global.v1.Key=} opt_value
 * @param {number=} opt_index
 * @return {!proto.adamant.global.v1.Key}
 */
proto.adamant.global.v1.WalletWithoutBalance.prototype.addKeys = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 10, opt_value, proto.adamant.global.v1.Key, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.adamant.global.v1.WalletWithoutBalance.prototype.clearKeysList = function() {
  this.setKeysList([]);
};


/**
 * repeated WalletMember members = 11;
 * @return {!Array<!proto.adamant.global.v1.WalletMember>}
 */
proto.adamant.global.v1.WalletWithoutBalance.prototype.getMembersList = function() {
  return /** @type{!Array<!proto.adamant.global.v1.WalletMember>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.adamant.global.v1.WalletMember, 11));
};


/** @param {!Array<!proto.adamant.global.v1.WalletMember>} value */
proto.adamant.global.v1.WalletWithoutBalance.prototype.setMembersList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 11, value);
};


/**
 * @param {!proto.adamant.global.v1.WalletMember=} opt_value
 * @param {number=} opt_index
 * @return {!proto.adamant.global.v1.WalletMember}
 */
proto.adamant.global.v1.WalletWithoutBalance.prototype.addMembers = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 11, opt_value, proto.adamant.global.v1.WalletMember, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.adamant.global.v1.WalletWithoutBalance.prototype.clearMembersList = function() {
  this.setMembersList([]);
};


/**
 * optional uint32 required_approval_count = 12;
 * @return {number}
 */
proto.adamant.global.v1.WalletWithoutBalance.prototype.getRequiredApprovalCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/** @param {number} value */
proto.adamant.global.v1.WalletWithoutBalance.prototype.setRequiredApprovalCount = function(value) {
  jspb.Message.setProto3IntField(this, 12, value);
};


/**
 * optional string address = 13;
 * @return {string}
 */
proto.adamant.global.v1.WalletWithoutBalance.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 13, ""));
};


/** @param {string} value */
proto.adamant.global.v1.WalletWithoutBalance.prototype.setAddress = function(value) {
  jspb.Message.setProto3StringField(this, 13, value);
};


/**
 * optional string policy_id = 14;
 * @return {string}
 */
proto.adamant.global.v1.WalletWithoutBalance.prototype.getPolicyId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 14, ""));
};


/** @param {string} value */
proto.adamant.global.v1.WalletWithoutBalance.prototype.setPolicyId = function(value) {
  jspb.Message.setProto3StringField(this, 14, value);
};


/**
 * optional WalletProposal proposal = 15;
 * @return {?proto.adamant.global.v1.WalletProposal}
 */
proto.adamant.global.v1.WalletWithoutBalance.prototype.getProposal = function() {
  return /** @type{?proto.adamant.global.v1.WalletProposal} */ (
    jspb.Message.getWrapperField(this, proto.adamant.global.v1.WalletProposal, 15));
};


/** @param {?proto.adamant.global.v1.WalletProposal|undefined} value */
proto.adamant.global.v1.WalletWithoutBalance.prototype.setProposal = function(value) {
  jspb.Message.setWrapperField(this, 15, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.adamant.global.v1.WalletWithoutBalance.prototype.clearProposal = function() {
  this.setProposal(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.adamant.global.v1.WalletWithoutBalance.prototype.hasProposal = function() {
  return jspb.Message.getField(this, 15) != null;
};


/**
 * optional string destination_wallet_id = 16;
 * @return {string}
 */
proto.adamant.global.v1.WalletWithoutBalance.prototype.getDestinationWalletId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 16, ""));
};


/** @param {string} value */
proto.adamant.global.v1.WalletWithoutBalance.prototype.setDestinationWalletId = function(value) {
  jspb.Message.setProto3StringField(this, 16, value);
};


/**
 * optional bool watch_only = 19;
 * @return {boolean}
 */
proto.adamant.global.v1.WalletWithoutBalance.prototype.getWatchOnly = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 19, false));
};


/** @param {boolean} value */
proto.adamant.global.v1.WalletWithoutBalance.prototype.setWatchOnly = function(value) {
  jspb.Message.setProto3BooleanField(this, 19, value);
};


/**
 * optional google.protobuf.Timestamp create_time = 17;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.adamant.global.v1.WalletWithoutBalance.prototype.getCreateTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 17));
};


/** @param {?proto.google.protobuf.Timestamp|undefined} value */
proto.adamant.global.v1.WalletWithoutBalance.prototype.setCreateTime = function(value) {
  jspb.Message.setWrapperField(this, 17, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.adamant.global.v1.WalletWithoutBalance.prototype.clearCreateTime = function() {
  this.setCreateTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.adamant.global.v1.WalletWithoutBalance.prototype.hasCreateTime = function() {
  return jspb.Message.getField(this, 17) != null;
};


/**
 * optional google.protobuf.Timestamp update_time = 18;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.adamant.global.v1.WalletWithoutBalance.prototype.getUpdateTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 18));
};


/** @param {?proto.google.protobuf.Timestamp|undefined} value */
proto.adamant.global.v1.WalletWithoutBalance.prototype.setUpdateTime = function(value) {
  jspb.Message.setWrapperField(this, 18, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.adamant.global.v1.WalletWithoutBalance.prototype.clearUpdateTime = function() {
  this.setUpdateTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.adamant.global.v1.WalletWithoutBalance.prototype.hasUpdateTime = function() {
  return jspb.Message.getField(this, 18) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.adamant.global.v1.WalletProposal.repeatedFields_ = [8];



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
proto.adamant.global.v1.WalletProposal.prototype.toObject = function(opt_includeInstance) {
  return proto.adamant.global.v1.WalletProposal.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.adamant.global.v1.WalletProposal} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.WalletProposal.toObject = function(includeInstance, msg) {
  var f, obj = {
    proposalType: jspb.Message.getFieldWithDefault(msg, 7, 0),
    requesterAccountId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    requesterName: jspb.Message.getFieldWithDefault(msg, 2, ""),
    approverAccountId: jspb.Message.getFieldWithDefault(msg, 3, ""),
    approverName: jspb.Message.getFieldWithDefault(msg, 4, ""),
    proposedPolicy: jspb.Message.getFieldWithDefault(msg, 5, ""),
    proposedValidatorsList: (f = jspb.Message.getRepeatedField(msg, 8)) == null ? undefined : f,
    proposedRequiredApprovalCount: jspb.Message.getFieldWithDefault(msg, 9, 0),
    isReviewed: jspb.Message.getBooleanFieldWithDefault(msg, 6, false)
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
 * @return {!proto.adamant.global.v1.WalletProposal}
 */
proto.adamant.global.v1.WalletProposal.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.adamant.global.v1.WalletProposal;
  return proto.adamant.global.v1.WalletProposal.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.adamant.global.v1.WalletProposal} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.adamant.global.v1.WalletProposal}
 */
proto.adamant.global.v1.WalletProposal.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 7:
      var value = /** @type {!proto.adamant.global.v1.WalletProposalType} */ (reader.readEnum());
      msg.setProposalType(value);
      break;
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setRequesterAccountId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setRequesterName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setApproverAccountId(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setApproverName(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setProposedPolicy(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.addProposedValidators(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setProposedRequiredApprovalCount(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsReviewed(value);
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
proto.adamant.global.v1.WalletProposal.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.adamant.global.v1.WalletProposal.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.adamant.global.v1.WalletProposal} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.WalletProposal.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProposalType();
  if (f !== 0.0) {
    writer.writeEnum(
      7,
      f
    );
  }
  f = message.getRequesterAccountId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getRequesterName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getApproverAccountId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getApproverName();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getProposedPolicy();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getProposedValidatorsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      8,
      f
    );
  }
  f = message.getProposedRequiredApprovalCount();
  if (f !== 0) {
    writer.writeUint32(
      9,
      f
    );
  }
  f = message.getIsReviewed();
  if (f) {
    writer.writeBool(
      6,
      f
    );
  }
};


/**
 * optional WalletProposalType proposal_type = 7;
 * @return {!proto.adamant.global.v1.WalletProposalType}
 */
proto.adamant.global.v1.WalletProposal.prototype.getProposalType = function() {
  return /** @type {!proto.adamant.global.v1.WalletProposalType} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/** @param {!proto.adamant.global.v1.WalletProposalType} value */
proto.adamant.global.v1.WalletProposal.prototype.setProposalType = function(value) {
  jspb.Message.setProto3EnumField(this, 7, value);
};


/**
 * optional string requester_account_id = 1;
 * @return {string}
 */
proto.adamant.global.v1.WalletProposal.prototype.getRequesterAccountId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.adamant.global.v1.WalletProposal.prototype.setRequesterAccountId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string requester_name = 2;
 * @return {string}
 */
proto.adamant.global.v1.WalletProposal.prototype.getRequesterName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.adamant.global.v1.WalletProposal.prototype.setRequesterName = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string approver_account_id = 3;
 * @return {string}
 */
proto.adamant.global.v1.WalletProposal.prototype.getApproverAccountId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.adamant.global.v1.WalletProposal.prototype.setApproverAccountId = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string approver_name = 4;
 * @return {string}
 */
proto.adamant.global.v1.WalletProposal.prototype.getApproverName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.adamant.global.v1.WalletProposal.prototype.setApproverName = function(value) {
  jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string proposed_policy = 5;
 * @return {string}
 */
proto.adamant.global.v1.WalletProposal.prototype.getProposedPolicy = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/** @param {string} value */
proto.adamant.global.v1.WalletProposal.prototype.setProposedPolicy = function(value) {
  jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * repeated string proposed_validators = 8;
 * @return {!Array<string>}
 */
proto.adamant.global.v1.WalletProposal.prototype.getProposedValidatorsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 8));
};


/** @param {!Array<string>} value */
proto.adamant.global.v1.WalletProposal.prototype.setProposedValidatorsList = function(value) {
  jspb.Message.setField(this, 8, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 */
proto.adamant.global.v1.WalletProposal.prototype.addProposedValidators = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 8, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.adamant.global.v1.WalletProposal.prototype.clearProposedValidatorsList = function() {
  this.setProposedValidatorsList([]);
};


/**
 * optional uint32 proposed_required_approval_count = 9;
 * @return {number}
 */
proto.adamant.global.v1.WalletProposal.prototype.getProposedRequiredApprovalCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/** @param {number} value */
proto.adamant.global.v1.WalletProposal.prototype.setProposedRequiredApprovalCount = function(value) {
  jspb.Message.setProto3IntField(this, 9, value);
};


/**
 * optional bool is_reviewed = 6;
 * @return {boolean}
 */
proto.adamant.global.v1.WalletProposal.prototype.getIsReviewed = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/** @param {boolean} value */
proto.adamant.global.v1.WalletProposal.prototype.setIsReviewed = function(value) {
  jspb.Message.setProto3BooleanField(this, 6, value);
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
proto.adamant.global.v1.WalletMember.prototype.toObject = function(opt_includeInstance) {
  return proto.adamant.global.v1.WalletMember.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.adamant.global.v1.WalletMember} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.WalletMember.toObject = function(includeInstance, msg) {
  var f, obj = {
    accountId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    accountType: jspb.Message.getFieldWithDefault(msg, 2, 0),
    name: jspb.Message.getFieldWithDefault(msg, 3, ""),
    email: jspb.Message.getFieldWithDefault(msg, 4, ""),
    role: jspb.Message.getFieldWithDefault(msg, 5, 0),
    isKeyRegistered: jspb.Message.getBooleanFieldWithDefault(msg, 6, false),
    isMaster: jspb.Message.getBooleanFieldWithDefault(msg, 7, false),
    isValidatedToCreateWallet: jspb.Message.getBooleanFieldWithDefault(msg, 8, false)
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
 * @return {!proto.adamant.global.v1.WalletMember}
 */
proto.adamant.global.v1.WalletMember.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.adamant.global.v1.WalletMember;
  return proto.adamant.global.v1.WalletMember.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.adamant.global.v1.WalletMember} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.adamant.global.v1.WalletMember}
 */
proto.adamant.global.v1.WalletMember.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAccountId(value);
      break;
    case 2:
      var value = /** @type {!proto.adamant.global.v1.AccountType} */ (reader.readEnum());
      msg.setAccountType(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setEmail(value);
      break;
    case 5:
      var value = /** @type {!proto.adamant.global.v1.RoleType} */ (reader.readEnum());
      msg.setRole(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsKeyRegistered(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsMaster(value);
      break;
    case 8:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsValidatedToCreateWallet(value);
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
proto.adamant.global.v1.WalletMember.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.adamant.global.v1.WalletMember.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.adamant.global.v1.WalletMember} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.WalletMember.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAccountId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAccountType();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getEmail();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getRole();
  if (f !== 0.0) {
    writer.writeEnum(
      5,
      f
    );
  }
  f = message.getIsKeyRegistered();
  if (f) {
    writer.writeBool(
      6,
      f
    );
  }
  f = message.getIsMaster();
  if (f) {
    writer.writeBool(
      7,
      f
    );
  }
  f = message.getIsValidatedToCreateWallet();
  if (f) {
    writer.writeBool(
      8,
      f
    );
  }
};


/**
 * optional string account_id = 1;
 * @return {string}
 */
proto.adamant.global.v1.WalletMember.prototype.getAccountId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.adamant.global.v1.WalletMember.prototype.setAccountId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional AccountType account_type = 2;
 * @return {!proto.adamant.global.v1.AccountType}
 */
proto.adamant.global.v1.WalletMember.prototype.getAccountType = function() {
  return /** @type {!proto.adamant.global.v1.AccountType} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {!proto.adamant.global.v1.AccountType} value */
proto.adamant.global.v1.WalletMember.prototype.setAccountType = function(value) {
  jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional string name = 3;
 * @return {string}
 */
proto.adamant.global.v1.WalletMember.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.adamant.global.v1.WalletMember.prototype.setName = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string email = 4;
 * @return {string}
 */
proto.adamant.global.v1.WalletMember.prototype.getEmail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.adamant.global.v1.WalletMember.prototype.setEmail = function(value) {
  jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional RoleType role = 5;
 * @return {!proto.adamant.global.v1.RoleType}
 */
proto.adamant.global.v1.WalletMember.prototype.getRole = function() {
  return /** @type {!proto.adamant.global.v1.RoleType} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/** @param {!proto.adamant.global.v1.RoleType} value */
proto.adamant.global.v1.WalletMember.prototype.setRole = function(value) {
  jspb.Message.setProto3EnumField(this, 5, value);
};


/**
 * optional bool is_key_registered = 6;
 * @return {boolean}
 */
proto.adamant.global.v1.WalletMember.prototype.getIsKeyRegistered = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/** @param {boolean} value */
proto.adamant.global.v1.WalletMember.prototype.setIsKeyRegistered = function(value) {
  jspb.Message.setProto3BooleanField(this, 6, value);
};


/**
 * optional bool is_master = 7;
 * @return {boolean}
 */
proto.adamant.global.v1.WalletMember.prototype.getIsMaster = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 7, false));
};


/** @param {boolean} value */
proto.adamant.global.v1.WalletMember.prototype.setIsMaster = function(value) {
  jspb.Message.setProto3BooleanField(this, 7, value);
};


/**
 * optional bool is_validated_to_create_wallet = 8;
 * @return {boolean}
 */
proto.adamant.global.v1.WalletMember.prototype.getIsValidatedToCreateWallet = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 8, false));
};


/** @param {boolean} value */
proto.adamant.global.v1.WalletMember.prototype.setIsValidatedToCreateWallet = function(value) {
  jspb.Message.setProto3BooleanField(this, 8, value);
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
proto.adamant.global.v1.Key.prototype.toObject = function(opt_includeInstance) {
  return proto.adamant.global.v1.Key.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.adamant.global.v1.Key} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.Key.toObject = function(includeInstance, msg) {
  var f, obj = {
    walletId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    accountId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    accountType: jspb.Message.getFieldWithDefault(msg, 3, 0),
    keyId: jspb.Message.getFieldWithDefault(msg, 4, ""),
    keyIndex: jspb.Message.getFieldWithDefault(msg, 5, 0)
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
 * @return {!proto.adamant.global.v1.Key}
 */
proto.adamant.global.v1.Key.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.adamant.global.v1.Key;
  return proto.adamant.global.v1.Key.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.adamant.global.v1.Key} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.adamant.global.v1.Key}
 */
proto.adamant.global.v1.Key.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setAccountId(value);
      break;
    case 3:
      var value = /** @type {!proto.adamant.global.v1.AccountType} */ (reader.readEnum());
      msg.setAccountType(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setKeyId(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setKeyIndex(value);
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
proto.adamant.global.v1.Key.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.adamant.global.v1.Key.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.adamant.global.v1.Key} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.Key.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getWalletId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAccountId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getAccountType();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getKeyId();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getKeyIndex();
  if (f !== 0) {
    writer.writeUint32(
      5,
      f
    );
  }
};


/**
 * optional string wallet_id = 1;
 * @return {string}
 */
proto.adamant.global.v1.Key.prototype.getWalletId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.adamant.global.v1.Key.prototype.setWalletId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string account_id = 2;
 * @return {string}
 */
proto.adamant.global.v1.Key.prototype.getAccountId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.adamant.global.v1.Key.prototype.setAccountId = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional AccountType account_type = 3;
 * @return {!proto.adamant.global.v1.AccountType}
 */
proto.adamant.global.v1.Key.prototype.getAccountType = function() {
  return /** @type {!proto.adamant.global.v1.AccountType} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {!proto.adamant.global.v1.AccountType} value */
proto.adamant.global.v1.Key.prototype.setAccountType = function(value) {
  jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional string key_id = 4;
 * @return {string}
 */
proto.adamant.global.v1.Key.prototype.getKeyId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.adamant.global.v1.Key.prototype.setKeyId = function(value) {
  jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional uint32 key_index = 5;
 * @return {number}
 */
proto.adamant.global.v1.Key.prototype.getKeyIndex = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/** @param {number} value */
proto.adamant.global.v1.Key.prototype.setKeyIndex = function(value) {
  jspb.Message.setProto3IntField(this, 5, value);
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
proto.adamant.global.v1.Address.prototype.toObject = function(opt_includeInstance) {
  return proto.adamant.global.v1.Address.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.adamant.global.v1.Address} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.Address.toObject = function(includeInstance, msg) {
  var f, obj = {
    walletId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    addressId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    coin: jspb.Message.getFieldWithDefault(msg, 3, 0),
    address: jspb.Message.getFieldWithDefault(msg, 4, ""),
    index: jspb.Message.getFieldWithDefault(msg, 5, 0),
    hdChange: jspb.Message.getFieldWithDefault(msg, 13, 0),
    balance: jspb.Message.getFloatingPointFieldWithDefault(msg, 6, 0.0),
    stringBalance: jspb.Message.getFieldWithDefault(msg, 7, ""),
    state: jspb.Message.getFieldWithDefault(msg, 8, 0),
    addressType: jspb.Message.getFieldWithDefault(msg, 9, 0),
    createTime: (f = msg.getCreateTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    updateTime: (f = msg.getUpdateTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
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
 * @return {!proto.adamant.global.v1.Address}
 */
proto.adamant.global.v1.Address.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.adamant.global.v1.Address;
  return proto.adamant.global.v1.Address.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.adamant.global.v1.Address} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.adamant.global.v1.Address}
 */
proto.adamant.global.v1.Address.deserializeBinaryFromReader = function(msg, reader) {
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
    case 3:
      var value = /** @type {!proto.gincoinc.global.v1.Coin} */ (reader.readEnum());
      msg.setCoin(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setIndex(value);
      break;
    case 13:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setHdChange(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setBalance(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setStringBalance(value);
      break;
    case 8:
      var value = /** @type {!proto.adamant.global.v1.AddressState} */ (reader.readEnum());
      msg.setState(value);
      break;
    case 9:
      var value = /** @type {!proto.gincoinc.global.v1.AddressType} */ (reader.readEnum());
      msg.setAddressType(value);
      break;
    case 11:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreateTime(value);
      break;
    case 12:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setUpdateTime(value);
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
proto.adamant.global.v1.Address.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.adamant.global.v1.Address.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.adamant.global.v1.Address} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.Address.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getIndex();
  if (f !== 0) {
    writer.writeUint32(
      5,
      f
    );
  }
  f = message.getHdChange();
  if (f !== 0) {
    writer.writeUint32(
      13,
      f
    );
  }
  f = message.getBalance();
  if (f !== 0.0) {
    writer.writeDouble(
      6,
      f
    );
  }
  f = message.getStringBalance();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getState();
  if (f !== 0.0) {
    writer.writeEnum(
      8,
      f
    );
  }
  f = message.getAddressType();
  if (f !== 0.0) {
    writer.writeEnum(
      9,
      f
    );
  }
  f = message.getCreateTime();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getUpdateTime();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional string wallet_id = 1;
 * @return {string}
 */
proto.adamant.global.v1.Address.prototype.getWalletId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.adamant.global.v1.Address.prototype.setWalletId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string address_id = 2;
 * @return {string}
 */
proto.adamant.global.v1.Address.prototype.getAddressId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.adamant.global.v1.Address.prototype.setAddressId = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional gincoinc.global.v1.Coin coin = 3;
 * @return {!proto.gincoinc.global.v1.Coin}
 */
proto.adamant.global.v1.Address.prototype.getCoin = function() {
  return /** @type {!proto.gincoinc.global.v1.Coin} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {!proto.gincoinc.global.v1.Coin} value */
proto.adamant.global.v1.Address.prototype.setCoin = function(value) {
  jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional string address = 4;
 * @return {string}
 */
proto.adamant.global.v1.Address.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.adamant.global.v1.Address.prototype.setAddress = function(value) {
  jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional uint32 index = 5;
 * @return {number}
 */
proto.adamant.global.v1.Address.prototype.getIndex = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/** @param {number} value */
proto.adamant.global.v1.Address.prototype.setIndex = function(value) {
  jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional uint32 hd_change = 13;
 * @return {number}
 */
proto.adamant.global.v1.Address.prototype.getHdChange = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 13, 0));
};


/** @param {number} value */
proto.adamant.global.v1.Address.prototype.setHdChange = function(value) {
  jspb.Message.setProto3IntField(this, 13, value);
};


/**
 * optional double balance = 6;
 * @return {number}
 */
proto.adamant.global.v1.Address.prototype.getBalance = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 6, 0.0));
};


/** @param {number} value */
proto.adamant.global.v1.Address.prototype.setBalance = function(value) {
  jspb.Message.setProto3FloatField(this, 6, value);
};


/**
 * optional string string_balance = 7;
 * @return {string}
 */
proto.adamant.global.v1.Address.prototype.getStringBalance = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/** @param {string} value */
proto.adamant.global.v1.Address.prototype.setStringBalance = function(value) {
  jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional AddressState state = 8;
 * @return {!proto.adamant.global.v1.AddressState}
 */
proto.adamant.global.v1.Address.prototype.getState = function() {
  return /** @type {!proto.adamant.global.v1.AddressState} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/** @param {!proto.adamant.global.v1.AddressState} value */
proto.adamant.global.v1.Address.prototype.setState = function(value) {
  jspb.Message.setProto3EnumField(this, 8, value);
};


/**
 * optional gincoinc.global.v1.AddressType address_type = 9;
 * @return {!proto.gincoinc.global.v1.AddressType}
 */
proto.adamant.global.v1.Address.prototype.getAddressType = function() {
  return /** @type {!proto.gincoinc.global.v1.AddressType} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/** @param {!proto.gincoinc.global.v1.AddressType} value */
proto.adamant.global.v1.Address.prototype.setAddressType = function(value) {
  jspb.Message.setProto3EnumField(this, 9, value);
};


/**
 * optional google.protobuf.Timestamp create_time = 11;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.adamant.global.v1.Address.prototype.getCreateTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 11));
};


/** @param {?proto.google.protobuf.Timestamp|undefined} value */
proto.adamant.global.v1.Address.prototype.setCreateTime = function(value) {
  jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.adamant.global.v1.Address.prototype.clearCreateTime = function() {
  this.setCreateTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.adamant.global.v1.Address.prototype.hasCreateTime = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional google.protobuf.Timestamp update_time = 12;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.adamant.global.v1.Address.prototype.getUpdateTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 12));
};


/** @param {?proto.google.protobuf.Timestamp|undefined} value */
proto.adamant.global.v1.Address.prototype.setUpdateTime = function(value) {
  jspb.Message.setWrapperField(this, 12, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.adamant.global.v1.Address.prototype.clearUpdateTime = function() {
  this.setUpdateTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.adamant.global.v1.Address.prototype.hasUpdateTime = function() {
  return jspb.Message.getField(this, 12) != null;
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
proto.adamant.global.v1.AddressWithoutBalance.prototype.toObject = function(opt_includeInstance) {
  return proto.adamant.global.v1.AddressWithoutBalance.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.adamant.global.v1.AddressWithoutBalance} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.AddressWithoutBalance.toObject = function(includeInstance, msg) {
  var f, obj = {
    walletId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    addressId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    coin: jspb.Message.getFieldWithDefault(msg, 3, 0),
    address: jspb.Message.getFieldWithDefault(msg, 4, ""),
    index: jspb.Message.getFieldWithDefault(msg, 5, 0),
    hdChange: jspb.Message.getFieldWithDefault(msg, 10, 0),
    state: jspb.Message.getFieldWithDefault(msg, 6, 0),
    addressType: jspb.Message.getFieldWithDefault(msg, 7, 0),
    createTime: (f = msg.getCreateTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    updateTime: (f = msg.getUpdateTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
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
 * @return {!proto.adamant.global.v1.AddressWithoutBalance}
 */
proto.adamant.global.v1.AddressWithoutBalance.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.adamant.global.v1.AddressWithoutBalance;
  return proto.adamant.global.v1.AddressWithoutBalance.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.adamant.global.v1.AddressWithoutBalance} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.adamant.global.v1.AddressWithoutBalance}
 */
proto.adamant.global.v1.AddressWithoutBalance.deserializeBinaryFromReader = function(msg, reader) {
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
    case 3:
      var value = /** @type {!proto.gincoinc.global.v1.Coin} */ (reader.readEnum());
      msg.setCoin(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setIndex(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setHdChange(value);
      break;
    case 6:
      var value = /** @type {!proto.adamant.global.v1.AddressState} */ (reader.readEnum());
      msg.setState(value);
      break;
    case 7:
      var value = /** @type {!proto.gincoinc.global.v1.AddressType} */ (reader.readEnum());
      msg.setAddressType(value);
      break;
    case 8:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreateTime(value);
      break;
    case 9:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setUpdateTime(value);
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
proto.adamant.global.v1.AddressWithoutBalance.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.adamant.global.v1.AddressWithoutBalance.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.adamant.global.v1.AddressWithoutBalance} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.AddressWithoutBalance.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getIndex();
  if (f !== 0) {
    writer.writeUint32(
      5,
      f
    );
  }
  f = message.getHdChange();
  if (f !== 0) {
    writer.writeUint32(
      10,
      f
    );
  }
  f = message.getState();
  if (f !== 0.0) {
    writer.writeEnum(
      6,
      f
    );
  }
  f = message.getAddressType();
  if (f !== 0.0) {
    writer.writeEnum(
      7,
      f
    );
  }
  f = message.getCreateTime();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getUpdateTime();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional string wallet_id = 1;
 * @return {string}
 */
proto.adamant.global.v1.AddressWithoutBalance.prototype.getWalletId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.adamant.global.v1.AddressWithoutBalance.prototype.setWalletId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string address_id = 2;
 * @return {string}
 */
proto.adamant.global.v1.AddressWithoutBalance.prototype.getAddressId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.adamant.global.v1.AddressWithoutBalance.prototype.setAddressId = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional gincoinc.global.v1.Coin coin = 3;
 * @return {!proto.gincoinc.global.v1.Coin}
 */
proto.adamant.global.v1.AddressWithoutBalance.prototype.getCoin = function() {
  return /** @type {!proto.gincoinc.global.v1.Coin} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {!proto.gincoinc.global.v1.Coin} value */
proto.adamant.global.v1.AddressWithoutBalance.prototype.setCoin = function(value) {
  jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional string address = 4;
 * @return {string}
 */
proto.adamant.global.v1.AddressWithoutBalance.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.adamant.global.v1.AddressWithoutBalance.prototype.setAddress = function(value) {
  jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional uint32 index = 5;
 * @return {number}
 */
proto.adamant.global.v1.AddressWithoutBalance.prototype.getIndex = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/** @param {number} value */
proto.adamant.global.v1.AddressWithoutBalance.prototype.setIndex = function(value) {
  jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional uint32 hd_change = 10;
 * @return {number}
 */
proto.adamant.global.v1.AddressWithoutBalance.prototype.getHdChange = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/** @param {number} value */
proto.adamant.global.v1.AddressWithoutBalance.prototype.setHdChange = function(value) {
  jspb.Message.setProto3IntField(this, 10, value);
};


/**
 * optional AddressState state = 6;
 * @return {!proto.adamant.global.v1.AddressState}
 */
proto.adamant.global.v1.AddressWithoutBalance.prototype.getState = function() {
  return /** @type {!proto.adamant.global.v1.AddressState} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/** @param {!proto.adamant.global.v1.AddressState} value */
proto.adamant.global.v1.AddressWithoutBalance.prototype.setState = function(value) {
  jspb.Message.setProto3EnumField(this, 6, value);
};


/**
 * optional gincoinc.global.v1.AddressType address_type = 7;
 * @return {!proto.gincoinc.global.v1.AddressType}
 */
proto.adamant.global.v1.AddressWithoutBalance.prototype.getAddressType = function() {
  return /** @type {!proto.gincoinc.global.v1.AddressType} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/** @param {!proto.gincoinc.global.v1.AddressType} value */
proto.adamant.global.v1.AddressWithoutBalance.prototype.setAddressType = function(value) {
  jspb.Message.setProto3EnumField(this, 7, value);
};


/**
 * optional google.protobuf.Timestamp create_time = 8;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.adamant.global.v1.AddressWithoutBalance.prototype.getCreateTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 8));
};


/** @param {?proto.google.protobuf.Timestamp|undefined} value */
proto.adamant.global.v1.AddressWithoutBalance.prototype.setCreateTime = function(value) {
  jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.adamant.global.v1.AddressWithoutBalance.prototype.clearCreateTime = function() {
  this.setCreateTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.adamant.global.v1.AddressWithoutBalance.prototype.hasCreateTime = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional google.protobuf.Timestamp update_time = 9;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.adamant.global.v1.AddressWithoutBalance.prototype.getUpdateTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 9));
};


/** @param {?proto.google.protobuf.Timestamp|undefined} value */
proto.adamant.global.v1.AddressWithoutBalance.prototype.setUpdateTime = function(value) {
  jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.adamant.global.v1.AddressWithoutBalance.prototype.clearUpdateTime = function() {
  this.setUpdateTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.adamant.global.v1.AddressWithoutBalance.prototype.hasUpdateTime = function() {
  return jspb.Message.getField(this, 9) != null;
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
proto.adamant.global.v1.FlushedAddress.prototype.toObject = function(opt_includeInstance) {
  return proto.adamant.global.v1.FlushedAddress.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.adamant.global.v1.FlushedAddress} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.FlushedAddress.toObject = function(includeInstance, msg) {
  var f, obj = {
    walletId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    addressId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    coin: jspb.Message.getFieldWithDefault(msg, 3, 0),
    address: jspb.Message.getFieldWithDefault(msg, 4, ""),
    index: jspb.Message.getFieldWithDefault(msg, 5, 0),
    value: jspb.Message.getFloatingPointFieldWithDefault(msg, 6, 0.0),
    stringValue: jspb.Message.getFieldWithDefault(msg, 7, ""),
    state: jspb.Message.getFieldWithDefault(msg, 9, 0),
    addressType: jspb.Message.getFieldWithDefault(msg, 10, 0)
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
 * @return {!proto.adamant.global.v1.FlushedAddress}
 */
proto.adamant.global.v1.FlushedAddress.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.adamant.global.v1.FlushedAddress;
  return proto.adamant.global.v1.FlushedAddress.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.adamant.global.v1.FlushedAddress} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.adamant.global.v1.FlushedAddress}
 */
proto.adamant.global.v1.FlushedAddress.deserializeBinaryFromReader = function(msg, reader) {
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
    case 3:
      var value = /** @type {!proto.gincoinc.global.v1.Coin} */ (reader.readEnum());
      msg.setCoin(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setIndex(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setValue(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setStringValue(value);
      break;
    case 9:
      var value = /** @type {!proto.adamant.global.v1.AddressState} */ (reader.readEnum());
      msg.setState(value);
      break;
    case 10:
      var value = /** @type {!proto.gincoinc.global.v1.AddressType} */ (reader.readEnum());
      msg.setAddressType(value);
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
proto.adamant.global.v1.FlushedAddress.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.adamant.global.v1.FlushedAddress.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.adamant.global.v1.FlushedAddress} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.FlushedAddress.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getIndex();
  if (f !== 0) {
    writer.writeUint32(
      5,
      f
    );
  }
  f = message.getValue();
  if (f !== 0.0) {
    writer.writeDouble(
      6,
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
  f = message.getState();
  if (f !== 0.0) {
    writer.writeEnum(
      9,
      f
    );
  }
  f = message.getAddressType();
  if (f !== 0.0) {
    writer.writeEnum(
      10,
      f
    );
  }
};


/**
 * optional string wallet_id = 1;
 * @return {string}
 */
proto.adamant.global.v1.FlushedAddress.prototype.getWalletId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.adamant.global.v1.FlushedAddress.prototype.setWalletId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string address_id = 2;
 * @return {string}
 */
proto.adamant.global.v1.FlushedAddress.prototype.getAddressId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.adamant.global.v1.FlushedAddress.prototype.setAddressId = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional gincoinc.global.v1.Coin coin = 3;
 * @return {!proto.gincoinc.global.v1.Coin}
 */
proto.adamant.global.v1.FlushedAddress.prototype.getCoin = function() {
  return /** @type {!proto.gincoinc.global.v1.Coin} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {!proto.gincoinc.global.v1.Coin} value */
proto.adamant.global.v1.FlushedAddress.prototype.setCoin = function(value) {
  jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional string address = 4;
 * @return {string}
 */
proto.adamant.global.v1.FlushedAddress.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.adamant.global.v1.FlushedAddress.prototype.setAddress = function(value) {
  jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional uint32 index = 5;
 * @return {number}
 */
proto.adamant.global.v1.FlushedAddress.prototype.getIndex = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/** @param {number} value */
proto.adamant.global.v1.FlushedAddress.prototype.setIndex = function(value) {
  jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional double value = 6;
 * @return {number}
 */
proto.adamant.global.v1.FlushedAddress.prototype.getValue = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 6, 0.0));
};


/** @param {number} value */
proto.adamant.global.v1.FlushedAddress.prototype.setValue = function(value) {
  jspb.Message.setProto3FloatField(this, 6, value);
};


/**
 * optional string string_value = 7;
 * @return {string}
 */
proto.adamant.global.v1.FlushedAddress.prototype.getStringValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/** @param {string} value */
proto.adamant.global.v1.FlushedAddress.prototype.setStringValue = function(value) {
  jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional AddressState state = 9;
 * @return {!proto.adamant.global.v1.AddressState}
 */
proto.adamant.global.v1.FlushedAddress.prototype.getState = function() {
  return /** @type {!proto.adamant.global.v1.AddressState} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/** @param {!proto.adamant.global.v1.AddressState} value */
proto.adamant.global.v1.FlushedAddress.prototype.setState = function(value) {
  jspb.Message.setProto3EnumField(this, 9, value);
};


/**
 * optional gincoinc.global.v1.AddressType address_type = 10;
 * @return {!proto.gincoinc.global.v1.AddressType}
 */
proto.adamant.global.v1.FlushedAddress.prototype.getAddressType = function() {
  return /** @type {!proto.gincoinc.global.v1.AddressType} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/** @param {!proto.gincoinc.global.v1.AddressType} value */
proto.adamant.global.v1.FlushedAddress.prototype.setAddressType = function(value) {
  jspb.Message.setProto3EnumField(this, 10, value);
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
proto.adamant.global.v1.EthereumFeeAddress.prototype.toObject = function(opt_includeInstance) {
  return proto.adamant.global.v1.EthereumFeeAddress.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.adamant.global.v1.EthereumFeeAddress} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.EthereumFeeAddress.toObject = function(includeInstance, msg) {
  var f, obj = {
    address: jspb.Message.getFieldWithDefault(msg, 1, ""),
    balance: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
    stringBalance: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.adamant.global.v1.EthereumFeeAddress}
 */
proto.adamant.global.v1.EthereumFeeAddress.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.adamant.global.v1.EthereumFeeAddress;
  return proto.adamant.global.v1.EthereumFeeAddress.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.adamant.global.v1.EthereumFeeAddress} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.adamant.global.v1.EthereumFeeAddress}
 */
proto.adamant.global.v1.EthereumFeeAddress.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setBalance(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setStringBalance(value);
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
proto.adamant.global.v1.EthereumFeeAddress.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.adamant.global.v1.EthereumFeeAddress.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.adamant.global.v1.EthereumFeeAddress} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.EthereumFeeAddress.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddress();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getBalance();
  if (f !== 0.0) {
    writer.writeDouble(
      2,
      f
    );
  }
  f = message.getStringBalance();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string address = 1;
 * @return {string}
 */
proto.adamant.global.v1.EthereumFeeAddress.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.adamant.global.v1.EthereumFeeAddress.prototype.setAddress = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional double balance = 2;
 * @return {number}
 */
proto.adamant.global.v1.EthereumFeeAddress.prototype.getBalance = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/** @param {number} value */
proto.adamant.global.v1.EthereumFeeAddress.prototype.setBalance = function(value) {
  jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional string string_balance = 3;
 * @return {string}
 */
proto.adamant.global.v1.EthereumFeeAddress.prototype.getStringBalance = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.adamant.global.v1.EthereumFeeAddress.prototype.setStringBalance = function(value) {
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
proto.adamant.global.v1.AddressWithBalance.prototype.toObject = function(opt_includeInstance) {
  return proto.adamant.global.v1.AddressWithBalance.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.adamant.global.v1.AddressWithBalance} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.AddressWithBalance.toObject = function(includeInstance, msg) {
  var f, obj = {
    address: jspb.Message.getFieldWithDefault(msg, 1, ""),
    balance: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
    stringBalance: jspb.Message.getFieldWithDefault(msg, 3, ""),
    feeBalance: jspb.Message.getFloatingPointFieldWithDefault(msg, 4, 0.0),
    stringFeeBalance: jspb.Message.getFieldWithDefault(msg, 5, "")
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
 * @return {!proto.adamant.global.v1.AddressWithBalance}
 */
proto.adamant.global.v1.AddressWithBalance.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.adamant.global.v1.AddressWithBalance;
  return proto.adamant.global.v1.AddressWithBalance.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.adamant.global.v1.AddressWithBalance} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.adamant.global.v1.AddressWithBalance}
 */
proto.adamant.global.v1.AddressWithBalance.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setBalance(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setStringBalance(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setFeeBalance(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setStringFeeBalance(value);
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
proto.adamant.global.v1.AddressWithBalance.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.adamant.global.v1.AddressWithBalance.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.adamant.global.v1.AddressWithBalance} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.AddressWithBalance.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddress();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getBalance();
  if (f !== 0.0) {
    writer.writeDouble(
      2,
      f
    );
  }
  f = message.getStringBalance();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getFeeBalance();
  if (f !== 0.0) {
    writer.writeDouble(
      4,
      f
    );
  }
  f = message.getStringFeeBalance();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional string address = 1;
 * @return {string}
 */
proto.adamant.global.v1.AddressWithBalance.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.adamant.global.v1.AddressWithBalance.prototype.setAddress = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional double balance = 2;
 * @return {number}
 */
proto.adamant.global.v1.AddressWithBalance.prototype.getBalance = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/** @param {number} value */
proto.adamant.global.v1.AddressWithBalance.prototype.setBalance = function(value) {
  jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional string string_balance = 3;
 * @return {string}
 */
proto.adamant.global.v1.AddressWithBalance.prototype.getStringBalance = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.adamant.global.v1.AddressWithBalance.prototype.setStringBalance = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional double fee_balance = 4;
 * @return {number}
 */
proto.adamant.global.v1.AddressWithBalance.prototype.getFeeBalance = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/** @param {number} value */
proto.adamant.global.v1.AddressWithBalance.prototype.setFeeBalance = function(value) {
  jspb.Message.setProto3FloatField(this, 4, value);
};


/**
 * optional string string_fee_balance = 5;
 * @return {string}
 */
proto.adamant.global.v1.AddressWithBalance.prototype.getStringFeeBalance = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/** @param {string} value */
proto.adamant.global.v1.AddressWithBalance.prototype.setStringFeeBalance = function(value) {
  jspb.Message.setProto3StringField(this, 5, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.adamant.global.v1.Transaction.repeatedFields_ = [14,17];



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
proto.adamant.global.v1.Transaction.prototype.toObject = function(opt_includeInstance) {
  return proto.adamant.global.v1.Transaction.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.adamant.global.v1.Transaction} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.Transaction.toObject = function(includeInstance, msg) {
  var f, obj = {
    walletId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    transactionId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    coin: jspb.Message.getFieldWithDefault(msg, 3, 0),
    txId: jspb.Message.getFieldWithDefault(msg, 4, ""),
    address: jspb.Message.getFieldWithDefault(msg, 5, ""),
    value: jspb.Message.getFloatingPointFieldWithDefault(msg, 6, 0.0),
    stringValue: jspb.Message.getFieldWithDefault(msg, 7, ""),
    jpyRate: jspb.Message.getFloatingPointFieldWithDefault(msg, 9, 0.0),
    fee: jspb.Message.getFloatingPointFieldWithDefault(msg, 10, 0.0),
    stringFee: jspb.Message.getFieldWithDefault(msg, 11, ""),
    feeRate: jspb.Message.getFieldWithDefault(msg, 12, 0),
    state: jspb.Message.getFieldWithDefault(msg, 13, 0),
    signedKeysList: jspb.Message.toObjectList(msg.getSignedKeysList(),
    proto.adamant.global.v1.Key.toObject, includeInstance),
    membersList: jspb.Message.toObjectList(msg.getMembersList(),
    proto.adamant.global.v1.TransactionMember.toObject, includeInstance),
    bitcoinSpecific: (f = msg.getBitcoinSpecific()) && proto.adamant.global.v1.BitcoinSpecific.toObject(includeInstance, f),
    ethereumSpecific: (f = msg.getEthereumSpecific()) && proto.adamant.global.v1.EthereumSpecific.toObject(includeInstance, f),
    litecoinSpecific: (f = msg.getLitecoinSpecific()) && proto.adamant.global.v1.LitecoinSpecific.toObject(includeInstance, f),
    bitcoincashSpecific: (f = msg.getBitcoincashSpecific()) && proto.adamant.global.v1.BitcoincashSpecific.toObject(includeInstance, f),
    xrpSpecific: (f = msg.getXrpSpecific()) && proto.adamant.global.v1.XrpSpecific.toObject(includeInstance, f),
    tronSpecific: (f = msg.getTronSpecific()) && proto.adamant.global.v1.TronSpecific.toObject(includeInstance, f),
    c0banSpecific: (f = msg.getC0banSpecific()) && proto.adamant.global.v1.C0banSpecific.toObject(includeInstance, f),
    createTime: (f = msg.getCreateTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    updateTime: (f = msg.getUpdateTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
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
 * @return {!proto.adamant.global.v1.Transaction}
 */
proto.adamant.global.v1.Transaction.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.adamant.global.v1.Transaction;
  return proto.adamant.global.v1.Transaction.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.adamant.global.v1.Transaction} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.adamant.global.v1.Transaction}
 */
proto.adamant.global.v1.Transaction.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {!proto.gincoinc.global.v1.Coin} */ (reader.readEnum());
      msg.setCoin(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setTxId(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setValue(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setStringValue(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setJpyRate(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setFee(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setStringFee(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setFeeRate(value);
      break;
    case 13:
      var value = /** @type {!proto.adamant.global.v1.TransactionState} */ (reader.readEnum());
      msg.setState(value);
      break;
    case 14:
      var value = new proto.adamant.global.v1.Key;
      reader.readMessage(value,proto.adamant.global.v1.Key.deserializeBinaryFromReader);
      msg.addSignedKeys(value);
      break;
    case 17:
      var value = new proto.adamant.global.v1.TransactionMember;
      reader.readMessage(value,proto.adamant.global.v1.TransactionMember.deserializeBinaryFromReader);
      msg.addMembers(value);
      break;
    case 22:
      var value = new proto.adamant.global.v1.BitcoinSpecific;
      reader.readMessage(value,proto.adamant.global.v1.BitcoinSpecific.deserializeBinaryFromReader);
      msg.setBitcoinSpecific(value);
      break;
    case 20:
      var value = new proto.adamant.global.v1.EthereumSpecific;
      reader.readMessage(value,proto.adamant.global.v1.EthereumSpecific.deserializeBinaryFromReader);
      msg.setEthereumSpecific(value);
      break;
    case 23:
      var value = new proto.adamant.global.v1.LitecoinSpecific;
      reader.readMessage(value,proto.adamant.global.v1.LitecoinSpecific.deserializeBinaryFromReader);
      msg.setLitecoinSpecific(value);
      break;
    case 24:
      var value = new proto.adamant.global.v1.BitcoincashSpecific;
      reader.readMessage(value,proto.adamant.global.v1.BitcoincashSpecific.deserializeBinaryFromReader);
      msg.setBitcoincashSpecific(value);
      break;
    case 21:
      var value = new proto.adamant.global.v1.XrpSpecific;
      reader.readMessage(value,proto.adamant.global.v1.XrpSpecific.deserializeBinaryFromReader);
      msg.setXrpSpecific(value);
      break;
    case 25:
      var value = new proto.adamant.global.v1.TronSpecific;
      reader.readMessage(value,proto.adamant.global.v1.TronSpecific.deserializeBinaryFromReader);
      msg.setTronSpecific(value);
      break;
    case 26:
      var value = new proto.adamant.global.v1.C0banSpecific;
      reader.readMessage(value,proto.adamant.global.v1.C0banSpecific.deserializeBinaryFromReader);
      msg.setC0banSpecific(value);
      break;
    case 18:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreateTime(value);
      break;
    case 19:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setUpdateTime(value);
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
proto.adamant.global.v1.Transaction.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.adamant.global.v1.Transaction.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.adamant.global.v1.Transaction} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.Transaction.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getCoin();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getTxId();
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
  f = message.getValue();
  if (f !== 0.0) {
    writer.writeDouble(
      6,
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
  f = message.getJpyRate();
  if (f !== 0.0) {
    writer.writeDouble(
      9,
      f
    );
  }
  f = message.getFee();
  if (f !== 0.0) {
    writer.writeDouble(
      10,
      f
    );
  }
  f = message.getStringFee();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getFeeRate();
  if (f !== 0) {
    writer.writeUint64(
      12,
      f
    );
  }
  f = message.getState();
  if (f !== 0.0) {
    writer.writeEnum(
      13,
      f
    );
  }
  f = message.getSignedKeysList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      14,
      f,
      proto.adamant.global.v1.Key.serializeBinaryToWriter
    );
  }
  f = message.getMembersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      17,
      f,
      proto.adamant.global.v1.TransactionMember.serializeBinaryToWriter
    );
  }
  f = message.getBitcoinSpecific();
  if (f != null) {
    writer.writeMessage(
      22,
      f,
      proto.adamant.global.v1.BitcoinSpecific.serializeBinaryToWriter
    );
  }
  f = message.getEthereumSpecific();
  if (f != null) {
    writer.writeMessage(
      20,
      f,
      proto.adamant.global.v1.EthereumSpecific.serializeBinaryToWriter
    );
  }
  f = message.getLitecoinSpecific();
  if (f != null) {
    writer.writeMessage(
      23,
      f,
      proto.adamant.global.v1.LitecoinSpecific.serializeBinaryToWriter
    );
  }
  f = message.getBitcoincashSpecific();
  if (f != null) {
    writer.writeMessage(
      24,
      f,
      proto.adamant.global.v1.BitcoincashSpecific.serializeBinaryToWriter
    );
  }
  f = message.getXrpSpecific();
  if (f != null) {
    writer.writeMessage(
      21,
      f,
      proto.adamant.global.v1.XrpSpecific.serializeBinaryToWriter
    );
  }
  f = message.getTronSpecific();
  if (f != null) {
    writer.writeMessage(
      25,
      f,
      proto.adamant.global.v1.TronSpecific.serializeBinaryToWriter
    );
  }
  f = message.getC0banSpecific();
  if (f != null) {
    writer.writeMessage(
      26,
      f,
      proto.adamant.global.v1.C0banSpecific.serializeBinaryToWriter
    );
  }
  f = message.getCreateTime();
  if (f != null) {
    writer.writeMessage(
      18,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getUpdateTime();
  if (f != null) {
    writer.writeMessage(
      19,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional string wallet_id = 1;
 * @return {string}
 */
proto.adamant.global.v1.Transaction.prototype.getWalletId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.adamant.global.v1.Transaction.prototype.setWalletId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string transaction_id = 2;
 * @return {string}
 */
proto.adamant.global.v1.Transaction.prototype.getTransactionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.adamant.global.v1.Transaction.prototype.setTransactionId = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional gincoinc.global.v1.Coin coin = 3;
 * @return {!proto.gincoinc.global.v1.Coin}
 */
proto.adamant.global.v1.Transaction.prototype.getCoin = function() {
  return /** @type {!proto.gincoinc.global.v1.Coin} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {!proto.gincoinc.global.v1.Coin} value */
proto.adamant.global.v1.Transaction.prototype.setCoin = function(value) {
  jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional string tx_id = 4;
 * @return {string}
 */
proto.adamant.global.v1.Transaction.prototype.getTxId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.adamant.global.v1.Transaction.prototype.setTxId = function(value) {
  jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string address = 5;
 * @return {string}
 */
proto.adamant.global.v1.Transaction.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/** @param {string} value */
proto.adamant.global.v1.Transaction.prototype.setAddress = function(value) {
  jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional double value = 6;
 * @return {number}
 */
proto.adamant.global.v1.Transaction.prototype.getValue = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 6, 0.0));
};


/** @param {number} value */
proto.adamant.global.v1.Transaction.prototype.setValue = function(value) {
  jspb.Message.setProto3FloatField(this, 6, value);
};


/**
 * optional string string_value = 7;
 * @return {string}
 */
proto.adamant.global.v1.Transaction.prototype.getStringValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/** @param {string} value */
proto.adamant.global.v1.Transaction.prototype.setStringValue = function(value) {
  jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional double jpy_rate = 9;
 * @return {number}
 */
proto.adamant.global.v1.Transaction.prototype.getJpyRate = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 9, 0.0));
};


/** @param {number} value */
proto.adamant.global.v1.Transaction.prototype.setJpyRate = function(value) {
  jspb.Message.setProto3FloatField(this, 9, value);
};


/**
 * optional double fee = 10;
 * @return {number}
 */
proto.adamant.global.v1.Transaction.prototype.getFee = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 10, 0.0));
};


/** @param {number} value */
proto.adamant.global.v1.Transaction.prototype.setFee = function(value) {
  jspb.Message.setProto3FloatField(this, 10, value);
};


/**
 * optional string string_fee = 11;
 * @return {string}
 */
proto.adamant.global.v1.Transaction.prototype.getStringFee = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/** @param {string} value */
proto.adamant.global.v1.Transaction.prototype.setStringFee = function(value) {
  jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional uint64 fee_rate = 12;
 * @return {number}
 */
proto.adamant.global.v1.Transaction.prototype.getFeeRate = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/** @param {number} value */
proto.adamant.global.v1.Transaction.prototype.setFeeRate = function(value) {
  jspb.Message.setProto3IntField(this, 12, value);
};


/**
 * optional TransactionState state = 13;
 * @return {!proto.adamant.global.v1.TransactionState}
 */
proto.adamant.global.v1.Transaction.prototype.getState = function() {
  return /** @type {!proto.adamant.global.v1.TransactionState} */ (jspb.Message.getFieldWithDefault(this, 13, 0));
};


/** @param {!proto.adamant.global.v1.TransactionState} value */
proto.adamant.global.v1.Transaction.prototype.setState = function(value) {
  jspb.Message.setProto3EnumField(this, 13, value);
};


/**
 * repeated Key signed_keys = 14;
 * @return {!Array<!proto.adamant.global.v1.Key>}
 */
proto.adamant.global.v1.Transaction.prototype.getSignedKeysList = function() {
  return /** @type{!Array<!proto.adamant.global.v1.Key>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.adamant.global.v1.Key, 14));
};


/** @param {!Array<!proto.adamant.global.v1.Key>} value */
proto.adamant.global.v1.Transaction.prototype.setSignedKeysList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 14, value);
};


/**
 * @param {!proto.adamant.global.v1.Key=} opt_value
 * @param {number=} opt_index
 * @return {!proto.adamant.global.v1.Key}
 */
proto.adamant.global.v1.Transaction.prototype.addSignedKeys = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 14, opt_value, proto.adamant.global.v1.Key, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.adamant.global.v1.Transaction.prototype.clearSignedKeysList = function() {
  this.setSignedKeysList([]);
};


/**
 * repeated TransactionMember members = 17;
 * @return {!Array<!proto.adamant.global.v1.TransactionMember>}
 */
proto.adamant.global.v1.Transaction.prototype.getMembersList = function() {
  return /** @type{!Array<!proto.adamant.global.v1.TransactionMember>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.adamant.global.v1.TransactionMember, 17));
};


/** @param {!Array<!proto.adamant.global.v1.TransactionMember>} value */
proto.adamant.global.v1.Transaction.prototype.setMembersList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 17, value);
};


/**
 * @param {!proto.adamant.global.v1.TransactionMember=} opt_value
 * @param {number=} opt_index
 * @return {!proto.adamant.global.v1.TransactionMember}
 */
proto.adamant.global.v1.Transaction.prototype.addMembers = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 17, opt_value, proto.adamant.global.v1.TransactionMember, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.adamant.global.v1.Transaction.prototype.clearMembersList = function() {
  this.setMembersList([]);
};


/**
 * optional BitcoinSpecific bitcoin_specific = 22;
 * @return {?proto.adamant.global.v1.BitcoinSpecific}
 */
proto.adamant.global.v1.Transaction.prototype.getBitcoinSpecific = function() {
  return /** @type{?proto.adamant.global.v1.BitcoinSpecific} */ (
    jspb.Message.getWrapperField(this, proto.adamant.global.v1.BitcoinSpecific, 22));
};


/** @param {?proto.adamant.global.v1.BitcoinSpecific|undefined} value */
proto.adamant.global.v1.Transaction.prototype.setBitcoinSpecific = function(value) {
  jspb.Message.setWrapperField(this, 22, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.adamant.global.v1.Transaction.prototype.clearBitcoinSpecific = function() {
  this.setBitcoinSpecific(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.adamant.global.v1.Transaction.prototype.hasBitcoinSpecific = function() {
  return jspb.Message.getField(this, 22) != null;
};


/**
 * optional EthereumSpecific ethereum_specific = 20;
 * @return {?proto.adamant.global.v1.EthereumSpecific}
 */
proto.adamant.global.v1.Transaction.prototype.getEthereumSpecific = function() {
  return /** @type{?proto.adamant.global.v1.EthereumSpecific} */ (
    jspb.Message.getWrapperField(this, proto.adamant.global.v1.EthereumSpecific, 20));
};


/** @param {?proto.adamant.global.v1.EthereumSpecific|undefined} value */
proto.adamant.global.v1.Transaction.prototype.setEthereumSpecific = function(value) {
  jspb.Message.setWrapperField(this, 20, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.adamant.global.v1.Transaction.prototype.clearEthereumSpecific = function() {
  this.setEthereumSpecific(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.adamant.global.v1.Transaction.prototype.hasEthereumSpecific = function() {
  return jspb.Message.getField(this, 20) != null;
};


/**
 * optional LitecoinSpecific litecoin_specific = 23;
 * @return {?proto.adamant.global.v1.LitecoinSpecific}
 */
proto.adamant.global.v1.Transaction.prototype.getLitecoinSpecific = function() {
  return /** @type{?proto.adamant.global.v1.LitecoinSpecific} */ (
    jspb.Message.getWrapperField(this, proto.adamant.global.v1.LitecoinSpecific, 23));
};


/** @param {?proto.adamant.global.v1.LitecoinSpecific|undefined} value */
proto.adamant.global.v1.Transaction.prototype.setLitecoinSpecific = function(value) {
  jspb.Message.setWrapperField(this, 23, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.adamant.global.v1.Transaction.prototype.clearLitecoinSpecific = function() {
  this.setLitecoinSpecific(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.adamant.global.v1.Transaction.prototype.hasLitecoinSpecific = function() {
  return jspb.Message.getField(this, 23) != null;
};


/**
 * optional BitcoincashSpecific bitcoincash_specific = 24;
 * @return {?proto.adamant.global.v1.BitcoincashSpecific}
 */
proto.adamant.global.v1.Transaction.prototype.getBitcoincashSpecific = function() {
  return /** @type{?proto.adamant.global.v1.BitcoincashSpecific} */ (
    jspb.Message.getWrapperField(this, proto.adamant.global.v1.BitcoincashSpecific, 24));
};


/** @param {?proto.adamant.global.v1.BitcoincashSpecific|undefined} value */
proto.adamant.global.v1.Transaction.prototype.setBitcoincashSpecific = function(value) {
  jspb.Message.setWrapperField(this, 24, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.adamant.global.v1.Transaction.prototype.clearBitcoincashSpecific = function() {
  this.setBitcoincashSpecific(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.adamant.global.v1.Transaction.prototype.hasBitcoincashSpecific = function() {
  return jspb.Message.getField(this, 24) != null;
};


/**
 * optional XrpSpecific xrp_specific = 21;
 * @return {?proto.adamant.global.v1.XrpSpecific}
 */
proto.adamant.global.v1.Transaction.prototype.getXrpSpecific = function() {
  return /** @type{?proto.adamant.global.v1.XrpSpecific} */ (
    jspb.Message.getWrapperField(this, proto.adamant.global.v1.XrpSpecific, 21));
};


/** @param {?proto.adamant.global.v1.XrpSpecific|undefined} value */
proto.adamant.global.v1.Transaction.prototype.setXrpSpecific = function(value) {
  jspb.Message.setWrapperField(this, 21, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.adamant.global.v1.Transaction.prototype.clearXrpSpecific = function() {
  this.setXrpSpecific(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.adamant.global.v1.Transaction.prototype.hasXrpSpecific = function() {
  return jspb.Message.getField(this, 21) != null;
};


/**
 * optional TronSpecific tron_specific = 25;
 * @return {?proto.adamant.global.v1.TronSpecific}
 */
proto.adamant.global.v1.Transaction.prototype.getTronSpecific = function() {
  return /** @type{?proto.adamant.global.v1.TronSpecific} */ (
    jspb.Message.getWrapperField(this, proto.adamant.global.v1.TronSpecific, 25));
};


/** @param {?proto.adamant.global.v1.TronSpecific|undefined} value */
proto.adamant.global.v1.Transaction.prototype.setTronSpecific = function(value) {
  jspb.Message.setWrapperField(this, 25, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.adamant.global.v1.Transaction.prototype.clearTronSpecific = function() {
  this.setTronSpecific(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.adamant.global.v1.Transaction.prototype.hasTronSpecific = function() {
  return jspb.Message.getField(this, 25) != null;
};


/**
 * optional C0banSpecific c0ban_specific = 26;
 * @return {?proto.adamant.global.v1.C0banSpecific}
 */
proto.adamant.global.v1.Transaction.prototype.getC0banSpecific = function() {
  return /** @type{?proto.adamant.global.v1.C0banSpecific} */ (
    jspb.Message.getWrapperField(this, proto.adamant.global.v1.C0banSpecific, 26));
};


/** @param {?proto.adamant.global.v1.C0banSpecific|undefined} value */
proto.adamant.global.v1.Transaction.prototype.setC0banSpecific = function(value) {
  jspb.Message.setWrapperField(this, 26, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.adamant.global.v1.Transaction.prototype.clearC0banSpecific = function() {
  this.setC0banSpecific(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.adamant.global.v1.Transaction.prototype.hasC0banSpecific = function() {
  return jspb.Message.getField(this, 26) != null;
};


/**
 * optional google.protobuf.Timestamp create_time = 18;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.adamant.global.v1.Transaction.prototype.getCreateTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 18));
};


/** @param {?proto.google.protobuf.Timestamp|undefined} value */
proto.adamant.global.v1.Transaction.prototype.setCreateTime = function(value) {
  jspb.Message.setWrapperField(this, 18, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.adamant.global.v1.Transaction.prototype.clearCreateTime = function() {
  this.setCreateTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.adamant.global.v1.Transaction.prototype.hasCreateTime = function() {
  return jspb.Message.getField(this, 18) != null;
};


/**
 * optional google.protobuf.Timestamp update_time = 19;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.adamant.global.v1.Transaction.prototype.getUpdateTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 19));
};


/** @param {?proto.google.protobuf.Timestamp|undefined} value */
proto.adamant.global.v1.Transaction.prototype.setUpdateTime = function(value) {
  jspb.Message.setWrapperField(this, 19, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.adamant.global.v1.Transaction.prototype.clearUpdateTime = function() {
  this.setUpdateTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.adamant.global.v1.Transaction.prototype.hasUpdateTime = function() {
  return jspb.Message.getField(this, 19) != null;
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
proto.adamant.global.v1.TransactionMember.prototype.toObject = function(opt_includeInstance) {
  return proto.adamant.global.v1.TransactionMember.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.adamant.global.v1.TransactionMember} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.TransactionMember.toObject = function(includeInstance, msg) {
  var f, obj = {
    accountId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    accountType: jspb.Message.getFieldWithDefault(msg, 2, 0),
    name: jspb.Message.getFieldWithDefault(msg, 3, ""),
    email: jspb.Message.getFieldWithDefault(msg, 4, ""),
    role: jspb.Message.getFieldWithDefault(msg, 5, 0),
    signed: jspb.Message.getBooleanFieldWithDefault(msg, 6, false),
    validated: jspb.Message.getBooleanFieldWithDefault(msg, 7, false)
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
 * @return {!proto.adamant.global.v1.TransactionMember}
 */
proto.adamant.global.v1.TransactionMember.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.adamant.global.v1.TransactionMember;
  return proto.adamant.global.v1.TransactionMember.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.adamant.global.v1.TransactionMember} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.adamant.global.v1.TransactionMember}
 */
proto.adamant.global.v1.TransactionMember.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAccountId(value);
      break;
    case 2:
      var value = /** @type {!proto.adamant.global.v1.AccountType} */ (reader.readEnum());
      msg.setAccountType(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setEmail(value);
      break;
    case 5:
      var value = /** @type {!proto.adamant.global.v1.RoleType} */ (reader.readEnum());
      msg.setRole(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSigned(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setValidated(value);
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
proto.adamant.global.v1.TransactionMember.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.adamant.global.v1.TransactionMember.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.adamant.global.v1.TransactionMember} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.TransactionMember.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAccountId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAccountType();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getEmail();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getRole();
  if (f !== 0.0) {
    writer.writeEnum(
      5,
      f
    );
  }
  f = message.getSigned();
  if (f) {
    writer.writeBool(
      6,
      f
    );
  }
  f = message.getValidated();
  if (f) {
    writer.writeBool(
      7,
      f
    );
  }
};


/**
 * optional string account_id = 1;
 * @return {string}
 */
proto.adamant.global.v1.TransactionMember.prototype.getAccountId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.adamant.global.v1.TransactionMember.prototype.setAccountId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional AccountType account_type = 2;
 * @return {!proto.adamant.global.v1.AccountType}
 */
proto.adamant.global.v1.TransactionMember.prototype.getAccountType = function() {
  return /** @type {!proto.adamant.global.v1.AccountType} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {!proto.adamant.global.v1.AccountType} value */
proto.adamant.global.v1.TransactionMember.prototype.setAccountType = function(value) {
  jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional string name = 3;
 * @return {string}
 */
proto.adamant.global.v1.TransactionMember.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.adamant.global.v1.TransactionMember.prototype.setName = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string email = 4;
 * @return {string}
 */
proto.adamant.global.v1.TransactionMember.prototype.getEmail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.adamant.global.v1.TransactionMember.prototype.setEmail = function(value) {
  jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional RoleType role = 5;
 * @return {!proto.adamant.global.v1.RoleType}
 */
proto.adamant.global.v1.TransactionMember.prototype.getRole = function() {
  return /** @type {!proto.adamant.global.v1.RoleType} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/** @param {!proto.adamant.global.v1.RoleType} value */
proto.adamant.global.v1.TransactionMember.prototype.setRole = function(value) {
  jspb.Message.setProto3EnumField(this, 5, value);
};


/**
 * optional bool signed = 6;
 * @return {boolean}
 */
proto.adamant.global.v1.TransactionMember.prototype.getSigned = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/** @param {boolean} value */
proto.adamant.global.v1.TransactionMember.prototype.setSigned = function(value) {
  jspb.Message.setProto3BooleanField(this, 6, value);
};


/**
 * optional bool validated = 7;
 * @return {boolean}
 */
proto.adamant.global.v1.TransactionMember.prototype.getValidated = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 7, false));
};


/** @param {boolean} value */
proto.adamant.global.v1.TransactionMember.prototype.setValidated = function(value) {
  jspb.Message.setProto3BooleanField(this, 7, value);
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
proto.adamant.global.v1.TxInput.prototype.toObject = function(opt_includeInstance) {
  return proto.adamant.global.v1.TxInput.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.adamant.global.v1.TxInput} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.TxInput.toObject = function(includeInstance, msg) {
  var f, obj = {
    txId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    txIndex: jspb.Message.getFieldWithDefault(msg, 2, 0),
    value: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0),
    stringValue: jspb.Message.getFieldWithDefault(msg, 4, "")
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
 * @return {!proto.adamant.global.v1.TxInput}
 */
proto.adamant.global.v1.TxInput.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.adamant.global.v1.TxInput;
  return proto.adamant.global.v1.TxInput.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.adamant.global.v1.TxInput} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.adamant.global.v1.TxInput}
 */
proto.adamant.global.v1.TxInput.deserializeBinaryFromReader = function(msg, reader) {
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
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setTxIndex(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setValue(value);
      break;
    case 4:
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
proto.adamant.global.v1.TxInput.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.adamant.global.v1.TxInput.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.adamant.global.v1.TxInput} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.TxInput.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTxId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTxIndex();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getValue();
  if (f !== 0.0) {
    writer.writeDouble(
      3,
      f
    );
  }
  f = message.getStringValue();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string tx_id = 1;
 * @return {string}
 */
proto.adamant.global.v1.TxInput.prototype.getTxId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.adamant.global.v1.TxInput.prototype.setTxId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional uint32 tx_index = 2;
 * @return {number}
 */
proto.adamant.global.v1.TxInput.prototype.getTxIndex = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.adamant.global.v1.TxInput.prototype.setTxIndex = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional double value = 3;
 * @return {number}
 */
proto.adamant.global.v1.TxInput.prototype.getValue = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/** @param {number} value */
proto.adamant.global.v1.TxInput.prototype.setValue = function(value) {
  jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * optional string string_value = 4;
 * @return {string}
 */
proto.adamant.global.v1.TxInput.prototype.getStringValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.adamant.global.v1.TxInput.prototype.setStringValue = function(value) {
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
proto.adamant.global.v1.TxOutput.prototype.toObject = function(opt_includeInstance) {
  return proto.adamant.global.v1.TxOutput.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.adamant.global.v1.TxOutput} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.TxOutput.toObject = function(includeInstance, msg) {
  var f, obj = {
    address: jspb.Message.getFieldWithDefault(msg, 1, ""),
    value: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
    stringValue: jspb.Message.getFieldWithDefault(msg, 3, ""),
    isChange: jspb.Message.getBooleanFieldWithDefault(msg, 4, false)
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
 * @return {!proto.adamant.global.v1.TxOutput}
 */
proto.adamant.global.v1.TxOutput.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.adamant.global.v1.TxOutput;
  return proto.adamant.global.v1.TxOutput.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.adamant.global.v1.TxOutput} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.adamant.global.v1.TxOutput}
 */
proto.adamant.global.v1.TxOutput.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setValue(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setStringValue(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsChange(value);
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
proto.adamant.global.v1.TxOutput.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.adamant.global.v1.TxOutput.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.adamant.global.v1.TxOutput} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.TxOutput.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddress();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getValue();
  if (f !== 0.0) {
    writer.writeDouble(
      2,
      f
    );
  }
  f = message.getStringValue();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getIsChange();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
};


/**
 * optional string address = 1;
 * @return {string}
 */
proto.adamant.global.v1.TxOutput.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.adamant.global.v1.TxOutput.prototype.setAddress = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional double value = 2;
 * @return {number}
 */
proto.adamant.global.v1.TxOutput.prototype.getValue = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/** @param {number} value */
proto.adamant.global.v1.TxOutput.prototype.setValue = function(value) {
  jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional string string_value = 3;
 * @return {string}
 */
proto.adamant.global.v1.TxOutput.prototype.getStringValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.adamant.global.v1.TxOutput.prototype.setStringValue = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional bool is_change = 4;
 * @return {boolean}
 */
proto.adamant.global.v1.TxOutput.prototype.getIsChange = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/** @param {boolean} value */
proto.adamant.global.v1.TxOutput.prototype.setIsChange = function(value) {
  jspb.Message.setProto3BooleanField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.adamant.global.v1.BitcoinSpecific.repeatedFields_ = [1,2];



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
proto.adamant.global.v1.BitcoinSpecific.prototype.toObject = function(opt_includeInstance) {
  return proto.adamant.global.v1.BitcoinSpecific.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.adamant.global.v1.BitcoinSpecific} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.BitcoinSpecific.toObject = function(includeInstance, msg) {
  var f, obj = {
    txInputsList: jspb.Message.toObjectList(msg.getTxInputsList(),
    proto.adamant.global.v1.TxInput.toObject, includeInstance),
    txOutputsList: jspb.Message.toObjectList(msg.getTxOutputsList(),
    proto.adamant.global.v1.TxOutput.toObject, includeInstance)
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
 * @return {!proto.adamant.global.v1.BitcoinSpecific}
 */
proto.adamant.global.v1.BitcoinSpecific.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.adamant.global.v1.BitcoinSpecific;
  return proto.adamant.global.v1.BitcoinSpecific.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.adamant.global.v1.BitcoinSpecific} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.adamant.global.v1.BitcoinSpecific}
 */
proto.adamant.global.v1.BitcoinSpecific.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.adamant.global.v1.TxInput;
      reader.readMessage(value,proto.adamant.global.v1.TxInput.deserializeBinaryFromReader);
      msg.addTxInputs(value);
      break;
    case 2:
      var value = new proto.adamant.global.v1.TxOutput;
      reader.readMessage(value,proto.adamant.global.v1.TxOutput.deserializeBinaryFromReader);
      msg.addTxOutputs(value);
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
proto.adamant.global.v1.BitcoinSpecific.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.adamant.global.v1.BitcoinSpecific.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.adamant.global.v1.BitcoinSpecific} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.BitcoinSpecific.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTxInputsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.adamant.global.v1.TxInput.serializeBinaryToWriter
    );
  }
  f = message.getTxOutputsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.adamant.global.v1.TxOutput.serializeBinaryToWriter
    );
  }
};


/**
 * repeated TxInput tx_inputs = 1;
 * @return {!Array<!proto.adamant.global.v1.TxInput>}
 */
proto.adamant.global.v1.BitcoinSpecific.prototype.getTxInputsList = function() {
  return /** @type{!Array<!proto.adamant.global.v1.TxInput>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.adamant.global.v1.TxInput, 1));
};


/** @param {!Array<!proto.adamant.global.v1.TxInput>} value */
proto.adamant.global.v1.BitcoinSpecific.prototype.setTxInputsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.adamant.global.v1.TxInput=} opt_value
 * @param {number=} opt_index
 * @return {!proto.adamant.global.v1.TxInput}
 */
proto.adamant.global.v1.BitcoinSpecific.prototype.addTxInputs = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.adamant.global.v1.TxInput, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.adamant.global.v1.BitcoinSpecific.prototype.clearTxInputsList = function() {
  this.setTxInputsList([]);
};


/**
 * repeated TxOutput tx_outputs = 2;
 * @return {!Array<!proto.adamant.global.v1.TxOutput>}
 */
proto.adamant.global.v1.BitcoinSpecific.prototype.getTxOutputsList = function() {
  return /** @type{!Array<!proto.adamant.global.v1.TxOutput>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.adamant.global.v1.TxOutput, 2));
};


/** @param {!Array<!proto.adamant.global.v1.TxOutput>} value */
proto.adamant.global.v1.BitcoinSpecific.prototype.setTxOutputsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.adamant.global.v1.TxOutput=} opt_value
 * @param {number=} opt_index
 * @return {!proto.adamant.global.v1.TxOutput}
 */
proto.adamant.global.v1.BitcoinSpecific.prototype.addTxOutputs = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.adamant.global.v1.TxOutput, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.adamant.global.v1.BitcoinSpecific.prototype.clearTxOutputsList = function() {
  this.setTxOutputsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.adamant.global.v1.LitecoinSpecific.repeatedFields_ = [1,2];



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
proto.adamant.global.v1.LitecoinSpecific.prototype.toObject = function(opt_includeInstance) {
  return proto.adamant.global.v1.LitecoinSpecific.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.adamant.global.v1.LitecoinSpecific} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.LitecoinSpecific.toObject = function(includeInstance, msg) {
  var f, obj = {
    txInputsList: jspb.Message.toObjectList(msg.getTxInputsList(),
    proto.adamant.global.v1.TxInput.toObject, includeInstance),
    txOutputsList: jspb.Message.toObjectList(msg.getTxOutputsList(),
    proto.adamant.global.v1.TxOutput.toObject, includeInstance)
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
 * @return {!proto.adamant.global.v1.LitecoinSpecific}
 */
proto.adamant.global.v1.LitecoinSpecific.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.adamant.global.v1.LitecoinSpecific;
  return proto.adamant.global.v1.LitecoinSpecific.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.adamant.global.v1.LitecoinSpecific} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.adamant.global.v1.LitecoinSpecific}
 */
proto.adamant.global.v1.LitecoinSpecific.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.adamant.global.v1.TxInput;
      reader.readMessage(value,proto.adamant.global.v1.TxInput.deserializeBinaryFromReader);
      msg.addTxInputs(value);
      break;
    case 2:
      var value = new proto.adamant.global.v1.TxOutput;
      reader.readMessage(value,proto.adamant.global.v1.TxOutput.deserializeBinaryFromReader);
      msg.addTxOutputs(value);
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
proto.adamant.global.v1.LitecoinSpecific.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.adamant.global.v1.LitecoinSpecific.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.adamant.global.v1.LitecoinSpecific} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.LitecoinSpecific.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTxInputsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.adamant.global.v1.TxInput.serializeBinaryToWriter
    );
  }
  f = message.getTxOutputsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.adamant.global.v1.TxOutput.serializeBinaryToWriter
    );
  }
};


/**
 * repeated TxInput tx_inputs = 1;
 * @return {!Array<!proto.adamant.global.v1.TxInput>}
 */
proto.adamant.global.v1.LitecoinSpecific.prototype.getTxInputsList = function() {
  return /** @type{!Array<!proto.adamant.global.v1.TxInput>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.adamant.global.v1.TxInput, 1));
};


/** @param {!Array<!proto.adamant.global.v1.TxInput>} value */
proto.adamant.global.v1.LitecoinSpecific.prototype.setTxInputsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.adamant.global.v1.TxInput=} opt_value
 * @param {number=} opt_index
 * @return {!proto.adamant.global.v1.TxInput}
 */
proto.adamant.global.v1.LitecoinSpecific.prototype.addTxInputs = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.adamant.global.v1.TxInput, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.adamant.global.v1.LitecoinSpecific.prototype.clearTxInputsList = function() {
  this.setTxInputsList([]);
};


/**
 * repeated TxOutput tx_outputs = 2;
 * @return {!Array<!proto.adamant.global.v1.TxOutput>}
 */
proto.adamant.global.v1.LitecoinSpecific.prototype.getTxOutputsList = function() {
  return /** @type{!Array<!proto.adamant.global.v1.TxOutput>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.adamant.global.v1.TxOutput, 2));
};


/** @param {!Array<!proto.adamant.global.v1.TxOutput>} value */
proto.adamant.global.v1.LitecoinSpecific.prototype.setTxOutputsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.adamant.global.v1.TxOutput=} opt_value
 * @param {number=} opt_index
 * @return {!proto.adamant.global.v1.TxOutput}
 */
proto.adamant.global.v1.LitecoinSpecific.prototype.addTxOutputs = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.adamant.global.v1.TxOutput, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.adamant.global.v1.LitecoinSpecific.prototype.clearTxOutputsList = function() {
  this.setTxOutputsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.adamant.global.v1.BitcoincashSpecific.repeatedFields_ = [1,2];



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
proto.adamant.global.v1.BitcoincashSpecific.prototype.toObject = function(opt_includeInstance) {
  return proto.adamant.global.v1.BitcoincashSpecific.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.adamant.global.v1.BitcoincashSpecific} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.BitcoincashSpecific.toObject = function(includeInstance, msg) {
  var f, obj = {
    txInputsList: jspb.Message.toObjectList(msg.getTxInputsList(),
    proto.adamant.global.v1.TxInput.toObject, includeInstance),
    txOutputsList: jspb.Message.toObjectList(msg.getTxOutputsList(),
    proto.adamant.global.v1.TxOutput.toObject, includeInstance)
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
 * @return {!proto.adamant.global.v1.BitcoincashSpecific}
 */
proto.adamant.global.v1.BitcoincashSpecific.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.adamant.global.v1.BitcoincashSpecific;
  return proto.adamant.global.v1.BitcoincashSpecific.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.adamant.global.v1.BitcoincashSpecific} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.adamant.global.v1.BitcoincashSpecific}
 */
proto.adamant.global.v1.BitcoincashSpecific.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.adamant.global.v1.TxInput;
      reader.readMessage(value,proto.adamant.global.v1.TxInput.deserializeBinaryFromReader);
      msg.addTxInputs(value);
      break;
    case 2:
      var value = new proto.adamant.global.v1.TxOutput;
      reader.readMessage(value,proto.adamant.global.v1.TxOutput.deserializeBinaryFromReader);
      msg.addTxOutputs(value);
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
proto.adamant.global.v1.BitcoincashSpecific.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.adamant.global.v1.BitcoincashSpecific.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.adamant.global.v1.BitcoincashSpecific} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.BitcoincashSpecific.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTxInputsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.adamant.global.v1.TxInput.serializeBinaryToWriter
    );
  }
  f = message.getTxOutputsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.adamant.global.v1.TxOutput.serializeBinaryToWriter
    );
  }
};


/**
 * repeated TxInput tx_inputs = 1;
 * @return {!Array<!proto.adamant.global.v1.TxInput>}
 */
proto.adamant.global.v1.BitcoincashSpecific.prototype.getTxInputsList = function() {
  return /** @type{!Array<!proto.adamant.global.v1.TxInput>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.adamant.global.v1.TxInput, 1));
};


/** @param {!Array<!proto.adamant.global.v1.TxInput>} value */
proto.adamant.global.v1.BitcoincashSpecific.prototype.setTxInputsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.adamant.global.v1.TxInput=} opt_value
 * @param {number=} opt_index
 * @return {!proto.adamant.global.v1.TxInput}
 */
proto.adamant.global.v1.BitcoincashSpecific.prototype.addTxInputs = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.adamant.global.v1.TxInput, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.adamant.global.v1.BitcoincashSpecific.prototype.clearTxInputsList = function() {
  this.setTxInputsList([]);
};


/**
 * repeated TxOutput tx_outputs = 2;
 * @return {!Array<!proto.adamant.global.v1.TxOutput>}
 */
proto.adamant.global.v1.BitcoincashSpecific.prototype.getTxOutputsList = function() {
  return /** @type{!Array<!proto.adamant.global.v1.TxOutput>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.adamant.global.v1.TxOutput, 2));
};


/** @param {!Array<!proto.adamant.global.v1.TxOutput>} value */
proto.adamant.global.v1.BitcoincashSpecific.prototype.setTxOutputsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.adamant.global.v1.TxOutput=} opt_value
 * @param {number=} opt_index
 * @return {!proto.adamant.global.v1.TxOutput}
 */
proto.adamant.global.v1.BitcoincashSpecific.prototype.addTxOutputs = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.adamant.global.v1.TxOutput, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.adamant.global.v1.BitcoincashSpecific.prototype.clearTxOutputsList = function() {
  this.setTxOutputsList([]);
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
proto.adamant.global.v1.EthereumSpecific.prototype.toObject = function(opt_includeInstance) {
  return proto.adamant.global.v1.EthereumSpecific.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.adamant.global.v1.EthereumSpecific} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.EthereumSpecific.toObject = function(includeInstance, msg) {
  var f, obj = {
    gasLimit: jspb.Message.getFieldWithDefault(msg, 1, 0),
    nonce: jspb.Message.getFieldWithDefault(msg, 2, 0),
    isNextNonce: jspb.Message.getBooleanFieldWithDefault(msg, 3, false)
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
 * @return {!proto.adamant.global.v1.EthereumSpecific}
 */
proto.adamant.global.v1.EthereumSpecific.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.adamant.global.v1.EthereumSpecific;
  return proto.adamant.global.v1.EthereumSpecific.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.adamant.global.v1.EthereumSpecific} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.adamant.global.v1.EthereumSpecific}
 */
proto.adamant.global.v1.EthereumSpecific.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setGasLimit(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setNonce(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsNextNonce(value);
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
proto.adamant.global.v1.EthereumSpecific.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.adamant.global.v1.EthereumSpecific.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.adamant.global.v1.EthereumSpecific} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.EthereumSpecific.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGasLimit();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getNonce();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getIsNextNonce();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
};


/**
 * optional uint64 gas_limit = 1;
 * @return {number}
 */
proto.adamant.global.v1.EthereumSpecific.prototype.getGasLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.adamant.global.v1.EthereumSpecific.prototype.setGasLimit = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint64 nonce = 2;
 * @return {number}
 */
proto.adamant.global.v1.EthereumSpecific.prototype.getNonce = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.adamant.global.v1.EthereumSpecific.prototype.setNonce = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional bool is_next_nonce = 3;
 * @return {boolean}
 */
proto.adamant.global.v1.EthereumSpecific.prototype.getIsNextNonce = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/** @param {boolean} value */
proto.adamant.global.v1.EthereumSpecific.prototype.setIsNextNonce = function(value) {
  jspb.Message.setProto3BooleanField(this, 3, value);
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
proto.adamant.global.v1.XrpSpecific.prototype.toObject = function(opt_includeInstance) {
  return proto.adamant.global.v1.XrpSpecific.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.adamant.global.v1.XrpSpecific} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.XrpSpecific.toObject = function(includeInstance, msg) {
  var f, obj = {
    sequenceNumber: jspb.Message.getFieldWithDefault(msg, 1, 0),
    destinationTag: jspb.Message.getFieldWithDefault(msg, 2, 0),
    txType: jspb.Message.getFieldWithDefault(msg, 3, 0),
    isNextSequenceNumber: jspb.Message.getBooleanFieldWithDefault(msg, 4, false)
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
 * @return {!proto.adamant.global.v1.XrpSpecific}
 */
proto.adamant.global.v1.XrpSpecific.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.adamant.global.v1.XrpSpecific;
  return proto.adamant.global.v1.XrpSpecific.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.adamant.global.v1.XrpSpecific} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.adamant.global.v1.XrpSpecific}
 */
proto.adamant.global.v1.XrpSpecific.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setSequenceNumber(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setDestinationTag(value);
      break;
    case 3:
      var value = /** @type {!proto.gincoinc.global.v1.XRPTransactionType} */ (reader.readEnum());
      msg.setTxType(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsNextSequenceNumber(value);
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
proto.adamant.global.v1.XrpSpecific.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.adamant.global.v1.XrpSpecific.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.adamant.global.v1.XrpSpecific} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.XrpSpecific.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSequenceNumber();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getDestinationTag();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getTxType();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getIsNextSequenceNumber();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
};


/**
 * optional uint32 sequence_number = 1;
 * @return {number}
 */
proto.adamant.global.v1.XrpSpecific.prototype.getSequenceNumber = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.adamant.global.v1.XrpSpecific.prototype.setSequenceNumber = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint32 destination_tag = 2;
 * @return {number}
 */
proto.adamant.global.v1.XrpSpecific.prototype.getDestinationTag = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.adamant.global.v1.XrpSpecific.prototype.setDestinationTag = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional gincoinc.global.v1.XRPTransactionType tx_type = 3;
 * @return {!proto.gincoinc.global.v1.XRPTransactionType}
 */
proto.adamant.global.v1.XrpSpecific.prototype.getTxType = function() {
  return /** @type {!proto.gincoinc.global.v1.XRPTransactionType} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {!proto.gincoinc.global.v1.XRPTransactionType} value */
proto.adamant.global.v1.XrpSpecific.prototype.setTxType = function(value) {
  jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional bool is_next_sequence_number = 4;
 * @return {boolean}
 */
proto.adamant.global.v1.XrpSpecific.prototype.getIsNextSequenceNumber = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/** @param {boolean} value */
proto.adamant.global.v1.XrpSpecific.prototype.setIsNextSequenceNumber = function(value) {
  jspb.Message.setProto3BooleanField(this, 4, value);
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
proto.adamant.global.v1.TronSpecific.prototype.toObject = function(opt_includeInstance) {
  return proto.adamant.global.v1.TronSpecific.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.adamant.global.v1.TronSpecific} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.TronSpecific.toObject = function(includeInstance, msg) {
  var f, obj = {
    expiration: jspb.Message.getFieldWithDefault(msg, 1, 0)
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
 * @return {!proto.adamant.global.v1.TronSpecific}
 */
proto.adamant.global.v1.TronSpecific.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.adamant.global.v1.TronSpecific;
  return proto.adamant.global.v1.TronSpecific.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.adamant.global.v1.TronSpecific} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.adamant.global.v1.TronSpecific}
 */
proto.adamant.global.v1.TronSpecific.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setExpiration(value);
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
proto.adamant.global.v1.TronSpecific.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.adamant.global.v1.TronSpecific.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.adamant.global.v1.TronSpecific} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.TronSpecific.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getExpiration();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
};


/**
 * optional uint64 expiration = 1;
 * @return {number}
 */
proto.adamant.global.v1.TronSpecific.prototype.getExpiration = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.adamant.global.v1.TronSpecific.prototype.setExpiration = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.adamant.global.v1.C0banSpecific.repeatedFields_ = [1,2];



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
proto.adamant.global.v1.C0banSpecific.prototype.toObject = function(opt_includeInstance) {
  return proto.adamant.global.v1.C0banSpecific.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.adamant.global.v1.C0banSpecific} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.C0banSpecific.toObject = function(includeInstance, msg) {
  var f, obj = {
    txInputsList: jspb.Message.toObjectList(msg.getTxInputsList(),
    proto.adamant.global.v1.TxInput.toObject, includeInstance),
    txOutputsList: jspb.Message.toObjectList(msg.getTxOutputsList(),
    proto.adamant.global.v1.TxOutput.toObject, includeInstance)
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
 * @return {!proto.adamant.global.v1.C0banSpecific}
 */
proto.adamant.global.v1.C0banSpecific.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.adamant.global.v1.C0banSpecific;
  return proto.adamant.global.v1.C0banSpecific.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.adamant.global.v1.C0banSpecific} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.adamant.global.v1.C0banSpecific}
 */
proto.adamant.global.v1.C0banSpecific.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.adamant.global.v1.TxInput;
      reader.readMessage(value,proto.adamant.global.v1.TxInput.deserializeBinaryFromReader);
      msg.addTxInputs(value);
      break;
    case 2:
      var value = new proto.adamant.global.v1.TxOutput;
      reader.readMessage(value,proto.adamant.global.v1.TxOutput.deserializeBinaryFromReader);
      msg.addTxOutputs(value);
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
proto.adamant.global.v1.C0banSpecific.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.adamant.global.v1.C0banSpecific.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.adamant.global.v1.C0banSpecific} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.C0banSpecific.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTxInputsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.adamant.global.v1.TxInput.serializeBinaryToWriter
    );
  }
  f = message.getTxOutputsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.adamant.global.v1.TxOutput.serializeBinaryToWriter
    );
  }
};


/**
 * repeated TxInput tx_inputs = 1;
 * @return {!Array<!proto.adamant.global.v1.TxInput>}
 */
proto.adamant.global.v1.C0banSpecific.prototype.getTxInputsList = function() {
  return /** @type{!Array<!proto.adamant.global.v1.TxInput>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.adamant.global.v1.TxInput, 1));
};


/** @param {!Array<!proto.adamant.global.v1.TxInput>} value */
proto.adamant.global.v1.C0banSpecific.prototype.setTxInputsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.adamant.global.v1.TxInput=} opt_value
 * @param {number=} opt_index
 * @return {!proto.adamant.global.v1.TxInput}
 */
proto.adamant.global.v1.C0banSpecific.prototype.addTxInputs = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.adamant.global.v1.TxInput, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.adamant.global.v1.C0banSpecific.prototype.clearTxInputsList = function() {
  this.setTxInputsList([]);
};


/**
 * repeated TxOutput tx_outputs = 2;
 * @return {!Array<!proto.adamant.global.v1.TxOutput>}
 */
proto.adamant.global.v1.C0banSpecific.prototype.getTxOutputsList = function() {
  return /** @type{!Array<!proto.adamant.global.v1.TxOutput>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.adamant.global.v1.TxOutput, 2));
};


/** @param {!Array<!proto.adamant.global.v1.TxOutput>} value */
proto.adamant.global.v1.C0banSpecific.prototype.setTxOutputsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.adamant.global.v1.TxOutput=} opt_value
 * @param {number=} opt_index
 * @return {!proto.adamant.global.v1.TxOutput}
 */
proto.adamant.global.v1.C0banSpecific.prototype.addTxOutputs = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.adamant.global.v1.TxOutput, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.adamant.global.v1.C0banSpecific.prototype.clearTxOutputsList = function() {
  this.setTxOutputsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.adamant.global.v1.SignInfo.repeatedFields_ = [10];



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
proto.adamant.global.v1.SignInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.adamant.global.v1.SignInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.adamant.global.v1.SignInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.SignInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    walletId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    transactionId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    keyId: jspb.Message.getFieldWithDefault(msg, 3, ""),
    hdAccount: jspb.Message.getFieldWithDefault(msg, 4, 0),
    coin: jspb.Message.getFieldWithDefault(msg, 5, 0),
    txId: jspb.Message.getFieldWithDefault(msg, 6, ""),
    signIndex: jspb.Message.getFieldWithDefault(msg, 11, 0),
    signMessage: jspb.Message.getFieldWithDefault(msg, 7, ""),
    hdChange: jspb.Message.getFieldWithDefault(msg, 8, 0),
    hdIndex: jspb.Message.getFieldWithDefault(msg, 9, 0),
    signTxInputsList: jspb.Message.toObjectList(msg.getSignTxInputsList(),
    proto.adamant.global.v1.SignTxInput.toObject, includeInstance)
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
 * @return {!proto.adamant.global.v1.SignInfo}
 */
proto.adamant.global.v1.SignInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.adamant.global.v1.SignInfo;
  return proto.adamant.global.v1.SignInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.adamant.global.v1.SignInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.adamant.global.v1.SignInfo}
 */
proto.adamant.global.v1.SignInfo.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {number} */ (reader.readUint32());
      msg.setHdAccount(value);
      break;
    case 5:
      var value = /** @type {!proto.gincoinc.global.v1.Coin} */ (reader.readEnum());
      msg.setCoin(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setTxId(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setSignIndex(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setSignMessage(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setHdChange(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setHdIndex(value);
      break;
    case 10:
      var value = new proto.adamant.global.v1.SignTxInput;
      reader.readMessage(value,proto.adamant.global.v1.SignTxInput.deserializeBinaryFromReader);
      msg.addSignTxInputs(value);
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
proto.adamant.global.v1.SignInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.adamant.global.v1.SignInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.adamant.global.v1.SignInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.SignInfo.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getHdAccount();
  if (f !== 0) {
    writer.writeUint32(
      4,
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
  f = message.getTxId();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getSignIndex();
  if (f !== 0) {
    writer.writeUint32(
      11,
      f
    );
  }
  f = message.getSignMessage();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getHdChange();
  if (f !== 0) {
    writer.writeUint32(
      8,
      f
    );
  }
  f = message.getHdIndex();
  if (f !== 0) {
    writer.writeUint32(
      9,
      f
    );
  }
  f = message.getSignTxInputsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      10,
      f,
      proto.adamant.global.v1.SignTxInput.serializeBinaryToWriter
    );
  }
};


/**
 * optional string wallet_id = 1;
 * @return {string}
 */
proto.adamant.global.v1.SignInfo.prototype.getWalletId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.adamant.global.v1.SignInfo.prototype.setWalletId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string transaction_id = 2;
 * @return {string}
 */
proto.adamant.global.v1.SignInfo.prototype.getTransactionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.adamant.global.v1.SignInfo.prototype.setTransactionId = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string key_id = 3;
 * @return {string}
 */
proto.adamant.global.v1.SignInfo.prototype.getKeyId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.adamant.global.v1.SignInfo.prototype.setKeyId = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional uint32 hd_account = 4;
 * @return {number}
 */
proto.adamant.global.v1.SignInfo.prototype.getHdAccount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.adamant.global.v1.SignInfo.prototype.setHdAccount = function(value) {
  jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional gincoinc.global.v1.Coin coin = 5;
 * @return {!proto.gincoinc.global.v1.Coin}
 */
proto.adamant.global.v1.SignInfo.prototype.getCoin = function() {
  return /** @type {!proto.gincoinc.global.v1.Coin} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/** @param {!proto.gincoinc.global.v1.Coin} value */
proto.adamant.global.v1.SignInfo.prototype.setCoin = function(value) {
  jspb.Message.setProto3EnumField(this, 5, value);
};


/**
 * optional string tx_id = 6;
 * @return {string}
 */
proto.adamant.global.v1.SignInfo.prototype.getTxId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/** @param {string} value */
proto.adamant.global.v1.SignInfo.prototype.setTxId = function(value) {
  jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional uint32 sign_index = 11;
 * @return {number}
 */
proto.adamant.global.v1.SignInfo.prototype.getSignIndex = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/** @param {number} value */
proto.adamant.global.v1.SignInfo.prototype.setSignIndex = function(value) {
  jspb.Message.setProto3IntField(this, 11, value);
};


/**
 * optional string sign_message = 7;
 * @return {string}
 */
proto.adamant.global.v1.SignInfo.prototype.getSignMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/** @param {string} value */
proto.adamant.global.v1.SignInfo.prototype.setSignMessage = function(value) {
  jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional uint32 hd_change = 8;
 * @return {number}
 */
proto.adamant.global.v1.SignInfo.prototype.getHdChange = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/** @param {number} value */
proto.adamant.global.v1.SignInfo.prototype.setHdChange = function(value) {
  jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * optional uint32 hd_index = 9;
 * @return {number}
 */
proto.adamant.global.v1.SignInfo.prototype.getHdIndex = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/** @param {number} value */
proto.adamant.global.v1.SignInfo.prototype.setHdIndex = function(value) {
  jspb.Message.setProto3IntField(this, 9, value);
};


/**
 * repeated SignTxInput sign_tx_inputs = 10;
 * @return {!Array<!proto.adamant.global.v1.SignTxInput>}
 */
proto.adamant.global.v1.SignInfo.prototype.getSignTxInputsList = function() {
  return /** @type{!Array<!proto.adamant.global.v1.SignTxInput>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.adamant.global.v1.SignTxInput, 10));
};


/** @param {!Array<!proto.adamant.global.v1.SignTxInput>} value */
proto.adamant.global.v1.SignInfo.prototype.setSignTxInputsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 10, value);
};


/**
 * @param {!proto.adamant.global.v1.SignTxInput=} opt_value
 * @param {number=} opt_index
 * @return {!proto.adamant.global.v1.SignTxInput}
 */
proto.adamant.global.v1.SignInfo.prototype.addSignTxInputs = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 10, opt_value, proto.adamant.global.v1.SignTxInput, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.adamant.global.v1.SignInfo.prototype.clearSignTxInputsList = function() {
  this.setSignTxInputsList([]);
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
proto.adamant.global.v1.SignTxInput.prototype.toObject = function(opt_includeInstance) {
  return proto.adamant.global.v1.SignTxInput.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.adamant.global.v1.SignTxInput} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.SignTxInput.toObject = function(includeInstance, msg) {
  var f, obj = {
    txInputIndex: jspb.Message.getFieldWithDefault(msg, 1, 0),
    signMessage: jspb.Message.getFieldWithDefault(msg, 2, ""),
    hdChange: jspb.Message.getFieldWithDefault(msg, 3, 0),
    hdIndex: jspb.Message.getFieldWithDefault(msg, 4, 0)
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
 * @return {!proto.adamant.global.v1.SignTxInput}
 */
proto.adamant.global.v1.SignTxInput.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.adamant.global.v1.SignTxInput;
  return proto.adamant.global.v1.SignTxInput.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.adamant.global.v1.SignTxInput} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.adamant.global.v1.SignTxInput}
 */
proto.adamant.global.v1.SignTxInput.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setTxInputIndex(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSignMessage(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setHdChange(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setHdIndex(value);
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
proto.adamant.global.v1.SignTxInput.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.adamant.global.v1.SignTxInput.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.adamant.global.v1.SignTxInput} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.SignTxInput.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTxInputIndex();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getSignMessage();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getHdChange();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getHdIndex();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
};


/**
 * optional uint32 tx_input_index = 1;
 * @return {number}
 */
proto.adamant.global.v1.SignTxInput.prototype.getTxInputIndex = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.adamant.global.v1.SignTxInput.prototype.setTxInputIndex = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string sign_message = 2;
 * @return {string}
 */
proto.adamant.global.v1.SignTxInput.prototype.getSignMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.adamant.global.v1.SignTxInput.prototype.setSignMessage = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional uint32 hd_change = 3;
 * @return {number}
 */
proto.adamant.global.v1.SignTxInput.prototype.getHdChange = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.adamant.global.v1.SignTxInput.prototype.setHdChange = function(value) {
  jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional uint32 hd_index = 4;
 * @return {number}
 */
proto.adamant.global.v1.SignTxInput.prototype.getHdIndex = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.adamant.global.v1.SignTxInput.prototype.setHdIndex = function(value) {
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
proto.adamant.global.v1.Transfer.prototype.toObject = function(opt_includeInstance) {
  return proto.adamant.global.v1.Transfer.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.adamant.global.v1.Transfer} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.Transfer.toObject = function(includeInstance, msg) {
  var f, obj = {
    walletId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    transferId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    coin: jspb.Message.getFieldWithDefault(msg, 3, 0),
    txId: jspb.Message.getFieldWithDefault(msg, 4, ""),
    transferType: jspb.Message.getFieldWithDefault(msg, 5, 0),
    value: jspb.Message.getFloatingPointFieldWithDefault(msg, 6, 0.0),
    stringValue: jspb.Message.getFieldWithDefault(msg, 7, ""),
    jpyRate: jspb.Message.getFloatingPointFieldWithDefault(msg, 9, 0.0),
    partnerWalletId: jspb.Message.getFieldWithDefault(msg, 10, ""),
    partnerAddress: jspb.Message.getFieldWithDefault(msg, 11, ""),
    destinationTag: jspb.Message.getFieldWithDefault(msg, 15, 0),
    state: jspb.Message.getFieldWithDefault(msg, 12, 0),
    result: jspb.Message.getFieldWithDefault(msg, 16, 0),
    createTime: (f = msg.getCreateTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    updateTime: (f = msg.getUpdateTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
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
 * @return {!proto.adamant.global.v1.Transfer}
 */
proto.adamant.global.v1.Transfer.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.adamant.global.v1.Transfer;
  return proto.adamant.global.v1.Transfer.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.adamant.global.v1.Transfer} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.adamant.global.v1.Transfer}
 */
proto.adamant.global.v1.Transfer.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setTransferId(value);
      break;
    case 3:
      var value = /** @type {!proto.gincoinc.global.v1.Coin} */ (reader.readEnum());
      msg.setCoin(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setTxId(value);
      break;
    case 5:
      var value = /** @type {!proto.gincoinc.global.v1.TransferType} */ (reader.readEnum());
      msg.setTransferType(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setValue(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setStringValue(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setJpyRate(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setPartnerWalletId(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setPartnerAddress(value);
      break;
    case 15:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setDestinationTag(value);
      break;
    case 12:
      var value = /** @type {!proto.gincoinc.global.v1.TransactionState} */ (reader.readEnum());
      msg.setState(value);
      break;
    case 16:
      var value = /** @type {!proto.gincoinc.global.v1.TransactionResult} */ (reader.readEnum());
      msg.setResult(value);
      break;
    case 13:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreateTime(value);
      break;
    case 14:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setUpdateTime(value);
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
proto.adamant.global.v1.Transfer.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.adamant.global.v1.Transfer.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.adamant.global.v1.Transfer} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.Transfer.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getWalletId();
  if (f.length > 0) {
    writer.writeString(
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
  f = message.getCoin();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getTxId();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getTransferType();
  if (f !== 0.0) {
    writer.writeEnum(
      5,
      f
    );
  }
  f = message.getValue();
  if (f !== 0.0) {
    writer.writeDouble(
      6,
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
  f = message.getJpyRate();
  if (f !== 0.0) {
    writer.writeDouble(
      9,
      f
    );
  }
  f = message.getPartnerWalletId();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getPartnerAddress();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getDestinationTag();
  if (f !== 0) {
    writer.writeUint32(
      15,
      f
    );
  }
  f = message.getState();
  if (f !== 0.0) {
    writer.writeEnum(
      12,
      f
    );
  }
  f = message.getResult();
  if (f !== 0.0) {
    writer.writeEnum(
      16,
      f
    );
  }
  f = message.getCreateTime();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getUpdateTime();
  if (f != null) {
    writer.writeMessage(
      14,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional string wallet_id = 1;
 * @return {string}
 */
proto.adamant.global.v1.Transfer.prototype.getWalletId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.adamant.global.v1.Transfer.prototype.setWalletId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string transfer_id = 2;
 * @return {string}
 */
proto.adamant.global.v1.Transfer.prototype.getTransferId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.adamant.global.v1.Transfer.prototype.setTransferId = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional gincoinc.global.v1.Coin coin = 3;
 * @return {!proto.gincoinc.global.v1.Coin}
 */
proto.adamant.global.v1.Transfer.prototype.getCoin = function() {
  return /** @type {!proto.gincoinc.global.v1.Coin} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {!proto.gincoinc.global.v1.Coin} value */
proto.adamant.global.v1.Transfer.prototype.setCoin = function(value) {
  jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional string tx_id = 4;
 * @return {string}
 */
proto.adamant.global.v1.Transfer.prototype.getTxId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.adamant.global.v1.Transfer.prototype.setTxId = function(value) {
  jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional gincoinc.global.v1.TransferType transfer_type = 5;
 * @return {!proto.gincoinc.global.v1.TransferType}
 */
proto.adamant.global.v1.Transfer.prototype.getTransferType = function() {
  return /** @type {!proto.gincoinc.global.v1.TransferType} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/** @param {!proto.gincoinc.global.v1.TransferType} value */
proto.adamant.global.v1.Transfer.prototype.setTransferType = function(value) {
  jspb.Message.setProto3EnumField(this, 5, value);
};


/**
 * optional double value = 6;
 * @return {number}
 */
proto.adamant.global.v1.Transfer.prototype.getValue = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 6, 0.0));
};


/** @param {number} value */
proto.adamant.global.v1.Transfer.prototype.setValue = function(value) {
  jspb.Message.setProto3FloatField(this, 6, value);
};


/**
 * optional string string_value = 7;
 * @return {string}
 */
proto.adamant.global.v1.Transfer.prototype.getStringValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/** @param {string} value */
proto.adamant.global.v1.Transfer.prototype.setStringValue = function(value) {
  jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional double jpy_rate = 9;
 * @return {number}
 */
proto.adamant.global.v1.Transfer.prototype.getJpyRate = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 9, 0.0));
};


/** @param {number} value */
proto.adamant.global.v1.Transfer.prototype.setJpyRate = function(value) {
  jspb.Message.setProto3FloatField(this, 9, value);
};


/**
 * optional string partner_wallet_id = 10;
 * @return {string}
 */
proto.adamant.global.v1.Transfer.prototype.getPartnerWalletId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/** @param {string} value */
proto.adamant.global.v1.Transfer.prototype.setPartnerWalletId = function(value) {
  jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional string partner_address = 11;
 * @return {string}
 */
proto.adamant.global.v1.Transfer.prototype.getPartnerAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/** @param {string} value */
proto.adamant.global.v1.Transfer.prototype.setPartnerAddress = function(value) {
  jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional uint32 destination_tag = 15;
 * @return {number}
 */
proto.adamant.global.v1.Transfer.prototype.getDestinationTag = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 15, 0));
};


/** @param {number} value */
proto.adamant.global.v1.Transfer.prototype.setDestinationTag = function(value) {
  jspb.Message.setProto3IntField(this, 15, value);
};


/**
 * optional gincoinc.global.v1.TransactionState state = 12;
 * @return {!proto.gincoinc.global.v1.TransactionState}
 */
proto.adamant.global.v1.Transfer.prototype.getState = function() {
  return /** @type {!proto.gincoinc.global.v1.TransactionState} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/** @param {!proto.gincoinc.global.v1.TransactionState} value */
proto.adamant.global.v1.Transfer.prototype.setState = function(value) {
  jspb.Message.setProto3EnumField(this, 12, value);
};


/**
 * optional gincoinc.global.v1.TransactionResult result = 16;
 * @return {!proto.gincoinc.global.v1.TransactionResult}
 */
proto.adamant.global.v1.Transfer.prototype.getResult = function() {
  return /** @type {!proto.gincoinc.global.v1.TransactionResult} */ (jspb.Message.getFieldWithDefault(this, 16, 0));
};


/** @param {!proto.gincoinc.global.v1.TransactionResult} value */
proto.adamant.global.v1.Transfer.prototype.setResult = function(value) {
  jspb.Message.setProto3EnumField(this, 16, value);
};


/**
 * optional google.protobuf.Timestamp create_time = 13;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.adamant.global.v1.Transfer.prototype.getCreateTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 13));
};


/** @param {?proto.google.protobuf.Timestamp|undefined} value */
proto.adamant.global.v1.Transfer.prototype.setCreateTime = function(value) {
  jspb.Message.setWrapperField(this, 13, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.adamant.global.v1.Transfer.prototype.clearCreateTime = function() {
  this.setCreateTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.adamant.global.v1.Transfer.prototype.hasCreateTime = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional google.protobuf.Timestamp update_time = 14;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.adamant.global.v1.Transfer.prototype.getUpdateTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 14));
};


/** @param {?proto.google.protobuf.Timestamp|undefined} value */
proto.adamant.global.v1.Transfer.prototype.setUpdateTime = function(value) {
  jspb.Message.setWrapperField(this, 14, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.adamant.global.v1.Transfer.prototype.clearUpdateTime = function() {
  this.setUpdateTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.adamant.global.v1.Transfer.prototype.hasUpdateTime = function() {
  return jspb.Message.getField(this, 14) != null;
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
proto.adamant.global.v1.Rate.prototype.toObject = function(opt_includeInstance) {
  return proto.adamant.global.v1.Rate.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.adamant.global.v1.Rate} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.Rate.toObject = function(includeInstance, msg) {
  var f, obj = {
    coin: jspb.Message.getFieldWithDefault(msg, 1, 0),
    jpy: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0)
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
 * @return {!proto.adamant.global.v1.Rate}
 */
proto.adamant.global.v1.Rate.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.adamant.global.v1.Rate;
  return proto.adamant.global.v1.Rate.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.adamant.global.v1.Rate} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.adamant.global.v1.Rate}
 */
proto.adamant.global.v1.Rate.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {number} */ (reader.readDouble());
      msg.setJpy(value);
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
proto.adamant.global.v1.Rate.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.adamant.global.v1.Rate.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.adamant.global.v1.Rate} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.Rate.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCoin();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getJpy();
  if (f !== 0.0) {
    writer.writeDouble(
      2,
      f
    );
  }
};


/**
 * optional gincoinc.global.v1.Coin coin = 1;
 * @return {!proto.gincoinc.global.v1.Coin}
 */
proto.adamant.global.v1.Rate.prototype.getCoin = function() {
  return /** @type {!proto.gincoinc.global.v1.Coin} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {!proto.gincoinc.global.v1.Coin} value */
proto.adamant.global.v1.Rate.prototype.setCoin = function(value) {
  jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional double jpy = 2;
 * @return {number}
 */
proto.adamant.global.v1.Rate.prototype.getJpy = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/** @param {number} value */
proto.adamant.global.v1.Rate.prototype.setJpy = function(value) {
  jspb.Message.setProto3FloatField(this, 2, value);
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
proto.adamant.global.v1.RateSnapshot.prototype.toObject = function(opt_includeInstance) {
  return proto.adamant.global.v1.RateSnapshot.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.adamant.global.v1.RateSnapshot} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.RateSnapshot.toObject = function(includeInstance, msg) {
  var f, obj = {
    rateSnapshotId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    ratesMap: (f = msg.getRatesMap()) ? f.toObject(includeInstance, proto.adamant.global.v1.Rate.toObject) : []
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
 * @return {!proto.adamant.global.v1.RateSnapshot}
 */
proto.adamant.global.v1.RateSnapshot.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.adamant.global.v1.RateSnapshot;
  return proto.adamant.global.v1.RateSnapshot.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.adamant.global.v1.RateSnapshot} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.adamant.global.v1.RateSnapshot}
 */
proto.adamant.global.v1.RateSnapshot.deserializeBinaryFromReader = function(msg, reader) {
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
    case 2:
      var value = msg.getRatesMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readUint32, jspb.BinaryReader.prototype.readMessage, proto.adamant.global.v1.Rate.deserializeBinaryFromReader, 0);
         });
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
proto.adamant.global.v1.RateSnapshot.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.adamant.global.v1.RateSnapshot.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.adamant.global.v1.RateSnapshot} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.RateSnapshot.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRateSnapshotId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getRatesMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(2, writer, jspb.BinaryWriter.prototype.writeUint32, jspb.BinaryWriter.prototype.writeMessage, proto.adamant.global.v1.Rate.serializeBinaryToWriter);
  }
};


/**
 * optional string rate_snapshot_id = 1;
 * @return {string}
 */
proto.adamant.global.v1.RateSnapshot.prototype.getRateSnapshotId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.adamant.global.v1.RateSnapshot.prototype.setRateSnapshotId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * map<uint32, Rate> rates = 2;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<number,!proto.adamant.global.v1.Rate>}
 */
proto.adamant.global.v1.RateSnapshot.prototype.getRatesMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<number,!proto.adamant.global.v1.Rate>} */ (
      jspb.Message.getMapField(this, 2, opt_noLazyCreate,
      proto.adamant.global.v1.Rate));
};


/**
 * Clears values from the map. The map will be non-null.
 */
proto.adamant.global.v1.RateSnapshot.prototype.clearRatesMap = function() {
  this.getRatesMap().clear();
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
proto.adamant.global.v1.Deactivatability.prototype.toObject = function(opt_includeInstance) {
  return proto.adamant.global.v1.Deactivatability.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.adamant.global.v1.Deactivatability} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.Deactivatability.toObject = function(includeInstance, msg) {
  var f, obj = {
    accountId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    deactivatable: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
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
 * @return {!proto.adamant.global.v1.Deactivatability}
 */
proto.adamant.global.v1.Deactivatability.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.adamant.global.v1.Deactivatability;
  return proto.adamant.global.v1.Deactivatability.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.adamant.global.v1.Deactivatability} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.adamant.global.v1.Deactivatability}
 */
proto.adamant.global.v1.Deactivatability.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAccountId(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDeactivatable(value);
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
proto.adamant.global.v1.Deactivatability.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.adamant.global.v1.Deactivatability.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.adamant.global.v1.Deactivatability} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.Deactivatability.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAccountId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDeactivatable();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * optional string account_id = 1;
 * @return {string}
 */
proto.adamant.global.v1.Deactivatability.prototype.getAccountId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.adamant.global.v1.Deactivatability.prototype.setAccountId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bool deactivatable = 2;
 * @return {boolean}
 */
proto.adamant.global.v1.Deactivatability.prototype.getDeactivatable = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/** @param {boolean} value */
proto.adamant.global.v1.Deactivatability.prototype.setDeactivatable = function(value) {
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
proto.adamant.global.v1.LabeledAddress.prototype.toObject = function(opt_includeInstance) {
  return proto.adamant.global.v1.LabeledAddress.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.adamant.global.v1.LabeledAddress} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.LabeledAddress.toObject = function(includeInstance, msg) {
  var f, obj = {
    labeledAddressId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    coin: jspb.Message.getFieldWithDefault(msg, 3, 0),
    address: jspb.Message.getFieldWithDefault(msg, 4, ""),
    proposal: (f = msg.getProposal()) && proto.adamant.global.v1.LabeledAddressProposal.toObject(includeInstance, f),
    createTime: (f = msg.getCreateTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    updateTime: (f = msg.getUpdateTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
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
 * @return {!proto.adamant.global.v1.LabeledAddress}
 */
proto.adamant.global.v1.LabeledAddress.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.adamant.global.v1.LabeledAddress;
  return proto.adamant.global.v1.LabeledAddress.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.adamant.global.v1.LabeledAddress} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.adamant.global.v1.LabeledAddress}
 */
proto.adamant.global.v1.LabeledAddress.deserializeBinaryFromReader = function(msg, reader) {
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
    case 5:
      var value = new proto.adamant.global.v1.LabeledAddressProposal;
      reader.readMessage(value,proto.adamant.global.v1.LabeledAddressProposal.deserializeBinaryFromReader);
      msg.setProposal(value);
      break;
    case 7:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreateTime(value);
      break;
    case 8:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setUpdateTime(value);
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
proto.adamant.global.v1.LabeledAddress.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.adamant.global.v1.LabeledAddress.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.adamant.global.v1.LabeledAddress} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.LabeledAddress.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getProposal();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.adamant.global.v1.LabeledAddressProposal.serializeBinaryToWriter
    );
  }
  f = message.getCreateTime();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getUpdateTime();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional string labeled_address_id = 1;
 * @return {string}
 */
proto.adamant.global.v1.LabeledAddress.prototype.getLabeledAddressId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.adamant.global.v1.LabeledAddress.prototype.setLabeledAddressId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.adamant.global.v1.LabeledAddress.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.adamant.global.v1.LabeledAddress.prototype.setName = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional gincoinc.global.v1.Coin coin = 3;
 * @return {!proto.gincoinc.global.v1.Coin}
 */
proto.adamant.global.v1.LabeledAddress.prototype.getCoin = function() {
  return /** @type {!proto.gincoinc.global.v1.Coin} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {!proto.gincoinc.global.v1.Coin} value */
proto.adamant.global.v1.LabeledAddress.prototype.setCoin = function(value) {
  jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional string address = 4;
 * @return {string}
 */
proto.adamant.global.v1.LabeledAddress.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.adamant.global.v1.LabeledAddress.prototype.setAddress = function(value) {
  jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional LabeledAddressProposal proposal = 5;
 * @return {?proto.adamant.global.v1.LabeledAddressProposal}
 */
proto.adamant.global.v1.LabeledAddress.prototype.getProposal = function() {
  return /** @type{?proto.adamant.global.v1.LabeledAddressProposal} */ (
    jspb.Message.getWrapperField(this, proto.adamant.global.v1.LabeledAddressProposal, 5));
};


/** @param {?proto.adamant.global.v1.LabeledAddressProposal|undefined} value */
proto.adamant.global.v1.LabeledAddress.prototype.setProposal = function(value) {
  jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.adamant.global.v1.LabeledAddress.prototype.clearProposal = function() {
  this.setProposal(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.adamant.global.v1.LabeledAddress.prototype.hasProposal = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional google.protobuf.Timestamp create_time = 7;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.adamant.global.v1.LabeledAddress.prototype.getCreateTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 7));
};


/** @param {?proto.google.protobuf.Timestamp|undefined} value */
proto.adamant.global.v1.LabeledAddress.prototype.setCreateTime = function(value) {
  jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.adamant.global.v1.LabeledAddress.prototype.clearCreateTime = function() {
  this.setCreateTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.adamant.global.v1.LabeledAddress.prototype.hasCreateTime = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional google.protobuf.Timestamp update_time = 8;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.adamant.global.v1.LabeledAddress.prototype.getUpdateTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 8));
};


/** @param {?proto.google.protobuf.Timestamp|undefined} value */
proto.adamant.global.v1.LabeledAddress.prototype.setUpdateTime = function(value) {
  jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.adamant.global.v1.LabeledAddress.prototype.clearUpdateTime = function() {
  this.setUpdateTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.adamant.global.v1.LabeledAddress.prototype.hasUpdateTime = function() {
  return jspb.Message.getField(this, 8) != null;
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
proto.adamant.global.v1.LabeledAddressProposal.prototype.toObject = function(opt_includeInstance) {
  return proto.adamant.global.v1.LabeledAddressProposal.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.adamant.global.v1.LabeledAddressProposal} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.LabeledAddressProposal.toObject = function(includeInstance, msg) {
  var f, obj = {
    requesterAccountId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    requesterName: jspb.Message.getFieldWithDefault(msg, 2, ""),
    approverAccountId: jspb.Message.getFieldWithDefault(msg, 3, ""),
    approverName: jspb.Message.getFieldWithDefault(msg, 4, ""),
    proposedAddress: jspb.Message.getFieldWithDefault(msg, 5, ""),
    addressIsReviewed: jspb.Message.getBooleanFieldWithDefault(msg, 6, false)
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
 * @return {!proto.adamant.global.v1.LabeledAddressProposal}
 */
proto.adamant.global.v1.LabeledAddressProposal.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.adamant.global.v1.LabeledAddressProposal;
  return proto.adamant.global.v1.LabeledAddressProposal.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.adamant.global.v1.LabeledAddressProposal} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.adamant.global.v1.LabeledAddressProposal}
 */
proto.adamant.global.v1.LabeledAddressProposal.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setRequesterAccountId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setRequesterName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setApproverAccountId(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setApproverName(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setProposedAddress(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAddressIsReviewed(value);
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
proto.adamant.global.v1.LabeledAddressProposal.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.adamant.global.v1.LabeledAddressProposal.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.adamant.global.v1.LabeledAddressProposal} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.LabeledAddressProposal.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRequesterAccountId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getRequesterName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getApproverAccountId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getApproverName();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getProposedAddress();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getAddressIsReviewed();
  if (f) {
    writer.writeBool(
      6,
      f
    );
  }
};


/**
 * optional string requester_account_id = 1;
 * @return {string}
 */
proto.adamant.global.v1.LabeledAddressProposal.prototype.getRequesterAccountId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.adamant.global.v1.LabeledAddressProposal.prototype.setRequesterAccountId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string requester_name = 2;
 * @return {string}
 */
proto.adamant.global.v1.LabeledAddressProposal.prototype.getRequesterName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.adamant.global.v1.LabeledAddressProposal.prototype.setRequesterName = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string approver_account_id = 3;
 * @return {string}
 */
proto.adamant.global.v1.LabeledAddressProposal.prototype.getApproverAccountId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.adamant.global.v1.LabeledAddressProposal.prototype.setApproverAccountId = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string approver_name = 4;
 * @return {string}
 */
proto.adamant.global.v1.LabeledAddressProposal.prototype.getApproverName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.adamant.global.v1.LabeledAddressProposal.prototype.setApproverName = function(value) {
  jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string proposed_address = 5;
 * @return {string}
 */
proto.adamant.global.v1.LabeledAddressProposal.prototype.getProposedAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/** @param {string} value */
proto.adamant.global.v1.LabeledAddressProposal.prototype.setProposedAddress = function(value) {
  jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional bool address_is_reviewed = 6;
 * @return {boolean}
 */
proto.adamant.global.v1.LabeledAddressProposal.prototype.getAddressIsReviewed = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/** @param {boolean} value */
proto.adamant.global.v1.LabeledAddressProposal.prototype.setAddressIsReviewed = function(value) {
  jspb.Message.setProto3BooleanField(this, 6, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.adamant.global.v1.Whitelist.repeatedFields_ = [4];



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
proto.adamant.global.v1.Whitelist.prototype.toObject = function(opt_includeInstance) {
  return proto.adamant.global.v1.Whitelist.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.adamant.global.v1.Whitelist} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.Whitelist.toObject = function(includeInstance, msg) {
  var f, obj = {
    whitelistId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    coin: jspb.Message.getFieldWithDefault(msg, 3, 0),
    addressesList: jspb.Message.toObjectList(msg.getAddressesList(),
    proto.adamant.global.v1.LabeledAddress.toObject, includeInstance),
    createTime: (f = msg.getCreateTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    updateTime: (f = msg.getUpdateTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
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
 * @return {!proto.adamant.global.v1.Whitelist}
 */
proto.adamant.global.v1.Whitelist.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.adamant.global.v1.Whitelist;
  return proto.adamant.global.v1.Whitelist.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.adamant.global.v1.Whitelist} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.adamant.global.v1.Whitelist}
 */
proto.adamant.global.v1.Whitelist.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.adamant.global.v1.LabeledAddress;
      reader.readMessage(value,proto.adamant.global.v1.LabeledAddress.deserializeBinaryFromReader);
      msg.addAddresses(value);
      break;
    case 6:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreateTime(value);
      break;
    case 7:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setUpdateTime(value);
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
proto.adamant.global.v1.Whitelist.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.adamant.global.v1.Whitelist.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.adamant.global.v1.Whitelist} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.Whitelist.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getAddressesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.adamant.global.v1.LabeledAddress.serializeBinaryToWriter
    );
  }
  f = message.getCreateTime();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getUpdateTime();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional string whitelist_id = 1;
 * @return {string}
 */
proto.adamant.global.v1.Whitelist.prototype.getWhitelistId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.adamant.global.v1.Whitelist.prototype.setWhitelistId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.adamant.global.v1.Whitelist.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.adamant.global.v1.Whitelist.prototype.setName = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional gincoinc.global.v1.Coin coin = 3;
 * @return {!proto.gincoinc.global.v1.Coin}
 */
proto.adamant.global.v1.Whitelist.prototype.getCoin = function() {
  return /** @type {!proto.gincoinc.global.v1.Coin} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {!proto.gincoinc.global.v1.Coin} value */
proto.adamant.global.v1.Whitelist.prototype.setCoin = function(value) {
  jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * repeated LabeledAddress addresses = 4;
 * @return {!Array<!proto.adamant.global.v1.LabeledAddress>}
 */
proto.adamant.global.v1.Whitelist.prototype.getAddressesList = function() {
  return /** @type{!Array<!proto.adamant.global.v1.LabeledAddress>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.adamant.global.v1.LabeledAddress, 4));
};


/** @param {!Array<!proto.adamant.global.v1.LabeledAddress>} value */
proto.adamant.global.v1.Whitelist.prototype.setAddressesList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.adamant.global.v1.LabeledAddress=} opt_value
 * @param {number=} opt_index
 * @return {!proto.adamant.global.v1.LabeledAddress}
 */
proto.adamant.global.v1.Whitelist.prototype.addAddresses = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.adamant.global.v1.LabeledAddress, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.adamant.global.v1.Whitelist.prototype.clearAddressesList = function() {
  this.setAddressesList([]);
};


/**
 * optional google.protobuf.Timestamp create_time = 6;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.adamant.global.v1.Whitelist.prototype.getCreateTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 6));
};


/** @param {?proto.google.protobuf.Timestamp|undefined} value */
proto.adamant.global.v1.Whitelist.prototype.setCreateTime = function(value) {
  jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.adamant.global.v1.Whitelist.prototype.clearCreateTime = function() {
  this.setCreateTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.adamant.global.v1.Whitelist.prototype.hasCreateTime = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional google.protobuf.Timestamp update_time = 7;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.adamant.global.v1.Whitelist.prototype.getUpdateTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 7));
};


/** @param {?proto.google.protobuf.Timestamp|undefined} value */
proto.adamant.global.v1.Whitelist.prototype.setUpdateTime = function(value) {
  jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.adamant.global.v1.Whitelist.prototype.clearUpdateTime = function() {
  this.setUpdateTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.adamant.global.v1.Whitelist.prototype.hasUpdateTime = function() {
  return jspb.Message.getField(this, 7) != null;
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
proto.adamant.global.v1.TransferLimit.prototype.toObject = function(opt_includeInstance) {
  return proto.adamant.global.v1.TransferLimit.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.adamant.global.v1.TransferLimit} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.TransferLimit.toObject = function(includeInstance, msg) {
  var f, obj = {
    transferLimitId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    coin: jspb.Message.getFieldWithDefault(msg, 3, 0),
    hourlyLimit: jspb.Message.getFieldWithDefault(msg, 4, 0),
    dailyLimit: jspb.Message.getFieldWithDefault(msg, 5, 0),
    oneTimeLimit: jspb.Message.getFieldWithDefault(msg, 6, 0),
    proposal: (f = msg.getProposal()) && proto.adamant.global.v1.TransferLimitProposal.toObject(includeInstance, f),
    isReviewed: jspb.Message.getBooleanFieldWithDefault(msg, 8, false),
    createTime: (f = msg.getCreateTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    updateTime: (f = msg.getUpdateTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
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
 * @return {!proto.adamant.global.v1.TransferLimit}
 */
proto.adamant.global.v1.TransferLimit.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.adamant.global.v1.TransferLimit;
  return proto.adamant.global.v1.TransferLimit.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.adamant.global.v1.TransferLimit} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.adamant.global.v1.TransferLimit}
 */
proto.adamant.global.v1.TransferLimit.deserializeBinaryFromReader = function(msg, reader) {
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
    case 3:
      var value = /** @type {!proto.gincoinc.global.v1.Coin} */ (reader.readEnum());
      msg.setCoin(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setHourlyLimit(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setDailyLimit(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setOneTimeLimit(value);
      break;
    case 7:
      var value = new proto.adamant.global.v1.TransferLimitProposal;
      reader.readMessage(value,proto.adamant.global.v1.TransferLimitProposal.deserializeBinaryFromReader);
      msg.setProposal(value);
      break;
    case 8:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsReviewed(value);
      break;
    case 10:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreateTime(value);
      break;
    case 11:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setUpdateTime(value);
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
proto.adamant.global.v1.TransferLimit.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.adamant.global.v1.TransferLimit.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.adamant.global.v1.TransferLimit} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.TransferLimit.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getCoin();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getHourlyLimit();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = message.getDailyLimit();
  if (f !== 0) {
    writer.writeInt64(
      5,
      f
    );
  }
  f = message.getOneTimeLimit();
  if (f !== 0) {
    writer.writeInt64(
      6,
      f
    );
  }
  f = message.getProposal();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.adamant.global.v1.TransferLimitProposal.serializeBinaryToWriter
    );
  }
  f = message.getIsReviewed();
  if (f) {
    writer.writeBool(
      8,
      f
    );
  }
  f = message.getCreateTime();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getUpdateTime();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional string transfer_limit_id = 1;
 * @return {string}
 */
proto.adamant.global.v1.TransferLimit.prototype.getTransferLimitId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.adamant.global.v1.TransferLimit.prototype.setTransferLimitId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.adamant.global.v1.TransferLimit.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.adamant.global.v1.TransferLimit.prototype.setName = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional gincoinc.global.v1.Coin coin = 3;
 * @return {!proto.gincoinc.global.v1.Coin}
 */
proto.adamant.global.v1.TransferLimit.prototype.getCoin = function() {
  return /** @type {!proto.gincoinc.global.v1.Coin} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {!proto.gincoinc.global.v1.Coin} value */
proto.adamant.global.v1.TransferLimit.prototype.setCoin = function(value) {
  jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional int64 hourly_limit = 4;
 * @return {number}
 */
proto.adamant.global.v1.TransferLimit.prototype.getHourlyLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.adamant.global.v1.TransferLimit.prototype.setHourlyLimit = function(value) {
  jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional int64 daily_limit = 5;
 * @return {number}
 */
proto.adamant.global.v1.TransferLimit.prototype.getDailyLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/** @param {number} value */
proto.adamant.global.v1.TransferLimit.prototype.setDailyLimit = function(value) {
  jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional int64 one_time_limit = 6;
 * @return {number}
 */
proto.adamant.global.v1.TransferLimit.prototype.getOneTimeLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/** @param {number} value */
proto.adamant.global.v1.TransferLimit.prototype.setOneTimeLimit = function(value) {
  jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional TransferLimitProposal proposal = 7;
 * @return {?proto.adamant.global.v1.TransferLimitProposal}
 */
proto.adamant.global.v1.TransferLimit.prototype.getProposal = function() {
  return /** @type{?proto.adamant.global.v1.TransferLimitProposal} */ (
    jspb.Message.getWrapperField(this, proto.adamant.global.v1.TransferLimitProposal, 7));
};


/** @param {?proto.adamant.global.v1.TransferLimitProposal|undefined} value */
proto.adamant.global.v1.TransferLimit.prototype.setProposal = function(value) {
  jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.adamant.global.v1.TransferLimit.prototype.clearProposal = function() {
  this.setProposal(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.adamant.global.v1.TransferLimit.prototype.hasProposal = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional bool is_reviewed = 8;
 * @return {boolean}
 */
proto.adamant.global.v1.TransferLimit.prototype.getIsReviewed = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 8, false));
};


/** @param {boolean} value */
proto.adamant.global.v1.TransferLimit.prototype.setIsReviewed = function(value) {
  jspb.Message.setProto3BooleanField(this, 8, value);
};


/**
 * optional google.protobuf.Timestamp create_time = 10;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.adamant.global.v1.TransferLimit.prototype.getCreateTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 10));
};


/** @param {?proto.google.protobuf.Timestamp|undefined} value */
proto.adamant.global.v1.TransferLimit.prototype.setCreateTime = function(value) {
  jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.adamant.global.v1.TransferLimit.prototype.clearCreateTime = function() {
  this.setCreateTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.adamant.global.v1.TransferLimit.prototype.hasCreateTime = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional google.protobuf.Timestamp update_time = 11;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.adamant.global.v1.TransferLimit.prototype.getUpdateTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 11));
};


/** @param {?proto.google.protobuf.Timestamp|undefined} value */
proto.adamant.global.v1.TransferLimit.prototype.setUpdateTime = function(value) {
  jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.adamant.global.v1.TransferLimit.prototype.clearUpdateTime = function() {
  this.setUpdateTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.adamant.global.v1.TransferLimit.prototype.hasUpdateTime = function() {
  return jspb.Message.getField(this, 11) != null;
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
proto.adamant.global.v1.TransferLimitProposal.prototype.toObject = function(opt_includeInstance) {
  return proto.adamant.global.v1.TransferLimitProposal.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.adamant.global.v1.TransferLimitProposal} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.TransferLimitProposal.toObject = function(includeInstance, msg) {
  var f, obj = {
    requesterAccountId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    requesterName: jspb.Message.getFieldWithDefault(msg, 2, ""),
    approverAccountId: jspb.Message.getFieldWithDefault(msg, 3, ""),
    approverName: jspb.Message.getFieldWithDefault(msg, 4, ""),
    proposedHourlyLimit: jspb.Message.getFieldWithDefault(msg, 5, 0),
    proposedDailyLimit: jspb.Message.getFieldWithDefault(msg, 6, 0),
    proposedOneTimeLimit: jspb.Message.getFieldWithDefault(msg, 7, 0),
    isReviewed: jspb.Message.getBooleanFieldWithDefault(msg, 8, false)
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
 * @return {!proto.adamant.global.v1.TransferLimitProposal}
 */
proto.adamant.global.v1.TransferLimitProposal.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.adamant.global.v1.TransferLimitProposal;
  return proto.adamant.global.v1.TransferLimitProposal.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.adamant.global.v1.TransferLimitProposal} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.adamant.global.v1.TransferLimitProposal}
 */
proto.adamant.global.v1.TransferLimitProposal.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setRequesterAccountId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setRequesterName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setApproverAccountId(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setApproverName(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setProposedHourlyLimit(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setProposedDailyLimit(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setProposedOneTimeLimit(value);
      break;
    case 8:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsReviewed(value);
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
proto.adamant.global.v1.TransferLimitProposal.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.adamant.global.v1.TransferLimitProposal.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.adamant.global.v1.TransferLimitProposal} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.TransferLimitProposal.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRequesterAccountId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getRequesterName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getApproverAccountId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getApproverName();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getProposedHourlyLimit();
  if (f !== 0) {
    writer.writeInt64(
      5,
      f
    );
  }
  f = message.getProposedDailyLimit();
  if (f !== 0) {
    writer.writeInt64(
      6,
      f
    );
  }
  f = message.getProposedOneTimeLimit();
  if (f !== 0) {
    writer.writeInt64(
      7,
      f
    );
  }
  f = message.getIsReviewed();
  if (f) {
    writer.writeBool(
      8,
      f
    );
  }
};


/**
 * optional string requester_account_id = 1;
 * @return {string}
 */
proto.adamant.global.v1.TransferLimitProposal.prototype.getRequesterAccountId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.adamant.global.v1.TransferLimitProposal.prototype.setRequesterAccountId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string requester_name = 2;
 * @return {string}
 */
proto.adamant.global.v1.TransferLimitProposal.prototype.getRequesterName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.adamant.global.v1.TransferLimitProposal.prototype.setRequesterName = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string approver_account_id = 3;
 * @return {string}
 */
proto.adamant.global.v1.TransferLimitProposal.prototype.getApproverAccountId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.adamant.global.v1.TransferLimitProposal.prototype.setApproverAccountId = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string approver_name = 4;
 * @return {string}
 */
proto.adamant.global.v1.TransferLimitProposal.prototype.getApproverName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.adamant.global.v1.TransferLimitProposal.prototype.setApproverName = function(value) {
  jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional int64 proposed_hourly_limit = 5;
 * @return {number}
 */
proto.adamant.global.v1.TransferLimitProposal.prototype.getProposedHourlyLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/** @param {number} value */
proto.adamant.global.v1.TransferLimitProposal.prototype.setProposedHourlyLimit = function(value) {
  jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional int64 proposed_daily_limit = 6;
 * @return {number}
 */
proto.adamant.global.v1.TransferLimitProposal.prototype.getProposedDailyLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/** @param {number} value */
proto.adamant.global.v1.TransferLimitProposal.prototype.setProposedDailyLimit = function(value) {
  jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional int64 proposed_one_time_limit = 7;
 * @return {number}
 */
proto.adamant.global.v1.TransferLimitProposal.prototype.getProposedOneTimeLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/** @param {number} value */
proto.adamant.global.v1.TransferLimitProposal.prototype.setProposedOneTimeLimit = function(value) {
  jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional bool is_reviewed = 8;
 * @return {boolean}
 */
proto.adamant.global.v1.TransferLimitProposal.prototype.getIsReviewed = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 8, false));
};


/** @param {boolean} value */
proto.adamant.global.v1.TransferLimitProposal.prototype.setIsReviewed = function(value) {
  jspb.Message.setProto3BooleanField(this, 8, value);
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
proto.adamant.global.v1.Policy.prototype.toObject = function(opt_includeInstance) {
  return proto.adamant.global.v1.Policy.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.adamant.global.v1.Policy} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.Policy.toObject = function(includeInstance, msg) {
  var f, obj = {
    policyId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    policyType: jspb.Message.getFieldWithDefault(msg, 2, 0),
    name: jspb.Message.getFieldWithDefault(msg, 3, ""),
    isBasePolicy: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
    coin: jspb.Message.getFieldWithDefault(msg, 5, 0),
    whitelist: (f = msg.getWhitelist()) && proto.adamant.global.v1.Whitelist.toObject(includeInstance, f),
    transferLimit: (f = msg.getTransferLimit()) && proto.adamant.global.v1.TransferLimit.toObject(includeInstance, f),
    proposal: (f = msg.getProposal()) && proto.adamant.global.v1.PolicyProposal.toObject(includeInstance, f),
    createTime: (f = msg.getCreateTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    updateTime: (f = msg.getUpdateTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
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
 * @return {!proto.adamant.global.v1.Policy}
 */
proto.adamant.global.v1.Policy.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.adamant.global.v1.Policy;
  return proto.adamant.global.v1.Policy.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.adamant.global.v1.Policy} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.adamant.global.v1.Policy}
 */
proto.adamant.global.v1.Policy.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {!proto.adamant.global.v1.PolicyType} */ (reader.readEnum());
      msg.setPolicyType(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsBasePolicy(value);
      break;
    case 5:
      var value = /** @type {!proto.gincoinc.global.v1.Coin} */ (reader.readEnum());
      msg.setCoin(value);
      break;
    case 6:
      var value = new proto.adamant.global.v1.Whitelist;
      reader.readMessage(value,proto.adamant.global.v1.Whitelist.deserializeBinaryFromReader);
      msg.setWhitelist(value);
      break;
    case 7:
      var value = new proto.adamant.global.v1.TransferLimit;
      reader.readMessage(value,proto.adamant.global.v1.TransferLimit.deserializeBinaryFromReader);
      msg.setTransferLimit(value);
      break;
    case 11:
      var value = new proto.adamant.global.v1.PolicyProposal;
      reader.readMessage(value,proto.adamant.global.v1.PolicyProposal.deserializeBinaryFromReader);
      msg.setProposal(value);
      break;
    case 9:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreateTime(value);
      break;
    case 10:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setUpdateTime(value);
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
proto.adamant.global.v1.Policy.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.adamant.global.v1.Policy.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.adamant.global.v1.Policy} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.Policy.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPolicyId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPolicyType();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getIsBasePolicy();
  if (f) {
    writer.writeBool(
      4,
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
  f = message.getWhitelist();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.adamant.global.v1.Whitelist.serializeBinaryToWriter
    );
  }
  f = message.getTransferLimit();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.adamant.global.v1.TransferLimit.serializeBinaryToWriter
    );
  }
  f = message.getProposal();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      proto.adamant.global.v1.PolicyProposal.serializeBinaryToWriter
    );
  }
  f = message.getCreateTime();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getUpdateTime();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional string policy_id = 1;
 * @return {string}
 */
proto.adamant.global.v1.Policy.prototype.getPolicyId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.adamant.global.v1.Policy.prototype.setPolicyId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional PolicyType policy_type = 2;
 * @return {!proto.adamant.global.v1.PolicyType}
 */
proto.adamant.global.v1.Policy.prototype.getPolicyType = function() {
  return /** @type {!proto.adamant.global.v1.PolicyType} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {!proto.adamant.global.v1.PolicyType} value */
proto.adamant.global.v1.Policy.prototype.setPolicyType = function(value) {
  jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional string name = 3;
 * @return {string}
 */
proto.adamant.global.v1.Policy.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.adamant.global.v1.Policy.prototype.setName = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional bool is_base_policy = 4;
 * @return {boolean}
 */
proto.adamant.global.v1.Policy.prototype.getIsBasePolicy = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/** @param {boolean} value */
proto.adamant.global.v1.Policy.prototype.setIsBasePolicy = function(value) {
  jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional gincoinc.global.v1.Coin coin = 5;
 * @return {!proto.gincoinc.global.v1.Coin}
 */
proto.adamant.global.v1.Policy.prototype.getCoin = function() {
  return /** @type {!proto.gincoinc.global.v1.Coin} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/** @param {!proto.gincoinc.global.v1.Coin} value */
proto.adamant.global.v1.Policy.prototype.setCoin = function(value) {
  jspb.Message.setProto3EnumField(this, 5, value);
};


/**
 * optional Whitelist whitelist = 6;
 * @return {?proto.adamant.global.v1.Whitelist}
 */
proto.adamant.global.v1.Policy.prototype.getWhitelist = function() {
  return /** @type{?proto.adamant.global.v1.Whitelist} */ (
    jspb.Message.getWrapperField(this, proto.adamant.global.v1.Whitelist, 6));
};


/** @param {?proto.adamant.global.v1.Whitelist|undefined} value */
proto.adamant.global.v1.Policy.prototype.setWhitelist = function(value) {
  jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.adamant.global.v1.Policy.prototype.clearWhitelist = function() {
  this.setWhitelist(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.adamant.global.v1.Policy.prototype.hasWhitelist = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional TransferLimit transfer_limit = 7;
 * @return {?proto.adamant.global.v1.TransferLimit}
 */
proto.adamant.global.v1.Policy.prototype.getTransferLimit = function() {
  return /** @type{?proto.adamant.global.v1.TransferLimit} */ (
    jspb.Message.getWrapperField(this, proto.adamant.global.v1.TransferLimit, 7));
};


/** @param {?proto.adamant.global.v1.TransferLimit|undefined} value */
proto.adamant.global.v1.Policy.prototype.setTransferLimit = function(value) {
  jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.adamant.global.v1.Policy.prototype.clearTransferLimit = function() {
  this.setTransferLimit(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.adamant.global.v1.Policy.prototype.hasTransferLimit = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional PolicyProposal proposal = 11;
 * @return {?proto.adamant.global.v1.PolicyProposal}
 */
proto.adamant.global.v1.Policy.prototype.getProposal = function() {
  return /** @type{?proto.adamant.global.v1.PolicyProposal} */ (
    jspb.Message.getWrapperField(this, proto.adamant.global.v1.PolicyProposal, 11));
};


/** @param {?proto.adamant.global.v1.PolicyProposal|undefined} value */
proto.adamant.global.v1.Policy.prototype.setProposal = function(value) {
  jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.adamant.global.v1.Policy.prototype.clearProposal = function() {
  this.setProposal(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.adamant.global.v1.Policy.prototype.hasProposal = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional google.protobuf.Timestamp create_time = 9;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.adamant.global.v1.Policy.prototype.getCreateTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 9));
};


/** @param {?proto.google.protobuf.Timestamp|undefined} value */
proto.adamant.global.v1.Policy.prototype.setCreateTime = function(value) {
  jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.adamant.global.v1.Policy.prototype.clearCreateTime = function() {
  this.setCreateTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.adamant.global.v1.Policy.prototype.hasCreateTime = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional google.protobuf.Timestamp update_time = 10;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.adamant.global.v1.Policy.prototype.getUpdateTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 10));
};


/** @param {?proto.google.protobuf.Timestamp|undefined} value */
proto.adamant.global.v1.Policy.prototype.setUpdateTime = function(value) {
  jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.adamant.global.v1.Policy.prototype.clearUpdateTime = function() {
  this.setUpdateTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.adamant.global.v1.Policy.prototype.hasUpdateTime = function() {
  return jspb.Message.getField(this, 10) != null;
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
proto.adamant.global.v1.PolicyProposal.prototype.toObject = function(opt_includeInstance) {
  return proto.adamant.global.v1.PolicyProposal.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.adamant.global.v1.PolicyProposal} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.PolicyProposal.toObject = function(includeInstance, msg) {
  var f, obj = {
    requesterAccountId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    requesterName: jspb.Message.getFieldWithDefault(msg, 2, ""),
    approverAccountId: jspb.Message.getFieldWithDefault(msg, 3, ""),
    approverName: jspb.Message.getFieldWithDefault(msg, 4, ""),
    proposedWhitelist: (f = msg.getProposedWhitelist()) && proto.adamant.global.v1.Whitelist.toObject(includeInstance, f),
    isReviewed: jspb.Message.getBooleanFieldWithDefault(msg, 6, false)
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
 * @return {!proto.adamant.global.v1.PolicyProposal}
 */
proto.adamant.global.v1.PolicyProposal.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.adamant.global.v1.PolicyProposal;
  return proto.adamant.global.v1.PolicyProposal.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.adamant.global.v1.PolicyProposal} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.adamant.global.v1.PolicyProposal}
 */
proto.adamant.global.v1.PolicyProposal.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setRequesterAccountId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setRequesterName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setApproverAccountId(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setApproverName(value);
      break;
    case 5:
      var value = new proto.adamant.global.v1.Whitelist;
      reader.readMessage(value,proto.adamant.global.v1.Whitelist.deserializeBinaryFromReader);
      msg.setProposedWhitelist(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsReviewed(value);
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
proto.adamant.global.v1.PolicyProposal.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.adamant.global.v1.PolicyProposal.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.adamant.global.v1.PolicyProposal} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.PolicyProposal.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRequesterAccountId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getRequesterName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getApproverAccountId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getApproverName();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getProposedWhitelist();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.adamant.global.v1.Whitelist.serializeBinaryToWriter
    );
  }
  f = message.getIsReviewed();
  if (f) {
    writer.writeBool(
      6,
      f
    );
  }
};


/**
 * optional string requester_account_id = 1;
 * @return {string}
 */
proto.adamant.global.v1.PolicyProposal.prototype.getRequesterAccountId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.adamant.global.v1.PolicyProposal.prototype.setRequesterAccountId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string requester_name = 2;
 * @return {string}
 */
proto.adamant.global.v1.PolicyProposal.prototype.getRequesterName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.adamant.global.v1.PolicyProposal.prototype.setRequesterName = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string approver_account_id = 3;
 * @return {string}
 */
proto.adamant.global.v1.PolicyProposal.prototype.getApproverAccountId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.adamant.global.v1.PolicyProposal.prototype.setApproverAccountId = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string approver_name = 4;
 * @return {string}
 */
proto.adamant.global.v1.PolicyProposal.prototype.getApproverName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.adamant.global.v1.PolicyProposal.prototype.setApproverName = function(value) {
  jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional Whitelist proposed_whitelist = 5;
 * @return {?proto.adamant.global.v1.Whitelist}
 */
proto.adamant.global.v1.PolicyProposal.prototype.getProposedWhitelist = function() {
  return /** @type{?proto.adamant.global.v1.Whitelist} */ (
    jspb.Message.getWrapperField(this, proto.adamant.global.v1.Whitelist, 5));
};


/** @param {?proto.adamant.global.v1.Whitelist|undefined} value */
proto.adamant.global.v1.PolicyProposal.prototype.setProposedWhitelist = function(value) {
  jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.adamant.global.v1.PolicyProposal.prototype.clearProposedWhitelist = function() {
  this.setProposedWhitelist(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.adamant.global.v1.PolicyProposal.prototype.hasProposedWhitelist = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional bool is_reviewed = 6;
 * @return {boolean}
 */
proto.adamant.global.v1.PolicyProposal.prototype.getIsReviewed = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/** @param {boolean} value */
proto.adamant.global.v1.PolicyProposal.prototype.setIsReviewed = function(value) {
  jspb.Message.setProto3BooleanField(this, 6, value);
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
proto.adamant.global.v1.TotalBalanceByCoin.prototype.toObject = function(opt_includeInstance) {
  return proto.adamant.global.v1.TotalBalanceByCoin.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.adamant.global.v1.TotalBalanceByCoin} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.TotalBalanceByCoin.toObject = function(includeInstance, msg) {
  var f, obj = {
    coin: jspb.Message.getFieldWithDefault(msg, 1, 0),
    coldStringBalance: jspb.Message.getFieldWithDefault(msg, 2, ""),
    hotStringBalance: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.adamant.global.v1.TotalBalanceByCoin}
 */
proto.adamant.global.v1.TotalBalanceByCoin.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.adamant.global.v1.TotalBalanceByCoin;
  return proto.adamant.global.v1.TotalBalanceByCoin.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.adamant.global.v1.TotalBalanceByCoin} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.adamant.global.v1.TotalBalanceByCoin}
 */
proto.adamant.global.v1.TotalBalanceByCoin.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setColdStringBalance(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setHotStringBalance(value);
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
proto.adamant.global.v1.TotalBalanceByCoin.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.adamant.global.v1.TotalBalanceByCoin.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.adamant.global.v1.TotalBalanceByCoin} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.TotalBalanceByCoin.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCoin();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getColdStringBalance();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getHotStringBalance();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional gincoinc.global.v1.Coin coin = 1;
 * @return {!proto.gincoinc.global.v1.Coin}
 */
proto.adamant.global.v1.TotalBalanceByCoin.prototype.getCoin = function() {
  return /** @type {!proto.gincoinc.global.v1.Coin} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {!proto.gincoinc.global.v1.Coin} value */
proto.adamant.global.v1.TotalBalanceByCoin.prototype.setCoin = function(value) {
  jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional string cold_string_balance = 2;
 * @return {string}
 */
proto.adamant.global.v1.TotalBalanceByCoin.prototype.getColdStringBalance = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.adamant.global.v1.TotalBalanceByCoin.prototype.setColdStringBalance = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string hot_string_balance = 3;
 * @return {string}
 */
proto.adamant.global.v1.TotalBalanceByCoin.prototype.getHotStringBalance = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.adamant.global.v1.TotalBalanceByCoin.prototype.setHotStringBalance = function(value) {
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
proto.adamant.global.v1.TotalBalance.prototype.toObject = function(opt_includeInstance) {
  return proto.adamant.global.v1.TotalBalance.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.adamant.global.v1.TotalBalance} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.TotalBalance.toObject = function(includeInstance, msg) {
  var f, obj = {
    totalBalancesMap: (f = msg.getTotalBalancesMap()) ? f.toObject(includeInstance, proto.adamant.global.v1.TotalBalanceByCoin.toObject) : []
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
 * @return {!proto.adamant.global.v1.TotalBalance}
 */
proto.adamant.global.v1.TotalBalance.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.adamant.global.v1.TotalBalance;
  return proto.adamant.global.v1.TotalBalance.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.adamant.global.v1.TotalBalance} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.adamant.global.v1.TotalBalance}
 */
proto.adamant.global.v1.TotalBalance.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = msg.getTotalBalancesMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readUint32, jspb.BinaryReader.prototype.readMessage, proto.adamant.global.v1.TotalBalanceByCoin.deserializeBinaryFromReader, 0);
         });
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
proto.adamant.global.v1.TotalBalance.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.adamant.global.v1.TotalBalance.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.adamant.global.v1.TotalBalance} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.TotalBalance.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTotalBalancesMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(1, writer, jspb.BinaryWriter.prototype.writeUint32, jspb.BinaryWriter.prototype.writeMessage, proto.adamant.global.v1.TotalBalanceByCoin.serializeBinaryToWriter);
  }
};


/**
 * map<uint32, TotalBalanceByCoin> total_balances = 1;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<number,!proto.adamant.global.v1.TotalBalanceByCoin>}
 */
proto.adamant.global.v1.TotalBalance.prototype.getTotalBalancesMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<number,!proto.adamant.global.v1.TotalBalanceByCoin>} */ (
      jspb.Message.getMapField(this, 1, opt_noLazyCreate,
      proto.adamant.global.v1.TotalBalanceByCoin));
};


/**
 * Clears values from the map. The map will be non-null.
 */
proto.adamant.global.v1.TotalBalance.prototype.clearTotalBalancesMap = function() {
  this.getTotalBalancesMap().clear();
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
proto.adamant.global.v1.BalanceSnapshot.prototype.toObject = function(opt_includeInstance) {
  return proto.adamant.global.v1.BalanceSnapshot.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.adamant.global.v1.BalanceSnapshot} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.BalanceSnapshot.toObject = function(includeInstance, msg) {
  var f, obj = {
    createTime: (f = msg.getCreateTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    totalBalancesMap: (f = msg.getTotalBalancesMap()) ? f.toObject(includeInstance, proto.adamant.global.v1.TotalBalanceByCoin.toObject) : [],
    ratesMap: (f = msg.getRatesMap()) ? f.toObject(includeInstance, proto.adamant.global.v1.Rate.toObject) : []
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
 * @return {!proto.adamant.global.v1.BalanceSnapshot}
 */
proto.adamant.global.v1.BalanceSnapshot.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.adamant.global.v1.BalanceSnapshot;
  return proto.adamant.global.v1.BalanceSnapshot.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.adamant.global.v1.BalanceSnapshot} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.adamant.global.v1.BalanceSnapshot}
 */
proto.adamant.global.v1.BalanceSnapshot.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreateTime(value);
      break;
    case 2:
      var value = msg.getTotalBalancesMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readUint32, jspb.BinaryReader.prototype.readMessage, proto.adamant.global.v1.TotalBalanceByCoin.deserializeBinaryFromReader, 0);
         });
      break;
    case 3:
      var value = msg.getRatesMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readUint32, jspb.BinaryReader.prototype.readMessage, proto.adamant.global.v1.Rate.deserializeBinaryFromReader, 0);
         });
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
proto.adamant.global.v1.BalanceSnapshot.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.adamant.global.v1.BalanceSnapshot.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.adamant.global.v1.BalanceSnapshot} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.BalanceSnapshot.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCreateTime();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getTotalBalancesMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(2, writer, jspb.BinaryWriter.prototype.writeUint32, jspb.BinaryWriter.prototype.writeMessage, proto.adamant.global.v1.TotalBalanceByCoin.serializeBinaryToWriter);
  }
  f = message.getRatesMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(3, writer, jspb.BinaryWriter.prototype.writeUint32, jspb.BinaryWriter.prototype.writeMessage, proto.adamant.global.v1.Rate.serializeBinaryToWriter);
  }
};


/**
 * optional google.protobuf.Timestamp create_time = 1;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.adamant.global.v1.BalanceSnapshot.prototype.getCreateTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 1));
};


/** @param {?proto.google.protobuf.Timestamp|undefined} value */
proto.adamant.global.v1.BalanceSnapshot.prototype.setCreateTime = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.adamant.global.v1.BalanceSnapshot.prototype.clearCreateTime = function() {
  this.setCreateTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.adamant.global.v1.BalanceSnapshot.prototype.hasCreateTime = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * map<uint32, TotalBalanceByCoin> total_balances = 2;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<number,!proto.adamant.global.v1.TotalBalanceByCoin>}
 */
proto.adamant.global.v1.BalanceSnapshot.prototype.getTotalBalancesMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<number,!proto.adamant.global.v1.TotalBalanceByCoin>} */ (
      jspb.Message.getMapField(this, 2, opt_noLazyCreate,
      proto.adamant.global.v1.TotalBalanceByCoin));
};


/**
 * Clears values from the map. The map will be non-null.
 */
proto.adamant.global.v1.BalanceSnapshot.prototype.clearTotalBalancesMap = function() {
  this.getTotalBalancesMap().clear();
};


/**
 * map<uint32, Rate> rates = 3;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<number,!proto.adamant.global.v1.Rate>}
 */
proto.adamant.global.v1.BalanceSnapshot.prototype.getRatesMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<number,!proto.adamant.global.v1.Rate>} */ (
      jspb.Message.getMapField(this, 3, opt_noLazyCreate,
      proto.adamant.global.v1.Rate));
};


/**
 * Clears values from the map. The map will be non-null.
 */
proto.adamant.global.v1.BalanceSnapshot.prototype.clearRatesMap = function() {
  this.getRatesMap().clear();
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
proto.adamant.global.v1.WalletBalanceSnapshotMap.prototype.toObject = function(opt_includeInstance) {
  return proto.adamant.global.v1.WalletBalanceSnapshotMap.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.adamant.global.v1.WalletBalanceSnapshotMap} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.WalletBalanceSnapshotMap.toObject = function(includeInstance, msg) {
  var f, obj = {
    walletBalanceSnapshotMapMap: (f = msg.getWalletBalanceSnapshotMapMap()) ? f.toObject(includeInstance, proto.adamant.global.v1.ListWalletBalanceSnapshots.toObject) : []
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
 * @return {!proto.adamant.global.v1.WalletBalanceSnapshotMap}
 */
proto.adamant.global.v1.WalletBalanceSnapshotMap.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.adamant.global.v1.WalletBalanceSnapshotMap;
  return proto.adamant.global.v1.WalletBalanceSnapshotMap.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.adamant.global.v1.WalletBalanceSnapshotMap} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.adamant.global.v1.WalletBalanceSnapshotMap}
 */
proto.adamant.global.v1.WalletBalanceSnapshotMap.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = msg.getWalletBalanceSnapshotMapMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.adamant.global.v1.ListWalletBalanceSnapshots.deserializeBinaryFromReader, "");
         });
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
proto.adamant.global.v1.WalletBalanceSnapshotMap.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.adamant.global.v1.WalletBalanceSnapshotMap.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.adamant.global.v1.WalletBalanceSnapshotMap} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.WalletBalanceSnapshotMap.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getWalletBalanceSnapshotMapMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(1, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.adamant.global.v1.ListWalletBalanceSnapshots.serializeBinaryToWriter);
  }
};


/**
 * map<string, ListWalletBalanceSnapshots> wallet_balance_snapshot_map = 1;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.adamant.global.v1.ListWalletBalanceSnapshots>}
 */
proto.adamant.global.v1.WalletBalanceSnapshotMap.prototype.getWalletBalanceSnapshotMapMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.adamant.global.v1.ListWalletBalanceSnapshots>} */ (
      jspb.Message.getMapField(this, 1, opt_noLazyCreate,
      proto.adamant.global.v1.ListWalletBalanceSnapshots));
};


/**
 * Clears values from the map. The map will be non-null.
 */
proto.adamant.global.v1.WalletBalanceSnapshotMap.prototype.clearWalletBalanceSnapshotMapMap = function() {
  this.getWalletBalanceSnapshotMapMap().clear();
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.adamant.global.v1.ListWalletBalanceSnapshots.repeatedFields_ = [1];



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
proto.adamant.global.v1.ListWalletBalanceSnapshots.prototype.toObject = function(opt_includeInstance) {
  return proto.adamant.global.v1.ListWalletBalanceSnapshots.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.adamant.global.v1.ListWalletBalanceSnapshots} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.ListWalletBalanceSnapshots.toObject = function(includeInstance, msg) {
  var f, obj = {
    walletBalanceSnapshotsList: jspb.Message.toObjectList(msg.getWalletBalanceSnapshotsList(),
    proto.adamant.global.v1.WalletBalanceSnapshot.toObject, includeInstance)
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
 * @return {!proto.adamant.global.v1.ListWalletBalanceSnapshots}
 */
proto.adamant.global.v1.ListWalletBalanceSnapshots.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.adamant.global.v1.ListWalletBalanceSnapshots;
  return proto.adamant.global.v1.ListWalletBalanceSnapshots.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.adamant.global.v1.ListWalletBalanceSnapshots} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.adamant.global.v1.ListWalletBalanceSnapshots}
 */
proto.adamant.global.v1.ListWalletBalanceSnapshots.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.adamant.global.v1.WalletBalanceSnapshot;
      reader.readMessage(value,proto.adamant.global.v1.WalletBalanceSnapshot.deserializeBinaryFromReader);
      msg.addWalletBalanceSnapshots(value);
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
proto.adamant.global.v1.ListWalletBalanceSnapshots.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.adamant.global.v1.ListWalletBalanceSnapshots.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.adamant.global.v1.ListWalletBalanceSnapshots} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.ListWalletBalanceSnapshots.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getWalletBalanceSnapshotsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.adamant.global.v1.WalletBalanceSnapshot.serializeBinaryToWriter
    );
  }
};


/**
 * repeated WalletBalanceSnapshot wallet_balance_snapshots = 1;
 * @return {!Array<!proto.adamant.global.v1.WalletBalanceSnapshot>}
 */
proto.adamant.global.v1.ListWalletBalanceSnapshots.prototype.getWalletBalanceSnapshotsList = function() {
  return /** @type{!Array<!proto.adamant.global.v1.WalletBalanceSnapshot>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.adamant.global.v1.WalletBalanceSnapshot, 1));
};


/** @param {!Array<!proto.adamant.global.v1.WalletBalanceSnapshot>} value */
proto.adamant.global.v1.ListWalletBalanceSnapshots.prototype.setWalletBalanceSnapshotsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.adamant.global.v1.WalletBalanceSnapshot=} opt_value
 * @param {number=} opt_index
 * @return {!proto.adamant.global.v1.WalletBalanceSnapshot}
 */
proto.adamant.global.v1.ListWalletBalanceSnapshots.prototype.addWalletBalanceSnapshots = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.adamant.global.v1.WalletBalanceSnapshot, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.adamant.global.v1.ListWalletBalanceSnapshots.prototype.clearWalletBalanceSnapshotsList = function() {
  this.setWalletBalanceSnapshotsList([]);
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
proto.adamant.global.v1.WalletBalanceSnapshot.prototype.toObject = function(opt_includeInstance) {
  return proto.adamant.global.v1.WalletBalanceSnapshot.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.adamant.global.v1.WalletBalanceSnapshot} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.WalletBalanceSnapshot.toObject = function(includeInstance, msg) {
  var f, obj = {
    createTime: (f = msg.getCreateTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    stringBalance: jspb.Message.getFieldWithDefault(msg, 2, ""),
    jpy: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0)
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
 * @return {!proto.adamant.global.v1.WalletBalanceSnapshot}
 */
proto.adamant.global.v1.WalletBalanceSnapshot.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.adamant.global.v1.WalletBalanceSnapshot;
  return proto.adamant.global.v1.WalletBalanceSnapshot.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.adamant.global.v1.WalletBalanceSnapshot} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.adamant.global.v1.WalletBalanceSnapshot}
 */
proto.adamant.global.v1.WalletBalanceSnapshot.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreateTime(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setStringBalance(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setJpy(value);
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
proto.adamant.global.v1.WalletBalanceSnapshot.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.adamant.global.v1.WalletBalanceSnapshot.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.adamant.global.v1.WalletBalanceSnapshot} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.WalletBalanceSnapshot.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCreateTime();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getStringBalance();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getJpy();
  if (f !== 0.0) {
    writer.writeDouble(
      3,
      f
    );
  }
};


/**
 * optional google.protobuf.Timestamp create_time = 1;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.adamant.global.v1.WalletBalanceSnapshot.prototype.getCreateTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 1));
};


/** @param {?proto.google.protobuf.Timestamp|undefined} value */
proto.adamant.global.v1.WalletBalanceSnapshot.prototype.setCreateTime = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.adamant.global.v1.WalletBalanceSnapshot.prototype.clearCreateTime = function() {
  this.setCreateTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.adamant.global.v1.WalletBalanceSnapshot.prototype.hasCreateTime = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string string_balance = 2;
 * @return {string}
 */
proto.adamant.global.v1.WalletBalanceSnapshot.prototype.getStringBalance = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.adamant.global.v1.WalletBalanceSnapshot.prototype.setStringBalance = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional double jpy = 3;
 * @return {number}
 */
proto.adamant.global.v1.WalletBalanceSnapshot.prototype.getJpy = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/** @param {number} value */
proto.adamant.global.v1.WalletBalanceSnapshot.prototype.setJpy = function(value) {
  jspb.Message.setProto3FloatField(this, 3, value);
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
proto.adamant.global.v1.TransferVolumeSnapshots.prototype.toObject = function(opt_includeInstance) {
  return proto.adamant.global.v1.TransferVolumeSnapshots.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.adamant.global.v1.TransferVolumeSnapshots} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.TransferVolumeSnapshots.toObject = function(includeInstance, msg) {
  var f, obj = {
    transferVolumeSnapshotByTransferTypeMap: (f = msg.getTransferVolumeSnapshotByTransferTypeMap()) ? f.toObject(includeInstance, proto.adamant.global.v1.ListTransferVolumeSnapshots.toObject) : []
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
 * @return {!proto.adamant.global.v1.TransferVolumeSnapshots}
 */
proto.adamant.global.v1.TransferVolumeSnapshots.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.adamant.global.v1.TransferVolumeSnapshots;
  return proto.adamant.global.v1.TransferVolumeSnapshots.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.adamant.global.v1.TransferVolumeSnapshots} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.adamant.global.v1.TransferVolumeSnapshots}
 */
proto.adamant.global.v1.TransferVolumeSnapshots.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = msg.getTransferVolumeSnapshotByTransferTypeMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readInt32, jspb.BinaryReader.prototype.readMessage, proto.adamant.global.v1.ListTransferVolumeSnapshots.deserializeBinaryFromReader, 0);
         });
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
proto.adamant.global.v1.TransferVolumeSnapshots.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.adamant.global.v1.TransferVolumeSnapshots.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.adamant.global.v1.TransferVolumeSnapshots} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.TransferVolumeSnapshots.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTransferVolumeSnapshotByTransferTypeMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(1, writer, jspb.BinaryWriter.prototype.writeInt32, jspb.BinaryWriter.prototype.writeMessage, proto.adamant.global.v1.ListTransferVolumeSnapshots.serializeBinaryToWriter);
  }
};


/**
 * map<int32, ListTransferVolumeSnapshots> transfer_volume_snapshot_by_transfer_type = 1;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<number,!proto.adamant.global.v1.ListTransferVolumeSnapshots>}
 */
proto.adamant.global.v1.TransferVolumeSnapshots.prototype.getTransferVolumeSnapshotByTransferTypeMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<number,!proto.adamant.global.v1.ListTransferVolumeSnapshots>} */ (
      jspb.Message.getMapField(this, 1, opt_noLazyCreate,
      proto.adamant.global.v1.ListTransferVolumeSnapshots));
};


/**
 * Clears values from the map. The map will be non-null.
 */
proto.adamant.global.v1.TransferVolumeSnapshots.prototype.clearTransferVolumeSnapshotByTransferTypeMap = function() {
  this.getTransferVolumeSnapshotByTransferTypeMap().clear();
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.adamant.global.v1.ListTransferVolumeSnapshots.repeatedFields_ = [1];



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
proto.adamant.global.v1.ListTransferVolumeSnapshots.prototype.toObject = function(opt_includeInstance) {
  return proto.adamant.global.v1.ListTransferVolumeSnapshots.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.adamant.global.v1.ListTransferVolumeSnapshots} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.ListTransferVolumeSnapshots.toObject = function(includeInstance, msg) {
  var f, obj = {
    transferVolumeSnapshotsList: jspb.Message.toObjectList(msg.getTransferVolumeSnapshotsList(),
    proto.adamant.global.v1.TransferVolumeSnapshot.toObject, includeInstance)
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
 * @return {!proto.adamant.global.v1.ListTransferVolumeSnapshots}
 */
proto.adamant.global.v1.ListTransferVolumeSnapshots.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.adamant.global.v1.ListTransferVolumeSnapshots;
  return proto.adamant.global.v1.ListTransferVolumeSnapshots.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.adamant.global.v1.ListTransferVolumeSnapshots} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.adamant.global.v1.ListTransferVolumeSnapshots}
 */
proto.adamant.global.v1.ListTransferVolumeSnapshots.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.adamant.global.v1.TransferVolumeSnapshot;
      reader.readMessage(value,proto.adamant.global.v1.TransferVolumeSnapshot.deserializeBinaryFromReader);
      msg.addTransferVolumeSnapshots(value);
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
proto.adamant.global.v1.ListTransferVolumeSnapshots.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.adamant.global.v1.ListTransferVolumeSnapshots.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.adamant.global.v1.ListTransferVolumeSnapshots} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.ListTransferVolumeSnapshots.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTransferVolumeSnapshotsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.adamant.global.v1.TransferVolumeSnapshot.serializeBinaryToWriter
    );
  }
};


/**
 * repeated TransferVolumeSnapshot transfer_volume_snapshots = 1;
 * @return {!Array<!proto.adamant.global.v1.TransferVolumeSnapshot>}
 */
proto.adamant.global.v1.ListTransferVolumeSnapshots.prototype.getTransferVolumeSnapshotsList = function() {
  return /** @type{!Array<!proto.adamant.global.v1.TransferVolumeSnapshot>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.adamant.global.v1.TransferVolumeSnapshot, 1));
};


/** @param {!Array<!proto.adamant.global.v1.TransferVolumeSnapshot>} value */
proto.adamant.global.v1.ListTransferVolumeSnapshots.prototype.setTransferVolumeSnapshotsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.adamant.global.v1.TransferVolumeSnapshot=} opt_value
 * @param {number=} opt_index
 * @return {!proto.adamant.global.v1.TransferVolumeSnapshot}
 */
proto.adamant.global.v1.ListTransferVolumeSnapshots.prototype.addTransferVolumeSnapshots = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.adamant.global.v1.TransferVolumeSnapshot, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.adamant.global.v1.ListTransferVolumeSnapshots.prototype.clearTransferVolumeSnapshotsList = function() {
  this.setTransferVolumeSnapshotsList([]);
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
proto.adamant.global.v1.TransferVolumeSnapshot.prototype.toObject = function(opt_includeInstance) {
  return proto.adamant.global.v1.TransferVolumeSnapshot.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.adamant.global.v1.TransferVolumeSnapshot} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.TransferVolumeSnapshot.toObject = function(includeInstance, msg) {
  var f, obj = {
    targetTime: (f = msg.getTargetTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    transferVolumeByCoinMap: (f = msg.getTransferVolumeByCoinMap()) ? f.toObject(includeInstance, proto.adamant.global.v1.TransferVolume.toObject) : []
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
 * @return {!proto.adamant.global.v1.TransferVolumeSnapshot}
 */
proto.adamant.global.v1.TransferVolumeSnapshot.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.adamant.global.v1.TransferVolumeSnapshot;
  return proto.adamant.global.v1.TransferVolumeSnapshot.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.adamant.global.v1.TransferVolumeSnapshot} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.adamant.global.v1.TransferVolumeSnapshot}
 */
proto.adamant.global.v1.TransferVolumeSnapshot.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setTargetTime(value);
      break;
    case 2:
      var value = msg.getTransferVolumeByCoinMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readInt32, jspb.BinaryReader.prototype.readMessage, proto.adamant.global.v1.TransferVolume.deserializeBinaryFromReader, 0);
         });
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
proto.adamant.global.v1.TransferVolumeSnapshot.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.adamant.global.v1.TransferVolumeSnapshot.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.adamant.global.v1.TransferVolumeSnapshot} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.TransferVolumeSnapshot.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTargetTime();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getTransferVolumeByCoinMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(2, writer, jspb.BinaryWriter.prototype.writeInt32, jspb.BinaryWriter.prototype.writeMessage, proto.adamant.global.v1.TransferVolume.serializeBinaryToWriter);
  }
};


/**
 * optional google.protobuf.Timestamp target_time = 1;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.adamant.global.v1.TransferVolumeSnapshot.prototype.getTargetTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 1));
};


/** @param {?proto.google.protobuf.Timestamp|undefined} value */
proto.adamant.global.v1.TransferVolumeSnapshot.prototype.setTargetTime = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.adamant.global.v1.TransferVolumeSnapshot.prototype.clearTargetTime = function() {
  this.setTargetTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.adamant.global.v1.TransferVolumeSnapshot.prototype.hasTargetTime = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * map<int32, TransferVolume> transfer_volume_by_coin = 2;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<number,!proto.adamant.global.v1.TransferVolume>}
 */
proto.adamant.global.v1.TransferVolumeSnapshot.prototype.getTransferVolumeByCoinMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<number,!proto.adamant.global.v1.TransferVolume>} */ (
      jspb.Message.getMapField(this, 2, opt_noLazyCreate,
      proto.adamant.global.v1.TransferVolume));
};


/**
 * Clears values from the map. The map will be non-null.
 */
proto.adamant.global.v1.TransferVolumeSnapshot.prototype.clearTransferVolumeByCoinMap = function() {
  this.getTransferVolumeByCoinMap().clear();
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
proto.adamant.global.v1.TransferVolume.prototype.toObject = function(opt_includeInstance) {
  return proto.adamant.global.v1.TransferVolume.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.adamant.global.v1.TransferVolume} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.TransferVolume.toObject = function(includeInstance, msg) {
  var f, obj = {
    coin: jspb.Message.getFieldWithDefault(msg, 1, 0),
    hotStringVolume: jspb.Message.getFieldWithDefault(msg, 2, ""),
    coldStringVolume: jspb.Message.getFieldWithDefault(msg, 3, ""),
    hotStringJpyVolume: jspb.Message.getFieldWithDefault(msg, 4, ""),
    coldStringJpyVolume: jspb.Message.getFieldWithDefault(msg, 5, ""),
    hotNumber: jspb.Message.getFieldWithDefault(msg, 6, 0),
    coldNumber: jspb.Message.getFieldWithDefault(msg, 7, 0),
    transferType: jspb.Message.getFieldWithDefault(msg, 8, 0)
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
 * @return {!proto.adamant.global.v1.TransferVolume}
 */
proto.adamant.global.v1.TransferVolume.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.adamant.global.v1.TransferVolume;
  return proto.adamant.global.v1.TransferVolume.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.adamant.global.v1.TransferVolume} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.adamant.global.v1.TransferVolume}
 */
proto.adamant.global.v1.TransferVolume.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setHotStringVolume(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setColdStringVolume(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setHotStringJpyVolume(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setColdStringJpyVolume(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setHotNumber(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setColdNumber(value);
      break;
    case 8:
      var value = /** @type {!proto.gincoinc.global.v1.TransferType} */ (reader.readEnum());
      msg.setTransferType(value);
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
proto.adamant.global.v1.TransferVolume.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.adamant.global.v1.TransferVolume.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.adamant.global.v1.TransferVolume} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.TransferVolume.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCoin();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getHotStringVolume();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getColdStringVolume();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getHotStringJpyVolume();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getColdStringJpyVolume();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getHotNumber();
  if (f !== 0) {
    writer.writeInt64(
      6,
      f
    );
  }
  f = message.getColdNumber();
  if (f !== 0) {
    writer.writeInt64(
      7,
      f
    );
  }
  f = message.getTransferType();
  if (f !== 0.0) {
    writer.writeEnum(
      8,
      f
    );
  }
};


/**
 * optional gincoinc.global.v1.Coin coin = 1;
 * @return {!proto.gincoinc.global.v1.Coin}
 */
proto.adamant.global.v1.TransferVolume.prototype.getCoin = function() {
  return /** @type {!proto.gincoinc.global.v1.Coin} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {!proto.gincoinc.global.v1.Coin} value */
proto.adamant.global.v1.TransferVolume.prototype.setCoin = function(value) {
  jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional string hot_string_volume = 2;
 * @return {string}
 */
proto.adamant.global.v1.TransferVolume.prototype.getHotStringVolume = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.adamant.global.v1.TransferVolume.prototype.setHotStringVolume = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string cold_string_volume = 3;
 * @return {string}
 */
proto.adamant.global.v1.TransferVolume.prototype.getColdStringVolume = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.adamant.global.v1.TransferVolume.prototype.setColdStringVolume = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string hot_string_jpy_volume = 4;
 * @return {string}
 */
proto.adamant.global.v1.TransferVolume.prototype.getHotStringJpyVolume = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.adamant.global.v1.TransferVolume.prototype.setHotStringJpyVolume = function(value) {
  jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string cold_string_jpy_volume = 5;
 * @return {string}
 */
proto.adamant.global.v1.TransferVolume.prototype.getColdStringJpyVolume = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/** @param {string} value */
proto.adamant.global.v1.TransferVolume.prototype.setColdStringJpyVolume = function(value) {
  jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional int64 hot_number = 6;
 * @return {number}
 */
proto.adamant.global.v1.TransferVolume.prototype.getHotNumber = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/** @param {number} value */
proto.adamant.global.v1.TransferVolume.prototype.setHotNumber = function(value) {
  jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional int64 cold_number = 7;
 * @return {number}
 */
proto.adamant.global.v1.TransferVolume.prototype.getColdNumber = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/** @param {number} value */
proto.adamant.global.v1.TransferVolume.prototype.setColdNumber = function(value) {
  jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional gincoinc.global.v1.TransferType transfer_type = 8;
 * @return {!proto.gincoinc.global.v1.TransferType}
 */
proto.adamant.global.v1.TransferVolume.prototype.getTransferType = function() {
  return /** @type {!proto.gincoinc.global.v1.TransferType} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/** @param {!proto.gincoinc.global.v1.TransferType} value */
proto.adamant.global.v1.TransferVolume.prototype.setTransferType = function(value) {
  jspb.Message.setProto3EnumField(this, 8, value);
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
proto.adamant.global.v1.WalletTransferVolumeSnapshots.prototype.toObject = function(opt_includeInstance) {
  return proto.adamant.global.v1.WalletTransferVolumeSnapshots.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.adamant.global.v1.WalletTransferVolumeSnapshots} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.WalletTransferVolumeSnapshots.toObject = function(includeInstance, msg) {
  var f, obj = {
    walletTransferVolumeSnapshotByWalletIdMap: (f = msg.getWalletTransferVolumeSnapshotByWalletIdMap()) ? f.toObject(includeInstance, proto.adamant.global.v1.ListWalletTransferVolumeSnapshots.toObject) : []
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
 * @return {!proto.adamant.global.v1.WalletTransferVolumeSnapshots}
 */
proto.adamant.global.v1.WalletTransferVolumeSnapshots.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.adamant.global.v1.WalletTransferVolumeSnapshots;
  return proto.adamant.global.v1.WalletTransferVolumeSnapshots.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.adamant.global.v1.WalletTransferVolumeSnapshots} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.adamant.global.v1.WalletTransferVolumeSnapshots}
 */
proto.adamant.global.v1.WalletTransferVolumeSnapshots.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = msg.getWalletTransferVolumeSnapshotByWalletIdMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.adamant.global.v1.ListWalletTransferVolumeSnapshots.deserializeBinaryFromReader, "");
         });
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
proto.adamant.global.v1.WalletTransferVolumeSnapshots.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.adamant.global.v1.WalletTransferVolumeSnapshots.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.adamant.global.v1.WalletTransferVolumeSnapshots} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.WalletTransferVolumeSnapshots.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getWalletTransferVolumeSnapshotByWalletIdMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(1, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.adamant.global.v1.ListWalletTransferVolumeSnapshots.serializeBinaryToWriter);
  }
};


/**
 * map<string, ListWalletTransferVolumeSnapshots> wallet_transfer_volume_snapshot_by_wallet_id = 1;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.adamant.global.v1.ListWalletTransferVolumeSnapshots>}
 */
proto.adamant.global.v1.WalletTransferVolumeSnapshots.prototype.getWalletTransferVolumeSnapshotByWalletIdMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.adamant.global.v1.ListWalletTransferVolumeSnapshots>} */ (
      jspb.Message.getMapField(this, 1, opt_noLazyCreate,
      proto.adamant.global.v1.ListWalletTransferVolumeSnapshots));
};


/**
 * Clears values from the map. The map will be non-null.
 */
proto.adamant.global.v1.WalletTransferVolumeSnapshots.prototype.clearWalletTransferVolumeSnapshotByWalletIdMap = function() {
  this.getWalletTransferVolumeSnapshotByWalletIdMap().clear();
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.adamant.global.v1.ListWalletTransferVolumeSnapshots.repeatedFields_ = [1];



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
proto.adamant.global.v1.ListWalletTransferVolumeSnapshots.prototype.toObject = function(opt_includeInstance) {
  return proto.adamant.global.v1.ListWalletTransferVolumeSnapshots.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.adamant.global.v1.ListWalletTransferVolumeSnapshots} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.ListWalletTransferVolumeSnapshots.toObject = function(includeInstance, msg) {
  var f, obj = {
    walletTransferVolumeSnapshotsList: jspb.Message.toObjectList(msg.getWalletTransferVolumeSnapshotsList(),
    proto.adamant.global.v1.WalletTransferVolumeSnapshot.toObject, includeInstance)
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
 * @return {!proto.adamant.global.v1.ListWalletTransferVolumeSnapshots}
 */
proto.adamant.global.v1.ListWalletTransferVolumeSnapshots.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.adamant.global.v1.ListWalletTransferVolumeSnapshots;
  return proto.adamant.global.v1.ListWalletTransferVolumeSnapshots.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.adamant.global.v1.ListWalletTransferVolumeSnapshots} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.adamant.global.v1.ListWalletTransferVolumeSnapshots}
 */
proto.adamant.global.v1.ListWalletTransferVolumeSnapshots.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.adamant.global.v1.WalletTransferVolumeSnapshot;
      reader.readMessage(value,proto.adamant.global.v1.WalletTransferVolumeSnapshot.deserializeBinaryFromReader);
      msg.addWalletTransferVolumeSnapshots(value);
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
proto.adamant.global.v1.ListWalletTransferVolumeSnapshots.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.adamant.global.v1.ListWalletTransferVolumeSnapshots.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.adamant.global.v1.ListWalletTransferVolumeSnapshots} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.ListWalletTransferVolumeSnapshots.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getWalletTransferVolumeSnapshotsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.adamant.global.v1.WalletTransferVolumeSnapshot.serializeBinaryToWriter
    );
  }
};


/**
 * repeated WalletTransferVolumeSnapshot wallet_transfer_volume_snapshots = 1;
 * @return {!Array<!proto.adamant.global.v1.WalletTransferVolumeSnapshot>}
 */
proto.adamant.global.v1.ListWalletTransferVolumeSnapshots.prototype.getWalletTransferVolumeSnapshotsList = function() {
  return /** @type{!Array<!proto.adamant.global.v1.WalletTransferVolumeSnapshot>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.adamant.global.v1.WalletTransferVolumeSnapshot, 1));
};


/** @param {!Array<!proto.adamant.global.v1.WalletTransferVolumeSnapshot>} value */
proto.adamant.global.v1.ListWalletTransferVolumeSnapshots.prototype.setWalletTransferVolumeSnapshotsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.adamant.global.v1.WalletTransferVolumeSnapshot=} opt_value
 * @param {number=} opt_index
 * @return {!proto.adamant.global.v1.WalletTransferVolumeSnapshot}
 */
proto.adamant.global.v1.ListWalletTransferVolumeSnapshots.prototype.addWalletTransferVolumeSnapshots = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.adamant.global.v1.WalletTransferVolumeSnapshot, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.adamant.global.v1.ListWalletTransferVolumeSnapshots.prototype.clearWalletTransferVolumeSnapshotsList = function() {
  this.setWalletTransferVolumeSnapshotsList([]);
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
proto.adamant.global.v1.WalletTransferVolumeSnapshot.prototype.toObject = function(opt_includeInstance) {
  return proto.adamant.global.v1.WalletTransferVolumeSnapshot.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.adamant.global.v1.WalletTransferVolumeSnapshot} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.WalletTransferVolumeSnapshot.toObject = function(includeInstance, msg) {
  var f, obj = {
    targetTime: (f = msg.getTargetTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    walletTransferVolumeByTransferTypeMap: (f = msg.getWalletTransferVolumeByTransferTypeMap()) ? f.toObject(includeInstance, proto.adamant.global.v1.WalletTransferVolume.toObject) : []
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
 * @return {!proto.adamant.global.v1.WalletTransferVolumeSnapshot}
 */
proto.adamant.global.v1.WalletTransferVolumeSnapshot.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.adamant.global.v1.WalletTransferVolumeSnapshot;
  return proto.adamant.global.v1.WalletTransferVolumeSnapshot.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.adamant.global.v1.WalletTransferVolumeSnapshot} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.adamant.global.v1.WalletTransferVolumeSnapshot}
 */
proto.adamant.global.v1.WalletTransferVolumeSnapshot.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setTargetTime(value);
      break;
    case 2:
      var value = msg.getWalletTransferVolumeByTransferTypeMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readInt32, jspb.BinaryReader.prototype.readMessage, proto.adamant.global.v1.WalletTransferVolume.deserializeBinaryFromReader, 0);
         });
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
proto.adamant.global.v1.WalletTransferVolumeSnapshot.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.adamant.global.v1.WalletTransferVolumeSnapshot.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.adamant.global.v1.WalletTransferVolumeSnapshot} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.WalletTransferVolumeSnapshot.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTargetTime();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getWalletTransferVolumeByTransferTypeMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(2, writer, jspb.BinaryWriter.prototype.writeInt32, jspb.BinaryWriter.prototype.writeMessage, proto.adamant.global.v1.WalletTransferVolume.serializeBinaryToWriter);
  }
};


/**
 * optional google.protobuf.Timestamp target_time = 1;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.adamant.global.v1.WalletTransferVolumeSnapshot.prototype.getTargetTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 1));
};


/** @param {?proto.google.protobuf.Timestamp|undefined} value */
proto.adamant.global.v1.WalletTransferVolumeSnapshot.prototype.setTargetTime = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.adamant.global.v1.WalletTransferVolumeSnapshot.prototype.clearTargetTime = function() {
  this.setTargetTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.adamant.global.v1.WalletTransferVolumeSnapshot.prototype.hasTargetTime = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * map<int32, WalletTransferVolume> wallet_transfer_volume_by_transfer_type = 2;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<number,!proto.adamant.global.v1.WalletTransferVolume>}
 */
proto.adamant.global.v1.WalletTransferVolumeSnapshot.prototype.getWalletTransferVolumeByTransferTypeMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<number,!proto.adamant.global.v1.WalletTransferVolume>} */ (
      jspb.Message.getMapField(this, 2, opt_noLazyCreate,
      proto.adamant.global.v1.WalletTransferVolume));
};


/**
 * Clears values from the map. The map will be non-null.
 */
proto.adamant.global.v1.WalletTransferVolumeSnapshot.prototype.clearWalletTransferVolumeByTransferTypeMap = function() {
  this.getWalletTransferVolumeByTransferTypeMap().clear();
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
proto.adamant.global.v1.WalletTransferVolume.prototype.toObject = function(opt_includeInstance) {
  return proto.adamant.global.v1.WalletTransferVolume.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.adamant.global.v1.WalletTransferVolume} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.WalletTransferVolume.toObject = function(includeInstance, msg) {
  var f, obj = {
    stringVolume: jspb.Message.getFieldWithDefault(msg, 1, ""),
    stringJpyVolume: jspb.Message.getFieldWithDefault(msg, 2, ""),
    number: jspb.Message.getFieldWithDefault(msg, 3, 0),
    transferType: jspb.Message.getFieldWithDefault(msg, 4, 0)
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
 * @return {!proto.adamant.global.v1.WalletTransferVolume}
 */
proto.adamant.global.v1.WalletTransferVolume.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.adamant.global.v1.WalletTransferVolume;
  return proto.adamant.global.v1.WalletTransferVolume.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.adamant.global.v1.WalletTransferVolume} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.adamant.global.v1.WalletTransferVolume}
 */
proto.adamant.global.v1.WalletTransferVolume.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setStringVolume(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setStringJpyVolume(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setNumber(value);
      break;
    case 4:
      var value = /** @type {!proto.gincoinc.global.v1.TransferType} */ (reader.readEnum());
      msg.setTransferType(value);
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
proto.adamant.global.v1.WalletTransferVolume.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.adamant.global.v1.WalletTransferVolume.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.adamant.global.v1.WalletTransferVolume} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.WalletTransferVolume.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStringVolume();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getStringJpyVolume();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getNumber();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getTransferType();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
};


/**
 * optional string string_volume = 1;
 * @return {string}
 */
proto.adamant.global.v1.WalletTransferVolume.prototype.getStringVolume = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.adamant.global.v1.WalletTransferVolume.prototype.setStringVolume = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string string_jpy_volume = 2;
 * @return {string}
 */
proto.adamant.global.v1.WalletTransferVolume.prototype.getStringJpyVolume = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.adamant.global.v1.WalletTransferVolume.prototype.setStringJpyVolume = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int64 number = 3;
 * @return {number}
 */
proto.adamant.global.v1.WalletTransferVolume.prototype.getNumber = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.adamant.global.v1.WalletTransferVolume.prototype.setNumber = function(value) {
  jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional gincoinc.global.v1.TransferType transfer_type = 4;
 * @return {!proto.gincoinc.global.v1.TransferType}
 */
proto.adamant.global.v1.WalletTransferVolume.prototype.getTransferType = function() {
  return /** @type {!proto.gincoinc.global.v1.TransferType} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {!proto.gincoinc.global.v1.TransferType} value */
proto.adamant.global.v1.WalletTransferVolume.prototype.setTransferType = function(value) {
  jspb.Message.setProto3EnumField(this, 4, value);
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
proto.adamant.global.v1.Confirmation.prototype.toObject = function(opt_includeInstance) {
  return proto.adamant.global.v1.Confirmation.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.adamant.global.v1.Confirmation} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.Confirmation.toObject = function(includeInstance, msg) {
  var f, obj = {
    coin: jspb.Message.getFieldWithDefault(msg, 1, 0),
    confirmation: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.adamant.global.v1.Confirmation}
 */
proto.adamant.global.v1.Confirmation.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.adamant.global.v1.Confirmation;
  return proto.adamant.global.v1.Confirmation.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.adamant.global.v1.Confirmation} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.adamant.global.v1.Confirmation}
 */
proto.adamant.global.v1.Confirmation.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {number} */ (reader.readUint32());
      msg.setConfirmation(value);
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
proto.adamant.global.v1.Confirmation.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.adamant.global.v1.Confirmation.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.adamant.global.v1.Confirmation} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.Confirmation.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCoin();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getConfirmation();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
};


/**
 * optional gincoinc.global.v1.Coin coin = 1;
 * @return {!proto.gincoinc.global.v1.Coin}
 */
proto.adamant.global.v1.Confirmation.prototype.getCoin = function() {
  return /** @type {!proto.gincoinc.global.v1.Coin} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {!proto.gincoinc.global.v1.Coin} value */
proto.adamant.global.v1.Confirmation.prototype.setCoin = function(value) {
  jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional uint32 confirmation = 2;
 * @return {number}
 */
proto.adamant.global.v1.Confirmation.prototype.getConfirmation = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.adamant.global.v1.Confirmation.prototype.setConfirmation = function(value) {
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
proto.adamant.global.v1.WalletFlushSetting.prototype.toObject = function(opt_includeInstance) {
  return proto.adamant.global.v1.WalletFlushSetting.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.adamant.global.v1.WalletFlushSetting} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.WalletFlushSetting.toObject = function(includeInstance, msg) {
  var f, obj = {
    ownerId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    coin: jspb.Message.getFieldWithDefault(msg, 2, 0),
    destinationWalletId: jspb.Message.getFieldWithDefault(msg, 3, ""),
    createTime: (f = msg.getCreateTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    updateTime: (f = msg.getUpdateTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
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
 * @return {!proto.adamant.global.v1.WalletFlushSetting}
 */
proto.adamant.global.v1.WalletFlushSetting.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.adamant.global.v1.WalletFlushSetting;
  return proto.adamant.global.v1.WalletFlushSetting.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.adamant.global.v1.WalletFlushSetting} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.adamant.global.v1.WalletFlushSetting}
 */
proto.adamant.global.v1.WalletFlushSetting.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setOwnerId(value);
      break;
    case 2:
      var value = /** @type {!proto.gincoinc.global.v1.Coin} */ (reader.readEnum());
      msg.setCoin(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDestinationWalletId(value);
      break;
    case 4:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreateTime(value);
      break;
    case 5:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setUpdateTime(value);
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
proto.adamant.global.v1.WalletFlushSetting.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.adamant.global.v1.WalletFlushSetting.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.adamant.global.v1.WalletFlushSetting} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.WalletFlushSetting.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOwnerId();
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
  f = message.getDestinationWalletId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getCreateTime();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getUpdateTime();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional string owner_id = 1;
 * @return {string}
 */
proto.adamant.global.v1.WalletFlushSetting.prototype.getOwnerId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.adamant.global.v1.WalletFlushSetting.prototype.setOwnerId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional gincoinc.global.v1.Coin coin = 2;
 * @return {!proto.gincoinc.global.v1.Coin}
 */
proto.adamant.global.v1.WalletFlushSetting.prototype.getCoin = function() {
  return /** @type {!proto.gincoinc.global.v1.Coin} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {!proto.gincoinc.global.v1.Coin} value */
proto.adamant.global.v1.WalletFlushSetting.prototype.setCoin = function(value) {
  jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional string destination_wallet_id = 3;
 * @return {string}
 */
proto.adamant.global.v1.WalletFlushSetting.prototype.getDestinationWalletId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.adamant.global.v1.WalletFlushSetting.prototype.setDestinationWalletId = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional google.protobuf.Timestamp create_time = 4;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.adamant.global.v1.WalletFlushSetting.prototype.getCreateTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 4));
};


/** @param {?proto.google.protobuf.Timestamp|undefined} value */
proto.adamant.global.v1.WalletFlushSetting.prototype.setCreateTime = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.adamant.global.v1.WalletFlushSetting.prototype.clearCreateTime = function() {
  this.setCreateTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.adamant.global.v1.WalletFlushSetting.prototype.hasCreateTime = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional google.protobuf.Timestamp update_time = 5;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.adamant.global.v1.WalletFlushSetting.prototype.getUpdateTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 5));
};


/** @param {?proto.google.protobuf.Timestamp|undefined} value */
proto.adamant.global.v1.WalletFlushSetting.prototype.setUpdateTime = function(value) {
  jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.adamant.global.v1.WalletFlushSetting.prototype.clearUpdateTime = function() {
  this.setUpdateTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.adamant.global.v1.WalletFlushSetting.prototype.hasUpdateTime = function() {
  return jspb.Message.getField(this, 5) != null;
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
proto.adamant.global.v1.CompensationFee.prototype.toObject = function(opt_includeInstance) {
  return proto.adamant.global.v1.CompensationFee.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.adamant.global.v1.CompensationFee} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.CompensationFee.toObject = function(includeInstance, msg) {
  var f, obj = {
    stringValue: jspb.Message.getFieldWithDefault(msg, 1, ""),
    isSpent: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    createTime: (f = msg.getCreateTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
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
 * @return {!proto.adamant.global.v1.CompensationFee}
 */
proto.adamant.global.v1.CompensationFee.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.adamant.global.v1.CompensationFee;
  return proto.adamant.global.v1.CompensationFee.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.adamant.global.v1.CompensationFee} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.adamant.global.v1.CompensationFee}
 */
proto.adamant.global.v1.CompensationFee.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setStringValue(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsSpent(value);
      break;
    case 3:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreateTime(value);
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
proto.adamant.global.v1.CompensationFee.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.adamant.global.v1.CompensationFee.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.adamant.global.v1.CompensationFee} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.CompensationFee.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStringValue();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getIsSpent();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getCreateTime();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional string string_value = 1;
 * @return {string}
 */
proto.adamant.global.v1.CompensationFee.prototype.getStringValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.adamant.global.v1.CompensationFee.prototype.setStringValue = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bool is_spent = 2;
 * @return {boolean}
 */
proto.adamant.global.v1.CompensationFee.prototype.getIsSpent = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/** @param {boolean} value */
proto.adamant.global.v1.CompensationFee.prototype.setIsSpent = function(value) {
  jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional google.protobuf.Timestamp create_time = 3;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.adamant.global.v1.CompensationFee.prototype.getCreateTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 3));
};


/** @param {?proto.google.protobuf.Timestamp|undefined} value */
proto.adamant.global.v1.CompensationFee.prototype.setCreateTime = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.adamant.global.v1.CompensationFee.prototype.clearCreateTime = function() {
  this.setCreateTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.adamant.global.v1.CompensationFee.prototype.hasCreateTime = function() {
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
proto.adamant.global.v1.RequestTxOutput.prototype.toObject = function(opt_includeInstance) {
  return proto.adamant.global.v1.RequestTxOutput.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.adamant.global.v1.RequestTxOutput} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.RequestTxOutput.toObject = function(includeInstance, msg) {
  var f, obj = {
    address: jspb.Message.getFieldWithDefault(msg, 1, ""),
    stringValue: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.adamant.global.v1.RequestTxOutput}
 */
proto.adamant.global.v1.RequestTxOutput.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.adamant.global.v1.RequestTxOutput;
  return proto.adamant.global.v1.RequestTxOutput.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.adamant.global.v1.RequestTxOutput} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.adamant.global.v1.RequestTxOutput}
 */
proto.adamant.global.v1.RequestTxOutput.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress(value);
      break;
    case 2:
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
proto.adamant.global.v1.RequestTxOutput.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.adamant.global.v1.RequestTxOutput.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.adamant.global.v1.RequestTxOutput} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.RequestTxOutput.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddress();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getStringValue();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string address = 1;
 * @return {string}
 */
proto.adamant.global.v1.RequestTxOutput.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.adamant.global.v1.RequestTxOutput.prototype.setAddress = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string string_value = 2;
 * @return {string}
 */
proto.adamant.global.v1.RequestTxOutput.prototype.getStringValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.adamant.global.v1.RequestTxOutput.prototype.setStringValue = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.adamant.global.v1.RequestSignedInfo.repeatedFields_ = [1];



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
proto.adamant.global.v1.RequestSignedInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.adamant.global.v1.RequestSignedInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.adamant.global.v1.RequestSignedInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.RequestSignedInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    signaturesList: jspb.Message.toObjectList(msg.getSignaturesList(),
    proto.adamant.global.v1.RequestSignature.toObject, includeInstance)
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
 * @return {!proto.adamant.global.v1.RequestSignedInfo}
 */
proto.adamant.global.v1.RequestSignedInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.adamant.global.v1.RequestSignedInfo;
  return proto.adamant.global.v1.RequestSignedInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.adamant.global.v1.RequestSignedInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.adamant.global.v1.RequestSignedInfo}
 */
proto.adamant.global.v1.RequestSignedInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.adamant.global.v1.RequestSignature;
      reader.readMessage(value,proto.adamant.global.v1.RequestSignature.deserializeBinaryFromReader);
      msg.addSignatures(value);
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
proto.adamant.global.v1.RequestSignedInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.adamant.global.v1.RequestSignedInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.adamant.global.v1.RequestSignedInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.RequestSignedInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSignaturesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.adamant.global.v1.RequestSignature.serializeBinaryToWriter
    );
  }
};


/**
 * repeated RequestSignature signatures = 1;
 * @return {!Array<!proto.adamant.global.v1.RequestSignature>}
 */
proto.adamant.global.v1.RequestSignedInfo.prototype.getSignaturesList = function() {
  return /** @type{!Array<!proto.adamant.global.v1.RequestSignature>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.adamant.global.v1.RequestSignature, 1));
};


/** @param {!Array<!proto.adamant.global.v1.RequestSignature>} value */
proto.adamant.global.v1.RequestSignedInfo.prototype.setSignaturesList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.adamant.global.v1.RequestSignature=} opt_value
 * @param {number=} opt_index
 * @return {!proto.adamant.global.v1.RequestSignature}
 */
proto.adamant.global.v1.RequestSignedInfo.prototype.addSignatures = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.adamant.global.v1.RequestSignature, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.adamant.global.v1.RequestSignedInfo.prototype.clearSignaturesList = function() {
  this.setSignaturesList([]);
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
proto.adamant.global.v1.RequestSignature.prototype.toObject = function(opt_includeInstance) {
  return proto.adamant.global.v1.RequestSignature.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.adamant.global.v1.RequestSignature} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.RequestSignature.toObject = function(includeInstance, msg) {
  var f, obj = {
    signIndex: jspb.Message.getFieldWithDefault(msg, 1, 0),
    signature: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.adamant.global.v1.RequestSignature}
 */
proto.adamant.global.v1.RequestSignature.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.adamant.global.v1.RequestSignature;
  return proto.adamant.global.v1.RequestSignature.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.adamant.global.v1.RequestSignature} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.adamant.global.v1.RequestSignature}
 */
proto.adamant.global.v1.RequestSignature.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setSignIndex(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSignature(value);
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
proto.adamant.global.v1.RequestSignature.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.adamant.global.v1.RequestSignature.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.adamant.global.v1.RequestSignature} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.RequestSignature.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSignIndex();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getSignature();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional uint32 sign_index = 1;
 * @return {number}
 */
proto.adamant.global.v1.RequestSignature.prototype.getSignIndex = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.adamant.global.v1.RequestSignature.prototype.setSignIndex = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string signature = 2;
 * @return {string}
 */
proto.adamant.global.v1.RequestSignature.prototype.getSignature = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.adamant.global.v1.RequestSignature.prototype.setSignature = function(value) {
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
proto.adamant.global.v1.RequestTransferLimitEntry.prototype.toObject = function(opt_includeInstance) {
  return proto.adamant.global.v1.RequestTransferLimitEntry.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.adamant.global.v1.RequestTransferLimitEntry} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.RequestTransferLimitEntry.toObject = function(includeInstance, msg) {
  var f, obj = {
    transferLimitType: jspb.Message.getFieldWithDefault(msg, 1, 0),
    transferLimitValue: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.adamant.global.v1.RequestTransferLimitEntry}
 */
proto.adamant.global.v1.RequestTransferLimitEntry.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.adamant.global.v1.RequestTransferLimitEntry;
  return proto.adamant.global.v1.RequestTransferLimitEntry.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.adamant.global.v1.RequestTransferLimitEntry} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.adamant.global.v1.RequestTransferLimitEntry}
 */
proto.adamant.global.v1.RequestTransferLimitEntry.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.adamant.global.v1.TransferLimitType} */ (reader.readEnum());
      msg.setTransferLimitType(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTransferLimitValue(value);
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
proto.adamant.global.v1.RequestTransferLimitEntry.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.adamant.global.v1.RequestTransferLimitEntry.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.adamant.global.v1.RequestTransferLimitEntry} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.RequestTransferLimitEntry.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTransferLimitType();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getTransferLimitValue();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
};


/**
 * optional TransferLimitType transfer_limit_type = 1;
 * @return {!proto.adamant.global.v1.TransferLimitType}
 */
proto.adamant.global.v1.RequestTransferLimitEntry.prototype.getTransferLimitType = function() {
  return /** @type {!proto.adamant.global.v1.TransferLimitType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {!proto.adamant.global.v1.TransferLimitType} value */
proto.adamant.global.v1.RequestTransferLimitEntry.prototype.setTransferLimitType = function(value) {
  jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional int64 transfer_limit_value = 2;
 * @return {number}
 */
proto.adamant.global.v1.RequestTransferLimitEntry.prototype.getTransferLimitValue = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.adamant.global.v1.RequestTransferLimitEntry.prototype.setTransferLimitValue = function(value) {
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
proto.adamant.global.v1.RequestRate.prototype.toObject = function(opt_includeInstance) {
  return proto.adamant.global.v1.RequestRate.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.adamant.global.v1.RequestRate} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.RequestRate.toObject = function(includeInstance, msg) {
  var f, obj = {
    coin: jspb.Message.getFieldWithDefault(msg, 1, 0),
    jpy: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0)
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
 * @return {!proto.adamant.global.v1.RequestRate}
 */
proto.adamant.global.v1.RequestRate.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.adamant.global.v1.RequestRate;
  return proto.adamant.global.v1.RequestRate.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.adamant.global.v1.RequestRate} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.adamant.global.v1.RequestRate}
 */
proto.adamant.global.v1.RequestRate.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {number} */ (reader.readDouble());
      msg.setJpy(value);
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
proto.adamant.global.v1.RequestRate.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.adamant.global.v1.RequestRate.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.adamant.global.v1.RequestRate} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.RequestRate.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCoin();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getJpy();
  if (f !== 0.0) {
    writer.writeDouble(
      2,
      f
    );
  }
};


/**
 * optional gincoinc.global.v1.Coin coin = 1;
 * @return {!proto.gincoinc.global.v1.Coin}
 */
proto.adamant.global.v1.RequestRate.prototype.getCoin = function() {
  return /** @type {!proto.gincoinc.global.v1.Coin} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {!proto.gincoinc.global.v1.Coin} value */
proto.adamant.global.v1.RequestRate.prototype.setCoin = function(value) {
  jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional double jpy = 2;
 * @return {number}
 */
proto.adamant.global.v1.RequestRate.prototype.getJpy = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/** @param {number} value */
proto.adamant.global.v1.RequestRate.prototype.setJpy = function(value) {
  jspb.Message.setProto3FloatField(this, 2, value);
};


goog.object.extend(exports, proto.adamant.global.v1);
