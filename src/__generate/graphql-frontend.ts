import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BigDecimal: any;
  Byte: any;
  Char: any;
  Long: any;
  Short: any;
  _ByteArray: any;
  _Date: any;
  _DateTime: any;
  _Float4: any;
  _OffsetDateTime: any;
};






export type Material = {
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  type: Scalars['String'];
  measure?: Maybe<Measure>;
  aggregateRoot?: Maybe<RootDictionary>;
  price: _G_Price;
  _getChar?: Maybe<Scalars['Char']>;
  _getString?: Maybe<Scalars['String']>;
  _getByte?: Maybe<Scalars['Byte']>;
  _getShort?: Maybe<Scalars['Short']>;
  _getInt?: Maybe<Scalars['Int']>;
  _getLong?: Maybe<Scalars['Long']>;
  _getFloat?: Maybe<Scalars['_Float4']>;
  _getDouble?: Maybe<Scalars['Float']>;
  _getBigDecimal?: Maybe<Scalars['BigDecimal']>;
  _getDate?: Maybe<Scalars['_Date']>;
  _getDateTime?: Maybe<Scalars['_DateTime']>;
  _getOffsetDateTime?: Maybe<Scalars['_OffsetDateTime']>;
  _getBoolean?: Maybe<Scalars['Boolean']>;
  _getByteArray?: Maybe<Scalars['_ByteArray']>;
};


export type MaterialMeasureArgs = {
  alias?: Maybe<Scalars['String']>;
};


export type MaterialAggregateRootArgs = {
  alias?: Maybe<Scalars['String']>;
};


export type Material_GetCharArgs = {
  expression: Scalars['String'];
};


export type Material_GetStringArgs = {
  expression: Scalars['String'];
};


export type Material_GetByteArgs = {
  expression: Scalars['String'];
};


export type Material_GetShortArgs = {
  expression: Scalars['String'];
};


export type Material_GetIntArgs = {
  expression: Scalars['String'];
};


export type Material_GetLongArgs = {
  expression: Scalars['String'];
};


export type Material_GetFloatArgs = {
  expression: Scalars['String'];
};


export type Material_GetDoubleArgs = {
  expression: Scalars['String'];
};


export type Material_GetBigDecimalArgs = {
  expression: Scalars['String'];
};


export type Material_GetDateArgs = {
  expression: Scalars['String'];
};


export type Material_GetDateTimeArgs = {
  expression: Scalars['String'];
};


export type Material_GetOffsetDateTimeArgs = {
  expression: Scalars['String'];
};


export type Material_GetBooleanArgs = {
  expression: Scalars['String'];
};


export type Material_GetByteArrayArgs = {
  expression: Scalars['String'];
};

export type MaterialFact = {
  id: Scalars['ID'];
  aggVersion: Scalars['Long'];
  chgCnt?: Maybe<Scalars['Long']>;
  lastChangeDate?: Maybe<Scalars['_DateTime']>;
  count?: Maybe<Scalars['BigDecimal']>;
  type: Scalars['String'];
  workFact: WorkFact;
  material?: Maybe<Material>;
  aggregateRoot?: Maybe<Project>;
  price: _G_Price;
  _getChar?: Maybe<Scalars['Char']>;
  _getString?: Maybe<Scalars['String']>;
  _getByte?: Maybe<Scalars['Byte']>;
  _getShort?: Maybe<Scalars['Short']>;
  _getInt?: Maybe<Scalars['Int']>;
  _getLong?: Maybe<Scalars['Long']>;
  _getFloat?: Maybe<Scalars['_Float4']>;
  _getDouble?: Maybe<Scalars['Float']>;
  _getBigDecimal?: Maybe<Scalars['BigDecimal']>;
  _getDate?: Maybe<Scalars['_Date']>;
  _getDateTime?: Maybe<Scalars['_DateTime']>;
  _getOffsetDateTime?: Maybe<Scalars['_OffsetDateTime']>;
  _getBoolean?: Maybe<Scalars['Boolean']>;
  _getByteArray?: Maybe<Scalars['_ByteArray']>;
};


export type MaterialFactWorkFactArgs = {
  alias?: Maybe<Scalars['String']>;
};


export type MaterialFactMaterialArgs = {
  alias?: Maybe<Scalars['String']>;
};


export type MaterialFactAggregateRootArgs = {
  alias?: Maybe<Scalars['String']>;
};


export type MaterialFact_GetCharArgs = {
  expression: Scalars['String'];
};


export type MaterialFact_GetStringArgs = {
  expression: Scalars['String'];
};


export type MaterialFact_GetByteArgs = {
  expression: Scalars['String'];
};


export type MaterialFact_GetShortArgs = {
  expression: Scalars['String'];
};


export type MaterialFact_GetIntArgs = {
  expression: Scalars['String'];
};


export type MaterialFact_GetLongArgs = {
  expression: Scalars['String'];
};


export type MaterialFact_GetFloatArgs = {
  expression: Scalars['String'];
};


export type MaterialFact_GetDoubleArgs = {
  expression: Scalars['String'];
};


export type MaterialFact_GetBigDecimalArgs = {
  expression: Scalars['String'];
};


export type MaterialFact_GetDateArgs = {
  expression: Scalars['String'];
};


export type MaterialFact_GetDateTimeArgs = {
  expression: Scalars['String'];
};


export type MaterialFact_GetOffsetDateTimeArgs = {
  expression: Scalars['String'];
};


export type MaterialFact_GetBooleanArgs = {
  expression: Scalars['String'];
};


export type MaterialFact_GetByteArrayArgs = {
  expression: Scalars['String'];
};

export type Measure = {
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  type: Scalars['String'];
  aggregateRoot?: Maybe<RootDictionary>;
  _getChar?: Maybe<Scalars['Char']>;
  _getString?: Maybe<Scalars['String']>;
  _getByte?: Maybe<Scalars['Byte']>;
  _getShort?: Maybe<Scalars['Short']>;
  _getInt?: Maybe<Scalars['Int']>;
  _getLong?: Maybe<Scalars['Long']>;
  _getFloat?: Maybe<Scalars['_Float4']>;
  _getDouble?: Maybe<Scalars['Float']>;
  _getBigDecimal?: Maybe<Scalars['BigDecimal']>;
  _getDate?: Maybe<Scalars['_Date']>;
  _getDateTime?: Maybe<Scalars['_DateTime']>;
  _getOffsetDateTime?: Maybe<Scalars['_OffsetDateTime']>;
  _getBoolean?: Maybe<Scalars['Boolean']>;
  _getByteArray?: Maybe<Scalars['_ByteArray']>;
};


export type MeasureAggregateRootArgs = {
  alias?: Maybe<Scalars['String']>;
};


export type Measure_GetCharArgs = {
  expression: Scalars['String'];
};


export type Measure_GetStringArgs = {
  expression: Scalars['String'];
};


export type Measure_GetByteArgs = {
  expression: Scalars['String'];
};


export type Measure_GetShortArgs = {
  expression: Scalars['String'];
};


export type Measure_GetIntArgs = {
  expression: Scalars['String'];
};


export type Measure_GetLongArgs = {
  expression: Scalars['String'];
};


export type Measure_GetFloatArgs = {
  expression: Scalars['String'];
};


export type Measure_GetDoubleArgs = {
  expression: Scalars['String'];
};


export type Measure_GetBigDecimalArgs = {
  expression: Scalars['String'];
};


export type Measure_GetDateArgs = {
  expression: Scalars['String'];
};


export type Measure_GetDateTimeArgs = {
  expression: Scalars['String'];
};


export type Measure_GetOffsetDateTimeArgs = {
  expression: Scalars['String'];
};


export type Measure_GetBooleanArgs = {
  expression: Scalars['String'];
};


export type Measure_GetByteArrayArgs = {
  expression: Scalars['String'];
};

export type Project = {
  id: Scalars['ID'];
  aggVersion: Scalars['Long'];
  chgCnt?: Maybe<Scalars['Long']>;
  lastChangeDate?: Maybe<Scalars['_DateTime']>;
  name?: Maybe<Scalars['String']>;
  openDate?: Maybe<Scalars['_Date']>;
  closeDate?: Maybe<Scalars['_Date']>;
  descr?: Maybe<Scalars['String']>;
  type: Scalars['String'];
  workGroupList: _Ec_WorkGroup;
  _getChar?: Maybe<Scalars['Char']>;
  _getString?: Maybe<Scalars['String']>;
  _getByte?: Maybe<Scalars['Byte']>;
  _getShort?: Maybe<Scalars['Short']>;
  _getInt?: Maybe<Scalars['Int']>;
  _getLong?: Maybe<Scalars['Long']>;
  _getFloat?: Maybe<Scalars['_Float4']>;
  _getDouble?: Maybe<Scalars['Float']>;
  _getBigDecimal?: Maybe<Scalars['BigDecimal']>;
  _getDate?: Maybe<Scalars['_Date']>;
  _getDateTime?: Maybe<Scalars['_DateTime']>;
  _getOffsetDateTime?: Maybe<Scalars['_OffsetDateTime']>;
  _getBoolean?: Maybe<Scalars['Boolean']>;
  _getByteArray?: Maybe<Scalars['_ByteArray']>;
};


export type ProjectWorkGroupListArgs = {
  elemAlias?: Maybe<Scalars['String']>;
  cond?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<_SortCriterionSpecification>>;
};


export type Project_GetCharArgs = {
  expression: Scalars['String'];
};


export type Project_GetStringArgs = {
  expression: Scalars['String'];
};


export type Project_GetByteArgs = {
  expression: Scalars['String'];
};


export type Project_GetShortArgs = {
  expression: Scalars['String'];
};


export type Project_GetIntArgs = {
  expression: Scalars['String'];
};


export type Project_GetLongArgs = {
  expression: Scalars['String'];
};


export type Project_GetFloatArgs = {
  expression: Scalars['String'];
};


export type Project_GetDoubleArgs = {
  expression: Scalars['String'];
};


export type Project_GetBigDecimalArgs = {
  expression: Scalars['String'];
};


export type Project_GetDateArgs = {
  expression: Scalars['String'];
};


export type Project_GetDateTimeArgs = {
  expression: Scalars['String'];
};


export type Project_GetOffsetDateTimeArgs = {
  expression: Scalars['String'];
};


export type Project_GetBooleanArgs = {
  expression: Scalars['String'];
};


export type Project_GetByteArrayArgs = {
  expression: Scalars['String'];
};

export type RootDictionary = {
  id: Scalars['ID'];
  type: Scalars['String'];
  _getChar?: Maybe<Scalars['Char']>;
  _getString?: Maybe<Scalars['String']>;
  _getByte?: Maybe<Scalars['Byte']>;
  _getShort?: Maybe<Scalars['Short']>;
  _getInt?: Maybe<Scalars['Int']>;
  _getLong?: Maybe<Scalars['Long']>;
  _getFloat?: Maybe<Scalars['_Float4']>;
  _getDouble?: Maybe<Scalars['Float']>;
  _getBigDecimal?: Maybe<Scalars['BigDecimal']>;
  _getDate?: Maybe<Scalars['_Date']>;
  _getDateTime?: Maybe<Scalars['_DateTime']>;
  _getOffsetDateTime?: Maybe<Scalars['_OffsetDateTime']>;
  _getBoolean?: Maybe<Scalars['Boolean']>;
  _getByteArray?: Maybe<Scalars['_ByteArray']>;
};


export type RootDictionary_GetCharArgs = {
  expression: Scalars['String'];
};


export type RootDictionary_GetStringArgs = {
  expression: Scalars['String'];
};


export type RootDictionary_GetByteArgs = {
  expression: Scalars['String'];
};


export type RootDictionary_GetShortArgs = {
  expression: Scalars['String'];
};


export type RootDictionary_GetIntArgs = {
  expression: Scalars['String'];
};


export type RootDictionary_GetLongArgs = {
  expression: Scalars['String'];
};


export type RootDictionary_GetFloatArgs = {
  expression: Scalars['String'];
};


export type RootDictionary_GetDoubleArgs = {
  expression: Scalars['String'];
};


export type RootDictionary_GetBigDecimalArgs = {
  expression: Scalars['String'];
};


export type RootDictionary_GetDateArgs = {
  expression: Scalars['String'];
};


export type RootDictionary_GetDateTimeArgs = {
  expression: Scalars['String'];
};


export type RootDictionary_GetOffsetDateTimeArgs = {
  expression: Scalars['String'];
};


export type RootDictionary_GetBooleanArgs = {
  expression: Scalars['String'];
};


export type RootDictionary_GetByteArrayArgs = {
  expression: Scalars['String'];
};


export type SysAdminSettings = {
  id: Scalars['ID'];
  aggVersion: Scalars['Long'];
  chgCnt?: Maybe<Scalars['Long']>;
  lastChangeDate?: Maybe<Scalars['_DateTime']>;
  key?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
  rootSecurity: SysRootSecurity;
  aggregateRoot?: Maybe<SysRootSecurity>;
  _getChar?: Maybe<Scalars['Char']>;
  _getString?: Maybe<Scalars['String']>;
  _getByte?: Maybe<Scalars['Byte']>;
  _getShort?: Maybe<Scalars['Short']>;
  _getInt?: Maybe<Scalars['Int']>;
  _getLong?: Maybe<Scalars['Long']>;
  _getFloat?: Maybe<Scalars['_Float4']>;
  _getDouble?: Maybe<Scalars['Float']>;
  _getBigDecimal?: Maybe<Scalars['BigDecimal']>;
  _getDate?: Maybe<Scalars['_Date']>;
  _getDateTime?: Maybe<Scalars['_DateTime']>;
  _getOffsetDateTime?: Maybe<Scalars['_OffsetDateTime']>;
  _getBoolean?: Maybe<Scalars['Boolean']>;
  _getByteArray?: Maybe<Scalars['_ByteArray']>;
};


export type SysAdminSettingsRootSecurityArgs = {
  alias?: Maybe<Scalars['String']>;
};


export type SysAdminSettingsAggregateRootArgs = {
  alias?: Maybe<Scalars['String']>;
};


export type SysAdminSettings_GetCharArgs = {
  expression: Scalars['String'];
};


export type SysAdminSettings_GetStringArgs = {
  expression: Scalars['String'];
};


export type SysAdminSettings_GetByteArgs = {
  expression: Scalars['String'];
};


export type SysAdminSettings_GetShortArgs = {
  expression: Scalars['String'];
};


export type SysAdminSettings_GetIntArgs = {
  expression: Scalars['String'];
};


export type SysAdminSettings_GetLongArgs = {
  expression: Scalars['String'];
};


export type SysAdminSettings_GetFloatArgs = {
  expression: Scalars['String'];
};


export type SysAdminSettings_GetDoubleArgs = {
  expression: Scalars['String'];
};


export type SysAdminSettings_GetBigDecimalArgs = {
  expression: Scalars['String'];
};


export type SysAdminSettings_GetDateArgs = {
  expression: Scalars['String'];
};


export type SysAdminSettings_GetDateTimeArgs = {
  expression: Scalars['String'];
};


export type SysAdminSettings_GetOffsetDateTimeArgs = {
  expression: Scalars['String'];
};


export type SysAdminSettings_GetBooleanArgs = {
  expression: Scalars['String'];
};


export type SysAdminSettings_GetByteArrayArgs = {
  expression: Scalars['String'];
};

export type SysCheckSelect = {
  id: Scalars['ID'];
  aggVersion: Scalars['Long'];
  chgCnt?: Maybe<Scalars['Long']>;
  lastChangeDate?: Maybe<Scalars['_DateTime']>;
  conditionValue?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  orderValue?: Maybe<Scalars['Int']>;
  typeName?: Maybe<Scalars['String']>;
  operation: SysOperation;
  aggregateRoot?: Maybe<SysRootSecurity>;
  _getChar?: Maybe<Scalars['Char']>;
  _getString?: Maybe<Scalars['String']>;
  _getByte?: Maybe<Scalars['Byte']>;
  _getShort?: Maybe<Scalars['Short']>;
  _getInt?: Maybe<Scalars['Int']>;
  _getLong?: Maybe<Scalars['Long']>;
  _getFloat?: Maybe<Scalars['_Float4']>;
  _getDouble?: Maybe<Scalars['Float']>;
  _getBigDecimal?: Maybe<Scalars['BigDecimal']>;
  _getDate?: Maybe<Scalars['_Date']>;
  _getDateTime?: Maybe<Scalars['_DateTime']>;
  _getOffsetDateTime?: Maybe<Scalars['_OffsetDateTime']>;
  _getBoolean?: Maybe<Scalars['Boolean']>;
  _getByteArray?: Maybe<Scalars['_ByteArray']>;
};


export type SysCheckSelectOperationArgs = {
  alias?: Maybe<Scalars['String']>;
};


export type SysCheckSelectAggregateRootArgs = {
  alias?: Maybe<Scalars['String']>;
};


export type SysCheckSelect_GetCharArgs = {
  expression: Scalars['String'];
};


export type SysCheckSelect_GetStringArgs = {
  expression: Scalars['String'];
};


export type SysCheckSelect_GetByteArgs = {
  expression: Scalars['String'];
};


export type SysCheckSelect_GetShortArgs = {
  expression: Scalars['String'];
};


export type SysCheckSelect_GetIntArgs = {
  expression: Scalars['String'];
};


export type SysCheckSelect_GetLongArgs = {
  expression: Scalars['String'];
};


export type SysCheckSelect_GetFloatArgs = {
  expression: Scalars['String'];
};


export type SysCheckSelect_GetDoubleArgs = {
  expression: Scalars['String'];
};


export type SysCheckSelect_GetBigDecimalArgs = {
  expression: Scalars['String'];
};


export type SysCheckSelect_GetDateArgs = {
  expression: Scalars['String'];
};


export type SysCheckSelect_GetDateTimeArgs = {
  expression: Scalars['String'];
};


export type SysCheckSelect_GetOffsetDateTimeArgs = {
  expression: Scalars['String'];
};


export type SysCheckSelect_GetBooleanArgs = {
  expression: Scalars['String'];
};


export type SysCheckSelect_GetByteArrayArgs = {
  expression: Scalars['String'];
};

export type SysOperation = {
  id: Scalars['ID'];
  aggVersion: Scalars['Long'];
  chgCnt?: Maybe<Scalars['Long']>;
  lastChangeDate?: Maybe<Scalars['_DateTime']>;
  allowEmptyChecks?: Maybe<Scalars['Boolean']>;
  body?: Maybe<Scalars['String']>;
  disableJwtVerification?: Maybe<Scalars['Boolean']>;
  hashValue?: Maybe<Scalars['String']>;
  rootSecurity: SysRootSecurity;
  aggregateRoot?: Maybe<SysRootSecurity>;
  checkSelects: _Ec_SysCheckSelect;
  paramAdditions: _Ec_SysParamAddition;
  _getChar?: Maybe<Scalars['Char']>;
  _getString?: Maybe<Scalars['String']>;
  _getByte?: Maybe<Scalars['Byte']>;
  _getShort?: Maybe<Scalars['Short']>;
  _getInt?: Maybe<Scalars['Int']>;
  _getLong?: Maybe<Scalars['Long']>;
  _getFloat?: Maybe<Scalars['_Float4']>;
  _getDouble?: Maybe<Scalars['Float']>;
  _getBigDecimal?: Maybe<Scalars['BigDecimal']>;
  _getDate?: Maybe<Scalars['_Date']>;
  _getDateTime?: Maybe<Scalars['_DateTime']>;
  _getOffsetDateTime?: Maybe<Scalars['_OffsetDateTime']>;
  _getBoolean?: Maybe<Scalars['Boolean']>;
  _getByteArray?: Maybe<Scalars['_ByteArray']>;
};


export type SysOperationRootSecurityArgs = {
  alias?: Maybe<Scalars['String']>;
};


export type SysOperationAggregateRootArgs = {
  alias?: Maybe<Scalars['String']>;
};


export type SysOperationCheckSelectsArgs = {
  elemAlias?: Maybe<Scalars['String']>;
  cond?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<_SortCriterionSpecification>>;
};


export type SysOperationParamAdditionsArgs = {
  elemAlias?: Maybe<Scalars['String']>;
  cond?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<_SortCriterionSpecification>>;
};


export type SysOperation_GetCharArgs = {
  expression: Scalars['String'];
};


export type SysOperation_GetStringArgs = {
  expression: Scalars['String'];
};


export type SysOperation_GetByteArgs = {
  expression: Scalars['String'];
};


export type SysOperation_GetShortArgs = {
  expression: Scalars['String'];
};


export type SysOperation_GetIntArgs = {
  expression: Scalars['String'];
};


export type SysOperation_GetLongArgs = {
  expression: Scalars['String'];
};


export type SysOperation_GetFloatArgs = {
  expression: Scalars['String'];
};


export type SysOperation_GetDoubleArgs = {
  expression: Scalars['String'];
};


export type SysOperation_GetBigDecimalArgs = {
  expression: Scalars['String'];
};


export type SysOperation_GetDateArgs = {
  expression: Scalars['String'];
};


export type SysOperation_GetDateTimeArgs = {
  expression: Scalars['String'];
};


export type SysOperation_GetOffsetDateTimeArgs = {
  expression: Scalars['String'];
};


export type SysOperation_GetBooleanArgs = {
  expression: Scalars['String'];
};


export type SysOperation_GetByteArrayArgs = {
  expression: Scalars['String'];
};

export type SysParamAddition = {
  id: Scalars['ID'];
  aggVersion: Scalars['Long'];
  chgCnt?: Maybe<Scalars['Long']>;
  lastChangeDate?: Maybe<Scalars['_DateTime']>;
  paramAddition?: Maybe<Scalars['String']>;
  paramName?: Maybe<Scalars['String']>;
  operation: SysOperation;
  aggregateRoot?: Maybe<SysRootSecurity>;
  _getChar?: Maybe<Scalars['Char']>;
  _getString?: Maybe<Scalars['String']>;
  _getByte?: Maybe<Scalars['Byte']>;
  _getShort?: Maybe<Scalars['Short']>;
  _getInt?: Maybe<Scalars['Int']>;
  _getLong?: Maybe<Scalars['Long']>;
  _getFloat?: Maybe<Scalars['_Float4']>;
  _getDouble?: Maybe<Scalars['Float']>;
  _getBigDecimal?: Maybe<Scalars['BigDecimal']>;
  _getDate?: Maybe<Scalars['_Date']>;
  _getDateTime?: Maybe<Scalars['_DateTime']>;
  _getOffsetDateTime?: Maybe<Scalars['_OffsetDateTime']>;
  _getBoolean?: Maybe<Scalars['Boolean']>;
  _getByteArray?: Maybe<Scalars['_ByteArray']>;
};


export type SysParamAdditionOperationArgs = {
  alias?: Maybe<Scalars['String']>;
};


export type SysParamAdditionAggregateRootArgs = {
  alias?: Maybe<Scalars['String']>;
};


export type SysParamAddition_GetCharArgs = {
  expression: Scalars['String'];
};


export type SysParamAddition_GetStringArgs = {
  expression: Scalars['String'];
};


export type SysParamAddition_GetByteArgs = {
  expression: Scalars['String'];
};


export type SysParamAddition_GetShortArgs = {
  expression: Scalars['String'];
};


export type SysParamAddition_GetIntArgs = {
  expression: Scalars['String'];
};


export type SysParamAddition_GetLongArgs = {
  expression: Scalars['String'];
};


export type SysParamAddition_GetFloatArgs = {
  expression: Scalars['String'];
};


export type SysParamAddition_GetDoubleArgs = {
  expression: Scalars['String'];
};


export type SysParamAddition_GetBigDecimalArgs = {
  expression: Scalars['String'];
};


export type SysParamAddition_GetDateArgs = {
  expression: Scalars['String'];
};


export type SysParamAddition_GetDateTimeArgs = {
  expression: Scalars['String'];
};


export type SysParamAddition_GetOffsetDateTimeArgs = {
  expression: Scalars['String'];
};


export type SysParamAddition_GetBooleanArgs = {
  expression: Scalars['String'];
};


export type SysParamAddition_GetByteArrayArgs = {
  expression: Scalars['String'];
};

export type SysRootSecurity = {
  id: Scalars['ID'];
  aggVersion: Scalars['Long'];
  chgCnt?: Maybe<Scalars['Long']>;
  lastChangeDate?: Maybe<Scalars['_DateTime']>;
  type: Scalars['String'];
  adminSettings: _Ec_SysAdminSettings;
  operations: _Ec_SysOperation;
  _getChar?: Maybe<Scalars['Char']>;
  _getString?: Maybe<Scalars['String']>;
  _getByte?: Maybe<Scalars['Byte']>;
  _getShort?: Maybe<Scalars['Short']>;
  _getInt?: Maybe<Scalars['Int']>;
  _getLong?: Maybe<Scalars['Long']>;
  _getFloat?: Maybe<Scalars['_Float4']>;
  _getDouble?: Maybe<Scalars['Float']>;
  _getBigDecimal?: Maybe<Scalars['BigDecimal']>;
  _getDate?: Maybe<Scalars['_Date']>;
  _getDateTime?: Maybe<Scalars['_DateTime']>;
  _getOffsetDateTime?: Maybe<Scalars['_OffsetDateTime']>;
  _getBoolean?: Maybe<Scalars['Boolean']>;
  _getByteArray?: Maybe<Scalars['_ByteArray']>;
};


export type SysRootSecurityAdminSettingsArgs = {
  elemAlias?: Maybe<Scalars['String']>;
  cond?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<_SortCriterionSpecification>>;
};


export type SysRootSecurityOperationsArgs = {
  elemAlias?: Maybe<Scalars['String']>;
  cond?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<_SortCriterionSpecification>>;
};


export type SysRootSecurity_GetCharArgs = {
  expression: Scalars['String'];
};


export type SysRootSecurity_GetStringArgs = {
  expression: Scalars['String'];
};


export type SysRootSecurity_GetByteArgs = {
  expression: Scalars['String'];
};


export type SysRootSecurity_GetShortArgs = {
  expression: Scalars['String'];
};


export type SysRootSecurity_GetIntArgs = {
  expression: Scalars['String'];
};


export type SysRootSecurity_GetLongArgs = {
  expression: Scalars['String'];
};


export type SysRootSecurity_GetFloatArgs = {
  expression: Scalars['String'];
};


export type SysRootSecurity_GetDoubleArgs = {
  expression: Scalars['String'];
};


export type SysRootSecurity_GetBigDecimalArgs = {
  expression: Scalars['String'];
};


export type SysRootSecurity_GetDateArgs = {
  expression: Scalars['String'];
};


export type SysRootSecurity_GetDateTimeArgs = {
  expression: Scalars['String'];
};


export type SysRootSecurity_GetOffsetDateTimeArgs = {
  expression: Scalars['String'];
};


export type SysRootSecurity_GetBooleanArgs = {
  expression: Scalars['String'];
};


export type SysRootSecurity_GetByteArrayArgs = {
  expression: Scalars['String'];
};

export type WorkFact = {
  id: Scalars['ID'];
  aggVersion: Scalars['Long'];
  chgCnt?: Maybe<Scalars['Long']>;
  lastChangeDate?: Maybe<Scalars['_DateTime']>;
  count?: Maybe<Scalars['BigDecimal']>;
  orderInGroup?: Maybe<Scalars['Int']>;
  type: Scalars['String'];
  workGroup: WorkGroup;
  workType?: Maybe<WorkType>;
  aggregateRoot?: Maybe<Project>;
  materialFact: _Ec_MaterialFact;
  price: _G_Price;
  _getChar?: Maybe<Scalars['Char']>;
  _getString?: Maybe<Scalars['String']>;
  _getByte?: Maybe<Scalars['Byte']>;
  _getShort?: Maybe<Scalars['Short']>;
  _getInt?: Maybe<Scalars['Int']>;
  _getLong?: Maybe<Scalars['Long']>;
  _getFloat?: Maybe<Scalars['_Float4']>;
  _getDouble?: Maybe<Scalars['Float']>;
  _getBigDecimal?: Maybe<Scalars['BigDecimal']>;
  _getDate?: Maybe<Scalars['_Date']>;
  _getDateTime?: Maybe<Scalars['_DateTime']>;
  _getOffsetDateTime?: Maybe<Scalars['_OffsetDateTime']>;
  _getBoolean?: Maybe<Scalars['Boolean']>;
  _getByteArray?: Maybe<Scalars['_ByteArray']>;
};


export type WorkFactWorkGroupArgs = {
  alias?: Maybe<Scalars['String']>;
};


export type WorkFactWorkTypeArgs = {
  alias?: Maybe<Scalars['String']>;
};


export type WorkFactAggregateRootArgs = {
  alias?: Maybe<Scalars['String']>;
};


export type WorkFactMaterialFactArgs = {
  elemAlias?: Maybe<Scalars['String']>;
  cond?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<_SortCriterionSpecification>>;
};


export type WorkFact_GetCharArgs = {
  expression: Scalars['String'];
};


export type WorkFact_GetStringArgs = {
  expression: Scalars['String'];
};


export type WorkFact_GetByteArgs = {
  expression: Scalars['String'];
};


export type WorkFact_GetShortArgs = {
  expression: Scalars['String'];
};


export type WorkFact_GetIntArgs = {
  expression: Scalars['String'];
};


export type WorkFact_GetLongArgs = {
  expression: Scalars['String'];
};


export type WorkFact_GetFloatArgs = {
  expression: Scalars['String'];
};


export type WorkFact_GetDoubleArgs = {
  expression: Scalars['String'];
};


export type WorkFact_GetBigDecimalArgs = {
  expression: Scalars['String'];
};


export type WorkFact_GetDateArgs = {
  expression: Scalars['String'];
};


export type WorkFact_GetDateTimeArgs = {
  expression: Scalars['String'];
};


export type WorkFact_GetOffsetDateTimeArgs = {
  expression: Scalars['String'];
};


export type WorkFact_GetBooleanArgs = {
  expression: Scalars['String'];
};


export type WorkFact_GetByteArrayArgs = {
  expression: Scalars['String'];
};

export type WorkGroup = {
  id: Scalars['ID'];
  aggVersion: Scalars['Long'];
  chgCnt?: Maybe<Scalars['Long']>;
  lastChangeDate?: Maybe<Scalars['_DateTime']>;
  descr?: Maybe<Scalars['String']>;
  type: Scalars['String'];
  project: Project;
  aggregateRoot?: Maybe<Project>;
  workFactList: _Ec_WorkFact;
  _getChar?: Maybe<Scalars['Char']>;
  _getString?: Maybe<Scalars['String']>;
  _getByte?: Maybe<Scalars['Byte']>;
  _getShort?: Maybe<Scalars['Short']>;
  _getInt?: Maybe<Scalars['Int']>;
  _getLong?: Maybe<Scalars['Long']>;
  _getFloat?: Maybe<Scalars['_Float4']>;
  _getDouble?: Maybe<Scalars['Float']>;
  _getBigDecimal?: Maybe<Scalars['BigDecimal']>;
  _getDate?: Maybe<Scalars['_Date']>;
  _getDateTime?: Maybe<Scalars['_DateTime']>;
  _getOffsetDateTime?: Maybe<Scalars['_OffsetDateTime']>;
  _getBoolean?: Maybe<Scalars['Boolean']>;
  _getByteArray?: Maybe<Scalars['_ByteArray']>;
};


export type WorkGroupProjectArgs = {
  alias?: Maybe<Scalars['String']>;
};


export type WorkGroupAggregateRootArgs = {
  alias?: Maybe<Scalars['String']>;
};


export type WorkGroupWorkFactListArgs = {
  elemAlias?: Maybe<Scalars['String']>;
  cond?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<_SortCriterionSpecification>>;
};


export type WorkGroup_GetCharArgs = {
  expression: Scalars['String'];
};


export type WorkGroup_GetStringArgs = {
  expression: Scalars['String'];
};


export type WorkGroup_GetByteArgs = {
  expression: Scalars['String'];
};


export type WorkGroup_GetShortArgs = {
  expression: Scalars['String'];
};


export type WorkGroup_GetIntArgs = {
  expression: Scalars['String'];
};


export type WorkGroup_GetLongArgs = {
  expression: Scalars['String'];
};


export type WorkGroup_GetFloatArgs = {
  expression: Scalars['String'];
};


export type WorkGroup_GetDoubleArgs = {
  expression: Scalars['String'];
};


export type WorkGroup_GetBigDecimalArgs = {
  expression: Scalars['String'];
};


export type WorkGroup_GetDateArgs = {
  expression: Scalars['String'];
};


export type WorkGroup_GetDateTimeArgs = {
  expression: Scalars['String'];
};


export type WorkGroup_GetOffsetDateTimeArgs = {
  expression: Scalars['String'];
};


export type WorkGroup_GetBooleanArgs = {
  expression: Scalars['String'];
};


export type WorkGroup_GetByteArrayArgs = {
  expression: Scalars['String'];
};

export type WorkType = {
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  type: Scalars['String'];
  measure?: Maybe<Measure>;
  aggregateRoot?: Maybe<RootDictionary>;
  materialList: _Ec_WorkTypeMaterial;
  _getChar?: Maybe<Scalars['Char']>;
  _getString?: Maybe<Scalars['String']>;
  _getByte?: Maybe<Scalars['Byte']>;
  _getShort?: Maybe<Scalars['Short']>;
  _getInt?: Maybe<Scalars['Int']>;
  _getLong?: Maybe<Scalars['Long']>;
  _getFloat?: Maybe<Scalars['_Float4']>;
  _getDouble?: Maybe<Scalars['Float']>;
  _getBigDecimal?: Maybe<Scalars['BigDecimal']>;
  _getDate?: Maybe<Scalars['_Date']>;
  _getDateTime?: Maybe<Scalars['_DateTime']>;
  _getOffsetDateTime?: Maybe<Scalars['_OffsetDateTime']>;
  _getBoolean?: Maybe<Scalars['Boolean']>;
  _getByteArray?: Maybe<Scalars['_ByteArray']>;
};


export type WorkTypeMeasureArgs = {
  alias?: Maybe<Scalars['String']>;
};


export type WorkTypeAggregateRootArgs = {
  alias?: Maybe<Scalars['String']>;
};


export type WorkTypeMaterialListArgs = {
  elemAlias?: Maybe<Scalars['String']>;
  cond?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<_SortCriterionSpecification>>;
};


export type WorkType_GetCharArgs = {
  expression: Scalars['String'];
};


export type WorkType_GetStringArgs = {
  expression: Scalars['String'];
};


export type WorkType_GetByteArgs = {
  expression: Scalars['String'];
};


export type WorkType_GetShortArgs = {
  expression: Scalars['String'];
};


export type WorkType_GetIntArgs = {
  expression: Scalars['String'];
};


export type WorkType_GetLongArgs = {
  expression: Scalars['String'];
};


export type WorkType_GetFloatArgs = {
  expression: Scalars['String'];
};


export type WorkType_GetDoubleArgs = {
  expression: Scalars['String'];
};


export type WorkType_GetBigDecimalArgs = {
  expression: Scalars['String'];
};


export type WorkType_GetDateArgs = {
  expression: Scalars['String'];
};


export type WorkType_GetDateTimeArgs = {
  expression: Scalars['String'];
};


export type WorkType_GetOffsetDateTimeArgs = {
  expression: Scalars['String'];
};


export type WorkType_GetBooleanArgs = {
  expression: Scalars['String'];
};


export type WorkType_GetByteArrayArgs = {
  expression: Scalars['String'];
};

export type WorkTypeMaterial = {
  id: Scalars['ID'];
  formula?: Maybe<Scalars['String']>;
  type: Scalars['String'];
  workType?: Maybe<WorkType>;
  material?: Maybe<Material>;
  aggregateRoot?: Maybe<RootDictionary>;
  _getChar?: Maybe<Scalars['Char']>;
  _getString?: Maybe<Scalars['String']>;
  _getByte?: Maybe<Scalars['Byte']>;
  _getShort?: Maybe<Scalars['Short']>;
  _getInt?: Maybe<Scalars['Int']>;
  _getLong?: Maybe<Scalars['Long']>;
  _getFloat?: Maybe<Scalars['_Float4']>;
  _getDouble?: Maybe<Scalars['Float']>;
  _getBigDecimal?: Maybe<Scalars['BigDecimal']>;
  _getDate?: Maybe<Scalars['_Date']>;
  _getDateTime?: Maybe<Scalars['_DateTime']>;
  _getOffsetDateTime?: Maybe<Scalars['_OffsetDateTime']>;
  _getBoolean?: Maybe<Scalars['Boolean']>;
  _getByteArray?: Maybe<Scalars['_ByteArray']>;
};


export type WorkTypeMaterialWorkTypeArgs = {
  alias?: Maybe<Scalars['String']>;
};


export type WorkTypeMaterialMaterialArgs = {
  alias?: Maybe<Scalars['String']>;
};


export type WorkTypeMaterialAggregateRootArgs = {
  alias?: Maybe<Scalars['String']>;
};


export type WorkTypeMaterial_GetCharArgs = {
  expression: Scalars['String'];
};


export type WorkTypeMaterial_GetStringArgs = {
  expression: Scalars['String'];
};


export type WorkTypeMaterial_GetByteArgs = {
  expression: Scalars['String'];
};


export type WorkTypeMaterial_GetShortArgs = {
  expression: Scalars['String'];
};


export type WorkTypeMaterial_GetIntArgs = {
  expression: Scalars['String'];
};


export type WorkTypeMaterial_GetLongArgs = {
  expression: Scalars['String'];
};


export type WorkTypeMaterial_GetFloatArgs = {
  expression: Scalars['String'];
};


export type WorkTypeMaterial_GetDoubleArgs = {
  expression: Scalars['String'];
};


export type WorkTypeMaterial_GetBigDecimalArgs = {
  expression: Scalars['String'];
};


export type WorkTypeMaterial_GetDateArgs = {
  expression: Scalars['String'];
};


export type WorkTypeMaterial_GetDateTimeArgs = {
  expression: Scalars['String'];
};


export type WorkTypeMaterial_GetOffsetDateTimeArgs = {
  expression: Scalars['String'];
};


export type WorkTypeMaterial_GetBooleanArgs = {
  expression: Scalars['String'];
};


export type WorkTypeMaterial_GetByteArrayArgs = {
  expression: Scalars['String'];
};


export type _CompareProjectInput = {
  closeDate?: Maybe<Scalars['_Date']>;
  descr?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  openDate?: Maybe<Scalars['_Date']>;
};

export type _CompareWorkFactInput = {
  orderInGroup?: Maybe<Scalars['Int']>;
};

export type _CompareWorkGroupInput = {
  descr?: Maybe<Scalars['String']>;
};

export type _CreateMaterialFactInput = {
  workFact: Scalars['ID'];
  material?: Maybe<Scalars['ID']>;
  price?: Maybe<_PriceInput>;
  count?: Maybe<Scalars['BigDecimal']>;
};

export type _CreateMaterialInput = {
  measure?: Maybe<Scalars['ID']>;
  price?: Maybe<_PriceInput>;
  name?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
};

export type _CreateMeasureInput = {
  name?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
};

export type _CreateProjectInput = {
  closeDate?: Maybe<Scalars['_Date']>;
  descr?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  openDate?: Maybe<Scalars['_Date']>;
};

export type _CreateWorkFactInput = {
  orderInGroup?: Maybe<Scalars['Int']>;
  workGroup: Scalars['ID'];
  price?: Maybe<_PriceInput>;
  workType?: Maybe<Scalars['ID']>;
  count?: Maybe<Scalars['BigDecimal']>;
};

export type _CreateWorkGroupInput = {
  descr?: Maybe<Scalars['String']>;
  project: Scalars['ID'];
};

export type _CreateWorkTypeInput = {
  measure?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
};

export type _CreateWorkTypeMaterialInput = {
  material?: Maybe<Scalars['ID']>;
  workType?: Maybe<Scalars['ID']>;
  formula?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
};



export type _DeleteManyProjectInput = {
  id: Scalars['ID'];
  compare?: Maybe<_CompareProjectInput>;
};

export type _DeleteManyWorkFactInput = {
  id: Scalars['ID'];
  compare?: Maybe<_CompareWorkFactInput>;
};

export type _DeleteManyWorkGroupInput = {
  id: Scalars['ID'];
  compare?: Maybe<_CompareWorkGroupInput>;
};

export type _DictionaryPacket = {
  __typename?: '_DictionaryPacket';
  getWorkType?: Maybe<WorkType>;
  updateOrCreateWorkType?: Maybe<_UpdateOrCreateWorkTypeResponse>;
  getMeasure?: Maybe<Measure>;
  updateOrCreateMeasure?: Maybe<_UpdateOrCreateMeasureResponse>;
  getMaterial?: Maybe<Material>;
  updateOrCreateMaterial?: Maybe<_UpdateOrCreateMaterialResponse>;
  getWorkTypeMaterial?: Maybe<WorkTypeMaterial>;
  updateOrCreateWorkTypeMaterial?: Maybe<_UpdateOrCreateWorkTypeMaterialResponse>;
  updateOrCreateManyWorkType?: Maybe<Array<Maybe<_UpdateOrCreateManyResponse>>>;
  updateOrCreateManyMeasure?: Maybe<Array<Maybe<_UpdateOrCreateManyResponse>>>;
  updateOrCreateManyMaterial?: Maybe<Array<Maybe<_UpdateOrCreateManyResponse>>>;
  updateOrCreateManyWorkTypeMaterial?: Maybe<Array<Maybe<_UpdateOrCreateManyResponse>>>;
};


export type _DictionaryPacketGetWorkTypeArgs = {
  id: Scalars['ID'];
};


export type _DictionaryPacketUpdateOrCreateWorkTypeArgs = {
  input: _CreateWorkTypeInput;
};


export type _DictionaryPacketGetMeasureArgs = {
  id: Scalars['ID'];
};


export type _DictionaryPacketUpdateOrCreateMeasureArgs = {
  input: _CreateMeasureInput;
};


export type _DictionaryPacketGetMaterialArgs = {
  id: Scalars['ID'];
};


export type _DictionaryPacketUpdateOrCreateMaterialArgs = {
  input: _CreateMaterialInput;
};


export type _DictionaryPacketGetWorkTypeMaterialArgs = {
  id: Scalars['ID'];
};


export type _DictionaryPacketUpdateOrCreateWorkTypeMaterialArgs = {
  input: _CreateWorkTypeMaterialInput;
};


export type _DictionaryPacketUpdateOrCreateManyWorkTypeArgs = {
  input?: Maybe<Array<_CreateWorkTypeInput>>;
};


export type _DictionaryPacketUpdateOrCreateManyMeasureArgs = {
  input?: Maybe<Array<_CreateMeasureInput>>;
};


export type _DictionaryPacketUpdateOrCreateManyMaterialArgs = {
  input?: Maybe<Array<_CreateMaterialInput>>;
};


export type _DictionaryPacketUpdateOrCreateManyWorkTypeMaterialArgs = {
  input?: Maybe<Array<_CreateWorkTypeMaterialInput>>;
};

export type _Ec_Material = {
  __typename?: '_EC_Material';
  elems: Array<Material>;
  count: Scalars['Int'];
};

export type _Ec_MaterialFact = {
  __typename?: '_EC_MaterialFact';
  elems: Array<MaterialFact>;
  count: Scalars['Int'];
};

export type _Ec_Measure = {
  __typename?: '_EC_Measure';
  elems: Array<Measure>;
  count: Scalars['Int'];
};

export type _Ec_Project = {
  __typename?: '_EC_Project';
  elems: Array<Project>;
  count: Scalars['Int'];
};

export type _Ec_RootDictionary = {
  __typename?: '_EC_RootDictionary';
  elems: Array<RootDictionary>;
  count: Scalars['Int'];
};

export type _Ec_SysAdminSettings = {
  __typename?: '_EC_SysAdminSettings';
  elems: Array<SysAdminSettings>;
  count: Scalars['Int'];
};

export type _Ec_SysCheckSelect = {
  __typename?: '_EC_SysCheckSelect';
  elems: Array<SysCheckSelect>;
  count: Scalars['Int'];
};

export type _Ec_SysOperation = {
  __typename?: '_EC_SysOperation';
  elems: Array<SysOperation>;
  count: Scalars['Int'];
};

export type _Ec_SysParamAddition = {
  __typename?: '_EC_SysParamAddition';
  elems: Array<SysParamAddition>;
  count: Scalars['Int'];
};

export type _Ec_SysRootSecurity = {
  __typename?: '_EC_SysRootSecurity';
  elems: Array<SysRootSecurity>;
  count: Scalars['Int'];
};

export type _Ec_WorkFact = {
  __typename?: '_EC_WorkFact';
  elems: Array<WorkFact>;
  count: Scalars['Int'];
};

export type _Ec_WorkGroup = {
  __typename?: '_EC_WorkGroup';
  elems: Array<WorkGroup>;
  count: Scalars['Int'];
};

export type _Ec_WorkType = {
  __typename?: '_EC_WorkType';
  elems: Array<WorkType>;
  count: Scalars['Int'];
};

export type _Ec_WorkTypeMaterial = {
  __typename?: '_EC_WorkTypeMaterial';
  elems: Array<WorkTypeMaterial>;
  count: Scalars['Int'];
};

export type _E_Material = _Entity & Material & {
  __typename?: '_E_Material';
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  type: Scalars['String'];
  measure?: Maybe<Measure>;
  aggregateRoot?: Maybe<RootDictionary>;
  price: _G_Price;
  _getChar?: Maybe<Scalars['Char']>;
  _getString?: Maybe<Scalars['String']>;
  _getByte?: Maybe<Scalars['Byte']>;
  _getShort?: Maybe<Scalars['Short']>;
  _getInt?: Maybe<Scalars['Int']>;
  _getLong?: Maybe<Scalars['Long']>;
  _getFloat?: Maybe<Scalars['_Float4']>;
  _getDouble?: Maybe<Scalars['Float']>;
  _getBigDecimal?: Maybe<Scalars['BigDecimal']>;
  _getDate?: Maybe<Scalars['_Date']>;
  _getDateTime?: Maybe<Scalars['_DateTime']>;
  _getOffsetDateTime?: Maybe<Scalars['_OffsetDateTime']>;
  _getBoolean?: Maybe<Scalars['Boolean']>;
  _getByteArray?: Maybe<Scalars['_ByteArray']>;
};


export type _E_MaterialMeasureArgs = {
  alias?: Maybe<Scalars['String']>;
};


export type _E_MaterialAggregateRootArgs = {
  alias?: Maybe<Scalars['String']>;
};


export type _E_Material_GetCharArgs = {
  expression: Scalars['String'];
};


export type _E_Material_GetStringArgs = {
  expression: Scalars['String'];
};


export type _E_Material_GetByteArgs = {
  expression: Scalars['String'];
};


export type _E_Material_GetShortArgs = {
  expression: Scalars['String'];
};


export type _E_Material_GetIntArgs = {
  expression: Scalars['String'];
};


export type _E_Material_GetLongArgs = {
  expression: Scalars['String'];
};


export type _E_Material_GetFloatArgs = {
  expression: Scalars['String'];
};


export type _E_Material_GetDoubleArgs = {
  expression: Scalars['String'];
};


export type _E_Material_GetBigDecimalArgs = {
  expression: Scalars['String'];
};


export type _E_Material_GetDateArgs = {
  expression: Scalars['String'];
};


export type _E_Material_GetDateTimeArgs = {
  expression: Scalars['String'];
};


export type _E_Material_GetOffsetDateTimeArgs = {
  expression: Scalars['String'];
};


export type _E_Material_GetBooleanArgs = {
  expression: Scalars['String'];
};


export type _E_Material_GetByteArrayArgs = {
  expression: Scalars['String'];
};

export type _E_MaterialFact = _Entity & MaterialFact & {
  __typename?: '_E_MaterialFact';
  id: Scalars['ID'];
  aggVersion: Scalars['Long'];
  chgCnt?: Maybe<Scalars['Long']>;
  lastChangeDate?: Maybe<Scalars['_DateTime']>;
  count?: Maybe<Scalars['BigDecimal']>;
  type: Scalars['String'];
  workFact: WorkFact;
  material?: Maybe<Material>;
  aggregateRoot?: Maybe<Project>;
  price: _G_Price;
  _getChar?: Maybe<Scalars['Char']>;
  _getString?: Maybe<Scalars['String']>;
  _getByte?: Maybe<Scalars['Byte']>;
  _getShort?: Maybe<Scalars['Short']>;
  _getInt?: Maybe<Scalars['Int']>;
  _getLong?: Maybe<Scalars['Long']>;
  _getFloat?: Maybe<Scalars['_Float4']>;
  _getDouble?: Maybe<Scalars['Float']>;
  _getBigDecimal?: Maybe<Scalars['BigDecimal']>;
  _getDate?: Maybe<Scalars['_Date']>;
  _getDateTime?: Maybe<Scalars['_DateTime']>;
  _getOffsetDateTime?: Maybe<Scalars['_OffsetDateTime']>;
  _getBoolean?: Maybe<Scalars['Boolean']>;
  _getByteArray?: Maybe<Scalars['_ByteArray']>;
};


export type _E_MaterialFactWorkFactArgs = {
  alias?: Maybe<Scalars['String']>;
};


export type _E_MaterialFactMaterialArgs = {
  alias?: Maybe<Scalars['String']>;
};


export type _E_MaterialFactAggregateRootArgs = {
  alias?: Maybe<Scalars['String']>;
};


export type _E_MaterialFact_GetCharArgs = {
  expression: Scalars['String'];
};


export type _E_MaterialFact_GetStringArgs = {
  expression: Scalars['String'];
};


export type _E_MaterialFact_GetByteArgs = {
  expression: Scalars['String'];
};


export type _E_MaterialFact_GetShortArgs = {
  expression: Scalars['String'];
};


export type _E_MaterialFact_GetIntArgs = {
  expression: Scalars['String'];
};


export type _E_MaterialFact_GetLongArgs = {
  expression: Scalars['String'];
};


export type _E_MaterialFact_GetFloatArgs = {
  expression: Scalars['String'];
};


export type _E_MaterialFact_GetDoubleArgs = {
  expression: Scalars['String'];
};


export type _E_MaterialFact_GetBigDecimalArgs = {
  expression: Scalars['String'];
};


export type _E_MaterialFact_GetDateArgs = {
  expression: Scalars['String'];
};


export type _E_MaterialFact_GetDateTimeArgs = {
  expression: Scalars['String'];
};


export type _E_MaterialFact_GetOffsetDateTimeArgs = {
  expression: Scalars['String'];
};


export type _E_MaterialFact_GetBooleanArgs = {
  expression: Scalars['String'];
};


export type _E_MaterialFact_GetByteArrayArgs = {
  expression: Scalars['String'];
};

export type _E_Measure = _Entity & Measure & {
  __typename?: '_E_Measure';
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  type: Scalars['String'];
  aggregateRoot?: Maybe<RootDictionary>;
  _getChar?: Maybe<Scalars['Char']>;
  _getString?: Maybe<Scalars['String']>;
  _getByte?: Maybe<Scalars['Byte']>;
  _getShort?: Maybe<Scalars['Short']>;
  _getInt?: Maybe<Scalars['Int']>;
  _getLong?: Maybe<Scalars['Long']>;
  _getFloat?: Maybe<Scalars['_Float4']>;
  _getDouble?: Maybe<Scalars['Float']>;
  _getBigDecimal?: Maybe<Scalars['BigDecimal']>;
  _getDate?: Maybe<Scalars['_Date']>;
  _getDateTime?: Maybe<Scalars['_DateTime']>;
  _getOffsetDateTime?: Maybe<Scalars['_OffsetDateTime']>;
  _getBoolean?: Maybe<Scalars['Boolean']>;
  _getByteArray?: Maybe<Scalars['_ByteArray']>;
};


export type _E_MeasureAggregateRootArgs = {
  alias?: Maybe<Scalars['String']>;
};


export type _E_Measure_GetCharArgs = {
  expression: Scalars['String'];
};


export type _E_Measure_GetStringArgs = {
  expression: Scalars['String'];
};


export type _E_Measure_GetByteArgs = {
  expression: Scalars['String'];
};


export type _E_Measure_GetShortArgs = {
  expression: Scalars['String'];
};


export type _E_Measure_GetIntArgs = {
  expression: Scalars['String'];
};


export type _E_Measure_GetLongArgs = {
  expression: Scalars['String'];
};


export type _E_Measure_GetFloatArgs = {
  expression: Scalars['String'];
};


export type _E_Measure_GetDoubleArgs = {
  expression: Scalars['String'];
};


export type _E_Measure_GetBigDecimalArgs = {
  expression: Scalars['String'];
};


export type _E_Measure_GetDateArgs = {
  expression: Scalars['String'];
};


export type _E_Measure_GetDateTimeArgs = {
  expression: Scalars['String'];
};


export type _E_Measure_GetOffsetDateTimeArgs = {
  expression: Scalars['String'];
};


export type _E_Measure_GetBooleanArgs = {
  expression: Scalars['String'];
};


export type _E_Measure_GetByteArrayArgs = {
  expression: Scalars['String'];
};

export type _E_Project = _Entity & Project & {
  __typename?: '_E_Project';
  id: Scalars['ID'];
  aggVersion: Scalars['Long'];
  chgCnt?: Maybe<Scalars['Long']>;
  lastChangeDate?: Maybe<Scalars['_DateTime']>;
  name?: Maybe<Scalars['String']>;
  openDate?: Maybe<Scalars['_Date']>;
  closeDate?: Maybe<Scalars['_Date']>;
  descr?: Maybe<Scalars['String']>;
  type: Scalars['String'];
  workGroupList: _Ec_WorkGroup;
  _getChar?: Maybe<Scalars['Char']>;
  _getString?: Maybe<Scalars['String']>;
  _getByte?: Maybe<Scalars['Byte']>;
  _getShort?: Maybe<Scalars['Short']>;
  _getInt?: Maybe<Scalars['Int']>;
  _getLong?: Maybe<Scalars['Long']>;
  _getFloat?: Maybe<Scalars['_Float4']>;
  _getDouble?: Maybe<Scalars['Float']>;
  _getBigDecimal?: Maybe<Scalars['BigDecimal']>;
  _getDate?: Maybe<Scalars['_Date']>;
  _getDateTime?: Maybe<Scalars['_DateTime']>;
  _getOffsetDateTime?: Maybe<Scalars['_OffsetDateTime']>;
  _getBoolean?: Maybe<Scalars['Boolean']>;
  _getByteArray?: Maybe<Scalars['_ByteArray']>;
};


export type _E_ProjectWorkGroupListArgs = {
  elemAlias?: Maybe<Scalars['String']>;
  cond?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<_SortCriterionSpecification>>;
};


export type _E_Project_GetCharArgs = {
  expression: Scalars['String'];
};


export type _E_Project_GetStringArgs = {
  expression: Scalars['String'];
};


export type _E_Project_GetByteArgs = {
  expression: Scalars['String'];
};


export type _E_Project_GetShortArgs = {
  expression: Scalars['String'];
};


export type _E_Project_GetIntArgs = {
  expression: Scalars['String'];
};


export type _E_Project_GetLongArgs = {
  expression: Scalars['String'];
};


export type _E_Project_GetFloatArgs = {
  expression: Scalars['String'];
};


export type _E_Project_GetDoubleArgs = {
  expression: Scalars['String'];
};


export type _E_Project_GetBigDecimalArgs = {
  expression: Scalars['String'];
};


export type _E_Project_GetDateArgs = {
  expression: Scalars['String'];
};


export type _E_Project_GetDateTimeArgs = {
  expression: Scalars['String'];
};


export type _E_Project_GetOffsetDateTimeArgs = {
  expression: Scalars['String'];
};


export type _E_Project_GetBooleanArgs = {
  expression: Scalars['String'];
};


export type _E_Project_GetByteArrayArgs = {
  expression: Scalars['String'];
};

export type _E_RootDictionary = _Entity & RootDictionary & {
  __typename?: '_E_RootDictionary';
  id: Scalars['ID'];
  type: Scalars['String'];
  _getChar?: Maybe<Scalars['Char']>;
  _getString?: Maybe<Scalars['String']>;
  _getByte?: Maybe<Scalars['Byte']>;
  _getShort?: Maybe<Scalars['Short']>;
  _getInt?: Maybe<Scalars['Int']>;
  _getLong?: Maybe<Scalars['Long']>;
  _getFloat?: Maybe<Scalars['_Float4']>;
  _getDouble?: Maybe<Scalars['Float']>;
  _getBigDecimal?: Maybe<Scalars['BigDecimal']>;
  _getDate?: Maybe<Scalars['_Date']>;
  _getDateTime?: Maybe<Scalars['_DateTime']>;
  _getOffsetDateTime?: Maybe<Scalars['_OffsetDateTime']>;
  _getBoolean?: Maybe<Scalars['Boolean']>;
  _getByteArray?: Maybe<Scalars['_ByteArray']>;
};


export type _E_RootDictionary_GetCharArgs = {
  expression: Scalars['String'];
};


export type _E_RootDictionary_GetStringArgs = {
  expression: Scalars['String'];
};


export type _E_RootDictionary_GetByteArgs = {
  expression: Scalars['String'];
};


export type _E_RootDictionary_GetShortArgs = {
  expression: Scalars['String'];
};


export type _E_RootDictionary_GetIntArgs = {
  expression: Scalars['String'];
};


export type _E_RootDictionary_GetLongArgs = {
  expression: Scalars['String'];
};


export type _E_RootDictionary_GetFloatArgs = {
  expression: Scalars['String'];
};


export type _E_RootDictionary_GetDoubleArgs = {
  expression: Scalars['String'];
};


export type _E_RootDictionary_GetBigDecimalArgs = {
  expression: Scalars['String'];
};


export type _E_RootDictionary_GetDateArgs = {
  expression: Scalars['String'];
};


export type _E_RootDictionary_GetDateTimeArgs = {
  expression: Scalars['String'];
};


export type _E_RootDictionary_GetOffsetDateTimeArgs = {
  expression: Scalars['String'];
};


export type _E_RootDictionary_GetBooleanArgs = {
  expression: Scalars['String'];
};


export type _E_RootDictionary_GetByteArrayArgs = {
  expression: Scalars['String'];
};

export type _E_SysAdminSettings = _Entity & SysAdminSettings & {
  __typename?: '_E_SysAdminSettings';
  id: Scalars['ID'];
  aggVersion: Scalars['Long'];
  chgCnt?: Maybe<Scalars['Long']>;
  lastChangeDate?: Maybe<Scalars['_DateTime']>;
  key?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
  rootSecurity: SysRootSecurity;
  aggregateRoot?: Maybe<SysRootSecurity>;
  _getChar?: Maybe<Scalars['Char']>;
  _getString?: Maybe<Scalars['String']>;
  _getByte?: Maybe<Scalars['Byte']>;
  _getShort?: Maybe<Scalars['Short']>;
  _getInt?: Maybe<Scalars['Int']>;
  _getLong?: Maybe<Scalars['Long']>;
  _getFloat?: Maybe<Scalars['_Float4']>;
  _getDouble?: Maybe<Scalars['Float']>;
  _getBigDecimal?: Maybe<Scalars['BigDecimal']>;
  _getDate?: Maybe<Scalars['_Date']>;
  _getDateTime?: Maybe<Scalars['_DateTime']>;
  _getOffsetDateTime?: Maybe<Scalars['_OffsetDateTime']>;
  _getBoolean?: Maybe<Scalars['Boolean']>;
  _getByteArray?: Maybe<Scalars['_ByteArray']>;
};


export type _E_SysAdminSettingsRootSecurityArgs = {
  alias?: Maybe<Scalars['String']>;
};


export type _E_SysAdminSettingsAggregateRootArgs = {
  alias?: Maybe<Scalars['String']>;
};


export type _E_SysAdminSettings_GetCharArgs = {
  expression: Scalars['String'];
};


export type _E_SysAdminSettings_GetStringArgs = {
  expression: Scalars['String'];
};


export type _E_SysAdminSettings_GetByteArgs = {
  expression: Scalars['String'];
};


export type _E_SysAdminSettings_GetShortArgs = {
  expression: Scalars['String'];
};


export type _E_SysAdminSettings_GetIntArgs = {
  expression: Scalars['String'];
};


export type _E_SysAdminSettings_GetLongArgs = {
  expression: Scalars['String'];
};


export type _E_SysAdminSettings_GetFloatArgs = {
  expression: Scalars['String'];
};


export type _E_SysAdminSettings_GetDoubleArgs = {
  expression: Scalars['String'];
};


export type _E_SysAdminSettings_GetBigDecimalArgs = {
  expression: Scalars['String'];
};


export type _E_SysAdminSettings_GetDateArgs = {
  expression: Scalars['String'];
};


export type _E_SysAdminSettings_GetDateTimeArgs = {
  expression: Scalars['String'];
};


export type _E_SysAdminSettings_GetOffsetDateTimeArgs = {
  expression: Scalars['String'];
};


export type _E_SysAdminSettings_GetBooleanArgs = {
  expression: Scalars['String'];
};


export type _E_SysAdminSettings_GetByteArrayArgs = {
  expression: Scalars['String'];
};

export type _E_SysCheckSelect = _Entity & SysCheckSelect & {
  __typename?: '_E_SysCheckSelect';
  id: Scalars['ID'];
  aggVersion: Scalars['Long'];
  chgCnt?: Maybe<Scalars['Long']>;
  lastChangeDate?: Maybe<Scalars['_DateTime']>;
  conditionValue?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  orderValue?: Maybe<Scalars['Int']>;
  typeName?: Maybe<Scalars['String']>;
  operation: SysOperation;
  aggregateRoot?: Maybe<SysRootSecurity>;
  _getChar?: Maybe<Scalars['Char']>;
  _getString?: Maybe<Scalars['String']>;
  _getByte?: Maybe<Scalars['Byte']>;
  _getShort?: Maybe<Scalars['Short']>;
  _getInt?: Maybe<Scalars['Int']>;
  _getLong?: Maybe<Scalars['Long']>;
  _getFloat?: Maybe<Scalars['_Float4']>;
  _getDouble?: Maybe<Scalars['Float']>;
  _getBigDecimal?: Maybe<Scalars['BigDecimal']>;
  _getDate?: Maybe<Scalars['_Date']>;
  _getDateTime?: Maybe<Scalars['_DateTime']>;
  _getOffsetDateTime?: Maybe<Scalars['_OffsetDateTime']>;
  _getBoolean?: Maybe<Scalars['Boolean']>;
  _getByteArray?: Maybe<Scalars['_ByteArray']>;
};


export type _E_SysCheckSelectOperationArgs = {
  alias?: Maybe<Scalars['String']>;
};


export type _E_SysCheckSelectAggregateRootArgs = {
  alias?: Maybe<Scalars['String']>;
};


export type _E_SysCheckSelect_GetCharArgs = {
  expression: Scalars['String'];
};


export type _E_SysCheckSelect_GetStringArgs = {
  expression: Scalars['String'];
};


export type _E_SysCheckSelect_GetByteArgs = {
  expression: Scalars['String'];
};


export type _E_SysCheckSelect_GetShortArgs = {
  expression: Scalars['String'];
};


export type _E_SysCheckSelect_GetIntArgs = {
  expression: Scalars['String'];
};


export type _E_SysCheckSelect_GetLongArgs = {
  expression: Scalars['String'];
};


export type _E_SysCheckSelect_GetFloatArgs = {
  expression: Scalars['String'];
};


export type _E_SysCheckSelect_GetDoubleArgs = {
  expression: Scalars['String'];
};


export type _E_SysCheckSelect_GetBigDecimalArgs = {
  expression: Scalars['String'];
};


export type _E_SysCheckSelect_GetDateArgs = {
  expression: Scalars['String'];
};


export type _E_SysCheckSelect_GetDateTimeArgs = {
  expression: Scalars['String'];
};


export type _E_SysCheckSelect_GetOffsetDateTimeArgs = {
  expression: Scalars['String'];
};


export type _E_SysCheckSelect_GetBooleanArgs = {
  expression: Scalars['String'];
};


export type _E_SysCheckSelect_GetByteArrayArgs = {
  expression: Scalars['String'];
};

export type _E_SysOperation = _Entity & SysOperation & {
  __typename?: '_E_SysOperation';
  id: Scalars['ID'];
  aggVersion: Scalars['Long'];
  chgCnt?: Maybe<Scalars['Long']>;
  lastChangeDate?: Maybe<Scalars['_DateTime']>;
  allowEmptyChecks?: Maybe<Scalars['Boolean']>;
  body?: Maybe<Scalars['String']>;
  disableJwtVerification?: Maybe<Scalars['Boolean']>;
  hashValue?: Maybe<Scalars['String']>;
  rootSecurity: SysRootSecurity;
  aggregateRoot?: Maybe<SysRootSecurity>;
  checkSelects: _Ec_SysCheckSelect;
  paramAdditions: _Ec_SysParamAddition;
  _getChar?: Maybe<Scalars['Char']>;
  _getString?: Maybe<Scalars['String']>;
  _getByte?: Maybe<Scalars['Byte']>;
  _getShort?: Maybe<Scalars['Short']>;
  _getInt?: Maybe<Scalars['Int']>;
  _getLong?: Maybe<Scalars['Long']>;
  _getFloat?: Maybe<Scalars['_Float4']>;
  _getDouble?: Maybe<Scalars['Float']>;
  _getBigDecimal?: Maybe<Scalars['BigDecimal']>;
  _getDate?: Maybe<Scalars['_Date']>;
  _getDateTime?: Maybe<Scalars['_DateTime']>;
  _getOffsetDateTime?: Maybe<Scalars['_OffsetDateTime']>;
  _getBoolean?: Maybe<Scalars['Boolean']>;
  _getByteArray?: Maybe<Scalars['_ByteArray']>;
};


export type _E_SysOperationRootSecurityArgs = {
  alias?: Maybe<Scalars['String']>;
};


export type _E_SysOperationAggregateRootArgs = {
  alias?: Maybe<Scalars['String']>;
};


export type _E_SysOperationCheckSelectsArgs = {
  elemAlias?: Maybe<Scalars['String']>;
  cond?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<_SortCriterionSpecification>>;
};


export type _E_SysOperationParamAdditionsArgs = {
  elemAlias?: Maybe<Scalars['String']>;
  cond?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<_SortCriterionSpecification>>;
};


export type _E_SysOperation_GetCharArgs = {
  expression: Scalars['String'];
};


export type _E_SysOperation_GetStringArgs = {
  expression: Scalars['String'];
};


export type _E_SysOperation_GetByteArgs = {
  expression: Scalars['String'];
};


export type _E_SysOperation_GetShortArgs = {
  expression: Scalars['String'];
};


export type _E_SysOperation_GetIntArgs = {
  expression: Scalars['String'];
};


export type _E_SysOperation_GetLongArgs = {
  expression: Scalars['String'];
};


export type _E_SysOperation_GetFloatArgs = {
  expression: Scalars['String'];
};


export type _E_SysOperation_GetDoubleArgs = {
  expression: Scalars['String'];
};


export type _E_SysOperation_GetBigDecimalArgs = {
  expression: Scalars['String'];
};


export type _E_SysOperation_GetDateArgs = {
  expression: Scalars['String'];
};


export type _E_SysOperation_GetDateTimeArgs = {
  expression: Scalars['String'];
};


export type _E_SysOperation_GetOffsetDateTimeArgs = {
  expression: Scalars['String'];
};


export type _E_SysOperation_GetBooleanArgs = {
  expression: Scalars['String'];
};


export type _E_SysOperation_GetByteArrayArgs = {
  expression: Scalars['String'];
};

export type _E_SysParamAddition = _Entity & SysParamAddition & {
  __typename?: '_E_SysParamAddition';
  id: Scalars['ID'];
  aggVersion: Scalars['Long'];
  chgCnt?: Maybe<Scalars['Long']>;
  lastChangeDate?: Maybe<Scalars['_DateTime']>;
  paramAddition?: Maybe<Scalars['String']>;
  paramName?: Maybe<Scalars['String']>;
  operation: SysOperation;
  aggregateRoot?: Maybe<SysRootSecurity>;
  _getChar?: Maybe<Scalars['Char']>;
  _getString?: Maybe<Scalars['String']>;
  _getByte?: Maybe<Scalars['Byte']>;
  _getShort?: Maybe<Scalars['Short']>;
  _getInt?: Maybe<Scalars['Int']>;
  _getLong?: Maybe<Scalars['Long']>;
  _getFloat?: Maybe<Scalars['_Float4']>;
  _getDouble?: Maybe<Scalars['Float']>;
  _getBigDecimal?: Maybe<Scalars['BigDecimal']>;
  _getDate?: Maybe<Scalars['_Date']>;
  _getDateTime?: Maybe<Scalars['_DateTime']>;
  _getOffsetDateTime?: Maybe<Scalars['_OffsetDateTime']>;
  _getBoolean?: Maybe<Scalars['Boolean']>;
  _getByteArray?: Maybe<Scalars['_ByteArray']>;
};


export type _E_SysParamAdditionOperationArgs = {
  alias?: Maybe<Scalars['String']>;
};


export type _E_SysParamAdditionAggregateRootArgs = {
  alias?: Maybe<Scalars['String']>;
};


export type _E_SysParamAddition_GetCharArgs = {
  expression: Scalars['String'];
};


export type _E_SysParamAddition_GetStringArgs = {
  expression: Scalars['String'];
};


export type _E_SysParamAddition_GetByteArgs = {
  expression: Scalars['String'];
};


export type _E_SysParamAddition_GetShortArgs = {
  expression: Scalars['String'];
};


export type _E_SysParamAddition_GetIntArgs = {
  expression: Scalars['String'];
};


export type _E_SysParamAddition_GetLongArgs = {
  expression: Scalars['String'];
};


export type _E_SysParamAddition_GetFloatArgs = {
  expression: Scalars['String'];
};


export type _E_SysParamAddition_GetDoubleArgs = {
  expression: Scalars['String'];
};


export type _E_SysParamAddition_GetBigDecimalArgs = {
  expression: Scalars['String'];
};


export type _E_SysParamAddition_GetDateArgs = {
  expression: Scalars['String'];
};


export type _E_SysParamAddition_GetDateTimeArgs = {
  expression: Scalars['String'];
};


export type _E_SysParamAddition_GetOffsetDateTimeArgs = {
  expression: Scalars['String'];
};


export type _E_SysParamAddition_GetBooleanArgs = {
  expression: Scalars['String'];
};


export type _E_SysParamAddition_GetByteArrayArgs = {
  expression: Scalars['String'];
};

export type _E_SysRootSecurity = _Entity & SysRootSecurity & {
  __typename?: '_E_SysRootSecurity';
  id: Scalars['ID'];
  aggVersion: Scalars['Long'];
  chgCnt?: Maybe<Scalars['Long']>;
  lastChangeDate?: Maybe<Scalars['_DateTime']>;
  type: Scalars['String'];
  adminSettings: _Ec_SysAdminSettings;
  operations: _Ec_SysOperation;
  _getChar?: Maybe<Scalars['Char']>;
  _getString?: Maybe<Scalars['String']>;
  _getByte?: Maybe<Scalars['Byte']>;
  _getShort?: Maybe<Scalars['Short']>;
  _getInt?: Maybe<Scalars['Int']>;
  _getLong?: Maybe<Scalars['Long']>;
  _getFloat?: Maybe<Scalars['_Float4']>;
  _getDouble?: Maybe<Scalars['Float']>;
  _getBigDecimal?: Maybe<Scalars['BigDecimal']>;
  _getDate?: Maybe<Scalars['_Date']>;
  _getDateTime?: Maybe<Scalars['_DateTime']>;
  _getOffsetDateTime?: Maybe<Scalars['_OffsetDateTime']>;
  _getBoolean?: Maybe<Scalars['Boolean']>;
  _getByteArray?: Maybe<Scalars['_ByteArray']>;
};


export type _E_SysRootSecurityAdminSettingsArgs = {
  elemAlias?: Maybe<Scalars['String']>;
  cond?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<_SortCriterionSpecification>>;
};


export type _E_SysRootSecurityOperationsArgs = {
  elemAlias?: Maybe<Scalars['String']>;
  cond?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<_SortCriterionSpecification>>;
};


export type _E_SysRootSecurity_GetCharArgs = {
  expression: Scalars['String'];
};


export type _E_SysRootSecurity_GetStringArgs = {
  expression: Scalars['String'];
};


export type _E_SysRootSecurity_GetByteArgs = {
  expression: Scalars['String'];
};


export type _E_SysRootSecurity_GetShortArgs = {
  expression: Scalars['String'];
};


export type _E_SysRootSecurity_GetIntArgs = {
  expression: Scalars['String'];
};


export type _E_SysRootSecurity_GetLongArgs = {
  expression: Scalars['String'];
};


export type _E_SysRootSecurity_GetFloatArgs = {
  expression: Scalars['String'];
};


export type _E_SysRootSecurity_GetDoubleArgs = {
  expression: Scalars['String'];
};


export type _E_SysRootSecurity_GetBigDecimalArgs = {
  expression: Scalars['String'];
};


export type _E_SysRootSecurity_GetDateArgs = {
  expression: Scalars['String'];
};


export type _E_SysRootSecurity_GetDateTimeArgs = {
  expression: Scalars['String'];
};


export type _E_SysRootSecurity_GetOffsetDateTimeArgs = {
  expression: Scalars['String'];
};


export type _E_SysRootSecurity_GetBooleanArgs = {
  expression: Scalars['String'];
};


export type _E_SysRootSecurity_GetByteArrayArgs = {
  expression: Scalars['String'];
};

export type _E_WorkFact = _Entity & WorkFact & {
  __typename?: '_E_WorkFact';
  id: Scalars['ID'];
  aggVersion: Scalars['Long'];
  chgCnt?: Maybe<Scalars['Long']>;
  lastChangeDate?: Maybe<Scalars['_DateTime']>;
  count?: Maybe<Scalars['BigDecimal']>;
  orderInGroup?: Maybe<Scalars['Int']>;
  type: Scalars['String'];
  workGroup: WorkGroup;
  workType?: Maybe<WorkType>;
  aggregateRoot?: Maybe<Project>;
  materialFact: _Ec_MaterialFact;
  price: _G_Price;
  _getChar?: Maybe<Scalars['Char']>;
  _getString?: Maybe<Scalars['String']>;
  _getByte?: Maybe<Scalars['Byte']>;
  _getShort?: Maybe<Scalars['Short']>;
  _getInt?: Maybe<Scalars['Int']>;
  _getLong?: Maybe<Scalars['Long']>;
  _getFloat?: Maybe<Scalars['_Float4']>;
  _getDouble?: Maybe<Scalars['Float']>;
  _getBigDecimal?: Maybe<Scalars['BigDecimal']>;
  _getDate?: Maybe<Scalars['_Date']>;
  _getDateTime?: Maybe<Scalars['_DateTime']>;
  _getOffsetDateTime?: Maybe<Scalars['_OffsetDateTime']>;
  _getBoolean?: Maybe<Scalars['Boolean']>;
  _getByteArray?: Maybe<Scalars['_ByteArray']>;
};


export type _E_WorkFactWorkGroupArgs = {
  alias?: Maybe<Scalars['String']>;
};


export type _E_WorkFactWorkTypeArgs = {
  alias?: Maybe<Scalars['String']>;
};


export type _E_WorkFactAggregateRootArgs = {
  alias?: Maybe<Scalars['String']>;
};


export type _E_WorkFactMaterialFactArgs = {
  elemAlias?: Maybe<Scalars['String']>;
  cond?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<_SortCriterionSpecification>>;
};


export type _E_WorkFact_GetCharArgs = {
  expression: Scalars['String'];
};


export type _E_WorkFact_GetStringArgs = {
  expression: Scalars['String'];
};


export type _E_WorkFact_GetByteArgs = {
  expression: Scalars['String'];
};


export type _E_WorkFact_GetShortArgs = {
  expression: Scalars['String'];
};


export type _E_WorkFact_GetIntArgs = {
  expression: Scalars['String'];
};


export type _E_WorkFact_GetLongArgs = {
  expression: Scalars['String'];
};


export type _E_WorkFact_GetFloatArgs = {
  expression: Scalars['String'];
};


export type _E_WorkFact_GetDoubleArgs = {
  expression: Scalars['String'];
};


export type _E_WorkFact_GetBigDecimalArgs = {
  expression: Scalars['String'];
};


export type _E_WorkFact_GetDateArgs = {
  expression: Scalars['String'];
};


export type _E_WorkFact_GetDateTimeArgs = {
  expression: Scalars['String'];
};


export type _E_WorkFact_GetOffsetDateTimeArgs = {
  expression: Scalars['String'];
};


export type _E_WorkFact_GetBooleanArgs = {
  expression: Scalars['String'];
};


export type _E_WorkFact_GetByteArrayArgs = {
  expression: Scalars['String'];
};

export type _E_WorkGroup = _Entity & WorkGroup & {
  __typename?: '_E_WorkGroup';
  id: Scalars['ID'];
  aggVersion: Scalars['Long'];
  chgCnt?: Maybe<Scalars['Long']>;
  lastChangeDate?: Maybe<Scalars['_DateTime']>;
  descr?: Maybe<Scalars['String']>;
  type: Scalars['String'];
  project: Project;
  aggregateRoot?: Maybe<Project>;
  workFactList: _Ec_WorkFact;
  _getChar?: Maybe<Scalars['Char']>;
  _getString?: Maybe<Scalars['String']>;
  _getByte?: Maybe<Scalars['Byte']>;
  _getShort?: Maybe<Scalars['Short']>;
  _getInt?: Maybe<Scalars['Int']>;
  _getLong?: Maybe<Scalars['Long']>;
  _getFloat?: Maybe<Scalars['_Float4']>;
  _getDouble?: Maybe<Scalars['Float']>;
  _getBigDecimal?: Maybe<Scalars['BigDecimal']>;
  _getDate?: Maybe<Scalars['_Date']>;
  _getDateTime?: Maybe<Scalars['_DateTime']>;
  _getOffsetDateTime?: Maybe<Scalars['_OffsetDateTime']>;
  _getBoolean?: Maybe<Scalars['Boolean']>;
  _getByteArray?: Maybe<Scalars['_ByteArray']>;
};


export type _E_WorkGroupProjectArgs = {
  alias?: Maybe<Scalars['String']>;
};


export type _E_WorkGroupAggregateRootArgs = {
  alias?: Maybe<Scalars['String']>;
};


export type _E_WorkGroupWorkFactListArgs = {
  elemAlias?: Maybe<Scalars['String']>;
  cond?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<_SortCriterionSpecification>>;
};


export type _E_WorkGroup_GetCharArgs = {
  expression: Scalars['String'];
};


export type _E_WorkGroup_GetStringArgs = {
  expression: Scalars['String'];
};


export type _E_WorkGroup_GetByteArgs = {
  expression: Scalars['String'];
};


export type _E_WorkGroup_GetShortArgs = {
  expression: Scalars['String'];
};


export type _E_WorkGroup_GetIntArgs = {
  expression: Scalars['String'];
};


export type _E_WorkGroup_GetLongArgs = {
  expression: Scalars['String'];
};


export type _E_WorkGroup_GetFloatArgs = {
  expression: Scalars['String'];
};


export type _E_WorkGroup_GetDoubleArgs = {
  expression: Scalars['String'];
};


export type _E_WorkGroup_GetBigDecimalArgs = {
  expression: Scalars['String'];
};


export type _E_WorkGroup_GetDateArgs = {
  expression: Scalars['String'];
};


export type _E_WorkGroup_GetDateTimeArgs = {
  expression: Scalars['String'];
};


export type _E_WorkGroup_GetOffsetDateTimeArgs = {
  expression: Scalars['String'];
};


export type _E_WorkGroup_GetBooleanArgs = {
  expression: Scalars['String'];
};


export type _E_WorkGroup_GetByteArrayArgs = {
  expression: Scalars['String'];
};

export type _E_WorkType = _Entity & WorkType & {
  __typename?: '_E_WorkType';
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  type: Scalars['String'];
  measure?: Maybe<Measure>;
  aggregateRoot?: Maybe<RootDictionary>;
  materialList: _Ec_WorkTypeMaterial;
  _getChar?: Maybe<Scalars['Char']>;
  _getString?: Maybe<Scalars['String']>;
  _getByte?: Maybe<Scalars['Byte']>;
  _getShort?: Maybe<Scalars['Short']>;
  _getInt?: Maybe<Scalars['Int']>;
  _getLong?: Maybe<Scalars['Long']>;
  _getFloat?: Maybe<Scalars['_Float4']>;
  _getDouble?: Maybe<Scalars['Float']>;
  _getBigDecimal?: Maybe<Scalars['BigDecimal']>;
  _getDate?: Maybe<Scalars['_Date']>;
  _getDateTime?: Maybe<Scalars['_DateTime']>;
  _getOffsetDateTime?: Maybe<Scalars['_OffsetDateTime']>;
  _getBoolean?: Maybe<Scalars['Boolean']>;
  _getByteArray?: Maybe<Scalars['_ByteArray']>;
};


export type _E_WorkTypeMeasureArgs = {
  alias?: Maybe<Scalars['String']>;
};


export type _E_WorkTypeAggregateRootArgs = {
  alias?: Maybe<Scalars['String']>;
};


export type _E_WorkTypeMaterialListArgs = {
  elemAlias?: Maybe<Scalars['String']>;
  cond?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<_SortCriterionSpecification>>;
};


export type _E_WorkType_GetCharArgs = {
  expression: Scalars['String'];
};


export type _E_WorkType_GetStringArgs = {
  expression: Scalars['String'];
};


export type _E_WorkType_GetByteArgs = {
  expression: Scalars['String'];
};


export type _E_WorkType_GetShortArgs = {
  expression: Scalars['String'];
};


export type _E_WorkType_GetIntArgs = {
  expression: Scalars['String'];
};


export type _E_WorkType_GetLongArgs = {
  expression: Scalars['String'];
};


export type _E_WorkType_GetFloatArgs = {
  expression: Scalars['String'];
};


export type _E_WorkType_GetDoubleArgs = {
  expression: Scalars['String'];
};


export type _E_WorkType_GetBigDecimalArgs = {
  expression: Scalars['String'];
};


export type _E_WorkType_GetDateArgs = {
  expression: Scalars['String'];
};


export type _E_WorkType_GetDateTimeArgs = {
  expression: Scalars['String'];
};


export type _E_WorkType_GetOffsetDateTimeArgs = {
  expression: Scalars['String'];
};


export type _E_WorkType_GetBooleanArgs = {
  expression: Scalars['String'];
};


export type _E_WorkType_GetByteArrayArgs = {
  expression: Scalars['String'];
};

export type _E_WorkTypeMaterial = _Entity & WorkTypeMaterial & {
  __typename?: '_E_WorkTypeMaterial';
  id: Scalars['ID'];
  formula?: Maybe<Scalars['String']>;
  type: Scalars['String'];
  workType?: Maybe<WorkType>;
  material?: Maybe<Material>;
  aggregateRoot?: Maybe<RootDictionary>;
  _getChar?: Maybe<Scalars['Char']>;
  _getString?: Maybe<Scalars['String']>;
  _getByte?: Maybe<Scalars['Byte']>;
  _getShort?: Maybe<Scalars['Short']>;
  _getInt?: Maybe<Scalars['Int']>;
  _getLong?: Maybe<Scalars['Long']>;
  _getFloat?: Maybe<Scalars['_Float4']>;
  _getDouble?: Maybe<Scalars['Float']>;
  _getBigDecimal?: Maybe<Scalars['BigDecimal']>;
  _getDate?: Maybe<Scalars['_Date']>;
  _getDateTime?: Maybe<Scalars['_DateTime']>;
  _getOffsetDateTime?: Maybe<Scalars['_OffsetDateTime']>;
  _getBoolean?: Maybe<Scalars['Boolean']>;
  _getByteArray?: Maybe<Scalars['_ByteArray']>;
};


export type _E_WorkTypeMaterialWorkTypeArgs = {
  alias?: Maybe<Scalars['String']>;
};


export type _E_WorkTypeMaterialMaterialArgs = {
  alias?: Maybe<Scalars['String']>;
};


export type _E_WorkTypeMaterialAggregateRootArgs = {
  alias?: Maybe<Scalars['String']>;
};


export type _E_WorkTypeMaterial_GetCharArgs = {
  expression: Scalars['String'];
};


export type _E_WorkTypeMaterial_GetStringArgs = {
  expression: Scalars['String'];
};


export type _E_WorkTypeMaterial_GetByteArgs = {
  expression: Scalars['String'];
};


export type _E_WorkTypeMaterial_GetShortArgs = {
  expression: Scalars['String'];
};


export type _E_WorkTypeMaterial_GetIntArgs = {
  expression: Scalars['String'];
};


export type _E_WorkTypeMaterial_GetLongArgs = {
  expression: Scalars['String'];
};


export type _E_WorkTypeMaterial_GetFloatArgs = {
  expression: Scalars['String'];
};


export type _E_WorkTypeMaterial_GetDoubleArgs = {
  expression: Scalars['String'];
};


export type _E_WorkTypeMaterial_GetBigDecimalArgs = {
  expression: Scalars['String'];
};


export type _E_WorkTypeMaterial_GetDateArgs = {
  expression: Scalars['String'];
};


export type _E_WorkTypeMaterial_GetDateTimeArgs = {
  expression: Scalars['String'];
};


export type _E_WorkTypeMaterial_GetOffsetDateTimeArgs = {
  expression: Scalars['String'];
};


export type _E_WorkTypeMaterial_GetBooleanArgs = {
  expression: Scalars['String'];
};


export type _E_WorkTypeMaterial_GetByteArrayArgs = {
  expression: Scalars['String'];
};

export type _Entity = {
  id: Scalars['ID'];
};


export type _G_Price = {
  __typename?: '_G_Price';
  price?: Maybe<Scalars['String']>;
  currency?: Maybe<Scalars['String']>;
};

export type _IncBigDecimalValueInput = {
  value: Scalars['BigDecimal'];
};

export type _IncIntValueInput = {
  value: Scalars['Int'];
};

export type _IncMaterialFactInput = {
  count?: Maybe<_IncBigDecimalValueInput>;
};

export type _IncWorkFactInput = {
  orderInGroup?: Maybe<_IncIntValueInput>;
  count?: Maybe<_IncBigDecimalValueInput>;
};

export type _MergedEntitiesCollection = {
  __typename?: '_MergedEntitiesCollection';
  elems: Array<_Entity>;
  count: Scalars['Int'];
};

export type _Mutation = {
  __typename?: '_Mutation';
  packet?: Maybe<_Packet>;
  dictionaryPacket?: Maybe<_DictionaryPacket>;
};


export type _MutationPacketArgs = {
  aggregateVersion?: Maybe<Scalars['Long']>;
  idempotencePacketId?: Maybe<Scalars['String']>;
};


export type _Packet = {
  __typename?: '_Packet';
  createProject?: Maybe<Project>;
  updateProject?: Maybe<Project>;
  getProject?: Maybe<Project>;
  deleteProject?: Maybe<Scalars['String']>;
  createWorkGroup?: Maybe<WorkGroup>;
  updateWorkGroup?: Maybe<WorkGroup>;
  getWorkGroup?: Maybe<WorkGroup>;
  deleteWorkGroup?: Maybe<Scalars['String']>;
  createMaterialFact?: Maybe<MaterialFact>;
  updateMaterialFact?: Maybe<MaterialFact>;
  getMaterialFact?: Maybe<MaterialFact>;
  deleteMaterialFact?: Maybe<Scalars['String']>;
  createWorkFact?: Maybe<WorkFact>;
  updateWorkFact?: Maybe<WorkFact>;
  getWorkFact?: Maybe<WorkFact>;
  deleteWorkFact?: Maybe<Scalars['String']>;
  aggregateVersion?: Maybe<Scalars['Long']>;
  isIdempotenceResponse?: Maybe<Scalars['Boolean']>;
  createManyProject?: Maybe<Array<Maybe<Scalars['String']>>>;
  updateManyProject?: Maybe<Scalars['String']>;
  deleteManyProject?: Maybe<Scalars['String']>;
  createManyWorkGroup?: Maybe<Array<Maybe<Scalars['String']>>>;
  updateManyWorkGroup?: Maybe<Scalars['String']>;
  deleteManyWorkGroup?: Maybe<Scalars['String']>;
  createManyMaterialFact?: Maybe<Array<Maybe<Scalars['String']>>>;
  updateManyMaterialFact?: Maybe<Scalars['String']>;
  deleteManyMaterialFact?: Maybe<Scalars['String']>;
  createManyWorkFact?: Maybe<Array<Maybe<Scalars['String']>>>;
  updateManyWorkFact?: Maybe<Scalars['String']>;
  deleteManyWorkFact?: Maybe<Scalars['String']>;
};


export type _PacketCreateProjectArgs = {
  input: _CreateProjectInput;
};


export type _PacketUpdateProjectArgs = {
  input: _UpdateProjectInput;
  compare?: Maybe<_CompareProjectInput>;
};


export type _PacketGetProjectArgs = {
  id: Scalars['ID'];
};


export type _PacketDeleteProjectArgs = {
  id: Scalars['ID'];
  compare?: Maybe<_CompareProjectInput>;
};


export type _PacketCreateWorkGroupArgs = {
  input: _CreateWorkGroupInput;
};


export type _PacketUpdateWorkGroupArgs = {
  input: _UpdateWorkGroupInput;
  compare?: Maybe<_CompareWorkGroupInput>;
};


export type _PacketGetWorkGroupArgs = {
  id: Scalars['ID'];
};


export type _PacketDeleteWorkGroupArgs = {
  id: Scalars['ID'];
  compare?: Maybe<_CompareWorkGroupInput>;
};


export type _PacketCreateMaterialFactArgs = {
  input: _CreateMaterialFactInput;
};


export type _PacketUpdateMaterialFactArgs = {
  input: _UpdateMaterialFactInput;
  inc?: Maybe<_IncMaterialFactInput>;
};


export type _PacketGetMaterialFactArgs = {
  id: Scalars['ID'];
};


export type _PacketDeleteMaterialFactArgs = {
  id: Scalars['ID'];
};


export type _PacketCreateWorkFactArgs = {
  input: _CreateWorkFactInput;
};


export type _PacketUpdateWorkFactArgs = {
  input: _UpdateWorkFactInput;
  compare?: Maybe<_CompareWorkFactInput>;
  inc?: Maybe<_IncWorkFactInput>;
};


export type _PacketGetWorkFactArgs = {
  id: Scalars['ID'];
};


export type _PacketDeleteWorkFactArgs = {
  id: Scalars['ID'];
  compare?: Maybe<_CompareWorkFactInput>;
};


export type _PacketCreateManyProjectArgs = {
  input?: Maybe<Array<_CreateProjectInput>>;
};


export type _PacketUpdateManyProjectArgs = {
  input?: Maybe<Array<Maybe<_UpdateManyProjectInput>>>;
};


export type _PacketDeleteManyProjectArgs = {
  input?: Maybe<Array<Maybe<_DeleteManyProjectInput>>>;
};


export type _PacketCreateManyWorkGroupArgs = {
  input?: Maybe<Array<_CreateWorkGroupInput>>;
};


export type _PacketUpdateManyWorkGroupArgs = {
  input?: Maybe<Array<Maybe<_UpdateManyWorkGroupInput>>>;
};


export type _PacketDeleteManyWorkGroupArgs = {
  input?: Maybe<Array<Maybe<_DeleteManyWorkGroupInput>>>;
};


export type _PacketCreateManyMaterialFactArgs = {
  input?: Maybe<Array<_CreateMaterialFactInput>>;
};


export type _PacketUpdateManyMaterialFactArgs = {
  input?: Maybe<Array<Maybe<_UpdateManyMaterialFactInput>>>;
};


export type _PacketDeleteManyMaterialFactArgs = {
  ids?: Maybe<Array<Scalars['ID']>>;
};


export type _PacketCreateManyWorkFactArgs = {
  input?: Maybe<Array<_CreateWorkFactInput>>;
};


export type _PacketUpdateManyWorkFactArgs = {
  input?: Maybe<Array<Maybe<_UpdateManyWorkFactInput>>>;
};


export type _PacketDeleteManyWorkFactArgs = {
  input?: Maybe<Array<Maybe<_DeleteManyWorkFactInput>>>;
};

export type _PriceInput = {
  price?: Maybe<Scalars['String']>;
  currency?: Maybe<Scalars['String']>;
};

export type _Query = {
  __typename?: '_Query';
  merge: _MergedEntitiesCollection;
  resolveReferences: Array<_Reference>;
  searchMaterial: _Ec_Material;
  searchWorkType: _Ec_WorkType;
  searchWorkTypeMaterial: _Ec_WorkTypeMaterial;
  searchMeasure: _Ec_Measure;
  searchProject: _Ec_Project;
  searchWorkGroup: _Ec_WorkGroup;
  searchWorkFact: _Ec_WorkFact;
  searchMaterialFact: _Ec_MaterialFact;
  searchRootDictionary: _Ec_RootDictionary;
  searchSysRootSecurity: _Ec_SysRootSecurity;
  searchSysAdminSettings: _Ec_SysAdminSettings;
  searchSysOperation: _Ec_SysOperation;
  searchSysCheckSelect: _Ec_SysCheckSelect;
  searchSysParamAddition: _Ec_SysParamAddition;
  selectionByMaterial: _Sec_Material;
  selectionByWorkType: _Sec_WorkType;
  selectionByWorkTypeMaterial: _Sec_WorkTypeMaterial;
  selectionByMeasure: _Sec_Measure;
  selectionByProject: _Sec_Project;
  selectionByWorkGroup: _Sec_WorkGroup;
  selectionByWorkFact: _Sec_WorkFact;
  selectionByMaterialFact: _Sec_MaterialFact;
  selectionByRootDictionary: _Sec_RootDictionary;
  selectionBySysRootSecurity: _Sec_SysRootSecurity;
  selectionBySysAdminSettings: _Sec_SysAdminSettings;
  selectionBySysOperation: _Sec_SysOperation;
  selectionBySysCheckSelect: _Sec_SysCheckSelect;
  selectionBySysParamAddition: _Sec_SysParamAddition;
};


export type _QueryMergeArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<_SortCriterionSpecification>>;
};


export type _QueryResolveReferencesArgs = {
  referenceType: Scalars['String'];
  ids: Array<Scalars['ID']>;
};


export type _QuerySearchMaterialArgs = {
  cond?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<_SortCriterionSpecification>>;
};


export type _QuerySearchWorkTypeArgs = {
  cond?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<_SortCriterionSpecification>>;
};


export type _QuerySearchWorkTypeMaterialArgs = {
  cond?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<_SortCriterionSpecification>>;
};


export type _QuerySearchMeasureArgs = {
  cond?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<_SortCriterionSpecification>>;
};


export type _QuerySearchProjectArgs = {
  cond?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<_SortCriterionSpecification>>;
};


export type _QuerySearchWorkGroupArgs = {
  cond?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<_SortCriterionSpecification>>;
};


export type _QuerySearchWorkFactArgs = {
  cond?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<_SortCriterionSpecification>>;
};


export type _QuerySearchMaterialFactArgs = {
  cond?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<_SortCriterionSpecification>>;
};


export type _QuerySearchRootDictionaryArgs = {
  cond?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<_SortCriterionSpecification>>;
};


export type _QuerySearchSysRootSecurityArgs = {
  cond?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<_SortCriterionSpecification>>;
};


export type _QuerySearchSysAdminSettingsArgs = {
  cond?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<_SortCriterionSpecification>>;
};


export type _QuerySearchSysOperationArgs = {
  cond?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<_SortCriterionSpecification>>;
};


export type _QuerySearchSysCheckSelectArgs = {
  cond?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<_SortCriterionSpecification>>;
};


export type _QuerySearchSysParamAdditionArgs = {
  cond?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<_SortCriterionSpecification>>;
};


export type _QuerySelectionByMaterialArgs = {
  cond?: Maybe<Scalars['String']>;
  group?: Maybe<Array<Scalars['String']>>;
  groupCond?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<_SortCriterionSpecification>>;
  distinct?: Maybe<Scalars['Boolean']>;
};


export type _QuerySelectionByWorkTypeArgs = {
  cond?: Maybe<Scalars['String']>;
  group?: Maybe<Array<Scalars['String']>>;
  groupCond?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<_SortCriterionSpecification>>;
  distinct?: Maybe<Scalars['Boolean']>;
};


export type _QuerySelectionByWorkTypeMaterialArgs = {
  cond?: Maybe<Scalars['String']>;
  group?: Maybe<Array<Scalars['String']>>;
  groupCond?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<_SortCriterionSpecification>>;
  distinct?: Maybe<Scalars['Boolean']>;
};


export type _QuerySelectionByMeasureArgs = {
  cond?: Maybe<Scalars['String']>;
  group?: Maybe<Array<Scalars['String']>>;
  groupCond?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<_SortCriterionSpecification>>;
  distinct?: Maybe<Scalars['Boolean']>;
};


export type _QuerySelectionByProjectArgs = {
  cond?: Maybe<Scalars['String']>;
  group?: Maybe<Array<Scalars['String']>>;
  groupCond?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<_SortCriterionSpecification>>;
  distinct?: Maybe<Scalars['Boolean']>;
};


export type _QuerySelectionByWorkGroupArgs = {
  cond?: Maybe<Scalars['String']>;
  group?: Maybe<Array<Scalars['String']>>;
  groupCond?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<_SortCriterionSpecification>>;
  distinct?: Maybe<Scalars['Boolean']>;
};


export type _QuerySelectionByWorkFactArgs = {
  cond?: Maybe<Scalars['String']>;
  group?: Maybe<Array<Scalars['String']>>;
  groupCond?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<_SortCriterionSpecification>>;
  distinct?: Maybe<Scalars['Boolean']>;
};


export type _QuerySelectionByMaterialFactArgs = {
  cond?: Maybe<Scalars['String']>;
  group?: Maybe<Array<Scalars['String']>>;
  groupCond?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<_SortCriterionSpecification>>;
  distinct?: Maybe<Scalars['Boolean']>;
};


export type _QuerySelectionByRootDictionaryArgs = {
  cond?: Maybe<Scalars['String']>;
  group?: Maybe<Array<Scalars['String']>>;
  groupCond?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<_SortCriterionSpecification>>;
  distinct?: Maybe<Scalars['Boolean']>;
};


export type _QuerySelectionBySysRootSecurityArgs = {
  cond?: Maybe<Scalars['String']>;
  group?: Maybe<Array<Scalars['String']>>;
  groupCond?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<_SortCriterionSpecification>>;
  distinct?: Maybe<Scalars['Boolean']>;
};


export type _QuerySelectionBySysAdminSettingsArgs = {
  cond?: Maybe<Scalars['String']>;
  group?: Maybe<Array<Scalars['String']>>;
  groupCond?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<_SortCriterionSpecification>>;
  distinct?: Maybe<Scalars['Boolean']>;
};


export type _QuerySelectionBySysOperationArgs = {
  cond?: Maybe<Scalars['String']>;
  group?: Maybe<Array<Scalars['String']>>;
  groupCond?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<_SortCriterionSpecification>>;
  distinct?: Maybe<Scalars['Boolean']>;
};


export type _QuerySelectionBySysCheckSelectArgs = {
  cond?: Maybe<Scalars['String']>;
  group?: Maybe<Array<Scalars['String']>>;
  groupCond?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<_SortCriterionSpecification>>;
  distinct?: Maybe<Scalars['Boolean']>;
};


export type _QuerySelectionBySysParamAdditionArgs = {
  cond?: Maybe<Scalars['String']>;
  group?: Maybe<Array<Scalars['String']>>;
  groupCond?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<_SortCriterionSpecification>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

export type _R_Material = _Reference & {
  __typename?: '_R_Material';
  entityId?: Maybe<Scalars['String']>;
  entity?: Maybe<Material>;
};

export type _R_MaterialFact = _Reference & {
  __typename?: '_R_MaterialFact';
  entityId?: Maybe<Scalars['String']>;
  entity?: Maybe<MaterialFact>;
};

export type _R_Measure = _Reference & {
  __typename?: '_R_Measure';
  entityId?: Maybe<Scalars['String']>;
  entity?: Maybe<Measure>;
};

export type _R_Project = _Reference & {
  __typename?: '_R_Project';
  entityId?: Maybe<Scalars['String']>;
  entity?: Maybe<Project>;
};

export type _R_RootDictionary = _Reference & {
  __typename?: '_R_RootDictionary';
  entityId?: Maybe<Scalars['String']>;
  entity?: Maybe<RootDictionary>;
};

export type _R_SysAdminSettings = _Reference & {
  __typename?: '_R_SysAdminSettings';
  entityId?: Maybe<Scalars['String']>;
  entity?: Maybe<SysAdminSettings>;
};

export type _R_SysCheckSelect = _Reference & {
  __typename?: '_R_SysCheckSelect';
  entityId?: Maybe<Scalars['String']>;
  entity?: Maybe<SysCheckSelect>;
};

export type _R_SysOperation = _Reference & {
  __typename?: '_R_SysOperation';
  entityId?: Maybe<Scalars['String']>;
  entity?: Maybe<SysOperation>;
};

export type _R_SysParamAddition = _Reference & {
  __typename?: '_R_SysParamAddition';
  entityId?: Maybe<Scalars['String']>;
  entity?: Maybe<SysParamAddition>;
};

export type _R_SysRootSecurity = _Reference & {
  __typename?: '_R_SysRootSecurity';
  entityId?: Maybe<Scalars['String']>;
  entity?: Maybe<SysRootSecurity>;
};

export type _R_WorkFact = _Reference & {
  __typename?: '_R_WorkFact';
  entityId?: Maybe<Scalars['String']>;
  entity?: Maybe<WorkFact>;
};

export type _R_WorkGroup = _Reference & {
  __typename?: '_R_WorkGroup';
  entityId?: Maybe<Scalars['String']>;
  entity?: Maybe<WorkGroup>;
};

export type _R_WorkType = _Reference & {
  __typename?: '_R_WorkType';
  entityId?: Maybe<Scalars['String']>;
  entity?: Maybe<WorkType>;
};

export type _R_WorkTypeMaterial = _Reference & {
  __typename?: '_R_WorkTypeMaterial';
  entityId?: Maybe<Scalars['String']>;
  entity?: Maybe<WorkTypeMaterial>;
};

export type _Reference = {
  entityId?: Maybe<Scalars['String']>;
};

export type _Sec_Material = {
  __typename?: '_SEC_Material';
  elems: Array<_Se_Material>;
  count: Scalars['Int'];
};

export type _Sec_MaterialFact = {
  __typename?: '_SEC_MaterialFact';
  elems: Array<_Se_MaterialFact>;
  count: Scalars['Int'];
};

export type _Sec_Measure = {
  __typename?: '_SEC_Measure';
  elems: Array<_Se_Measure>;
  count: Scalars['Int'];
};

export type _Sec_Project = {
  __typename?: '_SEC_Project';
  elems: Array<_Se_Project>;
  count: Scalars['Int'];
};

export type _Sec_RootDictionary = {
  __typename?: '_SEC_RootDictionary';
  elems: Array<_Se_RootDictionary>;
  count: Scalars['Int'];
};

export type _Sec_SysAdminSettings = {
  __typename?: '_SEC_SysAdminSettings';
  elems: Array<_Se_SysAdminSettings>;
  count: Scalars['Int'];
};

export type _Sec_SysCheckSelect = {
  __typename?: '_SEC_SysCheckSelect';
  elems: Array<_Se_SysCheckSelect>;
  count: Scalars['Int'];
};

export type _Sec_SysOperation = {
  __typename?: '_SEC_SysOperation';
  elems: Array<_Se_SysOperation>;
  count: Scalars['Int'];
};

export type _Sec_SysParamAddition = {
  __typename?: '_SEC_SysParamAddition';
  elems: Array<_Se_SysParamAddition>;
  count: Scalars['Int'];
};

export type _Sec_SysRootSecurity = {
  __typename?: '_SEC_SysRootSecurity';
  elems: Array<_Se_SysRootSecurity>;
  count: Scalars['Int'];
};

export type _Sec_WorkFact = {
  __typename?: '_SEC_WorkFact';
  elems: Array<_Se_WorkFact>;
  count: Scalars['Int'];
};

export type _Sec_WorkGroup = {
  __typename?: '_SEC_WorkGroup';
  elems: Array<_Se_WorkGroup>;
  count: Scalars['Int'];
};

export type _Sec_WorkType = {
  __typename?: '_SEC_WorkType';
  elems: Array<_Se_WorkType>;
  count: Scalars['Int'];
};

export type _Sec_WorkTypeMaterial = {
  __typename?: '_SEC_WorkTypeMaterial';
  elems: Array<_Se_WorkTypeMaterial>;
  count: Scalars['Int'];
};

export type _Se_Material = {
  __typename?: '_SE_Material';
  id: Scalars['ID'];
  aggVersion: Scalars['Long'];
  name?: Maybe<Scalars['String']>;
  type: Scalars['String'];
  _getChar?: Maybe<Scalars['Char']>;
  _getString?: Maybe<Scalars['String']>;
  _getByte?: Maybe<Scalars['Byte']>;
  _getShort?: Maybe<Scalars['Short']>;
  _getInt?: Maybe<Scalars['Int']>;
  _getLong?: Maybe<Scalars['Long']>;
  _getFloat?: Maybe<Scalars['_Float4']>;
  _getDouble?: Maybe<Scalars['Float']>;
  _getBigDecimal?: Maybe<Scalars['BigDecimal']>;
  _getDate?: Maybe<Scalars['_Date']>;
  _getDateTime?: Maybe<Scalars['_DateTime']>;
  _getOffsetDateTime?: Maybe<Scalars['_OffsetDateTime']>;
  _getBoolean?: Maybe<Scalars['Boolean']>;
  _getByteArray?: Maybe<Scalars['_ByteArray']>;
};


export type _Se_Material_GetCharArgs = {
  expression: Scalars['String'];
};


export type _Se_Material_GetStringArgs = {
  expression: Scalars['String'];
};


export type _Se_Material_GetByteArgs = {
  expression: Scalars['String'];
};


export type _Se_Material_GetShortArgs = {
  expression: Scalars['String'];
};


export type _Se_Material_GetIntArgs = {
  expression: Scalars['String'];
};


export type _Se_Material_GetLongArgs = {
  expression: Scalars['String'];
};


export type _Se_Material_GetFloatArgs = {
  expression: Scalars['String'];
};


export type _Se_Material_GetDoubleArgs = {
  expression: Scalars['String'];
};


export type _Se_Material_GetBigDecimalArgs = {
  expression: Scalars['String'];
};


export type _Se_Material_GetDateArgs = {
  expression: Scalars['String'];
};


export type _Se_Material_GetDateTimeArgs = {
  expression: Scalars['String'];
};


export type _Se_Material_GetOffsetDateTimeArgs = {
  expression: Scalars['String'];
};


export type _Se_Material_GetBooleanArgs = {
  expression: Scalars['String'];
};


export type _Se_Material_GetByteArrayArgs = {
  expression: Scalars['String'];
};

export type _Se_MaterialFact = {
  __typename?: '_SE_MaterialFact';
  id: Scalars['ID'];
  aggVersion: Scalars['Long'];
  chgCnt?: Maybe<Scalars['Long']>;
  lastChangeDate?: Maybe<Scalars['_DateTime']>;
  count?: Maybe<Scalars['BigDecimal']>;
  type: Scalars['String'];
  _getChar?: Maybe<Scalars['Char']>;
  _getString?: Maybe<Scalars['String']>;
  _getByte?: Maybe<Scalars['Byte']>;
  _getShort?: Maybe<Scalars['Short']>;
  _getInt?: Maybe<Scalars['Int']>;
  _getLong?: Maybe<Scalars['Long']>;
  _getFloat?: Maybe<Scalars['_Float4']>;
  _getDouble?: Maybe<Scalars['Float']>;
  _getBigDecimal?: Maybe<Scalars['BigDecimal']>;
  _getDate?: Maybe<Scalars['_Date']>;
  _getDateTime?: Maybe<Scalars['_DateTime']>;
  _getOffsetDateTime?: Maybe<Scalars['_OffsetDateTime']>;
  _getBoolean?: Maybe<Scalars['Boolean']>;
  _getByteArray?: Maybe<Scalars['_ByteArray']>;
};


export type _Se_MaterialFact_GetCharArgs = {
  expression: Scalars['String'];
};


export type _Se_MaterialFact_GetStringArgs = {
  expression: Scalars['String'];
};


export type _Se_MaterialFact_GetByteArgs = {
  expression: Scalars['String'];
};


export type _Se_MaterialFact_GetShortArgs = {
  expression: Scalars['String'];
};


export type _Se_MaterialFact_GetIntArgs = {
  expression: Scalars['String'];
};


export type _Se_MaterialFact_GetLongArgs = {
  expression: Scalars['String'];
};


export type _Se_MaterialFact_GetFloatArgs = {
  expression: Scalars['String'];
};


export type _Se_MaterialFact_GetDoubleArgs = {
  expression: Scalars['String'];
};


export type _Se_MaterialFact_GetBigDecimalArgs = {
  expression: Scalars['String'];
};


export type _Se_MaterialFact_GetDateArgs = {
  expression: Scalars['String'];
};


export type _Se_MaterialFact_GetDateTimeArgs = {
  expression: Scalars['String'];
};


export type _Se_MaterialFact_GetOffsetDateTimeArgs = {
  expression: Scalars['String'];
};


export type _Se_MaterialFact_GetBooleanArgs = {
  expression: Scalars['String'];
};


export type _Se_MaterialFact_GetByteArrayArgs = {
  expression: Scalars['String'];
};

export type _Se_Measure = {
  __typename?: '_SE_Measure';
  id: Scalars['ID'];
  aggVersion: Scalars['Long'];
  name?: Maybe<Scalars['String']>;
  type: Scalars['String'];
  _getChar?: Maybe<Scalars['Char']>;
  _getString?: Maybe<Scalars['String']>;
  _getByte?: Maybe<Scalars['Byte']>;
  _getShort?: Maybe<Scalars['Short']>;
  _getInt?: Maybe<Scalars['Int']>;
  _getLong?: Maybe<Scalars['Long']>;
  _getFloat?: Maybe<Scalars['_Float4']>;
  _getDouble?: Maybe<Scalars['Float']>;
  _getBigDecimal?: Maybe<Scalars['BigDecimal']>;
  _getDate?: Maybe<Scalars['_Date']>;
  _getDateTime?: Maybe<Scalars['_DateTime']>;
  _getOffsetDateTime?: Maybe<Scalars['_OffsetDateTime']>;
  _getBoolean?: Maybe<Scalars['Boolean']>;
  _getByteArray?: Maybe<Scalars['_ByteArray']>;
};


export type _Se_Measure_GetCharArgs = {
  expression: Scalars['String'];
};


export type _Se_Measure_GetStringArgs = {
  expression: Scalars['String'];
};


export type _Se_Measure_GetByteArgs = {
  expression: Scalars['String'];
};


export type _Se_Measure_GetShortArgs = {
  expression: Scalars['String'];
};


export type _Se_Measure_GetIntArgs = {
  expression: Scalars['String'];
};


export type _Se_Measure_GetLongArgs = {
  expression: Scalars['String'];
};


export type _Se_Measure_GetFloatArgs = {
  expression: Scalars['String'];
};


export type _Se_Measure_GetDoubleArgs = {
  expression: Scalars['String'];
};


export type _Se_Measure_GetBigDecimalArgs = {
  expression: Scalars['String'];
};


export type _Se_Measure_GetDateArgs = {
  expression: Scalars['String'];
};


export type _Se_Measure_GetDateTimeArgs = {
  expression: Scalars['String'];
};


export type _Se_Measure_GetOffsetDateTimeArgs = {
  expression: Scalars['String'];
};


export type _Se_Measure_GetBooleanArgs = {
  expression: Scalars['String'];
};


export type _Se_Measure_GetByteArrayArgs = {
  expression: Scalars['String'];
};

export type _Se_Project = {
  __typename?: '_SE_Project';
  id: Scalars['ID'];
  aggVersion: Scalars['Long'];
  chgCnt?: Maybe<Scalars['Long']>;
  lastChangeDate?: Maybe<Scalars['_DateTime']>;
  name?: Maybe<Scalars['String']>;
  openDate?: Maybe<Scalars['_Date']>;
  closeDate?: Maybe<Scalars['_Date']>;
  descr?: Maybe<Scalars['String']>;
  type: Scalars['String'];
  _getChar?: Maybe<Scalars['Char']>;
  _getString?: Maybe<Scalars['String']>;
  _getByte?: Maybe<Scalars['Byte']>;
  _getShort?: Maybe<Scalars['Short']>;
  _getInt?: Maybe<Scalars['Int']>;
  _getLong?: Maybe<Scalars['Long']>;
  _getFloat?: Maybe<Scalars['_Float4']>;
  _getDouble?: Maybe<Scalars['Float']>;
  _getBigDecimal?: Maybe<Scalars['BigDecimal']>;
  _getDate?: Maybe<Scalars['_Date']>;
  _getDateTime?: Maybe<Scalars['_DateTime']>;
  _getOffsetDateTime?: Maybe<Scalars['_OffsetDateTime']>;
  _getBoolean?: Maybe<Scalars['Boolean']>;
  _getByteArray?: Maybe<Scalars['_ByteArray']>;
};


export type _Se_Project_GetCharArgs = {
  expression: Scalars['String'];
};


export type _Se_Project_GetStringArgs = {
  expression: Scalars['String'];
};


export type _Se_Project_GetByteArgs = {
  expression: Scalars['String'];
};


export type _Se_Project_GetShortArgs = {
  expression: Scalars['String'];
};


export type _Se_Project_GetIntArgs = {
  expression: Scalars['String'];
};


export type _Se_Project_GetLongArgs = {
  expression: Scalars['String'];
};


export type _Se_Project_GetFloatArgs = {
  expression: Scalars['String'];
};


export type _Se_Project_GetDoubleArgs = {
  expression: Scalars['String'];
};


export type _Se_Project_GetBigDecimalArgs = {
  expression: Scalars['String'];
};


export type _Se_Project_GetDateArgs = {
  expression: Scalars['String'];
};


export type _Se_Project_GetDateTimeArgs = {
  expression: Scalars['String'];
};


export type _Se_Project_GetOffsetDateTimeArgs = {
  expression: Scalars['String'];
};


export type _Se_Project_GetBooleanArgs = {
  expression: Scalars['String'];
};


export type _Se_Project_GetByteArrayArgs = {
  expression: Scalars['String'];
};

export type _Se_RootDictionary = {
  __typename?: '_SE_RootDictionary';
  id: Scalars['ID'];
  aggVersion: Scalars['Long'];
  type: Scalars['String'];
  _getChar?: Maybe<Scalars['Char']>;
  _getString?: Maybe<Scalars['String']>;
  _getByte?: Maybe<Scalars['Byte']>;
  _getShort?: Maybe<Scalars['Short']>;
  _getInt?: Maybe<Scalars['Int']>;
  _getLong?: Maybe<Scalars['Long']>;
  _getFloat?: Maybe<Scalars['_Float4']>;
  _getDouble?: Maybe<Scalars['Float']>;
  _getBigDecimal?: Maybe<Scalars['BigDecimal']>;
  _getDate?: Maybe<Scalars['_Date']>;
  _getDateTime?: Maybe<Scalars['_DateTime']>;
  _getOffsetDateTime?: Maybe<Scalars['_OffsetDateTime']>;
  _getBoolean?: Maybe<Scalars['Boolean']>;
  _getByteArray?: Maybe<Scalars['_ByteArray']>;
};


export type _Se_RootDictionary_GetCharArgs = {
  expression: Scalars['String'];
};


export type _Se_RootDictionary_GetStringArgs = {
  expression: Scalars['String'];
};


export type _Se_RootDictionary_GetByteArgs = {
  expression: Scalars['String'];
};


export type _Se_RootDictionary_GetShortArgs = {
  expression: Scalars['String'];
};


export type _Se_RootDictionary_GetIntArgs = {
  expression: Scalars['String'];
};


export type _Se_RootDictionary_GetLongArgs = {
  expression: Scalars['String'];
};


export type _Se_RootDictionary_GetFloatArgs = {
  expression: Scalars['String'];
};


export type _Se_RootDictionary_GetDoubleArgs = {
  expression: Scalars['String'];
};


export type _Se_RootDictionary_GetBigDecimalArgs = {
  expression: Scalars['String'];
};


export type _Se_RootDictionary_GetDateArgs = {
  expression: Scalars['String'];
};


export type _Se_RootDictionary_GetDateTimeArgs = {
  expression: Scalars['String'];
};


export type _Se_RootDictionary_GetOffsetDateTimeArgs = {
  expression: Scalars['String'];
};


export type _Se_RootDictionary_GetBooleanArgs = {
  expression: Scalars['String'];
};


export type _Se_RootDictionary_GetByteArrayArgs = {
  expression: Scalars['String'];
};

export type _Se_SysAdminSettings = {
  __typename?: '_SE_SysAdminSettings';
  id: Scalars['ID'];
  aggVersion: Scalars['Long'];
  chgCnt?: Maybe<Scalars['Long']>;
  lastChangeDate?: Maybe<Scalars['_DateTime']>;
  key?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
  _getChar?: Maybe<Scalars['Char']>;
  _getString?: Maybe<Scalars['String']>;
  _getByte?: Maybe<Scalars['Byte']>;
  _getShort?: Maybe<Scalars['Short']>;
  _getInt?: Maybe<Scalars['Int']>;
  _getLong?: Maybe<Scalars['Long']>;
  _getFloat?: Maybe<Scalars['_Float4']>;
  _getDouble?: Maybe<Scalars['Float']>;
  _getBigDecimal?: Maybe<Scalars['BigDecimal']>;
  _getDate?: Maybe<Scalars['_Date']>;
  _getDateTime?: Maybe<Scalars['_DateTime']>;
  _getOffsetDateTime?: Maybe<Scalars['_OffsetDateTime']>;
  _getBoolean?: Maybe<Scalars['Boolean']>;
  _getByteArray?: Maybe<Scalars['_ByteArray']>;
};


export type _Se_SysAdminSettings_GetCharArgs = {
  expression: Scalars['String'];
};


export type _Se_SysAdminSettings_GetStringArgs = {
  expression: Scalars['String'];
};


export type _Se_SysAdminSettings_GetByteArgs = {
  expression: Scalars['String'];
};


export type _Se_SysAdminSettings_GetShortArgs = {
  expression: Scalars['String'];
};


export type _Se_SysAdminSettings_GetIntArgs = {
  expression: Scalars['String'];
};


export type _Se_SysAdminSettings_GetLongArgs = {
  expression: Scalars['String'];
};


export type _Se_SysAdminSettings_GetFloatArgs = {
  expression: Scalars['String'];
};


export type _Se_SysAdminSettings_GetDoubleArgs = {
  expression: Scalars['String'];
};


export type _Se_SysAdminSettings_GetBigDecimalArgs = {
  expression: Scalars['String'];
};


export type _Se_SysAdminSettings_GetDateArgs = {
  expression: Scalars['String'];
};


export type _Se_SysAdminSettings_GetDateTimeArgs = {
  expression: Scalars['String'];
};


export type _Se_SysAdminSettings_GetOffsetDateTimeArgs = {
  expression: Scalars['String'];
};


export type _Se_SysAdminSettings_GetBooleanArgs = {
  expression: Scalars['String'];
};


export type _Se_SysAdminSettings_GetByteArrayArgs = {
  expression: Scalars['String'];
};

export type _Se_SysCheckSelect = {
  __typename?: '_SE_SysCheckSelect';
  id: Scalars['ID'];
  aggVersion: Scalars['Long'];
  chgCnt?: Maybe<Scalars['Long']>;
  lastChangeDate?: Maybe<Scalars['_DateTime']>;
  conditionValue?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  orderValue?: Maybe<Scalars['Int']>;
  typeName?: Maybe<Scalars['String']>;
  _getChar?: Maybe<Scalars['Char']>;
  _getString?: Maybe<Scalars['String']>;
  _getByte?: Maybe<Scalars['Byte']>;
  _getShort?: Maybe<Scalars['Short']>;
  _getInt?: Maybe<Scalars['Int']>;
  _getLong?: Maybe<Scalars['Long']>;
  _getFloat?: Maybe<Scalars['_Float4']>;
  _getDouble?: Maybe<Scalars['Float']>;
  _getBigDecimal?: Maybe<Scalars['BigDecimal']>;
  _getDate?: Maybe<Scalars['_Date']>;
  _getDateTime?: Maybe<Scalars['_DateTime']>;
  _getOffsetDateTime?: Maybe<Scalars['_OffsetDateTime']>;
  _getBoolean?: Maybe<Scalars['Boolean']>;
  _getByteArray?: Maybe<Scalars['_ByteArray']>;
};


export type _Se_SysCheckSelect_GetCharArgs = {
  expression: Scalars['String'];
};


export type _Se_SysCheckSelect_GetStringArgs = {
  expression: Scalars['String'];
};


export type _Se_SysCheckSelect_GetByteArgs = {
  expression: Scalars['String'];
};


export type _Se_SysCheckSelect_GetShortArgs = {
  expression: Scalars['String'];
};


export type _Se_SysCheckSelect_GetIntArgs = {
  expression: Scalars['String'];
};


export type _Se_SysCheckSelect_GetLongArgs = {
  expression: Scalars['String'];
};


export type _Se_SysCheckSelect_GetFloatArgs = {
  expression: Scalars['String'];
};


export type _Se_SysCheckSelect_GetDoubleArgs = {
  expression: Scalars['String'];
};


export type _Se_SysCheckSelect_GetBigDecimalArgs = {
  expression: Scalars['String'];
};


export type _Se_SysCheckSelect_GetDateArgs = {
  expression: Scalars['String'];
};


export type _Se_SysCheckSelect_GetDateTimeArgs = {
  expression: Scalars['String'];
};


export type _Se_SysCheckSelect_GetOffsetDateTimeArgs = {
  expression: Scalars['String'];
};


export type _Se_SysCheckSelect_GetBooleanArgs = {
  expression: Scalars['String'];
};


export type _Se_SysCheckSelect_GetByteArrayArgs = {
  expression: Scalars['String'];
};

export type _Se_SysOperation = {
  __typename?: '_SE_SysOperation';
  id: Scalars['ID'];
  aggVersion: Scalars['Long'];
  chgCnt?: Maybe<Scalars['Long']>;
  lastChangeDate?: Maybe<Scalars['_DateTime']>;
  allowEmptyChecks?: Maybe<Scalars['Boolean']>;
  body?: Maybe<Scalars['String']>;
  disableJwtVerification?: Maybe<Scalars['Boolean']>;
  hashValue?: Maybe<Scalars['String']>;
  _getChar?: Maybe<Scalars['Char']>;
  _getString?: Maybe<Scalars['String']>;
  _getByte?: Maybe<Scalars['Byte']>;
  _getShort?: Maybe<Scalars['Short']>;
  _getInt?: Maybe<Scalars['Int']>;
  _getLong?: Maybe<Scalars['Long']>;
  _getFloat?: Maybe<Scalars['_Float4']>;
  _getDouble?: Maybe<Scalars['Float']>;
  _getBigDecimal?: Maybe<Scalars['BigDecimal']>;
  _getDate?: Maybe<Scalars['_Date']>;
  _getDateTime?: Maybe<Scalars['_DateTime']>;
  _getOffsetDateTime?: Maybe<Scalars['_OffsetDateTime']>;
  _getBoolean?: Maybe<Scalars['Boolean']>;
  _getByteArray?: Maybe<Scalars['_ByteArray']>;
};


export type _Se_SysOperation_GetCharArgs = {
  expression: Scalars['String'];
};


export type _Se_SysOperation_GetStringArgs = {
  expression: Scalars['String'];
};


export type _Se_SysOperation_GetByteArgs = {
  expression: Scalars['String'];
};


export type _Se_SysOperation_GetShortArgs = {
  expression: Scalars['String'];
};


export type _Se_SysOperation_GetIntArgs = {
  expression: Scalars['String'];
};


export type _Se_SysOperation_GetLongArgs = {
  expression: Scalars['String'];
};


export type _Se_SysOperation_GetFloatArgs = {
  expression: Scalars['String'];
};


export type _Se_SysOperation_GetDoubleArgs = {
  expression: Scalars['String'];
};


export type _Se_SysOperation_GetBigDecimalArgs = {
  expression: Scalars['String'];
};


export type _Se_SysOperation_GetDateArgs = {
  expression: Scalars['String'];
};


export type _Se_SysOperation_GetDateTimeArgs = {
  expression: Scalars['String'];
};


export type _Se_SysOperation_GetOffsetDateTimeArgs = {
  expression: Scalars['String'];
};


export type _Se_SysOperation_GetBooleanArgs = {
  expression: Scalars['String'];
};


export type _Se_SysOperation_GetByteArrayArgs = {
  expression: Scalars['String'];
};

export type _Se_SysParamAddition = {
  __typename?: '_SE_SysParamAddition';
  id: Scalars['ID'];
  aggVersion: Scalars['Long'];
  chgCnt?: Maybe<Scalars['Long']>;
  lastChangeDate?: Maybe<Scalars['_DateTime']>;
  paramAddition?: Maybe<Scalars['String']>;
  paramName?: Maybe<Scalars['String']>;
  _getChar?: Maybe<Scalars['Char']>;
  _getString?: Maybe<Scalars['String']>;
  _getByte?: Maybe<Scalars['Byte']>;
  _getShort?: Maybe<Scalars['Short']>;
  _getInt?: Maybe<Scalars['Int']>;
  _getLong?: Maybe<Scalars['Long']>;
  _getFloat?: Maybe<Scalars['_Float4']>;
  _getDouble?: Maybe<Scalars['Float']>;
  _getBigDecimal?: Maybe<Scalars['BigDecimal']>;
  _getDate?: Maybe<Scalars['_Date']>;
  _getDateTime?: Maybe<Scalars['_DateTime']>;
  _getOffsetDateTime?: Maybe<Scalars['_OffsetDateTime']>;
  _getBoolean?: Maybe<Scalars['Boolean']>;
  _getByteArray?: Maybe<Scalars['_ByteArray']>;
};


export type _Se_SysParamAddition_GetCharArgs = {
  expression: Scalars['String'];
};


export type _Se_SysParamAddition_GetStringArgs = {
  expression: Scalars['String'];
};


export type _Se_SysParamAddition_GetByteArgs = {
  expression: Scalars['String'];
};


export type _Se_SysParamAddition_GetShortArgs = {
  expression: Scalars['String'];
};


export type _Se_SysParamAddition_GetIntArgs = {
  expression: Scalars['String'];
};


export type _Se_SysParamAddition_GetLongArgs = {
  expression: Scalars['String'];
};


export type _Se_SysParamAddition_GetFloatArgs = {
  expression: Scalars['String'];
};


export type _Se_SysParamAddition_GetDoubleArgs = {
  expression: Scalars['String'];
};


export type _Se_SysParamAddition_GetBigDecimalArgs = {
  expression: Scalars['String'];
};


export type _Se_SysParamAddition_GetDateArgs = {
  expression: Scalars['String'];
};


export type _Se_SysParamAddition_GetDateTimeArgs = {
  expression: Scalars['String'];
};


export type _Se_SysParamAddition_GetOffsetDateTimeArgs = {
  expression: Scalars['String'];
};


export type _Se_SysParamAddition_GetBooleanArgs = {
  expression: Scalars['String'];
};


export type _Se_SysParamAddition_GetByteArrayArgs = {
  expression: Scalars['String'];
};

export type _Se_SysRootSecurity = {
  __typename?: '_SE_SysRootSecurity';
  id: Scalars['ID'];
  aggVersion: Scalars['Long'];
  chgCnt?: Maybe<Scalars['Long']>;
  lastChangeDate?: Maybe<Scalars['_DateTime']>;
  type: Scalars['String'];
  _getChar?: Maybe<Scalars['Char']>;
  _getString?: Maybe<Scalars['String']>;
  _getByte?: Maybe<Scalars['Byte']>;
  _getShort?: Maybe<Scalars['Short']>;
  _getInt?: Maybe<Scalars['Int']>;
  _getLong?: Maybe<Scalars['Long']>;
  _getFloat?: Maybe<Scalars['_Float4']>;
  _getDouble?: Maybe<Scalars['Float']>;
  _getBigDecimal?: Maybe<Scalars['BigDecimal']>;
  _getDate?: Maybe<Scalars['_Date']>;
  _getDateTime?: Maybe<Scalars['_DateTime']>;
  _getOffsetDateTime?: Maybe<Scalars['_OffsetDateTime']>;
  _getBoolean?: Maybe<Scalars['Boolean']>;
  _getByteArray?: Maybe<Scalars['_ByteArray']>;
};


export type _Se_SysRootSecurity_GetCharArgs = {
  expression: Scalars['String'];
};


export type _Se_SysRootSecurity_GetStringArgs = {
  expression: Scalars['String'];
};


export type _Se_SysRootSecurity_GetByteArgs = {
  expression: Scalars['String'];
};


export type _Se_SysRootSecurity_GetShortArgs = {
  expression: Scalars['String'];
};


export type _Se_SysRootSecurity_GetIntArgs = {
  expression: Scalars['String'];
};


export type _Se_SysRootSecurity_GetLongArgs = {
  expression: Scalars['String'];
};


export type _Se_SysRootSecurity_GetFloatArgs = {
  expression: Scalars['String'];
};


export type _Se_SysRootSecurity_GetDoubleArgs = {
  expression: Scalars['String'];
};


export type _Se_SysRootSecurity_GetBigDecimalArgs = {
  expression: Scalars['String'];
};


export type _Se_SysRootSecurity_GetDateArgs = {
  expression: Scalars['String'];
};


export type _Se_SysRootSecurity_GetDateTimeArgs = {
  expression: Scalars['String'];
};


export type _Se_SysRootSecurity_GetOffsetDateTimeArgs = {
  expression: Scalars['String'];
};


export type _Se_SysRootSecurity_GetBooleanArgs = {
  expression: Scalars['String'];
};


export type _Se_SysRootSecurity_GetByteArrayArgs = {
  expression: Scalars['String'];
};

export type _Se_WorkFact = {
  __typename?: '_SE_WorkFact';
  id: Scalars['ID'];
  aggVersion: Scalars['Long'];
  chgCnt?: Maybe<Scalars['Long']>;
  lastChangeDate?: Maybe<Scalars['_DateTime']>;
  count?: Maybe<Scalars['BigDecimal']>;
  orderInGroup?: Maybe<Scalars['Int']>;
  type: Scalars['String'];
  _getChar?: Maybe<Scalars['Char']>;
  _getString?: Maybe<Scalars['String']>;
  _getByte?: Maybe<Scalars['Byte']>;
  _getShort?: Maybe<Scalars['Short']>;
  _getInt?: Maybe<Scalars['Int']>;
  _getLong?: Maybe<Scalars['Long']>;
  _getFloat?: Maybe<Scalars['_Float4']>;
  _getDouble?: Maybe<Scalars['Float']>;
  _getBigDecimal?: Maybe<Scalars['BigDecimal']>;
  _getDate?: Maybe<Scalars['_Date']>;
  _getDateTime?: Maybe<Scalars['_DateTime']>;
  _getOffsetDateTime?: Maybe<Scalars['_OffsetDateTime']>;
  _getBoolean?: Maybe<Scalars['Boolean']>;
  _getByteArray?: Maybe<Scalars['_ByteArray']>;
};


export type _Se_WorkFact_GetCharArgs = {
  expression: Scalars['String'];
};


export type _Se_WorkFact_GetStringArgs = {
  expression: Scalars['String'];
};


export type _Se_WorkFact_GetByteArgs = {
  expression: Scalars['String'];
};


export type _Se_WorkFact_GetShortArgs = {
  expression: Scalars['String'];
};


export type _Se_WorkFact_GetIntArgs = {
  expression: Scalars['String'];
};


export type _Se_WorkFact_GetLongArgs = {
  expression: Scalars['String'];
};


export type _Se_WorkFact_GetFloatArgs = {
  expression: Scalars['String'];
};


export type _Se_WorkFact_GetDoubleArgs = {
  expression: Scalars['String'];
};


export type _Se_WorkFact_GetBigDecimalArgs = {
  expression: Scalars['String'];
};


export type _Se_WorkFact_GetDateArgs = {
  expression: Scalars['String'];
};


export type _Se_WorkFact_GetDateTimeArgs = {
  expression: Scalars['String'];
};


export type _Se_WorkFact_GetOffsetDateTimeArgs = {
  expression: Scalars['String'];
};


export type _Se_WorkFact_GetBooleanArgs = {
  expression: Scalars['String'];
};


export type _Se_WorkFact_GetByteArrayArgs = {
  expression: Scalars['String'];
};

export type _Se_WorkGroup = {
  __typename?: '_SE_WorkGroup';
  id: Scalars['ID'];
  aggVersion: Scalars['Long'];
  chgCnt?: Maybe<Scalars['Long']>;
  lastChangeDate?: Maybe<Scalars['_DateTime']>;
  descr?: Maybe<Scalars['String']>;
  type: Scalars['String'];
  _getChar?: Maybe<Scalars['Char']>;
  _getString?: Maybe<Scalars['String']>;
  _getByte?: Maybe<Scalars['Byte']>;
  _getShort?: Maybe<Scalars['Short']>;
  _getInt?: Maybe<Scalars['Int']>;
  _getLong?: Maybe<Scalars['Long']>;
  _getFloat?: Maybe<Scalars['_Float4']>;
  _getDouble?: Maybe<Scalars['Float']>;
  _getBigDecimal?: Maybe<Scalars['BigDecimal']>;
  _getDate?: Maybe<Scalars['_Date']>;
  _getDateTime?: Maybe<Scalars['_DateTime']>;
  _getOffsetDateTime?: Maybe<Scalars['_OffsetDateTime']>;
  _getBoolean?: Maybe<Scalars['Boolean']>;
  _getByteArray?: Maybe<Scalars['_ByteArray']>;
};


export type _Se_WorkGroup_GetCharArgs = {
  expression: Scalars['String'];
};


export type _Se_WorkGroup_GetStringArgs = {
  expression: Scalars['String'];
};


export type _Se_WorkGroup_GetByteArgs = {
  expression: Scalars['String'];
};


export type _Se_WorkGroup_GetShortArgs = {
  expression: Scalars['String'];
};


export type _Se_WorkGroup_GetIntArgs = {
  expression: Scalars['String'];
};


export type _Se_WorkGroup_GetLongArgs = {
  expression: Scalars['String'];
};


export type _Se_WorkGroup_GetFloatArgs = {
  expression: Scalars['String'];
};


export type _Se_WorkGroup_GetDoubleArgs = {
  expression: Scalars['String'];
};


export type _Se_WorkGroup_GetBigDecimalArgs = {
  expression: Scalars['String'];
};


export type _Se_WorkGroup_GetDateArgs = {
  expression: Scalars['String'];
};


export type _Se_WorkGroup_GetDateTimeArgs = {
  expression: Scalars['String'];
};


export type _Se_WorkGroup_GetOffsetDateTimeArgs = {
  expression: Scalars['String'];
};


export type _Se_WorkGroup_GetBooleanArgs = {
  expression: Scalars['String'];
};


export type _Se_WorkGroup_GetByteArrayArgs = {
  expression: Scalars['String'];
};

export type _Se_WorkType = {
  __typename?: '_SE_WorkType';
  id: Scalars['ID'];
  aggVersion: Scalars['Long'];
  name?: Maybe<Scalars['String']>;
  type: Scalars['String'];
  _getChar?: Maybe<Scalars['Char']>;
  _getString?: Maybe<Scalars['String']>;
  _getByte?: Maybe<Scalars['Byte']>;
  _getShort?: Maybe<Scalars['Short']>;
  _getInt?: Maybe<Scalars['Int']>;
  _getLong?: Maybe<Scalars['Long']>;
  _getFloat?: Maybe<Scalars['_Float4']>;
  _getDouble?: Maybe<Scalars['Float']>;
  _getBigDecimal?: Maybe<Scalars['BigDecimal']>;
  _getDate?: Maybe<Scalars['_Date']>;
  _getDateTime?: Maybe<Scalars['_DateTime']>;
  _getOffsetDateTime?: Maybe<Scalars['_OffsetDateTime']>;
  _getBoolean?: Maybe<Scalars['Boolean']>;
  _getByteArray?: Maybe<Scalars['_ByteArray']>;
};


export type _Se_WorkType_GetCharArgs = {
  expression: Scalars['String'];
};


export type _Se_WorkType_GetStringArgs = {
  expression: Scalars['String'];
};


export type _Se_WorkType_GetByteArgs = {
  expression: Scalars['String'];
};


export type _Se_WorkType_GetShortArgs = {
  expression: Scalars['String'];
};


export type _Se_WorkType_GetIntArgs = {
  expression: Scalars['String'];
};


export type _Se_WorkType_GetLongArgs = {
  expression: Scalars['String'];
};


export type _Se_WorkType_GetFloatArgs = {
  expression: Scalars['String'];
};


export type _Se_WorkType_GetDoubleArgs = {
  expression: Scalars['String'];
};


export type _Se_WorkType_GetBigDecimalArgs = {
  expression: Scalars['String'];
};


export type _Se_WorkType_GetDateArgs = {
  expression: Scalars['String'];
};


export type _Se_WorkType_GetDateTimeArgs = {
  expression: Scalars['String'];
};


export type _Se_WorkType_GetOffsetDateTimeArgs = {
  expression: Scalars['String'];
};


export type _Se_WorkType_GetBooleanArgs = {
  expression: Scalars['String'];
};


export type _Se_WorkType_GetByteArrayArgs = {
  expression: Scalars['String'];
};

export type _Se_WorkTypeMaterial = {
  __typename?: '_SE_WorkTypeMaterial';
  id: Scalars['ID'];
  aggVersion: Scalars['Long'];
  formula?: Maybe<Scalars['String']>;
  type: Scalars['String'];
  _getChar?: Maybe<Scalars['Char']>;
  _getString?: Maybe<Scalars['String']>;
  _getByte?: Maybe<Scalars['Byte']>;
  _getShort?: Maybe<Scalars['Short']>;
  _getInt?: Maybe<Scalars['Int']>;
  _getLong?: Maybe<Scalars['Long']>;
  _getFloat?: Maybe<Scalars['_Float4']>;
  _getDouble?: Maybe<Scalars['Float']>;
  _getBigDecimal?: Maybe<Scalars['BigDecimal']>;
  _getDate?: Maybe<Scalars['_Date']>;
  _getDateTime?: Maybe<Scalars['_DateTime']>;
  _getOffsetDateTime?: Maybe<Scalars['_OffsetDateTime']>;
  _getBoolean?: Maybe<Scalars['Boolean']>;
  _getByteArray?: Maybe<Scalars['_ByteArray']>;
};


export type _Se_WorkTypeMaterial_GetCharArgs = {
  expression: Scalars['String'];
};


export type _Se_WorkTypeMaterial_GetStringArgs = {
  expression: Scalars['String'];
};


export type _Se_WorkTypeMaterial_GetByteArgs = {
  expression: Scalars['String'];
};


export type _Se_WorkTypeMaterial_GetShortArgs = {
  expression: Scalars['String'];
};


export type _Se_WorkTypeMaterial_GetIntArgs = {
  expression: Scalars['String'];
};


export type _Se_WorkTypeMaterial_GetLongArgs = {
  expression: Scalars['String'];
};


export type _Se_WorkTypeMaterial_GetFloatArgs = {
  expression: Scalars['String'];
};


export type _Se_WorkTypeMaterial_GetDoubleArgs = {
  expression: Scalars['String'];
};


export type _Se_WorkTypeMaterial_GetBigDecimalArgs = {
  expression: Scalars['String'];
};


export type _Se_WorkTypeMaterial_GetDateArgs = {
  expression: Scalars['String'];
};


export type _Se_WorkTypeMaterial_GetDateTimeArgs = {
  expression: Scalars['String'];
};


export type _Se_WorkTypeMaterial_GetOffsetDateTimeArgs = {
  expression: Scalars['String'];
};


export type _Se_WorkTypeMaterial_GetBooleanArgs = {
  expression: Scalars['String'];
};


export type _Se_WorkTypeMaterial_GetByteArrayArgs = {
  expression: Scalars['String'];
};

export type _SortCriterionSpecification = {
  crit: Scalars['String'];
  order?: _SortOrder;
  nullsLast?: Maybe<Scalars['Boolean']>;
};

export enum _SortOrder {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type _UpdateManyMaterialFactInput = {
  param: _UpdateMaterialFactInput;
  inc?: Maybe<_IncMaterialFactInput>;
};

export type _UpdateManyProjectInput = {
  param: _UpdateProjectInput;
  compare?: Maybe<_CompareProjectInput>;
};

export type _UpdateManyWorkFactInput = {
  param: _UpdateWorkFactInput;
  compare?: Maybe<_CompareWorkFactInput>;
  inc?: Maybe<_IncWorkFactInput>;
};

export type _UpdateManyWorkGroupInput = {
  param: _UpdateWorkGroupInput;
  compare?: Maybe<_CompareWorkGroupInput>;
};

export type _UpdateMaterialFactInput = {
  workFact?: Maybe<Scalars['ID']>;
  material?: Maybe<Scalars['ID']>;
  price?: Maybe<_PriceInput>;
  count?: Maybe<Scalars['BigDecimal']>;
  id: Scalars['ID'];
};

export type _UpdateOrCreateManyResponse = {
  __typename?: '_UpdateOrCreateManyResponse';
  id?: Maybe<Scalars['ID']>;
  created?: Maybe<Scalars['Boolean']>;
};

export type _UpdateOrCreateMaterialResponse = {
  __typename?: '_UpdateOrCreateMaterialResponse';
  created?: Maybe<Scalars['Boolean']>;
  returning?: Maybe<Material>;
};

export type _UpdateOrCreateMeasureResponse = {
  __typename?: '_UpdateOrCreateMeasureResponse';
  created?: Maybe<Scalars['Boolean']>;
  returning?: Maybe<Measure>;
};

export type _UpdateOrCreateWorkTypeMaterialResponse = {
  __typename?: '_UpdateOrCreateWorkTypeMaterialResponse';
  created?: Maybe<Scalars['Boolean']>;
  returning?: Maybe<WorkTypeMaterial>;
};

export type _UpdateOrCreateWorkTypeResponse = {
  __typename?: '_UpdateOrCreateWorkTypeResponse';
  created?: Maybe<Scalars['Boolean']>;
  returning?: Maybe<WorkType>;
};

export type _UpdateProjectInput = {
  closeDate?: Maybe<Scalars['_Date']>;
  descr?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  openDate?: Maybe<Scalars['_Date']>;
  id: Scalars['ID'];
};

export type _UpdateWorkFactInput = {
  orderInGroup?: Maybe<Scalars['Int']>;
  workGroup?: Maybe<Scalars['ID']>;
  price?: Maybe<_PriceInput>;
  workType?: Maybe<Scalars['ID']>;
  count?: Maybe<Scalars['BigDecimal']>;
  id: Scalars['ID'];
};

export type _UpdateWorkGroupInput = {
  descr?: Maybe<Scalars['String']>;
  project?: Maybe<Scalars['ID']>;
  id: Scalars['ID'];
};

export type MeasureAttributesFragment = (
  { __typename: '_E_Measure' }
  & Pick<_E_Measure, 'id' | 'name'>
);

export type SearchMeasureQueryVariables = Exact<{
  cond?: Maybe<Scalars['String']>;
}>;


export type SearchMeasureQuery = (
  { __typename?: '_Query' }
  & { searchMeasure: (
    { __typename?: '_EC_Measure' }
    & { elems: Array<(
      { __typename?: '_E_Measure' }
      & MeasureAttributesFragment
    )> }
  ) }
);

export const MeasureAttributesFragmentDoc = gql`
    fragment MeasureAttributes on _E_Measure {
  id
  __typename
  name
}
    `;
export const SearchMeasureDocument = gql`
    query searchMeasure($cond: String) {
  searchMeasure(cond: $cond) {
    elems {
      ...MeasureAttributes
    }
  }
}
    ${MeasureAttributesFragmentDoc}`;

/**
 * __useSearchMeasureQuery__
 *
 * To run a query within a React component, call `useSearchMeasureQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchMeasureQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchMeasureQuery({
 *   variables: {
 *      cond: // value for 'cond'
 *   },
 * });
 */
export function useSearchMeasureQuery(baseOptions?: Apollo.QueryHookOptions<SearchMeasureQuery, SearchMeasureQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SearchMeasureQuery, SearchMeasureQueryVariables>(SearchMeasureDocument, options);
      }
export function useSearchMeasureLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SearchMeasureQuery, SearchMeasureQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SearchMeasureQuery, SearchMeasureQueryVariables>(SearchMeasureDocument, options);
        }
export type SearchMeasureQueryHookResult = ReturnType<typeof useSearchMeasureQuery>;
export type SearchMeasureLazyQueryHookResult = ReturnType<typeof useSearchMeasureLazyQuery>;
export type SearchMeasureQueryResult = Apollo.QueryResult<SearchMeasureQuery, SearchMeasureQueryVariables>;