
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum
} = require('./runtime/index-browser')


const Prisma = {}

exports.Prisma = Prisma

/**
 * Prisma Client JS version: 4.8.0
 * Query Engine version: d6e67a83f971b175a593ccc12e15c4a757f93ffe
 */
Prisma.prismaVersion = {
  client: "4.8.0",
  engine: "d6e67a83f971b175a593ccc12e15c4a757f93ffe"
}

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.NotFoundError = () => {
  throw new Error(`NotFoundError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.validator = () => (val) => val


/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}

/**
 * Enums
 */
// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275
function makeEnum(x) { return x; }

exports.Prisma.AccountScalarFieldEnum = makeEnum({
  id: 'id',
  username: 'username',
  sha_pass_hash: 'sha_pass_hash',
  rank: 'rank',
  sessionkey: 'sessionkey',
  v: 'v',
  s: 's',
  email: 'email',
  joindate: 'joindate',
  tfa_verif: 'tfa_verif',
  last_ip: 'last_ip',
  last_local_ip: 'last_local_ip',
  failed_logins: 'failed_logins',
  locked: 'locked',
  last_login: 'last_login',
  online: 'online',
  expansion: 'expansion',
  mutetime: 'mutetime',
  mutereason: 'mutereason',
  muteby: 'muteby',
  locale: 'locale',
  os: 'os',
  current_realm: 'current_realm',
  banned: 'banned',
  flags: 'flags',
  security: 'security',
  pass_verif: 'pass_verif',
  email_verif: 'email_verif',
  forum_username: 'forum_username',
  token_key: 'token_key',
  email_keyword: 'email_keyword',
  email_status: 'email_status',
  email_sub: 'email_sub',
  comments: 'comments',
  geolock_pin: 'geolock_pin'
});

exports.Prisma.Account_bannedScalarFieldEnum = makeEnum({
  banid: 'banid',
  id: 'id',
  bandate: 'bandate',
  unbandate: 'unbandate',
  bannedby: 'bannedby',
  banreason: 'banreason',
  active: 'active',
  realm: 'realm',
  gmlevel: 'gmlevel'
});

exports.Prisma.Account_mailstatusScalarFieldEnum = makeEnum({
  message_id: 'message_id',
  account_id: 'account_id',
  email: 'email',
  status: 'status',
  letterid: 'letterid'
});

exports.Prisma.Account_mailstatus_archiveScalarFieldEnum = makeEnum({
  message_id: 'message_id',
  account_id: 'account_id',
  email: 'email',
  status: 'status',
  letterid: 'letterid'
});

exports.Prisma.Account_twofactor_allowedScalarFieldEnum = makeEnum({
  id: 'id',
  ip_address: 'ip_address',
  account_id: 'account_id',
  expires_at: 'expires_at'
});

exports.Prisma.Antispam_blacklistScalarFieldEnum = makeEnum({
  string: 'string'
});

exports.Prisma.Antispam_clientScalarFieldEnum = makeEnum({
  Regex: 'Regex',
  Note: 'Note'
});

exports.Prisma.Antispam_replacementScalarFieldEnum = makeEnum({
  from: 'from',
  to: 'to'
});

exports.Prisma.Antispam_unicode_replacementScalarFieldEnum = makeEnum({
  from: 'from',
  to: 'to'
});

exports.Prisma.ConfigScalarFieldEnum = makeEnum({
  id: 'id',
  value: 'value',
  comment: 'comment'
});

exports.Prisma.Ip_bannedScalarFieldEnum = makeEnum({
  ip: 'ip',
  bandate: 'bandate',
  unbandate: 'unbandate',
  bannedby: 'bannedby',
  banreason: 'banreason'
});

exports.Prisma.MigrationsScalarFieldEnum = makeEnum({
  id: 'id',
  Name: 'Name',
  Hash: 'Hash'
});

exports.Prisma.RealmcharactersScalarFieldEnum = makeEnum({
  realmid: 'realmid',
  acctid: 'acctid',
  numchars: 'numchars'
});

exports.Prisma.RealmlistScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  address: 'address',
  port: 'port',
  icon: 'icon',
  realmflags: 'realmflags',
  timezone: 'timezone',
  allowedSecurityLevel: 'allowedSecurityLevel',
  population: 'population',
  realmbuilds: 'realmbuilds'
});

exports.Prisma.Shop_coinsScalarFieldEnum = makeEnum({
  id: 'id',
  coins: 'coins'
});

exports.Prisma.Shop_diffScalarFieldEnum = makeEnum({
  guid: 'guid',
  accountid: 'accountid',
  prev_bonus: 'prev_bonus',
  new_bonus: 'new_bonus',
  date: 'date',
  query: 'query'
});

exports.Prisma.SortOrder = makeEnum({
  asc: 'asc',
  desc: 'desc'
});

exports.Prisma.Statistics_onlineScalarFieldEnum = makeEnum({
  guid: 'guid',
  online: 'online',
  online_alli: 'online_alli',
  online_horde: 'online_horde',
  connections: 'connections',
  realm: 'realm',
  date: 'date'
});

exports.Prisma.System_fingerprint_usageScalarFieldEnum = makeEnum({
  id: 'id',
  fingerprint: 'fingerprint',
  account: 'account',
  ip: 'ip',
  realm: 'realm',
  time: 'time',
  architecture: 'architecture',
  cputype: 'cputype',
  activecpus: 'activecpus',
  totalcpus: 'totalcpus',
  pagesize: 'pagesize'
});

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UptimeScalarFieldEnum = makeEnum({
  realmid: 'realmid',
  starttime: 'starttime',
  startstring: 'startstring',
  uptime: 'uptime',
  onlineplayers: 'onlineplayers',
  maxplayers: 'maxplayers',
  revision: 'revision'
});


exports.Prisma.ModelName = makeEnum({
  account: 'account',
  account_banned: 'account_banned',
  account_mailstatus: 'account_mailstatus',
  account_mailstatus_archive: 'account_mailstatus_archive',
  account_twofactor_allowed: 'account_twofactor_allowed',
  antispam_blacklist: 'antispam_blacklist',
  antispam_client: 'antispam_client',
  antispam_replacement: 'antispam_replacement',
  antispam_unicode_replacement: 'antispam_unicode_replacement',
  config: 'config',
  ip_banned: 'ip_banned',
  migrations: 'migrations',
  realmcharacters: 'realmcharacters',
  realmlist: 'realmlist',
  shop_coins: 'shop_coins',
  shop_diff: 'shop_diff',
  statistics_online: 'statistics_online',
  system_fingerprint_usage: 'system_fingerprint_usage',
  uptime: 'uptime'
});

/**
 * Create the Client
 */
class PrismaClient {
  constructor() {
    throw new Error(
      `PrismaClient is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
    )
  }
}
exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
