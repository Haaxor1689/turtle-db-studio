
/**
 * Client
**/

import * as runtime from './runtime/library';
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends Prisma.PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};

export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>


/**
 * Model account
 * This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
 */
export type account = {
  id: number
  username: string
  sha_pass_hash: string
  rank: number
  sessionkey: string | null
  v: string | null
  s: string | null
  email: string | null
  joindate: Date
  tfa_verif: string | null
  last_ip: string
  last_local_ip: string
  failed_logins: number
  locked: number
  last_login: Date
  online: number
  expansion: number
  mutetime: bigint
  mutereason: string
  muteby: string
  locale: number
  os: string
  current_realm: number
  banned: boolean
  flags: number
  security: string | null
  pass_verif: string | null
  email_verif: boolean
  forum_username: string | null
  token_key: string | null
  email_keyword: string | null
  email_status: number | null
  email_sub: number
  comments: string | null
  geolock_pin: number | null
}

/**
 * Model account_banned
 * This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
 */
export type account_banned = {
  banid: bigint
  id: bigint
  bandate: bigint
  unbandate: bigint
  bannedby: string
  banreason: string
  active: number
  realm: number
  gmlevel: number
}

/**
 * Model account_mailstatus
 * 
 */
export type account_mailstatus = {
  message_id: number
  account_id: number
  email: string | null
  status: number | null
  letterid: number | null
}

/**
 * Model account_mailstatus_archive
 * 
 */
export type account_mailstatus_archive = {
  message_id: number
  account_id: number
  email: string | null
  status: number | null
  letterid: number | null
}

/**
 * Model account_twofactor_allowed
 * 
 */
export type account_twofactor_allowed = {
  id: number
  ip_address: string
  account_id: number | null
  expires_at: bigint | null
}

/**
 * Model antispam_blacklist
 * 
 */
export type antispam_blacklist = {
  string: string
}

/**
 * Model antispam_client
 * 
 */
export type antispam_client = {
  Regex: string
  Note: string | null
}

/**
 * Model antispam_replacement
 * 
 */
export type antispam_replacement = {
  from: string
  to: string
}

/**
 * Model antispam_unicode_replacement
 * 
 */
export type antispam_unicode_replacement = {
  from: number
  to: number
}

/**
 * Model config
 * 
 */
export type config = {
  id: number
  value: string | null
  comment: string | null
}

/**
 * Model ip_banned
 * This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
 */
export type ip_banned = {
  ip: string
  bandate: number
  unbandate: number
  bannedby: string
  banreason: string
}

/**
 * Model migrations
 * 
 */
export type migrations = {
  id: string
  Name: string
  Hash: string
}

/**
 * Model realmcharacters
 * This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
 */
export type realmcharacters = {
  realmid: number
  acctid: bigint
  numchars: number
}

/**
 * Model realmlist
 * This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
 */
export type realmlist = {
  id: number
  name: string
  address: string
  port: number
  icon: number
  realmflags: number
  timezone: number
  allowedSecurityLevel: number
  population: number
  realmbuilds: string
}

/**
 * Model shop_coins
 * 
 */
export type shop_coins = {
  id: number
  coins: number
}

/**
 * Model shop_diff
 * 
 */
export type shop_diff = {
  guid: bigint
  accountid: number
  prev_bonus: number
  new_bonus: number
  date: number
  query: string | null
}

/**
 * Model statistics_online
 * 
 */
export type statistics_online = {
  guid: number
  online: number | null
  online_alli: number | null
  online_horde: number | null
  connections: number | null
  realm: number | null
  date: number | null
}

/**
 * Model system_fingerprint_usage
 * 
 */
export type system_fingerprint_usage = {
  id: number
  fingerprint: number
  account: number
  ip: string
  realm: number
  time: Date
  architecture: string | null
  cputype: string | null
  activecpus: number | null
  totalcpus: number | null
  pagesize: number | null
}

/**
 * Model uptime
 * This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
 */
export type uptime = {
  realmid: number
  starttime: bigint
  startstring: string
  uptime: bigint
  onlineplayers: number
  maxplayers: number
  revision: string
}


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Accounts
 * const accounts = await prisma.account.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Accounts
   * const accounts = await prisma.account.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<this, "$connect" | "$disconnect" | "$on" | "$transaction" | "$use">) => Promise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<R>

      /**
   * `prisma.account`: Exposes CRUD operations for the **account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.account.findMany()
    * ```
    */
  get account(): Prisma.accountDelegate<GlobalReject>;

  /**
   * `prisma.account_banned`: Exposes CRUD operations for the **account_banned** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Account_banneds
    * const account_banneds = await prisma.account_banned.findMany()
    * ```
    */
  get account_banned(): Prisma.account_bannedDelegate<GlobalReject>;

  /**
   * `prisma.account_mailstatus`: Exposes CRUD operations for the **account_mailstatus** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Account_mailstatuses
    * const account_mailstatuses = await prisma.account_mailstatus.findMany()
    * ```
    */
  get account_mailstatus(): Prisma.account_mailstatusDelegate<GlobalReject>;

  /**
   * `prisma.account_mailstatus_archive`: Exposes CRUD operations for the **account_mailstatus_archive** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Account_mailstatus_archives
    * const account_mailstatus_archives = await prisma.account_mailstatus_archive.findMany()
    * ```
    */
  get account_mailstatus_archive(): Prisma.account_mailstatus_archiveDelegate<GlobalReject>;

  /**
   * `prisma.account_twofactor_allowed`: Exposes CRUD operations for the **account_twofactor_allowed** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Account_twofactor_alloweds
    * const account_twofactor_alloweds = await prisma.account_twofactor_allowed.findMany()
    * ```
    */
  get account_twofactor_allowed(): Prisma.account_twofactor_allowedDelegate<GlobalReject>;

  /**
   * `prisma.antispam_blacklist`: Exposes CRUD operations for the **antispam_blacklist** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Antispam_blacklists
    * const antispam_blacklists = await prisma.antispam_blacklist.findMany()
    * ```
    */
  get antispam_blacklist(): Prisma.antispam_blacklistDelegate<GlobalReject>;

  /**
   * `prisma.antispam_client`: Exposes CRUD operations for the **antispam_client** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Antispam_clients
    * const antispam_clients = await prisma.antispam_client.findMany()
    * ```
    */
  get antispam_client(): Prisma.antispam_clientDelegate<GlobalReject>;

  /**
   * `prisma.antispam_replacement`: Exposes CRUD operations for the **antispam_replacement** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Antispam_replacements
    * const antispam_replacements = await prisma.antispam_replacement.findMany()
    * ```
    */
  get antispam_replacement(): Prisma.antispam_replacementDelegate<GlobalReject>;

  /**
   * `prisma.antispam_unicode_replacement`: Exposes CRUD operations for the **antispam_unicode_replacement** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Antispam_unicode_replacements
    * const antispam_unicode_replacements = await prisma.antispam_unicode_replacement.findMany()
    * ```
    */
  get antispam_unicode_replacement(): Prisma.antispam_unicode_replacementDelegate<GlobalReject>;

  /**
   * `prisma.config`: Exposes CRUD operations for the **config** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Configs
    * const configs = await prisma.config.findMany()
    * ```
    */
  get config(): Prisma.configDelegate<GlobalReject>;

  /**
   * `prisma.ip_banned`: Exposes CRUD operations for the **ip_banned** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ip_banneds
    * const ip_banneds = await prisma.ip_banned.findMany()
    * ```
    */
  get ip_banned(): Prisma.ip_bannedDelegate<GlobalReject>;

  /**
   * `prisma.migrations`: Exposes CRUD operations for the **migrations** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Migrations
    * const migrations = await prisma.migrations.findMany()
    * ```
    */
  get migrations(): Prisma.migrationsDelegate<GlobalReject>;

  /**
   * `prisma.realmcharacters`: Exposes CRUD operations for the **realmcharacters** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Realmcharacters
    * const realmcharacters = await prisma.realmcharacters.findMany()
    * ```
    */
  get realmcharacters(): Prisma.realmcharactersDelegate<GlobalReject>;

  /**
   * `prisma.realmlist`: Exposes CRUD operations for the **realmlist** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Realmlists
    * const realmlists = await prisma.realmlist.findMany()
    * ```
    */
  get realmlist(): Prisma.realmlistDelegate<GlobalReject>;

  /**
   * `prisma.shop_coins`: Exposes CRUD operations for the **shop_coins** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Shop_coins
    * const shop_coins = await prisma.shop_coins.findMany()
    * ```
    */
  get shop_coins(): Prisma.shop_coinsDelegate<GlobalReject>;

  /**
   * `prisma.shop_diff`: Exposes CRUD operations for the **shop_diff** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Shop_diffs
    * const shop_diffs = await prisma.shop_diff.findMany()
    * ```
    */
  get shop_diff(): Prisma.shop_diffDelegate<GlobalReject>;

  /**
   * `prisma.statistics_online`: Exposes CRUD operations for the **statistics_online** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Statistics_onlines
    * const statistics_onlines = await prisma.statistics_online.findMany()
    * ```
    */
  get statistics_online(): Prisma.statistics_onlineDelegate<GlobalReject>;

  /**
   * `prisma.system_fingerprint_usage`: Exposes CRUD operations for the **system_fingerprint_usage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more System_fingerprint_usages
    * const system_fingerprint_usages = await prisma.system_fingerprint_usage.findMany()
    * ```
    */
  get system_fingerprint_usage(): Prisma.system_fingerprint_usageDelegate<GlobalReject>;

  /**
   * `prisma.uptime`: Exposes CRUD operations for the **uptime** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Uptimes
    * const uptimes = await prisma.uptime.findMany()
    * ```
    */
  get uptime(): Prisma.uptimeDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket


  /**
   * Prisma Client JS version: 4.13.0
   * Query Engine version: 1e7af066ee9cb95cf3a403c78d9aab3e6b04f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: runtime.Types.Utils.LegacyExact<S, V>) => S;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
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
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type DefaultPrismaClient = PrismaClient
  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, '$connect' | '$disconnect' | '$on' | '$transaction' | '$use'>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model account
   */


  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  export type AccountAvgAggregateOutputType = {
    id: number | null
    rank: number | null
    failed_logins: number | null
    locked: number | null
    online: number | null
    expansion: number | null
    mutetime: number | null
    locale: number | null
    current_realm: number | null
    flags: number | null
    email_status: number | null
    email_sub: number | null
    geolock_pin: number | null
  }

  export type AccountSumAggregateOutputType = {
    id: number | null
    rank: number | null
    failed_logins: number | null
    locked: number | null
    online: number | null
    expansion: number | null
    mutetime: bigint | null
    locale: number | null
    current_realm: number | null
    flags: number | null
    email_status: number | null
    email_sub: number | null
    geolock_pin: number | null
  }

  export type AccountMinAggregateOutputType = {
    id: number | null
    username: string | null
    sha_pass_hash: string | null
    rank: number | null
    sessionkey: string | null
    v: string | null
    s: string | null
    email: string | null
    joindate: Date | null
    tfa_verif: string | null
    last_ip: string | null
    last_local_ip: string | null
    failed_logins: number | null
    locked: number | null
    last_login: Date | null
    online: number | null
    expansion: number | null
    mutetime: bigint | null
    mutereason: string | null
    muteby: string | null
    locale: number | null
    os: string | null
    current_realm: number | null
    banned: boolean | null
    flags: number | null
    security: string | null
    pass_verif: string | null
    email_verif: boolean | null
    forum_username: string | null
    token_key: string | null
    email_keyword: string | null
    email_status: number | null
    email_sub: number | null
    comments: string | null
    geolock_pin: number | null
  }

  export type AccountMaxAggregateOutputType = {
    id: number | null
    username: string | null
    sha_pass_hash: string | null
    rank: number | null
    sessionkey: string | null
    v: string | null
    s: string | null
    email: string | null
    joindate: Date | null
    tfa_verif: string | null
    last_ip: string | null
    last_local_ip: string | null
    failed_logins: number | null
    locked: number | null
    last_login: Date | null
    online: number | null
    expansion: number | null
    mutetime: bigint | null
    mutereason: string | null
    muteby: string | null
    locale: number | null
    os: string | null
    current_realm: number | null
    banned: boolean | null
    flags: number | null
    security: string | null
    pass_verif: string | null
    email_verif: boolean | null
    forum_username: string | null
    token_key: string | null
    email_keyword: string | null
    email_status: number | null
    email_sub: number | null
    comments: string | null
    geolock_pin: number | null
  }

  export type AccountCountAggregateOutputType = {
    id: number
    username: number
    sha_pass_hash: number
    rank: number
    sessionkey: number
    v: number
    s: number
    email: number
    joindate: number
    tfa_verif: number
    last_ip: number
    last_local_ip: number
    failed_logins: number
    locked: number
    last_login: number
    online: number
    expansion: number
    mutetime: number
    mutereason: number
    muteby: number
    locale: number
    os: number
    current_realm: number
    banned: number
    flags: number
    security: number
    pass_verif: number
    email_verif: number
    forum_username: number
    token_key: number
    email_keyword: number
    email_status: number
    email_sub: number
    comments: number
    geolock_pin: number
    _all: number
  }


  export type AccountAvgAggregateInputType = {
    id?: true
    rank?: true
    failed_logins?: true
    locked?: true
    online?: true
    expansion?: true
    mutetime?: true
    locale?: true
    current_realm?: true
    flags?: true
    email_status?: true
    email_sub?: true
    geolock_pin?: true
  }

  export type AccountSumAggregateInputType = {
    id?: true
    rank?: true
    failed_logins?: true
    locked?: true
    online?: true
    expansion?: true
    mutetime?: true
    locale?: true
    current_realm?: true
    flags?: true
    email_status?: true
    email_sub?: true
    geolock_pin?: true
  }

  export type AccountMinAggregateInputType = {
    id?: true
    username?: true
    sha_pass_hash?: true
    rank?: true
    sessionkey?: true
    v?: true
    s?: true
    email?: true
    joindate?: true
    tfa_verif?: true
    last_ip?: true
    last_local_ip?: true
    failed_logins?: true
    locked?: true
    last_login?: true
    online?: true
    expansion?: true
    mutetime?: true
    mutereason?: true
    muteby?: true
    locale?: true
    os?: true
    current_realm?: true
    banned?: true
    flags?: true
    security?: true
    pass_verif?: true
    email_verif?: true
    forum_username?: true
    token_key?: true
    email_keyword?: true
    email_status?: true
    email_sub?: true
    comments?: true
    geolock_pin?: true
  }

  export type AccountMaxAggregateInputType = {
    id?: true
    username?: true
    sha_pass_hash?: true
    rank?: true
    sessionkey?: true
    v?: true
    s?: true
    email?: true
    joindate?: true
    tfa_verif?: true
    last_ip?: true
    last_local_ip?: true
    failed_logins?: true
    locked?: true
    last_login?: true
    online?: true
    expansion?: true
    mutetime?: true
    mutereason?: true
    muteby?: true
    locale?: true
    os?: true
    current_realm?: true
    banned?: true
    flags?: true
    security?: true
    pass_verif?: true
    email_verif?: true
    forum_username?: true
    token_key?: true
    email_keyword?: true
    email_status?: true
    email_sub?: true
    comments?: true
    geolock_pin?: true
  }

  export type AccountCountAggregateInputType = {
    id?: true
    username?: true
    sha_pass_hash?: true
    rank?: true
    sessionkey?: true
    v?: true
    s?: true
    email?: true
    joindate?: true
    tfa_verif?: true
    last_ip?: true
    last_local_ip?: true
    failed_logins?: true
    locked?: true
    last_login?: true
    online?: true
    expansion?: true
    mutetime?: true
    mutereason?: true
    muteby?: true
    locale?: true
    os?: true
    current_realm?: true
    banned?: true
    flags?: true
    security?: true
    pass_verif?: true
    email_verif?: true
    forum_username?: true
    token_key?: true
    email_keyword?: true
    email_status?: true
    email_sub?: true
    comments?: true
    geolock_pin?: true
    _all?: true
  }

  export type AccountAggregateArgs = {
    /**
     * Filter which account to aggregate.
     */
    where?: accountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of accounts to fetch.
     */
    orderBy?: Enumerable<accountOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: accountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned accounts
    **/
    _count?: true | AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AccountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AccountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountMaxAggregateInputType
  }

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>
  }




  export type AccountGroupByArgs = {
    where?: accountWhereInput
    orderBy?: Enumerable<accountOrderByWithAggregationInput>
    by: AccountScalarFieldEnum[]
    having?: accountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountCountAggregateInputType | true
    _avg?: AccountAvgAggregateInputType
    _sum?: AccountSumAggregateInputType
    _min?: AccountMinAggregateInputType
    _max?: AccountMaxAggregateInputType
  }


  export type AccountGroupByOutputType = {
    id: number
    username: string
    sha_pass_hash: string
    rank: number
    sessionkey: string | null
    v: string | null
    s: string | null
    email: string | null
    joindate: Date
    tfa_verif: string | null
    last_ip: string
    last_local_ip: string
    failed_logins: number
    locked: number
    last_login: Date
    online: number
    expansion: number
    mutetime: bigint
    mutereason: string
    muteby: string
    locale: number
    os: string
    current_realm: number
    banned: boolean
    flags: number
    security: string | null
    pass_verif: string | null
    email_verif: boolean
    forum_username: string | null
    token_key: string | null
    email_keyword: string | null
    email_status: number | null
    email_sub: number
    comments: string | null
    geolock_pin: number | null
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  type GetAccountGroupByPayload<T extends AccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<AccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountGroupByOutputType[P]>
            : GetScalarType<T[P], AccountGroupByOutputType[P]>
        }
      >
    >


  export type accountSelect = {
    id?: boolean
    username?: boolean
    sha_pass_hash?: boolean
    rank?: boolean
    sessionkey?: boolean
    v?: boolean
    s?: boolean
    email?: boolean
    joindate?: boolean
    tfa_verif?: boolean
    last_ip?: boolean
    last_local_ip?: boolean
    failed_logins?: boolean
    locked?: boolean
    last_login?: boolean
    online?: boolean
    expansion?: boolean
    mutetime?: boolean
    mutereason?: boolean
    muteby?: boolean
    locale?: boolean
    os?: boolean
    current_realm?: boolean
    banned?: boolean
    flags?: boolean
    security?: boolean
    pass_verif?: boolean
    email_verif?: boolean
    forum_username?: boolean
    token_key?: boolean
    email_keyword?: boolean
    email_status?: boolean
    email_sub?: boolean
    comments?: boolean
    geolock_pin?: boolean
  }


  export type accountGetPayload<S extends boolean | null | undefined | accountArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? account :
    S extends undefined ? never :
    S extends { include: any } & (accountArgs | accountFindManyArgs)
    ? account 
    : S extends { select: any } & (accountArgs | accountFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof account ? account[P] : never
  } 
      : account


  type accountCountArgs = 
    Omit<accountFindManyArgs, 'select' | 'include'> & {
      select?: AccountCountAggregateInputType | true
    }

  export interface accountDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Account that matches the filter.
     * @param {accountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends accountFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, accountFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'account'> extends True ? Prisma__accountClient<accountGetPayload<T>> : Prisma__accountClient<accountGetPayload<T> | null, null>

    /**
     * Find one Account that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {accountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends accountFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, accountFindUniqueOrThrowArgs>
    ): Prisma__accountClient<accountGetPayload<T>>

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {accountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends accountFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, accountFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'account'> extends True ? Prisma__accountClient<accountGetPayload<T>> : Prisma__accountClient<accountGetPayload<T> | null, null>

    /**
     * Find the first Account that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {accountFindFirstOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends accountFindFirstOrThrowArgs>(
      args?: SelectSubset<T, accountFindFirstOrThrowArgs>
    ): Prisma__accountClient<accountGetPayload<T>>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {accountFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountWithIdOnly = await prisma.account.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends accountFindManyArgs>(
      args?: SelectSubset<T, accountFindManyArgs>
    ): Prisma.PrismaPromise<Array<accountGetPayload<T>>>

    /**
     * Create a Account.
     * @param {accountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     * 
    **/
    create<T extends accountCreateArgs>(
      args: SelectSubset<T, accountCreateArgs>
    ): Prisma__accountClient<accountGetPayload<T>>

    /**
     * Create many Accounts.
     *     @param {accountCreateManyArgs} args - Arguments to create many Accounts.
     *     @example
     *     // Create many Accounts
     *     const account = await prisma.account.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends accountCreateManyArgs>(
      args?: SelectSubset<T, accountCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Account.
     * @param {accountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     * 
    **/
    delete<T extends accountDeleteArgs>(
      args: SelectSubset<T, accountDeleteArgs>
    ): Prisma__accountClient<accountGetPayload<T>>

    /**
     * Update one Account.
     * @param {accountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends accountUpdateArgs>(
      args: SelectSubset<T, accountUpdateArgs>
    ): Prisma__accountClient<accountGetPayload<T>>

    /**
     * Delete zero or more Accounts.
     * @param {accountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends accountDeleteManyArgs>(
      args?: SelectSubset<T, accountDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {accountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends accountUpdateManyArgs>(
      args: SelectSubset<T, accountUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Account.
     * @param {accountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
    **/
    upsert<T extends accountUpsertArgs>(
      args: SelectSubset<T, accountUpsertArgs>
    ): Prisma__accountClient<accountGetPayload<T>>

    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {accountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends accountCountArgs>(
      args?: Subset<T, accountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AccountAggregateArgs>(args: Subset<T, AccountAggregateArgs>): Prisma.PrismaPromise<GetAccountAggregateType<T>>

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountGroupByArgs['orderBy'] }
        : { orderBy?: AccountGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__accountClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * account base type for findUnique actions
   */
  export type accountFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the account
     */
    select?: accountSelect | null
    /**
     * Filter, which account to fetch.
     */
    where: accountWhereUniqueInput
  }

  /**
   * account findUnique
   */
  export interface accountFindUniqueArgs extends accountFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * account findUniqueOrThrow
   */
  export type accountFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the account
     */
    select?: accountSelect | null
    /**
     * Filter, which account to fetch.
     */
    where: accountWhereUniqueInput
  }


  /**
   * account base type for findFirst actions
   */
  export type accountFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the account
     */
    select?: accountSelect | null
    /**
     * Filter, which account to fetch.
     */
    where?: accountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of accounts to fetch.
     */
    orderBy?: Enumerable<accountOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for accounts.
     */
    cursor?: accountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of accounts.
     */
    distinct?: Enumerable<AccountScalarFieldEnum>
  }

  /**
   * account findFirst
   */
  export interface accountFindFirstArgs extends accountFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * account findFirstOrThrow
   */
  export type accountFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the account
     */
    select?: accountSelect | null
    /**
     * Filter, which account to fetch.
     */
    where?: accountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of accounts to fetch.
     */
    orderBy?: Enumerable<accountOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for accounts.
     */
    cursor?: accountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of accounts.
     */
    distinct?: Enumerable<AccountScalarFieldEnum>
  }


  /**
   * account findMany
   */
  export type accountFindManyArgs = {
    /**
     * Select specific fields to fetch from the account
     */
    select?: accountSelect | null
    /**
     * Filter, which accounts to fetch.
     */
    where?: accountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of accounts to fetch.
     */
    orderBy?: Enumerable<accountOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing accounts.
     */
    cursor?: accountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` accounts.
     */
    skip?: number
    distinct?: Enumerable<AccountScalarFieldEnum>
  }


  /**
   * account create
   */
  export type accountCreateArgs = {
    /**
     * Select specific fields to fetch from the account
     */
    select?: accountSelect | null
    /**
     * The data needed to create a account.
     */
    data: XOR<accountCreateInput, accountUncheckedCreateInput>
  }


  /**
   * account createMany
   */
  export type accountCreateManyArgs = {
    /**
     * The data used to create many accounts.
     */
    data: Enumerable<accountCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * account update
   */
  export type accountUpdateArgs = {
    /**
     * Select specific fields to fetch from the account
     */
    select?: accountSelect | null
    /**
     * The data needed to update a account.
     */
    data: XOR<accountUpdateInput, accountUncheckedUpdateInput>
    /**
     * Choose, which account to update.
     */
    where: accountWhereUniqueInput
  }


  /**
   * account updateMany
   */
  export type accountUpdateManyArgs = {
    /**
     * The data used to update accounts.
     */
    data: XOR<accountUpdateManyMutationInput, accountUncheckedUpdateManyInput>
    /**
     * Filter which accounts to update
     */
    where?: accountWhereInput
  }


  /**
   * account upsert
   */
  export type accountUpsertArgs = {
    /**
     * Select specific fields to fetch from the account
     */
    select?: accountSelect | null
    /**
     * The filter to search for the account to update in case it exists.
     */
    where: accountWhereUniqueInput
    /**
     * In case the account found by the `where` argument doesn't exist, create a new account with this data.
     */
    create: XOR<accountCreateInput, accountUncheckedCreateInput>
    /**
     * In case the account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<accountUpdateInput, accountUncheckedUpdateInput>
  }


  /**
   * account delete
   */
  export type accountDeleteArgs = {
    /**
     * Select specific fields to fetch from the account
     */
    select?: accountSelect | null
    /**
     * Filter which account to delete.
     */
    where: accountWhereUniqueInput
  }


  /**
   * account deleteMany
   */
  export type accountDeleteManyArgs = {
    /**
     * Filter which accounts to delete
     */
    where?: accountWhereInput
  }


  /**
   * account without action
   */
  export type accountArgs = {
    /**
     * Select specific fields to fetch from the account
     */
    select?: accountSelect | null
  }



  /**
   * Model account_banned
   */


  export type AggregateAccount_banned = {
    _count: Account_bannedCountAggregateOutputType | null
    _avg: Account_bannedAvgAggregateOutputType | null
    _sum: Account_bannedSumAggregateOutputType | null
    _min: Account_bannedMinAggregateOutputType | null
    _max: Account_bannedMaxAggregateOutputType | null
  }

  export type Account_bannedAvgAggregateOutputType = {
    banid: number | null
    id: number | null
    bandate: number | null
    unbandate: number | null
    active: number | null
    realm: number | null
    gmlevel: number | null
  }

  export type Account_bannedSumAggregateOutputType = {
    banid: bigint | null
    id: bigint | null
    bandate: bigint | null
    unbandate: bigint | null
    active: number | null
    realm: number | null
    gmlevel: number | null
  }

  export type Account_bannedMinAggregateOutputType = {
    banid: bigint | null
    id: bigint | null
    bandate: bigint | null
    unbandate: bigint | null
    bannedby: string | null
    banreason: string | null
    active: number | null
    realm: number | null
    gmlevel: number | null
  }

  export type Account_bannedMaxAggregateOutputType = {
    banid: bigint | null
    id: bigint | null
    bandate: bigint | null
    unbandate: bigint | null
    bannedby: string | null
    banreason: string | null
    active: number | null
    realm: number | null
    gmlevel: number | null
  }

  export type Account_bannedCountAggregateOutputType = {
    banid: number
    id: number
    bandate: number
    unbandate: number
    bannedby: number
    banreason: number
    active: number
    realm: number
    gmlevel: number
    _all: number
  }


  export type Account_bannedAvgAggregateInputType = {
    banid?: true
    id?: true
    bandate?: true
    unbandate?: true
    active?: true
    realm?: true
    gmlevel?: true
  }

  export type Account_bannedSumAggregateInputType = {
    banid?: true
    id?: true
    bandate?: true
    unbandate?: true
    active?: true
    realm?: true
    gmlevel?: true
  }

  export type Account_bannedMinAggregateInputType = {
    banid?: true
    id?: true
    bandate?: true
    unbandate?: true
    bannedby?: true
    banreason?: true
    active?: true
    realm?: true
    gmlevel?: true
  }

  export type Account_bannedMaxAggregateInputType = {
    banid?: true
    id?: true
    bandate?: true
    unbandate?: true
    bannedby?: true
    banreason?: true
    active?: true
    realm?: true
    gmlevel?: true
  }

  export type Account_bannedCountAggregateInputType = {
    banid?: true
    id?: true
    bandate?: true
    unbandate?: true
    bannedby?: true
    banreason?: true
    active?: true
    realm?: true
    gmlevel?: true
    _all?: true
  }

  export type Account_bannedAggregateArgs = {
    /**
     * Filter which account_banned to aggregate.
     */
    where?: account_bannedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of account_banneds to fetch.
     */
    orderBy?: Enumerable<account_bannedOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: account_bannedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` account_banneds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` account_banneds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned account_banneds
    **/
    _count?: true | Account_bannedCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Account_bannedAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Account_bannedSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Account_bannedMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Account_bannedMaxAggregateInputType
  }

  export type GetAccount_bannedAggregateType<T extends Account_bannedAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount_banned]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount_banned[P]>
      : GetScalarType<T[P], AggregateAccount_banned[P]>
  }




  export type Account_bannedGroupByArgs = {
    where?: account_bannedWhereInput
    orderBy?: Enumerable<account_bannedOrderByWithAggregationInput>
    by: Account_bannedScalarFieldEnum[]
    having?: account_bannedScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Account_bannedCountAggregateInputType | true
    _avg?: Account_bannedAvgAggregateInputType
    _sum?: Account_bannedSumAggregateInputType
    _min?: Account_bannedMinAggregateInputType
    _max?: Account_bannedMaxAggregateInputType
  }


  export type Account_bannedGroupByOutputType = {
    banid: bigint
    id: bigint
    bandate: bigint
    unbandate: bigint
    bannedby: string
    banreason: string
    active: number
    realm: number
    gmlevel: number
    _count: Account_bannedCountAggregateOutputType | null
    _avg: Account_bannedAvgAggregateOutputType | null
    _sum: Account_bannedSumAggregateOutputType | null
    _min: Account_bannedMinAggregateOutputType | null
    _max: Account_bannedMaxAggregateOutputType | null
  }

  type GetAccount_bannedGroupByPayload<T extends Account_bannedGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<Account_bannedGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Account_bannedGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Account_bannedGroupByOutputType[P]>
            : GetScalarType<T[P], Account_bannedGroupByOutputType[P]>
        }
      >
    >


  export type account_bannedSelect = {
    banid?: boolean
    id?: boolean
    bandate?: boolean
    unbandate?: boolean
    bannedby?: boolean
    banreason?: boolean
    active?: boolean
    realm?: boolean
    gmlevel?: boolean
  }


  export type account_bannedGetPayload<S extends boolean | null | undefined | account_bannedArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? account_banned :
    S extends undefined ? never :
    S extends { include: any } & (account_bannedArgs | account_bannedFindManyArgs)
    ? account_banned 
    : S extends { select: any } & (account_bannedArgs | account_bannedFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof account_banned ? account_banned[P] : never
  } 
      : account_banned


  type account_bannedCountArgs = 
    Omit<account_bannedFindManyArgs, 'select' | 'include'> & {
      select?: Account_bannedCountAggregateInputType | true
    }

  export interface account_bannedDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Account_banned that matches the filter.
     * @param {account_bannedFindUniqueArgs} args - Arguments to find a Account_banned
     * @example
     * // Get one Account_banned
     * const account_banned = await prisma.account_banned.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends account_bannedFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, account_bannedFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'account_banned'> extends True ? Prisma__account_bannedClient<account_bannedGetPayload<T>> : Prisma__account_bannedClient<account_bannedGetPayload<T> | null, null>

    /**
     * Find one Account_banned that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {account_bannedFindUniqueOrThrowArgs} args - Arguments to find a Account_banned
     * @example
     * // Get one Account_banned
     * const account_banned = await prisma.account_banned.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends account_bannedFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, account_bannedFindUniqueOrThrowArgs>
    ): Prisma__account_bannedClient<account_bannedGetPayload<T>>

    /**
     * Find the first Account_banned that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {account_bannedFindFirstArgs} args - Arguments to find a Account_banned
     * @example
     * // Get one Account_banned
     * const account_banned = await prisma.account_banned.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends account_bannedFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, account_bannedFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'account_banned'> extends True ? Prisma__account_bannedClient<account_bannedGetPayload<T>> : Prisma__account_bannedClient<account_bannedGetPayload<T> | null, null>

    /**
     * Find the first Account_banned that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {account_bannedFindFirstOrThrowArgs} args - Arguments to find a Account_banned
     * @example
     * // Get one Account_banned
     * const account_banned = await prisma.account_banned.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends account_bannedFindFirstOrThrowArgs>(
      args?: SelectSubset<T, account_bannedFindFirstOrThrowArgs>
    ): Prisma__account_bannedClient<account_bannedGetPayload<T>>

    /**
     * Find zero or more Account_banneds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {account_bannedFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Account_banneds
     * const account_banneds = await prisma.account_banned.findMany()
     * 
     * // Get first 10 Account_banneds
     * const account_banneds = await prisma.account_banned.findMany({ take: 10 })
     * 
     * // Only select the `banid`
     * const account_bannedWithBanidOnly = await prisma.account_banned.findMany({ select: { banid: true } })
     * 
    **/
    findMany<T extends account_bannedFindManyArgs>(
      args?: SelectSubset<T, account_bannedFindManyArgs>
    ): Prisma.PrismaPromise<Array<account_bannedGetPayload<T>>>

    /**
     * Create a Account_banned.
     * @param {account_bannedCreateArgs} args - Arguments to create a Account_banned.
     * @example
     * // Create one Account_banned
     * const Account_banned = await prisma.account_banned.create({
     *   data: {
     *     // ... data to create a Account_banned
     *   }
     * })
     * 
    **/
    create<T extends account_bannedCreateArgs>(
      args: SelectSubset<T, account_bannedCreateArgs>
    ): Prisma__account_bannedClient<account_bannedGetPayload<T>>

    /**
     * Create many Account_banneds.
     *     @param {account_bannedCreateManyArgs} args - Arguments to create many Account_banneds.
     *     @example
     *     // Create many Account_banneds
     *     const account_banned = await prisma.account_banned.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends account_bannedCreateManyArgs>(
      args?: SelectSubset<T, account_bannedCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Account_banned.
     * @param {account_bannedDeleteArgs} args - Arguments to delete one Account_banned.
     * @example
     * // Delete one Account_banned
     * const Account_banned = await prisma.account_banned.delete({
     *   where: {
     *     // ... filter to delete one Account_banned
     *   }
     * })
     * 
    **/
    delete<T extends account_bannedDeleteArgs>(
      args: SelectSubset<T, account_bannedDeleteArgs>
    ): Prisma__account_bannedClient<account_bannedGetPayload<T>>

    /**
     * Update one Account_banned.
     * @param {account_bannedUpdateArgs} args - Arguments to update one Account_banned.
     * @example
     * // Update one Account_banned
     * const account_banned = await prisma.account_banned.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends account_bannedUpdateArgs>(
      args: SelectSubset<T, account_bannedUpdateArgs>
    ): Prisma__account_bannedClient<account_bannedGetPayload<T>>

    /**
     * Delete zero or more Account_banneds.
     * @param {account_bannedDeleteManyArgs} args - Arguments to filter Account_banneds to delete.
     * @example
     * // Delete a few Account_banneds
     * const { count } = await prisma.account_banned.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends account_bannedDeleteManyArgs>(
      args?: SelectSubset<T, account_bannedDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Account_banneds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {account_bannedUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Account_banneds
     * const account_banned = await prisma.account_banned.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends account_bannedUpdateManyArgs>(
      args: SelectSubset<T, account_bannedUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Account_banned.
     * @param {account_bannedUpsertArgs} args - Arguments to update or create a Account_banned.
     * @example
     * // Update or create a Account_banned
     * const account_banned = await prisma.account_banned.upsert({
     *   create: {
     *     // ... data to create a Account_banned
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account_banned we want to update
     *   }
     * })
    **/
    upsert<T extends account_bannedUpsertArgs>(
      args: SelectSubset<T, account_bannedUpsertArgs>
    ): Prisma__account_bannedClient<account_bannedGetPayload<T>>

    /**
     * Count the number of Account_banneds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {account_bannedCountArgs} args - Arguments to filter Account_banneds to count.
     * @example
     * // Count the number of Account_banneds
     * const count = await prisma.account_banned.count({
     *   where: {
     *     // ... the filter for the Account_banneds we want to count
     *   }
     * })
    **/
    count<T extends account_bannedCountArgs>(
      args?: Subset<T, account_bannedCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Account_bannedCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account_banned.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Account_bannedAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Account_bannedAggregateArgs>(args: Subset<T, Account_bannedAggregateArgs>): Prisma.PrismaPromise<GetAccount_bannedAggregateType<T>>

    /**
     * Group by Account_banned.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Account_bannedGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Account_bannedGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Account_bannedGroupByArgs['orderBy'] }
        : { orderBy?: Account_bannedGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Account_bannedGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccount_bannedGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for account_banned.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__account_bannedClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * account_banned base type for findUnique actions
   */
  export type account_bannedFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the account_banned
     */
    select?: account_bannedSelect | null
    /**
     * Filter, which account_banned to fetch.
     */
    where: account_bannedWhereUniqueInput
  }

  /**
   * account_banned findUnique
   */
  export interface account_bannedFindUniqueArgs extends account_bannedFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * account_banned findUniqueOrThrow
   */
  export type account_bannedFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the account_banned
     */
    select?: account_bannedSelect | null
    /**
     * Filter, which account_banned to fetch.
     */
    where: account_bannedWhereUniqueInput
  }


  /**
   * account_banned base type for findFirst actions
   */
  export type account_bannedFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the account_banned
     */
    select?: account_bannedSelect | null
    /**
     * Filter, which account_banned to fetch.
     */
    where?: account_bannedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of account_banneds to fetch.
     */
    orderBy?: Enumerable<account_bannedOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for account_banneds.
     */
    cursor?: account_bannedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` account_banneds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` account_banneds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of account_banneds.
     */
    distinct?: Enumerable<Account_bannedScalarFieldEnum>
  }

  /**
   * account_banned findFirst
   */
  export interface account_bannedFindFirstArgs extends account_bannedFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * account_banned findFirstOrThrow
   */
  export type account_bannedFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the account_banned
     */
    select?: account_bannedSelect | null
    /**
     * Filter, which account_banned to fetch.
     */
    where?: account_bannedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of account_banneds to fetch.
     */
    orderBy?: Enumerable<account_bannedOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for account_banneds.
     */
    cursor?: account_bannedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` account_banneds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` account_banneds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of account_banneds.
     */
    distinct?: Enumerable<Account_bannedScalarFieldEnum>
  }


  /**
   * account_banned findMany
   */
  export type account_bannedFindManyArgs = {
    /**
     * Select specific fields to fetch from the account_banned
     */
    select?: account_bannedSelect | null
    /**
     * Filter, which account_banneds to fetch.
     */
    where?: account_bannedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of account_banneds to fetch.
     */
    orderBy?: Enumerable<account_bannedOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing account_banneds.
     */
    cursor?: account_bannedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` account_banneds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` account_banneds.
     */
    skip?: number
    distinct?: Enumerable<Account_bannedScalarFieldEnum>
  }


  /**
   * account_banned create
   */
  export type account_bannedCreateArgs = {
    /**
     * Select specific fields to fetch from the account_banned
     */
    select?: account_bannedSelect | null
    /**
     * The data needed to create a account_banned.
     */
    data: XOR<account_bannedCreateInput, account_bannedUncheckedCreateInput>
  }


  /**
   * account_banned createMany
   */
  export type account_bannedCreateManyArgs = {
    /**
     * The data used to create many account_banneds.
     */
    data: Enumerable<account_bannedCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * account_banned update
   */
  export type account_bannedUpdateArgs = {
    /**
     * Select specific fields to fetch from the account_banned
     */
    select?: account_bannedSelect | null
    /**
     * The data needed to update a account_banned.
     */
    data: XOR<account_bannedUpdateInput, account_bannedUncheckedUpdateInput>
    /**
     * Choose, which account_banned to update.
     */
    where: account_bannedWhereUniqueInput
  }


  /**
   * account_banned updateMany
   */
  export type account_bannedUpdateManyArgs = {
    /**
     * The data used to update account_banneds.
     */
    data: XOR<account_bannedUpdateManyMutationInput, account_bannedUncheckedUpdateManyInput>
    /**
     * Filter which account_banneds to update
     */
    where?: account_bannedWhereInput
  }


  /**
   * account_banned upsert
   */
  export type account_bannedUpsertArgs = {
    /**
     * Select specific fields to fetch from the account_banned
     */
    select?: account_bannedSelect | null
    /**
     * The filter to search for the account_banned to update in case it exists.
     */
    where: account_bannedWhereUniqueInput
    /**
     * In case the account_banned found by the `where` argument doesn't exist, create a new account_banned with this data.
     */
    create: XOR<account_bannedCreateInput, account_bannedUncheckedCreateInput>
    /**
     * In case the account_banned was found with the provided `where` argument, update it with this data.
     */
    update: XOR<account_bannedUpdateInput, account_bannedUncheckedUpdateInput>
  }


  /**
   * account_banned delete
   */
  export type account_bannedDeleteArgs = {
    /**
     * Select specific fields to fetch from the account_banned
     */
    select?: account_bannedSelect | null
    /**
     * Filter which account_banned to delete.
     */
    where: account_bannedWhereUniqueInput
  }


  /**
   * account_banned deleteMany
   */
  export type account_bannedDeleteManyArgs = {
    /**
     * Filter which account_banneds to delete
     */
    where?: account_bannedWhereInput
  }


  /**
   * account_banned without action
   */
  export type account_bannedArgs = {
    /**
     * Select specific fields to fetch from the account_banned
     */
    select?: account_bannedSelect | null
  }



  /**
   * Model account_mailstatus
   */


  export type AggregateAccount_mailstatus = {
    _count: Account_mailstatusCountAggregateOutputType | null
    _avg: Account_mailstatusAvgAggregateOutputType | null
    _sum: Account_mailstatusSumAggregateOutputType | null
    _min: Account_mailstatusMinAggregateOutputType | null
    _max: Account_mailstatusMaxAggregateOutputType | null
  }

  export type Account_mailstatusAvgAggregateOutputType = {
    message_id: number | null
    account_id: number | null
    status: number | null
    letterid: number | null
  }

  export type Account_mailstatusSumAggregateOutputType = {
    message_id: number | null
    account_id: number | null
    status: number | null
    letterid: number | null
  }

  export type Account_mailstatusMinAggregateOutputType = {
    message_id: number | null
    account_id: number | null
    email: string | null
    status: number | null
    letterid: number | null
  }

  export type Account_mailstatusMaxAggregateOutputType = {
    message_id: number | null
    account_id: number | null
    email: string | null
    status: number | null
    letterid: number | null
  }

  export type Account_mailstatusCountAggregateOutputType = {
    message_id: number
    account_id: number
    email: number
    status: number
    letterid: number
    _all: number
  }


  export type Account_mailstatusAvgAggregateInputType = {
    message_id?: true
    account_id?: true
    status?: true
    letterid?: true
  }

  export type Account_mailstatusSumAggregateInputType = {
    message_id?: true
    account_id?: true
    status?: true
    letterid?: true
  }

  export type Account_mailstatusMinAggregateInputType = {
    message_id?: true
    account_id?: true
    email?: true
    status?: true
    letterid?: true
  }

  export type Account_mailstatusMaxAggregateInputType = {
    message_id?: true
    account_id?: true
    email?: true
    status?: true
    letterid?: true
  }

  export type Account_mailstatusCountAggregateInputType = {
    message_id?: true
    account_id?: true
    email?: true
    status?: true
    letterid?: true
    _all?: true
  }

  export type Account_mailstatusAggregateArgs = {
    /**
     * Filter which account_mailstatus to aggregate.
     */
    where?: account_mailstatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of account_mailstatuses to fetch.
     */
    orderBy?: Enumerable<account_mailstatusOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: account_mailstatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` account_mailstatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` account_mailstatuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned account_mailstatuses
    **/
    _count?: true | Account_mailstatusCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Account_mailstatusAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Account_mailstatusSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Account_mailstatusMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Account_mailstatusMaxAggregateInputType
  }

  export type GetAccount_mailstatusAggregateType<T extends Account_mailstatusAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount_mailstatus]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount_mailstatus[P]>
      : GetScalarType<T[P], AggregateAccount_mailstatus[P]>
  }




  export type Account_mailstatusGroupByArgs = {
    where?: account_mailstatusWhereInput
    orderBy?: Enumerable<account_mailstatusOrderByWithAggregationInput>
    by: Account_mailstatusScalarFieldEnum[]
    having?: account_mailstatusScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Account_mailstatusCountAggregateInputType | true
    _avg?: Account_mailstatusAvgAggregateInputType
    _sum?: Account_mailstatusSumAggregateInputType
    _min?: Account_mailstatusMinAggregateInputType
    _max?: Account_mailstatusMaxAggregateInputType
  }


  export type Account_mailstatusGroupByOutputType = {
    message_id: number
    account_id: number
    email: string | null
    status: number | null
    letterid: number | null
    _count: Account_mailstatusCountAggregateOutputType | null
    _avg: Account_mailstatusAvgAggregateOutputType | null
    _sum: Account_mailstatusSumAggregateOutputType | null
    _min: Account_mailstatusMinAggregateOutputType | null
    _max: Account_mailstatusMaxAggregateOutputType | null
  }

  type GetAccount_mailstatusGroupByPayload<T extends Account_mailstatusGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<Account_mailstatusGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Account_mailstatusGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Account_mailstatusGroupByOutputType[P]>
            : GetScalarType<T[P], Account_mailstatusGroupByOutputType[P]>
        }
      >
    >


  export type account_mailstatusSelect = {
    message_id?: boolean
    account_id?: boolean
    email?: boolean
    status?: boolean
    letterid?: boolean
  }


  export type account_mailstatusGetPayload<S extends boolean | null | undefined | account_mailstatusArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? account_mailstatus :
    S extends undefined ? never :
    S extends { include: any } & (account_mailstatusArgs | account_mailstatusFindManyArgs)
    ? account_mailstatus 
    : S extends { select: any } & (account_mailstatusArgs | account_mailstatusFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof account_mailstatus ? account_mailstatus[P] : never
  } 
      : account_mailstatus


  type account_mailstatusCountArgs = 
    Omit<account_mailstatusFindManyArgs, 'select' | 'include'> & {
      select?: Account_mailstatusCountAggregateInputType | true
    }

  export interface account_mailstatusDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Account_mailstatus that matches the filter.
     * @param {account_mailstatusFindUniqueArgs} args - Arguments to find a Account_mailstatus
     * @example
     * // Get one Account_mailstatus
     * const account_mailstatus = await prisma.account_mailstatus.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends account_mailstatusFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, account_mailstatusFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'account_mailstatus'> extends True ? Prisma__account_mailstatusClient<account_mailstatusGetPayload<T>> : Prisma__account_mailstatusClient<account_mailstatusGetPayload<T> | null, null>

    /**
     * Find one Account_mailstatus that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {account_mailstatusFindUniqueOrThrowArgs} args - Arguments to find a Account_mailstatus
     * @example
     * // Get one Account_mailstatus
     * const account_mailstatus = await prisma.account_mailstatus.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends account_mailstatusFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, account_mailstatusFindUniqueOrThrowArgs>
    ): Prisma__account_mailstatusClient<account_mailstatusGetPayload<T>>

    /**
     * Find the first Account_mailstatus that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {account_mailstatusFindFirstArgs} args - Arguments to find a Account_mailstatus
     * @example
     * // Get one Account_mailstatus
     * const account_mailstatus = await prisma.account_mailstatus.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends account_mailstatusFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, account_mailstatusFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'account_mailstatus'> extends True ? Prisma__account_mailstatusClient<account_mailstatusGetPayload<T>> : Prisma__account_mailstatusClient<account_mailstatusGetPayload<T> | null, null>

    /**
     * Find the first Account_mailstatus that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {account_mailstatusFindFirstOrThrowArgs} args - Arguments to find a Account_mailstatus
     * @example
     * // Get one Account_mailstatus
     * const account_mailstatus = await prisma.account_mailstatus.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends account_mailstatusFindFirstOrThrowArgs>(
      args?: SelectSubset<T, account_mailstatusFindFirstOrThrowArgs>
    ): Prisma__account_mailstatusClient<account_mailstatusGetPayload<T>>

    /**
     * Find zero or more Account_mailstatuses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {account_mailstatusFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Account_mailstatuses
     * const account_mailstatuses = await prisma.account_mailstatus.findMany()
     * 
     * // Get first 10 Account_mailstatuses
     * const account_mailstatuses = await prisma.account_mailstatus.findMany({ take: 10 })
     * 
     * // Only select the `message_id`
     * const account_mailstatusWithMessage_idOnly = await prisma.account_mailstatus.findMany({ select: { message_id: true } })
     * 
    **/
    findMany<T extends account_mailstatusFindManyArgs>(
      args?: SelectSubset<T, account_mailstatusFindManyArgs>
    ): Prisma.PrismaPromise<Array<account_mailstatusGetPayload<T>>>

    /**
     * Create a Account_mailstatus.
     * @param {account_mailstatusCreateArgs} args - Arguments to create a Account_mailstatus.
     * @example
     * // Create one Account_mailstatus
     * const Account_mailstatus = await prisma.account_mailstatus.create({
     *   data: {
     *     // ... data to create a Account_mailstatus
     *   }
     * })
     * 
    **/
    create<T extends account_mailstatusCreateArgs>(
      args: SelectSubset<T, account_mailstatusCreateArgs>
    ): Prisma__account_mailstatusClient<account_mailstatusGetPayload<T>>

    /**
     * Create many Account_mailstatuses.
     *     @param {account_mailstatusCreateManyArgs} args - Arguments to create many Account_mailstatuses.
     *     @example
     *     // Create many Account_mailstatuses
     *     const account_mailstatus = await prisma.account_mailstatus.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends account_mailstatusCreateManyArgs>(
      args?: SelectSubset<T, account_mailstatusCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Account_mailstatus.
     * @param {account_mailstatusDeleteArgs} args - Arguments to delete one Account_mailstatus.
     * @example
     * // Delete one Account_mailstatus
     * const Account_mailstatus = await prisma.account_mailstatus.delete({
     *   where: {
     *     // ... filter to delete one Account_mailstatus
     *   }
     * })
     * 
    **/
    delete<T extends account_mailstatusDeleteArgs>(
      args: SelectSubset<T, account_mailstatusDeleteArgs>
    ): Prisma__account_mailstatusClient<account_mailstatusGetPayload<T>>

    /**
     * Update one Account_mailstatus.
     * @param {account_mailstatusUpdateArgs} args - Arguments to update one Account_mailstatus.
     * @example
     * // Update one Account_mailstatus
     * const account_mailstatus = await prisma.account_mailstatus.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends account_mailstatusUpdateArgs>(
      args: SelectSubset<T, account_mailstatusUpdateArgs>
    ): Prisma__account_mailstatusClient<account_mailstatusGetPayload<T>>

    /**
     * Delete zero or more Account_mailstatuses.
     * @param {account_mailstatusDeleteManyArgs} args - Arguments to filter Account_mailstatuses to delete.
     * @example
     * // Delete a few Account_mailstatuses
     * const { count } = await prisma.account_mailstatus.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends account_mailstatusDeleteManyArgs>(
      args?: SelectSubset<T, account_mailstatusDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Account_mailstatuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {account_mailstatusUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Account_mailstatuses
     * const account_mailstatus = await prisma.account_mailstatus.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends account_mailstatusUpdateManyArgs>(
      args: SelectSubset<T, account_mailstatusUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Account_mailstatus.
     * @param {account_mailstatusUpsertArgs} args - Arguments to update or create a Account_mailstatus.
     * @example
     * // Update or create a Account_mailstatus
     * const account_mailstatus = await prisma.account_mailstatus.upsert({
     *   create: {
     *     // ... data to create a Account_mailstatus
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account_mailstatus we want to update
     *   }
     * })
    **/
    upsert<T extends account_mailstatusUpsertArgs>(
      args: SelectSubset<T, account_mailstatusUpsertArgs>
    ): Prisma__account_mailstatusClient<account_mailstatusGetPayload<T>>

    /**
     * Count the number of Account_mailstatuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {account_mailstatusCountArgs} args - Arguments to filter Account_mailstatuses to count.
     * @example
     * // Count the number of Account_mailstatuses
     * const count = await prisma.account_mailstatus.count({
     *   where: {
     *     // ... the filter for the Account_mailstatuses we want to count
     *   }
     * })
    **/
    count<T extends account_mailstatusCountArgs>(
      args?: Subset<T, account_mailstatusCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Account_mailstatusCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account_mailstatus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Account_mailstatusAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Account_mailstatusAggregateArgs>(args: Subset<T, Account_mailstatusAggregateArgs>): Prisma.PrismaPromise<GetAccount_mailstatusAggregateType<T>>

    /**
     * Group by Account_mailstatus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Account_mailstatusGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Account_mailstatusGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Account_mailstatusGroupByArgs['orderBy'] }
        : { orderBy?: Account_mailstatusGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Account_mailstatusGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccount_mailstatusGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for account_mailstatus.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__account_mailstatusClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * account_mailstatus base type for findUnique actions
   */
  export type account_mailstatusFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the account_mailstatus
     */
    select?: account_mailstatusSelect | null
    /**
     * Filter, which account_mailstatus to fetch.
     */
    where: account_mailstatusWhereUniqueInput
  }

  /**
   * account_mailstatus findUnique
   */
  export interface account_mailstatusFindUniqueArgs extends account_mailstatusFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * account_mailstatus findUniqueOrThrow
   */
  export type account_mailstatusFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the account_mailstatus
     */
    select?: account_mailstatusSelect | null
    /**
     * Filter, which account_mailstatus to fetch.
     */
    where: account_mailstatusWhereUniqueInput
  }


  /**
   * account_mailstatus base type for findFirst actions
   */
  export type account_mailstatusFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the account_mailstatus
     */
    select?: account_mailstatusSelect | null
    /**
     * Filter, which account_mailstatus to fetch.
     */
    where?: account_mailstatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of account_mailstatuses to fetch.
     */
    orderBy?: Enumerable<account_mailstatusOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for account_mailstatuses.
     */
    cursor?: account_mailstatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` account_mailstatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` account_mailstatuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of account_mailstatuses.
     */
    distinct?: Enumerable<Account_mailstatusScalarFieldEnum>
  }

  /**
   * account_mailstatus findFirst
   */
  export interface account_mailstatusFindFirstArgs extends account_mailstatusFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * account_mailstatus findFirstOrThrow
   */
  export type account_mailstatusFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the account_mailstatus
     */
    select?: account_mailstatusSelect | null
    /**
     * Filter, which account_mailstatus to fetch.
     */
    where?: account_mailstatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of account_mailstatuses to fetch.
     */
    orderBy?: Enumerable<account_mailstatusOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for account_mailstatuses.
     */
    cursor?: account_mailstatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` account_mailstatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` account_mailstatuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of account_mailstatuses.
     */
    distinct?: Enumerable<Account_mailstatusScalarFieldEnum>
  }


  /**
   * account_mailstatus findMany
   */
  export type account_mailstatusFindManyArgs = {
    /**
     * Select specific fields to fetch from the account_mailstatus
     */
    select?: account_mailstatusSelect | null
    /**
     * Filter, which account_mailstatuses to fetch.
     */
    where?: account_mailstatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of account_mailstatuses to fetch.
     */
    orderBy?: Enumerable<account_mailstatusOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing account_mailstatuses.
     */
    cursor?: account_mailstatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` account_mailstatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` account_mailstatuses.
     */
    skip?: number
    distinct?: Enumerable<Account_mailstatusScalarFieldEnum>
  }


  /**
   * account_mailstatus create
   */
  export type account_mailstatusCreateArgs = {
    /**
     * Select specific fields to fetch from the account_mailstatus
     */
    select?: account_mailstatusSelect | null
    /**
     * The data needed to create a account_mailstatus.
     */
    data: XOR<account_mailstatusCreateInput, account_mailstatusUncheckedCreateInput>
  }


  /**
   * account_mailstatus createMany
   */
  export type account_mailstatusCreateManyArgs = {
    /**
     * The data used to create many account_mailstatuses.
     */
    data: Enumerable<account_mailstatusCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * account_mailstatus update
   */
  export type account_mailstatusUpdateArgs = {
    /**
     * Select specific fields to fetch from the account_mailstatus
     */
    select?: account_mailstatusSelect | null
    /**
     * The data needed to update a account_mailstatus.
     */
    data: XOR<account_mailstatusUpdateInput, account_mailstatusUncheckedUpdateInput>
    /**
     * Choose, which account_mailstatus to update.
     */
    where: account_mailstatusWhereUniqueInput
  }


  /**
   * account_mailstatus updateMany
   */
  export type account_mailstatusUpdateManyArgs = {
    /**
     * The data used to update account_mailstatuses.
     */
    data: XOR<account_mailstatusUpdateManyMutationInput, account_mailstatusUncheckedUpdateManyInput>
    /**
     * Filter which account_mailstatuses to update
     */
    where?: account_mailstatusWhereInput
  }


  /**
   * account_mailstatus upsert
   */
  export type account_mailstatusUpsertArgs = {
    /**
     * Select specific fields to fetch from the account_mailstatus
     */
    select?: account_mailstatusSelect | null
    /**
     * The filter to search for the account_mailstatus to update in case it exists.
     */
    where: account_mailstatusWhereUniqueInput
    /**
     * In case the account_mailstatus found by the `where` argument doesn't exist, create a new account_mailstatus with this data.
     */
    create: XOR<account_mailstatusCreateInput, account_mailstatusUncheckedCreateInput>
    /**
     * In case the account_mailstatus was found with the provided `where` argument, update it with this data.
     */
    update: XOR<account_mailstatusUpdateInput, account_mailstatusUncheckedUpdateInput>
  }


  /**
   * account_mailstatus delete
   */
  export type account_mailstatusDeleteArgs = {
    /**
     * Select specific fields to fetch from the account_mailstatus
     */
    select?: account_mailstatusSelect | null
    /**
     * Filter which account_mailstatus to delete.
     */
    where: account_mailstatusWhereUniqueInput
  }


  /**
   * account_mailstatus deleteMany
   */
  export type account_mailstatusDeleteManyArgs = {
    /**
     * Filter which account_mailstatuses to delete
     */
    where?: account_mailstatusWhereInput
  }


  /**
   * account_mailstatus without action
   */
  export type account_mailstatusArgs = {
    /**
     * Select specific fields to fetch from the account_mailstatus
     */
    select?: account_mailstatusSelect | null
  }



  /**
   * Model account_mailstatus_archive
   */


  export type AggregateAccount_mailstatus_archive = {
    _count: Account_mailstatus_archiveCountAggregateOutputType | null
    _avg: Account_mailstatus_archiveAvgAggregateOutputType | null
    _sum: Account_mailstatus_archiveSumAggregateOutputType | null
    _min: Account_mailstatus_archiveMinAggregateOutputType | null
    _max: Account_mailstatus_archiveMaxAggregateOutputType | null
  }

  export type Account_mailstatus_archiveAvgAggregateOutputType = {
    message_id: number | null
    account_id: number | null
    status: number | null
    letterid: number | null
  }

  export type Account_mailstatus_archiveSumAggregateOutputType = {
    message_id: number | null
    account_id: number | null
    status: number | null
    letterid: number | null
  }

  export type Account_mailstatus_archiveMinAggregateOutputType = {
    message_id: number | null
    account_id: number | null
    email: string | null
    status: number | null
    letterid: number | null
  }

  export type Account_mailstatus_archiveMaxAggregateOutputType = {
    message_id: number | null
    account_id: number | null
    email: string | null
    status: number | null
    letterid: number | null
  }

  export type Account_mailstatus_archiveCountAggregateOutputType = {
    message_id: number
    account_id: number
    email: number
    status: number
    letterid: number
    _all: number
  }


  export type Account_mailstatus_archiveAvgAggregateInputType = {
    message_id?: true
    account_id?: true
    status?: true
    letterid?: true
  }

  export type Account_mailstatus_archiveSumAggregateInputType = {
    message_id?: true
    account_id?: true
    status?: true
    letterid?: true
  }

  export type Account_mailstatus_archiveMinAggregateInputType = {
    message_id?: true
    account_id?: true
    email?: true
    status?: true
    letterid?: true
  }

  export type Account_mailstatus_archiveMaxAggregateInputType = {
    message_id?: true
    account_id?: true
    email?: true
    status?: true
    letterid?: true
  }

  export type Account_mailstatus_archiveCountAggregateInputType = {
    message_id?: true
    account_id?: true
    email?: true
    status?: true
    letterid?: true
    _all?: true
  }

  export type Account_mailstatus_archiveAggregateArgs = {
    /**
     * Filter which account_mailstatus_archive to aggregate.
     */
    where?: account_mailstatus_archiveWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of account_mailstatus_archives to fetch.
     */
    orderBy?: Enumerable<account_mailstatus_archiveOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: account_mailstatus_archiveWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` account_mailstatus_archives from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` account_mailstatus_archives.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned account_mailstatus_archives
    **/
    _count?: true | Account_mailstatus_archiveCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Account_mailstatus_archiveAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Account_mailstatus_archiveSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Account_mailstatus_archiveMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Account_mailstatus_archiveMaxAggregateInputType
  }

  export type GetAccount_mailstatus_archiveAggregateType<T extends Account_mailstatus_archiveAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount_mailstatus_archive]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount_mailstatus_archive[P]>
      : GetScalarType<T[P], AggregateAccount_mailstatus_archive[P]>
  }




  export type Account_mailstatus_archiveGroupByArgs = {
    where?: account_mailstatus_archiveWhereInput
    orderBy?: Enumerable<account_mailstatus_archiveOrderByWithAggregationInput>
    by: Account_mailstatus_archiveScalarFieldEnum[]
    having?: account_mailstatus_archiveScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Account_mailstatus_archiveCountAggregateInputType | true
    _avg?: Account_mailstatus_archiveAvgAggregateInputType
    _sum?: Account_mailstatus_archiveSumAggregateInputType
    _min?: Account_mailstatus_archiveMinAggregateInputType
    _max?: Account_mailstatus_archiveMaxAggregateInputType
  }


  export type Account_mailstatus_archiveGroupByOutputType = {
    message_id: number
    account_id: number
    email: string | null
    status: number | null
    letterid: number | null
    _count: Account_mailstatus_archiveCountAggregateOutputType | null
    _avg: Account_mailstatus_archiveAvgAggregateOutputType | null
    _sum: Account_mailstatus_archiveSumAggregateOutputType | null
    _min: Account_mailstatus_archiveMinAggregateOutputType | null
    _max: Account_mailstatus_archiveMaxAggregateOutputType | null
  }

  type GetAccount_mailstatus_archiveGroupByPayload<T extends Account_mailstatus_archiveGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<Account_mailstatus_archiveGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Account_mailstatus_archiveGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Account_mailstatus_archiveGroupByOutputType[P]>
            : GetScalarType<T[P], Account_mailstatus_archiveGroupByOutputType[P]>
        }
      >
    >


  export type account_mailstatus_archiveSelect = {
    message_id?: boolean
    account_id?: boolean
    email?: boolean
    status?: boolean
    letterid?: boolean
  }


  export type account_mailstatus_archiveGetPayload<S extends boolean | null | undefined | account_mailstatus_archiveArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? account_mailstatus_archive :
    S extends undefined ? never :
    S extends { include: any } & (account_mailstatus_archiveArgs | account_mailstatus_archiveFindManyArgs)
    ? account_mailstatus_archive 
    : S extends { select: any } & (account_mailstatus_archiveArgs | account_mailstatus_archiveFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof account_mailstatus_archive ? account_mailstatus_archive[P] : never
  } 
      : account_mailstatus_archive


  type account_mailstatus_archiveCountArgs = 
    Omit<account_mailstatus_archiveFindManyArgs, 'select' | 'include'> & {
      select?: Account_mailstatus_archiveCountAggregateInputType | true
    }

  export interface account_mailstatus_archiveDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Account_mailstatus_archive that matches the filter.
     * @param {account_mailstatus_archiveFindUniqueArgs} args - Arguments to find a Account_mailstatus_archive
     * @example
     * // Get one Account_mailstatus_archive
     * const account_mailstatus_archive = await prisma.account_mailstatus_archive.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends account_mailstatus_archiveFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, account_mailstatus_archiveFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'account_mailstatus_archive'> extends True ? Prisma__account_mailstatus_archiveClient<account_mailstatus_archiveGetPayload<T>> : Prisma__account_mailstatus_archiveClient<account_mailstatus_archiveGetPayload<T> | null, null>

    /**
     * Find one Account_mailstatus_archive that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {account_mailstatus_archiveFindUniqueOrThrowArgs} args - Arguments to find a Account_mailstatus_archive
     * @example
     * // Get one Account_mailstatus_archive
     * const account_mailstatus_archive = await prisma.account_mailstatus_archive.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends account_mailstatus_archiveFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, account_mailstatus_archiveFindUniqueOrThrowArgs>
    ): Prisma__account_mailstatus_archiveClient<account_mailstatus_archiveGetPayload<T>>

    /**
     * Find the first Account_mailstatus_archive that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {account_mailstatus_archiveFindFirstArgs} args - Arguments to find a Account_mailstatus_archive
     * @example
     * // Get one Account_mailstatus_archive
     * const account_mailstatus_archive = await prisma.account_mailstatus_archive.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends account_mailstatus_archiveFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, account_mailstatus_archiveFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'account_mailstatus_archive'> extends True ? Prisma__account_mailstatus_archiveClient<account_mailstatus_archiveGetPayload<T>> : Prisma__account_mailstatus_archiveClient<account_mailstatus_archiveGetPayload<T> | null, null>

    /**
     * Find the first Account_mailstatus_archive that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {account_mailstatus_archiveFindFirstOrThrowArgs} args - Arguments to find a Account_mailstatus_archive
     * @example
     * // Get one Account_mailstatus_archive
     * const account_mailstatus_archive = await prisma.account_mailstatus_archive.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends account_mailstatus_archiveFindFirstOrThrowArgs>(
      args?: SelectSubset<T, account_mailstatus_archiveFindFirstOrThrowArgs>
    ): Prisma__account_mailstatus_archiveClient<account_mailstatus_archiveGetPayload<T>>

    /**
     * Find zero or more Account_mailstatus_archives that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {account_mailstatus_archiveFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Account_mailstatus_archives
     * const account_mailstatus_archives = await prisma.account_mailstatus_archive.findMany()
     * 
     * // Get first 10 Account_mailstatus_archives
     * const account_mailstatus_archives = await prisma.account_mailstatus_archive.findMany({ take: 10 })
     * 
     * // Only select the `message_id`
     * const account_mailstatus_archiveWithMessage_idOnly = await prisma.account_mailstatus_archive.findMany({ select: { message_id: true } })
     * 
    **/
    findMany<T extends account_mailstatus_archiveFindManyArgs>(
      args?: SelectSubset<T, account_mailstatus_archiveFindManyArgs>
    ): Prisma.PrismaPromise<Array<account_mailstatus_archiveGetPayload<T>>>

    /**
     * Create a Account_mailstatus_archive.
     * @param {account_mailstatus_archiveCreateArgs} args - Arguments to create a Account_mailstatus_archive.
     * @example
     * // Create one Account_mailstatus_archive
     * const Account_mailstatus_archive = await prisma.account_mailstatus_archive.create({
     *   data: {
     *     // ... data to create a Account_mailstatus_archive
     *   }
     * })
     * 
    **/
    create<T extends account_mailstatus_archiveCreateArgs>(
      args: SelectSubset<T, account_mailstatus_archiveCreateArgs>
    ): Prisma__account_mailstatus_archiveClient<account_mailstatus_archiveGetPayload<T>>

    /**
     * Create many Account_mailstatus_archives.
     *     @param {account_mailstatus_archiveCreateManyArgs} args - Arguments to create many Account_mailstatus_archives.
     *     @example
     *     // Create many Account_mailstatus_archives
     *     const account_mailstatus_archive = await prisma.account_mailstatus_archive.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends account_mailstatus_archiveCreateManyArgs>(
      args?: SelectSubset<T, account_mailstatus_archiveCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Account_mailstatus_archive.
     * @param {account_mailstatus_archiveDeleteArgs} args - Arguments to delete one Account_mailstatus_archive.
     * @example
     * // Delete one Account_mailstatus_archive
     * const Account_mailstatus_archive = await prisma.account_mailstatus_archive.delete({
     *   where: {
     *     // ... filter to delete one Account_mailstatus_archive
     *   }
     * })
     * 
    **/
    delete<T extends account_mailstatus_archiveDeleteArgs>(
      args: SelectSubset<T, account_mailstatus_archiveDeleteArgs>
    ): Prisma__account_mailstatus_archiveClient<account_mailstatus_archiveGetPayload<T>>

    /**
     * Update one Account_mailstatus_archive.
     * @param {account_mailstatus_archiveUpdateArgs} args - Arguments to update one Account_mailstatus_archive.
     * @example
     * // Update one Account_mailstatus_archive
     * const account_mailstatus_archive = await prisma.account_mailstatus_archive.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends account_mailstatus_archiveUpdateArgs>(
      args: SelectSubset<T, account_mailstatus_archiveUpdateArgs>
    ): Prisma__account_mailstatus_archiveClient<account_mailstatus_archiveGetPayload<T>>

    /**
     * Delete zero or more Account_mailstatus_archives.
     * @param {account_mailstatus_archiveDeleteManyArgs} args - Arguments to filter Account_mailstatus_archives to delete.
     * @example
     * // Delete a few Account_mailstatus_archives
     * const { count } = await prisma.account_mailstatus_archive.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends account_mailstatus_archiveDeleteManyArgs>(
      args?: SelectSubset<T, account_mailstatus_archiveDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Account_mailstatus_archives.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {account_mailstatus_archiveUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Account_mailstatus_archives
     * const account_mailstatus_archive = await prisma.account_mailstatus_archive.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends account_mailstatus_archiveUpdateManyArgs>(
      args: SelectSubset<T, account_mailstatus_archiveUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Account_mailstatus_archive.
     * @param {account_mailstatus_archiveUpsertArgs} args - Arguments to update or create a Account_mailstatus_archive.
     * @example
     * // Update or create a Account_mailstatus_archive
     * const account_mailstatus_archive = await prisma.account_mailstatus_archive.upsert({
     *   create: {
     *     // ... data to create a Account_mailstatus_archive
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account_mailstatus_archive we want to update
     *   }
     * })
    **/
    upsert<T extends account_mailstatus_archiveUpsertArgs>(
      args: SelectSubset<T, account_mailstatus_archiveUpsertArgs>
    ): Prisma__account_mailstatus_archiveClient<account_mailstatus_archiveGetPayload<T>>

    /**
     * Count the number of Account_mailstatus_archives.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {account_mailstatus_archiveCountArgs} args - Arguments to filter Account_mailstatus_archives to count.
     * @example
     * // Count the number of Account_mailstatus_archives
     * const count = await prisma.account_mailstatus_archive.count({
     *   where: {
     *     // ... the filter for the Account_mailstatus_archives we want to count
     *   }
     * })
    **/
    count<T extends account_mailstatus_archiveCountArgs>(
      args?: Subset<T, account_mailstatus_archiveCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Account_mailstatus_archiveCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account_mailstatus_archive.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Account_mailstatus_archiveAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Account_mailstatus_archiveAggregateArgs>(args: Subset<T, Account_mailstatus_archiveAggregateArgs>): Prisma.PrismaPromise<GetAccount_mailstatus_archiveAggregateType<T>>

    /**
     * Group by Account_mailstatus_archive.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Account_mailstatus_archiveGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Account_mailstatus_archiveGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Account_mailstatus_archiveGroupByArgs['orderBy'] }
        : { orderBy?: Account_mailstatus_archiveGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Account_mailstatus_archiveGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccount_mailstatus_archiveGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for account_mailstatus_archive.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__account_mailstatus_archiveClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * account_mailstatus_archive base type for findUnique actions
   */
  export type account_mailstatus_archiveFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the account_mailstatus_archive
     */
    select?: account_mailstatus_archiveSelect | null
    /**
     * Filter, which account_mailstatus_archive to fetch.
     */
    where: account_mailstatus_archiveWhereUniqueInput
  }

  /**
   * account_mailstatus_archive findUnique
   */
  export interface account_mailstatus_archiveFindUniqueArgs extends account_mailstatus_archiveFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * account_mailstatus_archive findUniqueOrThrow
   */
  export type account_mailstatus_archiveFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the account_mailstatus_archive
     */
    select?: account_mailstatus_archiveSelect | null
    /**
     * Filter, which account_mailstatus_archive to fetch.
     */
    where: account_mailstatus_archiveWhereUniqueInput
  }


  /**
   * account_mailstatus_archive base type for findFirst actions
   */
  export type account_mailstatus_archiveFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the account_mailstatus_archive
     */
    select?: account_mailstatus_archiveSelect | null
    /**
     * Filter, which account_mailstatus_archive to fetch.
     */
    where?: account_mailstatus_archiveWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of account_mailstatus_archives to fetch.
     */
    orderBy?: Enumerable<account_mailstatus_archiveOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for account_mailstatus_archives.
     */
    cursor?: account_mailstatus_archiveWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` account_mailstatus_archives from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` account_mailstatus_archives.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of account_mailstatus_archives.
     */
    distinct?: Enumerable<Account_mailstatus_archiveScalarFieldEnum>
  }

  /**
   * account_mailstatus_archive findFirst
   */
  export interface account_mailstatus_archiveFindFirstArgs extends account_mailstatus_archiveFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * account_mailstatus_archive findFirstOrThrow
   */
  export type account_mailstatus_archiveFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the account_mailstatus_archive
     */
    select?: account_mailstatus_archiveSelect | null
    /**
     * Filter, which account_mailstatus_archive to fetch.
     */
    where?: account_mailstatus_archiveWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of account_mailstatus_archives to fetch.
     */
    orderBy?: Enumerable<account_mailstatus_archiveOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for account_mailstatus_archives.
     */
    cursor?: account_mailstatus_archiveWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` account_mailstatus_archives from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` account_mailstatus_archives.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of account_mailstatus_archives.
     */
    distinct?: Enumerable<Account_mailstatus_archiveScalarFieldEnum>
  }


  /**
   * account_mailstatus_archive findMany
   */
  export type account_mailstatus_archiveFindManyArgs = {
    /**
     * Select specific fields to fetch from the account_mailstatus_archive
     */
    select?: account_mailstatus_archiveSelect | null
    /**
     * Filter, which account_mailstatus_archives to fetch.
     */
    where?: account_mailstatus_archiveWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of account_mailstatus_archives to fetch.
     */
    orderBy?: Enumerable<account_mailstatus_archiveOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing account_mailstatus_archives.
     */
    cursor?: account_mailstatus_archiveWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` account_mailstatus_archives from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` account_mailstatus_archives.
     */
    skip?: number
    distinct?: Enumerable<Account_mailstatus_archiveScalarFieldEnum>
  }


  /**
   * account_mailstatus_archive create
   */
  export type account_mailstatus_archiveCreateArgs = {
    /**
     * Select specific fields to fetch from the account_mailstatus_archive
     */
    select?: account_mailstatus_archiveSelect | null
    /**
     * The data needed to create a account_mailstatus_archive.
     */
    data: XOR<account_mailstatus_archiveCreateInput, account_mailstatus_archiveUncheckedCreateInput>
  }


  /**
   * account_mailstatus_archive createMany
   */
  export type account_mailstatus_archiveCreateManyArgs = {
    /**
     * The data used to create many account_mailstatus_archives.
     */
    data: Enumerable<account_mailstatus_archiveCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * account_mailstatus_archive update
   */
  export type account_mailstatus_archiveUpdateArgs = {
    /**
     * Select specific fields to fetch from the account_mailstatus_archive
     */
    select?: account_mailstatus_archiveSelect | null
    /**
     * The data needed to update a account_mailstatus_archive.
     */
    data: XOR<account_mailstatus_archiveUpdateInput, account_mailstatus_archiveUncheckedUpdateInput>
    /**
     * Choose, which account_mailstatus_archive to update.
     */
    where: account_mailstatus_archiveWhereUniqueInput
  }


  /**
   * account_mailstatus_archive updateMany
   */
  export type account_mailstatus_archiveUpdateManyArgs = {
    /**
     * The data used to update account_mailstatus_archives.
     */
    data: XOR<account_mailstatus_archiveUpdateManyMutationInput, account_mailstatus_archiveUncheckedUpdateManyInput>
    /**
     * Filter which account_mailstatus_archives to update
     */
    where?: account_mailstatus_archiveWhereInput
  }


  /**
   * account_mailstatus_archive upsert
   */
  export type account_mailstatus_archiveUpsertArgs = {
    /**
     * Select specific fields to fetch from the account_mailstatus_archive
     */
    select?: account_mailstatus_archiveSelect | null
    /**
     * The filter to search for the account_mailstatus_archive to update in case it exists.
     */
    where: account_mailstatus_archiveWhereUniqueInput
    /**
     * In case the account_mailstatus_archive found by the `where` argument doesn't exist, create a new account_mailstatus_archive with this data.
     */
    create: XOR<account_mailstatus_archiveCreateInput, account_mailstatus_archiveUncheckedCreateInput>
    /**
     * In case the account_mailstatus_archive was found with the provided `where` argument, update it with this data.
     */
    update: XOR<account_mailstatus_archiveUpdateInput, account_mailstatus_archiveUncheckedUpdateInput>
  }


  /**
   * account_mailstatus_archive delete
   */
  export type account_mailstatus_archiveDeleteArgs = {
    /**
     * Select specific fields to fetch from the account_mailstatus_archive
     */
    select?: account_mailstatus_archiveSelect | null
    /**
     * Filter which account_mailstatus_archive to delete.
     */
    where: account_mailstatus_archiveWhereUniqueInput
  }


  /**
   * account_mailstatus_archive deleteMany
   */
  export type account_mailstatus_archiveDeleteManyArgs = {
    /**
     * Filter which account_mailstatus_archives to delete
     */
    where?: account_mailstatus_archiveWhereInput
  }


  /**
   * account_mailstatus_archive without action
   */
  export type account_mailstatus_archiveArgs = {
    /**
     * Select specific fields to fetch from the account_mailstatus_archive
     */
    select?: account_mailstatus_archiveSelect | null
  }



  /**
   * Model account_twofactor_allowed
   */


  export type AggregateAccount_twofactor_allowed = {
    _count: Account_twofactor_allowedCountAggregateOutputType | null
    _avg: Account_twofactor_allowedAvgAggregateOutputType | null
    _sum: Account_twofactor_allowedSumAggregateOutputType | null
    _min: Account_twofactor_allowedMinAggregateOutputType | null
    _max: Account_twofactor_allowedMaxAggregateOutputType | null
  }

  export type Account_twofactor_allowedAvgAggregateOutputType = {
    id: number | null
    account_id: number | null
    expires_at: number | null
  }

  export type Account_twofactor_allowedSumAggregateOutputType = {
    id: number | null
    account_id: number | null
    expires_at: bigint | null
  }

  export type Account_twofactor_allowedMinAggregateOutputType = {
    id: number | null
    ip_address: string | null
    account_id: number | null
    expires_at: bigint | null
  }

  export type Account_twofactor_allowedMaxAggregateOutputType = {
    id: number | null
    ip_address: string | null
    account_id: number | null
    expires_at: bigint | null
  }

  export type Account_twofactor_allowedCountAggregateOutputType = {
    id: number
    ip_address: number
    account_id: number
    expires_at: number
    _all: number
  }


  export type Account_twofactor_allowedAvgAggregateInputType = {
    id?: true
    account_id?: true
    expires_at?: true
  }

  export type Account_twofactor_allowedSumAggregateInputType = {
    id?: true
    account_id?: true
    expires_at?: true
  }

  export type Account_twofactor_allowedMinAggregateInputType = {
    id?: true
    ip_address?: true
    account_id?: true
    expires_at?: true
  }

  export type Account_twofactor_allowedMaxAggregateInputType = {
    id?: true
    ip_address?: true
    account_id?: true
    expires_at?: true
  }

  export type Account_twofactor_allowedCountAggregateInputType = {
    id?: true
    ip_address?: true
    account_id?: true
    expires_at?: true
    _all?: true
  }

  export type Account_twofactor_allowedAggregateArgs = {
    /**
     * Filter which account_twofactor_allowed to aggregate.
     */
    where?: account_twofactor_allowedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of account_twofactor_alloweds to fetch.
     */
    orderBy?: Enumerable<account_twofactor_allowedOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: account_twofactor_allowedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` account_twofactor_alloweds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` account_twofactor_alloweds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned account_twofactor_alloweds
    **/
    _count?: true | Account_twofactor_allowedCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Account_twofactor_allowedAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Account_twofactor_allowedSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Account_twofactor_allowedMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Account_twofactor_allowedMaxAggregateInputType
  }

  export type GetAccount_twofactor_allowedAggregateType<T extends Account_twofactor_allowedAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount_twofactor_allowed]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount_twofactor_allowed[P]>
      : GetScalarType<T[P], AggregateAccount_twofactor_allowed[P]>
  }




  export type Account_twofactor_allowedGroupByArgs = {
    where?: account_twofactor_allowedWhereInput
    orderBy?: Enumerable<account_twofactor_allowedOrderByWithAggregationInput>
    by: Account_twofactor_allowedScalarFieldEnum[]
    having?: account_twofactor_allowedScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Account_twofactor_allowedCountAggregateInputType | true
    _avg?: Account_twofactor_allowedAvgAggregateInputType
    _sum?: Account_twofactor_allowedSumAggregateInputType
    _min?: Account_twofactor_allowedMinAggregateInputType
    _max?: Account_twofactor_allowedMaxAggregateInputType
  }


  export type Account_twofactor_allowedGroupByOutputType = {
    id: number
    ip_address: string
    account_id: number | null
    expires_at: bigint | null
    _count: Account_twofactor_allowedCountAggregateOutputType | null
    _avg: Account_twofactor_allowedAvgAggregateOutputType | null
    _sum: Account_twofactor_allowedSumAggregateOutputType | null
    _min: Account_twofactor_allowedMinAggregateOutputType | null
    _max: Account_twofactor_allowedMaxAggregateOutputType | null
  }

  type GetAccount_twofactor_allowedGroupByPayload<T extends Account_twofactor_allowedGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<Account_twofactor_allowedGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Account_twofactor_allowedGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Account_twofactor_allowedGroupByOutputType[P]>
            : GetScalarType<T[P], Account_twofactor_allowedGroupByOutputType[P]>
        }
      >
    >


  export type account_twofactor_allowedSelect = {
    id?: boolean
    ip_address?: boolean
    account_id?: boolean
    expires_at?: boolean
  }


  export type account_twofactor_allowedGetPayload<S extends boolean | null | undefined | account_twofactor_allowedArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? account_twofactor_allowed :
    S extends undefined ? never :
    S extends { include: any } & (account_twofactor_allowedArgs | account_twofactor_allowedFindManyArgs)
    ? account_twofactor_allowed 
    : S extends { select: any } & (account_twofactor_allowedArgs | account_twofactor_allowedFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof account_twofactor_allowed ? account_twofactor_allowed[P] : never
  } 
      : account_twofactor_allowed


  type account_twofactor_allowedCountArgs = 
    Omit<account_twofactor_allowedFindManyArgs, 'select' | 'include'> & {
      select?: Account_twofactor_allowedCountAggregateInputType | true
    }

  export interface account_twofactor_allowedDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Account_twofactor_allowed that matches the filter.
     * @param {account_twofactor_allowedFindUniqueArgs} args - Arguments to find a Account_twofactor_allowed
     * @example
     * // Get one Account_twofactor_allowed
     * const account_twofactor_allowed = await prisma.account_twofactor_allowed.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends account_twofactor_allowedFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, account_twofactor_allowedFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'account_twofactor_allowed'> extends True ? Prisma__account_twofactor_allowedClient<account_twofactor_allowedGetPayload<T>> : Prisma__account_twofactor_allowedClient<account_twofactor_allowedGetPayload<T> | null, null>

    /**
     * Find one Account_twofactor_allowed that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {account_twofactor_allowedFindUniqueOrThrowArgs} args - Arguments to find a Account_twofactor_allowed
     * @example
     * // Get one Account_twofactor_allowed
     * const account_twofactor_allowed = await prisma.account_twofactor_allowed.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends account_twofactor_allowedFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, account_twofactor_allowedFindUniqueOrThrowArgs>
    ): Prisma__account_twofactor_allowedClient<account_twofactor_allowedGetPayload<T>>

    /**
     * Find the first Account_twofactor_allowed that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {account_twofactor_allowedFindFirstArgs} args - Arguments to find a Account_twofactor_allowed
     * @example
     * // Get one Account_twofactor_allowed
     * const account_twofactor_allowed = await prisma.account_twofactor_allowed.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends account_twofactor_allowedFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, account_twofactor_allowedFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'account_twofactor_allowed'> extends True ? Prisma__account_twofactor_allowedClient<account_twofactor_allowedGetPayload<T>> : Prisma__account_twofactor_allowedClient<account_twofactor_allowedGetPayload<T> | null, null>

    /**
     * Find the first Account_twofactor_allowed that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {account_twofactor_allowedFindFirstOrThrowArgs} args - Arguments to find a Account_twofactor_allowed
     * @example
     * // Get one Account_twofactor_allowed
     * const account_twofactor_allowed = await prisma.account_twofactor_allowed.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends account_twofactor_allowedFindFirstOrThrowArgs>(
      args?: SelectSubset<T, account_twofactor_allowedFindFirstOrThrowArgs>
    ): Prisma__account_twofactor_allowedClient<account_twofactor_allowedGetPayload<T>>

    /**
     * Find zero or more Account_twofactor_alloweds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {account_twofactor_allowedFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Account_twofactor_alloweds
     * const account_twofactor_alloweds = await prisma.account_twofactor_allowed.findMany()
     * 
     * // Get first 10 Account_twofactor_alloweds
     * const account_twofactor_alloweds = await prisma.account_twofactor_allowed.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const account_twofactor_allowedWithIdOnly = await prisma.account_twofactor_allowed.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends account_twofactor_allowedFindManyArgs>(
      args?: SelectSubset<T, account_twofactor_allowedFindManyArgs>
    ): Prisma.PrismaPromise<Array<account_twofactor_allowedGetPayload<T>>>

    /**
     * Create a Account_twofactor_allowed.
     * @param {account_twofactor_allowedCreateArgs} args - Arguments to create a Account_twofactor_allowed.
     * @example
     * // Create one Account_twofactor_allowed
     * const Account_twofactor_allowed = await prisma.account_twofactor_allowed.create({
     *   data: {
     *     // ... data to create a Account_twofactor_allowed
     *   }
     * })
     * 
    **/
    create<T extends account_twofactor_allowedCreateArgs>(
      args: SelectSubset<T, account_twofactor_allowedCreateArgs>
    ): Prisma__account_twofactor_allowedClient<account_twofactor_allowedGetPayload<T>>

    /**
     * Create many Account_twofactor_alloweds.
     *     @param {account_twofactor_allowedCreateManyArgs} args - Arguments to create many Account_twofactor_alloweds.
     *     @example
     *     // Create many Account_twofactor_alloweds
     *     const account_twofactor_allowed = await prisma.account_twofactor_allowed.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends account_twofactor_allowedCreateManyArgs>(
      args?: SelectSubset<T, account_twofactor_allowedCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Account_twofactor_allowed.
     * @param {account_twofactor_allowedDeleteArgs} args - Arguments to delete one Account_twofactor_allowed.
     * @example
     * // Delete one Account_twofactor_allowed
     * const Account_twofactor_allowed = await prisma.account_twofactor_allowed.delete({
     *   where: {
     *     // ... filter to delete one Account_twofactor_allowed
     *   }
     * })
     * 
    **/
    delete<T extends account_twofactor_allowedDeleteArgs>(
      args: SelectSubset<T, account_twofactor_allowedDeleteArgs>
    ): Prisma__account_twofactor_allowedClient<account_twofactor_allowedGetPayload<T>>

    /**
     * Update one Account_twofactor_allowed.
     * @param {account_twofactor_allowedUpdateArgs} args - Arguments to update one Account_twofactor_allowed.
     * @example
     * // Update one Account_twofactor_allowed
     * const account_twofactor_allowed = await prisma.account_twofactor_allowed.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends account_twofactor_allowedUpdateArgs>(
      args: SelectSubset<T, account_twofactor_allowedUpdateArgs>
    ): Prisma__account_twofactor_allowedClient<account_twofactor_allowedGetPayload<T>>

    /**
     * Delete zero or more Account_twofactor_alloweds.
     * @param {account_twofactor_allowedDeleteManyArgs} args - Arguments to filter Account_twofactor_alloweds to delete.
     * @example
     * // Delete a few Account_twofactor_alloweds
     * const { count } = await prisma.account_twofactor_allowed.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends account_twofactor_allowedDeleteManyArgs>(
      args?: SelectSubset<T, account_twofactor_allowedDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Account_twofactor_alloweds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {account_twofactor_allowedUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Account_twofactor_alloweds
     * const account_twofactor_allowed = await prisma.account_twofactor_allowed.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends account_twofactor_allowedUpdateManyArgs>(
      args: SelectSubset<T, account_twofactor_allowedUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Account_twofactor_allowed.
     * @param {account_twofactor_allowedUpsertArgs} args - Arguments to update or create a Account_twofactor_allowed.
     * @example
     * // Update or create a Account_twofactor_allowed
     * const account_twofactor_allowed = await prisma.account_twofactor_allowed.upsert({
     *   create: {
     *     // ... data to create a Account_twofactor_allowed
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account_twofactor_allowed we want to update
     *   }
     * })
    **/
    upsert<T extends account_twofactor_allowedUpsertArgs>(
      args: SelectSubset<T, account_twofactor_allowedUpsertArgs>
    ): Prisma__account_twofactor_allowedClient<account_twofactor_allowedGetPayload<T>>

    /**
     * Count the number of Account_twofactor_alloweds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {account_twofactor_allowedCountArgs} args - Arguments to filter Account_twofactor_alloweds to count.
     * @example
     * // Count the number of Account_twofactor_alloweds
     * const count = await prisma.account_twofactor_allowed.count({
     *   where: {
     *     // ... the filter for the Account_twofactor_alloweds we want to count
     *   }
     * })
    **/
    count<T extends account_twofactor_allowedCountArgs>(
      args?: Subset<T, account_twofactor_allowedCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Account_twofactor_allowedCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account_twofactor_allowed.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Account_twofactor_allowedAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Account_twofactor_allowedAggregateArgs>(args: Subset<T, Account_twofactor_allowedAggregateArgs>): Prisma.PrismaPromise<GetAccount_twofactor_allowedAggregateType<T>>

    /**
     * Group by Account_twofactor_allowed.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Account_twofactor_allowedGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Account_twofactor_allowedGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Account_twofactor_allowedGroupByArgs['orderBy'] }
        : { orderBy?: Account_twofactor_allowedGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Account_twofactor_allowedGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccount_twofactor_allowedGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for account_twofactor_allowed.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__account_twofactor_allowedClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * account_twofactor_allowed base type for findUnique actions
   */
  export type account_twofactor_allowedFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the account_twofactor_allowed
     */
    select?: account_twofactor_allowedSelect | null
    /**
     * Filter, which account_twofactor_allowed to fetch.
     */
    where: account_twofactor_allowedWhereUniqueInput
  }

  /**
   * account_twofactor_allowed findUnique
   */
  export interface account_twofactor_allowedFindUniqueArgs extends account_twofactor_allowedFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * account_twofactor_allowed findUniqueOrThrow
   */
  export type account_twofactor_allowedFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the account_twofactor_allowed
     */
    select?: account_twofactor_allowedSelect | null
    /**
     * Filter, which account_twofactor_allowed to fetch.
     */
    where: account_twofactor_allowedWhereUniqueInput
  }


  /**
   * account_twofactor_allowed base type for findFirst actions
   */
  export type account_twofactor_allowedFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the account_twofactor_allowed
     */
    select?: account_twofactor_allowedSelect | null
    /**
     * Filter, which account_twofactor_allowed to fetch.
     */
    where?: account_twofactor_allowedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of account_twofactor_alloweds to fetch.
     */
    orderBy?: Enumerable<account_twofactor_allowedOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for account_twofactor_alloweds.
     */
    cursor?: account_twofactor_allowedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` account_twofactor_alloweds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` account_twofactor_alloweds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of account_twofactor_alloweds.
     */
    distinct?: Enumerable<Account_twofactor_allowedScalarFieldEnum>
  }

  /**
   * account_twofactor_allowed findFirst
   */
  export interface account_twofactor_allowedFindFirstArgs extends account_twofactor_allowedFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * account_twofactor_allowed findFirstOrThrow
   */
  export type account_twofactor_allowedFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the account_twofactor_allowed
     */
    select?: account_twofactor_allowedSelect | null
    /**
     * Filter, which account_twofactor_allowed to fetch.
     */
    where?: account_twofactor_allowedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of account_twofactor_alloweds to fetch.
     */
    orderBy?: Enumerable<account_twofactor_allowedOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for account_twofactor_alloweds.
     */
    cursor?: account_twofactor_allowedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` account_twofactor_alloweds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` account_twofactor_alloweds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of account_twofactor_alloweds.
     */
    distinct?: Enumerable<Account_twofactor_allowedScalarFieldEnum>
  }


  /**
   * account_twofactor_allowed findMany
   */
  export type account_twofactor_allowedFindManyArgs = {
    /**
     * Select specific fields to fetch from the account_twofactor_allowed
     */
    select?: account_twofactor_allowedSelect | null
    /**
     * Filter, which account_twofactor_alloweds to fetch.
     */
    where?: account_twofactor_allowedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of account_twofactor_alloweds to fetch.
     */
    orderBy?: Enumerable<account_twofactor_allowedOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing account_twofactor_alloweds.
     */
    cursor?: account_twofactor_allowedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` account_twofactor_alloweds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` account_twofactor_alloweds.
     */
    skip?: number
    distinct?: Enumerable<Account_twofactor_allowedScalarFieldEnum>
  }


  /**
   * account_twofactor_allowed create
   */
  export type account_twofactor_allowedCreateArgs = {
    /**
     * Select specific fields to fetch from the account_twofactor_allowed
     */
    select?: account_twofactor_allowedSelect | null
    /**
     * The data needed to create a account_twofactor_allowed.
     */
    data: XOR<account_twofactor_allowedCreateInput, account_twofactor_allowedUncheckedCreateInput>
  }


  /**
   * account_twofactor_allowed createMany
   */
  export type account_twofactor_allowedCreateManyArgs = {
    /**
     * The data used to create many account_twofactor_alloweds.
     */
    data: Enumerable<account_twofactor_allowedCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * account_twofactor_allowed update
   */
  export type account_twofactor_allowedUpdateArgs = {
    /**
     * Select specific fields to fetch from the account_twofactor_allowed
     */
    select?: account_twofactor_allowedSelect | null
    /**
     * The data needed to update a account_twofactor_allowed.
     */
    data: XOR<account_twofactor_allowedUpdateInput, account_twofactor_allowedUncheckedUpdateInput>
    /**
     * Choose, which account_twofactor_allowed to update.
     */
    where: account_twofactor_allowedWhereUniqueInput
  }


  /**
   * account_twofactor_allowed updateMany
   */
  export type account_twofactor_allowedUpdateManyArgs = {
    /**
     * The data used to update account_twofactor_alloweds.
     */
    data: XOR<account_twofactor_allowedUpdateManyMutationInput, account_twofactor_allowedUncheckedUpdateManyInput>
    /**
     * Filter which account_twofactor_alloweds to update
     */
    where?: account_twofactor_allowedWhereInput
  }


  /**
   * account_twofactor_allowed upsert
   */
  export type account_twofactor_allowedUpsertArgs = {
    /**
     * Select specific fields to fetch from the account_twofactor_allowed
     */
    select?: account_twofactor_allowedSelect | null
    /**
     * The filter to search for the account_twofactor_allowed to update in case it exists.
     */
    where: account_twofactor_allowedWhereUniqueInput
    /**
     * In case the account_twofactor_allowed found by the `where` argument doesn't exist, create a new account_twofactor_allowed with this data.
     */
    create: XOR<account_twofactor_allowedCreateInput, account_twofactor_allowedUncheckedCreateInput>
    /**
     * In case the account_twofactor_allowed was found with the provided `where` argument, update it with this data.
     */
    update: XOR<account_twofactor_allowedUpdateInput, account_twofactor_allowedUncheckedUpdateInput>
  }


  /**
   * account_twofactor_allowed delete
   */
  export type account_twofactor_allowedDeleteArgs = {
    /**
     * Select specific fields to fetch from the account_twofactor_allowed
     */
    select?: account_twofactor_allowedSelect | null
    /**
     * Filter which account_twofactor_allowed to delete.
     */
    where: account_twofactor_allowedWhereUniqueInput
  }


  /**
   * account_twofactor_allowed deleteMany
   */
  export type account_twofactor_allowedDeleteManyArgs = {
    /**
     * Filter which account_twofactor_alloweds to delete
     */
    where?: account_twofactor_allowedWhereInput
  }


  /**
   * account_twofactor_allowed without action
   */
  export type account_twofactor_allowedArgs = {
    /**
     * Select specific fields to fetch from the account_twofactor_allowed
     */
    select?: account_twofactor_allowedSelect | null
  }



  /**
   * Model antispam_blacklist
   */


  export type AggregateAntispam_blacklist = {
    _count: Antispam_blacklistCountAggregateOutputType | null
    _min: Antispam_blacklistMinAggregateOutputType | null
    _max: Antispam_blacklistMaxAggregateOutputType | null
  }

  export type Antispam_blacklistMinAggregateOutputType = {
    string: string | null
  }

  export type Antispam_blacklistMaxAggregateOutputType = {
    string: string | null
  }

  export type Antispam_blacklistCountAggregateOutputType = {
    string: number
    _all: number
  }


  export type Antispam_blacklistMinAggregateInputType = {
    string?: true
  }

  export type Antispam_blacklistMaxAggregateInputType = {
    string?: true
  }

  export type Antispam_blacklistCountAggregateInputType = {
    string?: true
    _all?: true
  }

  export type Antispam_blacklistAggregateArgs = {
    /**
     * Filter which antispam_blacklist to aggregate.
     */
    where?: antispam_blacklistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of antispam_blacklists to fetch.
     */
    orderBy?: Enumerable<antispam_blacklistOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: antispam_blacklistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` antispam_blacklists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` antispam_blacklists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned antispam_blacklists
    **/
    _count?: true | Antispam_blacklistCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Antispam_blacklistMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Antispam_blacklistMaxAggregateInputType
  }

  export type GetAntispam_blacklistAggregateType<T extends Antispam_blacklistAggregateArgs> = {
        [P in keyof T & keyof AggregateAntispam_blacklist]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAntispam_blacklist[P]>
      : GetScalarType<T[P], AggregateAntispam_blacklist[P]>
  }




  export type Antispam_blacklistGroupByArgs = {
    where?: antispam_blacklistWhereInput
    orderBy?: Enumerable<antispam_blacklistOrderByWithAggregationInput>
    by: Antispam_blacklistScalarFieldEnum[]
    having?: antispam_blacklistScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Antispam_blacklistCountAggregateInputType | true
    _min?: Antispam_blacklistMinAggregateInputType
    _max?: Antispam_blacklistMaxAggregateInputType
  }


  export type Antispam_blacklistGroupByOutputType = {
    string: string
    _count: Antispam_blacklistCountAggregateOutputType | null
    _min: Antispam_blacklistMinAggregateOutputType | null
    _max: Antispam_blacklistMaxAggregateOutputType | null
  }

  type GetAntispam_blacklistGroupByPayload<T extends Antispam_blacklistGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<Antispam_blacklistGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Antispam_blacklistGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Antispam_blacklistGroupByOutputType[P]>
            : GetScalarType<T[P], Antispam_blacklistGroupByOutputType[P]>
        }
      >
    >


  export type antispam_blacklistSelect = {
    string?: boolean
  }


  export type antispam_blacklistGetPayload<S extends boolean | null | undefined | antispam_blacklistArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? antispam_blacklist :
    S extends undefined ? never :
    S extends { include: any } & (antispam_blacklistArgs | antispam_blacklistFindManyArgs)
    ? antispam_blacklist 
    : S extends { select: any } & (antispam_blacklistArgs | antispam_blacklistFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof antispam_blacklist ? antispam_blacklist[P] : never
  } 
      : antispam_blacklist


  type antispam_blacklistCountArgs = 
    Omit<antispam_blacklistFindManyArgs, 'select' | 'include'> & {
      select?: Antispam_blacklistCountAggregateInputType | true
    }

  export interface antispam_blacklistDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Antispam_blacklist that matches the filter.
     * @param {antispam_blacklistFindUniqueArgs} args - Arguments to find a Antispam_blacklist
     * @example
     * // Get one Antispam_blacklist
     * const antispam_blacklist = await prisma.antispam_blacklist.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends antispam_blacklistFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, antispam_blacklistFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'antispam_blacklist'> extends True ? Prisma__antispam_blacklistClient<antispam_blacklistGetPayload<T>> : Prisma__antispam_blacklistClient<antispam_blacklistGetPayload<T> | null, null>

    /**
     * Find one Antispam_blacklist that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {antispam_blacklistFindUniqueOrThrowArgs} args - Arguments to find a Antispam_blacklist
     * @example
     * // Get one Antispam_blacklist
     * const antispam_blacklist = await prisma.antispam_blacklist.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends antispam_blacklistFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, antispam_blacklistFindUniqueOrThrowArgs>
    ): Prisma__antispam_blacklistClient<antispam_blacklistGetPayload<T>>

    /**
     * Find the first Antispam_blacklist that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {antispam_blacklistFindFirstArgs} args - Arguments to find a Antispam_blacklist
     * @example
     * // Get one Antispam_blacklist
     * const antispam_blacklist = await prisma.antispam_blacklist.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends antispam_blacklistFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, antispam_blacklistFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'antispam_blacklist'> extends True ? Prisma__antispam_blacklistClient<antispam_blacklistGetPayload<T>> : Prisma__antispam_blacklistClient<antispam_blacklistGetPayload<T> | null, null>

    /**
     * Find the first Antispam_blacklist that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {antispam_blacklistFindFirstOrThrowArgs} args - Arguments to find a Antispam_blacklist
     * @example
     * // Get one Antispam_blacklist
     * const antispam_blacklist = await prisma.antispam_blacklist.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends antispam_blacklistFindFirstOrThrowArgs>(
      args?: SelectSubset<T, antispam_blacklistFindFirstOrThrowArgs>
    ): Prisma__antispam_blacklistClient<antispam_blacklistGetPayload<T>>

    /**
     * Find zero or more Antispam_blacklists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {antispam_blacklistFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Antispam_blacklists
     * const antispam_blacklists = await prisma.antispam_blacklist.findMany()
     * 
     * // Get first 10 Antispam_blacklists
     * const antispam_blacklists = await prisma.antispam_blacklist.findMany({ take: 10 })
     * 
     * // Only select the `string`
     * const antispam_blacklistWithStringOnly = await prisma.antispam_blacklist.findMany({ select: { string: true } })
     * 
    **/
    findMany<T extends antispam_blacklistFindManyArgs>(
      args?: SelectSubset<T, antispam_blacklistFindManyArgs>
    ): Prisma.PrismaPromise<Array<antispam_blacklistGetPayload<T>>>

    /**
     * Create a Antispam_blacklist.
     * @param {antispam_blacklistCreateArgs} args - Arguments to create a Antispam_blacklist.
     * @example
     * // Create one Antispam_blacklist
     * const Antispam_blacklist = await prisma.antispam_blacklist.create({
     *   data: {
     *     // ... data to create a Antispam_blacklist
     *   }
     * })
     * 
    **/
    create<T extends antispam_blacklistCreateArgs>(
      args: SelectSubset<T, antispam_blacklistCreateArgs>
    ): Prisma__antispam_blacklistClient<antispam_blacklistGetPayload<T>>

    /**
     * Create many Antispam_blacklists.
     *     @param {antispam_blacklistCreateManyArgs} args - Arguments to create many Antispam_blacklists.
     *     @example
     *     // Create many Antispam_blacklists
     *     const antispam_blacklist = await prisma.antispam_blacklist.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends antispam_blacklistCreateManyArgs>(
      args?: SelectSubset<T, antispam_blacklistCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Antispam_blacklist.
     * @param {antispam_blacklistDeleteArgs} args - Arguments to delete one Antispam_blacklist.
     * @example
     * // Delete one Antispam_blacklist
     * const Antispam_blacklist = await prisma.antispam_blacklist.delete({
     *   where: {
     *     // ... filter to delete one Antispam_blacklist
     *   }
     * })
     * 
    **/
    delete<T extends antispam_blacklistDeleteArgs>(
      args: SelectSubset<T, antispam_blacklistDeleteArgs>
    ): Prisma__antispam_blacklistClient<antispam_blacklistGetPayload<T>>

    /**
     * Update one Antispam_blacklist.
     * @param {antispam_blacklistUpdateArgs} args - Arguments to update one Antispam_blacklist.
     * @example
     * // Update one Antispam_blacklist
     * const antispam_blacklist = await prisma.antispam_blacklist.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends antispam_blacklistUpdateArgs>(
      args: SelectSubset<T, antispam_blacklistUpdateArgs>
    ): Prisma__antispam_blacklistClient<antispam_blacklistGetPayload<T>>

    /**
     * Delete zero or more Antispam_blacklists.
     * @param {antispam_blacklistDeleteManyArgs} args - Arguments to filter Antispam_blacklists to delete.
     * @example
     * // Delete a few Antispam_blacklists
     * const { count } = await prisma.antispam_blacklist.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends antispam_blacklistDeleteManyArgs>(
      args?: SelectSubset<T, antispam_blacklistDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Antispam_blacklists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {antispam_blacklistUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Antispam_blacklists
     * const antispam_blacklist = await prisma.antispam_blacklist.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends antispam_blacklistUpdateManyArgs>(
      args: SelectSubset<T, antispam_blacklistUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Antispam_blacklist.
     * @param {antispam_blacklistUpsertArgs} args - Arguments to update or create a Antispam_blacklist.
     * @example
     * // Update or create a Antispam_blacklist
     * const antispam_blacklist = await prisma.antispam_blacklist.upsert({
     *   create: {
     *     // ... data to create a Antispam_blacklist
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Antispam_blacklist we want to update
     *   }
     * })
    **/
    upsert<T extends antispam_blacklistUpsertArgs>(
      args: SelectSubset<T, antispam_blacklistUpsertArgs>
    ): Prisma__antispam_blacklistClient<antispam_blacklistGetPayload<T>>

    /**
     * Count the number of Antispam_blacklists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {antispam_blacklistCountArgs} args - Arguments to filter Antispam_blacklists to count.
     * @example
     * // Count the number of Antispam_blacklists
     * const count = await prisma.antispam_blacklist.count({
     *   where: {
     *     // ... the filter for the Antispam_blacklists we want to count
     *   }
     * })
    **/
    count<T extends antispam_blacklistCountArgs>(
      args?: Subset<T, antispam_blacklistCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Antispam_blacklistCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Antispam_blacklist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Antispam_blacklistAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Antispam_blacklistAggregateArgs>(args: Subset<T, Antispam_blacklistAggregateArgs>): Prisma.PrismaPromise<GetAntispam_blacklistAggregateType<T>>

    /**
     * Group by Antispam_blacklist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Antispam_blacklistGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Antispam_blacklistGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Antispam_blacklistGroupByArgs['orderBy'] }
        : { orderBy?: Antispam_blacklistGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Antispam_blacklistGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAntispam_blacklistGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for antispam_blacklist.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__antispam_blacklistClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * antispam_blacklist base type for findUnique actions
   */
  export type antispam_blacklistFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the antispam_blacklist
     */
    select?: antispam_blacklistSelect | null
    /**
     * Filter, which antispam_blacklist to fetch.
     */
    where: antispam_blacklistWhereUniqueInput
  }

  /**
   * antispam_blacklist findUnique
   */
  export interface antispam_blacklistFindUniqueArgs extends antispam_blacklistFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * antispam_blacklist findUniqueOrThrow
   */
  export type antispam_blacklistFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the antispam_blacklist
     */
    select?: antispam_blacklistSelect | null
    /**
     * Filter, which antispam_blacklist to fetch.
     */
    where: antispam_blacklistWhereUniqueInput
  }


  /**
   * antispam_blacklist base type for findFirst actions
   */
  export type antispam_blacklistFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the antispam_blacklist
     */
    select?: antispam_blacklistSelect | null
    /**
     * Filter, which antispam_blacklist to fetch.
     */
    where?: antispam_blacklistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of antispam_blacklists to fetch.
     */
    orderBy?: Enumerable<antispam_blacklistOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for antispam_blacklists.
     */
    cursor?: antispam_blacklistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` antispam_blacklists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` antispam_blacklists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of antispam_blacklists.
     */
    distinct?: Enumerable<Antispam_blacklistScalarFieldEnum>
  }

  /**
   * antispam_blacklist findFirst
   */
  export interface antispam_blacklistFindFirstArgs extends antispam_blacklistFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * antispam_blacklist findFirstOrThrow
   */
  export type antispam_blacklistFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the antispam_blacklist
     */
    select?: antispam_blacklistSelect | null
    /**
     * Filter, which antispam_blacklist to fetch.
     */
    where?: antispam_blacklistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of antispam_blacklists to fetch.
     */
    orderBy?: Enumerable<antispam_blacklistOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for antispam_blacklists.
     */
    cursor?: antispam_blacklistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` antispam_blacklists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` antispam_blacklists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of antispam_blacklists.
     */
    distinct?: Enumerable<Antispam_blacklistScalarFieldEnum>
  }


  /**
   * antispam_blacklist findMany
   */
  export type antispam_blacklistFindManyArgs = {
    /**
     * Select specific fields to fetch from the antispam_blacklist
     */
    select?: antispam_blacklistSelect | null
    /**
     * Filter, which antispam_blacklists to fetch.
     */
    where?: antispam_blacklistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of antispam_blacklists to fetch.
     */
    orderBy?: Enumerable<antispam_blacklistOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing antispam_blacklists.
     */
    cursor?: antispam_blacklistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` antispam_blacklists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` antispam_blacklists.
     */
    skip?: number
    distinct?: Enumerable<Antispam_blacklistScalarFieldEnum>
  }


  /**
   * antispam_blacklist create
   */
  export type antispam_blacklistCreateArgs = {
    /**
     * Select specific fields to fetch from the antispam_blacklist
     */
    select?: antispam_blacklistSelect | null
    /**
     * The data needed to create a antispam_blacklist.
     */
    data: XOR<antispam_blacklistCreateInput, antispam_blacklistUncheckedCreateInput>
  }


  /**
   * antispam_blacklist createMany
   */
  export type antispam_blacklistCreateManyArgs = {
    /**
     * The data used to create many antispam_blacklists.
     */
    data: Enumerable<antispam_blacklistCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * antispam_blacklist update
   */
  export type antispam_blacklistUpdateArgs = {
    /**
     * Select specific fields to fetch from the antispam_blacklist
     */
    select?: antispam_blacklistSelect | null
    /**
     * The data needed to update a antispam_blacklist.
     */
    data: XOR<antispam_blacklistUpdateInput, antispam_blacklistUncheckedUpdateInput>
    /**
     * Choose, which antispam_blacklist to update.
     */
    where: antispam_blacklistWhereUniqueInput
  }


  /**
   * antispam_blacklist updateMany
   */
  export type antispam_blacklistUpdateManyArgs = {
    /**
     * The data used to update antispam_blacklists.
     */
    data: XOR<antispam_blacklistUpdateManyMutationInput, antispam_blacklistUncheckedUpdateManyInput>
    /**
     * Filter which antispam_blacklists to update
     */
    where?: antispam_blacklistWhereInput
  }


  /**
   * antispam_blacklist upsert
   */
  export type antispam_blacklistUpsertArgs = {
    /**
     * Select specific fields to fetch from the antispam_blacklist
     */
    select?: antispam_blacklistSelect | null
    /**
     * The filter to search for the antispam_blacklist to update in case it exists.
     */
    where: antispam_blacklistWhereUniqueInput
    /**
     * In case the antispam_blacklist found by the `where` argument doesn't exist, create a new antispam_blacklist with this data.
     */
    create: XOR<antispam_blacklistCreateInput, antispam_blacklistUncheckedCreateInput>
    /**
     * In case the antispam_blacklist was found with the provided `where` argument, update it with this data.
     */
    update: XOR<antispam_blacklistUpdateInput, antispam_blacklistUncheckedUpdateInput>
  }


  /**
   * antispam_blacklist delete
   */
  export type antispam_blacklistDeleteArgs = {
    /**
     * Select specific fields to fetch from the antispam_blacklist
     */
    select?: antispam_blacklistSelect | null
    /**
     * Filter which antispam_blacklist to delete.
     */
    where: antispam_blacklistWhereUniqueInput
  }


  /**
   * antispam_blacklist deleteMany
   */
  export type antispam_blacklistDeleteManyArgs = {
    /**
     * Filter which antispam_blacklists to delete
     */
    where?: antispam_blacklistWhereInput
  }


  /**
   * antispam_blacklist without action
   */
  export type antispam_blacklistArgs = {
    /**
     * Select specific fields to fetch from the antispam_blacklist
     */
    select?: antispam_blacklistSelect | null
  }



  /**
   * Model antispam_client
   */


  export type AggregateAntispam_client = {
    _count: Antispam_clientCountAggregateOutputType | null
    _min: Antispam_clientMinAggregateOutputType | null
    _max: Antispam_clientMaxAggregateOutputType | null
  }

  export type Antispam_clientMinAggregateOutputType = {
    Regex: string | null
    Note: string | null
  }

  export type Antispam_clientMaxAggregateOutputType = {
    Regex: string | null
    Note: string | null
  }

  export type Antispam_clientCountAggregateOutputType = {
    Regex: number
    Note: number
    _all: number
  }


  export type Antispam_clientMinAggregateInputType = {
    Regex?: true
    Note?: true
  }

  export type Antispam_clientMaxAggregateInputType = {
    Regex?: true
    Note?: true
  }

  export type Antispam_clientCountAggregateInputType = {
    Regex?: true
    Note?: true
    _all?: true
  }

  export type Antispam_clientAggregateArgs = {
    /**
     * Filter which antispam_client to aggregate.
     */
    where?: antispam_clientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of antispam_clients to fetch.
     */
    orderBy?: Enumerable<antispam_clientOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: antispam_clientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` antispam_clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` antispam_clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned antispam_clients
    **/
    _count?: true | Antispam_clientCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Antispam_clientMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Antispam_clientMaxAggregateInputType
  }

  export type GetAntispam_clientAggregateType<T extends Antispam_clientAggregateArgs> = {
        [P in keyof T & keyof AggregateAntispam_client]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAntispam_client[P]>
      : GetScalarType<T[P], AggregateAntispam_client[P]>
  }




  export type Antispam_clientGroupByArgs = {
    where?: antispam_clientWhereInput
    orderBy?: Enumerable<antispam_clientOrderByWithAggregationInput>
    by: Antispam_clientScalarFieldEnum[]
    having?: antispam_clientScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Antispam_clientCountAggregateInputType | true
    _min?: Antispam_clientMinAggregateInputType
    _max?: Antispam_clientMaxAggregateInputType
  }


  export type Antispam_clientGroupByOutputType = {
    Regex: string
    Note: string | null
    _count: Antispam_clientCountAggregateOutputType | null
    _min: Antispam_clientMinAggregateOutputType | null
    _max: Antispam_clientMaxAggregateOutputType | null
  }

  type GetAntispam_clientGroupByPayload<T extends Antispam_clientGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<Antispam_clientGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Antispam_clientGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Antispam_clientGroupByOutputType[P]>
            : GetScalarType<T[P], Antispam_clientGroupByOutputType[P]>
        }
      >
    >


  export type antispam_clientSelect = {
    Regex?: boolean
    Note?: boolean
  }


  export type antispam_clientGetPayload<S extends boolean | null | undefined | antispam_clientArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? antispam_client :
    S extends undefined ? never :
    S extends { include: any } & (antispam_clientArgs | antispam_clientFindManyArgs)
    ? antispam_client 
    : S extends { select: any } & (antispam_clientArgs | antispam_clientFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof antispam_client ? antispam_client[P] : never
  } 
      : antispam_client


  type antispam_clientCountArgs = 
    Omit<antispam_clientFindManyArgs, 'select' | 'include'> & {
      select?: Antispam_clientCountAggregateInputType | true
    }

  export interface antispam_clientDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Antispam_client that matches the filter.
     * @param {antispam_clientFindUniqueArgs} args - Arguments to find a Antispam_client
     * @example
     * // Get one Antispam_client
     * const antispam_client = await prisma.antispam_client.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends antispam_clientFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, antispam_clientFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'antispam_client'> extends True ? Prisma__antispam_clientClient<antispam_clientGetPayload<T>> : Prisma__antispam_clientClient<antispam_clientGetPayload<T> | null, null>

    /**
     * Find one Antispam_client that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {antispam_clientFindUniqueOrThrowArgs} args - Arguments to find a Antispam_client
     * @example
     * // Get one Antispam_client
     * const antispam_client = await prisma.antispam_client.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends antispam_clientFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, antispam_clientFindUniqueOrThrowArgs>
    ): Prisma__antispam_clientClient<antispam_clientGetPayload<T>>

    /**
     * Find the first Antispam_client that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {antispam_clientFindFirstArgs} args - Arguments to find a Antispam_client
     * @example
     * // Get one Antispam_client
     * const antispam_client = await prisma.antispam_client.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends antispam_clientFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, antispam_clientFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'antispam_client'> extends True ? Prisma__antispam_clientClient<antispam_clientGetPayload<T>> : Prisma__antispam_clientClient<antispam_clientGetPayload<T> | null, null>

    /**
     * Find the first Antispam_client that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {antispam_clientFindFirstOrThrowArgs} args - Arguments to find a Antispam_client
     * @example
     * // Get one Antispam_client
     * const antispam_client = await prisma.antispam_client.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends antispam_clientFindFirstOrThrowArgs>(
      args?: SelectSubset<T, antispam_clientFindFirstOrThrowArgs>
    ): Prisma__antispam_clientClient<antispam_clientGetPayload<T>>

    /**
     * Find zero or more Antispam_clients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {antispam_clientFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Antispam_clients
     * const antispam_clients = await prisma.antispam_client.findMany()
     * 
     * // Get first 10 Antispam_clients
     * const antispam_clients = await prisma.antispam_client.findMany({ take: 10 })
     * 
     * // Only select the `Regex`
     * const antispam_clientWithRegexOnly = await prisma.antispam_client.findMany({ select: { Regex: true } })
     * 
    **/
    findMany<T extends antispam_clientFindManyArgs>(
      args?: SelectSubset<T, antispam_clientFindManyArgs>
    ): Prisma.PrismaPromise<Array<antispam_clientGetPayload<T>>>

    /**
     * Create a Antispam_client.
     * @param {antispam_clientCreateArgs} args - Arguments to create a Antispam_client.
     * @example
     * // Create one Antispam_client
     * const Antispam_client = await prisma.antispam_client.create({
     *   data: {
     *     // ... data to create a Antispam_client
     *   }
     * })
     * 
    **/
    create<T extends antispam_clientCreateArgs>(
      args: SelectSubset<T, antispam_clientCreateArgs>
    ): Prisma__antispam_clientClient<antispam_clientGetPayload<T>>

    /**
     * Create many Antispam_clients.
     *     @param {antispam_clientCreateManyArgs} args - Arguments to create many Antispam_clients.
     *     @example
     *     // Create many Antispam_clients
     *     const antispam_client = await prisma.antispam_client.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends antispam_clientCreateManyArgs>(
      args?: SelectSubset<T, antispam_clientCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Antispam_client.
     * @param {antispam_clientDeleteArgs} args - Arguments to delete one Antispam_client.
     * @example
     * // Delete one Antispam_client
     * const Antispam_client = await prisma.antispam_client.delete({
     *   where: {
     *     // ... filter to delete one Antispam_client
     *   }
     * })
     * 
    **/
    delete<T extends antispam_clientDeleteArgs>(
      args: SelectSubset<T, antispam_clientDeleteArgs>
    ): Prisma__antispam_clientClient<antispam_clientGetPayload<T>>

    /**
     * Update one Antispam_client.
     * @param {antispam_clientUpdateArgs} args - Arguments to update one Antispam_client.
     * @example
     * // Update one Antispam_client
     * const antispam_client = await prisma.antispam_client.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends antispam_clientUpdateArgs>(
      args: SelectSubset<T, antispam_clientUpdateArgs>
    ): Prisma__antispam_clientClient<antispam_clientGetPayload<T>>

    /**
     * Delete zero or more Antispam_clients.
     * @param {antispam_clientDeleteManyArgs} args - Arguments to filter Antispam_clients to delete.
     * @example
     * // Delete a few Antispam_clients
     * const { count } = await prisma.antispam_client.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends antispam_clientDeleteManyArgs>(
      args?: SelectSubset<T, antispam_clientDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Antispam_clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {antispam_clientUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Antispam_clients
     * const antispam_client = await prisma.antispam_client.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends antispam_clientUpdateManyArgs>(
      args: SelectSubset<T, antispam_clientUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Antispam_client.
     * @param {antispam_clientUpsertArgs} args - Arguments to update or create a Antispam_client.
     * @example
     * // Update or create a Antispam_client
     * const antispam_client = await prisma.antispam_client.upsert({
     *   create: {
     *     // ... data to create a Antispam_client
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Antispam_client we want to update
     *   }
     * })
    **/
    upsert<T extends antispam_clientUpsertArgs>(
      args: SelectSubset<T, antispam_clientUpsertArgs>
    ): Prisma__antispam_clientClient<antispam_clientGetPayload<T>>

    /**
     * Count the number of Antispam_clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {antispam_clientCountArgs} args - Arguments to filter Antispam_clients to count.
     * @example
     * // Count the number of Antispam_clients
     * const count = await prisma.antispam_client.count({
     *   where: {
     *     // ... the filter for the Antispam_clients we want to count
     *   }
     * })
    **/
    count<T extends antispam_clientCountArgs>(
      args?: Subset<T, antispam_clientCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Antispam_clientCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Antispam_client.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Antispam_clientAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Antispam_clientAggregateArgs>(args: Subset<T, Antispam_clientAggregateArgs>): Prisma.PrismaPromise<GetAntispam_clientAggregateType<T>>

    /**
     * Group by Antispam_client.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Antispam_clientGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Antispam_clientGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Antispam_clientGroupByArgs['orderBy'] }
        : { orderBy?: Antispam_clientGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Antispam_clientGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAntispam_clientGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for antispam_client.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__antispam_clientClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * antispam_client base type for findUnique actions
   */
  export type antispam_clientFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the antispam_client
     */
    select?: antispam_clientSelect | null
    /**
     * Filter, which antispam_client to fetch.
     */
    where: antispam_clientWhereUniqueInput
  }

  /**
   * antispam_client findUnique
   */
  export interface antispam_clientFindUniqueArgs extends antispam_clientFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * antispam_client findUniqueOrThrow
   */
  export type antispam_clientFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the antispam_client
     */
    select?: antispam_clientSelect | null
    /**
     * Filter, which antispam_client to fetch.
     */
    where: antispam_clientWhereUniqueInput
  }


  /**
   * antispam_client base type for findFirst actions
   */
  export type antispam_clientFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the antispam_client
     */
    select?: antispam_clientSelect | null
    /**
     * Filter, which antispam_client to fetch.
     */
    where?: antispam_clientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of antispam_clients to fetch.
     */
    orderBy?: Enumerable<antispam_clientOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for antispam_clients.
     */
    cursor?: antispam_clientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` antispam_clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` antispam_clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of antispam_clients.
     */
    distinct?: Enumerable<Antispam_clientScalarFieldEnum>
  }

  /**
   * antispam_client findFirst
   */
  export interface antispam_clientFindFirstArgs extends antispam_clientFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * antispam_client findFirstOrThrow
   */
  export type antispam_clientFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the antispam_client
     */
    select?: antispam_clientSelect | null
    /**
     * Filter, which antispam_client to fetch.
     */
    where?: antispam_clientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of antispam_clients to fetch.
     */
    orderBy?: Enumerable<antispam_clientOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for antispam_clients.
     */
    cursor?: antispam_clientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` antispam_clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` antispam_clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of antispam_clients.
     */
    distinct?: Enumerable<Antispam_clientScalarFieldEnum>
  }


  /**
   * antispam_client findMany
   */
  export type antispam_clientFindManyArgs = {
    /**
     * Select specific fields to fetch from the antispam_client
     */
    select?: antispam_clientSelect | null
    /**
     * Filter, which antispam_clients to fetch.
     */
    where?: antispam_clientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of antispam_clients to fetch.
     */
    orderBy?: Enumerable<antispam_clientOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing antispam_clients.
     */
    cursor?: antispam_clientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` antispam_clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` antispam_clients.
     */
    skip?: number
    distinct?: Enumerable<Antispam_clientScalarFieldEnum>
  }


  /**
   * antispam_client create
   */
  export type antispam_clientCreateArgs = {
    /**
     * Select specific fields to fetch from the antispam_client
     */
    select?: antispam_clientSelect | null
    /**
     * The data needed to create a antispam_client.
     */
    data: XOR<antispam_clientCreateInput, antispam_clientUncheckedCreateInput>
  }


  /**
   * antispam_client createMany
   */
  export type antispam_clientCreateManyArgs = {
    /**
     * The data used to create many antispam_clients.
     */
    data: Enumerable<antispam_clientCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * antispam_client update
   */
  export type antispam_clientUpdateArgs = {
    /**
     * Select specific fields to fetch from the antispam_client
     */
    select?: antispam_clientSelect | null
    /**
     * The data needed to update a antispam_client.
     */
    data: XOR<antispam_clientUpdateInput, antispam_clientUncheckedUpdateInput>
    /**
     * Choose, which antispam_client to update.
     */
    where: antispam_clientWhereUniqueInput
  }


  /**
   * antispam_client updateMany
   */
  export type antispam_clientUpdateManyArgs = {
    /**
     * The data used to update antispam_clients.
     */
    data: XOR<antispam_clientUpdateManyMutationInput, antispam_clientUncheckedUpdateManyInput>
    /**
     * Filter which antispam_clients to update
     */
    where?: antispam_clientWhereInput
  }


  /**
   * antispam_client upsert
   */
  export type antispam_clientUpsertArgs = {
    /**
     * Select specific fields to fetch from the antispam_client
     */
    select?: antispam_clientSelect | null
    /**
     * The filter to search for the antispam_client to update in case it exists.
     */
    where: antispam_clientWhereUniqueInput
    /**
     * In case the antispam_client found by the `where` argument doesn't exist, create a new antispam_client with this data.
     */
    create: XOR<antispam_clientCreateInput, antispam_clientUncheckedCreateInput>
    /**
     * In case the antispam_client was found with the provided `where` argument, update it with this data.
     */
    update: XOR<antispam_clientUpdateInput, antispam_clientUncheckedUpdateInput>
  }


  /**
   * antispam_client delete
   */
  export type antispam_clientDeleteArgs = {
    /**
     * Select specific fields to fetch from the antispam_client
     */
    select?: antispam_clientSelect | null
    /**
     * Filter which antispam_client to delete.
     */
    where: antispam_clientWhereUniqueInput
  }


  /**
   * antispam_client deleteMany
   */
  export type antispam_clientDeleteManyArgs = {
    /**
     * Filter which antispam_clients to delete
     */
    where?: antispam_clientWhereInput
  }


  /**
   * antispam_client without action
   */
  export type antispam_clientArgs = {
    /**
     * Select specific fields to fetch from the antispam_client
     */
    select?: antispam_clientSelect | null
  }



  /**
   * Model antispam_replacement
   */


  export type AggregateAntispam_replacement = {
    _count: Antispam_replacementCountAggregateOutputType | null
    _min: Antispam_replacementMinAggregateOutputType | null
    _max: Antispam_replacementMaxAggregateOutputType | null
  }

  export type Antispam_replacementMinAggregateOutputType = {
    from: string | null
    to: string | null
  }

  export type Antispam_replacementMaxAggregateOutputType = {
    from: string | null
    to: string | null
  }

  export type Antispam_replacementCountAggregateOutputType = {
    from: number
    to: number
    _all: number
  }


  export type Antispam_replacementMinAggregateInputType = {
    from?: true
    to?: true
  }

  export type Antispam_replacementMaxAggregateInputType = {
    from?: true
    to?: true
  }

  export type Antispam_replacementCountAggregateInputType = {
    from?: true
    to?: true
    _all?: true
  }

  export type Antispam_replacementAggregateArgs = {
    /**
     * Filter which antispam_replacement to aggregate.
     */
    where?: antispam_replacementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of antispam_replacements to fetch.
     */
    orderBy?: Enumerable<antispam_replacementOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: antispam_replacementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` antispam_replacements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` antispam_replacements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned antispam_replacements
    **/
    _count?: true | Antispam_replacementCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Antispam_replacementMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Antispam_replacementMaxAggregateInputType
  }

  export type GetAntispam_replacementAggregateType<T extends Antispam_replacementAggregateArgs> = {
        [P in keyof T & keyof AggregateAntispam_replacement]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAntispam_replacement[P]>
      : GetScalarType<T[P], AggregateAntispam_replacement[P]>
  }




  export type Antispam_replacementGroupByArgs = {
    where?: antispam_replacementWhereInput
    orderBy?: Enumerable<antispam_replacementOrderByWithAggregationInput>
    by: Antispam_replacementScalarFieldEnum[]
    having?: antispam_replacementScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Antispam_replacementCountAggregateInputType | true
    _min?: Antispam_replacementMinAggregateInputType
    _max?: Antispam_replacementMaxAggregateInputType
  }


  export type Antispam_replacementGroupByOutputType = {
    from: string
    to: string
    _count: Antispam_replacementCountAggregateOutputType | null
    _min: Antispam_replacementMinAggregateOutputType | null
    _max: Antispam_replacementMaxAggregateOutputType | null
  }

  type GetAntispam_replacementGroupByPayload<T extends Antispam_replacementGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<Antispam_replacementGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Antispam_replacementGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Antispam_replacementGroupByOutputType[P]>
            : GetScalarType<T[P], Antispam_replacementGroupByOutputType[P]>
        }
      >
    >


  export type antispam_replacementSelect = {
    from?: boolean
    to?: boolean
  }


  export type antispam_replacementGetPayload<S extends boolean | null | undefined | antispam_replacementArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? antispam_replacement :
    S extends undefined ? never :
    S extends { include: any } & (antispam_replacementArgs | antispam_replacementFindManyArgs)
    ? antispam_replacement 
    : S extends { select: any } & (antispam_replacementArgs | antispam_replacementFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof antispam_replacement ? antispam_replacement[P] : never
  } 
      : antispam_replacement


  type antispam_replacementCountArgs = 
    Omit<antispam_replacementFindManyArgs, 'select' | 'include'> & {
      select?: Antispam_replacementCountAggregateInputType | true
    }

  export interface antispam_replacementDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Antispam_replacement that matches the filter.
     * @param {antispam_replacementFindUniqueArgs} args - Arguments to find a Antispam_replacement
     * @example
     * // Get one Antispam_replacement
     * const antispam_replacement = await prisma.antispam_replacement.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends antispam_replacementFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, antispam_replacementFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'antispam_replacement'> extends True ? Prisma__antispam_replacementClient<antispam_replacementGetPayload<T>> : Prisma__antispam_replacementClient<antispam_replacementGetPayload<T> | null, null>

    /**
     * Find one Antispam_replacement that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {antispam_replacementFindUniqueOrThrowArgs} args - Arguments to find a Antispam_replacement
     * @example
     * // Get one Antispam_replacement
     * const antispam_replacement = await prisma.antispam_replacement.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends antispam_replacementFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, antispam_replacementFindUniqueOrThrowArgs>
    ): Prisma__antispam_replacementClient<antispam_replacementGetPayload<T>>

    /**
     * Find the first Antispam_replacement that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {antispam_replacementFindFirstArgs} args - Arguments to find a Antispam_replacement
     * @example
     * // Get one Antispam_replacement
     * const antispam_replacement = await prisma.antispam_replacement.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends antispam_replacementFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, antispam_replacementFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'antispam_replacement'> extends True ? Prisma__antispam_replacementClient<antispam_replacementGetPayload<T>> : Prisma__antispam_replacementClient<antispam_replacementGetPayload<T> | null, null>

    /**
     * Find the first Antispam_replacement that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {antispam_replacementFindFirstOrThrowArgs} args - Arguments to find a Antispam_replacement
     * @example
     * // Get one Antispam_replacement
     * const antispam_replacement = await prisma.antispam_replacement.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends antispam_replacementFindFirstOrThrowArgs>(
      args?: SelectSubset<T, antispam_replacementFindFirstOrThrowArgs>
    ): Prisma__antispam_replacementClient<antispam_replacementGetPayload<T>>

    /**
     * Find zero or more Antispam_replacements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {antispam_replacementFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Antispam_replacements
     * const antispam_replacements = await prisma.antispam_replacement.findMany()
     * 
     * // Get first 10 Antispam_replacements
     * const antispam_replacements = await prisma.antispam_replacement.findMany({ take: 10 })
     * 
     * // Only select the `from`
     * const antispam_replacementWithFromOnly = await prisma.antispam_replacement.findMany({ select: { from: true } })
     * 
    **/
    findMany<T extends antispam_replacementFindManyArgs>(
      args?: SelectSubset<T, antispam_replacementFindManyArgs>
    ): Prisma.PrismaPromise<Array<antispam_replacementGetPayload<T>>>

    /**
     * Create a Antispam_replacement.
     * @param {antispam_replacementCreateArgs} args - Arguments to create a Antispam_replacement.
     * @example
     * // Create one Antispam_replacement
     * const Antispam_replacement = await prisma.antispam_replacement.create({
     *   data: {
     *     // ... data to create a Antispam_replacement
     *   }
     * })
     * 
    **/
    create<T extends antispam_replacementCreateArgs>(
      args: SelectSubset<T, antispam_replacementCreateArgs>
    ): Prisma__antispam_replacementClient<antispam_replacementGetPayload<T>>

    /**
     * Create many Antispam_replacements.
     *     @param {antispam_replacementCreateManyArgs} args - Arguments to create many Antispam_replacements.
     *     @example
     *     // Create many Antispam_replacements
     *     const antispam_replacement = await prisma.antispam_replacement.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends antispam_replacementCreateManyArgs>(
      args?: SelectSubset<T, antispam_replacementCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Antispam_replacement.
     * @param {antispam_replacementDeleteArgs} args - Arguments to delete one Antispam_replacement.
     * @example
     * // Delete one Antispam_replacement
     * const Antispam_replacement = await prisma.antispam_replacement.delete({
     *   where: {
     *     // ... filter to delete one Antispam_replacement
     *   }
     * })
     * 
    **/
    delete<T extends antispam_replacementDeleteArgs>(
      args: SelectSubset<T, antispam_replacementDeleteArgs>
    ): Prisma__antispam_replacementClient<antispam_replacementGetPayload<T>>

    /**
     * Update one Antispam_replacement.
     * @param {antispam_replacementUpdateArgs} args - Arguments to update one Antispam_replacement.
     * @example
     * // Update one Antispam_replacement
     * const antispam_replacement = await prisma.antispam_replacement.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends antispam_replacementUpdateArgs>(
      args: SelectSubset<T, antispam_replacementUpdateArgs>
    ): Prisma__antispam_replacementClient<antispam_replacementGetPayload<T>>

    /**
     * Delete zero or more Antispam_replacements.
     * @param {antispam_replacementDeleteManyArgs} args - Arguments to filter Antispam_replacements to delete.
     * @example
     * // Delete a few Antispam_replacements
     * const { count } = await prisma.antispam_replacement.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends antispam_replacementDeleteManyArgs>(
      args?: SelectSubset<T, antispam_replacementDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Antispam_replacements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {antispam_replacementUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Antispam_replacements
     * const antispam_replacement = await prisma.antispam_replacement.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends antispam_replacementUpdateManyArgs>(
      args: SelectSubset<T, antispam_replacementUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Antispam_replacement.
     * @param {antispam_replacementUpsertArgs} args - Arguments to update or create a Antispam_replacement.
     * @example
     * // Update or create a Antispam_replacement
     * const antispam_replacement = await prisma.antispam_replacement.upsert({
     *   create: {
     *     // ... data to create a Antispam_replacement
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Antispam_replacement we want to update
     *   }
     * })
    **/
    upsert<T extends antispam_replacementUpsertArgs>(
      args: SelectSubset<T, antispam_replacementUpsertArgs>
    ): Prisma__antispam_replacementClient<antispam_replacementGetPayload<T>>

    /**
     * Count the number of Antispam_replacements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {antispam_replacementCountArgs} args - Arguments to filter Antispam_replacements to count.
     * @example
     * // Count the number of Antispam_replacements
     * const count = await prisma.antispam_replacement.count({
     *   where: {
     *     // ... the filter for the Antispam_replacements we want to count
     *   }
     * })
    **/
    count<T extends antispam_replacementCountArgs>(
      args?: Subset<T, antispam_replacementCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Antispam_replacementCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Antispam_replacement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Antispam_replacementAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Antispam_replacementAggregateArgs>(args: Subset<T, Antispam_replacementAggregateArgs>): Prisma.PrismaPromise<GetAntispam_replacementAggregateType<T>>

    /**
     * Group by Antispam_replacement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Antispam_replacementGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Antispam_replacementGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Antispam_replacementGroupByArgs['orderBy'] }
        : { orderBy?: Antispam_replacementGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Antispam_replacementGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAntispam_replacementGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for antispam_replacement.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__antispam_replacementClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * antispam_replacement base type for findUnique actions
   */
  export type antispam_replacementFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the antispam_replacement
     */
    select?: antispam_replacementSelect | null
    /**
     * Filter, which antispam_replacement to fetch.
     */
    where: antispam_replacementWhereUniqueInput
  }

  /**
   * antispam_replacement findUnique
   */
  export interface antispam_replacementFindUniqueArgs extends antispam_replacementFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * antispam_replacement findUniqueOrThrow
   */
  export type antispam_replacementFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the antispam_replacement
     */
    select?: antispam_replacementSelect | null
    /**
     * Filter, which antispam_replacement to fetch.
     */
    where: antispam_replacementWhereUniqueInput
  }


  /**
   * antispam_replacement base type for findFirst actions
   */
  export type antispam_replacementFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the antispam_replacement
     */
    select?: antispam_replacementSelect | null
    /**
     * Filter, which antispam_replacement to fetch.
     */
    where?: antispam_replacementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of antispam_replacements to fetch.
     */
    orderBy?: Enumerable<antispam_replacementOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for antispam_replacements.
     */
    cursor?: antispam_replacementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` antispam_replacements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` antispam_replacements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of antispam_replacements.
     */
    distinct?: Enumerable<Antispam_replacementScalarFieldEnum>
  }

  /**
   * antispam_replacement findFirst
   */
  export interface antispam_replacementFindFirstArgs extends antispam_replacementFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * antispam_replacement findFirstOrThrow
   */
  export type antispam_replacementFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the antispam_replacement
     */
    select?: antispam_replacementSelect | null
    /**
     * Filter, which antispam_replacement to fetch.
     */
    where?: antispam_replacementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of antispam_replacements to fetch.
     */
    orderBy?: Enumerable<antispam_replacementOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for antispam_replacements.
     */
    cursor?: antispam_replacementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` antispam_replacements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` antispam_replacements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of antispam_replacements.
     */
    distinct?: Enumerable<Antispam_replacementScalarFieldEnum>
  }


  /**
   * antispam_replacement findMany
   */
  export type antispam_replacementFindManyArgs = {
    /**
     * Select specific fields to fetch from the antispam_replacement
     */
    select?: antispam_replacementSelect | null
    /**
     * Filter, which antispam_replacements to fetch.
     */
    where?: antispam_replacementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of antispam_replacements to fetch.
     */
    orderBy?: Enumerable<antispam_replacementOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing antispam_replacements.
     */
    cursor?: antispam_replacementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` antispam_replacements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` antispam_replacements.
     */
    skip?: number
    distinct?: Enumerable<Antispam_replacementScalarFieldEnum>
  }


  /**
   * antispam_replacement create
   */
  export type antispam_replacementCreateArgs = {
    /**
     * Select specific fields to fetch from the antispam_replacement
     */
    select?: antispam_replacementSelect | null
    /**
     * The data needed to create a antispam_replacement.
     */
    data: XOR<antispam_replacementCreateInput, antispam_replacementUncheckedCreateInput>
  }


  /**
   * antispam_replacement createMany
   */
  export type antispam_replacementCreateManyArgs = {
    /**
     * The data used to create many antispam_replacements.
     */
    data: Enumerable<antispam_replacementCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * antispam_replacement update
   */
  export type antispam_replacementUpdateArgs = {
    /**
     * Select specific fields to fetch from the antispam_replacement
     */
    select?: antispam_replacementSelect | null
    /**
     * The data needed to update a antispam_replacement.
     */
    data: XOR<antispam_replacementUpdateInput, antispam_replacementUncheckedUpdateInput>
    /**
     * Choose, which antispam_replacement to update.
     */
    where: antispam_replacementWhereUniqueInput
  }


  /**
   * antispam_replacement updateMany
   */
  export type antispam_replacementUpdateManyArgs = {
    /**
     * The data used to update antispam_replacements.
     */
    data: XOR<antispam_replacementUpdateManyMutationInput, antispam_replacementUncheckedUpdateManyInput>
    /**
     * Filter which antispam_replacements to update
     */
    where?: antispam_replacementWhereInput
  }


  /**
   * antispam_replacement upsert
   */
  export type antispam_replacementUpsertArgs = {
    /**
     * Select specific fields to fetch from the antispam_replacement
     */
    select?: antispam_replacementSelect | null
    /**
     * The filter to search for the antispam_replacement to update in case it exists.
     */
    where: antispam_replacementWhereUniqueInput
    /**
     * In case the antispam_replacement found by the `where` argument doesn't exist, create a new antispam_replacement with this data.
     */
    create: XOR<antispam_replacementCreateInput, antispam_replacementUncheckedCreateInput>
    /**
     * In case the antispam_replacement was found with the provided `where` argument, update it with this data.
     */
    update: XOR<antispam_replacementUpdateInput, antispam_replacementUncheckedUpdateInput>
  }


  /**
   * antispam_replacement delete
   */
  export type antispam_replacementDeleteArgs = {
    /**
     * Select specific fields to fetch from the antispam_replacement
     */
    select?: antispam_replacementSelect | null
    /**
     * Filter which antispam_replacement to delete.
     */
    where: antispam_replacementWhereUniqueInput
  }


  /**
   * antispam_replacement deleteMany
   */
  export type antispam_replacementDeleteManyArgs = {
    /**
     * Filter which antispam_replacements to delete
     */
    where?: antispam_replacementWhereInput
  }


  /**
   * antispam_replacement without action
   */
  export type antispam_replacementArgs = {
    /**
     * Select specific fields to fetch from the antispam_replacement
     */
    select?: antispam_replacementSelect | null
  }



  /**
   * Model antispam_unicode_replacement
   */


  export type AggregateAntispam_unicode_replacement = {
    _count: Antispam_unicode_replacementCountAggregateOutputType | null
    _avg: Antispam_unicode_replacementAvgAggregateOutputType | null
    _sum: Antispam_unicode_replacementSumAggregateOutputType | null
    _min: Antispam_unicode_replacementMinAggregateOutputType | null
    _max: Antispam_unicode_replacementMaxAggregateOutputType | null
  }

  export type Antispam_unicode_replacementAvgAggregateOutputType = {
    from: number | null
    to: number | null
  }

  export type Antispam_unicode_replacementSumAggregateOutputType = {
    from: number | null
    to: number | null
  }

  export type Antispam_unicode_replacementMinAggregateOutputType = {
    from: number | null
    to: number | null
  }

  export type Antispam_unicode_replacementMaxAggregateOutputType = {
    from: number | null
    to: number | null
  }

  export type Antispam_unicode_replacementCountAggregateOutputType = {
    from: number
    to: number
    _all: number
  }


  export type Antispam_unicode_replacementAvgAggregateInputType = {
    from?: true
    to?: true
  }

  export type Antispam_unicode_replacementSumAggregateInputType = {
    from?: true
    to?: true
  }

  export type Antispam_unicode_replacementMinAggregateInputType = {
    from?: true
    to?: true
  }

  export type Antispam_unicode_replacementMaxAggregateInputType = {
    from?: true
    to?: true
  }

  export type Antispam_unicode_replacementCountAggregateInputType = {
    from?: true
    to?: true
    _all?: true
  }

  export type Antispam_unicode_replacementAggregateArgs = {
    /**
     * Filter which antispam_unicode_replacement to aggregate.
     */
    where?: antispam_unicode_replacementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of antispam_unicode_replacements to fetch.
     */
    orderBy?: Enumerable<antispam_unicode_replacementOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: antispam_unicode_replacementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` antispam_unicode_replacements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` antispam_unicode_replacements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned antispam_unicode_replacements
    **/
    _count?: true | Antispam_unicode_replacementCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Antispam_unicode_replacementAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Antispam_unicode_replacementSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Antispam_unicode_replacementMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Antispam_unicode_replacementMaxAggregateInputType
  }

  export type GetAntispam_unicode_replacementAggregateType<T extends Antispam_unicode_replacementAggregateArgs> = {
        [P in keyof T & keyof AggregateAntispam_unicode_replacement]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAntispam_unicode_replacement[P]>
      : GetScalarType<T[P], AggregateAntispam_unicode_replacement[P]>
  }




  export type Antispam_unicode_replacementGroupByArgs = {
    where?: antispam_unicode_replacementWhereInput
    orderBy?: Enumerable<antispam_unicode_replacementOrderByWithAggregationInput>
    by: Antispam_unicode_replacementScalarFieldEnum[]
    having?: antispam_unicode_replacementScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Antispam_unicode_replacementCountAggregateInputType | true
    _avg?: Antispam_unicode_replacementAvgAggregateInputType
    _sum?: Antispam_unicode_replacementSumAggregateInputType
    _min?: Antispam_unicode_replacementMinAggregateInputType
    _max?: Antispam_unicode_replacementMaxAggregateInputType
  }


  export type Antispam_unicode_replacementGroupByOutputType = {
    from: number
    to: number
    _count: Antispam_unicode_replacementCountAggregateOutputType | null
    _avg: Antispam_unicode_replacementAvgAggregateOutputType | null
    _sum: Antispam_unicode_replacementSumAggregateOutputType | null
    _min: Antispam_unicode_replacementMinAggregateOutputType | null
    _max: Antispam_unicode_replacementMaxAggregateOutputType | null
  }

  type GetAntispam_unicode_replacementGroupByPayload<T extends Antispam_unicode_replacementGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<Antispam_unicode_replacementGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Antispam_unicode_replacementGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Antispam_unicode_replacementGroupByOutputType[P]>
            : GetScalarType<T[P], Antispam_unicode_replacementGroupByOutputType[P]>
        }
      >
    >


  export type antispam_unicode_replacementSelect = {
    from?: boolean
    to?: boolean
  }


  export type antispam_unicode_replacementGetPayload<S extends boolean | null | undefined | antispam_unicode_replacementArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? antispam_unicode_replacement :
    S extends undefined ? never :
    S extends { include: any } & (antispam_unicode_replacementArgs | antispam_unicode_replacementFindManyArgs)
    ? antispam_unicode_replacement 
    : S extends { select: any } & (antispam_unicode_replacementArgs | antispam_unicode_replacementFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof antispam_unicode_replacement ? antispam_unicode_replacement[P] : never
  } 
      : antispam_unicode_replacement


  type antispam_unicode_replacementCountArgs = 
    Omit<antispam_unicode_replacementFindManyArgs, 'select' | 'include'> & {
      select?: Antispam_unicode_replacementCountAggregateInputType | true
    }

  export interface antispam_unicode_replacementDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Antispam_unicode_replacement that matches the filter.
     * @param {antispam_unicode_replacementFindUniqueArgs} args - Arguments to find a Antispam_unicode_replacement
     * @example
     * // Get one Antispam_unicode_replacement
     * const antispam_unicode_replacement = await prisma.antispam_unicode_replacement.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends antispam_unicode_replacementFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, antispam_unicode_replacementFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'antispam_unicode_replacement'> extends True ? Prisma__antispam_unicode_replacementClient<antispam_unicode_replacementGetPayload<T>> : Prisma__antispam_unicode_replacementClient<antispam_unicode_replacementGetPayload<T> | null, null>

    /**
     * Find one Antispam_unicode_replacement that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {antispam_unicode_replacementFindUniqueOrThrowArgs} args - Arguments to find a Antispam_unicode_replacement
     * @example
     * // Get one Antispam_unicode_replacement
     * const antispam_unicode_replacement = await prisma.antispam_unicode_replacement.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends antispam_unicode_replacementFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, antispam_unicode_replacementFindUniqueOrThrowArgs>
    ): Prisma__antispam_unicode_replacementClient<antispam_unicode_replacementGetPayload<T>>

    /**
     * Find the first Antispam_unicode_replacement that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {antispam_unicode_replacementFindFirstArgs} args - Arguments to find a Antispam_unicode_replacement
     * @example
     * // Get one Antispam_unicode_replacement
     * const antispam_unicode_replacement = await prisma.antispam_unicode_replacement.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends antispam_unicode_replacementFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, antispam_unicode_replacementFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'antispam_unicode_replacement'> extends True ? Prisma__antispam_unicode_replacementClient<antispam_unicode_replacementGetPayload<T>> : Prisma__antispam_unicode_replacementClient<antispam_unicode_replacementGetPayload<T> | null, null>

    /**
     * Find the first Antispam_unicode_replacement that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {antispam_unicode_replacementFindFirstOrThrowArgs} args - Arguments to find a Antispam_unicode_replacement
     * @example
     * // Get one Antispam_unicode_replacement
     * const antispam_unicode_replacement = await prisma.antispam_unicode_replacement.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends antispam_unicode_replacementFindFirstOrThrowArgs>(
      args?: SelectSubset<T, antispam_unicode_replacementFindFirstOrThrowArgs>
    ): Prisma__antispam_unicode_replacementClient<antispam_unicode_replacementGetPayload<T>>

    /**
     * Find zero or more Antispam_unicode_replacements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {antispam_unicode_replacementFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Antispam_unicode_replacements
     * const antispam_unicode_replacements = await prisma.antispam_unicode_replacement.findMany()
     * 
     * // Get first 10 Antispam_unicode_replacements
     * const antispam_unicode_replacements = await prisma.antispam_unicode_replacement.findMany({ take: 10 })
     * 
     * // Only select the `from`
     * const antispam_unicode_replacementWithFromOnly = await prisma.antispam_unicode_replacement.findMany({ select: { from: true } })
     * 
    **/
    findMany<T extends antispam_unicode_replacementFindManyArgs>(
      args?: SelectSubset<T, antispam_unicode_replacementFindManyArgs>
    ): Prisma.PrismaPromise<Array<antispam_unicode_replacementGetPayload<T>>>

    /**
     * Create a Antispam_unicode_replacement.
     * @param {antispam_unicode_replacementCreateArgs} args - Arguments to create a Antispam_unicode_replacement.
     * @example
     * // Create one Antispam_unicode_replacement
     * const Antispam_unicode_replacement = await prisma.antispam_unicode_replacement.create({
     *   data: {
     *     // ... data to create a Antispam_unicode_replacement
     *   }
     * })
     * 
    **/
    create<T extends antispam_unicode_replacementCreateArgs>(
      args: SelectSubset<T, antispam_unicode_replacementCreateArgs>
    ): Prisma__antispam_unicode_replacementClient<antispam_unicode_replacementGetPayload<T>>

    /**
     * Create many Antispam_unicode_replacements.
     *     @param {antispam_unicode_replacementCreateManyArgs} args - Arguments to create many Antispam_unicode_replacements.
     *     @example
     *     // Create many Antispam_unicode_replacements
     *     const antispam_unicode_replacement = await prisma.antispam_unicode_replacement.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends antispam_unicode_replacementCreateManyArgs>(
      args?: SelectSubset<T, antispam_unicode_replacementCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Antispam_unicode_replacement.
     * @param {antispam_unicode_replacementDeleteArgs} args - Arguments to delete one Antispam_unicode_replacement.
     * @example
     * // Delete one Antispam_unicode_replacement
     * const Antispam_unicode_replacement = await prisma.antispam_unicode_replacement.delete({
     *   where: {
     *     // ... filter to delete one Antispam_unicode_replacement
     *   }
     * })
     * 
    **/
    delete<T extends antispam_unicode_replacementDeleteArgs>(
      args: SelectSubset<T, antispam_unicode_replacementDeleteArgs>
    ): Prisma__antispam_unicode_replacementClient<antispam_unicode_replacementGetPayload<T>>

    /**
     * Update one Antispam_unicode_replacement.
     * @param {antispam_unicode_replacementUpdateArgs} args - Arguments to update one Antispam_unicode_replacement.
     * @example
     * // Update one Antispam_unicode_replacement
     * const antispam_unicode_replacement = await prisma.antispam_unicode_replacement.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends antispam_unicode_replacementUpdateArgs>(
      args: SelectSubset<T, antispam_unicode_replacementUpdateArgs>
    ): Prisma__antispam_unicode_replacementClient<antispam_unicode_replacementGetPayload<T>>

    /**
     * Delete zero or more Antispam_unicode_replacements.
     * @param {antispam_unicode_replacementDeleteManyArgs} args - Arguments to filter Antispam_unicode_replacements to delete.
     * @example
     * // Delete a few Antispam_unicode_replacements
     * const { count } = await prisma.antispam_unicode_replacement.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends antispam_unicode_replacementDeleteManyArgs>(
      args?: SelectSubset<T, antispam_unicode_replacementDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Antispam_unicode_replacements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {antispam_unicode_replacementUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Antispam_unicode_replacements
     * const antispam_unicode_replacement = await prisma.antispam_unicode_replacement.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends antispam_unicode_replacementUpdateManyArgs>(
      args: SelectSubset<T, antispam_unicode_replacementUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Antispam_unicode_replacement.
     * @param {antispam_unicode_replacementUpsertArgs} args - Arguments to update or create a Antispam_unicode_replacement.
     * @example
     * // Update or create a Antispam_unicode_replacement
     * const antispam_unicode_replacement = await prisma.antispam_unicode_replacement.upsert({
     *   create: {
     *     // ... data to create a Antispam_unicode_replacement
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Antispam_unicode_replacement we want to update
     *   }
     * })
    **/
    upsert<T extends antispam_unicode_replacementUpsertArgs>(
      args: SelectSubset<T, antispam_unicode_replacementUpsertArgs>
    ): Prisma__antispam_unicode_replacementClient<antispam_unicode_replacementGetPayload<T>>

    /**
     * Count the number of Antispam_unicode_replacements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {antispam_unicode_replacementCountArgs} args - Arguments to filter Antispam_unicode_replacements to count.
     * @example
     * // Count the number of Antispam_unicode_replacements
     * const count = await prisma.antispam_unicode_replacement.count({
     *   where: {
     *     // ... the filter for the Antispam_unicode_replacements we want to count
     *   }
     * })
    **/
    count<T extends antispam_unicode_replacementCountArgs>(
      args?: Subset<T, antispam_unicode_replacementCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Antispam_unicode_replacementCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Antispam_unicode_replacement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Antispam_unicode_replacementAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Antispam_unicode_replacementAggregateArgs>(args: Subset<T, Antispam_unicode_replacementAggregateArgs>): Prisma.PrismaPromise<GetAntispam_unicode_replacementAggregateType<T>>

    /**
     * Group by Antispam_unicode_replacement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Antispam_unicode_replacementGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Antispam_unicode_replacementGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Antispam_unicode_replacementGroupByArgs['orderBy'] }
        : { orderBy?: Antispam_unicode_replacementGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Antispam_unicode_replacementGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAntispam_unicode_replacementGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for antispam_unicode_replacement.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__antispam_unicode_replacementClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * antispam_unicode_replacement base type for findUnique actions
   */
  export type antispam_unicode_replacementFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the antispam_unicode_replacement
     */
    select?: antispam_unicode_replacementSelect | null
    /**
     * Filter, which antispam_unicode_replacement to fetch.
     */
    where: antispam_unicode_replacementWhereUniqueInput
  }

  /**
   * antispam_unicode_replacement findUnique
   */
  export interface antispam_unicode_replacementFindUniqueArgs extends antispam_unicode_replacementFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * antispam_unicode_replacement findUniqueOrThrow
   */
  export type antispam_unicode_replacementFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the antispam_unicode_replacement
     */
    select?: antispam_unicode_replacementSelect | null
    /**
     * Filter, which antispam_unicode_replacement to fetch.
     */
    where: antispam_unicode_replacementWhereUniqueInput
  }


  /**
   * antispam_unicode_replacement base type for findFirst actions
   */
  export type antispam_unicode_replacementFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the antispam_unicode_replacement
     */
    select?: antispam_unicode_replacementSelect | null
    /**
     * Filter, which antispam_unicode_replacement to fetch.
     */
    where?: antispam_unicode_replacementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of antispam_unicode_replacements to fetch.
     */
    orderBy?: Enumerable<antispam_unicode_replacementOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for antispam_unicode_replacements.
     */
    cursor?: antispam_unicode_replacementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` antispam_unicode_replacements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` antispam_unicode_replacements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of antispam_unicode_replacements.
     */
    distinct?: Enumerable<Antispam_unicode_replacementScalarFieldEnum>
  }

  /**
   * antispam_unicode_replacement findFirst
   */
  export interface antispam_unicode_replacementFindFirstArgs extends antispam_unicode_replacementFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * antispam_unicode_replacement findFirstOrThrow
   */
  export type antispam_unicode_replacementFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the antispam_unicode_replacement
     */
    select?: antispam_unicode_replacementSelect | null
    /**
     * Filter, which antispam_unicode_replacement to fetch.
     */
    where?: antispam_unicode_replacementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of antispam_unicode_replacements to fetch.
     */
    orderBy?: Enumerable<antispam_unicode_replacementOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for antispam_unicode_replacements.
     */
    cursor?: antispam_unicode_replacementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` antispam_unicode_replacements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` antispam_unicode_replacements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of antispam_unicode_replacements.
     */
    distinct?: Enumerable<Antispam_unicode_replacementScalarFieldEnum>
  }


  /**
   * antispam_unicode_replacement findMany
   */
  export type antispam_unicode_replacementFindManyArgs = {
    /**
     * Select specific fields to fetch from the antispam_unicode_replacement
     */
    select?: antispam_unicode_replacementSelect | null
    /**
     * Filter, which antispam_unicode_replacements to fetch.
     */
    where?: antispam_unicode_replacementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of antispam_unicode_replacements to fetch.
     */
    orderBy?: Enumerable<antispam_unicode_replacementOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing antispam_unicode_replacements.
     */
    cursor?: antispam_unicode_replacementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` antispam_unicode_replacements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` antispam_unicode_replacements.
     */
    skip?: number
    distinct?: Enumerable<Antispam_unicode_replacementScalarFieldEnum>
  }


  /**
   * antispam_unicode_replacement create
   */
  export type antispam_unicode_replacementCreateArgs = {
    /**
     * Select specific fields to fetch from the antispam_unicode_replacement
     */
    select?: antispam_unicode_replacementSelect | null
    /**
     * The data needed to create a antispam_unicode_replacement.
     */
    data: XOR<antispam_unicode_replacementCreateInput, antispam_unicode_replacementUncheckedCreateInput>
  }


  /**
   * antispam_unicode_replacement createMany
   */
  export type antispam_unicode_replacementCreateManyArgs = {
    /**
     * The data used to create many antispam_unicode_replacements.
     */
    data: Enumerable<antispam_unicode_replacementCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * antispam_unicode_replacement update
   */
  export type antispam_unicode_replacementUpdateArgs = {
    /**
     * Select specific fields to fetch from the antispam_unicode_replacement
     */
    select?: antispam_unicode_replacementSelect | null
    /**
     * The data needed to update a antispam_unicode_replacement.
     */
    data: XOR<antispam_unicode_replacementUpdateInput, antispam_unicode_replacementUncheckedUpdateInput>
    /**
     * Choose, which antispam_unicode_replacement to update.
     */
    where: antispam_unicode_replacementWhereUniqueInput
  }


  /**
   * antispam_unicode_replacement updateMany
   */
  export type antispam_unicode_replacementUpdateManyArgs = {
    /**
     * The data used to update antispam_unicode_replacements.
     */
    data: XOR<antispam_unicode_replacementUpdateManyMutationInput, antispam_unicode_replacementUncheckedUpdateManyInput>
    /**
     * Filter which antispam_unicode_replacements to update
     */
    where?: antispam_unicode_replacementWhereInput
  }


  /**
   * antispam_unicode_replacement upsert
   */
  export type antispam_unicode_replacementUpsertArgs = {
    /**
     * Select specific fields to fetch from the antispam_unicode_replacement
     */
    select?: antispam_unicode_replacementSelect | null
    /**
     * The filter to search for the antispam_unicode_replacement to update in case it exists.
     */
    where: antispam_unicode_replacementWhereUniqueInput
    /**
     * In case the antispam_unicode_replacement found by the `where` argument doesn't exist, create a new antispam_unicode_replacement with this data.
     */
    create: XOR<antispam_unicode_replacementCreateInput, antispam_unicode_replacementUncheckedCreateInput>
    /**
     * In case the antispam_unicode_replacement was found with the provided `where` argument, update it with this data.
     */
    update: XOR<antispam_unicode_replacementUpdateInput, antispam_unicode_replacementUncheckedUpdateInput>
  }


  /**
   * antispam_unicode_replacement delete
   */
  export type antispam_unicode_replacementDeleteArgs = {
    /**
     * Select specific fields to fetch from the antispam_unicode_replacement
     */
    select?: antispam_unicode_replacementSelect | null
    /**
     * Filter which antispam_unicode_replacement to delete.
     */
    where: antispam_unicode_replacementWhereUniqueInput
  }


  /**
   * antispam_unicode_replacement deleteMany
   */
  export type antispam_unicode_replacementDeleteManyArgs = {
    /**
     * Filter which antispam_unicode_replacements to delete
     */
    where?: antispam_unicode_replacementWhereInput
  }


  /**
   * antispam_unicode_replacement without action
   */
  export type antispam_unicode_replacementArgs = {
    /**
     * Select specific fields to fetch from the antispam_unicode_replacement
     */
    select?: antispam_unicode_replacementSelect | null
  }



  /**
   * Model config
   */


  export type AggregateConfig = {
    _count: ConfigCountAggregateOutputType | null
    _avg: ConfigAvgAggregateOutputType | null
    _sum: ConfigSumAggregateOutputType | null
    _min: ConfigMinAggregateOutputType | null
    _max: ConfigMaxAggregateOutputType | null
  }

  export type ConfigAvgAggregateOutputType = {
    id: number | null
  }

  export type ConfigSumAggregateOutputType = {
    id: number | null
  }

  export type ConfigMinAggregateOutputType = {
    id: number | null
    value: string | null
    comment: string | null
  }

  export type ConfigMaxAggregateOutputType = {
    id: number | null
    value: string | null
    comment: string | null
  }

  export type ConfigCountAggregateOutputType = {
    id: number
    value: number
    comment: number
    _all: number
  }


  export type ConfigAvgAggregateInputType = {
    id?: true
  }

  export type ConfigSumAggregateInputType = {
    id?: true
  }

  export type ConfigMinAggregateInputType = {
    id?: true
    value?: true
    comment?: true
  }

  export type ConfigMaxAggregateInputType = {
    id?: true
    value?: true
    comment?: true
  }

  export type ConfigCountAggregateInputType = {
    id?: true
    value?: true
    comment?: true
    _all?: true
  }

  export type ConfigAggregateArgs = {
    /**
     * Filter which config to aggregate.
     */
    where?: configWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of configs to fetch.
     */
    orderBy?: Enumerable<configOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: configWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` configs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` configs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned configs
    **/
    _count?: true | ConfigCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ConfigAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ConfigSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ConfigMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ConfigMaxAggregateInputType
  }

  export type GetConfigAggregateType<T extends ConfigAggregateArgs> = {
        [P in keyof T & keyof AggregateConfig]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateConfig[P]>
      : GetScalarType<T[P], AggregateConfig[P]>
  }




  export type ConfigGroupByArgs = {
    where?: configWhereInput
    orderBy?: Enumerable<configOrderByWithAggregationInput>
    by: ConfigScalarFieldEnum[]
    having?: configScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ConfigCountAggregateInputType | true
    _avg?: ConfigAvgAggregateInputType
    _sum?: ConfigSumAggregateInputType
    _min?: ConfigMinAggregateInputType
    _max?: ConfigMaxAggregateInputType
  }


  export type ConfigGroupByOutputType = {
    id: number
    value: string | null
    comment: string | null
    _count: ConfigCountAggregateOutputType | null
    _avg: ConfigAvgAggregateOutputType | null
    _sum: ConfigSumAggregateOutputType | null
    _min: ConfigMinAggregateOutputType | null
    _max: ConfigMaxAggregateOutputType | null
  }

  type GetConfigGroupByPayload<T extends ConfigGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<ConfigGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ConfigGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ConfigGroupByOutputType[P]>
            : GetScalarType<T[P], ConfigGroupByOutputType[P]>
        }
      >
    >


  export type configSelect = {
    id?: boolean
    value?: boolean
    comment?: boolean
  }


  export type configGetPayload<S extends boolean | null | undefined | configArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? config :
    S extends undefined ? never :
    S extends { include: any } & (configArgs | configFindManyArgs)
    ? config 
    : S extends { select: any } & (configArgs | configFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof config ? config[P] : never
  } 
      : config


  type configCountArgs = 
    Omit<configFindManyArgs, 'select' | 'include'> & {
      select?: ConfigCountAggregateInputType | true
    }

  export interface configDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Config that matches the filter.
     * @param {configFindUniqueArgs} args - Arguments to find a Config
     * @example
     * // Get one Config
     * const config = await prisma.config.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends configFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, configFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'config'> extends True ? Prisma__configClient<configGetPayload<T>> : Prisma__configClient<configGetPayload<T> | null, null>

    /**
     * Find one Config that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {configFindUniqueOrThrowArgs} args - Arguments to find a Config
     * @example
     * // Get one Config
     * const config = await prisma.config.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends configFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, configFindUniqueOrThrowArgs>
    ): Prisma__configClient<configGetPayload<T>>

    /**
     * Find the first Config that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {configFindFirstArgs} args - Arguments to find a Config
     * @example
     * // Get one Config
     * const config = await prisma.config.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends configFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, configFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'config'> extends True ? Prisma__configClient<configGetPayload<T>> : Prisma__configClient<configGetPayload<T> | null, null>

    /**
     * Find the first Config that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {configFindFirstOrThrowArgs} args - Arguments to find a Config
     * @example
     * // Get one Config
     * const config = await prisma.config.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends configFindFirstOrThrowArgs>(
      args?: SelectSubset<T, configFindFirstOrThrowArgs>
    ): Prisma__configClient<configGetPayload<T>>

    /**
     * Find zero or more Configs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {configFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Configs
     * const configs = await prisma.config.findMany()
     * 
     * // Get first 10 Configs
     * const configs = await prisma.config.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const configWithIdOnly = await prisma.config.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends configFindManyArgs>(
      args?: SelectSubset<T, configFindManyArgs>
    ): Prisma.PrismaPromise<Array<configGetPayload<T>>>

    /**
     * Create a Config.
     * @param {configCreateArgs} args - Arguments to create a Config.
     * @example
     * // Create one Config
     * const Config = await prisma.config.create({
     *   data: {
     *     // ... data to create a Config
     *   }
     * })
     * 
    **/
    create<T extends configCreateArgs>(
      args: SelectSubset<T, configCreateArgs>
    ): Prisma__configClient<configGetPayload<T>>

    /**
     * Create many Configs.
     *     @param {configCreateManyArgs} args - Arguments to create many Configs.
     *     @example
     *     // Create many Configs
     *     const config = await prisma.config.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends configCreateManyArgs>(
      args?: SelectSubset<T, configCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Config.
     * @param {configDeleteArgs} args - Arguments to delete one Config.
     * @example
     * // Delete one Config
     * const Config = await prisma.config.delete({
     *   where: {
     *     // ... filter to delete one Config
     *   }
     * })
     * 
    **/
    delete<T extends configDeleteArgs>(
      args: SelectSubset<T, configDeleteArgs>
    ): Prisma__configClient<configGetPayload<T>>

    /**
     * Update one Config.
     * @param {configUpdateArgs} args - Arguments to update one Config.
     * @example
     * // Update one Config
     * const config = await prisma.config.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends configUpdateArgs>(
      args: SelectSubset<T, configUpdateArgs>
    ): Prisma__configClient<configGetPayload<T>>

    /**
     * Delete zero or more Configs.
     * @param {configDeleteManyArgs} args - Arguments to filter Configs to delete.
     * @example
     * // Delete a few Configs
     * const { count } = await prisma.config.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends configDeleteManyArgs>(
      args?: SelectSubset<T, configDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Configs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {configUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Configs
     * const config = await prisma.config.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends configUpdateManyArgs>(
      args: SelectSubset<T, configUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Config.
     * @param {configUpsertArgs} args - Arguments to update or create a Config.
     * @example
     * // Update or create a Config
     * const config = await prisma.config.upsert({
     *   create: {
     *     // ... data to create a Config
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Config we want to update
     *   }
     * })
    **/
    upsert<T extends configUpsertArgs>(
      args: SelectSubset<T, configUpsertArgs>
    ): Prisma__configClient<configGetPayload<T>>

    /**
     * Count the number of Configs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {configCountArgs} args - Arguments to filter Configs to count.
     * @example
     * // Count the number of Configs
     * const count = await prisma.config.count({
     *   where: {
     *     // ... the filter for the Configs we want to count
     *   }
     * })
    **/
    count<T extends configCountArgs>(
      args?: Subset<T, configCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ConfigCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Config.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfigAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ConfigAggregateArgs>(args: Subset<T, ConfigAggregateArgs>): Prisma.PrismaPromise<GetConfigAggregateType<T>>

    /**
     * Group by Config.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfigGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ConfigGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ConfigGroupByArgs['orderBy'] }
        : { orderBy?: ConfigGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ConfigGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConfigGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for config.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__configClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * config base type for findUnique actions
   */
  export type configFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the config
     */
    select?: configSelect | null
    /**
     * Filter, which config to fetch.
     */
    where: configWhereUniqueInput
  }

  /**
   * config findUnique
   */
  export interface configFindUniqueArgs extends configFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * config findUniqueOrThrow
   */
  export type configFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the config
     */
    select?: configSelect | null
    /**
     * Filter, which config to fetch.
     */
    where: configWhereUniqueInput
  }


  /**
   * config base type for findFirst actions
   */
  export type configFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the config
     */
    select?: configSelect | null
    /**
     * Filter, which config to fetch.
     */
    where?: configWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of configs to fetch.
     */
    orderBy?: Enumerable<configOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for configs.
     */
    cursor?: configWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` configs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` configs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of configs.
     */
    distinct?: Enumerable<ConfigScalarFieldEnum>
  }

  /**
   * config findFirst
   */
  export interface configFindFirstArgs extends configFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * config findFirstOrThrow
   */
  export type configFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the config
     */
    select?: configSelect | null
    /**
     * Filter, which config to fetch.
     */
    where?: configWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of configs to fetch.
     */
    orderBy?: Enumerable<configOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for configs.
     */
    cursor?: configWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` configs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` configs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of configs.
     */
    distinct?: Enumerable<ConfigScalarFieldEnum>
  }


  /**
   * config findMany
   */
  export type configFindManyArgs = {
    /**
     * Select specific fields to fetch from the config
     */
    select?: configSelect | null
    /**
     * Filter, which configs to fetch.
     */
    where?: configWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of configs to fetch.
     */
    orderBy?: Enumerable<configOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing configs.
     */
    cursor?: configWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` configs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` configs.
     */
    skip?: number
    distinct?: Enumerable<ConfigScalarFieldEnum>
  }


  /**
   * config create
   */
  export type configCreateArgs = {
    /**
     * Select specific fields to fetch from the config
     */
    select?: configSelect | null
    /**
     * The data needed to create a config.
     */
    data: XOR<configCreateInput, configUncheckedCreateInput>
  }


  /**
   * config createMany
   */
  export type configCreateManyArgs = {
    /**
     * The data used to create many configs.
     */
    data: Enumerable<configCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * config update
   */
  export type configUpdateArgs = {
    /**
     * Select specific fields to fetch from the config
     */
    select?: configSelect | null
    /**
     * The data needed to update a config.
     */
    data: XOR<configUpdateInput, configUncheckedUpdateInput>
    /**
     * Choose, which config to update.
     */
    where: configWhereUniqueInput
  }


  /**
   * config updateMany
   */
  export type configUpdateManyArgs = {
    /**
     * The data used to update configs.
     */
    data: XOR<configUpdateManyMutationInput, configUncheckedUpdateManyInput>
    /**
     * Filter which configs to update
     */
    where?: configWhereInput
  }


  /**
   * config upsert
   */
  export type configUpsertArgs = {
    /**
     * Select specific fields to fetch from the config
     */
    select?: configSelect | null
    /**
     * The filter to search for the config to update in case it exists.
     */
    where: configWhereUniqueInput
    /**
     * In case the config found by the `where` argument doesn't exist, create a new config with this data.
     */
    create: XOR<configCreateInput, configUncheckedCreateInput>
    /**
     * In case the config was found with the provided `where` argument, update it with this data.
     */
    update: XOR<configUpdateInput, configUncheckedUpdateInput>
  }


  /**
   * config delete
   */
  export type configDeleteArgs = {
    /**
     * Select specific fields to fetch from the config
     */
    select?: configSelect | null
    /**
     * Filter which config to delete.
     */
    where: configWhereUniqueInput
  }


  /**
   * config deleteMany
   */
  export type configDeleteManyArgs = {
    /**
     * Filter which configs to delete
     */
    where?: configWhereInput
  }


  /**
   * config without action
   */
  export type configArgs = {
    /**
     * Select specific fields to fetch from the config
     */
    select?: configSelect | null
  }



  /**
   * Model ip_banned
   */


  export type AggregateIp_banned = {
    _count: Ip_bannedCountAggregateOutputType | null
    _avg: Ip_bannedAvgAggregateOutputType | null
    _sum: Ip_bannedSumAggregateOutputType | null
    _min: Ip_bannedMinAggregateOutputType | null
    _max: Ip_bannedMaxAggregateOutputType | null
  }

  export type Ip_bannedAvgAggregateOutputType = {
    bandate: number | null
    unbandate: number | null
  }

  export type Ip_bannedSumAggregateOutputType = {
    bandate: number | null
    unbandate: number | null
  }

  export type Ip_bannedMinAggregateOutputType = {
    ip: string | null
    bandate: number | null
    unbandate: number | null
    bannedby: string | null
    banreason: string | null
  }

  export type Ip_bannedMaxAggregateOutputType = {
    ip: string | null
    bandate: number | null
    unbandate: number | null
    bannedby: string | null
    banreason: string | null
  }

  export type Ip_bannedCountAggregateOutputType = {
    ip: number
    bandate: number
    unbandate: number
    bannedby: number
    banreason: number
    _all: number
  }


  export type Ip_bannedAvgAggregateInputType = {
    bandate?: true
    unbandate?: true
  }

  export type Ip_bannedSumAggregateInputType = {
    bandate?: true
    unbandate?: true
  }

  export type Ip_bannedMinAggregateInputType = {
    ip?: true
    bandate?: true
    unbandate?: true
    bannedby?: true
    banreason?: true
  }

  export type Ip_bannedMaxAggregateInputType = {
    ip?: true
    bandate?: true
    unbandate?: true
    bannedby?: true
    banreason?: true
  }

  export type Ip_bannedCountAggregateInputType = {
    ip?: true
    bandate?: true
    unbandate?: true
    bannedby?: true
    banreason?: true
    _all?: true
  }

  export type Ip_bannedAggregateArgs = {
    /**
     * Filter which ip_banned to aggregate.
     */
    where?: ip_bannedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ip_banneds to fetch.
     */
    orderBy?: Enumerable<ip_bannedOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ip_bannedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ip_banneds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ip_banneds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ip_banneds
    **/
    _count?: true | Ip_bannedCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Ip_bannedAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Ip_bannedSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Ip_bannedMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Ip_bannedMaxAggregateInputType
  }

  export type GetIp_bannedAggregateType<T extends Ip_bannedAggregateArgs> = {
        [P in keyof T & keyof AggregateIp_banned]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIp_banned[P]>
      : GetScalarType<T[P], AggregateIp_banned[P]>
  }




  export type Ip_bannedGroupByArgs = {
    where?: ip_bannedWhereInput
    orderBy?: Enumerable<ip_bannedOrderByWithAggregationInput>
    by: Ip_bannedScalarFieldEnum[]
    having?: ip_bannedScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Ip_bannedCountAggregateInputType | true
    _avg?: Ip_bannedAvgAggregateInputType
    _sum?: Ip_bannedSumAggregateInputType
    _min?: Ip_bannedMinAggregateInputType
    _max?: Ip_bannedMaxAggregateInputType
  }


  export type Ip_bannedGroupByOutputType = {
    ip: string
    bandate: number
    unbandate: number
    bannedby: string
    banreason: string
    _count: Ip_bannedCountAggregateOutputType | null
    _avg: Ip_bannedAvgAggregateOutputType | null
    _sum: Ip_bannedSumAggregateOutputType | null
    _min: Ip_bannedMinAggregateOutputType | null
    _max: Ip_bannedMaxAggregateOutputType | null
  }

  type GetIp_bannedGroupByPayload<T extends Ip_bannedGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<Ip_bannedGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Ip_bannedGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Ip_bannedGroupByOutputType[P]>
            : GetScalarType<T[P], Ip_bannedGroupByOutputType[P]>
        }
      >
    >


  export type ip_bannedSelect = {
    ip?: boolean
    bandate?: boolean
    unbandate?: boolean
    bannedby?: boolean
    banreason?: boolean
  }


  export type ip_bannedGetPayload<S extends boolean | null | undefined | ip_bannedArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? ip_banned :
    S extends undefined ? never :
    S extends { include: any } & (ip_bannedArgs | ip_bannedFindManyArgs)
    ? ip_banned 
    : S extends { select: any } & (ip_bannedArgs | ip_bannedFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof ip_banned ? ip_banned[P] : never
  } 
      : ip_banned


  type ip_bannedCountArgs = 
    Omit<ip_bannedFindManyArgs, 'select' | 'include'> & {
      select?: Ip_bannedCountAggregateInputType | true
    }

  export interface ip_bannedDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Ip_banned that matches the filter.
     * @param {ip_bannedFindUniqueArgs} args - Arguments to find a Ip_banned
     * @example
     * // Get one Ip_banned
     * const ip_banned = await prisma.ip_banned.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ip_bannedFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ip_bannedFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'ip_banned'> extends True ? Prisma__ip_bannedClient<ip_bannedGetPayload<T>> : Prisma__ip_bannedClient<ip_bannedGetPayload<T> | null, null>

    /**
     * Find one Ip_banned that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ip_bannedFindUniqueOrThrowArgs} args - Arguments to find a Ip_banned
     * @example
     * // Get one Ip_banned
     * const ip_banned = await prisma.ip_banned.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ip_bannedFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, ip_bannedFindUniqueOrThrowArgs>
    ): Prisma__ip_bannedClient<ip_bannedGetPayload<T>>

    /**
     * Find the first Ip_banned that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ip_bannedFindFirstArgs} args - Arguments to find a Ip_banned
     * @example
     * // Get one Ip_banned
     * const ip_banned = await prisma.ip_banned.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ip_bannedFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ip_bannedFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'ip_banned'> extends True ? Prisma__ip_bannedClient<ip_bannedGetPayload<T>> : Prisma__ip_bannedClient<ip_bannedGetPayload<T> | null, null>

    /**
     * Find the first Ip_banned that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ip_bannedFindFirstOrThrowArgs} args - Arguments to find a Ip_banned
     * @example
     * // Get one Ip_banned
     * const ip_banned = await prisma.ip_banned.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ip_bannedFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ip_bannedFindFirstOrThrowArgs>
    ): Prisma__ip_bannedClient<ip_bannedGetPayload<T>>

    /**
     * Find zero or more Ip_banneds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ip_bannedFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ip_banneds
     * const ip_banneds = await prisma.ip_banned.findMany()
     * 
     * // Get first 10 Ip_banneds
     * const ip_banneds = await prisma.ip_banned.findMany({ take: 10 })
     * 
     * // Only select the `ip`
     * const ip_bannedWithIpOnly = await prisma.ip_banned.findMany({ select: { ip: true } })
     * 
    **/
    findMany<T extends ip_bannedFindManyArgs>(
      args?: SelectSubset<T, ip_bannedFindManyArgs>
    ): Prisma.PrismaPromise<Array<ip_bannedGetPayload<T>>>

    /**
     * Create a Ip_banned.
     * @param {ip_bannedCreateArgs} args - Arguments to create a Ip_banned.
     * @example
     * // Create one Ip_banned
     * const Ip_banned = await prisma.ip_banned.create({
     *   data: {
     *     // ... data to create a Ip_banned
     *   }
     * })
     * 
    **/
    create<T extends ip_bannedCreateArgs>(
      args: SelectSubset<T, ip_bannedCreateArgs>
    ): Prisma__ip_bannedClient<ip_bannedGetPayload<T>>

    /**
     * Create many Ip_banneds.
     *     @param {ip_bannedCreateManyArgs} args - Arguments to create many Ip_banneds.
     *     @example
     *     // Create many Ip_banneds
     *     const ip_banned = await prisma.ip_banned.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ip_bannedCreateManyArgs>(
      args?: SelectSubset<T, ip_bannedCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Ip_banned.
     * @param {ip_bannedDeleteArgs} args - Arguments to delete one Ip_banned.
     * @example
     * // Delete one Ip_banned
     * const Ip_banned = await prisma.ip_banned.delete({
     *   where: {
     *     // ... filter to delete one Ip_banned
     *   }
     * })
     * 
    **/
    delete<T extends ip_bannedDeleteArgs>(
      args: SelectSubset<T, ip_bannedDeleteArgs>
    ): Prisma__ip_bannedClient<ip_bannedGetPayload<T>>

    /**
     * Update one Ip_banned.
     * @param {ip_bannedUpdateArgs} args - Arguments to update one Ip_banned.
     * @example
     * // Update one Ip_banned
     * const ip_banned = await prisma.ip_banned.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ip_bannedUpdateArgs>(
      args: SelectSubset<T, ip_bannedUpdateArgs>
    ): Prisma__ip_bannedClient<ip_bannedGetPayload<T>>

    /**
     * Delete zero or more Ip_banneds.
     * @param {ip_bannedDeleteManyArgs} args - Arguments to filter Ip_banneds to delete.
     * @example
     * // Delete a few Ip_banneds
     * const { count } = await prisma.ip_banned.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ip_bannedDeleteManyArgs>(
      args?: SelectSubset<T, ip_bannedDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ip_banneds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ip_bannedUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ip_banneds
     * const ip_banned = await prisma.ip_banned.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ip_bannedUpdateManyArgs>(
      args: SelectSubset<T, ip_bannedUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Ip_banned.
     * @param {ip_bannedUpsertArgs} args - Arguments to update or create a Ip_banned.
     * @example
     * // Update or create a Ip_banned
     * const ip_banned = await prisma.ip_banned.upsert({
     *   create: {
     *     // ... data to create a Ip_banned
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ip_banned we want to update
     *   }
     * })
    **/
    upsert<T extends ip_bannedUpsertArgs>(
      args: SelectSubset<T, ip_bannedUpsertArgs>
    ): Prisma__ip_bannedClient<ip_bannedGetPayload<T>>

    /**
     * Count the number of Ip_banneds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ip_bannedCountArgs} args - Arguments to filter Ip_banneds to count.
     * @example
     * // Count the number of Ip_banneds
     * const count = await prisma.ip_banned.count({
     *   where: {
     *     // ... the filter for the Ip_banneds we want to count
     *   }
     * })
    **/
    count<T extends ip_bannedCountArgs>(
      args?: Subset<T, ip_bannedCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Ip_bannedCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ip_banned.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Ip_bannedAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Ip_bannedAggregateArgs>(args: Subset<T, Ip_bannedAggregateArgs>): Prisma.PrismaPromise<GetIp_bannedAggregateType<T>>

    /**
     * Group by Ip_banned.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Ip_bannedGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Ip_bannedGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Ip_bannedGroupByArgs['orderBy'] }
        : { orderBy?: Ip_bannedGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Ip_bannedGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIp_bannedGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for ip_banned.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ip_bannedClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * ip_banned base type for findUnique actions
   */
  export type ip_bannedFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the ip_banned
     */
    select?: ip_bannedSelect | null
    /**
     * Filter, which ip_banned to fetch.
     */
    where: ip_bannedWhereUniqueInput
  }

  /**
   * ip_banned findUnique
   */
  export interface ip_bannedFindUniqueArgs extends ip_bannedFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * ip_banned findUniqueOrThrow
   */
  export type ip_bannedFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the ip_banned
     */
    select?: ip_bannedSelect | null
    /**
     * Filter, which ip_banned to fetch.
     */
    where: ip_bannedWhereUniqueInput
  }


  /**
   * ip_banned base type for findFirst actions
   */
  export type ip_bannedFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the ip_banned
     */
    select?: ip_bannedSelect | null
    /**
     * Filter, which ip_banned to fetch.
     */
    where?: ip_bannedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ip_banneds to fetch.
     */
    orderBy?: Enumerable<ip_bannedOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ip_banneds.
     */
    cursor?: ip_bannedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ip_banneds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ip_banneds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ip_banneds.
     */
    distinct?: Enumerable<Ip_bannedScalarFieldEnum>
  }

  /**
   * ip_banned findFirst
   */
  export interface ip_bannedFindFirstArgs extends ip_bannedFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * ip_banned findFirstOrThrow
   */
  export type ip_bannedFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the ip_banned
     */
    select?: ip_bannedSelect | null
    /**
     * Filter, which ip_banned to fetch.
     */
    where?: ip_bannedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ip_banneds to fetch.
     */
    orderBy?: Enumerable<ip_bannedOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ip_banneds.
     */
    cursor?: ip_bannedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ip_banneds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ip_banneds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ip_banneds.
     */
    distinct?: Enumerable<Ip_bannedScalarFieldEnum>
  }


  /**
   * ip_banned findMany
   */
  export type ip_bannedFindManyArgs = {
    /**
     * Select specific fields to fetch from the ip_banned
     */
    select?: ip_bannedSelect | null
    /**
     * Filter, which ip_banneds to fetch.
     */
    where?: ip_bannedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ip_banneds to fetch.
     */
    orderBy?: Enumerable<ip_bannedOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ip_banneds.
     */
    cursor?: ip_bannedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ip_banneds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ip_banneds.
     */
    skip?: number
    distinct?: Enumerable<Ip_bannedScalarFieldEnum>
  }


  /**
   * ip_banned create
   */
  export type ip_bannedCreateArgs = {
    /**
     * Select specific fields to fetch from the ip_banned
     */
    select?: ip_bannedSelect | null
    /**
     * The data needed to create a ip_banned.
     */
    data: XOR<ip_bannedCreateInput, ip_bannedUncheckedCreateInput>
  }


  /**
   * ip_banned createMany
   */
  export type ip_bannedCreateManyArgs = {
    /**
     * The data used to create many ip_banneds.
     */
    data: Enumerable<ip_bannedCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * ip_banned update
   */
  export type ip_bannedUpdateArgs = {
    /**
     * Select specific fields to fetch from the ip_banned
     */
    select?: ip_bannedSelect | null
    /**
     * The data needed to update a ip_banned.
     */
    data: XOR<ip_bannedUpdateInput, ip_bannedUncheckedUpdateInput>
    /**
     * Choose, which ip_banned to update.
     */
    where: ip_bannedWhereUniqueInput
  }


  /**
   * ip_banned updateMany
   */
  export type ip_bannedUpdateManyArgs = {
    /**
     * The data used to update ip_banneds.
     */
    data: XOR<ip_bannedUpdateManyMutationInput, ip_bannedUncheckedUpdateManyInput>
    /**
     * Filter which ip_banneds to update
     */
    where?: ip_bannedWhereInput
  }


  /**
   * ip_banned upsert
   */
  export type ip_bannedUpsertArgs = {
    /**
     * Select specific fields to fetch from the ip_banned
     */
    select?: ip_bannedSelect | null
    /**
     * The filter to search for the ip_banned to update in case it exists.
     */
    where: ip_bannedWhereUniqueInput
    /**
     * In case the ip_banned found by the `where` argument doesn't exist, create a new ip_banned with this data.
     */
    create: XOR<ip_bannedCreateInput, ip_bannedUncheckedCreateInput>
    /**
     * In case the ip_banned was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ip_bannedUpdateInput, ip_bannedUncheckedUpdateInput>
  }


  /**
   * ip_banned delete
   */
  export type ip_bannedDeleteArgs = {
    /**
     * Select specific fields to fetch from the ip_banned
     */
    select?: ip_bannedSelect | null
    /**
     * Filter which ip_banned to delete.
     */
    where: ip_bannedWhereUniqueInput
  }


  /**
   * ip_banned deleteMany
   */
  export type ip_bannedDeleteManyArgs = {
    /**
     * Filter which ip_banneds to delete
     */
    where?: ip_bannedWhereInput
  }


  /**
   * ip_banned without action
   */
  export type ip_bannedArgs = {
    /**
     * Select specific fields to fetch from the ip_banned
     */
    select?: ip_bannedSelect | null
  }



  /**
   * Model migrations
   */


  export type AggregateMigrations = {
    _count: MigrationsCountAggregateOutputType | null
    _min: MigrationsMinAggregateOutputType | null
    _max: MigrationsMaxAggregateOutputType | null
  }

  export type MigrationsMinAggregateOutputType = {
    id: string | null
    Name: string | null
    Hash: string | null
  }

  export type MigrationsMaxAggregateOutputType = {
    id: string | null
    Name: string | null
    Hash: string | null
  }

  export type MigrationsCountAggregateOutputType = {
    id: number
    Name: number
    Hash: number
    _all: number
  }


  export type MigrationsMinAggregateInputType = {
    id?: true
    Name?: true
    Hash?: true
  }

  export type MigrationsMaxAggregateInputType = {
    id?: true
    Name?: true
    Hash?: true
  }

  export type MigrationsCountAggregateInputType = {
    id?: true
    Name?: true
    Hash?: true
    _all?: true
  }

  export type MigrationsAggregateArgs = {
    /**
     * Filter which migrations to aggregate.
     */
    where?: migrationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of migrations to fetch.
     */
    orderBy?: Enumerable<migrationsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: migrationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` migrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` migrations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned migrations
    **/
    _count?: true | MigrationsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MigrationsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MigrationsMaxAggregateInputType
  }

  export type GetMigrationsAggregateType<T extends MigrationsAggregateArgs> = {
        [P in keyof T & keyof AggregateMigrations]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMigrations[P]>
      : GetScalarType<T[P], AggregateMigrations[P]>
  }




  export type MigrationsGroupByArgs = {
    where?: migrationsWhereInput
    orderBy?: Enumerable<migrationsOrderByWithAggregationInput>
    by: MigrationsScalarFieldEnum[]
    having?: migrationsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MigrationsCountAggregateInputType | true
    _min?: MigrationsMinAggregateInputType
    _max?: MigrationsMaxAggregateInputType
  }


  export type MigrationsGroupByOutputType = {
    id: string
    Name: string
    Hash: string
    _count: MigrationsCountAggregateOutputType | null
    _min: MigrationsMinAggregateOutputType | null
    _max: MigrationsMaxAggregateOutputType | null
  }

  type GetMigrationsGroupByPayload<T extends MigrationsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<MigrationsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MigrationsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MigrationsGroupByOutputType[P]>
            : GetScalarType<T[P], MigrationsGroupByOutputType[P]>
        }
      >
    >


  export type migrationsSelect = {
    id?: boolean
    Name?: boolean
    Hash?: boolean
  }


  export type migrationsGetPayload<S extends boolean | null | undefined | migrationsArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? migrations :
    S extends undefined ? never :
    S extends { include: any } & (migrationsArgs | migrationsFindManyArgs)
    ? migrations 
    : S extends { select: any } & (migrationsArgs | migrationsFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof migrations ? migrations[P] : never
  } 
      : migrations


  type migrationsCountArgs = 
    Omit<migrationsFindManyArgs, 'select' | 'include'> & {
      select?: MigrationsCountAggregateInputType | true
    }

  export interface migrationsDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Migrations that matches the filter.
     * @param {migrationsFindUniqueArgs} args - Arguments to find a Migrations
     * @example
     * // Get one Migrations
     * const migrations = await prisma.migrations.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends migrationsFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, migrationsFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'migrations'> extends True ? Prisma__migrationsClient<migrationsGetPayload<T>> : Prisma__migrationsClient<migrationsGetPayload<T> | null, null>

    /**
     * Find one Migrations that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {migrationsFindUniqueOrThrowArgs} args - Arguments to find a Migrations
     * @example
     * // Get one Migrations
     * const migrations = await prisma.migrations.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends migrationsFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, migrationsFindUniqueOrThrowArgs>
    ): Prisma__migrationsClient<migrationsGetPayload<T>>

    /**
     * Find the first Migrations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {migrationsFindFirstArgs} args - Arguments to find a Migrations
     * @example
     * // Get one Migrations
     * const migrations = await prisma.migrations.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends migrationsFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, migrationsFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'migrations'> extends True ? Prisma__migrationsClient<migrationsGetPayload<T>> : Prisma__migrationsClient<migrationsGetPayload<T> | null, null>

    /**
     * Find the first Migrations that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {migrationsFindFirstOrThrowArgs} args - Arguments to find a Migrations
     * @example
     * // Get one Migrations
     * const migrations = await prisma.migrations.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends migrationsFindFirstOrThrowArgs>(
      args?: SelectSubset<T, migrationsFindFirstOrThrowArgs>
    ): Prisma__migrationsClient<migrationsGetPayload<T>>

    /**
     * Find zero or more Migrations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {migrationsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Migrations
     * const migrations = await prisma.migrations.findMany()
     * 
     * // Get first 10 Migrations
     * const migrations = await prisma.migrations.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const migrationsWithIdOnly = await prisma.migrations.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends migrationsFindManyArgs>(
      args?: SelectSubset<T, migrationsFindManyArgs>
    ): Prisma.PrismaPromise<Array<migrationsGetPayload<T>>>

    /**
     * Create a Migrations.
     * @param {migrationsCreateArgs} args - Arguments to create a Migrations.
     * @example
     * // Create one Migrations
     * const Migrations = await prisma.migrations.create({
     *   data: {
     *     // ... data to create a Migrations
     *   }
     * })
     * 
    **/
    create<T extends migrationsCreateArgs>(
      args: SelectSubset<T, migrationsCreateArgs>
    ): Prisma__migrationsClient<migrationsGetPayload<T>>

    /**
     * Create many Migrations.
     *     @param {migrationsCreateManyArgs} args - Arguments to create many Migrations.
     *     @example
     *     // Create many Migrations
     *     const migrations = await prisma.migrations.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends migrationsCreateManyArgs>(
      args?: SelectSubset<T, migrationsCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Migrations.
     * @param {migrationsDeleteArgs} args - Arguments to delete one Migrations.
     * @example
     * // Delete one Migrations
     * const Migrations = await prisma.migrations.delete({
     *   where: {
     *     // ... filter to delete one Migrations
     *   }
     * })
     * 
    **/
    delete<T extends migrationsDeleteArgs>(
      args: SelectSubset<T, migrationsDeleteArgs>
    ): Prisma__migrationsClient<migrationsGetPayload<T>>

    /**
     * Update one Migrations.
     * @param {migrationsUpdateArgs} args - Arguments to update one Migrations.
     * @example
     * // Update one Migrations
     * const migrations = await prisma.migrations.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends migrationsUpdateArgs>(
      args: SelectSubset<T, migrationsUpdateArgs>
    ): Prisma__migrationsClient<migrationsGetPayload<T>>

    /**
     * Delete zero or more Migrations.
     * @param {migrationsDeleteManyArgs} args - Arguments to filter Migrations to delete.
     * @example
     * // Delete a few Migrations
     * const { count } = await prisma.migrations.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends migrationsDeleteManyArgs>(
      args?: SelectSubset<T, migrationsDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Migrations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {migrationsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Migrations
     * const migrations = await prisma.migrations.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends migrationsUpdateManyArgs>(
      args: SelectSubset<T, migrationsUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Migrations.
     * @param {migrationsUpsertArgs} args - Arguments to update or create a Migrations.
     * @example
     * // Update or create a Migrations
     * const migrations = await prisma.migrations.upsert({
     *   create: {
     *     // ... data to create a Migrations
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Migrations we want to update
     *   }
     * })
    **/
    upsert<T extends migrationsUpsertArgs>(
      args: SelectSubset<T, migrationsUpsertArgs>
    ): Prisma__migrationsClient<migrationsGetPayload<T>>

    /**
     * Count the number of Migrations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {migrationsCountArgs} args - Arguments to filter Migrations to count.
     * @example
     * // Count the number of Migrations
     * const count = await prisma.migrations.count({
     *   where: {
     *     // ... the filter for the Migrations we want to count
     *   }
     * })
    **/
    count<T extends migrationsCountArgs>(
      args?: Subset<T, migrationsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MigrationsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Migrations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MigrationsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MigrationsAggregateArgs>(args: Subset<T, MigrationsAggregateArgs>): Prisma.PrismaPromise<GetMigrationsAggregateType<T>>

    /**
     * Group by Migrations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MigrationsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MigrationsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MigrationsGroupByArgs['orderBy'] }
        : { orderBy?: MigrationsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MigrationsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMigrationsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for migrations.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__migrationsClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * migrations base type for findUnique actions
   */
  export type migrationsFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the migrations
     */
    select?: migrationsSelect | null
    /**
     * Filter, which migrations to fetch.
     */
    where: migrationsWhereUniqueInput
  }

  /**
   * migrations findUnique
   */
  export interface migrationsFindUniqueArgs extends migrationsFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * migrations findUniqueOrThrow
   */
  export type migrationsFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the migrations
     */
    select?: migrationsSelect | null
    /**
     * Filter, which migrations to fetch.
     */
    where: migrationsWhereUniqueInput
  }


  /**
   * migrations base type for findFirst actions
   */
  export type migrationsFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the migrations
     */
    select?: migrationsSelect | null
    /**
     * Filter, which migrations to fetch.
     */
    where?: migrationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of migrations to fetch.
     */
    orderBy?: Enumerable<migrationsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for migrations.
     */
    cursor?: migrationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` migrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` migrations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of migrations.
     */
    distinct?: Enumerable<MigrationsScalarFieldEnum>
  }

  /**
   * migrations findFirst
   */
  export interface migrationsFindFirstArgs extends migrationsFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * migrations findFirstOrThrow
   */
  export type migrationsFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the migrations
     */
    select?: migrationsSelect | null
    /**
     * Filter, which migrations to fetch.
     */
    where?: migrationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of migrations to fetch.
     */
    orderBy?: Enumerable<migrationsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for migrations.
     */
    cursor?: migrationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` migrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` migrations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of migrations.
     */
    distinct?: Enumerable<MigrationsScalarFieldEnum>
  }


  /**
   * migrations findMany
   */
  export type migrationsFindManyArgs = {
    /**
     * Select specific fields to fetch from the migrations
     */
    select?: migrationsSelect | null
    /**
     * Filter, which migrations to fetch.
     */
    where?: migrationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of migrations to fetch.
     */
    orderBy?: Enumerable<migrationsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing migrations.
     */
    cursor?: migrationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` migrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` migrations.
     */
    skip?: number
    distinct?: Enumerable<MigrationsScalarFieldEnum>
  }


  /**
   * migrations create
   */
  export type migrationsCreateArgs = {
    /**
     * Select specific fields to fetch from the migrations
     */
    select?: migrationsSelect | null
    /**
     * The data needed to create a migrations.
     */
    data: XOR<migrationsCreateInput, migrationsUncheckedCreateInput>
  }


  /**
   * migrations createMany
   */
  export type migrationsCreateManyArgs = {
    /**
     * The data used to create many migrations.
     */
    data: Enumerable<migrationsCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * migrations update
   */
  export type migrationsUpdateArgs = {
    /**
     * Select specific fields to fetch from the migrations
     */
    select?: migrationsSelect | null
    /**
     * The data needed to update a migrations.
     */
    data: XOR<migrationsUpdateInput, migrationsUncheckedUpdateInput>
    /**
     * Choose, which migrations to update.
     */
    where: migrationsWhereUniqueInput
  }


  /**
   * migrations updateMany
   */
  export type migrationsUpdateManyArgs = {
    /**
     * The data used to update migrations.
     */
    data: XOR<migrationsUpdateManyMutationInput, migrationsUncheckedUpdateManyInput>
    /**
     * Filter which migrations to update
     */
    where?: migrationsWhereInput
  }


  /**
   * migrations upsert
   */
  export type migrationsUpsertArgs = {
    /**
     * Select specific fields to fetch from the migrations
     */
    select?: migrationsSelect | null
    /**
     * The filter to search for the migrations to update in case it exists.
     */
    where: migrationsWhereUniqueInput
    /**
     * In case the migrations found by the `where` argument doesn't exist, create a new migrations with this data.
     */
    create: XOR<migrationsCreateInput, migrationsUncheckedCreateInput>
    /**
     * In case the migrations was found with the provided `where` argument, update it with this data.
     */
    update: XOR<migrationsUpdateInput, migrationsUncheckedUpdateInput>
  }


  /**
   * migrations delete
   */
  export type migrationsDeleteArgs = {
    /**
     * Select specific fields to fetch from the migrations
     */
    select?: migrationsSelect | null
    /**
     * Filter which migrations to delete.
     */
    where: migrationsWhereUniqueInput
  }


  /**
   * migrations deleteMany
   */
  export type migrationsDeleteManyArgs = {
    /**
     * Filter which migrations to delete
     */
    where?: migrationsWhereInput
  }


  /**
   * migrations without action
   */
  export type migrationsArgs = {
    /**
     * Select specific fields to fetch from the migrations
     */
    select?: migrationsSelect | null
  }



  /**
   * Model realmcharacters
   */


  export type AggregateRealmcharacters = {
    _count: RealmcharactersCountAggregateOutputType | null
    _avg: RealmcharactersAvgAggregateOutputType | null
    _sum: RealmcharactersSumAggregateOutputType | null
    _min: RealmcharactersMinAggregateOutputType | null
    _max: RealmcharactersMaxAggregateOutputType | null
  }

  export type RealmcharactersAvgAggregateOutputType = {
    realmid: number | null
    acctid: number | null
    numchars: number | null
  }

  export type RealmcharactersSumAggregateOutputType = {
    realmid: number | null
    acctid: bigint | null
    numchars: number | null
  }

  export type RealmcharactersMinAggregateOutputType = {
    realmid: number | null
    acctid: bigint | null
    numchars: number | null
  }

  export type RealmcharactersMaxAggregateOutputType = {
    realmid: number | null
    acctid: bigint | null
    numchars: number | null
  }

  export type RealmcharactersCountAggregateOutputType = {
    realmid: number
    acctid: number
    numchars: number
    _all: number
  }


  export type RealmcharactersAvgAggregateInputType = {
    realmid?: true
    acctid?: true
    numchars?: true
  }

  export type RealmcharactersSumAggregateInputType = {
    realmid?: true
    acctid?: true
    numchars?: true
  }

  export type RealmcharactersMinAggregateInputType = {
    realmid?: true
    acctid?: true
    numchars?: true
  }

  export type RealmcharactersMaxAggregateInputType = {
    realmid?: true
    acctid?: true
    numchars?: true
  }

  export type RealmcharactersCountAggregateInputType = {
    realmid?: true
    acctid?: true
    numchars?: true
    _all?: true
  }

  export type RealmcharactersAggregateArgs = {
    /**
     * Filter which realmcharacters to aggregate.
     */
    where?: realmcharactersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of realmcharacters to fetch.
     */
    orderBy?: Enumerable<realmcharactersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: realmcharactersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` realmcharacters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` realmcharacters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned realmcharacters
    **/
    _count?: true | RealmcharactersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RealmcharactersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RealmcharactersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RealmcharactersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RealmcharactersMaxAggregateInputType
  }

  export type GetRealmcharactersAggregateType<T extends RealmcharactersAggregateArgs> = {
        [P in keyof T & keyof AggregateRealmcharacters]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRealmcharacters[P]>
      : GetScalarType<T[P], AggregateRealmcharacters[P]>
  }




  export type RealmcharactersGroupByArgs = {
    where?: realmcharactersWhereInput
    orderBy?: Enumerable<realmcharactersOrderByWithAggregationInput>
    by: RealmcharactersScalarFieldEnum[]
    having?: realmcharactersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RealmcharactersCountAggregateInputType | true
    _avg?: RealmcharactersAvgAggregateInputType
    _sum?: RealmcharactersSumAggregateInputType
    _min?: RealmcharactersMinAggregateInputType
    _max?: RealmcharactersMaxAggregateInputType
  }


  export type RealmcharactersGroupByOutputType = {
    realmid: number
    acctid: bigint
    numchars: number
    _count: RealmcharactersCountAggregateOutputType | null
    _avg: RealmcharactersAvgAggregateOutputType | null
    _sum: RealmcharactersSumAggregateOutputType | null
    _min: RealmcharactersMinAggregateOutputType | null
    _max: RealmcharactersMaxAggregateOutputType | null
  }

  type GetRealmcharactersGroupByPayload<T extends RealmcharactersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<RealmcharactersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RealmcharactersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RealmcharactersGroupByOutputType[P]>
            : GetScalarType<T[P], RealmcharactersGroupByOutputType[P]>
        }
      >
    >


  export type realmcharactersSelect = {
    realmid?: boolean
    acctid?: boolean
    numchars?: boolean
  }


  export type realmcharactersGetPayload<S extends boolean | null | undefined | realmcharactersArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? realmcharacters :
    S extends undefined ? never :
    S extends { include: any } & (realmcharactersArgs | realmcharactersFindManyArgs)
    ? realmcharacters 
    : S extends { select: any } & (realmcharactersArgs | realmcharactersFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof realmcharacters ? realmcharacters[P] : never
  } 
      : realmcharacters


  type realmcharactersCountArgs = 
    Omit<realmcharactersFindManyArgs, 'select' | 'include'> & {
      select?: RealmcharactersCountAggregateInputType | true
    }

  export interface realmcharactersDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Realmcharacters that matches the filter.
     * @param {realmcharactersFindUniqueArgs} args - Arguments to find a Realmcharacters
     * @example
     * // Get one Realmcharacters
     * const realmcharacters = await prisma.realmcharacters.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends realmcharactersFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, realmcharactersFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'realmcharacters'> extends True ? Prisma__realmcharactersClient<realmcharactersGetPayload<T>> : Prisma__realmcharactersClient<realmcharactersGetPayload<T> | null, null>

    /**
     * Find one Realmcharacters that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {realmcharactersFindUniqueOrThrowArgs} args - Arguments to find a Realmcharacters
     * @example
     * // Get one Realmcharacters
     * const realmcharacters = await prisma.realmcharacters.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends realmcharactersFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, realmcharactersFindUniqueOrThrowArgs>
    ): Prisma__realmcharactersClient<realmcharactersGetPayload<T>>

    /**
     * Find the first Realmcharacters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {realmcharactersFindFirstArgs} args - Arguments to find a Realmcharacters
     * @example
     * // Get one Realmcharacters
     * const realmcharacters = await prisma.realmcharacters.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends realmcharactersFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, realmcharactersFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'realmcharacters'> extends True ? Prisma__realmcharactersClient<realmcharactersGetPayload<T>> : Prisma__realmcharactersClient<realmcharactersGetPayload<T> | null, null>

    /**
     * Find the first Realmcharacters that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {realmcharactersFindFirstOrThrowArgs} args - Arguments to find a Realmcharacters
     * @example
     * // Get one Realmcharacters
     * const realmcharacters = await prisma.realmcharacters.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends realmcharactersFindFirstOrThrowArgs>(
      args?: SelectSubset<T, realmcharactersFindFirstOrThrowArgs>
    ): Prisma__realmcharactersClient<realmcharactersGetPayload<T>>

    /**
     * Find zero or more Realmcharacters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {realmcharactersFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Realmcharacters
     * const realmcharacters = await prisma.realmcharacters.findMany()
     * 
     * // Get first 10 Realmcharacters
     * const realmcharacters = await prisma.realmcharacters.findMany({ take: 10 })
     * 
     * // Only select the `realmid`
     * const realmcharactersWithRealmidOnly = await prisma.realmcharacters.findMany({ select: { realmid: true } })
     * 
    **/
    findMany<T extends realmcharactersFindManyArgs>(
      args?: SelectSubset<T, realmcharactersFindManyArgs>
    ): Prisma.PrismaPromise<Array<realmcharactersGetPayload<T>>>

    /**
     * Create a Realmcharacters.
     * @param {realmcharactersCreateArgs} args - Arguments to create a Realmcharacters.
     * @example
     * // Create one Realmcharacters
     * const Realmcharacters = await prisma.realmcharacters.create({
     *   data: {
     *     // ... data to create a Realmcharacters
     *   }
     * })
     * 
    **/
    create<T extends realmcharactersCreateArgs>(
      args: SelectSubset<T, realmcharactersCreateArgs>
    ): Prisma__realmcharactersClient<realmcharactersGetPayload<T>>

    /**
     * Create many Realmcharacters.
     *     @param {realmcharactersCreateManyArgs} args - Arguments to create many Realmcharacters.
     *     @example
     *     // Create many Realmcharacters
     *     const realmcharacters = await prisma.realmcharacters.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends realmcharactersCreateManyArgs>(
      args?: SelectSubset<T, realmcharactersCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Realmcharacters.
     * @param {realmcharactersDeleteArgs} args - Arguments to delete one Realmcharacters.
     * @example
     * // Delete one Realmcharacters
     * const Realmcharacters = await prisma.realmcharacters.delete({
     *   where: {
     *     // ... filter to delete one Realmcharacters
     *   }
     * })
     * 
    **/
    delete<T extends realmcharactersDeleteArgs>(
      args: SelectSubset<T, realmcharactersDeleteArgs>
    ): Prisma__realmcharactersClient<realmcharactersGetPayload<T>>

    /**
     * Update one Realmcharacters.
     * @param {realmcharactersUpdateArgs} args - Arguments to update one Realmcharacters.
     * @example
     * // Update one Realmcharacters
     * const realmcharacters = await prisma.realmcharacters.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends realmcharactersUpdateArgs>(
      args: SelectSubset<T, realmcharactersUpdateArgs>
    ): Prisma__realmcharactersClient<realmcharactersGetPayload<T>>

    /**
     * Delete zero or more Realmcharacters.
     * @param {realmcharactersDeleteManyArgs} args - Arguments to filter Realmcharacters to delete.
     * @example
     * // Delete a few Realmcharacters
     * const { count } = await prisma.realmcharacters.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends realmcharactersDeleteManyArgs>(
      args?: SelectSubset<T, realmcharactersDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Realmcharacters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {realmcharactersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Realmcharacters
     * const realmcharacters = await prisma.realmcharacters.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends realmcharactersUpdateManyArgs>(
      args: SelectSubset<T, realmcharactersUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Realmcharacters.
     * @param {realmcharactersUpsertArgs} args - Arguments to update or create a Realmcharacters.
     * @example
     * // Update or create a Realmcharacters
     * const realmcharacters = await prisma.realmcharacters.upsert({
     *   create: {
     *     // ... data to create a Realmcharacters
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Realmcharacters we want to update
     *   }
     * })
    **/
    upsert<T extends realmcharactersUpsertArgs>(
      args: SelectSubset<T, realmcharactersUpsertArgs>
    ): Prisma__realmcharactersClient<realmcharactersGetPayload<T>>

    /**
     * Count the number of Realmcharacters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {realmcharactersCountArgs} args - Arguments to filter Realmcharacters to count.
     * @example
     * // Count the number of Realmcharacters
     * const count = await prisma.realmcharacters.count({
     *   where: {
     *     // ... the filter for the Realmcharacters we want to count
     *   }
     * })
    **/
    count<T extends realmcharactersCountArgs>(
      args?: Subset<T, realmcharactersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RealmcharactersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Realmcharacters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RealmcharactersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RealmcharactersAggregateArgs>(args: Subset<T, RealmcharactersAggregateArgs>): Prisma.PrismaPromise<GetRealmcharactersAggregateType<T>>

    /**
     * Group by Realmcharacters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RealmcharactersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RealmcharactersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RealmcharactersGroupByArgs['orderBy'] }
        : { orderBy?: RealmcharactersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RealmcharactersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRealmcharactersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for realmcharacters.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__realmcharactersClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * realmcharacters base type for findUnique actions
   */
  export type realmcharactersFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the realmcharacters
     */
    select?: realmcharactersSelect | null
    /**
     * Filter, which realmcharacters to fetch.
     */
    where: realmcharactersWhereUniqueInput
  }

  /**
   * realmcharacters findUnique
   */
  export interface realmcharactersFindUniqueArgs extends realmcharactersFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * realmcharacters findUniqueOrThrow
   */
  export type realmcharactersFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the realmcharacters
     */
    select?: realmcharactersSelect | null
    /**
     * Filter, which realmcharacters to fetch.
     */
    where: realmcharactersWhereUniqueInput
  }


  /**
   * realmcharacters base type for findFirst actions
   */
  export type realmcharactersFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the realmcharacters
     */
    select?: realmcharactersSelect | null
    /**
     * Filter, which realmcharacters to fetch.
     */
    where?: realmcharactersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of realmcharacters to fetch.
     */
    orderBy?: Enumerable<realmcharactersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for realmcharacters.
     */
    cursor?: realmcharactersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` realmcharacters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` realmcharacters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of realmcharacters.
     */
    distinct?: Enumerable<RealmcharactersScalarFieldEnum>
  }

  /**
   * realmcharacters findFirst
   */
  export interface realmcharactersFindFirstArgs extends realmcharactersFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * realmcharacters findFirstOrThrow
   */
  export type realmcharactersFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the realmcharacters
     */
    select?: realmcharactersSelect | null
    /**
     * Filter, which realmcharacters to fetch.
     */
    where?: realmcharactersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of realmcharacters to fetch.
     */
    orderBy?: Enumerable<realmcharactersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for realmcharacters.
     */
    cursor?: realmcharactersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` realmcharacters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` realmcharacters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of realmcharacters.
     */
    distinct?: Enumerable<RealmcharactersScalarFieldEnum>
  }


  /**
   * realmcharacters findMany
   */
  export type realmcharactersFindManyArgs = {
    /**
     * Select specific fields to fetch from the realmcharacters
     */
    select?: realmcharactersSelect | null
    /**
     * Filter, which realmcharacters to fetch.
     */
    where?: realmcharactersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of realmcharacters to fetch.
     */
    orderBy?: Enumerable<realmcharactersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing realmcharacters.
     */
    cursor?: realmcharactersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` realmcharacters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` realmcharacters.
     */
    skip?: number
    distinct?: Enumerable<RealmcharactersScalarFieldEnum>
  }


  /**
   * realmcharacters create
   */
  export type realmcharactersCreateArgs = {
    /**
     * Select specific fields to fetch from the realmcharacters
     */
    select?: realmcharactersSelect | null
    /**
     * The data needed to create a realmcharacters.
     */
    data: XOR<realmcharactersCreateInput, realmcharactersUncheckedCreateInput>
  }


  /**
   * realmcharacters createMany
   */
  export type realmcharactersCreateManyArgs = {
    /**
     * The data used to create many realmcharacters.
     */
    data: Enumerable<realmcharactersCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * realmcharacters update
   */
  export type realmcharactersUpdateArgs = {
    /**
     * Select specific fields to fetch from the realmcharacters
     */
    select?: realmcharactersSelect | null
    /**
     * The data needed to update a realmcharacters.
     */
    data: XOR<realmcharactersUpdateInput, realmcharactersUncheckedUpdateInput>
    /**
     * Choose, which realmcharacters to update.
     */
    where: realmcharactersWhereUniqueInput
  }


  /**
   * realmcharacters updateMany
   */
  export type realmcharactersUpdateManyArgs = {
    /**
     * The data used to update realmcharacters.
     */
    data: XOR<realmcharactersUpdateManyMutationInput, realmcharactersUncheckedUpdateManyInput>
    /**
     * Filter which realmcharacters to update
     */
    where?: realmcharactersWhereInput
  }


  /**
   * realmcharacters upsert
   */
  export type realmcharactersUpsertArgs = {
    /**
     * Select specific fields to fetch from the realmcharacters
     */
    select?: realmcharactersSelect | null
    /**
     * The filter to search for the realmcharacters to update in case it exists.
     */
    where: realmcharactersWhereUniqueInput
    /**
     * In case the realmcharacters found by the `where` argument doesn't exist, create a new realmcharacters with this data.
     */
    create: XOR<realmcharactersCreateInput, realmcharactersUncheckedCreateInput>
    /**
     * In case the realmcharacters was found with the provided `where` argument, update it with this data.
     */
    update: XOR<realmcharactersUpdateInput, realmcharactersUncheckedUpdateInput>
  }


  /**
   * realmcharacters delete
   */
  export type realmcharactersDeleteArgs = {
    /**
     * Select specific fields to fetch from the realmcharacters
     */
    select?: realmcharactersSelect | null
    /**
     * Filter which realmcharacters to delete.
     */
    where: realmcharactersWhereUniqueInput
  }


  /**
   * realmcharacters deleteMany
   */
  export type realmcharactersDeleteManyArgs = {
    /**
     * Filter which realmcharacters to delete
     */
    where?: realmcharactersWhereInput
  }


  /**
   * realmcharacters without action
   */
  export type realmcharactersArgs = {
    /**
     * Select specific fields to fetch from the realmcharacters
     */
    select?: realmcharactersSelect | null
  }



  /**
   * Model realmlist
   */


  export type AggregateRealmlist = {
    _count: RealmlistCountAggregateOutputType | null
    _avg: RealmlistAvgAggregateOutputType | null
    _sum: RealmlistSumAggregateOutputType | null
    _min: RealmlistMinAggregateOutputType | null
    _max: RealmlistMaxAggregateOutputType | null
  }

  export type RealmlistAvgAggregateOutputType = {
    id: number | null
    port: number | null
    icon: number | null
    realmflags: number | null
    timezone: number | null
    allowedSecurityLevel: number | null
    population: number | null
  }

  export type RealmlistSumAggregateOutputType = {
    id: number | null
    port: number | null
    icon: number | null
    realmflags: number | null
    timezone: number | null
    allowedSecurityLevel: number | null
    population: number | null
  }

  export type RealmlistMinAggregateOutputType = {
    id: number | null
    name: string | null
    address: string | null
    port: number | null
    icon: number | null
    realmflags: number | null
    timezone: number | null
    allowedSecurityLevel: number | null
    population: number | null
    realmbuilds: string | null
  }

  export type RealmlistMaxAggregateOutputType = {
    id: number | null
    name: string | null
    address: string | null
    port: number | null
    icon: number | null
    realmflags: number | null
    timezone: number | null
    allowedSecurityLevel: number | null
    population: number | null
    realmbuilds: string | null
  }

  export type RealmlistCountAggregateOutputType = {
    id: number
    name: number
    address: number
    port: number
    icon: number
    realmflags: number
    timezone: number
    allowedSecurityLevel: number
    population: number
    realmbuilds: number
    _all: number
  }


  export type RealmlistAvgAggregateInputType = {
    id?: true
    port?: true
    icon?: true
    realmflags?: true
    timezone?: true
    allowedSecurityLevel?: true
    population?: true
  }

  export type RealmlistSumAggregateInputType = {
    id?: true
    port?: true
    icon?: true
    realmflags?: true
    timezone?: true
    allowedSecurityLevel?: true
    population?: true
  }

  export type RealmlistMinAggregateInputType = {
    id?: true
    name?: true
    address?: true
    port?: true
    icon?: true
    realmflags?: true
    timezone?: true
    allowedSecurityLevel?: true
    population?: true
    realmbuilds?: true
  }

  export type RealmlistMaxAggregateInputType = {
    id?: true
    name?: true
    address?: true
    port?: true
    icon?: true
    realmflags?: true
    timezone?: true
    allowedSecurityLevel?: true
    population?: true
    realmbuilds?: true
  }

  export type RealmlistCountAggregateInputType = {
    id?: true
    name?: true
    address?: true
    port?: true
    icon?: true
    realmflags?: true
    timezone?: true
    allowedSecurityLevel?: true
    population?: true
    realmbuilds?: true
    _all?: true
  }

  export type RealmlistAggregateArgs = {
    /**
     * Filter which realmlist to aggregate.
     */
    where?: realmlistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of realmlists to fetch.
     */
    orderBy?: Enumerable<realmlistOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: realmlistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` realmlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` realmlists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned realmlists
    **/
    _count?: true | RealmlistCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RealmlistAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RealmlistSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RealmlistMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RealmlistMaxAggregateInputType
  }

  export type GetRealmlistAggregateType<T extends RealmlistAggregateArgs> = {
        [P in keyof T & keyof AggregateRealmlist]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRealmlist[P]>
      : GetScalarType<T[P], AggregateRealmlist[P]>
  }




  export type RealmlistGroupByArgs = {
    where?: realmlistWhereInput
    orderBy?: Enumerable<realmlistOrderByWithAggregationInput>
    by: RealmlistScalarFieldEnum[]
    having?: realmlistScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RealmlistCountAggregateInputType | true
    _avg?: RealmlistAvgAggregateInputType
    _sum?: RealmlistSumAggregateInputType
    _min?: RealmlistMinAggregateInputType
    _max?: RealmlistMaxAggregateInputType
  }


  export type RealmlistGroupByOutputType = {
    id: number
    name: string
    address: string
    port: number
    icon: number
    realmflags: number
    timezone: number
    allowedSecurityLevel: number
    population: number
    realmbuilds: string
    _count: RealmlistCountAggregateOutputType | null
    _avg: RealmlistAvgAggregateOutputType | null
    _sum: RealmlistSumAggregateOutputType | null
    _min: RealmlistMinAggregateOutputType | null
    _max: RealmlistMaxAggregateOutputType | null
  }

  type GetRealmlistGroupByPayload<T extends RealmlistGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<RealmlistGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RealmlistGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RealmlistGroupByOutputType[P]>
            : GetScalarType<T[P], RealmlistGroupByOutputType[P]>
        }
      >
    >


  export type realmlistSelect = {
    id?: boolean
    name?: boolean
    address?: boolean
    port?: boolean
    icon?: boolean
    realmflags?: boolean
    timezone?: boolean
    allowedSecurityLevel?: boolean
    population?: boolean
    realmbuilds?: boolean
  }


  export type realmlistGetPayload<S extends boolean | null | undefined | realmlistArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? realmlist :
    S extends undefined ? never :
    S extends { include: any } & (realmlistArgs | realmlistFindManyArgs)
    ? realmlist 
    : S extends { select: any } & (realmlistArgs | realmlistFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof realmlist ? realmlist[P] : never
  } 
      : realmlist


  type realmlistCountArgs = 
    Omit<realmlistFindManyArgs, 'select' | 'include'> & {
      select?: RealmlistCountAggregateInputType | true
    }

  export interface realmlistDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Realmlist that matches the filter.
     * @param {realmlistFindUniqueArgs} args - Arguments to find a Realmlist
     * @example
     * // Get one Realmlist
     * const realmlist = await prisma.realmlist.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends realmlistFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, realmlistFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'realmlist'> extends True ? Prisma__realmlistClient<realmlistGetPayload<T>> : Prisma__realmlistClient<realmlistGetPayload<T> | null, null>

    /**
     * Find one Realmlist that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {realmlistFindUniqueOrThrowArgs} args - Arguments to find a Realmlist
     * @example
     * // Get one Realmlist
     * const realmlist = await prisma.realmlist.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends realmlistFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, realmlistFindUniqueOrThrowArgs>
    ): Prisma__realmlistClient<realmlistGetPayload<T>>

    /**
     * Find the first Realmlist that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {realmlistFindFirstArgs} args - Arguments to find a Realmlist
     * @example
     * // Get one Realmlist
     * const realmlist = await prisma.realmlist.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends realmlistFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, realmlistFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'realmlist'> extends True ? Prisma__realmlistClient<realmlistGetPayload<T>> : Prisma__realmlistClient<realmlistGetPayload<T> | null, null>

    /**
     * Find the first Realmlist that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {realmlistFindFirstOrThrowArgs} args - Arguments to find a Realmlist
     * @example
     * // Get one Realmlist
     * const realmlist = await prisma.realmlist.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends realmlistFindFirstOrThrowArgs>(
      args?: SelectSubset<T, realmlistFindFirstOrThrowArgs>
    ): Prisma__realmlistClient<realmlistGetPayload<T>>

    /**
     * Find zero or more Realmlists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {realmlistFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Realmlists
     * const realmlists = await prisma.realmlist.findMany()
     * 
     * // Get first 10 Realmlists
     * const realmlists = await prisma.realmlist.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const realmlistWithIdOnly = await prisma.realmlist.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends realmlistFindManyArgs>(
      args?: SelectSubset<T, realmlistFindManyArgs>
    ): Prisma.PrismaPromise<Array<realmlistGetPayload<T>>>

    /**
     * Create a Realmlist.
     * @param {realmlistCreateArgs} args - Arguments to create a Realmlist.
     * @example
     * // Create one Realmlist
     * const Realmlist = await prisma.realmlist.create({
     *   data: {
     *     // ... data to create a Realmlist
     *   }
     * })
     * 
    **/
    create<T extends realmlistCreateArgs>(
      args: SelectSubset<T, realmlistCreateArgs>
    ): Prisma__realmlistClient<realmlistGetPayload<T>>

    /**
     * Create many Realmlists.
     *     @param {realmlistCreateManyArgs} args - Arguments to create many Realmlists.
     *     @example
     *     // Create many Realmlists
     *     const realmlist = await prisma.realmlist.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends realmlistCreateManyArgs>(
      args?: SelectSubset<T, realmlistCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Realmlist.
     * @param {realmlistDeleteArgs} args - Arguments to delete one Realmlist.
     * @example
     * // Delete one Realmlist
     * const Realmlist = await prisma.realmlist.delete({
     *   where: {
     *     // ... filter to delete one Realmlist
     *   }
     * })
     * 
    **/
    delete<T extends realmlistDeleteArgs>(
      args: SelectSubset<T, realmlistDeleteArgs>
    ): Prisma__realmlistClient<realmlistGetPayload<T>>

    /**
     * Update one Realmlist.
     * @param {realmlistUpdateArgs} args - Arguments to update one Realmlist.
     * @example
     * // Update one Realmlist
     * const realmlist = await prisma.realmlist.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends realmlistUpdateArgs>(
      args: SelectSubset<T, realmlistUpdateArgs>
    ): Prisma__realmlistClient<realmlistGetPayload<T>>

    /**
     * Delete zero or more Realmlists.
     * @param {realmlistDeleteManyArgs} args - Arguments to filter Realmlists to delete.
     * @example
     * // Delete a few Realmlists
     * const { count } = await prisma.realmlist.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends realmlistDeleteManyArgs>(
      args?: SelectSubset<T, realmlistDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Realmlists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {realmlistUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Realmlists
     * const realmlist = await prisma.realmlist.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends realmlistUpdateManyArgs>(
      args: SelectSubset<T, realmlistUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Realmlist.
     * @param {realmlistUpsertArgs} args - Arguments to update or create a Realmlist.
     * @example
     * // Update or create a Realmlist
     * const realmlist = await prisma.realmlist.upsert({
     *   create: {
     *     // ... data to create a Realmlist
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Realmlist we want to update
     *   }
     * })
    **/
    upsert<T extends realmlistUpsertArgs>(
      args: SelectSubset<T, realmlistUpsertArgs>
    ): Prisma__realmlistClient<realmlistGetPayload<T>>

    /**
     * Count the number of Realmlists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {realmlistCountArgs} args - Arguments to filter Realmlists to count.
     * @example
     * // Count the number of Realmlists
     * const count = await prisma.realmlist.count({
     *   where: {
     *     // ... the filter for the Realmlists we want to count
     *   }
     * })
    **/
    count<T extends realmlistCountArgs>(
      args?: Subset<T, realmlistCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RealmlistCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Realmlist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RealmlistAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RealmlistAggregateArgs>(args: Subset<T, RealmlistAggregateArgs>): Prisma.PrismaPromise<GetRealmlistAggregateType<T>>

    /**
     * Group by Realmlist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RealmlistGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RealmlistGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RealmlistGroupByArgs['orderBy'] }
        : { orderBy?: RealmlistGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RealmlistGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRealmlistGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for realmlist.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__realmlistClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * realmlist base type for findUnique actions
   */
  export type realmlistFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the realmlist
     */
    select?: realmlistSelect | null
    /**
     * Filter, which realmlist to fetch.
     */
    where: realmlistWhereUniqueInput
  }

  /**
   * realmlist findUnique
   */
  export interface realmlistFindUniqueArgs extends realmlistFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * realmlist findUniqueOrThrow
   */
  export type realmlistFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the realmlist
     */
    select?: realmlistSelect | null
    /**
     * Filter, which realmlist to fetch.
     */
    where: realmlistWhereUniqueInput
  }


  /**
   * realmlist base type for findFirst actions
   */
  export type realmlistFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the realmlist
     */
    select?: realmlistSelect | null
    /**
     * Filter, which realmlist to fetch.
     */
    where?: realmlistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of realmlists to fetch.
     */
    orderBy?: Enumerable<realmlistOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for realmlists.
     */
    cursor?: realmlistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` realmlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` realmlists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of realmlists.
     */
    distinct?: Enumerable<RealmlistScalarFieldEnum>
  }

  /**
   * realmlist findFirst
   */
  export interface realmlistFindFirstArgs extends realmlistFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * realmlist findFirstOrThrow
   */
  export type realmlistFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the realmlist
     */
    select?: realmlistSelect | null
    /**
     * Filter, which realmlist to fetch.
     */
    where?: realmlistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of realmlists to fetch.
     */
    orderBy?: Enumerable<realmlistOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for realmlists.
     */
    cursor?: realmlistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` realmlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` realmlists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of realmlists.
     */
    distinct?: Enumerable<RealmlistScalarFieldEnum>
  }


  /**
   * realmlist findMany
   */
  export type realmlistFindManyArgs = {
    /**
     * Select specific fields to fetch from the realmlist
     */
    select?: realmlistSelect | null
    /**
     * Filter, which realmlists to fetch.
     */
    where?: realmlistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of realmlists to fetch.
     */
    orderBy?: Enumerable<realmlistOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing realmlists.
     */
    cursor?: realmlistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` realmlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` realmlists.
     */
    skip?: number
    distinct?: Enumerable<RealmlistScalarFieldEnum>
  }


  /**
   * realmlist create
   */
  export type realmlistCreateArgs = {
    /**
     * Select specific fields to fetch from the realmlist
     */
    select?: realmlistSelect | null
    /**
     * The data needed to create a realmlist.
     */
    data: XOR<realmlistCreateInput, realmlistUncheckedCreateInput>
  }


  /**
   * realmlist createMany
   */
  export type realmlistCreateManyArgs = {
    /**
     * The data used to create many realmlists.
     */
    data: Enumerable<realmlistCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * realmlist update
   */
  export type realmlistUpdateArgs = {
    /**
     * Select specific fields to fetch from the realmlist
     */
    select?: realmlistSelect | null
    /**
     * The data needed to update a realmlist.
     */
    data: XOR<realmlistUpdateInput, realmlistUncheckedUpdateInput>
    /**
     * Choose, which realmlist to update.
     */
    where: realmlistWhereUniqueInput
  }


  /**
   * realmlist updateMany
   */
  export type realmlistUpdateManyArgs = {
    /**
     * The data used to update realmlists.
     */
    data: XOR<realmlistUpdateManyMutationInput, realmlistUncheckedUpdateManyInput>
    /**
     * Filter which realmlists to update
     */
    where?: realmlistWhereInput
  }


  /**
   * realmlist upsert
   */
  export type realmlistUpsertArgs = {
    /**
     * Select specific fields to fetch from the realmlist
     */
    select?: realmlistSelect | null
    /**
     * The filter to search for the realmlist to update in case it exists.
     */
    where: realmlistWhereUniqueInput
    /**
     * In case the realmlist found by the `where` argument doesn't exist, create a new realmlist with this data.
     */
    create: XOR<realmlistCreateInput, realmlistUncheckedCreateInput>
    /**
     * In case the realmlist was found with the provided `where` argument, update it with this data.
     */
    update: XOR<realmlistUpdateInput, realmlistUncheckedUpdateInput>
  }


  /**
   * realmlist delete
   */
  export type realmlistDeleteArgs = {
    /**
     * Select specific fields to fetch from the realmlist
     */
    select?: realmlistSelect | null
    /**
     * Filter which realmlist to delete.
     */
    where: realmlistWhereUniqueInput
  }


  /**
   * realmlist deleteMany
   */
  export type realmlistDeleteManyArgs = {
    /**
     * Filter which realmlists to delete
     */
    where?: realmlistWhereInput
  }


  /**
   * realmlist without action
   */
  export type realmlistArgs = {
    /**
     * Select specific fields to fetch from the realmlist
     */
    select?: realmlistSelect | null
  }



  /**
   * Model shop_coins
   */


  export type AggregateShop_coins = {
    _count: Shop_coinsCountAggregateOutputType | null
    _avg: Shop_coinsAvgAggregateOutputType | null
    _sum: Shop_coinsSumAggregateOutputType | null
    _min: Shop_coinsMinAggregateOutputType | null
    _max: Shop_coinsMaxAggregateOutputType | null
  }

  export type Shop_coinsAvgAggregateOutputType = {
    id: number | null
    coins: number | null
  }

  export type Shop_coinsSumAggregateOutputType = {
    id: number | null
    coins: number | null
  }

  export type Shop_coinsMinAggregateOutputType = {
    id: number | null
    coins: number | null
  }

  export type Shop_coinsMaxAggregateOutputType = {
    id: number | null
    coins: number | null
  }

  export type Shop_coinsCountAggregateOutputType = {
    id: number
    coins: number
    _all: number
  }


  export type Shop_coinsAvgAggregateInputType = {
    id?: true
    coins?: true
  }

  export type Shop_coinsSumAggregateInputType = {
    id?: true
    coins?: true
  }

  export type Shop_coinsMinAggregateInputType = {
    id?: true
    coins?: true
  }

  export type Shop_coinsMaxAggregateInputType = {
    id?: true
    coins?: true
  }

  export type Shop_coinsCountAggregateInputType = {
    id?: true
    coins?: true
    _all?: true
  }

  export type Shop_coinsAggregateArgs = {
    /**
     * Filter which shop_coins to aggregate.
     */
    where?: shop_coinsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of shop_coins to fetch.
     */
    orderBy?: Enumerable<shop_coinsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: shop_coinsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` shop_coins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` shop_coins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned shop_coins
    **/
    _count?: true | Shop_coinsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Shop_coinsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Shop_coinsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Shop_coinsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Shop_coinsMaxAggregateInputType
  }

  export type GetShop_coinsAggregateType<T extends Shop_coinsAggregateArgs> = {
        [P in keyof T & keyof AggregateShop_coins]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateShop_coins[P]>
      : GetScalarType<T[P], AggregateShop_coins[P]>
  }




  export type Shop_coinsGroupByArgs = {
    where?: shop_coinsWhereInput
    orderBy?: Enumerable<shop_coinsOrderByWithAggregationInput>
    by: Shop_coinsScalarFieldEnum[]
    having?: shop_coinsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Shop_coinsCountAggregateInputType | true
    _avg?: Shop_coinsAvgAggregateInputType
    _sum?: Shop_coinsSumAggregateInputType
    _min?: Shop_coinsMinAggregateInputType
    _max?: Shop_coinsMaxAggregateInputType
  }


  export type Shop_coinsGroupByOutputType = {
    id: number
    coins: number
    _count: Shop_coinsCountAggregateOutputType | null
    _avg: Shop_coinsAvgAggregateOutputType | null
    _sum: Shop_coinsSumAggregateOutputType | null
    _min: Shop_coinsMinAggregateOutputType | null
    _max: Shop_coinsMaxAggregateOutputType | null
  }

  type GetShop_coinsGroupByPayload<T extends Shop_coinsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<Shop_coinsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Shop_coinsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Shop_coinsGroupByOutputType[P]>
            : GetScalarType<T[P], Shop_coinsGroupByOutputType[P]>
        }
      >
    >


  export type shop_coinsSelect = {
    id?: boolean
    coins?: boolean
  }


  export type shop_coinsGetPayload<S extends boolean | null | undefined | shop_coinsArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? shop_coins :
    S extends undefined ? never :
    S extends { include: any } & (shop_coinsArgs | shop_coinsFindManyArgs)
    ? shop_coins 
    : S extends { select: any } & (shop_coinsArgs | shop_coinsFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof shop_coins ? shop_coins[P] : never
  } 
      : shop_coins


  type shop_coinsCountArgs = 
    Omit<shop_coinsFindManyArgs, 'select' | 'include'> & {
      select?: Shop_coinsCountAggregateInputType | true
    }

  export interface shop_coinsDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Shop_coins that matches the filter.
     * @param {shop_coinsFindUniqueArgs} args - Arguments to find a Shop_coins
     * @example
     * // Get one Shop_coins
     * const shop_coins = await prisma.shop_coins.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends shop_coinsFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, shop_coinsFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'shop_coins'> extends True ? Prisma__shop_coinsClient<shop_coinsGetPayload<T>> : Prisma__shop_coinsClient<shop_coinsGetPayload<T> | null, null>

    /**
     * Find one Shop_coins that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {shop_coinsFindUniqueOrThrowArgs} args - Arguments to find a Shop_coins
     * @example
     * // Get one Shop_coins
     * const shop_coins = await prisma.shop_coins.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends shop_coinsFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, shop_coinsFindUniqueOrThrowArgs>
    ): Prisma__shop_coinsClient<shop_coinsGetPayload<T>>

    /**
     * Find the first Shop_coins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {shop_coinsFindFirstArgs} args - Arguments to find a Shop_coins
     * @example
     * // Get one Shop_coins
     * const shop_coins = await prisma.shop_coins.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends shop_coinsFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, shop_coinsFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'shop_coins'> extends True ? Prisma__shop_coinsClient<shop_coinsGetPayload<T>> : Prisma__shop_coinsClient<shop_coinsGetPayload<T> | null, null>

    /**
     * Find the first Shop_coins that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {shop_coinsFindFirstOrThrowArgs} args - Arguments to find a Shop_coins
     * @example
     * // Get one Shop_coins
     * const shop_coins = await prisma.shop_coins.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends shop_coinsFindFirstOrThrowArgs>(
      args?: SelectSubset<T, shop_coinsFindFirstOrThrowArgs>
    ): Prisma__shop_coinsClient<shop_coinsGetPayload<T>>

    /**
     * Find zero or more Shop_coins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {shop_coinsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Shop_coins
     * const shop_coins = await prisma.shop_coins.findMany()
     * 
     * // Get first 10 Shop_coins
     * const shop_coins = await prisma.shop_coins.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const shop_coinsWithIdOnly = await prisma.shop_coins.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends shop_coinsFindManyArgs>(
      args?: SelectSubset<T, shop_coinsFindManyArgs>
    ): Prisma.PrismaPromise<Array<shop_coinsGetPayload<T>>>

    /**
     * Create a Shop_coins.
     * @param {shop_coinsCreateArgs} args - Arguments to create a Shop_coins.
     * @example
     * // Create one Shop_coins
     * const Shop_coins = await prisma.shop_coins.create({
     *   data: {
     *     // ... data to create a Shop_coins
     *   }
     * })
     * 
    **/
    create<T extends shop_coinsCreateArgs>(
      args: SelectSubset<T, shop_coinsCreateArgs>
    ): Prisma__shop_coinsClient<shop_coinsGetPayload<T>>

    /**
     * Create many Shop_coins.
     *     @param {shop_coinsCreateManyArgs} args - Arguments to create many Shop_coins.
     *     @example
     *     // Create many Shop_coins
     *     const shop_coins = await prisma.shop_coins.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends shop_coinsCreateManyArgs>(
      args?: SelectSubset<T, shop_coinsCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Shop_coins.
     * @param {shop_coinsDeleteArgs} args - Arguments to delete one Shop_coins.
     * @example
     * // Delete one Shop_coins
     * const Shop_coins = await prisma.shop_coins.delete({
     *   where: {
     *     // ... filter to delete one Shop_coins
     *   }
     * })
     * 
    **/
    delete<T extends shop_coinsDeleteArgs>(
      args: SelectSubset<T, shop_coinsDeleteArgs>
    ): Prisma__shop_coinsClient<shop_coinsGetPayload<T>>

    /**
     * Update one Shop_coins.
     * @param {shop_coinsUpdateArgs} args - Arguments to update one Shop_coins.
     * @example
     * // Update one Shop_coins
     * const shop_coins = await prisma.shop_coins.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends shop_coinsUpdateArgs>(
      args: SelectSubset<T, shop_coinsUpdateArgs>
    ): Prisma__shop_coinsClient<shop_coinsGetPayload<T>>

    /**
     * Delete zero or more Shop_coins.
     * @param {shop_coinsDeleteManyArgs} args - Arguments to filter Shop_coins to delete.
     * @example
     * // Delete a few Shop_coins
     * const { count } = await prisma.shop_coins.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends shop_coinsDeleteManyArgs>(
      args?: SelectSubset<T, shop_coinsDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Shop_coins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {shop_coinsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Shop_coins
     * const shop_coins = await prisma.shop_coins.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends shop_coinsUpdateManyArgs>(
      args: SelectSubset<T, shop_coinsUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Shop_coins.
     * @param {shop_coinsUpsertArgs} args - Arguments to update or create a Shop_coins.
     * @example
     * // Update or create a Shop_coins
     * const shop_coins = await prisma.shop_coins.upsert({
     *   create: {
     *     // ... data to create a Shop_coins
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Shop_coins we want to update
     *   }
     * })
    **/
    upsert<T extends shop_coinsUpsertArgs>(
      args: SelectSubset<T, shop_coinsUpsertArgs>
    ): Prisma__shop_coinsClient<shop_coinsGetPayload<T>>

    /**
     * Count the number of Shop_coins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {shop_coinsCountArgs} args - Arguments to filter Shop_coins to count.
     * @example
     * // Count the number of Shop_coins
     * const count = await prisma.shop_coins.count({
     *   where: {
     *     // ... the filter for the Shop_coins we want to count
     *   }
     * })
    **/
    count<T extends shop_coinsCountArgs>(
      args?: Subset<T, shop_coinsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Shop_coinsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Shop_coins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Shop_coinsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Shop_coinsAggregateArgs>(args: Subset<T, Shop_coinsAggregateArgs>): Prisma.PrismaPromise<GetShop_coinsAggregateType<T>>

    /**
     * Group by Shop_coins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Shop_coinsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Shop_coinsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Shop_coinsGroupByArgs['orderBy'] }
        : { orderBy?: Shop_coinsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Shop_coinsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShop_coinsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for shop_coins.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__shop_coinsClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * shop_coins base type for findUnique actions
   */
  export type shop_coinsFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the shop_coins
     */
    select?: shop_coinsSelect | null
    /**
     * Filter, which shop_coins to fetch.
     */
    where: shop_coinsWhereUniqueInput
  }

  /**
   * shop_coins findUnique
   */
  export interface shop_coinsFindUniqueArgs extends shop_coinsFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * shop_coins findUniqueOrThrow
   */
  export type shop_coinsFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the shop_coins
     */
    select?: shop_coinsSelect | null
    /**
     * Filter, which shop_coins to fetch.
     */
    where: shop_coinsWhereUniqueInput
  }


  /**
   * shop_coins base type for findFirst actions
   */
  export type shop_coinsFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the shop_coins
     */
    select?: shop_coinsSelect | null
    /**
     * Filter, which shop_coins to fetch.
     */
    where?: shop_coinsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of shop_coins to fetch.
     */
    orderBy?: Enumerable<shop_coinsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for shop_coins.
     */
    cursor?: shop_coinsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` shop_coins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` shop_coins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of shop_coins.
     */
    distinct?: Enumerable<Shop_coinsScalarFieldEnum>
  }

  /**
   * shop_coins findFirst
   */
  export interface shop_coinsFindFirstArgs extends shop_coinsFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * shop_coins findFirstOrThrow
   */
  export type shop_coinsFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the shop_coins
     */
    select?: shop_coinsSelect | null
    /**
     * Filter, which shop_coins to fetch.
     */
    where?: shop_coinsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of shop_coins to fetch.
     */
    orderBy?: Enumerable<shop_coinsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for shop_coins.
     */
    cursor?: shop_coinsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` shop_coins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` shop_coins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of shop_coins.
     */
    distinct?: Enumerable<Shop_coinsScalarFieldEnum>
  }


  /**
   * shop_coins findMany
   */
  export type shop_coinsFindManyArgs = {
    /**
     * Select specific fields to fetch from the shop_coins
     */
    select?: shop_coinsSelect | null
    /**
     * Filter, which shop_coins to fetch.
     */
    where?: shop_coinsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of shop_coins to fetch.
     */
    orderBy?: Enumerable<shop_coinsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing shop_coins.
     */
    cursor?: shop_coinsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` shop_coins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` shop_coins.
     */
    skip?: number
    distinct?: Enumerable<Shop_coinsScalarFieldEnum>
  }


  /**
   * shop_coins create
   */
  export type shop_coinsCreateArgs = {
    /**
     * Select specific fields to fetch from the shop_coins
     */
    select?: shop_coinsSelect | null
    /**
     * The data needed to create a shop_coins.
     */
    data: XOR<shop_coinsCreateInput, shop_coinsUncheckedCreateInput>
  }


  /**
   * shop_coins createMany
   */
  export type shop_coinsCreateManyArgs = {
    /**
     * The data used to create many shop_coins.
     */
    data: Enumerable<shop_coinsCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * shop_coins update
   */
  export type shop_coinsUpdateArgs = {
    /**
     * Select specific fields to fetch from the shop_coins
     */
    select?: shop_coinsSelect | null
    /**
     * The data needed to update a shop_coins.
     */
    data: XOR<shop_coinsUpdateInput, shop_coinsUncheckedUpdateInput>
    /**
     * Choose, which shop_coins to update.
     */
    where: shop_coinsWhereUniqueInput
  }


  /**
   * shop_coins updateMany
   */
  export type shop_coinsUpdateManyArgs = {
    /**
     * The data used to update shop_coins.
     */
    data: XOR<shop_coinsUpdateManyMutationInput, shop_coinsUncheckedUpdateManyInput>
    /**
     * Filter which shop_coins to update
     */
    where?: shop_coinsWhereInput
  }


  /**
   * shop_coins upsert
   */
  export type shop_coinsUpsertArgs = {
    /**
     * Select specific fields to fetch from the shop_coins
     */
    select?: shop_coinsSelect | null
    /**
     * The filter to search for the shop_coins to update in case it exists.
     */
    where: shop_coinsWhereUniqueInput
    /**
     * In case the shop_coins found by the `where` argument doesn't exist, create a new shop_coins with this data.
     */
    create: XOR<shop_coinsCreateInput, shop_coinsUncheckedCreateInput>
    /**
     * In case the shop_coins was found with the provided `where` argument, update it with this data.
     */
    update: XOR<shop_coinsUpdateInput, shop_coinsUncheckedUpdateInput>
  }


  /**
   * shop_coins delete
   */
  export type shop_coinsDeleteArgs = {
    /**
     * Select specific fields to fetch from the shop_coins
     */
    select?: shop_coinsSelect | null
    /**
     * Filter which shop_coins to delete.
     */
    where: shop_coinsWhereUniqueInput
  }


  /**
   * shop_coins deleteMany
   */
  export type shop_coinsDeleteManyArgs = {
    /**
     * Filter which shop_coins to delete
     */
    where?: shop_coinsWhereInput
  }


  /**
   * shop_coins without action
   */
  export type shop_coinsArgs = {
    /**
     * Select specific fields to fetch from the shop_coins
     */
    select?: shop_coinsSelect | null
  }



  /**
   * Model shop_diff
   */


  export type AggregateShop_diff = {
    _count: Shop_diffCountAggregateOutputType | null
    _avg: Shop_diffAvgAggregateOutputType | null
    _sum: Shop_diffSumAggregateOutputType | null
    _min: Shop_diffMinAggregateOutputType | null
    _max: Shop_diffMaxAggregateOutputType | null
  }

  export type Shop_diffAvgAggregateOutputType = {
    guid: number | null
    accountid: number | null
    prev_bonus: number | null
    new_bonus: number | null
    date: number | null
  }

  export type Shop_diffSumAggregateOutputType = {
    guid: bigint | null
    accountid: number | null
    prev_bonus: number | null
    new_bonus: number | null
    date: number | null
  }

  export type Shop_diffMinAggregateOutputType = {
    guid: bigint | null
    accountid: number | null
    prev_bonus: number | null
    new_bonus: number | null
    date: number | null
    query: string | null
  }

  export type Shop_diffMaxAggregateOutputType = {
    guid: bigint | null
    accountid: number | null
    prev_bonus: number | null
    new_bonus: number | null
    date: number | null
    query: string | null
  }

  export type Shop_diffCountAggregateOutputType = {
    guid: number
    accountid: number
    prev_bonus: number
    new_bonus: number
    date: number
    query: number
    _all: number
  }


  export type Shop_diffAvgAggregateInputType = {
    guid?: true
    accountid?: true
    prev_bonus?: true
    new_bonus?: true
    date?: true
  }

  export type Shop_diffSumAggregateInputType = {
    guid?: true
    accountid?: true
    prev_bonus?: true
    new_bonus?: true
    date?: true
  }

  export type Shop_diffMinAggregateInputType = {
    guid?: true
    accountid?: true
    prev_bonus?: true
    new_bonus?: true
    date?: true
    query?: true
  }

  export type Shop_diffMaxAggregateInputType = {
    guid?: true
    accountid?: true
    prev_bonus?: true
    new_bonus?: true
    date?: true
    query?: true
  }

  export type Shop_diffCountAggregateInputType = {
    guid?: true
    accountid?: true
    prev_bonus?: true
    new_bonus?: true
    date?: true
    query?: true
    _all?: true
  }

  export type Shop_diffAggregateArgs = {
    /**
     * Filter which shop_diff to aggregate.
     */
    where?: shop_diffWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of shop_diffs to fetch.
     */
    orderBy?: Enumerable<shop_diffOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: shop_diffWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` shop_diffs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` shop_diffs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned shop_diffs
    **/
    _count?: true | Shop_diffCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Shop_diffAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Shop_diffSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Shop_diffMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Shop_diffMaxAggregateInputType
  }

  export type GetShop_diffAggregateType<T extends Shop_diffAggregateArgs> = {
        [P in keyof T & keyof AggregateShop_diff]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateShop_diff[P]>
      : GetScalarType<T[P], AggregateShop_diff[P]>
  }




  export type Shop_diffGroupByArgs = {
    where?: shop_diffWhereInput
    orderBy?: Enumerable<shop_diffOrderByWithAggregationInput>
    by: Shop_diffScalarFieldEnum[]
    having?: shop_diffScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Shop_diffCountAggregateInputType | true
    _avg?: Shop_diffAvgAggregateInputType
    _sum?: Shop_diffSumAggregateInputType
    _min?: Shop_diffMinAggregateInputType
    _max?: Shop_diffMaxAggregateInputType
  }


  export type Shop_diffGroupByOutputType = {
    guid: bigint
    accountid: number
    prev_bonus: number
    new_bonus: number
    date: number
    query: string | null
    _count: Shop_diffCountAggregateOutputType | null
    _avg: Shop_diffAvgAggregateOutputType | null
    _sum: Shop_diffSumAggregateOutputType | null
    _min: Shop_diffMinAggregateOutputType | null
    _max: Shop_diffMaxAggregateOutputType | null
  }

  type GetShop_diffGroupByPayload<T extends Shop_diffGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<Shop_diffGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Shop_diffGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Shop_diffGroupByOutputType[P]>
            : GetScalarType<T[P], Shop_diffGroupByOutputType[P]>
        }
      >
    >


  export type shop_diffSelect = {
    guid?: boolean
    accountid?: boolean
    prev_bonus?: boolean
    new_bonus?: boolean
    date?: boolean
    query?: boolean
  }


  export type shop_diffGetPayload<S extends boolean | null | undefined | shop_diffArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? shop_diff :
    S extends undefined ? never :
    S extends { include: any } & (shop_diffArgs | shop_diffFindManyArgs)
    ? shop_diff 
    : S extends { select: any } & (shop_diffArgs | shop_diffFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof shop_diff ? shop_diff[P] : never
  } 
      : shop_diff


  type shop_diffCountArgs = 
    Omit<shop_diffFindManyArgs, 'select' | 'include'> & {
      select?: Shop_diffCountAggregateInputType | true
    }

  export interface shop_diffDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Shop_diff that matches the filter.
     * @param {shop_diffFindUniqueArgs} args - Arguments to find a Shop_diff
     * @example
     * // Get one Shop_diff
     * const shop_diff = await prisma.shop_diff.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends shop_diffFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, shop_diffFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'shop_diff'> extends True ? Prisma__shop_diffClient<shop_diffGetPayload<T>> : Prisma__shop_diffClient<shop_diffGetPayload<T> | null, null>

    /**
     * Find one Shop_diff that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {shop_diffFindUniqueOrThrowArgs} args - Arguments to find a Shop_diff
     * @example
     * // Get one Shop_diff
     * const shop_diff = await prisma.shop_diff.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends shop_diffFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, shop_diffFindUniqueOrThrowArgs>
    ): Prisma__shop_diffClient<shop_diffGetPayload<T>>

    /**
     * Find the first Shop_diff that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {shop_diffFindFirstArgs} args - Arguments to find a Shop_diff
     * @example
     * // Get one Shop_diff
     * const shop_diff = await prisma.shop_diff.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends shop_diffFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, shop_diffFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'shop_diff'> extends True ? Prisma__shop_diffClient<shop_diffGetPayload<T>> : Prisma__shop_diffClient<shop_diffGetPayload<T> | null, null>

    /**
     * Find the first Shop_diff that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {shop_diffFindFirstOrThrowArgs} args - Arguments to find a Shop_diff
     * @example
     * // Get one Shop_diff
     * const shop_diff = await prisma.shop_diff.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends shop_diffFindFirstOrThrowArgs>(
      args?: SelectSubset<T, shop_diffFindFirstOrThrowArgs>
    ): Prisma__shop_diffClient<shop_diffGetPayload<T>>

    /**
     * Find zero or more Shop_diffs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {shop_diffFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Shop_diffs
     * const shop_diffs = await prisma.shop_diff.findMany()
     * 
     * // Get first 10 Shop_diffs
     * const shop_diffs = await prisma.shop_diff.findMany({ take: 10 })
     * 
     * // Only select the `guid`
     * const shop_diffWithGuidOnly = await prisma.shop_diff.findMany({ select: { guid: true } })
     * 
    **/
    findMany<T extends shop_diffFindManyArgs>(
      args?: SelectSubset<T, shop_diffFindManyArgs>
    ): Prisma.PrismaPromise<Array<shop_diffGetPayload<T>>>

    /**
     * Create a Shop_diff.
     * @param {shop_diffCreateArgs} args - Arguments to create a Shop_diff.
     * @example
     * // Create one Shop_diff
     * const Shop_diff = await prisma.shop_diff.create({
     *   data: {
     *     // ... data to create a Shop_diff
     *   }
     * })
     * 
    **/
    create<T extends shop_diffCreateArgs>(
      args: SelectSubset<T, shop_diffCreateArgs>
    ): Prisma__shop_diffClient<shop_diffGetPayload<T>>

    /**
     * Create many Shop_diffs.
     *     @param {shop_diffCreateManyArgs} args - Arguments to create many Shop_diffs.
     *     @example
     *     // Create many Shop_diffs
     *     const shop_diff = await prisma.shop_diff.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends shop_diffCreateManyArgs>(
      args?: SelectSubset<T, shop_diffCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Shop_diff.
     * @param {shop_diffDeleteArgs} args - Arguments to delete one Shop_diff.
     * @example
     * // Delete one Shop_diff
     * const Shop_diff = await prisma.shop_diff.delete({
     *   where: {
     *     // ... filter to delete one Shop_diff
     *   }
     * })
     * 
    **/
    delete<T extends shop_diffDeleteArgs>(
      args: SelectSubset<T, shop_diffDeleteArgs>
    ): Prisma__shop_diffClient<shop_diffGetPayload<T>>

    /**
     * Update one Shop_diff.
     * @param {shop_diffUpdateArgs} args - Arguments to update one Shop_diff.
     * @example
     * // Update one Shop_diff
     * const shop_diff = await prisma.shop_diff.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends shop_diffUpdateArgs>(
      args: SelectSubset<T, shop_diffUpdateArgs>
    ): Prisma__shop_diffClient<shop_diffGetPayload<T>>

    /**
     * Delete zero or more Shop_diffs.
     * @param {shop_diffDeleteManyArgs} args - Arguments to filter Shop_diffs to delete.
     * @example
     * // Delete a few Shop_diffs
     * const { count } = await prisma.shop_diff.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends shop_diffDeleteManyArgs>(
      args?: SelectSubset<T, shop_diffDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Shop_diffs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {shop_diffUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Shop_diffs
     * const shop_diff = await prisma.shop_diff.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends shop_diffUpdateManyArgs>(
      args: SelectSubset<T, shop_diffUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Shop_diff.
     * @param {shop_diffUpsertArgs} args - Arguments to update or create a Shop_diff.
     * @example
     * // Update or create a Shop_diff
     * const shop_diff = await prisma.shop_diff.upsert({
     *   create: {
     *     // ... data to create a Shop_diff
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Shop_diff we want to update
     *   }
     * })
    **/
    upsert<T extends shop_diffUpsertArgs>(
      args: SelectSubset<T, shop_diffUpsertArgs>
    ): Prisma__shop_diffClient<shop_diffGetPayload<T>>

    /**
     * Count the number of Shop_diffs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {shop_diffCountArgs} args - Arguments to filter Shop_diffs to count.
     * @example
     * // Count the number of Shop_diffs
     * const count = await prisma.shop_diff.count({
     *   where: {
     *     // ... the filter for the Shop_diffs we want to count
     *   }
     * })
    **/
    count<T extends shop_diffCountArgs>(
      args?: Subset<T, shop_diffCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Shop_diffCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Shop_diff.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Shop_diffAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Shop_diffAggregateArgs>(args: Subset<T, Shop_diffAggregateArgs>): Prisma.PrismaPromise<GetShop_diffAggregateType<T>>

    /**
     * Group by Shop_diff.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Shop_diffGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Shop_diffGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Shop_diffGroupByArgs['orderBy'] }
        : { orderBy?: Shop_diffGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Shop_diffGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShop_diffGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for shop_diff.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__shop_diffClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * shop_diff base type for findUnique actions
   */
  export type shop_diffFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the shop_diff
     */
    select?: shop_diffSelect | null
    /**
     * Filter, which shop_diff to fetch.
     */
    where: shop_diffWhereUniqueInput
  }

  /**
   * shop_diff findUnique
   */
  export interface shop_diffFindUniqueArgs extends shop_diffFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * shop_diff findUniqueOrThrow
   */
  export type shop_diffFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the shop_diff
     */
    select?: shop_diffSelect | null
    /**
     * Filter, which shop_diff to fetch.
     */
    where: shop_diffWhereUniqueInput
  }


  /**
   * shop_diff base type for findFirst actions
   */
  export type shop_diffFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the shop_diff
     */
    select?: shop_diffSelect | null
    /**
     * Filter, which shop_diff to fetch.
     */
    where?: shop_diffWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of shop_diffs to fetch.
     */
    orderBy?: Enumerable<shop_diffOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for shop_diffs.
     */
    cursor?: shop_diffWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` shop_diffs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` shop_diffs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of shop_diffs.
     */
    distinct?: Enumerable<Shop_diffScalarFieldEnum>
  }

  /**
   * shop_diff findFirst
   */
  export interface shop_diffFindFirstArgs extends shop_diffFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * shop_diff findFirstOrThrow
   */
  export type shop_diffFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the shop_diff
     */
    select?: shop_diffSelect | null
    /**
     * Filter, which shop_diff to fetch.
     */
    where?: shop_diffWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of shop_diffs to fetch.
     */
    orderBy?: Enumerable<shop_diffOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for shop_diffs.
     */
    cursor?: shop_diffWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` shop_diffs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` shop_diffs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of shop_diffs.
     */
    distinct?: Enumerable<Shop_diffScalarFieldEnum>
  }


  /**
   * shop_diff findMany
   */
  export type shop_diffFindManyArgs = {
    /**
     * Select specific fields to fetch from the shop_diff
     */
    select?: shop_diffSelect | null
    /**
     * Filter, which shop_diffs to fetch.
     */
    where?: shop_diffWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of shop_diffs to fetch.
     */
    orderBy?: Enumerable<shop_diffOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing shop_diffs.
     */
    cursor?: shop_diffWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` shop_diffs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` shop_diffs.
     */
    skip?: number
    distinct?: Enumerable<Shop_diffScalarFieldEnum>
  }


  /**
   * shop_diff create
   */
  export type shop_diffCreateArgs = {
    /**
     * Select specific fields to fetch from the shop_diff
     */
    select?: shop_diffSelect | null
    /**
     * The data needed to create a shop_diff.
     */
    data: XOR<shop_diffCreateInput, shop_diffUncheckedCreateInput>
  }


  /**
   * shop_diff createMany
   */
  export type shop_diffCreateManyArgs = {
    /**
     * The data used to create many shop_diffs.
     */
    data: Enumerable<shop_diffCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * shop_diff update
   */
  export type shop_diffUpdateArgs = {
    /**
     * Select specific fields to fetch from the shop_diff
     */
    select?: shop_diffSelect | null
    /**
     * The data needed to update a shop_diff.
     */
    data: XOR<shop_diffUpdateInput, shop_diffUncheckedUpdateInput>
    /**
     * Choose, which shop_diff to update.
     */
    where: shop_diffWhereUniqueInput
  }


  /**
   * shop_diff updateMany
   */
  export type shop_diffUpdateManyArgs = {
    /**
     * The data used to update shop_diffs.
     */
    data: XOR<shop_diffUpdateManyMutationInput, shop_diffUncheckedUpdateManyInput>
    /**
     * Filter which shop_diffs to update
     */
    where?: shop_diffWhereInput
  }


  /**
   * shop_diff upsert
   */
  export type shop_diffUpsertArgs = {
    /**
     * Select specific fields to fetch from the shop_diff
     */
    select?: shop_diffSelect | null
    /**
     * The filter to search for the shop_diff to update in case it exists.
     */
    where: shop_diffWhereUniqueInput
    /**
     * In case the shop_diff found by the `where` argument doesn't exist, create a new shop_diff with this data.
     */
    create: XOR<shop_diffCreateInput, shop_diffUncheckedCreateInput>
    /**
     * In case the shop_diff was found with the provided `where` argument, update it with this data.
     */
    update: XOR<shop_diffUpdateInput, shop_diffUncheckedUpdateInput>
  }


  /**
   * shop_diff delete
   */
  export type shop_diffDeleteArgs = {
    /**
     * Select specific fields to fetch from the shop_diff
     */
    select?: shop_diffSelect | null
    /**
     * Filter which shop_diff to delete.
     */
    where: shop_diffWhereUniqueInput
  }


  /**
   * shop_diff deleteMany
   */
  export type shop_diffDeleteManyArgs = {
    /**
     * Filter which shop_diffs to delete
     */
    where?: shop_diffWhereInput
  }


  /**
   * shop_diff without action
   */
  export type shop_diffArgs = {
    /**
     * Select specific fields to fetch from the shop_diff
     */
    select?: shop_diffSelect | null
  }



  /**
   * Model statistics_online
   */


  export type AggregateStatistics_online = {
    _count: Statistics_onlineCountAggregateOutputType | null
    _avg: Statistics_onlineAvgAggregateOutputType | null
    _sum: Statistics_onlineSumAggregateOutputType | null
    _min: Statistics_onlineMinAggregateOutputType | null
    _max: Statistics_onlineMaxAggregateOutputType | null
  }

  export type Statistics_onlineAvgAggregateOutputType = {
    guid: number | null
    online: number | null
    online_alli: number | null
    online_horde: number | null
    connections: number | null
    realm: number | null
    date: number | null
  }

  export type Statistics_onlineSumAggregateOutputType = {
    guid: number | null
    online: number | null
    online_alli: number | null
    online_horde: number | null
    connections: number | null
    realm: number | null
    date: number | null
  }

  export type Statistics_onlineMinAggregateOutputType = {
    guid: number | null
    online: number | null
    online_alli: number | null
    online_horde: number | null
    connections: number | null
    realm: number | null
    date: number | null
  }

  export type Statistics_onlineMaxAggregateOutputType = {
    guid: number | null
    online: number | null
    online_alli: number | null
    online_horde: number | null
    connections: number | null
    realm: number | null
    date: number | null
  }

  export type Statistics_onlineCountAggregateOutputType = {
    guid: number
    online: number
    online_alli: number
    online_horde: number
    connections: number
    realm: number
    date: number
    _all: number
  }


  export type Statistics_onlineAvgAggregateInputType = {
    guid?: true
    online?: true
    online_alli?: true
    online_horde?: true
    connections?: true
    realm?: true
    date?: true
  }

  export type Statistics_onlineSumAggregateInputType = {
    guid?: true
    online?: true
    online_alli?: true
    online_horde?: true
    connections?: true
    realm?: true
    date?: true
  }

  export type Statistics_onlineMinAggregateInputType = {
    guid?: true
    online?: true
    online_alli?: true
    online_horde?: true
    connections?: true
    realm?: true
    date?: true
  }

  export type Statistics_onlineMaxAggregateInputType = {
    guid?: true
    online?: true
    online_alli?: true
    online_horde?: true
    connections?: true
    realm?: true
    date?: true
  }

  export type Statistics_onlineCountAggregateInputType = {
    guid?: true
    online?: true
    online_alli?: true
    online_horde?: true
    connections?: true
    realm?: true
    date?: true
    _all?: true
  }

  export type Statistics_onlineAggregateArgs = {
    /**
     * Filter which statistics_online to aggregate.
     */
    where?: statistics_onlineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of statistics_onlines to fetch.
     */
    orderBy?: Enumerable<statistics_onlineOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: statistics_onlineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` statistics_onlines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` statistics_onlines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned statistics_onlines
    **/
    _count?: true | Statistics_onlineCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Statistics_onlineAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Statistics_onlineSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Statistics_onlineMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Statistics_onlineMaxAggregateInputType
  }

  export type GetStatistics_onlineAggregateType<T extends Statistics_onlineAggregateArgs> = {
        [P in keyof T & keyof AggregateStatistics_online]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStatistics_online[P]>
      : GetScalarType<T[P], AggregateStatistics_online[P]>
  }




  export type Statistics_onlineGroupByArgs = {
    where?: statistics_onlineWhereInput
    orderBy?: Enumerable<statistics_onlineOrderByWithAggregationInput>
    by: Statistics_onlineScalarFieldEnum[]
    having?: statistics_onlineScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Statistics_onlineCountAggregateInputType | true
    _avg?: Statistics_onlineAvgAggregateInputType
    _sum?: Statistics_onlineSumAggregateInputType
    _min?: Statistics_onlineMinAggregateInputType
    _max?: Statistics_onlineMaxAggregateInputType
  }


  export type Statistics_onlineGroupByOutputType = {
    guid: number
    online: number | null
    online_alli: number | null
    online_horde: number | null
    connections: number | null
    realm: number | null
    date: number | null
    _count: Statistics_onlineCountAggregateOutputType | null
    _avg: Statistics_onlineAvgAggregateOutputType | null
    _sum: Statistics_onlineSumAggregateOutputType | null
    _min: Statistics_onlineMinAggregateOutputType | null
    _max: Statistics_onlineMaxAggregateOutputType | null
  }

  type GetStatistics_onlineGroupByPayload<T extends Statistics_onlineGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<Statistics_onlineGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Statistics_onlineGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Statistics_onlineGroupByOutputType[P]>
            : GetScalarType<T[P], Statistics_onlineGroupByOutputType[P]>
        }
      >
    >


  export type statistics_onlineSelect = {
    guid?: boolean
    online?: boolean
    online_alli?: boolean
    online_horde?: boolean
    connections?: boolean
    realm?: boolean
    date?: boolean
  }


  export type statistics_onlineGetPayload<S extends boolean | null | undefined | statistics_onlineArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? statistics_online :
    S extends undefined ? never :
    S extends { include: any } & (statistics_onlineArgs | statistics_onlineFindManyArgs)
    ? statistics_online 
    : S extends { select: any } & (statistics_onlineArgs | statistics_onlineFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof statistics_online ? statistics_online[P] : never
  } 
      : statistics_online


  type statistics_onlineCountArgs = 
    Omit<statistics_onlineFindManyArgs, 'select' | 'include'> & {
      select?: Statistics_onlineCountAggregateInputType | true
    }

  export interface statistics_onlineDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Statistics_online that matches the filter.
     * @param {statistics_onlineFindUniqueArgs} args - Arguments to find a Statistics_online
     * @example
     * // Get one Statistics_online
     * const statistics_online = await prisma.statistics_online.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends statistics_onlineFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, statistics_onlineFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'statistics_online'> extends True ? Prisma__statistics_onlineClient<statistics_onlineGetPayload<T>> : Prisma__statistics_onlineClient<statistics_onlineGetPayload<T> | null, null>

    /**
     * Find one Statistics_online that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {statistics_onlineFindUniqueOrThrowArgs} args - Arguments to find a Statistics_online
     * @example
     * // Get one Statistics_online
     * const statistics_online = await prisma.statistics_online.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends statistics_onlineFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, statistics_onlineFindUniqueOrThrowArgs>
    ): Prisma__statistics_onlineClient<statistics_onlineGetPayload<T>>

    /**
     * Find the first Statistics_online that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {statistics_onlineFindFirstArgs} args - Arguments to find a Statistics_online
     * @example
     * // Get one Statistics_online
     * const statistics_online = await prisma.statistics_online.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends statistics_onlineFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, statistics_onlineFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'statistics_online'> extends True ? Prisma__statistics_onlineClient<statistics_onlineGetPayload<T>> : Prisma__statistics_onlineClient<statistics_onlineGetPayload<T> | null, null>

    /**
     * Find the first Statistics_online that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {statistics_onlineFindFirstOrThrowArgs} args - Arguments to find a Statistics_online
     * @example
     * // Get one Statistics_online
     * const statistics_online = await prisma.statistics_online.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends statistics_onlineFindFirstOrThrowArgs>(
      args?: SelectSubset<T, statistics_onlineFindFirstOrThrowArgs>
    ): Prisma__statistics_onlineClient<statistics_onlineGetPayload<T>>

    /**
     * Find zero or more Statistics_onlines that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {statistics_onlineFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Statistics_onlines
     * const statistics_onlines = await prisma.statistics_online.findMany()
     * 
     * // Get first 10 Statistics_onlines
     * const statistics_onlines = await prisma.statistics_online.findMany({ take: 10 })
     * 
     * // Only select the `guid`
     * const statistics_onlineWithGuidOnly = await prisma.statistics_online.findMany({ select: { guid: true } })
     * 
    **/
    findMany<T extends statistics_onlineFindManyArgs>(
      args?: SelectSubset<T, statistics_onlineFindManyArgs>
    ): Prisma.PrismaPromise<Array<statistics_onlineGetPayload<T>>>

    /**
     * Create a Statistics_online.
     * @param {statistics_onlineCreateArgs} args - Arguments to create a Statistics_online.
     * @example
     * // Create one Statistics_online
     * const Statistics_online = await prisma.statistics_online.create({
     *   data: {
     *     // ... data to create a Statistics_online
     *   }
     * })
     * 
    **/
    create<T extends statistics_onlineCreateArgs>(
      args: SelectSubset<T, statistics_onlineCreateArgs>
    ): Prisma__statistics_onlineClient<statistics_onlineGetPayload<T>>

    /**
     * Create many Statistics_onlines.
     *     @param {statistics_onlineCreateManyArgs} args - Arguments to create many Statistics_onlines.
     *     @example
     *     // Create many Statistics_onlines
     *     const statistics_online = await prisma.statistics_online.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends statistics_onlineCreateManyArgs>(
      args?: SelectSubset<T, statistics_onlineCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Statistics_online.
     * @param {statistics_onlineDeleteArgs} args - Arguments to delete one Statistics_online.
     * @example
     * // Delete one Statistics_online
     * const Statistics_online = await prisma.statistics_online.delete({
     *   where: {
     *     // ... filter to delete one Statistics_online
     *   }
     * })
     * 
    **/
    delete<T extends statistics_onlineDeleteArgs>(
      args: SelectSubset<T, statistics_onlineDeleteArgs>
    ): Prisma__statistics_onlineClient<statistics_onlineGetPayload<T>>

    /**
     * Update one Statistics_online.
     * @param {statistics_onlineUpdateArgs} args - Arguments to update one Statistics_online.
     * @example
     * // Update one Statistics_online
     * const statistics_online = await prisma.statistics_online.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends statistics_onlineUpdateArgs>(
      args: SelectSubset<T, statistics_onlineUpdateArgs>
    ): Prisma__statistics_onlineClient<statistics_onlineGetPayload<T>>

    /**
     * Delete zero or more Statistics_onlines.
     * @param {statistics_onlineDeleteManyArgs} args - Arguments to filter Statistics_onlines to delete.
     * @example
     * // Delete a few Statistics_onlines
     * const { count } = await prisma.statistics_online.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends statistics_onlineDeleteManyArgs>(
      args?: SelectSubset<T, statistics_onlineDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Statistics_onlines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {statistics_onlineUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Statistics_onlines
     * const statistics_online = await prisma.statistics_online.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends statistics_onlineUpdateManyArgs>(
      args: SelectSubset<T, statistics_onlineUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Statistics_online.
     * @param {statistics_onlineUpsertArgs} args - Arguments to update or create a Statistics_online.
     * @example
     * // Update or create a Statistics_online
     * const statistics_online = await prisma.statistics_online.upsert({
     *   create: {
     *     // ... data to create a Statistics_online
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Statistics_online we want to update
     *   }
     * })
    **/
    upsert<T extends statistics_onlineUpsertArgs>(
      args: SelectSubset<T, statistics_onlineUpsertArgs>
    ): Prisma__statistics_onlineClient<statistics_onlineGetPayload<T>>

    /**
     * Count the number of Statistics_onlines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {statistics_onlineCountArgs} args - Arguments to filter Statistics_onlines to count.
     * @example
     * // Count the number of Statistics_onlines
     * const count = await prisma.statistics_online.count({
     *   where: {
     *     // ... the filter for the Statistics_onlines we want to count
     *   }
     * })
    **/
    count<T extends statistics_onlineCountArgs>(
      args?: Subset<T, statistics_onlineCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Statistics_onlineCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Statistics_online.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Statistics_onlineAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Statistics_onlineAggregateArgs>(args: Subset<T, Statistics_onlineAggregateArgs>): Prisma.PrismaPromise<GetStatistics_onlineAggregateType<T>>

    /**
     * Group by Statistics_online.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Statistics_onlineGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Statistics_onlineGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Statistics_onlineGroupByArgs['orderBy'] }
        : { orderBy?: Statistics_onlineGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Statistics_onlineGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStatistics_onlineGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for statistics_online.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__statistics_onlineClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * statistics_online base type for findUnique actions
   */
  export type statistics_onlineFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the statistics_online
     */
    select?: statistics_onlineSelect | null
    /**
     * Filter, which statistics_online to fetch.
     */
    where: statistics_onlineWhereUniqueInput
  }

  /**
   * statistics_online findUnique
   */
  export interface statistics_onlineFindUniqueArgs extends statistics_onlineFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * statistics_online findUniqueOrThrow
   */
  export type statistics_onlineFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the statistics_online
     */
    select?: statistics_onlineSelect | null
    /**
     * Filter, which statistics_online to fetch.
     */
    where: statistics_onlineWhereUniqueInput
  }


  /**
   * statistics_online base type for findFirst actions
   */
  export type statistics_onlineFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the statistics_online
     */
    select?: statistics_onlineSelect | null
    /**
     * Filter, which statistics_online to fetch.
     */
    where?: statistics_onlineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of statistics_onlines to fetch.
     */
    orderBy?: Enumerable<statistics_onlineOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for statistics_onlines.
     */
    cursor?: statistics_onlineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` statistics_onlines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` statistics_onlines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of statistics_onlines.
     */
    distinct?: Enumerable<Statistics_onlineScalarFieldEnum>
  }

  /**
   * statistics_online findFirst
   */
  export interface statistics_onlineFindFirstArgs extends statistics_onlineFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * statistics_online findFirstOrThrow
   */
  export type statistics_onlineFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the statistics_online
     */
    select?: statistics_onlineSelect | null
    /**
     * Filter, which statistics_online to fetch.
     */
    where?: statistics_onlineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of statistics_onlines to fetch.
     */
    orderBy?: Enumerable<statistics_onlineOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for statistics_onlines.
     */
    cursor?: statistics_onlineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` statistics_onlines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` statistics_onlines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of statistics_onlines.
     */
    distinct?: Enumerable<Statistics_onlineScalarFieldEnum>
  }


  /**
   * statistics_online findMany
   */
  export type statistics_onlineFindManyArgs = {
    /**
     * Select specific fields to fetch from the statistics_online
     */
    select?: statistics_onlineSelect | null
    /**
     * Filter, which statistics_onlines to fetch.
     */
    where?: statistics_onlineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of statistics_onlines to fetch.
     */
    orderBy?: Enumerable<statistics_onlineOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing statistics_onlines.
     */
    cursor?: statistics_onlineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` statistics_onlines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` statistics_onlines.
     */
    skip?: number
    distinct?: Enumerable<Statistics_onlineScalarFieldEnum>
  }


  /**
   * statistics_online create
   */
  export type statistics_onlineCreateArgs = {
    /**
     * Select specific fields to fetch from the statistics_online
     */
    select?: statistics_onlineSelect | null
    /**
     * The data needed to create a statistics_online.
     */
    data: XOR<statistics_onlineCreateInput, statistics_onlineUncheckedCreateInput>
  }


  /**
   * statistics_online createMany
   */
  export type statistics_onlineCreateManyArgs = {
    /**
     * The data used to create many statistics_onlines.
     */
    data: Enumerable<statistics_onlineCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * statistics_online update
   */
  export type statistics_onlineUpdateArgs = {
    /**
     * Select specific fields to fetch from the statistics_online
     */
    select?: statistics_onlineSelect | null
    /**
     * The data needed to update a statistics_online.
     */
    data: XOR<statistics_onlineUpdateInput, statistics_onlineUncheckedUpdateInput>
    /**
     * Choose, which statistics_online to update.
     */
    where: statistics_onlineWhereUniqueInput
  }


  /**
   * statistics_online updateMany
   */
  export type statistics_onlineUpdateManyArgs = {
    /**
     * The data used to update statistics_onlines.
     */
    data: XOR<statistics_onlineUpdateManyMutationInput, statistics_onlineUncheckedUpdateManyInput>
    /**
     * Filter which statistics_onlines to update
     */
    where?: statistics_onlineWhereInput
  }


  /**
   * statistics_online upsert
   */
  export type statistics_onlineUpsertArgs = {
    /**
     * Select specific fields to fetch from the statistics_online
     */
    select?: statistics_onlineSelect | null
    /**
     * The filter to search for the statistics_online to update in case it exists.
     */
    where: statistics_onlineWhereUniqueInput
    /**
     * In case the statistics_online found by the `where` argument doesn't exist, create a new statistics_online with this data.
     */
    create: XOR<statistics_onlineCreateInput, statistics_onlineUncheckedCreateInput>
    /**
     * In case the statistics_online was found with the provided `where` argument, update it with this data.
     */
    update: XOR<statistics_onlineUpdateInput, statistics_onlineUncheckedUpdateInput>
  }


  /**
   * statistics_online delete
   */
  export type statistics_onlineDeleteArgs = {
    /**
     * Select specific fields to fetch from the statistics_online
     */
    select?: statistics_onlineSelect | null
    /**
     * Filter which statistics_online to delete.
     */
    where: statistics_onlineWhereUniqueInput
  }


  /**
   * statistics_online deleteMany
   */
  export type statistics_onlineDeleteManyArgs = {
    /**
     * Filter which statistics_onlines to delete
     */
    where?: statistics_onlineWhereInput
  }


  /**
   * statistics_online without action
   */
  export type statistics_onlineArgs = {
    /**
     * Select specific fields to fetch from the statistics_online
     */
    select?: statistics_onlineSelect | null
  }



  /**
   * Model system_fingerprint_usage
   */


  export type AggregateSystem_fingerprint_usage = {
    _count: System_fingerprint_usageCountAggregateOutputType | null
    _avg: System_fingerprint_usageAvgAggregateOutputType | null
    _sum: System_fingerprint_usageSumAggregateOutputType | null
    _min: System_fingerprint_usageMinAggregateOutputType | null
    _max: System_fingerprint_usageMaxAggregateOutputType | null
  }

  export type System_fingerprint_usageAvgAggregateOutputType = {
    id: number | null
    fingerprint: number | null
    account: number | null
    realm: number | null
    activecpus: number | null
    totalcpus: number | null
    pagesize: number | null
  }

  export type System_fingerprint_usageSumAggregateOutputType = {
    id: number | null
    fingerprint: number | null
    account: number | null
    realm: number | null
    activecpus: number | null
    totalcpus: number | null
    pagesize: number | null
  }

  export type System_fingerprint_usageMinAggregateOutputType = {
    id: number | null
    fingerprint: number | null
    account: number | null
    ip: string | null
    realm: number | null
    time: Date | null
    architecture: string | null
    cputype: string | null
    activecpus: number | null
    totalcpus: number | null
    pagesize: number | null
  }

  export type System_fingerprint_usageMaxAggregateOutputType = {
    id: number | null
    fingerprint: number | null
    account: number | null
    ip: string | null
    realm: number | null
    time: Date | null
    architecture: string | null
    cputype: string | null
    activecpus: number | null
    totalcpus: number | null
    pagesize: number | null
  }

  export type System_fingerprint_usageCountAggregateOutputType = {
    id: number
    fingerprint: number
    account: number
    ip: number
    realm: number
    time: number
    architecture: number
    cputype: number
    activecpus: number
    totalcpus: number
    pagesize: number
    _all: number
  }


  export type System_fingerprint_usageAvgAggregateInputType = {
    id?: true
    fingerprint?: true
    account?: true
    realm?: true
    activecpus?: true
    totalcpus?: true
    pagesize?: true
  }

  export type System_fingerprint_usageSumAggregateInputType = {
    id?: true
    fingerprint?: true
    account?: true
    realm?: true
    activecpus?: true
    totalcpus?: true
    pagesize?: true
  }

  export type System_fingerprint_usageMinAggregateInputType = {
    id?: true
    fingerprint?: true
    account?: true
    ip?: true
    realm?: true
    time?: true
    architecture?: true
    cputype?: true
    activecpus?: true
    totalcpus?: true
    pagesize?: true
  }

  export type System_fingerprint_usageMaxAggregateInputType = {
    id?: true
    fingerprint?: true
    account?: true
    ip?: true
    realm?: true
    time?: true
    architecture?: true
    cputype?: true
    activecpus?: true
    totalcpus?: true
    pagesize?: true
  }

  export type System_fingerprint_usageCountAggregateInputType = {
    id?: true
    fingerprint?: true
    account?: true
    ip?: true
    realm?: true
    time?: true
    architecture?: true
    cputype?: true
    activecpus?: true
    totalcpus?: true
    pagesize?: true
    _all?: true
  }

  export type System_fingerprint_usageAggregateArgs = {
    /**
     * Filter which system_fingerprint_usage to aggregate.
     */
    where?: system_fingerprint_usageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of system_fingerprint_usages to fetch.
     */
    orderBy?: Enumerable<system_fingerprint_usageOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: system_fingerprint_usageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` system_fingerprint_usages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` system_fingerprint_usages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned system_fingerprint_usages
    **/
    _count?: true | System_fingerprint_usageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: System_fingerprint_usageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: System_fingerprint_usageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: System_fingerprint_usageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: System_fingerprint_usageMaxAggregateInputType
  }

  export type GetSystem_fingerprint_usageAggregateType<T extends System_fingerprint_usageAggregateArgs> = {
        [P in keyof T & keyof AggregateSystem_fingerprint_usage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSystem_fingerprint_usage[P]>
      : GetScalarType<T[P], AggregateSystem_fingerprint_usage[P]>
  }




  export type System_fingerprint_usageGroupByArgs = {
    where?: system_fingerprint_usageWhereInput
    orderBy?: Enumerable<system_fingerprint_usageOrderByWithAggregationInput>
    by: System_fingerprint_usageScalarFieldEnum[]
    having?: system_fingerprint_usageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: System_fingerprint_usageCountAggregateInputType | true
    _avg?: System_fingerprint_usageAvgAggregateInputType
    _sum?: System_fingerprint_usageSumAggregateInputType
    _min?: System_fingerprint_usageMinAggregateInputType
    _max?: System_fingerprint_usageMaxAggregateInputType
  }


  export type System_fingerprint_usageGroupByOutputType = {
    id: number
    fingerprint: number
    account: number
    ip: string
    realm: number
    time: Date
    architecture: string | null
    cputype: string | null
    activecpus: number | null
    totalcpus: number | null
    pagesize: number | null
    _count: System_fingerprint_usageCountAggregateOutputType | null
    _avg: System_fingerprint_usageAvgAggregateOutputType | null
    _sum: System_fingerprint_usageSumAggregateOutputType | null
    _min: System_fingerprint_usageMinAggregateOutputType | null
    _max: System_fingerprint_usageMaxAggregateOutputType | null
  }

  type GetSystem_fingerprint_usageGroupByPayload<T extends System_fingerprint_usageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<System_fingerprint_usageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof System_fingerprint_usageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], System_fingerprint_usageGroupByOutputType[P]>
            : GetScalarType<T[P], System_fingerprint_usageGroupByOutputType[P]>
        }
      >
    >


  export type system_fingerprint_usageSelect = {
    id?: boolean
    fingerprint?: boolean
    account?: boolean
    ip?: boolean
    realm?: boolean
    time?: boolean
    architecture?: boolean
    cputype?: boolean
    activecpus?: boolean
    totalcpus?: boolean
    pagesize?: boolean
  }


  export type system_fingerprint_usageGetPayload<S extends boolean | null | undefined | system_fingerprint_usageArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? system_fingerprint_usage :
    S extends undefined ? never :
    S extends { include: any } & (system_fingerprint_usageArgs | system_fingerprint_usageFindManyArgs)
    ? system_fingerprint_usage 
    : S extends { select: any } & (system_fingerprint_usageArgs | system_fingerprint_usageFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof system_fingerprint_usage ? system_fingerprint_usage[P] : never
  } 
      : system_fingerprint_usage


  type system_fingerprint_usageCountArgs = 
    Omit<system_fingerprint_usageFindManyArgs, 'select' | 'include'> & {
      select?: System_fingerprint_usageCountAggregateInputType | true
    }

  export interface system_fingerprint_usageDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one System_fingerprint_usage that matches the filter.
     * @param {system_fingerprint_usageFindUniqueArgs} args - Arguments to find a System_fingerprint_usage
     * @example
     * // Get one System_fingerprint_usage
     * const system_fingerprint_usage = await prisma.system_fingerprint_usage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends system_fingerprint_usageFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, system_fingerprint_usageFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'system_fingerprint_usage'> extends True ? Prisma__system_fingerprint_usageClient<system_fingerprint_usageGetPayload<T>> : Prisma__system_fingerprint_usageClient<system_fingerprint_usageGetPayload<T> | null, null>

    /**
     * Find one System_fingerprint_usage that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {system_fingerprint_usageFindUniqueOrThrowArgs} args - Arguments to find a System_fingerprint_usage
     * @example
     * // Get one System_fingerprint_usage
     * const system_fingerprint_usage = await prisma.system_fingerprint_usage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends system_fingerprint_usageFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, system_fingerprint_usageFindUniqueOrThrowArgs>
    ): Prisma__system_fingerprint_usageClient<system_fingerprint_usageGetPayload<T>>

    /**
     * Find the first System_fingerprint_usage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {system_fingerprint_usageFindFirstArgs} args - Arguments to find a System_fingerprint_usage
     * @example
     * // Get one System_fingerprint_usage
     * const system_fingerprint_usage = await prisma.system_fingerprint_usage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends system_fingerprint_usageFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, system_fingerprint_usageFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'system_fingerprint_usage'> extends True ? Prisma__system_fingerprint_usageClient<system_fingerprint_usageGetPayload<T>> : Prisma__system_fingerprint_usageClient<system_fingerprint_usageGetPayload<T> | null, null>

    /**
     * Find the first System_fingerprint_usage that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {system_fingerprint_usageFindFirstOrThrowArgs} args - Arguments to find a System_fingerprint_usage
     * @example
     * // Get one System_fingerprint_usage
     * const system_fingerprint_usage = await prisma.system_fingerprint_usage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends system_fingerprint_usageFindFirstOrThrowArgs>(
      args?: SelectSubset<T, system_fingerprint_usageFindFirstOrThrowArgs>
    ): Prisma__system_fingerprint_usageClient<system_fingerprint_usageGetPayload<T>>

    /**
     * Find zero or more System_fingerprint_usages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {system_fingerprint_usageFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all System_fingerprint_usages
     * const system_fingerprint_usages = await prisma.system_fingerprint_usage.findMany()
     * 
     * // Get first 10 System_fingerprint_usages
     * const system_fingerprint_usages = await prisma.system_fingerprint_usage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const system_fingerprint_usageWithIdOnly = await prisma.system_fingerprint_usage.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends system_fingerprint_usageFindManyArgs>(
      args?: SelectSubset<T, system_fingerprint_usageFindManyArgs>
    ): Prisma.PrismaPromise<Array<system_fingerprint_usageGetPayload<T>>>

    /**
     * Create a System_fingerprint_usage.
     * @param {system_fingerprint_usageCreateArgs} args - Arguments to create a System_fingerprint_usage.
     * @example
     * // Create one System_fingerprint_usage
     * const System_fingerprint_usage = await prisma.system_fingerprint_usage.create({
     *   data: {
     *     // ... data to create a System_fingerprint_usage
     *   }
     * })
     * 
    **/
    create<T extends system_fingerprint_usageCreateArgs>(
      args: SelectSubset<T, system_fingerprint_usageCreateArgs>
    ): Prisma__system_fingerprint_usageClient<system_fingerprint_usageGetPayload<T>>

    /**
     * Create many System_fingerprint_usages.
     *     @param {system_fingerprint_usageCreateManyArgs} args - Arguments to create many System_fingerprint_usages.
     *     @example
     *     // Create many System_fingerprint_usages
     *     const system_fingerprint_usage = await prisma.system_fingerprint_usage.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends system_fingerprint_usageCreateManyArgs>(
      args?: SelectSubset<T, system_fingerprint_usageCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a System_fingerprint_usage.
     * @param {system_fingerprint_usageDeleteArgs} args - Arguments to delete one System_fingerprint_usage.
     * @example
     * // Delete one System_fingerprint_usage
     * const System_fingerprint_usage = await prisma.system_fingerprint_usage.delete({
     *   where: {
     *     // ... filter to delete one System_fingerprint_usage
     *   }
     * })
     * 
    **/
    delete<T extends system_fingerprint_usageDeleteArgs>(
      args: SelectSubset<T, system_fingerprint_usageDeleteArgs>
    ): Prisma__system_fingerprint_usageClient<system_fingerprint_usageGetPayload<T>>

    /**
     * Update one System_fingerprint_usage.
     * @param {system_fingerprint_usageUpdateArgs} args - Arguments to update one System_fingerprint_usage.
     * @example
     * // Update one System_fingerprint_usage
     * const system_fingerprint_usage = await prisma.system_fingerprint_usage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends system_fingerprint_usageUpdateArgs>(
      args: SelectSubset<T, system_fingerprint_usageUpdateArgs>
    ): Prisma__system_fingerprint_usageClient<system_fingerprint_usageGetPayload<T>>

    /**
     * Delete zero or more System_fingerprint_usages.
     * @param {system_fingerprint_usageDeleteManyArgs} args - Arguments to filter System_fingerprint_usages to delete.
     * @example
     * // Delete a few System_fingerprint_usages
     * const { count } = await prisma.system_fingerprint_usage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends system_fingerprint_usageDeleteManyArgs>(
      args?: SelectSubset<T, system_fingerprint_usageDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more System_fingerprint_usages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {system_fingerprint_usageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many System_fingerprint_usages
     * const system_fingerprint_usage = await prisma.system_fingerprint_usage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends system_fingerprint_usageUpdateManyArgs>(
      args: SelectSubset<T, system_fingerprint_usageUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one System_fingerprint_usage.
     * @param {system_fingerprint_usageUpsertArgs} args - Arguments to update or create a System_fingerprint_usage.
     * @example
     * // Update or create a System_fingerprint_usage
     * const system_fingerprint_usage = await prisma.system_fingerprint_usage.upsert({
     *   create: {
     *     // ... data to create a System_fingerprint_usage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the System_fingerprint_usage we want to update
     *   }
     * })
    **/
    upsert<T extends system_fingerprint_usageUpsertArgs>(
      args: SelectSubset<T, system_fingerprint_usageUpsertArgs>
    ): Prisma__system_fingerprint_usageClient<system_fingerprint_usageGetPayload<T>>

    /**
     * Count the number of System_fingerprint_usages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {system_fingerprint_usageCountArgs} args - Arguments to filter System_fingerprint_usages to count.
     * @example
     * // Count the number of System_fingerprint_usages
     * const count = await prisma.system_fingerprint_usage.count({
     *   where: {
     *     // ... the filter for the System_fingerprint_usages we want to count
     *   }
     * })
    **/
    count<T extends system_fingerprint_usageCountArgs>(
      args?: Subset<T, system_fingerprint_usageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], System_fingerprint_usageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a System_fingerprint_usage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {System_fingerprint_usageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends System_fingerprint_usageAggregateArgs>(args: Subset<T, System_fingerprint_usageAggregateArgs>): Prisma.PrismaPromise<GetSystem_fingerprint_usageAggregateType<T>>

    /**
     * Group by System_fingerprint_usage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {System_fingerprint_usageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends System_fingerprint_usageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: System_fingerprint_usageGroupByArgs['orderBy'] }
        : { orderBy?: System_fingerprint_usageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, System_fingerprint_usageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSystem_fingerprint_usageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for system_fingerprint_usage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__system_fingerprint_usageClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * system_fingerprint_usage base type for findUnique actions
   */
  export type system_fingerprint_usageFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the system_fingerprint_usage
     */
    select?: system_fingerprint_usageSelect | null
    /**
     * Filter, which system_fingerprint_usage to fetch.
     */
    where: system_fingerprint_usageWhereUniqueInput
  }

  /**
   * system_fingerprint_usage findUnique
   */
  export interface system_fingerprint_usageFindUniqueArgs extends system_fingerprint_usageFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * system_fingerprint_usage findUniqueOrThrow
   */
  export type system_fingerprint_usageFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the system_fingerprint_usage
     */
    select?: system_fingerprint_usageSelect | null
    /**
     * Filter, which system_fingerprint_usage to fetch.
     */
    where: system_fingerprint_usageWhereUniqueInput
  }


  /**
   * system_fingerprint_usage base type for findFirst actions
   */
  export type system_fingerprint_usageFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the system_fingerprint_usage
     */
    select?: system_fingerprint_usageSelect | null
    /**
     * Filter, which system_fingerprint_usage to fetch.
     */
    where?: system_fingerprint_usageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of system_fingerprint_usages to fetch.
     */
    orderBy?: Enumerable<system_fingerprint_usageOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for system_fingerprint_usages.
     */
    cursor?: system_fingerprint_usageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` system_fingerprint_usages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` system_fingerprint_usages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of system_fingerprint_usages.
     */
    distinct?: Enumerable<System_fingerprint_usageScalarFieldEnum>
  }

  /**
   * system_fingerprint_usage findFirst
   */
  export interface system_fingerprint_usageFindFirstArgs extends system_fingerprint_usageFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * system_fingerprint_usage findFirstOrThrow
   */
  export type system_fingerprint_usageFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the system_fingerprint_usage
     */
    select?: system_fingerprint_usageSelect | null
    /**
     * Filter, which system_fingerprint_usage to fetch.
     */
    where?: system_fingerprint_usageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of system_fingerprint_usages to fetch.
     */
    orderBy?: Enumerable<system_fingerprint_usageOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for system_fingerprint_usages.
     */
    cursor?: system_fingerprint_usageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` system_fingerprint_usages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` system_fingerprint_usages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of system_fingerprint_usages.
     */
    distinct?: Enumerable<System_fingerprint_usageScalarFieldEnum>
  }


  /**
   * system_fingerprint_usage findMany
   */
  export type system_fingerprint_usageFindManyArgs = {
    /**
     * Select specific fields to fetch from the system_fingerprint_usage
     */
    select?: system_fingerprint_usageSelect | null
    /**
     * Filter, which system_fingerprint_usages to fetch.
     */
    where?: system_fingerprint_usageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of system_fingerprint_usages to fetch.
     */
    orderBy?: Enumerable<system_fingerprint_usageOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing system_fingerprint_usages.
     */
    cursor?: system_fingerprint_usageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` system_fingerprint_usages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` system_fingerprint_usages.
     */
    skip?: number
    distinct?: Enumerable<System_fingerprint_usageScalarFieldEnum>
  }


  /**
   * system_fingerprint_usage create
   */
  export type system_fingerprint_usageCreateArgs = {
    /**
     * Select specific fields to fetch from the system_fingerprint_usage
     */
    select?: system_fingerprint_usageSelect | null
    /**
     * The data needed to create a system_fingerprint_usage.
     */
    data: XOR<system_fingerprint_usageCreateInput, system_fingerprint_usageUncheckedCreateInput>
  }


  /**
   * system_fingerprint_usage createMany
   */
  export type system_fingerprint_usageCreateManyArgs = {
    /**
     * The data used to create many system_fingerprint_usages.
     */
    data: Enumerable<system_fingerprint_usageCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * system_fingerprint_usage update
   */
  export type system_fingerprint_usageUpdateArgs = {
    /**
     * Select specific fields to fetch from the system_fingerprint_usage
     */
    select?: system_fingerprint_usageSelect | null
    /**
     * The data needed to update a system_fingerprint_usage.
     */
    data: XOR<system_fingerprint_usageUpdateInput, system_fingerprint_usageUncheckedUpdateInput>
    /**
     * Choose, which system_fingerprint_usage to update.
     */
    where: system_fingerprint_usageWhereUniqueInput
  }


  /**
   * system_fingerprint_usage updateMany
   */
  export type system_fingerprint_usageUpdateManyArgs = {
    /**
     * The data used to update system_fingerprint_usages.
     */
    data: XOR<system_fingerprint_usageUpdateManyMutationInput, system_fingerprint_usageUncheckedUpdateManyInput>
    /**
     * Filter which system_fingerprint_usages to update
     */
    where?: system_fingerprint_usageWhereInput
  }


  /**
   * system_fingerprint_usage upsert
   */
  export type system_fingerprint_usageUpsertArgs = {
    /**
     * Select specific fields to fetch from the system_fingerprint_usage
     */
    select?: system_fingerprint_usageSelect | null
    /**
     * The filter to search for the system_fingerprint_usage to update in case it exists.
     */
    where: system_fingerprint_usageWhereUniqueInput
    /**
     * In case the system_fingerprint_usage found by the `where` argument doesn't exist, create a new system_fingerprint_usage with this data.
     */
    create: XOR<system_fingerprint_usageCreateInput, system_fingerprint_usageUncheckedCreateInput>
    /**
     * In case the system_fingerprint_usage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<system_fingerprint_usageUpdateInput, system_fingerprint_usageUncheckedUpdateInput>
  }


  /**
   * system_fingerprint_usage delete
   */
  export type system_fingerprint_usageDeleteArgs = {
    /**
     * Select specific fields to fetch from the system_fingerprint_usage
     */
    select?: system_fingerprint_usageSelect | null
    /**
     * Filter which system_fingerprint_usage to delete.
     */
    where: system_fingerprint_usageWhereUniqueInput
  }


  /**
   * system_fingerprint_usage deleteMany
   */
  export type system_fingerprint_usageDeleteManyArgs = {
    /**
     * Filter which system_fingerprint_usages to delete
     */
    where?: system_fingerprint_usageWhereInput
  }


  /**
   * system_fingerprint_usage without action
   */
  export type system_fingerprint_usageArgs = {
    /**
     * Select specific fields to fetch from the system_fingerprint_usage
     */
    select?: system_fingerprint_usageSelect | null
  }



  /**
   * Model uptime
   */


  export type AggregateUptime = {
    _count: UptimeCountAggregateOutputType | null
    _avg: UptimeAvgAggregateOutputType | null
    _sum: UptimeSumAggregateOutputType | null
    _min: UptimeMinAggregateOutputType | null
    _max: UptimeMaxAggregateOutputType | null
  }

  export type UptimeAvgAggregateOutputType = {
    realmid: number | null
    starttime: number | null
    uptime: number | null
    onlineplayers: number | null
    maxplayers: number | null
  }

  export type UptimeSumAggregateOutputType = {
    realmid: number | null
    starttime: bigint | null
    uptime: bigint | null
    onlineplayers: number | null
    maxplayers: number | null
  }

  export type UptimeMinAggregateOutputType = {
    realmid: number | null
    starttime: bigint | null
    startstring: string | null
    uptime: bigint | null
    onlineplayers: number | null
    maxplayers: number | null
    revision: string | null
  }

  export type UptimeMaxAggregateOutputType = {
    realmid: number | null
    starttime: bigint | null
    startstring: string | null
    uptime: bigint | null
    onlineplayers: number | null
    maxplayers: number | null
    revision: string | null
  }

  export type UptimeCountAggregateOutputType = {
    realmid: number
    starttime: number
    startstring: number
    uptime: number
    onlineplayers: number
    maxplayers: number
    revision: number
    _all: number
  }


  export type UptimeAvgAggregateInputType = {
    realmid?: true
    starttime?: true
    uptime?: true
    onlineplayers?: true
    maxplayers?: true
  }

  export type UptimeSumAggregateInputType = {
    realmid?: true
    starttime?: true
    uptime?: true
    onlineplayers?: true
    maxplayers?: true
  }

  export type UptimeMinAggregateInputType = {
    realmid?: true
    starttime?: true
    startstring?: true
    uptime?: true
    onlineplayers?: true
    maxplayers?: true
    revision?: true
  }

  export type UptimeMaxAggregateInputType = {
    realmid?: true
    starttime?: true
    startstring?: true
    uptime?: true
    onlineplayers?: true
    maxplayers?: true
    revision?: true
  }

  export type UptimeCountAggregateInputType = {
    realmid?: true
    starttime?: true
    startstring?: true
    uptime?: true
    onlineplayers?: true
    maxplayers?: true
    revision?: true
    _all?: true
  }

  export type UptimeAggregateArgs = {
    /**
     * Filter which uptime to aggregate.
     */
    where?: uptimeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of uptimes to fetch.
     */
    orderBy?: Enumerable<uptimeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: uptimeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` uptimes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` uptimes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned uptimes
    **/
    _count?: true | UptimeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UptimeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UptimeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UptimeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UptimeMaxAggregateInputType
  }

  export type GetUptimeAggregateType<T extends UptimeAggregateArgs> = {
        [P in keyof T & keyof AggregateUptime]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUptime[P]>
      : GetScalarType<T[P], AggregateUptime[P]>
  }




  export type UptimeGroupByArgs = {
    where?: uptimeWhereInput
    orderBy?: Enumerable<uptimeOrderByWithAggregationInput>
    by: UptimeScalarFieldEnum[]
    having?: uptimeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UptimeCountAggregateInputType | true
    _avg?: UptimeAvgAggregateInputType
    _sum?: UptimeSumAggregateInputType
    _min?: UptimeMinAggregateInputType
    _max?: UptimeMaxAggregateInputType
  }


  export type UptimeGroupByOutputType = {
    realmid: number
    starttime: bigint
    startstring: string
    uptime: bigint
    onlineplayers: number
    maxplayers: number
    revision: string
    _count: UptimeCountAggregateOutputType | null
    _avg: UptimeAvgAggregateOutputType | null
    _sum: UptimeSumAggregateOutputType | null
    _min: UptimeMinAggregateOutputType | null
    _max: UptimeMaxAggregateOutputType | null
  }

  type GetUptimeGroupByPayload<T extends UptimeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<UptimeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UptimeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UptimeGroupByOutputType[P]>
            : GetScalarType<T[P], UptimeGroupByOutputType[P]>
        }
      >
    >


  export type uptimeSelect = {
    realmid?: boolean
    starttime?: boolean
    startstring?: boolean
    uptime?: boolean
    onlineplayers?: boolean
    maxplayers?: boolean
    revision?: boolean
  }


  export type uptimeGetPayload<S extends boolean | null | undefined | uptimeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? uptime :
    S extends undefined ? never :
    S extends { include: any } & (uptimeArgs | uptimeFindManyArgs)
    ? uptime 
    : S extends { select: any } & (uptimeArgs | uptimeFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof uptime ? uptime[P] : never
  } 
      : uptime


  type uptimeCountArgs = 
    Omit<uptimeFindManyArgs, 'select' | 'include'> & {
      select?: UptimeCountAggregateInputType | true
    }

  export interface uptimeDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Uptime that matches the filter.
     * @param {uptimeFindUniqueArgs} args - Arguments to find a Uptime
     * @example
     * // Get one Uptime
     * const uptime = await prisma.uptime.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends uptimeFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, uptimeFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'uptime'> extends True ? Prisma__uptimeClient<uptimeGetPayload<T>> : Prisma__uptimeClient<uptimeGetPayload<T> | null, null>

    /**
     * Find one Uptime that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {uptimeFindUniqueOrThrowArgs} args - Arguments to find a Uptime
     * @example
     * // Get one Uptime
     * const uptime = await prisma.uptime.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends uptimeFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, uptimeFindUniqueOrThrowArgs>
    ): Prisma__uptimeClient<uptimeGetPayload<T>>

    /**
     * Find the first Uptime that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {uptimeFindFirstArgs} args - Arguments to find a Uptime
     * @example
     * // Get one Uptime
     * const uptime = await prisma.uptime.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends uptimeFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, uptimeFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'uptime'> extends True ? Prisma__uptimeClient<uptimeGetPayload<T>> : Prisma__uptimeClient<uptimeGetPayload<T> | null, null>

    /**
     * Find the first Uptime that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {uptimeFindFirstOrThrowArgs} args - Arguments to find a Uptime
     * @example
     * // Get one Uptime
     * const uptime = await prisma.uptime.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends uptimeFindFirstOrThrowArgs>(
      args?: SelectSubset<T, uptimeFindFirstOrThrowArgs>
    ): Prisma__uptimeClient<uptimeGetPayload<T>>

    /**
     * Find zero or more Uptimes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {uptimeFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Uptimes
     * const uptimes = await prisma.uptime.findMany()
     * 
     * // Get first 10 Uptimes
     * const uptimes = await prisma.uptime.findMany({ take: 10 })
     * 
     * // Only select the `realmid`
     * const uptimeWithRealmidOnly = await prisma.uptime.findMany({ select: { realmid: true } })
     * 
    **/
    findMany<T extends uptimeFindManyArgs>(
      args?: SelectSubset<T, uptimeFindManyArgs>
    ): Prisma.PrismaPromise<Array<uptimeGetPayload<T>>>

    /**
     * Create a Uptime.
     * @param {uptimeCreateArgs} args - Arguments to create a Uptime.
     * @example
     * // Create one Uptime
     * const Uptime = await prisma.uptime.create({
     *   data: {
     *     // ... data to create a Uptime
     *   }
     * })
     * 
    **/
    create<T extends uptimeCreateArgs>(
      args: SelectSubset<T, uptimeCreateArgs>
    ): Prisma__uptimeClient<uptimeGetPayload<T>>

    /**
     * Create many Uptimes.
     *     @param {uptimeCreateManyArgs} args - Arguments to create many Uptimes.
     *     @example
     *     // Create many Uptimes
     *     const uptime = await prisma.uptime.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends uptimeCreateManyArgs>(
      args?: SelectSubset<T, uptimeCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Uptime.
     * @param {uptimeDeleteArgs} args - Arguments to delete one Uptime.
     * @example
     * // Delete one Uptime
     * const Uptime = await prisma.uptime.delete({
     *   where: {
     *     // ... filter to delete one Uptime
     *   }
     * })
     * 
    **/
    delete<T extends uptimeDeleteArgs>(
      args: SelectSubset<T, uptimeDeleteArgs>
    ): Prisma__uptimeClient<uptimeGetPayload<T>>

    /**
     * Update one Uptime.
     * @param {uptimeUpdateArgs} args - Arguments to update one Uptime.
     * @example
     * // Update one Uptime
     * const uptime = await prisma.uptime.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends uptimeUpdateArgs>(
      args: SelectSubset<T, uptimeUpdateArgs>
    ): Prisma__uptimeClient<uptimeGetPayload<T>>

    /**
     * Delete zero or more Uptimes.
     * @param {uptimeDeleteManyArgs} args - Arguments to filter Uptimes to delete.
     * @example
     * // Delete a few Uptimes
     * const { count } = await prisma.uptime.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends uptimeDeleteManyArgs>(
      args?: SelectSubset<T, uptimeDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Uptimes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {uptimeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Uptimes
     * const uptime = await prisma.uptime.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends uptimeUpdateManyArgs>(
      args: SelectSubset<T, uptimeUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Uptime.
     * @param {uptimeUpsertArgs} args - Arguments to update or create a Uptime.
     * @example
     * // Update or create a Uptime
     * const uptime = await prisma.uptime.upsert({
     *   create: {
     *     // ... data to create a Uptime
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Uptime we want to update
     *   }
     * })
    **/
    upsert<T extends uptimeUpsertArgs>(
      args: SelectSubset<T, uptimeUpsertArgs>
    ): Prisma__uptimeClient<uptimeGetPayload<T>>

    /**
     * Count the number of Uptimes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {uptimeCountArgs} args - Arguments to filter Uptimes to count.
     * @example
     * // Count the number of Uptimes
     * const count = await prisma.uptime.count({
     *   where: {
     *     // ... the filter for the Uptimes we want to count
     *   }
     * })
    **/
    count<T extends uptimeCountArgs>(
      args?: Subset<T, uptimeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UptimeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Uptime.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UptimeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UptimeAggregateArgs>(args: Subset<T, UptimeAggregateArgs>): Prisma.PrismaPromise<GetUptimeAggregateType<T>>

    /**
     * Group by Uptime.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UptimeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UptimeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UptimeGroupByArgs['orderBy'] }
        : { orderBy?: UptimeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UptimeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUptimeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for uptime.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__uptimeClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * uptime base type for findUnique actions
   */
  export type uptimeFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the uptime
     */
    select?: uptimeSelect | null
    /**
     * Filter, which uptime to fetch.
     */
    where: uptimeWhereUniqueInput
  }

  /**
   * uptime findUnique
   */
  export interface uptimeFindUniqueArgs extends uptimeFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * uptime findUniqueOrThrow
   */
  export type uptimeFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the uptime
     */
    select?: uptimeSelect | null
    /**
     * Filter, which uptime to fetch.
     */
    where: uptimeWhereUniqueInput
  }


  /**
   * uptime base type for findFirst actions
   */
  export type uptimeFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the uptime
     */
    select?: uptimeSelect | null
    /**
     * Filter, which uptime to fetch.
     */
    where?: uptimeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of uptimes to fetch.
     */
    orderBy?: Enumerable<uptimeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for uptimes.
     */
    cursor?: uptimeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` uptimes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` uptimes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of uptimes.
     */
    distinct?: Enumerable<UptimeScalarFieldEnum>
  }

  /**
   * uptime findFirst
   */
  export interface uptimeFindFirstArgs extends uptimeFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * uptime findFirstOrThrow
   */
  export type uptimeFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the uptime
     */
    select?: uptimeSelect | null
    /**
     * Filter, which uptime to fetch.
     */
    where?: uptimeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of uptimes to fetch.
     */
    orderBy?: Enumerable<uptimeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for uptimes.
     */
    cursor?: uptimeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` uptimes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` uptimes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of uptimes.
     */
    distinct?: Enumerable<UptimeScalarFieldEnum>
  }


  /**
   * uptime findMany
   */
  export type uptimeFindManyArgs = {
    /**
     * Select specific fields to fetch from the uptime
     */
    select?: uptimeSelect | null
    /**
     * Filter, which uptimes to fetch.
     */
    where?: uptimeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of uptimes to fetch.
     */
    orderBy?: Enumerable<uptimeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing uptimes.
     */
    cursor?: uptimeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` uptimes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` uptimes.
     */
    skip?: number
    distinct?: Enumerable<UptimeScalarFieldEnum>
  }


  /**
   * uptime create
   */
  export type uptimeCreateArgs = {
    /**
     * Select specific fields to fetch from the uptime
     */
    select?: uptimeSelect | null
    /**
     * The data needed to create a uptime.
     */
    data: XOR<uptimeCreateInput, uptimeUncheckedCreateInput>
  }


  /**
   * uptime createMany
   */
  export type uptimeCreateManyArgs = {
    /**
     * The data used to create many uptimes.
     */
    data: Enumerable<uptimeCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * uptime update
   */
  export type uptimeUpdateArgs = {
    /**
     * Select specific fields to fetch from the uptime
     */
    select?: uptimeSelect | null
    /**
     * The data needed to update a uptime.
     */
    data: XOR<uptimeUpdateInput, uptimeUncheckedUpdateInput>
    /**
     * Choose, which uptime to update.
     */
    where: uptimeWhereUniqueInput
  }


  /**
   * uptime updateMany
   */
  export type uptimeUpdateManyArgs = {
    /**
     * The data used to update uptimes.
     */
    data: XOR<uptimeUpdateManyMutationInput, uptimeUncheckedUpdateManyInput>
    /**
     * Filter which uptimes to update
     */
    where?: uptimeWhereInput
  }


  /**
   * uptime upsert
   */
  export type uptimeUpsertArgs = {
    /**
     * Select specific fields to fetch from the uptime
     */
    select?: uptimeSelect | null
    /**
     * The filter to search for the uptime to update in case it exists.
     */
    where: uptimeWhereUniqueInput
    /**
     * In case the uptime found by the `where` argument doesn't exist, create a new uptime with this data.
     */
    create: XOR<uptimeCreateInput, uptimeUncheckedCreateInput>
    /**
     * In case the uptime was found with the provided `where` argument, update it with this data.
     */
    update: XOR<uptimeUpdateInput, uptimeUncheckedUpdateInput>
  }


  /**
   * uptime delete
   */
  export type uptimeDeleteArgs = {
    /**
     * Select specific fields to fetch from the uptime
     */
    select?: uptimeSelect | null
    /**
     * Filter which uptime to delete.
     */
    where: uptimeWhereUniqueInput
  }


  /**
   * uptime deleteMany
   */
  export type uptimeDeleteManyArgs = {
    /**
     * Filter which uptimes to delete
     */
    where?: uptimeWhereInput
  }


  /**
   * uptime without action
   */
  export type uptimeArgs = {
    /**
     * Select specific fields to fetch from the uptime
     */
    select?: uptimeSelect | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const AccountScalarFieldEnum: {
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
  };

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


  export const Account_bannedScalarFieldEnum: {
    banid: 'banid',
    id: 'id',
    bandate: 'bandate',
    unbandate: 'unbandate',
    bannedby: 'bannedby',
    banreason: 'banreason',
    active: 'active',
    realm: 'realm',
    gmlevel: 'gmlevel'
  };

  export type Account_bannedScalarFieldEnum = (typeof Account_bannedScalarFieldEnum)[keyof typeof Account_bannedScalarFieldEnum]


  export const Account_mailstatusScalarFieldEnum: {
    message_id: 'message_id',
    account_id: 'account_id',
    email: 'email',
    status: 'status',
    letterid: 'letterid'
  };

  export type Account_mailstatusScalarFieldEnum = (typeof Account_mailstatusScalarFieldEnum)[keyof typeof Account_mailstatusScalarFieldEnum]


  export const Account_mailstatus_archiveScalarFieldEnum: {
    message_id: 'message_id',
    account_id: 'account_id',
    email: 'email',
    status: 'status',
    letterid: 'letterid'
  };

  export type Account_mailstatus_archiveScalarFieldEnum = (typeof Account_mailstatus_archiveScalarFieldEnum)[keyof typeof Account_mailstatus_archiveScalarFieldEnum]


  export const Account_twofactor_allowedScalarFieldEnum: {
    id: 'id',
    ip_address: 'ip_address',
    account_id: 'account_id',
    expires_at: 'expires_at'
  };

  export type Account_twofactor_allowedScalarFieldEnum = (typeof Account_twofactor_allowedScalarFieldEnum)[keyof typeof Account_twofactor_allowedScalarFieldEnum]


  export const Antispam_blacklistScalarFieldEnum: {
    string: 'string'
  };

  export type Antispam_blacklistScalarFieldEnum = (typeof Antispam_blacklistScalarFieldEnum)[keyof typeof Antispam_blacklistScalarFieldEnum]


  export const Antispam_clientScalarFieldEnum: {
    Regex: 'Regex',
    Note: 'Note'
  };

  export type Antispam_clientScalarFieldEnum = (typeof Antispam_clientScalarFieldEnum)[keyof typeof Antispam_clientScalarFieldEnum]


  export const Antispam_replacementScalarFieldEnum: {
    from: 'from',
    to: 'to'
  };

  export type Antispam_replacementScalarFieldEnum = (typeof Antispam_replacementScalarFieldEnum)[keyof typeof Antispam_replacementScalarFieldEnum]


  export const Antispam_unicode_replacementScalarFieldEnum: {
    from: 'from',
    to: 'to'
  };

  export type Antispam_unicode_replacementScalarFieldEnum = (typeof Antispam_unicode_replacementScalarFieldEnum)[keyof typeof Antispam_unicode_replacementScalarFieldEnum]


  export const ConfigScalarFieldEnum: {
    id: 'id',
    value: 'value',
    comment: 'comment'
  };

  export type ConfigScalarFieldEnum = (typeof ConfigScalarFieldEnum)[keyof typeof ConfigScalarFieldEnum]


  export const Ip_bannedScalarFieldEnum: {
    ip: 'ip',
    bandate: 'bandate',
    unbandate: 'unbandate',
    bannedby: 'bannedby',
    banreason: 'banreason'
  };

  export type Ip_bannedScalarFieldEnum = (typeof Ip_bannedScalarFieldEnum)[keyof typeof Ip_bannedScalarFieldEnum]


  export const MigrationsScalarFieldEnum: {
    id: 'id',
    Name: 'Name',
    Hash: 'Hash'
  };

  export type MigrationsScalarFieldEnum = (typeof MigrationsScalarFieldEnum)[keyof typeof MigrationsScalarFieldEnum]


  export const RealmcharactersScalarFieldEnum: {
    realmid: 'realmid',
    acctid: 'acctid',
    numchars: 'numchars'
  };

  export type RealmcharactersScalarFieldEnum = (typeof RealmcharactersScalarFieldEnum)[keyof typeof RealmcharactersScalarFieldEnum]


  export const RealmlistScalarFieldEnum: {
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
  };

  export type RealmlistScalarFieldEnum = (typeof RealmlistScalarFieldEnum)[keyof typeof RealmlistScalarFieldEnum]


  export const Shop_coinsScalarFieldEnum: {
    id: 'id',
    coins: 'coins'
  };

  export type Shop_coinsScalarFieldEnum = (typeof Shop_coinsScalarFieldEnum)[keyof typeof Shop_coinsScalarFieldEnum]


  export const Shop_diffScalarFieldEnum: {
    guid: 'guid',
    accountid: 'accountid',
    prev_bonus: 'prev_bonus',
    new_bonus: 'new_bonus',
    date: 'date',
    query: 'query'
  };

  export type Shop_diffScalarFieldEnum = (typeof Shop_diffScalarFieldEnum)[keyof typeof Shop_diffScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const Statistics_onlineScalarFieldEnum: {
    guid: 'guid',
    online: 'online',
    online_alli: 'online_alli',
    online_horde: 'online_horde',
    connections: 'connections',
    realm: 'realm',
    date: 'date'
  };

  export type Statistics_onlineScalarFieldEnum = (typeof Statistics_onlineScalarFieldEnum)[keyof typeof Statistics_onlineScalarFieldEnum]


  export const System_fingerprint_usageScalarFieldEnum: {
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
  };

  export type System_fingerprint_usageScalarFieldEnum = (typeof System_fingerprint_usageScalarFieldEnum)[keyof typeof System_fingerprint_usageScalarFieldEnum]


  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UptimeScalarFieldEnum: {
    realmid: 'realmid',
    starttime: 'starttime',
    startstring: 'startstring',
    uptime: 'uptime',
    onlineplayers: 'onlineplayers',
    maxplayers: 'maxplayers',
    revision: 'revision'
  };

  export type UptimeScalarFieldEnum = (typeof UptimeScalarFieldEnum)[keyof typeof UptimeScalarFieldEnum]


  /**
   * Deep Input Types
   */


  export type accountWhereInput = {
    AND?: Enumerable<accountWhereInput>
    OR?: Enumerable<accountWhereInput>
    NOT?: Enumerable<accountWhereInput>
    id?: IntFilter | number
    username?: StringFilter | string
    sha_pass_hash?: StringFilter | string
    rank?: IntFilter | number
    sessionkey?: StringNullableFilter | string | null
    v?: StringNullableFilter | string | null
    s?: StringNullableFilter | string | null
    email?: StringNullableFilter | string | null
    joindate?: DateTimeFilter | Date | string
    tfa_verif?: StringNullableFilter | string | null
    last_ip?: StringFilter | string
    last_local_ip?: StringFilter | string
    failed_logins?: IntFilter | number
    locked?: IntFilter | number
    last_login?: DateTimeFilter | Date | string
    online?: IntFilter | number
    expansion?: IntFilter | number
    mutetime?: BigIntFilter | bigint | number
    mutereason?: StringFilter | string
    muteby?: StringFilter | string
    locale?: IntFilter | number
    os?: StringFilter | string
    current_realm?: IntFilter | number
    banned?: BoolFilter | boolean
    flags?: IntFilter | number
    security?: StringNullableFilter | string | null
    pass_verif?: StringNullableFilter | string | null
    email_verif?: BoolFilter | boolean
    forum_username?: StringNullableFilter | string | null
    token_key?: StringNullableFilter | string | null
    email_keyword?: StringNullableFilter | string | null
    email_status?: IntNullableFilter | number | null
    email_sub?: IntFilter | number
    comments?: StringNullableFilter | string | null
    geolock_pin?: IntNullableFilter | number | null
  }

  export type accountOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    sha_pass_hash?: SortOrder
    rank?: SortOrder
    sessionkey?: SortOrder
    v?: SortOrder
    s?: SortOrder
    email?: SortOrder
    joindate?: SortOrder
    tfa_verif?: SortOrder
    last_ip?: SortOrder
    last_local_ip?: SortOrder
    failed_logins?: SortOrder
    locked?: SortOrder
    last_login?: SortOrder
    online?: SortOrder
    expansion?: SortOrder
    mutetime?: SortOrder
    mutereason?: SortOrder
    muteby?: SortOrder
    locale?: SortOrder
    os?: SortOrder
    current_realm?: SortOrder
    banned?: SortOrder
    flags?: SortOrder
    security?: SortOrder
    pass_verif?: SortOrder
    email_verif?: SortOrder
    forum_username?: SortOrder
    token_key?: SortOrder
    email_keyword?: SortOrder
    email_status?: SortOrder
    email_sub?: SortOrder
    comments?: SortOrder
    geolock_pin?: SortOrder
  }

  export type accountWhereUniqueInput = {
    id?: number
    username?: string
  }

  export type accountOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    sha_pass_hash?: SortOrder
    rank?: SortOrder
    sessionkey?: SortOrder
    v?: SortOrder
    s?: SortOrder
    email?: SortOrder
    joindate?: SortOrder
    tfa_verif?: SortOrder
    last_ip?: SortOrder
    last_local_ip?: SortOrder
    failed_logins?: SortOrder
    locked?: SortOrder
    last_login?: SortOrder
    online?: SortOrder
    expansion?: SortOrder
    mutetime?: SortOrder
    mutereason?: SortOrder
    muteby?: SortOrder
    locale?: SortOrder
    os?: SortOrder
    current_realm?: SortOrder
    banned?: SortOrder
    flags?: SortOrder
    security?: SortOrder
    pass_verif?: SortOrder
    email_verif?: SortOrder
    forum_username?: SortOrder
    token_key?: SortOrder
    email_keyword?: SortOrder
    email_status?: SortOrder
    email_sub?: SortOrder
    comments?: SortOrder
    geolock_pin?: SortOrder
    _count?: accountCountOrderByAggregateInput
    _avg?: accountAvgOrderByAggregateInput
    _max?: accountMaxOrderByAggregateInput
    _min?: accountMinOrderByAggregateInput
    _sum?: accountSumOrderByAggregateInput
  }

  export type accountScalarWhereWithAggregatesInput = {
    AND?: Enumerable<accountScalarWhereWithAggregatesInput>
    OR?: Enumerable<accountScalarWhereWithAggregatesInput>
    NOT?: Enumerable<accountScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    username?: StringWithAggregatesFilter | string
    sha_pass_hash?: StringWithAggregatesFilter | string
    rank?: IntWithAggregatesFilter | number
    sessionkey?: StringNullableWithAggregatesFilter | string | null
    v?: StringNullableWithAggregatesFilter | string | null
    s?: StringNullableWithAggregatesFilter | string | null
    email?: StringNullableWithAggregatesFilter | string | null
    joindate?: DateTimeWithAggregatesFilter | Date | string
    tfa_verif?: StringNullableWithAggregatesFilter | string | null
    last_ip?: StringWithAggregatesFilter | string
    last_local_ip?: StringWithAggregatesFilter | string
    failed_logins?: IntWithAggregatesFilter | number
    locked?: IntWithAggregatesFilter | number
    last_login?: DateTimeWithAggregatesFilter | Date | string
    online?: IntWithAggregatesFilter | number
    expansion?: IntWithAggregatesFilter | number
    mutetime?: BigIntWithAggregatesFilter | bigint | number
    mutereason?: StringWithAggregatesFilter | string
    muteby?: StringWithAggregatesFilter | string
    locale?: IntWithAggregatesFilter | number
    os?: StringWithAggregatesFilter | string
    current_realm?: IntWithAggregatesFilter | number
    banned?: BoolWithAggregatesFilter | boolean
    flags?: IntWithAggregatesFilter | number
    security?: StringNullableWithAggregatesFilter | string | null
    pass_verif?: StringNullableWithAggregatesFilter | string | null
    email_verif?: BoolWithAggregatesFilter | boolean
    forum_username?: StringNullableWithAggregatesFilter | string | null
    token_key?: StringNullableWithAggregatesFilter | string | null
    email_keyword?: StringNullableWithAggregatesFilter | string | null
    email_status?: IntNullableWithAggregatesFilter | number | null
    email_sub?: IntWithAggregatesFilter | number
    comments?: StringNullableWithAggregatesFilter | string | null
    geolock_pin?: IntNullableWithAggregatesFilter | number | null
  }

  export type account_bannedWhereInput = {
    AND?: Enumerable<account_bannedWhereInput>
    OR?: Enumerable<account_bannedWhereInput>
    NOT?: Enumerable<account_bannedWhereInput>
    banid?: BigIntFilter | bigint | number
    id?: BigIntFilter | bigint | number
    bandate?: BigIntFilter | bigint | number
    unbandate?: BigIntFilter | bigint | number
    bannedby?: StringFilter | string
    banreason?: StringFilter | string
    active?: IntFilter | number
    realm?: IntFilter | number
    gmlevel?: IntFilter | number
  }

  export type account_bannedOrderByWithRelationInput = {
    banid?: SortOrder
    id?: SortOrder
    bandate?: SortOrder
    unbandate?: SortOrder
    bannedby?: SortOrder
    banreason?: SortOrder
    active?: SortOrder
    realm?: SortOrder
    gmlevel?: SortOrder
  }

  export type account_bannedWhereUniqueInput = {
    banid?: bigint | number
    id_bandate?: account_bannedIdBandateCompoundUniqueInput
  }

  export type account_bannedOrderByWithAggregationInput = {
    banid?: SortOrder
    id?: SortOrder
    bandate?: SortOrder
    unbandate?: SortOrder
    bannedby?: SortOrder
    banreason?: SortOrder
    active?: SortOrder
    realm?: SortOrder
    gmlevel?: SortOrder
    _count?: account_bannedCountOrderByAggregateInput
    _avg?: account_bannedAvgOrderByAggregateInput
    _max?: account_bannedMaxOrderByAggregateInput
    _min?: account_bannedMinOrderByAggregateInput
    _sum?: account_bannedSumOrderByAggregateInput
  }

  export type account_bannedScalarWhereWithAggregatesInput = {
    AND?: Enumerable<account_bannedScalarWhereWithAggregatesInput>
    OR?: Enumerable<account_bannedScalarWhereWithAggregatesInput>
    NOT?: Enumerable<account_bannedScalarWhereWithAggregatesInput>
    banid?: BigIntWithAggregatesFilter | bigint | number
    id?: BigIntWithAggregatesFilter | bigint | number
    bandate?: BigIntWithAggregatesFilter | bigint | number
    unbandate?: BigIntWithAggregatesFilter | bigint | number
    bannedby?: StringWithAggregatesFilter | string
    banreason?: StringWithAggregatesFilter | string
    active?: IntWithAggregatesFilter | number
    realm?: IntWithAggregatesFilter | number
    gmlevel?: IntWithAggregatesFilter | number
  }

  export type account_mailstatusWhereInput = {
    AND?: Enumerable<account_mailstatusWhereInput>
    OR?: Enumerable<account_mailstatusWhereInput>
    NOT?: Enumerable<account_mailstatusWhereInput>
    message_id?: IntFilter | number
    account_id?: IntFilter | number
    email?: StringNullableFilter | string | null
    status?: IntNullableFilter | number | null
    letterid?: IntNullableFilter | number | null
  }

  export type account_mailstatusOrderByWithRelationInput = {
    message_id?: SortOrder
    account_id?: SortOrder
    email?: SortOrder
    status?: SortOrder
    letterid?: SortOrder
  }

  export type account_mailstatusWhereUniqueInput = {
    message_id?: number
  }

  export type account_mailstatusOrderByWithAggregationInput = {
    message_id?: SortOrder
    account_id?: SortOrder
    email?: SortOrder
    status?: SortOrder
    letterid?: SortOrder
    _count?: account_mailstatusCountOrderByAggregateInput
    _avg?: account_mailstatusAvgOrderByAggregateInput
    _max?: account_mailstatusMaxOrderByAggregateInput
    _min?: account_mailstatusMinOrderByAggregateInput
    _sum?: account_mailstatusSumOrderByAggregateInput
  }

  export type account_mailstatusScalarWhereWithAggregatesInput = {
    AND?: Enumerable<account_mailstatusScalarWhereWithAggregatesInput>
    OR?: Enumerable<account_mailstatusScalarWhereWithAggregatesInput>
    NOT?: Enumerable<account_mailstatusScalarWhereWithAggregatesInput>
    message_id?: IntWithAggregatesFilter | number
    account_id?: IntWithAggregatesFilter | number
    email?: StringNullableWithAggregatesFilter | string | null
    status?: IntNullableWithAggregatesFilter | number | null
    letterid?: IntNullableWithAggregatesFilter | number | null
  }

  export type account_mailstatus_archiveWhereInput = {
    AND?: Enumerable<account_mailstatus_archiveWhereInput>
    OR?: Enumerable<account_mailstatus_archiveWhereInput>
    NOT?: Enumerable<account_mailstatus_archiveWhereInput>
    message_id?: IntFilter | number
    account_id?: IntFilter | number
    email?: StringNullableFilter | string | null
    status?: IntNullableFilter | number | null
    letterid?: IntNullableFilter | number | null
  }

  export type account_mailstatus_archiveOrderByWithRelationInput = {
    message_id?: SortOrder
    account_id?: SortOrder
    email?: SortOrder
    status?: SortOrder
    letterid?: SortOrder
  }

  export type account_mailstatus_archiveWhereUniqueInput = {
    message_id?: number
  }

  export type account_mailstatus_archiveOrderByWithAggregationInput = {
    message_id?: SortOrder
    account_id?: SortOrder
    email?: SortOrder
    status?: SortOrder
    letterid?: SortOrder
    _count?: account_mailstatus_archiveCountOrderByAggregateInput
    _avg?: account_mailstatus_archiveAvgOrderByAggregateInput
    _max?: account_mailstatus_archiveMaxOrderByAggregateInput
    _min?: account_mailstatus_archiveMinOrderByAggregateInput
    _sum?: account_mailstatus_archiveSumOrderByAggregateInput
  }

  export type account_mailstatus_archiveScalarWhereWithAggregatesInput = {
    AND?: Enumerable<account_mailstatus_archiveScalarWhereWithAggregatesInput>
    OR?: Enumerable<account_mailstatus_archiveScalarWhereWithAggregatesInput>
    NOT?: Enumerable<account_mailstatus_archiveScalarWhereWithAggregatesInput>
    message_id?: IntWithAggregatesFilter | number
    account_id?: IntWithAggregatesFilter | number
    email?: StringNullableWithAggregatesFilter | string | null
    status?: IntNullableWithAggregatesFilter | number | null
    letterid?: IntNullableWithAggregatesFilter | number | null
  }

  export type account_twofactor_allowedWhereInput = {
    AND?: Enumerable<account_twofactor_allowedWhereInput>
    OR?: Enumerable<account_twofactor_allowedWhereInput>
    NOT?: Enumerable<account_twofactor_allowedWhereInput>
    id?: IntFilter | number
    ip_address?: StringFilter | string
    account_id?: IntNullableFilter | number | null
    expires_at?: BigIntNullableFilter | bigint | number | null
  }

  export type account_twofactor_allowedOrderByWithRelationInput = {
    id?: SortOrder
    ip_address?: SortOrder
    account_id?: SortOrder
    expires_at?: SortOrder
  }

  export type account_twofactor_allowedWhereUniqueInput = {
    id?: number
  }

  export type account_twofactor_allowedOrderByWithAggregationInput = {
    id?: SortOrder
    ip_address?: SortOrder
    account_id?: SortOrder
    expires_at?: SortOrder
    _count?: account_twofactor_allowedCountOrderByAggregateInput
    _avg?: account_twofactor_allowedAvgOrderByAggregateInput
    _max?: account_twofactor_allowedMaxOrderByAggregateInput
    _min?: account_twofactor_allowedMinOrderByAggregateInput
    _sum?: account_twofactor_allowedSumOrderByAggregateInput
  }

  export type account_twofactor_allowedScalarWhereWithAggregatesInput = {
    AND?: Enumerable<account_twofactor_allowedScalarWhereWithAggregatesInput>
    OR?: Enumerable<account_twofactor_allowedScalarWhereWithAggregatesInput>
    NOT?: Enumerable<account_twofactor_allowedScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    ip_address?: StringWithAggregatesFilter | string
    account_id?: IntNullableWithAggregatesFilter | number | null
    expires_at?: BigIntNullableWithAggregatesFilter | bigint | number | null
  }

  export type antispam_blacklistWhereInput = {
    AND?: Enumerable<antispam_blacklistWhereInput>
    OR?: Enumerable<antispam_blacklistWhereInput>
    NOT?: Enumerable<antispam_blacklistWhereInput>
    string?: StringFilter | string
  }

  export type antispam_blacklistOrderByWithRelationInput = {
    string?: SortOrder
  }

  export type antispam_blacklistWhereUniqueInput = {
    string?: string
  }

  export type antispam_blacklistOrderByWithAggregationInput = {
    string?: SortOrder
    _count?: antispam_blacklistCountOrderByAggregateInput
    _max?: antispam_blacklistMaxOrderByAggregateInput
    _min?: antispam_blacklistMinOrderByAggregateInput
  }

  export type antispam_blacklistScalarWhereWithAggregatesInput = {
    AND?: Enumerable<antispam_blacklistScalarWhereWithAggregatesInput>
    OR?: Enumerable<antispam_blacklistScalarWhereWithAggregatesInput>
    NOT?: Enumerable<antispam_blacklistScalarWhereWithAggregatesInput>
    string?: StringWithAggregatesFilter | string
  }

  export type antispam_clientWhereInput = {
    AND?: Enumerable<antispam_clientWhereInput>
    OR?: Enumerable<antispam_clientWhereInput>
    NOT?: Enumerable<antispam_clientWhereInput>
    Regex?: StringFilter | string
    Note?: StringNullableFilter | string | null
  }

  export type antispam_clientOrderByWithRelationInput = {
    Regex?: SortOrder
    Note?: SortOrder
  }

  export type antispam_clientWhereUniqueInput = {
    Regex?: string
  }

  export type antispam_clientOrderByWithAggregationInput = {
    Regex?: SortOrder
    Note?: SortOrder
    _count?: antispam_clientCountOrderByAggregateInput
    _max?: antispam_clientMaxOrderByAggregateInput
    _min?: antispam_clientMinOrderByAggregateInput
  }

  export type antispam_clientScalarWhereWithAggregatesInput = {
    AND?: Enumerable<antispam_clientScalarWhereWithAggregatesInput>
    OR?: Enumerable<antispam_clientScalarWhereWithAggregatesInput>
    NOT?: Enumerable<antispam_clientScalarWhereWithAggregatesInput>
    Regex?: StringWithAggregatesFilter | string
    Note?: StringNullableWithAggregatesFilter | string | null
  }

  export type antispam_replacementWhereInput = {
    AND?: Enumerable<antispam_replacementWhereInput>
    OR?: Enumerable<antispam_replacementWhereInput>
    NOT?: Enumerable<antispam_replacementWhereInput>
    from?: StringFilter | string
    to?: StringFilter | string
  }

  export type antispam_replacementOrderByWithRelationInput = {
    from?: SortOrder
    to?: SortOrder
  }

  export type antispam_replacementWhereUniqueInput = {
    from?: string
  }

  export type antispam_replacementOrderByWithAggregationInput = {
    from?: SortOrder
    to?: SortOrder
    _count?: antispam_replacementCountOrderByAggregateInput
    _max?: antispam_replacementMaxOrderByAggregateInput
    _min?: antispam_replacementMinOrderByAggregateInput
  }

  export type antispam_replacementScalarWhereWithAggregatesInput = {
    AND?: Enumerable<antispam_replacementScalarWhereWithAggregatesInput>
    OR?: Enumerable<antispam_replacementScalarWhereWithAggregatesInput>
    NOT?: Enumerable<antispam_replacementScalarWhereWithAggregatesInput>
    from?: StringWithAggregatesFilter | string
    to?: StringWithAggregatesFilter | string
  }

  export type antispam_unicode_replacementWhereInput = {
    AND?: Enumerable<antispam_unicode_replacementWhereInput>
    OR?: Enumerable<antispam_unicode_replacementWhereInput>
    NOT?: Enumerable<antispam_unicode_replacementWhereInput>
    from?: IntFilter | number
    to?: IntFilter | number
  }

  export type antispam_unicode_replacementOrderByWithRelationInput = {
    from?: SortOrder
    to?: SortOrder
  }

  export type antispam_unicode_replacementWhereUniqueInput = {
    from?: number
  }

  export type antispam_unicode_replacementOrderByWithAggregationInput = {
    from?: SortOrder
    to?: SortOrder
    _count?: antispam_unicode_replacementCountOrderByAggregateInput
    _avg?: antispam_unicode_replacementAvgOrderByAggregateInput
    _max?: antispam_unicode_replacementMaxOrderByAggregateInput
    _min?: antispam_unicode_replacementMinOrderByAggregateInput
    _sum?: antispam_unicode_replacementSumOrderByAggregateInput
  }

  export type antispam_unicode_replacementScalarWhereWithAggregatesInput = {
    AND?: Enumerable<antispam_unicode_replacementScalarWhereWithAggregatesInput>
    OR?: Enumerable<antispam_unicode_replacementScalarWhereWithAggregatesInput>
    NOT?: Enumerable<antispam_unicode_replacementScalarWhereWithAggregatesInput>
    from?: IntWithAggregatesFilter | number
    to?: IntWithAggregatesFilter | number
  }

  export type configWhereInput = {
    AND?: Enumerable<configWhereInput>
    OR?: Enumerable<configWhereInput>
    NOT?: Enumerable<configWhereInput>
    id?: IntFilter | number
    value?: StringNullableFilter | string | null
    comment?: StringNullableFilter | string | null
  }

  export type configOrderByWithRelationInput = {
    id?: SortOrder
    value?: SortOrder
    comment?: SortOrder
  }

  export type configWhereUniqueInput = {
    id?: number
  }

  export type configOrderByWithAggregationInput = {
    id?: SortOrder
    value?: SortOrder
    comment?: SortOrder
    _count?: configCountOrderByAggregateInput
    _avg?: configAvgOrderByAggregateInput
    _max?: configMaxOrderByAggregateInput
    _min?: configMinOrderByAggregateInput
    _sum?: configSumOrderByAggregateInput
  }

  export type configScalarWhereWithAggregatesInput = {
    AND?: Enumerable<configScalarWhereWithAggregatesInput>
    OR?: Enumerable<configScalarWhereWithAggregatesInput>
    NOT?: Enumerable<configScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    value?: StringNullableWithAggregatesFilter | string | null
    comment?: StringNullableWithAggregatesFilter | string | null
  }

  export type ip_bannedWhereInput = {
    AND?: Enumerable<ip_bannedWhereInput>
    OR?: Enumerable<ip_bannedWhereInput>
    NOT?: Enumerable<ip_bannedWhereInput>
    ip?: StringFilter | string
    bandate?: IntFilter | number
    unbandate?: IntFilter | number
    bannedby?: StringFilter | string
    banreason?: StringFilter | string
  }

  export type ip_bannedOrderByWithRelationInput = {
    ip?: SortOrder
    bandate?: SortOrder
    unbandate?: SortOrder
    bannedby?: SortOrder
    banreason?: SortOrder
  }

  export type ip_bannedWhereUniqueInput = {
    ip_bandate?: ip_bannedIpBandateCompoundUniqueInput
  }

  export type ip_bannedOrderByWithAggregationInput = {
    ip?: SortOrder
    bandate?: SortOrder
    unbandate?: SortOrder
    bannedby?: SortOrder
    banreason?: SortOrder
    _count?: ip_bannedCountOrderByAggregateInput
    _avg?: ip_bannedAvgOrderByAggregateInput
    _max?: ip_bannedMaxOrderByAggregateInput
    _min?: ip_bannedMinOrderByAggregateInput
    _sum?: ip_bannedSumOrderByAggregateInput
  }

  export type ip_bannedScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ip_bannedScalarWhereWithAggregatesInput>
    OR?: Enumerable<ip_bannedScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ip_bannedScalarWhereWithAggregatesInput>
    ip?: StringWithAggregatesFilter | string
    bandate?: IntWithAggregatesFilter | number
    unbandate?: IntWithAggregatesFilter | number
    bannedby?: StringWithAggregatesFilter | string
    banreason?: StringWithAggregatesFilter | string
  }

  export type migrationsWhereInput = {
    AND?: Enumerable<migrationsWhereInput>
    OR?: Enumerable<migrationsWhereInput>
    NOT?: Enumerable<migrationsWhereInput>
    id?: StringFilter | string
    Name?: StringFilter | string
    Hash?: StringFilter | string
  }

  export type migrationsOrderByWithRelationInput = {
    id?: SortOrder
    Name?: SortOrder
    Hash?: SortOrder
  }

  export type migrationsWhereUniqueInput = {
    id?: string
  }

  export type migrationsOrderByWithAggregationInput = {
    id?: SortOrder
    Name?: SortOrder
    Hash?: SortOrder
    _count?: migrationsCountOrderByAggregateInput
    _max?: migrationsMaxOrderByAggregateInput
    _min?: migrationsMinOrderByAggregateInput
  }

  export type migrationsScalarWhereWithAggregatesInput = {
    AND?: Enumerable<migrationsScalarWhereWithAggregatesInput>
    OR?: Enumerable<migrationsScalarWhereWithAggregatesInput>
    NOT?: Enumerable<migrationsScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    Name?: StringWithAggregatesFilter | string
    Hash?: StringWithAggregatesFilter | string
  }

  export type realmcharactersWhereInput = {
    AND?: Enumerable<realmcharactersWhereInput>
    OR?: Enumerable<realmcharactersWhereInput>
    NOT?: Enumerable<realmcharactersWhereInput>
    realmid?: IntFilter | number
    acctid?: BigIntFilter | bigint | number
    numchars?: IntFilter | number
  }

  export type realmcharactersOrderByWithRelationInput = {
    realmid?: SortOrder
    acctid?: SortOrder
    numchars?: SortOrder
  }

  export type realmcharactersWhereUniqueInput = {
    realmid_acctid?: realmcharactersRealmidAcctidCompoundUniqueInput
  }

  export type realmcharactersOrderByWithAggregationInput = {
    realmid?: SortOrder
    acctid?: SortOrder
    numchars?: SortOrder
    _count?: realmcharactersCountOrderByAggregateInput
    _avg?: realmcharactersAvgOrderByAggregateInput
    _max?: realmcharactersMaxOrderByAggregateInput
    _min?: realmcharactersMinOrderByAggregateInput
    _sum?: realmcharactersSumOrderByAggregateInput
  }

  export type realmcharactersScalarWhereWithAggregatesInput = {
    AND?: Enumerable<realmcharactersScalarWhereWithAggregatesInput>
    OR?: Enumerable<realmcharactersScalarWhereWithAggregatesInput>
    NOT?: Enumerable<realmcharactersScalarWhereWithAggregatesInput>
    realmid?: IntWithAggregatesFilter | number
    acctid?: BigIntWithAggregatesFilter | bigint | number
    numchars?: IntWithAggregatesFilter | number
  }

  export type realmlistWhereInput = {
    AND?: Enumerable<realmlistWhereInput>
    OR?: Enumerable<realmlistWhereInput>
    NOT?: Enumerable<realmlistWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    address?: StringFilter | string
    port?: IntFilter | number
    icon?: IntFilter | number
    realmflags?: IntFilter | number
    timezone?: IntFilter | number
    allowedSecurityLevel?: IntFilter | number
    population?: FloatFilter | number
    realmbuilds?: StringFilter | string
  }

  export type realmlistOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    port?: SortOrder
    icon?: SortOrder
    realmflags?: SortOrder
    timezone?: SortOrder
    allowedSecurityLevel?: SortOrder
    population?: SortOrder
    realmbuilds?: SortOrder
  }

  export type realmlistWhereUniqueInput = {
    id?: number
    name?: string
  }

  export type realmlistOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    port?: SortOrder
    icon?: SortOrder
    realmflags?: SortOrder
    timezone?: SortOrder
    allowedSecurityLevel?: SortOrder
    population?: SortOrder
    realmbuilds?: SortOrder
    _count?: realmlistCountOrderByAggregateInput
    _avg?: realmlistAvgOrderByAggregateInput
    _max?: realmlistMaxOrderByAggregateInput
    _min?: realmlistMinOrderByAggregateInput
    _sum?: realmlistSumOrderByAggregateInput
  }

  export type realmlistScalarWhereWithAggregatesInput = {
    AND?: Enumerable<realmlistScalarWhereWithAggregatesInput>
    OR?: Enumerable<realmlistScalarWhereWithAggregatesInput>
    NOT?: Enumerable<realmlistScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
    address?: StringWithAggregatesFilter | string
    port?: IntWithAggregatesFilter | number
    icon?: IntWithAggregatesFilter | number
    realmflags?: IntWithAggregatesFilter | number
    timezone?: IntWithAggregatesFilter | number
    allowedSecurityLevel?: IntWithAggregatesFilter | number
    population?: FloatWithAggregatesFilter | number
    realmbuilds?: StringWithAggregatesFilter | string
  }

  export type shop_coinsWhereInput = {
    AND?: Enumerable<shop_coinsWhereInput>
    OR?: Enumerable<shop_coinsWhereInput>
    NOT?: Enumerable<shop_coinsWhereInput>
    id?: IntFilter | number
    coins?: IntFilter | number
  }

  export type shop_coinsOrderByWithRelationInput = {
    id?: SortOrder
    coins?: SortOrder
  }

  export type shop_coinsWhereUniqueInput = {
    id?: number
  }

  export type shop_coinsOrderByWithAggregationInput = {
    id?: SortOrder
    coins?: SortOrder
    _count?: shop_coinsCountOrderByAggregateInput
    _avg?: shop_coinsAvgOrderByAggregateInput
    _max?: shop_coinsMaxOrderByAggregateInput
    _min?: shop_coinsMinOrderByAggregateInput
    _sum?: shop_coinsSumOrderByAggregateInput
  }

  export type shop_coinsScalarWhereWithAggregatesInput = {
    AND?: Enumerable<shop_coinsScalarWhereWithAggregatesInput>
    OR?: Enumerable<shop_coinsScalarWhereWithAggregatesInput>
    NOT?: Enumerable<shop_coinsScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    coins?: IntWithAggregatesFilter | number
  }

  export type shop_diffWhereInput = {
    AND?: Enumerable<shop_diffWhereInput>
    OR?: Enumerable<shop_diffWhereInput>
    NOT?: Enumerable<shop_diffWhereInput>
    guid?: BigIntFilter | bigint | number
    accountid?: IntFilter | number
    prev_bonus?: IntFilter | number
    new_bonus?: IntFilter | number
    date?: IntFilter | number
    query?: StringNullableFilter | string | null
  }

  export type shop_diffOrderByWithRelationInput = {
    guid?: SortOrder
    accountid?: SortOrder
    prev_bonus?: SortOrder
    new_bonus?: SortOrder
    date?: SortOrder
    query?: SortOrder
  }

  export type shop_diffWhereUniqueInput = {
    guid?: bigint | number
  }

  export type shop_diffOrderByWithAggregationInput = {
    guid?: SortOrder
    accountid?: SortOrder
    prev_bonus?: SortOrder
    new_bonus?: SortOrder
    date?: SortOrder
    query?: SortOrder
    _count?: shop_diffCountOrderByAggregateInput
    _avg?: shop_diffAvgOrderByAggregateInput
    _max?: shop_diffMaxOrderByAggregateInput
    _min?: shop_diffMinOrderByAggregateInput
    _sum?: shop_diffSumOrderByAggregateInput
  }

  export type shop_diffScalarWhereWithAggregatesInput = {
    AND?: Enumerable<shop_diffScalarWhereWithAggregatesInput>
    OR?: Enumerable<shop_diffScalarWhereWithAggregatesInput>
    NOT?: Enumerable<shop_diffScalarWhereWithAggregatesInput>
    guid?: BigIntWithAggregatesFilter | bigint | number
    accountid?: IntWithAggregatesFilter | number
    prev_bonus?: IntWithAggregatesFilter | number
    new_bonus?: IntWithAggregatesFilter | number
    date?: IntWithAggregatesFilter | number
    query?: StringNullableWithAggregatesFilter | string | null
  }

  export type statistics_onlineWhereInput = {
    AND?: Enumerable<statistics_onlineWhereInput>
    OR?: Enumerable<statistics_onlineWhereInput>
    NOT?: Enumerable<statistics_onlineWhereInput>
    guid?: IntFilter | number
    online?: IntNullableFilter | number | null
    online_alli?: IntNullableFilter | number | null
    online_horde?: IntNullableFilter | number | null
    connections?: IntNullableFilter | number | null
    realm?: IntNullableFilter | number | null
    date?: IntNullableFilter | number | null
  }

  export type statistics_onlineOrderByWithRelationInput = {
    guid?: SortOrder
    online?: SortOrder
    online_alli?: SortOrder
    online_horde?: SortOrder
    connections?: SortOrder
    realm?: SortOrder
    date?: SortOrder
  }

  export type statistics_onlineWhereUniqueInput = {
    guid?: number
  }

  export type statistics_onlineOrderByWithAggregationInput = {
    guid?: SortOrder
    online?: SortOrder
    online_alli?: SortOrder
    online_horde?: SortOrder
    connections?: SortOrder
    realm?: SortOrder
    date?: SortOrder
    _count?: statistics_onlineCountOrderByAggregateInput
    _avg?: statistics_onlineAvgOrderByAggregateInput
    _max?: statistics_onlineMaxOrderByAggregateInput
    _min?: statistics_onlineMinOrderByAggregateInput
    _sum?: statistics_onlineSumOrderByAggregateInput
  }

  export type statistics_onlineScalarWhereWithAggregatesInput = {
    AND?: Enumerable<statistics_onlineScalarWhereWithAggregatesInput>
    OR?: Enumerable<statistics_onlineScalarWhereWithAggregatesInput>
    NOT?: Enumerable<statistics_onlineScalarWhereWithAggregatesInput>
    guid?: IntWithAggregatesFilter | number
    online?: IntNullableWithAggregatesFilter | number | null
    online_alli?: IntNullableWithAggregatesFilter | number | null
    online_horde?: IntNullableWithAggregatesFilter | number | null
    connections?: IntNullableWithAggregatesFilter | number | null
    realm?: IntNullableWithAggregatesFilter | number | null
    date?: IntNullableWithAggregatesFilter | number | null
  }

  export type system_fingerprint_usageWhereInput = {
    AND?: Enumerable<system_fingerprint_usageWhereInput>
    OR?: Enumerable<system_fingerprint_usageWhereInput>
    NOT?: Enumerable<system_fingerprint_usageWhereInput>
    id?: IntFilter | number
    fingerprint?: IntFilter | number
    account?: IntFilter | number
    ip?: StringFilter | string
    realm?: IntFilter | number
    time?: DateTimeFilter | Date | string
    architecture?: StringNullableFilter | string | null
    cputype?: StringNullableFilter | string | null
    activecpus?: IntNullableFilter | number | null
    totalcpus?: IntNullableFilter | number | null
    pagesize?: IntNullableFilter | number | null
  }

  export type system_fingerprint_usageOrderByWithRelationInput = {
    id?: SortOrder
    fingerprint?: SortOrder
    account?: SortOrder
    ip?: SortOrder
    realm?: SortOrder
    time?: SortOrder
    architecture?: SortOrder
    cputype?: SortOrder
    activecpus?: SortOrder
    totalcpus?: SortOrder
    pagesize?: SortOrder
  }

  export type system_fingerprint_usageWhereUniqueInput = {
    id?: number
  }

  export type system_fingerprint_usageOrderByWithAggregationInput = {
    id?: SortOrder
    fingerprint?: SortOrder
    account?: SortOrder
    ip?: SortOrder
    realm?: SortOrder
    time?: SortOrder
    architecture?: SortOrder
    cputype?: SortOrder
    activecpus?: SortOrder
    totalcpus?: SortOrder
    pagesize?: SortOrder
    _count?: system_fingerprint_usageCountOrderByAggregateInput
    _avg?: system_fingerprint_usageAvgOrderByAggregateInput
    _max?: system_fingerprint_usageMaxOrderByAggregateInput
    _min?: system_fingerprint_usageMinOrderByAggregateInput
    _sum?: system_fingerprint_usageSumOrderByAggregateInput
  }

  export type system_fingerprint_usageScalarWhereWithAggregatesInput = {
    AND?: Enumerable<system_fingerprint_usageScalarWhereWithAggregatesInput>
    OR?: Enumerable<system_fingerprint_usageScalarWhereWithAggregatesInput>
    NOT?: Enumerable<system_fingerprint_usageScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    fingerprint?: IntWithAggregatesFilter | number
    account?: IntWithAggregatesFilter | number
    ip?: StringWithAggregatesFilter | string
    realm?: IntWithAggregatesFilter | number
    time?: DateTimeWithAggregatesFilter | Date | string
    architecture?: StringNullableWithAggregatesFilter | string | null
    cputype?: StringNullableWithAggregatesFilter | string | null
    activecpus?: IntNullableWithAggregatesFilter | number | null
    totalcpus?: IntNullableWithAggregatesFilter | number | null
    pagesize?: IntNullableWithAggregatesFilter | number | null
  }

  export type uptimeWhereInput = {
    AND?: Enumerable<uptimeWhereInput>
    OR?: Enumerable<uptimeWhereInput>
    NOT?: Enumerable<uptimeWhereInput>
    realmid?: IntFilter | number
    starttime?: BigIntFilter | bigint | number
    startstring?: StringFilter | string
    uptime?: BigIntFilter | bigint | number
    onlineplayers?: IntFilter | number
    maxplayers?: IntFilter | number
    revision?: StringFilter | string
  }

  export type uptimeOrderByWithRelationInput = {
    realmid?: SortOrder
    starttime?: SortOrder
    startstring?: SortOrder
    uptime?: SortOrder
    onlineplayers?: SortOrder
    maxplayers?: SortOrder
    revision?: SortOrder
  }

  export type uptimeWhereUniqueInput = {
    realmid_starttime?: uptimeRealmidStarttimeCompoundUniqueInput
  }

  export type uptimeOrderByWithAggregationInput = {
    realmid?: SortOrder
    starttime?: SortOrder
    startstring?: SortOrder
    uptime?: SortOrder
    onlineplayers?: SortOrder
    maxplayers?: SortOrder
    revision?: SortOrder
    _count?: uptimeCountOrderByAggregateInput
    _avg?: uptimeAvgOrderByAggregateInput
    _max?: uptimeMaxOrderByAggregateInput
    _min?: uptimeMinOrderByAggregateInput
    _sum?: uptimeSumOrderByAggregateInput
  }

  export type uptimeScalarWhereWithAggregatesInput = {
    AND?: Enumerable<uptimeScalarWhereWithAggregatesInput>
    OR?: Enumerable<uptimeScalarWhereWithAggregatesInput>
    NOT?: Enumerable<uptimeScalarWhereWithAggregatesInput>
    realmid?: IntWithAggregatesFilter | number
    starttime?: BigIntWithAggregatesFilter | bigint | number
    startstring?: StringWithAggregatesFilter | string
    uptime?: BigIntWithAggregatesFilter | bigint | number
    onlineplayers?: IntWithAggregatesFilter | number
    maxplayers?: IntWithAggregatesFilter | number
    revision?: StringWithAggregatesFilter | string
  }

  export type accountCreateInput = {
    username: string
    sha_pass_hash: string
    rank?: number
    sessionkey?: string | null
    v?: string | null
    s?: string | null
    email?: string | null
    joindate?: Date | string
    tfa_verif?: string | null
    last_ip?: string
    last_local_ip?: string
    failed_logins?: number
    locked?: number
    last_login?: Date | string
    online?: number
    expansion?: number
    mutetime?: bigint | number
    mutereason?: string
    muteby?: string
    locale?: number
    os?: string
    current_realm?: number
    banned?: boolean
    flags?: number
    security?: string | null
    pass_verif?: string | null
    email_verif?: boolean
    forum_username?: string | null
    token_key?: string | null
    email_keyword?: string | null
    email_status?: number | null
    email_sub?: number
    comments?: string | null
    geolock_pin?: number | null
  }

  export type accountUncheckedCreateInput = {
    id?: number
    username: string
    sha_pass_hash: string
    rank?: number
    sessionkey?: string | null
    v?: string | null
    s?: string | null
    email?: string | null
    joindate?: Date | string
    tfa_verif?: string | null
    last_ip?: string
    last_local_ip?: string
    failed_logins?: number
    locked?: number
    last_login?: Date | string
    online?: number
    expansion?: number
    mutetime?: bigint | number
    mutereason?: string
    muteby?: string
    locale?: number
    os?: string
    current_realm?: number
    banned?: boolean
    flags?: number
    security?: string | null
    pass_verif?: string | null
    email_verif?: boolean
    forum_username?: string | null
    token_key?: string | null
    email_keyword?: string | null
    email_status?: number | null
    email_sub?: number
    comments?: string | null
    geolock_pin?: number | null
  }

  export type accountUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    sha_pass_hash?: StringFieldUpdateOperationsInput | string
    rank?: IntFieldUpdateOperationsInput | number
    sessionkey?: NullableStringFieldUpdateOperationsInput | string | null
    v?: NullableStringFieldUpdateOperationsInput | string | null
    s?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    joindate?: DateTimeFieldUpdateOperationsInput | Date | string
    tfa_verif?: NullableStringFieldUpdateOperationsInput | string | null
    last_ip?: StringFieldUpdateOperationsInput | string
    last_local_ip?: StringFieldUpdateOperationsInput | string
    failed_logins?: IntFieldUpdateOperationsInput | number
    locked?: IntFieldUpdateOperationsInput | number
    last_login?: DateTimeFieldUpdateOperationsInput | Date | string
    online?: IntFieldUpdateOperationsInput | number
    expansion?: IntFieldUpdateOperationsInput | number
    mutetime?: BigIntFieldUpdateOperationsInput | bigint | number
    mutereason?: StringFieldUpdateOperationsInput | string
    muteby?: StringFieldUpdateOperationsInput | string
    locale?: IntFieldUpdateOperationsInput | number
    os?: StringFieldUpdateOperationsInput | string
    current_realm?: IntFieldUpdateOperationsInput | number
    banned?: BoolFieldUpdateOperationsInput | boolean
    flags?: IntFieldUpdateOperationsInput | number
    security?: NullableStringFieldUpdateOperationsInput | string | null
    pass_verif?: NullableStringFieldUpdateOperationsInput | string | null
    email_verif?: BoolFieldUpdateOperationsInput | boolean
    forum_username?: NullableStringFieldUpdateOperationsInput | string | null
    token_key?: NullableStringFieldUpdateOperationsInput | string | null
    email_keyword?: NullableStringFieldUpdateOperationsInput | string | null
    email_status?: NullableIntFieldUpdateOperationsInput | number | null
    email_sub?: IntFieldUpdateOperationsInput | number
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    geolock_pin?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type accountUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    sha_pass_hash?: StringFieldUpdateOperationsInput | string
    rank?: IntFieldUpdateOperationsInput | number
    sessionkey?: NullableStringFieldUpdateOperationsInput | string | null
    v?: NullableStringFieldUpdateOperationsInput | string | null
    s?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    joindate?: DateTimeFieldUpdateOperationsInput | Date | string
    tfa_verif?: NullableStringFieldUpdateOperationsInput | string | null
    last_ip?: StringFieldUpdateOperationsInput | string
    last_local_ip?: StringFieldUpdateOperationsInput | string
    failed_logins?: IntFieldUpdateOperationsInput | number
    locked?: IntFieldUpdateOperationsInput | number
    last_login?: DateTimeFieldUpdateOperationsInput | Date | string
    online?: IntFieldUpdateOperationsInput | number
    expansion?: IntFieldUpdateOperationsInput | number
    mutetime?: BigIntFieldUpdateOperationsInput | bigint | number
    mutereason?: StringFieldUpdateOperationsInput | string
    muteby?: StringFieldUpdateOperationsInput | string
    locale?: IntFieldUpdateOperationsInput | number
    os?: StringFieldUpdateOperationsInput | string
    current_realm?: IntFieldUpdateOperationsInput | number
    banned?: BoolFieldUpdateOperationsInput | boolean
    flags?: IntFieldUpdateOperationsInput | number
    security?: NullableStringFieldUpdateOperationsInput | string | null
    pass_verif?: NullableStringFieldUpdateOperationsInput | string | null
    email_verif?: BoolFieldUpdateOperationsInput | boolean
    forum_username?: NullableStringFieldUpdateOperationsInput | string | null
    token_key?: NullableStringFieldUpdateOperationsInput | string | null
    email_keyword?: NullableStringFieldUpdateOperationsInput | string | null
    email_status?: NullableIntFieldUpdateOperationsInput | number | null
    email_sub?: IntFieldUpdateOperationsInput | number
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    geolock_pin?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type accountCreateManyInput = {
    id?: number
    username: string
    sha_pass_hash: string
    rank?: number
    sessionkey?: string | null
    v?: string | null
    s?: string | null
    email?: string | null
    joindate?: Date | string
    tfa_verif?: string | null
    last_ip?: string
    last_local_ip?: string
    failed_logins?: number
    locked?: number
    last_login?: Date | string
    online?: number
    expansion?: number
    mutetime?: bigint | number
    mutereason?: string
    muteby?: string
    locale?: number
    os?: string
    current_realm?: number
    banned?: boolean
    flags?: number
    security?: string | null
    pass_verif?: string | null
    email_verif?: boolean
    forum_username?: string | null
    token_key?: string | null
    email_keyword?: string | null
    email_status?: number | null
    email_sub?: number
    comments?: string | null
    geolock_pin?: number | null
  }

  export type accountUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    sha_pass_hash?: StringFieldUpdateOperationsInput | string
    rank?: IntFieldUpdateOperationsInput | number
    sessionkey?: NullableStringFieldUpdateOperationsInput | string | null
    v?: NullableStringFieldUpdateOperationsInput | string | null
    s?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    joindate?: DateTimeFieldUpdateOperationsInput | Date | string
    tfa_verif?: NullableStringFieldUpdateOperationsInput | string | null
    last_ip?: StringFieldUpdateOperationsInput | string
    last_local_ip?: StringFieldUpdateOperationsInput | string
    failed_logins?: IntFieldUpdateOperationsInput | number
    locked?: IntFieldUpdateOperationsInput | number
    last_login?: DateTimeFieldUpdateOperationsInput | Date | string
    online?: IntFieldUpdateOperationsInput | number
    expansion?: IntFieldUpdateOperationsInput | number
    mutetime?: BigIntFieldUpdateOperationsInput | bigint | number
    mutereason?: StringFieldUpdateOperationsInput | string
    muteby?: StringFieldUpdateOperationsInput | string
    locale?: IntFieldUpdateOperationsInput | number
    os?: StringFieldUpdateOperationsInput | string
    current_realm?: IntFieldUpdateOperationsInput | number
    banned?: BoolFieldUpdateOperationsInput | boolean
    flags?: IntFieldUpdateOperationsInput | number
    security?: NullableStringFieldUpdateOperationsInput | string | null
    pass_verif?: NullableStringFieldUpdateOperationsInput | string | null
    email_verif?: BoolFieldUpdateOperationsInput | boolean
    forum_username?: NullableStringFieldUpdateOperationsInput | string | null
    token_key?: NullableStringFieldUpdateOperationsInput | string | null
    email_keyword?: NullableStringFieldUpdateOperationsInput | string | null
    email_status?: NullableIntFieldUpdateOperationsInput | number | null
    email_sub?: IntFieldUpdateOperationsInput | number
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    geolock_pin?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type accountUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    sha_pass_hash?: StringFieldUpdateOperationsInput | string
    rank?: IntFieldUpdateOperationsInput | number
    sessionkey?: NullableStringFieldUpdateOperationsInput | string | null
    v?: NullableStringFieldUpdateOperationsInput | string | null
    s?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    joindate?: DateTimeFieldUpdateOperationsInput | Date | string
    tfa_verif?: NullableStringFieldUpdateOperationsInput | string | null
    last_ip?: StringFieldUpdateOperationsInput | string
    last_local_ip?: StringFieldUpdateOperationsInput | string
    failed_logins?: IntFieldUpdateOperationsInput | number
    locked?: IntFieldUpdateOperationsInput | number
    last_login?: DateTimeFieldUpdateOperationsInput | Date | string
    online?: IntFieldUpdateOperationsInput | number
    expansion?: IntFieldUpdateOperationsInput | number
    mutetime?: BigIntFieldUpdateOperationsInput | bigint | number
    mutereason?: StringFieldUpdateOperationsInput | string
    muteby?: StringFieldUpdateOperationsInput | string
    locale?: IntFieldUpdateOperationsInput | number
    os?: StringFieldUpdateOperationsInput | string
    current_realm?: IntFieldUpdateOperationsInput | number
    banned?: BoolFieldUpdateOperationsInput | boolean
    flags?: IntFieldUpdateOperationsInput | number
    security?: NullableStringFieldUpdateOperationsInput | string | null
    pass_verif?: NullableStringFieldUpdateOperationsInput | string | null
    email_verif?: BoolFieldUpdateOperationsInput | boolean
    forum_username?: NullableStringFieldUpdateOperationsInput | string | null
    token_key?: NullableStringFieldUpdateOperationsInput | string | null
    email_keyword?: NullableStringFieldUpdateOperationsInput | string | null
    email_status?: NullableIntFieldUpdateOperationsInput | number | null
    email_sub?: IntFieldUpdateOperationsInput | number
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    geolock_pin?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type account_bannedCreateInput = {
    banid?: bigint | number
    id?: bigint | number
    bandate?: bigint | number
    unbandate?: bigint | number
    bannedby: string
    banreason: string
    active?: number
    realm?: number
    gmlevel?: number
  }

  export type account_bannedUncheckedCreateInput = {
    banid?: bigint | number
    id?: bigint | number
    bandate?: bigint | number
    unbandate?: bigint | number
    bannedby: string
    banreason: string
    active?: number
    realm?: number
    gmlevel?: number
  }

  export type account_bannedUpdateInput = {
    banid?: BigIntFieldUpdateOperationsInput | bigint | number
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    bandate?: BigIntFieldUpdateOperationsInput | bigint | number
    unbandate?: BigIntFieldUpdateOperationsInput | bigint | number
    bannedby?: StringFieldUpdateOperationsInput | string
    banreason?: StringFieldUpdateOperationsInput | string
    active?: IntFieldUpdateOperationsInput | number
    realm?: IntFieldUpdateOperationsInput | number
    gmlevel?: IntFieldUpdateOperationsInput | number
  }

  export type account_bannedUncheckedUpdateInput = {
    banid?: BigIntFieldUpdateOperationsInput | bigint | number
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    bandate?: BigIntFieldUpdateOperationsInput | bigint | number
    unbandate?: BigIntFieldUpdateOperationsInput | bigint | number
    bannedby?: StringFieldUpdateOperationsInput | string
    banreason?: StringFieldUpdateOperationsInput | string
    active?: IntFieldUpdateOperationsInput | number
    realm?: IntFieldUpdateOperationsInput | number
    gmlevel?: IntFieldUpdateOperationsInput | number
  }

  export type account_bannedCreateManyInput = {
    banid?: bigint | number
    id?: bigint | number
    bandate?: bigint | number
    unbandate?: bigint | number
    bannedby: string
    banreason: string
    active?: number
    realm?: number
    gmlevel?: number
  }

  export type account_bannedUpdateManyMutationInput = {
    banid?: BigIntFieldUpdateOperationsInput | bigint | number
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    bandate?: BigIntFieldUpdateOperationsInput | bigint | number
    unbandate?: BigIntFieldUpdateOperationsInput | bigint | number
    bannedby?: StringFieldUpdateOperationsInput | string
    banreason?: StringFieldUpdateOperationsInput | string
    active?: IntFieldUpdateOperationsInput | number
    realm?: IntFieldUpdateOperationsInput | number
    gmlevel?: IntFieldUpdateOperationsInput | number
  }

  export type account_bannedUncheckedUpdateManyInput = {
    banid?: BigIntFieldUpdateOperationsInput | bigint | number
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    bandate?: BigIntFieldUpdateOperationsInput | bigint | number
    unbandate?: BigIntFieldUpdateOperationsInput | bigint | number
    bannedby?: StringFieldUpdateOperationsInput | string
    banreason?: StringFieldUpdateOperationsInput | string
    active?: IntFieldUpdateOperationsInput | number
    realm?: IntFieldUpdateOperationsInput | number
    gmlevel?: IntFieldUpdateOperationsInput | number
  }

  export type account_mailstatusCreateInput = {
    account_id?: number
    email?: string | null
    status?: number | null
    letterid?: number | null
  }

  export type account_mailstatusUncheckedCreateInput = {
    message_id?: number
    account_id?: number
    email?: string | null
    status?: number | null
    letterid?: number | null
  }

  export type account_mailstatusUpdateInput = {
    account_id?: IntFieldUpdateOperationsInput | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableIntFieldUpdateOperationsInput | number | null
    letterid?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type account_mailstatusUncheckedUpdateInput = {
    message_id?: IntFieldUpdateOperationsInput | number
    account_id?: IntFieldUpdateOperationsInput | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableIntFieldUpdateOperationsInput | number | null
    letterid?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type account_mailstatusCreateManyInput = {
    message_id?: number
    account_id?: number
    email?: string | null
    status?: number | null
    letterid?: number | null
  }

  export type account_mailstatusUpdateManyMutationInput = {
    account_id?: IntFieldUpdateOperationsInput | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableIntFieldUpdateOperationsInput | number | null
    letterid?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type account_mailstatusUncheckedUpdateManyInput = {
    message_id?: IntFieldUpdateOperationsInput | number
    account_id?: IntFieldUpdateOperationsInput | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableIntFieldUpdateOperationsInput | number | null
    letterid?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type account_mailstatus_archiveCreateInput = {
    account_id?: number
    email?: string | null
    status?: number | null
    letterid?: number | null
  }

  export type account_mailstatus_archiveUncheckedCreateInput = {
    message_id?: number
    account_id?: number
    email?: string | null
    status?: number | null
    letterid?: number | null
  }

  export type account_mailstatus_archiveUpdateInput = {
    account_id?: IntFieldUpdateOperationsInput | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableIntFieldUpdateOperationsInput | number | null
    letterid?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type account_mailstatus_archiveUncheckedUpdateInput = {
    message_id?: IntFieldUpdateOperationsInput | number
    account_id?: IntFieldUpdateOperationsInput | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableIntFieldUpdateOperationsInput | number | null
    letterid?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type account_mailstatus_archiveCreateManyInput = {
    message_id?: number
    account_id?: number
    email?: string | null
    status?: number | null
    letterid?: number | null
  }

  export type account_mailstatus_archiveUpdateManyMutationInput = {
    account_id?: IntFieldUpdateOperationsInput | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableIntFieldUpdateOperationsInput | number | null
    letterid?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type account_mailstatus_archiveUncheckedUpdateManyInput = {
    message_id?: IntFieldUpdateOperationsInput | number
    account_id?: IntFieldUpdateOperationsInput | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableIntFieldUpdateOperationsInput | number | null
    letterid?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type account_twofactor_allowedCreateInput = {
    ip_address?: string
    account_id?: number | null
    expires_at?: bigint | number | null
  }

  export type account_twofactor_allowedUncheckedCreateInput = {
    id?: number
    ip_address?: string
    account_id?: number | null
    expires_at?: bigint | number | null
  }

  export type account_twofactor_allowedUpdateInput = {
    ip_address?: StringFieldUpdateOperationsInput | string
    account_id?: NullableIntFieldUpdateOperationsInput | number | null
    expires_at?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type account_twofactor_allowedUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    ip_address?: StringFieldUpdateOperationsInput | string
    account_id?: NullableIntFieldUpdateOperationsInput | number | null
    expires_at?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type account_twofactor_allowedCreateManyInput = {
    id?: number
    ip_address?: string
    account_id?: number | null
    expires_at?: bigint | number | null
  }

  export type account_twofactor_allowedUpdateManyMutationInput = {
    ip_address?: StringFieldUpdateOperationsInput | string
    account_id?: NullableIntFieldUpdateOperationsInput | number | null
    expires_at?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type account_twofactor_allowedUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    ip_address?: StringFieldUpdateOperationsInput | string
    account_id?: NullableIntFieldUpdateOperationsInput | number | null
    expires_at?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type antispam_blacklistCreateInput = {
    string: string
  }

  export type antispam_blacklistUncheckedCreateInput = {
    string: string
  }

  export type antispam_blacklistUpdateInput = {
    string?: StringFieldUpdateOperationsInput | string
  }

  export type antispam_blacklistUncheckedUpdateInput = {
    string?: StringFieldUpdateOperationsInput | string
  }

  export type antispam_blacklistCreateManyInput = {
    string: string
  }

  export type antispam_blacklistUpdateManyMutationInput = {
    string?: StringFieldUpdateOperationsInput | string
  }

  export type antispam_blacklistUncheckedUpdateManyInput = {
    string?: StringFieldUpdateOperationsInput | string
  }

  export type antispam_clientCreateInput = {
    Regex: string
    Note?: string | null
  }

  export type antispam_clientUncheckedCreateInput = {
    Regex: string
    Note?: string | null
  }

  export type antispam_clientUpdateInput = {
    Regex?: StringFieldUpdateOperationsInput | string
    Note?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type antispam_clientUncheckedUpdateInput = {
    Regex?: StringFieldUpdateOperationsInput | string
    Note?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type antispam_clientCreateManyInput = {
    Regex: string
    Note?: string | null
  }

  export type antispam_clientUpdateManyMutationInput = {
    Regex?: StringFieldUpdateOperationsInput | string
    Note?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type antispam_clientUncheckedUpdateManyInput = {
    Regex?: StringFieldUpdateOperationsInput | string
    Note?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type antispam_replacementCreateInput = {
    from?: string
    to?: string
  }

  export type antispam_replacementUncheckedCreateInput = {
    from?: string
    to?: string
  }

  export type antispam_replacementUpdateInput = {
    from?: StringFieldUpdateOperationsInput | string
    to?: StringFieldUpdateOperationsInput | string
  }

  export type antispam_replacementUncheckedUpdateInput = {
    from?: StringFieldUpdateOperationsInput | string
    to?: StringFieldUpdateOperationsInput | string
  }

  export type antispam_replacementCreateManyInput = {
    from?: string
    to?: string
  }

  export type antispam_replacementUpdateManyMutationInput = {
    from?: StringFieldUpdateOperationsInput | string
    to?: StringFieldUpdateOperationsInput | string
  }

  export type antispam_replacementUncheckedUpdateManyInput = {
    from?: StringFieldUpdateOperationsInput | string
    to?: StringFieldUpdateOperationsInput | string
  }

  export type antispam_unicode_replacementCreateInput = {
    from?: number
    to?: number
  }

  export type antispam_unicode_replacementUncheckedCreateInput = {
    from?: number
    to?: number
  }

  export type antispam_unicode_replacementUpdateInput = {
    from?: IntFieldUpdateOperationsInput | number
    to?: IntFieldUpdateOperationsInput | number
  }

  export type antispam_unicode_replacementUncheckedUpdateInput = {
    from?: IntFieldUpdateOperationsInput | number
    to?: IntFieldUpdateOperationsInput | number
  }

  export type antispam_unicode_replacementCreateManyInput = {
    from?: number
    to?: number
  }

  export type antispam_unicode_replacementUpdateManyMutationInput = {
    from?: IntFieldUpdateOperationsInput | number
    to?: IntFieldUpdateOperationsInput | number
  }

  export type antispam_unicode_replacementUncheckedUpdateManyInput = {
    from?: IntFieldUpdateOperationsInput | number
    to?: IntFieldUpdateOperationsInput | number
  }

  export type configCreateInput = {
    id: number
    value?: string | null
    comment?: string | null
  }

  export type configUncheckedCreateInput = {
    id: number
    value?: string | null
    comment?: string | null
  }

  export type configUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    value?: NullableStringFieldUpdateOperationsInput | string | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type configUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    value?: NullableStringFieldUpdateOperationsInput | string | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type configCreateManyInput = {
    id: number
    value?: string | null
    comment?: string | null
  }

  export type configUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    value?: NullableStringFieldUpdateOperationsInput | string | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type configUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    value?: NullableStringFieldUpdateOperationsInput | string | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ip_bannedCreateInput = {
    ip?: string
    bandate: number
    unbandate: number
    bannedby?: string
    banreason?: string
  }

  export type ip_bannedUncheckedCreateInput = {
    ip?: string
    bandate: number
    unbandate: number
    bannedby?: string
    banreason?: string
  }

  export type ip_bannedUpdateInput = {
    ip?: StringFieldUpdateOperationsInput | string
    bandate?: IntFieldUpdateOperationsInput | number
    unbandate?: IntFieldUpdateOperationsInput | number
    bannedby?: StringFieldUpdateOperationsInput | string
    banreason?: StringFieldUpdateOperationsInput | string
  }

  export type ip_bannedUncheckedUpdateInput = {
    ip?: StringFieldUpdateOperationsInput | string
    bandate?: IntFieldUpdateOperationsInput | number
    unbandate?: IntFieldUpdateOperationsInput | number
    bannedby?: StringFieldUpdateOperationsInput | string
    banreason?: StringFieldUpdateOperationsInput | string
  }

  export type ip_bannedCreateManyInput = {
    ip?: string
    bandate: number
    unbandate: number
    bannedby?: string
    banreason?: string
  }

  export type ip_bannedUpdateManyMutationInput = {
    ip?: StringFieldUpdateOperationsInput | string
    bandate?: IntFieldUpdateOperationsInput | number
    unbandate?: IntFieldUpdateOperationsInput | number
    bannedby?: StringFieldUpdateOperationsInput | string
    banreason?: StringFieldUpdateOperationsInput | string
  }

  export type ip_bannedUncheckedUpdateManyInput = {
    ip?: StringFieldUpdateOperationsInput | string
    bandate?: IntFieldUpdateOperationsInput | number
    unbandate?: IntFieldUpdateOperationsInput | number
    bannedby?: StringFieldUpdateOperationsInput | string
    banreason?: StringFieldUpdateOperationsInput | string
  }

  export type migrationsCreateInput = {
    id: string
    Name?: string
    Hash?: string
  }

  export type migrationsUncheckedCreateInput = {
    id: string
    Name?: string
    Hash?: string
  }

  export type migrationsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    Name?: StringFieldUpdateOperationsInput | string
    Hash?: StringFieldUpdateOperationsInput | string
  }

  export type migrationsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    Name?: StringFieldUpdateOperationsInput | string
    Hash?: StringFieldUpdateOperationsInput | string
  }

  export type migrationsCreateManyInput = {
    id: string
    Name?: string
    Hash?: string
  }

  export type migrationsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    Name?: StringFieldUpdateOperationsInput | string
    Hash?: StringFieldUpdateOperationsInput | string
  }

  export type migrationsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    Name?: StringFieldUpdateOperationsInput | string
    Hash?: StringFieldUpdateOperationsInput | string
  }

  export type realmcharactersCreateInput = {
    realmid?: number
    acctid: bigint | number
    numchars?: number
  }

  export type realmcharactersUncheckedCreateInput = {
    realmid?: number
    acctid: bigint | number
    numchars?: number
  }

  export type realmcharactersUpdateInput = {
    realmid?: IntFieldUpdateOperationsInput | number
    acctid?: BigIntFieldUpdateOperationsInput | bigint | number
    numchars?: IntFieldUpdateOperationsInput | number
  }

  export type realmcharactersUncheckedUpdateInput = {
    realmid?: IntFieldUpdateOperationsInput | number
    acctid?: BigIntFieldUpdateOperationsInput | bigint | number
    numchars?: IntFieldUpdateOperationsInput | number
  }

  export type realmcharactersCreateManyInput = {
    realmid?: number
    acctid: bigint | number
    numchars?: number
  }

  export type realmcharactersUpdateManyMutationInput = {
    realmid?: IntFieldUpdateOperationsInput | number
    acctid?: BigIntFieldUpdateOperationsInput | bigint | number
    numchars?: IntFieldUpdateOperationsInput | number
  }

  export type realmcharactersUncheckedUpdateManyInput = {
    realmid?: IntFieldUpdateOperationsInput | number
    acctid?: BigIntFieldUpdateOperationsInput | bigint | number
    numchars?: IntFieldUpdateOperationsInput | number
  }

  export type realmlistCreateInput = {
    name?: string
    address?: string
    port?: number
    icon?: number
    realmflags?: number
    timezone?: number
    allowedSecurityLevel?: number
    population?: number
    realmbuilds?: string
  }

  export type realmlistUncheckedCreateInput = {
    id?: number
    name?: string
    address?: string
    port?: number
    icon?: number
    realmflags?: number
    timezone?: number
    allowedSecurityLevel?: number
    population?: number
    realmbuilds?: string
  }

  export type realmlistUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    port?: IntFieldUpdateOperationsInput | number
    icon?: IntFieldUpdateOperationsInput | number
    realmflags?: IntFieldUpdateOperationsInput | number
    timezone?: IntFieldUpdateOperationsInput | number
    allowedSecurityLevel?: IntFieldUpdateOperationsInput | number
    population?: FloatFieldUpdateOperationsInput | number
    realmbuilds?: StringFieldUpdateOperationsInput | string
  }

  export type realmlistUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    port?: IntFieldUpdateOperationsInput | number
    icon?: IntFieldUpdateOperationsInput | number
    realmflags?: IntFieldUpdateOperationsInput | number
    timezone?: IntFieldUpdateOperationsInput | number
    allowedSecurityLevel?: IntFieldUpdateOperationsInput | number
    population?: FloatFieldUpdateOperationsInput | number
    realmbuilds?: StringFieldUpdateOperationsInput | string
  }

  export type realmlistCreateManyInput = {
    id?: number
    name?: string
    address?: string
    port?: number
    icon?: number
    realmflags?: number
    timezone?: number
    allowedSecurityLevel?: number
    population?: number
    realmbuilds?: string
  }

  export type realmlistUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    port?: IntFieldUpdateOperationsInput | number
    icon?: IntFieldUpdateOperationsInput | number
    realmflags?: IntFieldUpdateOperationsInput | number
    timezone?: IntFieldUpdateOperationsInput | number
    allowedSecurityLevel?: IntFieldUpdateOperationsInput | number
    population?: FloatFieldUpdateOperationsInput | number
    realmbuilds?: StringFieldUpdateOperationsInput | string
  }

  export type realmlistUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    port?: IntFieldUpdateOperationsInput | number
    icon?: IntFieldUpdateOperationsInput | number
    realmflags?: IntFieldUpdateOperationsInput | number
    timezone?: IntFieldUpdateOperationsInput | number
    allowedSecurityLevel?: IntFieldUpdateOperationsInput | number
    population?: FloatFieldUpdateOperationsInput | number
    realmbuilds?: StringFieldUpdateOperationsInput | string
  }

  export type shop_coinsCreateInput = {
    id: number
    coins?: number
  }

  export type shop_coinsUncheckedCreateInput = {
    id: number
    coins?: number
  }

  export type shop_coinsUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    coins?: IntFieldUpdateOperationsInput | number
  }

  export type shop_coinsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    coins?: IntFieldUpdateOperationsInput | number
  }

  export type shop_coinsCreateManyInput = {
    id: number
    coins?: number
  }

  export type shop_coinsUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    coins?: IntFieldUpdateOperationsInput | number
  }

  export type shop_coinsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    coins?: IntFieldUpdateOperationsInput | number
  }

  export type shop_diffCreateInput = {
    guid?: bigint | number
    accountid?: number
    prev_bonus: number
    new_bonus: number
    date?: number
    query?: string | null
  }

  export type shop_diffUncheckedCreateInput = {
    guid?: bigint | number
    accountid?: number
    prev_bonus: number
    new_bonus: number
    date?: number
    query?: string | null
  }

  export type shop_diffUpdateInput = {
    guid?: BigIntFieldUpdateOperationsInput | bigint | number
    accountid?: IntFieldUpdateOperationsInput | number
    prev_bonus?: IntFieldUpdateOperationsInput | number
    new_bonus?: IntFieldUpdateOperationsInput | number
    date?: IntFieldUpdateOperationsInput | number
    query?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type shop_diffUncheckedUpdateInput = {
    guid?: BigIntFieldUpdateOperationsInput | bigint | number
    accountid?: IntFieldUpdateOperationsInput | number
    prev_bonus?: IntFieldUpdateOperationsInput | number
    new_bonus?: IntFieldUpdateOperationsInput | number
    date?: IntFieldUpdateOperationsInput | number
    query?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type shop_diffCreateManyInput = {
    guid?: bigint | number
    accountid?: number
    prev_bonus: number
    new_bonus: number
    date?: number
    query?: string | null
  }

  export type shop_diffUpdateManyMutationInput = {
    guid?: BigIntFieldUpdateOperationsInput | bigint | number
    accountid?: IntFieldUpdateOperationsInput | number
    prev_bonus?: IntFieldUpdateOperationsInput | number
    new_bonus?: IntFieldUpdateOperationsInput | number
    date?: IntFieldUpdateOperationsInput | number
    query?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type shop_diffUncheckedUpdateManyInput = {
    guid?: BigIntFieldUpdateOperationsInput | bigint | number
    accountid?: IntFieldUpdateOperationsInput | number
    prev_bonus?: IntFieldUpdateOperationsInput | number
    new_bonus?: IntFieldUpdateOperationsInput | number
    date?: IntFieldUpdateOperationsInput | number
    query?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type statistics_onlineCreateInput = {
    online?: number | null
    online_alli?: number | null
    online_horde?: number | null
    connections?: number | null
    realm?: number | null
    date?: number | null
  }

  export type statistics_onlineUncheckedCreateInput = {
    guid?: number
    online?: number | null
    online_alli?: number | null
    online_horde?: number | null
    connections?: number | null
    realm?: number | null
    date?: number | null
  }

  export type statistics_onlineUpdateInput = {
    online?: NullableIntFieldUpdateOperationsInput | number | null
    online_alli?: NullableIntFieldUpdateOperationsInput | number | null
    online_horde?: NullableIntFieldUpdateOperationsInput | number | null
    connections?: NullableIntFieldUpdateOperationsInput | number | null
    realm?: NullableIntFieldUpdateOperationsInput | number | null
    date?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type statistics_onlineUncheckedUpdateInput = {
    guid?: IntFieldUpdateOperationsInput | number
    online?: NullableIntFieldUpdateOperationsInput | number | null
    online_alli?: NullableIntFieldUpdateOperationsInput | number | null
    online_horde?: NullableIntFieldUpdateOperationsInput | number | null
    connections?: NullableIntFieldUpdateOperationsInput | number | null
    realm?: NullableIntFieldUpdateOperationsInput | number | null
    date?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type statistics_onlineCreateManyInput = {
    guid?: number
    online?: number | null
    online_alli?: number | null
    online_horde?: number | null
    connections?: number | null
    realm?: number | null
    date?: number | null
  }

  export type statistics_onlineUpdateManyMutationInput = {
    online?: NullableIntFieldUpdateOperationsInput | number | null
    online_alli?: NullableIntFieldUpdateOperationsInput | number | null
    online_horde?: NullableIntFieldUpdateOperationsInput | number | null
    connections?: NullableIntFieldUpdateOperationsInput | number | null
    realm?: NullableIntFieldUpdateOperationsInput | number | null
    date?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type statistics_onlineUncheckedUpdateManyInput = {
    guid?: IntFieldUpdateOperationsInput | number
    online?: NullableIntFieldUpdateOperationsInput | number | null
    online_alli?: NullableIntFieldUpdateOperationsInput | number | null
    online_horde?: NullableIntFieldUpdateOperationsInput | number | null
    connections?: NullableIntFieldUpdateOperationsInput | number | null
    realm?: NullableIntFieldUpdateOperationsInput | number | null
    date?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type system_fingerprint_usageCreateInput = {
    fingerprint: number
    account: number
    ip: string
    realm: number
    time?: Date | string
    architecture?: string | null
    cputype?: string | null
    activecpus?: number | null
    totalcpus?: number | null
    pagesize?: number | null
  }

  export type system_fingerprint_usageUncheckedCreateInput = {
    id?: number
    fingerprint: number
    account: number
    ip: string
    realm: number
    time?: Date | string
    architecture?: string | null
    cputype?: string | null
    activecpus?: number | null
    totalcpus?: number | null
    pagesize?: number | null
  }

  export type system_fingerprint_usageUpdateInput = {
    fingerprint?: IntFieldUpdateOperationsInput | number
    account?: IntFieldUpdateOperationsInput | number
    ip?: StringFieldUpdateOperationsInput | string
    realm?: IntFieldUpdateOperationsInput | number
    time?: DateTimeFieldUpdateOperationsInput | Date | string
    architecture?: NullableStringFieldUpdateOperationsInput | string | null
    cputype?: NullableStringFieldUpdateOperationsInput | string | null
    activecpus?: NullableIntFieldUpdateOperationsInput | number | null
    totalcpus?: NullableIntFieldUpdateOperationsInput | number | null
    pagesize?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type system_fingerprint_usageUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    fingerprint?: IntFieldUpdateOperationsInput | number
    account?: IntFieldUpdateOperationsInput | number
    ip?: StringFieldUpdateOperationsInput | string
    realm?: IntFieldUpdateOperationsInput | number
    time?: DateTimeFieldUpdateOperationsInput | Date | string
    architecture?: NullableStringFieldUpdateOperationsInput | string | null
    cputype?: NullableStringFieldUpdateOperationsInput | string | null
    activecpus?: NullableIntFieldUpdateOperationsInput | number | null
    totalcpus?: NullableIntFieldUpdateOperationsInput | number | null
    pagesize?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type system_fingerprint_usageCreateManyInput = {
    id?: number
    fingerprint: number
    account: number
    ip: string
    realm: number
    time?: Date | string
    architecture?: string | null
    cputype?: string | null
    activecpus?: number | null
    totalcpus?: number | null
    pagesize?: number | null
  }

  export type system_fingerprint_usageUpdateManyMutationInput = {
    fingerprint?: IntFieldUpdateOperationsInput | number
    account?: IntFieldUpdateOperationsInput | number
    ip?: StringFieldUpdateOperationsInput | string
    realm?: IntFieldUpdateOperationsInput | number
    time?: DateTimeFieldUpdateOperationsInput | Date | string
    architecture?: NullableStringFieldUpdateOperationsInput | string | null
    cputype?: NullableStringFieldUpdateOperationsInput | string | null
    activecpus?: NullableIntFieldUpdateOperationsInput | number | null
    totalcpus?: NullableIntFieldUpdateOperationsInput | number | null
    pagesize?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type system_fingerprint_usageUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    fingerprint?: IntFieldUpdateOperationsInput | number
    account?: IntFieldUpdateOperationsInput | number
    ip?: StringFieldUpdateOperationsInput | string
    realm?: IntFieldUpdateOperationsInput | number
    time?: DateTimeFieldUpdateOperationsInput | Date | string
    architecture?: NullableStringFieldUpdateOperationsInput | string | null
    cputype?: NullableStringFieldUpdateOperationsInput | string | null
    activecpus?: NullableIntFieldUpdateOperationsInput | number | null
    totalcpus?: NullableIntFieldUpdateOperationsInput | number | null
    pagesize?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type uptimeCreateInput = {
    realmid: number
    starttime?: bigint | number
    startstring?: string
    uptime?: bigint | number
    onlineplayers?: number
    maxplayers?: number
    revision?: string
  }

  export type uptimeUncheckedCreateInput = {
    realmid: number
    starttime?: bigint | number
    startstring?: string
    uptime?: bigint | number
    onlineplayers?: number
    maxplayers?: number
    revision?: string
  }

  export type uptimeUpdateInput = {
    realmid?: IntFieldUpdateOperationsInput | number
    starttime?: BigIntFieldUpdateOperationsInput | bigint | number
    startstring?: StringFieldUpdateOperationsInput | string
    uptime?: BigIntFieldUpdateOperationsInput | bigint | number
    onlineplayers?: IntFieldUpdateOperationsInput | number
    maxplayers?: IntFieldUpdateOperationsInput | number
    revision?: StringFieldUpdateOperationsInput | string
  }

  export type uptimeUncheckedUpdateInput = {
    realmid?: IntFieldUpdateOperationsInput | number
    starttime?: BigIntFieldUpdateOperationsInput | bigint | number
    startstring?: StringFieldUpdateOperationsInput | string
    uptime?: BigIntFieldUpdateOperationsInput | bigint | number
    onlineplayers?: IntFieldUpdateOperationsInput | number
    maxplayers?: IntFieldUpdateOperationsInput | number
    revision?: StringFieldUpdateOperationsInput | string
  }

  export type uptimeCreateManyInput = {
    realmid: number
    starttime?: bigint | number
    startstring?: string
    uptime?: bigint | number
    onlineplayers?: number
    maxplayers?: number
    revision?: string
  }

  export type uptimeUpdateManyMutationInput = {
    realmid?: IntFieldUpdateOperationsInput | number
    starttime?: BigIntFieldUpdateOperationsInput | bigint | number
    startstring?: StringFieldUpdateOperationsInput | string
    uptime?: BigIntFieldUpdateOperationsInput | bigint | number
    onlineplayers?: IntFieldUpdateOperationsInput | number
    maxplayers?: IntFieldUpdateOperationsInput | number
    revision?: StringFieldUpdateOperationsInput | string
  }

  export type uptimeUncheckedUpdateManyInput = {
    realmid?: IntFieldUpdateOperationsInput | number
    starttime?: BigIntFieldUpdateOperationsInput | bigint | number
    startstring?: StringFieldUpdateOperationsInput | string
    uptime?: BigIntFieldUpdateOperationsInput | bigint | number
    onlineplayers?: IntFieldUpdateOperationsInput | number
    maxplayers?: IntFieldUpdateOperationsInput | number
    revision?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type StringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type BigIntFilter = {
    equals?: bigint | number
    in?: Enumerable<bigint> | Enumerable<number>
    notIn?: Enumerable<bigint> | Enumerable<number>
    lt?: bigint | number
    lte?: bigint | number
    gt?: bigint | number
    gte?: bigint | number
    not?: NestedBigIntFilter | bigint | number
  }

  export type BoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type IntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type accountCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    sha_pass_hash?: SortOrder
    rank?: SortOrder
    sessionkey?: SortOrder
    v?: SortOrder
    s?: SortOrder
    email?: SortOrder
    joindate?: SortOrder
    tfa_verif?: SortOrder
    last_ip?: SortOrder
    last_local_ip?: SortOrder
    failed_logins?: SortOrder
    locked?: SortOrder
    last_login?: SortOrder
    online?: SortOrder
    expansion?: SortOrder
    mutetime?: SortOrder
    mutereason?: SortOrder
    muteby?: SortOrder
    locale?: SortOrder
    os?: SortOrder
    current_realm?: SortOrder
    banned?: SortOrder
    flags?: SortOrder
    security?: SortOrder
    pass_verif?: SortOrder
    email_verif?: SortOrder
    forum_username?: SortOrder
    token_key?: SortOrder
    email_keyword?: SortOrder
    email_status?: SortOrder
    email_sub?: SortOrder
    comments?: SortOrder
    geolock_pin?: SortOrder
  }

  export type accountAvgOrderByAggregateInput = {
    id?: SortOrder
    rank?: SortOrder
    failed_logins?: SortOrder
    locked?: SortOrder
    online?: SortOrder
    expansion?: SortOrder
    mutetime?: SortOrder
    locale?: SortOrder
    current_realm?: SortOrder
    flags?: SortOrder
    email_status?: SortOrder
    email_sub?: SortOrder
    geolock_pin?: SortOrder
  }

  export type accountMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    sha_pass_hash?: SortOrder
    rank?: SortOrder
    sessionkey?: SortOrder
    v?: SortOrder
    s?: SortOrder
    email?: SortOrder
    joindate?: SortOrder
    tfa_verif?: SortOrder
    last_ip?: SortOrder
    last_local_ip?: SortOrder
    failed_logins?: SortOrder
    locked?: SortOrder
    last_login?: SortOrder
    online?: SortOrder
    expansion?: SortOrder
    mutetime?: SortOrder
    mutereason?: SortOrder
    muteby?: SortOrder
    locale?: SortOrder
    os?: SortOrder
    current_realm?: SortOrder
    banned?: SortOrder
    flags?: SortOrder
    security?: SortOrder
    pass_verif?: SortOrder
    email_verif?: SortOrder
    forum_username?: SortOrder
    token_key?: SortOrder
    email_keyword?: SortOrder
    email_status?: SortOrder
    email_sub?: SortOrder
    comments?: SortOrder
    geolock_pin?: SortOrder
  }

  export type accountMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    sha_pass_hash?: SortOrder
    rank?: SortOrder
    sessionkey?: SortOrder
    v?: SortOrder
    s?: SortOrder
    email?: SortOrder
    joindate?: SortOrder
    tfa_verif?: SortOrder
    last_ip?: SortOrder
    last_local_ip?: SortOrder
    failed_logins?: SortOrder
    locked?: SortOrder
    last_login?: SortOrder
    online?: SortOrder
    expansion?: SortOrder
    mutetime?: SortOrder
    mutereason?: SortOrder
    muteby?: SortOrder
    locale?: SortOrder
    os?: SortOrder
    current_realm?: SortOrder
    banned?: SortOrder
    flags?: SortOrder
    security?: SortOrder
    pass_verif?: SortOrder
    email_verif?: SortOrder
    forum_username?: SortOrder
    token_key?: SortOrder
    email_keyword?: SortOrder
    email_status?: SortOrder
    email_sub?: SortOrder
    comments?: SortOrder
    geolock_pin?: SortOrder
  }

  export type accountSumOrderByAggregateInput = {
    id?: SortOrder
    rank?: SortOrder
    failed_logins?: SortOrder
    locked?: SortOrder
    online?: SortOrder
    expansion?: SortOrder
    mutetime?: SortOrder
    locale?: SortOrder
    current_realm?: SortOrder
    flags?: SortOrder
    email_status?: SortOrder
    email_sub?: SortOrder
    geolock_pin?: SortOrder
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type StringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type BigIntWithAggregatesFilter = {
    equals?: bigint | number
    in?: Enumerable<bigint> | Enumerable<number>
    notIn?: Enumerable<bigint> | Enumerable<number>
    lt?: bigint | number
    lte?: bigint | number
    gt?: bigint | number
    gte?: bigint | number
    not?: NestedBigIntWithAggregatesFilter | bigint | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedBigIntFilter
    _min?: NestedBigIntFilter
    _max?: NestedBigIntFilter
  }

  export type BoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type IntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
  }

  export type account_bannedIdBandateCompoundUniqueInput = {
    id: bigint | number
    bandate: bigint | number
  }

  export type account_bannedCountOrderByAggregateInput = {
    banid?: SortOrder
    id?: SortOrder
    bandate?: SortOrder
    unbandate?: SortOrder
    bannedby?: SortOrder
    banreason?: SortOrder
    active?: SortOrder
    realm?: SortOrder
    gmlevel?: SortOrder
  }

  export type account_bannedAvgOrderByAggregateInput = {
    banid?: SortOrder
    id?: SortOrder
    bandate?: SortOrder
    unbandate?: SortOrder
    active?: SortOrder
    realm?: SortOrder
    gmlevel?: SortOrder
  }

  export type account_bannedMaxOrderByAggregateInput = {
    banid?: SortOrder
    id?: SortOrder
    bandate?: SortOrder
    unbandate?: SortOrder
    bannedby?: SortOrder
    banreason?: SortOrder
    active?: SortOrder
    realm?: SortOrder
    gmlevel?: SortOrder
  }

  export type account_bannedMinOrderByAggregateInput = {
    banid?: SortOrder
    id?: SortOrder
    bandate?: SortOrder
    unbandate?: SortOrder
    bannedby?: SortOrder
    banreason?: SortOrder
    active?: SortOrder
    realm?: SortOrder
    gmlevel?: SortOrder
  }

  export type account_bannedSumOrderByAggregateInput = {
    banid?: SortOrder
    id?: SortOrder
    bandate?: SortOrder
    unbandate?: SortOrder
    active?: SortOrder
    realm?: SortOrder
    gmlevel?: SortOrder
  }

  export type account_mailstatusCountOrderByAggregateInput = {
    message_id?: SortOrder
    account_id?: SortOrder
    email?: SortOrder
    status?: SortOrder
    letterid?: SortOrder
  }

  export type account_mailstatusAvgOrderByAggregateInput = {
    message_id?: SortOrder
    account_id?: SortOrder
    status?: SortOrder
    letterid?: SortOrder
  }

  export type account_mailstatusMaxOrderByAggregateInput = {
    message_id?: SortOrder
    account_id?: SortOrder
    email?: SortOrder
    status?: SortOrder
    letterid?: SortOrder
  }

  export type account_mailstatusMinOrderByAggregateInput = {
    message_id?: SortOrder
    account_id?: SortOrder
    email?: SortOrder
    status?: SortOrder
    letterid?: SortOrder
  }

  export type account_mailstatusSumOrderByAggregateInput = {
    message_id?: SortOrder
    account_id?: SortOrder
    status?: SortOrder
    letterid?: SortOrder
  }

  export type account_mailstatus_archiveCountOrderByAggregateInput = {
    message_id?: SortOrder
    account_id?: SortOrder
    email?: SortOrder
    status?: SortOrder
    letterid?: SortOrder
  }

  export type account_mailstatus_archiveAvgOrderByAggregateInput = {
    message_id?: SortOrder
    account_id?: SortOrder
    status?: SortOrder
    letterid?: SortOrder
  }

  export type account_mailstatus_archiveMaxOrderByAggregateInput = {
    message_id?: SortOrder
    account_id?: SortOrder
    email?: SortOrder
    status?: SortOrder
    letterid?: SortOrder
  }

  export type account_mailstatus_archiveMinOrderByAggregateInput = {
    message_id?: SortOrder
    account_id?: SortOrder
    email?: SortOrder
    status?: SortOrder
    letterid?: SortOrder
  }

  export type account_mailstatus_archiveSumOrderByAggregateInput = {
    message_id?: SortOrder
    account_id?: SortOrder
    status?: SortOrder
    letterid?: SortOrder
  }

  export type BigIntNullableFilter = {
    equals?: bigint | number | null
    in?: Enumerable<bigint> | Enumerable<number> | null
    notIn?: Enumerable<bigint> | Enumerable<number> | null
    lt?: bigint | number
    lte?: bigint | number
    gt?: bigint | number
    gte?: bigint | number
    not?: NestedBigIntNullableFilter | bigint | number | null
  }

  export type account_twofactor_allowedCountOrderByAggregateInput = {
    id?: SortOrder
    ip_address?: SortOrder
    account_id?: SortOrder
    expires_at?: SortOrder
  }

  export type account_twofactor_allowedAvgOrderByAggregateInput = {
    id?: SortOrder
    account_id?: SortOrder
    expires_at?: SortOrder
  }

  export type account_twofactor_allowedMaxOrderByAggregateInput = {
    id?: SortOrder
    ip_address?: SortOrder
    account_id?: SortOrder
    expires_at?: SortOrder
  }

  export type account_twofactor_allowedMinOrderByAggregateInput = {
    id?: SortOrder
    ip_address?: SortOrder
    account_id?: SortOrder
    expires_at?: SortOrder
  }

  export type account_twofactor_allowedSumOrderByAggregateInput = {
    id?: SortOrder
    account_id?: SortOrder
    expires_at?: SortOrder
  }

  export type BigIntNullableWithAggregatesFilter = {
    equals?: bigint | number | null
    in?: Enumerable<bigint> | Enumerable<number> | null
    notIn?: Enumerable<bigint> | Enumerable<number> | null
    lt?: bigint | number
    lte?: bigint | number
    gt?: bigint | number
    gte?: bigint | number
    not?: NestedBigIntNullableWithAggregatesFilter | bigint | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedBigIntNullableFilter
    _min?: NestedBigIntNullableFilter
    _max?: NestedBigIntNullableFilter
  }

  export type antispam_blacklistCountOrderByAggregateInput = {
    string?: SortOrder
  }

  export type antispam_blacklistMaxOrderByAggregateInput = {
    string?: SortOrder
  }

  export type antispam_blacklistMinOrderByAggregateInput = {
    string?: SortOrder
  }

  export type antispam_clientCountOrderByAggregateInput = {
    Regex?: SortOrder
    Note?: SortOrder
  }

  export type antispam_clientMaxOrderByAggregateInput = {
    Regex?: SortOrder
    Note?: SortOrder
  }

  export type antispam_clientMinOrderByAggregateInput = {
    Regex?: SortOrder
    Note?: SortOrder
  }

  export type antispam_replacementCountOrderByAggregateInput = {
    from?: SortOrder
    to?: SortOrder
  }

  export type antispam_replacementMaxOrderByAggregateInput = {
    from?: SortOrder
    to?: SortOrder
  }

  export type antispam_replacementMinOrderByAggregateInput = {
    from?: SortOrder
    to?: SortOrder
  }

  export type antispam_unicode_replacementCountOrderByAggregateInput = {
    from?: SortOrder
    to?: SortOrder
  }

  export type antispam_unicode_replacementAvgOrderByAggregateInput = {
    from?: SortOrder
    to?: SortOrder
  }

  export type antispam_unicode_replacementMaxOrderByAggregateInput = {
    from?: SortOrder
    to?: SortOrder
  }

  export type antispam_unicode_replacementMinOrderByAggregateInput = {
    from?: SortOrder
    to?: SortOrder
  }

  export type antispam_unicode_replacementSumOrderByAggregateInput = {
    from?: SortOrder
    to?: SortOrder
  }

  export type configCountOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
    comment?: SortOrder
  }

  export type configAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type configMaxOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
    comment?: SortOrder
  }

  export type configMinOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
    comment?: SortOrder
  }

  export type configSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ip_bannedIpBandateCompoundUniqueInput = {
    ip: string
    bandate: number
  }

  export type ip_bannedCountOrderByAggregateInput = {
    ip?: SortOrder
    bandate?: SortOrder
    unbandate?: SortOrder
    bannedby?: SortOrder
    banreason?: SortOrder
  }

  export type ip_bannedAvgOrderByAggregateInput = {
    bandate?: SortOrder
    unbandate?: SortOrder
  }

  export type ip_bannedMaxOrderByAggregateInput = {
    ip?: SortOrder
    bandate?: SortOrder
    unbandate?: SortOrder
    bannedby?: SortOrder
    banreason?: SortOrder
  }

  export type ip_bannedMinOrderByAggregateInput = {
    ip?: SortOrder
    bandate?: SortOrder
    unbandate?: SortOrder
    bannedby?: SortOrder
    banreason?: SortOrder
  }

  export type ip_bannedSumOrderByAggregateInput = {
    bandate?: SortOrder
    unbandate?: SortOrder
  }

  export type migrationsCountOrderByAggregateInput = {
    id?: SortOrder
    Name?: SortOrder
    Hash?: SortOrder
  }

  export type migrationsMaxOrderByAggregateInput = {
    id?: SortOrder
    Name?: SortOrder
    Hash?: SortOrder
  }

  export type migrationsMinOrderByAggregateInput = {
    id?: SortOrder
    Name?: SortOrder
    Hash?: SortOrder
  }

  export type realmcharactersRealmidAcctidCompoundUniqueInput = {
    realmid: number
    acctid: bigint | number
  }

  export type realmcharactersCountOrderByAggregateInput = {
    realmid?: SortOrder
    acctid?: SortOrder
    numchars?: SortOrder
  }

  export type realmcharactersAvgOrderByAggregateInput = {
    realmid?: SortOrder
    acctid?: SortOrder
    numchars?: SortOrder
  }

  export type realmcharactersMaxOrderByAggregateInput = {
    realmid?: SortOrder
    acctid?: SortOrder
    numchars?: SortOrder
  }

  export type realmcharactersMinOrderByAggregateInput = {
    realmid?: SortOrder
    acctid?: SortOrder
    numchars?: SortOrder
  }

  export type realmcharactersSumOrderByAggregateInput = {
    realmid?: SortOrder
    acctid?: SortOrder
    numchars?: SortOrder
  }

  export type FloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type realmlistCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    port?: SortOrder
    icon?: SortOrder
    realmflags?: SortOrder
    timezone?: SortOrder
    allowedSecurityLevel?: SortOrder
    population?: SortOrder
    realmbuilds?: SortOrder
  }

  export type realmlistAvgOrderByAggregateInput = {
    id?: SortOrder
    port?: SortOrder
    icon?: SortOrder
    realmflags?: SortOrder
    timezone?: SortOrder
    allowedSecurityLevel?: SortOrder
    population?: SortOrder
  }

  export type realmlistMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    port?: SortOrder
    icon?: SortOrder
    realmflags?: SortOrder
    timezone?: SortOrder
    allowedSecurityLevel?: SortOrder
    population?: SortOrder
    realmbuilds?: SortOrder
  }

  export type realmlistMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    port?: SortOrder
    icon?: SortOrder
    realmflags?: SortOrder
    timezone?: SortOrder
    allowedSecurityLevel?: SortOrder
    population?: SortOrder
    realmbuilds?: SortOrder
  }

  export type realmlistSumOrderByAggregateInput = {
    id?: SortOrder
    port?: SortOrder
    icon?: SortOrder
    realmflags?: SortOrder
    timezone?: SortOrder
    allowedSecurityLevel?: SortOrder
    population?: SortOrder
  }

  export type FloatWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedFloatFilter
    _min?: NestedFloatFilter
    _max?: NestedFloatFilter
  }

  export type shop_coinsCountOrderByAggregateInput = {
    id?: SortOrder
    coins?: SortOrder
  }

  export type shop_coinsAvgOrderByAggregateInput = {
    id?: SortOrder
    coins?: SortOrder
  }

  export type shop_coinsMaxOrderByAggregateInput = {
    id?: SortOrder
    coins?: SortOrder
  }

  export type shop_coinsMinOrderByAggregateInput = {
    id?: SortOrder
    coins?: SortOrder
  }

  export type shop_coinsSumOrderByAggregateInput = {
    id?: SortOrder
    coins?: SortOrder
  }

  export type shop_diffCountOrderByAggregateInput = {
    guid?: SortOrder
    accountid?: SortOrder
    prev_bonus?: SortOrder
    new_bonus?: SortOrder
    date?: SortOrder
    query?: SortOrder
  }

  export type shop_diffAvgOrderByAggregateInput = {
    guid?: SortOrder
    accountid?: SortOrder
    prev_bonus?: SortOrder
    new_bonus?: SortOrder
    date?: SortOrder
  }

  export type shop_diffMaxOrderByAggregateInput = {
    guid?: SortOrder
    accountid?: SortOrder
    prev_bonus?: SortOrder
    new_bonus?: SortOrder
    date?: SortOrder
    query?: SortOrder
  }

  export type shop_diffMinOrderByAggregateInput = {
    guid?: SortOrder
    accountid?: SortOrder
    prev_bonus?: SortOrder
    new_bonus?: SortOrder
    date?: SortOrder
    query?: SortOrder
  }

  export type shop_diffSumOrderByAggregateInput = {
    guid?: SortOrder
    accountid?: SortOrder
    prev_bonus?: SortOrder
    new_bonus?: SortOrder
    date?: SortOrder
  }

  export type statistics_onlineCountOrderByAggregateInput = {
    guid?: SortOrder
    online?: SortOrder
    online_alli?: SortOrder
    online_horde?: SortOrder
    connections?: SortOrder
    realm?: SortOrder
    date?: SortOrder
  }

  export type statistics_onlineAvgOrderByAggregateInput = {
    guid?: SortOrder
    online?: SortOrder
    online_alli?: SortOrder
    online_horde?: SortOrder
    connections?: SortOrder
    realm?: SortOrder
    date?: SortOrder
  }

  export type statistics_onlineMaxOrderByAggregateInput = {
    guid?: SortOrder
    online?: SortOrder
    online_alli?: SortOrder
    online_horde?: SortOrder
    connections?: SortOrder
    realm?: SortOrder
    date?: SortOrder
  }

  export type statistics_onlineMinOrderByAggregateInput = {
    guid?: SortOrder
    online?: SortOrder
    online_alli?: SortOrder
    online_horde?: SortOrder
    connections?: SortOrder
    realm?: SortOrder
    date?: SortOrder
  }

  export type statistics_onlineSumOrderByAggregateInput = {
    guid?: SortOrder
    online?: SortOrder
    online_alli?: SortOrder
    online_horde?: SortOrder
    connections?: SortOrder
    realm?: SortOrder
    date?: SortOrder
  }

  export type system_fingerprint_usageCountOrderByAggregateInput = {
    id?: SortOrder
    fingerprint?: SortOrder
    account?: SortOrder
    ip?: SortOrder
    realm?: SortOrder
    time?: SortOrder
    architecture?: SortOrder
    cputype?: SortOrder
    activecpus?: SortOrder
    totalcpus?: SortOrder
    pagesize?: SortOrder
  }

  export type system_fingerprint_usageAvgOrderByAggregateInput = {
    id?: SortOrder
    fingerprint?: SortOrder
    account?: SortOrder
    realm?: SortOrder
    activecpus?: SortOrder
    totalcpus?: SortOrder
    pagesize?: SortOrder
  }

  export type system_fingerprint_usageMaxOrderByAggregateInput = {
    id?: SortOrder
    fingerprint?: SortOrder
    account?: SortOrder
    ip?: SortOrder
    realm?: SortOrder
    time?: SortOrder
    architecture?: SortOrder
    cputype?: SortOrder
    activecpus?: SortOrder
    totalcpus?: SortOrder
    pagesize?: SortOrder
  }

  export type system_fingerprint_usageMinOrderByAggregateInput = {
    id?: SortOrder
    fingerprint?: SortOrder
    account?: SortOrder
    ip?: SortOrder
    realm?: SortOrder
    time?: SortOrder
    architecture?: SortOrder
    cputype?: SortOrder
    activecpus?: SortOrder
    totalcpus?: SortOrder
    pagesize?: SortOrder
  }

  export type system_fingerprint_usageSumOrderByAggregateInput = {
    id?: SortOrder
    fingerprint?: SortOrder
    account?: SortOrder
    realm?: SortOrder
    activecpus?: SortOrder
    totalcpus?: SortOrder
    pagesize?: SortOrder
  }

  export type uptimeRealmidStarttimeCompoundUniqueInput = {
    realmid: number
    starttime: bigint | number
  }

  export type uptimeCountOrderByAggregateInput = {
    realmid?: SortOrder
    starttime?: SortOrder
    startstring?: SortOrder
    uptime?: SortOrder
    onlineplayers?: SortOrder
    maxplayers?: SortOrder
    revision?: SortOrder
  }

  export type uptimeAvgOrderByAggregateInput = {
    realmid?: SortOrder
    starttime?: SortOrder
    uptime?: SortOrder
    onlineplayers?: SortOrder
    maxplayers?: SortOrder
  }

  export type uptimeMaxOrderByAggregateInput = {
    realmid?: SortOrder
    starttime?: SortOrder
    startstring?: SortOrder
    uptime?: SortOrder
    onlineplayers?: SortOrder
    maxplayers?: SortOrder
    revision?: SortOrder
  }

  export type uptimeMinOrderByAggregateInput = {
    realmid?: SortOrder
    starttime?: SortOrder
    startstring?: SortOrder
    uptime?: SortOrder
    onlineplayers?: SortOrder
    maxplayers?: SortOrder
    revision?: SortOrder
  }

  export type uptimeSumOrderByAggregateInput = {
    realmid?: SortOrder
    starttime?: SortOrder
    uptime?: SortOrder
    onlineplayers?: SortOrder
    maxplayers?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableBigIntFieldUpdateOperationsInput = {
    set?: bigint | number | null
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedStringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedBigIntFilter = {
    equals?: bigint | number
    in?: Enumerable<bigint> | Enumerable<number>
    notIn?: Enumerable<bigint> | Enumerable<number>
    lt?: bigint | number
    lte?: bigint | number
    gt?: bigint | number
    gte?: bigint | number
    not?: NestedBigIntFilter | bigint | number
  }

  export type NestedBoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedStringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type NestedBigIntWithAggregatesFilter = {
    equals?: bigint | number
    in?: Enumerable<bigint> | Enumerable<number>
    notIn?: Enumerable<bigint> | Enumerable<number>
    lt?: bigint | number
    lte?: bigint | number
    gt?: bigint | number
    gte?: bigint | number
    not?: NestedBigIntWithAggregatesFilter | bigint | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedBigIntFilter
    _min?: NestedBigIntFilter
    _max?: NestedBigIntFilter
  }

  export type NestedBoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type NestedIntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
  }

  export type NestedFloatNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatNullableFilter | number | null
  }

  export type NestedBigIntNullableFilter = {
    equals?: bigint | number | null
    in?: Enumerable<bigint> | Enumerable<number> | null
    notIn?: Enumerable<bigint> | Enumerable<number> | null
    lt?: bigint | number
    lte?: bigint | number
    gt?: bigint | number
    gte?: bigint | number
    not?: NestedBigIntNullableFilter | bigint | number | null
  }

  export type NestedBigIntNullableWithAggregatesFilter = {
    equals?: bigint | number | null
    in?: Enumerable<bigint> | Enumerable<number> | null
    notIn?: Enumerable<bigint> | Enumerable<number> | null
    lt?: bigint | number
    lte?: bigint | number
    gt?: bigint | number
    gte?: bigint | number
    not?: NestedBigIntNullableWithAggregatesFilter | bigint | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedBigIntNullableFilter
    _min?: NestedBigIntNullableFilter
    _max?: NestedBigIntNullableFilter
  }

  export type NestedFloatWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedFloatFilter
    _min?: NestedFloatFilter
    _max?: NestedFloatFilter
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}