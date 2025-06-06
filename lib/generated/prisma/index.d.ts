
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
 * Model Organization
 * 
 */
export type Organization = $Result.DefaultSelection<Prisma.$OrganizationPayload>
/**
 * Model Unit
 * 
 */
export type Unit = $Result.DefaultSelection<Prisma.$UnitPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Employee
 * 
 */
export type Employee = $Result.DefaultSelection<Prisma.$EmployeePayload>
/**
 * Model FrequencySheet
 * 
 */
export type FrequencySheet = $Result.DefaultSelection<Prisma.$FrequencySheetPayload>
/**
 * Model FrequencyEntry
 * 
 */
export type FrequencyEntry = $Result.DefaultSelection<Prisma.$FrequencyEntryPayload>
/**
 * Model EventType
 * 
 */
export type EventType = $Result.DefaultSelection<Prisma.$EventTypePayload>
/**
 * Model EventCode
 * 
 */
export type EventCode = $Result.DefaultSelection<Prisma.$EventCodePayload>
/**
 * Model SalaryFloor
 * 
 */
export type SalaryFloor = $Result.DefaultSelection<Prisma.$SalaryFloorPayload>
/**
 * Model Log
 * 
 */
export type Log = $Result.DefaultSelection<Prisma.$LogPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserRole: {
  MASTER: 'MASTER',
  ADMIN: 'ADMIN',
  COORDINATOR: 'COORDINATOR',
  RESPONSIBLE: 'RESPONSIBLE',
  VIEWER: 'VIEWER'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]


export const SheetStatus: {
  DRAFT: 'DRAFT',
  SUBMITTED: 'SUBMITTED',
  APPROVED: 'APPROVED',
  REJECTED: 'REJECTED'
};

export type SheetStatus = (typeof SheetStatus)[keyof typeof SheetStatus]

}

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

export type SheetStatus = $Enums.SheetStatus

export const SheetStatus: typeof $Enums.SheetStatus

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Organizations
 * const organizations = await prisma.organization.findMany()
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
   * // Fetch zero or more Organizations
   * const organizations = await prisma.organization.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.organization`: Exposes CRUD operations for the **Organization** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Organizations
    * const organizations = await prisma.organization.findMany()
    * ```
    */
  get organization(): Prisma.OrganizationDelegate<ExtArgs>;

  /**
   * `prisma.unit`: Exposes CRUD operations for the **Unit** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Units
    * const units = await prisma.unit.findMany()
    * ```
    */
  get unit(): Prisma.UnitDelegate<ExtArgs>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.employee`: Exposes CRUD operations for the **Employee** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Employees
    * const employees = await prisma.employee.findMany()
    * ```
    */
  get employee(): Prisma.EmployeeDelegate<ExtArgs>;

  /**
   * `prisma.frequencySheet`: Exposes CRUD operations for the **FrequencySheet** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FrequencySheets
    * const frequencySheets = await prisma.frequencySheet.findMany()
    * ```
    */
  get frequencySheet(): Prisma.FrequencySheetDelegate<ExtArgs>;

  /**
   * `prisma.frequencyEntry`: Exposes CRUD operations for the **FrequencyEntry** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FrequencyEntries
    * const frequencyEntries = await prisma.frequencyEntry.findMany()
    * ```
    */
  get frequencyEntry(): Prisma.FrequencyEntryDelegate<ExtArgs>;

  /**
   * `prisma.eventType`: Exposes CRUD operations for the **EventType** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EventTypes
    * const eventTypes = await prisma.eventType.findMany()
    * ```
    */
  get eventType(): Prisma.EventTypeDelegate<ExtArgs>;

  /**
   * `prisma.eventCode`: Exposes CRUD operations for the **EventCode** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EventCodes
    * const eventCodes = await prisma.eventCode.findMany()
    * ```
    */
  get eventCode(): Prisma.EventCodeDelegate<ExtArgs>;

  /**
   * `prisma.salaryFloor`: Exposes CRUD operations for the **SalaryFloor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SalaryFloors
    * const salaryFloors = await prisma.salaryFloor.findMany()
    * ```
    */
  get salaryFloor(): Prisma.SalaryFloorDelegate<ExtArgs>;

  /**
   * `prisma.log`: Exposes CRUD operations for the **Log** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Logs
    * const logs = await prisma.log.findMany()
    * ```
    */
  get log(): Prisma.LogDelegate<ExtArgs>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
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
    Organization: 'Organization',
    Unit: 'Unit',
    User: 'User',
    Employee: 'Employee',
    FrequencySheet: 'FrequencySheet',
    FrequencyEntry: 'FrequencyEntry',
    EventType: 'EventType',
    EventCode: 'EventCode',
    SalaryFloor: 'SalaryFloor',
    Log: 'Log'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "organization" | "unit" | "user" | "employee" | "frequencySheet" | "frequencyEntry" | "eventType" | "eventCode" | "salaryFloor" | "log"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Organization: {
        payload: Prisma.$OrganizationPayload<ExtArgs>
        fields: Prisma.OrganizationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrganizationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrganizationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          findFirst: {
            args: Prisma.OrganizationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrganizationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          findMany: {
            args: Prisma.OrganizationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>[]
          }
          create: {
            args: Prisma.OrganizationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          createMany: {
            args: Prisma.OrganizationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrganizationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>[]
          }
          delete: {
            args: Prisma.OrganizationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          update: {
            args: Prisma.OrganizationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          deleteMany: {
            args: Prisma.OrganizationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrganizationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.OrganizationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          aggregate: {
            args: Prisma.OrganizationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrganization>
          }
          groupBy: {
            args: Prisma.OrganizationGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrganizationGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrganizationCountArgs<ExtArgs>
            result: $Utils.Optional<OrganizationCountAggregateOutputType> | number
          }
        }
      }
      Unit: {
        payload: Prisma.$UnitPayload<ExtArgs>
        fields: Prisma.UnitFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UnitFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UnitFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitPayload>
          }
          findFirst: {
            args: Prisma.UnitFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UnitFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitPayload>
          }
          findMany: {
            args: Prisma.UnitFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitPayload>[]
          }
          create: {
            args: Prisma.UnitCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitPayload>
          }
          createMany: {
            args: Prisma.UnitCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UnitCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitPayload>[]
          }
          delete: {
            args: Prisma.UnitDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitPayload>
          }
          update: {
            args: Prisma.UnitUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitPayload>
          }
          deleteMany: {
            args: Prisma.UnitDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UnitUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UnitUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitPayload>
          }
          aggregate: {
            args: Prisma.UnitAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUnit>
          }
          groupBy: {
            args: Prisma.UnitGroupByArgs<ExtArgs>
            result: $Utils.Optional<UnitGroupByOutputType>[]
          }
          count: {
            args: Prisma.UnitCountArgs<ExtArgs>
            result: $Utils.Optional<UnitCountAggregateOutputType> | number
          }
        }
      }
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
      Employee: {
        payload: Prisma.$EmployeePayload<ExtArgs>
        fields: Prisma.EmployeeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EmployeeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EmployeeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          findFirst: {
            args: Prisma.EmployeeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EmployeeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          findMany: {
            args: Prisma.EmployeeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>[]
          }
          create: {
            args: Prisma.EmployeeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          createMany: {
            args: Prisma.EmployeeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EmployeeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>[]
          }
          delete: {
            args: Prisma.EmployeeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          update: {
            args: Prisma.EmployeeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          deleteMany: {
            args: Prisma.EmployeeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EmployeeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.EmployeeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          aggregate: {
            args: Prisma.EmployeeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmployee>
          }
          groupBy: {
            args: Prisma.EmployeeGroupByArgs<ExtArgs>
            result: $Utils.Optional<EmployeeGroupByOutputType>[]
          }
          count: {
            args: Prisma.EmployeeCountArgs<ExtArgs>
            result: $Utils.Optional<EmployeeCountAggregateOutputType> | number
          }
        }
      }
      FrequencySheet: {
        payload: Prisma.$FrequencySheetPayload<ExtArgs>
        fields: Prisma.FrequencySheetFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FrequencySheetFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FrequencySheetPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FrequencySheetFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FrequencySheetPayload>
          }
          findFirst: {
            args: Prisma.FrequencySheetFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FrequencySheetPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FrequencySheetFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FrequencySheetPayload>
          }
          findMany: {
            args: Prisma.FrequencySheetFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FrequencySheetPayload>[]
          }
          create: {
            args: Prisma.FrequencySheetCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FrequencySheetPayload>
          }
          createMany: {
            args: Prisma.FrequencySheetCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FrequencySheetCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FrequencySheetPayload>[]
          }
          delete: {
            args: Prisma.FrequencySheetDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FrequencySheetPayload>
          }
          update: {
            args: Prisma.FrequencySheetUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FrequencySheetPayload>
          }
          deleteMany: {
            args: Prisma.FrequencySheetDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FrequencySheetUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FrequencySheetUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FrequencySheetPayload>
          }
          aggregate: {
            args: Prisma.FrequencySheetAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFrequencySheet>
          }
          groupBy: {
            args: Prisma.FrequencySheetGroupByArgs<ExtArgs>
            result: $Utils.Optional<FrequencySheetGroupByOutputType>[]
          }
          count: {
            args: Prisma.FrequencySheetCountArgs<ExtArgs>
            result: $Utils.Optional<FrequencySheetCountAggregateOutputType> | number
          }
        }
      }
      FrequencyEntry: {
        payload: Prisma.$FrequencyEntryPayload<ExtArgs>
        fields: Prisma.FrequencyEntryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FrequencyEntryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FrequencyEntryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FrequencyEntryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FrequencyEntryPayload>
          }
          findFirst: {
            args: Prisma.FrequencyEntryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FrequencyEntryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FrequencyEntryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FrequencyEntryPayload>
          }
          findMany: {
            args: Prisma.FrequencyEntryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FrequencyEntryPayload>[]
          }
          create: {
            args: Prisma.FrequencyEntryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FrequencyEntryPayload>
          }
          createMany: {
            args: Prisma.FrequencyEntryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FrequencyEntryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FrequencyEntryPayload>[]
          }
          delete: {
            args: Prisma.FrequencyEntryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FrequencyEntryPayload>
          }
          update: {
            args: Prisma.FrequencyEntryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FrequencyEntryPayload>
          }
          deleteMany: {
            args: Prisma.FrequencyEntryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FrequencyEntryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FrequencyEntryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FrequencyEntryPayload>
          }
          aggregate: {
            args: Prisma.FrequencyEntryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFrequencyEntry>
          }
          groupBy: {
            args: Prisma.FrequencyEntryGroupByArgs<ExtArgs>
            result: $Utils.Optional<FrequencyEntryGroupByOutputType>[]
          }
          count: {
            args: Prisma.FrequencyEntryCountArgs<ExtArgs>
            result: $Utils.Optional<FrequencyEntryCountAggregateOutputType> | number
          }
        }
      }
      EventType: {
        payload: Prisma.$EventTypePayload<ExtArgs>
        fields: Prisma.EventTypeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EventTypeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventTypePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EventTypeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventTypePayload>
          }
          findFirst: {
            args: Prisma.EventTypeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventTypePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EventTypeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventTypePayload>
          }
          findMany: {
            args: Prisma.EventTypeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventTypePayload>[]
          }
          create: {
            args: Prisma.EventTypeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventTypePayload>
          }
          createMany: {
            args: Prisma.EventTypeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EventTypeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventTypePayload>[]
          }
          delete: {
            args: Prisma.EventTypeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventTypePayload>
          }
          update: {
            args: Prisma.EventTypeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventTypePayload>
          }
          deleteMany: {
            args: Prisma.EventTypeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EventTypeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.EventTypeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventTypePayload>
          }
          aggregate: {
            args: Prisma.EventTypeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEventType>
          }
          groupBy: {
            args: Prisma.EventTypeGroupByArgs<ExtArgs>
            result: $Utils.Optional<EventTypeGroupByOutputType>[]
          }
          count: {
            args: Prisma.EventTypeCountArgs<ExtArgs>
            result: $Utils.Optional<EventTypeCountAggregateOutputType> | number
          }
        }
      }
      EventCode: {
        payload: Prisma.$EventCodePayload<ExtArgs>
        fields: Prisma.EventCodeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EventCodeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventCodePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EventCodeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventCodePayload>
          }
          findFirst: {
            args: Prisma.EventCodeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventCodePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EventCodeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventCodePayload>
          }
          findMany: {
            args: Prisma.EventCodeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventCodePayload>[]
          }
          create: {
            args: Prisma.EventCodeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventCodePayload>
          }
          createMany: {
            args: Prisma.EventCodeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EventCodeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventCodePayload>[]
          }
          delete: {
            args: Prisma.EventCodeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventCodePayload>
          }
          update: {
            args: Prisma.EventCodeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventCodePayload>
          }
          deleteMany: {
            args: Prisma.EventCodeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EventCodeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.EventCodeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventCodePayload>
          }
          aggregate: {
            args: Prisma.EventCodeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEventCode>
          }
          groupBy: {
            args: Prisma.EventCodeGroupByArgs<ExtArgs>
            result: $Utils.Optional<EventCodeGroupByOutputType>[]
          }
          count: {
            args: Prisma.EventCodeCountArgs<ExtArgs>
            result: $Utils.Optional<EventCodeCountAggregateOutputType> | number
          }
        }
      }
      SalaryFloor: {
        payload: Prisma.$SalaryFloorPayload<ExtArgs>
        fields: Prisma.SalaryFloorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SalaryFloorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalaryFloorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SalaryFloorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalaryFloorPayload>
          }
          findFirst: {
            args: Prisma.SalaryFloorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalaryFloorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SalaryFloorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalaryFloorPayload>
          }
          findMany: {
            args: Prisma.SalaryFloorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalaryFloorPayload>[]
          }
          create: {
            args: Prisma.SalaryFloorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalaryFloorPayload>
          }
          createMany: {
            args: Prisma.SalaryFloorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SalaryFloorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalaryFloorPayload>[]
          }
          delete: {
            args: Prisma.SalaryFloorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalaryFloorPayload>
          }
          update: {
            args: Prisma.SalaryFloorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalaryFloorPayload>
          }
          deleteMany: {
            args: Prisma.SalaryFloorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SalaryFloorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SalaryFloorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalaryFloorPayload>
          }
          aggregate: {
            args: Prisma.SalaryFloorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSalaryFloor>
          }
          groupBy: {
            args: Prisma.SalaryFloorGroupByArgs<ExtArgs>
            result: $Utils.Optional<SalaryFloorGroupByOutputType>[]
          }
          count: {
            args: Prisma.SalaryFloorCountArgs<ExtArgs>
            result: $Utils.Optional<SalaryFloorCountAggregateOutputType> | number
          }
        }
      }
      Log: {
        payload: Prisma.$LogPayload<ExtArgs>
        fields: Prisma.LogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogPayload>
          }
          findFirst: {
            args: Prisma.LogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogPayload>
          }
          findMany: {
            args: Prisma.LogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogPayload>[]
          }
          create: {
            args: Prisma.LogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogPayload>
          }
          createMany: {
            args: Prisma.LogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogPayload>[]
          }
          delete: {
            args: Prisma.LogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogPayload>
          }
          update: {
            args: Prisma.LogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogPayload>
          }
          deleteMany: {
            args: Prisma.LogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.LogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogPayload>
          }
          aggregate: {
            args: Prisma.LogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLog>
          }
          groupBy: {
            args: Prisma.LogGroupByArgs<ExtArgs>
            result: $Utils.Optional<LogGroupByOutputType>[]
          }
          count: {
            args: Prisma.LogCountArgs<ExtArgs>
            result: $Utils.Optional<LogCountAggregateOutputType> | number
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
   * Count Type OrganizationCountOutputType
   */

  export type OrganizationCountOutputType = {
    units: number
    users: number
    employees: number
    frequency_sheets: number
    event_codes: number
    salary_floors: number
    logs: number
  }

  export type OrganizationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    units?: boolean | OrganizationCountOutputTypeCountUnitsArgs
    users?: boolean | OrganizationCountOutputTypeCountUsersArgs
    employees?: boolean | OrganizationCountOutputTypeCountEmployeesArgs
    frequency_sheets?: boolean | OrganizationCountOutputTypeCountFrequency_sheetsArgs
    event_codes?: boolean | OrganizationCountOutputTypeCountEvent_codesArgs
    salary_floors?: boolean | OrganizationCountOutputTypeCountSalary_floorsArgs
    logs?: boolean | OrganizationCountOutputTypeCountLogsArgs
  }

  // Custom InputTypes
  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationCountOutputType
     */
    select?: OrganizationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeCountUnitsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UnitWhereInput
  }

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeCountEmployeesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmployeeWhereInput
  }

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeCountFrequency_sheetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FrequencySheetWhereInput
  }

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeCountEvent_codesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventCodeWhereInput
  }

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeCountSalary_floorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SalaryFloorWhereInput
  }

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeCountLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LogWhereInput
  }


  /**
   * Count Type UnitCountOutputType
   */

  export type UnitCountOutputType = {
    employees: number
    users: number
    frequency_sheets: number
  }

  export type UnitCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employees?: boolean | UnitCountOutputTypeCountEmployeesArgs
    users?: boolean | UnitCountOutputTypeCountUsersArgs
    frequency_sheets?: boolean | UnitCountOutputTypeCountFrequency_sheetsArgs
  }

  // Custom InputTypes
  /**
   * UnitCountOutputType without action
   */
  export type UnitCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnitCountOutputType
     */
    select?: UnitCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UnitCountOutputType without action
   */
  export type UnitCountOutputTypeCountEmployeesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmployeeWhereInput
  }

  /**
   * UnitCountOutputType without action
   */
  export type UnitCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * UnitCountOutputType without action
   */
  export type UnitCountOutputTypeCountFrequency_sheetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FrequencySheetWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    submitted_sheets: number
    logs: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    submitted_sheets?: boolean | UserCountOutputTypeCountSubmitted_sheetsArgs
    logs?: boolean | UserCountOutputTypeCountLogsArgs
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
  export type UserCountOutputTypeCountSubmitted_sheetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FrequencySheetWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LogWhereInput
  }


  /**
   * Count Type EmployeeCountOutputType
   */

  export type EmployeeCountOutputType = {
    frequency_entries: number
  }

  export type EmployeeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    frequency_entries?: boolean | EmployeeCountOutputTypeCountFrequency_entriesArgs
  }

  // Custom InputTypes
  /**
   * EmployeeCountOutputType without action
   */
  export type EmployeeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeCountOutputType
     */
    select?: EmployeeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EmployeeCountOutputType without action
   */
  export type EmployeeCountOutputTypeCountFrequency_entriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FrequencyEntryWhereInput
  }


  /**
   * Count Type FrequencySheetCountOutputType
   */

  export type FrequencySheetCountOutputType = {
    entries: number
  }

  export type FrequencySheetCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    entries?: boolean | FrequencySheetCountOutputTypeCountEntriesArgs
  }

  // Custom InputTypes
  /**
   * FrequencySheetCountOutputType without action
   */
  export type FrequencySheetCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FrequencySheetCountOutputType
     */
    select?: FrequencySheetCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FrequencySheetCountOutputType without action
   */
  export type FrequencySheetCountOutputTypeCountEntriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FrequencyEntryWhereInput
  }


  /**
   * Count Type EventTypeCountOutputType
   */

  export type EventTypeCountOutputType = {
    event_codes: number
  }

  export type EventTypeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event_codes?: boolean | EventTypeCountOutputTypeCountEvent_codesArgs
  }

  // Custom InputTypes
  /**
   * EventTypeCountOutputType without action
   */
  export type EventTypeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventTypeCountOutputType
     */
    select?: EventTypeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EventTypeCountOutputType without action
   */
  export type EventTypeCountOutputTypeCountEvent_codesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventCodeWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Organization
   */

  export type AggregateOrganization = {
    _count: OrganizationCountAggregateOutputType | null
    _min: OrganizationMinAggregateOutputType | null
    _max: OrganizationMaxAggregateOutputType | null
  }

  export type OrganizationMinAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    logo_url: string | null
    created_at: Date | null
  }

  export type OrganizationMaxAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    logo_url: string | null
    created_at: Date | null
  }

  export type OrganizationCountAggregateOutputType = {
    id: number
    name: number
    slug: number
    logo_url: number
    created_at: number
    _all: number
  }


  export type OrganizationMinAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    logo_url?: true
    created_at?: true
  }

  export type OrganizationMaxAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    logo_url?: true
    created_at?: true
  }

  export type OrganizationCountAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    logo_url?: true
    created_at?: true
    _all?: true
  }

  export type OrganizationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Organization to aggregate.
     */
    where?: OrganizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizations to fetch.
     */
    orderBy?: OrganizationOrderByWithRelationInput | OrganizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrganizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Organizations
    **/
    _count?: true | OrganizationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrganizationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrganizationMaxAggregateInputType
  }

  export type GetOrganizationAggregateType<T extends OrganizationAggregateArgs> = {
        [P in keyof T & keyof AggregateOrganization]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrganization[P]>
      : GetScalarType<T[P], AggregateOrganization[P]>
  }




  export type OrganizationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrganizationWhereInput
    orderBy?: OrganizationOrderByWithAggregationInput | OrganizationOrderByWithAggregationInput[]
    by: OrganizationScalarFieldEnum[] | OrganizationScalarFieldEnum
    having?: OrganizationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrganizationCountAggregateInputType | true
    _min?: OrganizationMinAggregateInputType
    _max?: OrganizationMaxAggregateInputType
  }

  export type OrganizationGroupByOutputType = {
    id: string
    name: string
    slug: string
    logo_url: string | null
    created_at: Date
    _count: OrganizationCountAggregateOutputType | null
    _min: OrganizationMinAggregateOutputType | null
    _max: OrganizationMaxAggregateOutputType | null
  }

  type GetOrganizationGroupByPayload<T extends OrganizationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrganizationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrganizationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrganizationGroupByOutputType[P]>
            : GetScalarType<T[P], OrganizationGroupByOutputType[P]>
        }
      >
    >


  export type OrganizationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    logo_url?: boolean
    created_at?: boolean
    units?: boolean | Organization$unitsArgs<ExtArgs>
    users?: boolean | Organization$usersArgs<ExtArgs>
    employees?: boolean | Organization$employeesArgs<ExtArgs>
    frequency_sheets?: boolean | Organization$frequency_sheetsArgs<ExtArgs>
    event_codes?: boolean | Organization$event_codesArgs<ExtArgs>
    salary_floors?: boolean | Organization$salary_floorsArgs<ExtArgs>
    logs?: boolean | Organization$logsArgs<ExtArgs>
    _count?: boolean | OrganizationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["organization"]>

  export type OrganizationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    logo_url?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["organization"]>

  export type OrganizationSelectScalar = {
    id?: boolean
    name?: boolean
    slug?: boolean
    logo_url?: boolean
    created_at?: boolean
  }

  export type OrganizationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    units?: boolean | Organization$unitsArgs<ExtArgs>
    users?: boolean | Organization$usersArgs<ExtArgs>
    employees?: boolean | Organization$employeesArgs<ExtArgs>
    frequency_sheets?: boolean | Organization$frequency_sheetsArgs<ExtArgs>
    event_codes?: boolean | Organization$event_codesArgs<ExtArgs>
    salary_floors?: boolean | Organization$salary_floorsArgs<ExtArgs>
    logs?: boolean | Organization$logsArgs<ExtArgs>
    _count?: boolean | OrganizationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OrganizationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $OrganizationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Organization"
    objects: {
      units: Prisma.$UnitPayload<ExtArgs>[]
      users: Prisma.$UserPayload<ExtArgs>[]
      employees: Prisma.$EmployeePayload<ExtArgs>[]
      frequency_sheets: Prisma.$FrequencySheetPayload<ExtArgs>[]
      event_codes: Prisma.$EventCodePayload<ExtArgs>[]
      salary_floors: Prisma.$SalaryFloorPayload<ExtArgs>[]
      logs: Prisma.$LogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      slug: string
      logo_url: string | null
      created_at: Date
    }, ExtArgs["result"]["organization"]>
    composites: {}
  }

  type OrganizationGetPayload<S extends boolean | null | undefined | OrganizationDefaultArgs> = $Result.GetResult<Prisma.$OrganizationPayload, S>

  type OrganizationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<OrganizationFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: OrganizationCountAggregateInputType | true
    }

  export interface OrganizationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Organization'], meta: { name: 'Organization' } }
    /**
     * Find zero or one Organization that matches the filter.
     * @param {OrganizationFindUniqueArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrganizationFindUniqueArgs>(args: SelectSubset<T, OrganizationFindUniqueArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Organization that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {OrganizationFindUniqueOrThrowArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrganizationFindUniqueOrThrowArgs>(args: SelectSubset<T, OrganizationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Organization that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationFindFirstArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrganizationFindFirstArgs>(args?: SelectSubset<T, OrganizationFindFirstArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Organization that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationFindFirstOrThrowArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrganizationFindFirstOrThrowArgs>(args?: SelectSubset<T, OrganizationFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Organizations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Organizations
     * const organizations = await prisma.organization.findMany()
     * 
     * // Get first 10 Organizations
     * const organizations = await prisma.organization.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const organizationWithIdOnly = await prisma.organization.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrganizationFindManyArgs>(args?: SelectSubset<T, OrganizationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Organization.
     * @param {OrganizationCreateArgs} args - Arguments to create a Organization.
     * @example
     * // Create one Organization
     * const Organization = await prisma.organization.create({
     *   data: {
     *     // ... data to create a Organization
     *   }
     * })
     * 
     */
    create<T extends OrganizationCreateArgs>(args: SelectSubset<T, OrganizationCreateArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Organizations.
     * @param {OrganizationCreateManyArgs} args - Arguments to create many Organizations.
     * @example
     * // Create many Organizations
     * const organization = await prisma.organization.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrganizationCreateManyArgs>(args?: SelectSubset<T, OrganizationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Organizations and returns the data saved in the database.
     * @param {OrganizationCreateManyAndReturnArgs} args - Arguments to create many Organizations.
     * @example
     * // Create many Organizations
     * const organization = await prisma.organization.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Organizations and only return the `id`
     * const organizationWithIdOnly = await prisma.organization.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrganizationCreateManyAndReturnArgs>(args?: SelectSubset<T, OrganizationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Organization.
     * @param {OrganizationDeleteArgs} args - Arguments to delete one Organization.
     * @example
     * // Delete one Organization
     * const Organization = await prisma.organization.delete({
     *   where: {
     *     // ... filter to delete one Organization
     *   }
     * })
     * 
     */
    delete<T extends OrganizationDeleteArgs>(args: SelectSubset<T, OrganizationDeleteArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Organization.
     * @param {OrganizationUpdateArgs} args - Arguments to update one Organization.
     * @example
     * // Update one Organization
     * const organization = await prisma.organization.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrganizationUpdateArgs>(args: SelectSubset<T, OrganizationUpdateArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Organizations.
     * @param {OrganizationDeleteManyArgs} args - Arguments to filter Organizations to delete.
     * @example
     * // Delete a few Organizations
     * const { count } = await prisma.organization.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrganizationDeleteManyArgs>(args?: SelectSubset<T, OrganizationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Organizations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Organizations
     * const organization = await prisma.organization.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrganizationUpdateManyArgs>(args: SelectSubset<T, OrganizationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Organization.
     * @param {OrganizationUpsertArgs} args - Arguments to update or create a Organization.
     * @example
     * // Update or create a Organization
     * const organization = await prisma.organization.upsert({
     *   create: {
     *     // ... data to create a Organization
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Organization we want to update
     *   }
     * })
     */
    upsert<T extends OrganizationUpsertArgs>(args: SelectSubset<T, OrganizationUpsertArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Organizations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationCountArgs} args - Arguments to filter Organizations to count.
     * @example
     * // Count the number of Organizations
     * const count = await prisma.organization.count({
     *   where: {
     *     // ... the filter for the Organizations we want to count
     *   }
     * })
    **/
    count<T extends OrganizationCountArgs>(
      args?: Subset<T, OrganizationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrganizationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Organization.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OrganizationAggregateArgs>(args: Subset<T, OrganizationAggregateArgs>): Prisma.PrismaPromise<GetOrganizationAggregateType<T>>

    /**
     * Group by Organization.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationGroupByArgs} args - Group by arguments.
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
      T extends OrganizationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrganizationGroupByArgs['orderBy'] }
        : { orderBy?: OrganizationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OrganizationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrganizationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Organization model
   */
  readonly fields: OrganizationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Organization.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrganizationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    units<T extends Organization$unitsArgs<ExtArgs> = {}>(args?: Subset<T, Organization$unitsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "findMany"> | Null>
    users<T extends Organization$usersArgs<ExtArgs> = {}>(args?: Subset<T, Organization$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany"> | Null>
    employees<T extends Organization$employeesArgs<ExtArgs> = {}>(args?: Subset<T, Organization$employeesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findMany"> | Null>
    frequency_sheets<T extends Organization$frequency_sheetsArgs<ExtArgs> = {}>(args?: Subset<T, Organization$frequency_sheetsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FrequencySheetPayload<ExtArgs>, T, "findMany"> | Null>
    event_codes<T extends Organization$event_codesArgs<ExtArgs> = {}>(args?: Subset<T, Organization$event_codesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventCodePayload<ExtArgs>, T, "findMany"> | Null>
    salary_floors<T extends Organization$salary_floorsArgs<ExtArgs> = {}>(args?: Subset<T, Organization$salary_floorsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalaryFloorPayload<ExtArgs>, T, "findMany"> | Null>
    logs<T extends Organization$logsArgs<ExtArgs> = {}>(args?: Subset<T, Organization$logsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Organization model
   */ 
  interface OrganizationFieldRefs {
    readonly id: FieldRef<"Organization", 'String'>
    readonly name: FieldRef<"Organization", 'String'>
    readonly slug: FieldRef<"Organization", 'String'>
    readonly logo_url: FieldRef<"Organization", 'String'>
    readonly created_at: FieldRef<"Organization", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Organization findUnique
   */
  export type OrganizationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organization to fetch.
     */
    where: OrganizationWhereUniqueInput
  }

  /**
   * Organization findUniqueOrThrow
   */
  export type OrganizationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organization to fetch.
     */
    where: OrganizationWhereUniqueInput
  }

  /**
   * Organization findFirst
   */
  export type OrganizationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organization to fetch.
     */
    where?: OrganizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizations to fetch.
     */
    orderBy?: OrganizationOrderByWithRelationInput | OrganizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Organizations.
     */
    cursor?: OrganizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Organizations.
     */
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[]
  }

  /**
   * Organization findFirstOrThrow
   */
  export type OrganizationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organization to fetch.
     */
    where?: OrganizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizations to fetch.
     */
    orderBy?: OrganizationOrderByWithRelationInput | OrganizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Organizations.
     */
    cursor?: OrganizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Organizations.
     */
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[]
  }

  /**
   * Organization findMany
   */
  export type OrganizationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organizations to fetch.
     */
    where?: OrganizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizations to fetch.
     */
    orderBy?: OrganizationOrderByWithRelationInput | OrganizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Organizations.
     */
    cursor?: OrganizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizations.
     */
    skip?: number
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[]
  }

  /**
   * Organization create
   */
  export type OrganizationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * The data needed to create a Organization.
     */
    data: XOR<OrganizationCreateInput, OrganizationUncheckedCreateInput>
  }

  /**
   * Organization createMany
   */
  export type OrganizationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Organizations.
     */
    data: OrganizationCreateManyInput | OrganizationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Organization createManyAndReturn
   */
  export type OrganizationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Organizations.
     */
    data: OrganizationCreateManyInput | OrganizationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Organization update
   */
  export type OrganizationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * The data needed to update a Organization.
     */
    data: XOR<OrganizationUpdateInput, OrganizationUncheckedUpdateInput>
    /**
     * Choose, which Organization to update.
     */
    where: OrganizationWhereUniqueInput
  }

  /**
   * Organization updateMany
   */
  export type OrganizationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Organizations.
     */
    data: XOR<OrganizationUpdateManyMutationInput, OrganizationUncheckedUpdateManyInput>
    /**
     * Filter which Organizations to update
     */
    where?: OrganizationWhereInput
  }

  /**
   * Organization upsert
   */
  export type OrganizationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * The filter to search for the Organization to update in case it exists.
     */
    where: OrganizationWhereUniqueInput
    /**
     * In case the Organization found by the `where` argument doesn't exist, create a new Organization with this data.
     */
    create: XOR<OrganizationCreateInput, OrganizationUncheckedCreateInput>
    /**
     * In case the Organization was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrganizationUpdateInput, OrganizationUncheckedUpdateInput>
  }

  /**
   * Organization delete
   */
  export type OrganizationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter which Organization to delete.
     */
    where: OrganizationWhereUniqueInput
  }

  /**
   * Organization deleteMany
   */
  export type OrganizationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Organizations to delete
     */
    where?: OrganizationWhereInput
  }

  /**
   * Organization.units
   */
  export type Organization$unitsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitInclude<ExtArgs> | null
    where?: UnitWhereInput
    orderBy?: UnitOrderByWithRelationInput | UnitOrderByWithRelationInput[]
    cursor?: UnitWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UnitScalarFieldEnum | UnitScalarFieldEnum[]
  }

  /**
   * Organization.users
   */
  export type Organization$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Organization.employees
   */
  export type Organization$employeesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    where?: EmployeeWhereInput
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    cursor?: EmployeeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[]
  }

  /**
   * Organization.frequency_sheets
   */
  export type Organization$frequency_sheetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FrequencySheet
     */
    select?: FrequencySheetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FrequencySheetInclude<ExtArgs> | null
    where?: FrequencySheetWhereInput
    orderBy?: FrequencySheetOrderByWithRelationInput | FrequencySheetOrderByWithRelationInput[]
    cursor?: FrequencySheetWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FrequencySheetScalarFieldEnum | FrequencySheetScalarFieldEnum[]
  }

  /**
   * Organization.event_codes
   */
  export type Organization$event_codesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventCode
     */
    select?: EventCodeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventCodeInclude<ExtArgs> | null
    where?: EventCodeWhereInput
    orderBy?: EventCodeOrderByWithRelationInput | EventCodeOrderByWithRelationInput[]
    cursor?: EventCodeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventCodeScalarFieldEnum | EventCodeScalarFieldEnum[]
  }

  /**
   * Organization.salary_floors
   */
  export type Organization$salary_floorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalaryFloor
     */
    select?: SalaryFloorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalaryFloorInclude<ExtArgs> | null
    where?: SalaryFloorWhereInput
    orderBy?: SalaryFloorOrderByWithRelationInput | SalaryFloorOrderByWithRelationInput[]
    cursor?: SalaryFloorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SalaryFloorScalarFieldEnum | SalaryFloorScalarFieldEnum[]
  }

  /**
   * Organization.logs
   */
  export type Organization$logsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogInclude<ExtArgs> | null
    where?: LogWhereInput
    orderBy?: LogOrderByWithRelationInput | LogOrderByWithRelationInput[]
    cursor?: LogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LogScalarFieldEnum | LogScalarFieldEnum[]
  }

  /**
   * Organization without action
   */
  export type OrganizationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
  }


  /**
   * Model Unit
   */

  export type AggregateUnit = {
    _count: UnitCountAggregateOutputType | null
    _min: UnitMinAggregateOutputType | null
    _max: UnitMaxAggregateOutputType | null
  }

  export type UnitMinAggregateOutputType = {
    id: string | null
    name: string | null
    location: string | null
    organization_id: string | null
    is_active: boolean | null
    created_at: Date | null
  }

  export type UnitMaxAggregateOutputType = {
    id: string | null
    name: string | null
    location: string | null
    organization_id: string | null
    is_active: boolean | null
    created_at: Date | null
  }

  export type UnitCountAggregateOutputType = {
    id: number
    name: number
    location: number
    organization_id: number
    is_active: number
    created_at: number
    _all: number
  }


  export type UnitMinAggregateInputType = {
    id?: true
    name?: true
    location?: true
    organization_id?: true
    is_active?: true
    created_at?: true
  }

  export type UnitMaxAggregateInputType = {
    id?: true
    name?: true
    location?: true
    organization_id?: true
    is_active?: true
    created_at?: true
  }

  export type UnitCountAggregateInputType = {
    id?: true
    name?: true
    location?: true
    organization_id?: true
    is_active?: true
    created_at?: true
    _all?: true
  }

  export type UnitAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Unit to aggregate.
     */
    where?: UnitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Units to fetch.
     */
    orderBy?: UnitOrderByWithRelationInput | UnitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UnitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Units from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Units.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Units
    **/
    _count?: true | UnitCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UnitMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UnitMaxAggregateInputType
  }

  export type GetUnitAggregateType<T extends UnitAggregateArgs> = {
        [P in keyof T & keyof AggregateUnit]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUnit[P]>
      : GetScalarType<T[P], AggregateUnit[P]>
  }




  export type UnitGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UnitWhereInput
    orderBy?: UnitOrderByWithAggregationInput | UnitOrderByWithAggregationInput[]
    by: UnitScalarFieldEnum[] | UnitScalarFieldEnum
    having?: UnitScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UnitCountAggregateInputType | true
    _min?: UnitMinAggregateInputType
    _max?: UnitMaxAggregateInputType
  }

  export type UnitGroupByOutputType = {
    id: string
    name: string
    location: string
    organization_id: string
    is_active: boolean
    created_at: Date
    _count: UnitCountAggregateOutputType | null
    _min: UnitMinAggregateOutputType | null
    _max: UnitMaxAggregateOutputType | null
  }

  type GetUnitGroupByPayload<T extends UnitGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UnitGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UnitGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UnitGroupByOutputType[P]>
            : GetScalarType<T[P], UnitGroupByOutputType[P]>
        }
      >
    >


  export type UnitSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    location?: boolean
    organization_id?: boolean
    is_active?: boolean
    created_at?: boolean
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    employees?: boolean | Unit$employeesArgs<ExtArgs>
    users?: boolean | Unit$usersArgs<ExtArgs>
    frequency_sheets?: boolean | Unit$frequency_sheetsArgs<ExtArgs>
    _count?: boolean | UnitCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["unit"]>

  export type UnitSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    location?: boolean
    organization_id?: boolean
    is_active?: boolean
    created_at?: boolean
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["unit"]>

  export type UnitSelectScalar = {
    id?: boolean
    name?: boolean
    location?: boolean
    organization_id?: boolean
    is_active?: boolean
    created_at?: boolean
  }

  export type UnitInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    employees?: boolean | Unit$employeesArgs<ExtArgs>
    users?: boolean | Unit$usersArgs<ExtArgs>
    frequency_sheets?: boolean | Unit$frequency_sheetsArgs<ExtArgs>
    _count?: boolean | UnitCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UnitIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }

  export type $UnitPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Unit"
    objects: {
      organization: Prisma.$OrganizationPayload<ExtArgs>
      employees: Prisma.$EmployeePayload<ExtArgs>[]
      users: Prisma.$UserPayload<ExtArgs>[]
      frequency_sheets: Prisma.$FrequencySheetPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      location: string
      organization_id: string
      is_active: boolean
      created_at: Date
    }, ExtArgs["result"]["unit"]>
    composites: {}
  }

  type UnitGetPayload<S extends boolean | null | undefined | UnitDefaultArgs> = $Result.GetResult<Prisma.$UnitPayload, S>

  type UnitCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UnitFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UnitCountAggregateInputType | true
    }

  export interface UnitDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Unit'], meta: { name: 'Unit' } }
    /**
     * Find zero or one Unit that matches the filter.
     * @param {UnitFindUniqueArgs} args - Arguments to find a Unit
     * @example
     * // Get one Unit
     * const unit = await prisma.unit.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UnitFindUniqueArgs>(args: SelectSubset<T, UnitFindUniqueArgs<ExtArgs>>): Prisma__UnitClient<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Unit that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UnitFindUniqueOrThrowArgs} args - Arguments to find a Unit
     * @example
     * // Get one Unit
     * const unit = await prisma.unit.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UnitFindUniqueOrThrowArgs>(args: SelectSubset<T, UnitFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UnitClient<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Unit that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnitFindFirstArgs} args - Arguments to find a Unit
     * @example
     * // Get one Unit
     * const unit = await prisma.unit.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UnitFindFirstArgs>(args?: SelectSubset<T, UnitFindFirstArgs<ExtArgs>>): Prisma__UnitClient<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Unit that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnitFindFirstOrThrowArgs} args - Arguments to find a Unit
     * @example
     * // Get one Unit
     * const unit = await prisma.unit.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UnitFindFirstOrThrowArgs>(args?: SelectSubset<T, UnitFindFirstOrThrowArgs<ExtArgs>>): Prisma__UnitClient<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Units that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnitFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Units
     * const units = await prisma.unit.findMany()
     * 
     * // Get first 10 Units
     * const units = await prisma.unit.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const unitWithIdOnly = await prisma.unit.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UnitFindManyArgs>(args?: SelectSubset<T, UnitFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Unit.
     * @param {UnitCreateArgs} args - Arguments to create a Unit.
     * @example
     * // Create one Unit
     * const Unit = await prisma.unit.create({
     *   data: {
     *     // ... data to create a Unit
     *   }
     * })
     * 
     */
    create<T extends UnitCreateArgs>(args: SelectSubset<T, UnitCreateArgs<ExtArgs>>): Prisma__UnitClient<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Units.
     * @param {UnitCreateManyArgs} args - Arguments to create many Units.
     * @example
     * // Create many Units
     * const unit = await prisma.unit.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UnitCreateManyArgs>(args?: SelectSubset<T, UnitCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Units and returns the data saved in the database.
     * @param {UnitCreateManyAndReturnArgs} args - Arguments to create many Units.
     * @example
     * // Create many Units
     * const unit = await prisma.unit.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Units and only return the `id`
     * const unitWithIdOnly = await prisma.unit.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UnitCreateManyAndReturnArgs>(args?: SelectSubset<T, UnitCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Unit.
     * @param {UnitDeleteArgs} args - Arguments to delete one Unit.
     * @example
     * // Delete one Unit
     * const Unit = await prisma.unit.delete({
     *   where: {
     *     // ... filter to delete one Unit
     *   }
     * })
     * 
     */
    delete<T extends UnitDeleteArgs>(args: SelectSubset<T, UnitDeleteArgs<ExtArgs>>): Prisma__UnitClient<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Unit.
     * @param {UnitUpdateArgs} args - Arguments to update one Unit.
     * @example
     * // Update one Unit
     * const unit = await prisma.unit.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UnitUpdateArgs>(args: SelectSubset<T, UnitUpdateArgs<ExtArgs>>): Prisma__UnitClient<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Units.
     * @param {UnitDeleteManyArgs} args - Arguments to filter Units to delete.
     * @example
     * // Delete a few Units
     * const { count } = await prisma.unit.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UnitDeleteManyArgs>(args?: SelectSubset<T, UnitDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Units.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnitUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Units
     * const unit = await prisma.unit.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UnitUpdateManyArgs>(args: SelectSubset<T, UnitUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Unit.
     * @param {UnitUpsertArgs} args - Arguments to update or create a Unit.
     * @example
     * // Update or create a Unit
     * const unit = await prisma.unit.upsert({
     *   create: {
     *     // ... data to create a Unit
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Unit we want to update
     *   }
     * })
     */
    upsert<T extends UnitUpsertArgs>(args: SelectSubset<T, UnitUpsertArgs<ExtArgs>>): Prisma__UnitClient<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Units.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnitCountArgs} args - Arguments to filter Units to count.
     * @example
     * // Count the number of Units
     * const count = await prisma.unit.count({
     *   where: {
     *     // ... the filter for the Units we want to count
     *   }
     * })
    **/
    count<T extends UnitCountArgs>(
      args?: Subset<T, UnitCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UnitCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Unit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnitAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UnitAggregateArgs>(args: Subset<T, UnitAggregateArgs>): Prisma.PrismaPromise<GetUnitAggregateType<T>>

    /**
     * Group by Unit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnitGroupByArgs} args - Group by arguments.
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
      T extends UnitGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UnitGroupByArgs['orderBy'] }
        : { orderBy?: UnitGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UnitGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUnitGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Unit model
   */
  readonly fields: UnitFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Unit.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UnitClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    organization<T extends OrganizationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrganizationDefaultArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    employees<T extends Unit$employeesArgs<ExtArgs> = {}>(args?: Subset<T, Unit$employeesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findMany"> | Null>
    users<T extends Unit$usersArgs<ExtArgs> = {}>(args?: Subset<T, Unit$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany"> | Null>
    frequency_sheets<T extends Unit$frequency_sheetsArgs<ExtArgs> = {}>(args?: Subset<T, Unit$frequency_sheetsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FrequencySheetPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Unit model
   */ 
  interface UnitFieldRefs {
    readonly id: FieldRef<"Unit", 'String'>
    readonly name: FieldRef<"Unit", 'String'>
    readonly location: FieldRef<"Unit", 'String'>
    readonly organization_id: FieldRef<"Unit", 'String'>
    readonly is_active: FieldRef<"Unit", 'Boolean'>
    readonly created_at: FieldRef<"Unit", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Unit findUnique
   */
  export type UnitFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitInclude<ExtArgs> | null
    /**
     * Filter, which Unit to fetch.
     */
    where: UnitWhereUniqueInput
  }

  /**
   * Unit findUniqueOrThrow
   */
  export type UnitFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitInclude<ExtArgs> | null
    /**
     * Filter, which Unit to fetch.
     */
    where: UnitWhereUniqueInput
  }

  /**
   * Unit findFirst
   */
  export type UnitFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitInclude<ExtArgs> | null
    /**
     * Filter, which Unit to fetch.
     */
    where?: UnitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Units to fetch.
     */
    orderBy?: UnitOrderByWithRelationInput | UnitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Units.
     */
    cursor?: UnitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Units from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Units.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Units.
     */
    distinct?: UnitScalarFieldEnum | UnitScalarFieldEnum[]
  }

  /**
   * Unit findFirstOrThrow
   */
  export type UnitFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitInclude<ExtArgs> | null
    /**
     * Filter, which Unit to fetch.
     */
    where?: UnitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Units to fetch.
     */
    orderBy?: UnitOrderByWithRelationInput | UnitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Units.
     */
    cursor?: UnitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Units from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Units.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Units.
     */
    distinct?: UnitScalarFieldEnum | UnitScalarFieldEnum[]
  }

  /**
   * Unit findMany
   */
  export type UnitFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitInclude<ExtArgs> | null
    /**
     * Filter, which Units to fetch.
     */
    where?: UnitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Units to fetch.
     */
    orderBy?: UnitOrderByWithRelationInput | UnitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Units.
     */
    cursor?: UnitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Units from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Units.
     */
    skip?: number
    distinct?: UnitScalarFieldEnum | UnitScalarFieldEnum[]
  }

  /**
   * Unit create
   */
  export type UnitCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitInclude<ExtArgs> | null
    /**
     * The data needed to create a Unit.
     */
    data: XOR<UnitCreateInput, UnitUncheckedCreateInput>
  }

  /**
   * Unit createMany
   */
  export type UnitCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Units.
     */
    data: UnitCreateManyInput | UnitCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Unit createManyAndReturn
   */
  export type UnitCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Units.
     */
    data: UnitCreateManyInput | UnitCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Unit update
   */
  export type UnitUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitInclude<ExtArgs> | null
    /**
     * The data needed to update a Unit.
     */
    data: XOR<UnitUpdateInput, UnitUncheckedUpdateInput>
    /**
     * Choose, which Unit to update.
     */
    where: UnitWhereUniqueInput
  }

  /**
   * Unit updateMany
   */
  export type UnitUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Units.
     */
    data: XOR<UnitUpdateManyMutationInput, UnitUncheckedUpdateManyInput>
    /**
     * Filter which Units to update
     */
    where?: UnitWhereInput
  }

  /**
   * Unit upsert
   */
  export type UnitUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitInclude<ExtArgs> | null
    /**
     * The filter to search for the Unit to update in case it exists.
     */
    where: UnitWhereUniqueInput
    /**
     * In case the Unit found by the `where` argument doesn't exist, create a new Unit with this data.
     */
    create: XOR<UnitCreateInput, UnitUncheckedCreateInput>
    /**
     * In case the Unit was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UnitUpdateInput, UnitUncheckedUpdateInput>
  }

  /**
   * Unit delete
   */
  export type UnitDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitInclude<ExtArgs> | null
    /**
     * Filter which Unit to delete.
     */
    where: UnitWhereUniqueInput
  }

  /**
   * Unit deleteMany
   */
  export type UnitDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Units to delete
     */
    where?: UnitWhereInput
  }

  /**
   * Unit.employees
   */
  export type Unit$employeesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    where?: EmployeeWhereInput
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    cursor?: EmployeeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[]
  }

  /**
   * Unit.users
   */
  export type Unit$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Unit.frequency_sheets
   */
  export type Unit$frequency_sheetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FrequencySheet
     */
    select?: FrequencySheetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FrequencySheetInclude<ExtArgs> | null
    where?: FrequencySheetWhereInput
    orderBy?: FrequencySheetOrderByWithRelationInput | FrequencySheetOrderByWithRelationInput[]
    cursor?: FrequencySheetWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FrequencySheetScalarFieldEnum | FrequencySheetScalarFieldEnum[]
  }

  /**
   * Unit without action
   */
  export type UnitDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitInclude<ExtArgs> | null
  }


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
    password: string | null
    cpf: string | null
    role: $Enums.UserRole | null
    organization_id: string | null
    unit_id: string | null
    is_active: boolean | null
    created_at: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    cpf: string | null
    role: $Enums.UserRole | null
    organization_id: string | null
    unit_id: string | null
    is_active: boolean | null
    created_at: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    cpf: number
    role: number
    organization_id: number
    unit_id: number
    is_active: number
    created_at: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    cpf?: true
    role?: true
    organization_id?: true
    unit_id?: true
    is_active?: true
    created_at?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    cpf?: true
    role?: true
    organization_id?: true
    unit_id?: true
    is_active?: true
    created_at?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    cpf?: true
    role?: true
    organization_id?: true
    unit_id?: true
    is_active?: true
    created_at?: true
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
    name: string
    email: string
    password: string
    cpf: string
    role: $Enums.UserRole
    organization_id: string
    unit_id: string | null
    is_active: boolean
    created_at: Date
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
    password?: boolean
    cpf?: boolean
    role?: boolean
    organization_id?: boolean
    unit_id?: boolean
    is_active?: boolean
    created_at?: boolean
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    unit?: boolean | User$unitArgs<ExtArgs>
    submitted_sheets?: boolean | User$submitted_sheetsArgs<ExtArgs>
    logs?: boolean | User$logsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    cpf?: boolean
    role?: boolean
    organization_id?: boolean
    unit_id?: boolean
    is_active?: boolean
    created_at?: boolean
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    unit?: boolean | User$unitArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    cpf?: boolean
    role?: boolean
    organization_id?: boolean
    unit_id?: boolean
    is_active?: boolean
    created_at?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    unit?: boolean | User$unitArgs<ExtArgs>
    submitted_sheets?: boolean | User$submitted_sheetsArgs<ExtArgs>
    logs?: boolean | User$logsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    unit?: boolean | User$unitArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      organization: Prisma.$OrganizationPayload<ExtArgs>
      unit: Prisma.$UnitPayload<ExtArgs> | null
      submitted_sheets: Prisma.$FrequencySheetPayload<ExtArgs>[]
      logs: Prisma.$LogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      password: string
      cpf: string
      role: $Enums.UserRole
      organization_id: string
      unit_id: string | null
      is_active: boolean
      created_at: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
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
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

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
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

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
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

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
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

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
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany">>

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
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create">, never, ExtArgs>

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
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn">>

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
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete">, never, ExtArgs>

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
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update">, never, ExtArgs>

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
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


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
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    organization<T extends OrganizationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrganizationDefaultArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    unit<T extends User$unitArgs<ExtArgs> = {}>(args?: Subset<T, User$unitArgs<ExtArgs>>): Prisma__UnitClient<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    submitted_sheets<T extends User$submitted_sheetsArgs<ExtArgs> = {}>(args?: Subset<T, User$submitted_sheetsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FrequencySheetPayload<ExtArgs>, T, "findMany"> | Null>
    logs<T extends User$logsArgs<ExtArgs> = {}>(args?: Subset<T, User$logsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, "findMany"> | Null>
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
    readonly password: FieldRef<"User", 'String'>
    readonly cpf: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'UserRole'>
    readonly organization_id: FieldRef<"User", 'String'>
    readonly unit_id: FieldRef<"User", 'String'>
    readonly is_active: FieldRef<"User", 'Boolean'>
    readonly created_at: FieldRef<"User", 'DateTime'>
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
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
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
  }

  /**
   * User.unit
   */
  export type User$unitArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitInclude<ExtArgs> | null
    where?: UnitWhereInput
  }

  /**
   * User.submitted_sheets
   */
  export type User$submitted_sheetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FrequencySheet
     */
    select?: FrequencySheetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FrequencySheetInclude<ExtArgs> | null
    where?: FrequencySheetWhereInput
    orderBy?: FrequencySheetOrderByWithRelationInput | FrequencySheetOrderByWithRelationInput[]
    cursor?: FrequencySheetWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FrequencySheetScalarFieldEnum | FrequencySheetScalarFieldEnum[]
  }

  /**
   * User.logs
   */
  export type User$logsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogInclude<ExtArgs> | null
    where?: LogWhereInput
    orderBy?: LogOrderByWithRelationInput | LogOrderByWithRelationInput[]
    cursor?: LogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LogScalarFieldEnum | LogScalarFieldEnum[]
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Employee
   */

  export type AggregateEmployee = {
    _count: EmployeeCountAggregateOutputType | null
    _avg: EmployeeAvgAggregateOutputType | null
    _sum: EmployeeSumAggregateOutputType | null
    _min: EmployeeMinAggregateOutputType | null
    _max: EmployeeMaxAggregateOutputType | null
  }

  export type EmployeeAvgAggregateOutputType = {
    base_salary: number | null
  }

  export type EmployeeSumAggregateOutputType = {
    base_salary: number | null
  }

  export type EmployeeMinAggregateOutputType = {
    id: string | null
    registration: string | null
    name: string | null
    position: string | null
    cpf: string | null
    rg: string | null
    rg_state: string | null
    contract_type: string | null
    base_salary: number | null
    address: string | null
    organization_id: string | null
    unit_id: string | null
    created_at: Date | null
  }

  export type EmployeeMaxAggregateOutputType = {
    id: string | null
    registration: string | null
    name: string | null
    position: string | null
    cpf: string | null
    rg: string | null
    rg_state: string | null
    contract_type: string | null
    base_salary: number | null
    address: string | null
    organization_id: string | null
    unit_id: string | null
    created_at: Date | null
  }

  export type EmployeeCountAggregateOutputType = {
    id: number
    registration: number
    name: number
    position: number
    cpf: number
    rg: number
    rg_state: number
    contract_type: number
    base_salary: number
    address: number
    organization_id: number
    unit_id: number
    created_at: number
    _all: number
  }


  export type EmployeeAvgAggregateInputType = {
    base_salary?: true
  }

  export type EmployeeSumAggregateInputType = {
    base_salary?: true
  }

  export type EmployeeMinAggregateInputType = {
    id?: true
    registration?: true
    name?: true
    position?: true
    cpf?: true
    rg?: true
    rg_state?: true
    contract_type?: true
    base_salary?: true
    address?: true
    organization_id?: true
    unit_id?: true
    created_at?: true
  }

  export type EmployeeMaxAggregateInputType = {
    id?: true
    registration?: true
    name?: true
    position?: true
    cpf?: true
    rg?: true
    rg_state?: true
    contract_type?: true
    base_salary?: true
    address?: true
    organization_id?: true
    unit_id?: true
    created_at?: true
  }

  export type EmployeeCountAggregateInputType = {
    id?: true
    registration?: true
    name?: true
    position?: true
    cpf?: true
    rg?: true
    rg_state?: true
    contract_type?: true
    base_salary?: true
    address?: true
    organization_id?: true
    unit_id?: true
    created_at?: true
    _all?: true
  }

  export type EmployeeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Employee to aggregate.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Employees
    **/
    _count?: true | EmployeeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EmployeeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EmployeeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmployeeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmployeeMaxAggregateInputType
  }

  export type GetEmployeeAggregateType<T extends EmployeeAggregateArgs> = {
        [P in keyof T & keyof AggregateEmployee]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmployee[P]>
      : GetScalarType<T[P], AggregateEmployee[P]>
  }




  export type EmployeeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmployeeWhereInput
    orderBy?: EmployeeOrderByWithAggregationInput | EmployeeOrderByWithAggregationInput[]
    by: EmployeeScalarFieldEnum[] | EmployeeScalarFieldEnum
    having?: EmployeeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmployeeCountAggregateInputType | true
    _avg?: EmployeeAvgAggregateInputType
    _sum?: EmployeeSumAggregateInputType
    _min?: EmployeeMinAggregateInputType
    _max?: EmployeeMaxAggregateInputType
  }

  export type EmployeeGroupByOutputType = {
    id: string
    registration: string | null
    name: string
    position: string
    cpf: string
    rg: string | null
    rg_state: string | null
    contract_type: string
    base_salary: number | null
    address: string | null
    organization_id: string
    unit_id: string
    created_at: Date
    _count: EmployeeCountAggregateOutputType | null
    _avg: EmployeeAvgAggregateOutputType | null
    _sum: EmployeeSumAggregateOutputType | null
    _min: EmployeeMinAggregateOutputType | null
    _max: EmployeeMaxAggregateOutputType | null
  }

  type GetEmployeeGroupByPayload<T extends EmployeeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmployeeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmployeeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmployeeGroupByOutputType[P]>
            : GetScalarType<T[P], EmployeeGroupByOutputType[P]>
        }
      >
    >


  export type EmployeeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    registration?: boolean
    name?: boolean
    position?: boolean
    cpf?: boolean
    rg?: boolean
    rg_state?: boolean
    contract_type?: boolean
    base_salary?: boolean
    address?: boolean
    organization_id?: boolean
    unit_id?: boolean
    created_at?: boolean
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    unit?: boolean | UnitDefaultArgs<ExtArgs>
    frequency_entries?: boolean | Employee$frequency_entriesArgs<ExtArgs>
    _count?: boolean | EmployeeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["employee"]>

  export type EmployeeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    registration?: boolean
    name?: boolean
    position?: boolean
    cpf?: boolean
    rg?: boolean
    rg_state?: boolean
    contract_type?: boolean
    base_salary?: boolean
    address?: boolean
    organization_id?: boolean
    unit_id?: boolean
    created_at?: boolean
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    unit?: boolean | UnitDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["employee"]>

  export type EmployeeSelectScalar = {
    id?: boolean
    registration?: boolean
    name?: boolean
    position?: boolean
    cpf?: boolean
    rg?: boolean
    rg_state?: boolean
    contract_type?: boolean
    base_salary?: boolean
    address?: boolean
    organization_id?: boolean
    unit_id?: boolean
    created_at?: boolean
  }

  export type EmployeeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    unit?: boolean | UnitDefaultArgs<ExtArgs>
    frequency_entries?: boolean | Employee$frequency_entriesArgs<ExtArgs>
    _count?: boolean | EmployeeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EmployeeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    unit?: boolean | UnitDefaultArgs<ExtArgs>
  }

  export type $EmployeePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Employee"
    objects: {
      organization: Prisma.$OrganizationPayload<ExtArgs>
      unit: Prisma.$UnitPayload<ExtArgs>
      frequency_entries: Prisma.$FrequencyEntryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      registration: string | null
      name: string
      position: string
      cpf: string
      rg: string | null
      rg_state: string | null
      contract_type: string
      base_salary: number | null
      address: string | null
      organization_id: string
      unit_id: string
      created_at: Date
    }, ExtArgs["result"]["employee"]>
    composites: {}
  }

  type EmployeeGetPayload<S extends boolean | null | undefined | EmployeeDefaultArgs> = $Result.GetResult<Prisma.$EmployeePayload, S>

  type EmployeeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<EmployeeFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: EmployeeCountAggregateInputType | true
    }

  export interface EmployeeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Employee'], meta: { name: 'Employee' } }
    /**
     * Find zero or one Employee that matches the filter.
     * @param {EmployeeFindUniqueArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EmployeeFindUniqueArgs>(args: SelectSubset<T, EmployeeFindUniqueArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Employee that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {EmployeeFindUniqueOrThrowArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EmployeeFindUniqueOrThrowArgs>(args: SelectSubset<T, EmployeeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Employee that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeFindFirstArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EmployeeFindFirstArgs>(args?: SelectSubset<T, EmployeeFindFirstArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Employee that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeFindFirstOrThrowArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EmployeeFindFirstOrThrowArgs>(args?: SelectSubset<T, EmployeeFindFirstOrThrowArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Employees that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Employees
     * const employees = await prisma.employee.findMany()
     * 
     * // Get first 10 Employees
     * const employees = await prisma.employee.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const employeeWithIdOnly = await prisma.employee.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EmployeeFindManyArgs>(args?: SelectSubset<T, EmployeeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Employee.
     * @param {EmployeeCreateArgs} args - Arguments to create a Employee.
     * @example
     * // Create one Employee
     * const Employee = await prisma.employee.create({
     *   data: {
     *     // ... data to create a Employee
     *   }
     * })
     * 
     */
    create<T extends EmployeeCreateArgs>(args: SelectSubset<T, EmployeeCreateArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Employees.
     * @param {EmployeeCreateManyArgs} args - Arguments to create many Employees.
     * @example
     * // Create many Employees
     * const employee = await prisma.employee.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EmployeeCreateManyArgs>(args?: SelectSubset<T, EmployeeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Employees and returns the data saved in the database.
     * @param {EmployeeCreateManyAndReturnArgs} args - Arguments to create many Employees.
     * @example
     * // Create many Employees
     * const employee = await prisma.employee.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Employees and only return the `id`
     * const employeeWithIdOnly = await prisma.employee.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EmployeeCreateManyAndReturnArgs>(args?: SelectSubset<T, EmployeeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Employee.
     * @param {EmployeeDeleteArgs} args - Arguments to delete one Employee.
     * @example
     * // Delete one Employee
     * const Employee = await prisma.employee.delete({
     *   where: {
     *     // ... filter to delete one Employee
     *   }
     * })
     * 
     */
    delete<T extends EmployeeDeleteArgs>(args: SelectSubset<T, EmployeeDeleteArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Employee.
     * @param {EmployeeUpdateArgs} args - Arguments to update one Employee.
     * @example
     * // Update one Employee
     * const employee = await prisma.employee.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EmployeeUpdateArgs>(args: SelectSubset<T, EmployeeUpdateArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Employees.
     * @param {EmployeeDeleteManyArgs} args - Arguments to filter Employees to delete.
     * @example
     * // Delete a few Employees
     * const { count } = await prisma.employee.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EmployeeDeleteManyArgs>(args?: SelectSubset<T, EmployeeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Employees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Employees
     * const employee = await prisma.employee.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EmployeeUpdateManyArgs>(args: SelectSubset<T, EmployeeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Employee.
     * @param {EmployeeUpsertArgs} args - Arguments to update or create a Employee.
     * @example
     * // Update or create a Employee
     * const employee = await prisma.employee.upsert({
     *   create: {
     *     // ... data to create a Employee
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Employee we want to update
     *   }
     * })
     */
    upsert<T extends EmployeeUpsertArgs>(args: SelectSubset<T, EmployeeUpsertArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Employees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeCountArgs} args - Arguments to filter Employees to count.
     * @example
     * // Count the number of Employees
     * const count = await prisma.employee.count({
     *   where: {
     *     // ... the filter for the Employees we want to count
     *   }
     * })
    **/
    count<T extends EmployeeCountArgs>(
      args?: Subset<T, EmployeeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmployeeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Employee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EmployeeAggregateArgs>(args: Subset<T, EmployeeAggregateArgs>): Prisma.PrismaPromise<GetEmployeeAggregateType<T>>

    /**
     * Group by Employee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeGroupByArgs} args - Group by arguments.
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
      T extends EmployeeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmployeeGroupByArgs['orderBy'] }
        : { orderBy?: EmployeeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EmployeeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmployeeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Employee model
   */
  readonly fields: EmployeeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Employee.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EmployeeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    organization<T extends OrganizationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrganizationDefaultArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    unit<T extends UnitDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UnitDefaultArgs<ExtArgs>>): Prisma__UnitClient<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    frequency_entries<T extends Employee$frequency_entriesArgs<ExtArgs> = {}>(args?: Subset<T, Employee$frequency_entriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FrequencyEntryPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Employee model
   */ 
  interface EmployeeFieldRefs {
    readonly id: FieldRef<"Employee", 'String'>
    readonly registration: FieldRef<"Employee", 'String'>
    readonly name: FieldRef<"Employee", 'String'>
    readonly position: FieldRef<"Employee", 'String'>
    readonly cpf: FieldRef<"Employee", 'String'>
    readonly rg: FieldRef<"Employee", 'String'>
    readonly rg_state: FieldRef<"Employee", 'String'>
    readonly contract_type: FieldRef<"Employee", 'String'>
    readonly base_salary: FieldRef<"Employee", 'Float'>
    readonly address: FieldRef<"Employee", 'String'>
    readonly organization_id: FieldRef<"Employee", 'String'>
    readonly unit_id: FieldRef<"Employee", 'String'>
    readonly created_at: FieldRef<"Employee", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Employee findUnique
   */
  export type EmployeeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employee to fetch.
     */
    where: EmployeeWhereUniqueInput
  }

  /**
   * Employee findUniqueOrThrow
   */
  export type EmployeeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employee to fetch.
     */
    where: EmployeeWhereUniqueInput
  }

  /**
   * Employee findFirst
   */
  export type EmployeeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employee to fetch.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Employees.
     */
    cursor?: EmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Employees.
     */
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[]
  }

  /**
   * Employee findFirstOrThrow
   */
  export type EmployeeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employee to fetch.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Employees.
     */
    cursor?: EmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Employees.
     */
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[]
  }

  /**
   * Employee findMany
   */
  export type EmployeeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employees to fetch.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Employees.
     */
    cursor?: EmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[]
  }

  /**
   * Employee create
   */
  export type EmployeeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * The data needed to create a Employee.
     */
    data: XOR<EmployeeCreateInput, EmployeeUncheckedCreateInput>
  }

  /**
   * Employee createMany
   */
  export type EmployeeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Employees.
     */
    data: EmployeeCreateManyInput | EmployeeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Employee createManyAndReturn
   */
  export type EmployeeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Employees.
     */
    data: EmployeeCreateManyInput | EmployeeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Employee update
   */
  export type EmployeeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * The data needed to update a Employee.
     */
    data: XOR<EmployeeUpdateInput, EmployeeUncheckedUpdateInput>
    /**
     * Choose, which Employee to update.
     */
    where: EmployeeWhereUniqueInput
  }

  /**
   * Employee updateMany
   */
  export type EmployeeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Employees.
     */
    data: XOR<EmployeeUpdateManyMutationInput, EmployeeUncheckedUpdateManyInput>
    /**
     * Filter which Employees to update
     */
    where?: EmployeeWhereInput
  }

  /**
   * Employee upsert
   */
  export type EmployeeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * The filter to search for the Employee to update in case it exists.
     */
    where: EmployeeWhereUniqueInput
    /**
     * In case the Employee found by the `where` argument doesn't exist, create a new Employee with this data.
     */
    create: XOR<EmployeeCreateInput, EmployeeUncheckedCreateInput>
    /**
     * In case the Employee was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EmployeeUpdateInput, EmployeeUncheckedUpdateInput>
  }

  /**
   * Employee delete
   */
  export type EmployeeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter which Employee to delete.
     */
    where: EmployeeWhereUniqueInput
  }

  /**
   * Employee deleteMany
   */
  export type EmployeeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Employees to delete
     */
    where?: EmployeeWhereInput
  }

  /**
   * Employee.frequency_entries
   */
  export type Employee$frequency_entriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FrequencyEntry
     */
    select?: FrequencyEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FrequencyEntryInclude<ExtArgs> | null
    where?: FrequencyEntryWhereInput
    orderBy?: FrequencyEntryOrderByWithRelationInput | FrequencyEntryOrderByWithRelationInput[]
    cursor?: FrequencyEntryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FrequencyEntryScalarFieldEnum | FrequencyEntryScalarFieldEnum[]
  }

  /**
   * Employee without action
   */
  export type EmployeeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
  }


  /**
   * Model FrequencySheet
   */

  export type AggregateFrequencySheet = {
    _count: FrequencySheetCountAggregateOutputType | null
    _avg: FrequencySheetAvgAggregateOutputType | null
    _sum: FrequencySheetSumAggregateOutputType | null
    _min: FrequencySheetMinAggregateOutputType | null
    _max: FrequencySheetMaxAggregateOutputType | null
  }

  export type FrequencySheetAvgAggregateOutputType = {
    month: number | null
    year: number | null
  }

  export type FrequencySheetSumAggregateOutputType = {
    month: number | null
    year: number | null
  }

  export type FrequencySheetMinAggregateOutputType = {
    id: string | null
    organization_id: string | null
    unit_id: string | null
    month: number | null
    year: number | null
    status: $Enums.SheetStatus | null
    submitted_by: string | null
    submitted_at: Date | null
    created_at: Date | null
  }

  export type FrequencySheetMaxAggregateOutputType = {
    id: string | null
    organization_id: string | null
    unit_id: string | null
    month: number | null
    year: number | null
    status: $Enums.SheetStatus | null
    submitted_by: string | null
    submitted_at: Date | null
    created_at: Date | null
  }

  export type FrequencySheetCountAggregateOutputType = {
    id: number
    organization_id: number
    unit_id: number
    month: number
    year: number
    status: number
    submitted_by: number
    submitted_at: number
    created_at: number
    _all: number
  }


  export type FrequencySheetAvgAggregateInputType = {
    month?: true
    year?: true
  }

  export type FrequencySheetSumAggregateInputType = {
    month?: true
    year?: true
  }

  export type FrequencySheetMinAggregateInputType = {
    id?: true
    organization_id?: true
    unit_id?: true
    month?: true
    year?: true
    status?: true
    submitted_by?: true
    submitted_at?: true
    created_at?: true
  }

  export type FrequencySheetMaxAggregateInputType = {
    id?: true
    organization_id?: true
    unit_id?: true
    month?: true
    year?: true
    status?: true
    submitted_by?: true
    submitted_at?: true
    created_at?: true
  }

  export type FrequencySheetCountAggregateInputType = {
    id?: true
    organization_id?: true
    unit_id?: true
    month?: true
    year?: true
    status?: true
    submitted_by?: true
    submitted_at?: true
    created_at?: true
    _all?: true
  }

  export type FrequencySheetAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FrequencySheet to aggregate.
     */
    where?: FrequencySheetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FrequencySheets to fetch.
     */
    orderBy?: FrequencySheetOrderByWithRelationInput | FrequencySheetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FrequencySheetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FrequencySheets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FrequencySheets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FrequencySheets
    **/
    _count?: true | FrequencySheetCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FrequencySheetAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FrequencySheetSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FrequencySheetMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FrequencySheetMaxAggregateInputType
  }

  export type GetFrequencySheetAggregateType<T extends FrequencySheetAggregateArgs> = {
        [P in keyof T & keyof AggregateFrequencySheet]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFrequencySheet[P]>
      : GetScalarType<T[P], AggregateFrequencySheet[P]>
  }




  export type FrequencySheetGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FrequencySheetWhereInput
    orderBy?: FrequencySheetOrderByWithAggregationInput | FrequencySheetOrderByWithAggregationInput[]
    by: FrequencySheetScalarFieldEnum[] | FrequencySheetScalarFieldEnum
    having?: FrequencySheetScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FrequencySheetCountAggregateInputType | true
    _avg?: FrequencySheetAvgAggregateInputType
    _sum?: FrequencySheetSumAggregateInputType
    _min?: FrequencySheetMinAggregateInputType
    _max?: FrequencySheetMaxAggregateInputType
  }

  export type FrequencySheetGroupByOutputType = {
    id: string
    organization_id: string
    unit_id: string
    month: number
    year: number
    status: $Enums.SheetStatus
    submitted_by: string | null
    submitted_at: Date | null
    created_at: Date
    _count: FrequencySheetCountAggregateOutputType | null
    _avg: FrequencySheetAvgAggregateOutputType | null
    _sum: FrequencySheetSumAggregateOutputType | null
    _min: FrequencySheetMinAggregateOutputType | null
    _max: FrequencySheetMaxAggregateOutputType | null
  }

  type GetFrequencySheetGroupByPayload<T extends FrequencySheetGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FrequencySheetGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FrequencySheetGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FrequencySheetGroupByOutputType[P]>
            : GetScalarType<T[P], FrequencySheetGroupByOutputType[P]>
        }
      >
    >


  export type FrequencySheetSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    organization_id?: boolean
    unit_id?: boolean
    month?: boolean
    year?: boolean
    status?: boolean
    submitted_by?: boolean
    submitted_at?: boolean
    created_at?: boolean
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    unit?: boolean | UnitDefaultArgs<ExtArgs>
    submitter?: boolean | FrequencySheet$submitterArgs<ExtArgs>
    entries?: boolean | FrequencySheet$entriesArgs<ExtArgs>
    _count?: boolean | FrequencySheetCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["frequencySheet"]>

  export type FrequencySheetSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    organization_id?: boolean
    unit_id?: boolean
    month?: boolean
    year?: boolean
    status?: boolean
    submitted_by?: boolean
    submitted_at?: boolean
    created_at?: boolean
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    unit?: boolean | UnitDefaultArgs<ExtArgs>
    submitter?: boolean | FrequencySheet$submitterArgs<ExtArgs>
  }, ExtArgs["result"]["frequencySheet"]>

  export type FrequencySheetSelectScalar = {
    id?: boolean
    organization_id?: boolean
    unit_id?: boolean
    month?: boolean
    year?: boolean
    status?: boolean
    submitted_by?: boolean
    submitted_at?: boolean
    created_at?: boolean
  }

  export type FrequencySheetInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    unit?: boolean | UnitDefaultArgs<ExtArgs>
    submitter?: boolean | FrequencySheet$submitterArgs<ExtArgs>
    entries?: boolean | FrequencySheet$entriesArgs<ExtArgs>
    _count?: boolean | FrequencySheetCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type FrequencySheetIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    unit?: boolean | UnitDefaultArgs<ExtArgs>
    submitter?: boolean | FrequencySheet$submitterArgs<ExtArgs>
  }

  export type $FrequencySheetPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FrequencySheet"
    objects: {
      organization: Prisma.$OrganizationPayload<ExtArgs>
      unit: Prisma.$UnitPayload<ExtArgs>
      submitter: Prisma.$UserPayload<ExtArgs> | null
      entries: Prisma.$FrequencyEntryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      organization_id: string
      unit_id: string
      month: number
      year: number
      status: $Enums.SheetStatus
      submitted_by: string | null
      submitted_at: Date | null
      created_at: Date
    }, ExtArgs["result"]["frequencySheet"]>
    composites: {}
  }

  type FrequencySheetGetPayload<S extends boolean | null | undefined | FrequencySheetDefaultArgs> = $Result.GetResult<Prisma.$FrequencySheetPayload, S>

  type FrequencySheetCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<FrequencySheetFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: FrequencySheetCountAggregateInputType | true
    }

  export interface FrequencySheetDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FrequencySheet'], meta: { name: 'FrequencySheet' } }
    /**
     * Find zero or one FrequencySheet that matches the filter.
     * @param {FrequencySheetFindUniqueArgs} args - Arguments to find a FrequencySheet
     * @example
     * // Get one FrequencySheet
     * const frequencySheet = await prisma.frequencySheet.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FrequencySheetFindUniqueArgs>(args: SelectSubset<T, FrequencySheetFindUniqueArgs<ExtArgs>>): Prisma__FrequencySheetClient<$Result.GetResult<Prisma.$FrequencySheetPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one FrequencySheet that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {FrequencySheetFindUniqueOrThrowArgs} args - Arguments to find a FrequencySheet
     * @example
     * // Get one FrequencySheet
     * const frequencySheet = await prisma.frequencySheet.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FrequencySheetFindUniqueOrThrowArgs>(args: SelectSubset<T, FrequencySheetFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FrequencySheetClient<$Result.GetResult<Prisma.$FrequencySheetPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first FrequencySheet that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FrequencySheetFindFirstArgs} args - Arguments to find a FrequencySheet
     * @example
     * // Get one FrequencySheet
     * const frequencySheet = await prisma.frequencySheet.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FrequencySheetFindFirstArgs>(args?: SelectSubset<T, FrequencySheetFindFirstArgs<ExtArgs>>): Prisma__FrequencySheetClient<$Result.GetResult<Prisma.$FrequencySheetPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first FrequencySheet that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FrequencySheetFindFirstOrThrowArgs} args - Arguments to find a FrequencySheet
     * @example
     * // Get one FrequencySheet
     * const frequencySheet = await prisma.frequencySheet.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FrequencySheetFindFirstOrThrowArgs>(args?: SelectSubset<T, FrequencySheetFindFirstOrThrowArgs<ExtArgs>>): Prisma__FrequencySheetClient<$Result.GetResult<Prisma.$FrequencySheetPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more FrequencySheets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FrequencySheetFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FrequencySheets
     * const frequencySheets = await prisma.frequencySheet.findMany()
     * 
     * // Get first 10 FrequencySheets
     * const frequencySheets = await prisma.frequencySheet.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const frequencySheetWithIdOnly = await prisma.frequencySheet.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FrequencySheetFindManyArgs>(args?: SelectSubset<T, FrequencySheetFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FrequencySheetPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a FrequencySheet.
     * @param {FrequencySheetCreateArgs} args - Arguments to create a FrequencySheet.
     * @example
     * // Create one FrequencySheet
     * const FrequencySheet = await prisma.frequencySheet.create({
     *   data: {
     *     // ... data to create a FrequencySheet
     *   }
     * })
     * 
     */
    create<T extends FrequencySheetCreateArgs>(args: SelectSubset<T, FrequencySheetCreateArgs<ExtArgs>>): Prisma__FrequencySheetClient<$Result.GetResult<Prisma.$FrequencySheetPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many FrequencySheets.
     * @param {FrequencySheetCreateManyArgs} args - Arguments to create many FrequencySheets.
     * @example
     * // Create many FrequencySheets
     * const frequencySheet = await prisma.frequencySheet.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FrequencySheetCreateManyArgs>(args?: SelectSubset<T, FrequencySheetCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FrequencySheets and returns the data saved in the database.
     * @param {FrequencySheetCreateManyAndReturnArgs} args - Arguments to create many FrequencySheets.
     * @example
     * // Create many FrequencySheets
     * const frequencySheet = await prisma.frequencySheet.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FrequencySheets and only return the `id`
     * const frequencySheetWithIdOnly = await prisma.frequencySheet.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FrequencySheetCreateManyAndReturnArgs>(args?: SelectSubset<T, FrequencySheetCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FrequencySheetPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a FrequencySheet.
     * @param {FrequencySheetDeleteArgs} args - Arguments to delete one FrequencySheet.
     * @example
     * // Delete one FrequencySheet
     * const FrequencySheet = await prisma.frequencySheet.delete({
     *   where: {
     *     // ... filter to delete one FrequencySheet
     *   }
     * })
     * 
     */
    delete<T extends FrequencySheetDeleteArgs>(args: SelectSubset<T, FrequencySheetDeleteArgs<ExtArgs>>): Prisma__FrequencySheetClient<$Result.GetResult<Prisma.$FrequencySheetPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one FrequencySheet.
     * @param {FrequencySheetUpdateArgs} args - Arguments to update one FrequencySheet.
     * @example
     * // Update one FrequencySheet
     * const frequencySheet = await prisma.frequencySheet.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FrequencySheetUpdateArgs>(args: SelectSubset<T, FrequencySheetUpdateArgs<ExtArgs>>): Prisma__FrequencySheetClient<$Result.GetResult<Prisma.$FrequencySheetPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more FrequencySheets.
     * @param {FrequencySheetDeleteManyArgs} args - Arguments to filter FrequencySheets to delete.
     * @example
     * // Delete a few FrequencySheets
     * const { count } = await prisma.frequencySheet.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FrequencySheetDeleteManyArgs>(args?: SelectSubset<T, FrequencySheetDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FrequencySheets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FrequencySheetUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FrequencySheets
     * const frequencySheet = await prisma.frequencySheet.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FrequencySheetUpdateManyArgs>(args: SelectSubset<T, FrequencySheetUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one FrequencySheet.
     * @param {FrequencySheetUpsertArgs} args - Arguments to update or create a FrequencySheet.
     * @example
     * // Update or create a FrequencySheet
     * const frequencySheet = await prisma.frequencySheet.upsert({
     *   create: {
     *     // ... data to create a FrequencySheet
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FrequencySheet we want to update
     *   }
     * })
     */
    upsert<T extends FrequencySheetUpsertArgs>(args: SelectSubset<T, FrequencySheetUpsertArgs<ExtArgs>>): Prisma__FrequencySheetClient<$Result.GetResult<Prisma.$FrequencySheetPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of FrequencySheets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FrequencySheetCountArgs} args - Arguments to filter FrequencySheets to count.
     * @example
     * // Count the number of FrequencySheets
     * const count = await prisma.frequencySheet.count({
     *   where: {
     *     // ... the filter for the FrequencySheets we want to count
     *   }
     * })
    **/
    count<T extends FrequencySheetCountArgs>(
      args?: Subset<T, FrequencySheetCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FrequencySheetCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FrequencySheet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FrequencySheetAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FrequencySheetAggregateArgs>(args: Subset<T, FrequencySheetAggregateArgs>): Prisma.PrismaPromise<GetFrequencySheetAggregateType<T>>

    /**
     * Group by FrequencySheet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FrequencySheetGroupByArgs} args - Group by arguments.
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
      T extends FrequencySheetGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FrequencySheetGroupByArgs['orderBy'] }
        : { orderBy?: FrequencySheetGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FrequencySheetGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFrequencySheetGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FrequencySheet model
   */
  readonly fields: FrequencySheetFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FrequencySheet.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FrequencySheetClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    organization<T extends OrganizationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrganizationDefaultArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    unit<T extends UnitDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UnitDefaultArgs<ExtArgs>>): Prisma__UnitClient<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    submitter<T extends FrequencySheet$submitterArgs<ExtArgs> = {}>(args?: Subset<T, FrequencySheet$submitterArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    entries<T extends FrequencySheet$entriesArgs<ExtArgs> = {}>(args?: Subset<T, FrequencySheet$entriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FrequencyEntryPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the FrequencySheet model
   */ 
  interface FrequencySheetFieldRefs {
    readonly id: FieldRef<"FrequencySheet", 'String'>
    readonly organization_id: FieldRef<"FrequencySheet", 'String'>
    readonly unit_id: FieldRef<"FrequencySheet", 'String'>
    readonly month: FieldRef<"FrequencySheet", 'Int'>
    readonly year: FieldRef<"FrequencySheet", 'Int'>
    readonly status: FieldRef<"FrequencySheet", 'SheetStatus'>
    readonly submitted_by: FieldRef<"FrequencySheet", 'String'>
    readonly submitted_at: FieldRef<"FrequencySheet", 'DateTime'>
    readonly created_at: FieldRef<"FrequencySheet", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * FrequencySheet findUnique
   */
  export type FrequencySheetFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FrequencySheet
     */
    select?: FrequencySheetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FrequencySheetInclude<ExtArgs> | null
    /**
     * Filter, which FrequencySheet to fetch.
     */
    where: FrequencySheetWhereUniqueInput
  }

  /**
   * FrequencySheet findUniqueOrThrow
   */
  export type FrequencySheetFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FrequencySheet
     */
    select?: FrequencySheetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FrequencySheetInclude<ExtArgs> | null
    /**
     * Filter, which FrequencySheet to fetch.
     */
    where: FrequencySheetWhereUniqueInput
  }

  /**
   * FrequencySheet findFirst
   */
  export type FrequencySheetFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FrequencySheet
     */
    select?: FrequencySheetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FrequencySheetInclude<ExtArgs> | null
    /**
     * Filter, which FrequencySheet to fetch.
     */
    where?: FrequencySheetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FrequencySheets to fetch.
     */
    orderBy?: FrequencySheetOrderByWithRelationInput | FrequencySheetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FrequencySheets.
     */
    cursor?: FrequencySheetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FrequencySheets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FrequencySheets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FrequencySheets.
     */
    distinct?: FrequencySheetScalarFieldEnum | FrequencySheetScalarFieldEnum[]
  }

  /**
   * FrequencySheet findFirstOrThrow
   */
  export type FrequencySheetFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FrequencySheet
     */
    select?: FrequencySheetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FrequencySheetInclude<ExtArgs> | null
    /**
     * Filter, which FrequencySheet to fetch.
     */
    where?: FrequencySheetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FrequencySheets to fetch.
     */
    orderBy?: FrequencySheetOrderByWithRelationInput | FrequencySheetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FrequencySheets.
     */
    cursor?: FrequencySheetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FrequencySheets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FrequencySheets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FrequencySheets.
     */
    distinct?: FrequencySheetScalarFieldEnum | FrequencySheetScalarFieldEnum[]
  }

  /**
   * FrequencySheet findMany
   */
  export type FrequencySheetFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FrequencySheet
     */
    select?: FrequencySheetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FrequencySheetInclude<ExtArgs> | null
    /**
     * Filter, which FrequencySheets to fetch.
     */
    where?: FrequencySheetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FrequencySheets to fetch.
     */
    orderBy?: FrequencySheetOrderByWithRelationInput | FrequencySheetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FrequencySheets.
     */
    cursor?: FrequencySheetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FrequencySheets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FrequencySheets.
     */
    skip?: number
    distinct?: FrequencySheetScalarFieldEnum | FrequencySheetScalarFieldEnum[]
  }

  /**
   * FrequencySheet create
   */
  export type FrequencySheetCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FrequencySheet
     */
    select?: FrequencySheetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FrequencySheetInclude<ExtArgs> | null
    /**
     * The data needed to create a FrequencySheet.
     */
    data: XOR<FrequencySheetCreateInput, FrequencySheetUncheckedCreateInput>
  }

  /**
   * FrequencySheet createMany
   */
  export type FrequencySheetCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FrequencySheets.
     */
    data: FrequencySheetCreateManyInput | FrequencySheetCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FrequencySheet createManyAndReturn
   */
  export type FrequencySheetCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FrequencySheet
     */
    select?: FrequencySheetSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many FrequencySheets.
     */
    data: FrequencySheetCreateManyInput | FrequencySheetCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FrequencySheetIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * FrequencySheet update
   */
  export type FrequencySheetUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FrequencySheet
     */
    select?: FrequencySheetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FrequencySheetInclude<ExtArgs> | null
    /**
     * The data needed to update a FrequencySheet.
     */
    data: XOR<FrequencySheetUpdateInput, FrequencySheetUncheckedUpdateInput>
    /**
     * Choose, which FrequencySheet to update.
     */
    where: FrequencySheetWhereUniqueInput
  }

  /**
   * FrequencySheet updateMany
   */
  export type FrequencySheetUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FrequencySheets.
     */
    data: XOR<FrequencySheetUpdateManyMutationInput, FrequencySheetUncheckedUpdateManyInput>
    /**
     * Filter which FrequencySheets to update
     */
    where?: FrequencySheetWhereInput
  }

  /**
   * FrequencySheet upsert
   */
  export type FrequencySheetUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FrequencySheet
     */
    select?: FrequencySheetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FrequencySheetInclude<ExtArgs> | null
    /**
     * The filter to search for the FrequencySheet to update in case it exists.
     */
    where: FrequencySheetWhereUniqueInput
    /**
     * In case the FrequencySheet found by the `where` argument doesn't exist, create a new FrequencySheet with this data.
     */
    create: XOR<FrequencySheetCreateInput, FrequencySheetUncheckedCreateInput>
    /**
     * In case the FrequencySheet was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FrequencySheetUpdateInput, FrequencySheetUncheckedUpdateInput>
  }

  /**
   * FrequencySheet delete
   */
  export type FrequencySheetDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FrequencySheet
     */
    select?: FrequencySheetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FrequencySheetInclude<ExtArgs> | null
    /**
     * Filter which FrequencySheet to delete.
     */
    where: FrequencySheetWhereUniqueInput
  }

  /**
   * FrequencySheet deleteMany
   */
  export type FrequencySheetDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FrequencySheets to delete
     */
    where?: FrequencySheetWhereInput
  }

  /**
   * FrequencySheet.submitter
   */
  export type FrequencySheet$submitterArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * FrequencySheet.entries
   */
  export type FrequencySheet$entriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FrequencyEntry
     */
    select?: FrequencyEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FrequencyEntryInclude<ExtArgs> | null
    where?: FrequencyEntryWhereInput
    orderBy?: FrequencyEntryOrderByWithRelationInput | FrequencyEntryOrderByWithRelationInput[]
    cursor?: FrequencyEntryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FrequencyEntryScalarFieldEnum | FrequencyEntryScalarFieldEnum[]
  }

  /**
   * FrequencySheet without action
   */
  export type FrequencySheetDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FrequencySheet
     */
    select?: FrequencySheetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FrequencySheetInclude<ExtArgs> | null
  }


  /**
   * Model FrequencyEntry
   */

  export type AggregateFrequencyEntry = {
    _count: FrequencyEntryCountAggregateOutputType | null
    _avg: FrequencyEntryAvgAggregateOutputType | null
    _sum: FrequencyEntrySumAggregateOutputType | null
    _min: FrequencyEntryMinAggregateOutputType | null
    _max: FrequencyEntryMaxAggregateOutputType | null
  }

  export type FrequencyEntryAvgAggregateOutputType = {
    absence_days: number | null
    additional_night_hours: number | null
    overtime_50_hours: number | null
    overtime_100_hours: number | null
    on_call_hours: number | null
    vacation_days: number | null
    salary_floor_amount: number | null
  }

  export type FrequencyEntrySumAggregateOutputType = {
    absence_days: number | null
    additional_night_hours: number | null
    overtime_50_hours: number | null
    overtime_100_hours: number | null
    on_call_hours: number | null
    vacation_days: number | null
    salary_floor_amount: number | null
  }

  export type FrequencyEntryMinAggregateOutputType = {
    id: string | null
    sheet_id: string | null
    employee_id: string | null
    absence_days: number | null
    additional_night_hours: number | null
    overtime_50_hours: number | null
    overtime_100_hours: number | null
    on_call_hours: number | null
    vacation_days: number | null
    salary_floor_amount: number | null
    justification: string | null
    created_at: Date | null
  }

  export type FrequencyEntryMaxAggregateOutputType = {
    id: string | null
    sheet_id: string | null
    employee_id: string | null
    absence_days: number | null
    additional_night_hours: number | null
    overtime_50_hours: number | null
    overtime_100_hours: number | null
    on_call_hours: number | null
    vacation_days: number | null
    salary_floor_amount: number | null
    justification: string | null
    created_at: Date | null
  }

  export type FrequencyEntryCountAggregateOutputType = {
    id: number
    sheet_id: number
    employee_id: number
    absence_days: number
    additional_night_hours: number
    overtime_50_hours: number
    overtime_100_hours: number
    on_call_hours: number
    vacation_days: number
    salary_floor_amount: number
    justification: number
    created_at: number
    _all: number
  }


  export type FrequencyEntryAvgAggregateInputType = {
    absence_days?: true
    additional_night_hours?: true
    overtime_50_hours?: true
    overtime_100_hours?: true
    on_call_hours?: true
    vacation_days?: true
    salary_floor_amount?: true
  }

  export type FrequencyEntrySumAggregateInputType = {
    absence_days?: true
    additional_night_hours?: true
    overtime_50_hours?: true
    overtime_100_hours?: true
    on_call_hours?: true
    vacation_days?: true
    salary_floor_amount?: true
  }

  export type FrequencyEntryMinAggregateInputType = {
    id?: true
    sheet_id?: true
    employee_id?: true
    absence_days?: true
    additional_night_hours?: true
    overtime_50_hours?: true
    overtime_100_hours?: true
    on_call_hours?: true
    vacation_days?: true
    salary_floor_amount?: true
    justification?: true
    created_at?: true
  }

  export type FrequencyEntryMaxAggregateInputType = {
    id?: true
    sheet_id?: true
    employee_id?: true
    absence_days?: true
    additional_night_hours?: true
    overtime_50_hours?: true
    overtime_100_hours?: true
    on_call_hours?: true
    vacation_days?: true
    salary_floor_amount?: true
    justification?: true
    created_at?: true
  }

  export type FrequencyEntryCountAggregateInputType = {
    id?: true
    sheet_id?: true
    employee_id?: true
    absence_days?: true
    additional_night_hours?: true
    overtime_50_hours?: true
    overtime_100_hours?: true
    on_call_hours?: true
    vacation_days?: true
    salary_floor_amount?: true
    justification?: true
    created_at?: true
    _all?: true
  }

  export type FrequencyEntryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FrequencyEntry to aggregate.
     */
    where?: FrequencyEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FrequencyEntries to fetch.
     */
    orderBy?: FrequencyEntryOrderByWithRelationInput | FrequencyEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FrequencyEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FrequencyEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FrequencyEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FrequencyEntries
    **/
    _count?: true | FrequencyEntryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FrequencyEntryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FrequencyEntrySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FrequencyEntryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FrequencyEntryMaxAggregateInputType
  }

  export type GetFrequencyEntryAggregateType<T extends FrequencyEntryAggregateArgs> = {
        [P in keyof T & keyof AggregateFrequencyEntry]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFrequencyEntry[P]>
      : GetScalarType<T[P], AggregateFrequencyEntry[P]>
  }




  export type FrequencyEntryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FrequencyEntryWhereInput
    orderBy?: FrequencyEntryOrderByWithAggregationInput | FrequencyEntryOrderByWithAggregationInput[]
    by: FrequencyEntryScalarFieldEnum[] | FrequencyEntryScalarFieldEnum
    having?: FrequencyEntryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FrequencyEntryCountAggregateInputType | true
    _avg?: FrequencyEntryAvgAggregateInputType
    _sum?: FrequencyEntrySumAggregateInputType
    _min?: FrequencyEntryMinAggregateInputType
    _max?: FrequencyEntryMaxAggregateInputType
  }

  export type FrequencyEntryGroupByOutputType = {
    id: string
    sheet_id: string
    employee_id: string
    absence_days: number
    additional_night_hours: number
    overtime_50_hours: number
    overtime_100_hours: number
    on_call_hours: number
    vacation_days: number
    salary_floor_amount: number | null
    justification: string | null
    created_at: Date
    _count: FrequencyEntryCountAggregateOutputType | null
    _avg: FrequencyEntryAvgAggregateOutputType | null
    _sum: FrequencyEntrySumAggregateOutputType | null
    _min: FrequencyEntryMinAggregateOutputType | null
    _max: FrequencyEntryMaxAggregateOutputType | null
  }

  type GetFrequencyEntryGroupByPayload<T extends FrequencyEntryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FrequencyEntryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FrequencyEntryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FrequencyEntryGroupByOutputType[P]>
            : GetScalarType<T[P], FrequencyEntryGroupByOutputType[P]>
        }
      >
    >


  export type FrequencyEntrySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sheet_id?: boolean
    employee_id?: boolean
    absence_days?: boolean
    additional_night_hours?: boolean
    overtime_50_hours?: boolean
    overtime_100_hours?: boolean
    on_call_hours?: boolean
    vacation_days?: boolean
    salary_floor_amount?: boolean
    justification?: boolean
    created_at?: boolean
    sheet?: boolean | FrequencySheetDefaultArgs<ExtArgs>
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["frequencyEntry"]>

  export type FrequencyEntrySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sheet_id?: boolean
    employee_id?: boolean
    absence_days?: boolean
    additional_night_hours?: boolean
    overtime_50_hours?: boolean
    overtime_100_hours?: boolean
    on_call_hours?: boolean
    vacation_days?: boolean
    salary_floor_amount?: boolean
    justification?: boolean
    created_at?: boolean
    sheet?: boolean | FrequencySheetDefaultArgs<ExtArgs>
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["frequencyEntry"]>

  export type FrequencyEntrySelectScalar = {
    id?: boolean
    sheet_id?: boolean
    employee_id?: boolean
    absence_days?: boolean
    additional_night_hours?: boolean
    overtime_50_hours?: boolean
    overtime_100_hours?: boolean
    on_call_hours?: boolean
    vacation_days?: boolean
    salary_floor_amount?: boolean
    justification?: boolean
    created_at?: boolean
  }

  export type FrequencyEntryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sheet?: boolean | FrequencySheetDefaultArgs<ExtArgs>
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
  }
  export type FrequencyEntryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sheet?: boolean | FrequencySheetDefaultArgs<ExtArgs>
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
  }

  export type $FrequencyEntryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FrequencyEntry"
    objects: {
      sheet: Prisma.$FrequencySheetPayload<ExtArgs>
      employee: Prisma.$EmployeePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sheet_id: string
      employee_id: string
      absence_days: number
      additional_night_hours: number
      overtime_50_hours: number
      overtime_100_hours: number
      on_call_hours: number
      vacation_days: number
      salary_floor_amount: number | null
      justification: string | null
      created_at: Date
    }, ExtArgs["result"]["frequencyEntry"]>
    composites: {}
  }

  type FrequencyEntryGetPayload<S extends boolean | null | undefined | FrequencyEntryDefaultArgs> = $Result.GetResult<Prisma.$FrequencyEntryPayload, S>

  type FrequencyEntryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<FrequencyEntryFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: FrequencyEntryCountAggregateInputType | true
    }

  export interface FrequencyEntryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FrequencyEntry'], meta: { name: 'FrequencyEntry' } }
    /**
     * Find zero or one FrequencyEntry that matches the filter.
     * @param {FrequencyEntryFindUniqueArgs} args - Arguments to find a FrequencyEntry
     * @example
     * // Get one FrequencyEntry
     * const frequencyEntry = await prisma.frequencyEntry.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FrequencyEntryFindUniqueArgs>(args: SelectSubset<T, FrequencyEntryFindUniqueArgs<ExtArgs>>): Prisma__FrequencyEntryClient<$Result.GetResult<Prisma.$FrequencyEntryPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one FrequencyEntry that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {FrequencyEntryFindUniqueOrThrowArgs} args - Arguments to find a FrequencyEntry
     * @example
     * // Get one FrequencyEntry
     * const frequencyEntry = await prisma.frequencyEntry.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FrequencyEntryFindUniqueOrThrowArgs>(args: SelectSubset<T, FrequencyEntryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FrequencyEntryClient<$Result.GetResult<Prisma.$FrequencyEntryPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first FrequencyEntry that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FrequencyEntryFindFirstArgs} args - Arguments to find a FrequencyEntry
     * @example
     * // Get one FrequencyEntry
     * const frequencyEntry = await prisma.frequencyEntry.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FrequencyEntryFindFirstArgs>(args?: SelectSubset<T, FrequencyEntryFindFirstArgs<ExtArgs>>): Prisma__FrequencyEntryClient<$Result.GetResult<Prisma.$FrequencyEntryPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first FrequencyEntry that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FrequencyEntryFindFirstOrThrowArgs} args - Arguments to find a FrequencyEntry
     * @example
     * // Get one FrequencyEntry
     * const frequencyEntry = await prisma.frequencyEntry.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FrequencyEntryFindFirstOrThrowArgs>(args?: SelectSubset<T, FrequencyEntryFindFirstOrThrowArgs<ExtArgs>>): Prisma__FrequencyEntryClient<$Result.GetResult<Prisma.$FrequencyEntryPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more FrequencyEntries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FrequencyEntryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FrequencyEntries
     * const frequencyEntries = await prisma.frequencyEntry.findMany()
     * 
     * // Get first 10 FrequencyEntries
     * const frequencyEntries = await prisma.frequencyEntry.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const frequencyEntryWithIdOnly = await prisma.frequencyEntry.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FrequencyEntryFindManyArgs>(args?: SelectSubset<T, FrequencyEntryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FrequencyEntryPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a FrequencyEntry.
     * @param {FrequencyEntryCreateArgs} args - Arguments to create a FrequencyEntry.
     * @example
     * // Create one FrequencyEntry
     * const FrequencyEntry = await prisma.frequencyEntry.create({
     *   data: {
     *     // ... data to create a FrequencyEntry
     *   }
     * })
     * 
     */
    create<T extends FrequencyEntryCreateArgs>(args: SelectSubset<T, FrequencyEntryCreateArgs<ExtArgs>>): Prisma__FrequencyEntryClient<$Result.GetResult<Prisma.$FrequencyEntryPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many FrequencyEntries.
     * @param {FrequencyEntryCreateManyArgs} args - Arguments to create many FrequencyEntries.
     * @example
     * // Create many FrequencyEntries
     * const frequencyEntry = await prisma.frequencyEntry.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FrequencyEntryCreateManyArgs>(args?: SelectSubset<T, FrequencyEntryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FrequencyEntries and returns the data saved in the database.
     * @param {FrequencyEntryCreateManyAndReturnArgs} args - Arguments to create many FrequencyEntries.
     * @example
     * // Create many FrequencyEntries
     * const frequencyEntry = await prisma.frequencyEntry.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FrequencyEntries and only return the `id`
     * const frequencyEntryWithIdOnly = await prisma.frequencyEntry.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FrequencyEntryCreateManyAndReturnArgs>(args?: SelectSubset<T, FrequencyEntryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FrequencyEntryPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a FrequencyEntry.
     * @param {FrequencyEntryDeleteArgs} args - Arguments to delete one FrequencyEntry.
     * @example
     * // Delete one FrequencyEntry
     * const FrequencyEntry = await prisma.frequencyEntry.delete({
     *   where: {
     *     // ... filter to delete one FrequencyEntry
     *   }
     * })
     * 
     */
    delete<T extends FrequencyEntryDeleteArgs>(args: SelectSubset<T, FrequencyEntryDeleteArgs<ExtArgs>>): Prisma__FrequencyEntryClient<$Result.GetResult<Prisma.$FrequencyEntryPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one FrequencyEntry.
     * @param {FrequencyEntryUpdateArgs} args - Arguments to update one FrequencyEntry.
     * @example
     * // Update one FrequencyEntry
     * const frequencyEntry = await prisma.frequencyEntry.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FrequencyEntryUpdateArgs>(args: SelectSubset<T, FrequencyEntryUpdateArgs<ExtArgs>>): Prisma__FrequencyEntryClient<$Result.GetResult<Prisma.$FrequencyEntryPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more FrequencyEntries.
     * @param {FrequencyEntryDeleteManyArgs} args - Arguments to filter FrequencyEntries to delete.
     * @example
     * // Delete a few FrequencyEntries
     * const { count } = await prisma.frequencyEntry.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FrequencyEntryDeleteManyArgs>(args?: SelectSubset<T, FrequencyEntryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FrequencyEntries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FrequencyEntryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FrequencyEntries
     * const frequencyEntry = await prisma.frequencyEntry.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FrequencyEntryUpdateManyArgs>(args: SelectSubset<T, FrequencyEntryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one FrequencyEntry.
     * @param {FrequencyEntryUpsertArgs} args - Arguments to update or create a FrequencyEntry.
     * @example
     * // Update or create a FrequencyEntry
     * const frequencyEntry = await prisma.frequencyEntry.upsert({
     *   create: {
     *     // ... data to create a FrequencyEntry
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FrequencyEntry we want to update
     *   }
     * })
     */
    upsert<T extends FrequencyEntryUpsertArgs>(args: SelectSubset<T, FrequencyEntryUpsertArgs<ExtArgs>>): Prisma__FrequencyEntryClient<$Result.GetResult<Prisma.$FrequencyEntryPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of FrequencyEntries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FrequencyEntryCountArgs} args - Arguments to filter FrequencyEntries to count.
     * @example
     * // Count the number of FrequencyEntries
     * const count = await prisma.frequencyEntry.count({
     *   where: {
     *     // ... the filter for the FrequencyEntries we want to count
     *   }
     * })
    **/
    count<T extends FrequencyEntryCountArgs>(
      args?: Subset<T, FrequencyEntryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FrequencyEntryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FrequencyEntry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FrequencyEntryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FrequencyEntryAggregateArgs>(args: Subset<T, FrequencyEntryAggregateArgs>): Prisma.PrismaPromise<GetFrequencyEntryAggregateType<T>>

    /**
     * Group by FrequencyEntry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FrequencyEntryGroupByArgs} args - Group by arguments.
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
      T extends FrequencyEntryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FrequencyEntryGroupByArgs['orderBy'] }
        : { orderBy?: FrequencyEntryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FrequencyEntryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFrequencyEntryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FrequencyEntry model
   */
  readonly fields: FrequencyEntryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FrequencyEntry.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FrequencyEntryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sheet<T extends FrequencySheetDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FrequencySheetDefaultArgs<ExtArgs>>): Prisma__FrequencySheetClient<$Result.GetResult<Prisma.$FrequencySheetPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    employee<T extends EmployeeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EmployeeDefaultArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the FrequencyEntry model
   */ 
  interface FrequencyEntryFieldRefs {
    readonly id: FieldRef<"FrequencyEntry", 'String'>
    readonly sheet_id: FieldRef<"FrequencyEntry", 'String'>
    readonly employee_id: FieldRef<"FrequencyEntry", 'String'>
    readonly absence_days: FieldRef<"FrequencyEntry", 'Int'>
    readonly additional_night_hours: FieldRef<"FrequencyEntry", 'Float'>
    readonly overtime_50_hours: FieldRef<"FrequencyEntry", 'Float'>
    readonly overtime_100_hours: FieldRef<"FrequencyEntry", 'Float'>
    readonly on_call_hours: FieldRef<"FrequencyEntry", 'Float'>
    readonly vacation_days: FieldRef<"FrequencyEntry", 'Int'>
    readonly salary_floor_amount: FieldRef<"FrequencyEntry", 'Float'>
    readonly justification: FieldRef<"FrequencyEntry", 'String'>
    readonly created_at: FieldRef<"FrequencyEntry", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * FrequencyEntry findUnique
   */
  export type FrequencyEntryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FrequencyEntry
     */
    select?: FrequencyEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FrequencyEntryInclude<ExtArgs> | null
    /**
     * Filter, which FrequencyEntry to fetch.
     */
    where: FrequencyEntryWhereUniqueInput
  }

  /**
   * FrequencyEntry findUniqueOrThrow
   */
  export type FrequencyEntryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FrequencyEntry
     */
    select?: FrequencyEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FrequencyEntryInclude<ExtArgs> | null
    /**
     * Filter, which FrequencyEntry to fetch.
     */
    where: FrequencyEntryWhereUniqueInput
  }

  /**
   * FrequencyEntry findFirst
   */
  export type FrequencyEntryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FrequencyEntry
     */
    select?: FrequencyEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FrequencyEntryInclude<ExtArgs> | null
    /**
     * Filter, which FrequencyEntry to fetch.
     */
    where?: FrequencyEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FrequencyEntries to fetch.
     */
    orderBy?: FrequencyEntryOrderByWithRelationInput | FrequencyEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FrequencyEntries.
     */
    cursor?: FrequencyEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FrequencyEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FrequencyEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FrequencyEntries.
     */
    distinct?: FrequencyEntryScalarFieldEnum | FrequencyEntryScalarFieldEnum[]
  }

  /**
   * FrequencyEntry findFirstOrThrow
   */
  export type FrequencyEntryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FrequencyEntry
     */
    select?: FrequencyEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FrequencyEntryInclude<ExtArgs> | null
    /**
     * Filter, which FrequencyEntry to fetch.
     */
    where?: FrequencyEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FrequencyEntries to fetch.
     */
    orderBy?: FrequencyEntryOrderByWithRelationInput | FrequencyEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FrequencyEntries.
     */
    cursor?: FrequencyEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FrequencyEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FrequencyEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FrequencyEntries.
     */
    distinct?: FrequencyEntryScalarFieldEnum | FrequencyEntryScalarFieldEnum[]
  }

  /**
   * FrequencyEntry findMany
   */
  export type FrequencyEntryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FrequencyEntry
     */
    select?: FrequencyEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FrequencyEntryInclude<ExtArgs> | null
    /**
     * Filter, which FrequencyEntries to fetch.
     */
    where?: FrequencyEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FrequencyEntries to fetch.
     */
    orderBy?: FrequencyEntryOrderByWithRelationInput | FrequencyEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FrequencyEntries.
     */
    cursor?: FrequencyEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FrequencyEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FrequencyEntries.
     */
    skip?: number
    distinct?: FrequencyEntryScalarFieldEnum | FrequencyEntryScalarFieldEnum[]
  }

  /**
   * FrequencyEntry create
   */
  export type FrequencyEntryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FrequencyEntry
     */
    select?: FrequencyEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FrequencyEntryInclude<ExtArgs> | null
    /**
     * The data needed to create a FrequencyEntry.
     */
    data: XOR<FrequencyEntryCreateInput, FrequencyEntryUncheckedCreateInput>
  }

  /**
   * FrequencyEntry createMany
   */
  export type FrequencyEntryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FrequencyEntries.
     */
    data: FrequencyEntryCreateManyInput | FrequencyEntryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FrequencyEntry createManyAndReturn
   */
  export type FrequencyEntryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FrequencyEntry
     */
    select?: FrequencyEntrySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many FrequencyEntries.
     */
    data: FrequencyEntryCreateManyInput | FrequencyEntryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FrequencyEntryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * FrequencyEntry update
   */
  export type FrequencyEntryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FrequencyEntry
     */
    select?: FrequencyEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FrequencyEntryInclude<ExtArgs> | null
    /**
     * The data needed to update a FrequencyEntry.
     */
    data: XOR<FrequencyEntryUpdateInput, FrequencyEntryUncheckedUpdateInput>
    /**
     * Choose, which FrequencyEntry to update.
     */
    where: FrequencyEntryWhereUniqueInput
  }

  /**
   * FrequencyEntry updateMany
   */
  export type FrequencyEntryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FrequencyEntries.
     */
    data: XOR<FrequencyEntryUpdateManyMutationInput, FrequencyEntryUncheckedUpdateManyInput>
    /**
     * Filter which FrequencyEntries to update
     */
    where?: FrequencyEntryWhereInput
  }

  /**
   * FrequencyEntry upsert
   */
  export type FrequencyEntryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FrequencyEntry
     */
    select?: FrequencyEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FrequencyEntryInclude<ExtArgs> | null
    /**
     * The filter to search for the FrequencyEntry to update in case it exists.
     */
    where: FrequencyEntryWhereUniqueInput
    /**
     * In case the FrequencyEntry found by the `where` argument doesn't exist, create a new FrequencyEntry with this data.
     */
    create: XOR<FrequencyEntryCreateInput, FrequencyEntryUncheckedCreateInput>
    /**
     * In case the FrequencyEntry was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FrequencyEntryUpdateInput, FrequencyEntryUncheckedUpdateInput>
  }

  /**
   * FrequencyEntry delete
   */
  export type FrequencyEntryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FrequencyEntry
     */
    select?: FrequencyEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FrequencyEntryInclude<ExtArgs> | null
    /**
     * Filter which FrequencyEntry to delete.
     */
    where: FrequencyEntryWhereUniqueInput
  }

  /**
   * FrequencyEntry deleteMany
   */
  export type FrequencyEntryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FrequencyEntries to delete
     */
    where?: FrequencyEntryWhereInput
  }

  /**
   * FrequencyEntry without action
   */
  export type FrequencyEntryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FrequencyEntry
     */
    select?: FrequencyEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FrequencyEntryInclude<ExtArgs> | null
  }


  /**
   * Model EventType
   */

  export type AggregateEventType = {
    _count: EventTypeCountAggregateOutputType | null
    _min: EventTypeMinAggregateOutputType | null
    _max: EventTypeMaxAggregateOutputType | null
  }

  export type EventTypeMinAggregateOutputType = {
    id: string | null
    name: string | null
    label: string | null
    description: string | null
    created_at: Date | null
  }

  export type EventTypeMaxAggregateOutputType = {
    id: string | null
    name: string | null
    label: string | null
    description: string | null
    created_at: Date | null
  }

  export type EventTypeCountAggregateOutputType = {
    id: number
    name: number
    label: number
    description: number
    created_at: number
    _all: number
  }


  export type EventTypeMinAggregateInputType = {
    id?: true
    name?: true
    label?: true
    description?: true
    created_at?: true
  }

  export type EventTypeMaxAggregateInputType = {
    id?: true
    name?: true
    label?: true
    description?: true
    created_at?: true
  }

  export type EventTypeCountAggregateInputType = {
    id?: true
    name?: true
    label?: true
    description?: true
    created_at?: true
    _all?: true
  }

  export type EventTypeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EventType to aggregate.
     */
    where?: EventTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventTypes to fetch.
     */
    orderBy?: EventTypeOrderByWithRelationInput | EventTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EventTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EventTypes
    **/
    _count?: true | EventTypeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventTypeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventTypeMaxAggregateInputType
  }

  export type GetEventTypeAggregateType<T extends EventTypeAggregateArgs> = {
        [P in keyof T & keyof AggregateEventType]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEventType[P]>
      : GetScalarType<T[P], AggregateEventType[P]>
  }




  export type EventTypeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventTypeWhereInput
    orderBy?: EventTypeOrderByWithAggregationInput | EventTypeOrderByWithAggregationInput[]
    by: EventTypeScalarFieldEnum[] | EventTypeScalarFieldEnum
    having?: EventTypeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventTypeCountAggregateInputType | true
    _min?: EventTypeMinAggregateInputType
    _max?: EventTypeMaxAggregateInputType
  }

  export type EventTypeGroupByOutputType = {
    id: string
    name: string
    label: string
    description: string | null
    created_at: Date
    _count: EventTypeCountAggregateOutputType | null
    _min: EventTypeMinAggregateOutputType | null
    _max: EventTypeMaxAggregateOutputType | null
  }

  type GetEventTypeGroupByPayload<T extends EventTypeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventTypeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventTypeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventTypeGroupByOutputType[P]>
            : GetScalarType<T[P], EventTypeGroupByOutputType[P]>
        }
      >
    >


  export type EventTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    label?: boolean
    description?: boolean
    created_at?: boolean
    event_codes?: boolean | EventType$event_codesArgs<ExtArgs>
    _count?: boolean | EventTypeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["eventType"]>

  export type EventTypeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    label?: boolean
    description?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["eventType"]>

  export type EventTypeSelectScalar = {
    id?: boolean
    name?: boolean
    label?: boolean
    description?: boolean
    created_at?: boolean
  }

  export type EventTypeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event_codes?: boolean | EventType$event_codesArgs<ExtArgs>
    _count?: boolean | EventTypeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EventTypeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $EventTypePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EventType"
    objects: {
      event_codes: Prisma.$EventCodePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      label: string
      description: string | null
      created_at: Date
    }, ExtArgs["result"]["eventType"]>
    composites: {}
  }

  type EventTypeGetPayload<S extends boolean | null | undefined | EventTypeDefaultArgs> = $Result.GetResult<Prisma.$EventTypePayload, S>

  type EventTypeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<EventTypeFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: EventTypeCountAggregateInputType | true
    }

  export interface EventTypeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EventType'], meta: { name: 'EventType' } }
    /**
     * Find zero or one EventType that matches the filter.
     * @param {EventTypeFindUniqueArgs} args - Arguments to find a EventType
     * @example
     * // Get one EventType
     * const eventType = await prisma.eventType.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EventTypeFindUniqueArgs>(args: SelectSubset<T, EventTypeFindUniqueArgs<ExtArgs>>): Prisma__EventTypeClient<$Result.GetResult<Prisma.$EventTypePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one EventType that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {EventTypeFindUniqueOrThrowArgs} args - Arguments to find a EventType
     * @example
     * // Get one EventType
     * const eventType = await prisma.eventType.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EventTypeFindUniqueOrThrowArgs>(args: SelectSubset<T, EventTypeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EventTypeClient<$Result.GetResult<Prisma.$EventTypePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first EventType that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventTypeFindFirstArgs} args - Arguments to find a EventType
     * @example
     * // Get one EventType
     * const eventType = await prisma.eventType.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EventTypeFindFirstArgs>(args?: SelectSubset<T, EventTypeFindFirstArgs<ExtArgs>>): Prisma__EventTypeClient<$Result.GetResult<Prisma.$EventTypePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first EventType that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventTypeFindFirstOrThrowArgs} args - Arguments to find a EventType
     * @example
     * // Get one EventType
     * const eventType = await prisma.eventType.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EventTypeFindFirstOrThrowArgs>(args?: SelectSubset<T, EventTypeFindFirstOrThrowArgs<ExtArgs>>): Prisma__EventTypeClient<$Result.GetResult<Prisma.$EventTypePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more EventTypes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventTypeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EventTypes
     * const eventTypes = await prisma.eventType.findMany()
     * 
     * // Get first 10 EventTypes
     * const eventTypes = await prisma.eventType.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eventTypeWithIdOnly = await prisma.eventType.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EventTypeFindManyArgs>(args?: SelectSubset<T, EventTypeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventTypePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a EventType.
     * @param {EventTypeCreateArgs} args - Arguments to create a EventType.
     * @example
     * // Create one EventType
     * const EventType = await prisma.eventType.create({
     *   data: {
     *     // ... data to create a EventType
     *   }
     * })
     * 
     */
    create<T extends EventTypeCreateArgs>(args: SelectSubset<T, EventTypeCreateArgs<ExtArgs>>): Prisma__EventTypeClient<$Result.GetResult<Prisma.$EventTypePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many EventTypes.
     * @param {EventTypeCreateManyArgs} args - Arguments to create many EventTypes.
     * @example
     * // Create many EventTypes
     * const eventType = await prisma.eventType.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EventTypeCreateManyArgs>(args?: SelectSubset<T, EventTypeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EventTypes and returns the data saved in the database.
     * @param {EventTypeCreateManyAndReturnArgs} args - Arguments to create many EventTypes.
     * @example
     * // Create many EventTypes
     * const eventType = await prisma.eventType.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EventTypes and only return the `id`
     * const eventTypeWithIdOnly = await prisma.eventType.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EventTypeCreateManyAndReturnArgs>(args?: SelectSubset<T, EventTypeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventTypePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a EventType.
     * @param {EventTypeDeleteArgs} args - Arguments to delete one EventType.
     * @example
     * // Delete one EventType
     * const EventType = await prisma.eventType.delete({
     *   where: {
     *     // ... filter to delete one EventType
     *   }
     * })
     * 
     */
    delete<T extends EventTypeDeleteArgs>(args: SelectSubset<T, EventTypeDeleteArgs<ExtArgs>>): Prisma__EventTypeClient<$Result.GetResult<Prisma.$EventTypePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one EventType.
     * @param {EventTypeUpdateArgs} args - Arguments to update one EventType.
     * @example
     * // Update one EventType
     * const eventType = await prisma.eventType.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EventTypeUpdateArgs>(args: SelectSubset<T, EventTypeUpdateArgs<ExtArgs>>): Prisma__EventTypeClient<$Result.GetResult<Prisma.$EventTypePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more EventTypes.
     * @param {EventTypeDeleteManyArgs} args - Arguments to filter EventTypes to delete.
     * @example
     * // Delete a few EventTypes
     * const { count } = await prisma.eventType.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EventTypeDeleteManyArgs>(args?: SelectSubset<T, EventTypeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EventTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventTypeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EventTypes
     * const eventType = await prisma.eventType.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EventTypeUpdateManyArgs>(args: SelectSubset<T, EventTypeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one EventType.
     * @param {EventTypeUpsertArgs} args - Arguments to update or create a EventType.
     * @example
     * // Update or create a EventType
     * const eventType = await prisma.eventType.upsert({
     *   create: {
     *     // ... data to create a EventType
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EventType we want to update
     *   }
     * })
     */
    upsert<T extends EventTypeUpsertArgs>(args: SelectSubset<T, EventTypeUpsertArgs<ExtArgs>>): Prisma__EventTypeClient<$Result.GetResult<Prisma.$EventTypePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of EventTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventTypeCountArgs} args - Arguments to filter EventTypes to count.
     * @example
     * // Count the number of EventTypes
     * const count = await prisma.eventType.count({
     *   where: {
     *     // ... the filter for the EventTypes we want to count
     *   }
     * })
    **/
    count<T extends EventTypeCountArgs>(
      args?: Subset<T, EventTypeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventTypeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EventType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventTypeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EventTypeAggregateArgs>(args: Subset<T, EventTypeAggregateArgs>): Prisma.PrismaPromise<GetEventTypeAggregateType<T>>

    /**
     * Group by EventType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventTypeGroupByArgs} args - Group by arguments.
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
      T extends EventTypeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EventTypeGroupByArgs['orderBy'] }
        : { orderBy?: EventTypeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EventTypeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventTypeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EventType model
   */
  readonly fields: EventTypeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EventType.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EventTypeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    event_codes<T extends EventType$event_codesArgs<ExtArgs> = {}>(args?: Subset<T, EventType$event_codesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventCodePayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the EventType model
   */ 
  interface EventTypeFieldRefs {
    readonly id: FieldRef<"EventType", 'String'>
    readonly name: FieldRef<"EventType", 'String'>
    readonly label: FieldRef<"EventType", 'String'>
    readonly description: FieldRef<"EventType", 'String'>
    readonly created_at: FieldRef<"EventType", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * EventType findUnique
   */
  export type EventTypeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventType
     */
    select?: EventTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventTypeInclude<ExtArgs> | null
    /**
     * Filter, which EventType to fetch.
     */
    where: EventTypeWhereUniqueInput
  }

  /**
   * EventType findUniqueOrThrow
   */
  export type EventTypeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventType
     */
    select?: EventTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventTypeInclude<ExtArgs> | null
    /**
     * Filter, which EventType to fetch.
     */
    where: EventTypeWhereUniqueInput
  }

  /**
   * EventType findFirst
   */
  export type EventTypeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventType
     */
    select?: EventTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventTypeInclude<ExtArgs> | null
    /**
     * Filter, which EventType to fetch.
     */
    where?: EventTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventTypes to fetch.
     */
    orderBy?: EventTypeOrderByWithRelationInput | EventTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EventTypes.
     */
    cursor?: EventTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EventTypes.
     */
    distinct?: EventTypeScalarFieldEnum | EventTypeScalarFieldEnum[]
  }

  /**
   * EventType findFirstOrThrow
   */
  export type EventTypeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventType
     */
    select?: EventTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventTypeInclude<ExtArgs> | null
    /**
     * Filter, which EventType to fetch.
     */
    where?: EventTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventTypes to fetch.
     */
    orderBy?: EventTypeOrderByWithRelationInput | EventTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EventTypes.
     */
    cursor?: EventTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EventTypes.
     */
    distinct?: EventTypeScalarFieldEnum | EventTypeScalarFieldEnum[]
  }

  /**
   * EventType findMany
   */
  export type EventTypeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventType
     */
    select?: EventTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventTypeInclude<ExtArgs> | null
    /**
     * Filter, which EventTypes to fetch.
     */
    where?: EventTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventTypes to fetch.
     */
    orderBy?: EventTypeOrderByWithRelationInput | EventTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EventTypes.
     */
    cursor?: EventTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventTypes.
     */
    skip?: number
    distinct?: EventTypeScalarFieldEnum | EventTypeScalarFieldEnum[]
  }

  /**
   * EventType create
   */
  export type EventTypeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventType
     */
    select?: EventTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventTypeInclude<ExtArgs> | null
    /**
     * The data needed to create a EventType.
     */
    data: XOR<EventTypeCreateInput, EventTypeUncheckedCreateInput>
  }

  /**
   * EventType createMany
   */
  export type EventTypeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EventTypes.
     */
    data: EventTypeCreateManyInput | EventTypeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EventType createManyAndReturn
   */
  export type EventTypeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventType
     */
    select?: EventTypeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many EventTypes.
     */
    data: EventTypeCreateManyInput | EventTypeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EventType update
   */
  export type EventTypeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventType
     */
    select?: EventTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventTypeInclude<ExtArgs> | null
    /**
     * The data needed to update a EventType.
     */
    data: XOR<EventTypeUpdateInput, EventTypeUncheckedUpdateInput>
    /**
     * Choose, which EventType to update.
     */
    where: EventTypeWhereUniqueInput
  }

  /**
   * EventType updateMany
   */
  export type EventTypeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EventTypes.
     */
    data: XOR<EventTypeUpdateManyMutationInput, EventTypeUncheckedUpdateManyInput>
    /**
     * Filter which EventTypes to update
     */
    where?: EventTypeWhereInput
  }

  /**
   * EventType upsert
   */
  export type EventTypeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventType
     */
    select?: EventTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventTypeInclude<ExtArgs> | null
    /**
     * The filter to search for the EventType to update in case it exists.
     */
    where: EventTypeWhereUniqueInput
    /**
     * In case the EventType found by the `where` argument doesn't exist, create a new EventType with this data.
     */
    create: XOR<EventTypeCreateInput, EventTypeUncheckedCreateInput>
    /**
     * In case the EventType was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EventTypeUpdateInput, EventTypeUncheckedUpdateInput>
  }

  /**
   * EventType delete
   */
  export type EventTypeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventType
     */
    select?: EventTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventTypeInclude<ExtArgs> | null
    /**
     * Filter which EventType to delete.
     */
    where: EventTypeWhereUniqueInput
  }

  /**
   * EventType deleteMany
   */
  export type EventTypeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EventTypes to delete
     */
    where?: EventTypeWhereInput
  }

  /**
   * EventType.event_codes
   */
  export type EventType$event_codesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventCode
     */
    select?: EventCodeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventCodeInclude<ExtArgs> | null
    where?: EventCodeWhereInput
    orderBy?: EventCodeOrderByWithRelationInput | EventCodeOrderByWithRelationInput[]
    cursor?: EventCodeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventCodeScalarFieldEnum | EventCodeScalarFieldEnum[]
  }

  /**
   * EventType without action
   */
  export type EventTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventType
     */
    select?: EventTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventTypeInclude<ExtArgs> | null
  }


  /**
   * Model EventCode
   */

  export type AggregateEventCode = {
    _count: EventCodeCountAggregateOutputType | null
    _avg: EventCodeAvgAggregateOutputType | null
    _sum: EventCodeSumAggregateOutputType | null
    _min: EventCodeMinAggregateOutputType | null
    _max: EventCodeMaxAggregateOutputType | null
  }

  export type EventCodeAvgAggregateOutputType = {
    code: number | null
  }

  export type EventCodeSumAggregateOutputType = {
    code: number | null
  }

  export type EventCodeMinAggregateOutputType = {
    id: string | null
    organization_id: string | null
    event_type_id: string | null
    contract_type: string | null
    code: number | null
    created_at: Date | null
  }

  export type EventCodeMaxAggregateOutputType = {
    id: string | null
    organization_id: string | null
    event_type_id: string | null
    contract_type: string | null
    code: number | null
    created_at: Date | null
  }

  export type EventCodeCountAggregateOutputType = {
    id: number
    organization_id: number
    event_type_id: number
    contract_type: number
    code: number
    created_at: number
    _all: number
  }


  export type EventCodeAvgAggregateInputType = {
    code?: true
  }

  export type EventCodeSumAggregateInputType = {
    code?: true
  }

  export type EventCodeMinAggregateInputType = {
    id?: true
    organization_id?: true
    event_type_id?: true
    contract_type?: true
    code?: true
    created_at?: true
  }

  export type EventCodeMaxAggregateInputType = {
    id?: true
    organization_id?: true
    event_type_id?: true
    contract_type?: true
    code?: true
    created_at?: true
  }

  export type EventCodeCountAggregateInputType = {
    id?: true
    organization_id?: true
    event_type_id?: true
    contract_type?: true
    code?: true
    created_at?: true
    _all?: true
  }

  export type EventCodeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EventCode to aggregate.
     */
    where?: EventCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventCodes to fetch.
     */
    orderBy?: EventCodeOrderByWithRelationInput | EventCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EventCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventCodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EventCodes
    **/
    _count?: true | EventCodeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EventCodeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EventCodeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventCodeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventCodeMaxAggregateInputType
  }

  export type GetEventCodeAggregateType<T extends EventCodeAggregateArgs> = {
        [P in keyof T & keyof AggregateEventCode]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEventCode[P]>
      : GetScalarType<T[P], AggregateEventCode[P]>
  }




  export type EventCodeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventCodeWhereInput
    orderBy?: EventCodeOrderByWithAggregationInput | EventCodeOrderByWithAggregationInput[]
    by: EventCodeScalarFieldEnum[] | EventCodeScalarFieldEnum
    having?: EventCodeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventCodeCountAggregateInputType | true
    _avg?: EventCodeAvgAggregateInputType
    _sum?: EventCodeSumAggregateInputType
    _min?: EventCodeMinAggregateInputType
    _max?: EventCodeMaxAggregateInputType
  }

  export type EventCodeGroupByOutputType = {
    id: string
    organization_id: string
    event_type_id: string
    contract_type: string
    code: number
    created_at: Date
    _count: EventCodeCountAggregateOutputType | null
    _avg: EventCodeAvgAggregateOutputType | null
    _sum: EventCodeSumAggregateOutputType | null
    _min: EventCodeMinAggregateOutputType | null
    _max: EventCodeMaxAggregateOutputType | null
  }

  type GetEventCodeGroupByPayload<T extends EventCodeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventCodeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventCodeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventCodeGroupByOutputType[P]>
            : GetScalarType<T[P], EventCodeGroupByOutputType[P]>
        }
      >
    >


  export type EventCodeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    organization_id?: boolean
    event_type_id?: boolean
    contract_type?: boolean
    code?: boolean
    created_at?: boolean
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    event_type?: boolean | EventTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["eventCode"]>

  export type EventCodeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    organization_id?: boolean
    event_type_id?: boolean
    contract_type?: boolean
    code?: boolean
    created_at?: boolean
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    event_type?: boolean | EventTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["eventCode"]>

  export type EventCodeSelectScalar = {
    id?: boolean
    organization_id?: boolean
    event_type_id?: boolean
    contract_type?: boolean
    code?: boolean
    created_at?: boolean
  }

  export type EventCodeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    event_type?: boolean | EventTypeDefaultArgs<ExtArgs>
  }
  export type EventCodeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    event_type?: boolean | EventTypeDefaultArgs<ExtArgs>
  }

  export type $EventCodePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EventCode"
    objects: {
      organization: Prisma.$OrganizationPayload<ExtArgs>
      event_type: Prisma.$EventTypePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      organization_id: string
      event_type_id: string
      contract_type: string
      code: number
      created_at: Date
    }, ExtArgs["result"]["eventCode"]>
    composites: {}
  }

  type EventCodeGetPayload<S extends boolean | null | undefined | EventCodeDefaultArgs> = $Result.GetResult<Prisma.$EventCodePayload, S>

  type EventCodeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<EventCodeFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: EventCodeCountAggregateInputType | true
    }

  export interface EventCodeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EventCode'], meta: { name: 'EventCode' } }
    /**
     * Find zero or one EventCode that matches the filter.
     * @param {EventCodeFindUniqueArgs} args - Arguments to find a EventCode
     * @example
     * // Get one EventCode
     * const eventCode = await prisma.eventCode.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EventCodeFindUniqueArgs>(args: SelectSubset<T, EventCodeFindUniqueArgs<ExtArgs>>): Prisma__EventCodeClient<$Result.GetResult<Prisma.$EventCodePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one EventCode that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {EventCodeFindUniqueOrThrowArgs} args - Arguments to find a EventCode
     * @example
     * // Get one EventCode
     * const eventCode = await prisma.eventCode.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EventCodeFindUniqueOrThrowArgs>(args: SelectSubset<T, EventCodeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EventCodeClient<$Result.GetResult<Prisma.$EventCodePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first EventCode that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventCodeFindFirstArgs} args - Arguments to find a EventCode
     * @example
     * // Get one EventCode
     * const eventCode = await prisma.eventCode.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EventCodeFindFirstArgs>(args?: SelectSubset<T, EventCodeFindFirstArgs<ExtArgs>>): Prisma__EventCodeClient<$Result.GetResult<Prisma.$EventCodePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first EventCode that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventCodeFindFirstOrThrowArgs} args - Arguments to find a EventCode
     * @example
     * // Get one EventCode
     * const eventCode = await prisma.eventCode.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EventCodeFindFirstOrThrowArgs>(args?: SelectSubset<T, EventCodeFindFirstOrThrowArgs<ExtArgs>>): Prisma__EventCodeClient<$Result.GetResult<Prisma.$EventCodePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more EventCodes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventCodeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EventCodes
     * const eventCodes = await prisma.eventCode.findMany()
     * 
     * // Get first 10 EventCodes
     * const eventCodes = await prisma.eventCode.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eventCodeWithIdOnly = await prisma.eventCode.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EventCodeFindManyArgs>(args?: SelectSubset<T, EventCodeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventCodePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a EventCode.
     * @param {EventCodeCreateArgs} args - Arguments to create a EventCode.
     * @example
     * // Create one EventCode
     * const EventCode = await prisma.eventCode.create({
     *   data: {
     *     // ... data to create a EventCode
     *   }
     * })
     * 
     */
    create<T extends EventCodeCreateArgs>(args: SelectSubset<T, EventCodeCreateArgs<ExtArgs>>): Prisma__EventCodeClient<$Result.GetResult<Prisma.$EventCodePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many EventCodes.
     * @param {EventCodeCreateManyArgs} args - Arguments to create many EventCodes.
     * @example
     * // Create many EventCodes
     * const eventCode = await prisma.eventCode.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EventCodeCreateManyArgs>(args?: SelectSubset<T, EventCodeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EventCodes and returns the data saved in the database.
     * @param {EventCodeCreateManyAndReturnArgs} args - Arguments to create many EventCodes.
     * @example
     * // Create many EventCodes
     * const eventCode = await prisma.eventCode.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EventCodes and only return the `id`
     * const eventCodeWithIdOnly = await prisma.eventCode.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EventCodeCreateManyAndReturnArgs>(args?: SelectSubset<T, EventCodeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventCodePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a EventCode.
     * @param {EventCodeDeleteArgs} args - Arguments to delete one EventCode.
     * @example
     * // Delete one EventCode
     * const EventCode = await prisma.eventCode.delete({
     *   where: {
     *     // ... filter to delete one EventCode
     *   }
     * })
     * 
     */
    delete<T extends EventCodeDeleteArgs>(args: SelectSubset<T, EventCodeDeleteArgs<ExtArgs>>): Prisma__EventCodeClient<$Result.GetResult<Prisma.$EventCodePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one EventCode.
     * @param {EventCodeUpdateArgs} args - Arguments to update one EventCode.
     * @example
     * // Update one EventCode
     * const eventCode = await prisma.eventCode.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EventCodeUpdateArgs>(args: SelectSubset<T, EventCodeUpdateArgs<ExtArgs>>): Prisma__EventCodeClient<$Result.GetResult<Prisma.$EventCodePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more EventCodes.
     * @param {EventCodeDeleteManyArgs} args - Arguments to filter EventCodes to delete.
     * @example
     * // Delete a few EventCodes
     * const { count } = await prisma.eventCode.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EventCodeDeleteManyArgs>(args?: SelectSubset<T, EventCodeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EventCodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventCodeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EventCodes
     * const eventCode = await prisma.eventCode.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EventCodeUpdateManyArgs>(args: SelectSubset<T, EventCodeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one EventCode.
     * @param {EventCodeUpsertArgs} args - Arguments to update or create a EventCode.
     * @example
     * // Update or create a EventCode
     * const eventCode = await prisma.eventCode.upsert({
     *   create: {
     *     // ... data to create a EventCode
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EventCode we want to update
     *   }
     * })
     */
    upsert<T extends EventCodeUpsertArgs>(args: SelectSubset<T, EventCodeUpsertArgs<ExtArgs>>): Prisma__EventCodeClient<$Result.GetResult<Prisma.$EventCodePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of EventCodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventCodeCountArgs} args - Arguments to filter EventCodes to count.
     * @example
     * // Count the number of EventCodes
     * const count = await prisma.eventCode.count({
     *   where: {
     *     // ... the filter for the EventCodes we want to count
     *   }
     * })
    **/
    count<T extends EventCodeCountArgs>(
      args?: Subset<T, EventCodeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventCodeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EventCode.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventCodeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EventCodeAggregateArgs>(args: Subset<T, EventCodeAggregateArgs>): Prisma.PrismaPromise<GetEventCodeAggregateType<T>>

    /**
     * Group by EventCode.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventCodeGroupByArgs} args - Group by arguments.
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
      T extends EventCodeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EventCodeGroupByArgs['orderBy'] }
        : { orderBy?: EventCodeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EventCodeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventCodeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EventCode model
   */
  readonly fields: EventCodeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EventCode.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EventCodeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    organization<T extends OrganizationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrganizationDefaultArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    event_type<T extends EventTypeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EventTypeDefaultArgs<ExtArgs>>): Prisma__EventTypeClient<$Result.GetResult<Prisma.$EventTypePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the EventCode model
   */ 
  interface EventCodeFieldRefs {
    readonly id: FieldRef<"EventCode", 'String'>
    readonly organization_id: FieldRef<"EventCode", 'String'>
    readonly event_type_id: FieldRef<"EventCode", 'String'>
    readonly contract_type: FieldRef<"EventCode", 'String'>
    readonly code: FieldRef<"EventCode", 'Int'>
    readonly created_at: FieldRef<"EventCode", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * EventCode findUnique
   */
  export type EventCodeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventCode
     */
    select?: EventCodeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventCodeInclude<ExtArgs> | null
    /**
     * Filter, which EventCode to fetch.
     */
    where: EventCodeWhereUniqueInput
  }

  /**
   * EventCode findUniqueOrThrow
   */
  export type EventCodeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventCode
     */
    select?: EventCodeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventCodeInclude<ExtArgs> | null
    /**
     * Filter, which EventCode to fetch.
     */
    where: EventCodeWhereUniqueInput
  }

  /**
   * EventCode findFirst
   */
  export type EventCodeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventCode
     */
    select?: EventCodeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventCodeInclude<ExtArgs> | null
    /**
     * Filter, which EventCode to fetch.
     */
    where?: EventCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventCodes to fetch.
     */
    orderBy?: EventCodeOrderByWithRelationInput | EventCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EventCodes.
     */
    cursor?: EventCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventCodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EventCodes.
     */
    distinct?: EventCodeScalarFieldEnum | EventCodeScalarFieldEnum[]
  }

  /**
   * EventCode findFirstOrThrow
   */
  export type EventCodeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventCode
     */
    select?: EventCodeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventCodeInclude<ExtArgs> | null
    /**
     * Filter, which EventCode to fetch.
     */
    where?: EventCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventCodes to fetch.
     */
    orderBy?: EventCodeOrderByWithRelationInput | EventCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EventCodes.
     */
    cursor?: EventCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventCodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EventCodes.
     */
    distinct?: EventCodeScalarFieldEnum | EventCodeScalarFieldEnum[]
  }

  /**
   * EventCode findMany
   */
  export type EventCodeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventCode
     */
    select?: EventCodeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventCodeInclude<ExtArgs> | null
    /**
     * Filter, which EventCodes to fetch.
     */
    where?: EventCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventCodes to fetch.
     */
    orderBy?: EventCodeOrderByWithRelationInput | EventCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EventCodes.
     */
    cursor?: EventCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventCodes.
     */
    skip?: number
    distinct?: EventCodeScalarFieldEnum | EventCodeScalarFieldEnum[]
  }

  /**
   * EventCode create
   */
  export type EventCodeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventCode
     */
    select?: EventCodeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventCodeInclude<ExtArgs> | null
    /**
     * The data needed to create a EventCode.
     */
    data: XOR<EventCodeCreateInput, EventCodeUncheckedCreateInput>
  }

  /**
   * EventCode createMany
   */
  export type EventCodeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EventCodes.
     */
    data: EventCodeCreateManyInput | EventCodeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EventCode createManyAndReturn
   */
  export type EventCodeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventCode
     */
    select?: EventCodeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many EventCodes.
     */
    data: EventCodeCreateManyInput | EventCodeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventCodeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * EventCode update
   */
  export type EventCodeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventCode
     */
    select?: EventCodeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventCodeInclude<ExtArgs> | null
    /**
     * The data needed to update a EventCode.
     */
    data: XOR<EventCodeUpdateInput, EventCodeUncheckedUpdateInput>
    /**
     * Choose, which EventCode to update.
     */
    where: EventCodeWhereUniqueInput
  }

  /**
   * EventCode updateMany
   */
  export type EventCodeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EventCodes.
     */
    data: XOR<EventCodeUpdateManyMutationInput, EventCodeUncheckedUpdateManyInput>
    /**
     * Filter which EventCodes to update
     */
    where?: EventCodeWhereInput
  }

  /**
   * EventCode upsert
   */
  export type EventCodeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventCode
     */
    select?: EventCodeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventCodeInclude<ExtArgs> | null
    /**
     * The filter to search for the EventCode to update in case it exists.
     */
    where: EventCodeWhereUniqueInput
    /**
     * In case the EventCode found by the `where` argument doesn't exist, create a new EventCode with this data.
     */
    create: XOR<EventCodeCreateInput, EventCodeUncheckedCreateInput>
    /**
     * In case the EventCode was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EventCodeUpdateInput, EventCodeUncheckedUpdateInput>
  }

  /**
   * EventCode delete
   */
  export type EventCodeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventCode
     */
    select?: EventCodeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventCodeInclude<ExtArgs> | null
    /**
     * Filter which EventCode to delete.
     */
    where: EventCodeWhereUniqueInput
  }

  /**
   * EventCode deleteMany
   */
  export type EventCodeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EventCodes to delete
     */
    where?: EventCodeWhereInput
  }

  /**
   * EventCode without action
   */
  export type EventCodeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventCode
     */
    select?: EventCodeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventCodeInclude<ExtArgs> | null
  }


  /**
   * Model SalaryFloor
   */

  export type AggregateSalaryFloor = {
    _count: SalaryFloorCountAggregateOutputType | null
    _avg: SalaryFloorAvgAggregateOutputType | null
    _sum: SalaryFloorSumAggregateOutputType | null
    _min: SalaryFloorMinAggregateOutputType | null
    _max: SalaryFloorMaxAggregateOutputType | null
  }

  export type SalaryFloorAvgAggregateOutputType = {
    base_value: number | null
    hour_value: number | null
    floor_quantity: number | null
  }

  export type SalaryFloorSumAggregateOutputType = {
    base_value: number | null
    hour_value: number | null
    floor_quantity: number | null
  }

  export type SalaryFloorMinAggregateOutputType = {
    id: string | null
    organization_id: string | null
    position: string | null
    base_value: number | null
    hour_value: number | null
    floor_quantity: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type SalaryFloorMaxAggregateOutputType = {
    id: string | null
    organization_id: string | null
    position: string | null
    base_value: number | null
    hour_value: number | null
    floor_quantity: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type SalaryFloorCountAggregateOutputType = {
    id: number
    organization_id: number
    position: number
    base_value: number
    hour_value: number
    floor_quantity: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type SalaryFloorAvgAggregateInputType = {
    base_value?: true
    hour_value?: true
    floor_quantity?: true
  }

  export type SalaryFloorSumAggregateInputType = {
    base_value?: true
    hour_value?: true
    floor_quantity?: true
  }

  export type SalaryFloorMinAggregateInputType = {
    id?: true
    organization_id?: true
    position?: true
    base_value?: true
    hour_value?: true
    floor_quantity?: true
    created_at?: true
    updated_at?: true
  }

  export type SalaryFloorMaxAggregateInputType = {
    id?: true
    organization_id?: true
    position?: true
    base_value?: true
    hour_value?: true
    floor_quantity?: true
    created_at?: true
    updated_at?: true
  }

  export type SalaryFloorCountAggregateInputType = {
    id?: true
    organization_id?: true
    position?: true
    base_value?: true
    hour_value?: true
    floor_quantity?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type SalaryFloorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SalaryFloor to aggregate.
     */
    where?: SalaryFloorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SalaryFloors to fetch.
     */
    orderBy?: SalaryFloorOrderByWithRelationInput | SalaryFloorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SalaryFloorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SalaryFloors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SalaryFloors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SalaryFloors
    **/
    _count?: true | SalaryFloorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SalaryFloorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SalaryFloorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SalaryFloorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SalaryFloorMaxAggregateInputType
  }

  export type GetSalaryFloorAggregateType<T extends SalaryFloorAggregateArgs> = {
        [P in keyof T & keyof AggregateSalaryFloor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSalaryFloor[P]>
      : GetScalarType<T[P], AggregateSalaryFloor[P]>
  }




  export type SalaryFloorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SalaryFloorWhereInput
    orderBy?: SalaryFloorOrderByWithAggregationInput | SalaryFloorOrderByWithAggregationInput[]
    by: SalaryFloorScalarFieldEnum[] | SalaryFloorScalarFieldEnum
    having?: SalaryFloorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SalaryFloorCountAggregateInputType | true
    _avg?: SalaryFloorAvgAggregateInputType
    _sum?: SalaryFloorSumAggregateInputType
    _min?: SalaryFloorMinAggregateInputType
    _max?: SalaryFloorMaxAggregateInputType
  }

  export type SalaryFloorGroupByOutputType = {
    id: string
    organization_id: string
    position: string
    base_value: number
    hour_value: number
    floor_quantity: number
    created_at: Date
    updated_at: Date
    _count: SalaryFloorCountAggregateOutputType | null
    _avg: SalaryFloorAvgAggregateOutputType | null
    _sum: SalaryFloorSumAggregateOutputType | null
    _min: SalaryFloorMinAggregateOutputType | null
    _max: SalaryFloorMaxAggregateOutputType | null
  }

  type GetSalaryFloorGroupByPayload<T extends SalaryFloorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SalaryFloorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SalaryFloorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SalaryFloorGroupByOutputType[P]>
            : GetScalarType<T[P], SalaryFloorGroupByOutputType[P]>
        }
      >
    >


  export type SalaryFloorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    organization_id?: boolean
    position?: boolean
    base_value?: boolean
    hour_value?: boolean
    floor_quantity?: boolean
    created_at?: boolean
    updated_at?: boolean
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["salaryFloor"]>

  export type SalaryFloorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    organization_id?: boolean
    position?: boolean
    base_value?: boolean
    hour_value?: boolean
    floor_quantity?: boolean
    created_at?: boolean
    updated_at?: boolean
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["salaryFloor"]>

  export type SalaryFloorSelectScalar = {
    id?: boolean
    organization_id?: boolean
    position?: boolean
    base_value?: boolean
    hour_value?: boolean
    floor_quantity?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type SalaryFloorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }
  export type SalaryFloorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }

  export type $SalaryFloorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SalaryFloor"
    objects: {
      organization: Prisma.$OrganizationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      organization_id: string
      position: string
      base_value: number
      hour_value: number
      floor_quantity: number
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["salaryFloor"]>
    composites: {}
  }

  type SalaryFloorGetPayload<S extends boolean | null | undefined | SalaryFloorDefaultArgs> = $Result.GetResult<Prisma.$SalaryFloorPayload, S>

  type SalaryFloorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SalaryFloorFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SalaryFloorCountAggregateInputType | true
    }

  export interface SalaryFloorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SalaryFloor'], meta: { name: 'SalaryFloor' } }
    /**
     * Find zero or one SalaryFloor that matches the filter.
     * @param {SalaryFloorFindUniqueArgs} args - Arguments to find a SalaryFloor
     * @example
     * // Get one SalaryFloor
     * const salaryFloor = await prisma.salaryFloor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SalaryFloorFindUniqueArgs>(args: SelectSubset<T, SalaryFloorFindUniqueArgs<ExtArgs>>): Prisma__SalaryFloorClient<$Result.GetResult<Prisma.$SalaryFloorPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one SalaryFloor that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SalaryFloorFindUniqueOrThrowArgs} args - Arguments to find a SalaryFloor
     * @example
     * // Get one SalaryFloor
     * const salaryFloor = await prisma.salaryFloor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SalaryFloorFindUniqueOrThrowArgs>(args: SelectSubset<T, SalaryFloorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SalaryFloorClient<$Result.GetResult<Prisma.$SalaryFloorPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first SalaryFloor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalaryFloorFindFirstArgs} args - Arguments to find a SalaryFloor
     * @example
     * // Get one SalaryFloor
     * const salaryFloor = await prisma.salaryFloor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SalaryFloorFindFirstArgs>(args?: SelectSubset<T, SalaryFloorFindFirstArgs<ExtArgs>>): Prisma__SalaryFloorClient<$Result.GetResult<Prisma.$SalaryFloorPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first SalaryFloor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalaryFloorFindFirstOrThrowArgs} args - Arguments to find a SalaryFloor
     * @example
     * // Get one SalaryFloor
     * const salaryFloor = await prisma.salaryFloor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SalaryFloorFindFirstOrThrowArgs>(args?: SelectSubset<T, SalaryFloorFindFirstOrThrowArgs<ExtArgs>>): Prisma__SalaryFloorClient<$Result.GetResult<Prisma.$SalaryFloorPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more SalaryFloors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalaryFloorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SalaryFloors
     * const salaryFloors = await prisma.salaryFloor.findMany()
     * 
     * // Get first 10 SalaryFloors
     * const salaryFloors = await prisma.salaryFloor.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const salaryFloorWithIdOnly = await prisma.salaryFloor.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SalaryFloorFindManyArgs>(args?: SelectSubset<T, SalaryFloorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalaryFloorPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a SalaryFloor.
     * @param {SalaryFloorCreateArgs} args - Arguments to create a SalaryFloor.
     * @example
     * // Create one SalaryFloor
     * const SalaryFloor = await prisma.salaryFloor.create({
     *   data: {
     *     // ... data to create a SalaryFloor
     *   }
     * })
     * 
     */
    create<T extends SalaryFloorCreateArgs>(args: SelectSubset<T, SalaryFloorCreateArgs<ExtArgs>>): Prisma__SalaryFloorClient<$Result.GetResult<Prisma.$SalaryFloorPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many SalaryFloors.
     * @param {SalaryFloorCreateManyArgs} args - Arguments to create many SalaryFloors.
     * @example
     * // Create many SalaryFloors
     * const salaryFloor = await prisma.salaryFloor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SalaryFloorCreateManyArgs>(args?: SelectSubset<T, SalaryFloorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SalaryFloors and returns the data saved in the database.
     * @param {SalaryFloorCreateManyAndReturnArgs} args - Arguments to create many SalaryFloors.
     * @example
     * // Create many SalaryFloors
     * const salaryFloor = await prisma.salaryFloor.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SalaryFloors and only return the `id`
     * const salaryFloorWithIdOnly = await prisma.salaryFloor.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SalaryFloorCreateManyAndReturnArgs>(args?: SelectSubset<T, SalaryFloorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalaryFloorPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a SalaryFloor.
     * @param {SalaryFloorDeleteArgs} args - Arguments to delete one SalaryFloor.
     * @example
     * // Delete one SalaryFloor
     * const SalaryFloor = await prisma.salaryFloor.delete({
     *   where: {
     *     // ... filter to delete one SalaryFloor
     *   }
     * })
     * 
     */
    delete<T extends SalaryFloorDeleteArgs>(args: SelectSubset<T, SalaryFloorDeleteArgs<ExtArgs>>): Prisma__SalaryFloorClient<$Result.GetResult<Prisma.$SalaryFloorPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one SalaryFloor.
     * @param {SalaryFloorUpdateArgs} args - Arguments to update one SalaryFloor.
     * @example
     * // Update one SalaryFloor
     * const salaryFloor = await prisma.salaryFloor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SalaryFloorUpdateArgs>(args: SelectSubset<T, SalaryFloorUpdateArgs<ExtArgs>>): Prisma__SalaryFloorClient<$Result.GetResult<Prisma.$SalaryFloorPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more SalaryFloors.
     * @param {SalaryFloorDeleteManyArgs} args - Arguments to filter SalaryFloors to delete.
     * @example
     * // Delete a few SalaryFloors
     * const { count } = await prisma.salaryFloor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SalaryFloorDeleteManyArgs>(args?: SelectSubset<T, SalaryFloorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SalaryFloors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalaryFloorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SalaryFloors
     * const salaryFloor = await prisma.salaryFloor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SalaryFloorUpdateManyArgs>(args: SelectSubset<T, SalaryFloorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SalaryFloor.
     * @param {SalaryFloorUpsertArgs} args - Arguments to update or create a SalaryFloor.
     * @example
     * // Update or create a SalaryFloor
     * const salaryFloor = await prisma.salaryFloor.upsert({
     *   create: {
     *     // ... data to create a SalaryFloor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SalaryFloor we want to update
     *   }
     * })
     */
    upsert<T extends SalaryFloorUpsertArgs>(args: SelectSubset<T, SalaryFloorUpsertArgs<ExtArgs>>): Prisma__SalaryFloorClient<$Result.GetResult<Prisma.$SalaryFloorPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of SalaryFloors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalaryFloorCountArgs} args - Arguments to filter SalaryFloors to count.
     * @example
     * // Count the number of SalaryFloors
     * const count = await prisma.salaryFloor.count({
     *   where: {
     *     // ... the filter for the SalaryFloors we want to count
     *   }
     * })
    **/
    count<T extends SalaryFloorCountArgs>(
      args?: Subset<T, SalaryFloorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SalaryFloorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SalaryFloor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalaryFloorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SalaryFloorAggregateArgs>(args: Subset<T, SalaryFloorAggregateArgs>): Prisma.PrismaPromise<GetSalaryFloorAggregateType<T>>

    /**
     * Group by SalaryFloor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalaryFloorGroupByArgs} args - Group by arguments.
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
      T extends SalaryFloorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SalaryFloorGroupByArgs['orderBy'] }
        : { orderBy?: SalaryFloorGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SalaryFloorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSalaryFloorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SalaryFloor model
   */
  readonly fields: SalaryFloorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SalaryFloor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SalaryFloorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    organization<T extends OrganizationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrganizationDefaultArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the SalaryFloor model
   */ 
  interface SalaryFloorFieldRefs {
    readonly id: FieldRef<"SalaryFloor", 'String'>
    readonly organization_id: FieldRef<"SalaryFloor", 'String'>
    readonly position: FieldRef<"SalaryFloor", 'String'>
    readonly base_value: FieldRef<"SalaryFloor", 'Float'>
    readonly hour_value: FieldRef<"SalaryFloor", 'Float'>
    readonly floor_quantity: FieldRef<"SalaryFloor", 'Float'>
    readonly created_at: FieldRef<"SalaryFloor", 'DateTime'>
    readonly updated_at: FieldRef<"SalaryFloor", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SalaryFloor findUnique
   */
  export type SalaryFloorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalaryFloor
     */
    select?: SalaryFloorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalaryFloorInclude<ExtArgs> | null
    /**
     * Filter, which SalaryFloor to fetch.
     */
    where: SalaryFloorWhereUniqueInput
  }

  /**
   * SalaryFloor findUniqueOrThrow
   */
  export type SalaryFloorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalaryFloor
     */
    select?: SalaryFloorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalaryFloorInclude<ExtArgs> | null
    /**
     * Filter, which SalaryFloor to fetch.
     */
    where: SalaryFloorWhereUniqueInput
  }

  /**
   * SalaryFloor findFirst
   */
  export type SalaryFloorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalaryFloor
     */
    select?: SalaryFloorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalaryFloorInclude<ExtArgs> | null
    /**
     * Filter, which SalaryFloor to fetch.
     */
    where?: SalaryFloorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SalaryFloors to fetch.
     */
    orderBy?: SalaryFloorOrderByWithRelationInput | SalaryFloorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SalaryFloors.
     */
    cursor?: SalaryFloorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SalaryFloors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SalaryFloors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SalaryFloors.
     */
    distinct?: SalaryFloorScalarFieldEnum | SalaryFloorScalarFieldEnum[]
  }

  /**
   * SalaryFloor findFirstOrThrow
   */
  export type SalaryFloorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalaryFloor
     */
    select?: SalaryFloorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalaryFloorInclude<ExtArgs> | null
    /**
     * Filter, which SalaryFloor to fetch.
     */
    where?: SalaryFloorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SalaryFloors to fetch.
     */
    orderBy?: SalaryFloorOrderByWithRelationInput | SalaryFloorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SalaryFloors.
     */
    cursor?: SalaryFloorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SalaryFloors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SalaryFloors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SalaryFloors.
     */
    distinct?: SalaryFloorScalarFieldEnum | SalaryFloorScalarFieldEnum[]
  }

  /**
   * SalaryFloor findMany
   */
  export type SalaryFloorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalaryFloor
     */
    select?: SalaryFloorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalaryFloorInclude<ExtArgs> | null
    /**
     * Filter, which SalaryFloors to fetch.
     */
    where?: SalaryFloorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SalaryFloors to fetch.
     */
    orderBy?: SalaryFloorOrderByWithRelationInput | SalaryFloorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SalaryFloors.
     */
    cursor?: SalaryFloorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SalaryFloors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SalaryFloors.
     */
    skip?: number
    distinct?: SalaryFloorScalarFieldEnum | SalaryFloorScalarFieldEnum[]
  }

  /**
   * SalaryFloor create
   */
  export type SalaryFloorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalaryFloor
     */
    select?: SalaryFloorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalaryFloorInclude<ExtArgs> | null
    /**
     * The data needed to create a SalaryFloor.
     */
    data: XOR<SalaryFloorCreateInput, SalaryFloorUncheckedCreateInput>
  }

  /**
   * SalaryFloor createMany
   */
  export type SalaryFloorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SalaryFloors.
     */
    data: SalaryFloorCreateManyInput | SalaryFloorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SalaryFloor createManyAndReturn
   */
  export type SalaryFloorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalaryFloor
     */
    select?: SalaryFloorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many SalaryFloors.
     */
    data: SalaryFloorCreateManyInput | SalaryFloorCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalaryFloorIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SalaryFloor update
   */
  export type SalaryFloorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalaryFloor
     */
    select?: SalaryFloorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalaryFloorInclude<ExtArgs> | null
    /**
     * The data needed to update a SalaryFloor.
     */
    data: XOR<SalaryFloorUpdateInput, SalaryFloorUncheckedUpdateInput>
    /**
     * Choose, which SalaryFloor to update.
     */
    where: SalaryFloorWhereUniqueInput
  }

  /**
   * SalaryFloor updateMany
   */
  export type SalaryFloorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SalaryFloors.
     */
    data: XOR<SalaryFloorUpdateManyMutationInput, SalaryFloorUncheckedUpdateManyInput>
    /**
     * Filter which SalaryFloors to update
     */
    where?: SalaryFloorWhereInput
  }

  /**
   * SalaryFloor upsert
   */
  export type SalaryFloorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalaryFloor
     */
    select?: SalaryFloorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalaryFloorInclude<ExtArgs> | null
    /**
     * The filter to search for the SalaryFloor to update in case it exists.
     */
    where: SalaryFloorWhereUniqueInput
    /**
     * In case the SalaryFloor found by the `where` argument doesn't exist, create a new SalaryFloor with this data.
     */
    create: XOR<SalaryFloorCreateInput, SalaryFloorUncheckedCreateInput>
    /**
     * In case the SalaryFloor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SalaryFloorUpdateInput, SalaryFloorUncheckedUpdateInput>
  }

  /**
   * SalaryFloor delete
   */
  export type SalaryFloorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalaryFloor
     */
    select?: SalaryFloorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalaryFloorInclude<ExtArgs> | null
    /**
     * Filter which SalaryFloor to delete.
     */
    where: SalaryFloorWhereUniqueInput
  }

  /**
   * SalaryFloor deleteMany
   */
  export type SalaryFloorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SalaryFloors to delete
     */
    where?: SalaryFloorWhereInput
  }

  /**
   * SalaryFloor without action
   */
  export type SalaryFloorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalaryFloor
     */
    select?: SalaryFloorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalaryFloorInclude<ExtArgs> | null
  }


  /**
   * Model Log
   */

  export type AggregateLog = {
    _count: LogCountAggregateOutputType | null
    _min: LogMinAggregateOutputType | null
    _max: LogMaxAggregateOutputType | null
  }

  export type LogMinAggregateOutputType = {
    id: string | null
    organization_id: string | null
    user_id: string | null
    action: string | null
    created_at: Date | null
  }

  export type LogMaxAggregateOutputType = {
    id: string | null
    organization_id: string | null
    user_id: string | null
    action: string | null
    created_at: Date | null
  }

  export type LogCountAggregateOutputType = {
    id: number
    organization_id: number
    user_id: number
    action: number
    details: number
    created_at: number
    _all: number
  }


  export type LogMinAggregateInputType = {
    id?: true
    organization_id?: true
    user_id?: true
    action?: true
    created_at?: true
  }

  export type LogMaxAggregateInputType = {
    id?: true
    organization_id?: true
    user_id?: true
    action?: true
    created_at?: true
  }

  export type LogCountAggregateInputType = {
    id?: true
    organization_id?: true
    user_id?: true
    action?: true
    details?: true
    created_at?: true
    _all?: true
  }

  export type LogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Log to aggregate.
     */
    where?: LogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Logs to fetch.
     */
    orderBy?: LogOrderByWithRelationInput | LogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Logs
    **/
    _count?: true | LogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LogMaxAggregateInputType
  }

  export type GetLogAggregateType<T extends LogAggregateArgs> = {
        [P in keyof T & keyof AggregateLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLog[P]>
      : GetScalarType<T[P], AggregateLog[P]>
  }




  export type LogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LogWhereInput
    orderBy?: LogOrderByWithAggregationInput | LogOrderByWithAggregationInput[]
    by: LogScalarFieldEnum[] | LogScalarFieldEnum
    having?: LogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LogCountAggregateInputType | true
    _min?: LogMinAggregateInputType
    _max?: LogMaxAggregateInputType
  }

  export type LogGroupByOutputType = {
    id: string
    organization_id: string
    user_id: string
    action: string
    details: JsonValue | null
    created_at: Date
    _count: LogCountAggregateOutputType | null
    _min: LogMinAggregateOutputType | null
    _max: LogMaxAggregateOutputType | null
  }

  type GetLogGroupByPayload<T extends LogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LogGroupByOutputType[P]>
            : GetScalarType<T[P], LogGroupByOutputType[P]>
        }
      >
    >


  export type LogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    organization_id?: boolean
    user_id?: boolean
    action?: boolean
    details?: boolean
    created_at?: boolean
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["log"]>

  export type LogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    organization_id?: boolean
    user_id?: boolean
    action?: boolean
    details?: boolean
    created_at?: boolean
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["log"]>

  export type LogSelectScalar = {
    id?: boolean
    organization_id?: boolean
    user_id?: boolean
    action?: boolean
    details?: boolean
    created_at?: boolean
  }

  export type LogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type LogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $LogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Log"
    objects: {
      organization: Prisma.$OrganizationPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      organization_id: string
      user_id: string
      action: string
      details: Prisma.JsonValue | null
      created_at: Date
    }, ExtArgs["result"]["log"]>
    composites: {}
  }

  type LogGetPayload<S extends boolean | null | undefined | LogDefaultArgs> = $Result.GetResult<Prisma.$LogPayload, S>

  type LogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<LogFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: LogCountAggregateInputType | true
    }

  export interface LogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Log'], meta: { name: 'Log' } }
    /**
     * Find zero or one Log that matches the filter.
     * @param {LogFindUniqueArgs} args - Arguments to find a Log
     * @example
     * // Get one Log
     * const log = await prisma.log.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LogFindUniqueArgs>(args: SelectSubset<T, LogFindUniqueArgs<ExtArgs>>): Prisma__LogClient<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Log that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {LogFindUniqueOrThrowArgs} args - Arguments to find a Log
     * @example
     * // Get one Log
     * const log = await prisma.log.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LogFindUniqueOrThrowArgs>(args: SelectSubset<T, LogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LogClient<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Log that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogFindFirstArgs} args - Arguments to find a Log
     * @example
     * // Get one Log
     * const log = await prisma.log.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LogFindFirstArgs>(args?: SelectSubset<T, LogFindFirstArgs<ExtArgs>>): Prisma__LogClient<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Log that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogFindFirstOrThrowArgs} args - Arguments to find a Log
     * @example
     * // Get one Log
     * const log = await prisma.log.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LogFindFirstOrThrowArgs>(args?: SelectSubset<T, LogFindFirstOrThrowArgs<ExtArgs>>): Prisma__LogClient<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Logs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Logs
     * const logs = await prisma.log.findMany()
     * 
     * // Get first 10 Logs
     * const logs = await prisma.log.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const logWithIdOnly = await prisma.log.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LogFindManyArgs>(args?: SelectSubset<T, LogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Log.
     * @param {LogCreateArgs} args - Arguments to create a Log.
     * @example
     * // Create one Log
     * const Log = await prisma.log.create({
     *   data: {
     *     // ... data to create a Log
     *   }
     * })
     * 
     */
    create<T extends LogCreateArgs>(args: SelectSubset<T, LogCreateArgs<ExtArgs>>): Prisma__LogClient<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Logs.
     * @param {LogCreateManyArgs} args - Arguments to create many Logs.
     * @example
     * // Create many Logs
     * const log = await prisma.log.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LogCreateManyArgs>(args?: SelectSubset<T, LogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Logs and returns the data saved in the database.
     * @param {LogCreateManyAndReturnArgs} args - Arguments to create many Logs.
     * @example
     * // Create many Logs
     * const log = await prisma.log.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Logs and only return the `id`
     * const logWithIdOnly = await prisma.log.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LogCreateManyAndReturnArgs>(args?: SelectSubset<T, LogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Log.
     * @param {LogDeleteArgs} args - Arguments to delete one Log.
     * @example
     * // Delete one Log
     * const Log = await prisma.log.delete({
     *   where: {
     *     // ... filter to delete one Log
     *   }
     * })
     * 
     */
    delete<T extends LogDeleteArgs>(args: SelectSubset<T, LogDeleteArgs<ExtArgs>>): Prisma__LogClient<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Log.
     * @param {LogUpdateArgs} args - Arguments to update one Log.
     * @example
     * // Update one Log
     * const log = await prisma.log.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LogUpdateArgs>(args: SelectSubset<T, LogUpdateArgs<ExtArgs>>): Prisma__LogClient<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Logs.
     * @param {LogDeleteManyArgs} args - Arguments to filter Logs to delete.
     * @example
     * // Delete a few Logs
     * const { count } = await prisma.log.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LogDeleteManyArgs>(args?: SelectSubset<T, LogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Logs
     * const log = await prisma.log.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LogUpdateManyArgs>(args: SelectSubset<T, LogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Log.
     * @param {LogUpsertArgs} args - Arguments to update or create a Log.
     * @example
     * // Update or create a Log
     * const log = await prisma.log.upsert({
     *   create: {
     *     // ... data to create a Log
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Log we want to update
     *   }
     * })
     */
    upsert<T extends LogUpsertArgs>(args: SelectSubset<T, LogUpsertArgs<ExtArgs>>): Prisma__LogClient<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogCountArgs} args - Arguments to filter Logs to count.
     * @example
     * // Count the number of Logs
     * const count = await prisma.log.count({
     *   where: {
     *     // ... the filter for the Logs we want to count
     *   }
     * })
    **/
    count<T extends LogCountArgs>(
      args?: Subset<T, LogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Log.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LogAggregateArgs>(args: Subset<T, LogAggregateArgs>): Prisma.PrismaPromise<GetLogAggregateType<T>>

    /**
     * Group by Log.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogGroupByArgs} args - Group by arguments.
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
      T extends LogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LogGroupByArgs['orderBy'] }
        : { orderBy?: LogGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Log model
   */
  readonly fields: LogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Log.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    organization<T extends OrganizationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrganizationDefaultArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the Log model
   */ 
  interface LogFieldRefs {
    readonly id: FieldRef<"Log", 'String'>
    readonly organization_id: FieldRef<"Log", 'String'>
    readonly user_id: FieldRef<"Log", 'String'>
    readonly action: FieldRef<"Log", 'String'>
    readonly details: FieldRef<"Log", 'Json'>
    readonly created_at: FieldRef<"Log", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Log findUnique
   */
  export type LogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogInclude<ExtArgs> | null
    /**
     * Filter, which Log to fetch.
     */
    where: LogWhereUniqueInput
  }

  /**
   * Log findUniqueOrThrow
   */
  export type LogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogInclude<ExtArgs> | null
    /**
     * Filter, which Log to fetch.
     */
    where: LogWhereUniqueInput
  }

  /**
   * Log findFirst
   */
  export type LogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogInclude<ExtArgs> | null
    /**
     * Filter, which Log to fetch.
     */
    where?: LogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Logs to fetch.
     */
    orderBy?: LogOrderByWithRelationInput | LogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Logs.
     */
    cursor?: LogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Logs.
     */
    distinct?: LogScalarFieldEnum | LogScalarFieldEnum[]
  }

  /**
   * Log findFirstOrThrow
   */
  export type LogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogInclude<ExtArgs> | null
    /**
     * Filter, which Log to fetch.
     */
    where?: LogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Logs to fetch.
     */
    orderBy?: LogOrderByWithRelationInput | LogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Logs.
     */
    cursor?: LogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Logs.
     */
    distinct?: LogScalarFieldEnum | LogScalarFieldEnum[]
  }

  /**
   * Log findMany
   */
  export type LogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogInclude<ExtArgs> | null
    /**
     * Filter, which Logs to fetch.
     */
    where?: LogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Logs to fetch.
     */
    orderBy?: LogOrderByWithRelationInput | LogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Logs.
     */
    cursor?: LogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Logs.
     */
    skip?: number
    distinct?: LogScalarFieldEnum | LogScalarFieldEnum[]
  }

  /**
   * Log create
   */
  export type LogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogInclude<ExtArgs> | null
    /**
     * The data needed to create a Log.
     */
    data: XOR<LogCreateInput, LogUncheckedCreateInput>
  }

  /**
   * Log createMany
   */
  export type LogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Logs.
     */
    data: LogCreateManyInput | LogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Log createManyAndReturn
   */
  export type LogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Logs.
     */
    data: LogCreateManyInput | LogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Log update
   */
  export type LogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogInclude<ExtArgs> | null
    /**
     * The data needed to update a Log.
     */
    data: XOR<LogUpdateInput, LogUncheckedUpdateInput>
    /**
     * Choose, which Log to update.
     */
    where: LogWhereUniqueInput
  }

  /**
   * Log updateMany
   */
  export type LogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Logs.
     */
    data: XOR<LogUpdateManyMutationInput, LogUncheckedUpdateManyInput>
    /**
     * Filter which Logs to update
     */
    where?: LogWhereInput
  }

  /**
   * Log upsert
   */
  export type LogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogInclude<ExtArgs> | null
    /**
     * The filter to search for the Log to update in case it exists.
     */
    where: LogWhereUniqueInput
    /**
     * In case the Log found by the `where` argument doesn't exist, create a new Log with this data.
     */
    create: XOR<LogCreateInput, LogUncheckedCreateInput>
    /**
     * In case the Log was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LogUpdateInput, LogUncheckedUpdateInput>
  }

  /**
   * Log delete
   */
  export type LogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogInclude<ExtArgs> | null
    /**
     * Filter which Log to delete.
     */
    where: LogWhereUniqueInput
  }

  /**
   * Log deleteMany
   */
  export type LogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Logs to delete
     */
    where?: LogWhereInput
  }

  /**
   * Log without action
   */
  export type LogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogInclude<ExtArgs> | null
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


  export const OrganizationScalarFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug',
    logo_url: 'logo_url',
    created_at: 'created_at'
  };

  export type OrganizationScalarFieldEnum = (typeof OrganizationScalarFieldEnum)[keyof typeof OrganizationScalarFieldEnum]


  export const UnitScalarFieldEnum: {
    id: 'id',
    name: 'name',
    location: 'location',
    organization_id: 'organization_id',
    is_active: 'is_active',
    created_at: 'created_at'
  };

  export type UnitScalarFieldEnum = (typeof UnitScalarFieldEnum)[keyof typeof UnitScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    cpf: 'cpf',
    role: 'role',
    organization_id: 'organization_id',
    unit_id: 'unit_id',
    is_active: 'is_active',
    created_at: 'created_at'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const EmployeeScalarFieldEnum: {
    id: 'id',
    registration: 'registration',
    name: 'name',
    position: 'position',
    cpf: 'cpf',
    rg: 'rg',
    rg_state: 'rg_state',
    contract_type: 'contract_type',
    base_salary: 'base_salary',
    address: 'address',
    organization_id: 'organization_id',
    unit_id: 'unit_id',
    created_at: 'created_at'
  };

  export type EmployeeScalarFieldEnum = (typeof EmployeeScalarFieldEnum)[keyof typeof EmployeeScalarFieldEnum]


  export const FrequencySheetScalarFieldEnum: {
    id: 'id',
    organization_id: 'organization_id',
    unit_id: 'unit_id',
    month: 'month',
    year: 'year',
    status: 'status',
    submitted_by: 'submitted_by',
    submitted_at: 'submitted_at',
    created_at: 'created_at'
  };

  export type FrequencySheetScalarFieldEnum = (typeof FrequencySheetScalarFieldEnum)[keyof typeof FrequencySheetScalarFieldEnum]


  export const FrequencyEntryScalarFieldEnum: {
    id: 'id',
    sheet_id: 'sheet_id',
    employee_id: 'employee_id',
    absence_days: 'absence_days',
    additional_night_hours: 'additional_night_hours',
    overtime_50_hours: 'overtime_50_hours',
    overtime_100_hours: 'overtime_100_hours',
    on_call_hours: 'on_call_hours',
    vacation_days: 'vacation_days',
    salary_floor_amount: 'salary_floor_amount',
    justification: 'justification',
    created_at: 'created_at'
  };

  export type FrequencyEntryScalarFieldEnum = (typeof FrequencyEntryScalarFieldEnum)[keyof typeof FrequencyEntryScalarFieldEnum]


  export const EventTypeScalarFieldEnum: {
    id: 'id',
    name: 'name',
    label: 'label',
    description: 'description',
    created_at: 'created_at'
  };

  export type EventTypeScalarFieldEnum = (typeof EventTypeScalarFieldEnum)[keyof typeof EventTypeScalarFieldEnum]


  export const EventCodeScalarFieldEnum: {
    id: 'id',
    organization_id: 'organization_id',
    event_type_id: 'event_type_id',
    contract_type: 'contract_type',
    code: 'code',
    created_at: 'created_at'
  };

  export type EventCodeScalarFieldEnum = (typeof EventCodeScalarFieldEnum)[keyof typeof EventCodeScalarFieldEnum]


  export const SalaryFloorScalarFieldEnum: {
    id: 'id',
    organization_id: 'organization_id',
    position: 'position',
    base_value: 'base_value',
    hour_value: 'hour_value',
    floor_quantity: 'floor_quantity',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type SalaryFloorScalarFieldEnum = (typeof SalaryFloorScalarFieldEnum)[keyof typeof SalaryFloorScalarFieldEnum]


  export const LogScalarFieldEnum: {
    id: 'id',
    organization_id: 'organization_id',
    user_id: 'user_id',
    action: 'action',
    details: 'details',
    created_at: 'created_at'
  };

  export type LogScalarFieldEnum = (typeof LogScalarFieldEnum)[keyof typeof LogScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


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


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


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
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'UserRole[]'
   */
  export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'SheetStatus'
   */
  export type EnumSheetStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SheetStatus'>
    


  /**
   * Reference to a field of type 'SheetStatus[]'
   */
  export type ListEnumSheetStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SheetStatus[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    
  /**
   * Deep Input Types
   */


  export type OrganizationWhereInput = {
    AND?: OrganizationWhereInput | OrganizationWhereInput[]
    OR?: OrganizationWhereInput[]
    NOT?: OrganizationWhereInput | OrganizationWhereInput[]
    id?: StringFilter<"Organization"> | string
    name?: StringFilter<"Organization"> | string
    slug?: StringFilter<"Organization"> | string
    logo_url?: StringNullableFilter<"Organization"> | string | null
    created_at?: DateTimeFilter<"Organization"> | Date | string
    units?: UnitListRelationFilter
    users?: UserListRelationFilter
    employees?: EmployeeListRelationFilter
    frequency_sheets?: FrequencySheetListRelationFilter
    event_codes?: EventCodeListRelationFilter
    salary_floors?: SalaryFloorListRelationFilter
    logs?: LogListRelationFilter
  }

  export type OrganizationOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    logo_url?: SortOrderInput | SortOrder
    created_at?: SortOrder
    units?: UnitOrderByRelationAggregateInput
    users?: UserOrderByRelationAggregateInput
    employees?: EmployeeOrderByRelationAggregateInput
    frequency_sheets?: FrequencySheetOrderByRelationAggregateInput
    event_codes?: EventCodeOrderByRelationAggregateInput
    salary_floors?: SalaryFloorOrderByRelationAggregateInput
    logs?: LogOrderByRelationAggregateInput
  }

  export type OrganizationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: OrganizationWhereInput | OrganizationWhereInput[]
    OR?: OrganizationWhereInput[]
    NOT?: OrganizationWhereInput | OrganizationWhereInput[]
    name?: StringFilter<"Organization"> | string
    logo_url?: StringNullableFilter<"Organization"> | string | null
    created_at?: DateTimeFilter<"Organization"> | Date | string
    units?: UnitListRelationFilter
    users?: UserListRelationFilter
    employees?: EmployeeListRelationFilter
    frequency_sheets?: FrequencySheetListRelationFilter
    event_codes?: EventCodeListRelationFilter
    salary_floors?: SalaryFloorListRelationFilter
    logs?: LogListRelationFilter
  }, "id" | "slug">

  export type OrganizationOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    logo_url?: SortOrderInput | SortOrder
    created_at?: SortOrder
    _count?: OrganizationCountOrderByAggregateInput
    _max?: OrganizationMaxOrderByAggregateInput
    _min?: OrganizationMinOrderByAggregateInput
  }

  export type OrganizationScalarWhereWithAggregatesInput = {
    AND?: OrganizationScalarWhereWithAggregatesInput | OrganizationScalarWhereWithAggregatesInput[]
    OR?: OrganizationScalarWhereWithAggregatesInput[]
    NOT?: OrganizationScalarWhereWithAggregatesInput | OrganizationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Organization"> | string
    name?: StringWithAggregatesFilter<"Organization"> | string
    slug?: StringWithAggregatesFilter<"Organization"> | string
    logo_url?: StringNullableWithAggregatesFilter<"Organization"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"Organization"> | Date | string
  }

  export type UnitWhereInput = {
    AND?: UnitWhereInput | UnitWhereInput[]
    OR?: UnitWhereInput[]
    NOT?: UnitWhereInput | UnitWhereInput[]
    id?: StringFilter<"Unit"> | string
    name?: StringFilter<"Unit"> | string
    location?: StringFilter<"Unit"> | string
    organization_id?: StringFilter<"Unit"> | string
    is_active?: BoolFilter<"Unit"> | boolean
    created_at?: DateTimeFilter<"Unit"> | Date | string
    organization?: XOR<OrganizationRelationFilter, OrganizationWhereInput>
    employees?: EmployeeListRelationFilter
    users?: UserListRelationFilter
    frequency_sheets?: FrequencySheetListRelationFilter
  }

  export type UnitOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    location?: SortOrder
    organization_id?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    organization?: OrganizationOrderByWithRelationInput
    employees?: EmployeeOrderByRelationAggregateInput
    users?: UserOrderByRelationAggregateInput
    frequency_sheets?: FrequencySheetOrderByRelationAggregateInput
  }

  export type UnitWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UnitWhereInput | UnitWhereInput[]
    OR?: UnitWhereInput[]
    NOT?: UnitWhereInput | UnitWhereInput[]
    name?: StringFilter<"Unit"> | string
    location?: StringFilter<"Unit"> | string
    organization_id?: StringFilter<"Unit"> | string
    is_active?: BoolFilter<"Unit"> | boolean
    created_at?: DateTimeFilter<"Unit"> | Date | string
    organization?: XOR<OrganizationRelationFilter, OrganizationWhereInput>
    employees?: EmployeeListRelationFilter
    users?: UserListRelationFilter
    frequency_sheets?: FrequencySheetListRelationFilter
  }, "id">

  export type UnitOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    location?: SortOrder
    organization_id?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    _count?: UnitCountOrderByAggregateInput
    _max?: UnitMaxOrderByAggregateInput
    _min?: UnitMinOrderByAggregateInput
  }

  export type UnitScalarWhereWithAggregatesInput = {
    AND?: UnitScalarWhereWithAggregatesInput | UnitScalarWhereWithAggregatesInput[]
    OR?: UnitScalarWhereWithAggregatesInput[]
    NOT?: UnitScalarWhereWithAggregatesInput | UnitScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Unit"> | string
    name?: StringWithAggregatesFilter<"Unit"> | string
    location?: StringWithAggregatesFilter<"Unit"> | string
    organization_id?: StringWithAggregatesFilter<"Unit"> | string
    is_active?: BoolWithAggregatesFilter<"Unit"> | boolean
    created_at?: DateTimeWithAggregatesFilter<"Unit"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    cpf?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    organization_id?: StringFilter<"User"> | string
    unit_id?: StringNullableFilter<"User"> | string | null
    is_active?: BoolFilter<"User"> | boolean
    created_at?: DateTimeFilter<"User"> | Date | string
    organization?: XOR<OrganizationRelationFilter, OrganizationWhereInput>
    unit?: XOR<UnitNullableRelationFilter, UnitWhereInput> | null
    submitted_sheets?: FrequencySheetListRelationFilter
    logs?: LogListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    cpf?: SortOrder
    role?: SortOrder
    organization_id?: SortOrder
    unit_id?: SortOrderInput | SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    organization?: OrganizationOrderByWithRelationInput
    unit?: UnitOrderByWithRelationInput
    submitted_sheets?: FrequencySheetOrderByRelationAggregateInput
    logs?: LogOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    cpf?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    organization_id?: StringFilter<"User"> | string
    unit_id?: StringNullableFilter<"User"> | string | null
    is_active?: BoolFilter<"User"> | boolean
    created_at?: DateTimeFilter<"User"> | Date | string
    organization?: XOR<OrganizationRelationFilter, OrganizationWhereInput>
    unit?: XOR<UnitNullableRelationFilter, UnitWhereInput> | null
    submitted_sheets?: FrequencySheetListRelationFilter
    logs?: LogListRelationFilter
  }, "id" | "email" | "cpf">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    cpf?: SortOrder
    role?: SortOrder
    organization_id?: SortOrder
    unit_id?: SortOrderInput | SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    cpf?: StringWithAggregatesFilter<"User"> | string
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
    organization_id?: StringWithAggregatesFilter<"User"> | string
    unit_id?: StringNullableWithAggregatesFilter<"User"> | string | null
    is_active?: BoolWithAggregatesFilter<"User"> | boolean
    created_at?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type EmployeeWhereInput = {
    AND?: EmployeeWhereInput | EmployeeWhereInput[]
    OR?: EmployeeWhereInput[]
    NOT?: EmployeeWhereInput | EmployeeWhereInput[]
    id?: StringFilter<"Employee"> | string
    registration?: StringNullableFilter<"Employee"> | string | null
    name?: StringFilter<"Employee"> | string
    position?: StringFilter<"Employee"> | string
    cpf?: StringFilter<"Employee"> | string
    rg?: StringNullableFilter<"Employee"> | string | null
    rg_state?: StringNullableFilter<"Employee"> | string | null
    contract_type?: StringFilter<"Employee"> | string
    base_salary?: FloatNullableFilter<"Employee"> | number | null
    address?: StringNullableFilter<"Employee"> | string | null
    organization_id?: StringFilter<"Employee"> | string
    unit_id?: StringFilter<"Employee"> | string
    created_at?: DateTimeFilter<"Employee"> | Date | string
    organization?: XOR<OrganizationRelationFilter, OrganizationWhereInput>
    unit?: XOR<UnitRelationFilter, UnitWhereInput>
    frequency_entries?: FrequencyEntryListRelationFilter
  }

  export type EmployeeOrderByWithRelationInput = {
    id?: SortOrder
    registration?: SortOrderInput | SortOrder
    name?: SortOrder
    position?: SortOrder
    cpf?: SortOrder
    rg?: SortOrderInput | SortOrder
    rg_state?: SortOrderInput | SortOrder
    contract_type?: SortOrder
    base_salary?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    organization_id?: SortOrder
    unit_id?: SortOrder
    created_at?: SortOrder
    organization?: OrganizationOrderByWithRelationInput
    unit?: UnitOrderByWithRelationInput
    frequency_entries?: FrequencyEntryOrderByRelationAggregateInput
  }

  export type EmployeeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    registration?: string
    cpf?: string
    AND?: EmployeeWhereInput | EmployeeWhereInput[]
    OR?: EmployeeWhereInput[]
    NOT?: EmployeeWhereInput | EmployeeWhereInput[]
    name?: StringFilter<"Employee"> | string
    position?: StringFilter<"Employee"> | string
    rg?: StringNullableFilter<"Employee"> | string | null
    rg_state?: StringNullableFilter<"Employee"> | string | null
    contract_type?: StringFilter<"Employee"> | string
    base_salary?: FloatNullableFilter<"Employee"> | number | null
    address?: StringNullableFilter<"Employee"> | string | null
    organization_id?: StringFilter<"Employee"> | string
    unit_id?: StringFilter<"Employee"> | string
    created_at?: DateTimeFilter<"Employee"> | Date | string
    organization?: XOR<OrganizationRelationFilter, OrganizationWhereInput>
    unit?: XOR<UnitRelationFilter, UnitWhereInput>
    frequency_entries?: FrequencyEntryListRelationFilter
  }, "id" | "registration" | "cpf">

  export type EmployeeOrderByWithAggregationInput = {
    id?: SortOrder
    registration?: SortOrderInput | SortOrder
    name?: SortOrder
    position?: SortOrder
    cpf?: SortOrder
    rg?: SortOrderInput | SortOrder
    rg_state?: SortOrderInput | SortOrder
    contract_type?: SortOrder
    base_salary?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    organization_id?: SortOrder
    unit_id?: SortOrder
    created_at?: SortOrder
    _count?: EmployeeCountOrderByAggregateInput
    _avg?: EmployeeAvgOrderByAggregateInput
    _max?: EmployeeMaxOrderByAggregateInput
    _min?: EmployeeMinOrderByAggregateInput
    _sum?: EmployeeSumOrderByAggregateInput
  }

  export type EmployeeScalarWhereWithAggregatesInput = {
    AND?: EmployeeScalarWhereWithAggregatesInput | EmployeeScalarWhereWithAggregatesInput[]
    OR?: EmployeeScalarWhereWithAggregatesInput[]
    NOT?: EmployeeScalarWhereWithAggregatesInput | EmployeeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Employee"> | string
    registration?: StringNullableWithAggregatesFilter<"Employee"> | string | null
    name?: StringWithAggregatesFilter<"Employee"> | string
    position?: StringWithAggregatesFilter<"Employee"> | string
    cpf?: StringWithAggregatesFilter<"Employee"> | string
    rg?: StringNullableWithAggregatesFilter<"Employee"> | string | null
    rg_state?: StringNullableWithAggregatesFilter<"Employee"> | string | null
    contract_type?: StringWithAggregatesFilter<"Employee"> | string
    base_salary?: FloatNullableWithAggregatesFilter<"Employee"> | number | null
    address?: StringNullableWithAggregatesFilter<"Employee"> | string | null
    organization_id?: StringWithAggregatesFilter<"Employee"> | string
    unit_id?: StringWithAggregatesFilter<"Employee"> | string
    created_at?: DateTimeWithAggregatesFilter<"Employee"> | Date | string
  }

  export type FrequencySheetWhereInput = {
    AND?: FrequencySheetWhereInput | FrequencySheetWhereInput[]
    OR?: FrequencySheetWhereInput[]
    NOT?: FrequencySheetWhereInput | FrequencySheetWhereInput[]
    id?: StringFilter<"FrequencySheet"> | string
    organization_id?: StringFilter<"FrequencySheet"> | string
    unit_id?: StringFilter<"FrequencySheet"> | string
    month?: IntFilter<"FrequencySheet"> | number
    year?: IntFilter<"FrequencySheet"> | number
    status?: EnumSheetStatusFilter<"FrequencySheet"> | $Enums.SheetStatus
    submitted_by?: StringNullableFilter<"FrequencySheet"> | string | null
    submitted_at?: DateTimeNullableFilter<"FrequencySheet"> | Date | string | null
    created_at?: DateTimeFilter<"FrequencySheet"> | Date | string
    organization?: XOR<OrganizationRelationFilter, OrganizationWhereInput>
    unit?: XOR<UnitRelationFilter, UnitWhereInput>
    submitter?: XOR<UserNullableRelationFilter, UserWhereInput> | null
    entries?: FrequencyEntryListRelationFilter
  }

  export type FrequencySheetOrderByWithRelationInput = {
    id?: SortOrder
    organization_id?: SortOrder
    unit_id?: SortOrder
    month?: SortOrder
    year?: SortOrder
    status?: SortOrder
    submitted_by?: SortOrderInput | SortOrder
    submitted_at?: SortOrderInput | SortOrder
    created_at?: SortOrder
    organization?: OrganizationOrderByWithRelationInput
    unit?: UnitOrderByWithRelationInput
    submitter?: UserOrderByWithRelationInput
    entries?: FrequencyEntryOrderByRelationAggregateInput
  }

  export type FrequencySheetWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FrequencySheetWhereInput | FrequencySheetWhereInput[]
    OR?: FrequencySheetWhereInput[]
    NOT?: FrequencySheetWhereInput | FrequencySheetWhereInput[]
    organization_id?: StringFilter<"FrequencySheet"> | string
    unit_id?: StringFilter<"FrequencySheet"> | string
    month?: IntFilter<"FrequencySheet"> | number
    year?: IntFilter<"FrequencySheet"> | number
    status?: EnumSheetStatusFilter<"FrequencySheet"> | $Enums.SheetStatus
    submitted_by?: StringNullableFilter<"FrequencySheet"> | string | null
    submitted_at?: DateTimeNullableFilter<"FrequencySheet"> | Date | string | null
    created_at?: DateTimeFilter<"FrequencySheet"> | Date | string
    organization?: XOR<OrganizationRelationFilter, OrganizationWhereInput>
    unit?: XOR<UnitRelationFilter, UnitWhereInput>
    submitter?: XOR<UserNullableRelationFilter, UserWhereInput> | null
    entries?: FrequencyEntryListRelationFilter
  }, "id">

  export type FrequencySheetOrderByWithAggregationInput = {
    id?: SortOrder
    organization_id?: SortOrder
    unit_id?: SortOrder
    month?: SortOrder
    year?: SortOrder
    status?: SortOrder
    submitted_by?: SortOrderInput | SortOrder
    submitted_at?: SortOrderInput | SortOrder
    created_at?: SortOrder
    _count?: FrequencySheetCountOrderByAggregateInput
    _avg?: FrequencySheetAvgOrderByAggregateInput
    _max?: FrequencySheetMaxOrderByAggregateInput
    _min?: FrequencySheetMinOrderByAggregateInput
    _sum?: FrequencySheetSumOrderByAggregateInput
  }

  export type FrequencySheetScalarWhereWithAggregatesInput = {
    AND?: FrequencySheetScalarWhereWithAggregatesInput | FrequencySheetScalarWhereWithAggregatesInput[]
    OR?: FrequencySheetScalarWhereWithAggregatesInput[]
    NOT?: FrequencySheetScalarWhereWithAggregatesInput | FrequencySheetScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"FrequencySheet"> | string
    organization_id?: StringWithAggregatesFilter<"FrequencySheet"> | string
    unit_id?: StringWithAggregatesFilter<"FrequencySheet"> | string
    month?: IntWithAggregatesFilter<"FrequencySheet"> | number
    year?: IntWithAggregatesFilter<"FrequencySheet"> | number
    status?: EnumSheetStatusWithAggregatesFilter<"FrequencySheet"> | $Enums.SheetStatus
    submitted_by?: StringNullableWithAggregatesFilter<"FrequencySheet"> | string | null
    submitted_at?: DateTimeNullableWithAggregatesFilter<"FrequencySheet"> | Date | string | null
    created_at?: DateTimeWithAggregatesFilter<"FrequencySheet"> | Date | string
  }

  export type FrequencyEntryWhereInput = {
    AND?: FrequencyEntryWhereInput | FrequencyEntryWhereInput[]
    OR?: FrequencyEntryWhereInput[]
    NOT?: FrequencyEntryWhereInput | FrequencyEntryWhereInput[]
    id?: StringFilter<"FrequencyEntry"> | string
    sheet_id?: StringFilter<"FrequencyEntry"> | string
    employee_id?: StringFilter<"FrequencyEntry"> | string
    absence_days?: IntFilter<"FrequencyEntry"> | number
    additional_night_hours?: FloatFilter<"FrequencyEntry"> | number
    overtime_50_hours?: FloatFilter<"FrequencyEntry"> | number
    overtime_100_hours?: FloatFilter<"FrequencyEntry"> | number
    on_call_hours?: FloatFilter<"FrequencyEntry"> | number
    vacation_days?: IntFilter<"FrequencyEntry"> | number
    salary_floor_amount?: FloatNullableFilter<"FrequencyEntry"> | number | null
    justification?: StringNullableFilter<"FrequencyEntry"> | string | null
    created_at?: DateTimeFilter<"FrequencyEntry"> | Date | string
    sheet?: XOR<FrequencySheetRelationFilter, FrequencySheetWhereInput>
    employee?: XOR<EmployeeRelationFilter, EmployeeWhereInput>
  }

  export type FrequencyEntryOrderByWithRelationInput = {
    id?: SortOrder
    sheet_id?: SortOrder
    employee_id?: SortOrder
    absence_days?: SortOrder
    additional_night_hours?: SortOrder
    overtime_50_hours?: SortOrder
    overtime_100_hours?: SortOrder
    on_call_hours?: SortOrder
    vacation_days?: SortOrder
    salary_floor_amount?: SortOrderInput | SortOrder
    justification?: SortOrderInput | SortOrder
    created_at?: SortOrder
    sheet?: FrequencySheetOrderByWithRelationInput
    employee?: EmployeeOrderByWithRelationInput
  }

  export type FrequencyEntryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FrequencyEntryWhereInput | FrequencyEntryWhereInput[]
    OR?: FrequencyEntryWhereInput[]
    NOT?: FrequencyEntryWhereInput | FrequencyEntryWhereInput[]
    sheet_id?: StringFilter<"FrequencyEntry"> | string
    employee_id?: StringFilter<"FrequencyEntry"> | string
    absence_days?: IntFilter<"FrequencyEntry"> | number
    additional_night_hours?: FloatFilter<"FrequencyEntry"> | number
    overtime_50_hours?: FloatFilter<"FrequencyEntry"> | number
    overtime_100_hours?: FloatFilter<"FrequencyEntry"> | number
    on_call_hours?: FloatFilter<"FrequencyEntry"> | number
    vacation_days?: IntFilter<"FrequencyEntry"> | number
    salary_floor_amount?: FloatNullableFilter<"FrequencyEntry"> | number | null
    justification?: StringNullableFilter<"FrequencyEntry"> | string | null
    created_at?: DateTimeFilter<"FrequencyEntry"> | Date | string
    sheet?: XOR<FrequencySheetRelationFilter, FrequencySheetWhereInput>
    employee?: XOR<EmployeeRelationFilter, EmployeeWhereInput>
  }, "id">

  export type FrequencyEntryOrderByWithAggregationInput = {
    id?: SortOrder
    sheet_id?: SortOrder
    employee_id?: SortOrder
    absence_days?: SortOrder
    additional_night_hours?: SortOrder
    overtime_50_hours?: SortOrder
    overtime_100_hours?: SortOrder
    on_call_hours?: SortOrder
    vacation_days?: SortOrder
    salary_floor_amount?: SortOrderInput | SortOrder
    justification?: SortOrderInput | SortOrder
    created_at?: SortOrder
    _count?: FrequencyEntryCountOrderByAggregateInput
    _avg?: FrequencyEntryAvgOrderByAggregateInput
    _max?: FrequencyEntryMaxOrderByAggregateInput
    _min?: FrequencyEntryMinOrderByAggregateInput
    _sum?: FrequencyEntrySumOrderByAggregateInput
  }

  export type FrequencyEntryScalarWhereWithAggregatesInput = {
    AND?: FrequencyEntryScalarWhereWithAggregatesInput | FrequencyEntryScalarWhereWithAggregatesInput[]
    OR?: FrequencyEntryScalarWhereWithAggregatesInput[]
    NOT?: FrequencyEntryScalarWhereWithAggregatesInput | FrequencyEntryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"FrequencyEntry"> | string
    sheet_id?: StringWithAggregatesFilter<"FrequencyEntry"> | string
    employee_id?: StringWithAggregatesFilter<"FrequencyEntry"> | string
    absence_days?: IntWithAggregatesFilter<"FrequencyEntry"> | number
    additional_night_hours?: FloatWithAggregatesFilter<"FrequencyEntry"> | number
    overtime_50_hours?: FloatWithAggregatesFilter<"FrequencyEntry"> | number
    overtime_100_hours?: FloatWithAggregatesFilter<"FrequencyEntry"> | number
    on_call_hours?: FloatWithAggregatesFilter<"FrequencyEntry"> | number
    vacation_days?: IntWithAggregatesFilter<"FrequencyEntry"> | number
    salary_floor_amount?: FloatNullableWithAggregatesFilter<"FrequencyEntry"> | number | null
    justification?: StringNullableWithAggregatesFilter<"FrequencyEntry"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"FrequencyEntry"> | Date | string
  }

  export type EventTypeWhereInput = {
    AND?: EventTypeWhereInput | EventTypeWhereInput[]
    OR?: EventTypeWhereInput[]
    NOT?: EventTypeWhereInput | EventTypeWhereInput[]
    id?: StringFilter<"EventType"> | string
    name?: StringFilter<"EventType"> | string
    label?: StringFilter<"EventType"> | string
    description?: StringNullableFilter<"EventType"> | string | null
    created_at?: DateTimeFilter<"EventType"> | Date | string
    event_codes?: EventCodeListRelationFilter
  }

  export type EventTypeOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    label?: SortOrder
    description?: SortOrderInput | SortOrder
    created_at?: SortOrder
    event_codes?: EventCodeOrderByRelationAggregateInput
  }

  export type EventTypeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: EventTypeWhereInput | EventTypeWhereInput[]
    OR?: EventTypeWhereInput[]
    NOT?: EventTypeWhereInput | EventTypeWhereInput[]
    label?: StringFilter<"EventType"> | string
    description?: StringNullableFilter<"EventType"> | string | null
    created_at?: DateTimeFilter<"EventType"> | Date | string
    event_codes?: EventCodeListRelationFilter
  }, "id" | "name">

  export type EventTypeOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    label?: SortOrder
    description?: SortOrderInput | SortOrder
    created_at?: SortOrder
    _count?: EventTypeCountOrderByAggregateInput
    _max?: EventTypeMaxOrderByAggregateInput
    _min?: EventTypeMinOrderByAggregateInput
  }

  export type EventTypeScalarWhereWithAggregatesInput = {
    AND?: EventTypeScalarWhereWithAggregatesInput | EventTypeScalarWhereWithAggregatesInput[]
    OR?: EventTypeScalarWhereWithAggregatesInput[]
    NOT?: EventTypeScalarWhereWithAggregatesInput | EventTypeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"EventType"> | string
    name?: StringWithAggregatesFilter<"EventType"> | string
    label?: StringWithAggregatesFilter<"EventType"> | string
    description?: StringNullableWithAggregatesFilter<"EventType"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"EventType"> | Date | string
  }

  export type EventCodeWhereInput = {
    AND?: EventCodeWhereInput | EventCodeWhereInput[]
    OR?: EventCodeWhereInput[]
    NOT?: EventCodeWhereInput | EventCodeWhereInput[]
    id?: StringFilter<"EventCode"> | string
    organization_id?: StringFilter<"EventCode"> | string
    event_type_id?: StringFilter<"EventCode"> | string
    contract_type?: StringFilter<"EventCode"> | string
    code?: IntFilter<"EventCode"> | number
    created_at?: DateTimeFilter<"EventCode"> | Date | string
    organization?: XOR<OrganizationRelationFilter, OrganizationWhereInput>
    event_type?: XOR<EventTypeRelationFilter, EventTypeWhereInput>
  }

  export type EventCodeOrderByWithRelationInput = {
    id?: SortOrder
    organization_id?: SortOrder
    event_type_id?: SortOrder
    contract_type?: SortOrder
    code?: SortOrder
    created_at?: SortOrder
    organization?: OrganizationOrderByWithRelationInput
    event_type?: EventTypeOrderByWithRelationInput
  }

  export type EventCodeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    organization_id_event_type_id_contract_type?: EventCodeOrganization_idEvent_type_idContract_typeCompoundUniqueInput
    AND?: EventCodeWhereInput | EventCodeWhereInput[]
    OR?: EventCodeWhereInput[]
    NOT?: EventCodeWhereInput | EventCodeWhereInput[]
    organization_id?: StringFilter<"EventCode"> | string
    event_type_id?: StringFilter<"EventCode"> | string
    contract_type?: StringFilter<"EventCode"> | string
    code?: IntFilter<"EventCode"> | number
    created_at?: DateTimeFilter<"EventCode"> | Date | string
    organization?: XOR<OrganizationRelationFilter, OrganizationWhereInput>
    event_type?: XOR<EventTypeRelationFilter, EventTypeWhereInput>
  }, "id" | "organization_id_event_type_id_contract_type">

  export type EventCodeOrderByWithAggregationInput = {
    id?: SortOrder
    organization_id?: SortOrder
    event_type_id?: SortOrder
    contract_type?: SortOrder
    code?: SortOrder
    created_at?: SortOrder
    _count?: EventCodeCountOrderByAggregateInput
    _avg?: EventCodeAvgOrderByAggregateInput
    _max?: EventCodeMaxOrderByAggregateInput
    _min?: EventCodeMinOrderByAggregateInput
    _sum?: EventCodeSumOrderByAggregateInput
  }

  export type EventCodeScalarWhereWithAggregatesInput = {
    AND?: EventCodeScalarWhereWithAggregatesInput | EventCodeScalarWhereWithAggregatesInput[]
    OR?: EventCodeScalarWhereWithAggregatesInput[]
    NOT?: EventCodeScalarWhereWithAggregatesInput | EventCodeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"EventCode"> | string
    organization_id?: StringWithAggregatesFilter<"EventCode"> | string
    event_type_id?: StringWithAggregatesFilter<"EventCode"> | string
    contract_type?: StringWithAggregatesFilter<"EventCode"> | string
    code?: IntWithAggregatesFilter<"EventCode"> | number
    created_at?: DateTimeWithAggregatesFilter<"EventCode"> | Date | string
  }

  export type SalaryFloorWhereInput = {
    AND?: SalaryFloorWhereInput | SalaryFloorWhereInput[]
    OR?: SalaryFloorWhereInput[]
    NOT?: SalaryFloorWhereInput | SalaryFloorWhereInput[]
    id?: StringFilter<"SalaryFloor"> | string
    organization_id?: StringFilter<"SalaryFloor"> | string
    position?: StringFilter<"SalaryFloor"> | string
    base_value?: FloatFilter<"SalaryFloor"> | number
    hour_value?: FloatFilter<"SalaryFloor"> | number
    floor_quantity?: FloatFilter<"SalaryFloor"> | number
    created_at?: DateTimeFilter<"SalaryFloor"> | Date | string
    updated_at?: DateTimeFilter<"SalaryFloor"> | Date | string
    organization?: XOR<OrganizationRelationFilter, OrganizationWhereInput>
  }

  export type SalaryFloorOrderByWithRelationInput = {
    id?: SortOrder
    organization_id?: SortOrder
    position?: SortOrder
    base_value?: SortOrder
    hour_value?: SortOrder
    floor_quantity?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    organization?: OrganizationOrderByWithRelationInput
  }

  export type SalaryFloorWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    organization_id_position?: SalaryFloorOrganization_idPositionCompoundUniqueInput
    AND?: SalaryFloorWhereInput | SalaryFloorWhereInput[]
    OR?: SalaryFloorWhereInput[]
    NOT?: SalaryFloorWhereInput | SalaryFloorWhereInput[]
    organization_id?: StringFilter<"SalaryFloor"> | string
    position?: StringFilter<"SalaryFloor"> | string
    base_value?: FloatFilter<"SalaryFloor"> | number
    hour_value?: FloatFilter<"SalaryFloor"> | number
    floor_quantity?: FloatFilter<"SalaryFloor"> | number
    created_at?: DateTimeFilter<"SalaryFloor"> | Date | string
    updated_at?: DateTimeFilter<"SalaryFloor"> | Date | string
    organization?: XOR<OrganizationRelationFilter, OrganizationWhereInput>
  }, "id" | "organization_id_position">

  export type SalaryFloorOrderByWithAggregationInput = {
    id?: SortOrder
    organization_id?: SortOrder
    position?: SortOrder
    base_value?: SortOrder
    hour_value?: SortOrder
    floor_quantity?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: SalaryFloorCountOrderByAggregateInput
    _avg?: SalaryFloorAvgOrderByAggregateInput
    _max?: SalaryFloorMaxOrderByAggregateInput
    _min?: SalaryFloorMinOrderByAggregateInput
    _sum?: SalaryFloorSumOrderByAggregateInput
  }

  export type SalaryFloorScalarWhereWithAggregatesInput = {
    AND?: SalaryFloorScalarWhereWithAggregatesInput | SalaryFloorScalarWhereWithAggregatesInput[]
    OR?: SalaryFloorScalarWhereWithAggregatesInput[]
    NOT?: SalaryFloorScalarWhereWithAggregatesInput | SalaryFloorScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SalaryFloor"> | string
    organization_id?: StringWithAggregatesFilter<"SalaryFloor"> | string
    position?: StringWithAggregatesFilter<"SalaryFloor"> | string
    base_value?: FloatWithAggregatesFilter<"SalaryFloor"> | number
    hour_value?: FloatWithAggregatesFilter<"SalaryFloor"> | number
    floor_quantity?: FloatWithAggregatesFilter<"SalaryFloor"> | number
    created_at?: DateTimeWithAggregatesFilter<"SalaryFloor"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"SalaryFloor"> | Date | string
  }

  export type LogWhereInput = {
    AND?: LogWhereInput | LogWhereInput[]
    OR?: LogWhereInput[]
    NOT?: LogWhereInput | LogWhereInput[]
    id?: StringFilter<"Log"> | string
    organization_id?: StringFilter<"Log"> | string
    user_id?: StringFilter<"Log"> | string
    action?: StringFilter<"Log"> | string
    details?: JsonNullableFilter<"Log">
    created_at?: DateTimeFilter<"Log"> | Date | string
    organization?: XOR<OrganizationRelationFilter, OrganizationWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type LogOrderByWithRelationInput = {
    id?: SortOrder
    organization_id?: SortOrder
    user_id?: SortOrder
    action?: SortOrder
    details?: SortOrderInput | SortOrder
    created_at?: SortOrder
    organization?: OrganizationOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type LogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LogWhereInput | LogWhereInput[]
    OR?: LogWhereInput[]
    NOT?: LogWhereInput | LogWhereInput[]
    organization_id?: StringFilter<"Log"> | string
    user_id?: StringFilter<"Log"> | string
    action?: StringFilter<"Log"> | string
    details?: JsonNullableFilter<"Log">
    created_at?: DateTimeFilter<"Log"> | Date | string
    organization?: XOR<OrganizationRelationFilter, OrganizationWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type LogOrderByWithAggregationInput = {
    id?: SortOrder
    organization_id?: SortOrder
    user_id?: SortOrder
    action?: SortOrder
    details?: SortOrderInput | SortOrder
    created_at?: SortOrder
    _count?: LogCountOrderByAggregateInput
    _max?: LogMaxOrderByAggregateInput
    _min?: LogMinOrderByAggregateInput
  }

  export type LogScalarWhereWithAggregatesInput = {
    AND?: LogScalarWhereWithAggregatesInput | LogScalarWhereWithAggregatesInput[]
    OR?: LogScalarWhereWithAggregatesInput[]
    NOT?: LogScalarWhereWithAggregatesInput | LogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Log"> | string
    organization_id?: StringWithAggregatesFilter<"Log"> | string
    user_id?: StringWithAggregatesFilter<"Log"> | string
    action?: StringWithAggregatesFilter<"Log"> | string
    details?: JsonNullableWithAggregatesFilter<"Log">
    created_at?: DateTimeWithAggregatesFilter<"Log"> | Date | string
  }

  export type OrganizationCreateInput = {
    id?: string
    name: string
    slug: string
    logo_url?: string | null
    created_at?: Date | string
    units?: UnitCreateNestedManyWithoutOrganizationInput
    users?: UserCreateNestedManyWithoutOrganizationInput
    employees?: EmployeeCreateNestedManyWithoutOrganizationInput
    frequency_sheets?: FrequencySheetCreateNestedManyWithoutOrganizationInput
    event_codes?: EventCodeCreateNestedManyWithoutOrganizationInput
    salary_floors?: SalaryFloorCreateNestedManyWithoutOrganizationInput
    logs?: LogCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUncheckedCreateInput = {
    id?: string
    name: string
    slug: string
    logo_url?: string | null
    created_at?: Date | string
    units?: UnitUncheckedCreateNestedManyWithoutOrganizationInput
    users?: UserUncheckedCreateNestedManyWithoutOrganizationInput
    employees?: EmployeeUncheckedCreateNestedManyWithoutOrganizationInput
    frequency_sheets?: FrequencySheetUncheckedCreateNestedManyWithoutOrganizationInput
    event_codes?: EventCodeUncheckedCreateNestedManyWithoutOrganizationInput
    salary_floors?: SalaryFloorUncheckedCreateNestedManyWithoutOrganizationInput
    logs?: LogUncheckedCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    logo_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    units?: UnitUpdateManyWithoutOrganizationNestedInput
    users?: UserUpdateManyWithoutOrganizationNestedInput
    employees?: EmployeeUpdateManyWithoutOrganizationNestedInput
    frequency_sheets?: FrequencySheetUpdateManyWithoutOrganizationNestedInput
    event_codes?: EventCodeUpdateManyWithoutOrganizationNestedInput
    salary_floors?: SalaryFloorUpdateManyWithoutOrganizationNestedInput
    logs?: LogUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    logo_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    units?: UnitUncheckedUpdateManyWithoutOrganizationNestedInput
    users?: UserUncheckedUpdateManyWithoutOrganizationNestedInput
    employees?: EmployeeUncheckedUpdateManyWithoutOrganizationNestedInput
    frequency_sheets?: FrequencySheetUncheckedUpdateManyWithoutOrganizationNestedInput
    event_codes?: EventCodeUncheckedUpdateManyWithoutOrganizationNestedInput
    salary_floors?: SalaryFloorUncheckedUpdateManyWithoutOrganizationNestedInput
    logs?: LogUncheckedUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationCreateManyInput = {
    id?: string
    name: string
    slug: string
    logo_url?: string | null
    created_at?: Date | string
  }

  export type OrganizationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    logo_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrganizationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    logo_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UnitCreateInput = {
    id?: string
    name: string
    location: string
    is_active?: boolean
    created_at?: Date | string
    organization: OrganizationCreateNestedOneWithoutUnitsInput
    employees?: EmployeeCreateNestedManyWithoutUnitInput
    users?: UserCreateNestedManyWithoutUnitInput
    frequency_sheets?: FrequencySheetCreateNestedManyWithoutUnitInput
  }

  export type UnitUncheckedCreateInput = {
    id?: string
    name: string
    location: string
    organization_id: string
    is_active?: boolean
    created_at?: Date | string
    employees?: EmployeeUncheckedCreateNestedManyWithoutUnitInput
    users?: UserUncheckedCreateNestedManyWithoutUnitInput
    frequency_sheets?: FrequencySheetUncheckedCreateNestedManyWithoutUnitInput
  }

  export type UnitUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationUpdateOneRequiredWithoutUnitsNestedInput
    employees?: EmployeeUpdateManyWithoutUnitNestedInput
    users?: UserUpdateManyWithoutUnitNestedInput
    frequency_sheets?: FrequencySheetUpdateManyWithoutUnitNestedInput
  }

  export type UnitUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    organization_id?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    employees?: EmployeeUncheckedUpdateManyWithoutUnitNestedInput
    users?: UserUncheckedUpdateManyWithoutUnitNestedInput
    frequency_sheets?: FrequencySheetUncheckedUpdateManyWithoutUnitNestedInput
  }

  export type UnitCreateManyInput = {
    id?: string
    name: string
    location: string
    organization_id: string
    is_active?: boolean
    created_at?: Date | string
  }

  export type UnitUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UnitUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    organization_id?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email: string
    password?: string
    cpf: string
    role?: $Enums.UserRole
    is_active?: boolean
    created_at?: Date | string
    organization: OrganizationCreateNestedOneWithoutUsersInput
    unit?: UnitCreateNestedOneWithoutUsersInput
    submitted_sheets?: FrequencySheetCreateNestedManyWithoutSubmitterInput
    logs?: LogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    password?: string
    cpf: string
    role?: $Enums.UserRole
    organization_id: string
    unit_id?: string | null
    is_active?: boolean
    created_at?: Date | string
    submitted_sheets?: FrequencySheetUncheckedCreateNestedManyWithoutSubmitterInput
    logs?: LogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationUpdateOneRequiredWithoutUsersNestedInput
    unit?: UnitUpdateOneWithoutUsersNestedInput
    submitted_sheets?: FrequencySheetUpdateManyWithoutSubmitterNestedInput
    logs?: LogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    organization_id?: StringFieldUpdateOperationsInput | string
    unit_id?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    submitted_sheets?: FrequencySheetUncheckedUpdateManyWithoutSubmitterNestedInput
    logs?: LogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    email: string
    password?: string
    cpf: string
    role?: $Enums.UserRole
    organization_id: string
    unit_id?: string | null
    is_active?: boolean
    created_at?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    organization_id?: StringFieldUpdateOperationsInput | string
    unit_id?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmployeeCreateInput = {
    id?: string
    registration?: string | null
    name: string
    position: string
    cpf: string
    rg?: string | null
    rg_state?: string | null
    contract_type: string
    base_salary?: number | null
    address?: string | null
    created_at?: Date | string
    organization: OrganizationCreateNestedOneWithoutEmployeesInput
    unit: UnitCreateNestedOneWithoutEmployeesInput
    frequency_entries?: FrequencyEntryCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeUncheckedCreateInput = {
    id?: string
    registration?: string | null
    name: string
    position: string
    cpf: string
    rg?: string | null
    rg_state?: string | null
    contract_type: string
    base_salary?: number | null
    address?: string | null
    organization_id: string
    unit_id: string
    created_at?: Date | string
    frequency_entries?: FrequencyEntryUncheckedCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    registration?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    rg?: NullableStringFieldUpdateOperationsInput | string | null
    rg_state?: NullableStringFieldUpdateOperationsInput | string | null
    contract_type?: StringFieldUpdateOperationsInput | string
    base_salary?: NullableFloatFieldUpdateOperationsInput | number | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationUpdateOneRequiredWithoutEmployeesNestedInput
    unit?: UnitUpdateOneRequiredWithoutEmployeesNestedInput
    frequency_entries?: FrequencyEntryUpdateManyWithoutEmployeeNestedInput
  }

  export type EmployeeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    registration?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    rg?: NullableStringFieldUpdateOperationsInput | string | null
    rg_state?: NullableStringFieldUpdateOperationsInput | string | null
    contract_type?: StringFieldUpdateOperationsInput | string
    base_salary?: NullableFloatFieldUpdateOperationsInput | number | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    organization_id?: StringFieldUpdateOperationsInput | string
    unit_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    frequency_entries?: FrequencyEntryUncheckedUpdateManyWithoutEmployeeNestedInput
  }

  export type EmployeeCreateManyInput = {
    id?: string
    registration?: string | null
    name: string
    position: string
    cpf: string
    rg?: string | null
    rg_state?: string | null
    contract_type: string
    base_salary?: number | null
    address?: string | null
    organization_id: string
    unit_id: string
    created_at?: Date | string
  }

  export type EmployeeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    registration?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    rg?: NullableStringFieldUpdateOperationsInput | string | null
    rg_state?: NullableStringFieldUpdateOperationsInput | string | null
    contract_type?: StringFieldUpdateOperationsInput | string
    base_salary?: NullableFloatFieldUpdateOperationsInput | number | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmployeeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    registration?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    rg?: NullableStringFieldUpdateOperationsInput | string | null
    rg_state?: NullableStringFieldUpdateOperationsInput | string | null
    contract_type?: StringFieldUpdateOperationsInput | string
    base_salary?: NullableFloatFieldUpdateOperationsInput | number | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    organization_id?: StringFieldUpdateOperationsInput | string
    unit_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FrequencySheetCreateInput = {
    id?: string
    month: number
    year: number
    status?: $Enums.SheetStatus
    submitted_at?: Date | string | null
    created_at?: Date | string
    organization: OrganizationCreateNestedOneWithoutFrequency_sheetsInput
    unit: UnitCreateNestedOneWithoutFrequency_sheetsInput
    submitter?: UserCreateNestedOneWithoutSubmitted_sheetsInput
    entries?: FrequencyEntryCreateNestedManyWithoutSheetInput
  }

  export type FrequencySheetUncheckedCreateInput = {
    id?: string
    organization_id: string
    unit_id: string
    month: number
    year: number
    status?: $Enums.SheetStatus
    submitted_by?: string | null
    submitted_at?: Date | string | null
    created_at?: Date | string
    entries?: FrequencyEntryUncheckedCreateNestedManyWithoutSheetInput
  }

  export type FrequencySheetUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    month?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    status?: EnumSheetStatusFieldUpdateOperationsInput | $Enums.SheetStatus
    submitted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationUpdateOneRequiredWithoutFrequency_sheetsNestedInput
    unit?: UnitUpdateOneRequiredWithoutFrequency_sheetsNestedInput
    submitter?: UserUpdateOneWithoutSubmitted_sheetsNestedInput
    entries?: FrequencyEntryUpdateManyWithoutSheetNestedInput
  }

  export type FrequencySheetUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    organization_id?: StringFieldUpdateOperationsInput | string
    unit_id?: StringFieldUpdateOperationsInput | string
    month?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    status?: EnumSheetStatusFieldUpdateOperationsInput | $Enums.SheetStatus
    submitted_by?: NullableStringFieldUpdateOperationsInput | string | null
    submitted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    entries?: FrequencyEntryUncheckedUpdateManyWithoutSheetNestedInput
  }

  export type FrequencySheetCreateManyInput = {
    id?: string
    organization_id: string
    unit_id: string
    month: number
    year: number
    status?: $Enums.SheetStatus
    submitted_by?: string | null
    submitted_at?: Date | string | null
    created_at?: Date | string
  }

  export type FrequencySheetUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    month?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    status?: EnumSheetStatusFieldUpdateOperationsInput | $Enums.SheetStatus
    submitted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FrequencySheetUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    organization_id?: StringFieldUpdateOperationsInput | string
    unit_id?: StringFieldUpdateOperationsInput | string
    month?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    status?: EnumSheetStatusFieldUpdateOperationsInput | $Enums.SheetStatus
    submitted_by?: NullableStringFieldUpdateOperationsInput | string | null
    submitted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FrequencyEntryCreateInput = {
    id?: string
    absence_days: number
    additional_night_hours: number
    overtime_50_hours: number
    overtime_100_hours: number
    on_call_hours: number
    vacation_days: number
    salary_floor_amount?: number | null
    justification?: string | null
    created_at?: Date | string
    sheet: FrequencySheetCreateNestedOneWithoutEntriesInput
    employee: EmployeeCreateNestedOneWithoutFrequency_entriesInput
  }

  export type FrequencyEntryUncheckedCreateInput = {
    id?: string
    sheet_id: string
    employee_id: string
    absence_days: number
    additional_night_hours: number
    overtime_50_hours: number
    overtime_100_hours: number
    on_call_hours: number
    vacation_days: number
    salary_floor_amount?: number | null
    justification?: string | null
    created_at?: Date | string
  }

  export type FrequencyEntryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    absence_days?: IntFieldUpdateOperationsInput | number
    additional_night_hours?: FloatFieldUpdateOperationsInput | number
    overtime_50_hours?: FloatFieldUpdateOperationsInput | number
    overtime_100_hours?: FloatFieldUpdateOperationsInput | number
    on_call_hours?: FloatFieldUpdateOperationsInput | number
    vacation_days?: IntFieldUpdateOperationsInput | number
    salary_floor_amount?: NullableFloatFieldUpdateOperationsInput | number | null
    justification?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    sheet?: FrequencySheetUpdateOneRequiredWithoutEntriesNestedInput
    employee?: EmployeeUpdateOneRequiredWithoutFrequency_entriesNestedInput
  }

  export type FrequencyEntryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sheet_id?: StringFieldUpdateOperationsInput | string
    employee_id?: StringFieldUpdateOperationsInput | string
    absence_days?: IntFieldUpdateOperationsInput | number
    additional_night_hours?: FloatFieldUpdateOperationsInput | number
    overtime_50_hours?: FloatFieldUpdateOperationsInput | number
    overtime_100_hours?: FloatFieldUpdateOperationsInput | number
    on_call_hours?: FloatFieldUpdateOperationsInput | number
    vacation_days?: IntFieldUpdateOperationsInput | number
    salary_floor_amount?: NullableFloatFieldUpdateOperationsInput | number | null
    justification?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FrequencyEntryCreateManyInput = {
    id?: string
    sheet_id: string
    employee_id: string
    absence_days: number
    additional_night_hours: number
    overtime_50_hours: number
    overtime_100_hours: number
    on_call_hours: number
    vacation_days: number
    salary_floor_amount?: number | null
    justification?: string | null
    created_at?: Date | string
  }

  export type FrequencyEntryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    absence_days?: IntFieldUpdateOperationsInput | number
    additional_night_hours?: FloatFieldUpdateOperationsInput | number
    overtime_50_hours?: FloatFieldUpdateOperationsInput | number
    overtime_100_hours?: FloatFieldUpdateOperationsInput | number
    on_call_hours?: FloatFieldUpdateOperationsInput | number
    vacation_days?: IntFieldUpdateOperationsInput | number
    salary_floor_amount?: NullableFloatFieldUpdateOperationsInput | number | null
    justification?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FrequencyEntryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sheet_id?: StringFieldUpdateOperationsInput | string
    employee_id?: StringFieldUpdateOperationsInput | string
    absence_days?: IntFieldUpdateOperationsInput | number
    additional_night_hours?: FloatFieldUpdateOperationsInput | number
    overtime_50_hours?: FloatFieldUpdateOperationsInput | number
    overtime_100_hours?: FloatFieldUpdateOperationsInput | number
    on_call_hours?: FloatFieldUpdateOperationsInput | number
    vacation_days?: IntFieldUpdateOperationsInput | number
    salary_floor_amount?: NullableFloatFieldUpdateOperationsInput | number | null
    justification?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventTypeCreateInput = {
    id?: string
    name: string
    label: string
    description?: string | null
    created_at?: Date | string
    event_codes?: EventCodeCreateNestedManyWithoutEvent_typeInput
  }

  export type EventTypeUncheckedCreateInput = {
    id?: string
    name: string
    label: string
    description?: string | null
    created_at?: Date | string
    event_codes?: EventCodeUncheckedCreateNestedManyWithoutEvent_typeInput
  }

  export type EventTypeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    event_codes?: EventCodeUpdateManyWithoutEvent_typeNestedInput
  }

  export type EventTypeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    event_codes?: EventCodeUncheckedUpdateManyWithoutEvent_typeNestedInput
  }

  export type EventTypeCreateManyInput = {
    id?: string
    name: string
    label: string
    description?: string | null
    created_at?: Date | string
  }

  export type EventTypeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventTypeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventCodeCreateInput = {
    id?: string
    contract_type: string
    code: number
    created_at?: Date | string
    organization: OrganizationCreateNestedOneWithoutEvent_codesInput
    event_type: EventTypeCreateNestedOneWithoutEvent_codesInput
  }

  export type EventCodeUncheckedCreateInput = {
    id?: string
    organization_id: string
    event_type_id: string
    contract_type: string
    code: number
    created_at?: Date | string
  }

  export type EventCodeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    contract_type?: StringFieldUpdateOperationsInput | string
    code?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationUpdateOneRequiredWithoutEvent_codesNestedInput
    event_type?: EventTypeUpdateOneRequiredWithoutEvent_codesNestedInput
  }

  export type EventCodeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    organization_id?: StringFieldUpdateOperationsInput | string
    event_type_id?: StringFieldUpdateOperationsInput | string
    contract_type?: StringFieldUpdateOperationsInput | string
    code?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventCodeCreateManyInput = {
    id?: string
    organization_id: string
    event_type_id: string
    contract_type: string
    code: number
    created_at?: Date | string
  }

  export type EventCodeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    contract_type?: StringFieldUpdateOperationsInput | string
    code?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventCodeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    organization_id?: StringFieldUpdateOperationsInput | string
    event_type_id?: StringFieldUpdateOperationsInput | string
    contract_type?: StringFieldUpdateOperationsInput | string
    code?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SalaryFloorCreateInput = {
    id?: string
    position: string
    base_value: number
    hour_value: number
    floor_quantity: number
    created_at?: Date | string
    updated_at?: Date | string
    organization: OrganizationCreateNestedOneWithoutSalary_floorsInput
  }

  export type SalaryFloorUncheckedCreateInput = {
    id?: string
    organization_id: string
    position: string
    base_value: number
    hour_value: number
    floor_quantity: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type SalaryFloorUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    base_value?: FloatFieldUpdateOperationsInput | number
    hour_value?: FloatFieldUpdateOperationsInput | number
    floor_quantity?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationUpdateOneRequiredWithoutSalary_floorsNestedInput
  }

  export type SalaryFloorUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    organization_id?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    base_value?: FloatFieldUpdateOperationsInput | number
    hour_value?: FloatFieldUpdateOperationsInput | number
    floor_quantity?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SalaryFloorCreateManyInput = {
    id?: string
    organization_id: string
    position: string
    base_value: number
    hour_value: number
    floor_quantity: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type SalaryFloorUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    base_value?: FloatFieldUpdateOperationsInput | number
    hour_value?: FloatFieldUpdateOperationsInput | number
    floor_quantity?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SalaryFloorUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    organization_id?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    base_value?: FloatFieldUpdateOperationsInput | number
    hour_value?: FloatFieldUpdateOperationsInput | number
    floor_quantity?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LogCreateInput = {
    id?: string
    action: string
    details?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
    organization: OrganizationCreateNestedOneWithoutLogsInput
    user: UserCreateNestedOneWithoutLogsInput
  }

  export type LogUncheckedCreateInput = {
    id?: string
    organization_id: string
    user_id: string
    action: string
    details?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
  }

  export type LogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    details?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationUpdateOneRequiredWithoutLogsNestedInput
    user?: UserUpdateOneRequiredWithoutLogsNestedInput
  }

  export type LogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    organization_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    details?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LogCreateManyInput = {
    id?: string
    organization_id: string
    user_id: string
    action: string
    details?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
  }

  export type LogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    details?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    organization_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    details?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type UnitListRelationFilter = {
    every?: UnitWhereInput
    some?: UnitWhereInput
    none?: UnitWhereInput
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type EmployeeListRelationFilter = {
    every?: EmployeeWhereInput
    some?: EmployeeWhereInput
    none?: EmployeeWhereInput
  }

  export type FrequencySheetListRelationFilter = {
    every?: FrequencySheetWhereInput
    some?: FrequencySheetWhereInput
    none?: FrequencySheetWhereInput
  }

  export type EventCodeListRelationFilter = {
    every?: EventCodeWhereInput
    some?: EventCodeWhereInput
    none?: EventCodeWhereInput
  }

  export type SalaryFloorListRelationFilter = {
    every?: SalaryFloorWhereInput
    some?: SalaryFloorWhereInput
    none?: SalaryFloorWhereInput
  }

  export type LogListRelationFilter = {
    every?: LogWhereInput
    some?: LogWhereInput
    none?: LogWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UnitOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EmployeeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FrequencySheetOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EventCodeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SalaryFloorOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrganizationCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    logo_url?: SortOrder
    created_at?: SortOrder
  }

  export type OrganizationMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    logo_url?: SortOrder
    created_at?: SortOrder
  }

  export type OrganizationMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    logo_url?: SortOrder
    created_at?: SortOrder
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type OrganizationRelationFilter = {
    is?: OrganizationWhereInput
    isNot?: OrganizationWhereInput
  }

  export type UnitCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    location?: SortOrder
    organization_id?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
  }

  export type UnitMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    location?: SortOrder
    organization_id?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
  }

  export type UnitMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    location?: SortOrder
    organization_id?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type UnitNullableRelationFilter = {
    is?: UnitWhereInput | null
    isNot?: UnitWhereInput | null
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    cpf?: SortOrder
    role?: SortOrder
    organization_id?: SortOrder
    unit_id?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    cpf?: SortOrder
    role?: SortOrder
    organization_id?: SortOrder
    unit_id?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    cpf?: SortOrder
    role?: SortOrder
    organization_id?: SortOrder
    unit_id?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
  }

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type UnitRelationFilter = {
    is?: UnitWhereInput
    isNot?: UnitWhereInput
  }

  export type FrequencyEntryListRelationFilter = {
    every?: FrequencyEntryWhereInput
    some?: FrequencyEntryWhereInput
    none?: FrequencyEntryWhereInput
  }

  export type FrequencyEntryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EmployeeCountOrderByAggregateInput = {
    id?: SortOrder
    registration?: SortOrder
    name?: SortOrder
    position?: SortOrder
    cpf?: SortOrder
    rg?: SortOrder
    rg_state?: SortOrder
    contract_type?: SortOrder
    base_salary?: SortOrder
    address?: SortOrder
    organization_id?: SortOrder
    unit_id?: SortOrder
    created_at?: SortOrder
  }

  export type EmployeeAvgOrderByAggregateInput = {
    base_salary?: SortOrder
  }

  export type EmployeeMaxOrderByAggregateInput = {
    id?: SortOrder
    registration?: SortOrder
    name?: SortOrder
    position?: SortOrder
    cpf?: SortOrder
    rg?: SortOrder
    rg_state?: SortOrder
    contract_type?: SortOrder
    base_salary?: SortOrder
    address?: SortOrder
    organization_id?: SortOrder
    unit_id?: SortOrder
    created_at?: SortOrder
  }

  export type EmployeeMinOrderByAggregateInput = {
    id?: SortOrder
    registration?: SortOrder
    name?: SortOrder
    position?: SortOrder
    cpf?: SortOrder
    rg?: SortOrder
    rg_state?: SortOrder
    contract_type?: SortOrder
    base_salary?: SortOrder
    address?: SortOrder
    organization_id?: SortOrder
    unit_id?: SortOrder
    created_at?: SortOrder
  }

  export type EmployeeSumOrderByAggregateInput = {
    base_salary?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type EnumSheetStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SheetStatus | EnumSheetStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SheetStatus[] | ListEnumSheetStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SheetStatus[] | ListEnumSheetStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSheetStatusFilter<$PrismaModel> | $Enums.SheetStatus
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

  export type UserNullableRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type FrequencySheetCountOrderByAggregateInput = {
    id?: SortOrder
    organization_id?: SortOrder
    unit_id?: SortOrder
    month?: SortOrder
    year?: SortOrder
    status?: SortOrder
    submitted_by?: SortOrder
    submitted_at?: SortOrder
    created_at?: SortOrder
  }

  export type FrequencySheetAvgOrderByAggregateInput = {
    month?: SortOrder
    year?: SortOrder
  }

  export type FrequencySheetMaxOrderByAggregateInput = {
    id?: SortOrder
    organization_id?: SortOrder
    unit_id?: SortOrder
    month?: SortOrder
    year?: SortOrder
    status?: SortOrder
    submitted_by?: SortOrder
    submitted_at?: SortOrder
    created_at?: SortOrder
  }

  export type FrequencySheetMinOrderByAggregateInput = {
    id?: SortOrder
    organization_id?: SortOrder
    unit_id?: SortOrder
    month?: SortOrder
    year?: SortOrder
    status?: SortOrder
    submitted_by?: SortOrder
    submitted_at?: SortOrder
    created_at?: SortOrder
  }

  export type FrequencySheetSumOrderByAggregateInput = {
    month?: SortOrder
    year?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type EnumSheetStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SheetStatus | EnumSheetStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SheetStatus[] | ListEnumSheetStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SheetStatus[] | ListEnumSheetStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSheetStatusWithAggregatesFilter<$PrismaModel> | $Enums.SheetStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSheetStatusFilter<$PrismaModel>
    _max?: NestedEnumSheetStatusFilter<$PrismaModel>
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

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type FrequencySheetRelationFilter = {
    is?: FrequencySheetWhereInput
    isNot?: FrequencySheetWhereInput
  }

  export type EmployeeRelationFilter = {
    is?: EmployeeWhereInput
    isNot?: EmployeeWhereInput
  }

  export type FrequencyEntryCountOrderByAggregateInput = {
    id?: SortOrder
    sheet_id?: SortOrder
    employee_id?: SortOrder
    absence_days?: SortOrder
    additional_night_hours?: SortOrder
    overtime_50_hours?: SortOrder
    overtime_100_hours?: SortOrder
    on_call_hours?: SortOrder
    vacation_days?: SortOrder
    salary_floor_amount?: SortOrder
    justification?: SortOrder
    created_at?: SortOrder
  }

  export type FrequencyEntryAvgOrderByAggregateInput = {
    absence_days?: SortOrder
    additional_night_hours?: SortOrder
    overtime_50_hours?: SortOrder
    overtime_100_hours?: SortOrder
    on_call_hours?: SortOrder
    vacation_days?: SortOrder
    salary_floor_amount?: SortOrder
  }

  export type FrequencyEntryMaxOrderByAggregateInput = {
    id?: SortOrder
    sheet_id?: SortOrder
    employee_id?: SortOrder
    absence_days?: SortOrder
    additional_night_hours?: SortOrder
    overtime_50_hours?: SortOrder
    overtime_100_hours?: SortOrder
    on_call_hours?: SortOrder
    vacation_days?: SortOrder
    salary_floor_amount?: SortOrder
    justification?: SortOrder
    created_at?: SortOrder
  }

  export type FrequencyEntryMinOrderByAggregateInput = {
    id?: SortOrder
    sheet_id?: SortOrder
    employee_id?: SortOrder
    absence_days?: SortOrder
    additional_night_hours?: SortOrder
    overtime_50_hours?: SortOrder
    overtime_100_hours?: SortOrder
    on_call_hours?: SortOrder
    vacation_days?: SortOrder
    salary_floor_amount?: SortOrder
    justification?: SortOrder
    created_at?: SortOrder
  }

  export type FrequencyEntrySumOrderByAggregateInput = {
    absence_days?: SortOrder
    additional_night_hours?: SortOrder
    overtime_50_hours?: SortOrder
    overtime_100_hours?: SortOrder
    on_call_hours?: SortOrder
    vacation_days?: SortOrder
    salary_floor_amount?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type EventTypeCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    label?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
  }

  export type EventTypeMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    label?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
  }

  export type EventTypeMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    label?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
  }

  export type EventTypeRelationFilter = {
    is?: EventTypeWhereInput
    isNot?: EventTypeWhereInput
  }

  export type EventCodeOrganization_idEvent_type_idContract_typeCompoundUniqueInput = {
    organization_id: string
    event_type_id: string
    contract_type: string
  }

  export type EventCodeCountOrderByAggregateInput = {
    id?: SortOrder
    organization_id?: SortOrder
    event_type_id?: SortOrder
    contract_type?: SortOrder
    code?: SortOrder
    created_at?: SortOrder
  }

  export type EventCodeAvgOrderByAggregateInput = {
    code?: SortOrder
  }

  export type EventCodeMaxOrderByAggregateInput = {
    id?: SortOrder
    organization_id?: SortOrder
    event_type_id?: SortOrder
    contract_type?: SortOrder
    code?: SortOrder
    created_at?: SortOrder
  }

  export type EventCodeMinOrderByAggregateInput = {
    id?: SortOrder
    organization_id?: SortOrder
    event_type_id?: SortOrder
    contract_type?: SortOrder
    code?: SortOrder
    created_at?: SortOrder
  }

  export type EventCodeSumOrderByAggregateInput = {
    code?: SortOrder
  }

  export type SalaryFloorOrganization_idPositionCompoundUniqueInput = {
    organization_id: string
    position: string
  }

  export type SalaryFloorCountOrderByAggregateInput = {
    id?: SortOrder
    organization_id?: SortOrder
    position?: SortOrder
    base_value?: SortOrder
    hour_value?: SortOrder
    floor_quantity?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type SalaryFloorAvgOrderByAggregateInput = {
    base_value?: SortOrder
    hour_value?: SortOrder
    floor_quantity?: SortOrder
  }

  export type SalaryFloorMaxOrderByAggregateInput = {
    id?: SortOrder
    organization_id?: SortOrder
    position?: SortOrder
    base_value?: SortOrder
    hour_value?: SortOrder
    floor_quantity?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type SalaryFloorMinOrderByAggregateInput = {
    id?: SortOrder
    organization_id?: SortOrder
    position?: SortOrder
    base_value?: SortOrder
    hour_value?: SortOrder
    floor_quantity?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type SalaryFloorSumOrderByAggregateInput = {
    base_value?: SortOrder
    hour_value?: SortOrder
    floor_quantity?: SortOrder
  }
  export type JsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type LogCountOrderByAggregateInput = {
    id?: SortOrder
    organization_id?: SortOrder
    user_id?: SortOrder
    action?: SortOrder
    details?: SortOrder
    created_at?: SortOrder
  }

  export type LogMaxOrderByAggregateInput = {
    id?: SortOrder
    organization_id?: SortOrder
    user_id?: SortOrder
    action?: SortOrder
    created_at?: SortOrder
  }

  export type LogMinOrderByAggregateInput = {
    id?: SortOrder
    organization_id?: SortOrder
    user_id?: SortOrder
    action?: SortOrder
    created_at?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type UnitCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<UnitCreateWithoutOrganizationInput, UnitUncheckedCreateWithoutOrganizationInput> | UnitCreateWithoutOrganizationInput[] | UnitUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: UnitCreateOrConnectWithoutOrganizationInput | UnitCreateOrConnectWithoutOrganizationInput[]
    createMany?: UnitCreateManyOrganizationInputEnvelope
    connect?: UnitWhereUniqueInput | UnitWhereUniqueInput[]
  }

  export type UserCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<UserCreateWithoutOrganizationInput, UserUncheckedCreateWithoutOrganizationInput> | UserCreateWithoutOrganizationInput[] | UserUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: UserCreateOrConnectWithoutOrganizationInput | UserCreateOrConnectWithoutOrganizationInput[]
    createMany?: UserCreateManyOrganizationInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type EmployeeCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<EmployeeCreateWithoutOrganizationInput, EmployeeUncheckedCreateWithoutOrganizationInput> | EmployeeCreateWithoutOrganizationInput[] | EmployeeUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: EmployeeCreateOrConnectWithoutOrganizationInput | EmployeeCreateOrConnectWithoutOrganizationInput[]
    createMany?: EmployeeCreateManyOrganizationInputEnvelope
    connect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
  }

  export type FrequencySheetCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<FrequencySheetCreateWithoutOrganizationInput, FrequencySheetUncheckedCreateWithoutOrganizationInput> | FrequencySheetCreateWithoutOrganizationInput[] | FrequencySheetUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: FrequencySheetCreateOrConnectWithoutOrganizationInput | FrequencySheetCreateOrConnectWithoutOrganizationInput[]
    createMany?: FrequencySheetCreateManyOrganizationInputEnvelope
    connect?: FrequencySheetWhereUniqueInput | FrequencySheetWhereUniqueInput[]
  }

  export type EventCodeCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<EventCodeCreateWithoutOrganizationInput, EventCodeUncheckedCreateWithoutOrganizationInput> | EventCodeCreateWithoutOrganizationInput[] | EventCodeUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: EventCodeCreateOrConnectWithoutOrganizationInput | EventCodeCreateOrConnectWithoutOrganizationInput[]
    createMany?: EventCodeCreateManyOrganizationInputEnvelope
    connect?: EventCodeWhereUniqueInput | EventCodeWhereUniqueInput[]
  }

  export type SalaryFloorCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<SalaryFloorCreateWithoutOrganizationInput, SalaryFloorUncheckedCreateWithoutOrganizationInput> | SalaryFloorCreateWithoutOrganizationInput[] | SalaryFloorUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: SalaryFloorCreateOrConnectWithoutOrganizationInput | SalaryFloorCreateOrConnectWithoutOrganizationInput[]
    createMany?: SalaryFloorCreateManyOrganizationInputEnvelope
    connect?: SalaryFloorWhereUniqueInput | SalaryFloorWhereUniqueInput[]
  }

  export type LogCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<LogCreateWithoutOrganizationInput, LogUncheckedCreateWithoutOrganizationInput> | LogCreateWithoutOrganizationInput[] | LogUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: LogCreateOrConnectWithoutOrganizationInput | LogCreateOrConnectWithoutOrganizationInput[]
    createMany?: LogCreateManyOrganizationInputEnvelope
    connect?: LogWhereUniqueInput | LogWhereUniqueInput[]
  }

  export type UnitUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<UnitCreateWithoutOrganizationInput, UnitUncheckedCreateWithoutOrganizationInput> | UnitCreateWithoutOrganizationInput[] | UnitUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: UnitCreateOrConnectWithoutOrganizationInput | UnitCreateOrConnectWithoutOrganizationInput[]
    createMany?: UnitCreateManyOrganizationInputEnvelope
    connect?: UnitWhereUniqueInput | UnitWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<UserCreateWithoutOrganizationInput, UserUncheckedCreateWithoutOrganizationInput> | UserCreateWithoutOrganizationInput[] | UserUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: UserCreateOrConnectWithoutOrganizationInput | UserCreateOrConnectWithoutOrganizationInput[]
    createMany?: UserCreateManyOrganizationInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type EmployeeUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<EmployeeCreateWithoutOrganizationInput, EmployeeUncheckedCreateWithoutOrganizationInput> | EmployeeCreateWithoutOrganizationInput[] | EmployeeUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: EmployeeCreateOrConnectWithoutOrganizationInput | EmployeeCreateOrConnectWithoutOrganizationInput[]
    createMany?: EmployeeCreateManyOrganizationInputEnvelope
    connect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
  }

  export type FrequencySheetUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<FrequencySheetCreateWithoutOrganizationInput, FrequencySheetUncheckedCreateWithoutOrganizationInput> | FrequencySheetCreateWithoutOrganizationInput[] | FrequencySheetUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: FrequencySheetCreateOrConnectWithoutOrganizationInput | FrequencySheetCreateOrConnectWithoutOrganizationInput[]
    createMany?: FrequencySheetCreateManyOrganizationInputEnvelope
    connect?: FrequencySheetWhereUniqueInput | FrequencySheetWhereUniqueInput[]
  }

  export type EventCodeUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<EventCodeCreateWithoutOrganizationInput, EventCodeUncheckedCreateWithoutOrganizationInput> | EventCodeCreateWithoutOrganizationInput[] | EventCodeUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: EventCodeCreateOrConnectWithoutOrganizationInput | EventCodeCreateOrConnectWithoutOrganizationInput[]
    createMany?: EventCodeCreateManyOrganizationInputEnvelope
    connect?: EventCodeWhereUniqueInput | EventCodeWhereUniqueInput[]
  }

  export type SalaryFloorUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<SalaryFloorCreateWithoutOrganizationInput, SalaryFloorUncheckedCreateWithoutOrganizationInput> | SalaryFloorCreateWithoutOrganizationInput[] | SalaryFloorUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: SalaryFloorCreateOrConnectWithoutOrganizationInput | SalaryFloorCreateOrConnectWithoutOrganizationInput[]
    createMany?: SalaryFloorCreateManyOrganizationInputEnvelope
    connect?: SalaryFloorWhereUniqueInput | SalaryFloorWhereUniqueInput[]
  }

  export type LogUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<LogCreateWithoutOrganizationInput, LogUncheckedCreateWithoutOrganizationInput> | LogCreateWithoutOrganizationInput[] | LogUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: LogCreateOrConnectWithoutOrganizationInput | LogCreateOrConnectWithoutOrganizationInput[]
    createMany?: LogCreateManyOrganizationInputEnvelope
    connect?: LogWhereUniqueInput | LogWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UnitUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<UnitCreateWithoutOrganizationInput, UnitUncheckedCreateWithoutOrganizationInput> | UnitCreateWithoutOrganizationInput[] | UnitUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: UnitCreateOrConnectWithoutOrganizationInput | UnitCreateOrConnectWithoutOrganizationInput[]
    upsert?: UnitUpsertWithWhereUniqueWithoutOrganizationInput | UnitUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: UnitCreateManyOrganizationInputEnvelope
    set?: UnitWhereUniqueInput | UnitWhereUniqueInput[]
    disconnect?: UnitWhereUniqueInput | UnitWhereUniqueInput[]
    delete?: UnitWhereUniqueInput | UnitWhereUniqueInput[]
    connect?: UnitWhereUniqueInput | UnitWhereUniqueInput[]
    update?: UnitUpdateWithWhereUniqueWithoutOrganizationInput | UnitUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: UnitUpdateManyWithWhereWithoutOrganizationInput | UnitUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: UnitScalarWhereInput | UnitScalarWhereInput[]
  }

  export type UserUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<UserCreateWithoutOrganizationInput, UserUncheckedCreateWithoutOrganizationInput> | UserCreateWithoutOrganizationInput[] | UserUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: UserCreateOrConnectWithoutOrganizationInput | UserCreateOrConnectWithoutOrganizationInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutOrganizationInput | UserUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: UserCreateManyOrganizationInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutOrganizationInput | UserUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: UserUpdateManyWithWhereWithoutOrganizationInput | UserUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type EmployeeUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<EmployeeCreateWithoutOrganizationInput, EmployeeUncheckedCreateWithoutOrganizationInput> | EmployeeCreateWithoutOrganizationInput[] | EmployeeUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: EmployeeCreateOrConnectWithoutOrganizationInput | EmployeeCreateOrConnectWithoutOrganizationInput[]
    upsert?: EmployeeUpsertWithWhereUniqueWithoutOrganizationInput | EmployeeUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: EmployeeCreateManyOrganizationInputEnvelope
    set?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    disconnect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    delete?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    connect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    update?: EmployeeUpdateWithWhereUniqueWithoutOrganizationInput | EmployeeUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: EmployeeUpdateManyWithWhereWithoutOrganizationInput | EmployeeUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: EmployeeScalarWhereInput | EmployeeScalarWhereInput[]
  }

  export type FrequencySheetUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<FrequencySheetCreateWithoutOrganizationInput, FrequencySheetUncheckedCreateWithoutOrganizationInput> | FrequencySheetCreateWithoutOrganizationInput[] | FrequencySheetUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: FrequencySheetCreateOrConnectWithoutOrganizationInput | FrequencySheetCreateOrConnectWithoutOrganizationInput[]
    upsert?: FrequencySheetUpsertWithWhereUniqueWithoutOrganizationInput | FrequencySheetUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: FrequencySheetCreateManyOrganizationInputEnvelope
    set?: FrequencySheetWhereUniqueInput | FrequencySheetWhereUniqueInput[]
    disconnect?: FrequencySheetWhereUniqueInput | FrequencySheetWhereUniqueInput[]
    delete?: FrequencySheetWhereUniqueInput | FrequencySheetWhereUniqueInput[]
    connect?: FrequencySheetWhereUniqueInput | FrequencySheetWhereUniqueInput[]
    update?: FrequencySheetUpdateWithWhereUniqueWithoutOrganizationInput | FrequencySheetUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: FrequencySheetUpdateManyWithWhereWithoutOrganizationInput | FrequencySheetUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: FrequencySheetScalarWhereInput | FrequencySheetScalarWhereInput[]
  }

  export type EventCodeUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<EventCodeCreateWithoutOrganizationInput, EventCodeUncheckedCreateWithoutOrganizationInput> | EventCodeCreateWithoutOrganizationInput[] | EventCodeUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: EventCodeCreateOrConnectWithoutOrganizationInput | EventCodeCreateOrConnectWithoutOrganizationInput[]
    upsert?: EventCodeUpsertWithWhereUniqueWithoutOrganizationInput | EventCodeUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: EventCodeCreateManyOrganizationInputEnvelope
    set?: EventCodeWhereUniqueInput | EventCodeWhereUniqueInput[]
    disconnect?: EventCodeWhereUniqueInput | EventCodeWhereUniqueInput[]
    delete?: EventCodeWhereUniqueInput | EventCodeWhereUniqueInput[]
    connect?: EventCodeWhereUniqueInput | EventCodeWhereUniqueInput[]
    update?: EventCodeUpdateWithWhereUniqueWithoutOrganizationInput | EventCodeUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: EventCodeUpdateManyWithWhereWithoutOrganizationInput | EventCodeUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: EventCodeScalarWhereInput | EventCodeScalarWhereInput[]
  }

  export type SalaryFloorUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<SalaryFloorCreateWithoutOrganizationInput, SalaryFloorUncheckedCreateWithoutOrganizationInput> | SalaryFloorCreateWithoutOrganizationInput[] | SalaryFloorUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: SalaryFloorCreateOrConnectWithoutOrganizationInput | SalaryFloorCreateOrConnectWithoutOrganizationInput[]
    upsert?: SalaryFloorUpsertWithWhereUniqueWithoutOrganizationInput | SalaryFloorUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: SalaryFloorCreateManyOrganizationInputEnvelope
    set?: SalaryFloorWhereUniqueInput | SalaryFloorWhereUniqueInput[]
    disconnect?: SalaryFloorWhereUniqueInput | SalaryFloorWhereUniqueInput[]
    delete?: SalaryFloorWhereUniqueInput | SalaryFloorWhereUniqueInput[]
    connect?: SalaryFloorWhereUniqueInput | SalaryFloorWhereUniqueInput[]
    update?: SalaryFloorUpdateWithWhereUniqueWithoutOrganizationInput | SalaryFloorUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: SalaryFloorUpdateManyWithWhereWithoutOrganizationInput | SalaryFloorUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: SalaryFloorScalarWhereInput | SalaryFloorScalarWhereInput[]
  }

  export type LogUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<LogCreateWithoutOrganizationInput, LogUncheckedCreateWithoutOrganizationInput> | LogCreateWithoutOrganizationInput[] | LogUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: LogCreateOrConnectWithoutOrganizationInput | LogCreateOrConnectWithoutOrganizationInput[]
    upsert?: LogUpsertWithWhereUniqueWithoutOrganizationInput | LogUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: LogCreateManyOrganizationInputEnvelope
    set?: LogWhereUniqueInput | LogWhereUniqueInput[]
    disconnect?: LogWhereUniqueInput | LogWhereUniqueInput[]
    delete?: LogWhereUniqueInput | LogWhereUniqueInput[]
    connect?: LogWhereUniqueInput | LogWhereUniqueInput[]
    update?: LogUpdateWithWhereUniqueWithoutOrganizationInput | LogUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: LogUpdateManyWithWhereWithoutOrganizationInput | LogUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: LogScalarWhereInput | LogScalarWhereInput[]
  }

  export type UnitUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<UnitCreateWithoutOrganizationInput, UnitUncheckedCreateWithoutOrganizationInput> | UnitCreateWithoutOrganizationInput[] | UnitUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: UnitCreateOrConnectWithoutOrganizationInput | UnitCreateOrConnectWithoutOrganizationInput[]
    upsert?: UnitUpsertWithWhereUniqueWithoutOrganizationInput | UnitUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: UnitCreateManyOrganizationInputEnvelope
    set?: UnitWhereUniqueInput | UnitWhereUniqueInput[]
    disconnect?: UnitWhereUniqueInput | UnitWhereUniqueInput[]
    delete?: UnitWhereUniqueInput | UnitWhereUniqueInput[]
    connect?: UnitWhereUniqueInput | UnitWhereUniqueInput[]
    update?: UnitUpdateWithWhereUniqueWithoutOrganizationInput | UnitUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: UnitUpdateManyWithWhereWithoutOrganizationInput | UnitUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: UnitScalarWhereInput | UnitScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<UserCreateWithoutOrganizationInput, UserUncheckedCreateWithoutOrganizationInput> | UserCreateWithoutOrganizationInput[] | UserUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: UserCreateOrConnectWithoutOrganizationInput | UserCreateOrConnectWithoutOrganizationInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutOrganizationInput | UserUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: UserCreateManyOrganizationInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutOrganizationInput | UserUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: UserUpdateManyWithWhereWithoutOrganizationInput | UserUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type EmployeeUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<EmployeeCreateWithoutOrganizationInput, EmployeeUncheckedCreateWithoutOrganizationInput> | EmployeeCreateWithoutOrganizationInput[] | EmployeeUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: EmployeeCreateOrConnectWithoutOrganizationInput | EmployeeCreateOrConnectWithoutOrganizationInput[]
    upsert?: EmployeeUpsertWithWhereUniqueWithoutOrganizationInput | EmployeeUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: EmployeeCreateManyOrganizationInputEnvelope
    set?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    disconnect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    delete?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    connect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    update?: EmployeeUpdateWithWhereUniqueWithoutOrganizationInput | EmployeeUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: EmployeeUpdateManyWithWhereWithoutOrganizationInput | EmployeeUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: EmployeeScalarWhereInput | EmployeeScalarWhereInput[]
  }

  export type FrequencySheetUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<FrequencySheetCreateWithoutOrganizationInput, FrequencySheetUncheckedCreateWithoutOrganizationInput> | FrequencySheetCreateWithoutOrganizationInput[] | FrequencySheetUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: FrequencySheetCreateOrConnectWithoutOrganizationInput | FrequencySheetCreateOrConnectWithoutOrganizationInput[]
    upsert?: FrequencySheetUpsertWithWhereUniqueWithoutOrganizationInput | FrequencySheetUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: FrequencySheetCreateManyOrganizationInputEnvelope
    set?: FrequencySheetWhereUniqueInput | FrequencySheetWhereUniqueInput[]
    disconnect?: FrequencySheetWhereUniqueInput | FrequencySheetWhereUniqueInput[]
    delete?: FrequencySheetWhereUniqueInput | FrequencySheetWhereUniqueInput[]
    connect?: FrequencySheetWhereUniqueInput | FrequencySheetWhereUniqueInput[]
    update?: FrequencySheetUpdateWithWhereUniqueWithoutOrganizationInput | FrequencySheetUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: FrequencySheetUpdateManyWithWhereWithoutOrganizationInput | FrequencySheetUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: FrequencySheetScalarWhereInput | FrequencySheetScalarWhereInput[]
  }

  export type EventCodeUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<EventCodeCreateWithoutOrganizationInput, EventCodeUncheckedCreateWithoutOrganizationInput> | EventCodeCreateWithoutOrganizationInput[] | EventCodeUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: EventCodeCreateOrConnectWithoutOrganizationInput | EventCodeCreateOrConnectWithoutOrganizationInput[]
    upsert?: EventCodeUpsertWithWhereUniqueWithoutOrganizationInput | EventCodeUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: EventCodeCreateManyOrganizationInputEnvelope
    set?: EventCodeWhereUniqueInput | EventCodeWhereUniqueInput[]
    disconnect?: EventCodeWhereUniqueInput | EventCodeWhereUniqueInput[]
    delete?: EventCodeWhereUniqueInput | EventCodeWhereUniqueInput[]
    connect?: EventCodeWhereUniqueInput | EventCodeWhereUniqueInput[]
    update?: EventCodeUpdateWithWhereUniqueWithoutOrganizationInput | EventCodeUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: EventCodeUpdateManyWithWhereWithoutOrganizationInput | EventCodeUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: EventCodeScalarWhereInput | EventCodeScalarWhereInput[]
  }

  export type SalaryFloorUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<SalaryFloorCreateWithoutOrganizationInput, SalaryFloorUncheckedCreateWithoutOrganizationInput> | SalaryFloorCreateWithoutOrganizationInput[] | SalaryFloorUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: SalaryFloorCreateOrConnectWithoutOrganizationInput | SalaryFloorCreateOrConnectWithoutOrganizationInput[]
    upsert?: SalaryFloorUpsertWithWhereUniqueWithoutOrganizationInput | SalaryFloorUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: SalaryFloorCreateManyOrganizationInputEnvelope
    set?: SalaryFloorWhereUniqueInput | SalaryFloorWhereUniqueInput[]
    disconnect?: SalaryFloorWhereUniqueInput | SalaryFloorWhereUniqueInput[]
    delete?: SalaryFloorWhereUniqueInput | SalaryFloorWhereUniqueInput[]
    connect?: SalaryFloorWhereUniqueInput | SalaryFloorWhereUniqueInput[]
    update?: SalaryFloorUpdateWithWhereUniqueWithoutOrganizationInput | SalaryFloorUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: SalaryFloorUpdateManyWithWhereWithoutOrganizationInput | SalaryFloorUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: SalaryFloorScalarWhereInput | SalaryFloorScalarWhereInput[]
  }

  export type LogUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<LogCreateWithoutOrganizationInput, LogUncheckedCreateWithoutOrganizationInput> | LogCreateWithoutOrganizationInput[] | LogUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: LogCreateOrConnectWithoutOrganizationInput | LogCreateOrConnectWithoutOrganizationInput[]
    upsert?: LogUpsertWithWhereUniqueWithoutOrganizationInput | LogUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: LogCreateManyOrganizationInputEnvelope
    set?: LogWhereUniqueInput | LogWhereUniqueInput[]
    disconnect?: LogWhereUniqueInput | LogWhereUniqueInput[]
    delete?: LogWhereUniqueInput | LogWhereUniqueInput[]
    connect?: LogWhereUniqueInput | LogWhereUniqueInput[]
    update?: LogUpdateWithWhereUniqueWithoutOrganizationInput | LogUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: LogUpdateManyWithWhereWithoutOrganizationInput | LogUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: LogScalarWhereInput | LogScalarWhereInput[]
  }

  export type OrganizationCreateNestedOneWithoutUnitsInput = {
    create?: XOR<OrganizationCreateWithoutUnitsInput, OrganizationUncheckedCreateWithoutUnitsInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutUnitsInput
    connect?: OrganizationWhereUniqueInput
  }

  export type EmployeeCreateNestedManyWithoutUnitInput = {
    create?: XOR<EmployeeCreateWithoutUnitInput, EmployeeUncheckedCreateWithoutUnitInput> | EmployeeCreateWithoutUnitInput[] | EmployeeUncheckedCreateWithoutUnitInput[]
    connectOrCreate?: EmployeeCreateOrConnectWithoutUnitInput | EmployeeCreateOrConnectWithoutUnitInput[]
    createMany?: EmployeeCreateManyUnitInputEnvelope
    connect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
  }

  export type UserCreateNestedManyWithoutUnitInput = {
    create?: XOR<UserCreateWithoutUnitInput, UserUncheckedCreateWithoutUnitInput> | UserCreateWithoutUnitInput[] | UserUncheckedCreateWithoutUnitInput[]
    connectOrCreate?: UserCreateOrConnectWithoutUnitInput | UserCreateOrConnectWithoutUnitInput[]
    createMany?: UserCreateManyUnitInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type FrequencySheetCreateNestedManyWithoutUnitInput = {
    create?: XOR<FrequencySheetCreateWithoutUnitInput, FrequencySheetUncheckedCreateWithoutUnitInput> | FrequencySheetCreateWithoutUnitInput[] | FrequencySheetUncheckedCreateWithoutUnitInput[]
    connectOrCreate?: FrequencySheetCreateOrConnectWithoutUnitInput | FrequencySheetCreateOrConnectWithoutUnitInput[]
    createMany?: FrequencySheetCreateManyUnitInputEnvelope
    connect?: FrequencySheetWhereUniqueInput | FrequencySheetWhereUniqueInput[]
  }

  export type EmployeeUncheckedCreateNestedManyWithoutUnitInput = {
    create?: XOR<EmployeeCreateWithoutUnitInput, EmployeeUncheckedCreateWithoutUnitInput> | EmployeeCreateWithoutUnitInput[] | EmployeeUncheckedCreateWithoutUnitInput[]
    connectOrCreate?: EmployeeCreateOrConnectWithoutUnitInput | EmployeeCreateOrConnectWithoutUnitInput[]
    createMany?: EmployeeCreateManyUnitInputEnvelope
    connect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutUnitInput = {
    create?: XOR<UserCreateWithoutUnitInput, UserUncheckedCreateWithoutUnitInput> | UserCreateWithoutUnitInput[] | UserUncheckedCreateWithoutUnitInput[]
    connectOrCreate?: UserCreateOrConnectWithoutUnitInput | UserCreateOrConnectWithoutUnitInput[]
    createMany?: UserCreateManyUnitInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type FrequencySheetUncheckedCreateNestedManyWithoutUnitInput = {
    create?: XOR<FrequencySheetCreateWithoutUnitInput, FrequencySheetUncheckedCreateWithoutUnitInput> | FrequencySheetCreateWithoutUnitInput[] | FrequencySheetUncheckedCreateWithoutUnitInput[]
    connectOrCreate?: FrequencySheetCreateOrConnectWithoutUnitInput | FrequencySheetCreateOrConnectWithoutUnitInput[]
    createMany?: FrequencySheetCreateManyUnitInputEnvelope
    connect?: FrequencySheetWhereUniqueInput | FrequencySheetWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type OrganizationUpdateOneRequiredWithoutUnitsNestedInput = {
    create?: XOR<OrganizationCreateWithoutUnitsInput, OrganizationUncheckedCreateWithoutUnitsInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutUnitsInput
    upsert?: OrganizationUpsertWithoutUnitsInput
    connect?: OrganizationWhereUniqueInput
    update?: XOR<XOR<OrganizationUpdateToOneWithWhereWithoutUnitsInput, OrganizationUpdateWithoutUnitsInput>, OrganizationUncheckedUpdateWithoutUnitsInput>
  }

  export type EmployeeUpdateManyWithoutUnitNestedInput = {
    create?: XOR<EmployeeCreateWithoutUnitInput, EmployeeUncheckedCreateWithoutUnitInput> | EmployeeCreateWithoutUnitInput[] | EmployeeUncheckedCreateWithoutUnitInput[]
    connectOrCreate?: EmployeeCreateOrConnectWithoutUnitInput | EmployeeCreateOrConnectWithoutUnitInput[]
    upsert?: EmployeeUpsertWithWhereUniqueWithoutUnitInput | EmployeeUpsertWithWhereUniqueWithoutUnitInput[]
    createMany?: EmployeeCreateManyUnitInputEnvelope
    set?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    disconnect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    delete?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    connect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    update?: EmployeeUpdateWithWhereUniqueWithoutUnitInput | EmployeeUpdateWithWhereUniqueWithoutUnitInput[]
    updateMany?: EmployeeUpdateManyWithWhereWithoutUnitInput | EmployeeUpdateManyWithWhereWithoutUnitInput[]
    deleteMany?: EmployeeScalarWhereInput | EmployeeScalarWhereInput[]
  }

  export type UserUpdateManyWithoutUnitNestedInput = {
    create?: XOR<UserCreateWithoutUnitInput, UserUncheckedCreateWithoutUnitInput> | UserCreateWithoutUnitInput[] | UserUncheckedCreateWithoutUnitInput[]
    connectOrCreate?: UserCreateOrConnectWithoutUnitInput | UserCreateOrConnectWithoutUnitInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutUnitInput | UserUpsertWithWhereUniqueWithoutUnitInput[]
    createMany?: UserCreateManyUnitInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutUnitInput | UserUpdateWithWhereUniqueWithoutUnitInput[]
    updateMany?: UserUpdateManyWithWhereWithoutUnitInput | UserUpdateManyWithWhereWithoutUnitInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type FrequencySheetUpdateManyWithoutUnitNestedInput = {
    create?: XOR<FrequencySheetCreateWithoutUnitInput, FrequencySheetUncheckedCreateWithoutUnitInput> | FrequencySheetCreateWithoutUnitInput[] | FrequencySheetUncheckedCreateWithoutUnitInput[]
    connectOrCreate?: FrequencySheetCreateOrConnectWithoutUnitInput | FrequencySheetCreateOrConnectWithoutUnitInput[]
    upsert?: FrequencySheetUpsertWithWhereUniqueWithoutUnitInput | FrequencySheetUpsertWithWhereUniqueWithoutUnitInput[]
    createMany?: FrequencySheetCreateManyUnitInputEnvelope
    set?: FrequencySheetWhereUniqueInput | FrequencySheetWhereUniqueInput[]
    disconnect?: FrequencySheetWhereUniqueInput | FrequencySheetWhereUniqueInput[]
    delete?: FrequencySheetWhereUniqueInput | FrequencySheetWhereUniqueInput[]
    connect?: FrequencySheetWhereUniqueInput | FrequencySheetWhereUniqueInput[]
    update?: FrequencySheetUpdateWithWhereUniqueWithoutUnitInput | FrequencySheetUpdateWithWhereUniqueWithoutUnitInput[]
    updateMany?: FrequencySheetUpdateManyWithWhereWithoutUnitInput | FrequencySheetUpdateManyWithWhereWithoutUnitInput[]
    deleteMany?: FrequencySheetScalarWhereInput | FrequencySheetScalarWhereInput[]
  }

  export type EmployeeUncheckedUpdateManyWithoutUnitNestedInput = {
    create?: XOR<EmployeeCreateWithoutUnitInput, EmployeeUncheckedCreateWithoutUnitInput> | EmployeeCreateWithoutUnitInput[] | EmployeeUncheckedCreateWithoutUnitInput[]
    connectOrCreate?: EmployeeCreateOrConnectWithoutUnitInput | EmployeeCreateOrConnectWithoutUnitInput[]
    upsert?: EmployeeUpsertWithWhereUniqueWithoutUnitInput | EmployeeUpsertWithWhereUniqueWithoutUnitInput[]
    createMany?: EmployeeCreateManyUnitInputEnvelope
    set?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    disconnect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    delete?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    connect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    update?: EmployeeUpdateWithWhereUniqueWithoutUnitInput | EmployeeUpdateWithWhereUniqueWithoutUnitInput[]
    updateMany?: EmployeeUpdateManyWithWhereWithoutUnitInput | EmployeeUpdateManyWithWhereWithoutUnitInput[]
    deleteMany?: EmployeeScalarWhereInput | EmployeeScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutUnitNestedInput = {
    create?: XOR<UserCreateWithoutUnitInput, UserUncheckedCreateWithoutUnitInput> | UserCreateWithoutUnitInput[] | UserUncheckedCreateWithoutUnitInput[]
    connectOrCreate?: UserCreateOrConnectWithoutUnitInput | UserCreateOrConnectWithoutUnitInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutUnitInput | UserUpsertWithWhereUniqueWithoutUnitInput[]
    createMany?: UserCreateManyUnitInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutUnitInput | UserUpdateWithWhereUniqueWithoutUnitInput[]
    updateMany?: UserUpdateManyWithWhereWithoutUnitInput | UserUpdateManyWithWhereWithoutUnitInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type FrequencySheetUncheckedUpdateManyWithoutUnitNestedInput = {
    create?: XOR<FrequencySheetCreateWithoutUnitInput, FrequencySheetUncheckedCreateWithoutUnitInput> | FrequencySheetCreateWithoutUnitInput[] | FrequencySheetUncheckedCreateWithoutUnitInput[]
    connectOrCreate?: FrequencySheetCreateOrConnectWithoutUnitInput | FrequencySheetCreateOrConnectWithoutUnitInput[]
    upsert?: FrequencySheetUpsertWithWhereUniqueWithoutUnitInput | FrequencySheetUpsertWithWhereUniqueWithoutUnitInput[]
    createMany?: FrequencySheetCreateManyUnitInputEnvelope
    set?: FrequencySheetWhereUniqueInput | FrequencySheetWhereUniqueInput[]
    disconnect?: FrequencySheetWhereUniqueInput | FrequencySheetWhereUniqueInput[]
    delete?: FrequencySheetWhereUniqueInput | FrequencySheetWhereUniqueInput[]
    connect?: FrequencySheetWhereUniqueInput | FrequencySheetWhereUniqueInput[]
    update?: FrequencySheetUpdateWithWhereUniqueWithoutUnitInput | FrequencySheetUpdateWithWhereUniqueWithoutUnitInput[]
    updateMany?: FrequencySheetUpdateManyWithWhereWithoutUnitInput | FrequencySheetUpdateManyWithWhereWithoutUnitInput[]
    deleteMany?: FrequencySheetScalarWhereInput | FrequencySheetScalarWhereInput[]
  }

  export type OrganizationCreateNestedOneWithoutUsersInput = {
    create?: XOR<OrganizationCreateWithoutUsersInput, OrganizationUncheckedCreateWithoutUsersInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutUsersInput
    connect?: OrganizationWhereUniqueInput
  }

  export type UnitCreateNestedOneWithoutUsersInput = {
    create?: XOR<UnitCreateWithoutUsersInput, UnitUncheckedCreateWithoutUsersInput>
    connectOrCreate?: UnitCreateOrConnectWithoutUsersInput
    connect?: UnitWhereUniqueInput
  }

  export type FrequencySheetCreateNestedManyWithoutSubmitterInput = {
    create?: XOR<FrequencySheetCreateWithoutSubmitterInput, FrequencySheetUncheckedCreateWithoutSubmitterInput> | FrequencySheetCreateWithoutSubmitterInput[] | FrequencySheetUncheckedCreateWithoutSubmitterInput[]
    connectOrCreate?: FrequencySheetCreateOrConnectWithoutSubmitterInput | FrequencySheetCreateOrConnectWithoutSubmitterInput[]
    createMany?: FrequencySheetCreateManySubmitterInputEnvelope
    connect?: FrequencySheetWhereUniqueInput | FrequencySheetWhereUniqueInput[]
  }

  export type LogCreateNestedManyWithoutUserInput = {
    create?: XOR<LogCreateWithoutUserInput, LogUncheckedCreateWithoutUserInput> | LogCreateWithoutUserInput[] | LogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LogCreateOrConnectWithoutUserInput | LogCreateOrConnectWithoutUserInput[]
    createMany?: LogCreateManyUserInputEnvelope
    connect?: LogWhereUniqueInput | LogWhereUniqueInput[]
  }

  export type FrequencySheetUncheckedCreateNestedManyWithoutSubmitterInput = {
    create?: XOR<FrequencySheetCreateWithoutSubmitterInput, FrequencySheetUncheckedCreateWithoutSubmitterInput> | FrequencySheetCreateWithoutSubmitterInput[] | FrequencySheetUncheckedCreateWithoutSubmitterInput[]
    connectOrCreate?: FrequencySheetCreateOrConnectWithoutSubmitterInput | FrequencySheetCreateOrConnectWithoutSubmitterInput[]
    createMany?: FrequencySheetCreateManySubmitterInputEnvelope
    connect?: FrequencySheetWhereUniqueInput | FrequencySheetWhereUniqueInput[]
  }

  export type LogUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<LogCreateWithoutUserInput, LogUncheckedCreateWithoutUserInput> | LogCreateWithoutUserInput[] | LogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LogCreateOrConnectWithoutUserInput | LogCreateOrConnectWithoutUserInput[]
    createMany?: LogCreateManyUserInputEnvelope
    connect?: LogWhereUniqueInput | LogWhereUniqueInput[]
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type OrganizationUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<OrganizationCreateWithoutUsersInput, OrganizationUncheckedCreateWithoutUsersInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutUsersInput
    upsert?: OrganizationUpsertWithoutUsersInput
    connect?: OrganizationWhereUniqueInput
    update?: XOR<XOR<OrganizationUpdateToOneWithWhereWithoutUsersInput, OrganizationUpdateWithoutUsersInput>, OrganizationUncheckedUpdateWithoutUsersInput>
  }

  export type UnitUpdateOneWithoutUsersNestedInput = {
    create?: XOR<UnitCreateWithoutUsersInput, UnitUncheckedCreateWithoutUsersInput>
    connectOrCreate?: UnitCreateOrConnectWithoutUsersInput
    upsert?: UnitUpsertWithoutUsersInput
    disconnect?: UnitWhereInput | boolean
    delete?: UnitWhereInput | boolean
    connect?: UnitWhereUniqueInput
    update?: XOR<XOR<UnitUpdateToOneWithWhereWithoutUsersInput, UnitUpdateWithoutUsersInput>, UnitUncheckedUpdateWithoutUsersInput>
  }

  export type FrequencySheetUpdateManyWithoutSubmitterNestedInput = {
    create?: XOR<FrequencySheetCreateWithoutSubmitterInput, FrequencySheetUncheckedCreateWithoutSubmitterInput> | FrequencySheetCreateWithoutSubmitterInput[] | FrequencySheetUncheckedCreateWithoutSubmitterInput[]
    connectOrCreate?: FrequencySheetCreateOrConnectWithoutSubmitterInput | FrequencySheetCreateOrConnectWithoutSubmitterInput[]
    upsert?: FrequencySheetUpsertWithWhereUniqueWithoutSubmitterInput | FrequencySheetUpsertWithWhereUniqueWithoutSubmitterInput[]
    createMany?: FrequencySheetCreateManySubmitterInputEnvelope
    set?: FrequencySheetWhereUniqueInput | FrequencySheetWhereUniqueInput[]
    disconnect?: FrequencySheetWhereUniqueInput | FrequencySheetWhereUniqueInput[]
    delete?: FrequencySheetWhereUniqueInput | FrequencySheetWhereUniqueInput[]
    connect?: FrequencySheetWhereUniqueInput | FrequencySheetWhereUniqueInput[]
    update?: FrequencySheetUpdateWithWhereUniqueWithoutSubmitterInput | FrequencySheetUpdateWithWhereUniqueWithoutSubmitterInput[]
    updateMany?: FrequencySheetUpdateManyWithWhereWithoutSubmitterInput | FrequencySheetUpdateManyWithWhereWithoutSubmitterInput[]
    deleteMany?: FrequencySheetScalarWhereInput | FrequencySheetScalarWhereInput[]
  }

  export type LogUpdateManyWithoutUserNestedInput = {
    create?: XOR<LogCreateWithoutUserInput, LogUncheckedCreateWithoutUserInput> | LogCreateWithoutUserInput[] | LogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LogCreateOrConnectWithoutUserInput | LogCreateOrConnectWithoutUserInput[]
    upsert?: LogUpsertWithWhereUniqueWithoutUserInput | LogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LogCreateManyUserInputEnvelope
    set?: LogWhereUniqueInput | LogWhereUniqueInput[]
    disconnect?: LogWhereUniqueInput | LogWhereUniqueInput[]
    delete?: LogWhereUniqueInput | LogWhereUniqueInput[]
    connect?: LogWhereUniqueInput | LogWhereUniqueInput[]
    update?: LogUpdateWithWhereUniqueWithoutUserInput | LogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LogUpdateManyWithWhereWithoutUserInput | LogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LogScalarWhereInput | LogScalarWhereInput[]
  }

  export type FrequencySheetUncheckedUpdateManyWithoutSubmitterNestedInput = {
    create?: XOR<FrequencySheetCreateWithoutSubmitterInput, FrequencySheetUncheckedCreateWithoutSubmitterInput> | FrequencySheetCreateWithoutSubmitterInput[] | FrequencySheetUncheckedCreateWithoutSubmitterInput[]
    connectOrCreate?: FrequencySheetCreateOrConnectWithoutSubmitterInput | FrequencySheetCreateOrConnectWithoutSubmitterInput[]
    upsert?: FrequencySheetUpsertWithWhereUniqueWithoutSubmitterInput | FrequencySheetUpsertWithWhereUniqueWithoutSubmitterInput[]
    createMany?: FrequencySheetCreateManySubmitterInputEnvelope
    set?: FrequencySheetWhereUniqueInput | FrequencySheetWhereUniqueInput[]
    disconnect?: FrequencySheetWhereUniqueInput | FrequencySheetWhereUniqueInput[]
    delete?: FrequencySheetWhereUniqueInput | FrequencySheetWhereUniqueInput[]
    connect?: FrequencySheetWhereUniqueInput | FrequencySheetWhereUniqueInput[]
    update?: FrequencySheetUpdateWithWhereUniqueWithoutSubmitterInput | FrequencySheetUpdateWithWhereUniqueWithoutSubmitterInput[]
    updateMany?: FrequencySheetUpdateManyWithWhereWithoutSubmitterInput | FrequencySheetUpdateManyWithWhereWithoutSubmitterInput[]
    deleteMany?: FrequencySheetScalarWhereInput | FrequencySheetScalarWhereInput[]
  }

  export type LogUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<LogCreateWithoutUserInput, LogUncheckedCreateWithoutUserInput> | LogCreateWithoutUserInput[] | LogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LogCreateOrConnectWithoutUserInput | LogCreateOrConnectWithoutUserInput[]
    upsert?: LogUpsertWithWhereUniqueWithoutUserInput | LogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LogCreateManyUserInputEnvelope
    set?: LogWhereUniqueInput | LogWhereUniqueInput[]
    disconnect?: LogWhereUniqueInput | LogWhereUniqueInput[]
    delete?: LogWhereUniqueInput | LogWhereUniqueInput[]
    connect?: LogWhereUniqueInput | LogWhereUniqueInput[]
    update?: LogUpdateWithWhereUniqueWithoutUserInput | LogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LogUpdateManyWithWhereWithoutUserInput | LogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LogScalarWhereInput | LogScalarWhereInput[]
  }

  export type OrganizationCreateNestedOneWithoutEmployeesInput = {
    create?: XOR<OrganizationCreateWithoutEmployeesInput, OrganizationUncheckedCreateWithoutEmployeesInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutEmployeesInput
    connect?: OrganizationWhereUniqueInput
  }

  export type UnitCreateNestedOneWithoutEmployeesInput = {
    create?: XOR<UnitCreateWithoutEmployeesInput, UnitUncheckedCreateWithoutEmployeesInput>
    connectOrCreate?: UnitCreateOrConnectWithoutEmployeesInput
    connect?: UnitWhereUniqueInput
  }

  export type FrequencyEntryCreateNestedManyWithoutEmployeeInput = {
    create?: XOR<FrequencyEntryCreateWithoutEmployeeInput, FrequencyEntryUncheckedCreateWithoutEmployeeInput> | FrequencyEntryCreateWithoutEmployeeInput[] | FrequencyEntryUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: FrequencyEntryCreateOrConnectWithoutEmployeeInput | FrequencyEntryCreateOrConnectWithoutEmployeeInput[]
    createMany?: FrequencyEntryCreateManyEmployeeInputEnvelope
    connect?: FrequencyEntryWhereUniqueInput | FrequencyEntryWhereUniqueInput[]
  }

  export type FrequencyEntryUncheckedCreateNestedManyWithoutEmployeeInput = {
    create?: XOR<FrequencyEntryCreateWithoutEmployeeInput, FrequencyEntryUncheckedCreateWithoutEmployeeInput> | FrequencyEntryCreateWithoutEmployeeInput[] | FrequencyEntryUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: FrequencyEntryCreateOrConnectWithoutEmployeeInput | FrequencyEntryCreateOrConnectWithoutEmployeeInput[]
    createMany?: FrequencyEntryCreateManyEmployeeInputEnvelope
    connect?: FrequencyEntryWhereUniqueInput | FrequencyEntryWhereUniqueInput[]
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type OrganizationUpdateOneRequiredWithoutEmployeesNestedInput = {
    create?: XOR<OrganizationCreateWithoutEmployeesInput, OrganizationUncheckedCreateWithoutEmployeesInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutEmployeesInput
    upsert?: OrganizationUpsertWithoutEmployeesInput
    connect?: OrganizationWhereUniqueInput
    update?: XOR<XOR<OrganizationUpdateToOneWithWhereWithoutEmployeesInput, OrganizationUpdateWithoutEmployeesInput>, OrganizationUncheckedUpdateWithoutEmployeesInput>
  }

  export type UnitUpdateOneRequiredWithoutEmployeesNestedInput = {
    create?: XOR<UnitCreateWithoutEmployeesInput, UnitUncheckedCreateWithoutEmployeesInput>
    connectOrCreate?: UnitCreateOrConnectWithoutEmployeesInput
    upsert?: UnitUpsertWithoutEmployeesInput
    connect?: UnitWhereUniqueInput
    update?: XOR<XOR<UnitUpdateToOneWithWhereWithoutEmployeesInput, UnitUpdateWithoutEmployeesInput>, UnitUncheckedUpdateWithoutEmployeesInput>
  }

  export type FrequencyEntryUpdateManyWithoutEmployeeNestedInput = {
    create?: XOR<FrequencyEntryCreateWithoutEmployeeInput, FrequencyEntryUncheckedCreateWithoutEmployeeInput> | FrequencyEntryCreateWithoutEmployeeInput[] | FrequencyEntryUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: FrequencyEntryCreateOrConnectWithoutEmployeeInput | FrequencyEntryCreateOrConnectWithoutEmployeeInput[]
    upsert?: FrequencyEntryUpsertWithWhereUniqueWithoutEmployeeInput | FrequencyEntryUpsertWithWhereUniqueWithoutEmployeeInput[]
    createMany?: FrequencyEntryCreateManyEmployeeInputEnvelope
    set?: FrequencyEntryWhereUniqueInput | FrequencyEntryWhereUniqueInput[]
    disconnect?: FrequencyEntryWhereUniqueInput | FrequencyEntryWhereUniqueInput[]
    delete?: FrequencyEntryWhereUniqueInput | FrequencyEntryWhereUniqueInput[]
    connect?: FrequencyEntryWhereUniqueInput | FrequencyEntryWhereUniqueInput[]
    update?: FrequencyEntryUpdateWithWhereUniqueWithoutEmployeeInput | FrequencyEntryUpdateWithWhereUniqueWithoutEmployeeInput[]
    updateMany?: FrequencyEntryUpdateManyWithWhereWithoutEmployeeInput | FrequencyEntryUpdateManyWithWhereWithoutEmployeeInput[]
    deleteMany?: FrequencyEntryScalarWhereInput | FrequencyEntryScalarWhereInput[]
  }

  export type FrequencyEntryUncheckedUpdateManyWithoutEmployeeNestedInput = {
    create?: XOR<FrequencyEntryCreateWithoutEmployeeInput, FrequencyEntryUncheckedCreateWithoutEmployeeInput> | FrequencyEntryCreateWithoutEmployeeInput[] | FrequencyEntryUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: FrequencyEntryCreateOrConnectWithoutEmployeeInput | FrequencyEntryCreateOrConnectWithoutEmployeeInput[]
    upsert?: FrequencyEntryUpsertWithWhereUniqueWithoutEmployeeInput | FrequencyEntryUpsertWithWhereUniqueWithoutEmployeeInput[]
    createMany?: FrequencyEntryCreateManyEmployeeInputEnvelope
    set?: FrequencyEntryWhereUniqueInput | FrequencyEntryWhereUniqueInput[]
    disconnect?: FrequencyEntryWhereUniqueInput | FrequencyEntryWhereUniqueInput[]
    delete?: FrequencyEntryWhereUniqueInput | FrequencyEntryWhereUniqueInput[]
    connect?: FrequencyEntryWhereUniqueInput | FrequencyEntryWhereUniqueInput[]
    update?: FrequencyEntryUpdateWithWhereUniqueWithoutEmployeeInput | FrequencyEntryUpdateWithWhereUniqueWithoutEmployeeInput[]
    updateMany?: FrequencyEntryUpdateManyWithWhereWithoutEmployeeInput | FrequencyEntryUpdateManyWithWhereWithoutEmployeeInput[]
    deleteMany?: FrequencyEntryScalarWhereInput | FrequencyEntryScalarWhereInput[]
  }

  export type OrganizationCreateNestedOneWithoutFrequency_sheetsInput = {
    create?: XOR<OrganizationCreateWithoutFrequency_sheetsInput, OrganizationUncheckedCreateWithoutFrequency_sheetsInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutFrequency_sheetsInput
    connect?: OrganizationWhereUniqueInput
  }

  export type UnitCreateNestedOneWithoutFrequency_sheetsInput = {
    create?: XOR<UnitCreateWithoutFrequency_sheetsInput, UnitUncheckedCreateWithoutFrequency_sheetsInput>
    connectOrCreate?: UnitCreateOrConnectWithoutFrequency_sheetsInput
    connect?: UnitWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutSubmitted_sheetsInput = {
    create?: XOR<UserCreateWithoutSubmitted_sheetsInput, UserUncheckedCreateWithoutSubmitted_sheetsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSubmitted_sheetsInput
    connect?: UserWhereUniqueInput
  }

  export type FrequencyEntryCreateNestedManyWithoutSheetInput = {
    create?: XOR<FrequencyEntryCreateWithoutSheetInput, FrequencyEntryUncheckedCreateWithoutSheetInput> | FrequencyEntryCreateWithoutSheetInput[] | FrequencyEntryUncheckedCreateWithoutSheetInput[]
    connectOrCreate?: FrequencyEntryCreateOrConnectWithoutSheetInput | FrequencyEntryCreateOrConnectWithoutSheetInput[]
    createMany?: FrequencyEntryCreateManySheetInputEnvelope
    connect?: FrequencyEntryWhereUniqueInput | FrequencyEntryWhereUniqueInput[]
  }

  export type FrequencyEntryUncheckedCreateNestedManyWithoutSheetInput = {
    create?: XOR<FrequencyEntryCreateWithoutSheetInput, FrequencyEntryUncheckedCreateWithoutSheetInput> | FrequencyEntryCreateWithoutSheetInput[] | FrequencyEntryUncheckedCreateWithoutSheetInput[]
    connectOrCreate?: FrequencyEntryCreateOrConnectWithoutSheetInput | FrequencyEntryCreateOrConnectWithoutSheetInput[]
    createMany?: FrequencyEntryCreateManySheetInputEnvelope
    connect?: FrequencyEntryWhereUniqueInput | FrequencyEntryWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumSheetStatusFieldUpdateOperationsInput = {
    set?: $Enums.SheetStatus
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type OrganizationUpdateOneRequiredWithoutFrequency_sheetsNestedInput = {
    create?: XOR<OrganizationCreateWithoutFrequency_sheetsInput, OrganizationUncheckedCreateWithoutFrequency_sheetsInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutFrequency_sheetsInput
    upsert?: OrganizationUpsertWithoutFrequency_sheetsInput
    connect?: OrganizationWhereUniqueInput
    update?: XOR<XOR<OrganizationUpdateToOneWithWhereWithoutFrequency_sheetsInput, OrganizationUpdateWithoutFrequency_sheetsInput>, OrganizationUncheckedUpdateWithoutFrequency_sheetsInput>
  }

  export type UnitUpdateOneRequiredWithoutFrequency_sheetsNestedInput = {
    create?: XOR<UnitCreateWithoutFrequency_sheetsInput, UnitUncheckedCreateWithoutFrequency_sheetsInput>
    connectOrCreate?: UnitCreateOrConnectWithoutFrequency_sheetsInput
    upsert?: UnitUpsertWithoutFrequency_sheetsInput
    connect?: UnitWhereUniqueInput
    update?: XOR<XOR<UnitUpdateToOneWithWhereWithoutFrequency_sheetsInput, UnitUpdateWithoutFrequency_sheetsInput>, UnitUncheckedUpdateWithoutFrequency_sheetsInput>
  }

  export type UserUpdateOneWithoutSubmitted_sheetsNestedInput = {
    create?: XOR<UserCreateWithoutSubmitted_sheetsInput, UserUncheckedCreateWithoutSubmitted_sheetsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSubmitted_sheetsInput
    upsert?: UserUpsertWithoutSubmitted_sheetsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSubmitted_sheetsInput, UserUpdateWithoutSubmitted_sheetsInput>, UserUncheckedUpdateWithoutSubmitted_sheetsInput>
  }

  export type FrequencyEntryUpdateManyWithoutSheetNestedInput = {
    create?: XOR<FrequencyEntryCreateWithoutSheetInput, FrequencyEntryUncheckedCreateWithoutSheetInput> | FrequencyEntryCreateWithoutSheetInput[] | FrequencyEntryUncheckedCreateWithoutSheetInput[]
    connectOrCreate?: FrequencyEntryCreateOrConnectWithoutSheetInput | FrequencyEntryCreateOrConnectWithoutSheetInput[]
    upsert?: FrequencyEntryUpsertWithWhereUniqueWithoutSheetInput | FrequencyEntryUpsertWithWhereUniqueWithoutSheetInput[]
    createMany?: FrequencyEntryCreateManySheetInputEnvelope
    set?: FrequencyEntryWhereUniqueInput | FrequencyEntryWhereUniqueInput[]
    disconnect?: FrequencyEntryWhereUniqueInput | FrequencyEntryWhereUniqueInput[]
    delete?: FrequencyEntryWhereUniqueInput | FrequencyEntryWhereUniqueInput[]
    connect?: FrequencyEntryWhereUniqueInput | FrequencyEntryWhereUniqueInput[]
    update?: FrequencyEntryUpdateWithWhereUniqueWithoutSheetInput | FrequencyEntryUpdateWithWhereUniqueWithoutSheetInput[]
    updateMany?: FrequencyEntryUpdateManyWithWhereWithoutSheetInput | FrequencyEntryUpdateManyWithWhereWithoutSheetInput[]
    deleteMany?: FrequencyEntryScalarWhereInput | FrequencyEntryScalarWhereInput[]
  }

  export type FrequencyEntryUncheckedUpdateManyWithoutSheetNestedInput = {
    create?: XOR<FrequencyEntryCreateWithoutSheetInput, FrequencyEntryUncheckedCreateWithoutSheetInput> | FrequencyEntryCreateWithoutSheetInput[] | FrequencyEntryUncheckedCreateWithoutSheetInput[]
    connectOrCreate?: FrequencyEntryCreateOrConnectWithoutSheetInput | FrequencyEntryCreateOrConnectWithoutSheetInput[]
    upsert?: FrequencyEntryUpsertWithWhereUniqueWithoutSheetInput | FrequencyEntryUpsertWithWhereUniqueWithoutSheetInput[]
    createMany?: FrequencyEntryCreateManySheetInputEnvelope
    set?: FrequencyEntryWhereUniqueInput | FrequencyEntryWhereUniqueInput[]
    disconnect?: FrequencyEntryWhereUniqueInput | FrequencyEntryWhereUniqueInput[]
    delete?: FrequencyEntryWhereUniqueInput | FrequencyEntryWhereUniqueInput[]
    connect?: FrequencyEntryWhereUniqueInput | FrequencyEntryWhereUniqueInput[]
    update?: FrequencyEntryUpdateWithWhereUniqueWithoutSheetInput | FrequencyEntryUpdateWithWhereUniqueWithoutSheetInput[]
    updateMany?: FrequencyEntryUpdateManyWithWhereWithoutSheetInput | FrequencyEntryUpdateManyWithWhereWithoutSheetInput[]
    deleteMany?: FrequencyEntryScalarWhereInput | FrequencyEntryScalarWhereInput[]
  }

  export type FrequencySheetCreateNestedOneWithoutEntriesInput = {
    create?: XOR<FrequencySheetCreateWithoutEntriesInput, FrequencySheetUncheckedCreateWithoutEntriesInput>
    connectOrCreate?: FrequencySheetCreateOrConnectWithoutEntriesInput
    connect?: FrequencySheetWhereUniqueInput
  }

  export type EmployeeCreateNestedOneWithoutFrequency_entriesInput = {
    create?: XOR<EmployeeCreateWithoutFrequency_entriesInput, EmployeeUncheckedCreateWithoutFrequency_entriesInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutFrequency_entriesInput
    connect?: EmployeeWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FrequencySheetUpdateOneRequiredWithoutEntriesNestedInput = {
    create?: XOR<FrequencySheetCreateWithoutEntriesInput, FrequencySheetUncheckedCreateWithoutEntriesInput>
    connectOrCreate?: FrequencySheetCreateOrConnectWithoutEntriesInput
    upsert?: FrequencySheetUpsertWithoutEntriesInput
    connect?: FrequencySheetWhereUniqueInput
    update?: XOR<XOR<FrequencySheetUpdateToOneWithWhereWithoutEntriesInput, FrequencySheetUpdateWithoutEntriesInput>, FrequencySheetUncheckedUpdateWithoutEntriesInput>
  }

  export type EmployeeUpdateOneRequiredWithoutFrequency_entriesNestedInput = {
    create?: XOR<EmployeeCreateWithoutFrequency_entriesInput, EmployeeUncheckedCreateWithoutFrequency_entriesInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutFrequency_entriesInput
    upsert?: EmployeeUpsertWithoutFrequency_entriesInput
    connect?: EmployeeWhereUniqueInput
    update?: XOR<XOR<EmployeeUpdateToOneWithWhereWithoutFrequency_entriesInput, EmployeeUpdateWithoutFrequency_entriesInput>, EmployeeUncheckedUpdateWithoutFrequency_entriesInput>
  }

  export type EventCodeCreateNestedManyWithoutEvent_typeInput = {
    create?: XOR<EventCodeCreateWithoutEvent_typeInput, EventCodeUncheckedCreateWithoutEvent_typeInput> | EventCodeCreateWithoutEvent_typeInput[] | EventCodeUncheckedCreateWithoutEvent_typeInput[]
    connectOrCreate?: EventCodeCreateOrConnectWithoutEvent_typeInput | EventCodeCreateOrConnectWithoutEvent_typeInput[]
    createMany?: EventCodeCreateManyEvent_typeInputEnvelope
    connect?: EventCodeWhereUniqueInput | EventCodeWhereUniqueInput[]
  }

  export type EventCodeUncheckedCreateNestedManyWithoutEvent_typeInput = {
    create?: XOR<EventCodeCreateWithoutEvent_typeInput, EventCodeUncheckedCreateWithoutEvent_typeInput> | EventCodeCreateWithoutEvent_typeInput[] | EventCodeUncheckedCreateWithoutEvent_typeInput[]
    connectOrCreate?: EventCodeCreateOrConnectWithoutEvent_typeInput | EventCodeCreateOrConnectWithoutEvent_typeInput[]
    createMany?: EventCodeCreateManyEvent_typeInputEnvelope
    connect?: EventCodeWhereUniqueInput | EventCodeWhereUniqueInput[]
  }

  export type EventCodeUpdateManyWithoutEvent_typeNestedInput = {
    create?: XOR<EventCodeCreateWithoutEvent_typeInput, EventCodeUncheckedCreateWithoutEvent_typeInput> | EventCodeCreateWithoutEvent_typeInput[] | EventCodeUncheckedCreateWithoutEvent_typeInput[]
    connectOrCreate?: EventCodeCreateOrConnectWithoutEvent_typeInput | EventCodeCreateOrConnectWithoutEvent_typeInput[]
    upsert?: EventCodeUpsertWithWhereUniqueWithoutEvent_typeInput | EventCodeUpsertWithWhereUniqueWithoutEvent_typeInput[]
    createMany?: EventCodeCreateManyEvent_typeInputEnvelope
    set?: EventCodeWhereUniqueInput | EventCodeWhereUniqueInput[]
    disconnect?: EventCodeWhereUniqueInput | EventCodeWhereUniqueInput[]
    delete?: EventCodeWhereUniqueInput | EventCodeWhereUniqueInput[]
    connect?: EventCodeWhereUniqueInput | EventCodeWhereUniqueInput[]
    update?: EventCodeUpdateWithWhereUniqueWithoutEvent_typeInput | EventCodeUpdateWithWhereUniqueWithoutEvent_typeInput[]
    updateMany?: EventCodeUpdateManyWithWhereWithoutEvent_typeInput | EventCodeUpdateManyWithWhereWithoutEvent_typeInput[]
    deleteMany?: EventCodeScalarWhereInput | EventCodeScalarWhereInput[]
  }

  export type EventCodeUncheckedUpdateManyWithoutEvent_typeNestedInput = {
    create?: XOR<EventCodeCreateWithoutEvent_typeInput, EventCodeUncheckedCreateWithoutEvent_typeInput> | EventCodeCreateWithoutEvent_typeInput[] | EventCodeUncheckedCreateWithoutEvent_typeInput[]
    connectOrCreate?: EventCodeCreateOrConnectWithoutEvent_typeInput | EventCodeCreateOrConnectWithoutEvent_typeInput[]
    upsert?: EventCodeUpsertWithWhereUniqueWithoutEvent_typeInput | EventCodeUpsertWithWhereUniqueWithoutEvent_typeInput[]
    createMany?: EventCodeCreateManyEvent_typeInputEnvelope
    set?: EventCodeWhereUniqueInput | EventCodeWhereUniqueInput[]
    disconnect?: EventCodeWhereUniqueInput | EventCodeWhereUniqueInput[]
    delete?: EventCodeWhereUniqueInput | EventCodeWhereUniqueInput[]
    connect?: EventCodeWhereUniqueInput | EventCodeWhereUniqueInput[]
    update?: EventCodeUpdateWithWhereUniqueWithoutEvent_typeInput | EventCodeUpdateWithWhereUniqueWithoutEvent_typeInput[]
    updateMany?: EventCodeUpdateManyWithWhereWithoutEvent_typeInput | EventCodeUpdateManyWithWhereWithoutEvent_typeInput[]
    deleteMany?: EventCodeScalarWhereInput | EventCodeScalarWhereInput[]
  }

  export type OrganizationCreateNestedOneWithoutEvent_codesInput = {
    create?: XOR<OrganizationCreateWithoutEvent_codesInput, OrganizationUncheckedCreateWithoutEvent_codesInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutEvent_codesInput
    connect?: OrganizationWhereUniqueInput
  }

  export type EventTypeCreateNestedOneWithoutEvent_codesInput = {
    create?: XOR<EventTypeCreateWithoutEvent_codesInput, EventTypeUncheckedCreateWithoutEvent_codesInput>
    connectOrCreate?: EventTypeCreateOrConnectWithoutEvent_codesInput
    connect?: EventTypeWhereUniqueInput
  }

  export type OrganizationUpdateOneRequiredWithoutEvent_codesNestedInput = {
    create?: XOR<OrganizationCreateWithoutEvent_codesInput, OrganizationUncheckedCreateWithoutEvent_codesInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutEvent_codesInput
    upsert?: OrganizationUpsertWithoutEvent_codesInput
    connect?: OrganizationWhereUniqueInput
    update?: XOR<XOR<OrganizationUpdateToOneWithWhereWithoutEvent_codesInput, OrganizationUpdateWithoutEvent_codesInput>, OrganizationUncheckedUpdateWithoutEvent_codesInput>
  }

  export type EventTypeUpdateOneRequiredWithoutEvent_codesNestedInput = {
    create?: XOR<EventTypeCreateWithoutEvent_codesInput, EventTypeUncheckedCreateWithoutEvent_codesInput>
    connectOrCreate?: EventTypeCreateOrConnectWithoutEvent_codesInput
    upsert?: EventTypeUpsertWithoutEvent_codesInput
    connect?: EventTypeWhereUniqueInput
    update?: XOR<XOR<EventTypeUpdateToOneWithWhereWithoutEvent_codesInput, EventTypeUpdateWithoutEvent_codesInput>, EventTypeUncheckedUpdateWithoutEvent_codesInput>
  }

  export type OrganizationCreateNestedOneWithoutSalary_floorsInput = {
    create?: XOR<OrganizationCreateWithoutSalary_floorsInput, OrganizationUncheckedCreateWithoutSalary_floorsInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutSalary_floorsInput
    connect?: OrganizationWhereUniqueInput
  }

  export type OrganizationUpdateOneRequiredWithoutSalary_floorsNestedInput = {
    create?: XOR<OrganizationCreateWithoutSalary_floorsInput, OrganizationUncheckedCreateWithoutSalary_floorsInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutSalary_floorsInput
    upsert?: OrganizationUpsertWithoutSalary_floorsInput
    connect?: OrganizationWhereUniqueInput
    update?: XOR<XOR<OrganizationUpdateToOneWithWhereWithoutSalary_floorsInput, OrganizationUpdateWithoutSalary_floorsInput>, OrganizationUncheckedUpdateWithoutSalary_floorsInput>
  }

  export type OrganizationCreateNestedOneWithoutLogsInput = {
    create?: XOR<OrganizationCreateWithoutLogsInput, OrganizationUncheckedCreateWithoutLogsInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutLogsInput
    connect?: OrganizationWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutLogsInput = {
    create?: XOR<UserCreateWithoutLogsInput, UserUncheckedCreateWithoutLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutLogsInput
    connect?: UserWhereUniqueInput
  }

  export type OrganizationUpdateOneRequiredWithoutLogsNestedInput = {
    create?: XOR<OrganizationCreateWithoutLogsInput, OrganizationUncheckedCreateWithoutLogsInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutLogsInput
    upsert?: OrganizationUpsertWithoutLogsInput
    connect?: OrganizationWhereUniqueInput
    update?: XOR<XOR<OrganizationUpdateToOneWithWhereWithoutLogsInput, OrganizationUpdateWithoutLogsInput>, OrganizationUncheckedUpdateWithoutLogsInput>
  }

  export type UserUpdateOneRequiredWithoutLogsNestedInput = {
    create?: XOR<UserCreateWithoutLogsInput, UserUncheckedCreateWithoutLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutLogsInput
    upsert?: UserUpsertWithoutLogsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutLogsInput, UserUpdateWithoutLogsInput>, UserUncheckedUpdateWithoutLogsInput>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
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

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedEnumSheetStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SheetStatus | EnumSheetStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SheetStatus[] | ListEnumSheetStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SheetStatus[] | ListEnumSheetStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSheetStatusFilter<$PrismaModel> | $Enums.SheetStatus
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

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumSheetStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SheetStatus | EnumSheetStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SheetStatus[] | ListEnumSheetStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SheetStatus[] | ListEnumSheetStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSheetStatusWithAggregatesFilter<$PrismaModel> | $Enums.SheetStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSheetStatusFilter<$PrismaModel>
    _max?: NestedEnumSheetStatusFilter<$PrismaModel>
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

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type UnitCreateWithoutOrganizationInput = {
    id?: string
    name: string
    location: string
    is_active?: boolean
    created_at?: Date | string
    employees?: EmployeeCreateNestedManyWithoutUnitInput
    users?: UserCreateNestedManyWithoutUnitInput
    frequency_sheets?: FrequencySheetCreateNestedManyWithoutUnitInput
  }

  export type UnitUncheckedCreateWithoutOrganizationInput = {
    id?: string
    name: string
    location: string
    is_active?: boolean
    created_at?: Date | string
    employees?: EmployeeUncheckedCreateNestedManyWithoutUnitInput
    users?: UserUncheckedCreateNestedManyWithoutUnitInput
    frequency_sheets?: FrequencySheetUncheckedCreateNestedManyWithoutUnitInput
  }

  export type UnitCreateOrConnectWithoutOrganizationInput = {
    where: UnitWhereUniqueInput
    create: XOR<UnitCreateWithoutOrganizationInput, UnitUncheckedCreateWithoutOrganizationInput>
  }

  export type UnitCreateManyOrganizationInputEnvelope = {
    data: UnitCreateManyOrganizationInput | UnitCreateManyOrganizationInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutOrganizationInput = {
    id?: string
    name: string
    email: string
    password?: string
    cpf: string
    role?: $Enums.UserRole
    is_active?: boolean
    created_at?: Date | string
    unit?: UnitCreateNestedOneWithoutUsersInput
    submitted_sheets?: FrequencySheetCreateNestedManyWithoutSubmitterInput
    logs?: LogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutOrganizationInput = {
    id?: string
    name: string
    email: string
    password?: string
    cpf: string
    role?: $Enums.UserRole
    unit_id?: string | null
    is_active?: boolean
    created_at?: Date | string
    submitted_sheets?: FrequencySheetUncheckedCreateNestedManyWithoutSubmitterInput
    logs?: LogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutOrganizationInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOrganizationInput, UserUncheckedCreateWithoutOrganizationInput>
  }

  export type UserCreateManyOrganizationInputEnvelope = {
    data: UserCreateManyOrganizationInput | UserCreateManyOrganizationInput[]
    skipDuplicates?: boolean
  }

  export type EmployeeCreateWithoutOrganizationInput = {
    id?: string
    registration?: string | null
    name: string
    position: string
    cpf: string
    rg?: string | null
    rg_state?: string | null
    contract_type: string
    base_salary?: number | null
    address?: string | null
    created_at?: Date | string
    unit: UnitCreateNestedOneWithoutEmployeesInput
    frequency_entries?: FrequencyEntryCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeUncheckedCreateWithoutOrganizationInput = {
    id?: string
    registration?: string | null
    name: string
    position: string
    cpf: string
    rg?: string | null
    rg_state?: string | null
    contract_type: string
    base_salary?: number | null
    address?: string | null
    unit_id: string
    created_at?: Date | string
    frequency_entries?: FrequencyEntryUncheckedCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeCreateOrConnectWithoutOrganizationInput = {
    where: EmployeeWhereUniqueInput
    create: XOR<EmployeeCreateWithoutOrganizationInput, EmployeeUncheckedCreateWithoutOrganizationInput>
  }

  export type EmployeeCreateManyOrganizationInputEnvelope = {
    data: EmployeeCreateManyOrganizationInput | EmployeeCreateManyOrganizationInput[]
    skipDuplicates?: boolean
  }

  export type FrequencySheetCreateWithoutOrganizationInput = {
    id?: string
    month: number
    year: number
    status?: $Enums.SheetStatus
    submitted_at?: Date | string | null
    created_at?: Date | string
    unit: UnitCreateNestedOneWithoutFrequency_sheetsInput
    submitter?: UserCreateNestedOneWithoutSubmitted_sheetsInput
    entries?: FrequencyEntryCreateNestedManyWithoutSheetInput
  }

  export type FrequencySheetUncheckedCreateWithoutOrganizationInput = {
    id?: string
    unit_id: string
    month: number
    year: number
    status?: $Enums.SheetStatus
    submitted_by?: string | null
    submitted_at?: Date | string | null
    created_at?: Date | string
    entries?: FrequencyEntryUncheckedCreateNestedManyWithoutSheetInput
  }

  export type FrequencySheetCreateOrConnectWithoutOrganizationInput = {
    where: FrequencySheetWhereUniqueInput
    create: XOR<FrequencySheetCreateWithoutOrganizationInput, FrequencySheetUncheckedCreateWithoutOrganizationInput>
  }

  export type FrequencySheetCreateManyOrganizationInputEnvelope = {
    data: FrequencySheetCreateManyOrganizationInput | FrequencySheetCreateManyOrganizationInput[]
    skipDuplicates?: boolean
  }

  export type EventCodeCreateWithoutOrganizationInput = {
    id?: string
    contract_type: string
    code: number
    created_at?: Date | string
    event_type: EventTypeCreateNestedOneWithoutEvent_codesInput
  }

  export type EventCodeUncheckedCreateWithoutOrganizationInput = {
    id?: string
    event_type_id: string
    contract_type: string
    code: number
    created_at?: Date | string
  }

  export type EventCodeCreateOrConnectWithoutOrganizationInput = {
    where: EventCodeWhereUniqueInput
    create: XOR<EventCodeCreateWithoutOrganizationInput, EventCodeUncheckedCreateWithoutOrganizationInput>
  }

  export type EventCodeCreateManyOrganizationInputEnvelope = {
    data: EventCodeCreateManyOrganizationInput | EventCodeCreateManyOrganizationInput[]
    skipDuplicates?: boolean
  }

  export type SalaryFloorCreateWithoutOrganizationInput = {
    id?: string
    position: string
    base_value: number
    hour_value: number
    floor_quantity: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type SalaryFloorUncheckedCreateWithoutOrganizationInput = {
    id?: string
    position: string
    base_value: number
    hour_value: number
    floor_quantity: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type SalaryFloorCreateOrConnectWithoutOrganizationInput = {
    where: SalaryFloorWhereUniqueInput
    create: XOR<SalaryFloorCreateWithoutOrganizationInput, SalaryFloorUncheckedCreateWithoutOrganizationInput>
  }

  export type SalaryFloorCreateManyOrganizationInputEnvelope = {
    data: SalaryFloorCreateManyOrganizationInput | SalaryFloorCreateManyOrganizationInput[]
    skipDuplicates?: boolean
  }

  export type LogCreateWithoutOrganizationInput = {
    id?: string
    action: string
    details?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
    user: UserCreateNestedOneWithoutLogsInput
  }

  export type LogUncheckedCreateWithoutOrganizationInput = {
    id?: string
    user_id: string
    action: string
    details?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
  }

  export type LogCreateOrConnectWithoutOrganizationInput = {
    where: LogWhereUniqueInput
    create: XOR<LogCreateWithoutOrganizationInput, LogUncheckedCreateWithoutOrganizationInput>
  }

  export type LogCreateManyOrganizationInputEnvelope = {
    data: LogCreateManyOrganizationInput | LogCreateManyOrganizationInput[]
    skipDuplicates?: boolean
  }

  export type UnitUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: UnitWhereUniqueInput
    update: XOR<UnitUpdateWithoutOrganizationInput, UnitUncheckedUpdateWithoutOrganizationInput>
    create: XOR<UnitCreateWithoutOrganizationInput, UnitUncheckedCreateWithoutOrganizationInput>
  }

  export type UnitUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: UnitWhereUniqueInput
    data: XOR<UnitUpdateWithoutOrganizationInput, UnitUncheckedUpdateWithoutOrganizationInput>
  }

  export type UnitUpdateManyWithWhereWithoutOrganizationInput = {
    where: UnitScalarWhereInput
    data: XOR<UnitUpdateManyMutationInput, UnitUncheckedUpdateManyWithoutOrganizationInput>
  }

  export type UnitScalarWhereInput = {
    AND?: UnitScalarWhereInput | UnitScalarWhereInput[]
    OR?: UnitScalarWhereInput[]
    NOT?: UnitScalarWhereInput | UnitScalarWhereInput[]
    id?: StringFilter<"Unit"> | string
    name?: StringFilter<"Unit"> | string
    location?: StringFilter<"Unit"> | string
    organization_id?: StringFilter<"Unit"> | string
    is_active?: BoolFilter<"Unit"> | boolean
    created_at?: DateTimeFilter<"Unit"> | Date | string
  }

  export type UserUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutOrganizationInput, UserUncheckedUpdateWithoutOrganizationInput>
    create: XOR<UserCreateWithoutOrganizationInput, UserUncheckedCreateWithoutOrganizationInput>
  }

  export type UserUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutOrganizationInput, UserUncheckedUpdateWithoutOrganizationInput>
  }

  export type UserUpdateManyWithWhereWithoutOrganizationInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutOrganizationInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    cpf?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    organization_id?: StringFilter<"User"> | string
    unit_id?: StringNullableFilter<"User"> | string | null
    is_active?: BoolFilter<"User"> | boolean
    created_at?: DateTimeFilter<"User"> | Date | string
  }

  export type EmployeeUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: EmployeeWhereUniqueInput
    update: XOR<EmployeeUpdateWithoutOrganizationInput, EmployeeUncheckedUpdateWithoutOrganizationInput>
    create: XOR<EmployeeCreateWithoutOrganizationInput, EmployeeUncheckedCreateWithoutOrganizationInput>
  }

  export type EmployeeUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: EmployeeWhereUniqueInput
    data: XOR<EmployeeUpdateWithoutOrganizationInput, EmployeeUncheckedUpdateWithoutOrganizationInput>
  }

  export type EmployeeUpdateManyWithWhereWithoutOrganizationInput = {
    where: EmployeeScalarWhereInput
    data: XOR<EmployeeUpdateManyMutationInput, EmployeeUncheckedUpdateManyWithoutOrganizationInput>
  }

  export type EmployeeScalarWhereInput = {
    AND?: EmployeeScalarWhereInput | EmployeeScalarWhereInput[]
    OR?: EmployeeScalarWhereInput[]
    NOT?: EmployeeScalarWhereInput | EmployeeScalarWhereInput[]
    id?: StringFilter<"Employee"> | string
    registration?: StringNullableFilter<"Employee"> | string | null
    name?: StringFilter<"Employee"> | string
    position?: StringFilter<"Employee"> | string
    cpf?: StringFilter<"Employee"> | string
    rg?: StringNullableFilter<"Employee"> | string | null
    rg_state?: StringNullableFilter<"Employee"> | string | null
    contract_type?: StringFilter<"Employee"> | string
    base_salary?: FloatNullableFilter<"Employee"> | number | null
    address?: StringNullableFilter<"Employee"> | string | null
    organization_id?: StringFilter<"Employee"> | string
    unit_id?: StringFilter<"Employee"> | string
    created_at?: DateTimeFilter<"Employee"> | Date | string
  }

  export type FrequencySheetUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: FrequencySheetWhereUniqueInput
    update: XOR<FrequencySheetUpdateWithoutOrganizationInput, FrequencySheetUncheckedUpdateWithoutOrganizationInput>
    create: XOR<FrequencySheetCreateWithoutOrganizationInput, FrequencySheetUncheckedCreateWithoutOrganizationInput>
  }

  export type FrequencySheetUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: FrequencySheetWhereUniqueInput
    data: XOR<FrequencySheetUpdateWithoutOrganizationInput, FrequencySheetUncheckedUpdateWithoutOrganizationInput>
  }

  export type FrequencySheetUpdateManyWithWhereWithoutOrganizationInput = {
    where: FrequencySheetScalarWhereInput
    data: XOR<FrequencySheetUpdateManyMutationInput, FrequencySheetUncheckedUpdateManyWithoutOrganizationInput>
  }

  export type FrequencySheetScalarWhereInput = {
    AND?: FrequencySheetScalarWhereInput | FrequencySheetScalarWhereInput[]
    OR?: FrequencySheetScalarWhereInput[]
    NOT?: FrequencySheetScalarWhereInput | FrequencySheetScalarWhereInput[]
    id?: StringFilter<"FrequencySheet"> | string
    organization_id?: StringFilter<"FrequencySheet"> | string
    unit_id?: StringFilter<"FrequencySheet"> | string
    month?: IntFilter<"FrequencySheet"> | number
    year?: IntFilter<"FrequencySheet"> | number
    status?: EnumSheetStatusFilter<"FrequencySheet"> | $Enums.SheetStatus
    submitted_by?: StringNullableFilter<"FrequencySheet"> | string | null
    submitted_at?: DateTimeNullableFilter<"FrequencySheet"> | Date | string | null
    created_at?: DateTimeFilter<"FrequencySheet"> | Date | string
  }

  export type EventCodeUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: EventCodeWhereUniqueInput
    update: XOR<EventCodeUpdateWithoutOrganizationInput, EventCodeUncheckedUpdateWithoutOrganizationInput>
    create: XOR<EventCodeCreateWithoutOrganizationInput, EventCodeUncheckedCreateWithoutOrganizationInput>
  }

  export type EventCodeUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: EventCodeWhereUniqueInput
    data: XOR<EventCodeUpdateWithoutOrganizationInput, EventCodeUncheckedUpdateWithoutOrganizationInput>
  }

  export type EventCodeUpdateManyWithWhereWithoutOrganizationInput = {
    where: EventCodeScalarWhereInput
    data: XOR<EventCodeUpdateManyMutationInput, EventCodeUncheckedUpdateManyWithoutOrganizationInput>
  }

  export type EventCodeScalarWhereInput = {
    AND?: EventCodeScalarWhereInput | EventCodeScalarWhereInput[]
    OR?: EventCodeScalarWhereInput[]
    NOT?: EventCodeScalarWhereInput | EventCodeScalarWhereInput[]
    id?: StringFilter<"EventCode"> | string
    organization_id?: StringFilter<"EventCode"> | string
    event_type_id?: StringFilter<"EventCode"> | string
    contract_type?: StringFilter<"EventCode"> | string
    code?: IntFilter<"EventCode"> | number
    created_at?: DateTimeFilter<"EventCode"> | Date | string
  }

  export type SalaryFloorUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: SalaryFloorWhereUniqueInput
    update: XOR<SalaryFloorUpdateWithoutOrganizationInput, SalaryFloorUncheckedUpdateWithoutOrganizationInput>
    create: XOR<SalaryFloorCreateWithoutOrganizationInput, SalaryFloorUncheckedCreateWithoutOrganizationInput>
  }

  export type SalaryFloorUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: SalaryFloorWhereUniqueInput
    data: XOR<SalaryFloorUpdateWithoutOrganizationInput, SalaryFloorUncheckedUpdateWithoutOrganizationInput>
  }

  export type SalaryFloorUpdateManyWithWhereWithoutOrganizationInput = {
    where: SalaryFloorScalarWhereInput
    data: XOR<SalaryFloorUpdateManyMutationInput, SalaryFloorUncheckedUpdateManyWithoutOrganizationInput>
  }

  export type SalaryFloorScalarWhereInput = {
    AND?: SalaryFloorScalarWhereInput | SalaryFloorScalarWhereInput[]
    OR?: SalaryFloorScalarWhereInput[]
    NOT?: SalaryFloorScalarWhereInput | SalaryFloorScalarWhereInput[]
    id?: StringFilter<"SalaryFloor"> | string
    organization_id?: StringFilter<"SalaryFloor"> | string
    position?: StringFilter<"SalaryFloor"> | string
    base_value?: FloatFilter<"SalaryFloor"> | number
    hour_value?: FloatFilter<"SalaryFloor"> | number
    floor_quantity?: FloatFilter<"SalaryFloor"> | number
    created_at?: DateTimeFilter<"SalaryFloor"> | Date | string
    updated_at?: DateTimeFilter<"SalaryFloor"> | Date | string
  }

  export type LogUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: LogWhereUniqueInput
    update: XOR<LogUpdateWithoutOrganizationInput, LogUncheckedUpdateWithoutOrganizationInput>
    create: XOR<LogCreateWithoutOrganizationInput, LogUncheckedCreateWithoutOrganizationInput>
  }

  export type LogUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: LogWhereUniqueInput
    data: XOR<LogUpdateWithoutOrganizationInput, LogUncheckedUpdateWithoutOrganizationInput>
  }

  export type LogUpdateManyWithWhereWithoutOrganizationInput = {
    where: LogScalarWhereInput
    data: XOR<LogUpdateManyMutationInput, LogUncheckedUpdateManyWithoutOrganizationInput>
  }

  export type LogScalarWhereInput = {
    AND?: LogScalarWhereInput | LogScalarWhereInput[]
    OR?: LogScalarWhereInput[]
    NOT?: LogScalarWhereInput | LogScalarWhereInput[]
    id?: StringFilter<"Log"> | string
    organization_id?: StringFilter<"Log"> | string
    user_id?: StringFilter<"Log"> | string
    action?: StringFilter<"Log"> | string
    details?: JsonNullableFilter<"Log">
    created_at?: DateTimeFilter<"Log"> | Date | string
  }

  export type OrganizationCreateWithoutUnitsInput = {
    id?: string
    name: string
    slug: string
    logo_url?: string | null
    created_at?: Date | string
    users?: UserCreateNestedManyWithoutOrganizationInput
    employees?: EmployeeCreateNestedManyWithoutOrganizationInput
    frequency_sheets?: FrequencySheetCreateNestedManyWithoutOrganizationInput
    event_codes?: EventCodeCreateNestedManyWithoutOrganizationInput
    salary_floors?: SalaryFloorCreateNestedManyWithoutOrganizationInput
    logs?: LogCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUncheckedCreateWithoutUnitsInput = {
    id?: string
    name: string
    slug: string
    logo_url?: string | null
    created_at?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutOrganizationInput
    employees?: EmployeeUncheckedCreateNestedManyWithoutOrganizationInput
    frequency_sheets?: FrequencySheetUncheckedCreateNestedManyWithoutOrganizationInput
    event_codes?: EventCodeUncheckedCreateNestedManyWithoutOrganizationInput
    salary_floors?: SalaryFloorUncheckedCreateNestedManyWithoutOrganizationInput
    logs?: LogUncheckedCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationCreateOrConnectWithoutUnitsInput = {
    where: OrganizationWhereUniqueInput
    create: XOR<OrganizationCreateWithoutUnitsInput, OrganizationUncheckedCreateWithoutUnitsInput>
  }

  export type EmployeeCreateWithoutUnitInput = {
    id?: string
    registration?: string | null
    name: string
    position: string
    cpf: string
    rg?: string | null
    rg_state?: string | null
    contract_type: string
    base_salary?: number | null
    address?: string | null
    created_at?: Date | string
    organization: OrganizationCreateNestedOneWithoutEmployeesInput
    frequency_entries?: FrequencyEntryCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeUncheckedCreateWithoutUnitInput = {
    id?: string
    registration?: string | null
    name: string
    position: string
    cpf: string
    rg?: string | null
    rg_state?: string | null
    contract_type: string
    base_salary?: number | null
    address?: string | null
    organization_id: string
    created_at?: Date | string
    frequency_entries?: FrequencyEntryUncheckedCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeCreateOrConnectWithoutUnitInput = {
    where: EmployeeWhereUniqueInput
    create: XOR<EmployeeCreateWithoutUnitInput, EmployeeUncheckedCreateWithoutUnitInput>
  }

  export type EmployeeCreateManyUnitInputEnvelope = {
    data: EmployeeCreateManyUnitInput | EmployeeCreateManyUnitInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutUnitInput = {
    id?: string
    name: string
    email: string
    password?: string
    cpf: string
    role?: $Enums.UserRole
    is_active?: boolean
    created_at?: Date | string
    organization: OrganizationCreateNestedOneWithoutUsersInput
    submitted_sheets?: FrequencySheetCreateNestedManyWithoutSubmitterInput
    logs?: LogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUnitInput = {
    id?: string
    name: string
    email: string
    password?: string
    cpf: string
    role?: $Enums.UserRole
    organization_id: string
    is_active?: boolean
    created_at?: Date | string
    submitted_sheets?: FrequencySheetUncheckedCreateNestedManyWithoutSubmitterInput
    logs?: LogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUnitInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUnitInput, UserUncheckedCreateWithoutUnitInput>
  }

  export type UserCreateManyUnitInputEnvelope = {
    data: UserCreateManyUnitInput | UserCreateManyUnitInput[]
    skipDuplicates?: boolean
  }

  export type FrequencySheetCreateWithoutUnitInput = {
    id?: string
    month: number
    year: number
    status?: $Enums.SheetStatus
    submitted_at?: Date | string | null
    created_at?: Date | string
    organization: OrganizationCreateNestedOneWithoutFrequency_sheetsInput
    submitter?: UserCreateNestedOneWithoutSubmitted_sheetsInput
    entries?: FrequencyEntryCreateNestedManyWithoutSheetInput
  }

  export type FrequencySheetUncheckedCreateWithoutUnitInput = {
    id?: string
    organization_id: string
    month: number
    year: number
    status?: $Enums.SheetStatus
    submitted_by?: string | null
    submitted_at?: Date | string | null
    created_at?: Date | string
    entries?: FrequencyEntryUncheckedCreateNestedManyWithoutSheetInput
  }

  export type FrequencySheetCreateOrConnectWithoutUnitInput = {
    where: FrequencySheetWhereUniqueInput
    create: XOR<FrequencySheetCreateWithoutUnitInput, FrequencySheetUncheckedCreateWithoutUnitInput>
  }

  export type FrequencySheetCreateManyUnitInputEnvelope = {
    data: FrequencySheetCreateManyUnitInput | FrequencySheetCreateManyUnitInput[]
    skipDuplicates?: boolean
  }

  export type OrganizationUpsertWithoutUnitsInput = {
    update: XOR<OrganizationUpdateWithoutUnitsInput, OrganizationUncheckedUpdateWithoutUnitsInput>
    create: XOR<OrganizationCreateWithoutUnitsInput, OrganizationUncheckedCreateWithoutUnitsInput>
    where?: OrganizationWhereInput
  }

  export type OrganizationUpdateToOneWithWhereWithoutUnitsInput = {
    where?: OrganizationWhereInput
    data: XOR<OrganizationUpdateWithoutUnitsInput, OrganizationUncheckedUpdateWithoutUnitsInput>
  }

  export type OrganizationUpdateWithoutUnitsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    logo_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutOrganizationNestedInput
    employees?: EmployeeUpdateManyWithoutOrganizationNestedInput
    frequency_sheets?: FrequencySheetUpdateManyWithoutOrganizationNestedInput
    event_codes?: EventCodeUpdateManyWithoutOrganizationNestedInput
    salary_floors?: SalaryFloorUpdateManyWithoutOrganizationNestedInput
    logs?: LogUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationUncheckedUpdateWithoutUnitsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    logo_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutOrganizationNestedInput
    employees?: EmployeeUncheckedUpdateManyWithoutOrganizationNestedInput
    frequency_sheets?: FrequencySheetUncheckedUpdateManyWithoutOrganizationNestedInput
    event_codes?: EventCodeUncheckedUpdateManyWithoutOrganizationNestedInput
    salary_floors?: SalaryFloorUncheckedUpdateManyWithoutOrganizationNestedInput
    logs?: LogUncheckedUpdateManyWithoutOrganizationNestedInput
  }

  export type EmployeeUpsertWithWhereUniqueWithoutUnitInput = {
    where: EmployeeWhereUniqueInput
    update: XOR<EmployeeUpdateWithoutUnitInput, EmployeeUncheckedUpdateWithoutUnitInput>
    create: XOR<EmployeeCreateWithoutUnitInput, EmployeeUncheckedCreateWithoutUnitInput>
  }

  export type EmployeeUpdateWithWhereUniqueWithoutUnitInput = {
    where: EmployeeWhereUniqueInput
    data: XOR<EmployeeUpdateWithoutUnitInput, EmployeeUncheckedUpdateWithoutUnitInput>
  }

  export type EmployeeUpdateManyWithWhereWithoutUnitInput = {
    where: EmployeeScalarWhereInput
    data: XOR<EmployeeUpdateManyMutationInput, EmployeeUncheckedUpdateManyWithoutUnitInput>
  }

  export type UserUpsertWithWhereUniqueWithoutUnitInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutUnitInput, UserUncheckedUpdateWithoutUnitInput>
    create: XOR<UserCreateWithoutUnitInput, UserUncheckedCreateWithoutUnitInput>
  }

  export type UserUpdateWithWhereUniqueWithoutUnitInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutUnitInput, UserUncheckedUpdateWithoutUnitInput>
  }

  export type UserUpdateManyWithWhereWithoutUnitInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutUnitInput>
  }

  export type FrequencySheetUpsertWithWhereUniqueWithoutUnitInput = {
    where: FrequencySheetWhereUniqueInput
    update: XOR<FrequencySheetUpdateWithoutUnitInput, FrequencySheetUncheckedUpdateWithoutUnitInput>
    create: XOR<FrequencySheetCreateWithoutUnitInput, FrequencySheetUncheckedCreateWithoutUnitInput>
  }

  export type FrequencySheetUpdateWithWhereUniqueWithoutUnitInput = {
    where: FrequencySheetWhereUniqueInput
    data: XOR<FrequencySheetUpdateWithoutUnitInput, FrequencySheetUncheckedUpdateWithoutUnitInput>
  }

  export type FrequencySheetUpdateManyWithWhereWithoutUnitInput = {
    where: FrequencySheetScalarWhereInput
    data: XOR<FrequencySheetUpdateManyMutationInput, FrequencySheetUncheckedUpdateManyWithoutUnitInput>
  }

  export type OrganizationCreateWithoutUsersInput = {
    id?: string
    name: string
    slug: string
    logo_url?: string | null
    created_at?: Date | string
    units?: UnitCreateNestedManyWithoutOrganizationInput
    employees?: EmployeeCreateNestedManyWithoutOrganizationInput
    frequency_sheets?: FrequencySheetCreateNestedManyWithoutOrganizationInput
    event_codes?: EventCodeCreateNestedManyWithoutOrganizationInput
    salary_floors?: SalaryFloorCreateNestedManyWithoutOrganizationInput
    logs?: LogCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUncheckedCreateWithoutUsersInput = {
    id?: string
    name: string
    slug: string
    logo_url?: string | null
    created_at?: Date | string
    units?: UnitUncheckedCreateNestedManyWithoutOrganizationInput
    employees?: EmployeeUncheckedCreateNestedManyWithoutOrganizationInput
    frequency_sheets?: FrequencySheetUncheckedCreateNestedManyWithoutOrganizationInput
    event_codes?: EventCodeUncheckedCreateNestedManyWithoutOrganizationInput
    salary_floors?: SalaryFloorUncheckedCreateNestedManyWithoutOrganizationInput
    logs?: LogUncheckedCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationCreateOrConnectWithoutUsersInput = {
    where: OrganizationWhereUniqueInput
    create: XOR<OrganizationCreateWithoutUsersInput, OrganizationUncheckedCreateWithoutUsersInput>
  }

  export type UnitCreateWithoutUsersInput = {
    id?: string
    name: string
    location: string
    is_active?: boolean
    created_at?: Date | string
    organization: OrganizationCreateNestedOneWithoutUnitsInput
    employees?: EmployeeCreateNestedManyWithoutUnitInput
    frequency_sheets?: FrequencySheetCreateNestedManyWithoutUnitInput
  }

  export type UnitUncheckedCreateWithoutUsersInput = {
    id?: string
    name: string
    location: string
    organization_id: string
    is_active?: boolean
    created_at?: Date | string
    employees?: EmployeeUncheckedCreateNestedManyWithoutUnitInput
    frequency_sheets?: FrequencySheetUncheckedCreateNestedManyWithoutUnitInput
  }

  export type UnitCreateOrConnectWithoutUsersInput = {
    where: UnitWhereUniqueInput
    create: XOR<UnitCreateWithoutUsersInput, UnitUncheckedCreateWithoutUsersInput>
  }

  export type FrequencySheetCreateWithoutSubmitterInput = {
    id?: string
    month: number
    year: number
    status?: $Enums.SheetStatus
    submitted_at?: Date | string | null
    created_at?: Date | string
    organization: OrganizationCreateNestedOneWithoutFrequency_sheetsInput
    unit: UnitCreateNestedOneWithoutFrequency_sheetsInput
    entries?: FrequencyEntryCreateNestedManyWithoutSheetInput
  }

  export type FrequencySheetUncheckedCreateWithoutSubmitterInput = {
    id?: string
    organization_id: string
    unit_id: string
    month: number
    year: number
    status?: $Enums.SheetStatus
    submitted_at?: Date | string | null
    created_at?: Date | string
    entries?: FrequencyEntryUncheckedCreateNestedManyWithoutSheetInput
  }

  export type FrequencySheetCreateOrConnectWithoutSubmitterInput = {
    where: FrequencySheetWhereUniqueInput
    create: XOR<FrequencySheetCreateWithoutSubmitterInput, FrequencySheetUncheckedCreateWithoutSubmitterInput>
  }

  export type FrequencySheetCreateManySubmitterInputEnvelope = {
    data: FrequencySheetCreateManySubmitterInput | FrequencySheetCreateManySubmitterInput[]
    skipDuplicates?: boolean
  }

  export type LogCreateWithoutUserInput = {
    id?: string
    action: string
    details?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
    organization: OrganizationCreateNestedOneWithoutLogsInput
  }

  export type LogUncheckedCreateWithoutUserInput = {
    id?: string
    organization_id: string
    action: string
    details?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
  }

  export type LogCreateOrConnectWithoutUserInput = {
    where: LogWhereUniqueInput
    create: XOR<LogCreateWithoutUserInput, LogUncheckedCreateWithoutUserInput>
  }

  export type LogCreateManyUserInputEnvelope = {
    data: LogCreateManyUserInput | LogCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type OrganizationUpsertWithoutUsersInput = {
    update: XOR<OrganizationUpdateWithoutUsersInput, OrganizationUncheckedUpdateWithoutUsersInput>
    create: XOR<OrganizationCreateWithoutUsersInput, OrganizationUncheckedCreateWithoutUsersInput>
    where?: OrganizationWhereInput
  }

  export type OrganizationUpdateToOneWithWhereWithoutUsersInput = {
    where?: OrganizationWhereInput
    data: XOR<OrganizationUpdateWithoutUsersInput, OrganizationUncheckedUpdateWithoutUsersInput>
  }

  export type OrganizationUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    logo_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    units?: UnitUpdateManyWithoutOrganizationNestedInput
    employees?: EmployeeUpdateManyWithoutOrganizationNestedInput
    frequency_sheets?: FrequencySheetUpdateManyWithoutOrganizationNestedInput
    event_codes?: EventCodeUpdateManyWithoutOrganizationNestedInput
    salary_floors?: SalaryFloorUpdateManyWithoutOrganizationNestedInput
    logs?: LogUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    logo_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    units?: UnitUncheckedUpdateManyWithoutOrganizationNestedInput
    employees?: EmployeeUncheckedUpdateManyWithoutOrganizationNestedInput
    frequency_sheets?: FrequencySheetUncheckedUpdateManyWithoutOrganizationNestedInput
    event_codes?: EventCodeUncheckedUpdateManyWithoutOrganizationNestedInput
    salary_floors?: SalaryFloorUncheckedUpdateManyWithoutOrganizationNestedInput
    logs?: LogUncheckedUpdateManyWithoutOrganizationNestedInput
  }

  export type UnitUpsertWithoutUsersInput = {
    update: XOR<UnitUpdateWithoutUsersInput, UnitUncheckedUpdateWithoutUsersInput>
    create: XOR<UnitCreateWithoutUsersInput, UnitUncheckedCreateWithoutUsersInput>
    where?: UnitWhereInput
  }

  export type UnitUpdateToOneWithWhereWithoutUsersInput = {
    where?: UnitWhereInput
    data: XOR<UnitUpdateWithoutUsersInput, UnitUncheckedUpdateWithoutUsersInput>
  }

  export type UnitUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationUpdateOneRequiredWithoutUnitsNestedInput
    employees?: EmployeeUpdateManyWithoutUnitNestedInput
    frequency_sheets?: FrequencySheetUpdateManyWithoutUnitNestedInput
  }

  export type UnitUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    organization_id?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    employees?: EmployeeUncheckedUpdateManyWithoutUnitNestedInput
    frequency_sheets?: FrequencySheetUncheckedUpdateManyWithoutUnitNestedInput
  }

  export type FrequencySheetUpsertWithWhereUniqueWithoutSubmitterInput = {
    where: FrequencySheetWhereUniqueInput
    update: XOR<FrequencySheetUpdateWithoutSubmitterInput, FrequencySheetUncheckedUpdateWithoutSubmitterInput>
    create: XOR<FrequencySheetCreateWithoutSubmitterInput, FrequencySheetUncheckedCreateWithoutSubmitterInput>
  }

  export type FrequencySheetUpdateWithWhereUniqueWithoutSubmitterInput = {
    where: FrequencySheetWhereUniqueInput
    data: XOR<FrequencySheetUpdateWithoutSubmitterInput, FrequencySheetUncheckedUpdateWithoutSubmitterInput>
  }

  export type FrequencySheetUpdateManyWithWhereWithoutSubmitterInput = {
    where: FrequencySheetScalarWhereInput
    data: XOR<FrequencySheetUpdateManyMutationInput, FrequencySheetUncheckedUpdateManyWithoutSubmitterInput>
  }

  export type LogUpsertWithWhereUniqueWithoutUserInput = {
    where: LogWhereUniqueInput
    update: XOR<LogUpdateWithoutUserInput, LogUncheckedUpdateWithoutUserInput>
    create: XOR<LogCreateWithoutUserInput, LogUncheckedCreateWithoutUserInput>
  }

  export type LogUpdateWithWhereUniqueWithoutUserInput = {
    where: LogWhereUniqueInput
    data: XOR<LogUpdateWithoutUserInput, LogUncheckedUpdateWithoutUserInput>
  }

  export type LogUpdateManyWithWhereWithoutUserInput = {
    where: LogScalarWhereInput
    data: XOR<LogUpdateManyMutationInput, LogUncheckedUpdateManyWithoutUserInput>
  }

  export type OrganizationCreateWithoutEmployeesInput = {
    id?: string
    name: string
    slug: string
    logo_url?: string | null
    created_at?: Date | string
    units?: UnitCreateNestedManyWithoutOrganizationInput
    users?: UserCreateNestedManyWithoutOrganizationInput
    frequency_sheets?: FrequencySheetCreateNestedManyWithoutOrganizationInput
    event_codes?: EventCodeCreateNestedManyWithoutOrganizationInput
    salary_floors?: SalaryFloorCreateNestedManyWithoutOrganizationInput
    logs?: LogCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUncheckedCreateWithoutEmployeesInput = {
    id?: string
    name: string
    slug: string
    logo_url?: string | null
    created_at?: Date | string
    units?: UnitUncheckedCreateNestedManyWithoutOrganizationInput
    users?: UserUncheckedCreateNestedManyWithoutOrganizationInput
    frequency_sheets?: FrequencySheetUncheckedCreateNestedManyWithoutOrganizationInput
    event_codes?: EventCodeUncheckedCreateNestedManyWithoutOrganizationInput
    salary_floors?: SalaryFloorUncheckedCreateNestedManyWithoutOrganizationInput
    logs?: LogUncheckedCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationCreateOrConnectWithoutEmployeesInput = {
    where: OrganizationWhereUniqueInput
    create: XOR<OrganizationCreateWithoutEmployeesInput, OrganizationUncheckedCreateWithoutEmployeesInput>
  }

  export type UnitCreateWithoutEmployeesInput = {
    id?: string
    name: string
    location: string
    is_active?: boolean
    created_at?: Date | string
    organization: OrganizationCreateNestedOneWithoutUnitsInput
    users?: UserCreateNestedManyWithoutUnitInput
    frequency_sheets?: FrequencySheetCreateNestedManyWithoutUnitInput
  }

  export type UnitUncheckedCreateWithoutEmployeesInput = {
    id?: string
    name: string
    location: string
    organization_id: string
    is_active?: boolean
    created_at?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutUnitInput
    frequency_sheets?: FrequencySheetUncheckedCreateNestedManyWithoutUnitInput
  }

  export type UnitCreateOrConnectWithoutEmployeesInput = {
    where: UnitWhereUniqueInput
    create: XOR<UnitCreateWithoutEmployeesInput, UnitUncheckedCreateWithoutEmployeesInput>
  }

  export type FrequencyEntryCreateWithoutEmployeeInput = {
    id?: string
    absence_days: number
    additional_night_hours: number
    overtime_50_hours: number
    overtime_100_hours: number
    on_call_hours: number
    vacation_days: number
    salary_floor_amount?: number | null
    justification?: string | null
    created_at?: Date | string
    sheet: FrequencySheetCreateNestedOneWithoutEntriesInput
  }

  export type FrequencyEntryUncheckedCreateWithoutEmployeeInput = {
    id?: string
    sheet_id: string
    absence_days: number
    additional_night_hours: number
    overtime_50_hours: number
    overtime_100_hours: number
    on_call_hours: number
    vacation_days: number
    salary_floor_amount?: number | null
    justification?: string | null
    created_at?: Date | string
  }

  export type FrequencyEntryCreateOrConnectWithoutEmployeeInput = {
    where: FrequencyEntryWhereUniqueInput
    create: XOR<FrequencyEntryCreateWithoutEmployeeInput, FrequencyEntryUncheckedCreateWithoutEmployeeInput>
  }

  export type FrequencyEntryCreateManyEmployeeInputEnvelope = {
    data: FrequencyEntryCreateManyEmployeeInput | FrequencyEntryCreateManyEmployeeInput[]
    skipDuplicates?: boolean
  }

  export type OrganizationUpsertWithoutEmployeesInput = {
    update: XOR<OrganizationUpdateWithoutEmployeesInput, OrganizationUncheckedUpdateWithoutEmployeesInput>
    create: XOR<OrganizationCreateWithoutEmployeesInput, OrganizationUncheckedCreateWithoutEmployeesInput>
    where?: OrganizationWhereInput
  }

  export type OrganizationUpdateToOneWithWhereWithoutEmployeesInput = {
    where?: OrganizationWhereInput
    data: XOR<OrganizationUpdateWithoutEmployeesInput, OrganizationUncheckedUpdateWithoutEmployeesInput>
  }

  export type OrganizationUpdateWithoutEmployeesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    logo_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    units?: UnitUpdateManyWithoutOrganizationNestedInput
    users?: UserUpdateManyWithoutOrganizationNestedInput
    frequency_sheets?: FrequencySheetUpdateManyWithoutOrganizationNestedInput
    event_codes?: EventCodeUpdateManyWithoutOrganizationNestedInput
    salary_floors?: SalaryFloorUpdateManyWithoutOrganizationNestedInput
    logs?: LogUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationUncheckedUpdateWithoutEmployeesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    logo_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    units?: UnitUncheckedUpdateManyWithoutOrganizationNestedInput
    users?: UserUncheckedUpdateManyWithoutOrganizationNestedInput
    frequency_sheets?: FrequencySheetUncheckedUpdateManyWithoutOrganizationNestedInput
    event_codes?: EventCodeUncheckedUpdateManyWithoutOrganizationNestedInput
    salary_floors?: SalaryFloorUncheckedUpdateManyWithoutOrganizationNestedInput
    logs?: LogUncheckedUpdateManyWithoutOrganizationNestedInput
  }

  export type UnitUpsertWithoutEmployeesInput = {
    update: XOR<UnitUpdateWithoutEmployeesInput, UnitUncheckedUpdateWithoutEmployeesInput>
    create: XOR<UnitCreateWithoutEmployeesInput, UnitUncheckedCreateWithoutEmployeesInput>
    where?: UnitWhereInput
  }

  export type UnitUpdateToOneWithWhereWithoutEmployeesInput = {
    where?: UnitWhereInput
    data: XOR<UnitUpdateWithoutEmployeesInput, UnitUncheckedUpdateWithoutEmployeesInput>
  }

  export type UnitUpdateWithoutEmployeesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationUpdateOneRequiredWithoutUnitsNestedInput
    users?: UserUpdateManyWithoutUnitNestedInput
    frequency_sheets?: FrequencySheetUpdateManyWithoutUnitNestedInput
  }

  export type UnitUncheckedUpdateWithoutEmployeesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    organization_id?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutUnitNestedInput
    frequency_sheets?: FrequencySheetUncheckedUpdateManyWithoutUnitNestedInput
  }

  export type FrequencyEntryUpsertWithWhereUniqueWithoutEmployeeInput = {
    where: FrequencyEntryWhereUniqueInput
    update: XOR<FrequencyEntryUpdateWithoutEmployeeInput, FrequencyEntryUncheckedUpdateWithoutEmployeeInput>
    create: XOR<FrequencyEntryCreateWithoutEmployeeInput, FrequencyEntryUncheckedCreateWithoutEmployeeInput>
  }

  export type FrequencyEntryUpdateWithWhereUniqueWithoutEmployeeInput = {
    where: FrequencyEntryWhereUniqueInput
    data: XOR<FrequencyEntryUpdateWithoutEmployeeInput, FrequencyEntryUncheckedUpdateWithoutEmployeeInput>
  }

  export type FrequencyEntryUpdateManyWithWhereWithoutEmployeeInput = {
    where: FrequencyEntryScalarWhereInput
    data: XOR<FrequencyEntryUpdateManyMutationInput, FrequencyEntryUncheckedUpdateManyWithoutEmployeeInput>
  }

  export type FrequencyEntryScalarWhereInput = {
    AND?: FrequencyEntryScalarWhereInput | FrequencyEntryScalarWhereInput[]
    OR?: FrequencyEntryScalarWhereInput[]
    NOT?: FrequencyEntryScalarWhereInput | FrequencyEntryScalarWhereInput[]
    id?: StringFilter<"FrequencyEntry"> | string
    sheet_id?: StringFilter<"FrequencyEntry"> | string
    employee_id?: StringFilter<"FrequencyEntry"> | string
    absence_days?: IntFilter<"FrequencyEntry"> | number
    additional_night_hours?: FloatFilter<"FrequencyEntry"> | number
    overtime_50_hours?: FloatFilter<"FrequencyEntry"> | number
    overtime_100_hours?: FloatFilter<"FrequencyEntry"> | number
    on_call_hours?: FloatFilter<"FrequencyEntry"> | number
    vacation_days?: IntFilter<"FrequencyEntry"> | number
    salary_floor_amount?: FloatNullableFilter<"FrequencyEntry"> | number | null
    justification?: StringNullableFilter<"FrequencyEntry"> | string | null
    created_at?: DateTimeFilter<"FrequencyEntry"> | Date | string
  }

  export type OrganizationCreateWithoutFrequency_sheetsInput = {
    id?: string
    name: string
    slug: string
    logo_url?: string | null
    created_at?: Date | string
    units?: UnitCreateNestedManyWithoutOrganizationInput
    users?: UserCreateNestedManyWithoutOrganizationInput
    employees?: EmployeeCreateNestedManyWithoutOrganizationInput
    event_codes?: EventCodeCreateNestedManyWithoutOrganizationInput
    salary_floors?: SalaryFloorCreateNestedManyWithoutOrganizationInput
    logs?: LogCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUncheckedCreateWithoutFrequency_sheetsInput = {
    id?: string
    name: string
    slug: string
    logo_url?: string | null
    created_at?: Date | string
    units?: UnitUncheckedCreateNestedManyWithoutOrganizationInput
    users?: UserUncheckedCreateNestedManyWithoutOrganizationInput
    employees?: EmployeeUncheckedCreateNestedManyWithoutOrganizationInput
    event_codes?: EventCodeUncheckedCreateNestedManyWithoutOrganizationInput
    salary_floors?: SalaryFloorUncheckedCreateNestedManyWithoutOrganizationInput
    logs?: LogUncheckedCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationCreateOrConnectWithoutFrequency_sheetsInput = {
    where: OrganizationWhereUniqueInput
    create: XOR<OrganizationCreateWithoutFrequency_sheetsInput, OrganizationUncheckedCreateWithoutFrequency_sheetsInput>
  }

  export type UnitCreateWithoutFrequency_sheetsInput = {
    id?: string
    name: string
    location: string
    is_active?: boolean
    created_at?: Date | string
    organization: OrganizationCreateNestedOneWithoutUnitsInput
    employees?: EmployeeCreateNestedManyWithoutUnitInput
    users?: UserCreateNestedManyWithoutUnitInput
  }

  export type UnitUncheckedCreateWithoutFrequency_sheetsInput = {
    id?: string
    name: string
    location: string
    organization_id: string
    is_active?: boolean
    created_at?: Date | string
    employees?: EmployeeUncheckedCreateNestedManyWithoutUnitInput
    users?: UserUncheckedCreateNestedManyWithoutUnitInput
  }

  export type UnitCreateOrConnectWithoutFrequency_sheetsInput = {
    where: UnitWhereUniqueInput
    create: XOR<UnitCreateWithoutFrequency_sheetsInput, UnitUncheckedCreateWithoutFrequency_sheetsInput>
  }

  export type UserCreateWithoutSubmitted_sheetsInput = {
    id?: string
    name: string
    email: string
    password?: string
    cpf: string
    role?: $Enums.UserRole
    is_active?: boolean
    created_at?: Date | string
    organization: OrganizationCreateNestedOneWithoutUsersInput
    unit?: UnitCreateNestedOneWithoutUsersInput
    logs?: LogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSubmitted_sheetsInput = {
    id?: string
    name: string
    email: string
    password?: string
    cpf: string
    role?: $Enums.UserRole
    organization_id: string
    unit_id?: string | null
    is_active?: boolean
    created_at?: Date | string
    logs?: LogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSubmitted_sheetsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSubmitted_sheetsInput, UserUncheckedCreateWithoutSubmitted_sheetsInput>
  }

  export type FrequencyEntryCreateWithoutSheetInput = {
    id?: string
    absence_days: number
    additional_night_hours: number
    overtime_50_hours: number
    overtime_100_hours: number
    on_call_hours: number
    vacation_days: number
    salary_floor_amount?: number | null
    justification?: string | null
    created_at?: Date | string
    employee: EmployeeCreateNestedOneWithoutFrequency_entriesInput
  }

  export type FrequencyEntryUncheckedCreateWithoutSheetInput = {
    id?: string
    employee_id: string
    absence_days: number
    additional_night_hours: number
    overtime_50_hours: number
    overtime_100_hours: number
    on_call_hours: number
    vacation_days: number
    salary_floor_amount?: number | null
    justification?: string | null
    created_at?: Date | string
  }

  export type FrequencyEntryCreateOrConnectWithoutSheetInput = {
    where: FrequencyEntryWhereUniqueInput
    create: XOR<FrequencyEntryCreateWithoutSheetInput, FrequencyEntryUncheckedCreateWithoutSheetInput>
  }

  export type FrequencyEntryCreateManySheetInputEnvelope = {
    data: FrequencyEntryCreateManySheetInput | FrequencyEntryCreateManySheetInput[]
    skipDuplicates?: boolean
  }

  export type OrganizationUpsertWithoutFrequency_sheetsInput = {
    update: XOR<OrganizationUpdateWithoutFrequency_sheetsInput, OrganizationUncheckedUpdateWithoutFrequency_sheetsInput>
    create: XOR<OrganizationCreateWithoutFrequency_sheetsInput, OrganizationUncheckedCreateWithoutFrequency_sheetsInput>
    where?: OrganizationWhereInput
  }

  export type OrganizationUpdateToOneWithWhereWithoutFrequency_sheetsInput = {
    where?: OrganizationWhereInput
    data: XOR<OrganizationUpdateWithoutFrequency_sheetsInput, OrganizationUncheckedUpdateWithoutFrequency_sheetsInput>
  }

  export type OrganizationUpdateWithoutFrequency_sheetsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    logo_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    units?: UnitUpdateManyWithoutOrganizationNestedInput
    users?: UserUpdateManyWithoutOrganizationNestedInput
    employees?: EmployeeUpdateManyWithoutOrganizationNestedInput
    event_codes?: EventCodeUpdateManyWithoutOrganizationNestedInput
    salary_floors?: SalaryFloorUpdateManyWithoutOrganizationNestedInput
    logs?: LogUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationUncheckedUpdateWithoutFrequency_sheetsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    logo_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    units?: UnitUncheckedUpdateManyWithoutOrganizationNestedInput
    users?: UserUncheckedUpdateManyWithoutOrganizationNestedInput
    employees?: EmployeeUncheckedUpdateManyWithoutOrganizationNestedInput
    event_codes?: EventCodeUncheckedUpdateManyWithoutOrganizationNestedInput
    salary_floors?: SalaryFloorUncheckedUpdateManyWithoutOrganizationNestedInput
    logs?: LogUncheckedUpdateManyWithoutOrganizationNestedInput
  }

  export type UnitUpsertWithoutFrequency_sheetsInput = {
    update: XOR<UnitUpdateWithoutFrequency_sheetsInput, UnitUncheckedUpdateWithoutFrequency_sheetsInput>
    create: XOR<UnitCreateWithoutFrequency_sheetsInput, UnitUncheckedCreateWithoutFrequency_sheetsInput>
    where?: UnitWhereInput
  }

  export type UnitUpdateToOneWithWhereWithoutFrequency_sheetsInput = {
    where?: UnitWhereInput
    data: XOR<UnitUpdateWithoutFrequency_sheetsInput, UnitUncheckedUpdateWithoutFrequency_sheetsInput>
  }

  export type UnitUpdateWithoutFrequency_sheetsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationUpdateOneRequiredWithoutUnitsNestedInput
    employees?: EmployeeUpdateManyWithoutUnitNestedInput
    users?: UserUpdateManyWithoutUnitNestedInput
  }

  export type UnitUncheckedUpdateWithoutFrequency_sheetsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    organization_id?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    employees?: EmployeeUncheckedUpdateManyWithoutUnitNestedInput
    users?: UserUncheckedUpdateManyWithoutUnitNestedInput
  }

  export type UserUpsertWithoutSubmitted_sheetsInput = {
    update: XOR<UserUpdateWithoutSubmitted_sheetsInput, UserUncheckedUpdateWithoutSubmitted_sheetsInput>
    create: XOR<UserCreateWithoutSubmitted_sheetsInput, UserUncheckedCreateWithoutSubmitted_sheetsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSubmitted_sheetsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSubmitted_sheetsInput, UserUncheckedUpdateWithoutSubmitted_sheetsInput>
  }

  export type UserUpdateWithoutSubmitted_sheetsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationUpdateOneRequiredWithoutUsersNestedInput
    unit?: UnitUpdateOneWithoutUsersNestedInput
    logs?: LogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSubmitted_sheetsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    organization_id?: StringFieldUpdateOperationsInput | string
    unit_id?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    logs?: LogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type FrequencyEntryUpsertWithWhereUniqueWithoutSheetInput = {
    where: FrequencyEntryWhereUniqueInput
    update: XOR<FrequencyEntryUpdateWithoutSheetInput, FrequencyEntryUncheckedUpdateWithoutSheetInput>
    create: XOR<FrequencyEntryCreateWithoutSheetInput, FrequencyEntryUncheckedCreateWithoutSheetInput>
  }

  export type FrequencyEntryUpdateWithWhereUniqueWithoutSheetInput = {
    where: FrequencyEntryWhereUniqueInput
    data: XOR<FrequencyEntryUpdateWithoutSheetInput, FrequencyEntryUncheckedUpdateWithoutSheetInput>
  }

  export type FrequencyEntryUpdateManyWithWhereWithoutSheetInput = {
    where: FrequencyEntryScalarWhereInput
    data: XOR<FrequencyEntryUpdateManyMutationInput, FrequencyEntryUncheckedUpdateManyWithoutSheetInput>
  }

  export type FrequencySheetCreateWithoutEntriesInput = {
    id?: string
    month: number
    year: number
    status?: $Enums.SheetStatus
    submitted_at?: Date | string | null
    created_at?: Date | string
    organization: OrganizationCreateNestedOneWithoutFrequency_sheetsInput
    unit: UnitCreateNestedOneWithoutFrequency_sheetsInput
    submitter?: UserCreateNestedOneWithoutSubmitted_sheetsInput
  }

  export type FrequencySheetUncheckedCreateWithoutEntriesInput = {
    id?: string
    organization_id: string
    unit_id: string
    month: number
    year: number
    status?: $Enums.SheetStatus
    submitted_by?: string | null
    submitted_at?: Date | string | null
    created_at?: Date | string
  }

  export type FrequencySheetCreateOrConnectWithoutEntriesInput = {
    where: FrequencySheetWhereUniqueInput
    create: XOR<FrequencySheetCreateWithoutEntriesInput, FrequencySheetUncheckedCreateWithoutEntriesInput>
  }

  export type EmployeeCreateWithoutFrequency_entriesInput = {
    id?: string
    registration?: string | null
    name: string
    position: string
    cpf: string
    rg?: string | null
    rg_state?: string | null
    contract_type: string
    base_salary?: number | null
    address?: string | null
    created_at?: Date | string
    organization: OrganizationCreateNestedOneWithoutEmployeesInput
    unit: UnitCreateNestedOneWithoutEmployeesInput
  }

  export type EmployeeUncheckedCreateWithoutFrequency_entriesInput = {
    id?: string
    registration?: string | null
    name: string
    position: string
    cpf: string
    rg?: string | null
    rg_state?: string | null
    contract_type: string
    base_salary?: number | null
    address?: string | null
    organization_id: string
    unit_id: string
    created_at?: Date | string
  }

  export type EmployeeCreateOrConnectWithoutFrequency_entriesInput = {
    where: EmployeeWhereUniqueInput
    create: XOR<EmployeeCreateWithoutFrequency_entriesInput, EmployeeUncheckedCreateWithoutFrequency_entriesInput>
  }

  export type FrequencySheetUpsertWithoutEntriesInput = {
    update: XOR<FrequencySheetUpdateWithoutEntriesInput, FrequencySheetUncheckedUpdateWithoutEntriesInput>
    create: XOR<FrequencySheetCreateWithoutEntriesInput, FrequencySheetUncheckedCreateWithoutEntriesInput>
    where?: FrequencySheetWhereInput
  }

  export type FrequencySheetUpdateToOneWithWhereWithoutEntriesInput = {
    where?: FrequencySheetWhereInput
    data: XOR<FrequencySheetUpdateWithoutEntriesInput, FrequencySheetUncheckedUpdateWithoutEntriesInput>
  }

  export type FrequencySheetUpdateWithoutEntriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    month?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    status?: EnumSheetStatusFieldUpdateOperationsInput | $Enums.SheetStatus
    submitted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationUpdateOneRequiredWithoutFrequency_sheetsNestedInput
    unit?: UnitUpdateOneRequiredWithoutFrequency_sheetsNestedInput
    submitter?: UserUpdateOneWithoutSubmitted_sheetsNestedInput
  }

  export type FrequencySheetUncheckedUpdateWithoutEntriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    organization_id?: StringFieldUpdateOperationsInput | string
    unit_id?: StringFieldUpdateOperationsInput | string
    month?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    status?: EnumSheetStatusFieldUpdateOperationsInput | $Enums.SheetStatus
    submitted_by?: NullableStringFieldUpdateOperationsInput | string | null
    submitted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmployeeUpsertWithoutFrequency_entriesInput = {
    update: XOR<EmployeeUpdateWithoutFrequency_entriesInput, EmployeeUncheckedUpdateWithoutFrequency_entriesInput>
    create: XOR<EmployeeCreateWithoutFrequency_entriesInput, EmployeeUncheckedCreateWithoutFrequency_entriesInput>
    where?: EmployeeWhereInput
  }

  export type EmployeeUpdateToOneWithWhereWithoutFrequency_entriesInput = {
    where?: EmployeeWhereInput
    data: XOR<EmployeeUpdateWithoutFrequency_entriesInput, EmployeeUncheckedUpdateWithoutFrequency_entriesInput>
  }

  export type EmployeeUpdateWithoutFrequency_entriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    registration?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    rg?: NullableStringFieldUpdateOperationsInput | string | null
    rg_state?: NullableStringFieldUpdateOperationsInput | string | null
    contract_type?: StringFieldUpdateOperationsInput | string
    base_salary?: NullableFloatFieldUpdateOperationsInput | number | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationUpdateOneRequiredWithoutEmployeesNestedInput
    unit?: UnitUpdateOneRequiredWithoutEmployeesNestedInput
  }

  export type EmployeeUncheckedUpdateWithoutFrequency_entriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    registration?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    rg?: NullableStringFieldUpdateOperationsInput | string | null
    rg_state?: NullableStringFieldUpdateOperationsInput | string | null
    contract_type?: StringFieldUpdateOperationsInput | string
    base_salary?: NullableFloatFieldUpdateOperationsInput | number | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    organization_id?: StringFieldUpdateOperationsInput | string
    unit_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventCodeCreateWithoutEvent_typeInput = {
    id?: string
    contract_type: string
    code: number
    created_at?: Date | string
    organization: OrganizationCreateNestedOneWithoutEvent_codesInput
  }

  export type EventCodeUncheckedCreateWithoutEvent_typeInput = {
    id?: string
    organization_id: string
    contract_type: string
    code: number
    created_at?: Date | string
  }

  export type EventCodeCreateOrConnectWithoutEvent_typeInput = {
    where: EventCodeWhereUniqueInput
    create: XOR<EventCodeCreateWithoutEvent_typeInput, EventCodeUncheckedCreateWithoutEvent_typeInput>
  }

  export type EventCodeCreateManyEvent_typeInputEnvelope = {
    data: EventCodeCreateManyEvent_typeInput | EventCodeCreateManyEvent_typeInput[]
    skipDuplicates?: boolean
  }

  export type EventCodeUpsertWithWhereUniqueWithoutEvent_typeInput = {
    where: EventCodeWhereUniqueInput
    update: XOR<EventCodeUpdateWithoutEvent_typeInput, EventCodeUncheckedUpdateWithoutEvent_typeInput>
    create: XOR<EventCodeCreateWithoutEvent_typeInput, EventCodeUncheckedCreateWithoutEvent_typeInput>
  }

  export type EventCodeUpdateWithWhereUniqueWithoutEvent_typeInput = {
    where: EventCodeWhereUniqueInput
    data: XOR<EventCodeUpdateWithoutEvent_typeInput, EventCodeUncheckedUpdateWithoutEvent_typeInput>
  }

  export type EventCodeUpdateManyWithWhereWithoutEvent_typeInput = {
    where: EventCodeScalarWhereInput
    data: XOR<EventCodeUpdateManyMutationInput, EventCodeUncheckedUpdateManyWithoutEvent_typeInput>
  }

  export type OrganizationCreateWithoutEvent_codesInput = {
    id?: string
    name: string
    slug: string
    logo_url?: string | null
    created_at?: Date | string
    units?: UnitCreateNestedManyWithoutOrganizationInput
    users?: UserCreateNestedManyWithoutOrganizationInput
    employees?: EmployeeCreateNestedManyWithoutOrganizationInput
    frequency_sheets?: FrequencySheetCreateNestedManyWithoutOrganizationInput
    salary_floors?: SalaryFloorCreateNestedManyWithoutOrganizationInput
    logs?: LogCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUncheckedCreateWithoutEvent_codesInput = {
    id?: string
    name: string
    slug: string
    logo_url?: string | null
    created_at?: Date | string
    units?: UnitUncheckedCreateNestedManyWithoutOrganizationInput
    users?: UserUncheckedCreateNestedManyWithoutOrganizationInput
    employees?: EmployeeUncheckedCreateNestedManyWithoutOrganizationInput
    frequency_sheets?: FrequencySheetUncheckedCreateNestedManyWithoutOrganizationInput
    salary_floors?: SalaryFloorUncheckedCreateNestedManyWithoutOrganizationInput
    logs?: LogUncheckedCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationCreateOrConnectWithoutEvent_codesInput = {
    where: OrganizationWhereUniqueInput
    create: XOR<OrganizationCreateWithoutEvent_codesInput, OrganizationUncheckedCreateWithoutEvent_codesInput>
  }

  export type EventTypeCreateWithoutEvent_codesInput = {
    id?: string
    name: string
    label: string
    description?: string | null
    created_at?: Date | string
  }

  export type EventTypeUncheckedCreateWithoutEvent_codesInput = {
    id?: string
    name: string
    label: string
    description?: string | null
    created_at?: Date | string
  }

  export type EventTypeCreateOrConnectWithoutEvent_codesInput = {
    where: EventTypeWhereUniqueInput
    create: XOR<EventTypeCreateWithoutEvent_codesInput, EventTypeUncheckedCreateWithoutEvent_codesInput>
  }

  export type OrganizationUpsertWithoutEvent_codesInput = {
    update: XOR<OrganizationUpdateWithoutEvent_codesInput, OrganizationUncheckedUpdateWithoutEvent_codesInput>
    create: XOR<OrganizationCreateWithoutEvent_codesInput, OrganizationUncheckedCreateWithoutEvent_codesInput>
    where?: OrganizationWhereInput
  }

  export type OrganizationUpdateToOneWithWhereWithoutEvent_codesInput = {
    where?: OrganizationWhereInput
    data: XOR<OrganizationUpdateWithoutEvent_codesInput, OrganizationUncheckedUpdateWithoutEvent_codesInput>
  }

  export type OrganizationUpdateWithoutEvent_codesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    logo_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    units?: UnitUpdateManyWithoutOrganizationNestedInput
    users?: UserUpdateManyWithoutOrganizationNestedInput
    employees?: EmployeeUpdateManyWithoutOrganizationNestedInput
    frequency_sheets?: FrequencySheetUpdateManyWithoutOrganizationNestedInput
    salary_floors?: SalaryFloorUpdateManyWithoutOrganizationNestedInput
    logs?: LogUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationUncheckedUpdateWithoutEvent_codesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    logo_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    units?: UnitUncheckedUpdateManyWithoutOrganizationNestedInput
    users?: UserUncheckedUpdateManyWithoutOrganizationNestedInput
    employees?: EmployeeUncheckedUpdateManyWithoutOrganizationNestedInput
    frequency_sheets?: FrequencySheetUncheckedUpdateManyWithoutOrganizationNestedInput
    salary_floors?: SalaryFloorUncheckedUpdateManyWithoutOrganizationNestedInput
    logs?: LogUncheckedUpdateManyWithoutOrganizationNestedInput
  }

  export type EventTypeUpsertWithoutEvent_codesInput = {
    update: XOR<EventTypeUpdateWithoutEvent_codesInput, EventTypeUncheckedUpdateWithoutEvent_codesInput>
    create: XOR<EventTypeCreateWithoutEvent_codesInput, EventTypeUncheckedCreateWithoutEvent_codesInput>
    where?: EventTypeWhereInput
  }

  export type EventTypeUpdateToOneWithWhereWithoutEvent_codesInput = {
    where?: EventTypeWhereInput
    data: XOR<EventTypeUpdateWithoutEvent_codesInput, EventTypeUncheckedUpdateWithoutEvent_codesInput>
  }

  export type EventTypeUpdateWithoutEvent_codesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventTypeUncheckedUpdateWithoutEvent_codesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrganizationCreateWithoutSalary_floorsInput = {
    id?: string
    name: string
    slug: string
    logo_url?: string | null
    created_at?: Date | string
    units?: UnitCreateNestedManyWithoutOrganizationInput
    users?: UserCreateNestedManyWithoutOrganizationInput
    employees?: EmployeeCreateNestedManyWithoutOrganizationInput
    frequency_sheets?: FrequencySheetCreateNestedManyWithoutOrganizationInput
    event_codes?: EventCodeCreateNestedManyWithoutOrganizationInput
    logs?: LogCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUncheckedCreateWithoutSalary_floorsInput = {
    id?: string
    name: string
    slug: string
    logo_url?: string | null
    created_at?: Date | string
    units?: UnitUncheckedCreateNestedManyWithoutOrganizationInput
    users?: UserUncheckedCreateNestedManyWithoutOrganizationInput
    employees?: EmployeeUncheckedCreateNestedManyWithoutOrganizationInput
    frequency_sheets?: FrequencySheetUncheckedCreateNestedManyWithoutOrganizationInput
    event_codes?: EventCodeUncheckedCreateNestedManyWithoutOrganizationInput
    logs?: LogUncheckedCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationCreateOrConnectWithoutSalary_floorsInput = {
    where: OrganizationWhereUniqueInput
    create: XOR<OrganizationCreateWithoutSalary_floorsInput, OrganizationUncheckedCreateWithoutSalary_floorsInput>
  }

  export type OrganizationUpsertWithoutSalary_floorsInput = {
    update: XOR<OrganizationUpdateWithoutSalary_floorsInput, OrganizationUncheckedUpdateWithoutSalary_floorsInput>
    create: XOR<OrganizationCreateWithoutSalary_floorsInput, OrganizationUncheckedCreateWithoutSalary_floorsInput>
    where?: OrganizationWhereInput
  }

  export type OrganizationUpdateToOneWithWhereWithoutSalary_floorsInput = {
    where?: OrganizationWhereInput
    data: XOR<OrganizationUpdateWithoutSalary_floorsInput, OrganizationUncheckedUpdateWithoutSalary_floorsInput>
  }

  export type OrganizationUpdateWithoutSalary_floorsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    logo_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    units?: UnitUpdateManyWithoutOrganizationNestedInput
    users?: UserUpdateManyWithoutOrganizationNestedInput
    employees?: EmployeeUpdateManyWithoutOrganizationNestedInput
    frequency_sheets?: FrequencySheetUpdateManyWithoutOrganizationNestedInput
    event_codes?: EventCodeUpdateManyWithoutOrganizationNestedInput
    logs?: LogUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationUncheckedUpdateWithoutSalary_floorsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    logo_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    units?: UnitUncheckedUpdateManyWithoutOrganizationNestedInput
    users?: UserUncheckedUpdateManyWithoutOrganizationNestedInput
    employees?: EmployeeUncheckedUpdateManyWithoutOrganizationNestedInput
    frequency_sheets?: FrequencySheetUncheckedUpdateManyWithoutOrganizationNestedInput
    event_codes?: EventCodeUncheckedUpdateManyWithoutOrganizationNestedInput
    logs?: LogUncheckedUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationCreateWithoutLogsInput = {
    id?: string
    name: string
    slug: string
    logo_url?: string | null
    created_at?: Date | string
    units?: UnitCreateNestedManyWithoutOrganizationInput
    users?: UserCreateNestedManyWithoutOrganizationInput
    employees?: EmployeeCreateNestedManyWithoutOrganizationInput
    frequency_sheets?: FrequencySheetCreateNestedManyWithoutOrganizationInput
    event_codes?: EventCodeCreateNestedManyWithoutOrganizationInput
    salary_floors?: SalaryFloorCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUncheckedCreateWithoutLogsInput = {
    id?: string
    name: string
    slug: string
    logo_url?: string | null
    created_at?: Date | string
    units?: UnitUncheckedCreateNestedManyWithoutOrganizationInput
    users?: UserUncheckedCreateNestedManyWithoutOrganizationInput
    employees?: EmployeeUncheckedCreateNestedManyWithoutOrganizationInput
    frequency_sheets?: FrequencySheetUncheckedCreateNestedManyWithoutOrganizationInput
    event_codes?: EventCodeUncheckedCreateNestedManyWithoutOrganizationInput
    salary_floors?: SalaryFloorUncheckedCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationCreateOrConnectWithoutLogsInput = {
    where: OrganizationWhereUniqueInput
    create: XOR<OrganizationCreateWithoutLogsInput, OrganizationUncheckedCreateWithoutLogsInput>
  }

  export type UserCreateWithoutLogsInput = {
    id?: string
    name: string
    email: string
    password?: string
    cpf: string
    role?: $Enums.UserRole
    is_active?: boolean
    created_at?: Date | string
    organization: OrganizationCreateNestedOneWithoutUsersInput
    unit?: UnitCreateNestedOneWithoutUsersInput
    submitted_sheets?: FrequencySheetCreateNestedManyWithoutSubmitterInput
  }

  export type UserUncheckedCreateWithoutLogsInput = {
    id?: string
    name: string
    email: string
    password?: string
    cpf: string
    role?: $Enums.UserRole
    organization_id: string
    unit_id?: string | null
    is_active?: boolean
    created_at?: Date | string
    submitted_sheets?: FrequencySheetUncheckedCreateNestedManyWithoutSubmitterInput
  }

  export type UserCreateOrConnectWithoutLogsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLogsInput, UserUncheckedCreateWithoutLogsInput>
  }

  export type OrganizationUpsertWithoutLogsInput = {
    update: XOR<OrganizationUpdateWithoutLogsInput, OrganizationUncheckedUpdateWithoutLogsInput>
    create: XOR<OrganizationCreateWithoutLogsInput, OrganizationUncheckedCreateWithoutLogsInput>
    where?: OrganizationWhereInput
  }

  export type OrganizationUpdateToOneWithWhereWithoutLogsInput = {
    where?: OrganizationWhereInput
    data: XOR<OrganizationUpdateWithoutLogsInput, OrganizationUncheckedUpdateWithoutLogsInput>
  }

  export type OrganizationUpdateWithoutLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    logo_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    units?: UnitUpdateManyWithoutOrganizationNestedInput
    users?: UserUpdateManyWithoutOrganizationNestedInput
    employees?: EmployeeUpdateManyWithoutOrganizationNestedInput
    frequency_sheets?: FrequencySheetUpdateManyWithoutOrganizationNestedInput
    event_codes?: EventCodeUpdateManyWithoutOrganizationNestedInput
    salary_floors?: SalaryFloorUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationUncheckedUpdateWithoutLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    logo_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    units?: UnitUncheckedUpdateManyWithoutOrganizationNestedInput
    users?: UserUncheckedUpdateManyWithoutOrganizationNestedInput
    employees?: EmployeeUncheckedUpdateManyWithoutOrganizationNestedInput
    frequency_sheets?: FrequencySheetUncheckedUpdateManyWithoutOrganizationNestedInput
    event_codes?: EventCodeUncheckedUpdateManyWithoutOrganizationNestedInput
    salary_floors?: SalaryFloorUncheckedUpdateManyWithoutOrganizationNestedInput
  }

  export type UserUpsertWithoutLogsInput = {
    update: XOR<UserUpdateWithoutLogsInput, UserUncheckedUpdateWithoutLogsInput>
    create: XOR<UserCreateWithoutLogsInput, UserUncheckedCreateWithoutLogsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutLogsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutLogsInput, UserUncheckedUpdateWithoutLogsInput>
  }

  export type UserUpdateWithoutLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationUpdateOneRequiredWithoutUsersNestedInput
    unit?: UnitUpdateOneWithoutUsersNestedInput
    submitted_sheets?: FrequencySheetUpdateManyWithoutSubmitterNestedInput
  }

  export type UserUncheckedUpdateWithoutLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    organization_id?: StringFieldUpdateOperationsInput | string
    unit_id?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    submitted_sheets?: FrequencySheetUncheckedUpdateManyWithoutSubmitterNestedInput
  }

  export type UnitCreateManyOrganizationInput = {
    id?: string
    name: string
    location: string
    is_active?: boolean
    created_at?: Date | string
  }

  export type UserCreateManyOrganizationInput = {
    id?: string
    name: string
    email: string
    password?: string
    cpf: string
    role?: $Enums.UserRole
    unit_id?: string | null
    is_active?: boolean
    created_at?: Date | string
  }

  export type EmployeeCreateManyOrganizationInput = {
    id?: string
    registration?: string | null
    name: string
    position: string
    cpf: string
    rg?: string | null
    rg_state?: string | null
    contract_type: string
    base_salary?: number | null
    address?: string | null
    unit_id: string
    created_at?: Date | string
  }

  export type FrequencySheetCreateManyOrganizationInput = {
    id?: string
    unit_id: string
    month: number
    year: number
    status?: $Enums.SheetStatus
    submitted_by?: string | null
    submitted_at?: Date | string | null
    created_at?: Date | string
  }

  export type EventCodeCreateManyOrganizationInput = {
    id?: string
    event_type_id: string
    contract_type: string
    code: number
    created_at?: Date | string
  }

  export type SalaryFloorCreateManyOrganizationInput = {
    id?: string
    position: string
    base_value: number
    hour_value: number
    floor_quantity: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type LogCreateManyOrganizationInput = {
    id?: string
    user_id: string
    action: string
    details?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
  }

  export type UnitUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    employees?: EmployeeUpdateManyWithoutUnitNestedInput
    users?: UserUpdateManyWithoutUnitNestedInput
    frequency_sheets?: FrequencySheetUpdateManyWithoutUnitNestedInput
  }

  export type UnitUncheckedUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    employees?: EmployeeUncheckedUpdateManyWithoutUnitNestedInput
    users?: UserUncheckedUpdateManyWithoutUnitNestedInput
    frequency_sheets?: FrequencySheetUncheckedUpdateManyWithoutUnitNestedInput
  }

  export type UnitUncheckedUpdateManyWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    unit?: UnitUpdateOneWithoutUsersNestedInput
    submitted_sheets?: FrequencySheetUpdateManyWithoutSubmitterNestedInput
    logs?: LogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    unit_id?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    submitted_sheets?: FrequencySheetUncheckedUpdateManyWithoutSubmitterNestedInput
    logs?: LogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    unit_id?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmployeeUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    registration?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    rg?: NullableStringFieldUpdateOperationsInput | string | null
    rg_state?: NullableStringFieldUpdateOperationsInput | string | null
    contract_type?: StringFieldUpdateOperationsInput | string
    base_salary?: NullableFloatFieldUpdateOperationsInput | number | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    unit?: UnitUpdateOneRequiredWithoutEmployeesNestedInput
    frequency_entries?: FrequencyEntryUpdateManyWithoutEmployeeNestedInput
  }

  export type EmployeeUncheckedUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    registration?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    rg?: NullableStringFieldUpdateOperationsInput | string | null
    rg_state?: NullableStringFieldUpdateOperationsInput | string | null
    contract_type?: StringFieldUpdateOperationsInput | string
    base_salary?: NullableFloatFieldUpdateOperationsInput | number | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    unit_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    frequency_entries?: FrequencyEntryUncheckedUpdateManyWithoutEmployeeNestedInput
  }

  export type EmployeeUncheckedUpdateManyWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    registration?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    rg?: NullableStringFieldUpdateOperationsInput | string | null
    rg_state?: NullableStringFieldUpdateOperationsInput | string | null
    contract_type?: StringFieldUpdateOperationsInput | string
    base_salary?: NullableFloatFieldUpdateOperationsInput | number | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    unit_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FrequencySheetUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    month?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    status?: EnumSheetStatusFieldUpdateOperationsInput | $Enums.SheetStatus
    submitted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    unit?: UnitUpdateOneRequiredWithoutFrequency_sheetsNestedInput
    submitter?: UserUpdateOneWithoutSubmitted_sheetsNestedInput
    entries?: FrequencyEntryUpdateManyWithoutSheetNestedInput
  }

  export type FrequencySheetUncheckedUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    unit_id?: StringFieldUpdateOperationsInput | string
    month?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    status?: EnumSheetStatusFieldUpdateOperationsInput | $Enums.SheetStatus
    submitted_by?: NullableStringFieldUpdateOperationsInput | string | null
    submitted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    entries?: FrequencyEntryUncheckedUpdateManyWithoutSheetNestedInput
  }

  export type FrequencySheetUncheckedUpdateManyWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    unit_id?: StringFieldUpdateOperationsInput | string
    month?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    status?: EnumSheetStatusFieldUpdateOperationsInput | $Enums.SheetStatus
    submitted_by?: NullableStringFieldUpdateOperationsInput | string | null
    submitted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventCodeUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    contract_type?: StringFieldUpdateOperationsInput | string
    code?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    event_type?: EventTypeUpdateOneRequiredWithoutEvent_codesNestedInput
  }

  export type EventCodeUncheckedUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    event_type_id?: StringFieldUpdateOperationsInput | string
    contract_type?: StringFieldUpdateOperationsInput | string
    code?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventCodeUncheckedUpdateManyWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    event_type_id?: StringFieldUpdateOperationsInput | string
    contract_type?: StringFieldUpdateOperationsInput | string
    code?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SalaryFloorUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    base_value?: FloatFieldUpdateOperationsInput | number
    hour_value?: FloatFieldUpdateOperationsInput | number
    floor_quantity?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SalaryFloorUncheckedUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    base_value?: FloatFieldUpdateOperationsInput | number
    hour_value?: FloatFieldUpdateOperationsInput | number
    floor_quantity?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SalaryFloorUncheckedUpdateManyWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    base_value?: FloatFieldUpdateOperationsInput | number
    hour_value?: FloatFieldUpdateOperationsInput | number
    floor_quantity?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LogUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    details?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutLogsNestedInput
  }

  export type LogUncheckedUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    details?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LogUncheckedUpdateManyWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    details?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmployeeCreateManyUnitInput = {
    id?: string
    registration?: string | null
    name: string
    position: string
    cpf: string
    rg?: string | null
    rg_state?: string | null
    contract_type: string
    base_salary?: number | null
    address?: string | null
    organization_id: string
    created_at?: Date | string
  }

  export type UserCreateManyUnitInput = {
    id?: string
    name: string
    email: string
    password?: string
    cpf: string
    role?: $Enums.UserRole
    organization_id: string
    is_active?: boolean
    created_at?: Date | string
  }

  export type FrequencySheetCreateManyUnitInput = {
    id?: string
    organization_id: string
    month: number
    year: number
    status?: $Enums.SheetStatus
    submitted_by?: string | null
    submitted_at?: Date | string | null
    created_at?: Date | string
  }

  export type EmployeeUpdateWithoutUnitInput = {
    id?: StringFieldUpdateOperationsInput | string
    registration?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    rg?: NullableStringFieldUpdateOperationsInput | string | null
    rg_state?: NullableStringFieldUpdateOperationsInput | string | null
    contract_type?: StringFieldUpdateOperationsInput | string
    base_salary?: NullableFloatFieldUpdateOperationsInput | number | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationUpdateOneRequiredWithoutEmployeesNestedInput
    frequency_entries?: FrequencyEntryUpdateManyWithoutEmployeeNestedInput
  }

  export type EmployeeUncheckedUpdateWithoutUnitInput = {
    id?: StringFieldUpdateOperationsInput | string
    registration?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    rg?: NullableStringFieldUpdateOperationsInput | string | null
    rg_state?: NullableStringFieldUpdateOperationsInput | string | null
    contract_type?: StringFieldUpdateOperationsInput | string
    base_salary?: NullableFloatFieldUpdateOperationsInput | number | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    organization_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    frequency_entries?: FrequencyEntryUncheckedUpdateManyWithoutEmployeeNestedInput
  }

  export type EmployeeUncheckedUpdateManyWithoutUnitInput = {
    id?: StringFieldUpdateOperationsInput | string
    registration?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    rg?: NullableStringFieldUpdateOperationsInput | string | null
    rg_state?: NullableStringFieldUpdateOperationsInput | string | null
    contract_type?: StringFieldUpdateOperationsInput | string
    base_salary?: NullableFloatFieldUpdateOperationsInput | number | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    organization_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpdateWithoutUnitInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationUpdateOneRequiredWithoutUsersNestedInput
    submitted_sheets?: FrequencySheetUpdateManyWithoutSubmitterNestedInput
    logs?: LogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUnitInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    organization_id?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    submitted_sheets?: FrequencySheetUncheckedUpdateManyWithoutSubmitterNestedInput
    logs?: LogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutUnitInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    organization_id?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FrequencySheetUpdateWithoutUnitInput = {
    id?: StringFieldUpdateOperationsInput | string
    month?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    status?: EnumSheetStatusFieldUpdateOperationsInput | $Enums.SheetStatus
    submitted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationUpdateOneRequiredWithoutFrequency_sheetsNestedInput
    submitter?: UserUpdateOneWithoutSubmitted_sheetsNestedInput
    entries?: FrequencyEntryUpdateManyWithoutSheetNestedInput
  }

  export type FrequencySheetUncheckedUpdateWithoutUnitInput = {
    id?: StringFieldUpdateOperationsInput | string
    organization_id?: StringFieldUpdateOperationsInput | string
    month?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    status?: EnumSheetStatusFieldUpdateOperationsInput | $Enums.SheetStatus
    submitted_by?: NullableStringFieldUpdateOperationsInput | string | null
    submitted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    entries?: FrequencyEntryUncheckedUpdateManyWithoutSheetNestedInput
  }

  export type FrequencySheetUncheckedUpdateManyWithoutUnitInput = {
    id?: StringFieldUpdateOperationsInput | string
    organization_id?: StringFieldUpdateOperationsInput | string
    month?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    status?: EnumSheetStatusFieldUpdateOperationsInput | $Enums.SheetStatus
    submitted_by?: NullableStringFieldUpdateOperationsInput | string | null
    submitted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FrequencySheetCreateManySubmitterInput = {
    id?: string
    organization_id: string
    unit_id: string
    month: number
    year: number
    status?: $Enums.SheetStatus
    submitted_at?: Date | string | null
    created_at?: Date | string
  }

  export type LogCreateManyUserInput = {
    id?: string
    organization_id: string
    action: string
    details?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
  }

  export type FrequencySheetUpdateWithoutSubmitterInput = {
    id?: StringFieldUpdateOperationsInput | string
    month?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    status?: EnumSheetStatusFieldUpdateOperationsInput | $Enums.SheetStatus
    submitted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationUpdateOneRequiredWithoutFrequency_sheetsNestedInput
    unit?: UnitUpdateOneRequiredWithoutFrequency_sheetsNestedInput
    entries?: FrequencyEntryUpdateManyWithoutSheetNestedInput
  }

  export type FrequencySheetUncheckedUpdateWithoutSubmitterInput = {
    id?: StringFieldUpdateOperationsInput | string
    organization_id?: StringFieldUpdateOperationsInput | string
    unit_id?: StringFieldUpdateOperationsInput | string
    month?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    status?: EnumSheetStatusFieldUpdateOperationsInput | $Enums.SheetStatus
    submitted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    entries?: FrequencyEntryUncheckedUpdateManyWithoutSheetNestedInput
  }

  export type FrequencySheetUncheckedUpdateManyWithoutSubmitterInput = {
    id?: StringFieldUpdateOperationsInput | string
    organization_id?: StringFieldUpdateOperationsInput | string
    unit_id?: StringFieldUpdateOperationsInput | string
    month?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    status?: EnumSheetStatusFieldUpdateOperationsInput | $Enums.SheetStatus
    submitted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LogUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    details?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationUpdateOneRequiredWithoutLogsNestedInput
  }

  export type LogUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    organization_id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    details?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LogUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    organization_id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    details?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FrequencyEntryCreateManyEmployeeInput = {
    id?: string
    sheet_id: string
    absence_days: number
    additional_night_hours: number
    overtime_50_hours: number
    overtime_100_hours: number
    on_call_hours: number
    vacation_days: number
    salary_floor_amount?: number | null
    justification?: string | null
    created_at?: Date | string
  }

  export type FrequencyEntryUpdateWithoutEmployeeInput = {
    id?: StringFieldUpdateOperationsInput | string
    absence_days?: IntFieldUpdateOperationsInput | number
    additional_night_hours?: FloatFieldUpdateOperationsInput | number
    overtime_50_hours?: FloatFieldUpdateOperationsInput | number
    overtime_100_hours?: FloatFieldUpdateOperationsInput | number
    on_call_hours?: FloatFieldUpdateOperationsInput | number
    vacation_days?: IntFieldUpdateOperationsInput | number
    salary_floor_amount?: NullableFloatFieldUpdateOperationsInput | number | null
    justification?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    sheet?: FrequencySheetUpdateOneRequiredWithoutEntriesNestedInput
  }

  export type FrequencyEntryUncheckedUpdateWithoutEmployeeInput = {
    id?: StringFieldUpdateOperationsInput | string
    sheet_id?: StringFieldUpdateOperationsInput | string
    absence_days?: IntFieldUpdateOperationsInput | number
    additional_night_hours?: FloatFieldUpdateOperationsInput | number
    overtime_50_hours?: FloatFieldUpdateOperationsInput | number
    overtime_100_hours?: FloatFieldUpdateOperationsInput | number
    on_call_hours?: FloatFieldUpdateOperationsInput | number
    vacation_days?: IntFieldUpdateOperationsInput | number
    salary_floor_amount?: NullableFloatFieldUpdateOperationsInput | number | null
    justification?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FrequencyEntryUncheckedUpdateManyWithoutEmployeeInput = {
    id?: StringFieldUpdateOperationsInput | string
    sheet_id?: StringFieldUpdateOperationsInput | string
    absence_days?: IntFieldUpdateOperationsInput | number
    additional_night_hours?: FloatFieldUpdateOperationsInput | number
    overtime_50_hours?: FloatFieldUpdateOperationsInput | number
    overtime_100_hours?: FloatFieldUpdateOperationsInput | number
    on_call_hours?: FloatFieldUpdateOperationsInput | number
    vacation_days?: IntFieldUpdateOperationsInput | number
    salary_floor_amount?: NullableFloatFieldUpdateOperationsInput | number | null
    justification?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FrequencyEntryCreateManySheetInput = {
    id?: string
    employee_id: string
    absence_days: number
    additional_night_hours: number
    overtime_50_hours: number
    overtime_100_hours: number
    on_call_hours: number
    vacation_days: number
    salary_floor_amount?: number | null
    justification?: string | null
    created_at?: Date | string
  }

  export type FrequencyEntryUpdateWithoutSheetInput = {
    id?: StringFieldUpdateOperationsInput | string
    absence_days?: IntFieldUpdateOperationsInput | number
    additional_night_hours?: FloatFieldUpdateOperationsInput | number
    overtime_50_hours?: FloatFieldUpdateOperationsInput | number
    overtime_100_hours?: FloatFieldUpdateOperationsInput | number
    on_call_hours?: FloatFieldUpdateOperationsInput | number
    vacation_days?: IntFieldUpdateOperationsInput | number
    salary_floor_amount?: NullableFloatFieldUpdateOperationsInput | number | null
    justification?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    employee?: EmployeeUpdateOneRequiredWithoutFrequency_entriesNestedInput
  }

  export type FrequencyEntryUncheckedUpdateWithoutSheetInput = {
    id?: StringFieldUpdateOperationsInput | string
    employee_id?: StringFieldUpdateOperationsInput | string
    absence_days?: IntFieldUpdateOperationsInput | number
    additional_night_hours?: FloatFieldUpdateOperationsInput | number
    overtime_50_hours?: FloatFieldUpdateOperationsInput | number
    overtime_100_hours?: FloatFieldUpdateOperationsInput | number
    on_call_hours?: FloatFieldUpdateOperationsInput | number
    vacation_days?: IntFieldUpdateOperationsInput | number
    salary_floor_amount?: NullableFloatFieldUpdateOperationsInput | number | null
    justification?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FrequencyEntryUncheckedUpdateManyWithoutSheetInput = {
    id?: StringFieldUpdateOperationsInput | string
    employee_id?: StringFieldUpdateOperationsInput | string
    absence_days?: IntFieldUpdateOperationsInput | number
    additional_night_hours?: FloatFieldUpdateOperationsInput | number
    overtime_50_hours?: FloatFieldUpdateOperationsInput | number
    overtime_100_hours?: FloatFieldUpdateOperationsInput | number
    on_call_hours?: FloatFieldUpdateOperationsInput | number
    vacation_days?: IntFieldUpdateOperationsInput | number
    salary_floor_amount?: NullableFloatFieldUpdateOperationsInput | number | null
    justification?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventCodeCreateManyEvent_typeInput = {
    id?: string
    organization_id: string
    contract_type: string
    code: number
    created_at?: Date | string
  }

  export type EventCodeUpdateWithoutEvent_typeInput = {
    id?: StringFieldUpdateOperationsInput | string
    contract_type?: StringFieldUpdateOperationsInput | string
    code?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationUpdateOneRequiredWithoutEvent_codesNestedInput
  }

  export type EventCodeUncheckedUpdateWithoutEvent_typeInput = {
    id?: StringFieldUpdateOperationsInput | string
    organization_id?: StringFieldUpdateOperationsInput | string
    contract_type?: StringFieldUpdateOperationsInput | string
    code?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventCodeUncheckedUpdateManyWithoutEvent_typeInput = {
    id?: StringFieldUpdateOperationsInput | string
    organization_id?: StringFieldUpdateOperationsInput | string
    contract_type?: StringFieldUpdateOperationsInput | string
    code?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use OrganizationCountOutputTypeDefaultArgs instead
     */
    export type OrganizationCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = OrganizationCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UnitCountOutputTypeDefaultArgs instead
     */
    export type UnitCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UnitCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use EmployeeCountOutputTypeDefaultArgs instead
     */
    export type EmployeeCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = EmployeeCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use FrequencySheetCountOutputTypeDefaultArgs instead
     */
    export type FrequencySheetCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = FrequencySheetCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use EventTypeCountOutputTypeDefaultArgs instead
     */
    export type EventTypeCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = EventTypeCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use OrganizationDefaultArgs instead
     */
    export type OrganizationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = OrganizationDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UnitDefaultArgs instead
     */
    export type UnitArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UnitDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use EmployeeDefaultArgs instead
     */
    export type EmployeeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = EmployeeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use FrequencySheetDefaultArgs instead
     */
    export type FrequencySheetArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = FrequencySheetDefaultArgs<ExtArgs>
    /**
     * @deprecated Use FrequencyEntryDefaultArgs instead
     */
    export type FrequencyEntryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = FrequencyEntryDefaultArgs<ExtArgs>
    /**
     * @deprecated Use EventTypeDefaultArgs instead
     */
    export type EventTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = EventTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use EventCodeDefaultArgs instead
     */
    export type EventCodeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = EventCodeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SalaryFloorDefaultArgs instead
     */
    export type SalaryFloorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SalaryFloorDefaultArgs<ExtArgs>
    /**
     * @deprecated Use LogDefaultArgs instead
     */
    export type LogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = LogDefaultArgs<ExtArgs>

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