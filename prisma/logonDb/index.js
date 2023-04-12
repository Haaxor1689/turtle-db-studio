
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  decompressFromBase64,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions
} = require('./runtime/index')


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

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.NotFoundError = NotFoundError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
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


  const path = require('path')

const { findSync } = require('./runtime')
const fs = require('fs')

// some frameworks or bundlers replace or totally remove __dirname
const hasDirname = typeof __dirname !== 'undefined' && __dirname !== '/'

// will work in most cases, ie. if the client has not been bundled
const regularDirname = hasDirname && fs.existsSync(path.join(__dirname, 'schema.prisma')) && __dirname

// if the client has been bundled, we need to look for the folders
const foundDirname = !regularDirname && findSync(process.cwd(), [
    "prisma\\logonDb",
    "logonDb",
], ['d'], ['d'], 1)[0]

const dirname = regularDirname || foundDirname || __dirname

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

const dmmfString = "{\"datamodel\":{\"enums\":[],\"models\":[{\"name\":\"account\",\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"username\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sha_pass_hash\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"rank\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sessionkey\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"v\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"s\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"joindate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tfa_verif\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"last_ip\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"0.0.0.0\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"last_local_ip\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"0.0.0.0\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"failed_logins\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"locked\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"last_login\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"dbgenerated\",\"args\":[\"('0000-00-00 00:00:00')\"]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"online\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"expansion\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"mutetime\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"default\":\"0\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"mutereason\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"muteby\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"locale\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"os\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"current_realm\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"banned\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"flags\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"security\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pass_verif\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email_verif\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"forum_username\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"token_key\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email_keyword\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email_status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email_sub\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":1,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"comments\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"geolock_pin\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"account_banned\",\"dbName\":null,\"fields\":[{\"name\":\"banid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"default\":\"0\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"bandate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"default\":\"0\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"unbandate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"default\":\"0\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"bannedby\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"banreason\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"active\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":1,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"realm\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":1,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"gmlevel\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":{\"name\":null,\"fields\":[\"id\",\"bandate\"]},\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"account_mailstatus\",\"dbName\":null,\"fields\":[{\"name\":\"message_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"account_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"letterid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"account_mailstatus_archive\",\"dbName\":null,\"fields\":[{\"name\":\"message_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"account_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"letterid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"account_twofactor_allowed\",\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ip_address\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"0\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"account_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"expires_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"antispam_blacklist\",\"dbName\":null,\"fields\":[{\"name\":\"string\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"antispam_client\",\"dbName\":null,\"fields\":[{\"name\":\"Regex\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Note\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"antispam_replacement\",\"dbName\":null,\"fields\":[{\"name\":\"from\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"to\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"antispam_unicode_replacement\",\"dbName\":null,\"fields\":[{\"name\":\"from\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"to\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"config\",\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"value\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"comment\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"ip_banned\",\"dbName\":null,\"fields\":[{\"name\":\"ip\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"0.0.0.0\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"bandate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"unbandate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"bannedby\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"[Console]\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"banreason\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"no reason\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":{\"name\":null,\"fields\":[\"ip\",\"bandate\"]},\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"migrations\",\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Hash\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"0\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"realmcharacters\",\"dbName\":null,\"fields\":[{\"name\":\"realmid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"acctid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"numchars\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":{\"name\":null,\"fields\":[\"realmid\",\"acctid\"]},\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"realmlist\",\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"address\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"127.0.0.1\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"port\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":8085,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"icon\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"realmflags\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":2,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"timezone\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"allowedSecurityLevel\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"population\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Float\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"realmbuilds\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"5875\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"shop_coins\",\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"coins\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"shop_diff\",\"dbName\":null,\"fields\":[{\"name\":\"guid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"accountid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"prev_bonus\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"new_bonus\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"query\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"statistics_online\",\"dbName\":null,\"fields\":[{\"name\":\"guid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"online\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"online_alli\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"online_horde\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"connections\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"realm\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"system_fingerprint_usage\",\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fingerprint\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"account\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ip\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"realm\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"time\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"architecture\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cputype\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"activecpus\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"totalcpus\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pagesize\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"uptime\",\"dbName\":null,\"fields\":[{\"name\":\"realmid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"starttime\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"default\":\"0\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"startstring\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"uptime\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"default\":\"0\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"onlineplayers\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"maxplayers\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"revision\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"Turtle WoW\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":{\"name\":null,\"fields\":[\"realmid\",\"starttime\"]},\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}],\"types\":[]},\"mappings\":{\"modelOperations\":[{\"model\":\"account\",\"plural\":\"accounts\",\"findUnique\":\"findUniqueaccount\",\"findUniqueOrThrow\":\"findUniqueaccountOrThrow\",\"findFirst\":\"findFirstaccount\",\"findFirstOrThrow\":\"findFirstaccountOrThrow\",\"findMany\":\"findManyaccount\",\"create\":\"createOneaccount\",\"createMany\":\"createManyaccount\",\"delete\":\"deleteOneaccount\",\"update\":\"updateOneaccount\",\"deleteMany\":\"deleteManyaccount\",\"updateMany\":\"updateManyaccount\",\"upsert\":\"upsertOneaccount\",\"aggregate\":\"aggregateaccount\",\"groupBy\":\"groupByaccount\"},{\"model\":\"account_banned\",\"plural\":\"account_banneds\",\"findUnique\":\"findUniqueaccount_banned\",\"findUniqueOrThrow\":\"findUniqueaccount_bannedOrThrow\",\"findFirst\":\"findFirstaccount_banned\",\"findFirstOrThrow\":\"findFirstaccount_bannedOrThrow\",\"findMany\":\"findManyaccount_banned\",\"create\":\"createOneaccount_banned\",\"createMany\":\"createManyaccount_banned\",\"delete\":\"deleteOneaccount_banned\",\"update\":\"updateOneaccount_banned\",\"deleteMany\":\"deleteManyaccount_banned\",\"updateMany\":\"updateManyaccount_banned\",\"upsert\":\"upsertOneaccount_banned\",\"aggregate\":\"aggregateaccount_banned\",\"groupBy\":\"groupByaccount_banned\"},{\"model\":\"account_mailstatus\",\"plural\":\"account_mailstatuses\",\"findUnique\":\"findUniqueaccount_mailstatus\",\"findUniqueOrThrow\":\"findUniqueaccount_mailstatusOrThrow\",\"findFirst\":\"findFirstaccount_mailstatus\",\"findFirstOrThrow\":\"findFirstaccount_mailstatusOrThrow\",\"findMany\":\"findManyaccount_mailstatus\",\"create\":\"createOneaccount_mailstatus\",\"createMany\":\"createManyaccount_mailstatus\",\"delete\":\"deleteOneaccount_mailstatus\",\"update\":\"updateOneaccount_mailstatus\",\"deleteMany\":\"deleteManyaccount_mailstatus\",\"updateMany\":\"updateManyaccount_mailstatus\",\"upsert\":\"upsertOneaccount_mailstatus\",\"aggregate\":\"aggregateaccount_mailstatus\",\"groupBy\":\"groupByaccount_mailstatus\"},{\"model\":\"account_mailstatus_archive\",\"plural\":\"account_mailstatus_archives\",\"findUnique\":\"findUniqueaccount_mailstatus_archive\",\"findUniqueOrThrow\":\"findUniqueaccount_mailstatus_archiveOrThrow\",\"findFirst\":\"findFirstaccount_mailstatus_archive\",\"findFirstOrThrow\":\"findFirstaccount_mailstatus_archiveOrThrow\",\"findMany\":\"findManyaccount_mailstatus_archive\",\"create\":\"createOneaccount_mailstatus_archive\",\"createMany\":\"createManyaccount_mailstatus_archive\",\"delete\":\"deleteOneaccount_mailstatus_archive\",\"update\":\"updateOneaccount_mailstatus_archive\",\"deleteMany\":\"deleteManyaccount_mailstatus_archive\",\"updateMany\":\"updateManyaccount_mailstatus_archive\",\"upsert\":\"upsertOneaccount_mailstatus_archive\",\"aggregate\":\"aggregateaccount_mailstatus_archive\",\"groupBy\":\"groupByaccount_mailstatus_archive\"},{\"model\":\"account_twofactor_allowed\",\"plural\":\"account_twofactor_alloweds\",\"findUnique\":\"findUniqueaccount_twofactor_allowed\",\"findUniqueOrThrow\":\"findUniqueaccount_twofactor_allowedOrThrow\",\"findFirst\":\"findFirstaccount_twofactor_allowed\",\"findFirstOrThrow\":\"findFirstaccount_twofactor_allowedOrThrow\",\"findMany\":\"findManyaccount_twofactor_allowed\",\"create\":\"createOneaccount_twofactor_allowed\",\"createMany\":\"createManyaccount_twofactor_allowed\",\"delete\":\"deleteOneaccount_twofactor_allowed\",\"update\":\"updateOneaccount_twofactor_allowed\",\"deleteMany\":\"deleteManyaccount_twofactor_allowed\",\"updateMany\":\"updateManyaccount_twofactor_allowed\",\"upsert\":\"upsertOneaccount_twofactor_allowed\",\"aggregate\":\"aggregateaccount_twofactor_allowed\",\"groupBy\":\"groupByaccount_twofactor_allowed\"},{\"model\":\"antispam_blacklist\",\"plural\":\"antispam_blacklists\",\"findUnique\":\"findUniqueantispam_blacklist\",\"findUniqueOrThrow\":\"findUniqueantispam_blacklistOrThrow\",\"findFirst\":\"findFirstantispam_blacklist\",\"findFirstOrThrow\":\"findFirstantispam_blacklistOrThrow\",\"findMany\":\"findManyantispam_blacklist\",\"create\":\"createOneantispam_blacklist\",\"createMany\":\"createManyantispam_blacklist\",\"delete\":\"deleteOneantispam_blacklist\",\"update\":\"updateOneantispam_blacklist\",\"deleteMany\":\"deleteManyantispam_blacklist\",\"updateMany\":\"updateManyantispam_blacklist\",\"upsert\":\"upsertOneantispam_blacklist\",\"aggregate\":\"aggregateantispam_blacklist\",\"groupBy\":\"groupByantispam_blacklist\"},{\"model\":\"antispam_client\",\"plural\":\"antispam_clients\",\"findUnique\":\"findUniqueantispam_client\",\"findUniqueOrThrow\":\"findUniqueantispam_clientOrThrow\",\"findFirst\":\"findFirstantispam_client\",\"findFirstOrThrow\":\"findFirstantispam_clientOrThrow\",\"findMany\":\"findManyantispam_client\",\"create\":\"createOneantispam_client\",\"createMany\":\"createManyantispam_client\",\"delete\":\"deleteOneantispam_client\",\"update\":\"updateOneantispam_client\",\"deleteMany\":\"deleteManyantispam_client\",\"updateMany\":\"updateManyantispam_client\",\"upsert\":\"upsertOneantispam_client\",\"aggregate\":\"aggregateantispam_client\",\"groupBy\":\"groupByantispam_client\"},{\"model\":\"antispam_replacement\",\"plural\":\"antispam_replacements\",\"findUnique\":\"findUniqueantispam_replacement\",\"findUniqueOrThrow\":\"findUniqueantispam_replacementOrThrow\",\"findFirst\":\"findFirstantispam_replacement\",\"findFirstOrThrow\":\"findFirstantispam_replacementOrThrow\",\"findMany\":\"findManyantispam_replacement\",\"create\":\"createOneantispam_replacement\",\"createMany\":\"createManyantispam_replacement\",\"delete\":\"deleteOneantispam_replacement\",\"update\":\"updateOneantispam_replacement\",\"deleteMany\":\"deleteManyantispam_replacement\",\"updateMany\":\"updateManyantispam_replacement\",\"upsert\":\"upsertOneantispam_replacement\",\"aggregate\":\"aggregateantispam_replacement\",\"groupBy\":\"groupByantispam_replacement\"},{\"model\":\"antispam_unicode_replacement\",\"plural\":\"antispam_unicode_replacements\",\"findUnique\":\"findUniqueantispam_unicode_replacement\",\"findUniqueOrThrow\":\"findUniqueantispam_unicode_replacementOrThrow\",\"findFirst\":\"findFirstantispam_unicode_replacement\",\"findFirstOrThrow\":\"findFirstantispam_unicode_replacementOrThrow\",\"findMany\":\"findManyantispam_unicode_replacement\",\"create\":\"createOneantispam_unicode_replacement\",\"createMany\":\"createManyantispam_unicode_replacement\",\"delete\":\"deleteOneantispam_unicode_replacement\",\"update\":\"updateOneantispam_unicode_replacement\",\"deleteMany\":\"deleteManyantispam_unicode_replacement\",\"updateMany\":\"updateManyantispam_unicode_replacement\",\"upsert\":\"upsertOneantispam_unicode_replacement\",\"aggregate\":\"aggregateantispam_unicode_replacement\",\"groupBy\":\"groupByantispam_unicode_replacement\"},{\"model\":\"config\",\"plural\":\"configs\",\"findUnique\":\"findUniqueconfig\",\"findUniqueOrThrow\":\"findUniqueconfigOrThrow\",\"findFirst\":\"findFirstconfig\",\"findFirstOrThrow\":\"findFirstconfigOrThrow\",\"findMany\":\"findManyconfig\",\"create\":\"createOneconfig\",\"createMany\":\"createManyconfig\",\"delete\":\"deleteOneconfig\",\"update\":\"updateOneconfig\",\"deleteMany\":\"deleteManyconfig\",\"updateMany\":\"updateManyconfig\",\"upsert\":\"upsertOneconfig\",\"aggregate\":\"aggregateconfig\",\"groupBy\":\"groupByconfig\"},{\"model\":\"ip_banned\",\"plural\":\"ip_banneds\",\"findUnique\":\"findUniqueip_banned\",\"findUniqueOrThrow\":\"findUniqueip_bannedOrThrow\",\"findFirst\":\"findFirstip_banned\",\"findFirstOrThrow\":\"findFirstip_bannedOrThrow\",\"findMany\":\"findManyip_banned\",\"create\":\"createOneip_banned\",\"createMany\":\"createManyip_banned\",\"delete\":\"deleteOneip_banned\",\"update\":\"updateOneip_banned\",\"deleteMany\":\"deleteManyip_banned\",\"updateMany\":\"updateManyip_banned\",\"upsert\":\"upsertOneip_banned\",\"aggregate\":\"aggregateip_banned\",\"groupBy\":\"groupByip_banned\"},{\"model\":\"migrations\",\"plural\":\"migrations\",\"findUnique\":\"findUniquemigrations\",\"findUniqueOrThrow\":\"findUniquemigrationsOrThrow\",\"findFirst\":\"findFirstmigrations\",\"findFirstOrThrow\":\"findFirstmigrationsOrThrow\",\"findMany\":\"findManymigrations\",\"create\":\"createOnemigrations\",\"createMany\":\"createManymigrations\",\"delete\":\"deleteOnemigrations\",\"update\":\"updateOnemigrations\",\"deleteMany\":\"deleteManymigrations\",\"updateMany\":\"updateManymigrations\",\"upsert\":\"upsertOnemigrations\",\"aggregate\":\"aggregatemigrations\",\"groupBy\":\"groupBymigrations\"},{\"model\":\"realmcharacters\",\"plural\":\"realmcharacters\",\"findUnique\":\"findUniquerealmcharacters\",\"findUniqueOrThrow\":\"findUniquerealmcharactersOrThrow\",\"findFirst\":\"findFirstrealmcharacters\",\"findFirstOrThrow\":\"findFirstrealmcharactersOrThrow\",\"findMany\":\"findManyrealmcharacters\",\"create\":\"createOnerealmcharacters\",\"createMany\":\"createManyrealmcharacters\",\"delete\":\"deleteOnerealmcharacters\",\"update\":\"updateOnerealmcharacters\",\"deleteMany\":\"deleteManyrealmcharacters\",\"updateMany\":\"updateManyrealmcharacters\",\"upsert\":\"upsertOnerealmcharacters\",\"aggregate\":\"aggregaterealmcharacters\",\"groupBy\":\"groupByrealmcharacters\"},{\"model\":\"realmlist\",\"plural\":\"realmlists\",\"findUnique\":\"findUniquerealmlist\",\"findUniqueOrThrow\":\"findUniquerealmlistOrThrow\",\"findFirst\":\"findFirstrealmlist\",\"findFirstOrThrow\":\"findFirstrealmlistOrThrow\",\"findMany\":\"findManyrealmlist\",\"create\":\"createOnerealmlist\",\"createMany\":\"createManyrealmlist\",\"delete\":\"deleteOnerealmlist\",\"update\":\"updateOnerealmlist\",\"deleteMany\":\"deleteManyrealmlist\",\"updateMany\":\"updateManyrealmlist\",\"upsert\":\"upsertOnerealmlist\",\"aggregate\":\"aggregaterealmlist\",\"groupBy\":\"groupByrealmlist\"},{\"model\":\"shop_coins\",\"plural\":\"shop_coins\",\"findUnique\":\"findUniqueshop_coins\",\"findUniqueOrThrow\":\"findUniqueshop_coinsOrThrow\",\"findFirst\":\"findFirstshop_coins\",\"findFirstOrThrow\":\"findFirstshop_coinsOrThrow\",\"findMany\":\"findManyshop_coins\",\"create\":\"createOneshop_coins\",\"createMany\":\"createManyshop_coins\",\"delete\":\"deleteOneshop_coins\",\"update\":\"updateOneshop_coins\",\"deleteMany\":\"deleteManyshop_coins\",\"updateMany\":\"updateManyshop_coins\",\"upsert\":\"upsertOneshop_coins\",\"aggregate\":\"aggregateshop_coins\",\"groupBy\":\"groupByshop_coins\"},{\"model\":\"shop_diff\",\"plural\":\"shop_diffs\",\"findUnique\":\"findUniqueshop_diff\",\"findUniqueOrThrow\":\"findUniqueshop_diffOrThrow\",\"findFirst\":\"findFirstshop_diff\",\"findFirstOrThrow\":\"findFirstshop_diffOrThrow\",\"findMany\":\"findManyshop_diff\",\"create\":\"createOneshop_diff\",\"createMany\":\"createManyshop_diff\",\"delete\":\"deleteOneshop_diff\",\"update\":\"updateOneshop_diff\",\"deleteMany\":\"deleteManyshop_diff\",\"updateMany\":\"updateManyshop_diff\",\"upsert\":\"upsertOneshop_diff\",\"aggregate\":\"aggregateshop_diff\",\"groupBy\":\"groupByshop_diff\"},{\"model\":\"statistics_online\",\"plural\":\"statistics_onlines\",\"findUnique\":\"findUniquestatistics_online\",\"findUniqueOrThrow\":\"findUniquestatistics_onlineOrThrow\",\"findFirst\":\"findFirststatistics_online\",\"findFirstOrThrow\":\"findFirststatistics_onlineOrThrow\",\"findMany\":\"findManystatistics_online\",\"create\":\"createOnestatistics_online\",\"createMany\":\"createManystatistics_online\",\"delete\":\"deleteOnestatistics_online\",\"update\":\"updateOnestatistics_online\",\"deleteMany\":\"deleteManystatistics_online\",\"updateMany\":\"updateManystatistics_online\",\"upsert\":\"upsertOnestatistics_online\",\"aggregate\":\"aggregatestatistics_online\",\"groupBy\":\"groupBystatistics_online\"},{\"model\":\"system_fingerprint_usage\",\"plural\":\"system_fingerprint_usages\",\"findUnique\":\"findUniquesystem_fingerprint_usage\",\"findUniqueOrThrow\":\"findUniquesystem_fingerprint_usageOrThrow\",\"findFirst\":\"findFirstsystem_fingerprint_usage\",\"findFirstOrThrow\":\"findFirstsystem_fingerprint_usageOrThrow\",\"findMany\":\"findManysystem_fingerprint_usage\",\"create\":\"createOnesystem_fingerprint_usage\",\"createMany\":\"createManysystem_fingerprint_usage\",\"delete\":\"deleteOnesystem_fingerprint_usage\",\"update\":\"updateOnesystem_fingerprint_usage\",\"deleteMany\":\"deleteManysystem_fingerprint_usage\",\"updateMany\":\"updateManysystem_fingerprint_usage\",\"upsert\":\"upsertOnesystem_fingerprint_usage\",\"aggregate\":\"aggregatesystem_fingerprint_usage\",\"groupBy\":\"groupBysystem_fingerprint_usage\"},{\"model\":\"uptime\",\"plural\":\"uptimes\",\"findUnique\":\"findUniqueuptime\",\"findUniqueOrThrow\":\"findUniqueuptimeOrThrow\",\"findFirst\":\"findFirstuptime\",\"findFirstOrThrow\":\"findFirstuptimeOrThrow\",\"findMany\":\"findManyuptime\",\"create\":\"createOneuptime\",\"createMany\":\"createManyuptime\",\"delete\":\"deleteOneuptime\",\"update\":\"updateOneuptime\",\"deleteMany\":\"deleteManyuptime\",\"updateMany\":\"updateManyuptime\",\"upsert\":\"upsertOneuptime\",\"aggregate\":\"aggregateuptime\",\"groupBy\":\"groupByuptime\"}],\"otherOperations\":{\"read\":[],\"write\":[\"executeRaw\",\"queryRaw\"]}}}"
const dmmf = JSON.parse(dmmfString)
exports.Prisma.dmmf = JSON.parse(dmmfString)

/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "C:\\Projects\\_WoW\\turtle-db-studio\\prisma\\logonDb",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [],
    "previewFeatures": [],
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": "..\\..\\.env",
    "schemaEnvPath": "..\\..\\.env"
  },
  "relativePath": "",
  "clientVersion": "4.8.0",
  "engineVersion": "d6e67a83f971b175a593ccc12e15c4a757f93ffe",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "mysql",
  "dataProxy": false
}
config.document = dmmf
config.dirname = dirname




const { warnEnvConflicts } = require('./runtime/index')

warnEnvConflicts({
    rootEnvPath: config.relativeEnvPaths.rootEnvPath && path.resolve(dirname, config.relativeEnvPaths.rootEnvPath),
    schemaEnvPath: config.relativeEnvPaths.schemaEnvPath && path.resolve(dirname, config.relativeEnvPaths.schemaEnvPath)
})

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

path.join(__dirname, "query_engine-windows.dll.node");
path.join(process.cwd(), "prisma\\logonDb\\query_engine-windows.dll.node")
path.join(__dirname, "schema.prisma");
path.join(process.cwd(), "prisma\\logonDb\\schema.prisma")
