
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model newsReporter
 * 
 */
export type newsReporter = $Result.DefaultSelection<Prisma.$newsReporterPayload>
/**
 * Model Advertiser
 * 
 */
export type Advertiser = $Result.DefaultSelection<Prisma.$AdvertiserPayload>
/**
 * Model newsArticle
 * 
 */
export type newsArticle = $Result.DefaultSelection<Prisma.$newsArticlePayload>
/**
 * Model quote
 * 
 */
export type quote = $Result.DefaultSelection<Prisma.$quotePayload>
/**
 * Model Advertisement
 * 
 */
export type Advertisement = $Result.DefaultSelection<Prisma.$AdvertisementPayload>
/**
 * Model Opinion
 * 
 */
export type Opinion = $Result.DefaultSelection<Prisma.$OpinionPayload>
/**
 * Model Account
 * 
 */
export type Account = $Result.DefaultSelection<Prisma.$AccountPayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model VerificationToken
 * 
 */
export type VerificationToken = $Result.DefaultSelection<Prisma.$VerificationTokenPayload>
/**
 * Model AdvertiseRequest
 * 
 */
export type AdvertiseRequest = $Result.DefaultSelection<Prisma.$AdvertiseRequestPayload>
/**
 * Model Videopost
 * 
 */
export type Videopost = $Result.DefaultSelection<Prisma.$VideopostPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserType: {
  NEWSREPORTER: 'NEWSREPORTER',
  ADVERTISER: 'ADVERTISER',
  SUPERADMIN: 'SUPERADMIN',
  SOMPANDOK: 'SOMPANDOK'
};

export type UserType = (typeof UserType)[keyof typeof UserType]


export const ApprovalStatus: {
  PENDING: 'PENDING',
  APPROVED: 'APPROVED',
  REJECT: 'REJECT'
};

export type ApprovalStatus = (typeof ApprovalStatus)[keyof typeof ApprovalStatus]


export const newsArticleStatus: {
  ACTIVE: 'ACTIVE',
  DRAFT: 'DRAFT',
  EXPIRED: 'EXPIRED'
};

export type newsArticleStatus = (typeof newsArticleStatus)[keyof typeof newsArticleStatus]


export const newsCategory: {
  LATEST: 'LATEST',
  NATIONAL: 'NATIONAL',
  POLITICS: 'POLITICS',
  COUNTRYWIDE: 'COUNTRYWIDE',
  INTERNATIONAL: 'INTERNATIONAL',
  SPORTS: 'SPORTS',
  EDUCATION: 'EDUCATION',
  HEALTH: 'HEALTH',
  OPINION: 'OPINION',
  RELIGION: 'RELIGION',
  CRIME: 'CRIME',
  TECHNOLOGY: 'TECHNOLOGY',
  ENTERTAINMENT: 'ENTERTAINMENT',
  ECONOMY: 'ECONOMY',
  LAW_AND_JUSTICE: 'LAW_AND_JUSTICE',
  ENVIRONMENT: 'ENVIRONMENT',
  SCIENCE: 'SCIENCE'
};

export type newsCategory = (typeof newsCategory)[keyof typeof newsCategory]


export const advertiseStatus: {
  ACTIVE: 'ACTIVE',
  DRAFT: 'DRAFT',
  EXPIRED: 'EXPIRED'
};

export type advertiseStatus = (typeof advertiseStatus)[keyof typeof advertiseStatus]


export const AdvertisedCategory: {
  PREMIER_1: 'PREMIER_1',
  PREMIER_2: 'PREMIER_2',
  SIZE_1: 'SIZE_1',
  SIZE_2: 'SIZE_2',
  SUPER_1: 'SUPER_1',
  SUPER_2: 'SUPER_2',
  PREMIUM_1: 'PREMIUM_1',
  PREMIUM_2: 'PREMIUM_2',
  STANDARD_1: 'STANDARD_1',
  STANDARD_2: 'STANDARD_2',
  DELUXE_1: 'DELUXE_1',
  DELUXE_2: 'DELUXE_2',
  ULTIMATE_1: 'ULTIMATE_1',
  ULTIMATE_2: 'ULTIMATE_2',
  BASIC_1: 'BASIC_1',
  BASIC_2: 'BASIC_2',
  PRO_1: 'PRO_1',
  PRO_2: 'PRO_2',
  ENTERPRISE_1: 'ENTERPRISE_1',
  ENTERPRISE_2: 'ENTERPRISE_2'
};

export type AdvertisedCategory = (typeof AdvertisedCategory)[keyof typeof AdvertisedCategory]


export const vedioStatus: {
  ACTIVE: 'ACTIVE',
  DRAFT: 'DRAFT',
  EXPIRED: 'EXPIRED'
};

export type vedioStatus = (typeof vedioStatus)[keyof typeof vedioStatus]

}

export type UserType = $Enums.UserType

export const UserType: typeof $Enums.UserType

export type ApprovalStatus = $Enums.ApprovalStatus

export const ApprovalStatus: typeof $Enums.ApprovalStatus

export type newsArticleStatus = $Enums.newsArticleStatus

export const newsArticleStatus: typeof $Enums.newsArticleStatus

export type newsCategory = $Enums.newsCategory

export const newsCategory: typeof $Enums.newsCategory

export type advertiseStatus = $Enums.advertiseStatus

export const advertiseStatus: typeof $Enums.advertiseStatus

export type AdvertisedCategory = $Enums.AdvertisedCategory

export const AdvertisedCategory: typeof $Enums.AdvertisedCategory

export type vedioStatus = $Enums.vedioStatus

export const vedioStatus: typeof $Enums.vedioStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.newsReporter`: Exposes CRUD operations for the **newsReporter** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more NewsReporters
    * const newsReporters = await prisma.newsReporter.findMany()
    * ```
    */
  get newsReporter(): Prisma.newsReporterDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.advertiser`: Exposes CRUD operations for the **Advertiser** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Advertisers
    * const advertisers = await prisma.advertiser.findMany()
    * ```
    */
  get advertiser(): Prisma.AdvertiserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.newsArticle`: Exposes CRUD operations for the **newsArticle** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more NewsArticles
    * const newsArticles = await prisma.newsArticle.findMany()
    * ```
    */
  get newsArticle(): Prisma.newsArticleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.quote`: Exposes CRUD operations for the **quote** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Quotes
    * const quotes = await prisma.quote.findMany()
    * ```
    */
  get quote(): Prisma.quoteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.advertisement`: Exposes CRUD operations for the **Advertisement** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Advertisements
    * const advertisements = await prisma.advertisement.findMany()
    * ```
    */
  get advertisement(): Prisma.AdvertisementDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.opinion`: Exposes CRUD operations for the **Opinion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Opinions
    * const opinions = await prisma.opinion.findMany()
    * ```
    */
  get opinion(): Prisma.OpinionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.account`: Exposes CRUD operations for the **Account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.account.findMany()
    * ```
    */
  get account(): Prisma.AccountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.verificationToken`: Exposes CRUD operations for the **VerificationToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VerificationTokens
    * const verificationTokens = await prisma.verificationToken.findMany()
    * ```
    */
  get verificationToken(): Prisma.VerificationTokenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.advertiseRequest`: Exposes CRUD operations for the **AdvertiseRequest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AdvertiseRequests
    * const advertiseRequests = await prisma.advertiseRequest.findMany()
    * ```
    */
  get advertiseRequest(): Prisma.AdvertiseRequestDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.videopost`: Exposes CRUD operations for the **Videopost** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Videoposts
    * const videoposts = await prisma.videopost.findMany()
    * ```
    */
  get videopost(): Prisma.VideopostDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

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
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    newsReporter: 'newsReporter',
    Advertiser: 'Advertiser',
    newsArticle: 'newsArticle',
    quote: 'quote',
    Advertisement: 'Advertisement',
    Opinion: 'Opinion',
    Account: 'Account',
    Session: 'Session',
    VerificationToken: 'VerificationToken',
    AdvertiseRequest: 'AdvertiseRequest',
    Videopost: 'Videopost'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "newsReporter" | "advertiser" | "newsArticle" | "quote" | "advertisement" | "opinion" | "account" | "session" | "verificationToken" | "advertiseRequest" | "videopost"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      newsReporter: {
        payload: Prisma.$newsReporterPayload<ExtArgs>
        fields: Prisma.newsReporterFieldRefs
        operations: {
          findUnique: {
            args: Prisma.newsReporterFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$newsReporterPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.newsReporterFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$newsReporterPayload>
          }
          findFirst: {
            args: Prisma.newsReporterFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$newsReporterPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.newsReporterFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$newsReporterPayload>
          }
          findMany: {
            args: Prisma.newsReporterFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$newsReporterPayload>[]
          }
          create: {
            args: Prisma.newsReporterCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$newsReporterPayload>
          }
          createMany: {
            args: Prisma.newsReporterCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.newsReporterCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$newsReporterPayload>[]
          }
          delete: {
            args: Prisma.newsReporterDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$newsReporterPayload>
          }
          update: {
            args: Prisma.newsReporterUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$newsReporterPayload>
          }
          deleteMany: {
            args: Prisma.newsReporterDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.newsReporterUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.newsReporterUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$newsReporterPayload>[]
          }
          upsert: {
            args: Prisma.newsReporterUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$newsReporterPayload>
          }
          aggregate: {
            args: Prisma.NewsReporterAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNewsReporter>
          }
          groupBy: {
            args: Prisma.newsReporterGroupByArgs<ExtArgs>
            result: $Utils.Optional<NewsReporterGroupByOutputType>[]
          }
          count: {
            args: Prisma.newsReporterCountArgs<ExtArgs>
            result: $Utils.Optional<NewsReporterCountAggregateOutputType> | number
          }
        }
      }
      Advertiser: {
        payload: Prisma.$AdvertiserPayload<ExtArgs>
        fields: Prisma.AdvertiserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdvertiserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdvertiserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdvertiserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdvertiserPayload>
          }
          findFirst: {
            args: Prisma.AdvertiserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdvertiserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdvertiserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdvertiserPayload>
          }
          findMany: {
            args: Prisma.AdvertiserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdvertiserPayload>[]
          }
          create: {
            args: Prisma.AdvertiserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdvertiserPayload>
          }
          createMany: {
            args: Prisma.AdvertiserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AdvertiserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdvertiserPayload>[]
          }
          delete: {
            args: Prisma.AdvertiserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdvertiserPayload>
          }
          update: {
            args: Prisma.AdvertiserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdvertiserPayload>
          }
          deleteMany: {
            args: Prisma.AdvertiserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdvertiserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AdvertiserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdvertiserPayload>[]
          }
          upsert: {
            args: Prisma.AdvertiserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdvertiserPayload>
          }
          aggregate: {
            args: Prisma.AdvertiserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdvertiser>
          }
          groupBy: {
            args: Prisma.AdvertiserGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdvertiserGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdvertiserCountArgs<ExtArgs>
            result: $Utils.Optional<AdvertiserCountAggregateOutputType> | number
          }
        }
      }
      newsArticle: {
        payload: Prisma.$newsArticlePayload<ExtArgs>
        fields: Prisma.newsArticleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.newsArticleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$newsArticlePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.newsArticleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$newsArticlePayload>
          }
          findFirst: {
            args: Prisma.newsArticleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$newsArticlePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.newsArticleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$newsArticlePayload>
          }
          findMany: {
            args: Prisma.newsArticleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$newsArticlePayload>[]
          }
          create: {
            args: Prisma.newsArticleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$newsArticlePayload>
          }
          createMany: {
            args: Prisma.newsArticleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.newsArticleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$newsArticlePayload>[]
          }
          delete: {
            args: Prisma.newsArticleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$newsArticlePayload>
          }
          update: {
            args: Prisma.newsArticleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$newsArticlePayload>
          }
          deleteMany: {
            args: Prisma.newsArticleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.newsArticleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.newsArticleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$newsArticlePayload>[]
          }
          upsert: {
            args: Prisma.newsArticleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$newsArticlePayload>
          }
          aggregate: {
            args: Prisma.NewsArticleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNewsArticle>
          }
          groupBy: {
            args: Prisma.newsArticleGroupByArgs<ExtArgs>
            result: $Utils.Optional<NewsArticleGroupByOutputType>[]
          }
          count: {
            args: Prisma.newsArticleCountArgs<ExtArgs>
            result: $Utils.Optional<NewsArticleCountAggregateOutputType> | number
          }
        }
      }
      quote: {
        payload: Prisma.$quotePayload<ExtArgs>
        fields: Prisma.quoteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.quoteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$quotePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.quoteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$quotePayload>
          }
          findFirst: {
            args: Prisma.quoteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$quotePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.quoteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$quotePayload>
          }
          findMany: {
            args: Prisma.quoteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$quotePayload>[]
          }
          create: {
            args: Prisma.quoteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$quotePayload>
          }
          createMany: {
            args: Prisma.quoteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.quoteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$quotePayload>[]
          }
          delete: {
            args: Prisma.quoteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$quotePayload>
          }
          update: {
            args: Prisma.quoteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$quotePayload>
          }
          deleteMany: {
            args: Prisma.quoteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.quoteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.quoteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$quotePayload>[]
          }
          upsert: {
            args: Prisma.quoteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$quotePayload>
          }
          aggregate: {
            args: Prisma.QuoteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuote>
          }
          groupBy: {
            args: Prisma.quoteGroupByArgs<ExtArgs>
            result: $Utils.Optional<QuoteGroupByOutputType>[]
          }
          count: {
            args: Prisma.quoteCountArgs<ExtArgs>
            result: $Utils.Optional<QuoteCountAggregateOutputType> | number
          }
        }
      }
      Advertisement: {
        payload: Prisma.$AdvertisementPayload<ExtArgs>
        fields: Prisma.AdvertisementFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdvertisementFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdvertisementPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdvertisementFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdvertisementPayload>
          }
          findFirst: {
            args: Prisma.AdvertisementFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdvertisementPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdvertisementFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdvertisementPayload>
          }
          findMany: {
            args: Prisma.AdvertisementFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdvertisementPayload>[]
          }
          create: {
            args: Prisma.AdvertisementCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdvertisementPayload>
          }
          createMany: {
            args: Prisma.AdvertisementCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AdvertisementCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdvertisementPayload>[]
          }
          delete: {
            args: Prisma.AdvertisementDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdvertisementPayload>
          }
          update: {
            args: Prisma.AdvertisementUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdvertisementPayload>
          }
          deleteMany: {
            args: Prisma.AdvertisementDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdvertisementUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AdvertisementUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdvertisementPayload>[]
          }
          upsert: {
            args: Prisma.AdvertisementUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdvertisementPayload>
          }
          aggregate: {
            args: Prisma.AdvertisementAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdvertisement>
          }
          groupBy: {
            args: Prisma.AdvertisementGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdvertisementGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdvertisementCountArgs<ExtArgs>
            result: $Utils.Optional<AdvertisementCountAggregateOutputType> | number
          }
        }
      }
      Opinion: {
        payload: Prisma.$OpinionPayload<ExtArgs>
        fields: Prisma.OpinionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OpinionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpinionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OpinionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpinionPayload>
          }
          findFirst: {
            args: Prisma.OpinionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpinionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OpinionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpinionPayload>
          }
          findMany: {
            args: Prisma.OpinionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpinionPayload>[]
          }
          create: {
            args: Prisma.OpinionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpinionPayload>
          }
          createMany: {
            args: Prisma.OpinionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OpinionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpinionPayload>[]
          }
          delete: {
            args: Prisma.OpinionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpinionPayload>
          }
          update: {
            args: Prisma.OpinionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpinionPayload>
          }
          deleteMany: {
            args: Prisma.OpinionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OpinionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OpinionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpinionPayload>[]
          }
          upsert: {
            args: Prisma.OpinionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpinionPayload>
          }
          aggregate: {
            args: Prisma.OpinionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOpinion>
          }
          groupBy: {
            args: Prisma.OpinionGroupByArgs<ExtArgs>
            result: $Utils.Optional<OpinionGroupByOutputType>[]
          }
          count: {
            args: Prisma.OpinionCountArgs<ExtArgs>
            result: $Utils.Optional<OpinionCountAggregateOutputType> | number
          }
        }
      }
      Account: {
        payload: Prisma.$AccountPayload<ExtArgs>
        fields: Prisma.AccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findFirst: {
            args: Prisma.AccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findMany: {
            args: Prisma.AccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          create: {
            args: Prisma.AccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          createMany: {
            args: Prisma.AccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AccountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          delete: {
            args: Prisma.AccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          update: {
            args: Prisma.AccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          deleteMany: {
            args: Prisma.AccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AccountUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          upsert: {
            args: Prisma.AccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          aggregate: {
            args: Prisma.AccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccount>
          }
          groupBy: {
            args: Prisma.AccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccountCountArgs<ExtArgs>
            result: $Utils.Optional<AccountCountAggregateOutputType> | number
          }
        }
      }
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
      VerificationToken: {
        payload: Prisma.$VerificationTokenPayload<ExtArgs>
        fields: Prisma.VerificationTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VerificationTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VerificationTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          findFirst: {
            args: Prisma.VerificationTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VerificationTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          findMany: {
            args: Prisma.VerificationTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          create: {
            args: Prisma.VerificationTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          createMany: {
            args: Prisma.VerificationTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VerificationTokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          delete: {
            args: Prisma.VerificationTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          update: {
            args: Prisma.VerificationTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          deleteMany: {
            args: Prisma.VerificationTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VerificationTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VerificationTokenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          upsert: {
            args: Prisma.VerificationTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          aggregate: {
            args: Prisma.VerificationTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVerificationToken>
          }
          groupBy: {
            args: Prisma.VerificationTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<VerificationTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.VerificationTokenCountArgs<ExtArgs>
            result: $Utils.Optional<VerificationTokenCountAggregateOutputType> | number
          }
        }
      }
      AdvertiseRequest: {
        payload: Prisma.$AdvertiseRequestPayload<ExtArgs>
        fields: Prisma.AdvertiseRequestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdvertiseRequestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdvertiseRequestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdvertiseRequestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdvertiseRequestPayload>
          }
          findFirst: {
            args: Prisma.AdvertiseRequestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdvertiseRequestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdvertiseRequestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdvertiseRequestPayload>
          }
          findMany: {
            args: Prisma.AdvertiseRequestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdvertiseRequestPayload>[]
          }
          create: {
            args: Prisma.AdvertiseRequestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdvertiseRequestPayload>
          }
          createMany: {
            args: Prisma.AdvertiseRequestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AdvertiseRequestCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdvertiseRequestPayload>[]
          }
          delete: {
            args: Prisma.AdvertiseRequestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdvertiseRequestPayload>
          }
          update: {
            args: Prisma.AdvertiseRequestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdvertiseRequestPayload>
          }
          deleteMany: {
            args: Prisma.AdvertiseRequestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdvertiseRequestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AdvertiseRequestUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdvertiseRequestPayload>[]
          }
          upsert: {
            args: Prisma.AdvertiseRequestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdvertiseRequestPayload>
          }
          aggregate: {
            args: Prisma.AdvertiseRequestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdvertiseRequest>
          }
          groupBy: {
            args: Prisma.AdvertiseRequestGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdvertiseRequestGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdvertiseRequestCountArgs<ExtArgs>
            result: $Utils.Optional<AdvertiseRequestCountAggregateOutputType> | number
          }
        }
      }
      Videopost: {
        payload: Prisma.$VideopostPayload<ExtArgs>
        fields: Prisma.VideopostFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VideopostFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideopostPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VideopostFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideopostPayload>
          }
          findFirst: {
            args: Prisma.VideopostFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideopostPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VideopostFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideopostPayload>
          }
          findMany: {
            args: Prisma.VideopostFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideopostPayload>[]
          }
          create: {
            args: Prisma.VideopostCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideopostPayload>
          }
          createMany: {
            args: Prisma.VideopostCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VideopostCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideopostPayload>[]
          }
          delete: {
            args: Prisma.VideopostDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideopostPayload>
          }
          update: {
            args: Prisma.VideopostUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideopostPayload>
          }
          deleteMany: {
            args: Prisma.VideopostDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VideopostUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VideopostUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideopostPayload>[]
          }
          upsert: {
            args: Prisma.VideopostUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideopostPayload>
          }
          aggregate: {
            args: Prisma.VideopostAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVideopost>
          }
          groupBy: {
            args: Prisma.VideopostGroupByArgs<ExtArgs>
            result: $Utils.Optional<VideopostGroupByOutputType>[]
          }
          count: {
            args: Prisma.VideopostCountArgs<ExtArgs>
            result: $Utils.Optional<VideopostCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
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
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    newsReporter?: newsReporterOmit
    advertiser?: AdvertiserOmit
    newsArticle?: newsArticleOmit
    quote?: quoteOmit
    advertisement?: AdvertisementOmit
    opinion?: OpinionOmit
    account?: AccountOmit
    session?: SessionOmit
    verificationToken?: VerificationTokenOmit
    advertiseRequest?: AdvertiseRequestOmit
    videopost?: VideopostOmit
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
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

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
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    accounts: number
    sessions: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | UserCountOutputTypeCountAccountsArgs
    sessions?: boolean | UserCountOutputTypeCountSessionsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }


  /**
   * Count Type NewsReporterCountOutputType
   */

  export type NewsReporterCountOutputType = {
    newsArticle: number
  }

  export type NewsReporterCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    newsArticle?: boolean | NewsReporterCountOutputTypeCountNewsArticleArgs
  }

  // Custom InputTypes
  /**
   * NewsReporterCountOutputType without action
   */
  export type NewsReporterCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsReporterCountOutputType
     */
    select?: NewsReporterCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * NewsReporterCountOutputType without action
   */
  export type NewsReporterCountOutputTypeCountNewsArticleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: newsArticleWhereInput
  }


  /**
   * Count Type NewsArticleCountOutputType
   */

  export type NewsArticleCountOutputType = {
    quotes: number
  }

  export type NewsArticleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    quotes?: boolean | NewsArticleCountOutputTypeCountQuotesArgs
  }

  // Custom InputTypes
  /**
   * NewsArticleCountOutputType without action
   */
  export type NewsArticleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsArticleCountOutputType
     */
    select?: NewsArticleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * NewsArticleCountOutputType without action
   */
  export type NewsArticleCountOutputTypeCountQuotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: quoteWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    emailVerified: Date | null
    image: string | null
    userType: $Enums.UserType | null
    approvalStatus: $Enums.ApprovalStatus | null
    onboardingCompleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    emailVerified: Date | null
    image: string | null
    userType: $Enums.UserType | null
    approvalStatus: $Enums.ApprovalStatus | null
    onboardingCompleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    emailVerified: number
    image: number
    userType: number
    approvalStatus: number
    onboardingCompleted: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    userType?: true
    approvalStatus?: true
    onboardingCompleted?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    userType?: true
    approvalStatus?: true
    onboardingCompleted?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    userType?: true
    approvalStatus?: true
    onboardingCompleted?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string | null
    email: string
    emailVerified: Date | null
    image: string | null
    userType: $Enums.UserType | null
    approvalStatus: $Enums.ApprovalStatus | null
    onboardingCompleted: boolean
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    userType?: boolean
    approvalStatus?: boolean
    onboardingCompleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    accounts?: boolean | User$accountsArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    newsReporter?: boolean | User$newsReporterArgs<ExtArgs>
    Advertiser?: boolean | User$AdvertiserArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    userType?: boolean
    approvalStatus?: boolean
    onboardingCompleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    userType?: boolean
    approvalStatus?: boolean
    onboardingCompleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    userType?: boolean
    approvalStatus?: boolean
    onboardingCompleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "emailVerified" | "image" | "userType" | "approvalStatus" | "onboardingCompleted" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | User$accountsArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    newsReporter?: boolean | User$newsReporterArgs<ExtArgs>
    Advertiser?: boolean | User$AdvertiserArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      accounts: Prisma.$AccountPayload<ExtArgs>[]
      sessions: Prisma.$SessionPayload<ExtArgs>[]
      newsReporter: Prisma.$newsReporterPayload<ExtArgs> | null
      Advertiser: Prisma.$AdvertiserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string | null
      email: string
      emailVerified: Date | null
      image: string | null
      userType: $Enums.UserType | null
      approvalStatus: $Enums.ApprovalStatus | null
      onboardingCompleted: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    accounts<T extends User$accountsArgs<ExtArgs> = {}>(args?: Subset<T, User$accountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sessions<T extends User$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    newsReporter<T extends User$newsReporterArgs<ExtArgs> = {}>(args?: Subset<T, User$newsReporterArgs<ExtArgs>>): Prisma__newsReporterClient<$Result.GetResult<Prisma.$newsReporterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    Advertiser<T extends User$AdvertiserArgs<ExtArgs> = {}>(args?: Subset<T, User$AdvertiserArgs<ExtArgs>>): Prisma__AdvertiserClient<$Result.GetResult<Prisma.$AdvertiserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly emailVerified: FieldRef<"User", 'DateTime'>
    readonly image: FieldRef<"User", 'String'>
    readonly userType: FieldRef<"User", 'UserType'>
    readonly approvalStatus: FieldRef<"User", 'ApprovalStatus'>
    readonly onboardingCompleted: FieldRef<"User", 'Boolean'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.accounts
   */
  export type User$accountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    cursor?: AccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * User.sessions
   */
  export type User$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * User.newsReporter
   */
  export type User$newsReporterArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the newsReporter
     */
    select?: newsReporterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the newsReporter
     */
    omit?: newsReporterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: newsReporterInclude<ExtArgs> | null
    where?: newsReporterWhereInput
  }

  /**
   * User.Advertiser
   */
  export type User$AdvertiserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Advertiser
     */
    select?: AdvertiserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Advertiser
     */
    omit?: AdvertiserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdvertiserInclude<ExtArgs> | null
    where?: AdvertiserWhereInput
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model newsReporter
   */

  export type AggregateNewsReporter = {
    _count: NewsReporterCountAggregateOutputType | null
    _min: NewsReporterMinAggregateOutputType | null
    _max: NewsReporterMaxAggregateOutputType | null
  }

  export type NewsReporterMinAggregateOutputType = {
    id: string | null
    reporterName: string | null
    location: string | null
    bio: string | null
    profilePicture: string | null
    phoneNumber: string | null
    facebookProfileAddress: string | null
    userId: string | null
    registered: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NewsReporterMaxAggregateOutputType = {
    id: string | null
    reporterName: string | null
    location: string | null
    bio: string | null
    profilePicture: string | null
    phoneNumber: string | null
    facebookProfileAddress: string | null
    userId: string | null
    registered: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NewsReporterCountAggregateOutputType = {
    id: number
    reporterName: number
    location: number
    bio: number
    profilePicture: number
    phoneNumber: number
    facebookProfileAddress: number
    userId: number
    registered: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type NewsReporterMinAggregateInputType = {
    id?: true
    reporterName?: true
    location?: true
    bio?: true
    profilePicture?: true
    phoneNumber?: true
    facebookProfileAddress?: true
    userId?: true
    registered?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NewsReporterMaxAggregateInputType = {
    id?: true
    reporterName?: true
    location?: true
    bio?: true
    profilePicture?: true
    phoneNumber?: true
    facebookProfileAddress?: true
    userId?: true
    registered?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NewsReporterCountAggregateInputType = {
    id?: true
    reporterName?: true
    location?: true
    bio?: true
    profilePicture?: true
    phoneNumber?: true
    facebookProfileAddress?: true
    userId?: true
    registered?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type NewsReporterAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which newsReporter to aggregate.
     */
    where?: newsReporterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of newsReporters to fetch.
     */
    orderBy?: newsReporterOrderByWithRelationInput | newsReporterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: newsReporterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` newsReporters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` newsReporters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned newsReporters
    **/
    _count?: true | NewsReporterCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NewsReporterMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NewsReporterMaxAggregateInputType
  }

  export type GetNewsReporterAggregateType<T extends NewsReporterAggregateArgs> = {
        [P in keyof T & keyof AggregateNewsReporter]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNewsReporter[P]>
      : GetScalarType<T[P], AggregateNewsReporter[P]>
  }




  export type newsReporterGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: newsReporterWhereInput
    orderBy?: newsReporterOrderByWithAggregationInput | newsReporterOrderByWithAggregationInput[]
    by: NewsReporterScalarFieldEnum[] | NewsReporterScalarFieldEnum
    having?: newsReporterScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NewsReporterCountAggregateInputType | true
    _min?: NewsReporterMinAggregateInputType
    _max?: NewsReporterMaxAggregateInputType
  }

  export type NewsReporterGroupByOutputType = {
    id: string
    reporterName: string | null
    location: string
    bio: string
    profilePicture: string
    phoneNumber: string
    facebookProfileAddress: string | null
    userId: string
    registered: boolean
    createdAt: Date
    updatedAt: Date
    _count: NewsReporterCountAggregateOutputType | null
    _min: NewsReporterMinAggregateOutputType | null
    _max: NewsReporterMaxAggregateOutputType | null
  }

  type GetNewsReporterGroupByPayload<T extends newsReporterGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NewsReporterGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NewsReporterGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NewsReporterGroupByOutputType[P]>
            : GetScalarType<T[P], NewsReporterGroupByOutputType[P]>
        }
      >
    >


  export type newsReporterSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reporterName?: boolean
    location?: boolean
    bio?: boolean
    profilePicture?: boolean
    phoneNumber?: boolean
    facebookProfileAddress?: boolean
    userId?: boolean
    registered?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    newsArticle?: boolean | newsReporter$newsArticleArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | NewsReporterCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["newsReporter"]>

  export type newsReporterSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reporterName?: boolean
    location?: boolean
    bio?: boolean
    profilePicture?: boolean
    phoneNumber?: boolean
    facebookProfileAddress?: boolean
    userId?: boolean
    registered?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["newsReporter"]>

  export type newsReporterSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reporterName?: boolean
    location?: boolean
    bio?: boolean
    profilePicture?: boolean
    phoneNumber?: boolean
    facebookProfileAddress?: boolean
    userId?: boolean
    registered?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["newsReporter"]>

  export type newsReporterSelectScalar = {
    id?: boolean
    reporterName?: boolean
    location?: boolean
    bio?: boolean
    profilePicture?: boolean
    phoneNumber?: boolean
    facebookProfileAddress?: boolean
    userId?: boolean
    registered?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type newsReporterOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "reporterName" | "location" | "bio" | "profilePicture" | "phoneNumber" | "facebookProfileAddress" | "userId" | "registered" | "createdAt" | "updatedAt", ExtArgs["result"]["newsReporter"]>
  export type newsReporterInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    newsArticle?: boolean | newsReporter$newsArticleArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | NewsReporterCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type newsReporterIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type newsReporterIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $newsReporterPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "newsReporter"
    objects: {
      newsArticle: Prisma.$newsArticlePayload<ExtArgs>[]
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      reporterName: string | null
      location: string
      bio: string
      profilePicture: string
      phoneNumber: string
      facebookProfileAddress: string | null
      userId: string
      registered: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["newsReporter"]>
    composites: {}
  }

  type newsReporterGetPayload<S extends boolean | null | undefined | newsReporterDefaultArgs> = $Result.GetResult<Prisma.$newsReporterPayload, S>

  type newsReporterCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<newsReporterFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NewsReporterCountAggregateInputType | true
    }

  export interface newsReporterDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['newsReporter'], meta: { name: 'newsReporter' } }
    /**
     * Find zero or one NewsReporter that matches the filter.
     * @param {newsReporterFindUniqueArgs} args - Arguments to find a NewsReporter
     * @example
     * // Get one NewsReporter
     * const newsReporter = await prisma.newsReporter.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends newsReporterFindUniqueArgs>(args: SelectSubset<T, newsReporterFindUniqueArgs<ExtArgs>>): Prisma__newsReporterClient<$Result.GetResult<Prisma.$newsReporterPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one NewsReporter that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {newsReporterFindUniqueOrThrowArgs} args - Arguments to find a NewsReporter
     * @example
     * // Get one NewsReporter
     * const newsReporter = await prisma.newsReporter.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends newsReporterFindUniqueOrThrowArgs>(args: SelectSubset<T, newsReporterFindUniqueOrThrowArgs<ExtArgs>>): Prisma__newsReporterClient<$Result.GetResult<Prisma.$newsReporterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NewsReporter that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {newsReporterFindFirstArgs} args - Arguments to find a NewsReporter
     * @example
     * // Get one NewsReporter
     * const newsReporter = await prisma.newsReporter.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends newsReporterFindFirstArgs>(args?: SelectSubset<T, newsReporterFindFirstArgs<ExtArgs>>): Prisma__newsReporterClient<$Result.GetResult<Prisma.$newsReporterPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NewsReporter that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {newsReporterFindFirstOrThrowArgs} args - Arguments to find a NewsReporter
     * @example
     * // Get one NewsReporter
     * const newsReporter = await prisma.newsReporter.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends newsReporterFindFirstOrThrowArgs>(args?: SelectSubset<T, newsReporterFindFirstOrThrowArgs<ExtArgs>>): Prisma__newsReporterClient<$Result.GetResult<Prisma.$newsReporterPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more NewsReporters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {newsReporterFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all NewsReporters
     * const newsReporters = await prisma.newsReporter.findMany()
     * 
     * // Get first 10 NewsReporters
     * const newsReporters = await prisma.newsReporter.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const newsReporterWithIdOnly = await prisma.newsReporter.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends newsReporterFindManyArgs>(args?: SelectSubset<T, newsReporterFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$newsReporterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a NewsReporter.
     * @param {newsReporterCreateArgs} args - Arguments to create a NewsReporter.
     * @example
     * // Create one NewsReporter
     * const NewsReporter = await prisma.newsReporter.create({
     *   data: {
     *     // ... data to create a NewsReporter
     *   }
     * })
     * 
     */
    create<T extends newsReporterCreateArgs>(args: SelectSubset<T, newsReporterCreateArgs<ExtArgs>>): Prisma__newsReporterClient<$Result.GetResult<Prisma.$newsReporterPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many NewsReporters.
     * @param {newsReporterCreateManyArgs} args - Arguments to create many NewsReporters.
     * @example
     * // Create many NewsReporters
     * const newsReporter = await prisma.newsReporter.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends newsReporterCreateManyArgs>(args?: SelectSubset<T, newsReporterCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many NewsReporters and returns the data saved in the database.
     * @param {newsReporterCreateManyAndReturnArgs} args - Arguments to create many NewsReporters.
     * @example
     * // Create many NewsReporters
     * const newsReporter = await prisma.newsReporter.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many NewsReporters and only return the `id`
     * const newsReporterWithIdOnly = await prisma.newsReporter.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends newsReporterCreateManyAndReturnArgs>(args?: SelectSubset<T, newsReporterCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$newsReporterPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a NewsReporter.
     * @param {newsReporterDeleteArgs} args - Arguments to delete one NewsReporter.
     * @example
     * // Delete one NewsReporter
     * const NewsReporter = await prisma.newsReporter.delete({
     *   where: {
     *     // ... filter to delete one NewsReporter
     *   }
     * })
     * 
     */
    delete<T extends newsReporterDeleteArgs>(args: SelectSubset<T, newsReporterDeleteArgs<ExtArgs>>): Prisma__newsReporterClient<$Result.GetResult<Prisma.$newsReporterPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one NewsReporter.
     * @param {newsReporterUpdateArgs} args - Arguments to update one NewsReporter.
     * @example
     * // Update one NewsReporter
     * const newsReporter = await prisma.newsReporter.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends newsReporterUpdateArgs>(args: SelectSubset<T, newsReporterUpdateArgs<ExtArgs>>): Prisma__newsReporterClient<$Result.GetResult<Prisma.$newsReporterPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more NewsReporters.
     * @param {newsReporterDeleteManyArgs} args - Arguments to filter NewsReporters to delete.
     * @example
     * // Delete a few NewsReporters
     * const { count } = await prisma.newsReporter.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends newsReporterDeleteManyArgs>(args?: SelectSubset<T, newsReporterDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NewsReporters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {newsReporterUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many NewsReporters
     * const newsReporter = await prisma.newsReporter.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends newsReporterUpdateManyArgs>(args: SelectSubset<T, newsReporterUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NewsReporters and returns the data updated in the database.
     * @param {newsReporterUpdateManyAndReturnArgs} args - Arguments to update many NewsReporters.
     * @example
     * // Update many NewsReporters
     * const newsReporter = await prisma.newsReporter.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more NewsReporters and only return the `id`
     * const newsReporterWithIdOnly = await prisma.newsReporter.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends newsReporterUpdateManyAndReturnArgs>(args: SelectSubset<T, newsReporterUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$newsReporterPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one NewsReporter.
     * @param {newsReporterUpsertArgs} args - Arguments to update or create a NewsReporter.
     * @example
     * // Update or create a NewsReporter
     * const newsReporter = await prisma.newsReporter.upsert({
     *   create: {
     *     // ... data to create a NewsReporter
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the NewsReporter we want to update
     *   }
     * })
     */
    upsert<T extends newsReporterUpsertArgs>(args: SelectSubset<T, newsReporterUpsertArgs<ExtArgs>>): Prisma__newsReporterClient<$Result.GetResult<Prisma.$newsReporterPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of NewsReporters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {newsReporterCountArgs} args - Arguments to filter NewsReporters to count.
     * @example
     * // Count the number of NewsReporters
     * const count = await prisma.newsReporter.count({
     *   where: {
     *     // ... the filter for the NewsReporters we want to count
     *   }
     * })
    **/
    count<T extends newsReporterCountArgs>(
      args?: Subset<T, newsReporterCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NewsReporterCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a NewsReporter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsReporterAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NewsReporterAggregateArgs>(args: Subset<T, NewsReporterAggregateArgs>): Prisma.PrismaPromise<GetNewsReporterAggregateType<T>>

    /**
     * Group by NewsReporter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {newsReporterGroupByArgs} args - Group by arguments.
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
      T extends newsReporterGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: newsReporterGroupByArgs['orderBy'] }
        : { orderBy?: newsReporterGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, newsReporterGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNewsReporterGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the newsReporter model
   */
  readonly fields: newsReporterFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for newsReporter.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__newsReporterClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    newsArticle<T extends newsReporter$newsArticleArgs<ExtArgs> = {}>(args?: Subset<T, newsReporter$newsArticleArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$newsArticlePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the newsReporter model
   */
  interface newsReporterFieldRefs {
    readonly id: FieldRef<"newsReporter", 'String'>
    readonly reporterName: FieldRef<"newsReporter", 'String'>
    readonly location: FieldRef<"newsReporter", 'String'>
    readonly bio: FieldRef<"newsReporter", 'String'>
    readonly profilePicture: FieldRef<"newsReporter", 'String'>
    readonly phoneNumber: FieldRef<"newsReporter", 'String'>
    readonly facebookProfileAddress: FieldRef<"newsReporter", 'String'>
    readonly userId: FieldRef<"newsReporter", 'String'>
    readonly registered: FieldRef<"newsReporter", 'Boolean'>
    readonly createdAt: FieldRef<"newsReporter", 'DateTime'>
    readonly updatedAt: FieldRef<"newsReporter", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * newsReporter findUnique
   */
  export type newsReporterFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the newsReporter
     */
    select?: newsReporterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the newsReporter
     */
    omit?: newsReporterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: newsReporterInclude<ExtArgs> | null
    /**
     * Filter, which newsReporter to fetch.
     */
    where: newsReporterWhereUniqueInput
  }

  /**
   * newsReporter findUniqueOrThrow
   */
  export type newsReporterFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the newsReporter
     */
    select?: newsReporterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the newsReporter
     */
    omit?: newsReporterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: newsReporterInclude<ExtArgs> | null
    /**
     * Filter, which newsReporter to fetch.
     */
    where: newsReporterWhereUniqueInput
  }

  /**
   * newsReporter findFirst
   */
  export type newsReporterFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the newsReporter
     */
    select?: newsReporterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the newsReporter
     */
    omit?: newsReporterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: newsReporterInclude<ExtArgs> | null
    /**
     * Filter, which newsReporter to fetch.
     */
    where?: newsReporterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of newsReporters to fetch.
     */
    orderBy?: newsReporterOrderByWithRelationInput | newsReporterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for newsReporters.
     */
    cursor?: newsReporterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` newsReporters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` newsReporters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of newsReporters.
     */
    distinct?: NewsReporterScalarFieldEnum | NewsReporterScalarFieldEnum[]
  }

  /**
   * newsReporter findFirstOrThrow
   */
  export type newsReporterFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the newsReporter
     */
    select?: newsReporterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the newsReporter
     */
    omit?: newsReporterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: newsReporterInclude<ExtArgs> | null
    /**
     * Filter, which newsReporter to fetch.
     */
    where?: newsReporterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of newsReporters to fetch.
     */
    orderBy?: newsReporterOrderByWithRelationInput | newsReporterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for newsReporters.
     */
    cursor?: newsReporterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` newsReporters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` newsReporters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of newsReporters.
     */
    distinct?: NewsReporterScalarFieldEnum | NewsReporterScalarFieldEnum[]
  }

  /**
   * newsReporter findMany
   */
  export type newsReporterFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the newsReporter
     */
    select?: newsReporterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the newsReporter
     */
    omit?: newsReporterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: newsReporterInclude<ExtArgs> | null
    /**
     * Filter, which newsReporters to fetch.
     */
    where?: newsReporterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of newsReporters to fetch.
     */
    orderBy?: newsReporterOrderByWithRelationInput | newsReporterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing newsReporters.
     */
    cursor?: newsReporterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` newsReporters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` newsReporters.
     */
    skip?: number
    distinct?: NewsReporterScalarFieldEnum | NewsReporterScalarFieldEnum[]
  }

  /**
   * newsReporter create
   */
  export type newsReporterCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the newsReporter
     */
    select?: newsReporterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the newsReporter
     */
    omit?: newsReporterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: newsReporterInclude<ExtArgs> | null
    /**
     * The data needed to create a newsReporter.
     */
    data: XOR<newsReporterCreateInput, newsReporterUncheckedCreateInput>
  }

  /**
   * newsReporter createMany
   */
  export type newsReporterCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many newsReporters.
     */
    data: newsReporterCreateManyInput | newsReporterCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * newsReporter createManyAndReturn
   */
  export type newsReporterCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the newsReporter
     */
    select?: newsReporterSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the newsReporter
     */
    omit?: newsReporterOmit<ExtArgs> | null
    /**
     * The data used to create many newsReporters.
     */
    data: newsReporterCreateManyInput | newsReporterCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: newsReporterIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * newsReporter update
   */
  export type newsReporterUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the newsReporter
     */
    select?: newsReporterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the newsReporter
     */
    omit?: newsReporterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: newsReporterInclude<ExtArgs> | null
    /**
     * The data needed to update a newsReporter.
     */
    data: XOR<newsReporterUpdateInput, newsReporterUncheckedUpdateInput>
    /**
     * Choose, which newsReporter to update.
     */
    where: newsReporterWhereUniqueInput
  }

  /**
   * newsReporter updateMany
   */
  export type newsReporterUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update newsReporters.
     */
    data: XOR<newsReporterUpdateManyMutationInput, newsReporterUncheckedUpdateManyInput>
    /**
     * Filter which newsReporters to update
     */
    where?: newsReporterWhereInput
    /**
     * Limit how many newsReporters to update.
     */
    limit?: number
  }

  /**
   * newsReporter updateManyAndReturn
   */
  export type newsReporterUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the newsReporter
     */
    select?: newsReporterSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the newsReporter
     */
    omit?: newsReporterOmit<ExtArgs> | null
    /**
     * The data used to update newsReporters.
     */
    data: XOR<newsReporterUpdateManyMutationInput, newsReporterUncheckedUpdateManyInput>
    /**
     * Filter which newsReporters to update
     */
    where?: newsReporterWhereInput
    /**
     * Limit how many newsReporters to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: newsReporterIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * newsReporter upsert
   */
  export type newsReporterUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the newsReporter
     */
    select?: newsReporterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the newsReporter
     */
    omit?: newsReporterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: newsReporterInclude<ExtArgs> | null
    /**
     * The filter to search for the newsReporter to update in case it exists.
     */
    where: newsReporterWhereUniqueInput
    /**
     * In case the newsReporter found by the `where` argument doesn't exist, create a new newsReporter with this data.
     */
    create: XOR<newsReporterCreateInput, newsReporterUncheckedCreateInput>
    /**
     * In case the newsReporter was found with the provided `where` argument, update it with this data.
     */
    update: XOR<newsReporterUpdateInput, newsReporterUncheckedUpdateInput>
  }

  /**
   * newsReporter delete
   */
  export type newsReporterDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the newsReporter
     */
    select?: newsReporterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the newsReporter
     */
    omit?: newsReporterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: newsReporterInclude<ExtArgs> | null
    /**
     * Filter which newsReporter to delete.
     */
    where: newsReporterWhereUniqueInput
  }

  /**
   * newsReporter deleteMany
   */
  export type newsReporterDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which newsReporters to delete
     */
    where?: newsReporterWhereInput
    /**
     * Limit how many newsReporters to delete.
     */
    limit?: number
  }

  /**
   * newsReporter.newsArticle
   */
  export type newsReporter$newsArticleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the newsArticle
     */
    select?: newsArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the newsArticle
     */
    omit?: newsArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: newsArticleInclude<ExtArgs> | null
    where?: newsArticleWhereInput
    orderBy?: newsArticleOrderByWithRelationInput | newsArticleOrderByWithRelationInput[]
    cursor?: newsArticleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NewsArticleScalarFieldEnum | NewsArticleScalarFieldEnum[]
  }

  /**
   * newsReporter without action
   */
  export type newsReporterDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the newsReporter
     */
    select?: newsReporterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the newsReporter
     */
    omit?: newsReporterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: newsReporterInclude<ExtArgs> | null
  }


  /**
   * Model Advertiser
   */

  export type AggregateAdvertiser = {
    _count: AdvertiserCountAggregateOutputType | null
    _min: AdvertiserMinAggregateOutputType | null
    _max: AdvertiserMaxAggregateOutputType | null
  }

  export type AdvertiserMinAggregateOutputType = {
    id: string | null
    supervisorName: string | null
    companyName: string | null
    companyAddress: string | null
    phoneNumber: string | null
    aboutCompany: string | null
    companyWebsite: string | null
    userId: string | null
    registered: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AdvertiserMaxAggregateOutputType = {
    id: string | null
    supervisorName: string | null
    companyName: string | null
    companyAddress: string | null
    phoneNumber: string | null
    aboutCompany: string | null
    companyWebsite: string | null
    userId: string | null
    registered: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AdvertiserCountAggregateOutputType = {
    id: number
    supervisorName: number
    companyName: number
    companyAddress: number
    phoneNumber: number
    aboutCompany: number
    companyWebsite: number
    userId: number
    registered: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AdvertiserMinAggregateInputType = {
    id?: true
    supervisorName?: true
    companyName?: true
    companyAddress?: true
    phoneNumber?: true
    aboutCompany?: true
    companyWebsite?: true
    userId?: true
    registered?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AdvertiserMaxAggregateInputType = {
    id?: true
    supervisorName?: true
    companyName?: true
    companyAddress?: true
    phoneNumber?: true
    aboutCompany?: true
    companyWebsite?: true
    userId?: true
    registered?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AdvertiserCountAggregateInputType = {
    id?: true
    supervisorName?: true
    companyName?: true
    companyAddress?: true
    phoneNumber?: true
    aboutCompany?: true
    companyWebsite?: true
    userId?: true
    registered?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AdvertiserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Advertiser to aggregate.
     */
    where?: AdvertiserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Advertisers to fetch.
     */
    orderBy?: AdvertiserOrderByWithRelationInput | AdvertiserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdvertiserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Advertisers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Advertisers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Advertisers
    **/
    _count?: true | AdvertiserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdvertiserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdvertiserMaxAggregateInputType
  }

  export type GetAdvertiserAggregateType<T extends AdvertiserAggregateArgs> = {
        [P in keyof T & keyof AggregateAdvertiser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdvertiser[P]>
      : GetScalarType<T[P], AggregateAdvertiser[P]>
  }




  export type AdvertiserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdvertiserWhereInput
    orderBy?: AdvertiserOrderByWithAggregationInput | AdvertiserOrderByWithAggregationInput[]
    by: AdvertiserScalarFieldEnum[] | AdvertiserScalarFieldEnum
    having?: AdvertiserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdvertiserCountAggregateInputType | true
    _min?: AdvertiserMinAggregateInputType
    _max?: AdvertiserMaxAggregateInputType
  }

  export type AdvertiserGroupByOutputType = {
    id: string
    supervisorName: string
    companyName: string
    companyAddress: string
    phoneNumber: string
    aboutCompany: string
    companyWebsite: string | null
    userId: string
    registered: boolean
    createdAt: Date
    updatedAt: Date
    _count: AdvertiserCountAggregateOutputType | null
    _min: AdvertiserMinAggregateOutputType | null
    _max: AdvertiserMaxAggregateOutputType | null
  }

  type GetAdvertiserGroupByPayload<T extends AdvertiserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdvertiserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdvertiserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdvertiserGroupByOutputType[P]>
            : GetScalarType<T[P], AdvertiserGroupByOutputType[P]>
        }
      >
    >


  export type AdvertiserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    supervisorName?: boolean
    companyName?: boolean
    companyAddress?: boolean
    phoneNumber?: boolean
    aboutCompany?: boolean
    companyWebsite?: boolean
    userId?: boolean
    registered?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["advertiser"]>

  export type AdvertiserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    supervisorName?: boolean
    companyName?: boolean
    companyAddress?: boolean
    phoneNumber?: boolean
    aboutCompany?: boolean
    companyWebsite?: boolean
    userId?: boolean
    registered?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["advertiser"]>

  export type AdvertiserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    supervisorName?: boolean
    companyName?: boolean
    companyAddress?: boolean
    phoneNumber?: boolean
    aboutCompany?: boolean
    companyWebsite?: boolean
    userId?: boolean
    registered?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["advertiser"]>

  export type AdvertiserSelectScalar = {
    id?: boolean
    supervisorName?: boolean
    companyName?: boolean
    companyAddress?: boolean
    phoneNumber?: boolean
    aboutCompany?: boolean
    companyWebsite?: boolean
    userId?: boolean
    registered?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AdvertiserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "supervisorName" | "companyName" | "companyAddress" | "phoneNumber" | "aboutCompany" | "companyWebsite" | "userId" | "registered" | "createdAt" | "updatedAt", ExtArgs["result"]["advertiser"]>
  export type AdvertiserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AdvertiserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AdvertiserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AdvertiserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Advertiser"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      supervisorName: string
      companyName: string
      companyAddress: string
      phoneNumber: string
      aboutCompany: string
      companyWebsite: string | null
      userId: string
      registered: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["advertiser"]>
    composites: {}
  }

  type AdvertiserGetPayload<S extends boolean | null | undefined | AdvertiserDefaultArgs> = $Result.GetResult<Prisma.$AdvertiserPayload, S>

  type AdvertiserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AdvertiserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdvertiserCountAggregateInputType | true
    }

  export interface AdvertiserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Advertiser'], meta: { name: 'Advertiser' } }
    /**
     * Find zero or one Advertiser that matches the filter.
     * @param {AdvertiserFindUniqueArgs} args - Arguments to find a Advertiser
     * @example
     * // Get one Advertiser
     * const advertiser = await prisma.advertiser.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdvertiserFindUniqueArgs>(args: SelectSubset<T, AdvertiserFindUniqueArgs<ExtArgs>>): Prisma__AdvertiserClient<$Result.GetResult<Prisma.$AdvertiserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Advertiser that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AdvertiserFindUniqueOrThrowArgs} args - Arguments to find a Advertiser
     * @example
     * // Get one Advertiser
     * const advertiser = await prisma.advertiser.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdvertiserFindUniqueOrThrowArgs>(args: SelectSubset<T, AdvertiserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdvertiserClient<$Result.GetResult<Prisma.$AdvertiserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Advertiser that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdvertiserFindFirstArgs} args - Arguments to find a Advertiser
     * @example
     * // Get one Advertiser
     * const advertiser = await prisma.advertiser.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdvertiserFindFirstArgs>(args?: SelectSubset<T, AdvertiserFindFirstArgs<ExtArgs>>): Prisma__AdvertiserClient<$Result.GetResult<Prisma.$AdvertiserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Advertiser that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdvertiserFindFirstOrThrowArgs} args - Arguments to find a Advertiser
     * @example
     * // Get one Advertiser
     * const advertiser = await prisma.advertiser.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdvertiserFindFirstOrThrowArgs>(args?: SelectSubset<T, AdvertiserFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdvertiserClient<$Result.GetResult<Prisma.$AdvertiserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Advertisers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdvertiserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Advertisers
     * const advertisers = await prisma.advertiser.findMany()
     * 
     * // Get first 10 Advertisers
     * const advertisers = await prisma.advertiser.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const advertiserWithIdOnly = await prisma.advertiser.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AdvertiserFindManyArgs>(args?: SelectSubset<T, AdvertiserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdvertiserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Advertiser.
     * @param {AdvertiserCreateArgs} args - Arguments to create a Advertiser.
     * @example
     * // Create one Advertiser
     * const Advertiser = await prisma.advertiser.create({
     *   data: {
     *     // ... data to create a Advertiser
     *   }
     * })
     * 
     */
    create<T extends AdvertiserCreateArgs>(args: SelectSubset<T, AdvertiserCreateArgs<ExtArgs>>): Prisma__AdvertiserClient<$Result.GetResult<Prisma.$AdvertiserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Advertisers.
     * @param {AdvertiserCreateManyArgs} args - Arguments to create many Advertisers.
     * @example
     * // Create many Advertisers
     * const advertiser = await prisma.advertiser.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdvertiserCreateManyArgs>(args?: SelectSubset<T, AdvertiserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Advertisers and returns the data saved in the database.
     * @param {AdvertiserCreateManyAndReturnArgs} args - Arguments to create many Advertisers.
     * @example
     * // Create many Advertisers
     * const advertiser = await prisma.advertiser.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Advertisers and only return the `id`
     * const advertiserWithIdOnly = await prisma.advertiser.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AdvertiserCreateManyAndReturnArgs>(args?: SelectSubset<T, AdvertiserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdvertiserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Advertiser.
     * @param {AdvertiserDeleteArgs} args - Arguments to delete one Advertiser.
     * @example
     * // Delete one Advertiser
     * const Advertiser = await prisma.advertiser.delete({
     *   where: {
     *     // ... filter to delete one Advertiser
     *   }
     * })
     * 
     */
    delete<T extends AdvertiserDeleteArgs>(args: SelectSubset<T, AdvertiserDeleteArgs<ExtArgs>>): Prisma__AdvertiserClient<$Result.GetResult<Prisma.$AdvertiserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Advertiser.
     * @param {AdvertiserUpdateArgs} args - Arguments to update one Advertiser.
     * @example
     * // Update one Advertiser
     * const advertiser = await prisma.advertiser.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdvertiserUpdateArgs>(args: SelectSubset<T, AdvertiserUpdateArgs<ExtArgs>>): Prisma__AdvertiserClient<$Result.GetResult<Prisma.$AdvertiserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Advertisers.
     * @param {AdvertiserDeleteManyArgs} args - Arguments to filter Advertisers to delete.
     * @example
     * // Delete a few Advertisers
     * const { count } = await prisma.advertiser.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdvertiserDeleteManyArgs>(args?: SelectSubset<T, AdvertiserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Advertisers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdvertiserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Advertisers
     * const advertiser = await prisma.advertiser.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdvertiserUpdateManyArgs>(args: SelectSubset<T, AdvertiserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Advertisers and returns the data updated in the database.
     * @param {AdvertiserUpdateManyAndReturnArgs} args - Arguments to update many Advertisers.
     * @example
     * // Update many Advertisers
     * const advertiser = await prisma.advertiser.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Advertisers and only return the `id`
     * const advertiserWithIdOnly = await prisma.advertiser.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AdvertiserUpdateManyAndReturnArgs>(args: SelectSubset<T, AdvertiserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdvertiserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Advertiser.
     * @param {AdvertiserUpsertArgs} args - Arguments to update or create a Advertiser.
     * @example
     * // Update or create a Advertiser
     * const advertiser = await prisma.advertiser.upsert({
     *   create: {
     *     // ... data to create a Advertiser
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Advertiser we want to update
     *   }
     * })
     */
    upsert<T extends AdvertiserUpsertArgs>(args: SelectSubset<T, AdvertiserUpsertArgs<ExtArgs>>): Prisma__AdvertiserClient<$Result.GetResult<Prisma.$AdvertiserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Advertisers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdvertiserCountArgs} args - Arguments to filter Advertisers to count.
     * @example
     * // Count the number of Advertisers
     * const count = await prisma.advertiser.count({
     *   where: {
     *     // ... the filter for the Advertisers we want to count
     *   }
     * })
    **/
    count<T extends AdvertiserCountArgs>(
      args?: Subset<T, AdvertiserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdvertiserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Advertiser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdvertiserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AdvertiserAggregateArgs>(args: Subset<T, AdvertiserAggregateArgs>): Prisma.PrismaPromise<GetAdvertiserAggregateType<T>>

    /**
     * Group by Advertiser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdvertiserGroupByArgs} args - Group by arguments.
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
      T extends AdvertiserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdvertiserGroupByArgs['orderBy'] }
        : { orderBy?: AdvertiserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, AdvertiserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdvertiserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Advertiser model
   */
  readonly fields: AdvertiserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Advertiser.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdvertiserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Advertiser model
   */
  interface AdvertiserFieldRefs {
    readonly id: FieldRef<"Advertiser", 'String'>
    readonly supervisorName: FieldRef<"Advertiser", 'String'>
    readonly companyName: FieldRef<"Advertiser", 'String'>
    readonly companyAddress: FieldRef<"Advertiser", 'String'>
    readonly phoneNumber: FieldRef<"Advertiser", 'String'>
    readonly aboutCompany: FieldRef<"Advertiser", 'String'>
    readonly companyWebsite: FieldRef<"Advertiser", 'String'>
    readonly userId: FieldRef<"Advertiser", 'String'>
    readonly registered: FieldRef<"Advertiser", 'Boolean'>
    readonly createdAt: FieldRef<"Advertiser", 'DateTime'>
    readonly updatedAt: FieldRef<"Advertiser", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Advertiser findUnique
   */
  export type AdvertiserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Advertiser
     */
    select?: AdvertiserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Advertiser
     */
    omit?: AdvertiserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdvertiserInclude<ExtArgs> | null
    /**
     * Filter, which Advertiser to fetch.
     */
    where: AdvertiserWhereUniqueInput
  }

  /**
   * Advertiser findUniqueOrThrow
   */
  export type AdvertiserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Advertiser
     */
    select?: AdvertiserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Advertiser
     */
    omit?: AdvertiserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdvertiserInclude<ExtArgs> | null
    /**
     * Filter, which Advertiser to fetch.
     */
    where: AdvertiserWhereUniqueInput
  }

  /**
   * Advertiser findFirst
   */
  export type AdvertiserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Advertiser
     */
    select?: AdvertiserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Advertiser
     */
    omit?: AdvertiserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdvertiserInclude<ExtArgs> | null
    /**
     * Filter, which Advertiser to fetch.
     */
    where?: AdvertiserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Advertisers to fetch.
     */
    orderBy?: AdvertiserOrderByWithRelationInput | AdvertiserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Advertisers.
     */
    cursor?: AdvertiserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Advertisers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Advertisers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Advertisers.
     */
    distinct?: AdvertiserScalarFieldEnum | AdvertiserScalarFieldEnum[]
  }

  /**
   * Advertiser findFirstOrThrow
   */
  export type AdvertiserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Advertiser
     */
    select?: AdvertiserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Advertiser
     */
    omit?: AdvertiserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdvertiserInclude<ExtArgs> | null
    /**
     * Filter, which Advertiser to fetch.
     */
    where?: AdvertiserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Advertisers to fetch.
     */
    orderBy?: AdvertiserOrderByWithRelationInput | AdvertiserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Advertisers.
     */
    cursor?: AdvertiserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Advertisers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Advertisers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Advertisers.
     */
    distinct?: AdvertiserScalarFieldEnum | AdvertiserScalarFieldEnum[]
  }

  /**
   * Advertiser findMany
   */
  export type AdvertiserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Advertiser
     */
    select?: AdvertiserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Advertiser
     */
    omit?: AdvertiserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdvertiserInclude<ExtArgs> | null
    /**
     * Filter, which Advertisers to fetch.
     */
    where?: AdvertiserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Advertisers to fetch.
     */
    orderBy?: AdvertiserOrderByWithRelationInput | AdvertiserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Advertisers.
     */
    cursor?: AdvertiserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Advertisers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Advertisers.
     */
    skip?: number
    distinct?: AdvertiserScalarFieldEnum | AdvertiserScalarFieldEnum[]
  }

  /**
   * Advertiser create
   */
  export type AdvertiserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Advertiser
     */
    select?: AdvertiserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Advertiser
     */
    omit?: AdvertiserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdvertiserInclude<ExtArgs> | null
    /**
     * The data needed to create a Advertiser.
     */
    data: XOR<AdvertiserCreateInput, AdvertiserUncheckedCreateInput>
  }

  /**
   * Advertiser createMany
   */
  export type AdvertiserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Advertisers.
     */
    data: AdvertiserCreateManyInput | AdvertiserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Advertiser createManyAndReturn
   */
  export type AdvertiserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Advertiser
     */
    select?: AdvertiserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Advertiser
     */
    omit?: AdvertiserOmit<ExtArgs> | null
    /**
     * The data used to create many Advertisers.
     */
    data: AdvertiserCreateManyInput | AdvertiserCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdvertiserIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Advertiser update
   */
  export type AdvertiserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Advertiser
     */
    select?: AdvertiserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Advertiser
     */
    omit?: AdvertiserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdvertiserInclude<ExtArgs> | null
    /**
     * The data needed to update a Advertiser.
     */
    data: XOR<AdvertiserUpdateInput, AdvertiserUncheckedUpdateInput>
    /**
     * Choose, which Advertiser to update.
     */
    where: AdvertiserWhereUniqueInput
  }

  /**
   * Advertiser updateMany
   */
  export type AdvertiserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Advertisers.
     */
    data: XOR<AdvertiserUpdateManyMutationInput, AdvertiserUncheckedUpdateManyInput>
    /**
     * Filter which Advertisers to update
     */
    where?: AdvertiserWhereInput
    /**
     * Limit how many Advertisers to update.
     */
    limit?: number
  }

  /**
   * Advertiser updateManyAndReturn
   */
  export type AdvertiserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Advertiser
     */
    select?: AdvertiserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Advertiser
     */
    omit?: AdvertiserOmit<ExtArgs> | null
    /**
     * The data used to update Advertisers.
     */
    data: XOR<AdvertiserUpdateManyMutationInput, AdvertiserUncheckedUpdateManyInput>
    /**
     * Filter which Advertisers to update
     */
    where?: AdvertiserWhereInput
    /**
     * Limit how many Advertisers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdvertiserIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Advertiser upsert
   */
  export type AdvertiserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Advertiser
     */
    select?: AdvertiserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Advertiser
     */
    omit?: AdvertiserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdvertiserInclude<ExtArgs> | null
    /**
     * The filter to search for the Advertiser to update in case it exists.
     */
    where: AdvertiserWhereUniqueInput
    /**
     * In case the Advertiser found by the `where` argument doesn't exist, create a new Advertiser with this data.
     */
    create: XOR<AdvertiserCreateInput, AdvertiserUncheckedCreateInput>
    /**
     * In case the Advertiser was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdvertiserUpdateInput, AdvertiserUncheckedUpdateInput>
  }

  /**
   * Advertiser delete
   */
  export type AdvertiserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Advertiser
     */
    select?: AdvertiserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Advertiser
     */
    omit?: AdvertiserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdvertiserInclude<ExtArgs> | null
    /**
     * Filter which Advertiser to delete.
     */
    where: AdvertiserWhereUniqueInput
  }

  /**
   * Advertiser deleteMany
   */
  export type AdvertiserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Advertisers to delete
     */
    where?: AdvertiserWhereInput
    /**
     * Limit how many Advertisers to delete.
     */
    limit?: number
  }

  /**
   * Advertiser without action
   */
  export type AdvertiserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Advertiser
     */
    select?: AdvertiserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Advertiser
     */
    omit?: AdvertiserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdvertiserInclude<ExtArgs> | null
  }


  /**
   * Model newsArticle
   */

  export type AggregateNewsArticle = {
    _count: NewsArticleCountAggregateOutputType | null
    _avg: NewsArticleAvgAggregateOutputType | null
    _sum: NewsArticleSumAggregateOutputType | null
    _min: NewsArticleMinAggregateOutputType | null
    _max: NewsArticleMaxAggregateOutputType | null
  }

  export type NewsArticleAvgAggregateOutputType = {
    duration: number | null
  }

  export type NewsArticleSumAggregateOutputType = {
    duration: number | null
  }

  export type NewsArticleMinAggregateOutputType = {
    id: string | null
    newsHeading: string | null
    newsResource: string | null
    newsLocation: string | null
    newsCategory: $Enums.newsCategory | null
    newsPicture: string | null
    newsPictureHeading: string | null
    newsPictureCredit: string | null
    isFeatured: boolean | null
    newsDetails: string | null
    reporterId: string | null
    duration: number | null
    newsArticleStatus: $Enums.newsArticleStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NewsArticleMaxAggregateOutputType = {
    id: string | null
    newsHeading: string | null
    newsResource: string | null
    newsLocation: string | null
    newsCategory: $Enums.newsCategory | null
    newsPicture: string | null
    newsPictureHeading: string | null
    newsPictureCredit: string | null
    isFeatured: boolean | null
    newsDetails: string | null
    reporterId: string | null
    duration: number | null
    newsArticleStatus: $Enums.newsArticleStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NewsArticleCountAggregateOutputType = {
    id: number
    newsHeading: number
    newsResource: number
    newsLocation: number
    newsCategory: number
    newsPicture: number
    newsPictureHeading: number
    newsPictureCredit: number
    isFeatured: number
    newsDetails: number
    reporterId: number
    duration: number
    newsArticleStatus: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type NewsArticleAvgAggregateInputType = {
    duration?: true
  }

  export type NewsArticleSumAggregateInputType = {
    duration?: true
  }

  export type NewsArticleMinAggregateInputType = {
    id?: true
    newsHeading?: true
    newsResource?: true
    newsLocation?: true
    newsCategory?: true
    newsPicture?: true
    newsPictureHeading?: true
    newsPictureCredit?: true
    isFeatured?: true
    newsDetails?: true
    reporterId?: true
    duration?: true
    newsArticleStatus?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NewsArticleMaxAggregateInputType = {
    id?: true
    newsHeading?: true
    newsResource?: true
    newsLocation?: true
    newsCategory?: true
    newsPicture?: true
    newsPictureHeading?: true
    newsPictureCredit?: true
    isFeatured?: true
    newsDetails?: true
    reporterId?: true
    duration?: true
    newsArticleStatus?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NewsArticleCountAggregateInputType = {
    id?: true
    newsHeading?: true
    newsResource?: true
    newsLocation?: true
    newsCategory?: true
    newsPicture?: true
    newsPictureHeading?: true
    newsPictureCredit?: true
    isFeatured?: true
    newsDetails?: true
    reporterId?: true
    duration?: true
    newsArticleStatus?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type NewsArticleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which newsArticle to aggregate.
     */
    where?: newsArticleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of newsArticles to fetch.
     */
    orderBy?: newsArticleOrderByWithRelationInput | newsArticleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: newsArticleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` newsArticles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` newsArticles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned newsArticles
    **/
    _count?: true | NewsArticleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NewsArticleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NewsArticleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NewsArticleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NewsArticleMaxAggregateInputType
  }

  export type GetNewsArticleAggregateType<T extends NewsArticleAggregateArgs> = {
        [P in keyof T & keyof AggregateNewsArticle]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNewsArticle[P]>
      : GetScalarType<T[P], AggregateNewsArticle[P]>
  }




  export type newsArticleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: newsArticleWhereInput
    orderBy?: newsArticleOrderByWithAggregationInput | newsArticleOrderByWithAggregationInput[]
    by: NewsArticleScalarFieldEnum[] | NewsArticleScalarFieldEnum
    having?: newsArticleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NewsArticleCountAggregateInputType | true
    _avg?: NewsArticleAvgAggregateInputType
    _sum?: NewsArticleSumAggregateInputType
    _min?: NewsArticleMinAggregateInputType
    _max?: NewsArticleMaxAggregateInputType
  }

  export type NewsArticleGroupByOutputType = {
    id: string
    newsHeading: string
    newsResource: string
    newsLocation: string | null
    newsCategory: $Enums.newsCategory
    newsPicture: string
    newsPictureHeading: string
    newsPictureCredit: string
    isFeatured: boolean
    newsDetails: string
    reporterId: string
    duration: number | null
    newsArticleStatus: $Enums.newsArticleStatus
    createdAt: Date
    updatedAt: Date
    _count: NewsArticleCountAggregateOutputType | null
    _avg: NewsArticleAvgAggregateOutputType | null
    _sum: NewsArticleSumAggregateOutputType | null
    _min: NewsArticleMinAggregateOutputType | null
    _max: NewsArticleMaxAggregateOutputType | null
  }

  type GetNewsArticleGroupByPayload<T extends newsArticleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NewsArticleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NewsArticleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NewsArticleGroupByOutputType[P]>
            : GetScalarType<T[P], NewsArticleGroupByOutputType[P]>
        }
      >
    >


  export type newsArticleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    newsHeading?: boolean
    newsResource?: boolean
    newsLocation?: boolean
    newsCategory?: boolean
    newsPicture?: boolean
    newsPictureHeading?: boolean
    newsPictureCredit?: boolean
    isFeatured?: boolean
    newsDetails?: boolean
    reporterId?: boolean
    duration?: boolean
    newsArticleStatus?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    quotes?: boolean | newsArticle$quotesArgs<ExtArgs>
    newsReporter?: boolean | newsReporterDefaultArgs<ExtArgs>
    _count?: boolean | NewsArticleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["newsArticle"]>

  export type newsArticleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    newsHeading?: boolean
    newsResource?: boolean
    newsLocation?: boolean
    newsCategory?: boolean
    newsPicture?: boolean
    newsPictureHeading?: boolean
    newsPictureCredit?: boolean
    isFeatured?: boolean
    newsDetails?: boolean
    reporterId?: boolean
    duration?: boolean
    newsArticleStatus?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    newsReporter?: boolean | newsReporterDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["newsArticle"]>

  export type newsArticleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    newsHeading?: boolean
    newsResource?: boolean
    newsLocation?: boolean
    newsCategory?: boolean
    newsPicture?: boolean
    newsPictureHeading?: boolean
    newsPictureCredit?: boolean
    isFeatured?: boolean
    newsDetails?: boolean
    reporterId?: boolean
    duration?: boolean
    newsArticleStatus?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    newsReporter?: boolean | newsReporterDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["newsArticle"]>

  export type newsArticleSelectScalar = {
    id?: boolean
    newsHeading?: boolean
    newsResource?: boolean
    newsLocation?: boolean
    newsCategory?: boolean
    newsPicture?: boolean
    newsPictureHeading?: boolean
    newsPictureCredit?: boolean
    isFeatured?: boolean
    newsDetails?: boolean
    reporterId?: boolean
    duration?: boolean
    newsArticleStatus?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type newsArticleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "newsHeading" | "newsResource" | "newsLocation" | "newsCategory" | "newsPicture" | "newsPictureHeading" | "newsPictureCredit" | "isFeatured" | "newsDetails" | "reporterId" | "duration" | "newsArticleStatus" | "createdAt" | "updatedAt", ExtArgs["result"]["newsArticle"]>
  export type newsArticleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    quotes?: boolean | newsArticle$quotesArgs<ExtArgs>
    newsReporter?: boolean | newsReporterDefaultArgs<ExtArgs>
    _count?: boolean | NewsArticleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type newsArticleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    newsReporter?: boolean | newsReporterDefaultArgs<ExtArgs>
  }
  export type newsArticleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    newsReporter?: boolean | newsReporterDefaultArgs<ExtArgs>
  }

  export type $newsArticlePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "newsArticle"
    objects: {
      quotes: Prisma.$quotePayload<ExtArgs>[]
      newsReporter: Prisma.$newsReporterPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      newsHeading: string
      newsResource: string
      newsLocation: string | null
      newsCategory: $Enums.newsCategory
      newsPicture: string
      newsPictureHeading: string
      newsPictureCredit: string
      isFeatured: boolean
      newsDetails: string
      reporterId: string
      duration: number | null
      newsArticleStatus: $Enums.newsArticleStatus
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["newsArticle"]>
    composites: {}
  }

  type newsArticleGetPayload<S extends boolean | null | undefined | newsArticleDefaultArgs> = $Result.GetResult<Prisma.$newsArticlePayload, S>

  type newsArticleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<newsArticleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NewsArticleCountAggregateInputType | true
    }

  export interface newsArticleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['newsArticle'], meta: { name: 'newsArticle' } }
    /**
     * Find zero or one NewsArticle that matches the filter.
     * @param {newsArticleFindUniqueArgs} args - Arguments to find a NewsArticle
     * @example
     * // Get one NewsArticle
     * const newsArticle = await prisma.newsArticle.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends newsArticleFindUniqueArgs>(args: SelectSubset<T, newsArticleFindUniqueArgs<ExtArgs>>): Prisma__newsArticleClient<$Result.GetResult<Prisma.$newsArticlePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one NewsArticle that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {newsArticleFindUniqueOrThrowArgs} args - Arguments to find a NewsArticle
     * @example
     * // Get one NewsArticle
     * const newsArticle = await prisma.newsArticle.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends newsArticleFindUniqueOrThrowArgs>(args: SelectSubset<T, newsArticleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__newsArticleClient<$Result.GetResult<Prisma.$newsArticlePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NewsArticle that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {newsArticleFindFirstArgs} args - Arguments to find a NewsArticle
     * @example
     * // Get one NewsArticle
     * const newsArticle = await prisma.newsArticle.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends newsArticleFindFirstArgs>(args?: SelectSubset<T, newsArticleFindFirstArgs<ExtArgs>>): Prisma__newsArticleClient<$Result.GetResult<Prisma.$newsArticlePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NewsArticle that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {newsArticleFindFirstOrThrowArgs} args - Arguments to find a NewsArticle
     * @example
     * // Get one NewsArticle
     * const newsArticle = await prisma.newsArticle.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends newsArticleFindFirstOrThrowArgs>(args?: SelectSubset<T, newsArticleFindFirstOrThrowArgs<ExtArgs>>): Prisma__newsArticleClient<$Result.GetResult<Prisma.$newsArticlePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more NewsArticles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {newsArticleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all NewsArticles
     * const newsArticles = await prisma.newsArticle.findMany()
     * 
     * // Get first 10 NewsArticles
     * const newsArticles = await prisma.newsArticle.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const newsArticleWithIdOnly = await prisma.newsArticle.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends newsArticleFindManyArgs>(args?: SelectSubset<T, newsArticleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$newsArticlePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a NewsArticle.
     * @param {newsArticleCreateArgs} args - Arguments to create a NewsArticle.
     * @example
     * // Create one NewsArticle
     * const NewsArticle = await prisma.newsArticle.create({
     *   data: {
     *     // ... data to create a NewsArticle
     *   }
     * })
     * 
     */
    create<T extends newsArticleCreateArgs>(args: SelectSubset<T, newsArticleCreateArgs<ExtArgs>>): Prisma__newsArticleClient<$Result.GetResult<Prisma.$newsArticlePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many NewsArticles.
     * @param {newsArticleCreateManyArgs} args - Arguments to create many NewsArticles.
     * @example
     * // Create many NewsArticles
     * const newsArticle = await prisma.newsArticle.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends newsArticleCreateManyArgs>(args?: SelectSubset<T, newsArticleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many NewsArticles and returns the data saved in the database.
     * @param {newsArticleCreateManyAndReturnArgs} args - Arguments to create many NewsArticles.
     * @example
     * // Create many NewsArticles
     * const newsArticle = await prisma.newsArticle.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many NewsArticles and only return the `id`
     * const newsArticleWithIdOnly = await prisma.newsArticle.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends newsArticleCreateManyAndReturnArgs>(args?: SelectSubset<T, newsArticleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$newsArticlePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a NewsArticle.
     * @param {newsArticleDeleteArgs} args - Arguments to delete one NewsArticle.
     * @example
     * // Delete one NewsArticle
     * const NewsArticle = await prisma.newsArticle.delete({
     *   where: {
     *     // ... filter to delete one NewsArticle
     *   }
     * })
     * 
     */
    delete<T extends newsArticleDeleteArgs>(args: SelectSubset<T, newsArticleDeleteArgs<ExtArgs>>): Prisma__newsArticleClient<$Result.GetResult<Prisma.$newsArticlePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one NewsArticle.
     * @param {newsArticleUpdateArgs} args - Arguments to update one NewsArticle.
     * @example
     * // Update one NewsArticle
     * const newsArticle = await prisma.newsArticle.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends newsArticleUpdateArgs>(args: SelectSubset<T, newsArticleUpdateArgs<ExtArgs>>): Prisma__newsArticleClient<$Result.GetResult<Prisma.$newsArticlePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more NewsArticles.
     * @param {newsArticleDeleteManyArgs} args - Arguments to filter NewsArticles to delete.
     * @example
     * // Delete a few NewsArticles
     * const { count } = await prisma.newsArticle.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends newsArticleDeleteManyArgs>(args?: SelectSubset<T, newsArticleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NewsArticles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {newsArticleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many NewsArticles
     * const newsArticle = await prisma.newsArticle.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends newsArticleUpdateManyArgs>(args: SelectSubset<T, newsArticleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NewsArticles and returns the data updated in the database.
     * @param {newsArticleUpdateManyAndReturnArgs} args - Arguments to update many NewsArticles.
     * @example
     * // Update many NewsArticles
     * const newsArticle = await prisma.newsArticle.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more NewsArticles and only return the `id`
     * const newsArticleWithIdOnly = await prisma.newsArticle.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends newsArticleUpdateManyAndReturnArgs>(args: SelectSubset<T, newsArticleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$newsArticlePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one NewsArticle.
     * @param {newsArticleUpsertArgs} args - Arguments to update or create a NewsArticle.
     * @example
     * // Update or create a NewsArticle
     * const newsArticle = await prisma.newsArticle.upsert({
     *   create: {
     *     // ... data to create a NewsArticle
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the NewsArticle we want to update
     *   }
     * })
     */
    upsert<T extends newsArticleUpsertArgs>(args: SelectSubset<T, newsArticleUpsertArgs<ExtArgs>>): Prisma__newsArticleClient<$Result.GetResult<Prisma.$newsArticlePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of NewsArticles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {newsArticleCountArgs} args - Arguments to filter NewsArticles to count.
     * @example
     * // Count the number of NewsArticles
     * const count = await prisma.newsArticle.count({
     *   where: {
     *     // ... the filter for the NewsArticles we want to count
     *   }
     * })
    **/
    count<T extends newsArticleCountArgs>(
      args?: Subset<T, newsArticleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NewsArticleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a NewsArticle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsArticleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NewsArticleAggregateArgs>(args: Subset<T, NewsArticleAggregateArgs>): Prisma.PrismaPromise<GetNewsArticleAggregateType<T>>

    /**
     * Group by NewsArticle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {newsArticleGroupByArgs} args - Group by arguments.
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
      T extends newsArticleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: newsArticleGroupByArgs['orderBy'] }
        : { orderBy?: newsArticleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, newsArticleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNewsArticleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the newsArticle model
   */
  readonly fields: newsArticleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for newsArticle.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__newsArticleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    quotes<T extends newsArticle$quotesArgs<ExtArgs> = {}>(args?: Subset<T, newsArticle$quotesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$quotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    newsReporter<T extends newsReporterDefaultArgs<ExtArgs> = {}>(args?: Subset<T, newsReporterDefaultArgs<ExtArgs>>): Prisma__newsReporterClient<$Result.GetResult<Prisma.$newsReporterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the newsArticle model
   */
  interface newsArticleFieldRefs {
    readonly id: FieldRef<"newsArticle", 'String'>
    readonly newsHeading: FieldRef<"newsArticle", 'String'>
    readonly newsResource: FieldRef<"newsArticle", 'String'>
    readonly newsLocation: FieldRef<"newsArticle", 'String'>
    readonly newsCategory: FieldRef<"newsArticle", 'newsCategory'>
    readonly newsPicture: FieldRef<"newsArticle", 'String'>
    readonly newsPictureHeading: FieldRef<"newsArticle", 'String'>
    readonly newsPictureCredit: FieldRef<"newsArticle", 'String'>
    readonly isFeatured: FieldRef<"newsArticle", 'Boolean'>
    readonly newsDetails: FieldRef<"newsArticle", 'String'>
    readonly reporterId: FieldRef<"newsArticle", 'String'>
    readonly duration: FieldRef<"newsArticle", 'Int'>
    readonly newsArticleStatus: FieldRef<"newsArticle", 'newsArticleStatus'>
    readonly createdAt: FieldRef<"newsArticle", 'DateTime'>
    readonly updatedAt: FieldRef<"newsArticle", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * newsArticle findUnique
   */
  export type newsArticleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the newsArticle
     */
    select?: newsArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the newsArticle
     */
    omit?: newsArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: newsArticleInclude<ExtArgs> | null
    /**
     * Filter, which newsArticle to fetch.
     */
    where: newsArticleWhereUniqueInput
  }

  /**
   * newsArticle findUniqueOrThrow
   */
  export type newsArticleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the newsArticle
     */
    select?: newsArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the newsArticle
     */
    omit?: newsArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: newsArticleInclude<ExtArgs> | null
    /**
     * Filter, which newsArticle to fetch.
     */
    where: newsArticleWhereUniqueInput
  }

  /**
   * newsArticle findFirst
   */
  export type newsArticleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the newsArticle
     */
    select?: newsArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the newsArticle
     */
    omit?: newsArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: newsArticleInclude<ExtArgs> | null
    /**
     * Filter, which newsArticle to fetch.
     */
    where?: newsArticleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of newsArticles to fetch.
     */
    orderBy?: newsArticleOrderByWithRelationInput | newsArticleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for newsArticles.
     */
    cursor?: newsArticleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` newsArticles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` newsArticles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of newsArticles.
     */
    distinct?: NewsArticleScalarFieldEnum | NewsArticleScalarFieldEnum[]
  }

  /**
   * newsArticle findFirstOrThrow
   */
  export type newsArticleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the newsArticle
     */
    select?: newsArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the newsArticle
     */
    omit?: newsArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: newsArticleInclude<ExtArgs> | null
    /**
     * Filter, which newsArticle to fetch.
     */
    where?: newsArticleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of newsArticles to fetch.
     */
    orderBy?: newsArticleOrderByWithRelationInput | newsArticleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for newsArticles.
     */
    cursor?: newsArticleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` newsArticles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` newsArticles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of newsArticles.
     */
    distinct?: NewsArticleScalarFieldEnum | NewsArticleScalarFieldEnum[]
  }

  /**
   * newsArticle findMany
   */
  export type newsArticleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the newsArticle
     */
    select?: newsArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the newsArticle
     */
    omit?: newsArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: newsArticleInclude<ExtArgs> | null
    /**
     * Filter, which newsArticles to fetch.
     */
    where?: newsArticleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of newsArticles to fetch.
     */
    orderBy?: newsArticleOrderByWithRelationInput | newsArticleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing newsArticles.
     */
    cursor?: newsArticleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` newsArticles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` newsArticles.
     */
    skip?: number
    distinct?: NewsArticleScalarFieldEnum | NewsArticleScalarFieldEnum[]
  }

  /**
   * newsArticle create
   */
  export type newsArticleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the newsArticle
     */
    select?: newsArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the newsArticle
     */
    omit?: newsArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: newsArticleInclude<ExtArgs> | null
    /**
     * The data needed to create a newsArticle.
     */
    data: XOR<newsArticleCreateInput, newsArticleUncheckedCreateInput>
  }

  /**
   * newsArticle createMany
   */
  export type newsArticleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many newsArticles.
     */
    data: newsArticleCreateManyInput | newsArticleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * newsArticle createManyAndReturn
   */
  export type newsArticleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the newsArticle
     */
    select?: newsArticleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the newsArticle
     */
    omit?: newsArticleOmit<ExtArgs> | null
    /**
     * The data used to create many newsArticles.
     */
    data: newsArticleCreateManyInput | newsArticleCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: newsArticleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * newsArticle update
   */
  export type newsArticleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the newsArticle
     */
    select?: newsArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the newsArticle
     */
    omit?: newsArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: newsArticleInclude<ExtArgs> | null
    /**
     * The data needed to update a newsArticle.
     */
    data: XOR<newsArticleUpdateInput, newsArticleUncheckedUpdateInput>
    /**
     * Choose, which newsArticle to update.
     */
    where: newsArticleWhereUniqueInput
  }

  /**
   * newsArticle updateMany
   */
  export type newsArticleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update newsArticles.
     */
    data: XOR<newsArticleUpdateManyMutationInput, newsArticleUncheckedUpdateManyInput>
    /**
     * Filter which newsArticles to update
     */
    where?: newsArticleWhereInput
    /**
     * Limit how many newsArticles to update.
     */
    limit?: number
  }

  /**
   * newsArticle updateManyAndReturn
   */
  export type newsArticleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the newsArticle
     */
    select?: newsArticleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the newsArticle
     */
    omit?: newsArticleOmit<ExtArgs> | null
    /**
     * The data used to update newsArticles.
     */
    data: XOR<newsArticleUpdateManyMutationInput, newsArticleUncheckedUpdateManyInput>
    /**
     * Filter which newsArticles to update
     */
    where?: newsArticleWhereInput
    /**
     * Limit how many newsArticles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: newsArticleIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * newsArticle upsert
   */
  export type newsArticleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the newsArticle
     */
    select?: newsArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the newsArticle
     */
    omit?: newsArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: newsArticleInclude<ExtArgs> | null
    /**
     * The filter to search for the newsArticle to update in case it exists.
     */
    where: newsArticleWhereUniqueInput
    /**
     * In case the newsArticle found by the `where` argument doesn't exist, create a new newsArticle with this data.
     */
    create: XOR<newsArticleCreateInput, newsArticleUncheckedCreateInput>
    /**
     * In case the newsArticle was found with the provided `where` argument, update it with this data.
     */
    update: XOR<newsArticleUpdateInput, newsArticleUncheckedUpdateInput>
  }

  /**
   * newsArticle delete
   */
  export type newsArticleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the newsArticle
     */
    select?: newsArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the newsArticle
     */
    omit?: newsArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: newsArticleInclude<ExtArgs> | null
    /**
     * Filter which newsArticle to delete.
     */
    where: newsArticleWhereUniqueInput
  }

  /**
   * newsArticle deleteMany
   */
  export type newsArticleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which newsArticles to delete
     */
    where?: newsArticleWhereInput
    /**
     * Limit how many newsArticles to delete.
     */
    limit?: number
  }

  /**
   * newsArticle.quotes
   */
  export type newsArticle$quotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the quote
     */
    select?: quoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the quote
     */
    omit?: quoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: quoteInclude<ExtArgs> | null
    where?: quoteWhereInput
    orderBy?: quoteOrderByWithRelationInput | quoteOrderByWithRelationInput[]
    cursor?: quoteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuoteScalarFieldEnum | QuoteScalarFieldEnum[]
  }

  /**
   * newsArticle without action
   */
  export type newsArticleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the newsArticle
     */
    select?: newsArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the newsArticle
     */
    omit?: newsArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: newsArticleInclude<ExtArgs> | null
  }


  /**
   * Model quote
   */

  export type AggregateQuote = {
    _count: QuoteCountAggregateOutputType | null
    _min: QuoteMinAggregateOutputType | null
    _max: QuoteMaxAggregateOutputType | null
  }

  export type QuoteMinAggregateOutputType = {
    id: string | null
    text: string | null
    speakerInfo: string | null
    articleId: string | null
    createdAt: Date | null
  }

  export type QuoteMaxAggregateOutputType = {
    id: string | null
    text: string | null
    speakerInfo: string | null
    articleId: string | null
    createdAt: Date | null
  }

  export type QuoteCountAggregateOutputType = {
    id: number
    text: number
    speakerInfo: number
    articleId: number
    createdAt: number
    _all: number
  }


  export type QuoteMinAggregateInputType = {
    id?: true
    text?: true
    speakerInfo?: true
    articleId?: true
    createdAt?: true
  }

  export type QuoteMaxAggregateInputType = {
    id?: true
    text?: true
    speakerInfo?: true
    articleId?: true
    createdAt?: true
  }

  export type QuoteCountAggregateInputType = {
    id?: true
    text?: true
    speakerInfo?: true
    articleId?: true
    createdAt?: true
    _all?: true
  }

  export type QuoteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which quote to aggregate.
     */
    where?: quoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of quotes to fetch.
     */
    orderBy?: quoteOrderByWithRelationInput | quoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: quoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` quotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` quotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned quotes
    **/
    _count?: true | QuoteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuoteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuoteMaxAggregateInputType
  }

  export type GetQuoteAggregateType<T extends QuoteAggregateArgs> = {
        [P in keyof T & keyof AggregateQuote]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuote[P]>
      : GetScalarType<T[P], AggregateQuote[P]>
  }




  export type quoteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: quoteWhereInput
    orderBy?: quoteOrderByWithAggregationInput | quoteOrderByWithAggregationInput[]
    by: QuoteScalarFieldEnum[] | QuoteScalarFieldEnum
    having?: quoteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuoteCountAggregateInputType | true
    _min?: QuoteMinAggregateInputType
    _max?: QuoteMaxAggregateInputType
  }

  export type QuoteGroupByOutputType = {
    id: string
    text: string
    speakerInfo: string
    articleId: string
    createdAt: Date
    _count: QuoteCountAggregateOutputType | null
    _min: QuoteMinAggregateOutputType | null
    _max: QuoteMaxAggregateOutputType | null
  }

  type GetQuoteGroupByPayload<T extends quoteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuoteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuoteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuoteGroupByOutputType[P]>
            : GetScalarType<T[P], QuoteGroupByOutputType[P]>
        }
      >
    >


  export type quoteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    speakerInfo?: boolean
    articleId?: boolean
    createdAt?: boolean
    article?: boolean | newsArticleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["quote"]>

  export type quoteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    speakerInfo?: boolean
    articleId?: boolean
    createdAt?: boolean
    article?: boolean | newsArticleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["quote"]>

  export type quoteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    speakerInfo?: boolean
    articleId?: boolean
    createdAt?: boolean
    article?: boolean | newsArticleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["quote"]>

  export type quoteSelectScalar = {
    id?: boolean
    text?: boolean
    speakerInfo?: boolean
    articleId?: boolean
    createdAt?: boolean
  }

  export type quoteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "text" | "speakerInfo" | "articleId" | "createdAt", ExtArgs["result"]["quote"]>
  export type quoteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    article?: boolean | newsArticleDefaultArgs<ExtArgs>
  }
  export type quoteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    article?: boolean | newsArticleDefaultArgs<ExtArgs>
  }
  export type quoteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    article?: boolean | newsArticleDefaultArgs<ExtArgs>
  }

  export type $quotePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "quote"
    objects: {
      article: Prisma.$newsArticlePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      text: string
      speakerInfo: string
      articleId: string
      createdAt: Date
    }, ExtArgs["result"]["quote"]>
    composites: {}
  }

  type quoteGetPayload<S extends boolean | null | undefined | quoteDefaultArgs> = $Result.GetResult<Prisma.$quotePayload, S>

  type quoteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<quoteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QuoteCountAggregateInputType | true
    }

  export interface quoteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['quote'], meta: { name: 'quote' } }
    /**
     * Find zero or one Quote that matches the filter.
     * @param {quoteFindUniqueArgs} args - Arguments to find a Quote
     * @example
     * // Get one Quote
     * const quote = await prisma.quote.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends quoteFindUniqueArgs>(args: SelectSubset<T, quoteFindUniqueArgs<ExtArgs>>): Prisma__quoteClient<$Result.GetResult<Prisma.$quotePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Quote that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {quoteFindUniqueOrThrowArgs} args - Arguments to find a Quote
     * @example
     * // Get one Quote
     * const quote = await prisma.quote.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends quoteFindUniqueOrThrowArgs>(args: SelectSubset<T, quoteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__quoteClient<$Result.GetResult<Prisma.$quotePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Quote that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {quoteFindFirstArgs} args - Arguments to find a Quote
     * @example
     * // Get one Quote
     * const quote = await prisma.quote.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends quoteFindFirstArgs>(args?: SelectSubset<T, quoteFindFirstArgs<ExtArgs>>): Prisma__quoteClient<$Result.GetResult<Prisma.$quotePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Quote that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {quoteFindFirstOrThrowArgs} args - Arguments to find a Quote
     * @example
     * // Get one Quote
     * const quote = await prisma.quote.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends quoteFindFirstOrThrowArgs>(args?: SelectSubset<T, quoteFindFirstOrThrowArgs<ExtArgs>>): Prisma__quoteClient<$Result.GetResult<Prisma.$quotePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Quotes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {quoteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Quotes
     * const quotes = await prisma.quote.findMany()
     * 
     * // Get first 10 Quotes
     * const quotes = await prisma.quote.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const quoteWithIdOnly = await prisma.quote.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends quoteFindManyArgs>(args?: SelectSubset<T, quoteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$quotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Quote.
     * @param {quoteCreateArgs} args - Arguments to create a Quote.
     * @example
     * // Create one Quote
     * const Quote = await prisma.quote.create({
     *   data: {
     *     // ... data to create a Quote
     *   }
     * })
     * 
     */
    create<T extends quoteCreateArgs>(args: SelectSubset<T, quoteCreateArgs<ExtArgs>>): Prisma__quoteClient<$Result.GetResult<Prisma.$quotePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Quotes.
     * @param {quoteCreateManyArgs} args - Arguments to create many Quotes.
     * @example
     * // Create many Quotes
     * const quote = await prisma.quote.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends quoteCreateManyArgs>(args?: SelectSubset<T, quoteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Quotes and returns the data saved in the database.
     * @param {quoteCreateManyAndReturnArgs} args - Arguments to create many Quotes.
     * @example
     * // Create many Quotes
     * const quote = await prisma.quote.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Quotes and only return the `id`
     * const quoteWithIdOnly = await prisma.quote.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends quoteCreateManyAndReturnArgs>(args?: SelectSubset<T, quoteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$quotePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Quote.
     * @param {quoteDeleteArgs} args - Arguments to delete one Quote.
     * @example
     * // Delete one Quote
     * const Quote = await prisma.quote.delete({
     *   where: {
     *     // ... filter to delete one Quote
     *   }
     * })
     * 
     */
    delete<T extends quoteDeleteArgs>(args: SelectSubset<T, quoteDeleteArgs<ExtArgs>>): Prisma__quoteClient<$Result.GetResult<Prisma.$quotePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Quote.
     * @param {quoteUpdateArgs} args - Arguments to update one Quote.
     * @example
     * // Update one Quote
     * const quote = await prisma.quote.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends quoteUpdateArgs>(args: SelectSubset<T, quoteUpdateArgs<ExtArgs>>): Prisma__quoteClient<$Result.GetResult<Prisma.$quotePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Quotes.
     * @param {quoteDeleteManyArgs} args - Arguments to filter Quotes to delete.
     * @example
     * // Delete a few Quotes
     * const { count } = await prisma.quote.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends quoteDeleteManyArgs>(args?: SelectSubset<T, quoteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Quotes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {quoteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Quotes
     * const quote = await prisma.quote.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends quoteUpdateManyArgs>(args: SelectSubset<T, quoteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Quotes and returns the data updated in the database.
     * @param {quoteUpdateManyAndReturnArgs} args - Arguments to update many Quotes.
     * @example
     * // Update many Quotes
     * const quote = await prisma.quote.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Quotes and only return the `id`
     * const quoteWithIdOnly = await prisma.quote.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends quoteUpdateManyAndReturnArgs>(args: SelectSubset<T, quoteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$quotePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Quote.
     * @param {quoteUpsertArgs} args - Arguments to update or create a Quote.
     * @example
     * // Update or create a Quote
     * const quote = await prisma.quote.upsert({
     *   create: {
     *     // ... data to create a Quote
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Quote we want to update
     *   }
     * })
     */
    upsert<T extends quoteUpsertArgs>(args: SelectSubset<T, quoteUpsertArgs<ExtArgs>>): Prisma__quoteClient<$Result.GetResult<Prisma.$quotePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Quotes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {quoteCountArgs} args - Arguments to filter Quotes to count.
     * @example
     * // Count the number of Quotes
     * const count = await prisma.quote.count({
     *   where: {
     *     // ... the filter for the Quotes we want to count
     *   }
     * })
    **/
    count<T extends quoteCountArgs>(
      args?: Subset<T, quoteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuoteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Quote.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuoteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends QuoteAggregateArgs>(args: Subset<T, QuoteAggregateArgs>): Prisma.PrismaPromise<GetQuoteAggregateType<T>>

    /**
     * Group by Quote.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {quoteGroupByArgs} args - Group by arguments.
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
      T extends quoteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: quoteGroupByArgs['orderBy'] }
        : { orderBy?: quoteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, quoteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuoteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the quote model
   */
  readonly fields: quoteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for quote.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__quoteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    article<T extends newsArticleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, newsArticleDefaultArgs<ExtArgs>>): Prisma__newsArticleClient<$Result.GetResult<Prisma.$newsArticlePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the quote model
   */
  interface quoteFieldRefs {
    readonly id: FieldRef<"quote", 'String'>
    readonly text: FieldRef<"quote", 'String'>
    readonly speakerInfo: FieldRef<"quote", 'String'>
    readonly articleId: FieldRef<"quote", 'String'>
    readonly createdAt: FieldRef<"quote", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * quote findUnique
   */
  export type quoteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the quote
     */
    select?: quoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the quote
     */
    omit?: quoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: quoteInclude<ExtArgs> | null
    /**
     * Filter, which quote to fetch.
     */
    where: quoteWhereUniqueInput
  }

  /**
   * quote findUniqueOrThrow
   */
  export type quoteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the quote
     */
    select?: quoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the quote
     */
    omit?: quoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: quoteInclude<ExtArgs> | null
    /**
     * Filter, which quote to fetch.
     */
    where: quoteWhereUniqueInput
  }

  /**
   * quote findFirst
   */
  export type quoteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the quote
     */
    select?: quoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the quote
     */
    omit?: quoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: quoteInclude<ExtArgs> | null
    /**
     * Filter, which quote to fetch.
     */
    where?: quoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of quotes to fetch.
     */
    orderBy?: quoteOrderByWithRelationInput | quoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for quotes.
     */
    cursor?: quoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` quotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` quotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of quotes.
     */
    distinct?: QuoteScalarFieldEnum | QuoteScalarFieldEnum[]
  }

  /**
   * quote findFirstOrThrow
   */
  export type quoteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the quote
     */
    select?: quoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the quote
     */
    omit?: quoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: quoteInclude<ExtArgs> | null
    /**
     * Filter, which quote to fetch.
     */
    where?: quoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of quotes to fetch.
     */
    orderBy?: quoteOrderByWithRelationInput | quoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for quotes.
     */
    cursor?: quoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` quotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` quotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of quotes.
     */
    distinct?: QuoteScalarFieldEnum | QuoteScalarFieldEnum[]
  }

  /**
   * quote findMany
   */
  export type quoteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the quote
     */
    select?: quoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the quote
     */
    omit?: quoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: quoteInclude<ExtArgs> | null
    /**
     * Filter, which quotes to fetch.
     */
    where?: quoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of quotes to fetch.
     */
    orderBy?: quoteOrderByWithRelationInput | quoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing quotes.
     */
    cursor?: quoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` quotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` quotes.
     */
    skip?: number
    distinct?: QuoteScalarFieldEnum | QuoteScalarFieldEnum[]
  }

  /**
   * quote create
   */
  export type quoteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the quote
     */
    select?: quoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the quote
     */
    omit?: quoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: quoteInclude<ExtArgs> | null
    /**
     * The data needed to create a quote.
     */
    data: XOR<quoteCreateInput, quoteUncheckedCreateInput>
  }

  /**
   * quote createMany
   */
  export type quoteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many quotes.
     */
    data: quoteCreateManyInput | quoteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * quote createManyAndReturn
   */
  export type quoteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the quote
     */
    select?: quoteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the quote
     */
    omit?: quoteOmit<ExtArgs> | null
    /**
     * The data used to create many quotes.
     */
    data: quoteCreateManyInput | quoteCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: quoteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * quote update
   */
  export type quoteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the quote
     */
    select?: quoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the quote
     */
    omit?: quoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: quoteInclude<ExtArgs> | null
    /**
     * The data needed to update a quote.
     */
    data: XOR<quoteUpdateInput, quoteUncheckedUpdateInput>
    /**
     * Choose, which quote to update.
     */
    where: quoteWhereUniqueInput
  }

  /**
   * quote updateMany
   */
  export type quoteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update quotes.
     */
    data: XOR<quoteUpdateManyMutationInput, quoteUncheckedUpdateManyInput>
    /**
     * Filter which quotes to update
     */
    where?: quoteWhereInput
    /**
     * Limit how many quotes to update.
     */
    limit?: number
  }

  /**
   * quote updateManyAndReturn
   */
  export type quoteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the quote
     */
    select?: quoteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the quote
     */
    omit?: quoteOmit<ExtArgs> | null
    /**
     * The data used to update quotes.
     */
    data: XOR<quoteUpdateManyMutationInput, quoteUncheckedUpdateManyInput>
    /**
     * Filter which quotes to update
     */
    where?: quoteWhereInput
    /**
     * Limit how many quotes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: quoteIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * quote upsert
   */
  export type quoteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the quote
     */
    select?: quoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the quote
     */
    omit?: quoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: quoteInclude<ExtArgs> | null
    /**
     * The filter to search for the quote to update in case it exists.
     */
    where: quoteWhereUniqueInput
    /**
     * In case the quote found by the `where` argument doesn't exist, create a new quote with this data.
     */
    create: XOR<quoteCreateInput, quoteUncheckedCreateInput>
    /**
     * In case the quote was found with the provided `where` argument, update it with this data.
     */
    update: XOR<quoteUpdateInput, quoteUncheckedUpdateInput>
  }

  /**
   * quote delete
   */
  export type quoteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the quote
     */
    select?: quoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the quote
     */
    omit?: quoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: quoteInclude<ExtArgs> | null
    /**
     * Filter which quote to delete.
     */
    where: quoteWhereUniqueInput
  }

  /**
   * quote deleteMany
   */
  export type quoteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which quotes to delete
     */
    where?: quoteWhereInput
    /**
     * Limit how many quotes to delete.
     */
    limit?: number
  }

  /**
   * quote without action
   */
  export type quoteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the quote
     */
    select?: quoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the quote
     */
    omit?: quoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: quoteInclude<ExtArgs> | null
  }


  /**
   * Model Advertisement
   */

  export type AggregateAdvertisement = {
    _count: AdvertisementCountAggregateOutputType | null
    _avg: AdvertisementAvgAggregateOutputType | null
    _sum: AdvertisementSumAggregateOutputType | null
    _min: AdvertisementMinAggregateOutputType | null
    _max: AdvertisementMaxAggregateOutputType | null
  }

  export type AdvertisementAvgAggregateOutputType = {
    advertiseduration: number | null
  }

  export type AdvertisementSumAggregateOutputType = {
    advertiseduration: number | null
  }

  export type AdvertisementMinAggregateOutputType = {
    id: string | null
    companyName: string | null
    companyaddress: string | null
    supervisedName: string | null
    advertisedCategory: $Enums.AdvertisedCategory | null
    websiteLink: string | null
    additionalInfo: string | null
    advertiseBanner: string | null
    isFeatured: boolean | null
    endDate: string | null
    startDate: string | null
    supervisedPhonenumber: string | null
    advertiseduration: number | null
    advertiseStatus: $Enums.advertiseStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AdvertisementMaxAggregateOutputType = {
    id: string | null
    companyName: string | null
    companyaddress: string | null
    supervisedName: string | null
    advertisedCategory: $Enums.AdvertisedCategory | null
    websiteLink: string | null
    additionalInfo: string | null
    advertiseBanner: string | null
    isFeatured: boolean | null
    endDate: string | null
    startDate: string | null
    supervisedPhonenumber: string | null
    advertiseduration: number | null
    advertiseStatus: $Enums.advertiseStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AdvertisementCountAggregateOutputType = {
    id: number
    companyName: number
    companyaddress: number
    supervisedName: number
    advertisedCategory: number
    websiteLink: number
    additionalInfo: number
    advertiseBanner: number
    isFeatured: number
    endDate: number
    startDate: number
    supervisedPhonenumber: number
    advertiseduration: number
    advertiseStatus: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AdvertisementAvgAggregateInputType = {
    advertiseduration?: true
  }

  export type AdvertisementSumAggregateInputType = {
    advertiseduration?: true
  }

  export type AdvertisementMinAggregateInputType = {
    id?: true
    companyName?: true
    companyaddress?: true
    supervisedName?: true
    advertisedCategory?: true
    websiteLink?: true
    additionalInfo?: true
    advertiseBanner?: true
    isFeatured?: true
    endDate?: true
    startDate?: true
    supervisedPhonenumber?: true
    advertiseduration?: true
    advertiseStatus?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AdvertisementMaxAggregateInputType = {
    id?: true
    companyName?: true
    companyaddress?: true
    supervisedName?: true
    advertisedCategory?: true
    websiteLink?: true
    additionalInfo?: true
    advertiseBanner?: true
    isFeatured?: true
    endDate?: true
    startDate?: true
    supervisedPhonenumber?: true
    advertiseduration?: true
    advertiseStatus?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AdvertisementCountAggregateInputType = {
    id?: true
    companyName?: true
    companyaddress?: true
    supervisedName?: true
    advertisedCategory?: true
    websiteLink?: true
    additionalInfo?: true
    advertiseBanner?: true
    isFeatured?: true
    endDate?: true
    startDate?: true
    supervisedPhonenumber?: true
    advertiseduration?: true
    advertiseStatus?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AdvertisementAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Advertisement to aggregate.
     */
    where?: AdvertisementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Advertisements to fetch.
     */
    orderBy?: AdvertisementOrderByWithRelationInput | AdvertisementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdvertisementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Advertisements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Advertisements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Advertisements
    **/
    _count?: true | AdvertisementCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AdvertisementAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AdvertisementSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdvertisementMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdvertisementMaxAggregateInputType
  }

  export type GetAdvertisementAggregateType<T extends AdvertisementAggregateArgs> = {
        [P in keyof T & keyof AggregateAdvertisement]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdvertisement[P]>
      : GetScalarType<T[P], AggregateAdvertisement[P]>
  }




  export type AdvertisementGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdvertisementWhereInput
    orderBy?: AdvertisementOrderByWithAggregationInput | AdvertisementOrderByWithAggregationInput[]
    by: AdvertisementScalarFieldEnum[] | AdvertisementScalarFieldEnum
    having?: AdvertisementScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdvertisementCountAggregateInputType | true
    _avg?: AdvertisementAvgAggregateInputType
    _sum?: AdvertisementSumAggregateInputType
    _min?: AdvertisementMinAggregateInputType
    _max?: AdvertisementMaxAggregateInputType
  }

  export type AdvertisementGroupByOutputType = {
    id: string
    companyName: string
    companyaddress: string
    supervisedName: string
    advertisedCategory: $Enums.AdvertisedCategory
    websiteLink: string
    additionalInfo: string
    advertiseBanner: string
    isFeatured: boolean
    endDate: string
    startDate: string
    supervisedPhonenumber: string
    advertiseduration: number | null
    advertiseStatus: $Enums.advertiseStatus
    createdAt: Date
    updatedAt: Date
    _count: AdvertisementCountAggregateOutputType | null
    _avg: AdvertisementAvgAggregateOutputType | null
    _sum: AdvertisementSumAggregateOutputType | null
    _min: AdvertisementMinAggregateOutputType | null
    _max: AdvertisementMaxAggregateOutputType | null
  }

  type GetAdvertisementGroupByPayload<T extends AdvertisementGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdvertisementGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdvertisementGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdvertisementGroupByOutputType[P]>
            : GetScalarType<T[P], AdvertisementGroupByOutputType[P]>
        }
      >
    >


  export type AdvertisementSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    companyName?: boolean
    companyaddress?: boolean
    supervisedName?: boolean
    advertisedCategory?: boolean
    websiteLink?: boolean
    additionalInfo?: boolean
    advertiseBanner?: boolean
    isFeatured?: boolean
    endDate?: boolean
    startDate?: boolean
    supervisedPhonenumber?: boolean
    advertiseduration?: boolean
    advertiseStatus?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["advertisement"]>

  export type AdvertisementSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    companyName?: boolean
    companyaddress?: boolean
    supervisedName?: boolean
    advertisedCategory?: boolean
    websiteLink?: boolean
    additionalInfo?: boolean
    advertiseBanner?: boolean
    isFeatured?: boolean
    endDate?: boolean
    startDate?: boolean
    supervisedPhonenumber?: boolean
    advertiseduration?: boolean
    advertiseStatus?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["advertisement"]>

  export type AdvertisementSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    companyName?: boolean
    companyaddress?: boolean
    supervisedName?: boolean
    advertisedCategory?: boolean
    websiteLink?: boolean
    additionalInfo?: boolean
    advertiseBanner?: boolean
    isFeatured?: boolean
    endDate?: boolean
    startDate?: boolean
    supervisedPhonenumber?: boolean
    advertiseduration?: boolean
    advertiseStatus?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["advertisement"]>

  export type AdvertisementSelectScalar = {
    id?: boolean
    companyName?: boolean
    companyaddress?: boolean
    supervisedName?: boolean
    advertisedCategory?: boolean
    websiteLink?: boolean
    additionalInfo?: boolean
    advertiseBanner?: boolean
    isFeatured?: boolean
    endDate?: boolean
    startDate?: boolean
    supervisedPhonenumber?: boolean
    advertiseduration?: boolean
    advertiseStatus?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AdvertisementOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "companyName" | "companyaddress" | "supervisedName" | "advertisedCategory" | "websiteLink" | "additionalInfo" | "advertiseBanner" | "isFeatured" | "endDate" | "startDate" | "supervisedPhonenumber" | "advertiseduration" | "advertiseStatus" | "createdAt" | "updatedAt", ExtArgs["result"]["advertisement"]>

  export type $AdvertisementPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Advertisement"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      companyName: string
      companyaddress: string
      supervisedName: string
      advertisedCategory: $Enums.AdvertisedCategory
      websiteLink: string
      additionalInfo: string
      advertiseBanner: string
      isFeatured: boolean
      endDate: string
      startDate: string
      supervisedPhonenumber: string
      advertiseduration: number | null
      advertiseStatus: $Enums.advertiseStatus
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["advertisement"]>
    composites: {}
  }

  type AdvertisementGetPayload<S extends boolean | null | undefined | AdvertisementDefaultArgs> = $Result.GetResult<Prisma.$AdvertisementPayload, S>

  type AdvertisementCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AdvertisementFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdvertisementCountAggregateInputType | true
    }

  export interface AdvertisementDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Advertisement'], meta: { name: 'Advertisement' } }
    /**
     * Find zero or one Advertisement that matches the filter.
     * @param {AdvertisementFindUniqueArgs} args - Arguments to find a Advertisement
     * @example
     * // Get one Advertisement
     * const advertisement = await prisma.advertisement.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdvertisementFindUniqueArgs>(args: SelectSubset<T, AdvertisementFindUniqueArgs<ExtArgs>>): Prisma__AdvertisementClient<$Result.GetResult<Prisma.$AdvertisementPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Advertisement that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AdvertisementFindUniqueOrThrowArgs} args - Arguments to find a Advertisement
     * @example
     * // Get one Advertisement
     * const advertisement = await prisma.advertisement.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdvertisementFindUniqueOrThrowArgs>(args: SelectSubset<T, AdvertisementFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdvertisementClient<$Result.GetResult<Prisma.$AdvertisementPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Advertisement that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdvertisementFindFirstArgs} args - Arguments to find a Advertisement
     * @example
     * // Get one Advertisement
     * const advertisement = await prisma.advertisement.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdvertisementFindFirstArgs>(args?: SelectSubset<T, AdvertisementFindFirstArgs<ExtArgs>>): Prisma__AdvertisementClient<$Result.GetResult<Prisma.$AdvertisementPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Advertisement that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdvertisementFindFirstOrThrowArgs} args - Arguments to find a Advertisement
     * @example
     * // Get one Advertisement
     * const advertisement = await prisma.advertisement.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdvertisementFindFirstOrThrowArgs>(args?: SelectSubset<T, AdvertisementFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdvertisementClient<$Result.GetResult<Prisma.$AdvertisementPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Advertisements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdvertisementFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Advertisements
     * const advertisements = await prisma.advertisement.findMany()
     * 
     * // Get first 10 Advertisements
     * const advertisements = await prisma.advertisement.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const advertisementWithIdOnly = await prisma.advertisement.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AdvertisementFindManyArgs>(args?: SelectSubset<T, AdvertisementFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdvertisementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Advertisement.
     * @param {AdvertisementCreateArgs} args - Arguments to create a Advertisement.
     * @example
     * // Create one Advertisement
     * const Advertisement = await prisma.advertisement.create({
     *   data: {
     *     // ... data to create a Advertisement
     *   }
     * })
     * 
     */
    create<T extends AdvertisementCreateArgs>(args: SelectSubset<T, AdvertisementCreateArgs<ExtArgs>>): Prisma__AdvertisementClient<$Result.GetResult<Prisma.$AdvertisementPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Advertisements.
     * @param {AdvertisementCreateManyArgs} args - Arguments to create many Advertisements.
     * @example
     * // Create many Advertisements
     * const advertisement = await prisma.advertisement.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdvertisementCreateManyArgs>(args?: SelectSubset<T, AdvertisementCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Advertisements and returns the data saved in the database.
     * @param {AdvertisementCreateManyAndReturnArgs} args - Arguments to create many Advertisements.
     * @example
     * // Create many Advertisements
     * const advertisement = await prisma.advertisement.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Advertisements and only return the `id`
     * const advertisementWithIdOnly = await prisma.advertisement.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AdvertisementCreateManyAndReturnArgs>(args?: SelectSubset<T, AdvertisementCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdvertisementPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Advertisement.
     * @param {AdvertisementDeleteArgs} args - Arguments to delete one Advertisement.
     * @example
     * // Delete one Advertisement
     * const Advertisement = await prisma.advertisement.delete({
     *   where: {
     *     // ... filter to delete one Advertisement
     *   }
     * })
     * 
     */
    delete<T extends AdvertisementDeleteArgs>(args: SelectSubset<T, AdvertisementDeleteArgs<ExtArgs>>): Prisma__AdvertisementClient<$Result.GetResult<Prisma.$AdvertisementPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Advertisement.
     * @param {AdvertisementUpdateArgs} args - Arguments to update one Advertisement.
     * @example
     * // Update one Advertisement
     * const advertisement = await prisma.advertisement.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdvertisementUpdateArgs>(args: SelectSubset<T, AdvertisementUpdateArgs<ExtArgs>>): Prisma__AdvertisementClient<$Result.GetResult<Prisma.$AdvertisementPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Advertisements.
     * @param {AdvertisementDeleteManyArgs} args - Arguments to filter Advertisements to delete.
     * @example
     * // Delete a few Advertisements
     * const { count } = await prisma.advertisement.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdvertisementDeleteManyArgs>(args?: SelectSubset<T, AdvertisementDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Advertisements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdvertisementUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Advertisements
     * const advertisement = await prisma.advertisement.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdvertisementUpdateManyArgs>(args: SelectSubset<T, AdvertisementUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Advertisements and returns the data updated in the database.
     * @param {AdvertisementUpdateManyAndReturnArgs} args - Arguments to update many Advertisements.
     * @example
     * // Update many Advertisements
     * const advertisement = await prisma.advertisement.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Advertisements and only return the `id`
     * const advertisementWithIdOnly = await prisma.advertisement.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AdvertisementUpdateManyAndReturnArgs>(args: SelectSubset<T, AdvertisementUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdvertisementPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Advertisement.
     * @param {AdvertisementUpsertArgs} args - Arguments to update or create a Advertisement.
     * @example
     * // Update or create a Advertisement
     * const advertisement = await prisma.advertisement.upsert({
     *   create: {
     *     // ... data to create a Advertisement
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Advertisement we want to update
     *   }
     * })
     */
    upsert<T extends AdvertisementUpsertArgs>(args: SelectSubset<T, AdvertisementUpsertArgs<ExtArgs>>): Prisma__AdvertisementClient<$Result.GetResult<Prisma.$AdvertisementPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Advertisements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdvertisementCountArgs} args - Arguments to filter Advertisements to count.
     * @example
     * // Count the number of Advertisements
     * const count = await prisma.advertisement.count({
     *   where: {
     *     // ... the filter for the Advertisements we want to count
     *   }
     * })
    **/
    count<T extends AdvertisementCountArgs>(
      args?: Subset<T, AdvertisementCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdvertisementCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Advertisement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdvertisementAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AdvertisementAggregateArgs>(args: Subset<T, AdvertisementAggregateArgs>): Prisma.PrismaPromise<GetAdvertisementAggregateType<T>>

    /**
     * Group by Advertisement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdvertisementGroupByArgs} args - Group by arguments.
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
      T extends AdvertisementGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdvertisementGroupByArgs['orderBy'] }
        : { orderBy?: AdvertisementGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, AdvertisementGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdvertisementGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Advertisement model
   */
  readonly fields: AdvertisementFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Advertisement.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdvertisementClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Advertisement model
   */
  interface AdvertisementFieldRefs {
    readonly id: FieldRef<"Advertisement", 'String'>
    readonly companyName: FieldRef<"Advertisement", 'String'>
    readonly companyaddress: FieldRef<"Advertisement", 'String'>
    readonly supervisedName: FieldRef<"Advertisement", 'String'>
    readonly advertisedCategory: FieldRef<"Advertisement", 'AdvertisedCategory'>
    readonly websiteLink: FieldRef<"Advertisement", 'String'>
    readonly additionalInfo: FieldRef<"Advertisement", 'String'>
    readonly advertiseBanner: FieldRef<"Advertisement", 'String'>
    readonly isFeatured: FieldRef<"Advertisement", 'Boolean'>
    readonly endDate: FieldRef<"Advertisement", 'String'>
    readonly startDate: FieldRef<"Advertisement", 'String'>
    readonly supervisedPhonenumber: FieldRef<"Advertisement", 'String'>
    readonly advertiseduration: FieldRef<"Advertisement", 'Int'>
    readonly advertiseStatus: FieldRef<"Advertisement", 'advertiseStatus'>
    readonly createdAt: FieldRef<"Advertisement", 'DateTime'>
    readonly updatedAt: FieldRef<"Advertisement", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Advertisement findUnique
   */
  export type AdvertisementFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Advertisement
     */
    select?: AdvertisementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Advertisement
     */
    omit?: AdvertisementOmit<ExtArgs> | null
    /**
     * Filter, which Advertisement to fetch.
     */
    where: AdvertisementWhereUniqueInput
  }

  /**
   * Advertisement findUniqueOrThrow
   */
  export type AdvertisementFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Advertisement
     */
    select?: AdvertisementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Advertisement
     */
    omit?: AdvertisementOmit<ExtArgs> | null
    /**
     * Filter, which Advertisement to fetch.
     */
    where: AdvertisementWhereUniqueInput
  }

  /**
   * Advertisement findFirst
   */
  export type AdvertisementFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Advertisement
     */
    select?: AdvertisementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Advertisement
     */
    omit?: AdvertisementOmit<ExtArgs> | null
    /**
     * Filter, which Advertisement to fetch.
     */
    where?: AdvertisementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Advertisements to fetch.
     */
    orderBy?: AdvertisementOrderByWithRelationInput | AdvertisementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Advertisements.
     */
    cursor?: AdvertisementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Advertisements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Advertisements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Advertisements.
     */
    distinct?: AdvertisementScalarFieldEnum | AdvertisementScalarFieldEnum[]
  }

  /**
   * Advertisement findFirstOrThrow
   */
  export type AdvertisementFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Advertisement
     */
    select?: AdvertisementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Advertisement
     */
    omit?: AdvertisementOmit<ExtArgs> | null
    /**
     * Filter, which Advertisement to fetch.
     */
    where?: AdvertisementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Advertisements to fetch.
     */
    orderBy?: AdvertisementOrderByWithRelationInput | AdvertisementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Advertisements.
     */
    cursor?: AdvertisementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Advertisements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Advertisements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Advertisements.
     */
    distinct?: AdvertisementScalarFieldEnum | AdvertisementScalarFieldEnum[]
  }

  /**
   * Advertisement findMany
   */
  export type AdvertisementFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Advertisement
     */
    select?: AdvertisementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Advertisement
     */
    omit?: AdvertisementOmit<ExtArgs> | null
    /**
     * Filter, which Advertisements to fetch.
     */
    where?: AdvertisementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Advertisements to fetch.
     */
    orderBy?: AdvertisementOrderByWithRelationInput | AdvertisementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Advertisements.
     */
    cursor?: AdvertisementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Advertisements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Advertisements.
     */
    skip?: number
    distinct?: AdvertisementScalarFieldEnum | AdvertisementScalarFieldEnum[]
  }

  /**
   * Advertisement create
   */
  export type AdvertisementCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Advertisement
     */
    select?: AdvertisementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Advertisement
     */
    omit?: AdvertisementOmit<ExtArgs> | null
    /**
     * The data needed to create a Advertisement.
     */
    data: XOR<AdvertisementCreateInput, AdvertisementUncheckedCreateInput>
  }

  /**
   * Advertisement createMany
   */
  export type AdvertisementCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Advertisements.
     */
    data: AdvertisementCreateManyInput | AdvertisementCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Advertisement createManyAndReturn
   */
  export type AdvertisementCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Advertisement
     */
    select?: AdvertisementSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Advertisement
     */
    omit?: AdvertisementOmit<ExtArgs> | null
    /**
     * The data used to create many Advertisements.
     */
    data: AdvertisementCreateManyInput | AdvertisementCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Advertisement update
   */
  export type AdvertisementUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Advertisement
     */
    select?: AdvertisementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Advertisement
     */
    omit?: AdvertisementOmit<ExtArgs> | null
    /**
     * The data needed to update a Advertisement.
     */
    data: XOR<AdvertisementUpdateInput, AdvertisementUncheckedUpdateInput>
    /**
     * Choose, which Advertisement to update.
     */
    where: AdvertisementWhereUniqueInput
  }

  /**
   * Advertisement updateMany
   */
  export type AdvertisementUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Advertisements.
     */
    data: XOR<AdvertisementUpdateManyMutationInput, AdvertisementUncheckedUpdateManyInput>
    /**
     * Filter which Advertisements to update
     */
    where?: AdvertisementWhereInput
    /**
     * Limit how many Advertisements to update.
     */
    limit?: number
  }

  /**
   * Advertisement updateManyAndReturn
   */
  export type AdvertisementUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Advertisement
     */
    select?: AdvertisementSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Advertisement
     */
    omit?: AdvertisementOmit<ExtArgs> | null
    /**
     * The data used to update Advertisements.
     */
    data: XOR<AdvertisementUpdateManyMutationInput, AdvertisementUncheckedUpdateManyInput>
    /**
     * Filter which Advertisements to update
     */
    where?: AdvertisementWhereInput
    /**
     * Limit how many Advertisements to update.
     */
    limit?: number
  }

  /**
   * Advertisement upsert
   */
  export type AdvertisementUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Advertisement
     */
    select?: AdvertisementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Advertisement
     */
    omit?: AdvertisementOmit<ExtArgs> | null
    /**
     * The filter to search for the Advertisement to update in case it exists.
     */
    where: AdvertisementWhereUniqueInput
    /**
     * In case the Advertisement found by the `where` argument doesn't exist, create a new Advertisement with this data.
     */
    create: XOR<AdvertisementCreateInput, AdvertisementUncheckedCreateInput>
    /**
     * In case the Advertisement was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdvertisementUpdateInput, AdvertisementUncheckedUpdateInput>
  }

  /**
   * Advertisement delete
   */
  export type AdvertisementDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Advertisement
     */
    select?: AdvertisementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Advertisement
     */
    omit?: AdvertisementOmit<ExtArgs> | null
    /**
     * Filter which Advertisement to delete.
     */
    where: AdvertisementWhereUniqueInput
  }

  /**
   * Advertisement deleteMany
   */
  export type AdvertisementDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Advertisements to delete
     */
    where?: AdvertisementWhereInput
    /**
     * Limit how many Advertisements to delete.
     */
    limit?: number
  }

  /**
   * Advertisement without action
   */
  export type AdvertisementDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Advertisement
     */
    select?: AdvertisementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Advertisement
     */
    omit?: AdvertisementOmit<ExtArgs> | null
  }


  /**
   * Model Opinion
   */

  export type AggregateOpinion = {
    _count: OpinionCountAggregateOutputType | null
    _min: OpinionMinAggregateOutputType | null
    _max: OpinionMaxAggregateOutputType | null
  }

  export type OpinionMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    phone: string | null
    opinion: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OpinionMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    phone: string | null
    opinion: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OpinionCountAggregateOutputType = {
    id: number
    name: number
    email: number
    phone: number
    opinion: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type OpinionMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    opinion?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OpinionMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    opinion?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OpinionCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    opinion?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type OpinionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Opinion to aggregate.
     */
    where?: OpinionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Opinions to fetch.
     */
    orderBy?: OpinionOrderByWithRelationInput | OpinionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OpinionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Opinions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Opinions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Opinions
    **/
    _count?: true | OpinionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OpinionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OpinionMaxAggregateInputType
  }

  export type GetOpinionAggregateType<T extends OpinionAggregateArgs> = {
        [P in keyof T & keyof AggregateOpinion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOpinion[P]>
      : GetScalarType<T[P], AggregateOpinion[P]>
  }




  export type OpinionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OpinionWhereInput
    orderBy?: OpinionOrderByWithAggregationInput | OpinionOrderByWithAggregationInput[]
    by: OpinionScalarFieldEnum[] | OpinionScalarFieldEnum
    having?: OpinionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OpinionCountAggregateInputType | true
    _min?: OpinionMinAggregateInputType
    _max?: OpinionMaxAggregateInputType
  }

  export type OpinionGroupByOutputType = {
    id: string
    name: string
    email: string | null
    phone: string | null
    opinion: string
    createdAt: Date
    updatedAt: Date
    _count: OpinionCountAggregateOutputType | null
    _min: OpinionMinAggregateOutputType | null
    _max: OpinionMaxAggregateOutputType | null
  }

  type GetOpinionGroupByPayload<T extends OpinionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OpinionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OpinionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OpinionGroupByOutputType[P]>
            : GetScalarType<T[P], OpinionGroupByOutputType[P]>
        }
      >
    >


  export type OpinionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    opinion?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["opinion"]>

  export type OpinionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    opinion?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["opinion"]>

  export type OpinionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    opinion?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["opinion"]>

  export type OpinionSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    opinion?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type OpinionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "phone" | "opinion" | "createdAt" | "updatedAt", ExtArgs["result"]["opinion"]>

  export type $OpinionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Opinion"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string | null
      phone: string | null
      opinion: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["opinion"]>
    composites: {}
  }

  type OpinionGetPayload<S extends boolean | null | undefined | OpinionDefaultArgs> = $Result.GetResult<Prisma.$OpinionPayload, S>

  type OpinionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OpinionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OpinionCountAggregateInputType | true
    }

  export interface OpinionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Opinion'], meta: { name: 'Opinion' } }
    /**
     * Find zero or one Opinion that matches the filter.
     * @param {OpinionFindUniqueArgs} args - Arguments to find a Opinion
     * @example
     * // Get one Opinion
     * const opinion = await prisma.opinion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OpinionFindUniqueArgs>(args: SelectSubset<T, OpinionFindUniqueArgs<ExtArgs>>): Prisma__OpinionClient<$Result.GetResult<Prisma.$OpinionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Opinion that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OpinionFindUniqueOrThrowArgs} args - Arguments to find a Opinion
     * @example
     * // Get one Opinion
     * const opinion = await prisma.opinion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OpinionFindUniqueOrThrowArgs>(args: SelectSubset<T, OpinionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OpinionClient<$Result.GetResult<Prisma.$OpinionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Opinion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OpinionFindFirstArgs} args - Arguments to find a Opinion
     * @example
     * // Get one Opinion
     * const opinion = await prisma.opinion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OpinionFindFirstArgs>(args?: SelectSubset<T, OpinionFindFirstArgs<ExtArgs>>): Prisma__OpinionClient<$Result.GetResult<Prisma.$OpinionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Opinion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OpinionFindFirstOrThrowArgs} args - Arguments to find a Opinion
     * @example
     * // Get one Opinion
     * const opinion = await prisma.opinion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OpinionFindFirstOrThrowArgs>(args?: SelectSubset<T, OpinionFindFirstOrThrowArgs<ExtArgs>>): Prisma__OpinionClient<$Result.GetResult<Prisma.$OpinionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Opinions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OpinionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Opinions
     * const opinions = await prisma.opinion.findMany()
     * 
     * // Get first 10 Opinions
     * const opinions = await prisma.opinion.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const opinionWithIdOnly = await prisma.opinion.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OpinionFindManyArgs>(args?: SelectSubset<T, OpinionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OpinionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Opinion.
     * @param {OpinionCreateArgs} args - Arguments to create a Opinion.
     * @example
     * // Create one Opinion
     * const Opinion = await prisma.opinion.create({
     *   data: {
     *     // ... data to create a Opinion
     *   }
     * })
     * 
     */
    create<T extends OpinionCreateArgs>(args: SelectSubset<T, OpinionCreateArgs<ExtArgs>>): Prisma__OpinionClient<$Result.GetResult<Prisma.$OpinionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Opinions.
     * @param {OpinionCreateManyArgs} args - Arguments to create many Opinions.
     * @example
     * // Create many Opinions
     * const opinion = await prisma.opinion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OpinionCreateManyArgs>(args?: SelectSubset<T, OpinionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Opinions and returns the data saved in the database.
     * @param {OpinionCreateManyAndReturnArgs} args - Arguments to create many Opinions.
     * @example
     * // Create many Opinions
     * const opinion = await prisma.opinion.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Opinions and only return the `id`
     * const opinionWithIdOnly = await prisma.opinion.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OpinionCreateManyAndReturnArgs>(args?: SelectSubset<T, OpinionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OpinionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Opinion.
     * @param {OpinionDeleteArgs} args - Arguments to delete one Opinion.
     * @example
     * // Delete one Opinion
     * const Opinion = await prisma.opinion.delete({
     *   where: {
     *     // ... filter to delete one Opinion
     *   }
     * })
     * 
     */
    delete<T extends OpinionDeleteArgs>(args: SelectSubset<T, OpinionDeleteArgs<ExtArgs>>): Prisma__OpinionClient<$Result.GetResult<Prisma.$OpinionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Opinion.
     * @param {OpinionUpdateArgs} args - Arguments to update one Opinion.
     * @example
     * // Update one Opinion
     * const opinion = await prisma.opinion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OpinionUpdateArgs>(args: SelectSubset<T, OpinionUpdateArgs<ExtArgs>>): Prisma__OpinionClient<$Result.GetResult<Prisma.$OpinionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Opinions.
     * @param {OpinionDeleteManyArgs} args - Arguments to filter Opinions to delete.
     * @example
     * // Delete a few Opinions
     * const { count } = await prisma.opinion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OpinionDeleteManyArgs>(args?: SelectSubset<T, OpinionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Opinions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OpinionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Opinions
     * const opinion = await prisma.opinion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OpinionUpdateManyArgs>(args: SelectSubset<T, OpinionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Opinions and returns the data updated in the database.
     * @param {OpinionUpdateManyAndReturnArgs} args - Arguments to update many Opinions.
     * @example
     * // Update many Opinions
     * const opinion = await prisma.opinion.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Opinions and only return the `id`
     * const opinionWithIdOnly = await prisma.opinion.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OpinionUpdateManyAndReturnArgs>(args: SelectSubset<T, OpinionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OpinionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Opinion.
     * @param {OpinionUpsertArgs} args - Arguments to update or create a Opinion.
     * @example
     * // Update or create a Opinion
     * const opinion = await prisma.opinion.upsert({
     *   create: {
     *     // ... data to create a Opinion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Opinion we want to update
     *   }
     * })
     */
    upsert<T extends OpinionUpsertArgs>(args: SelectSubset<T, OpinionUpsertArgs<ExtArgs>>): Prisma__OpinionClient<$Result.GetResult<Prisma.$OpinionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Opinions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OpinionCountArgs} args - Arguments to filter Opinions to count.
     * @example
     * // Count the number of Opinions
     * const count = await prisma.opinion.count({
     *   where: {
     *     // ... the filter for the Opinions we want to count
     *   }
     * })
    **/
    count<T extends OpinionCountArgs>(
      args?: Subset<T, OpinionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OpinionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Opinion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OpinionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OpinionAggregateArgs>(args: Subset<T, OpinionAggregateArgs>): Prisma.PrismaPromise<GetOpinionAggregateType<T>>

    /**
     * Group by Opinion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OpinionGroupByArgs} args - Group by arguments.
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
      T extends OpinionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OpinionGroupByArgs['orderBy'] }
        : { orderBy?: OpinionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, OpinionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOpinionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Opinion model
   */
  readonly fields: OpinionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Opinion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OpinionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Opinion model
   */
  interface OpinionFieldRefs {
    readonly id: FieldRef<"Opinion", 'String'>
    readonly name: FieldRef<"Opinion", 'String'>
    readonly email: FieldRef<"Opinion", 'String'>
    readonly phone: FieldRef<"Opinion", 'String'>
    readonly opinion: FieldRef<"Opinion", 'String'>
    readonly createdAt: FieldRef<"Opinion", 'DateTime'>
    readonly updatedAt: FieldRef<"Opinion", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Opinion findUnique
   */
  export type OpinionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Opinion
     */
    select?: OpinionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Opinion
     */
    omit?: OpinionOmit<ExtArgs> | null
    /**
     * Filter, which Opinion to fetch.
     */
    where: OpinionWhereUniqueInput
  }

  /**
   * Opinion findUniqueOrThrow
   */
  export type OpinionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Opinion
     */
    select?: OpinionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Opinion
     */
    omit?: OpinionOmit<ExtArgs> | null
    /**
     * Filter, which Opinion to fetch.
     */
    where: OpinionWhereUniqueInput
  }

  /**
   * Opinion findFirst
   */
  export type OpinionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Opinion
     */
    select?: OpinionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Opinion
     */
    omit?: OpinionOmit<ExtArgs> | null
    /**
     * Filter, which Opinion to fetch.
     */
    where?: OpinionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Opinions to fetch.
     */
    orderBy?: OpinionOrderByWithRelationInput | OpinionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Opinions.
     */
    cursor?: OpinionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Opinions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Opinions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Opinions.
     */
    distinct?: OpinionScalarFieldEnum | OpinionScalarFieldEnum[]
  }

  /**
   * Opinion findFirstOrThrow
   */
  export type OpinionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Opinion
     */
    select?: OpinionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Opinion
     */
    omit?: OpinionOmit<ExtArgs> | null
    /**
     * Filter, which Opinion to fetch.
     */
    where?: OpinionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Opinions to fetch.
     */
    orderBy?: OpinionOrderByWithRelationInput | OpinionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Opinions.
     */
    cursor?: OpinionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Opinions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Opinions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Opinions.
     */
    distinct?: OpinionScalarFieldEnum | OpinionScalarFieldEnum[]
  }

  /**
   * Opinion findMany
   */
  export type OpinionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Opinion
     */
    select?: OpinionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Opinion
     */
    omit?: OpinionOmit<ExtArgs> | null
    /**
     * Filter, which Opinions to fetch.
     */
    where?: OpinionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Opinions to fetch.
     */
    orderBy?: OpinionOrderByWithRelationInput | OpinionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Opinions.
     */
    cursor?: OpinionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Opinions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Opinions.
     */
    skip?: number
    distinct?: OpinionScalarFieldEnum | OpinionScalarFieldEnum[]
  }

  /**
   * Opinion create
   */
  export type OpinionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Opinion
     */
    select?: OpinionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Opinion
     */
    omit?: OpinionOmit<ExtArgs> | null
    /**
     * The data needed to create a Opinion.
     */
    data: XOR<OpinionCreateInput, OpinionUncheckedCreateInput>
  }

  /**
   * Opinion createMany
   */
  export type OpinionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Opinions.
     */
    data: OpinionCreateManyInput | OpinionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Opinion createManyAndReturn
   */
  export type OpinionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Opinion
     */
    select?: OpinionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Opinion
     */
    omit?: OpinionOmit<ExtArgs> | null
    /**
     * The data used to create many Opinions.
     */
    data: OpinionCreateManyInput | OpinionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Opinion update
   */
  export type OpinionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Opinion
     */
    select?: OpinionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Opinion
     */
    omit?: OpinionOmit<ExtArgs> | null
    /**
     * The data needed to update a Opinion.
     */
    data: XOR<OpinionUpdateInput, OpinionUncheckedUpdateInput>
    /**
     * Choose, which Opinion to update.
     */
    where: OpinionWhereUniqueInput
  }

  /**
   * Opinion updateMany
   */
  export type OpinionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Opinions.
     */
    data: XOR<OpinionUpdateManyMutationInput, OpinionUncheckedUpdateManyInput>
    /**
     * Filter which Opinions to update
     */
    where?: OpinionWhereInput
    /**
     * Limit how many Opinions to update.
     */
    limit?: number
  }

  /**
   * Opinion updateManyAndReturn
   */
  export type OpinionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Opinion
     */
    select?: OpinionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Opinion
     */
    omit?: OpinionOmit<ExtArgs> | null
    /**
     * The data used to update Opinions.
     */
    data: XOR<OpinionUpdateManyMutationInput, OpinionUncheckedUpdateManyInput>
    /**
     * Filter which Opinions to update
     */
    where?: OpinionWhereInput
    /**
     * Limit how many Opinions to update.
     */
    limit?: number
  }

  /**
   * Opinion upsert
   */
  export type OpinionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Opinion
     */
    select?: OpinionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Opinion
     */
    omit?: OpinionOmit<ExtArgs> | null
    /**
     * The filter to search for the Opinion to update in case it exists.
     */
    where: OpinionWhereUniqueInput
    /**
     * In case the Opinion found by the `where` argument doesn't exist, create a new Opinion with this data.
     */
    create: XOR<OpinionCreateInput, OpinionUncheckedCreateInput>
    /**
     * In case the Opinion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OpinionUpdateInput, OpinionUncheckedUpdateInput>
  }

  /**
   * Opinion delete
   */
  export type OpinionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Opinion
     */
    select?: OpinionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Opinion
     */
    omit?: OpinionOmit<ExtArgs> | null
    /**
     * Filter which Opinion to delete.
     */
    where: OpinionWhereUniqueInput
  }

  /**
   * Opinion deleteMany
   */
  export type OpinionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Opinions to delete
     */
    where?: OpinionWhereInput
    /**
     * Limit how many Opinions to delete.
     */
    limit?: number
  }

  /**
   * Opinion without action
   */
  export type OpinionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Opinion
     */
    select?: OpinionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Opinion
     */
    omit?: OpinionOmit<ExtArgs> | null
  }


  /**
   * Model Account
   */

  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  export type AccountAvgAggregateOutputType = {
    expires_at: number | null
  }

  export type AccountSumAggregateOutputType = {
    expires_at: number | null
  }

  export type AccountMinAggregateOutputType = {
    userId: string | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccountMaxAggregateOutputType = {
    userId: string | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccountCountAggregateOutputType = {
    userId: number
    type: number
    provider: number
    providerAccountId: number
    refresh_token: number
    access_token: number
    expires_at: number
    token_type: number
    scope: number
    id_token: number
    session_state: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AccountAvgAggregateInputType = {
    expires_at?: true
  }

  export type AccountSumAggregateInputType = {
    expires_at?: true
  }

  export type AccountMinAggregateInputType = {
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccountMaxAggregateInputType = {
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccountCountAggregateInputType = {
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Account to aggregate.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accounts
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




  export type AccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithAggregationInput | AccountOrderByWithAggregationInput[]
    by: AccountScalarFieldEnum[] | AccountScalarFieldEnum
    having?: AccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountCountAggregateInputType | true
    _avg?: AccountAvgAggregateInputType
    _sum?: AccountSumAggregateInputType
    _min?: AccountMinAggregateInputType
    _max?: AccountMaxAggregateInputType
  }

  export type AccountGroupByOutputType = {
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
    createdAt: Date
    updatedAt: Date
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  type GetAccountGroupByPayload<T extends AccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountGroupByOutputType[P]>
            : GetScalarType<T[P], AccountGroupByOutputType[P]>
        }
      >
    >


  export type AccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectScalar = {
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userId" | "type" | "provider" | "providerAccountId" | "refresh_token" | "access_token" | "expires_at" | "token_type" | "scope" | "id_token" | "session_state" | "createdAt" | "updatedAt", ExtArgs["result"]["account"]>
  export type AccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Account"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: string
      type: string
      provider: string
      providerAccountId: string
      refresh_token: string | null
      access_token: string | null
      expires_at: number | null
      token_type: string | null
      scope: string | null
      id_token: string | null
      session_state: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["account"]>
    composites: {}
  }

  type AccountGetPayload<S extends boolean | null | undefined | AccountDefaultArgs> = $Result.GetResult<Prisma.$AccountPayload, S>

  type AccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AccountCountAggregateInputType | true
    }

  export interface AccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Account'], meta: { name: 'Account' } }
    /**
     * Find zero or one Account that matches the filter.
     * @param {AccountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccountFindUniqueArgs>(args: SelectSubset<T, AccountFindUniqueArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Account that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AccountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccountFindUniqueOrThrowArgs>(args: SelectSubset<T, AccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccountFindFirstArgs>(args?: SelectSubset<T, AccountFindFirstArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccountFindFirstOrThrowArgs>(args?: SelectSubset<T, AccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const accountWithUserIdOnly = await prisma.account.findMany({ select: { userId: true } })
     * 
     */
    findMany<T extends AccountFindManyArgs>(args?: SelectSubset<T, AccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Account.
     * @param {AccountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     * 
     */
    create<T extends AccountCreateArgs>(args: SelectSubset<T, AccountCreateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Accounts.
     * @param {AccountCreateManyArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccountCreateManyArgs>(args?: SelectSubset<T, AccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Accounts and returns the data saved in the database.
     * @param {AccountCreateManyAndReturnArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Accounts and only return the `userId`
     * const accountWithUserIdOnly = await prisma.account.createManyAndReturn({
     *   select: { userId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AccountCreateManyAndReturnArgs>(args?: SelectSubset<T, AccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Account.
     * @param {AccountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     * 
     */
    delete<T extends AccountDeleteArgs>(args: SelectSubset<T, AccountDeleteArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Account.
     * @param {AccountUpdateArgs} args - Arguments to update one Account.
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
     */
    update<T extends AccountUpdateArgs>(args: SelectSubset<T, AccountUpdateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Accounts.
     * @param {AccountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccountDeleteManyArgs>(args?: SelectSubset<T, AccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountUpdateManyArgs} args - Arguments to update one or more rows.
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
     */
    updateMany<T extends AccountUpdateManyArgs>(args: SelectSubset<T, AccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts and returns the data updated in the database.
     * @param {AccountUpdateManyAndReturnArgs} args - Arguments to update many Accounts.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Accounts and only return the `userId`
     * const accountWithUserIdOnly = await prisma.account.updateManyAndReturn({
     *   select: { userId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AccountUpdateManyAndReturnArgs>(args: SelectSubset<T, AccountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Account.
     * @param {AccountUpsertArgs} args - Arguments to update or create a Account.
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
     */
    upsert<T extends AccountUpsertArgs>(args: SelectSubset<T, AccountUpsertArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends AccountCountArgs>(
      args?: Subset<T, AccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
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
      ByFields extends MaybeTupleToUnion<T['by']>,
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
  /**
   * Fields of the Account model
   */
  readonly fields: AccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Account model
   */
  interface AccountFieldRefs {
    readonly userId: FieldRef<"Account", 'String'>
    readonly type: FieldRef<"Account", 'String'>
    readonly provider: FieldRef<"Account", 'String'>
    readonly providerAccountId: FieldRef<"Account", 'String'>
    readonly refresh_token: FieldRef<"Account", 'String'>
    readonly access_token: FieldRef<"Account", 'String'>
    readonly expires_at: FieldRef<"Account", 'Int'>
    readonly token_type: FieldRef<"Account", 'String'>
    readonly scope: FieldRef<"Account", 'String'>
    readonly id_token: FieldRef<"Account", 'String'>
    readonly session_state: FieldRef<"Account", 'String'>
    readonly createdAt: FieldRef<"Account", 'DateTime'>
    readonly updatedAt: FieldRef<"Account", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Account findUnique
   */
  export type AccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findUniqueOrThrow
   */
  export type AccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findFirst
   */
  export type AccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findFirstOrThrow
   */
  export type AccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findMany
   */
  export type AccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account create
   */
  export type AccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to create a Account.
     */
    data: XOR<AccountCreateInput, AccountUncheckedCreateInput>
  }

  /**
   * Account createMany
   */
  export type AccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Account createManyAndReturn
   */
  export type AccountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account update
   */
  export type AccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to update a Account.
     */
    data: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
    /**
     * Choose, which Account to update.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account updateMany
   */
  export type AccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
  }

  /**
   * Account updateManyAndReturn
   */
  export type AccountUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account upsert
   */
  export type AccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The filter to search for the Account to update in case it exists.
     */
    where: AccountWhereUniqueInput
    /**
     * In case the Account found by the `where` argument doesn't exist, create a new Account with this data.
     */
    create: XOR<AccountCreateInput, AccountUncheckedCreateInput>
    /**
     * In case the Account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
  }

  /**
   * Account delete
   */
  export type AccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter which Account to delete.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account deleteMany
   */
  export type AccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accounts to delete
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to delete.
     */
    limit?: number
  }

  /**
   * Account without action
   */
  export type AccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
  }


  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionMinAggregateOutputType = {
    sessionToken: string | null
    userId: string | null
    expires: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SessionMaxAggregateOutputType = {
    sessionToken: string | null
    userId: string | null
    expires: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SessionCountAggregateOutputType = {
    sessionToken: number
    userId: number
    expires: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    sessionToken?: true
    userId?: true
    expires?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SessionMaxAggregateInputType = {
    sessionToken?: true
    userId?: true
    expires?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SessionCountAggregateInputType = {
    sessionToken?: true
    userId?: true
    expires?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    sessionToken: string
    userId: string
    expires: Date
    createdAt: Date
    updatedAt: Date
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectScalar = {
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"sessionToken" | "userId" | "expires" | "createdAt" | "updatedAt", ExtArgs["result"]["session"]>
  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      sessionToken: string
      userId: string
      expires: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionFindUniqueArgs>(args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionFindFirstArgs>(args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `sessionToken`
     * const sessionWithSessionTokenOnly = await prisma.session.findMany({ select: { sessionToken: true } })
     * 
     */
    findMany<T extends SessionFindManyArgs>(args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
     */
    create<T extends SessionCreateArgs>(args: SelectSubset<T, SessionCreateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessions.
     * @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionCreateManyArgs>(args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sessions and returns the data saved in the database.
     * @param {SessionCreateManyAndReturnArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sessions and only return the `sessionToken`
     * const sessionWithSessionTokenOnly = await prisma.session.createManyAndReturn({
     *   select: { sessionToken: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SessionCreateManyAndReturnArgs>(args?: SelectSubset<T, SessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
     */
    delete<T extends SessionDeleteArgs>(args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionUpdateArgs>(args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionDeleteManyArgs>(args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionUpdateManyArgs>(args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions and returns the data updated in the database.
     * @param {SessionUpdateManyAndReturnArgs} args - Arguments to update many Sessions.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sessions and only return the `sessionToken`
     * const sessionWithSessionTokenOnly = await prisma.session.updateManyAndReturn({
     *   select: { sessionToken: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SessionUpdateManyAndReturnArgs>(args: SelectSubset<T, SessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     */
    upsert<T extends SessionUpsertArgs>(args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
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
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Session model
   */
  interface SessionFieldRefs {
    readonly sessionToken: FieldRef<"Session", 'String'>
    readonly userId: FieldRef<"Session", 'String'>
    readonly expires: FieldRef<"Session", 'DateTime'>
    readonly createdAt: FieldRef<"Session", 'DateTime'>
    readonly updatedAt: FieldRef<"Session", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }

  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Session createManyAndReturn
   */
  export type SessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Session updateManyAndReturn
   */
  export type SessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }

  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to delete.
     */
    limit?: number
  }

  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
  }


  /**
   * Model VerificationToken
   */

  export type AggregateVerificationToken = {
    _count: VerificationTokenCountAggregateOutputType | null
    _min: VerificationTokenMinAggregateOutputType | null
    _max: VerificationTokenMaxAggregateOutputType | null
  }

  export type VerificationTokenMinAggregateOutputType = {
    identifier: string | null
    token: string | null
    expires: Date | null
  }

  export type VerificationTokenMaxAggregateOutputType = {
    identifier: string | null
    token: string | null
    expires: Date | null
  }

  export type VerificationTokenCountAggregateOutputType = {
    identifier: number
    token: number
    expires: number
    _all: number
  }


  export type VerificationTokenMinAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
  }

  export type VerificationTokenMaxAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
  }

  export type VerificationTokenCountAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
    _all?: true
  }

  export type VerificationTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationToken to aggregate.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VerificationTokens
    **/
    _count?: true | VerificationTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VerificationTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VerificationTokenMaxAggregateInputType
  }

  export type GetVerificationTokenAggregateType<T extends VerificationTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateVerificationToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVerificationToken[P]>
      : GetScalarType<T[P], AggregateVerificationToken[P]>
  }




  export type VerificationTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VerificationTokenWhereInput
    orderBy?: VerificationTokenOrderByWithAggregationInput | VerificationTokenOrderByWithAggregationInput[]
    by: VerificationTokenScalarFieldEnum[] | VerificationTokenScalarFieldEnum
    having?: VerificationTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VerificationTokenCountAggregateInputType | true
    _min?: VerificationTokenMinAggregateInputType
    _max?: VerificationTokenMaxAggregateInputType
  }

  export type VerificationTokenGroupByOutputType = {
    identifier: string
    token: string
    expires: Date
    _count: VerificationTokenCountAggregateOutputType | null
    _min: VerificationTokenMinAggregateOutputType | null
    _max: VerificationTokenMaxAggregateOutputType | null
  }

  type GetVerificationTokenGroupByPayload<T extends VerificationTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VerificationTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VerificationTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VerificationTokenGroupByOutputType[P]>
            : GetScalarType<T[P], VerificationTokenGroupByOutputType[P]>
        }
      >
    >


  export type VerificationTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectScalar = {
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }

  export type VerificationTokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"identifier" | "token" | "expires", ExtArgs["result"]["verificationToken"]>

  export type $VerificationTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VerificationToken"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      identifier: string
      token: string
      expires: Date
    }, ExtArgs["result"]["verificationToken"]>
    composites: {}
  }

  type VerificationTokenGetPayload<S extends boolean | null | undefined | VerificationTokenDefaultArgs> = $Result.GetResult<Prisma.$VerificationTokenPayload, S>

  type VerificationTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VerificationTokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VerificationTokenCountAggregateInputType | true
    }

  export interface VerificationTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VerificationToken'], meta: { name: 'VerificationToken' } }
    /**
     * Find zero or one VerificationToken that matches the filter.
     * @param {VerificationTokenFindUniqueArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VerificationTokenFindUniqueArgs>(args: SelectSubset<T, VerificationTokenFindUniqueArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VerificationToken that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VerificationTokenFindUniqueOrThrowArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VerificationTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, VerificationTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VerificationToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindFirstArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VerificationTokenFindFirstArgs>(args?: SelectSubset<T, VerificationTokenFindFirstArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VerificationToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindFirstOrThrowArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VerificationTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, VerificationTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VerificationTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VerificationTokens
     * const verificationTokens = await prisma.verificationToken.findMany()
     * 
     * // Get first 10 VerificationTokens
     * const verificationTokens = await prisma.verificationToken.findMany({ take: 10 })
     * 
     * // Only select the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.findMany({ select: { identifier: true } })
     * 
     */
    findMany<T extends VerificationTokenFindManyArgs>(args?: SelectSubset<T, VerificationTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VerificationToken.
     * @param {VerificationTokenCreateArgs} args - Arguments to create a VerificationToken.
     * @example
     * // Create one VerificationToken
     * const VerificationToken = await prisma.verificationToken.create({
     *   data: {
     *     // ... data to create a VerificationToken
     *   }
     * })
     * 
     */
    create<T extends VerificationTokenCreateArgs>(args: SelectSubset<T, VerificationTokenCreateArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VerificationTokens.
     * @param {VerificationTokenCreateManyArgs} args - Arguments to create many VerificationTokens.
     * @example
     * // Create many VerificationTokens
     * const verificationToken = await prisma.verificationToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VerificationTokenCreateManyArgs>(args?: SelectSubset<T, VerificationTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VerificationTokens and returns the data saved in the database.
     * @param {VerificationTokenCreateManyAndReturnArgs} args - Arguments to create many VerificationTokens.
     * @example
     * // Create many VerificationTokens
     * const verificationToken = await prisma.verificationToken.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VerificationTokens and only return the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.createManyAndReturn({
     *   select: { identifier: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VerificationTokenCreateManyAndReturnArgs>(args?: SelectSubset<T, VerificationTokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a VerificationToken.
     * @param {VerificationTokenDeleteArgs} args - Arguments to delete one VerificationToken.
     * @example
     * // Delete one VerificationToken
     * const VerificationToken = await prisma.verificationToken.delete({
     *   where: {
     *     // ... filter to delete one VerificationToken
     *   }
     * })
     * 
     */
    delete<T extends VerificationTokenDeleteArgs>(args: SelectSubset<T, VerificationTokenDeleteArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VerificationToken.
     * @param {VerificationTokenUpdateArgs} args - Arguments to update one VerificationToken.
     * @example
     * // Update one VerificationToken
     * const verificationToken = await prisma.verificationToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VerificationTokenUpdateArgs>(args: SelectSubset<T, VerificationTokenUpdateArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VerificationTokens.
     * @param {VerificationTokenDeleteManyArgs} args - Arguments to filter VerificationTokens to delete.
     * @example
     * // Delete a few VerificationTokens
     * const { count } = await prisma.verificationToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VerificationTokenDeleteManyArgs>(args?: SelectSubset<T, VerificationTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VerificationTokens
     * const verificationToken = await prisma.verificationToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VerificationTokenUpdateManyArgs>(args: SelectSubset<T, VerificationTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VerificationTokens and returns the data updated in the database.
     * @param {VerificationTokenUpdateManyAndReturnArgs} args - Arguments to update many VerificationTokens.
     * @example
     * // Update many VerificationTokens
     * const verificationToken = await prisma.verificationToken.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more VerificationTokens and only return the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.updateManyAndReturn({
     *   select: { identifier: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VerificationTokenUpdateManyAndReturnArgs>(args: SelectSubset<T, VerificationTokenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one VerificationToken.
     * @param {VerificationTokenUpsertArgs} args - Arguments to update or create a VerificationToken.
     * @example
     * // Update or create a VerificationToken
     * const verificationToken = await prisma.verificationToken.upsert({
     *   create: {
     *     // ... data to create a VerificationToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VerificationToken we want to update
     *   }
     * })
     */
    upsert<T extends VerificationTokenUpsertArgs>(args: SelectSubset<T, VerificationTokenUpsertArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenCountArgs} args - Arguments to filter VerificationTokens to count.
     * @example
     * // Count the number of VerificationTokens
     * const count = await prisma.verificationToken.count({
     *   where: {
     *     // ... the filter for the VerificationTokens we want to count
     *   }
     * })
    **/
    count<T extends VerificationTokenCountArgs>(
      args?: Subset<T, VerificationTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VerificationTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VerificationTokenAggregateArgs>(args: Subset<T, VerificationTokenAggregateArgs>): Prisma.PrismaPromise<GetVerificationTokenAggregateType<T>>

    /**
     * Group by VerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenGroupByArgs} args - Group by arguments.
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
      T extends VerificationTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VerificationTokenGroupByArgs['orderBy'] }
        : { orderBy?: VerificationTokenGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, VerificationTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVerificationTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VerificationToken model
   */
  readonly fields: VerificationTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VerificationToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VerificationTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the VerificationToken model
   */
  interface VerificationTokenFieldRefs {
    readonly identifier: FieldRef<"VerificationToken", 'String'>
    readonly token: FieldRef<"VerificationToken", 'String'>
    readonly expires: FieldRef<"VerificationToken", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * VerificationToken findUnique
   */
  export type VerificationTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken findUniqueOrThrow
   */
  export type VerificationTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken findFirst
   */
  export type VerificationTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationTokens.
     */
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken findFirstOrThrow
   */
  export type VerificationTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationTokens.
     */
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken findMany
   */
  export type VerificationTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationTokens to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken create
   */
  export type VerificationTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data needed to create a VerificationToken.
     */
    data: XOR<VerificationTokenCreateInput, VerificationTokenUncheckedCreateInput>
  }

  /**
   * VerificationToken createMany
   */
  export type VerificationTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VerificationTokens.
     */
    data: VerificationTokenCreateManyInput | VerificationTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VerificationToken createManyAndReturn
   */
  export type VerificationTokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data used to create many VerificationTokens.
     */
    data: VerificationTokenCreateManyInput | VerificationTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VerificationToken update
   */
  export type VerificationTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data needed to update a VerificationToken.
     */
    data: XOR<VerificationTokenUpdateInput, VerificationTokenUncheckedUpdateInput>
    /**
     * Choose, which VerificationToken to update.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken updateMany
   */
  export type VerificationTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VerificationTokens.
     */
    data: XOR<VerificationTokenUpdateManyMutationInput, VerificationTokenUncheckedUpdateManyInput>
    /**
     * Filter which VerificationTokens to update
     */
    where?: VerificationTokenWhereInput
    /**
     * Limit how many VerificationTokens to update.
     */
    limit?: number
  }

  /**
   * VerificationToken updateManyAndReturn
   */
  export type VerificationTokenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data used to update VerificationTokens.
     */
    data: XOR<VerificationTokenUpdateManyMutationInput, VerificationTokenUncheckedUpdateManyInput>
    /**
     * Filter which VerificationTokens to update
     */
    where?: VerificationTokenWhereInput
    /**
     * Limit how many VerificationTokens to update.
     */
    limit?: number
  }

  /**
   * VerificationToken upsert
   */
  export type VerificationTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The filter to search for the VerificationToken to update in case it exists.
     */
    where: VerificationTokenWhereUniqueInput
    /**
     * In case the VerificationToken found by the `where` argument doesn't exist, create a new VerificationToken with this data.
     */
    create: XOR<VerificationTokenCreateInput, VerificationTokenUncheckedCreateInput>
    /**
     * In case the VerificationToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VerificationTokenUpdateInput, VerificationTokenUncheckedUpdateInput>
  }

  /**
   * VerificationToken delete
   */
  export type VerificationTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter which VerificationToken to delete.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken deleteMany
   */
  export type VerificationTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationTokens to delete
     */
    where?: VerificationTokenWhereInput
    /**
     * Limit how many VerificationTokens to delete.
     */
    limit?: number
  }

  /**
   * VerificationToken without action
   */
  export type VerificationTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
  }


  /**
   * Model AdvertiseRequest
   */

  export type AggregateAdvertiseRequest = {
    _count: AdvertiseRequestCountAggregateOutputType | null
    _min: AdvertiseRequestMinAggregateOutputType | null
    _max: AdvertiseRequestMaxAggregateOutputType | null
  }

  export type AdvertiseRequestMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    companyName: string | null
    companyWebsite: string | null
    phoneNumber: string | null
    message: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AdvertiseRequestMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    companyName: string | null
    companyWebsite: string | null
    phoneNumber: string | null
    message: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AdvertiseRequestCountAggregateOutputType = {
    id: number
    name: number
    email: number
    companyName: number
    companyWebsite: number
    phoneNumber: number
    message: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AdvertiseRequestMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    companyName?: true
    companyWebsite?: true
    phoneNumber?: true
    message?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AdvertiseRequestMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    companyName?: true
    companyWebsite?: true
    phoneNumber?: true
    message?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AdvertiseRequestCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    companyName?: true
    companyWebsite?: true
    phoneNumber?: true
    message?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AdvertiseRequestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AdvertiseRequest to aggregate.
     */
    where?: AdvertiseRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdvertiseRequests to fetch.
     */
    orderBy?: AdvertiseRequestOrderByWithRelationInput | AdvertiseRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdvertiseRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdvertiseRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdvertiseRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AdvertiseRequests
    **/
    _count?: true | AdvertiseRequestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdvertiseRequestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdvertiseRequestMaxAggregateInputType
  }

  export type GetAdvertiseRequestAggregateType<T extends AdvertiseRequestAggregateArgs> = {
        [P in keyof T & keyof AggregateAdvertiseRequest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdvertiseRequest[P]>
      : GetScalarType<T[P], AggregateAdvertiseRequest[P]>
  }




  export type AdvertiseRequestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdvertiseRequestWhereInput
    orderBy?: AdvertiseRequestOrderByWithAggregationInput | AdvertiseRequestOrderByWithAggregationInput[]
    by: AdvertiseRequestScalarFieldEnum[] | AdvertiseRequestScalarFieldEnum
    having?: AdvertiseRequestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdvertiseRequestCountAggregateInputType | true
    _min?: AdvertiseRequestMinAggregateInputType
    _max?: AdvertiseRequestMaxAggregateInputType
  }

  export type AdvertiseRequestGroupByOutputType = {
    id: string
    name: string
    email: string
    companyName: string
    companyWebsite: string
    phoneNumber: string
    message: string
    createdAt: Date
    updatedAt: Date
    _count: AdvertiseRequestCountAggregateOutputType | null
    _min: AdvertiseRequestMinAggregateOutputType | null
    _max: AdvertiseRequestMaxAggregateOutputType | null
  }

  type GetAdvertiseRequestGroupByPayload<T extends AdvertiseRequestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdvertiseRequestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdvertiseRequestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdvertiseRequestGroupByOutputType[P]>
            : GetScalarType<T[P], AdvertiseRequestGroupByOutputType[P]>
        }
      >
    >


  export type AdvertiseRequestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    companyName?: boolean
    companyWebsite?: boolean
    phoneNumber?: boolean
    message?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["advertiseRequest"]>

  export type AdvertiseRequestSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    companyName?: boolean
    companyWebsite?: boolean
    phoneNumber?: boolean
    message?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["advertiseRequest"]>

  export type AdvertiseRequestSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    companyName?: boolean
    companyWebsite?: boolean
    phoneNumber?: boolean
    message?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["advertiseRequest"]>

  export type AdvertiseRequestSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    companyName?: boolean
    companyWebsite?: boolean
    phoneNumber?: boolean
    message?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AdvertiseRequestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "companyName" | "companyWebsite" | "phoneNumber" | "message" | "createdAt" | "updatedAt", ExtArgs["result"]["advertiseRequest"]>

  export type $AdvertiseRequestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AdvertiseRequest"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      companyName: string
      companyWebsite: string
      phoneNumber: string
      message: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["advertiseRequest"]>
    composites: {}
  }

  type AdvertiseRequestGetPayload<S extends boolean | null | undefined | AdvertiseRequestDefaultArgs> = $Result.GetResult<Prisma.$AdvertiseRequestPayload, S>

  type AdvertiseRequestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AdvertiseRequestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdvertiseRequestCountAggregateInputType | true
    }

  export interface AdvertiseRequestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AdvertiseRequest'], meta: { name: 'AdvertiseRequest' } }
    /**
     * Find zero or one AdvertiseRequest that matches the filter.
     * @param {AdvertiseRequestFindUniqueArgs} args - Arguments to find a AdvertiseRequest
     * @example
     * // Get one AdvertiseRequest
     * const advertiseRequest = await prisma.advertiseRequest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdvertiseRequestFindUniqueArgs>(args: SelectSubset<T, AdvertiseRequestFindUniqueArgs<ExtArgs>>): Prisma__AdvertiseRequestClient<$Result.GetResult<Prisma.$AdvertiseRequestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AdvertiseRequest that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AdvertiseRequestFindUniqueOrThrowArgs} args - Arguments to find a AdvertiseRequest
     * @example
     * // Get one AdvertiseRequest
     * const advertiseRequest = await prisma.advertiseRequest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdvertiseRequestFindUniqueOrThrowArgs>(args: SelectSubset<T, AdvertiseRequestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdvertiseRequestClient<$Result.GetResult<Prisma.$AdvertiseRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AdvertiseRequest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdvertiseRequestFindFirstArgs} args - Arguments to find a AdvertiseRequest
     * @example
     * // Get one AdvertiseRequest
     * const advertiseRequest = await prisma.advertiseRequest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdvertiseRequestFindFirstArgs>(args?: SelectSubset<T, AdvertiseRequestFindFirstArgs<ExtArgs>>): Prisma__AdvertiseRequestClient<$Result.GetResult<Prisma.$AdvertiseRequestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AdvertiseRequest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdvertiseRequestFindFirstOrThrowArgs} args - Arguments to find a AdvertiseRequest
     * @example
     * // Get one AdvertiseRequest
     * const advertiseRequest = await prisma.advertiseRequest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdvertiseRequestFindFirstOrThrowArgs>(args?: SelectSubset<T, AdvertiseRequestFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdvertiseRequestClient<$Result.GetResult<Prisma.$AdvertiseRequestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AdvertiseRequests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdvertiseRequestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AdvertiseRequests
     * const advertiseRequests = await prisma.advertiseRequest.findMany()
     * 
     * // Get first 10 AdvertiseRequests
     * const advertiseRequests = await prisma.advertiseRequest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const advertiseRequestWithIdOnly = await prisma.advertiseRequest.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AdvertiseRequestFindManyArgs>(args?: SelectSubset<T, AdvertiseRequestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdvertiseRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AdvertiseRequest.
     * @param {AdvertiseRequestCreateArgs} args - Arguments to create a AdvertiseRequest.
     * @example
     * // Create one AdvertiseRequest
     * const AdvertiseRequest = await prisma.advertiseRequest.create({
     *   data: {
     *     // ... data to create a AdvertiseRequest
     *   }
     * })
     * 
     */
    create<T extends AdvertiseRequestCreateArgs>(args: SelectSubset<T, AdvertiseRequestCreateArgs<ExtArgs>>): Prisma__AdvertiseRequestClient<$Result.GetResult<Prisma.$AdvertiseRequestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AdvertiseRequests.
     * @param {AdvertiseRequestCreateManyArgs} args - Arguments to create many AdvertiseRequests.
     * @example
     * // Create many AdvertiseRequests
     * const advertiseRequest = await prisma.advertiseRequest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdvertiseRequestCreateManyArgs>(args?: SelectSubset<T, AdvertiseRequestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AdvertiseRequests and returns the data saved in the database.
     * @param {AdvertiseRequestCreateManyAndReturnArgs} args - Arguments to create many AdvertiseRequests.
     * @example
     * // Create many AdvertiseRequests
     * const advertiseRequest = await prisma.advertiseRequest.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AdvertiseRequests and only return the `id`
     * const advertiseRequestWithIdOnly = await prisma.advertiseRequest.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AdvertiseRequestCreateManyAndReturnArgs>(args?: SelectSubset<T, AdvertiseRequestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdvertiseRequestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AdvertiseRequest.
     * @param {AdvertiseRequestDeleteArgs} args - Arguments to delete one AdvertiseRequest.
     * @example
     * // Delete one AdvertiseRequest
     * const AdvertiseRequest = await prisma.advertiseRequest.delete({
     *   where: {
     *     // ... filter to delete one AdvertiseRequest
     *   }
     * })
     * 
     */
    delete<T extends AdvertiseRequestDeleteArgs>(args: SelectSubset<T, AdvertiseRequestDeleteArgs<ExtArgs>>): Prisma__AdvertiseRequestClient<$Result.GetResult<Prisma.$AdvertiseRequestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AdvertiseRequest.
     * @param {AdvertiseRequestUpdateArgs} args - Arguments to update one AdvertiseRequest.
     * @example
     * // Update one AdvertiseRequest
     * const advertiseRequest = await prisma.advertiseRequest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdvertiseRequestUpdateArgs>(args: SelectSubset<T, AdvertiseRequestUpdateArgs<ExtArgs>>): Prisma__AdvertiseRequestClient<$Result.GetResult<Prisma.$AdvertiseRequestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AdvertiseRequests.
     * @param {AdvertiseRequestDeleteManyArgs} args - Arguments to filter AdvertiseRequests to delete.
     * @example
     * // Delete a few AdvertiseRequests
     * const { count } = await prisma.advertiseRequest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdvertiseRequestDeleteManyArgs>(args?: SelectSubset<T, AdvertiseRequestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AdvertiseRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdvertiseRequestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AdvertiseRequests
     * const advertiseRequest = await prisma.advertiseRequest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdvertiseRequestUpdateManyArgs>(args: SelectSubset<T, AdvertiseRequestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AdvertiseRequests and returns the data updated in the database.
     * @param {AdvertiseRequestUpdateManyAndReturnArgs} args - Arguments to update many AdvertiseRequests.
     * @example
     * // Update many AdvertiseRequests
     * const advertiseRequest = await prisma.advertiseRequest.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AdvertiseRequests and only return the `id`
     * const advertiseRequestWithIdOnly = await prisma.advertiseRequest.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AdvertiseRequestUpdateManyAndReturnArgs>(args: SelectSubset<T, AdvertiseRequestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdvertiseRequestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AdvertiseRequest.
     * @param {AdvertiseRequestUpsertArgs} args - Arguments to update or create a AdvertiseRequest.
     * @example
     * // Update or create a AdvertiseRequest
     * const advertiseRequest = await prisma.advertiseRequest.upsert({
     *   create: {
     *     // ... data to create a AdvertiseRequest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AdvertiseRequest we want to update
     *   }
     * })
     */
    upsert<T extends AdvertiseRequestUpsertArgs>(args: SelectSubset<T, AdvertiseRequestUpsertArgs<ExtArgs>>): Prisma__AdvertiseRequestClient<$Result.GetResult<Prisma.$AdvertiseRequestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AdvertiseRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdvertiseRequestCountArgs} args - Arguments to filter AdvertiseRequests to count.
     * @example
     * // Count the number of AdvertiseRequests
     * const count = await prisma.advertiseRequest.count({
     *   where: {
     *     // ... the filter for the AdvertiseRequests we want to count
     *   }
     * })
    **/
    count<T extends AdvertiseRequestCountArgs>(
      args?: Subset<T, AdvertiseRequestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdvertiseRequestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AdvertiseRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdvertiseRequestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AdvertiseRequestAggregateArgs>(args: Subset<T, AdvertiseRequestAggregateArgs>): Prisma.PrismaPromise<GetAdvertiseRequestAggregateType<T>>

    /**
     * Group by AdvertiseRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdvertiseRequestGroupByArgs} args - Group by arguments.
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
      T extends AdvertiseRequestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdvertiseRequestGroupByArgs['orderBy'] }
        : { orderBy?: AdvertiseRequestGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, AdvertiseRequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdvertiseRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AdvertiseRequest model
   */
  readonly fields: AdvertiseRequestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AdvertiseRequest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdvertiseRequestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AdvertiseRequest model
   */
  interface AdvertiseRequestFieldRefs {
    readonly id: FieldRef<"AdvertiseRequest", 'String'>
    readonly name: FieldRef<"AdvertiseRequest", 'String'>
    readonly email: FieldRef<"AdvertiseRequest", 'String'>
    readonly companyName: FieldRef<"AdvertiseRequest", 'String'>
    readonly companyWebsite: FieldRef<"AdvertiseRequest", 'String'>
    readonly phoneNumber: FieldRef<"AdvertiseRequest", 'String'>
    readonly message: FieldRef<"AdvertiseRequest", 'String'>
    readonly createdAt: FieldRef<"AdvertiseRequest", 'DateTime'>
    readonly updatedAt: FieldRef<"AdvertiseRequest", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AdvertiseRequest findUnique
   */
  export type AdvertiseRequestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdvertiseRequest
     */
    select?: AdvertiseRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdvertiseRequest
     */
    omit?: AdvertiseRequestOmit<ExtArgs> | null
    /**
     * Filter, which AdvertiseRequest to fetch.
     */
    where: AdvertiseRequestWhereUniqueInput
  }

  /**
   * AdvertiseRequest findUniqueOrThrow
   */
  export type AdvertiseRequestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdvertiseRequest
     */
    select?: AdvertiseRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdvertiseRequest
     */
    omit?: AdvertiseRequestOmit<ExtArgs> | null
    /**
     * Filter, which AdvertiseRequest to fetch.
     */
    where: AdvertiseRequestWhereUniqueInput
  }

  /**
   * AdvertiseRequest findFirst
   */
  export type AdvertiseRequestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdvertiseRequest
     */
    select?: AdvertiseRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdvertiseRequest
     */
    omit?: AdvertiseRequestOmit<ExtArgs> | null
    /**
     * Filter, which AdvertiseRequest to fetch.
     */
    where?: AdvertiseRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdvertiseRequests to fetch.
     */
    orderBy?: AdvertiseRequestOrderByWithRelationInput | AdvertiseRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AdvertiseRequests.
     */
    cursor?: AdvertiseRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdvertiseRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdvertiseRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AdvertiseRequests.
     */
    distinct?: AdvertiseRequestScalarFieldEnum | AdvertiseRequestScalarFieldEnum[]
  }

  /**
   * AdvertiseRequest findFirstOrThrow
   */
  export type AdvertiseRequestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdvertiseRequest
     */
    select?: AdvertiseRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdvertiseRequest
     */
    omit?: AdvertiseRequestOmit<ExtArgs> | null
    /**
     * Filter, which AdvertiseRequest to fetch.
     */
    where?: AdvertiseRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdvertiseRequests to fetch.
     */
    orderBy?: AdvertiseRequestOrderByWithRelationInput | AdvertiseRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AdvertiseRequests.
     */
    cursor?: AdvertiseRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdvertiseRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdvertiseRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AdvertiseRequests.
     */
    distinct?: AdvertiseRequestScalarFieldEnum | AdvertiseRequestScalarFieldEnum[]
  }

  /**
   * AdvertiseRequest findMany
   */
  export type AdvertiseRequestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdvertiseRequest
     */
    select?: AdvertiseRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdvertiseRequest
     */
    omit?: AdvertiseRequestOmit<ExtArgs> | null
    /**
     * Filter, which AdvertiseRequests to fetch.
     */
    where?: AdvertiseRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdvertiseRequests to fetch.
     */
    orderBy?: AdvertiseRequestOrderByWithRelationInput | AdvertiseRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AdvertiseRequests.
     */
    cursor?: AdvertiseRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdvertiseRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdvertiseRequests.
     */
    skip?: number
    distinct?: AdvertiseRequestScalarFieldEnum | AdvertiseRequestScalarFieldEnum[]
  }

  /**
   * AdvertiseRequest create
   */
  export type AdvertiseRequestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdvertiseRequest
     */
    select?: AdvertiseRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdvertiseRequest
     */
    omit?: AdvertiseRequestOmit<ExtArgs> | null
    /**
     * The data needed to create a AdvertiseRequest.
     */
    data: XOR<AdvertiseRequestCreateInput, AdvertiseRequestUncheckedCreateInput>
  }

  /**
   * AdvertiseRequest createMany
   */
  export type AdvertiseRequestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AdvertiseRequests.
     */
    data: AdvertiseRequestCreateManyInput | AdvertiseRequestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AdvertiseRequest createManyAndReturn
   */
  export type AdvertiseRequestCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdvertiseRequest
     */
    select?: AdvertiseRequestSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AdvertiseRequest
     */
    omit?: AdvertiseRequestOmit<ExtArgs> | null
    /**
     * The data used to create many AdvertiseRequests.
     */
    data: AdvertiseRequestCreateManyInput | AdvertiseRequestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AdvertiseRequest update
   */
  export type AdvertiseRequestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdvertiseRequest
     */
    select?: AdvertiseRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdvertiseRequest
     */
    omit?: AdvertiseRequestOmit<ExtArgs> | null
    /**
     * The data needed to update a AdvertiseRequest.
     */
    data: XOR<AdvertiseRequestUpdateInput, AdvertiseRequestUncheckedUpdateInput>
    /**
     * Choose, which AdvertiseRequest to update.
     */
    where: AdvertiseRequestWhereUniqueInput
  }

  /**
   * AdvertiseRequest updateMany
   */
  export type AdvertiseRequestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AdvertiseRequests.
     */
    data: XOR<AdvertiseRequestUpdateManyMutationInput, AdvertiseRequestUncheckedUpdateManyInput>
    /**
     * Filter which AdvertiseRequests to update
     */
    where?: AdvertiseRequestWhereInput
    /**
     * Limit how many AdvertiseRequests to update.
     */
    limit?: number
  }

  /**
   * AdvertiseRequest updateManyAndReturn
   */
  export type AdvertiseRequestUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdvertiseRequest
     */
    select?: AdvertiseRequestSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AdvertiseRequest
     */
    omit?: AdvertiseRequestOmit<ExtArgs> | null
    /**
     * The data used to update AdvertiseRequests.
     */
    data: XOR<AdvertiseRequestUpdateManyMutationInput, AdvertiseRequestUncheckedUpdateManyInput>
    /**
     * Filter which AdvertiseRequests to update
     */
    where?: AdvertiseRequestWhereInput
    /**
     * Limit how many AdvertiseRequests to update.
     */
    limit?: number
  }

  /**
   * AdvertiseRequest upsert
   */
  export type AdvertiseRequestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdvertiseRequest
     */
    select?: AdvertiseRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdvertiseRequest
     */
    omit?: AdvertiseRequestOmit<ExtArgs> | null
    /**
     * The filter to search for the AdvertiseRequest to update in case it exists.
     */
    where: AdvertiseRequestWhereUniqueInput
    /**
     * In case the AdvertiseRequest found by the `where` argument doesn't exist, create a new AdvertiseRequest with this data.
     */
    create: XOR<AdvertiseRequestCreateInput, AdvertiseRequestUncheckedCreateInput>
    /**
     * In case the AdvertiseRequest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdvertiseRequestUpdateInput, AdvertiseRequestUncheckedUpdateInput>
  }

  /**
   * AdvertiseRequest delete
   */
  export type AdvertiseRequestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdvertiseRequest
     */
    select?: AdvertiseRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdvertiseRequest
     */
    omit?: AdvertiseRequestOmit<ExtArgs> | null
    /**
     * Filter which AdvertiseRequest to delete.
     */
    where: AdvertiseRequestWhereUniqueInput
  }

  /**
   * AdvertiseRequest deleteMany
   */
  export type AdvertiseRequestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AdvertiseRequests to delete
     */
    where?: AdvertiseRequestWhereInput
    /**
     * Limit how many AdvertiseRequests to delete.
     */
    limit?: number
  }

  /**
   * AdvertiseRequest without action
   */
  export type AdvertiseRequestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdvertiseRequest
     */
    select?: AdvertiseRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdvertiseRequest
     */
    omit?: AdvertiseRequestOmit<ExtArgs> | null
  }


  /**
   * Model Videopost
   */

  export type AggregateVideopost = {
    _count: VideopostCountAggregateOutputType | null
    _min: VideopostMinAggregateOutputType | null
    _max: VideopostMaxAggregateOutputType | null
  }

  export type VideopostMinAggregateOutputType = {
    id: string | null
    videoAbout: string | null
    videoHeadings: string | null
    videoLink: string | null
    isFeatured: boolean | null
    startDate: string | null
    vedioStatus: $Enums.vedioStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VideopostMaxAggregateOutputType = {
    id: string | null
    videoAbout: string | null
    videoHeadings: string | null
    videoLink: string | null
    isFeatured: boolean | null
    startDate: string | null
    vedioStatus: $Enums.vedioStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VideopostCountAggregateOutputType = {
    id: number
    videoAbout: number
    videoHeadings: number
    videoLink: number
    isFeatured: number
    startDate: number
    vedioStatus: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type VideopostMinAggregateInputType = {
    id?: true
    videoAbout?: true
    videoHeadings?: true
    videoLink?: true
    isFeatured?: true
    startDate?: true
    vedioStatus?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VideopostMaxAggregateInputType = {
    id?: true
    videoAbout?: true
    videoHeadings?: true
    videoLink?: true
    isFeatured?: true
    startDate?: true
    vedioStatus?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VideopostCountAggregateInputType = {
    id?: true
    videoAbout?: true
    videoHeadings?: true
    videoLink?: true
    isFeatured?: true
    startDate?: true
    vedioStatus?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type VideopostAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Videopost to aggregate.
     */
    where?: VideopostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Videoposts to fetch.
     */
    orderBy?: VideopostOrderByWithRelationInput | VideopostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VideopostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Videoposts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Videoposts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Videoposts
    **/
    _count?: true | VideopostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VideopostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VideopostMaxAggregateInputType
  }

  export type GetVideopostAggregateType<T extends VideopostAggregateArgs> = {
        [P in keyof T & keyof AggregateVideopost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVideopost[P]>
      : GetScalarType<T[P], AggregateVideopost[P]>
  }




  export type VideopostGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VideopostWhereInput
    orderBy?: VideopostOrderByWithAggregationInput | VideopostOrderByWithAggregationInput[]
    by: VideopostScalarFieldEnum[] | VideopostScalarFieldEnum
    having?: VideopostScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VideopostCountAggregateInputType | true
    _min?: VideopostMinAggregateInputType
    _max?: VideopostMaxAggregateInputType
  }

  export type VideopostGroupByOutputType = {
    id: string
    videoAbout: string
    videoHeadings: string
    videoLink: string
    isFeatured: boolean
    startDate: string
    vedioStatus: $Enums.vedioStatus
    createdAt: Date
    updatedAt: Date
    _count: VideopostCountAggregateOutputType | null
    _min: VideopostMinAggregateOutputType | null
    _max: VideopostMaxAggregateOutputType | null
  }

  type GetVideopostGroupByPayload<T extends VideopostGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VideopostGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VideopostGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VideopostGroupByOutputType[P]>
            : GetScalarType<T[P], VideopostGroupByOutputType[P]>
        }
      >
    >


  export type VideopostSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    videoAbout?: boolean
    videoHeadings?: boolean
    videoLink?: boolean
    isFeatured?: boolean
    startDate?: boolean
    vedioStatus?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["videopost"]>

  export type VideopostSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    videoAbout?: boolean
    videoHeadings?: boolean
    videoLink?: boolean
    isFeatured?: boolean
    startDate?: boolean
    vedioStatus?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["videopost"]>

  export type VideopostSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    videoAbout?: boolean
    videoHeadings?: boolean
    videoLink?: boolean
    isFeatured?: boolean
    startDate?: boolean
    vedioStatus?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["videopost"]>

  export type VideopostSelectScalar = {
    id?: boolean
    videoAbout?: boolean
    videoHeadings?: boolean
    videoLink?: boolean
    isFeatured?: boolean
    startDate?: boolean
    vedioStatus?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type VideopostOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "videoAbout" | "videoHeadings" | "videoLink" | "isFeatured" | "startDate" | "vedioStatus" | "createdAt" | "updatedAt", ExtArgs["result"]["videopost"]>

  export type $VideopostPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Videopost"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      videoAbout: string
      videoHeadings: string
      videoLink: string
      isFeatured: boolean
      startDate: string
      vedioStatus: $Enums.vedioStatus
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["videopost"]>
    composites: {}
  }

  type VideopostGetPayload<S extends boolean | null | undefined | VideopostDefaultArgs> = $Result.GetResult<Prisma.$VideopostPayload, S>

  type VideopostCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VideopostFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VideopostCountAggregateInputType | true
    }

  export interface VideopostDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Videopost'], meta: { name: 'Videopost' } }
    /**
     * Find zero or one Videopost that matches the filter.
     * @param {VideopostFindUniqueArgs} args - Arguments to find a Videopost
     * @example
     * // Get one Videopost
     * const videopost = await prisma.videopost.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VideopostFindUniqueArgs>(args: SelectSubset<T, VideopostFindUniqueArgs<ExtArgs>>): Prisma__VideopostClient<$Result.GetResult<Prisma.$VideopostPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Videopost that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VideopostFindUniqueOrThrowArgs} args - Arguments to find a Videopost
     * @example
     * // Get one Videopost
     * const videopost = await prisma.videopost.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VideopostFindUniqueOrThrowArgs>(args: SelectSubset<T, VideopostFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VideopostClient<$Result.GetResult<Prisma.$VideopostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Videopost that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideopostFindFirstArgs} args - Arguments to find a Videopost
     * @example
     * // Get one Videopost
     * const videopost = await prisma.videopost.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VideopostFindFirstArgs>(args?: SelectSubset<T, VideopostFindFirstArgs<ExtArgs>>): Prisma__VideopostClient<$Result.GetResult<Prisma.$VideopostPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Videopost that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideopostFindFirstOrThrowArgs} args - Arguments to find a Videopost
     * @example
     * // Get one Videopost
     * const videopost = await prisma.videopost.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VideopostFindFirstOrThrowArgs>(args?: SelectSubset<T, VideopostFindFirstOrThrowArgs<ExtArgs>>): Prisma__VideopostClient<$Result.GetResult<Prisma.$VideopostPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Videoposts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideopostFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Videoposts
     * const videoposts = await prisma.videopost.findMany()
     * 
     * // Get first 10 Videoposts
     * const videoposts = await prisma.videopost.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const videopostWithIdOnly = await prisma.videopost.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VideopostFindManyArgs>(args?: SelectSubset<T, VideopostFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VideopostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Videopost.
     * @param {VideopostCreateArgs} args - Arguments to create a Videopost.
     * @example
     * // Create one Videopost
     * const Videopost = await prisma.videopost.create({
     *   data: {
     *     // ... data to create a Videopost
     *   }
     * })
     * 
     */
    create<T extends VideopostCreateArgs>(args: SelectSubset<T, VideopostCreateArgs<ExtArgs>>): Prisma__VideopostClient<$Result.GetResult<Prisma.$VideopostPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Videoposts.
     * @param {VideopostCreateManyArgs} args - Arguments to create many Videoposts.
     * @example
     * // Create many Videoposts
     * const videopost = await prisma.videopost.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VideopostCreateManyArgs>(args?: SelectSubset<T, VideopostCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Videoposts and returns the data saved in the database.
     * @param {VideopostCreateManyAndReturnArgs} args - Arguments to create many Videoposts.
     * @example
     * // Create many Videoposts
     * const videopost = await prisma.videopost.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Videoposts and only return the `id`
     * const videopostWithIdOnly = await prisma.videopost.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VideopostCreateManyAndReturnArgs>(args?: SelectSubset<T, VideopostCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VideopostPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Videopost.
     * @param {VideopostDeleteArgs} args - Arguments to delete one Videopost.
     * @example
     * // Delete one Videopost
     * const Videopost = await prisma.videopost.delete({
     *   where: {
     *     // ... filter to delete one Videopost
     *   }
     * })
     * 
     */
    delete<T extends VideopostDeleteArgs>(args: SelectSubset<T, VideopostDeleteArgs<ExtArgs>>): Prisma__VideopostClient<$Result.GetResult<Prisma.$VideopostPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Videopost.
     * @param {VideopostUpdateArgs} args - Arguments to update one Videopost.
     * @example
     * // Update one Videopost
     * const videopost = await prisma.videopost.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VideopostUpdateArgs>(args: SelectSubset<T, VideopostUpdateArgs<ExtArgs>>): Prisma__VideopostClient<$Result.GetResult<Prisma.$VideopostPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Videoposts.
     * @param {VideopostDeleteManyArgs} args - Arguments to filter Videoposts to delete.
     * @example
     * // Delete a few Videoposts
     * const { count } = await prisma.videopost.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VideopostDeleteManyArgs>(args?: SelectSubset<T, VideopostDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Videoposts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideopostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Videoposts
     * const videopost = await prisma.videopost.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VideopostUpdateManyArgs>(args: SelectSubset<T, VideopostUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Videoposts and returns the data updated in the database.
     * @param {VideopostUpdateManyAndReturnArgs} args - Arguments to update many Videoposts.
     * @example
     * // Update many Videoposts
     * const videopost = await prisma.videopost.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Videoposts and only return the `id`
     * const videopostWithIdOnly = await prisma.videopost.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VideopostUpdateManyAndReturnArgs>(args: SelectSubset<T, VideopostUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VideopostPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Videopost.
     * @param {VideopostUpsertArgs} args - Arguments to update or create a Videopost.
     * @example
     * // Update or create a Videopost
     * const videopost = await prisma.videopost.upsert({
     *   create: {
     *     // ... data to create a Videopost
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Videopost we want to update
     *   }
     * })
     */
    upsert<T extends VideopostUpsertArgs>(args: SelectSubset<T, VideopostUpsertArgs<ExtArgs>>): Prisma__VideopostClient<$Result.GetResult<Prisma.$VideopostPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Videoposts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideopostCountArgs} args - Arguments to filter Videoposts to count.
     * @example
     * // Count the number of Videoposts
     * const count = await prisma.videopost.count({
     *   where: {
     *     // ... the filter for the Videoposts we want to count
     *   }
     * })
    **/
    count<T extends VideopostCountArgs>(
      args?: Subset<T, VideopostCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VideopostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Videopost.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideopostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VideopostAggregateArgs>(args: Subset<T, VideopostAggregateArgs>): Prisma.PrismaPromise<GetVideopostAggregateType<T>>

    /**
     * Group by Videopost.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideopostGroupByArgs} args - Group by arguments.
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
      T extends VideopostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VideopostGroupByArgs['orderBy'] }
        : { orderBy?: VideopostGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, VideopostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVideopostGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Videopost model
   */
  readonly fields: VideopostFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Videopost.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VideopostClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Videopost model
   */
  interface VideopostFieldRefs {
    readonly id: FieldRef<"Videopost", 'String'>
    readonly videoAbout: FieldRef<"Videopost", 'String'>
    readonly videoHeadings: FieldRef<"Videopost", 'String'>
    readonly videoLink: FieldRef<"Videopost", 'String'>
    readonly isFeatured: FieldRef<"Videopost", 'Boolean'>
    readonly startDate: FieldRef<"Videopost", 'String'>
    readonly vedioStatus: FieldRef<"Videopost", 'vedioStatus'>
    readonly createdAt: FieldRef<"Videopost", 'DateTime'>
    readonly updatedAt: FieldRef<"Videopost", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Videopost findUnique
   */
  export type VideopostFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Videopost
     */
    select?: VideopostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Videopost
     */
    omit?: VideopostOmit<ExtArgs> | null
    /**
     * Filter, which Videopost to fetch.
     */
    where: VideopostWhereUniqueInput
  }

  /**
   * Videopost findUniqueOrThrow
   */
  export type VideopostFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Videopost
     */
    select?: VideopostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Videopost
     */
    omit?: VideopostOmit<ExtArgs> | null
    /**
     * Filter, which Videopost to fetch.
     */
    where: VideopostWhereUniqueInput
  }

  /**
   * Videopost findFirst
   */
  export type VideopostFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Videopost
     */
    select?: VideopostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Videopost
     */
    omit?: VideopostOmit<ExtArgs> | null
    /**
     * Filter, which Videopost to fetch.
     */
    where?: VideopostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Videoposts to fetch.
     */
    orderBy?: VideopostOrderByWithRelationInput | VideopostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Videoposts.
     */
    cursor?: VideopostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Videoposts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Videoposts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Videoposts.
     */
    distinct?: VideopostScalarFieldEnum | VideopostScalarFieldEnum[]
  }

  /**
   * Videopost findFirstOrThrow
   */
  export type VideopostFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Videopost
     */
    select?: VideopostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Videopost
     */
    omit?: VideopostOmit<ExtArgs> | null
    /**
     * Filter, which Videopost to fetch.
     */
    where?: VideopostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Videoposts to fetch.
     */
    orderBy?: VideopostOrderByWithRelationInput | VideopostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Videoposts.
     */
    cursor?: VideopostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Videoposts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Videoposts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Videoposts.
     */
    distinct?: VideopostScalarFieldEnum | VideopostScalarFieldEnum[]
  }

  /**
   * Videopost findMany
   */
  export type VideopostFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Videopost
     */
    select?: VideopostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Videopost
     */
    omit?: VideopostOmit<ExtArgs> | null
    /**
     * Filter, which Videoposts to fetch.
     */
    where?: VideopostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Videoposts to fetch.
     */
    orderBy?: VideopostOrderByWithRelationInput | VideopostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Videoposts.
     */
    cursor?: VideopostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Videoposts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Videoposts.
     */
    skip?: number
    distinct?: VideopostScalarFieldEnum | VideopostScalarFieldEnum[]
  }

  /**
   * Videopost create
   */
  export type VideopostCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Videopost
     */
    select?: VideopostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Videopost
     */
    omit?: VideopostOmit<ExtArgs> | null
    /**
     * The data needed to create a Videopost.
     */
    data: XOR<VideopostCreateInput, VideopostUncheckedCreateInput>
  }

  /**
   * Videopost createMany
   */
  export type VideopostCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Videoposts.
     */
    data: VideopostCreateManyInput | VideopostCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Videopost createManyAndReturn
   */
  export type VideopostCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Videopost
     */
    select?: VideopostSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Videopost
     */
    omit?: VideopostOmit<ExtArgs> | null
    /**
     * The data used to create many Videoposts.
     */
    data: VideopostCreateManyInput | VideopostCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Videopost update
   */
  export type VideopostUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Videopost
     */
    select?: VideopostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Videopost
     */
    omit?: VideopostOmit<ExtArgs> | null
    /**
     * The data needed to update a Videopost.
     */
    data: XOR<VideopostUpdateInput, VideopostUncheckedUpdateInput>
    /**
     * Choose, which Videopost to update.
     */
    where: VideopostWhereUniqueInput
  }

  /**
   * Videopost updateMany
   */
  export type VideopostUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Videoposts.
     */
    data: XOR<VideopostUpdateManyMutationInput, VideopostUncheckedUpdateManyInput>
    /**
     * Filter which Videoposts to update
     */
    where?: VideopostWhereInput
    /**
     * Limit how many Videoposts to update.
     */
    limit?: number
  }

  /**
   * Videopost updateManyAndReturn
   */
  export type VideopostUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Videopost
     */
    select?: VideopostSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Videopost
     */
    omit?: VideopostOmit<ExtArgs> | null
    /**
     * The data used to update Videoposts.
     */
    data: XOR<VideopostUpdateManyMutationInput, VideopostUncheckedUpdateManyInput>
    /**
     * Filter which Videoposts to update
     */
    where?: VideopostWhereInput
    /**
     * Limit how many Videoposts to update.
     */
    limit?: number
  }

  /**
   * Videopost upsert
   */
  export type VideopostUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Videopost
     */
    select?: VideopostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Videopost
     */
    omit?: VideopostOmit<ExtArgs> | null
    /**
     * The filter to search for the Videopost to update in case it exists.
     */
    where: VideopostWhereUniqueInput
    /**
     * In case the Videopost found by the `where` argument doesn't exist, create a new Videopost with this data.
     */
    create: XOR<VideopostCreateInput, VideopostUncheckedCreateInput>
    /**
     * In case the Videopost was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VideopostUpdateInput, VideopostUncheckedUpdateInput>
  }

  /**
   * Videopost delete
   */
  export type VideopostDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Videopost
     */
    select?: VideopostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Videopost
     */
    omit?: VideopostOmit<ExtArgs> | null
    /**
     * Filter which Videopost to delete.
     */
    where: VideopostWhereUniqueInput
  }

  /**
   * Videopost deleteMany
   */
  export type VideopostDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Videoposts to delete
     */
    where?: VideopostWhereInput
    /**
     * Limit how many Videoposts to delete.
     */
    limit?: number
  }

  /**
   * Videopost without action
   */
  export type VideopostDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Videopost
     */
    select?: VideopostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Videopost
     */
    omit?: VideopostOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    emailVerified: 'emailVerified',
    image: 'image',
    userType: 'userType',
    approvalStatus: 'approvalStatus',
    onboardingCompleted: 'onboardingCompleted',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const NewsReporterScalarFieldEnum: {
    id: 'id',
    reporterName: 'reporterName',
    location: 'location',
    bio: 'bio',
    profilePicture: 'profilePicture',
    phoneNumber: 'phoneNumber',
    facebookProfileAddress: 'facebookProfileAddress',
    userId: 'userId',
    registered: 'registered',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type NewsReporterScalarFieldEnum = (typeof NewsReporterScalarFieldEnum)[keyof typeof NewsReporterScalarFieldEnum]


  export const AdvertiserScalarFieldEnum: {
    id: 'id',
    supervisorName: 'supervisorName',
    companyName: 'companyName',
    companyAddress: 'companyAddress',
    phoneNumber: 'phoneNumber',
    aboutCompany: 'aboutCompany',
    companyWebsite: 'companyWebsite',
    userId: 'userId',
    registered: 'registered',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AdvertiserScalarFieldEnum = (typeof AdvertiserScalarFieldEnum)[keyof typeof AdvertiserScalarFieldEnum]


  export const NewsArticleScalarFieldEnum: {
    id: 'id',
    newsHeading: 'newsHeading',
    newsResource: 'newsResource',
    newsLocation: 'newsLocation',
    newsCategory: 'newsCategory',
    newsPicture: 'newsPicture',
    newsPictureHeading: 'newsPictureHeading',
    newsPictureCredit: 'newsPictureCredit',
    isFeatured: 'isFeatured',
    newsDetails: 'newsDetails',
    reporterId: 'reporterId',
    duration: 'duration',
    newsArticleStatus: 'newsArticleStatus',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type NewsArticleScalarFieldEnum = (typeof NewsArticleScalarFieldEnum)[keyof typeof NewsArticleScalarFieldEnum]


  export const QuoteScalarFieldEnum: {
    id: 'id',
    text: 'text',
    speakerInfo: 'speakerInfo',
    articleId: 'articleId',
    createdAt: 'createdAt'
  };

  export type QuoteScalarFieldEnum = (typeof QuoteScalarFieldEnum)[keyof typeof QuoteScalarFieldEnum]


  export const AdvertisementScalarFieldEnum: {
    id: 'id',
    companyName: 'companyName',
    companyaddress: 'companyaddress',
    supervisedName: 'supervisedName',
    advertisedCategory: 'advertisedCategory',
    websiteLink: 'websiteLink',
    additionalInfo: 'additionalInfo',
    advertiseBanner: 'advertiseBanner',
    isFeatured: 'isFeatured',
    endDate: 'endDate',
    startDate: 'startDate',
    supervisedPhonenumber: 'supervisedPhonenumber',
    advertiseduration: 'advertiseduration',
    advertiseStatus: 'advertiseStatus',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AdvertisementScalarFieldEnum = (typeof AdvertisementScalarFieldEnum)[keyof typeof AdvertisementScalarFieldEnum]


  export const OpinionScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    phone: 'phone',
    opinion: 'opinion',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type OpinionScalarFieldEnum = (typeof OpinionScalarFieldEnum)[keyof typeof OpinionScalarFieldEnum]


  export const AccountScalarFieldEnum: {
    userId: 'userId',
    type: 'type',
    provider: 'provider',
    providerAccountId: 'providerAccountId',
    refresh_token: 'refresh_token',
    access_token: 'access_token',
    expires_at: 'expires_at',
    token_type: 'token_type',
    scope: 'scope',
    id_token: 'id_token',
    session_state: 'session_state',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    sessionToken: 'sessionToken',
    userId: 'userId',
    expires: 'expires',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const VerificationTokenScalarFieldEnum: {
    identifier: 'identifier',
    token: 'token',
    expires: 'expires'
  };

  export type VerificationTokenScalarFieldEnum = (typeof VerificationTokenScalarFieldEnum)[keyof typeof VerificationTokenScalarFieldEnum]


  export const AdvertiseRequestScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    companyName: 'companyName',
    companyWebsite: 'companyWebsite',
    phoneNumber: 'phoneNumber',
    message: 'message',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AdvertiseRequestScalarFieldEnum = (typeof AdvertiseRequestScalarFieldEnum)[keyof typeof AdvertiseRequestScalarFieldEnum]


  export const VideopostScalarFieldEnum: {
    id: 'id',
    videoAbout: 'videoAbout',
    videoHeadings: 'videoHeadings',
    videoLink: 'videoLink',
    isFeatured: 'isFeatured',
    startDate: 'startDate',
    vedioStatus: 'vedioStatus',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type VideopostScalarFieldEnum = (typeof VideopostScalarFieldEnum)[keyof typeof VideopostScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'UserType'
   */
  export type EnumUserTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserType'>
    


  /**
   * Reference to a field of type 'UserType[]'
   */
  export type ListEnumUserTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserType[]'>
    


  /**
   * Reference to a field of type 'ApprovalStatus'
   */
  export type EnumApprovalStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ApprovalStatus'>
    


  /**
   * Reference to a field of type 'ApprovalStatus[]'
   */
  export type ListEnumApprovalStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ApprovalStatus[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'newsCategory'
   */
  export type EnumnewsCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'newsCategory'>
    


  /**
   * Reference to a field of type 'newsCategory[]'
   */
  export type ListEnumnewsCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'newsCategory[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'newsArticleStatus'
   */
  export type EnumnewsArticleStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'newsArticleStatus'>
    


  /**
   * Reference to a field of type 'newsArticleStatus[]'
   */
  export type ListEnumnewsArticleStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'newsArticleStatus[]'>
    


  /**
   * Reference to a field of type 'AdvertisedCategory'
   */
  export type EnumAdvertisedCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AdvertisedCategory'>
    


  /**
   * Reference to a field of type 'AdvertisedCategory[]'
   */
  export type ListEnumAdvertisedCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AdvertisedCategory[]'>
    


  /**
   * Reference to a field of type 'advertiseStatus'
   */
  export type EnumadvertiseStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'advertiseStatus'>
    


  /**
   * Reference to a field of type 'advertiseStatus[]'
   */
  export type ListEnumadvertiseStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'advertiseStatus[]'>
    


  /**
   * Reference to a field of type 'vedioStatus'
   */
  export type EnumvedioStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'vedioStatus'>
    


  /**
   * Reference to a field of type 'vedioStatus[]'
   */
  export type ListEnumvedioStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'vedioStatus[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    email?: StringFilter<"User"> | string
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    image?: StringNullableFilter<"User"> | string | null
    userType?: EnumUserTypeNullableFilter<"User"> | $Enums.UserType | null
    approvalStatus?: EnumApprovalStatusNullableFilter<"User"> | $Enums.ApprovalStatus | null
    onboardingCompleted?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    accounts?: AccountListRelationFilter
    sessions?: SessionListRelationFilter
    newsReporter?: XOR<NewsReporterNullableScalarRelationFilter, newsReporterWhereInput> | null
    Advertiser?: XOR<AdvertiserNullableScalarRelationFilter, AdvertiserWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrder
    emailVerified?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    userType?: SortOrderInput | SortOrder
    approvalStatus?: SortOrderInput | SortOrder
    onboardingCompleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    accounts?: AccountOrderByRelationAggregateInput
    sessions?: SessionOrderByRelationAggregateInput
    newsReporter?: newsReporterOrderByWithRelationInput
    Advertiser?: AdvertiserOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    image?: StringNullableFilter<"User"> | string | null
    userType?: EnumUserTypeNullableFilter<"User"> | $Enums.UserType | null
    approvalStatus?: EnumApprovalStatusNullableFilter<"User"> | $Enums.ApprovalStatus | null
    onboardingCompleted?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    accounts?: AccountListRelationFilter
    sessions?: SessionListRelationFilter
    newsReporter?: XOR<NewsReporterNullableScalarRelationFilter, newsReporterWhereInput> | null
    Advertiser?: XOR<AdvertiserNullableScalarRelationFilter, AdvertiserWhereInput> | null
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrder
    emailVerified?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    userType?: SortOrderInput | SortOrder
    approvalStatus?: SortOrderInput | SortOrder
    onboardingCompleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringWithAggregatesFilter<"User"> | string
    emailVerified?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    image?: StringNullableWithAggregatesFilter<"User"> | string | null
    userType?: EnumUserTypeNullableWithAggregatesFilter<"User"> | $Enums.UserType | null
    approvalStatus?: EnumApprovalStatusNullableWithAggregatesFilter<"User"> | $Enums.ApprovalStatus | null
    onboardingCompleted?: BoolWithAggregatesFilter<"User"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type newsReporterWhereInput = {
    AND?: newsReporterWhereInput | newsReporterWhereInput[]
    OR?: newsReporterWhereInput[]
    NOT?: newsReporterWhereInput | newsReporterWhereInput[]
    id?: StringFilter<"newsReporter"> | string
    reporterName?: StringNullableFilter<"newsReporter"> | string | null
    location?: StringFilter<"newsReporter"> | string
    bio?: StringFilter<"newsReporter"> | string
    profilePicture?: StringFilter<"newsReporter"> | string
    phoneNumber?: StringFilter<"newsReporter"> | string
    facebookProfileAddress?: StringNullableFilter<"newsReporter"> | string | null
    userId?: StringFilter<"newsReporter"> | string
    registered?: BoolFilter<"newsReporter"> | boolean
    createdAt?: DateTimeFilter<"newsReporter"> | Date | string
    updatedAt?: DateTimeFilter<"newsReporter"> | Date | string
    newsArticle?: NewsArticleListRelationFilter
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type newsReporterOrderByWithRelationInput = {
    id?: SortOrder
    reporterName?: SortOrderInput | SortOrder
    location?: SortOrder
    bio?: SortOrder
    profilePicture?: SortOrder
    phoneNumber?: SortOrder
    facebookProfileAddress?: SortOrderInput | SortOrder
    userId?: SortOrder
    registered?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    newsArticle?: newsArticleOrderByRelationAggregateInput
    user?: UserOrderByWithRelationInput
  }

  export type newsReporterWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: newsReporterWhereInput | newsReporterWhereInput[]
    OR?: newsReporterWhereInput[]
    NOT?: newsReporterWhereInput | newsReporterWhereInput[]
    reporterName?: StringNullableFilter<"newsReporter"> | string | null
    location?: StringFilter<"newsReporter"> | string
    bio?: StringFilter<"newsReporter"> | string
    profilePicture?: StringFilter<"newsReporter"> | string
    phoneNumber?: StringFilter<"newsReporter"> | string
    facebookProfileAddress?: StringNullableFilter<"newsReporter"> | string | null
    registered?: BoolFilter<"newsReporter"> | boolean
    createdAt?: DateTimeFilter<"newsReporter"> | Date | string
    updatedAt?: DateTimeFilter<"newsReporter"> | Date | string
    newsArticle?: NewsArticleListRelationFilter
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type newsReporterOrderByWithAggregationInput = {
    id?: SortOrder
    reporterName?: SortOrderInput | SortOrder
    location?: SortOrder
    bio?: SortOrder
    profilePicture?: SortOrder
    phoneNumber?: SortOrder
    facebookProfileAddress?: SortOrderInput | SortOrder
    userId?: SortOrder
    registered?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: newsReporterCountOrderByAggregateInput
    _max?: newsReporterMaxOrderByAggregateInput
    _min?: newsReporterMinOrderByAggregateInput
  }

  export type newsReporterScalarWhereWithAggregatesInput = {
    AND?: newsReporterScalarWhereWithAggregatesInput | newsReporterScalarWhereWithAggregatesInput[]
    OR?: newsReporterScalarWhereWithAggregatesInput[]
    NOT?: newsReporterScalarWhereWithAggregatesInput | newsReporterScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"newsReporter"> | string
    reporterName?: StringNullableWithAggregatesFilter<"newsReporter"> | string | null
    location?: StringWithAggregatesFilter<"newsReporter"> | string
    bio?: StringWithAggregatesFilter<"newsReporter"> | string
    profilePicture?: StringWithAggregatesFilter<"newsReporter"> | string
    phoneNumber?: StringWithAggregatesFilter<"newsReporter"> | string
    facebookProfileAddress?: StringNullableWithAggregatesFilter<"newsReporter"> | string | null
    userId?: StringWithAggregatesFilter<"newsReporter"> | string
    registered?: BoolWithAggregatesFilter<"newsReporter"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"newsReporter"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"newsReporter"> | Date | string
  }

  export type AdvertiserWhereInput = {
    AND?: AdvertiserWhereInput | AdvertiserWhereInput[]
    OR?: AdvertiserWhereInput[]
    NOT?: AdvertiserWhereInput | AdvertiserWhereInput[]
    id?: StringFilter<"Advertiser"> | string
    supervisorName?: StringFilter<"Advertiser"> | string
    companyName?: StringFilter<"Advertiser"> | string
    companyAddress?: StringFilter<"Advertiser"> | string
    phoneNumber?: StringFilter<"Advertiser"> | string
    aboutCompany?: StringFilter<"Advertiser"> | string
    companyWebsite?: StringNullableFilter<"Advertiser"> | string | null
    userId?: StringFilter<"Advertiser"> | string
    registered?: BoolFilter<"Advertiser"> | boolean
    createdAt?: DateTimeFilter<"Advertiser"> | Date | string
    updatedAt?: DateTimeFilter<"Advertiser"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AdvertiserOrderByWithRelationInput = {
    id?: SortOrder
    supervisorName?: SortOrder
    companyName?: SortOrder
    companyAddress?: SortOrder
    phoneNumber?: SortOrder
    aboutCompany?: SortOrder
    companyWebsite?: SortOrderInput | SortOrder
    userId?: SortOrder
    registered?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AdvertiserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: AdvertiserWhereInput | AdvertiserWhereInput[]
    OR?: AdvertiserWhereInput[]
    NOT?: AdvertiserWhereInput | AdvertiserWhereInput[]
    supervisorName?: StringFilter<"Advertiser"> | string
    companyName?: StringFilter<"Advertiser"> | string
    companyAddress?: StringFilter<"Advertiser"> | string
    phoneNumber?: StringFilter<"Advertiser"> | string
    aboutCompany?: StringFilter<"Advertiser"> | string
    companyWebsite?: StringNullableFilter<"Advertiser"> | string | null
    registered?: BoolFilter<"Advertiser"> | boolean
    createdAt?: DateTimeFilter<"Advertiser"> | Date | string
    updatedAt?: DateTimeFilter<"Advertiser"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type AdvertiserOrderByWithAggregationInput = {
    id?: SortOrder
    supervisorName?: SortOrder
    companyName?: SortOrder
    companyAddress?: SortOrder
    phoneNumber?: SortOrder
    aboutCompany?: SortOrder
    companyWebsite?: SortOrderInput | SortOrder
    userId?: SortOrder
    registered?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AdvertiserCountOrderByAggregateInput
    _max?: AdvertiserMaxOrderByAggregateInput
    _min?: AdvertiserMinOrderByAggregateInput
  }

  export type AdvertiserScalarWhereWithAggregatesInput = {
    AND?: AdvertiserScalarWhereWithAggregatesInput | AdvertiserScalarWhereWithAggregatesInput[]
    OR?: AdvertiserScalarWhereWithAggregatesInput[]
    NOT?: AdvertiserScalarWhereWithAggregatesInput | AdvertiserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Advertiser"> | string
    supervisorName?: StringWithAggregatesFilter<"Advertiser"> | string
    companyName?: StringWithAggregatesFilter<"Advertiser"> | string
    companyAddress?: StringWithAggregatesFilter<"Advertiser"> | string
    phoneNumber?: StringWithAggregatesFilter<"Advertiser"> | string
    aboutCompany?: StringWithAggregatesFilter<"Advertiser"> | string
    companyWebsite?: StringNullableWithAggregatesFilter<"Advertiser"> | string | null
    userId?: StringWithAggregatesFilter<"Advertiser"> | string
    registered?: BoolWithAggregatesFilter<"Advertiser"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Advertiser"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Advertiser"> | Date | string
  }

  export type newsArticleWhereInput = {
    AND?: newsArticleWhereInput | newsArticleWhereInput[]
    OR?: newsArticleWhereInput[]
    NOT?: newsArticleWhereInput | newsArticleWhereInput[]
    id?: StringFilter<"newsArticle"> | string
    newsHeading?: StringFilter<"newsArticle"> | string
    newsResource?: StringFilter<"newsArticle"> | string
    newsLocation?: StringNullableFilter<"newsArticle"> | string | null
    newsCategory?: EnumnewsCategoryFilter<"newsArticle"> | $Enums.newsCategory
    newsPicture?: StringFilter<"newsArticle"> | string
    newsPictureHeading?: StringFilter<"newsArticle"> | string
    newsPictureCredit?: StringFilter<"newsArticle"> | string
    isFeatured?: BoolFilter<"newsArticle"> | boolean
    newsDetails?: StringFilter<"newsArticle"> | string
    reporterId?: StringFilter<"newsArticle"> | string
    duration?: IntNullableFilter<"newsArticle"> | number | null
    newsArticleStatus?: EnumnewsArticleStatusFilter<"newsArticle"> | $Enums.newsArticleStatus
    createdAt?: DateTimeFilter<"newsArticle"> | Date | string
    updatedAt?: DateTimeFilter<"newsArticle"> | Date | string
    quotes?: QuoteListRelationFilter
    newsReporter?: XOR<NewsReporterScalarRelationFilter, newsReporterWhereInput>
  }

  export type newsArticleOrderByWithRelationInput = {
    id?: SortOrder
    newsHeading?: SortOrder
    newsResource?: SortOrder
    newsLocation?: SortOrderInput | SortOrder
    newsCategory?: SortOrder
    newsPicture?: SortOrder
    newsPictureHeading?: SortOrder
    newsPictureCredit?: SortOrder
    isFeatured?: SortOrder
    newsDetails?: SortOrder
    reporterId?: SortOrder
    duration?: SortOrderInput | SortOrder
    newsArticleStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    quotes?: quoteOrderByRelationAggregateInput
    newsReporter?: newsReporterOrderByWithRelationInput
  }

  export type newsArticleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: newsArticleWhereInput | newsArticleWhereInput[]
    OR?: newsArticleWhereInput[]
    NOT?: newsArticleWhereInput | newsArticleWhereInput[]
    newsHeading?: StringFilter<"newsArticle"> | string
    newsResource?: StringFilter<"newsArticle"> | string
    newsLocation?: StringNullableFilter<"newsArticle"> | string | null
    newsCategory?: EnumnewsCategoryFilter<"newsArticle"> | $Enums.newsCategory
    newsPicture?: StringFilter<"newsArticle"> | string
    newsPictureHeading?: StringFilter<"newsArticle"> | string
    newsPictureCredit?: StringFilter<"newsArticle"> | string
    isFeatured?: BoolFilter<"newsArticle"> | boolean
    newsDetails?: StringFilter<"newsArticle"> | string
    reporterId?: StringFilter<"newsArticle"> | string
    duration?: IntNullableFilter<"newsArticle"> | number | null
    newsArticleStatus?: EnumnewsArticleStatusFilter<"newsArticle"> | $Enums.newsArticleStatus
    createdAt?: DateTimeFilter<"newsArticle"> | Date | string
    updatedAt?: DateTimeFilter<"newsArticle"> | Date | string
    quotes?: QuoteListRelationFilter
    newsReporter?: XOR<NewsReporterScalarRelationFilter, newsReporterWhereInput>
  }, "id">

  export type newsArticleOrderByWithAggregationInput = {
    id?: SortOrder
    newsHeading?: SortOrder
    newsResource?: SortOrder
    newsLocation?: SortOrderInput | SortOrder
    newsCategory?: SortOrder
    newsPicture?: SortOrder
    newsPictureHeading?: SortOrder
    newsPictureCredit?: SortOrder
    isFeatured?: SortOrder
    newsDetails?: SortOrder
    reporterId?: SortOrder
    duration?: SortOrderInput | SortOrder
    newsArticleStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: newsArticleCountOrderByAggregateInput
    _avg?: newsArticleAvgOrderByAggregateInput
    _max?: newsArticleMaxOrderByAggregateInput
    _min?: newsArticleMinOrderByAggregateInput
    _sum?: newsArticleSumOrderByAggregateInput
  }

  export type newsArticleScalarWhereWithAggregatesInput = {
    AND?: newsArticleScalarWhereWithAggregatesInput | newsArticleScalarWhereWithAggregatesInput[]
    OR?: newsArticleScalarWhereWithAggregatesInput[]
    NOT?: newsArticleScalarWhereWithAggregatesInput | newsArticleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"newsArticle"> | string
    newsHeading?: StringWithAggregatesFilter<"newsArticle"> | string
    newsResource?: StringWithAggregatesFilter<"newsArticle"> | string
    newsLocation?: StringNullableWithAggregatesFilter<"newsArticle"> | string | null
    newsCategory?: EnumnewsCategoryWithAggregatesFilter<"newsArticle"> | $Enums.newsCategory
    newsPicture?: StringWithAggregatesFilter<"newsArticle"> | string
    newsPictureHeading?: StringWithAggregatesFilter<"newsArticle"> | string
    newsPictureCredit?: StringWithAggregatesFilter<"newsArticle"> | string
    isFeatured?: BoolWithAggregatesFilter<"newsArticle"> | boolean
    newsDetails?: StringWithAggregatesFilter<"newsArticle"> | string
    reporterId?: StringWithAggregatesFilter<"newsArticle"> | string
    duration?: IntNullableWithAggregatesFilter<"newsArticle"> | number | null
    newsArticleStatus?: EnumnewsArticleStatusWithAggregatesFilter<"newsArticle"> | $Enums.newsArticleStatus
    createdAt?: DateTimeWithAggregatesFilter<"newsArticle"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"newsArticle"> | Date | string
  }

  export type quoteWhereInput = {
    AND?: quoteWhereInput | quoteWhereInput[]
    OR?: quoteWhereInput[]
    NOT?: quoteWhereInput | quoteWhereInput[]
    id?: StringFilter<"quote"> | string
    text?: StringFilter<"quote"> | string
    speakerInfo?: StringFilter<"quote"> | string
    articleId?: StringFilter<"quote"> | string
    createdAt?: DateTimeFilter<"quote"> | Date | string
    article?: XOR<NewsArticleScalarRelationFilter, newsArticleWhereInput>
  }

  export type quoteOrderByWithRelationInput = {
    id?: SortOrder
    text?: SortOrder
    speakerInfo?: SortOrder
    articleId?: SortOrder
    createdAt?: SortOrder
    article?: newsArticleOrderByWithRelationInput
  }

  export type quoteWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: quoteWhereInput | quoteWhereInput[]
    OR?: quoteWhereInput[]
    NOT?: quoteWhereInput | quoteWhereInput[]
    text?: StringFilter<"quote"> | string
    speakerInfo?: StringFilter<"quote"> | string
    articleId?: StringFilter<"quote"> | string
    createdAt?: DateTimeFilter<"quote"> | Date | string
    article?: XOR<NewsArticleScalarRelationFilter, newsArticleWhereInput>
  }, "id">

  export type quoteOrderByWithAggregationInput = {
    id?: SortOrder
    text?: SortOrder
    speakerInfo?: SortOrder
    articleId?: SortOrder
    createdAt?: SortOrder
    _count?: quoteCountOrderByAggregateInput
    _max?: quoteMaxOrderByAggregateInput
    _min?: quoteMinOrderByAggregateInput
  }

  export type quoteScalarWhereWithAggregatesInput = {
    AND?: quoteScalarWhereWithAggregatesInput | quoteScalarWhereWithAggregatesInput[]
    OR?: quoteScalarWhereWithAggregatesInput[]
    NOT?: quoteScalarWhereWithAggregatesInput | quoteScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"quote"> | string
    text?: StringWithAggregatesFilter<"quote"> | string
    speakerInfo?: StringWithAggregatesFilter<"quote"> | string
    articleId?: StringWithAggregatesFilter<"quote"> | string
    createdAt?: DateTimeWithAggregatesFilter<"quote"> | Date | string
  }

  export type AdvertisementWhereInput = {
    AND?: AdvertisementWhereInput | AdvertisementWhereInput[]
    OR?: AdvertisementWhereInput[]
    NOT?: AdvertisementWhereInput | AdvertisementWhereInput[]
    id?: StringFilter<"Advertisement"> | string
    companyName?: StringFilter<"Advertisement"> | string
    companyaddress?: StringFilter<"Advertisement"> | string
    supervisedName?: StringFilter<"Advertisement"> | string
    advertisedCategory?: EnumAdvertisedCategoryFilter<"Advertisement"> | $Enums.AdvertisedCategory
    websiteLink?: StringFilter<"Advertisement"> | string
    additionalInfo?: StringFilter<"Advertisement"> | string
    advertiseBanner?: StringFilter<"Advertisement"> | string
    isFeatured?: BoolFilter<"Advertisement"> | boolean
    endDate?: StringFilter<"Advertisement"> | string
    startDate?: StringFilter<"Advertisement"> | string
    supervisedPhonenumber?: StringFilter<"Advertisement"> | string
    advertiseduration?: IntNullableFilter<"Advertisement"> | number | null
    advertiseStatus?: EnumadvertiseStatusFilter<"Advertisement"> | $Enums.advertiseStatus
    createdAt?: DateTimeFilter<"Advertisement"> | Date | string
    updatedAt?: DateTimeFilter<"Advertisement"> | Date | string
  }

  export type AdvertisementOrderByWithRelationInput = {
    id?: SortOrder
    companyName?: SortOrder
    companyaddress?: SortOrder
    supervisedName?: SortOrder
    advertisedCategory?: SortOrder
    websiteLink?: SortOrder
    additionalInfo?: SortOrder
    advertiseBanner?: SortOrder
    isFeatured?: SortOrder
    endDate?: SortOrder
    startDate?: SortOrder
    supervisedPhonenumber?: SortOrder
    advertiseduration?: SortOrderInput | SortOrder
    advertiseStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdvertisementWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AdvertisementWhereInput | AdvertisementWhereInput[]
    OR?: AdvertisementWhereInput[]
    NOT?: AdvertisementWhereInput | AdvertisementWhereInput[]
    companyName?: StringFilter<"Advertisement"> | string
    companyaddress?: StringFilter<"Advertisement"> | string
    supervisedName?: StringFilter<"Advertisement"> | string
    advertisedCategory?: EnumAdvertisedCategoryFilter<"Advertisement"> | $Enums.AdvertisedCategory
    websiteLink?: StringFilter<"Advertisement"> | string
    additionalInfo?: StringFilter<"Advertisement"> | string
    advertiseBanner?: StringFilter<"Advertisement"> | string
    isFeatured?: BoolFilter<"Advertisement"> | boolean
    endDate?: StringFilter<"Advertisement"> | string
    startDate?: StringFilter<"Advertisement"> | string
    supervisedPhonenumber?: StringFilter<"Advertisement"> | string
    advertiseduration?: IntNullableFilter<"Advertisement"> | number | null
    advertiseStatus?: EnumadvertiseStatusFilter<"Advertisement"> | $Enums.advertiseStatus
    createdAt?: DateTimeFilter<"Advertisement"> | Date | string
    updatedAt?: DateTimeFilter<"Advertisement"> | Date | string
  }, "id">

  export type AdvertisementOrderByWithAggregationInput = {
    id?: SortOrder
    companyName?: SortOrder
    companyaddress?: SortOrder
    supervisedName?: SortOrder
    advertisedCategory?: SortOrder
    websiteLink?: SortOrder
    additionalInfo?: SortOrder
    advertiseBanner?: SortOrder
    isFeatured?: SortOrder
    endDate?: SortOrder
    startDate?: SortOrder
    supervisedPhonenumber?: SortOrder
    advertiseduration?: SortOrderInput | SortOrder
    advertiseStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AdvertisementCountOrderByAggregateInput
    _avg?: AdvertisementAvgOrderByAggregateInput
    _max?: AdvertisementMaxOrderByAggregateInput
    _min?: AdvertisementMinOrderByAggregateInput
    _sum?: AdvertisementSumOrderByAggregateInput
  }

  export type AdvertisementScalarWhereWithAggregatesInput = {
    AND?: AdvertisementScalarWhereWithAggregatesInput | AdvertisementScalarWhereWithAggregatesInput[]
    OR?: AdvertisementScalarWhereWithAggregatesInput[]
    NOT?: AdvertisementScalarWhereWithAggregatesInput | AdvertisementScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Advertisement"> | string
    companyName?: StringWithAggregatesFilter<"Advertisement"> | string
    companyaddress?: StringWithAggregatesFilter<"Advertisement"> | string
    supervisedName?: StringWithAggregatesFilter<"Advertisement"> | string
    advertisedCategory?: EnumAdvertisedCategoryWithAggregatesFilter<"Advertisement"> | $Enums.AdvertisedCategory
    websiteLink?: StringWithAggregatesFilter<"Advertisement"> | string
    additionalInfo?: StringWithAggregatesFilter<"Advertisement"> | string
    advertiseBanner?: StringWithAggregatesFilter<"Advertisement"> | string
    isFeatured?: BoolWithAggregatesFilter<"Advertisement"> | boolean
    endDate?: StringWithAggregatesFilter<"Advertisement"> | string
    startDate?: StringWithAggregatesFilter<"Advertisement"> | string
    supervisedPhonenumber?: StringWithAggregatesFilter<"Advertisement"> | string
    advertiseduration?: IntNullableWithAggregatesFilter<"Advertisement"> | number | null
    advertiseStatus?: EnumadvertiseStatusWithAggregatesFilter<"Advertisement"> | $Enums.advertiseStatus
    createdAt?: DateTimeWithAggregatesFilter<"Advertisement"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Advertisement"> | Date | string
  }

  export type OpinionWhereInput = {
    AND?: OpinionWhereInput | OpinionWhereInput[]
    OR?: OpinionWhereInput[]
    NOT?: OpinionWhereInput | OpinionWhereInput[]
    id?: StringFilter<"Opinion"> | string
    name?: StringFilter<"Opinion"> | string
    email?: StringNullableFilter<"Opinion"> | string | null
    phone?: StringNullableFilter<"Opinion"> | string | null
    opinion?: StringFilter<"Opinion"> | string
    createdAt?: DateTimeFilter<"Opinion"> | Date | string
    updatedAt?: DateTimeFilter<"Opinion"> | Date | string
  }

  export type OpinionOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    opinion?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OpinionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OpinionWhereInput | OpinionWhereInput[]
    OR?: OpinionWhereInput[]
    NOT?: OpinionWhereInput | OpinionWhereInput[]
    name?: StringFilter<"Opinion"> | string
    email?: StringNullableFilter<"Opinion"> | string | null
    phone?: StringNullableFilter<"Opinion"> | string | null
    opinion?: StringFilter<"Opinion"> | string
    createdAt?: DateTimeFilter<"Opinion"> | Date | string
    updatedAt?: DateTimeFilter<"Opinion"> | Date | string
  }, "id">

  export type OpinionOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    opinion?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: OpinionCountOrderByAggregateInput
    _max?: OpinionMaxOrderByAggregateInput
    _min?: OpinionMinOrderByAggregateInput
  }

  export type OpinionScalarWhereWithAggregatesInput = {
    AND?: OpinionScalarWhereWithAggregatesInput | OpinionScalarWhereWithAggregatesInput[]
    OR?: OpinionScalarWhereWithAggregatesInput[]
    NOT?: OpinionScalarWhereWithAggregatesInput | OpinionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Opinion"> | string
    name?: StringWithAggregatesFilter<"Opinion"> | string
    email?: StringNullableWithAggregatesFilter<"Opinion"> | string | null
    phone?: StringNullableWithAggregatesFilter<"Opinion"> | string | null
    opinion?: StringWithAggregatesFilter<"Opinion"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Opinion"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Opinion"> | Date | string
  }

  export type AccountWhereInput = {
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AccountOrderByWithRelationInput = {
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrderInput | SortOrder
    access_token?: SortOrderInput | SortOrder
    expires_at?: SortOrderInput | SortOrder
    token_type?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    id_token?: SortOrderInput | SortOrder
    session_state?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AccountWhereUniqueInput = Prisma.AtLeast<{
    provider_providerAccountId?: AccountProviderProviderAccountIdCompoundUniqueInput
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "provider_providerAccountId">

  export type AccountOrderByWithAggregationInput = {
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrderInput | SortOrder
    access_token?: SortOrderInput | SortOrder
    expires_at?: SortOrderInput | SortOrder
    token_type?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    id_token?: SortOrderInput | SortOrder
    session_state?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AccountCountOrderByAggregateInput
    _avg?: AccountAvgOrderByAggregateInput
    _max?: AccountMaxOrderByAggregateInput
    _min?: AccountMinOrderByAggregateInput
    _sum?: AccountSumOrderByAggregateInput
  }

  export type AccountScalarWhereWithAggregatesInput = {
    AND?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    OR?: AccountScalarWhereWithAggregatesInput[]
    NOT?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    userId?: StringWithAggregatesFilter<"Account"> | string
    type?: StringWithAggregatesFilter<"Account"> | string
    provider?: StringWithAggregatesFilter<"Account"> | string
    providerAccountId?: StringWithAggregatesFilter<"Account"> | string
    refresh_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    access_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    expires_at?: IntNullableWithAggregatesFilter<"Account"> | number | null
    token_type?: StringNullableWithAggregatesFilter<"Account"> | string | null
    scope?: StringNullableWithAggregatesFilter<"Account"> | string | null
    id_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    session_state?: StringNullableWithAggregatesFilter<"Account"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Account"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Account"> | Date | string
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    sessionToken?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SessionOrderByWithRelationInput = {
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    sessionToken?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "sessionToken">

  export type SessionOrderByWithAggregationInput = {
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    sessionToken?: StringWithAggregatesFilter<"Session"> | string
    userId?: StringWithAggregatesFilter<"Session"> | string
    expires?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
  }

  export type VerificationTokenWhereInput = {
    AND?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    OR?: VerificationTokenWhereInput[]
    NOT?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    identifier?: StringFilter<"VerificationToken"> | string
    token?: StringFilter<"VerificationToken"> | string
    expires?: DateTimeFilter<"VerificationToken"> | Date | string
  }

  export type VerificationTokenOrderByWithRelationInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenWhereUniqueInput = Prisma.AtLeast<{
    identifier_token?: VerificationTokenIdentifierTokenCompoundUniqueInput
    AND?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    OR?: VerificationTokenWhereInput[]
    NOT?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    identifier?: StringFilter<"VerificationToken"> | string
    token?: StringFilter<"VerificationToken"> | string
    expires?: DateTimeFilter<"VerificationToken"> | Date | string
  }, "identifier_token">

  export type VerificationTokenOrderByWithAggregationInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
    _count?: VerificationTokenCountOrderByAggregateInput
    _max?: VerificationTokenMaxOrderByAggregateInput
    _min?: VerificationTokenMinOrderByAggregateInput
  }

  export type VerificationTokenScalarWhereWithAggregatesInput = {
    AND?: VerificationTokenScalarWhereWithAggregatesInput | VerificationTokenScalarWhereWithAggregatesInput[]
    OR?: VerificationTokenScalarWhereWithAggregatesInput[]
    NOT?: VerificationTokenScalarWhereWithAggregatesInput | VerificationTokenScalarWhereWithAggregatesInput[]
    identifier?: StringWithAggregatesFilter<"VerificationToken"> | string
    token?: StringWithAggregatesFilter<"VerificationToken"> | string
    expires?: DateTimeWithAggregatesFilter<"VerificationToken"> | Date | string
  }

  export type AdvertiseRequestWhereInput = {
    AND?: AdvertiseRequestWhereInput | AdvertiseRequestWhereInput[]
    OR?: AdvertiseRequestWhereInput[]
    NOT?: AdvertiseRequestWhereInput | AdvertiseRequestWhereInput[]
    id?: StringFilter<"AdvertiseRequest"> | string
    name?: StringFilter<"AdvertiseRequest"> | string
    email?: StringFilter<"AdvertiseRequest"> | string
    companyName?: StringFilter<"AdvertiseRequest"> | string
    companyWebsite?: StringFilter<"AdvertiseRequest"> | string
    phoneNumber?: StringFilter<"AdvertiseRequest"> | string
    message?: StringFilter<"AdvertiseRequest"> | string
    createdAt?: DateTimeFilter<"AdvertiseRequest"> | Date | string
    updatedAt?: DateTimeFilter<"AdvertiseRequest"> | Date | string
  }

  export type AdvertiseRequestOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    companyName?: SortOrder
    companyWebsite?: SortOrder
    phoneNumber?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdvertiseRequestWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AdvertiseRequestWhereInput | AdvertiseRequestWhereInput[]
    OR?: AdvertiseRequestWhereInput[]
    NOT?: AdvertiseRequestWhereInput | AdvertiseRequestWhereInput[]
    name?: StringFilter<"AdvertiseRequest"> | string
    email?: StringFilter<"AdvertiseRequest"> | string
    companyName?: StringFilter<"AdvertiseRequest"> | string
    companyWebsite?: StringFilter<"AdvertiseRequest"> | string
    phoneNumber?: StringFilter<"AdvertiseRequest"> | string
    message?: StringFilter<"AdvertiseRequest"> | string
    createdAt?: DateTimeFilter<"AdvertiseRequest"> | Date | string
    updatedAt?: DateTimeFilter<"AdvertiseRequest"> | Date | string
  }, "id">

  export type AdvertiseRequestOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    companyName?: SortOrder
    companyWebsite?: SortOrder
    phoneNumber?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AdvertiseRequestCountOrderByAggregateInput
    _max?: AdvertiseRequestMaxOrderByAggregateInput
    _min?: AdvertiseRequestMinOrderByAggregateInput
  }

  export type AdvertiseRequestScalarWhereWithAggregatesInput = {
    AND?: AdvertiseRequestScalarWhereWithAggregatesInput | AdvertiseRequestScalarWhereWithAggregatesInput[]
    OR?: AdvertiseRequestScalarWhereWithAggregatesInput[]
    NOT?: AdvertiseRequestScalarWhereWithAggregatesInput | AdvertiseRequestScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AdvertiseRequest"> | string
    name?: StringWithAggregatesFilter<"AdvertiseRequest"> | string
    email?: StringWithAggregatesFilter<"AdvertiseRequest"> | string
    companyName?: StringWithAggregatesFilter<"AdvertiseRequest"> | string
    companyWebsite?: StringWithAggregatesFilter<"AdvertiseRequest"> | string
    phoneNumber?: StringWithAggregatesFilter<"AdvertiseRequest"> | string
    message?: StringWithAggregatesFilter<"AdvertiseRequest"> | string
    createdAt?: DateTimeWithAggregatesFilter<"AdvertiseRequest"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"AdvertiseRequest"> | Date | string
  }

  export type VideopostWhereInput = {
    AND?: VideopostWhereInput | VideopostWhereInput[]
    OR?: VideopostWhereInput[]
    NOT?: VideopostWhereInput | VideopostWhereInput[]
    id?: StringFilter<"Videopost"> | string
    videoAbout?: StringFilter<"Videopost"> | string
    videoHeadings?: StringFilter<"Videopost"> | string
    videoLink?: StringFilter<"Videopost"> | string
    isFeatured?: BoolFilter<"Videopost"> | boolean
    startDate?: StringFilter<"Videopost"> | string
    vedioStatus?: EnumvedioStatusFilter<"Videopost"> | $Enums.vedioStatus
    createdAt?: DateTimeFilter<"Videopost"> | Date | string
    updatedAt?: DateTimeFilter<"Videopost"> | Date | string
  }

  export type VideopostOrderByWithRelationInput = {
    id?: SortOrder
    videoAbout?: SortOrder
    videoHeadings?: SortOrder
    videoLink?: SortOrder
    isFeatured?: SortOrder
    startDate?: SortOrder
    vedioStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VideopostWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: VideopostWhereInput | VideopostWhereInput[]
    OR?: VideopostWhereInput[]
    NOT?: VideopostWhereInput | VideopostWhereInput[]
    videoAbout?: StringFilter<"Videopost"> | string
    videoHeadings?: StringFilter<"Videopost"> | string
    videoLink?: StringFilter<"Videopost"> | string
    isFeatured?: BoolFilter<"Videopost"> | boolean
    startDate?: StringFilter<"Videopost"> | string
    vedioStatus?: EnumvedioStatusFilter<"Videopost"> | $Enums.vedioStatus
    createdAt?: DateTimeFilter<"Videopost"> | Date | string
    updatedAt?: DateTimeFilter<"Videopost"> | Date | string
  }, "id">

  export type VideopostOrderByWithAggregationInput = {
    id?: SortOrder
    videoAbout?: SortOrder
    videoHeadings?: SortOrder
    videoLink?: SortOrder
    isFeatured?: SortOrder
    startDate?: SortOrder
    vedioStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: VideopostCountOrderByAggregateInput
    _max?: VideopostMaxOrderByAggregateInput
    _min?: VideopostMinOrderByAggregateInput
  }

  export type VideopostScalarWhereWithAggregatesInput = {
    AND?: VideopostScalarWhereWithAggregatesInput | VideopostScalarWhereWithAggregatesInput[]
    OR?: VideopostScalarWhereWithAggregatesInput[]
    NOT?: VideopostScalarWhereWithAggregatesInput | VideopostScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Videopost"> | string
    videoAbout?: StringWithAggregatesFilter<"Videopost"> | string
    videoHeadings?: StringWithAggregatesFilter<"Videopost"> | string
    videoLink?: StringWithAggregatesFilter<"Videopost"> | string
    isFeatured?: BoolWithAggregatesFilter<"Videopost"> | boolean
    startDate?: StringWithAggregatesFilter<"Videopost"> | string
    vedioStatus?: EnumvedioStatusWithAggregatesFilter<"Videopost"> | $Enums.vedioStatus
    createdAt?: DateTimeWithAggregatesFilter<"Videopost"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Videopost"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    userType?: $Enums.UserType | null
    approvalStatus?: $Enums.ApprovalStatus | null
    onboardingCompleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    newsReporter?: newsReporterCreateNestedOneWithoutUserInput
    Advertiser?: AdvertiserCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    userType?: $Enums.UserType | null
    approvalStatus?: $Enums.ApprovalStatus | null
    onboardingCompleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    newsReporter?: newsReporterUncheckedCreateNestedOneWithoutUserInput
    Advertiser?: AdvertiserUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    userType?: NullableEnumUserTypeFieldUpdateOperationsInput | $Enums.UserType | null
    approvalStatus?: NullableEnumApprovalStatusFieldUpdateOperationsInput | $Enums.ApprovalStatus | null
    onboardingCompleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    newsReporter?: newsReporterUpdateOneWithoutUserNestedInput
    Advertiser?: AdvertiserUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    userType?: NullableEnumUserTypeFieldUpdateOperationsInput | $Enums.UserType | null
    approvalStatus?: NullableEnumApprovalStatusFieldUpdateOperationsInput | $Enums.ApprovalStatus | null
    onboardingCompleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    newsReporter?: newsReporterUncheckedUpdateOneWithoutUserNestedInput
    Advertiser?: AdvertiserUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    userType?: $Enums.UserType | null
    approvalStatus?: $Enums.ApprovalStatus | null
    onboardingCompleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    userType?: NullableEnumUserTypeFieldUpdateOperationsInput | $Enums.UserType | null
    approvalStatus?: NullableEnumApprovalStatusFieldUpdateOperationsInput | $Enums.ApprovalStatus | null
    onboardingCompleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    userType?: NullableEnumUserTypeFieldUpdateOperationsInput | $Enums.UserType | null
    approvalStatus?: NullableEnumApprovalStatusFieldUpdateOperationsInput | $Enums.ApprovalStatus | null
    onboardingCompleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type newsReporterCreateInput = {
    id?: string
    reporterName?: string | null
    location: string
    bio: string
    profilePicture: string
    phoneNumber: string
    facebookProfileAddress?: string | null
    registered?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    newsArticle?: newsArticleCreateNestedManyWithoutNewsReporterInput
    user: UserCreateNestedOneWithoutNewsReporterInput
  }

  export type newsReporterUncheckedCreateInput = {
    id?: string
    reporterName?: string | null
    location: string
    bio: string
    profilePicture: string
    phoneNumber: string
    facebookProfileAddress?: string | null
    userId: string
    registered?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    newsArticle?: newsArticleUncheckedCreateNestedManyWithoutNewsReporterInput
  }

  export type newsReporterUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    reporterName?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    profilePicture?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    facebookProfileAddress?: NullableStringFieldUpdateOperationsInput | string | null
    registered?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    newsArticle?: newsArticleUpdateManyWithoutNewsReporterNestedInput
    user?: UserUpdateOneRequiredWithoutNewsReporterNestedInput
  }

  export type newsReporterUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    reporterName?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    profilePicture?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    facebookProfileAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    registered?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    newsArticle?: newsArticleUncheckedUpdateManyWithoutNewsReporterNestedInput
  }

  export type newsReporterCreateManyInput = {
    id?: string
    reporterName?: string | null
    location: string
    bio: string
    profilePicture: string
    phoneNumber: string
    facebookProfileAddress?: string | null
    userId: string
    registered?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type newsReporterUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    reporterName?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    profilePicture?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    facebookProfileAddress?: NullableStringFieldUpdateOperationsInput | string | null
    registered?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type newsReporterUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    reporterName?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    profilePicture?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    facebookProfileAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    registered?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdvertiserCreateInput = {
    id?: string
    supervisorName: string
    companyName: string
    companyAddress: string
    phoneNumber: string
    aboutCompany: string
    companyWebsite?: string | null
    registered?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutAdvertiserInput
  }

  export type AdvertiserUncheckedCreateInput = {
    id?: string
    supervisorName: string
    companyName: string
    companyAddress: string
    phoneNumber: string
    aboutCompany: string
    companyWebsite?: string | null
    userId: string
    registered?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdvertiserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    supervisorName?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    companyAddress?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    aboutCompany?: StringFieldUpdateOperationsInput | string
    companyWebsite?: NullableStringFieldUpdateOperationsInput | string | null
    registered?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAdvertiserNestedInput
  }

  export type AdvertiserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    supervisorName?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    companyAddress?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    aboutCompany?: StringFieldUpdateOperationsInput | string
    companyWebsite?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    registered?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdvertiserCreateManyInput = {
    id?: string
    supervisorName: string
    companyName: string
    companyAddress: string
    phoneNumber: string
    aboutCompany: string
    companyWebsite?: string | null
    userId: string
    registered?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdvertiserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    supervisorName?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    companyAddress?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    aboutCompany?: StringFieldUpdateOperationsInput | string
    companyWebsite?: NullableStringFieldUpdateOperationsInput | string | null
    registered?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdvertiserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    supervisorName?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    companyAddress?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    aboutCompany?: StringFieldUpdateOperationsInput | string
    companyWebsite?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    registered?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type newsArticleCreateInput = {
    id?: string
    newsHeading: string
    newsResource: string
    newsLocation?: string | null
    newsCategory: $Enums.newsCategory
    newsPicture: string
    newsPictureHeading: string
    newsPictureCredit: string
    isFeatured?: boolean
    newsDetails: string
    duration?: number | null
    newsArticleStatus?: $Enums.newsArticleStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    quotes?: quoteCreateNestedManyWithoutArticleInput
    newsReporter: newsReporterCreateNestedOneWithoutNewsArticleInput
  }

  export type newsArticleUncheckedCreateInput = {
    id?: string
    newsHeading: string
    newsResource: string
    newsLocation?: string | null
    newsCategory: $Enums.newsCategory
    newsPicture: string
    newsPictureHeading: string
    newsPictureCredit: string
    isFeatured?: boolean
    newsDetails: string
    reporterId: string
    duration?: number | null
    newsArticleStatus?: $Enums.newsArticleStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    quotes?: quoteUncheckedCreateNestedManyWithoutArticleInput
  }

  export type newsArticleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    newsHeading?: StringFieldUpdateOperationsInput | string
    newsResource?: StringFieldUpdateOperationsInput | string
    newsLocation?: NullableStringFieldUpdateOperationsInput | string | null
    newsCategory?: EnumnewsCategoryFieldUpdateOperationsInput | $Enums.newsCategory
    newsPicture?: StringFieldUpdateOperationsInput | string
    newsPictureHeading?: StringFieldUpdateOperationsInput | string
    newsPictureCredit?: StringFieldUpdateOperationsInput | string
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    newsDetails?: StringFieldUpdateOperationsInput | string
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    newsArticleStatus?: EnumnewsArticleStatusFieldUpdateOperationsInput | $Enums.newsArticleStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quotes?: quoteUpdateManyWithoutArticleNestedInput
    newsReporter?: newsReporterUpdateOneRequiredWithoutNewsArticleNestedInput
  }

  export type newsArticleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    newsHeading?: StringFieldUpdateOperationsInput | string
    newsResource?: StringFieldUpdateOperationsInput | string
    newsLocation?: NullableStringFieldUpdateOperationsInput | string | null
    newsCategory?: EnumnewsCategoryFieldUpdateOperationsInput | $Enums.newsCategory
    newsPicture?: StringFieldUpdateOperationsInput | string
    newsPictureHeading?: StringFieldUpdateOperationsInput | string
    newsPictureCredit?: StringFieldUpdateOperationsInput | string
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    newsDetails?: StringFieldUpdateOperationsInput | string
    reporterId?: StringFieldUpdateOperationsInput | string
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    newsArticleStatus?: EnumnewsArticleStatusFieldUpdateOperationsInput | $Enums.newsArticleStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quotes?: quoteUncheckedUpdateManyWithoutArticleNestedInput
  }

  export type newsArticleCreateManyInput = {
    id?: string
    newsHeading: string
    newsResource: string
    newsLocation?: string | null
    newsCategory: $Enums.newsCategory
    newsPicture: string
    newsPictureHeading: string
    newsPictureCredit: string
    isFeatured?: boolean
    newsDetails: string
    reporterId: string
    duration?: number | null
    newsArticleStatus?: $Enums.newsArticleStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type newsArticleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    newsHeading?: StringFieldUpdateOperationsInput | string
    newsResource?: StringFieldUpdateOperationsInput | string
    newsLocation?: NullableStringFieldUpdateOperationsInput | string | null
    newsCategory?: EnumnewsCategoryFieldUpdateOperationsInput | $Enums.newsCategory
    newsPicture?: StringFieldUpdateOperationsInput | string
    newsPictureHeading?: StringFieldUpdateOperationsInput | string
    newsPictureCredit?: StringFieldUpdateOperationsInput | string
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    newsDetails?: StringFieldUpdateOperationsInput | string
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    newsArticleStatus?: EnumnewsArticleStatusFieldUpdateOperationsInput | $Enums.newsArticleStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type newsArticleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    newsHeading?: StringFieldUpdateOperationsInput | string
    newsResource?: StringFieldUpdateOperationsInput | string
    newsLocation?: NullableStringFieldUpdateOperationsInput | string | null
    newsCategory?: EnumnewsCategoryFieldUpdateOperationsInput | $Enums.newsCategory
    newsPicture?: StringFieldUpdateOperationsInput | string
    newsPictureHeading?: StringFieldUpdateOperationsInput | string
    newsPictureCredit?: StringFieldUpdateOperationsInput | string
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    newsDetails?: StringFieldUpdateOperationsInput | string
    reporterId?: StringFieldUpdateOperationsInput | string
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    newsArticleStatus?: EnumnewsArticleStatusFieldUpdateOperationsInput | $Enums.newsArticleStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type quoteCreateInput = {
    id?: string
    text: string
    speakerInfo: string
    createdAt?: Date | string
    article: newsArticleCreateNestedOneWithoutQuotesInput
  }

  export type quoteUncheckedCreateInput = {
    id?: string
    text: string
    speakerInfo: string
    articleId: string
    createdAt?: Date | string
  }

  export type quoteUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    speakerInfo?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    article?: newsArticleUpdateOneRequiredWithoutQuotesNestedInput
  }

  export type quoteUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    speakerInfo?: StringFieldUpdateOperationsInput | string
    articleId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type quoteCreateManyInput = {
    id?: string
    text: string
    speakerInfo: string
    articleId: string
    createdAt?: Date | string
  }

  export type quoteUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    speakerInfo?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type quoteUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    speakerInfo?: StringFieldUpdateOperationsInput | string
    articleId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdvertisementCreateInput = {
    id?: string
    companyName: string
    companyaddress: string
    supervisedName: string
    advertisedCategory: $Enums.AdvertisedCategory
    websiteLink: string
    additionalInfo: string
    advertiseBanner: string
    isFeatured?: boolean
    endDate: string
    startDate: string
    supervisedPhonenumber: string
    advertiseduration?: number | null
    advertiseStatus?: $Enums.advertiseStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdvertisementUncheckedCreateInput = {
    id?: string
    companyName: string
    companyaddress: string
    supervisedName: string
    advertisedCategory: $Enums.AdvertisedCategory
    websiteLink: string
    additionalInfo: string
    advertiseBanner: string
    isFeatured?: boolean
    endDate: string
    startDate: string
    supervisedPhonenumber: string
    advertiseduration?: number | null
    advertiseStatus?: $Enums.advertiseStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdvertisementUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    companyaddress?: StringFieldUpdateOperationsInput | string
    supervisedName?: StringFieldUpdateOperationsInput | string
    advertisedCategory?: EnumAdvertisedCategoryFieldUpdateOperationsInput | $Enums.AdvertisedCategory
    websiteLink?: StringFieldUpdateOperationsInput | string
    additionalInfo?: StringFieldUpdateOperationsInput | string
    advertiseBanner?: StringFieldUpdateOperationsInput | string
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    endDate?: StringFieldUpdateOperationsInput | string
    startDate?: StringFieldUpdateOperationsInput | string
    supervisedPhonenumber?: StringFieldUpdateOperationsInput | string
    advertiseduration?: NullableIntFieldUpdateOperationsInput | number | null
    advertiseStatus?: EnumadvertiseStatusFieldUpdateOperationsInput | $Enums.advertiseStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdvertisementUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    companyaddress?: StringFieldUpdateOperationsInput | string
    supervisedName?: StringFieldUpdateOperationsInput | string
    advertisedCategory?: EnumAdvertisedCategoryFieldUpdateOperationsInput | $Enums.AdvertisedCategory
    websiteLink?: StringFieldUpdateOperationsInput | string
    additionalInfo?: StringFieldUpdateOperationsInput | string
    advertiseBanner?: StringFieldUpdateOperationsInput | string
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    endDate?: StringFieldUpdateOperationsInput | string
    startDate?: StringFieldUpdateOperationsInput | string
    supervisedPhonenumber?: StringFieldUpdateOperationsInput | string
    advertiseduration?: NullableIntFieldUpdateOperationsInput | number | null
    advertiseStatus?: EnumadvertiseStatusFieldUpdateOperationsInput | $Enums.advertiseStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdvertisementCreateManyInput = {
    id?: string
    companyName: string
    companyaddress: string
    supervisedName: string
    advertisedCategory: $Enums.AdvertisedCategory
    websiteLink: string
    additionalInfo: string
    advertiseBanner: string
    isFeatured?: boolean
    endDate: string
    startDate: string
    supervisedPhonenumber: string
    advertiseduration?: number | null
    advertiseStatus?: $Enums.advertiseStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdvertisementUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    companyaddress?: StringFieldUpdateOperationsInput | string
    supervisedName?: StringFieldUpdateOperationsInput | string
    advertisedCategory?: EnumAdvertisedCategoryFieldUpdateOperationsInput | $Enums.AdvertisedCategory
    websiteLink?: StringFieldUpdateOperationsInput | string
    additionalInfo?: StringFieldUpdateOperationsInput | string
    advertiseBanner?: StringFieldUpdateOperationsInput | string
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    endDate?: StringFieldUpdateOperationsInput | string
    startDate?: StringFieldUpdateOperationsInput | string
    supervisedPhonenumber?: StringFieldUpdateOperationsInput | string
    advertiseduration?: NullableIntFieldUpdateOperationsInput | number | null
    advertiseStatus?: EnumadvertiseStatusFieldUpdateOperationsInput | $Enums.advertiseStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdvertisementUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    companyaddress?: StringFieldUpdateOperationsInput | string
    supervisedName?: StringFieldUpdateOperationsInput | string
    advertisedCategory?: EnumAdvertisedCategoryFieldUpdateOperationsInput | $Enums.AdvertisedCategory
    websiteLink?: StringFieldUpdateOperationsInput | string
    additionalInfo?: StringFieldUpdateOperationsInput | string
    advertiseBanner?: StringFieldUpdateOperationsInput | string
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    endDate?: StringFieldUpdateOperationsInput | string
    startDate?: StringFieldUpdateOperationsInput | string
    supervisedPhonenumber?: StringFieldUpdateOperationsInput | string
    advertiseduration?: NullableIntFieldUpdateOperationsInput | number | null
    advertiseStatus?: EnumadvertiseStatusFieldUpdateOperationsInput | $Enums.advertiseStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OpinionCreateInput = {
    id?: string
    name: string
    email?: string | null
    phone?: string | null
    opinion: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OpinionUncheckedCreateInput = {
    id?: string
    name: string
    email?: string | null
    phone?: string | null
    opinion: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OpinionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    opinion?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OpinionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    opinion?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OpinionCreateManyInput = {
    id?: string
    name: string
    email?: string | null
    phone?: string | null
    opinion: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OpinionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    opinion?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OpinionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    opinion?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountCreateInput = {
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutAccountsInput
  }

  export type AccountUncheckedCreateInput = {
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUpdateInput = {
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAccountsNestedInput
  }

  export type AccountUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountCreateManyInput = {
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUpdateManyMutationInput = {
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateInput = {
    sessionToken: string
    expires: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutSessionsInput
  }

  export type SessionUncheckedCreateInput = {
    sessionToken: string
    userId: string
    expires: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionUpdateInput = {
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    sessionToken?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateManyInput = {
    sessionToken: string
    userId: string
    expires: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionUpdateManyMutationInput = {
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyInput = {
    sessionToken?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenCreateInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUncheckedCreateInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUpdateInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenUncheckedUpdateInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenCreateManyInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUpdateManyMutationInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenUncheckedUpdateManyInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdvertiseRequestCreateInput = {
    id?: string
    name: string
    email: string
    companyName: string
    companyWebsite: string
    phoneNumber: string
    message: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdvertiseRequestUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    companyName: string
    companyWebsite: string
    phoneNumber: string
    message: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdvertiseRequestUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    companyWebsite?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdvertiseRequestUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    companyWebsite?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdvertiseRequestCreateManyInput = {
    id?: string
    name: string
    email: string
    companyName: string
    companyWebsite: string
    phoneNumber: string
    message: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdvertiseRequestUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    companyWebsite?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdvertiseRequestUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    companyWebsite?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VideopostCreateInput = {
    id?: string
    videoAbout: string
    videoHeadings: string
    videoLink: string
    isFeatured?: boolean
    startDate: string
    vedioStatus?: $Enums.vedioStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VideopostUncheckedCreateInput = {
    id?: string
    videoAbout: string
    videoHeadings: string
    videoLink: string
    isFeatured?: boolean
    startDate: string
    vedioStatus?: $Enums.vedioStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VideopostUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    videoAbout?: StringFieldUpdateOperationsInput | string
    videoHeadings?: StringFieldUpdateOperationsInput | string
    videoLink?: StringFieldUpdateOperationsInput | string
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    startDate?: StringFieldUpdateOperationsInput | string
    vedioStatus?: EnumvedioStatusFieldUpdateOperationsInput | $Enums.vedioStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VideopostUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    videoAbout?: StringFieldUpdateOperationsInput | string
    videoHeadings?: StringFieldUpdateOperationsInput | string
    videoLink?: StringFieldUpdateOperationsInput | string
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    startDate?: StringFieldUpdateOperationsInput | string
    vedioStatus?: EnumvedioStatusFieldUpdateOperationsInput | $Enums.vedioStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VideopostCreateManyInput = {
    id?: string
    videoAbout: string
    videoHeadings: string
    videoLink: string
    isFeatured?: boolean
    startDate: string
    vedioStatus?: $Enums.vedioStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VideopostUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    videoAbout?: StringFieldUpdateOperationsInput | string
    videoHeadings?: StringFieldUpdateOperationsInput | string
    videoLink?: StringFieldUpdateOperationsInput | string
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    startDate?: StringFieldUpdateOperationsInput | string
    vedioStatus?: EnumvedioStatusFieldUpdateOperationsInput | $Enums.vedioStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VideopostUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    videoAbout?: StringFieldUpdateOperationsInput | string
    videoHeadings?: StringFieldUpdateOperationsInput | string
    videoLink?: StringFieldUpdateOperationsInput | string
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    startDate?: StringFieldUpdateOperationsInput | string
    vedioStatus?: EnumvedioStatusFieldUpdateOperationsInput | $Enums.vedioStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type EnumUserTypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.UserType | EnumUserTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumUserTypeNullableFilter<$PrismaModel> | $Enums.UserType | null
  }

  export type EnumApprovalStatusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.ApprovalStatus | EnumApprovalStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.ApprovalStatus[] | ListEnumApprovalStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.ApprovalStatus[] | ListEnumApprovalStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumApprovalStatusNullableFilter<$PrismaModel> | $Enums.ApprovalStatus | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type AccountListRelationFilter = {
    every?: AccountWhereInput
    some?: AccountWhereInput
    none?: AccountWhereInput
  }

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type NewsReporterNullableScalarRelationFilter = {
    is?: newsReporterWhereInput | null
    isNot?: newsReporterWhereInput | null
  }

  export type AdvertiserNullableScalarRelationFilter = {
    is?: AdvertiserWhereInput | null
    isNot?: AdvertiserWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    userType?: SortOrder
    approvalStatus?: SortOrder
    onboardingCompleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    userType?: SortOrder
    approvalStatus?: SortOrder
    onboardingCompleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    userType?: SortOrder
    approvalStatus?: SortOrder
    onboardingCompleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumUserTypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserType | EnumUserTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumUserTypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.UserType | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumUserTypeNullableFilter<$PrismaModel>
    _max?: NestedEnumUserTypeNullableFilter<$PrismaModel>
  }

  export type EnumApprovalStatusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ApprovalStatus | EnumApprovalStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.ApprovalStatus[] | ListEnumApprovalStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.ApprovalStatus[] | ListEnumApprovalStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumApprovalStatusNullableWithAggregatesFilter<$PrismaModel> | $Enums.ApprovalStatus | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumApprovalStatusNullableFilter<$PrismaModel>
    _max?: NestedEnumApprovalStatusNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NewsArticleListRelationFilter = {
    every?: newsArticleWhereInput
    some?: newsArticleWhereInput
    none?: newsArticleWhereInput
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type newsArticleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type newsReporterCountOrderByAggregateInput = {
    id?: SortOrder
    reporterName?: SortOrder
    location?: SortOrder
    bio?: SortOrder
    profilePicture?: SortOrder
    phoneNumber?: SortOrder
    facebookProfileAddress?: SortOrder
    userId?: SortOrder
    registered?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type newsReporterMaxOrderByAggregateInput = {
    id?: SortOrder
    reporterName?: SortOrder
    location?: SortOrder
    bio?: SortOrder
    profilePicture?: SortOrder
    phoneNumber?: SortOrder
    facebookProfileAddress?: SortOrder
    userId?: SortOrder
    registered?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type newsReporterMinOrderByAggregateInput = {
    id?: SortOrder
    reporterName?: SortOrder
    location?: SortOrder
    bio?: SortOrder
    profilePicture?: SortOrder
    phoneNumber?: SortOrder
    facebookProfileAddress?: SortOrder
    userId?: SortOrder
    registered?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdvertiserCountOrderByAggregateInput = {
    id?: SortOrder
    supervisorName?: SortOrder
    companyName?: SortOrder
    companyAddress?: SortOrder
    phoneNumber?: SortOrder
    aboutCompany?: SortOrder
    companyWebsite?: SortOrder
    userId?: SortOrder
    registered?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdvertiserMaxOrderByAggregateInput = {
    id?: SortOrder
    supervisorName?: SortOrder
    companyName?: SortOrder
    companyAddress?: SortOrder
    phoneNumber?: SortOrder
    aboutCompany?: SortOrder
    companyWebsite?: SortOrder
    userId?: SortOrder
    registered?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdvertiserMinOrderByAggregateInput = {
    id?: SortOrder
    supervisorName?: SortOrder
    companyName?: SortOrder
    companyAddress?: SortOrder
    phoneNumber?: SortOrder
    aboutCompany?: SortOrder
    companyWebsite?: SortOrder
    userId?: SortOrder
    registered?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumnewsCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.newsCategory | EnumnewsCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.newsCategory[] | ListEnumnewsCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.newsCategory[] | ListEnumnewsCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumnewsCategoryFilter<$PrismaModel> | $Enums.newsCategory
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type EnumnewsArticleStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.newsArticleStatus | EnumnewsArticleStatusFieldRefInput<$PrismaModel>
    in?: $Enums.newsArticleStatus[] | ListEnumnewsArticleStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.newsArticleStatus[] | ListEnumnewsArticleStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumnewsArticleStatusFilter<$PrismaModel> | $Enums.newsArticleStatus
  }

  export type QuoteListRelationFilter = {
    every?: quoteWhereInput
    some?: quoteWhereInput
    none?: quoteWhereInput
  }

  export type NewsReporterScalarRelationFilter = {
    is?: newsReporterWhereInput
    isNot?: newsReporterWhereInput
  }

  export type quoteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type newsArticleCountOrderByAggregateInput = {
    id?: SortOrder
    newsHeading?: SortOrder
    newsResource?: SortOrder
    newsLocation?: SortOrder
    newsCategory?: SortOrder
    newsPicture?: SortOrder
    newsPictureHeading?: SortOrder
    newsPictureCredit?: SortOrder
    isFeatured?: SortOrder
    newsDetails?: SortOrder
    reporterId?: SortOrder
    duration?: SortOrder
    newsArticleStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type newsArticleAvgOrderByAggregateInput = {
    duration?: SortOrder
  }

  export type newsArticleMaxOrderByAggregateInput = {
    id?: SortOrder
    newsHeading?: SortOrder
    newsResource?: SortOrder
    newsLocation?: SortOrder
    newsCategory?: SortOrder
    newsPicture?: SortOrder
    newsPictureHeading?: SortOrder
    newsPictureCredit?: SortOrder
    isFeatured?: SortOrder
    newsDetails?: SortOrder
    reporterId?: SortOrder
    duration?: SortOrder
    newsArticleStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type newsArticleMinOrderByAggregateInput = {
    id?: SortOrder
    newsHeading?: SortOrder
    newsResource?: SortOrder
    newsLocation?: SortOrder
    newsCategory?: SortOrder
    newsPicture?: SortOrder
    newsPictureHeading?: SortOrder
    newsPictureCredit?: SortOrder
    isFeatured?: SortOrder
    newsDetails?: SortOrder
    reporterId?: SortOrder
    duration?: SortOrder
    newsArticleStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type newsArticleSumOrderByAggregateInput = {
    duration?: SortOrder
  }

  export type EnumnewsCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.newsCategory | EnumnewsCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.newsCategory[] | ListEnumnewsCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.newsCategory[] | ListEnumnewsCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumnewsCategoryWithAggregatesFilter<$PrismaModel> | $Enums.newsCategory
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumnewsCategoryFilter<$PrismaModel>
    _max?: NestedEnumnewsCategoryFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type EnumnewsArticleStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.newsArticleStatus | EnumnewsArticleStatusFieldRefInput<$PrismaModel>
    in?: $Enums.newsArticleStatus[] | ListEnumnewsArticleStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.newsArticleStatus[] | ListEnumnewsArticleStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumnewsArticleStatusWithAggregatesFilter<$PrismaModel> | $Enums.newsArticleStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumnewsArticleStatusFilter<$PrismaModel>
    _max?: NestedEnumnewsArticleStatusFilter<$PrismaModel>
  }

  export type NewsArticleScalarRelationFilter = {
    is?: newsArticleWhereInput
    isNot?: newsArticleWhereInput
  }

  export type quoteCountOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    speakerInfo?: SortOrder
    articleId?: SortOrder
    createdAt?: SortOrder
  }

  export type quoteMaxOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    speakerInfo?: SortOrder
    articleId?: SortOrder
    createdAt?: SortOrder
  }

  export type quoteMinOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    speakerInfo?: SortOrder
    articleId?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumAdvertisedCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.AdvertisedCategory | EnumAdvertisedCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.AdvertisedCategory[] | ListEnumAdvertisedCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.AdvertisedCategory[] | ListEnumAdvertisedCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumAdvertisedCategoryFilter<$PrismaModel> | $Enums.AdvertisedCategory
  }

  export type EnumadvertiseStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.advertiseStatus | EnumadvertiseStatusFieldRefInput<$PrismaModel>
    in?: $Enums.advertiseStatus[] | ListEnumadvertiseStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.advertiseStatus[] | ListEnumadvertiseStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumadvertiseStatusFilter<$PrismaModel> | $Enums.advertiseStatus
  }

  export type AdvertisementCountOrderByAggregateInput = {
    id?: SortOrder
    companyName?: SortOrder
    companyaddress?: SortOrder
    supervisedName?: SortOrder
    advertisedCategory?: SortOrder
    websiteLink?: SortOrder
    additionalInfo?: SortOrder
    advertiseBanner?: SortOrder
    isFeatured?: SortOrder
    endDate?: SortOrder
    startDate?: SortOrder
    supervisedPhonenumber?: SortOrder
    advertiseduration?: SortOrder
    advertiseStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdvertisementAvgOrderByAggregateInput = {
    advertiseduration?: SortOrder
  }

  export type AdvertisementMaxOrderByAggregateInput = {
    id?: SortOrder
    companyName?: SortOrder
    companyaddress?: SortOrder
    supervisedName?: SortOrder
    advertisedCategory?: SortOrder
    websiteLink?: SortOrder
    additionalInfo?: SortOrder
    advertiseBanner?: SortOrder
    isFeatured?: SortOrder
    endDate?: SortOrder
    startDate?: SortOrder
    supervisedPhonenumber?: SortOrder
    advertiseduration?: SortOrder
    advertiseStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdvertisementMinOrderByAggregateInput = {
    id?: SortOrder
    companyName?: SortOrder
    companyaddress?: SortOrder
    supervisedName?: SortOrder
    advertisedCategory?: SortOrder
    websiteLink?: SortOrder
    additionalInfo?: SortOrder
    advertiseBanner?: SortOrder
    isFeatured?: SortOrder
    endDate?: SortOrder
    startDate?: SortOrder
    supervisedPhonenumber?: SortOrder
    advertiseduration?: SortOrder
    advertiseStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdvertisementSumOrderByAggregateInput = {
    advertiseduration?: SortOrder
  }

  export type EnumAdvertisedCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AdvertisedCategory | EnumAdvertisedCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.AdvertisedCategory[] | ListEnumAdvertisedCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.AdvertisedCategory[] | ListEnumAdvertisedCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumAdvertisedCategoryWithAggregatesFilter<$PrismaModel> | $Enums.AdvertisedCategory
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAdvertisedCategoryFilter<$PrismaModel>
    _max?: NestedEnumAdvertisedCategoryFilter<$PrismaModel>
  }

  export type EnumadvertiseStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.advertiseStatus | EnumadvertiseStatusFieldRefInput<$PrismaModel>
    in?: $Enums.advertiseStatus[] | ListEnumadvertiseStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.advertiseStatus[] | ListEnumadvertiseStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumadvertiseStatusWithAggregatesFilter<$PrismaModel> | $Enums.advertiseStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumadvertiseStatusFilter<$PrismaModel>
    _max?: NestedEnumadvertiseStatusFilter<$PrismaModel>
  }

  export type OpinionCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    opinion?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OpinionMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    opinion?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OpinionMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    opinion?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountProviderProviderAccountIdCompoundUniqueInput = {
    provider: string
    providerAccountId: string
  }

  export type AccountCountOrderByAggregateInput = {
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountAvgOrderByAggregateInput = {
    expires_at?: SortOrder
  }

  export type AccountMaxOrderByAggregateInput = {
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountMinOrderByAggregateInput = {
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountSumOrderByAggregateInput = {
    expires_at?: SortOrder
  }

  export type SessionCountOrderByAggregateInput = {
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VerificationTokenIdentifierTokenCompoundUniqueInput = {
    identifier: string
    token: string
  }

  export type VerificationTokenCountOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenMaxOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenMinOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type AdvertiseRequestCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    companyName?: SortOrder
    companyWebsite?: SortOrder
    phoneNumber?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdvertiseRequestMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    companyName?: SortOrder
    companyWebsite?: SortOrder
    phoneNumber?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdvertiseRequestMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    companyName?: SortOrder
    companyWebsite?: SortOrder
    phoneNumber?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumvedioStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.vedioStatus | EnumvedioStatusFieldRefInput<$PrismaModel>
    in?: $Enums.vedioStatus[] | ListEnumvedioStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.vedioStatus[] | ListEnumvedioStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumvedioStatusFilter<$PrismaModel> | $Enums.vedioStatus
  }

  export type VideopostCountOrderByAggregateInput = {
    id?: SortOrder
    videoAbout?: SortOrder
    videoHeadings?: SortOrder
    videoLink?: SortOrder
    isFeatured?: SortOrder
    startDate?: SortOrder
    vedioStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VideopostMaxOrderByAggregateInput = {
    id?: SortOrder
    videoAbout?: SortOrder
    videoHeadings?: SortOrder
    videoLink?: SortOrder
    isFeatured?: SortOrder
    startDate?: SortOrder
    vedioStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VideopostMinOrderByAggregateInput = {
    id?: SortOrder
    videoAbout?: SortOrder
    videoHeadings?: SortOrder
    videoLink?: SortOrder
    isFeatured?: SortOrder
    startDate?: SortOrder
    vedioStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumvedioStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.vedioStatus | EnumvedioStatusFieldRefInput<$PrismaModel>
    in?: $Enums.vedioStatus[] | ListEnumvedioStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.vedioStatus[] | ListEnumvedioStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumvedioStatusWithAggregatesFilter<$PrismaModel> | $Enums.vedioStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumvedioStatusFilter<$PrismaModel>
    _max?: NestedEnumvedioStatusFilter<$PrismaModel>
  }

  export type AccountCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type SessionCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type newsReporterCreateNestedOneWithoutUserInput = {
    create?: XOR<newsReporterCreateWithoutUserInput, newsReporterUncheckedCreateWithoutUserInput>
    connectOrCreate?: newsReporterCreateOrConnectWithoutUserInput
    connect?: newsReporterWhereUniqueInput
  }

  export type AdvertiserCreateNestedOneWithoutUserInput = {
    create?: XOR<AdvertiserCreateWithoutUserInput, AdvertiserUncheckedCreateWithoutUserInput>
    connectOrCreate?: AdvertiserCreateOrConnectWithoutUserInput
    connect?: AdvertiserWhereUniqueInput
  }

  export type AccountUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type SessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type newsReporterUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<newsReporterCreateWithoutUserInput, newsReporterUncheckedCreateWithoutUserInput>
    connectOrCreate?: newsReporterCreateOrConnectWithoutUserInput
    connect?: newsReporterWhereUniqueInput
  }

  export type AdvertiserUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<AdvertiserCreateWithoutUserInput, AdvertiserUncheckedCreateWithoutUserInput>
    connectOrCreate?: AdvertiserCreateOrConnectWithoutUserInput
    connect?: AdvertiserWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableEnumUserTypeFieldUpdateOperationsInput = {
    set?: $Enums.UserType | null
  }

  export type NullableEnumApprovalStatusFieldUpdateOperationsInput = {
    set?: $Enums.ApprovalStatus | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type AccountUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type SessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type newsReporterUpdateOneWithoutUserNestedInput = {
    create?: XOR<newsReporterCreateWithoutUserInput, newsReporterUncheckedCreateWithoutUserInput>
    connectOrCreate?: newsReporterCreateOrConnectWithoutUserInput
    upsert?: newsReporterUpsertWithoutUserInput
    disconnect?: newsReporterWhereInput | boolean
    delete?: newsReporterWhereInput | boolean
    connect?: newsReporterWhereUniqueInput
    update?: XOR<XOR<newsReporterUpdateToOneWithWhereWithoutUserInput, newsReporterUpdateWithoutUserInput>, newsReporterUncheckedUpdateWithoutUserInput>
  }

  export type AdvertiserUpdateOneWithoutUserNestedInput = {
    create?: XOR<AdvertiserCreateWithoutUserInput, AdvertiserUncheckedCreateWithoutUserInput>
    connectOrCreate?: AdvertiserCreateOrConnectWithoutUserInput
    upsert?: AdvertiserUpsertWithoutUserInput
    disconnect?: AdvertiserWhereInput | boolean
    delete?: AdvertiserWhereInput | boolean
    connect?: AdvertiserWhereUniqueInput
    update?: XOR<XOR<AdvertiserUpdateToOneWithWhereWithoutUserInput, AdvertiserUpdateWithoutUserInput>, AdvertiserUncheckedUpdateWithoutUserInput>
  }

  export type AccountUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type SessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type newsReporterUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<newsReporterCreateWithoutUserInput, newsReporterUncheckedCreateWithoutUserInput>
    connectOrCreate?: newsReporterCreateOrConnectWithoutUserInput
    upsert?: newsReporterUpsertWithoutUserInput
    disconnect?: newsReporterWhereInput | boolean
    delete?: newsReporterWhereInput | boolean
    connect?: newsReporterWhereUniqueInput
    update?: XOR<XOR<newsReporterUpdateToOneWithWhereWithoutUserInput, newsReporterUpdateWithoutUserInput>, newsReporterUncheckedUpdateWithoutUserInput>
  }

  export type AdvertiserUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<AdvertiserCreateWithoutUserInput, AdvertiserUncheckedCreateWithoutUserInput>
    connectOrCreate?: AdvertiserCreateOrConnectWithoutUserInput
    upsert?: AdvertiserUpsertWithoutUserInput
    disconnect?: AdvertiserWhereInput | boolean
    delete?: AdvertiserWhereInput | boolean
    connect?: AdvertiserWhereUniqueInput
    update?: XOR<XOR<AdvertiserUpdateToOneWithWhereWithoutUserInput, AdvertiserUpdateWithoutUserInput>, AdvertiserUncheckedUpdateWithoutUserInput>
  }

  export type newsArticleCreateNestedManyWithoutNewsReporterInput = {
    create?: XOR<newsArticleCreateWithoutNewsReporterInput, newsArticleUncheckedCreateWithoutNewsReporterInput> | newsArticleCreateWithoutNewsReporterInput[] | newsArticleUncheckedCreateWithoutNewsReporterInput[]
    connectOrCreate?: newsArticleCreateOrConnectWithoutNewsReporterInput | newsArticleCreateOrConnectWithoutNewsReporterInput[]
    createMany?: newsArticleCreateManyNewsReporterInputEnvelope
    connect?: newsArticleWhereUniqueInput | newsArticleWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutNewsReporterInput = {
    create?: XOR<UserCreateWithoutNewsReporterInput, UserUncheckedCreateWithoutNewsReporterInput>
    connectOrCreate?: UserCreateOrConnectWithoutNewsReporterInput
    connect?: UserWhereUniqueInput
  }

  export type newsArticleUncheckedCreateNestedManyWithoutNewsReporterInput = {
    create?: XOR<newsArticleCreateWithoutNewsReporterInput, newsArticleUncheckedCreateWithoutNewsReporterInput> | newsArticleCreateWithoutNewsReporterInput[] | newsArticleUncheckedCreateWithoutNewsReporterInput[]
    connectOrCreate?: newsArticleCreateOrConnectWithoutNewsReporterInput | newsArticleCreateOrConnectWithoutNewsReporterInput[]
    createMany?: newsArticleCreateManyNewsReporterInputEnvelope
    connect?: newsArticleWhereUniqueInput | newsArticleWhereUniqueInput[]
  }

  export type newsArticleUpdateManyWithoutNewsReporterNestedInput = {
    create?: XOR<newsArticleCreateWithoutNewsReporterInput, newsArticleUncheckedCreateWithoutNewsReporterInput> | newsArticleCreateWithoutNewsReporterInput[] | newsArticleUncheckedCreateWithoutNewsReporterInput[]
    connectOrCreate?: newsArticleCreateOrConnectWithoutNewsReporterInput | newsArticleCreateOrConnectWithoutNewsReporterInput[]
    upsert?: newsArticleUpsertWithWhereUniqueWithoutNewsReporterInput | newsArticleUpsertWithWhereUniqueWithoutNewsReporterInput[]
    createMany?: newsArticleCreateManyNewsReporterInputEnvelope
    set?: newsArticleWhereUniqueInput | newsArticleWhereUniqueInput[]
    disconnect?: newsArticleWhereUniqueInput | newsArticleWhereUniqueInput[]
    delete?: newsArticleWhereUniqueInput | newsArticleWhereUniqueInput[]
    connect?: newsArticleWhereUniqueInput | newsArticleWhereUniqueInput[]
    update?: newsArticleUpdateWithWhereUniqueWithoutNewsReporterInput | newsArticleUpdateWithWhereUniqueWithoutNewsReporterInput[]
    updateMany?: newsArticleUpdateManyWithWhereWithoutNewsReporterInput | newsArticleUpdateManyWithWhereWithoutNewsReporterInput[]
    deleteMany?: newsArticleScalarWhereInput | newsArticleScalarWhereInput[]
  }

  export type UserUpdateOneRequiredWithoutNewsReporterNestedInput = {
    create?: XOR<UserCreateWithoutNewsReporterInput, UserUncheckedCreateWithoutNewsReporterInput>
    connectOrCreate?: UserCreateOrConnectWithoutNewsReporterInput
    upsert?: UserUpsertWithoutNewsReporterInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutNewsReporterInput, UserUpdateWithoutNewsReporterInput>, UserUncheckedUpdateWithoutNewsReporterInput>
  }

  export type newsArticleUncheckedUpdateManyWithoutNewsReporterNestedInput = {
    create?: XOR<newsArticleCreateWithoutNewsReporterInput, newsArticleUncheckedCreateWithoutNewsReporterInput> | newsArticleCreateWithoutNewsReporterInput[] | newsArticleUncheckedCreateWithoutNewsReporterInput[]
    connectOrCreate?: newsArticleCreateOrConnectWithoutNewsReporterInput | newsArticleCreateOrConnectWithoutNewsReporterInput[]
    upsert?: newsArticleUpsertWithWhereUniqueWithoutNewsReporterInput | newsArticleUpsertWithWhereUniqueWithoutNewsReporterInput[]
    createMany?: newsArticleCreateManyNewsReporterInputEnvelope
    set?: newsArticleWhereUniqueInput | newsArticleWhereUniqueInput[]
    disconnect?: newsArticleWhereUniqueInput | newsArticleWhereUniqueInput[]
    delete?: newsArticleWhereUniqueInput | newsArticleWhereUniqueInput[]
    connect?: newsArticleWhereUniqueInput | newsArticleWhereUniqueInput[]
    update?: newsArticleUpdateWithWhereUniqueWithoutNewsReporterInput | newsArticleUpdateWithWhereUniqueWithoutNewsReporterInput[]
    updateMany?: newsArticleUpdateManyWithWhereWithoutNewsReporterInput | newsArticleUpdateManyWithWhereWithoutNewsReporterInput[]
    deleteMany?: newsArticleScalarWhereInput | newsArticleScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutAdvertiserInput = {
    create?: XOR<UserCreateWithoutAdvertiserInput, UserUncheckedCreateWithoutAdvertiserInput>
    connectOrCreate?: UserCreateOrConnectWithoutAdvertiserInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutAdvertiserNestedInput = {
    create?: XOR<UserCreateWithoutAdvertiserInput, UserUncheckedCreateWithoutAdvertiserInput>
    connectOrCreate?: UserCreateOrConnectWithoutAdvertiserInput
    upsert?: UserUpsertWithoutAdvertiserInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAdvertiserInput, UserUpdateWithoutAdvertiserInput>, UserUncheckedUpdateWithoutAdvertiserInput>
  }

  export type quoteCreateNestedManyWithoutArticleInput = {
    create?: XOR<quoteCreateWithoutArticleInput, quoteUncheckedCreateWithoutArticleInput> | quoteCreateWithoutArticleInput[] | quoteUncheckedCreateWithoutArticleInput[]
    connectOrCreate?: quoteCreateOrConnectWithoutArticleInput | quoteCreateOrConnectWithoutArticleInput[]
    createMany?: quoteCreateManyArticleInputEnvelope
    connect?: quoteWhereUniqueInput | quoteWhereUniqueInput[]
  }

  export type newsReporterCreateNestedOneWithoutNewsArticleInput = {
    create?: XOR<newsReporterCreateWithoutNewsArticleInput, newsReporterUncheckedCreateWithoutNewsArticleInput>
    connectOrCreate?: newsReporterCreateOrConnectWithoutNewsArticleInput
    connect?: newsReporterWhereUniqueInput
  }

  export type quoteUncheckedCreateNestedManyWithoutArticleInput = {
    create?: XOR<quoteCreateWithoutArticleInput, quoteUncheckedCreateWithoutArticleInput> | quoteCreateWithoutArticleInput[] | quoteUncheckedCreateWithoutArticleInput[]
    connectOrCreate?: quoteCreateOrConnectWithoutArticleInput | quoteCreateOrConnectWithoutArticleInput[]
    createMany?: quoteCreateManyArticleInputEnvelope
    connect?: quoteWhereUniqueInput | quoteWhereUniqueInput[]
  }

  export type EnumnewsCategoryFieldUpdateOperationsInput = {
    set?: $Enums.newsCategory
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumnewsArticleStatusFieldUpdateOperationsInput = {
    set?: $Enums.newsArticleStatus
  }

  export type quoteUpdateManyWithoutArticleNestedInput = {
    create?: XOR<quoteCreateWithoutArticleInput, quoteUncheckedCreateWithoutArticleInput> | quoteCreateWithoutArticleInput[] | quoteUncheckedCreateWithoutArticleInput[]
    connectOrCreate?: quoteCreateOrConnectWithoutArticleInput | quoteCreateOrConnectWithoutArticleInput[]
    upsert?: quoteUpsertWithWhereUniqueWithoutArticleInput | quoteUpsertWithWhereUniqueWithoutArticleInput[]
    createMany?: quoteCreateManyArticleInputEnvelope
    set?: quoteWhereUniqueInput | quoteWhereUniqueInput[]
    disconnect?: quoteWhereUniqueInput | quoteWhereUniqueInput[]
    delete?: quoteWhereUniqueInput | quoteWhereUniqueInput[]
    connect?: quoteWhereUniqueInput | quoteWhereUniqueInput[]
    update?: quoteUpdateWithWhereUniqueWithoutArticleInput | quoteUpdateWithWhereUniqueWithoutArticleInput[]
    updateMany?: quoteUpdateManyWithWhereWithoutArticleInput | quoteUpdateManyWithWhereWithoutArticleInput[]
    deleteMany?: quoteScalarWhereInput | quoteScalarWhereInput[]
  }

  export type newsReporterUpdateOneRequiredWithoutNewsArticleNestedInput = {
    create?: XOR<newsReporterCreateWithoutNewsArticleInput, newsReporterUncheckedCreateWithoutNewsArticleInput>
    connectOrCreate?: newsReporterCreateOrConnectWithoutNewsArticleInput
    upsert?: newsReporterUpsertWithoutNewsArticleInput
    connect?: newsReporterWhereUniqueInput
    update?: XOR<XOR<newsReporterUpdateToOneWithWhereWithoutNewsArticleInput, newsReporterUpdateWithoutNewsArticleInput>, newsReporterUncheckedUpdateWithoutNewsArticleInput>
  }

  export type quoteUncheckedUpdateManyWithoutArticleNestedInput = {
    create?: XOR<quoteCreateWithoutArticleInput, quoteUncheckedCreateWithoutArticleInput> | quoteCreateWithoutArticleInput[] | quoteUncheckedCreateWithoutArticleInput[]
    connectOrCreate?: quoteCreateOrConnectWithoutArticleInput | quoteCreateOrConnectWithoutArticleInput[]
    upsert?: quoteUpsertWithWhereUniqueWithoutArticleInput | quoteUpsertWithWhereUniqueWithoutArticleInput[]
    createMany?: quoteCreateManyArticleInputEnvelope
    set?: quoteWhereUniqueInput | quoteWhereUniqueInput[]
    disconnect?: quoteWhereUniqueInput | quoteWhereUniqueInput[]
    delete?: quoteWhereUniqueInput | quoteWhereUniqueInput[]
    connect?: quoteWhereUniqueInput | quoteWhereUniqueInput[]
    update?: quoteUpdateWithWhereUniqueWithoutArticleInput | quoteUpdateWithWhereUniqueWithoutArticleInput[]
    updateMany?: quoteUpdateManyWithWhereWithoutArticleInput | quoteUpdateManyWithWhereWithoutArticleInput[]
    deleteMany?: quoteScalarWhereInput | quoteScalarWhereInput[]
  }

  export type newsArticleCreateNestedOneWithoutQuotesInput = {
    create?: XOR<newsArticleCreateWithoutQuotesInput, newsArticleUncheckedCreateWithoutQuotesInput>
    connectOrCreate?: newsArticleCreateOrConnectWithoutQuotesInput
    connect?: newsArticleWhereUniqueInput
  }

  export type newsArticleUpdateOneRequiredWithoutQuotesNestedInput = {
    create?: XOR<newsArticleCreateWithoutQuotesInput, newsArticleUncheckedCreateWithoutQuotesInput>
    connectOrCreate?: newsArticleCreateOrConnectWithoutQuotesInput
    upsert?: newsArticleUpsertWithoutQuotesInput
    connect?: newsArticleWhereUniqueInput
    update?: XOR<XOR<newsArticleUpdateToOneWithWhereWithoutQuotesInput, newsArticleUpdateWithoutQuotesInput>, newsArticleUncheckedUpdateWithoutQuotesInput>
  }

  export type EnumAdvertisedCategoryFieldUpdateOperationsInput = {
    set?: $Enums.AdvertisedCategory
  }

  export type EnumadvertiseStatusFieldUpdateOperationsInput = {
    set?: $Enums.advertiseStatus
  }

  export type UserCreateNestedOneWithoutAccountsInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutAccountsNestedInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    upsert?: UserUpsertWithoutAccountsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAccountsInput, UserUpdateWithoutAccountsInput>, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    upsert?: UserUpsertWithoutSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionsInput, UserUpdateWithoutSessionsInput>, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type EnumvedioStatusFieldUpdateOperationsInput = {
    set?: $Enums.vedioStatus
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumUserTypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.UserType | EnumUserTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumUserTypeNullableFilter<$PrismaModel> | $Enums.UserType | null
  }

  export type NestedEnumApprovalStatusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.ApprovalStatus | EnumApprovalStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.ApprovalStatus[] | ListEnumApprovalStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.ApprovalStatus[] | ListEnumApprovalStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumApprovalStatusNullableFilter<$PrismaModel> | $Enums.ApprovalStatus | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumUserTypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserType | EnumUserTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumUserTypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.UserType | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumUserTypeNullableFilter<$PrismaModel>
    _max?: NestedEnumUserTypeNullableFilter<$PrismaModel>
  }

  export type NestedEnumApprovalStatusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ApprovalStatus | EnumApprovalStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.ApprovalStatus[] | ListEnumApprovalStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.ApprovalStatus[] | ListEnumApprovalStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumApprovalStatusNullableWithAggregatesFilter<$PrismaModel> | $Enums.ApprovalStatus | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumApprovalStatusNullableFilter<$PrismaModel>
    _max?: NestedEnumApprovalStatusNullableFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumnewsCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.newsCategory | EnumnewsCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.newsCategory[] | ListEnumnewsCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.newsCategory[] | ListEnumnewsCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumnewsCategoryFilter<$PrismaModel> | $Enums.newsCategory
  }

  export type NestedEnumnewsArticleStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.newsArticleStatus | EnumnewsArticleStatusFieldRefInput<$PrismaModel>
    in?: $Enums.newsArticleStatus[] | ListEnumnewsArticleStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.newsArticleStatus[] | ListEnumnewsArticleStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumnewsArticleStatusFilter<$PrismaModel> | $Enums.newsArticleStatus
  }

  export type NestedEnumnewsCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.newsCategory | EnumnewsCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.newsCategory[] | ListEnumnewsCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.newsCategory[] | ListEnumnewsCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumnewsCategoryWithAggregatesFilter<$PrismaModel> | $Enums.newsCategory
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumnewsCategoryFilter<$PrismaModel>
    _max?: NestedEnumnewsCategoryFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumnewsArticleStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.newsArticleStatus | EnumnewsArticleStatusFieldRefInput<$PrismaModel>
    in?: $Enums.newsArticleStatus[] | ListEnumnewsArticleStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.newsArticleStatus[] | ListEnumnewsArticleStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumnewsArticleStatusWithAggregatesFilter<$PrismaModel> | $Enums.newsArticleStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumnewsArticleStatusFilter<$PrismaModel>
    _max?: NestedEnumnewsArticleStatusFilter<$PrismaModel>
  }

  export type NestedEnumAdvertisedCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.AdvertisedCategory | EnumAdvertisedCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.AdvertisedCategory[] | ListEnumAdvertisedCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.AdvertisedCategory[] | ListEnumAdvertisedCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumAdvertisedCategoryFilter<$PrismaModel> | $Enums.AdvertisedCategory
  }

  export type NestedEnumadvertiseStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.advertiseStatus | EnumadvertiseStatusFieldRefInput<$PrismaModel>
    in?: $Enums.advertiseStatus[] | ListEnumadvertiseStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.advertiseStatus[] | ListEnumadvertiseStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumadvertiseStatusFilter<$PrismaModel> | $Enums.advertiseStatus
  }

  export type NestedEnumAdvertisedCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AdvertisedCategory | EnumAdvertisedCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.AdvertisedCategory[] | ListEnumAdvertisedCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.AdvertisedCategory[] | ListEnumAdvertisedCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumAdvertisedCategoryWithAggregatesFilter<$PrismaModel> | $Enums.AdvertisedCategory
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAdvertisedCategoryFilter<$PrismaModel>
    _max?: NestedEnumAdvertisedCategoryFilter<$PrismaModel>
  }

  export type NestedEnumadvertiseStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.advertiseStatus | EnumadvertiseStatusFieldRefInput<$PrismaModel>
    in?: $Enums.advertiseStatus[] | ListEnumadvertiseStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.advertiseStatus[] | ListEnumadvertiseStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumadvertiseStatusWithAggregatesFilter<$PrismaModel> | $Enums.advertiseStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumadvertiseStatusFilter<$PrismaModel>
    _max?: NestedEnumadvertiseStatusFilter<$PrismaModel>
  }

  export type NestedEnumvedioStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.vedioStatus | EnumvedioStatusFieldRefInput<$PrismaModel>
    in?: $Enums.vedioStatus[] | ListEnumvedioStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.vedioStatus[] | ListEnumvedioStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumvedioStatusFilter<$PrismaModel> | $Enums.vedioStatus
  }

  export type NestedEnumvedioStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.vedioStatus | EnumvedioStatusFieldRefInput<$PrismaModel>
    in?: $Enums.vedioStatus[] | ListEnumvedioStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.vedioStatus[] | ListEnumvedioStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumvedioStatusWithAggregatesFilter<$PrismaModel> | $Enums.vedioStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumvedioStatusFilter<$PrismaModel>
    _max?: NestedEnumvedioStatusFilter<$PrismaModel>
  }

  export type AccountCreateWithoutUserInput = {
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUncheckedCreateWithoutUserInput = {
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountCreateOrConnectWithoutUserInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountCreateManyUserInputEnvelope = {
    data: AccountCreateManyUserInput | AccountCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SessionCreateWithoutUserInput = {
    sessionToken: string
    expires: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionUncheckedCreateWithoutUserInput = {
    sessionToken: string
    expires: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionCreateOrConnectWithoutUserInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionCreateManyUserInputEnvelope = {
    data: SessionCreateManyUserInput | SessionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type newsReporterCreateWithoutUserInput = {
    id?: string
    reporterName?: string | null
    location: string
    bio: string
    profilePicture: string
    phoneNumber: string
    facebookProfileAddress?: string | null
    registered?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    newsArticle?: newsArticleCreateNestedManyWithoutNewsReporterInput
  }

  export type newsReporterUncheckedCreateWithoutUserInput = {
    id?: string
    reporterName?: string | null
    location: string
    bio: string
    profilePicture: string
    phoneNumber: string
    facebookProfileAddress?: string | null
    registered?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    newsArticle?: newsArticleUncheckedCreateNestedManyWithoutNewsReporterInput
  }

  export type newsReporterCreateOrConnectWithoutUserInput = {
    where: newsReporterWhereUniqueInput
    create: XOR<newsReporterCreateWithoutUserInput, newsReporterUncheckedCreateWithoutUserInput>
  }

  export type AdvertiserCreateWithoutUserInput = {
    id?: string
    supervisorName: string
    companyName: string
    companyAddress: string
    phoneNumber: string
    aboutCompany: string
    companyWebsite?: string | null
    registered?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdvertiserUncheckedCreateWithoutUserInput = {
    id?: string
    supervisorName: string
    companyName: string
    companyAddress: string
    phoneNumber: string
    aboutCompany: string
    companyWebsite?: string | null
    registered?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdvertiserCreateOrConnectWithoutUserInput = {
    where: AdvertiserWhereUniqueInput
    create: XOR<AdvertiserCreateWithoutUserInput, AdvertiserUncheckedCreateWithoutUserInput>
  }

  export type AccountUpsertWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    update: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountUpdateWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    data: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
  }

  export type AccountUpdateManyWithWhereWithoutUserInput = {
    where: AccountScalarWhereInput
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyWithoutUserInput>
  }

  export type AccountScalarWhereInput = {
    AND?: AccountScalarWhereInput | AccountScalarWhereInput[]
    OR?: AccountScalarWhereInput[]
    NOT?: AccountScalarWhereInput | AccountScalarWhereInput[]
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
  }

  export type SessionUpsertWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
  }

  export type SessionUpdateManyWithWhereWithoutUserInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutUserInput>
  }

  export type SessionScalarWhereInput = {
    AND?: SessionScalarWhereInput | SessionScalarWhereInput[]
    OR?: SessionScalarWhereInput[]
    NOT?: SessionScalarWhereInput | SessionScalarWhereInput[]
    sessionToken?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
  }

  export type newsReporterUpsertWithoutUserInput = {
    update: XOR<newsReporterUpdateWithoutUserInput, newsReporterUncheckedUpdateWithoutUserInput>
    create: XOR<newsReporterCreateWithoutUserInput, newsReporterUncheckedCreateWithoutUserInput>
    where?: newsReporterWhereInput
  }

  export type newsReporterUpdateToOneWithWhereWithoutUserInput = {
    where?: newsReporterWhereInput
    data: XOR<newsReporterUpdateWithoutUserInput, newsReporterUncheckedUpdateWithoutUserInput>
  }

  export type newsReporterUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    reporterName?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    profilePicture?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    facebookProfileAddress?: NullableStringFieldUpdateOperationsInput | string | null
    registered?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    newsArticle?: newsArticleUpdateManyWithoutNewsReporterNestedInput
  }

  export type newsReporterUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    reporterName?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    profilePicture?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    facebookProfileAddress?: NullableStringFieldUpdateOperationsInput | string | null
    registered?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    newsArticle?: newsArticleUncheckedUpdateManyWithoutNewsReporterNestedInput
  }

  export type AdvertiserUpsertWithoutUserInput = {
    update: XOR<AdvertiserUpdateWithoutUserInput, AdvertiserUncheckedUpdateWithoutUserInput>
    create: XOR<AdvertiserCreateWithoutUserInput, AdvertiserUncheckedCreateWithoutUserInput>
    where?: AdvertiserWhereInput
  }

  export type AdvertiserUpdateToOneWithWhereWithoutUserInput = {
    where?: AdvertiserWhereInput
    data: XOR<AdvertiserUpdateWithoutUserInput, AdvertiserUncheckedUpdateWithoutUserInput>
  }

  export type AdvertiserUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    supervisorName?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    companyAddress?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    aboutCompany?: StringFieldUpdateOperationsInput | string
    companyWebsite?: NullableStringFieldUpdateOperationsInput | string | null
    registered?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdvertiserUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    supervisorName?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    companyAddress?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    aboutCompany?: StringFieldUpdateOperationsInput | string
    companyWebsite?: NullableStringFieldUpdateOperationsInput | string | null
    registered?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type newsArticleCreateWithoutNewsReporterInput = {
    id?: string
    newsHeading: string
    newsResource: string
    newsLocation?: string | null
    newsCategory: $Enums.newsCategory
    newsPicture: string
    newsPictureHeading: string
    newsPictureCredit: string
    isFeatured?: boolean
    newsDetails: string
    duration?: number | null
    newsArticleStatus?: $Enums.newsArticleStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    quotes?: quoteCreateNestedManyWithoutArticleInput
  }

  export type newsArticleUncheckedCreateWithoutNewsReporterInput = {
    id?: string
    newsHeading: string
    newsResource: string
    newsLocation?: string | null
    newsCategory: $Enums.newsCategory
    newsPicture: string
    newsPictureHeading: string
    newsPictureCredit: string
    isFeatured?: boolean
    newsDetails: string
    duration?: number | null
    newsArticleStatus?: $Enums.newsArticleStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    quotes?: quoteUncheckedCreateNestedManyWithoutArticleInput
  }

  export type newsArticleCreateOrConnectWithoutNewsReporterInput = {
    where: newsArticleWhereUniqueInput
    create: XOR<newsArticleCreateWithoutNewsReporterInput, newsArticleUncheckedCreateWithoutNewsReporterInput>
  }

  export type newsArticleCreateManyNewsReporterInputEnvelope = {
    data: newsArticleCreateManyNewsReporterInput | newsArticleCreateManyNewsReporterInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutNewsReporterInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    userType?: $Enums.UserType | null
    approvalStatus?: $Enums.ApprovalStatus | null
    onboardingCompleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    Advertiser?: AdvertiserCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutNewsReporterInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    userType?: $Enums.UserType | null
    approvalStatus?: $Enums.ApprovalStatus | null
    onboardingCompleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    Advertiser?: AdvertiserUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutNewsReporterInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutNewsReporterInput, UserUncheckedCreateWithoutNewsReporterInput>
  }

  export type newsArticleUpsertWithWhereUniqueWithoutNewsReporterInput = {
    where: newsArticleWhereUniqueInput
    update: XOR<newsArticleUpdateWithoutNewsReporterInput, newsArticleUncheckedUpdateWithoutNewsReporterInput>
    create: XOR<newsArticleCreateWithoutNewsReporterInput, newsArticleUncheckedCreateWithoutNewsReporterInput>
  }

  export type newsArticleUpdateWithWhereUniqueWithoutNewsReporterInput = {
    where: newsArticleWhereUniqueInput
    data: XOR<newsArticleUpdateWithoutNewsReporterInput, newsArticleUncheckedUpdateWithoutNewsReporterInput>
  }

  export type newsArticleUpdateManyWithWhereWithoutNewsReporterInput = {
    where: newsArticleScalarWhereInput
    data: XOR<newsArticleUpdateManyMutationInput, newsArticleUncheckedUpdateManyWithoutNewsReporterInput>
  }

  export type newsArticleScalarWhereInput = {
    AND?: newsArticleScalarWhereInput | newsArticleScalarWhereInput[]
    OR?: newsArticleScalarWhereInput[]
    NOT?: newsArticleScalarWhereInput | newsArticleScalarWhereInput[]
    id?: StringFilter<"newsArticle"> | string
    newsHeading?: StringFilter<"newsArticle"> | string
    newsResource?: StringFilter<"newsArticle"> | string
    newsLocation?: StringNullableFilter<"newsArticle"> | string | null
    newsCategory?: EnumnewsCategoryFilter<"newsArticle"> | $Enums.newsCategory
    newsPicture?: StringFilter<"newsArticle"> | string
    newsPictureHeading?: StringFilter<"newsArticle"> | string
    newsPictureCredit?: StringFilter<"newsArticle"> | string
    isFeatured?: BoolFilter<"newsArticle"> | boolean
    newsDetails?: StringFilter<"newsArticle"> | string
    reporterId?: StringFilter<"newsArticle"> | string
    duration?: IntNullableFilter<"newsArticle"> | number | null
    newsArticleStatus?: EnumnewsArticleStatusFilter<"newsArticle"> | $Enums.newsArticleStatus
    createdAt?: DateTimeFilter<"newsArticle"> | Date | string
    updatedAt?: DateTimeFilter<"newsArticle"> | Date | string
  }

  export type UserUpsertWithoutNewsReporterInput = {
    update: XOR<UserUpdateWithoutNewsReporterInput, UserUncheckedUpdateWithoutNewsReporterInput>
    create: XOR<UserCreateWithoutNewsReporterInput, UserUncheckedCreateWithoutNewsReporterInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutNewsReporterInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutNewsReporterInput, UserUncheckedUpdateWithoutNewsReporterInput>
  }

  export type UserUpdateWithoutNewsReporterInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    userType?: NullableEnumUserTypeFieldUpdateOperationsInput | $Enums.UserType | null
    approvalStatus?: NullableEnumApprovalStatusFieldUpdateOperationsInput | $Enums.ApprovalStatus | null
    onboardingCompleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    Advertiser?: AdvertiserUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutNewsReporterInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    userType?: NullableEnumUserTypeFieldUpdateOperationsInput | $Enums.UserType | null
    approvalStatus?: NullableEnumApprovalStatusFieldUpdateOperationsInput | $Enums.ApprovalStatus | null
    onboardingCompleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    Advertiser?: AdvertiserUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateWithoutAdvertiserInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    userType?: $Enums.UserType | null
    approvalStatus?: $Enums.ApprovalStatus | null
    onboardingCompleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    newsReporter?: newsReporterCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAdvertiserInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    userType?: $Enums.UserType | null
    approvalStatus?: $Enums.ApprovalStatus | null
    onboardingCompleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    newsReporter?: newsReporterUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAdvertiserInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAdvertiserInput, UserUncheckedCreateWithoutAdvertiserInput>
  }

  export type UserUpsertWithoutAdvertiserInput = {
    update: XOR<UserUpdateWithoutAdvertiserInput, UserUncheckedUpdateWithoutAdvertiserInput>
    create: XOR<UserCreateWithoutAdvertiserInput, UserUncheckedCreateWithoutAdvertiserInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAdvertiserInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAdvertiserInput, UserUncheckedUpdateWithoutAdvertiserInput>
  }

  export type UserUpdateWithoutAdvertiserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    userType?: NullableEnumUserTypeFieldUpdateOperationsInput | $Enums.UserType | null
    approvalStatus?: NullableEnumApprovalStatusFieldUpdateOperationsInput | $Enums.ApprovalStatus | null
    onboardingCompleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    newsReporter?: newsReporterUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAdvertiserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    userType?: NullableEnumUserTypeFieldUpdateOperationsInput | $Enums.UserType | null
    approvalStatus?: NullableEnumApprovalStatusFieldUpdateOperationsInput | $Enums.ApprovalStatus | null
    onboardingCompleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    newsReporter?: newsReporterUncheckedUpdateOneWithoutUserNestedInput
  }

  export type quoteCreateWithoutArticleInput = {
    id?: string
    text: string
    speakerInfo: string
    createdAt?: Date | string
  }

  export type quoteUncheckedCreateWithoutArticleInput = {
    id?: string
    text: string
    speakerInfo: string
    createdAt?: Date | string
  }

  export type quoteCreateOrConnectWithoutArticleInput = {
    where: quoteWhereUniqueInput
    create: XOR<quoteCreateWithoutArticleInput, quoteUncheckedCreateWithoutArticleInput>
  }

  export type quoteCreateManyArticleInputEnvelope = {
    data: quoteCreateManyArticleInput | quoteCreateManyArticleInput[]
    skipDuplicates?: boolean
  }

  export type newsReporterCreateWithoutNewsArticleInput = {
    id?: string
    reporterName?: string | null
    location: string
    bio: string
    profilePicture: string
    phoneNumber: string
    facebookProfileAddress?: string | null
    registered?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutNewsReporterInput
  }

  export type newsReporterUncheckedCreateWithoutNewsArticleInput = {
    id?: string
    reporterName?: string | null
    location: string
    bio: string
    profilePicture: string
    phoneNumber: string
    facebookProfileAddress?: string | null
    userId: string
    registered?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type newsReporterCreateOrConnectWithoutNewsArticleInput = {
    where: newsReporterWhereUniqueInput
    create: XOR<newsReporterCreateWithoutNewsArticleInput, newsReporterUncheckedCreateWithoutNewsArticleInput>
  }

  export type quoteUpsertWithWhereUniqueWithoutArticleInput = {
    where: quoteWhereUniqueInput
    update: XOR<quoteUpdateWithoutArticleInput, quoteUncheckedUpdateWithoutArticleInput>
    create: XOR<quoteCreateWithoutArticleInput, quoteUncheckedCreateWithoutArticleInput>
  }

  export type quoteUpdateWithWhereUniqueWithoutArticleInput = {
    where: quoteWhereUniqueInput
    data: XOR<quoteUpdateWithoutArticleInput, quoteUncheckedUpdateWithoutArticleInput>
  }

  export type quoteUpdateManyWithWhereWithoutArticleInput = {
    where: quoteScalarWhereInput
    data: XOR<quoteUpdateManyMutationInput, quoteUncheckedUpdateManyWithoutArticleInput>
  }

  export type quoteScalarWhereInput = {
    AND?: quoteScalarWhereInput | quoteScalarWhereInput[]
    OR?: quoteScalarWhereInput[]
    NOT?: quoteScalarWhereInput | quoteScalarWhereInput[]
    id?: StringFilter<"quote"> | string
    text?: StringFilter<"quote"> | string
    speakerInfo?: StringFilter<"quote"> | string
    articleId?: StringFilter<"quote"> | string
    createdAt?: DateTimeFilter<"quote"> | Date | string
  }

  export type newsReporterUpsertWithoutNewsArticleInput = {
    update: XOR<newsReporterUpdateWithoutNewsArticleInput, newsReporterUncheckedUpdateWithoutNewsArticleInput>
    create: XOR<newsReporterCreateWithoutNewsArticleInput, newsReporterUncheckedCreateWithoutNewsArticleInput>
    where?: newsReporterWhereInput
  }

  export type newsReporterUpdateToOneWithWhereWithoutNewsArticleInput = {
    where?: newsReporterWhereInput
    data: XOR<newsReporterUpdateWithoutNewsArticleInput, newsReporterUncheckedUpdateWithoutNewsArticleInput>
  }

  export type newsReporterUpdateWithoutNewsArticleInput = {
    id?: StringFieldUpdateOperationsInput | string
    reporterName?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    profilePicture?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    facebookProfileAddress?: NullableStringFieldUpdateOperationsInput | string | null
    registered?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutNewsReporterNestedInput
  }

  export type newsReporterUncheckedUpdateWithoutNewsArticleInput = {
    id?: StringFieldUpdateOperationsInput | string
    reporterName?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    profilePicture?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    facebookProfileAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    registered?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type newsArticleCreateWithoutQuotesInput = {
    id?: string
    newsHeading: string
    newsResource: string
    newsLocation?: string | null
    newsCategory: $Enums.newsCategory
    newsPicture: string
    newsPictureHeading: string
    newsPictureCredit: string
    isFeatured?: boolean
    newsDetails: string
    duration?: number | null
    newsArticleStatus?: $Enums.newsArticleStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    newsReporter: newsReporterCreateNestedOneWithoutNewsArticleInput
  }

  export type newsArticleUncheckedCreateWithoutQuotesInput = {
    id?: string
    newsHeading: string
    newsResource: string
    newsLocation?: string | null
    newsCategory: $Enums.newsCategory
    newsPicture: string
    newsPictureHeading: string
    newsPictureCredit: string
    isFeatured?: boolean
    newsDetails: string
    reporterId: string
    duration?: number | null
    newsArticleStatus?: $Enums.newsArticleStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type newsArticleCreateOrConnectWithoutQuotesInput = {
    where: newsArticleWhereUniqueInput
    create: XOR<newsArticleCreateWithoutQuotesInput, newsArticleUncheckedCreateWithoutQuotesInput>
  }

  export type newsArticleUpsertWithoutQuotesInput = {
    update: XOR<newsArticleUpdateWithoutQuotesInput, newsArticleUncheckedUpdateWithoutQuotesInput>
    create: XOR<newsArticleCreateWithoutQuotesInput, newsArticleUncheckedCreateWithoutQuotesInput>
    where?: newsArticleWhereInput
  }

  export type newsArticleUpdateToOneWithWhereWithoutQuotesInput = {
    where?: newsArticleWhereInput
    data: XOR<newsArticleUpdateWithoutQuotesInput, newsArticleUncheckedUpdateWithoutQuotesInput>
  }

  export type newsArticleUpdateWithoutQuotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    newsHeading?: StringFieldUpdateOperationsInput | string
    newsResource?: StringFieldUpdateOperationsInput | string
    newsLocation?: NullableStringFieldUpdateOperationsInput | string | null
    newsCategory?: EnumnewsCategoryFieldUpdateOperationsInput | $Enums.newsCategory
    newsPicture?: StringFieldUpdateOperationsInput | string
    newsPictureHeading?: StringFieldUpdateOperationsInput | string
    newsPictureCredit?: StringFieldUpdateOperationsInput | string
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    newsDetails?: StringFieldUpdateOperationsInput | string
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    newsArticleStatus?: EnumnewsArticleStatusFieldUpdateOperationsInput | $Enums.newsArticleStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    newsReporter?: newsReporterUpdateOneRequiredWithoutNewsArticleNestedInput
  }

  export type newsArticleUncheckedUpdateWithoutQuotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    newsHeading?: StringFieldUpdateOperationsInput | string
    newsResource?: StringFieldUpdateOperationsInput | string
    newsLocation?: NullableStringFieldUpdateOperationsInput | string | null
    newsCategory?: EnumnewsCategoryFieldUpdateOperationsInput | $Enums.newsCategory
    newsPicture?: StringFieldUpdateOperationsInput | string
    newsPictureHeading?: StringFieldUpdateOperationsInput | string
    newsPictureCredit?: StringFieldUpdateOperationsInput | string
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    newsDetails?: StringFieldUpdateOperationsInput | string
    reporterId?: StringFieldUpdateOperationsInput | string
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    newsArticleStatus?: EnumnewsArticleStatusFieldUpdateOperationsInput | $Enums.newsArticleStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutAccountsInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    userType?: $Enums.UserType | null
    approvalStatus?: $Enums.ApprovalStatus | null
    onboardingCompleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionCreateNestedManyWithoutUserInput
    newsReporter?: newsReporterCreateNestedOneWithoutUserInput
    Advertiser?: AdvertiserCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAccountsInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    userType?: $Enums.UserType | null
    approvalStatus?: $Enums.ApprovalStatus | null
    onboardingCompleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    newsReporter?: newsReporterUncheckedCreateNestedOneWithoutUserInput
    Advertiser?: AdvertiserUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAccountsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
  }

  export type UserUpsertWithoutAccountsInput = {
    update: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAccountsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    userType?: NullableEnumUserTypeFieldUpdateOperationsInput | $Enums.UserType | null
    approvalStatus?: NullableEnumApprovalStatusFieldUpdateOperationsInput | $Enums.ApprovalStatus | null
    onboardingCompleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUpdateManyWithoutUserNestedInput
    newsReporter?: newsReporterUpdateOneWithoutUserNestedInput
    Advertiser?: AdvertiserUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    userType?: NullableEnumUserTypeFieldUpdateOperationsInput | $Enums.UserType | null
    approvalStatus?: NullableEnumApprovalStatusFieldUpdateOperationsInput | $Enums.ApprovalStatus | null
    onboardingCompleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    newsReporter?: newsReporterUncheckedUpdateOneWithoutUserNestedInput
    Advertiser?: AdvertiserUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateWithoutSessionsInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    userType?: $Enums.UserType | null
    approvalStatus?: $Enums.ApprovalStatus | null
    onboardingCompleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    newsReporter?: newsReporterCreateNestedOneWithoutUserInput
    Advertiser?: AdvertiserCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSessionsInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    userType?: $Enums.UserType | null
    approvalStatus?: $Enums.ApprovalStatus | null
    onboardingCompleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    newsReporter?: newsReporterUncheckedCreateNestedOneWithoutUserInput
    Advertiser?: AdvertiserUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
  }

  export type UserUpsertWithoutSessionsInput = {
    update: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    userType?: NullableEnumUserTypeFieldUpdateOperationsInput | $Enums.UserType | null
    approvalStatus?: NullableEnumApprovalStatusFieldUpdateOperationsInput | $Enums.ApprovalStatus | null
    onboardingCompleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    newsReporter?: newsReporterUpdateOneWithoutUserNestedInput
    Advertiser?: AdvertiserUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    userType?: NullableEnumUserTypeFieldUpdateOperationsInput | $Enums.UserType | null
    approvalStatus?: NullableEnumApprovalStatusFieldUpdateOperationsInput | $Enums.ApprovalStatus | null
    onboardingCompleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    newsReporter?: newsReporterUncheckedUpdateOneWithoutUserNestedInput
    Advertiser?: AdvertiserUncheckedUpdateOneWithoutUserNestedInput
  }

  export type AccountCreateManyUserInput = {
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionCreateManyUserInput = {
    sessionToken: string
    expires: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUpdateWithoutUserInput = {
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateWithoutUserInput = {
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateManyWithoutUserInput = {
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUpdateWithoutUserInput = {
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateWithoutUserInput = {
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyWithoutUserInput = {
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type newsArticleCreateManyNewsReporterInput = {
    id?: string
    newsHeading: string
    newsResource: string
    newsLocation?: string | null
    newsCategory: $Enums.newsCategory
    newsPicture: string
    newsPictureHeading: string
    newsPictureCredit: string
    isFeatured?: boolean
    newsDetails: string
    duration?: number | null
    newsArticleStatus?: $Enums.newsArticleStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type newsArticleUpdateWithoutNewsReporterInput = {
    id?: StringFieldUpdateOperationsInput | string
    newsHeading?: StringFieldUpdateOperationsInput | string
    newsResource?: StringFieldUpdateOperationsInput | string
    newsLocation?: NullableStringFieldUpdateOperationsInput | string | null
    newsCategory?: EnumnewsCategoryFieldUpdateOperationsInput | $Enums.newsCategory
    newsPicture?: StringFieldUpdateOperationsInput | string
    newsPictureHeading?: StringFieldUpdateOperationsInput | string
    newsPictureCredit?: StringFieldUpdateOperationsInput | string
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    newsDetails?: StringFieldUpdateOperationsInput | string
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    newsArticleStatus?: EnumnewsArticleStatusFieldUpdateOperationsInput | $Enums.newsArticleStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quotes?: quoteUpdateManyWithoutArticleNestedInput
  }

  export type newsArticleUncheckedUpdateWithoutNewsReporterInput = {
    id?: StringFieldUpdateOperationsInput | string
    newsHeading?: StringFieldUpdateOperationsInput | string
    newsResource?: StringFieldUpdateOperationsInput | string
    newsLocation?: NullableStringFieldUpdateOperationsInput | string | null
    newsCategory?: EnumnewsCategoryFieldUpdateOperationsInput | $Enums.newsCategory
    newsPicture?: StringFieldUpdateOperationsInput | string
    newsPictureHeading?: StringFieldUpdateOperationsInput | string
    newsPictureCredit?: StringFieldUpdateOperationsInput | string
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    newsDetails?: StringFieldUpdateOperationsInput | string
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    newsArticleStatus?: EnumnewsArticleStatusFieldUpdateOperationsInput | $Enums.newsArticleStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quotes?: quoteUncheckedUpdateManyWithoutArticleNestedInput
  }

  export type newsArticleUncheckedUpdateManyWithoutNewsReporterInput = {
    id?: StringFieldUpdateOperationsInput | string
    newsHeading?: StringFieldUpdateOperationsInput | string
    newsResource?: StringFieldUpdateOperationsInput | string
    newsLocation?: NullableStringFieldUpdateOperationsInput | string | null
    newsCategory?: EnumnewsCategoryFieldUpdateOperationsInput | $Enums.newsCategory
    newsPicture?: StringFieldUpdateOperationsInput | string
    newsPictureHeading?: StringFieldUpdateOperationsInput | string
    newsPictureCredit?: StringFieldUpdateOperationsInput | string
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    newsDetails?: StringFieldUpdateOperationsInput | string
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    newsArticleStatus?: EnumnewsArticleStatusFieldUpdateOperationsInput | $Enums.newsArticleStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type quoteCreateManyArticleInput = {
    id?: string
    text: string
    speakerInfo: string
    createdAt?: Date | string
  }

  export type quoteUpdateWithoutArticleInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    speakerInfo?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type quoteUncheckedUpdateWithoutArticleInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    speakerInfo?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type quoteUncheckedUpdateManyWithoutArticleInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    speakerInfo?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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