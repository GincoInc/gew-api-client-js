// source: gincoinc/global/v1/gincoincglobalv1/enum.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = (function() {
  if (this) { return this; }
  if (typeof window !== 'undefined') { return window; }
  if (typeof global !== 'undefined') { return global; }
  if (typeof self !== 'undefined') { return self; }
  return Function('return this')();
}.call(null));

goog.exportSymbol('proto.gincoinc.global.v1.AddressType', null, global);
goog.exportSymbol('proto.gincoinc.global.v1.Coin', null, global);
goog.exportSymbol('proto.gincoinc.global.v1.NemTransactionType', null, global);
goog.exportSymbol('proto.gincoinc.global.v1.Network', null, global);
goog.exportSymbol('proto.gincoinc.global.v1.TransactionResult', null, global);
goog.exportSymbol('proto.gincoinc.global.v1.TransactionState', null, global);
goog.exportSymbol('proto.gincoinc.global.v1.TransferType', null, global);
goog.exportSymbol('proto.gincoinc.global.v1.UTXOState', null, global);
goog.exportSymbol('proto.gincoinc.global.v1.XRPTransactionType', null, global);
/**
 * @enum {number}
 */
proto.gincoinc.global.v1.Coin = {
  COIN_INVALID: 0,
  COIN_BTC: 1,
  COIN_ETH: 2,
  COIN_LTC: 3,
  COIN_BCH: 4,
  COIN_XRP: 5,
  COIN_BAT: 6,
  COIN_TRX: 7,
  COIN_USDT: 8,
  COIN_RYO: 9,
  COIN_JASMY: 10,
  COIN_ENJ: 11,
  COIN_OMG: 12,
  COIN_XLM: 13,
  COIN_ADA: 14,
  COIN_DOT: 15,
  COIN_LINK: 16,
  COIN_DEP: 17,
  COIN_USDC: 18,
  COIN_GYEN: 19,
  COIN_ZAIF: 20,
  COIN_FSCC: 21,
  COIN_CMS: 22,
  COIN_CICC: 23,
  COIN_NCXC: 24,
  COIN_COT: 25,
  COIN_XEM: 26
};

/**
 * @enum {number}
 */
proto.gincoinc.global.v1.Network = {
  NETWORK_INVALID: 0,
  NETWORK_BITCOIN_MAINNET: 1,
  NETWORK_BITCOIN_TESTNET: 2,
  NETWORK_ETHEREUM_MAINNET: 3,
  NETWORK_ETHEREUM_TESTNET: 4,
  NETWORK_LITECOIN_MAINNET: 5,
  NETWORK_LITECOIN_TESTNET: 6,
  NETWORK_BITCOINCASH_MAINNET: 7,
  NETWORK_BITCOINCASH_TESTNET: 8,
  NETWORK_RIPPLE_MAINNET: 9,
  NETWORK_RIPPLE_TESTNET: 10,
  NETWORK_TRON_MAINNET: 11,
  NETWORK_TRON_TESTNET: 12,
  NETWORK_C0BAN_MAINNET: 13,
  NETWORK_C0BAN_TESTNET: 14,
  NETWORK_STELLAR_MAINNET: 15,
  NETWORK_STELLAR_TESTNET: 16,
  NETWORK_CARDANO_MAINNET: 17,
  NETWORK_CARDANO_TESTNET: 18,
  NETWORK_POLKADOT_MAINNET: 19,
  NETWORK_POLKADOT_TESTNET: 20,
  NETWORK_NEM_MAINNET: 21,
  NETWORK_NEM_TESTNET: 22
};

/**
 * @enum {number}
 */
proto.gincoinc.global.v1.AddressType = {
  ADDRESS_TYPE_INVALID: 0,
  ADDRESS_TYPE_P2SH: 1,
  ADDRESS_TYPE_P2SH_P2WSH: 2,
  ADDRESS_TYPE_P2WSH: 3,
  ADDRESS_TYPE_NONE: 100
};

/**
 * @enum {number}
 */
proto.gincoinc.global.v1.TransactionState = {
  TRANSACTION_STATE_INVALID: 0,
  TRANSACTION_STATE_SUBMITTED: 1,
  TRANSACTION_STATE_PENDING: 2,
  TRANSACTION_STATE_PROCESSING: 3,
  TRANSACTION_STATE_CONFIRMED: 4,
  TRANSACTION_STATE_DROPPED: 5
};

/**
 * @enum {number}
 */
proto.gincoinc.global.v1.UTXOState = {
  UTXO_STATE_INVALID: 0,
  UTXO_STATE_PENDING_UNSPENT: 1,
  UTXO_STATE_UNSPENT: 2,
  UTXO_STATE_PENDING_SPENT: 3,
  UTXO_STATE_SPENT: 4
};

/**
 * @enum {number}
 */
proto.gincoinc.global.v1.TransferType = {
  TRANSFER_TYPE_INVALID: 0,
  TRANSFER_TYPE_SEND: 1,
  TRANSFER_TYPE_RECEIVE: 2,
  TRANSFER_TYPE_CHANGE: 3,
  TRANSFER_TYPE_FATAL: 4
};

/**
 * @enum {number}
 */
proto.gincoinc.global.v1.XRPTransactionType = {
  XRP_TRANSACTION_TYPE_INVALID: 0,
  XRP_TRANSACTION_TYPE_PAYMENT: 1,
  XRP_TRANSACTION_TYPE_SET_SIGNER_LIST: 2,
  XRP_TRANSACTION_TYPE_DISABLE_MASTER: 3
};

/**
 * @enum {number}
 */
proto.gincoinc.global.v1.TransactionResult = {
  TRANSACTION_RESULT_INVALID: 0,
  TRANSACTION_RESULT_PENDING: 1,
  TRANSACTION_RESULT_SUCCESS: 2,
  TRANSACTION_RESULT_FAILURE: 3,
  TRANSACTION_RESULT_NONE: 100
};

/**
 * @enum {number}
 */
proto.gincoinc.global.v1.NemTransactionType = {
  NEM_TRANSACTION_TYPE_INVALID: 0,
  NEM_TRANSACTION_TYPE_TRANSFER_TYPE: 1,
  NEM_TRANSACTION_TYPE_IMPORTANCE_TRANSFER_TYPE: 2,
  NEM_TRANSACTION_TYPE_MULTISIG_MODIFICATION_TYPE: 3,
  NEM_TRANSACTION_TYPE_MULTISIG_SIGNATURE_TYPE: 4,
  NEM_TRANSACTION_TYPE_MULTISIG_TRANSACTION_TYPE: 5,
  NEM_TRANSACTION_TYPE_PROVISION_NAMESPACE_TYPE: 6,
  NEM_TRANSACTION_TYPE_MOSAIC_DEFINITION_TYPE: 7,
  NEM_TRANSACTION_TYPE_MOSAIC_SUPPLY_TYPE: 8
};

goog.object.extend(exports, proto.gincoinc.global.v1);
